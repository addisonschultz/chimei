/**
 * Parses places.ts, geocodes any place not already in coords.json,
 * then rewrites places.ts with accurate coordinates.
 */

import { readFileSync, writeFileSync } from 'fs';

const existingCoords = JSON.parse(readFileSync('scripts/coords.json', 'utf8'));

// ── 1. Parse places.ts ────────────────────────────────────────────────────────
const src = readFileSync('data/places.ts', 'utf8');

// Extract each place block: id, kanji, type, ward (optional)
const placeRe = /\{\s*\n\s*id:\s*'([^']+)'[\s\S]*?type:\s*'([^']+)'[\s\S]*?coordinates:\s*\[([^\]]+)\][\s\S]*?\}/g;
// We also need kanji and ward - do a separate simpler parse
const allBlocks = [];
const blockRe = /\{([^{}]*(?:description:[^{}]*)?[^{}]*)\}/gs;
let m;
while ((m = blockRe.exec(src)) !== null) {
  const block = m[1];
  const idM = block.match(/id:\s*'([^']+)'/);
  const kanjiM = block.match(/kanji:\s*'([^']+)'/);
  const typeM = block.match(/type:\s*'([^']+)'/);
  const wardM = block.match(/ward:\s*'([^']+)'/);
  const coordM = block.match(/coordinates:\s*\[([^\]]+)\]/);
  if (idM && kanjiM && typeM && coordM) {
    allBlocks.push({
      id: idM[1],
      kanji: kanjiM[1],
      type: typeM[1],
      ward: wardM ? wardM[1] : null,
    });
  }
}

console.error(`Parsed ${allBlocks.length} places from places.ts`);

// ── 2. Geocode missing places ─────────────────────────────────────────────────
function nominatimQuery(place) {
  if (place.type === 'city') return '東京都';
  if (place.type === 'ward') return `${place.kanji}, 東京都, 日本`;
  return `${place.kanji}, ${place.ward ?? '東京都'}, 東京都, 日本`;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function geocode(place) {
  const q = nominatimQuery(place);
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=3&countrycodes=jp`;
  const res = await fetch(url, {
    headers: { 'User-Agent': 'chimei-geocode-script/1.0 (addisonschultz0@gmail.com)' },
  });
  const data = await res.json();
  if (!data.length) return null;
  return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
}

const missing = allBlocks.filter((p) => !(p.id in existingCoords));
console.error(`Need to geocode ${missing.length} additional places`);

let i = 0;
for (const place of missing) {
  i++;
  process.stderr.write(`[${i}/${missing.length}] ${place.id} (${place.kanji})...\n`);
  try {
    const coords = await geocode(place);
    if (coords) {
      existingCoords[place.id] = coords;
      process.stderr.write(`  → [${coords[0].toFixed(4)}, ${coords[1].toFixed(4)}]\n`);
    } else {
      process.stderr.write(`  → NOT FOUND (keeping original)\n`);
    }
  } catch (e) {
    process.stderr.write(`  → ERROR: ${e.message}\n`);
  }
  if (i < missing.length) await sleep(1100);
}

// Save updated coords
writeFileSync('scripts/coords.json', JSON.stringify(existingCoords, null, 2));
console.error('Updated coords.json');

// ── 3. Patch places.ts ────────────────────────────────────────────────────────
let updated = src;
let patchCount = 0;

for (const place of allBlocks) {
  const coords = existingCoords[place.id];
  if (!coords) continue;

  const [lat, lon] = coords;
  const newCoords = `[${lat}, ${lon}]`;

  // Replace the coordinates line for this specific place by finding the id anchor first
  // Pattern: find "id: 'PLACEID'" then within a few lines find coordinates: [...] and replace it
  const idPattern = new RegExp(
    `(id:\\s*'${place.id.replace(/-/g, '\\-')}'[\\s\\S]{0,300}?coordinates:\\s*)\\[[^\\]]+\\]`,
    'g'
  );
  const newSrc = updated.replace(idPattern, `$1${newCoords}`);
  if (newSrc !== updated) {
    patchCount++;
    updated = newSrc;
  }
}

writeFileSync('data/places.ts', updated);
console.error(`Patched ${patchCount} coordinates in places.ts`);
