import { writeFileSync } from 'node:fs'

const lin = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)   // glTF COLOR_0 is linear

// Mesh -> binary glTF 2.0. Flat normals + per-face COLOR_0, one default PBR material (rough, non-metal).
export function writeGlb(mesh, path, name = 'asset') {
  const pos = [], nor = [], col = []
  for (const f of mesh.faces) {
    const [a, b, c] = f.v
    const u = [b[0] - a[0], b[1] - a[1], b[2] - a[2]], w = [c[0] - a[0], c[1] - a[1], c[2] - a[2]]
    let n = [u[1] * w[2] - u[2] * w[1], u[2] * w[0] - u[0] * w[2], u[0] * w[1] - u[1] * w[0]]
    const l = Math.hypot(...n) || 1; n = n.map((x) => x / l)
    for (let i = 1; i < f.v.length - 1; i++) for (const v of [f.v[0], f.v[i], f.v[i + 1]]) {
      pos.push(...v); nor.push(...n); col.push(...f.c.map(lin), 1)
    }
  }
  const count = pos.length / 3
  if (!count) throw new Error('empty mesh')
  const P = new Float32Array(pos), N = new Float32Array(nor), C = new Float32Array(col)
  const min = [0, 1, 2].map((k) => Math.min(...pos.filter((_, i) => i % 3 === k)))
  const max = [0, 1, 2].map((k) => Math.max(...pos.filter((_, i) => i % 3 === k)))
  const bin = Buffer.concat([P, N, C].map((a) => Buffer.from(a.buffer)))
  const json = {
    asset: { version: '2.0', generator: 'lowpoly-assets skill' },
    scene: 0, scenes: [{ nodes: [0] }], nodes: [{ mesh: 0, name }],
    meshes: [{ name, primitives: [{ attributes: { POSITION: 0, NORMAL: 1, COLOR_0: 2 }, material: 0, mode: 4 }] }],
    materials: [{ name: 'vertex-color', pbrMetallicRoughness: { baseColorFactor: [1, 1, 1, 1], metallicFactor: 0, roughnessFactor: 1 } }],
    accessors: [
      { bufferView: 0, componentType: 5126, count, type: 'VEC3', min, max },
      { bufferView: 1, componentType: 5126, count, type: 'VEC3' },
      { bufferView: 2, componentType: 5126, count, type: 'VEC4' },
    ],
    bufferViews: [
      { buffer: 0, byteOffset: 0, byteLength: P.byteLength, target: 34962 },
      { buffer: 0, byteOffset: P.byteLength, byteLength: N.byteLength, target: 34962 },
      { buffer: 0, byteOffset: P.byteLength + N.byteLength, byteLength: C.byteLength, target: 34962 },
    ],
    buffers: [{ byteLength: bin.length }],
  }
  const pad = (b, ch) => Buffer.concat([b, Buffer.alloc((4 - (b.length % 4)) % 4, ch)])
  const j = pad(Buffer.from(JSON.stringify(json)), 0x20), bb = pad(bin, 0)
  const head = Buffer.alloc(12); head.write('glTF'); head.writeUInt32LE(2, 4); head.writeUInt32LE(12 + 8 + j.length + 8 + bb.length, 8)
  const ch = (len, type) => { const h = Buffer.alloc(8); h.writeUInt32LE(len, 0); h.writeUInt32LE(type, 4); return h }
  writeFileSync(path, Buffer.concat([head, ch(j.length, 0x4e4f534a), j, ch(bb.length, 0x004e4942), bb]))
  return { vertices: count, triangles: count / 3, bounds: { min, max } }
}
