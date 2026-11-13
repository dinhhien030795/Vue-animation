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

## Low-poly asset skill (Godus style)

`.claude/skills/lowpoly-assets/` is a Claude Code skill that generates flat-shaded low-poly `.glb` assets
(terrain with earth strata, trees, rocks, houses, followers) plus PNG previews:

```bash
node .claude/skills/lowpoly-assets/scripts/build.mjs all --out out
```

See `SKILL.md` and `style-guide.md` in that folder.
