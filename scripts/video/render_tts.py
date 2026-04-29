"""
render_tts.py -- renders an o7citizen video script to MP3.
Cross-platform: works on Windows (local) and Linux (GitHub Actions).

Usage:
    python scripts/video/render_tts.py --patch "4.7.2" --script /tmp/script.txt --output /tmp/narration.mp3
"""

import asyncio, re, os, tempfile, subprocess, argparse, shutil
from pathlib import Path

VOICE = "en-US-AndrewNeural"
RATE = "+15%"
DEFAULT_PAUSE_MS = 200

def get_ffmpeg():
    found = shutil.which("ffmpeg")
    if found:
        return found
    win_path = Path.home() / "AppData/Local/Microsoft/WinGet/Packages/Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe/ffmpeg-8.1-full_build/bin/ffmpeg.exe"
    if win_path.exists():
        return str(win_path)
    raise RuntimeError("ffmpeg not found. Install: winget install ffmpeg  or  sudo apt install ffmpeg")

def split_sentences(text):
    sentences = re.split(r'(?<=[.!?])\s+', text.strip())
    result = []
    for s in sentences:
        parts = [p.strip() for p in s.split('\n\n') if p.strip()]
        result.extend(parts)
    return [s for s in result if s]

async def render_sentence(sentence, path):
    import edge_tts
    communicate = edge_tts.Communicate(sentence, VOICE, rate=RATE)
    await communicate.save(path)

def make_silence(ffmpeg, path, duration_ms):
    subprocess.run([
        ffmpeg, "-y", "-f", "lavfi", "-i", "anullsrc=r=24000:cl=mono",
        "-t", str(duration_ms / 1000), "-q:a", "9", "-acodec", "libmp3lame", path
    ], check=True, capture_output=True)

async def render_all(script_path, output_path, pause_ms):
    ffmpeg = get_ffmpeg()
    text = Path(script_path).read_text(encoding="utf-8")
    sentences = split_sentences(text)
    print(f"Voice: {VOICE} @ {RATE} | Pauses: {pause_ms}ms | Sentences: {len(sentences)}")
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)

    with tempfile.TemporaryDirectory() as tmpdir:
        silence_path = os.path.join(tmpdir, "silence.mp3")
        make_silence(ffmpeg, silence_path, pause_ms)
        parts = []
        for i, sentence in enumerate(sentences):
            tmp_path = os.path.join(tmpdir, f"s{i:04d}.mp3")
            await render_sentence(sentence, tmp_path)
            parts.append(f"file '{tmp_path}'")
            parts.append(f"file '{silence_path}'")
            print(f"  [{i+1}/{len(sentences)}] {sentence[:80]}")

        file_list = os.path.join(tmpdir, "files.txt")
        with open(file_list, "w") as f:
            f.write("\n".join(parts))
        subprocess.run([
            ffmpeg, "-y", "-f", "concat", "-safe", "0",
            "-i", file_list, "-c", "copy", str(output_path)
        ], check=True, capture_output=True)

    print(f"\nDone: {output_path}")

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--patch", required=True)
    parser.add_argument("--script", type=Path, default=None)
    parser.add_argument("--output", type=Path, default=None)
    parser.add_argument("--pause", type=int, default=DEFAULT_PAUSE_MS)
    args = parser.parse_args()

    script_path = args.script or Path(f"/tmp/script_{args.patch}.txt")
    output_path = args.output or Path(f"/tmp/narration_{args.patch}.mp3")

    if not script_path.exists():
        raise FileNotFoundError(f"Script not found: {script_path}")

    asyncio.run(render_all(script_path, output_path, args.pause))

if __name__ == "__main__":
    main()
