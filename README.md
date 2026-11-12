# Game Assets 🎮

Free, original pixel-art game assets (8×8, SVG), released under **CC0**.

| Type | Assets |
|------|--------|
| sprites | heart, coin, gem, key, sword, potion, slime, star |
| tiles | grass, brick |

- `assets/sprites/*.svg`, `assets/tiles/*.svg`: the assets
- `assets/manifest.json`: machine-readable list (name, type, path, size)
- `gallery.html`: open in a browser to preview everything

## Add or edit an asset

Assets are plain-text pixel maps in `scripts/assets.mjs` (`.` = transparent, letters = palette colours).
Edit the maps, then regenerate (no dependencies, Node 18+):

```bash
npm run build
```
