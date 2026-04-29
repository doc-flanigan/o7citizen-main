#!/usr/bin/env python3
"""
Render the dayonecitizen.com brand mark in every size and aspect ratio
the site needs across favicons, PWA icons, OpenGraph cards, and the
common social-media platforms.

The mark is the wordmark "DOC" set in Orbitron Bold gold (#f0c040) on
the navy palette (#0a0e1a / #141c2e). DOC is both the brand initials
(Day One Citizen) and Doc_Flanigan's in-game handle — same single mark
for both meanings.

Outputs are split between two destinations:

    public/images/brand/   (served by the site, wired into layout.tsx
                            and manifest.ts)
        favicon-16.png            16x16    browser tab favicon
        favicon-32.png            32x32    browser tab favicon
        apple-touch-icon.png      180x180  iOS home-screen icon
        icon-192.png              192x192  PWA / Android icon
        icon-512.png              512x512  PWA / Android icon (large)
        og-image.png              1200x630 OpenGraph card (link previews)
        twitter-card.png          1200x600 X summary_large_image card
        logo-mark.png             1024x1024 transparent square mark

    assets/brand/          (NOT served — manual upload to social
                            platforms, kept out of the production bundle)
        x-banner.png              1500x500  X profile header banner
        youtube-banner.png        2560x1440 YouTube channel banner
        discord-icon.png          512x512   Discord server avatar

Run:
    python3 scripts/render-brand-mark.py

Dependencies: Pillow. Fonts: scripts/fonts/Orbitron-{Bold,Regular}.ttf
(generated from @fontsource/orbitron — see CLAUDE.md "Brand mark
assets" for the bootstrap recipe).
"""
from __future__ import annotations

import math
import random
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
FONTS_DIR = ROOT / "scripts" / "fonts"
SITE_OUT = ROOT / "public" / "images" / "brand"
SOCIAL_OUT = ROOT / "assets" / "brand"

# Palette — kept in sync with tailwind.config.ts.
NAVY = (10, 14, 26)          # #0a0e1a
NAVY_LIGHT = (20, 28, 46)    # #141c2e
GOLD = (240, 192, 64)        # #f0c040
GOLD_DARK = (196, 154, 32)   # #c49a20
STARWHITE = (232, 234, 240)  # #e8eaf0
MUTED = (136, 146, 164)      # #8892a4

# Single subcopy used everywhere a banner needs a tagline, so OG,
# Twitter, X header, and YouTube all read consistently.
SUBCOPY = "Star Citizen for brand-new players. Plain English. No jargon."

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


