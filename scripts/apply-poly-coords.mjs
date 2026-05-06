/**
 * Applies polygon-centroid coordinates from coords-poly.json to places.ts.
 * Skips 'tokyo' (whose OSM polygon spans to the remote islands).
 */

import { readFileSync, writeFileSync } from 'fs';

const newCoords = JSON.parse(readFileSync('scripts/coords-poly.json', 'utf8'));
let src = readFileSync('data/places.ts', 'utf8');

// Skip tokyo — the OSM boundary includes remote islands so the bbox center is wrong
const SKIP = new Set(['tokyo']);

let patchCount = 0;

for (const [id, coords] of Object.entries(newCoords)) {
  if (SKIP.has(id)) continue;
  const [lat, lon] = coords;
  const newCoordStr = `[${lat}, ${lon}]`;

  const idPattern = new RegExp(
    `(id:\\s*'${id.replace(/[-]/g, '\\-')}'[\\s\\S]{0,300}?coordinates:\\s*)\\[[^\\]]+\\]`,
    'g'
  );
  const updated = src.replace(idPattern, `$1${newCoordStr}`);
  if (updated !== src) {
    patchCount++;
    src = updated;
  }
}

writeFileSync('data/places.ts', src);
console.log(`Patched ${patchCount} coordinates.`);
