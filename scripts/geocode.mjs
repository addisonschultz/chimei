/**
 * Queries Nominatim for accurate centroids for every place in places.ts.
 * Outputs a JSON map of { id: [lat, lon] } to stdout.
 * Respects Nominatim's 1 req/s rate limit.
 */

const places = [
  // ── 23 Wards ──────────────────────────────────────────────────────────────
  { id: 'tokyo',        kanji: '東京都',  type: 'city' },
  { id: 'chiyoda',      kanji: '千代田区', type: 'ward' },
  { id: 'chuo',         kanji: '中央区',  type: 'ward' },
  { id: 'minato',       kanji: '港区',    type: 'ward' },
  { id: 'shinjuku',     kanji: '新宿区',  type: 'ward' },
  { id: 'bunkyo',       kanji: '文京区',  type: 'ward' },
  { id: 'taito',        kanji: '台東区',  type: 'ward' },
  { id: 'sumida',       kanji: '墨田区',  type: 'ward' },
  { id: 'koto',         kanji: '江東区',  type: 'ward' },
  { id: 'shinagawa',    kanji: '品川区',  type: 'ward' },
  { id: 'meguro',       kanji: '目黒区',  type: 'ward' },
  { id: 'ota',          kanji: '大田区',  type: 'ward' },
  { id: 'setagaya',     kanji: '世田谷区', type: 'ward' },
  { id: 'shibuya',      kanji: '渋谷区',  type: 'ward' },
  { id: 'nakano',       kanji: '中野区',  type: 'ward' },
  { id: 'suginami',     kanji: '杉並区',  type: 'ward' },
  { id: 'toshima',      kanji: '豊島区',  type: 'ward' },
  { id: 'kita',         kanji: '北区',    type: 'ward' },
  { id: 'arakawa',      kanji: '荒川区',  type: 'ward' },
  { id: 'itabashi',     kanji: '板橋区',  type: 'ward' },
  { id: 'nerima',       kanji: '練馬区',  type: 'ward' },
  { id: 'adachi',       kanji: '足立区',  type: 'ward' },
  { id: 'katsushika',   kanji: '葛飾区',  type: 'ward' },
  { id: 'edogawa',      kanji: '江戸川区', type: 'ward' },

  // ── Chiyoda-ku ────────────────────────────────────────────────────────────
  { id: 'akihabara',    kanji: '秋葉原',  type: 'neighborhood', ward: '千代田区' },
  { id: 'kanda',        kanji: '神田',    type: 'neighborhood', ward: '千代田区' },
  { id: 'marunouchi',   kanji: '丸の内',  type: 'neighborhood', ward: '千代田区' },
  { id: 'yurakucho',    kanji: '有楽町',  type: 'neighborhood', ward: '千代田区' },

  // ── Chūō-ku ───────────────────────────────────────────────────────────────
  { id: 'ginza',        kanji: '銀座',    type: 'neighborhood', ward: '中央区' },
  { id: 'nihonbashi',   kanji: '日本橋',  type: 'neighborhood', ward: '中央区' },
  { id: 'tsukishima',   kanji: '月島',    type: 'neighborhood', ward: '中央区' },

  // ── Minato-ku ─────────────────────────────────────────────────────────────
  { id: 'roppongi',     kanji: '六本木',  type: 'neighborhood', ward: '港区' },
  { id: 'azabu',        kanji: '麻布',    type: 'neighborhood', ward: '港区' },
  { id: 'akasaka',      kanji: '赤坂',    type: 'neighborhood', ward: '港区' },
  { id: 'toranomon',    kanji: '虎ノ門',  type: 'neighborhood', ward: '港区' },
  { id: 'shirogane',    kanji: '白金',    type: 'neighborhood', ward: '港区' },
  { id: 'takanawa',     kanji: '高輪',    type: 'neighborhood', ward: '港区' },

  // ── Shibuya-ku ────────────────────────────────────────────────────────────
  { id: 'harajuku',     kanji: '原宿',    type: 'neighborhood', ward: '渋谷区' },
  { id: 'daikanyama',   kanji: '代官山',  type: 'neighborhood', ward: '渋谷区' },
  { id: 'ebisu',        kanji: '恵比寿',  type: 'neighborhood', ward: '渋谷区' },
  { id: 'aoyama',       kanji: '青山',    type: 'neighborhood', ward: '渋谷区' },
  { id: 'omotesando',   kanji: '表参道',  type: 'neighborhood', ward: '渋谷区' },
  { id: 'shoto',        kanji: '松濤',    type: 'neighborhood', ward: '渋谷区' },
  { id: 'tomigaya',     kanji: '富ヶ谷',  type: 'neighborhood', ward: '渋谷区' },

  // ── Setagaya-ku ───────────────────────────────────────────────────────────
  { id: 'sangenjaya',   kanji: '三軒茶屋', type: 'neighborhood', ward: '世田谷区' },
  { id: 'shimokitazawa',kanji: '下北沢',  type: 'neighborhood', ward: '世田谷区' },
  { id: 'yoga',         kanji: '用賀',    type: 'neighborhood', ward: '世田谷区' },
  { id: 'futako',       kanji: '二子玉川', type: 'neighborhood', ward: '世田谷区' },
  { id: 'jiyugaoka',    kanji: '自由が丘', type: 'neighborhood', ward: '世田谷区' },
  { id: 'setagaya',     kanji: '世田谷',  type: 'neighborhood', ward: '世田谷区' },

  // ── Meguro-ku ─────────────────────────────────────────────────────────────
  { id: 'nakameguro',   kanji: '中目黒',  type: 'neighborhood', ward: '目黒区' },
  { id: 'yutenji',      kanji: '祐天寺',  type: 'neighborhood', ward: '目黒区' },
  { id: 'gakugeidaigaku',kanji:'学芸大学', type: 'neighborhood', ward: '目黒区' },
  { id: 'naka-meguro',  kanji: '目黒',    type: 'neighborhood', ward: '目黒区' },

  // ── Shinjuku-ku ───────────────────────────────────────────────────────────
  { id: 'kabukicho',    kanji: '歌舞伎町', type: 'neighborhood', ward: '新宿区' },
  { id: 'takadanobaba', kanji: '高田馬場', type: 'neighborhood', ward: '新宿区' },
  { id: 'ochiai',       kanji: '落合',    type: 'neighborhood', ward: '新宿区' },
  { id: 'yotsuya',      kanji: '四谷',    type: 'neighborhood', ward: '新宿区' },
  { id: 'ushigome',     kanji: '牛込',    type: 'neighborhood', ward: '新宿区' },

  // ── Bunkyo-ku ─────────────────────────────────────────────────────────────
  { id: 'hongo',        kanji: '本郷',    type: 'neighborhood', ward: '文京区' },
  { id: 'koishikawa',   kanji: '小石川',  type: 'neighborhood', ward: '文京区' },
  { id: 'yanaka',       kanji: '谷中',    type: 'neighborhood', ward: '文京区' },
  { id: 'hakusan',      kanji: '白山',    type: 'neighborhood', ward: '文京区' },
  { id: 'nezu',         kanji: '根津',    type: 'neighborhood', ward: '文京区' },

  // ── Taito-ku ──────────────────────────────────────────────────────────────
  { id: 'ueno',         kanji: '上野',    type: 'neighborhood', ward: '台東区' },
  { id: 'asakusa',      kanji: '浅草',    type: 'neighborhood', ward: '台東区' },
  { id: 'kuramae',      kanji: '蔵前',    type: 'neighborhood', ward: '台東区' },
  { id: 'shitaya',      kanji: '下谷',    type: 'neighborhood', ward: '台東区' },

  // ── Sumida-ku ─────────────────────────────────────────────────────────────
  { id: 'kinshicho',    kanji: '錦糸町',  type: 'neighborhood', ward: '墨田区' },
  { id: 'oshiage',      kanji: '押上',    type: 'neighborhood', ward: '墨田区' },
  { id: 'ryogoku',      kanji: '両国',    type: 'neighborhood', ward: '墨田区' },
  { id: 'mukojima',     kanji: '向島',    type: 'neighborhood', ward: '墨田区' },

  // ── Koto-ku ───────────────────────────────────────────────────────────────
  { id: 'kiyosumi',     kanji: '清澄',    type: 'neighborhood', ward: '江東区' },
  { id: 'shinonome',    kanji: '潮見',    type: 'neighborhood', ward: '江東区' },
  { id: 'tatsumi',      kanji: '辰巳',    type: 'neighborhood', ward: '江東区' },
  { id: 'monzen-nakacho',kanji: '門前仲町',type: 'neighborhood', ward: '江東区' },
  { id: 'fukagawa',     kanji: '深川',    type: 'neighborhood', ward: '江東区' },

  // ── Shinagawa-ku ──────────────────────────────────────────────────────────
  { id: 'osaki',        kanji: '大崎',    type: 'neighborhood', ward: '品川区' },
  { id: 'gotanda',      kanji: '五反田',  type: 'neighborhood', ward: '品川区' },
  { id: 'togoshi',      kanji: '戸越',    type: 'neighborhood', ward: '品川区' },
  { id: 'nishikoi',     kanji: '西小山',  type: 'neighborhood', ward: '品川区' },

  // ── Ota-ku ────────────────────────────────────────────────────────────────
  { id: 'kamata',       kanji: '蒲田',    type: 'neighborhood', ward: '大田区' },
  { id: 'oimachi',      kanji: '大井町',  type: 'neighborhood', ward: '大田区' },
  { id: 'haneda',       kanji: '羽田',    type: 'neighborhood', ward: '大田区' },
  { id: 'denenchofu',   kanji: '田園調布', type: 'neighborhood', ward: '大田区' },

  // ── Nakano-ku ─────────────────────────────────────────────────────────────
  { id: 'nakano',       kanji: '中野',    type: 'neighborhood', ward: '中野区' },
  { id: 'shin-nakano',  kanji: '新中野',  type: 'neighborhood', ward: '中野区' },
  { id: 'higashi-nakano',kanji: '東中野', type: 'neighborhood', ward: '中野区' },

  // ── Suginami-ku ───────────────────────────────────────────────────────────
  { id: 'koenji',       kanji: '高円寺',  type: 'neighborhood', ward: '杉並区' },
  { id: 'asagaya',      kanji: '阿佐ヶ谷', type: 'neighborhood', ward: '杉並区' },
  { id: 'ogikubo',      kanji: '荻窪',    type: 'neighborhood', ward: '杉並区' },
  { id: 'nishi-ogikubo',kanji: '西荻窪',  type: 'neighborhood', ward: '杉並区' },
  { id: 'eifukucho',    kanji: '永福町',  type: 'neighborhood', ward: '杉並区' },

  // ── Toshima-ku ────────────────────────────────────────────────────────────
  { id: 'ikebukuro',    kanji: '池袋',    type: 'neighborhood', ward: '豊島区' },
  { id: 'sugamo',       kanji: '巣鴨',    type: 'neighborhood', ward: '豊島区' },
  { id: 'zoshigaya',    kanji: '雑司が谷', type: 'neighborhood', ward: '豊島区' },
  { id: 'mejiro',       kanji: '目白',    type: 'neighborhood', ward: '豊島区' },

  // ── Kita-ku ───────────────────────────────────────────────────────────────
  { id: 'akabane',      kanji: '赤羽',    type: 'neighborhood', ward: '北区' },
  { id: 'oji',          kanji: '王子',    type: 'neighborhood', ward: '北区' },
  { id: 'jujo',         kanji: '十条',    type: 'neighborhood', ward: '北区' },

  // ── Arakawa-ku ────────────────────────────────────────────────────────────
  { id: 'nippori',      kanji: '日暮里',  type: 'neighborhood', ward: '荒川区' },
  { id: 'minowa',       kanji: '三ノ輪',  type: 'neighborhood', ward: '荒川区' },

  // ── Itabashi-ku ───────────────────────────────────────────────────────────
  { id: 'itabashi',     kanji: '板橋',    type: 'neighborhood', ward: '板橋区' },
  { id: 'tokiwadai',    kanji: '常盤台',  type: 'neighborhood', ward: '板橋区' },

  // ── Nerima-ku ─────────────────────────────────────────────────────────────
  { id: 'nerima',       kanji: '練馬',    type: 'neighborhood', ward: '練馬区' },
  { id: 'hikarigaoka',  kanji: '光が丘',  type: 'neighborhood', ward: '練馬区' },
  { id: 'shakujii',     kanji: '石神井',  type: 'neighborhood', ward: '練馬区' },

  // ── Adachi-ku ─────────────────────────────────────────────────────────────
  { id: 'kita-senju',   kanji: '北千住',  type: 'neighborhood', ward: '足立区' },
  { id: 'ayase',        kanji: '綾瀬',    type: 'neighborhood', ward: '足立区' },

  // ── Katsushika-ku ─────────────────────────────────────────────────────────
  { id: 'kameari',      kanji: '亀有',    type: 'neighborhood', ward: '葛飾区' },
  { id: 'shibamata',    kanji: '柴又',    type: 'neighborhood', ward: '葛飾区' },

  // ── Edogawa-ku ────────────────────────────────────────────────────────────
  { id: 'kasai',        kanji: '葛西',    type: 'neighborhood', ward: '江戸川区' },
  { id: 'koiwa',        kanji: '小岩',    type: 'neighborhood', ward: '江戸川区' },
];

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

const results = {};
let i = 0;
for (const place of places) {
  i++;
  process.stderr.write(`[${i}/${places.length}] ${place.id} (${place.kanji})...\n`);
  try {
    const coords = await geocode(place);
    if (coords) {
      results[place.id] = coords;
      process.stderr.write(`  → [${coords[0].toFixed(4)}, ${coords[1].toFixed(4)}]\n`);
    } else {
      process.stderr.write(`  → NOT FOUND\n`);
    }
  } catch (e) {
    process.stderr.write(`  → ERROR: ${e.message}\n`);
  }
  await sleep(1100); // Nominatim 1 req/s limit
}

process.stdout.write(JSON.stringify(results, null, 2));
