"""
generate_script.py -- wraps patch notes content in the dayonecitizen video script template.

Usage:
    python scripts/video/generate_script.py --patch "4.7.2" --notes /tmp/notes.txt
    python scripts/video/generate_script.py --patch "4.7.2" --notes /tmp/notes.txt --output /tmp/script.txt
"""

import argparse
from pathlib import Path

INTRO = """Welcome to Day One Citizen -- a new-player guide to the most ambitious space simulation ever made, written by a veteran backer for someone who has never even seen the game. If you are brand new here, this is the place where Star Citizen stops being confusing and starts making sense. No jargon, no gatekeeping, just plain English. Glad you found us.

Today we are covering version {patch} -- the latest update to Star Citizen. Let's get into it.

"""

OUTRO = """

If this breakdown was useful to you, please take a second to like this video, subscribe to the channel, and share it with anyone you know who is curious about Star Citizen. Every share helps a new player find plain-English content in a game that can feel pretty overwhelming at first. That is exactly why this channel exists.

I'm Doc Flanigan, and I'll see you in the 'verse.
"""

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--patch", required=True, help="Patch version, e.g. 4.7.2")
    parser.add_argument("--notes", required=True, type=Path, help="Plain-text patch notes body")
    parser.add_argument("--output", type=Path, default=None, help="Output path (default: /tmp/script_<patch>.txt)")
    args = parser.parse_args()

    notes = args.notes.read_text(encoding="utf-8").strip()
    out_path = args.output or Path(f"/tmp/script_{args.patch}.txt")
    out_path.parent.mkdir(parents=True, exist_ok=True)

    script = INTRO.format(patch=args.patch) + notes + OUTRO
    out_path.write_text(script, encoding="utf-8")
    print(f"Script: {out_path} ({len(script.split())} words)")

if __name__ == "__main__":
    main()
