import { Mesh, rng, hex } from './mesh.mjs'

function valueNoise(seed) {
  const r = rng(seed), g = Array.from({ length: 64 * 64 }, () => r())
  const at = (x, y) => g[((y & 63) << 6) | (x & 63)]
  const s = (t) => t * t * (3 - 2 * t)
  return (x, y) => {
    const xi = Math.floor(x), yi = Math.floor(y), u = s(x - xi), v = s(y - yi)
    const a = at(xi, yi), b = at(xi + 1, yi), c = at(xi, yi + 1), d = at(xi + 1, yi + 1)
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v
  }
}

// Godus-style land chunk: terraced (quantised) heights, biome-coloured top,
// and a cut-away skirt showing stacked earth strata.
export function terrainChunk({ cells = 8, cell = 1, seed = 1, amplitude = 2.6, step = 0.5, frequency = 0.35, depth = 1.6,
  palette = { water: '#4cc9f0', sand: '#f2d49b', grass: ['#7bc74d', '#6ab540'], rock: '#9a9a9a', snow: '#f4f4f4' },
  strata = ['#8b5a2b', '#a9703a', '#6f4420', '#b5803f'] } = {}) {
  const n = valueNoise(seed), size = cells * cell, half = size / 2
  const H = Array.from({ length: cells + 1 }, (_, i) => Array.from({ length: cells + 1 }, (_, j) => {
    const edge = Math.min(i, j, cells - i, cells - j) / (cells / 2)          // fall off to the rim for a floating-island feel
    const h = n(i * frequency * 3, j * frequency * 3) * amplitude * (0.25 + 0.75 * Math.min(1, edge * 1.6))
    return Math.round(h / step) * step
  }))
  const tone = (y) => y < step * 0.5 ? palette.water : y < step * 1.5 ? palette.sand : y < amplitude * 0.6 ? palette.grass : y < amplitude * 0.8 ? palette.rock : palette.snow
  const m = new Mesh(), P = (i, j) => [i * cell - half, H[i][j], j * cell - half]
  let flip = 0
  for (let i = 0; i < cells; i++) for (let j = 0; j < cells; j++) {
    const a = P(i, j), b = P(i + 1, j), c = P(i + 1, j + 1), d = P(i, j + 1)
    const tris = (i + j) % 2 ? [[a, d, c], [a, c, b]] : [[a, d, b], [b, d, c]]
    for (const t of tris) {
      const y = (t[0][1] + t[1][1] + t[2][1]) / 3, c0 = tone(y)
      m.face(t, Array.isArray(c0) ? c0[flip++ % c0.length] : c0)
    }
  }
  // skirt: stacked horizontal strata bands from -depth up to the (terraced) surface
  const band = depth / strata.length, last = strata.length - 1
  const side = (p0, p1) => {
    for (let k = 0; k <= last; k++) {
      const lo = -depth + k * band
      const up = (p) => (k === last ? p[1] : Math.min(p[1], lo + band))
      if (up(p0) > lo + 1e-6 || up(p1) > lo + 1e-6)
        m.face([[p0[0], lo, p0[2]], [p1[0], lo, p1[2]], [p1[0], up(p1), p1[2]], [p0[0], up(p0), p0[2]]], strata[last - k])
    }
  }
  for (let i = 0; i < cells; i++) {
    side(P(i + 1, 0), P(i, 0)); side(P(i, cells), P(i + 1, cells))       // z = -half, z = +half
    side(P(0, i), P(0, i + 1)); side(P(cells, i + 1), P(cells, i))       // x = -half, x = +half
  }
  m.face([[-half, -depth, -half], [half, -depth, -half], [half, -depth, half], [-half, -depth, half]], hex(strata.at(-1)))
  return m
}
