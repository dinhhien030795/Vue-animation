# Godus-style low-poly: what to match

Godus (22cans, 2013) is a god game: you sculpt the land and tiny followers settle it. The look reviewers describe is a stylised **low-poly** world: mountains, forests and Mediterranean beaches, with **stratified earth layers** visible where land is cut away (sources: [Eurogamer alpha review via forum](https://godgames.boards.net/thread/1094/2013-eurogamer-godus-alpha-review), [Gizmodo listing](https://gizmodo.com/download/godus)). The rest of this guide turns that into concrete rules; treat the numbers as house conventions, not facts about the original game.

## Look checklist (judge the PNG against this)

- [ ] **Flat shading**: every facet reads as a distinct tone; no smooth gradients.
- [ ] **Chunky silhouettes**: the shape reads at thumbnail size (64px). Big simple forms, no fine detail.
- [ ] **Terrain is the hero**: land chunks have terraced heights and a cut-away skirt with 3-4 earth strata bands.
- [ ] **Warm, saturated palette**: greens (#5fae3f-#82cf58), sand (#f2d49b), terracotta roofs, bright water (#4cc9f0). Stay within the palette in `recipes/index.mjs`.
- [ ] **Slightly irregular**: jittered vertices on organic things (trees, rocks), clean right angles on man-made things (houses).
- [ ] **Toy scale**: followers are tiny, big-headed and limbless; buildings are small and cute, not realistic.

## Budgets (triangles)

| Asset | Budget |
|-------|--------|
| prop (tree, rock, bush) | 600 |
| building | 600 |
| character/follower | 600 |
| terrain chunk (8x8) | 1500 |

Flat shading duplicates vertices on export, so vertex counts are about 3x the triangle count; that is expected.

## Ideas for new recipes

Bush, fence, well, windmill, tent, farm plot, bridge, statue/altar, boat, cliff/mountain chunk, river chunk. Reuse `prism`/`blob`/`box` first; add a primitive only if three recipes need it.
