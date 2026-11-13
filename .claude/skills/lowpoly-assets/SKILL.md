---
name: lowpoly-assets
description: Build stylised low-poly 3D game assets (terrain chunks, trees, rocks, houses, tiny characters) in the Godus / god-game look, exported as validated .glb with a PNG preview. Use when the user asks for low-poly, poly-style, god-game or Godus-like game assets, wants a new asset recipe added, or wants existing assets restyled or budget-checked.
---

# Low-poly asset builder (Godus style)

Generates flat-shaded, vertex-coloured meshes from code, so assets are deterministic (same seed = same asset), diffable, and need no Blender. Output is glTF 2.0 binary (`.glb`) that loads in Three.js, Babylon, Godot, Unity and Unreal.

Read [style-guide.md](style-guide.md) before designing a new asset: it defines the look (what "Godus-like" means) and the polygon budgets.

## Run it

```bash
node .claude/skills/lowpoly-assets/scripts/build.mjs all --out out            # every recipe
node .claude/skills/lowpoly-assets/scripts/build.mjs tree --seed 7 --yaw 120  # one asset, other variant/angle
```

Needs Node 18+, no npm install. Writes `<out>/<recipe>.glb` and `<out>/<recipe>.png` and prints triangles vs. budget (`OVER` = fix it).

## Workflow

1. **Look at what exists**: `scripts/recipes/index.mjs` (recipes + the shared palette `C`).
2. **Add or change a recipe**: a recipe is `name({ seed }) => Mesh`. Compose primitives from `lib/mesh.mjs` (`prism`, `box`, `blob`) with `mesh.merge(child, [x, y, z], rotY)`; use `terrainChunk` from `lib/terrain.mjs` for land. Always derive randomness from `seed` via `rng(seed)`, never `Math.random`.
3. **Build and LOOK**: run the build, then Read the `.png`. Judge it against the style guide checklist; iterate until it passes. Check a second angle with `--yaw 200` for anything with a front/back (houses, characters).
4. **Validate** before calling it done (optional but recommended, once per session):
   `npm i --no-save gltf-validator` in a scratch dir and run `validateBytes` over the `.glb` files; target 0 errors, 0 warnings.
5. **Report** the triangle counts and where the files are. Do not claim it "looks right" without having viewed the PNG.

## Conventions (keep every asset compatible)

- Y-up, 1 unit = 1 metre; model sits with its base on y = 0 and is centred on x/z (terrain's underside is at y = -depth).
- Counter-clockwise winding seen from outside; the builders enforce flat normals, so don't pass shared/smoothed normals.
- One mesh, one material (rough, non-metal), colour in `COLOR_0` (linear, converted from sRGB hex in `lib/glb.mjs`). No textures, no UVs: Godot/Unity/Three all render vertex colours from a default material; if the target engine ignores `COLOR_0`, tell the user and offer a palette-texture bake instead of silently changing the format.
- Colours come from the palette in `recipes/index.mjs`; add new colours there, not inline, so the whole set can be restyled at once.

## Limits to be honest about

- The PNG preview is a simple flat-shaded software render (no shadows, no AA beyond 2x supersampling), good for shape and colour, not final lighting.
- No rigging or animation: characters are static meshes. For animation, export parts as separate recipes or hand off to a DCC tool.
- Procedural recipes give a consistent "toy diorama" look; hero art with specific shapes may need hand-modelling.
