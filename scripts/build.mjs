// Generates SVG assets, manifest.json and gallery.html from the pixel maps in assets.mjs.
import { mkdirSync, writeFileSync } from 'node:fs'
import { PALETTE, ASSETS } from './assets.mjs'

const SIZE = 8
const svg = (rows) => {
  const rects = []
  rows.forEach((row, y) => [...row].forEach((ch, x) => {
    if (ch !== '.') rects.push(`<rect x="${x}" y="${y}" width="1" height="1" fill="${PALETTE[ch]}"/>`)
  }))
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SIZE} ${SIZE}" width="${SIZE * 8}" height="${SIZE * 8}" shape-rendering="crispEdges">${rects.join('')}</svg>\n`
}

const manifest = []
for (const [kind, items] of Object.entries(ASSETS)) {
  mkdirSync(`assets/${kind}`, { recursive: true })
  for (const [name, rows] of Object.entries(items)) {
    if (rows.length !== SIZE || rows.some((r) => r.length !== SIZE)) throw new Error(`${name} must be ${SIZE}x${SIZE}`)
    for (const ch of rows.join('')) if (ch !== '.' && !PALETTE[ch]) throw new Error(`${name}: unknown colour '${ch}'`)
    const path = `assets/${kind}/${name}.svg`
    writeFileSync(path, svg(rows))
    manifest.push({ name, type: kind, path, width: SIZE, height: SIZE })
  }
}
writeFileSync('assets/manifest.json', JSON.stringify(manifest, null, 2) + '\n')

const cards = manifest.map((a) => `<figure><img src="${a.path}" alt="${a.name}"><figcaption>${a.name}<small>${a.type}</small></figcaption></figure>`).join('\n')
writeFileSync('gallery.html', `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Game Assets Gallery</title>
<style>body{font-family:system-ui,sans-serif;background:#1b1b2f;color:#eee;margin:0;padding:2rem}
h1{margin-top:0}main{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1rem}
figure{margin:0;background:#262645;border-radius:8px;padding:.75rem;text-align:center}
img{width:96px;height:96px;image-rendering:pixelated}figcaption{display:grid;font-size:.85rem}small{opacity:.6}</style></head>
<body><h1>Game Assets (${manifest.length})</h1><main>
${cards}
</main></body></html>
`)
console.log(`Built ${manifest.length} assets`)
