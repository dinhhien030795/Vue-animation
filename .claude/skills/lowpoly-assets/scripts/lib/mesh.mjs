// Tiny flat-shaded mesh builder. Y-up, units = metres. Faces carry their own colour,
// so there are no shared vertices: this is what gives the faceted "low-poly" look.
export const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255)

export function rng(seed = 1) {            // mulberry32: deterministic, same seed => same asset
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export class Mesh {
  constructor() { this.faces = [] }       // { v: [[x,y,z],...] (CCW seen from outside), c: [r,g,b] }
  face(v, color) { this.faces.push({ v, c: typeof color === 'string' ? hex(color) : color }); return this }
  merge(other, [dx = 0, dy = 0, dz = 0] = [], rotY = 0) {
    const s = Math.sin(rotY), c = Math.cos(rotY)
    for (const f of other.faces)
      this.faces.push({ c: f.c, v: f.v.map(([x, y, z]) => [x * c + z * s + dx, y + dy, -x * s + z * c + dz]) })
    return this
  }
  get triCount() { return this.faces.reduce((n, f) => n + f.v.length - 2, 0) }
}

// n-sided prism / cone / frustum standing on y=0. rTop=0 gives a cone.
export function prism({ sides = 6, rBottom = 1, rTop = 1, height = 1, color, topColor, jitter = 0, seed = 1, twist = 0 }) {
  const r = rng(seed), m = new Mesh()
  const ring = (rad, y, off) => Array.from({ length: sides }, (_, i) => {
    const a = (i / sides) * Math.PI * 2 + off
    const k = rad * (1 + (r() - 0.5) * jitter)
    return [Math.cos(a) * k, y + (r() - 0.5) * jitter * 0.3 * height, Math.sin(a) * k]
  })
  const b = ring(rBottom, 0, 0), t = ring(rTop, height, twist)
  const pick = (i) => (Array.isArray(color) ? color[i % color.length] : color)
  for (let i = 0; i < sides; i++) {
    const j = (i + 1) % sides
    m.face(rTop > 0 ? [b[i], t[i], t[j], b[j]] : [b[i], t[0], b[j]], pick(i))
  }
  if (rTop > 0) m.face([...t].reverse(), topColor ?? pick(0))
  m.face(b, pick(0))
  return m
}

export function box({ w = 1, h = 1, d = 1, color, topColor }) {
  const m = new Mesh()
  const x = w / 2, z = d / 2
  const P = (a, b, c) => [a * x, b * h, c * z]
  const [px, py] = [(c) => (Array.isArray(color) ? color[c % color.length] : color), topColor ?? (Array.isArray(color) ? color[0] : color)]
  m.face([P(-1, 0, 1), P(1, 0, 1), P(1, 1, 1), P(-1, 1, 1)], px(0))
  m.face([P(1, 0, -1), P(-1, 0, -1), P(-1, 1, -1), P(1, 1, -1)], px(1))
  m.face([P(1, 0, 1), P(1, 0, -1), P(1, 1, -1), P(1, 1, 1)], px(2))
  m.face([P(-1, 0, -1), P(-1, 0, 1), P(-1, 1, 1), P(-1, 1, -1)], px(3))
  m.face([P(-1, 1, 1), P(1, 1, 1), P(1, 1, -1), P(-1, 1, -1)], py)
  m.face([P(-1, 0, -1), P(1, 0, -1), P(1, 0, 1), P(-1, 0, 1)], px(0))
  return m
}

// Jittered icosahedron: boulders, bushes, tree canopies.
export function blob({ radius = 1, color, seed = 1, jitter = 0.2, squash = 1 }) {
  const r = rng(seed), phi = (1 + Math.sqrt(5)) / 2
  const base = [[-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0], [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi], [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]]
  const verts = base.map((p) => {
    const l = Math.hypot(...p), k = radius * (1 + (r() - 0.5) * 2 * jitter) / l
    return [p[0] * k, p[1] * k * squash, p[2] * k]
  })
  const tris = [[0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11], [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8], [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9], [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]]
  const m = new Mesh()
  tris.forEach((t, i) => m.face(t.map((k) => verts[k]), Array.isArray(color) ? color[i % color.length] : color))
  return m
}
