# Getting Started — Video Production Notes

## Status
- [x] Script written
- [x] Narration rendered (AndrewNeural +15%, 200ms pause)
- [ ] Edit in DaVinci Resolve
- [ ] Export final MP4
- [ ] Upload to YouTube

## Files (local, not in git)
- Narration: `E:\Claude Code\sc-portfolio\audio\getting-started\narration_final.mp3`
- Raw footage: `E:\Claude Code\sc-portfolio\videos\Desktop 2026.04.29 - 21.55.13.02.mp4`
- Transcoded footage: `E:\Claude Code\sc-portfolio\videos\sc-tutorial-1080p.mp4`

## Footage
Screen recording of SC new user tutorial: RSI launcher → starting location → basic settings → HAB wake-up → in-game tutorial.
Recorded at 3440x1440 HEVC HDR. Transcoded to 1920x1080 H.264 SDR for Resolve.

## DaVinci Resolve Notes
- Import `sc-tutorial-1080p.mp4` and `narration_final.mp3`
- Narration on A2 at 0dB, system audio on A1 at -20dB
- Sync narration to footage by section (see script headings)
- Speed ramp long sections to match narration pace

## Render Settings
- Format: MP4, H.265
- Resolution: 1920x1080
- Frame rate: 60fps
- Output: `E:\Claude Code\sc-portfolio\videos\getting-started-final.mp4`
