#!/usr/bin/env python3
"""
Generate Cré·8 app icons.
Requires: pip install Pillow
If Pillow not available, falls back to writing SVG files that browsers accept.
"""
import os, struct, zlib, math

def write_svg(path, size, content):
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 {size} {size}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a1a1e"/>
      <stop offset="100%" stop-color="#28282f"/>
    </linearGradient>
  </defs>
  {content}
</svg>'''
    with open(path, 'w') as f:
        f.write(svg)

def icon_content(size):
    r = size * 0.14  # corner radius
    pad = size * 0.1
    inner = size - pad * 2
    # Background rect
    bg = f'<rect width="{size}" height="{size}" rx="{r}" fill="url(#bg)"/>'
    # Accent dot top-right
    dot_r = size * 0.07
    dot_x = size * 0.78
    dot_y = size * 0.22
    dot = f'<circle cx="{dot_x}" cy="{dot_y}" r="{dot_r}" fill="#7c6af5" opacity="0.9"/>'
    # Large "C" letter
    font_size = size * 0.55
    cy = size * 0.68
    cx = size * 0.5
    letter = f'<text x="{cx}" y="{cy}" font-family="Georgia,serif" font-size="{font_size}" font-weight="bold" fill="#e8e8f0" text-anchor="middle" dominant-baseline="auto">C</text>'
    # Bottom accent bar
    bar_h = max(3, size * 0.04)
    bar_w = size * 0.35
    bar_x = size * 0.1
    bar_y = size - pad - bar_h
    bar = f'<rect x="{bar_x}" y="{bar_y}" width="{bar_w}" height="{bar_h}" rx="{bar_h/2}" fill="#7c6af5"/>'
    # Interpunct dot
    idot_r = size * 0.03
    idot_x = bar_x + bar_w + size * 0.06
    idot_y = bar_y + bar_h / 2
    idot = f'<circle cx="{idot_x}" cy="{idot_y}" r="{idot_r}" fill="#7c6af5" opacity="0.7"/>'
    return bg + dot + letter + bar + idot

os.makedirs('icons', exist_ok=True)

# Try Pillow first
try:
    from PIL import Image, ImageDraw, ImageFont
    import io

    def make_png_pillow(size, out_path):
        img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        r = int(size * 0.14)
        # BG rounded rect
        draw.rounded_rectangle([0, 0, size, size], radius=r, fill=(26, 26, 30, 255))
        # Accent circle
        dc = int(size * 0.07)
        dx, dy = int(size * 0.78), int(size * 0.22)
        draw.ellipse([dx-dc, dy-dc, dx+dc, dy+dc], fill=(124, 106, 245, 229))
        # Bottom bar
        bh = max(3, int(size * 0.04))
        bw = int(size * 0.35)
        bx = int(size * 0.1)
        by = size - int(size * 0.1) - bh
        draw.rounded_rectangle([bx, by, bx+bw, by+bh], radius=bh//2, fill=(124, 106, 245, 255))
        # Interpunct dot
        idr = int(size * 0.03)
        idx2 = bx + bw + int(size * 0.06)
        idy = by + bh // 2
        draw.ellipse([idx2-idr, idy-idr, idx2+idr, idy+idr], fill=(124, 106, 245, 178))
        img.save(out_path, 'PNG')
        print(f'  ✓ {out_path} ({size}×{size}px) — Pillow')

    for sz, name in [(16,'icon-16'),(32,'icon-32'),(192,'icon-192'),(512,'icon-512')]:
        make_png_pillow(sz, f'icons/{name}.png')

except ImportError:
    print("Pillow not found — writing SVG files as PNG placeholders.")
    print("Install with: pip install Pillow  for proper PNG icons.")
    for sz, name in [(16,'icon-16'),(32,'icon-32'),(192,'icon-192'),(512,'icon-512')]:
        path = f'icons/{name}.png'
        write_svg(path, sz, icon_content(sz))
        print(f'  ✓ {path} (SVG placeholder)')

# Always write proper SVGs too
for sz, name in [(192,'icon-192'),(512,'icon-512')]:
    svg_path = f'icons/{name}.svg'
    write_svg(svg_path, sz, icon_content(sz))
    print(f'  ✓ {svg_path}')

print('\nIcon generation complete.')
print('Place icons/ folder in your project root.')