def starfield(size: tuple[int, int], seed: int = 7) -> Image.Image:
    """Speckled starfield overlay on the navy gradient. Density and
    seed are fixed so the output is deterministic across runs."""
    w, h = size
    img = gradient_navy(size).convert("RGBA")
    draw = ImageDraw.Draw(img, "RGBA")
    rng = random.Random(seed)
    # Star count scales with canvas area so big banners get richer
    # fields and small ones don't get cluttered.
    count = max(60, (w * h) // 8000)
    for _ in range(count):
        x = rng.randint(0, w - 1)
        y = rng.randint(0, h - 1)
        # Most stars are tiny dim points; ~10% are larger and brighter
        # so the field has some visual hierarchy.
        if rng.random() < 0.1:
            r = rng.randint(2, 4)
            alpha = rng.randint(140, 220)
            color = STARWHITE
        else:
            r = rng.randint(0, 1)
            alpha = rng.randint(40, 110)
            color = MUTED
        draw.ellipse(
            (x - r, y - r, x + r, y + r),
            fill=(color[0], color[1], color[2], alpha),
        )
    return img


def youtube_banner(width: int = 2560, height: int = 1440) -> Image.Image:
    """YouTube channel banner. YouTube crops aggressively across
    devices; only the central 1546x423 safe zone is guaranteed to
    show on every device, so the most important elements (DOC mark
    + headline + sub) live inside that. The outer canvas gets a
    starfield, full-width gold rules, and decorative side text so
    the desktop view doesn't read as 60% empty space."""
    img = starfield((width, height))
    draw = ImageDraw.Draw(img, "RGBA")

    safe_w, safe_h = 1546, 423
    safe_x = (width - safe_w) // 2
    safe_y = (height - safe_h) // 2

    # Full-width gold rule above and below the safe zone, fading out
    # at the canvas edges so the banner reads as one composition.
    for offset, _label in [(-30, "top"), (safe_h + 30, "bottom")]:
        y = safe_y + offset
        rule_w = max(2, height // 480)
        # Three-segment fade: faint - solid - faint.
        for i in range(width):
            t = i / (width - 1)
            # Triangular alpha — peaks at center, near 0 at edges.
            a = int(180 * (1 - abs(2 * t - 1)))
            if a > 0:
                draw.rectangle(
                    (i, y, i + 1, y + rule_w),
                    fill=(GOLD[0], GOLD[1], GOLD[2], a),
                )

    # DOC mark inside the safe zone, left side.
    mark_size = int(safe_h * 0.92)
    mark_x = safe_x + int(safe_h * 0.05)
    mark_y = safe_y + (safe_h - mark_size) // 2
    mark = square_mark(mark_size, transparent=True)
    img.paste(mark, (mark_x, mark_y), mark)

    # Vertical hair-line separator inside the safe zone.
    sep_x = mark_x + mark_size + int(safe_h * 0.10)
    draw.line(
        [(sep_x, safe_y + int(safe_h * 0.18)),
         (sep_x, safe_y + int(safe_h * 0.82))],
        fill=(GOLD[0], GOLD[1], GOLD[2], 140),
        width=max(2, height // 480),
    )

    # Headline + sub on the right side of the safe zone.
    text_x = sep_x + int(safe_h * 0.10)
    text_max_w = (safe_x + safe_w) - text_x - int(safe_h * 0.05)

    headline = "dayonecitizen.com"
    headline_fnt = fit_font(
        headline, text_max_w, int(safe_h * 0.40), int(safe_h * 0.32)
    )
    sub_fnt = fit_font(
        SUBCOPY, text_max_w, int(safe_h * 0.20), int(safe_h * 0.10), bold=False
    )

    _hw, hh = measure(headline, headline_fnt)
    _sw, sh = measure(SUBCOPY, sub_fnt)
    gap = int(safe_h * 0.06)
    block_h = hh + gap + sh
    block_top = safe_y + (safe_h - block_h) // 2

    draw_left(img, headline, headline_fnt, GOLD, text_x, block_top)
    draw_left(img, SUBCOPY, sub_fnt, STARWHITE, text_x, block_top + hh + gap)

    # Vertical "DAY ONE / CITIZEN" wordmark stacked at the far left
    # and right edges, dim gold, decorative only — adds presence on
    # wide screens that show the full canvas.
    side_fnt = font(int(height * 0.055))
    for line, line_y in [("DAY ONE", height // 2 - int(height * 0.05)),
                         ("CITIZEN", height // 2 + int(height * 0.05))]:
        # Far left
        lw, _lh = measure(line, side_fnt)
        left_x = (safe_x - lw) // 2
        draw_left(img, line, side_fnt,
                  (GOLD_DARK[0], GOLD_DARK[1], GOLD_DARK[2], 90),
                  left_x, line_y)
        # Far right
        right_x = safe_x + safe_w + ((width - (safe_x + safe_w)) - lw) // 2
        draw_left(img, line, side_fnt,
                  (GOLD_DARK[0], GOLD_DARK[1], GOLD_DARK[2], 90),
                  right_x, line_y)

    # Tagline along the very bottom of the canvas, centered, dim.
    foot_fnt = font(int(height * 0.022), bold=False)
    foot_text = "An unofficial fan site by Doc_Flanigan"
    fw, fh = measure(foot_text, foot_fnt)
    foot_y = height - fh - int(height * 0.04)
    draw_left(
        img, foot_text, foot_fnt,
        (MUTED[0], MUTED[1], MUTED[2], 200),
        (width - fw) // 2, foot_y,
    )

    return img


def render_all() -> None:
    SITE_OUT.mkdir(parents=True, exist_ok=True)
    SOCIAL_OUT.mkdir(parents=True, exist_ok=True)

    written: list[tuple[Path, str, str]] = []

    def save_rgb(img: Image.Image, out: Path, name: str, dims: str) -> None:
        img.convert("RGB").save(out / name, "PNG", optimize=True)
        written.append((out, name, dims))

    def save_rgba(img: Image.Image, out: Path, name: str, dims: str) -> None:
        img.save(out / name, "PNG", optimize=True)
        written.append((out, name, dims))

    # ----- public/images/brand/ : served by the site -----

    # Square icon set (favicons + PWA + Apple touch icon).
    for filename, size in [
        ("favicon-16.png", 16),
        ("favicon-32.png", 32),
        ("apple-touch-icon.png", 180),
        ("icon-192.png", 192),
        ("icon-512.png", 512),
    ]:
        save_rgb(square_mark(size), SITE_OUT, filename, f"{size}x{size}")

    # OpenGraph card (Facebook, LinkedIn, link previews).
    save_rgb(
        banner_card(1200, 630, headline="dayonecitizen.com", sub=SUBCOPY),
        SITE_OUT, "og-image.png", "1200x630",
    )

    # X / Twitter summary_large_image card. Same subcopy as OG so
    # link previews read identically across networks.
    save_rgb(
        banner_card(1200, 600, headline="dayonecitizen.com", sub=SUBCOPY),
        SITE_OUT, "twitter-card.png", "1200x600",
    )

    # Transparent square logo mark for in-site header / overlay use.
    save_rgba(
        square_mark(1024, transparent=True),
        SITE_OUT, "logo-mark.png", "1024x1024 (transparent)",
    )

    # ----- assets/brand/ : NOT served, manual upload -----

    # X / Twitter profile header banner.
    save_rgb(
        banner_card(
            1500, 500,
            headline="DAY ONE CITIZEN",
            sub=SUBCOPY,
            headline_scale=0.20,
            sub_scale=0.055,
        ),
        SOCIAL_OUT, "x-banner.png", "1500x500",
    )

    # YouTube channel banner — uses the dedicated full-canvas design.
    save_rgb(
        youtube_banner(2560, 1440),
        SOCIAL_OUT, "youtube-banner.png", "2560x1440",
    )

    # Discord server avatar.
    save_rgb(square_mark(512), SOCIAL_OUT, "discord-icon.png", "512x512")

    print(f"Wrote {len(written)} assets:")
    for out, name, size in written:
        print(f"  {out.relative_to(ROOT)}/{name:24s} {size}")


if __name__ == "__main__":
    if not BOLD_PATH.exists() or not REGULAR_PATH.exists():
        raise SystemExit(
            f"Missing fonts at {FONTS_DIR}. See CLAUDE.md "
            f"'Brand mark assets' for the bootstrap recipe."
        )
    render_all()
