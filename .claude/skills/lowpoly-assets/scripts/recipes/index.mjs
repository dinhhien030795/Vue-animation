import { Mesh, prism, box, blob, rng } from '../lib/mesh.mjs'
import { terrainChunk } from '../lib/terrain.mjs'

// Palette: warm, saturated, slightly desaturated shadows. Tweak here to restyle every asset.
export const C = {
  trunk: ['#8a5a33', '#7a4d2b'], leaf: ['#6fbf4a', '#5fae3f', '#82cf58'], pine: ['#2f8f5b', '#277a4d'],
  rock: ['#a7a7b0', '#92929c', '#b9b9c2'], wall: ['#f3e3c3', '#e8d5ae'], roof: ['#d9573b', '#c64a31'],
  door: '#6b4423', skin: '#f2c9a0', cloth: ['#3a86ff', '#2f6fd6'],
}

export const recipes = {
  tree({ seed = 1 }) {
    const r = rng(seed), m = new Mesh()
    m.merge(prism({ sides: 5, rBottom: 0.22, rTop: 0.14, height: 0.9, color: C.trunk, jitter: 0.1, seed }))
    m.merge(blob({ radius: 0.7 + r() * 0.15, color: C.leaf, seed: seed + 1, jitter: 0.18, squash: 1.1 }), [0, 1.35, 0])
    return m
  },
  pine({ seed = 1 }) {
    const m = new Mesh()
    m.merge(prism({ sides: 5, rBottom: 0.16, rTop: 0.12, height: 0.5, color: C.trunk, seed }))
    for (let i = 0; i < 3; i++) m.merge(prism({ sides: 6, rBottom: 0.8 - i * 0.2, rTop: 0, height: 0.9, color: C.pine, jitter: 0.12, seed: seed + i, twist: i }), [0, 0.35 + i * 0.5, 0])
    return m
  },
  rock({ seed = 1 }) {
    const m = new Mesh()
    m.merge(blob({ radius: 0.6, color: C.rock, seed, jitter: 0.28, squash: 0.7 }), [0, 0.35, 0])
    m.merge(blob({ radius: 0.3, color: C.rock, seed: seed + 5, jitter: 0.3, squash: 0.7 }), [0.55, 0.15, 0.2])
    return m
  },
  house({ seed = 1 }) {
    const m = new Mesh()
    m.merge(box({ w: 1.4, h: 1, d: 1.1, color: C.wall }))
    m.merge(prism({ sides: 4, rBottom: 1.15, rTop: 0, height: 0.8, color: C.roof, twist: 0 }), [0, 1, 0], Math.PI / 4)
    m.merge(box({ w: 0.3, h: 0.55, d: 0.05, color: C.door }), [0, 0, 0.56])
    return m
  },
  follower({ seed = 1 }) {          // Godus-style tiny worshipper: chunky body, big head, no limbs detail
    const m = new Mesh()
    m.merge(prism({ sides: 5, rBottom: 0.14, rTop: 0.09, height: 0.34, color: C.cloth, seed }))
    m.merge(blob({ radius: 0.17, color: C.skin, seed, jitter: 0.05 }), [0, 0.5, 0])
    return m
  },
  terrain: ({ seed = 1 }) => terrainChunk({ seed }),
}
