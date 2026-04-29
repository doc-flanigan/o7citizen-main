#!/usr/bin/env python3
"""
Render the dayonecitizen.com brand mark in every size and aspect ratio
the site needs across favicons, PWA icons, OpenGraph cards, and the
common social-media platforms.

The mark is the wordmark "DOC" set in Orbitron Bold gold (#f0c040) on
the navy palette (#0a0e1a / #141c2e). DOC is both the brand initials
(Day One Citizen) and Doc_Flanigan's in-game handle — same single mark
for both meanings.

Output goes to public/images/brand/ as PNG files, eleven assets total:

    favicon-16.png            16x16    browser tab favicon
    favicon-32.png            32x32    browser tab favicon
    apple-touch-icon.png      180x180  iOS home-screen icon
    icon-192.png              192x192  PWA / Android icon
    icon-512.png              512x512  PWA / Android icon (large)
    og-image.png              1200x630 OpenGraph card (Facebook, LinkedIn, etc.)
    twitter-card.png          1200x600 X/Twitter summary_large_image card
    x-banner.png              1500x500 X/Twitter profile header banner
    youtube-banner.png        2560x1440 YouTube channel banner
    discord-icon.png          512x512  Discord server avatar
    logo-mark.png             1024x1024 Transparent square mark

Run:
    python3 scripts/render-brand-mark.py

Dependencies: Pillow. Fonts: scripts/fonts/Orbitron-{Bold,Regular}.ttf
(generated from @fontsource/orbitron — see CLAUDE.md "Brand mark
assets" for the bootstrap recipe).
"""
from __future__ import annotations

import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
FONTS_DIR = ROOT / "scripts" / "fonts"
OUT_DIR = ROOT / "public" / "images" / "brand"

# Palette — kept in sync with tailwind.config.ts.
NAVY = (10, 14, 26)          # #0a0e1a
NAVY_LIGHT = (20, 28, 46)    # #141c2e
GOLD = (240, 192, 64)        # #f0c040
GOLD_DARK = (196, 154, 32)   # #c49a20
STARWHITE = (232, 234, 240)  # #e8eaf0
MUTED = (136, 146, 164)      # #8892a4

BOLD_PATH = FONTS_DIR / "Orbitron-Bold.ttf"
REGULAR_PATH = FONTS_DIR / "Orbitron-Regular.ttf"


def font(size: int, bold: bool = True) -> ImageFont.FreeTypeFont:
    path = BOLD_PATH if bold else REGULAR_PATH
    return ImageFont.truetype(str(path), size=size)


def measure(text: str, fnt: ImageFont.FreeTypeFont) -> tuple[int, int]:
    # textbbox gives a tight box including ascender/descender of glyphs used.
    left, top, right, bottom = fnt.getbbox(text)
    return right - left, bottom - top


def gradient_navy(size: tuple[int, int]) -> Image.Image:
    """Subtle vertical navy → navyLight gradient. Same vibe as the site bg."""
    w, h = size
    img = Image.new("RGB", size, NAVY)
    px = img.load()
    for y in range(h):
        t = y / max(h - 1, 1)
        r = int(NAVY[0] + (NAVY_LIGHT[0] - NAVY[0]) * t)
        g = int(NAVY[1] + (NAVY_LIGHT[1] - NAVY[1]) * t)
        b = int(NAVY[2] + (NAVY_LIGHT[2] - NAVY[2]) * t)
        for x in range(w):
            px[x, y] = (r, g, b)
    return img


def draw_centered(
    img: Image.Image,
    text: str,
    fnt: ImageFont.FreeTypeFont,
    fill: tuple[int, int, int] | tuple[int, int, int, int],
    y_offset: int = 0,
) -> None:
    draw = ImageDraw.Draw(img)
    tw, th = measure(text, fnt)
    # Account for the bbox top offset so the visual baseline is centered.
    left, top, _right, _bottom = fnt.getbbox(text)
    x = (img.width - tw) // 2 - left
    y = (img.height - th) // 2 - top + y_offset
    draw.text((x, y), text, font=fnt, fill=fill)


