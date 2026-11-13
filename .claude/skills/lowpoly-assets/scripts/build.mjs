#!/usr/bin/env node
// Usage: node build.mjs <recipe|all> [--seed N] [--out dir] [--yaw deg]
// Writes <out>/<recipe>.glb +  + <recipe>.png preview and prints a budget report.
import { mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { recipes } from './recipes/index.mjs'
import { writeGlb } from './lib/glb.mjs'
import { previewPng } from './lib/preview.mjs'

const args = process.argv.slice(2)
const opt = (k, d) => { const i = args.indexOf(`--${k}`); return i < 0 ? d : args[i + 1] }
const which = args[0] && !args[0].startsWith('--') ? args[0] : 'all'
const seed = Number(opt('seed', 1)), out = opt('out', 'out')
mkdirSync(out, { recursive: true })
const names = which === 'all' ? Object.keys(recipes) : [which]
for (const n of names) if (!recipes[n]) { console.error(`unknown recipe '${n}'. have: ${Object.keys(recipes).join(', ')}`); process.exit(1) }

const BUDGET = { terrain: 1500 }   // triangles; everything else defaults to 600
for (const n of names) {
  const mesh = recipes[n]({ seed })
  const info = writeGlb(mesh, `${out}/${n}.glb`, n)
  previewPng(mesh, `${out}/${n}.png`, { yaw: (Number(opt('yaw', 45)) * Math.PI) / 180 })
  const budget = BUDGET[n] ?? 600
  console.log(`${n.padEnd(9)} ${String(info.triangles).padStart(5)} tris ${info.triangles <= budget ? 'OK ' : 'OVER'} (budget ${budget})  ${out}/${n}.glb`)
}
