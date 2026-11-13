import { writeFileSync } from 'node:fs'
import { deflateSync } from 'node:zlib'

const crcTable = Array.from({ length: 256 }, (_, n) => { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c >>> 0 })
const crc32 = (b) => { let c = 0xffffffff; for (const x of b) c = crcTable[(c ^ x) & 255] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0 }
const chunk = (type, data) => { const t = Buffer.from(type), l = Buffer.alloc(4), c = Buffer.alloc(4); l.writeUInt32BE(data.length); c.writeUInt32BE(crc32(Buffer.concat([t, data]))); return Buffer.concat([l, t, data, c]) }
function writePng(path, w, h, rgb) {
  const raw = Buffer.alloc((w * 3 + 1) * h)
  for (let y = 0; y < h; y++) rgb.copy(raw, y * (w * 3 + 1) + 1, y * w * 3, (y + 1) * w * 3)
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4); ihdr[8] = 8; ihdr[9] = 2
  writeFileSync(path, Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', deflateSync(raw)), chunk('IEND', Buffer.alloc(0))]))
}

// Software rasteriser: z-buffered, back-face culled, flat-lit, 2x supersampled. Dependency-free,
// so every asset can be *looked at* (read the PNG) without a 3D engine or browser.
export function previewPng(mesh, path, { yaw = Math.PI / 4, tilt = 0.5, size = 512, bg = [207, 232, 247], ss = 2 } = {}) {
  const cy = Math.cos(yaw), sy = Math.sin(yaw), ct = Math.cos(tilt), st = Math.sin(tilt)
  const proj = ([x, y, z]) => { const x1 = x * cy + z * sy, z1 = -x * sy + z * cy; return [x1, -(y * ct - z1 * st), y * st + z1 * ct] }
  const light = [-0.5, 0.8, 0.45], ll = Math.hypot(...light)
  const tris = []
  for (const f of mesh.faces) {
    const [a, b, c] = f.v
    const u = [b[0] - a[0], b[1] - a[1], b[2] - a[2]], w = [c[0] - a[0], c[1] - a[1], c[2] - a[2]]
    const n = [u[1] * w[2] - u[2] * w[1], u[2] * w[0] - u[0] * w[2], u[0] * w[1] - u[1] * w[0]]
    const nl = Math.hypot(...n) || 1, nv = n.map((x) => x / nl)
    const nz = -nv[0] * sy + nv[2] * cy
    const lum = 0.45 + 0.55 * Math.max(0, (nv[0] * light[0] + nv[1] * light[1] + nv[2] * light[2]) / ll)
    const rgb = f.c.map((k) => Math.round(Math.min(1, k * lum) * 255))
    const front = nv[1] * st + nz * ct > 0      // normal points toward the camera
    const P = f.v.map(proj)
    for (let i = 1; i < f.v.length - 1; i++) tris.push({ p: [P[0], P[i], P[i + 1]], rgb, front })
  }
  const all = tris.flatMap((t) => t.p)
  const xs = all.map((p) => p[0]), ys = all.map((p) => p[1])
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)]
  const W = size * ss, k = (W * 0.86) / Math.max(x1 - x0, y1 - y0, 1e-6)
  const sx = (x) => (x - (x0 + x1) / 2) * k + W / 2, sy2 = (y) => (y - (y0 + y1) / 2) * k + W / 2
  const img = Buffer.alloc(W * W * 3), z = new Float32Array(W * W).fill(-Infinity)
  for (let i = 0; i < W * W; i++) { img[i * 3] = bg[0]; img[i * 3 + 1] = bg[1]; img[i * 3 + 2] = bg[2] }
  for (const t of tris) {
    if (!t.front) continue
    const [A, B, C] = t.p.map((p) => [sx(p[0]), sy2(p[1]), p[2]])
    const den = (B[1] - C[1]) * (A[0] - C[0]) + (C[0] - B[0]) * (A[1] - C[1])
    if (Math.abs(den) < 1e-9) continue
    for (let y = Math.max(0, Math.floor(Math.min(A[1], B[1], C[1]))); y <= Math.min(W - 1, Math.ceil(Math.max(A[1], B[1], C[1]))); y++)
      for (let x = Math.max(0, Math.floor(Math.min(A[0], B[0], C[0]))); x <= Math.min(W - 1, Math.ceil(Math.max(A[0], B[0], C[0]))); x++) {
        const px = x + 0.5, py = y + 0.5
        const l1 = ((B[1] - C[1]) * (px - C[0]) + (C[0] - B[0]) * (py - C[1])) / den
        const l2 = ((C[1] - A[1]) * (px - C[0]) + (A[0] - C[0]) * (py - C[1])) / den, l3 = 1 - l1 - l2
        if (l1 < -1e-4 || l2 < -1e-4 || l3 < -1e-4) continue
        const d = l1 * A[2] + l2 * B[2] + l3 * C[2], o = y * W + x
        if (d > z[o]) { z[o] = d; img[o * 3] = t.rgb[0]; img[o * 3 + 1] = t.rgb[1]; img[o * 3 + 2] = t.rgb[2] }
      }
  }
  const out = Buffer.alloc(size * size * 3)
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) for (let c = 0; c < 3; c++) {
    let s = 0
    for (let dy = 0; dy < ss; dy++) for (let dx = 0; dx < ss; dx++) s += img[((y * ss + dy) * W + x * ss + dx) * 3 + c]
    out[(y * size + x) * 3 + c] = Math.round(s / (ss * ss))
  }
  writePng(path, size, size, out)
}