def draw_left(
    img: Image.Image,
    text: str,
    fnt: ImageFont.FreeTypeFont,
    fill: tuple[int, int, int] | tuple[int, int, int, int],
    x: int,
    y: int,
) -> None:
    draw = ImageDraw.Draw(img)
    left, top, _r, _b = fnt.getbbox(text)
    draw.text((x - left, y - top), text, font=fnt, fill=fill)


def square_mark(size: int, transparent: bool = False) -> Image.Image:
    """The DOC wordmark on a navy square. Used for icons and the
    transparent logo asset."""
    if transparent:
        img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    else:
        img = gradient_navy((size, size)).convert("RGBA")

    # Wordmark — DOC, gold, Orbitron Bold. Auto-fit inside ~78% of the
    # canvas so the letters never clip on the edges (Orbitron Bold is
    # quite wide). Tiny upward nudge centers it visually with the
    # underline below.
    inner = int(size * 0.78)
    fnt = fit_font("DOC", inner, inner, int(size * 0.55))
    draw_centered(img, "DOC", fnt, GOLD, y_offset=-int(size * 0.03))

    # A thin gold underline at ~70% of the height makes the mark read
    # as a wordmark rather than three letters floating in space. Skip
    # this on the smallest favicon sizes — it just becomes noise.
    if size >= 64:
        draw = ImageDraw.Draw(img)
        bar_w = int(size * 0.34)
        bar_x = (size - bar_w) // 2
        bar_y = int(size * 0.70)
        bar_h = max(2, size // 96)
        draw.rectangle((bar_x, bar_y, bar_x + bar_w, bar_y + bar_h), fill=GOLD_DARK)

    return img


def fit_font(
    text: str, max_w: int, max_h: int, start_size: int, bold: bool = True
) -> ImageFont.FreeTypeFont:
    """Return the largest Orbitron font (<= start_size) at which `text`
    fits inside (max_w, max_h). Shrinks in 1-px steps until it fits or
    bottoms out at 8px."""
    size = start_size
    while size > 8:
        fnt = font(size, bold=bold)
        tw, th = measure(text, fnt)
        if tw <= max_w and th <= max_h:
            return fnt
        size -= 1
    return font(8, bold=bold)


def banner_card(
    width: int,
    height: int,
    headline: str,
    sub: str,
    *,
    headline_scale: float = 0.18,
    sub_scale: float = 0.045,
    sub_color: tuple[int, int, int] = STARWHITE,
    mark_scale: float = 0.78,
) -> Image.Image:
    """Wide banner used for OG, Twitter card, X banner, YouTube
    banner. Wordmark on the left, headline + sub on the right.
    Headline and sub auto-shrink to fit the right-hand column so long
    strings like 'dayonecitizen.com' don't clip."""
    img = gradient_navy((width, height)).convert("RGBA")
    draw = ImageDraw.Draw(img)

    # Left third: DOC mark sized to the height.
    mark_size = int(height * mark_scale)
    mark_pad = int(height * 0.11)
    mark = square_mark(mark_size, transparent=True)
    img.paste(mark, (mark_pad, (height - mark_size) // 2), mark)

    # Vertical hair-line separator between mark and copy.
    sep_x = mark_pad + mark_size + int(height * 0.08)
    draw.line(
        [(sep_x, int(height * 0.22)), (sep_x, int(height * 0.78))],
        fill=(GOLD[0], GOLD[1], GOLD[2], 110),
        width=max(1, height // 360),
    )

    # Right column boundaries.
    text_x = sep_x + int(height * 0.08)
    right_pad = int(height * 0.11)
    text_max_w = width - text_x - right_pad
    text_max_h = int(height * 0.42)

    # Auto-fit both the headline and the sub to the available width.
    headline_fnt = fit_font(
        headline, text_max_w, text_max_h, int(height * headline_scale)
    )
    sub_fnt = fit_font(
        sub, text_max_w, int(height * 0.18), int(height * sub_scale), bold=False
    )

    _hw, hh = measure(headline, headline_fnt)
    _sw, sh = measure(sub, sub_fnt)
    gap = int(height * 0.04)
    block_h = hh + gap + sh
    block_top = (height - block_h) // 2

    draw_left(img, headline, headline_fnt, GOLD, text_x, block_top)
    draw_left(img, sub, sub_fnt, sub_color, text_x, block_top + hh + gap)

    return img


def render_all() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    written: list[tuple[str, str]] = []

    # 1-5: square icon set
    for filename, size in [
        ("favicon-16.png", 16),
        ("favicon-32.png", 32),
        ("apple-touch-icon.png", 180),
        ("icon-192.png", 192),
        ("icon-512.png", 512),
    ]:
        img = square_mark(size)
        img.convert("RGB").save(OUT_DIR / filename, "PNG", optimize=True)
        written.append((filename, f"{size}x{size}"))

    # 6: OpenGraph card (Facebook, LinkedIn, link previews)
    og = banner_card(
        1200, 630,
        headline="dayonecitizen.com",
        sub="Star Citizen for brand-new players. Plain English. No jargon.",
    )
    og.convert("RGB").save(OUT_DIR / "og-image.png", "PNG", optimize=True)
    written.append(("og-image.png", "1200x630"))

    # 7: Twitter / X summary_large_image card
    tw = banner_card(
        1200, 600,
        headline="dayonecitizen.com",
        sub="Star Citizen, explained for day one.",
    )
    tw.convert("RGB").save(OUT_DIR / "twitter-card.png", "PNG", optimize=True)
    written.append(("twitter-card.png", "1200x600"))

    # 8: X / Twitter profile header banner
    xb = banner_card(
        1500, 500,
        headline="DAY ONE CITIZEN",
        sub="Star Citizen for brand-new players.",
        headline_scale=0.20,
        sub_scale=0.055,
    )
    xb.convert("RGB").save(OUT_DIR / "x-banner.png", "PNG", optimize=True)
    written.append(("x-banner.png", "1500x500"))

    # 9: YouTube channel banner. The 2560x1440 canvas has a 1546x423
    # safe zone in the center for text, so the headline scale is
    # smaller relative to the banner height than the X banner.
    yt = banner_card(
        2560, 1440,
        headline="DAYONECITIZEN.COM",
        sub="Plain-English Star Citizen for brand-new players.",
        headline_scale=0.075,
        sub_scale=0.024,
    )
    yt.convert("RGB").save(OUT_DIR / "youtube-banner.png", "PNG", optimize=True)
    written.append(("youtube-banner.png", "2560x1440"))

    # 10: Discord server icon (square avatar)
    di = square_mark(512)
    di.convert("RGB").save(OUT_DIR / "discord-icon.png", "PNG", optimize=True)
    written.append(("discord-icon.png", "512x512"))

    # 11: Transparent square logo mark for site header / overlay use
    lm = square_mark(1024, transparent=True)
    lm.save(OUT_DIR / "logo-mark.png", "PNG", optimize=True)
    written.append(("logo-mark.png", "1024x1024 (transparent)"))

    print(f"Wrote {len(written)} assets to {OUT_DIR.relative_to(ROOT)}/")
    for name, size in written:
        print(f"  {name:28s} {size}")


if __name__ == "__main__":
    if not BOLD_PATH.exists() or not REGULAR_PATH.exists():
        raise SystemExit(
            f"Missing fonts at {FONTS_DIR}. See CLAUDE.md "
            f"'Brand mark assets' for the bootstrap recipe."
        )
    render_all()
