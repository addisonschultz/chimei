import { Place } from '@/types';

const places: Place[] = [
  // ─── 23 Special Wards ───────────────────────────────────────────────────────

  {
    id: 'chiyoda',
    kanji: '千代田区',
    romaji: 'Chiyoda-ku',
    english: 'Thousand Generations Field Ward',
    type: 'ward',
    coordinates: [35.6869323, 139.7564915],
    description:
      '千代田 combines 千代 (a thousand generations, or eternity) and 田 (rice paddy / field). The name comes from Chiyoda Castle — the Edo-period name for what is now the Imperial Palace — itself named by Ōta Dōkan, the warlord who built the original fortress in 1457. The aspirational reading of "a field that endures ten thousand generations" befits the seat of Japanese imperial and governmental power.',
  },
  {
    id: 'chuo',
    kanji: '中央区',
    romaji: 'Chūō-ku',
    english: 'Central Ward',
    type: 'ward',
    coordinates: [35.6684075, 139.7758539],
    description:
      '中央 simply means "center" or "central" (中 = middle, 央 = center). The ward was created in 1947 from the merger of Kyobashi and Nihonbashi wards, both of which had historically formed the commercial and geographic heart of old Edo. The name was chosen to reflect its central position in the city and its role as the literal kilometer-zero point of Japan via the Nihonbashi bridge.',
  },
  {
    id: 'minato',
    kanji: '港区',
    romaji: 'Minato-ku',
    english: 'Harbor Ward',
    type: 'ward',
    coordinates: [35.652844, 139.745837],
    description:
      '港 means "port" or "harbor." The ward takes its name from its location along Tokyo Bay, which historically served as the main maritime gateway into Edo. The area around Shiba and Shiodome was active with merchant shipping throughout the Edo period, and the character 港 evokes that mercantile, coastal identity that the district has never entirely shed.',
  },
  {
    id: 'shinjuku',
    kanji: '新宿区',
    romaji: 'Shinjuku-ku',
    english: 'New Lodging Ward',
    type: 'ward',
    coordinates: [35.7015623, 139.7092071],
    description:
      '新宿 means "new lodging" or "new post town" — 新 (new) + 宿 (inn, post station). In 1698, the Tokugawa shogunate established Naito Shinjuku as a new relay station on the Kōshū Kaidō highway, the road connecting Edo to the Kai domain. It was called "new" to distinguish it from the older stations along the route, and travelers resting here gave the whole district its enduring name.',
  },
  {
    id: 'bunkyo',
    kanji: '文京区',
    romaji: 'Bunkyō-ku',
    english: 'Literary Capital Ward',
    type: 'ward',
    coordinates: [35.7176992, 139.7448612],
    description:
      '文京 pairs 文 (letters, culture, learning) with 京 (capital, metropolis). The name was chosen in 1947 to reflect the ward\'s long association with academia — it is home to Tokyo University, Ochanomizu Women\'s University, and dozens of hospitals and research institutes. The "literary capital" identity also nods to the many Meiji-era novelists, including Natsume Sōseki, who lived and wrote in Hongō and Koishikawa.',
  },
  {
    id: 'taito',
    kanji: '台東区',
    romaji: 'Taitō-ku',
    english: 'Plateau East Ward',
    type: 'ward',
    coordinates: [35.7132135, 139.786034],
    description:
      '台 here refers to the Ueno upland plateau (上野台地), and 東 means east. The ward occupies the eastern slope and lowlands extending from that plateau down toward the Sumida River. When this ward was formed in 1947, the name was constructed to situate it geographically: the flatlands east of the high ground, the quintessential shitamachi (low city) of old Tokyo.',
  },
  {
    id: 'sumida',
    kanji: '墨田区',
    romaji: 'Sumida-ku',
    english: 'Ink Field Ward',
    type: 'ward',
    coordinates: [35.7151025, 139.8157825],
    description:
      '墨田 is named after the Sumida River (隅田川), which forms its western boundary. The river\'s own name likely derives from 隅 (corner, angle) and 田 (field), describing its position at the eastern edge of the old Musashino Plain. Over time the character 隅 was replaced with 墨 (ink, black), giving the river — and eventually the ward — a more poetic written form without changing the pronunciation.',
  },
  {
    id: 'koto',
    kanji: '江東区',
    romaji: 'Kōtō-ku',
    english: 'River East Ward',
    type: 'ward',
    coordinates: [35.6483705, 139.807634],
    description:
      '江東 means "east of the river" — 江 (river, inlet) + 東 (east). The ward lies east of the Sumida River (江), which in older parlance was often called simply 江 (the river). The area was largely reclaimed tidal flats; the "east" designation placed it firmly outside the old city center, in the working-class industrial zone known for lumber yards, textile mills, and later, the 2020 Olympic venues.',
  },
  {
    id: 'shinagawa',
    kanji: '品川区',
    romaji: 'Shinagawa-ku',
    english: 'Goods River Ward',
    type: 'ward',
    coordinates: [35.6130422, 139.7375444],
    description:
      '品川 combines 品 (goods, articles, quality) and 川 (river). The name predates the Edo period and refers to the Meguro River, which once flowed broadly through the area before it was channeled. Shinagawa-juku was the first of the 53 post towns on the Tōkaidō road, and the brisk trade passing through it — goods moving between Edo and Kyoto — lent the area its mercantile character and likely reinforced the "goods" reading of its name.',
  },
  {
    id: 'meguro',
    kanji: '目黒区',
    romaji: 'Meguro-ku',
    english: 'Black Eye Ward',
    type: 'ward',
    coordinates: [35.632355, 139.689689],
    description:
      '目黒 literally reads "black eye" — 目 (eye) + 黒 (black). The name is traditionally linked to Meguro Fudō, a temple dedicated to Fudō Myō-ō, the fierce Buddhist deity whose statues always depict him with dark, glowering eyes. The waterfall near the temple, where worshippers came to purify themselves, was known as the "black-eyed waterfall," and over centuries the name spread to the surrounding valley and river.',
  },
  {
    id: 'ota',
    kanji: '大田区',
    romaji: 'Ōta-ku',
    english: 'Great Field Ward',
    type: 'ward',
    coordinates: [35.5473805, 139.7553202],
    description:
      '大田区 was formed in 1947 from the merger of Ōmori Ward (大森区) and Kamata Ward (蒲田区). The new ward\'s name is a blend: 大 from 大森 and 田 from 蒲田. It therefore carries a constructed meaning of "great field," though it is properly a portmanteau. Ōmori itself means "great forest" and Kamata means "cattail/bulrush field," so the composite territory captures both the wooded hills and the marshy reclaimed lowlands.',
  },
  {
    id: 'setagaya',
    kanji: '世田谷区',
    romaji: 'Setagaya-ku',
    english: 'World Paddy Valley Ward',
    type: 'ward',
    coordinates: [35.6364912, 139.6345003],
    description:
      '世田谷 is read as "world paddy valley" — 世田 (world or generation fields) + 谷 (valley). The etymology is debated. One theory holds that it derives from 施田 (given rice fields), land donated for religious cultivation. Another suggests it comes from 瀬田谷 (river-rapid valley), referencing the hilly terrain cut through by streams. The Setagaya clan, powerful in the Kamakura period, took their name from this landscape.',
  },
  {
    id: 'shibuya',
    kanji: '渋谷区',
    romaji: 'Shibuya-ku',
    english: 'Astringent Valley Ward',
    type: 'ward',
    coordinates: [35.6668209, 139.6926519],
    description:
      '渋谷 means "astringent valley" — 渋 (bitter, rough, astringent) + 谷 (valley). The ward occupies a natural valley where several small streams converge. The bitterness in the name refers to the reddish-brown, iron-rich clay soil that was common along the valley floor, which would have imparted a harsh, metallic quality to the water running through it. This terrain gave the district its character long before the scramble crossing made it globally famous.',
  },
  {
    id: 'nakano',
    kanji: '中野区',
    romaji: 'Nakano-ku',
    english: 'Middle Field Ward',
    type: 'ward',
    coordinates: [35.7060589, 139.6592789],
    description:
      '中野 means "middle field" — 中 (middle, center) + 野 (field, plain). The area was historically a broad agricultural plain in the middle of the Musashino Plateau, neither the high Yamanote hills to the south nor the lower Shitamachi flatlands to the east. The Tokugawa shogunate maintained a large dog pound here (the Oinoya) in the late 17th century, at the order of the fifth shogun Tsunayoshi, whose affection for dogs was notorious.',
  },
  {
    id: 'suginami',
    kanji: '杉並区',
    romaji: 'Suginami-ku',
    english: 'Cedar Row Ward',
    type: 'ward',
    coordinates: [35.6986546, 139.6264435],
    description:
      '杉並 combines 杉 (Japanese cedar, cryptomeria) and 並 (row, line). The name commemorates the avenue of tall cedar trees that once lined the Kōshū Kaidō highway running through the area. These cedars were planted in the early Edo period to shade travelers on the road to Kai Province, and the long, straight corridor of trees became such a defining feature that the whole district took its name from them.',
  },
  {
    id: 'toshima',
    kanji: '豊島区',
    romaji: 'Toshima-ku',
    english: 'Abundant Island Ward',
    type: 'ward',
    coordinates: [35.7291424, 139.7150585],
    description:
      '豊島 means "abundant island" — 豊 (rich, plentiful) + 島 (island). The name predates the ward by many centuries: the Toshima clan was a powerful warrior family who controlled much of the Musashino Plain in the Kamakura and Muromachi periods. Their name likely referred to fertile elevated land (islands of high ground) amid the surrounding marshes. Ōta Dōkan defeated the Toshima clan in 1477, using their territory as the base for what became Edo.',
  },
  {
    id: 'kita',
    kanji: '北区',
    romaji: 'Kita-ku',
    english: 'North Ward',
    type: 'ward',
    coordinates: [35.765179, 139.7300651],
    description:
      '北 simply means "north." The ward was given this directional name in 1947 to reflect its position at the northern edge of the Tokyo Metropolis. Before the ward system, the area was known by its constituent neighborhoods — Ōji, Akabane, Itabashi. The Tōhoku Main Line and Keihin-Tōhoku Line, which connect Tokyo to northern Japan, both run through the ward, making "north" functionally as well as geographically apt.',
  },
  {
    id: 'arakawa',
    kanji: '荒川区',
    romaji: 'Arakawa-ku',
    english: 'Wild River Ward',
    type: 'ward',
    coordinates: [35.7398141, 139.7820945],
    description:
      '荒川 means "wild river" — 荒 (rough, wild, desolate) + 川 (river). The Arakawa (now the Sumida River in this stretch) was historically one of the most dangerous rivers in the Kantō Plain, prone to catastrophic flooding that swept away entire villages. Major flood-control engineering in the early 20th century tamed the river, diverting it into the current Arakawa Discharge Channel. The ward\'s name preserves the memory of that untamed water.',
  },
  {
    id: 'itabashi',
    kanji: '板橋区',
    romaji: 'Itabashi-ku',
    english: 'Plank Bridge Ward',
    type: 'ward',
    coordinates: [35.7683535, 139.6736496],
    description:
      '板橋 means "plank bridge" — 板 (plank, board) + 橋 (bridge). The name comes from an old wooden plank bridge that once crossed the Shakujii River at this location, a landmark on the Nakasendō highway that ran from Edo toward Kyoto through the mountains. The bridge and the post town that grew up around it were significant enough that the name outlasted the bridge itself, surviving into the modern ward era.',
  },
  {
    id: 'nerima',
    kanji: '練馬区',
    romaji: 'Nerima-ku',
    english: 'Kneaded Marsh Ward',
    type: 'ward',
    coordinates: [35.7457934, 139.6220211],
    description:
      '練馬 is usually rendered as 練 (to knead, to train) + 馬 (horse), but the etymology is more likely phonetic. Older documents write the area name as 根馬, 根間, or similar, possibly referring to 根 (root) and a marshy depression. Another reading suggests the flat land was used for horse training (練 = train, 馬 = horse) by the shogunate\'s cavalry, though this may be folk etymology. The area is also famous for the 練馬大根, a long white daikon radish cultivated here for centuries.',
  },
  {
    id: 'adachi',
    kanji: '足立区',
    romaji: 'Adachi-ku',
    english: 'Standing Foot Ward',
    type: 'ward',
    coordinates: [35.7780764, 139.7971887],
    description:
      '足立 reads as 足 (foot, leg, enough) + 立 (stand, rise). The name derives from the ancient Adachi District of Musashi Province, already recorded in the Nara period. The most plausible origin is the Adachi clan, local warrior-lords of the Kamakura period. The characters may alternatively be read as "where feet stand firm" — flat, stable ground — in contrast to the marshy lowlands surrounding the area.',
  },
  {
    id: 'katsushika',
    kanji: '葛飾区',
    romaji: 'Katsushika-ku',
    english: 'Kudzu Ornament Ward',
    type: 'ward',
    coordinates: [35.7541506, 139.8539042],
    description:
      '葛飾 combines 葛 (kudzu vine) and 飾 (decoration, adornment). The name appears in the Man\'yōshū (8th-century poetry anthology) in a famous poem by Hitomaro, making it one of the oldest place names in the Tokyo area. Scholars believe it originally described kudzu-covered marshlands along the lower Edogawa. The area also gave its name to Katsushika Hokusai, the ukiyo-e master who was born in this district and signed many of his works with the area\'s ancient name.',
  },
  {
    id: 'edogawa',
    kanji: '江戸川区',
    romaji: 'Edogawa-ku',
    english: 'Edo River Ward',
    type: 'ward',
    coordinates: [35.6410206, 139.8581612],
    description:
      '江戸川 combines 江戸 (the old name for Tokyo, meaning "river gate" or "estuary inlet") and 川 (river). The Edogawa forms the eastern boundary of the ward and of Tokyo itself, separating it from Chiba Prefecture. The river\'s own name comes from the historical name "Edo" — itself possibly derived from 江 (inlet) + 戸 (gate, door), describing the river mouth where the old town of Edo was established.',
  },

  // ─── Neighborhoods & Towns ──────────────────────────────────────────────────

  // CHIYODA-KU
  {
    id: 'akihabara',
    kanji: '秋葉原',
    romaji: 'Akihabara',
    english: 'Autumn Leaf Field',
    type: 'neighborhood',
    coordinates: [35.6985629, 139.7735906],
    description:
      '秋葉原 reads as "autumn leaf field" — 秋 (autumn) + 葉 (leaf) + 原 (field, plain). After a great fire swept through the area in 1869, the Meiji government cleared the land and planted fire-resistant grasses and wildflowers, creating an open field that bloomed with autumn foliage. The field was dedicated to Akiba Daigongen, a fire-prevention deity, and the shrine\'s name (秋葉 = autumn leaf) attached itself to the whole district. The world-famous electronics market developed here after WWII, when surplus radio parts dealers clustered near the station.',
    ward: '千代田区',
  },
  {
    id: 'kanda',
    kanji: '神田',
    romaji: 'Kanda',
    english: "God's Rice Field",
    type: 'neighborhood',
    coordinates: [35.6917939, 139.7709112],
    description:
      '神田 means "god\'s rice field" — 神 (god, deity) + 田 (rice paddy). Sacred rice paddies dedicated to the Kanda Shrine (神田明神) occupied this land in the early Edo period, and the produce was offered as ritual tribute to the shrine. The shrine itself, one of Tokyo\'s three great Shinto shrines, still stands nearby. The area later became famous for its booksellers, universities, and the dense neighborhood of small shops that persist today.',
    ward: '千代田区',
  },
  {
    id: 'marunouchi',
    kanji: '丸の内',
    romaji: 'Marunouchi',
    english: 'Inside the Circle',
    type: 'neighborhood',
    coordinates: [35.6804789, 139.7653906],
    description:
      '丸の内 means "inside the round enclosure" — 丸 (circle, fortification) + の (possessive) + 内 (inside). The name describes its location within the outer moat system of Edo Castle, where daimyo mansions and the shogunate\'s retainer compounds clustered. After the Meiji Restoration, these estates were sold to Mitsubishi, which transformed the area into Tokyo\'s central business district. The "circle within" refers to the ring of moats, a few traces of which survive as the Imperial Palace moat today.',
    ward: '千代田区',
  },
  {
    id: 'yurakucho',
    kanji: '有楽町',
    romaji: 'Yūrakuchō',
    english: 'Pleasure Ward Town',
    type: 'neighborhood',
    coordinates: [35.6742497, 139.7615298],
    description:
      '有楽町 is named after Oda Urakusai (織田有楽斎, 1547–1621), younger brother of the warlord Oda Nobunaga. 有楽 was his tea-ceremony pen name, combining 有 (to have, to be) and 楽 (pleasure, comfort, music). After the Battle of Sekigahara, Urakusai retired to this area of Edo where his estate occupied what is now the district. The suffix 町 means "town." Urakusai is also famed as the designer of Joan, a National Treasure tea house that still stands in Inuyama.',
    ward: '千代田区',
  },

  // CHŪŌ-KU
  {
    id: 'ginza',
    kanji: '銀座',
    romaji: 'Ginza',
    english: 'Silver Mint',
    type: 'neighborhood',
    coordinates: [35.6695059, 139.7655024],
    description:
      '銀座 literally means "silver mint" or "silver guild" — 銀 (silver) + 座 (seat, guild, official workshop). In 1612, the Tokugawa shogunate established a silver-coin mint here, the Ginza Kaishō, to regulate the currency of Edo. Though the mint moved to Shizuoka in 1800, the name remained. By the Meiji era, Ginza had been rebuilt in brick after a great fire and became Tokyo\'s first Western-style boulevard, cementing its identity as the city\'s most prestigious shopping address.',
    ward: '中央区',
  },
  {
    id: 'nihonbashi',
    kanji: '日本橋',
    romaji: 'Nihonbashi',
    english: 'Japan Bridge',
    type: 'neighborhood',
    coordinates: [35.6812036, 139.7745141],
    description:
      '日本橋 means "Japan Bridge" — 日本 (Japan) + 橋 (bridge). The bridge built here in 1603, the year Ieyasu established the Tokugawa shogunate, was declared the starting point of all five great highways of Edo Japan. Every distance to and from the capital was measured from this bridge, making it the literal kilometer zero of the nation. The current stone bridge, built in 1911, still carries the imperial chrysanthemum crest, though it is now shadowed by an elevated expressway.',
    ward: '中央区',
  },
  {
    id: 'tsukishima',
    kanji: '月島',
    romaji: 'Tsukishima',
    english: 'Moon Island',
    type: 'neighborhood',
    coordinates: [35.6630641, 139.7815701],
    description:
      '月島 means "moon island" — 月 (moon) + 島 (island). This neighborhood is a man-made island created from landfill dredged from Tokyo Bay in 1892. The crescent shape of the reclaimed land inspired the poetic name. The island is most famous today as the birthplace of monjayaki, a runny, savory pancake descended from old shitamachi street food, and the main street lined with monjayaki restaurants is a living record of that working-class culinary heritage.',
    ward: '中央区',
  },

  // MINATO-KU
  {
    id: 'roppongi',
    kanji: '六本木',
    romaji: 'Roppongi',
    english: 'Six Trees',
    type: 'neighborhood',
    coordinates: [35.6628841, 139.7336617],
    description:
      '六本木 means "six trees" — 六 (six) + 本 (counter for long, thin objects, including trees) + 木 (tree, wood). The most widely cited legend holds that six daimyo estates in the Edo period each had a name containing the character 木 (tree): Aoki, Hitotsuyanagi, Kuranuki, Naiki, Rokugō, and Uchida. Others say six large zelkova trees marked a crossroads here. Whichever origin is correct, the "six trees" name has proven remarkably durable, surviving the district\'s transformation from samurai estates to one of Tokyo\'s most internationally recognized entertainment districts.',
    ward: '港区',
  },
  {
    id: 'azabu',
    kanji: '麻布',
    romaji: 'Azabu',
    english: 'Hemp Cloth',
    type: 'neighborhood',
    coordinates: [35.6562947, 139.7274552],
    description:
      '麻布 means "hemp cloth" — 麻 (hemp, flax) + 布 (cloth, fabric). Hemp was cultivated on the gentle slopes of this area in the early Edo period, and the cloth woven from it was used for everything from samurai undergarments to temple offerings. The district later became home to many daimyo estates and, after the Meiji opening, to foreign embassies — a shift from hemp fields to diplomatic quarter that the name commemorates without knowing it.',
    ward: '港区',
  },
  {
    id: 'akasaka',
    kanji: '赤坂',
    romaji: 'Akasaka',
    english: 'Red Slope',
    type: 'neighborhood',
    coordinates: [35.6713312, 139.7358747],
    description:
      '赤坂 means "red slope" — 赤 (red) + 坂 (slope, hill). The name describes the color of the soil: the hillside here is composed of red-tinted clay, a type of laterite common on the Musashino Plateau. When it rained, the clay would wash down the slope in vivid reddish streams, giving the hill its distinctive hue and name. The area was heavily settled by daimyo mansions in the Edo period; today it is home to the official residence of the Prime Minister.',
    ward: '港区',
  },
  {
    id: 'toranomon',
    kanji: '虎ノ門',
    romaji: 'Toranomon',
    english: 'Tiger Gate',
    type: 'neighborhood',
    coordinates: [35.6659726, 139.7462543],
    description:
      '虎ノ門 means "tiger gate" — 虎 (tiger) + ノ (possessive particle) + 門 (gate). One of the outer gates of Edo Castle stood at this location, reportedly decorated with carved tigers. In Chinese cosmology, the tiger governs the west, and this gate faced roughly westward from the castle. The gate itself was demolished in 1874, but the name proved too vivid to abandon. The district is now a high-density office and hotel cluster, though the massive new Toranomon Hills towers have given the "gate" metaphor new architecture to work with.',
    ward: '港区',
  },
  {
    id: 'shirogane',
    kanji: '白金',
    romaji: 'Shirogane',
    english: 'White Gold',
    type: 'neighborhood',
    coordinates: [35.6431583, 139.7283687],
    description:
      '白金 is read as "white gold" or "platinum" — 白 (white) + 金 (gold, metal). The name likely refers to the whitish, sandy soil on the upland here, which contrasted with the dark clay of the lower valleys. Another theory holds that the area was named for a wealthy landowner with a silver-white family crest. The district is today one of Tokyo\'s most expensive residential areas, a neighborhood so associated with wealthy housewives that the Japanese coined the portmanteau 白金台マダム (Shirogane-dai madam) to describe the type.',
    ward: '港区',
  },
  {
    id: 'takanawa',
    kanji: '高輪',
    romaji: 'Takanawa',
    english: 'High Ring',
    type: 'neighborhood',
    coordinates: [35.6340722, 139.7357477],
    description:
      '高輪 is composed of 高 (high, tall) + 輪 (ring, wheel, circle). The most likely origin is "高縄" (high rope), referring to an elevated road (高縄道) that ran along the ridge here during the Edo period. Over time, 縄 (rope) was replaced with the homophonous 輪 (ring), giving the name a more elegant written form. The area slopes steeply from the upland toward the bay, and the old Tōkaidō road that once ran along the shore here made Takanawa a ceremonial entry point into Edo.',
    ward: '港区',
  },

  // SHIBUYA-KU
  {
    id: 'harajuku',
    kanji: '原宿',
    romaji: 'Harajuku',
    english: 'Meadow Lodging',
    type: 'neighborhood',
    coordinates: [35.6704511, 139.7026703],
    description:
      '原宿 means "meadow post town" — 原 (meadow, open field) + 宿 (lodging, post station). Harajuku-juku was a small relay station on the Kōshū Kaidō road in the Edo period, named for the open grasslands that surrounded it. The area\'s transformation began after Meiji Shrine was built in 1920 and accelerated after WWII when the US military commandeered nearby Washington Heights. When the military departed, the facilities became the Olympic Village for 1964, and the resulting influx of foreign culture seeded the youth fashion subcultures that Harajuku is now known for worldwide.',
    ward: '渋谷区',
  },
  {
    id: 'daikanyama',
    kanji: '代官山',
    romaji: 'Daikanyama',
    english: "Magistrate's Hill",
    type: 'neighborhood',
    coordinates: [35.6481642, 139.7032482],
    description:
      '代官山 means "magistrate\'s hill" — 代官 (local government magistrate) + 山 (mountain, hill). During the Edo period, a daikan (代官) — a regional administrator who collected taxes and oversaw villages on behalf of the shogunate — maintained his residence on this hill. The gentle slopes and pleasant aspect made it attractive to officials; today those same qualities make it one of Tokyo\'s most desirable and design-conscious residential addresses.',
    ward: '渋谷区',
  },
  {
    id: 'ebisu',
    kanji: '恵比寿',
    romaji: 'Ebisu',
    english: 'God of Prosperity',
    type: 'neighborhood',
    coordinates: [35.6450633, 139.7165965],
    description:
      '恵比寿 is the name of Ebisu, one of Japan\'s Seven Lucky Gods (七福神), the cheerful deity of fishermen, commerce, and luck. The neighborhood was named not directly for the god but for the Yebisu Beer brewery (恵比寿麦酒) established here in 1890 by the Japan Beer Brewing Company, which chose Ebisu as its mascot for his associations with prosperity and good fortune. The brewery name then became the station name, and the station name became the district name — a rare case of branding becoming geography.',
    ward: '渋谷区',
  },
  {
    id: 'aoyama',
    kanji: '青山',
    romaji: 'Aoyama',
    english: 'Blue Mountain',
    type: 'neighborhood',
    coordinates: [35.6608269, 139.7076569],
    description:
      '青山 means "blue mountain" or "green mountain" — 青 (blue, green, the color of growing things) + 山 (mountain). The name comes from the Aoyama clan, powerful retainers of the Tokugawa shogunate whose vast estate covered what is now the Aoyama Cemetery and the surrounding streets. The clan name itself likely referenced the forested, verdant hills of their ancestral domain in Mikawa Province. The estate was taken over by the Meiji government after 1868 and gradually opened to the public.',
    ward: '渋谷区',
  },
  {
    id: 'omotesando',
    kanji: '表参道',
    romaji: 'Omotesandō',
    english: 'Main Shrine Approach',
    type: 'neighborhood',
    coordinates: [35.6677042, 139.7072068],
    description:
      '表参道 means "front approach road to the shrine" — 表 (front, main, public face) + 参道 (the sacred path leading to a Shinto shrine or Buddhist temple). This broad, tree-lined avenue was laid out in 1920 as the main approach to Meiji Shrine, lined with zelkova trees that still shade the boulevard. The "front" (表) approach is the formal, ceremonial entry, as opposed to a rear path. Today the street functions as Tokyo\'s answer to the Champs-Élysées, lined with flagship stores of global luxury brands.',
    ward: '渋谷区',
  },
  {
    id: 'shoto',
    kanji: '松濤',
    romaji: 'Shōtō',
    english: 'Pine Waves',
    type: 'neighborhood',
    coordinates: [35.6604542, 139.6919858],
    description:
      '松濤 is a poetic name meaning "pine waves" — 松 (pine tree) + 濤 (great waves, surging sea). The name evokes the sound of wind surging through pine branches, mimicking ocean waves — a classical literary image in both Chinese and Japanese poetry. The neighborhood was developed as an exclusive residential enclave in the early 20th century. Today it is one of the highest-value residential addresses in Tokyo, known for quiet streets, embassies, and the Shōtō Museum of Art.',
    ward: '渋谷区',
  },

  // SHINJUKU-KU
  {
    id: 'kagurazaka',
    kanji: '神楽坂',
    romaji: 'Kagurazaka',
    english: 'Sacred Music Slope',
    type: 'neighborhood',
    coordinates: [35.7012594, 139.7390066],
    description:
      '神楽坂 means "kagura slope" — 神楽 (sacred Shinto music and dance performed at shrines) + 坂 (slope). The name refers to kagura performances held at Akagi Shrine, which stands at the top of the hill. In the Edo period, the slope leading up to the shrine was lined with teahouses and entertainment venues catering to worshippers and pleasure-seekers. The neighborhood retains an unusually intact traditional townscape of stone-paved alleys (横丁) and former geisha houses, now converted into restaurants and boutiques.',
    ward: '新宿区',
  },
  {
    id: 'yotsuya',
    kanji: '四谷',
    romaji: 'Yotsuya',
    english: 'Four Valleys',
    type: 'neighborhood',
    coordinates: [35.6861629, 139.7229223],
    description:
      '四谷 means "four valleys" — 四 (four) + 谷 (valley). The neighborhood sits at the intersection of four natural valleys carved by small streams descending from the Musashino Plateau. This topography of converging valleys created a natural crossroads that became a post town on the Kōshū Kaidō highway. The area is also famous as the setting of Yotsuya Kaidan, Japan\'s most famous ghost story, first performed in 1825, whose vengeful spirit Oiwa has haunted Japanese popular culture ever since.',
    ward: '新宿区',
  },
  {
    id: 'waseda',
    kanji: '早稲田',
    romaji: 'Waseda',
    english: 'Early Rice Field',
    type: 'neighborhood',
    coordinates: [35.7058028, 139.721191],
    description:
      '早稲田 means "early-ripening rice field" — 早稲 (an early-ripening variety of rice) + 田 (paddy field). The area was known in the Edo period for growing waseda-mai, a variety of rice that matured before the autumn rains and could therefore be harvested safely. The name became global when Ōkuma Shigenobu founded Tōkyō Senmon Gakkō here in 1882, later renamed Waseda University — one of Japan\'s most prestigious private universities, which now completely defines the neighborhood\'s identity.',
    ward: '新宿区',
  },
  {
    id: 'okubo',
    kanji: '大久保',
    romaji: 'Ōkubo',
    english: 'Great Hollow',
    type: 'neighborhood',
    coordinates: [35.7037555, 139.7048254],
    description:
      '大久保 means "great hollow" or "great low-lying land" — 大 (great, large) + 久保 (a low-lying depression or hollow in the ground). Kubo (久保) is an old topographic term for a natural depression, swale, or bowl-shaped low point in the land. The area sits in a geographical depression surrounded by higher ground, which the name faithfully records. Today Ōkubo is the heart of Tokyo\'s Korean community, and the stretch near the station known as "Korea Town" is dense with Korean restaurants, supermarkets, and beauty shops.',
    ward: '新宿区',
  },
  {
    id: 'kabukicho',
    kanji: '歌舞伎町',
    romaji: 'Kabukichō',
    english: 'Kabuki Theater District',
    type: 'neighborhood',
    coordinates: [35.6954855, 139.7031063],
    description:
      '歌舞伎町 means "kabuki theater town" — 歌舞伎 (kabuki, the classical Japanese theater form) + 町 (town, district). After WWII, local residents planned to rebuild the war-ravaged district as a cultural hub centered on a new kabuki theater. The theater was never built — funding fell through — but the name had already been officially registered in 1948 and stuck. The district became instead Tokyo\'s largest entertainment and nightlife area, retaining its theatrical name without its theatrical ambition.',
    ward: '新宿区',
  },

  // TAITO-KU
  {
    id: 'asakusa',
    kanji: '浅草',
    romaji: 'Asakusa',
    english: 'Shallow Grass',
    type: 'neighborhood',
    coordinates: [35.7170412, 139.7986682],
    description:
      '浅草 means "shallow grass" — 浅 (shallow) + 草 (grass, plants). The name likely describes the shallow reeds and marsh grasses that grew along the banks of the Sumida River where this neighborhood sits. The founding legend of Sensō-ji, Tokyo\'s oldest temple, holds that two fishermen pulled a golden image of Kannon from the shallow waters of the river in 628 CE, and that the temple was built to enshrine it. Whether the grass or the legend came first, both point to the same shallow, reedy riverscape.',
    ward: '台東区',
  },
  {
    id: 'ueno',
    kanji: '上野',
    romaji: 'Ueno',
    english: 'Upper Field',
    type: 'neighborhood',
    coordinates: [35.7134128, 139.7765418],
    description:
      '上野 means "upper field" — 上 (upper, high) + 野 (field, plain). The name describes the Ueno plateau, a broad upland that rises above the low-lying shitamachi to the east and the Shinobazu marshes to the south. Kan\'ei-ji, the great Tokugawa funerary temple, was built on this upland in 1625, modeled on Enryaku-ji on Mount Hiei near Kyoto. After the Meiji Restoration, the temple grounds became Ueno Park — Tokyo\'s first public park — and the museums, zoo, and concert hall built there have defined the hill\'s character ever since.',
    ward: '台東区',
  },
  {
    id: 'yanaka',
    kanji: '谷中',
    romaji: 'Yanaka',
    english: 'Middle of the Valley',
    type: 'neighborhood',
    coordinates: [35.7250151, 139.7683222],
    description:
      '谷中 means "in the middle of the valley" — 谷 (valley) + 中 (middle, center). The neighborhood occupies a long valley between the Ueno plateau to the south and the Yanaka hills to the north. Because it escaped the 1923 Great Kantō Earthquake and the WWII firebombing largely intact, Yanaka retains a remarkable density of old wooden temples, grave yards, craft shops, and traditional townhouses (machiya). It is often described as the closest thing remaining to old Shitamachi Tokyo.',
    ward: '台東区',
  },
  {
    id: 'nezu',
    kanji: '根津',
    romaji: 'Nezu',
    english: 'Root Harbor',
    type: 'neighborhood',
    coordinates: [35.7173914, 139.7657175],
    description:
      '根津 is read as 根 (root, base) + 津 (harbor, crossing, ford). The 津 character historically denoted a place where one crossed a body of water, and this area sits at the foot of the Ueno upland where streams from the plateau met the lowlands. The "roots" may refer to the base of the hill, where the crossing was located. Nezu Shrine, dating to the 5th century, is famous for its long tunnel of vermilion torii gates — a smaller, less crowded counterpart to Fushimi Inari in Kyoto.',
    ward: '台東区',
  },
  {
    id: 'yushima',
    kanji: '湯島',
    romaji: 'Yushima',
    english: 'Hot Spring Island',
    type: 'neighborhood',
    coordinates: [35.71496, 139.795377],
    description:
      '湯島 means "hot spring island" — 湯 (hot water) + 島 (island). The area was once nearly surrounded by marshy ground, making it a raised "island" of dry land. The hot water component likely refers to natural warm springs that were reported in the area in ancient records, or possibly to a bathhouse that served the neighborhood. Yushima Tenman-gū shrine, dedicated to Sugawara no Michizane, the god of learning, draws thousands of students each year to pray before university entrance examinations.',
    ward: '台東区',
  },

  // BUNKYO-KU
  {
    id: 'hongo',
    kanji: '本郷',
    romaji: 'Hongō',
    english: 'Original Home Village',
    type: 'neighborhood',
    coordinates: [35.7084776, 139.7602961],
    description:
      '本郷 means "original home village" or "main village" — 本 (main, original, true) + 郷 (home village, rural district). The name suggests this was the primary settled area on the Ueno plateau before the surrounding districts were developed. Hongō became the educational and intellectual heart of Tokyo when the government established Tokyo Imperial University here in 1877 on the grounds of the Maeda clan estate. Natsume Sōseki\'s novel "Sanshirō" (1908) chronicles a student\'s arrival in Hongō, and the area remains densely academic.',
    ward: '文京区',
  },
  {
    id: 'koishikawa',
    kanji: '小石川',
    romaji: 'Koishikawa',
    english: 'Small Pebble River',
    type: 'neighborhood',
    coordinates: [35.7146011, 139.745043],
    description:
      '小石川 means "small pebble river" — 小 (small) + 石 (stone, pebble) + 川 (river). A small stream with a stony, pebbly bed ran through this valley, and the neighborhood took its name from that stream. The area is famous for the Koishikawa Botanical Garden, established in 1684 as the Tokugawa shogunate\'s medicinal herb garden. The garden remains under Tokyo University\'s care today, covering more than 16 hectares with thousands of plant species on the same ground it has occupied for three and a half centuries.',
    ward: '文京区',
  },

  // MEGURO-KU
  {
    id: 'jiyugaoka',
    kanji: '自由が丘',
    romaji: 'Jiyūgaoka',
    english: 'Freedom Hill',
    type: 'neighborhood',
    coordinates: [35.610309, 139.6673987],
    description:
      '自由が丘 means "freedom hill" — 自由 (freedom, liberty) + が (possessive particle) + 丘 (hill). This is one of the few Tokyo neighborhood names with a known, documented origin: in 1932 the local residents\' association voted to rename the area from its old name of Jiyūgaoka Gakuen (after a progressive school founded there in 1927 on ideals of liberal education). The association chose "freedom" to honor those educational ideals and to distinguish the area from other neighborhoods. Today Jiyūgaoka is known for its French patisseries and European-style streetscape.',
    ward: '目黒区',
  },
  {
    id: 'nakameguro',
    kanji: '中目黒',
    romaji: 'Nakameguro',
    english: 'Middle Meguro',
    type: 'neighborhood',
    coordinates: [35.6400252, 139.7017134],
    description:
      '中目黒 means "middle Meguro" — 中 (middle) + 目黒 (the Meguro area, named for the black-eyed deity). The neighborhood sits in the middle of the Meguro River valley, between the upper reaches of the river to the south and the lower confluence to the north. The Meguro River itself is the defining feature: a narrow canal lined with cherry trees that become the most photographed in Tokyo each spring. The canal was largely covered in the early 20th century and later reopened as a linear park.',
    ward: '目黒区',
  },

  // SETAGAYA-KU
  {
    id: 'sangenjaya',
    kanji: '三軒茶屋',
    romaji: 'Sangenjaya',
    english: 'Three Teahouses',
    type: 'neighborhood',
    coordinates: [35.6412727, 139.667996],
    description:
      '三軒茶屋 means "three teahouses" — 三軒 (three buildings) + 茶屋 (teahouse). In the Edo period, the intersection of the Tamagawa Road and the Ōyama Kaidō highway was marked by exactly three teahouses where travelers stopped to rest and drink tea. Historical maps from the era name them individually: Isetan, Tanakaya, and Iseya. The intersection and its three buildings became such a landmark that the entire surrounding district took their number as its name, a rare case of commercial infrastructure becoming permanent geography.',
    ward: '世田谷区',
  },
  {
    id: 'shimokitazawa',
    kanji: '下北沢',
    romaji: 'Shimokitazawa',
    english: 'Lower North Marsh',
    type: 'neighborhood',
    coordinates: [35.6616779, 139.6663345],
    description:
      '下北沢 means "lower north marsh" — 下 (lower, below) + 北 (north) + 沢 (swamp, marsh, wet valley). The name describes the topography: a low-lying, marshy area in the northern part of the Setagaya lowlands. 沢 in Tokyo place names typically indicates former wetlands along small streams. The "lower" distinguishes it from higher ground to the south. Today Shimokitazawa is renowned as Tokyo\'s bohemian quarter — a dense mesh of vintage clothing stores, live music venues, independent theaters, and coffee shops that has preserved a human-scaled street environment against considerable development pressure.',
    ward: '世田谷区',
  },
  {
    id: 'kamiuma',
    kanji: '上馬',
    romaji: 'Kamiuma',
    english: 'Upper Horse',
    type: 'neighborhood',
    coordinates: [35.6371947, 139.6632862],
    description:
      '上馬 means "upper horse" — 上 (upper) + 馬 (horse). The Setagaya area was historically a region where the Tokugawa shogunate and various daimyo maintained horse pastures, breeding grounds, and riding ranges. The horses were essential for military readiness. 上馬 (Upper Horse) is paired with 下馬 (Shimoma, Lower Horse) nearby, the two names together marking the upper and lower ends of a horse-related administrative zone along the Tamagawa Road. The horse paddocks are long gone, but the topographic division persists in the street addresses.',
    ward: '世田谷区',
  },
  {
    id: 'komazawa',
    kanji: '駒沢',
    romaji: 'Komazawa',
    english: 'Colt Marsh',
    type: 'neighborhood',
    coordinates: [35.6300766, 139.6563744],
    description:
      '駒沢 means "colt marsh" or "young horse swamp" — 駒 (young horse, colt, pony) + 沢 (swamp, marsh). Young horses were raised in the marshy, grass-rich lowlands here during the Edo period, supplying the equestrian needs of the samurai class. 駒 is a more poetic term for horse than the common 馬, suggesting this may also carry an aesthetic dimension. Komazawa Olympic Park was built here for the 1964 Tokyo Games; the park\'s unusual curved gymnasium by architect Tange Kenzō remains one of Tokyo\'s finest mid-century structures.',
    ward: '世田谷区',
  },
  {
    id: 'todoroki',
    kanji: '等々力',
    romaji: 'Todoroki',
    english: 'Thunderous Roar',
    type: 'neighborhood',
    coordinates: [35.6087504, 139.6539825],
    description:
      '等々力 is a phonetic rendering of 轟き (todoroki), meaning "thunderous roar" or "rumbling." The characters 等々力 are ateji — characters chosen for their sound rather than their meaning (等 = equal, 々 = repetition marker, 力 = strength/power). The name imitates the sound of the waterfall in Todoroki Gorge, Tokyo\'s only natural ravine, which still exists as an extraordinary fragment of wild nature within the city. The stream cascades over basalt rocks in a narrow canyon, and the sound of that water gave the whole neighborhood its onomatopoetic name.',
    ward: '世田谷区',
  },
  {
    id: 'yoga',
    kanji: '用賀',
    romaji: 'Yōga',
    english: 'Yoga (Sanskrit)',
    type: 'neighborhood',
    coordinates: [35.6268809, 139.6364015],
    description:
      '用賀 is written with characters meaning "use" (用) and "celebration/congratulation" (賀), but these are almost certainly ateji — phonetic stand-ins. The name is believed to derive from the Sanskrit word "yoga," introduced to the area by ascetic Buddhist monks who practiced here during the Heian or Kamakura period. Some accounts name a specific Shingon monk who established a training hall here. If accurate, this makes Yōga one of the very few Tokyo neighborhoods whose name traces directly to Sanskrit through the vehicle of esoteric Buddhism.',
    ward: '世田谷区',
  },

  // KOTO-KU
  {
    id: 'kiba',
    kanji: '木場',
    romaji: 'Kiba',
    english: 'Timber Yard',
    type: 'neighborhood',
    coordinates: [35.6704235, 139.806175],
    description:
      '木場 means "timber yard" or "wood place" — 木 (wood, tree) + 場 (place, yard). For three centuries this was Tokyo\'s central lumber market: logs felled in the forests of Akita, Aomori, and Hokkaidō floated down rivers to the sea and were towed by boat into a vast network of canals here, where they were sorted, graded, and sold. Lumbermen navigated the floating logs with long poles, a skill called 木場の角乗り (kiba no kado-nori) still demonstrated at festivals. The timber market moved to Shin-Kiba in 1969, and Kiba Park now covers part of the old canal network.',
    ward: '江東区',
  },
  {
    id: 'kiyosumi',
    kanji: '清澄白河',
    romaji: 'Kiyosumi-Shirakawa',
    english: 'Clear Depths White River',
    type: 'neighborhood',
    coordinates: [35.6820504, 139.7987644],
    description:
      '清澄白河 combines two district names: 清澄 (Kiyosumi, "clear and pure depths") and 白河 (Shirakawa, "white river"). 清澄 references the clarity of the canal water once maintained here; the Iwasaki family (founders of Mitsubishi) created the Kiyosumi Garden in 1880 using stones brought by boat from across Japan. 白河 refers to the Shirakawa Canal, whose pale, sandy bed gave it a whitish appearance. The neighborhood has become a center of the Tokyo specialty coffee scene, partly because the proximity to the old fish market made it a natural destination for early-rising café culture.',
    ward: '江東区',
  },
  {
    id: 'monzen-nakacho',
    kanji: '門前仲町',
    romaji: 'Monzen-Nakacho',
    english: 'Middle Town Before the Gate',
    type: 'neighborhood',
    coordinates: [35.6723099, 139.7950785],
    description:
      '門前仲町 means "middle town in front of the shrine gate" — 門前 (in front of the gate) + 仲町 (middle town). 門前 towns were communities that grew up around the entrance to major shrines and temples throughout Japan, sustained by pilgrims, worshippers, and their associated commerce. Here the gate is that of Tomioka Hachimangu, one of the most important Hachiman shrines in the Kantō region, famous for its association with sumo wrestling: the sport\'s champion rankings (横綱, yokozuna) were first officially recorded here in 1799.',
    ward: '江東区',
  },

  // SUMIDA-KU
  {
    id: 'kinshicho',
    kanji: '錦糸町',
    romaji: 'Kinshichō',
    english: 'Brocade Thread Town',
    type: 'neighborhood',
    coordinates: [35.6963122, 139.8150431],
    description:
      '錦糸町 means "brocade thread town" — 錦糸 (gold or brocade thread, the finest quality woven thread) + 町 (town). The area was a center of weaving and textile production in the Edo period, particularly known for producing the high-quality silk thread used in brocade fabrics worn by wealthy merchants and samurai. The precise weaving techniques required demanded skilled artisans, and entire streets of weavers\' workshops gave the neighborhood its name. Today Kinshichō is a major commercial hub east of the Sumida River.',
    ward: '墨田区',
  },
  {
    id: 'mukojima',
    kanji: '向島',
    romaji: 'Mukōjima',
    english: 'Facing Island',
    type: 'neighborhood',
    coordinates: [35.7158641, 139.8076013],
    description:
      '向島 means "facing island" — 向 (facing, opposite, across from) + 島 (island). The neighborhood sits across the Sumida River from Asakusa, and from the Asakusa shore it appeared to be an island (a promontory of land surrounded on three sides by the river and its branches). The "facing" is from the perspective of Asakusa looking east across the water. Mukōjima was famous in the Edo period for its cherry blossom avenue along the river, planted in 1741 at the order of the eighth shogun Yoshimune.',
    ward: '墨田区',
  },

  // ARAKAWA-KU
  {
    id: 'minami-senju',
    kanji: '南千住',
    romaji: 'Minami-Senju',
    english: 'South Thousand Lives',
    type: 'neighborhood',
    coordinates: [35.7347624, 139.8012566],
    description:
      '南千住 means "south Senju" — 南 (south) + 千住 (Senju, "thousand lives"). The 千住 name comes from the Senju Kannon (千手観音), the thousand-armed Bodhisattva of Compassion enshrined at a local temple. The 千手 (a thousand hands) became 千住 (a thousand lives/lodgings) through a phonetic softening, reflecting the area\'s role as the first post town on the Ōshū Kaidō highway north of Edo. This district contains Kozukappara execution ground, one of Edo\'s three great execution sites, where tens of thousands were put to death over two and a half centuries — including the bandit Nezumi Kozō.',
    ward: '荒川区',
  },

  // KITA-KU
  {
    id: 'oji',
    kanji: '王子',
    romaji: 'Ōji',
    english: 'Prince',
    type: 'neighborhood',
    coordinates: [35.7595926, 139.7370564],
    description:
      '王子 means "prince" — 王 (king, sovereign) + 子 (son, child, person of rank). The name derives from Ōji Inari Shrine (王子稲荷神社), one of the most powerful Inari fox shrines in the Kantō region, which was granted the title "ōji" (prince of shrines) by the imperial court in the Muromachi period. The shrine presides over a famous legend: on the night of New Year\'s Eve, foxes from across the Kantō Plain gather beneath a large zelkova tree at nearby Ōji Inari and assume human form, dressed in court robes, to pay respects at the shrine.',
    ward: '北区',
  },
  {
    id: 'akabane',
    kanji: '赤羽',
    romaji: 'Akabane',
    english: 'Red Feather',
    type: 'neighborhood',
    coordinates: [35.7836659, 139.7217028],
    description:
      '赤羽 means "red feather" or "red wing" — 赤 (red) + 羽 (feather, wing). The most plausible origin is the reddish autumn foliage of the trees along the Akabane River, which historically ran through this area. Another theory points to a red-feathered bird species that nested in the wetlands. The district was militarily important in the Meiji era: the government built an army arsenal (赤羽火薬製造所) here in 1873, and the area remained an industrial and military center through WWII. Today it is known for its dense izakaya culture and lively street-drinking scene.',
    ward: '北区',
  },

  // TOSHIMA-KU
  {
    id: 'ikebukuro',
    kanji: '池袋',
    romaji: 'Ikebukuro',
    english: 'Bag Pond',
    type: 'neighborhood',
    coordinates: [35.7297878, 139.7101245],
    description:
      '池袋 means "bag pond" or "purse pond" — 池 (pond) + 袋 (bag, sack, pouch). The area had a low-lying pond or series of ponds shaped like a bag or purse, enclosed by higher ground on multiple sides. 袋地 (fukuro-chi) is a topographic term for a cul-de-sac or dead-end depression, and many Tokyo neighborhoods with 袋 in their names share this enclosed, bowl-shaped terrain. The pond was filled in during the Meiji era to make way for development, leaving only the name as evidence. Today Ikebukuro is one of the busiest train stations in the world.',
    ward: '豊島区',
  },
  {
    id: 'sugamo',
    kanji: '巣鴨',
    romaji: 'Sugamo',
    english: "Duck's Nest",
    type: 'neighborhood',
    coordinates: [35.7366998, 139.7371531],
    description:
      '巣鴨 means "duck\'s nest" — 巣 (nest) + 鴨 (wild duck, mallard). Wild ducks nested in the marshy lowlands and ponds of this area before Edo was fully developed. The nesting ducks were a common enough sight that the entire district took their behavior as its name. Sugamo is famous today as "Grandma\'s Harajuku" (おばあちゃんの原宿) — a shopping street (Jizō-dōri) lined with traditional confectionery, compression stockings, and red underwear shops, catering to an elderly clientele who find the area\'s quiet pace more appealing than Shibuya\'s chaos.',
    ward: '豊島区',
  },
  {
    id: 'zoshigaya',
    kanji: '雑司が谷',
    romaji: 'Zōshigaya',
    english: 'Officials Valley',
    type: 'neighborhood',
    coordinates: [35.7201803, 139.7184267],
    description:
      '雑司が谷 means "valley of the miscellaneous officials" — 雑司 (miscellaneous government officials, low-ranking functionaries) + が (possessive) + 谷 (valley). Government administrators and minor officials of the Edo shogunate maintained residences in this quiet valley near the Zōshigaya Kannon temple. The Zōshigaya Cemetery, established in 1874, holds the graves of several major Japanese literary figures including Natsume Sōseki, Lafcadio Hearn (Koizumi Yakumo), and Higuchi Ichiyō — whose face appears on the 5,000-yen note.',
    ward: '豊島区',
  },

  // SUGINAMI-KU
  {
    id: 'ogikubo',
    kanji: '荻窪',
    romaji: 'Ogikubo',
    english: 'Silver Grass Hollow',
    type: 'neighborhood',
    coordinates: [35.6973987, 139.6225012],
    description:
      '荻窪 means "hollow of silver grass" — 荻 (Japanese silver grass, miscanthus) + 窪 (hollow, depression in the ground). The area had a notable geographical depression filled with the tall, feathery pampas grass (薄/miscanthus) that turns silver-white in autumn. 窪 (kubo) is a common suffix in Tokyo place names, indicating a natural bowl or low point. Ogikubo was a station on the early Chūō Line and developed rapidly as a residential suburb; the area around the station is known for antique shops and jazz bars.',
    ward: '杉並区',
  },
  {
    id: 'koenji',
    kanji: '高円寺',
    romaji: 'Kōenji',
    english: 'Tall Circle Temple',
    type: 'neighborhood',
    coordinates: [35.7049419, 139.649909],
    description:
      '高円寺 is named after Kōen-ji Temple — 高 (tall, high) + 円 (circle, yen) + 寺 (temple). The temple, a Sōtō Zen Buddhist monastery, was established in the early Edo period; the third Tokugawa shogun, Iemitsu, reportedly visited and gave the temple its name. The neighborhood that grew around the temple took its name as well. Today Kōenji is known as a haven for Tokyo\'s counterculture — vintage clothing stores (there are said to be more than 50), live music venues, and a community that has resisted the chain-store homogenization of other Suginami neighborhoods.',
    ward: '杉並区',
  },
  {
    id: 'asagaya',
    kanji: '阿佐ヶ谷',
    romaji: 'Asagaya',
    english: 'Morning Valley',
    type: 'neighborhood',
    coordinates: [35.7048403, 139.6354724],
    description:
      '阿佐ヶ谷 is often read as "morning valley" — 阿佐 (a phonetic rendering, possibly of "morning" asa 朝) + が (possessive) + 谷 (valley). The 阿佐 is likely ateji — characters chosen for sound rather than meaning (阿 = flattery/corner, 佐 = assist). The true origin may be from the Asa clan who lived in this valley, or simply a phonetic recording of an older place name. A group of artists and writers lived in Asagaya in the 1920s, forming what became known as the Asagaya Artists Village (阿佐ヶ谷アーティストヴィレッジ), a bohemian community whose spirit the neighborhood still claims.',
    ward: '杉並区',
  },

  // NAKANO-KU
  {
    id: 'ochiai',
    kanji: '落合',
    romaji: 'Ochiai',
    english: 'River Confluence',
    type: 'neighborhood',
    coordinates: [35.7106637, 139.6859133],
    description:
      '落合 means "falling together" or "confluence" — 落 (to fall, to flow down) + 合 (to meet, to combine). The name describes the meeting point of two rivers: the Kanda River and the Myōshōji River flow together near this neighborhood. 落合 is a classic Japanese toponym for river confluences, found throughout the country. The neighborhood was home to many painters and artists in the Taisho and early Showa eras, drawn by the rural landscape of the confluence valley, which was not yet absorbed into the metropolitan sprawl.',
    ward: '中野区',
  },

  // NERIMA-KU
  {
    id: 'shakujii',
    kanji: '石神井',
    romaji: 'Shakujii',
    english: 'Stone God Well',
    type: 'neighborhood',
    coordinates: [35.7438271, 139.6061566],
    description:
      '石神井 means "stone god well" — 石 (stone) + 神 (god, spirit) + 井 (well, water source). The name likely refers to a sacred stone or stone altar associated with a water deity at a well or spring in the area. The Shakujii River takes its name from this district. Shakujii Park contains two ancient ponds (Sanpoji-ike and Shakujii-ike) surrounded by woodland, one of the largest green spaces in western Tokyo, and the remains of Shakujii Castle, a fortification of the Toshima clan destroyed by Ōta Dōkan in 1477.',
    ward: '練馬区',
  },

  // ITABASHI-KU
  {
    id: 'narimasu',
    kanji: '成増',
    romaji: 'Narimasu',
    english: 'Growing Prosperous',
    type: 'neighborhood',
    coordinates: [35.7809849, 139.6313338],
    description:
      '成増 means "growing prosperous" or "becoming more" — 成 (to become, to achieve) + 増 (to increase, to grow). The hopeful name may have been given to encourage agricultural prosperity in this once-rural area at the northwestern edge of Edo. During WWII, Narimasu Airfield was established here and became one of the main fighter bases defending Tokyo. After the war the US Army used the base, and the area developed rapidly; the airfield site is now Narimasu Aviation Park, where the control tower has been preserved.',
    ward: '板橋区',
  },

  // ADACHI-KU
  {
    id: 'kita-senju',
    kanji: '北千住',
    romaji: 'Kita-Senju',
    english: 'North Thousand Lives',
    type: 'neighborhood',
    coordinates: [35.748916, 139.8047536],
    description:
      '北千住 means "north Senju" — 北 (north) + 千住. The 千住 name derives from the Senju Kannon (千手観音, Thousand-Handed Guanyin) enshrined at Senju Yagenbori, a temple established in the 10th century. The phonetic similarity between 千手 (a thousand hands) and 千住 (a thousand dwelling places) led to a gradual character substitution that gave the post town a new civic meaning: a place of a thousand homes. Kita-Senju was the first major station on the Ōshū Kaidō north of Edo, where the poet Matsuo Bashō famously departed on his journey depicted in Oku no Hosomichi in 1689.',
    ward: '足立区',
  },

  // KATSUSHIKA-KU
  {
    id: 'shibamata',
    kanji: '柴又',
    romaji: 'Shibamata',
    english: 'Brushwood Further',
    type: 'neighborhood',
    coordinates: [35.7561784, 139.8778422],
    description:
      '柴又 is composed of 柴 (brushwood, small firewood) + 又 (again, further, another branch). The name likely described an area of brushwood thickets extending along a fork in the old waterway. The characters may also reflect an older phonetic rendering of a name now lost. Shibamata is beloved across Japan as the setting of the long-running film series "Otoko wa Tsurai yo" (It\'s Tough Being a Man, 1969–1997), featuring the wandering salesman Tora-san. The Taishakuten temple, the covered shopping street, and the riverside path remain largely unchanged since the films were made.',
    ward: '葛飾区',
  },

  // SHINAGAWA-KU
  {
    id: 'osaki',
    kanji: '大崎',
    romaji: 'Ōsaki',
    english: 'Great Cape',
    type: 'neighborhood',
    coordinates: [35.6202583, 139.7266441],
    description:
      '大崎 means "great promontory" — 大 (great, large) + 崎 (cape, headland, promontory). The name describes the prominent landform where the Musashino Plateau extends southward toward the bay as a distinct headland, visible from the water in the pre-reclamation era. The shoreline here jutted out noticeably from the surrounding coast. The area was heavily industrialized in the Meiji and Taisho eras, with ironworks and manufacturing plants that have since been replaced by the gleaming Thinkpark office towers that now characterize Ōsaki\'s skyline.',
    ward: '品川区',
  },
  {
    id: 'gotanda',
    kanji: '五反田',
    romaji: 'Gotanda',
    english: 'Five Tan of Rice Field',
    type: 'neighborhood',
    coordinates: [35.6270423, 139.7242627],
    description:
      '五反田 means "five tan of rice paddy" — 五 (five) + 反 (a traditional unit of land area, approximately 0.1 hectare or 1,000 square meters) + 田 (rice field). Five tan (about 0.5 hectares) of rice paddies characterized this low-lying riverside area. The unit 反 (also pronounced tan) was a standard measurement in the Edo agricultural census, and many Tokyo place names preserve such cadastral measurements. The Meguro River ran through the paddies here, and the area remained agricultural until the Yamanote Line arrived in 1911.',
    ward: '品川区',
  },

  // OTA-KU
  {
    id: 'kamata',
    kanji: '蒲田',
    romaji: 'Kamata',
    english: 'Cattail Field',
    type: 'neighborhood',
    coordinates: [35.5636433, 139.7218633],
    description:
      '蒲田 means "cattail field" — 蒲 (cattail, bulrush, the plant Typha) + 田 (field). The area was marshy and wet, ideal for the cattail plants that grew densely along the shore of Tokyo Bay and its inlets. 蒲 (gama) is the tall aquatic plant with its distinctive brown seed head, used for weaving mats and providing material for thatched roofing. The area became famous in the 1920s for Kamata Film Studios (蒲田撮影所), Japan\'s largest film production facility, which operated here from 1920 to 1936 and helped define early Japanese cinema.',
    ward: '大田区',
  },
  {
    id: 'omori',
    kanji: '大森',
    romaji: 'Ōmori',
    english: 'Great Forest',
    type: 'neighborhood',
    coordinates: [35.5884735, 139.7279334],
    description:
      '大森 means "great forest" — 大 (great, large) + 森 (forest). The area was covered by a large forest before the expansion of Edo. The name is also associated with the Ōmori Shell Mounds (大森貝塚), discovered in 1877 by American zoologist Edward S. Morse while riding a train and noticing shells eroding from a railway cut. These prehistoric refuse heaps established that Japan had been inhabited long before the historical record began, founding the discipline of Japanese archaeology.',
    ward: '大田区',
  },
  {
    id: 'ikegami',
    kanji: '池上',
    romaji: 'Ikegami',
    english: 'Above the Pond',
    type: 'neighborhood',
    coordinates: [35.5743803, 139.7042578],
    description:
      '池上 means "above the pond" or "on the pond" — 池 (pond) + 上 (above, upper). The neighborhood sits on elevated ground overlooking what were once wetlands and ponds below. Ikegami is home to Ikegami Honmon-ji, one of the most important temples of the Nichiren Buddhist sect. Nichiren himself died here in 1282 after coming from Mount Minobu for medical treatment, and the anniversary ceremony (お会式, Ō-eshiki) each October draws tens of thousands of torch-bearing devotees in one of Tokyo\'s most atmospheric religious festivals.',
    ward: '大田区',
  },

  // EDOGAWA-KU
  {
    id: 'koiwa',
    kanji: '小岩',
    romaji: 'Koiwa',
    english: 'Small Rock',
    type: 'neighborhood',
    coordinates: [35.7331837, 139.8818996],
    description:
      '小岩 means "small rock" — 小 (small) + 岩 (rock, boulder). The name likely refers to rocks in or along the Edo River that marked a ford or landing point. River crossings in pre-bridge Japan were often identified by distinctive natural features like rocks, and such features frequently became the names of the surrounding settlements. Koiwa is today the easternmost neighborhood in Tokyo on the Sōbu Line before the train crosses the Edogawa into Chiba Prefecture, giving it a liminal, boundary-marking quality that mirrors its original role.',
    ward: '江戸川区',
  },

  // ─── Tokyo City ─────────────────────────────────────────────────────────────

  {
    id: 'tokyo',
    kanji: '東京',
    romaji: 'Tōkyō',
    english: 'Eastern Capital',
    type: 'city',
    coordinates: [35.6768601, 139.7638947],
    description:
      '東京 means "eastern capital" — 東 (east) + 京 (capital). The name was bestowed in September 1868 when the Emperor Meiji relocated the imperial court from Kyoto (京都, "capital city") to the old shogunal city of Edo. By calling it the "Eastern Capital," the Meiji government signaled both a geographic shift — eastward from Kyoto — and the dawn of a new era. Edo itself was an ancient name meaning roughly "river gate" or "estuary inlet," describing the mouth of the Edo River where the city was founded by warlord Ōta Dōkan in 1457.',
  },

  // ─── Additional Neighborhoods ────────────────────────────────────────────────

  // SHIBUYA-KU
  {
    id: 'yoyogi',
    kanji: '代々木',
    romaji: 'Yoyogi',
    english: 'Generation Trees',
    type: 'neighborhood',
    coordinates: [35.6790392, 139.6956407],
    description:
      '代々木 means "generation upon generation of trees" — 代々 (generation after generation) + 木 (tree). The name is commonly traced to a cedar (or zelkova) that had stood at the site for so many generations it became a local landmark. An alternative etymology holds that the original name was "Yono Ki" (夜の木, evening tree), which phonetically drifted into Yoyogi. The area became Yoyogi Park after WWII, when the US military\'s Washington Heights housing complex was built here, then returned to Tokyo in 1964 as the Olympic Village.',
    ward: '渋谷区',
  },
  {
    id: 'hatagaya',
    kanji: '幡ヶ谷',
    romaji: 'Hatagaya',
    english: 'Banner Valley',
    type: 'neighborhood',
    coordinates: [35.6776296, 139.6744631],
    description:
      '幡ヶ谷 means "banner valley" — 幡 (banner, pennant) + が (possessive) + 谷 (valley). The name likely commemorates festival banners or battle standards that marked the valley. One local tradition holds that a shrine festival here featured tall, brightly colored banners visible from a great distance, making the valley easily identifiable by its flags. The valley topography is still faintly traceable in the gradient of the streets.',
    ward: '渋谷区',
  },
  {
    id: 'sasazuka',
    kanji: '笹塚',
    romaji: 'Sasazuka',
    english: 'Bamboo Grass Mound',
    type: 'neighborhood',
    coordinates: [35.6761014, 139.6665759],
    description:
      '笹塚 means "bamboo grass mound" — 笹 (sasa, the dwarf bamboo grass that carpets Japanese forest floors) + 塚 (mound, burial tumulus). A raised earthen mound covered with sasa bamboo was the defining feature of this otherwise flat suburban landscape. Such mounds frequently mark ancient burial sites (古墳) or boundary markers from the early Japanese state. The mound itself has long since been graded away, but its botanical-topographic name has survived.',
    ward: '渋谷区',
  },
  {
    id: 'hatsudai',
    kanji: '初台',
    romaji: 'Hatsudai',
    english: 'First Plateau',
    type: 'neighborhood',
    coordinates: [35.6779416, 139.685089],
    description:
      '初台 means "first plateau" or "first terrace" — 初 (first, beginning) + 台 (elevated ground, platform, terrace). Traveling west from Shinjuku, this was the first piece of noticeably elevated ground one encountered — a natural topographic marker on the Kōshū Kaidō road. The Tokyo Opera City and New National Theatre now occupy the former site of a gas works, giving this once-quiet neighborhood an unexpected cultural identity.',
    ward: '渋谷区',
  },

  // SHINJUKU-KU
  {
    id: 'ushigome',
    kanji: '牛込',
    romaji: 'Ushigome',
    english: 'Cattle Enclosure',
    type: 'neighborhood',
    coordinates: [35.6973431, 139.7315529],
    description:
      '牛込 means "cattle enclosure" — 牛 (cattle, ox) + 込 (enclosed area, confined space). The area had a pen or enclosure where oxen used for transport and agricultural labor were kept in the early Edo period. The Ushigome gate (牛込見附) was one of the outer gates of Edo Castle, positioned near this livestock area. The neighborhood is known for Akagi Shrine and the atmospheric stone steps that feature in scenes from Natsume Sōseki\'s novel "Kokoro."',
    ward: '新宿区',
  },
  {
    id: 'ichigaya',
    kanji: '市谷',
    romaji: 'Ichigaya',
    english: 'Market Valley',
    type: 'neighborhood',
    coordinates: [35.6969892, 139.7434345],
    description:
      '市谷 means "market valley" — 市 (market, marketplace) + 谷 (valley). A periodic market was held in this valley during the early Edo period, where merchants and farmers traded. The valley terrain made it a natural gathering point for commerce. The Ichigaya area is now known primarily for the Japan Self-Defense Forces headquarters and the Japan Kaikan, where the war crimes tribunal (the Tokyo Trials) convened from 1946 to 1948.',
    ward: '新宿区',
  },
  {
    id: 'nishi-shinjuku',
    kanji: '西新宿',
    romaji: 'Nishi-Shinjuku',
    english: 'West New Lodging',
    type: 'neighborhood',
    coordinates: [35.6898921, 139.6916486],
    description:
      '西新宿 means "west new lodging" — 西 (west) + 新宿 (the new post town). The western side of Shinjuku was largely unused land occupied by the Tokyo Metropolitan waterworks until the 1960s, when it was redeveloped as an administrative and commercial center. The Tokyo Metropolitan Government Building, designed by Tange Kenzō and completed in 1991, anchors the skyline. The dense cluster of skyscrapers makes Nishi-Shinjuku one of the most visually dramatic urban landscapes in Asia.',
    ward: '新宿区',
  },
  {
    id: 'kojimachi',
    kanji: '麹町',
    romaji: 'Kōjimachi',
    english: 'Ferment Town',
    type: 'neighborhood',
    coordinates: [35.6840302, 139.7376724],
    description:
      '麹町 means "koji town" — 麹 (koji, the Aspergillus mold used to ferment sake, miso, and soy sauce) + 町 (town). Koji producers and their shops were concentrated here, supplying the fermentation cultures essential to Edo\'s food economy. The mold was produced by cultivating spores on steamed rice or barley, a technically demanding craft. The area later became a prestigious residential neighborhood for the upper samurai class, a transition from fermenter\'s quarter to elite enclave that the name alone would never suggest.',
    ward: '新宿区',
  },

  // CHIYODA-KU
  {
    id: 'nagatachō',
    kanji: '永田町',
    romaji: 'Nagatachō',
    english: 'Eternal Field Town',
    type: 'neighborhood',
    coordinates: [35.6756517, 139.7432475],
    description:
      '永田町 contains 永田 (Nagata, a surname meaning "eternal field" — 永 = eternal, 田 = field) + 町 (town). The area was named after the Nagata family, who held land here during the Edo period. Today it is synonymous with Japanese political power: the National Diet Building, the Prime Minister\'s Official Residence (Kantei), and the party headquarters of Japan\'s major political parties are all located here. "Nagatachō" has become shorthand in Japanese for government and politics, equivalent to "Westminster" or "Capitol Hill."',
    ward: '千代田区',
  },
  {
    id: 'kasumigaseki',
    kanji: '霞が関',
    romaji: 'Kasumigaseki',
    english: 'Mist Barrier',
    type: 'neighborhood',
    coordinates: [35.6738385, 139.7495326],
    description:
      '霞が関 means "barrier in the mist" — 霞 (haze, mist) + が (possessive) + 関 (barrier, checkpoint). A sekisho (barrier station) where travelers were checked stood here at a point often shrouded in morning mist rolling in from the surrounding lowlands and moats. The poetic name captured the romantic, half-invisible quality of the checkpoint. Today it houses Japan\'s central government ministries — Finance, Foreign Affairs, Justice, and others — making "Kasumigaseki" a metonym for the Japanese bureaucracy.',
    ward: '千代田区',
  },
  {
    id: 'kioicho',
    kanji: '紀尾井町',
    romaji: 'Kioichō',
    english: 'Ki-O-I Town',
    type: 'neighborhood',
    coordinates: [35.6814128, 139.7346215],
    description:
      '紀尾井町 is a portmanteau of three powerful daimyo estates that occupied the area during the Edo period: 紀 from the Kii domain (紀州藩), 尾 from the Owari domain (尾州藩), and 井 from the Ii clan (彦根藩, whose lord used 井 as a crest). The first characters of each estate were combined into the neighborhood name when the area was developed after 1868. The Hotel New Otani now stands on the former Kii domain garden. A plaque near the New Otani marks the spot where Ōkubo Toshimichi, one of the Meiji Restoration\'s chief architects, was assassinated in 1878.',
    ward: '千代田区',
  },

  // CHŪŌ-KU
  {
    id: 'hatchobori',
    kanji: '八丁堀',
    romaji: 'Hatchōbori',
    english: 'Eight-Chō Canal',
    type: 'neighborhood',
    coordinates: [35.6762294, 139.7765781],
    description:
      '八丁堀 means "eight-chō canal" — 八丁 (eight chō, approximately 870 meters) + 堀 (moat, canal). A canal roughly eight chō in length ran through this area during the Edo period, connecting the bay to the interior waterway network. The neighborhood was famously the residential district of the Edo police force\'s investigators (与力 and 同心), lower-ranking samurai who solved crimes. This association with detective work made Hatchōbori a recurring setting in jidaigeki (period drama) fiction.',
    ward: '中央区',
  },
  {
    id: 'irifune',
    kanji: '入船',
    romaji: 'Irifune',
    english: 'Entering Ships',
    type: 'neighborhood',
    coordinates: [35.6717494, 139.7767981],
    description:
      '入船 means "ships entering (port)" — 入 (to enter, to come in) + 船 (ship, vessel). The area was at the edge of the inner harbor, where ships from the bay would enter the canal network of Edo and unload their cargo. This waterfront character — busy with arriving vessels and their merchants — defined the neighborhood\'s economic life for centuries. The Tsukiji fish market nearby preserved that maritime commercial identity into the 21st century.',
    ward: '中央区',
  },

  // TAITO-KU
  {
    id: 'senzoku',
    kanji: '千束',
    romaji: 'Senzoku',
    english: 'Thousand Bundles',
    type: 'neighborhood',
    coordinates: [35.7217182, 139.7938485],
    description:
      '千束 means "a thousand bundles" — 千 (thousand) + 束 (bundle, sheaf). The area is said to have supplied the Edo shogunate with a thousand bundles of reeds (or rice straw) annually as a form of tax in kind, a common arrangement in the Edo-period fiscal system. Reed bundles were essential for thatching roofs, making screens, and weaving mats. The number "one thousand" in Japanese naming conventions often signifies an impressive, abundant quantity rather than a literal count.',
    ward: '台東区',
  },
  {
    id: 'negishi',
    kanji: '根岸',
    romaji: 'Negishi',
    english: 'Root Shore',
    type: 'neighborhood',
    coordinates: [35.7251746, 139.7825703],
    description:
      '根岸 means "root shore" or "base cliff" — 根 (root, base, foundation) + 岸 (cliff, shore, bank). The neighborhood sits at the foot of the Ueno Plateau\'s eastern escarpment, where the upland "cliff" meets the lowland below. This transitional zone — base of the heights — gives the name its topographic logic. The Meiji-era poet Masaoka Shiki spent his final years in Negishi, and his home (Shiki-an) is preserved as a museum here.',
    ward: '台東区',
  },
  {
    id: 'iriya',
    kanji: '入谷',
    romaji: 'Iriya',
    english: 'Valley Entry',
    type: 'neighborhood',
    coordinates: [35.7204333, 139.7867182],
    description:
      '入谷 means "entering the valley" — 入 (to enter) + 谷 (valley). The name describes the experience of descending into the valley from the Ueno plateau — the point of entry into the low-lying shitamachi. Iriya is home to Kishimojin temple (Shōtengai), which hosts the annual Asagao Ichi (morning glory fair) every July, when the surrounding streets overflow with potted morning glory plants in hundreds of colors — one of the most distinctive summer events in old Tokyo.',
    ward: '台東区',
  },

  // BUNKYO-KU
  {
    id: 'hakusan',
    kanji: '白山',
    romaji: 'Hakusan',
    english: 'White Mountain',
    type: 'neighborhood',
    coordinates: [35.7211326, 139.7474836],
    description:
      '白山 means "white mountain" — 白 (white) + 山 (mountain). The name derives from Hakusan Shrine, which was relocated here from the sacred Mount Hakusan (White Mountain) in Ishikawa Prefecture. White mountains held special significance in Shinto as symbols of purity, and the goddess enshrined at Hakusan (Shirayamahime-no-mikoto) was one of the most widely venerated in Japan. The shrine\'s annual Bunkyō Azalea Festival (文京つつじまつり) draws thousands to view its azalea garden.',
    ward: '文京区',
  },
  {
    id: 'otowa',
    kanji: '音羽',
    romaji: 'Otowa',
    english: 'Sound Feather',
    type: 'neighborhood',
    coordinates: [35.715577, 139.7285111],
    description:
      '音羽 is composed of 音 (sound, music) + 羽 (feather, wing). The poetic name is thought to derive from the musical sound of the stream (音羽川) that ran through this valley — the water\'s babbling was likened to the whispering of feathers. The valley\'s gentle acoustics made it a place associated with refinement and tranquility. The major publishing house Kōdansha was established near here in 1909, and the neighborhood has been associated with Japanese literary and publishing culture ever since.',
    ward: '文京区',
  },

  // SUMIDA-KU
  {
    id: 'oshiage',
    kanji: '押上',
    romaji: 'Oshiage',
    english: 'Pushing Up',
    type: 'neighborhood',
    coordinates: [35.7126768, 139.8158573],
    description:
      '押上 means "pushing upward" — 押 (to push) + 上 (up, above). The etymology is debated: one explanation holds that soil was pushed up during the construction of embankments and levees along the Sumida River, creating elevated ground. Another theory links it to the upstream pushing of boats by pole against the current. The neighborhood became internationally known in 2012 when Tokyo Skytree — at 634 meters the world\'s tallest broadcasting tower — opened here, transforming the quiet residential area into one of Tokyo\'s most visited attractions.',
    ward: '墨田区',
  },
  {
    id: 'narihira',
    kanji: '業平',
    romaji: 'Narihira',
    english: 'Narihira\'s Quarter',
    type: 'neighborhood',
    coordinates: [35.7075841, 139.8132448],
    description:
      '業平 is named after Ariwara no Narihira (在原業平, 825–880), the great Heian-period poet and aristocrat celebrated in the Tales of Ise (伊勢物語). Narihira is said to have traveled through what was then rural marshland east of the capital, and local tradition holds that the area was named in his honor. His poem about the Sumida River — lamenting his exile from the capital while watching birds he calls "capital birds" (都鳥) — is one of the most famous in Japanese literature, and the birds are now identified as black-headed gulls.',
    ward: '墨田区',
  },
  {
    id: 'tachibana',
    kanji: '立花',
    romaji: 'Tachibana',
    english: 'Standing Flower',
    type: 'neighborhood',
    coordinates: [35.7093223, 139.8328899],
    description:
      '立花 can mean either "standing flower" (立 = standing, 花 = flower) or it is a reading of 橘 (tachibana), the small citrus fruit native to Japan. The tachibana (Citrus tachibana) is deeply embedded in Japanese sacred and poetic tradition — its evergreen leaves represent constancy, and the fruit\'s scent was associated with longing for absent loved ones in the Man\'yōshū. The character 橘 appears in the Nihon Shoki as early as the 7th century. Whether flower or fruit, the name carries strong classical associations.',
    ward: '墨田区',
  },

  // KŌTŌ-KU
  {
    id: 'kameido',
    kanji: '亀戸',
    romaji: 'Kameido',
    english: 'Turtle Well',
    type: 'neighborhood',
    coordinates: [35.7007092, 139.8332268],
    description:
      '亀戸 means "turtle well" or "turtle gate" — 亀 (turtle) + 戸 (well, gate, entry). A well shaped like a turtle\'s carapace, or a peninsula of land extending into marshland like a turtle\'s head, gave the neighborhood its name. Turtles are auspicious in Japanese culture, symbolizing longevity and good fortune. Kameido Tenjin Shrine is famous for its arched "drum bridge" (太鼓橋) over wisteria-bordered ponds, and the Kameido Daikon, a thick, short white radish unique to the area, was a celebrated Edo-period vegetable.',
    ward: '江東区',
  },
  {
    id: 'sunamachi',
    kanji: '砂町',
    romaji: 'Sunamachi',
    english: 'Sand Town',
    type: 'neighborhood',
    coordinates: [35.6849899, 139.8371019],
    description:
      '砂町 means "sand town" — 砂 (sand) + 町 (town). The area was created from reclaimed tidal flats, where the underlying substrate is predominantly sand dredged from the river delta. The sandy character of the soil made agriculture difficult, and the area developed instead as an industrial zone for processing the raw materials that arrived by barge. The Sunamachi Ginza shotengai (covered shopping street) preserves an Edo-period street atmosphere despite the surrounding industrial neighborhood.',
    ward: '江東区',
  },

  // SHINAGAWA-KU
  {
    id: 'togoshi',
    kanji: '戸越',
    romaji: 'Togoshi',
    english: 'Gate Crossing',
    type: 'neighborhood',
    coordinates: [35.6121635, 139.7181489],
    description:
      '戸越 means "crossing the gate" — 戸 (gate, door, threshold) + 越 (to cross over, to pass through). A gate or boundary marker on an old road was crossed at this point, and the settlement that grew here took its name from that passage. Togoshi Ginza, the shopping street that extends from the station, claims to be the longest shotengai in Tokyo at roughly 1.3 kilometers, named after the famous Ginza district when residents brought soil from the original Ginza after a flood to improve their street\'s drainage.',
    ward: '品川区',
  },
  {
    id: 'musashi-koyama',
    kanji: '武蔵小山',
    romaji: 'Musashi-Koyama',
    english: 'Musashi Little Mountain',
    type: 'neighborhood',
    coordinates: [35.6205612, 139.7045734],
    description:
      '武蔵小山 means "small mountain in Musashi Province" — 武蔵 (Musashi, the old province covering most of modern Tokyo and Saitama) + 小山 (small hill or mountain). A gentle rise in the terrain distinguished this spot from the surrounding flat reclaimed land. The Musashi-Koyama covered shopping street (パルム商店街) extends 800 meters — one of Tokyo\'s longest — sheltering shoppers from rain with its continuous arcade roof, a design perfected in the postwar shotengai boom of the 1950s.',
    ward: '品川区',
  },
  {
    id: 'nishi-oi',
    kanji: '西大井',
    romaji: 'Nishi-Ōi',
    english: 'West Great Wells',
    type: 'neighborhood',
    coordinates: [35.598227, 139.7198168],
    description:
      '西大井 means "west great wells" — 西 (west) + 大 (great) + 井 (well). The Ōi area was known for its abundant groundwater — large, productive wells that supplied the surrounding community and, in the Edo period, provided water for early agricultural development on the Musashino Plateau\'s edge. The "west" prefix distinguishes it from the main Ōi district to the east. The area was heavily industrialized in the Meiji era, with factories that exploited the same abundant water supply.',
    ward: '品川区',
  },

  // MEGURO-KU
  {
    id: 'himonya',
    kanji: '碑文谷',
    romaji: 'Himonya',
    english: 'Inscribed Stone Valley',
    type: 'neighborhood',
    coordinates: [35.6218808, 139.6856194],
    description:
      '碑文谷 means "inscribed stone valley" — 碑文 (inscription on a stone monument) + 谷 (valley). A stone stele or monument with inscriptions stood in this valley, likely marking a religious site, a boundary, or the grave of a significant person. Such inscribed stones were important in early Japanese administrative and sacred geography. The valley itself is still faintly visible in the topography. The neighborhood is home to the Himonya Hachimangu shrine and a Saturn-branded shopping center in the former site of Daiei.',
    ward: '目黒区',
  },
  {
    id: 'yutenji',
    kanji: '祐天寺',
    romaji: 'Yūtenji',
    english: "Yūten's Temple",
    type: 'neighborhood',
    coordinates: [35.6382191, 139.6935732],
    description:
      '祐天寺 is named after Yūten-ji Temple — 祐天 (Yūten, the posthumous honorific of the monk Yūten Shōnin, 1637–1718) + 寺 (temple). The temple was established to honor Yūten Shōnin, a celebrated Jōdo sect priest who was famous for his ability to exorcise vengeful spirits. He was called to perform rites over the spirit of Okiku, the ghost associated with the legend of the Bancho Sarayashiki haunted mansion, a connection that gave the temple a supernatural aura. His grave is within the temple grounds.',
    ward: '目黒区',
  },
  {
    id: 'yakumo',
    kanji: '八雲',
    romaji: 'Yakumo',
    english: 'Eight Clouds',
    type: 'neighborhood',
    coordinates: [35.620076, 139.6691321],
    description:
      '八雲 means "eight clouds" — 八 (eight, often used in Japanese to mean "many") + 雲 (clouds). The name comes from the opening of the oldest recorded Japanese poem, attributed to the deity Susanoo-no-Mikoto in the Kojiki (712 CE): "ya-kumo tatsu, Izumo ya-egaki" (many clouds rise, in Izumo many-fenced). The poem describes building a new home, and the "many clouds" over it. The name was chosen for this residential neighborhood as an auspicious literary allusion. The writer Lafcadio Hearn, who took the Japanese name Koizumi Yakumo, is commemorated nearby.',
    ward: '目黒区',
  },

  // SETAGAYA-KU
  {
    id: 'kyodo',
    kanji: '経堂',
    romaji: 'Kyōdō',
    english: 'Sutra Hall',
    type: 'neighborhood',
    coordinates: [35.6503414, 139.6322351],
    description:
      '経堂 means "sutra hall" — 経 (sutra, Buddhist scripture) + 堂 (hall, building). A small hall housing Buddhist scriptures — a kyōzō or sutra repository — stood here, likely attached to a local temple. Such halls were common in agricultural communities, where the sutras were read aloud during planting and harvest festivals to ensure good crops. The neighborhood is known today for its quiet residential streets and a covered shopping street that still has the feel of a local town center.',
    ward: '世田谷区',
  },
  {
    id: 'matsubara',
    kanji: '松原',
    romaji: 'Matsubara',
    english: 'Pine Plain',
    type: 'neighborhood',
    coordinates: [35.6636554, 139.6488362],
    description:
      '松原 means "pine plain" or "pine field" — 松 (pine tree) + 原 (plain, open land). The area was a flat expanse planted with or naturally overgrown by Japanese pine trees (Pinus thunbergii or similar), which were characteristic of sandy, low-lying terrain near Tokyo\'s western uplands. Pine groves had both practical value (lumber, resin) and poetic associations with longevity and the Japanese coastline aesthetic.',
    ward: '世田谷区',
  },
  {
    id: 'gotokuji',
    kanji: '豪徳寺',
    romaji: 'Gōtoku-ji',
    english: 'Great Virtue Temple',
    type: 'neighborhood',
    coordinates: [35.6509836, 139.6477956],
    description:
      '豪徳寺 means "great virtue temple" — 豪 (grand, mighty) + 徳 (virtue, moral power) + 寺 (temple). The temple was founded in the 15th century and elevated to the status of the Ii clan\'s family temple in the 17th century. It is widely credited as the birthplace of the maneki-neko (招き猫, "beckoning cat") good-luck figurine: a cat belonging to the temple is said to have beckoned a feudal lord inside moments before lightning struck his outdoor shelter. Hundreds of maneki-neko statues are displayed in the temple grounds.',
    ward: '世田谷区',
  },
  {
    id: 'funabashi-sg',
    kanji: '船橋',
    romaji: 'Funabashi',
    english: 'Boat Bridge',
    type: 'neighborhood',
    coordinates: [35.653468, 139.6226637],
    description:
      '船橋 means "boat bridge" or "ship bridge" — 船 (boat, ship) + 橋 (bridge). A pontoon bridge — a bridge built from boats lashed together — crossed a stream here, a common engineering solution in areas where timber piers were impractical. Such floating bridges were used throughout Japan on military roads. This Setagaya Funabashi is distinct from the larger Funabashi City in Chiba Prefecture, though both take their names from the same type of temporary river crossing.',
    ward: '世田谷区',
  },
  {
    id: 'chitose-karasuyama',
    kanji: '千歳烏山',
    romaji: 'Chitose-Karasuyama',
    english: 'Eternal Crow Mountain',
    type: 'neighborhood',
    coordinates: [35.6680037, 139.6008523],
    description:
      '千歳烏山 combines two poetic names: 千歳 (a thousand years, eternity, endurance) and 烏山 (crow mountain — 烏 = crow/raven + 山 = mountain/hill). Crows in Shinto tradition are considered divine messengers — the three-legged Yatagarasu guided Emperor Jimmu on his military campaign. A hill associated with these sacred birds was auspiciously named "crow mountain," and the "thousand years" prefix was added to amplify the blessing. The neighborhood is known for its active temples and Setagaya\'s largest covered shopping street.',
    ward: '世田谷区',
  },

  // OTA-KU
  {
    id: 'yukigaya',
    kanji: '雪谷',
    romaji: 'Yukigaya',
    english: 'Snow Valley',
    type: 'neighborhood',
    coordinates: [35.5892552, 139.6808177],
    description:
      '雪谷 means "snow valley" — 雪 (snow) + 谷 (valley). The valley faces north and is sheltered from direct winter sunlight by surrounding higher ground, which causes snow to accumulate and persist longer than in neighboring areas. This micro-climatic quirk was distinctive enough to give the hollow its name. The area is served by the Tōkyū Ōimachi Line, and its quiet streets retain a residential character at odds with the bustling wards nearby.',
    ward: '大田区',
  },
  {
    id: 'kugahara',
    kanji: '久が原',
    romaji: 'Kugahara',
    english: 'Long Plain',
    type: 'neighborhood',
    coordinates: [35.58052, 139.693363],
    description:
      '久が原 means "long plain" or "lasting plain" — 久 (long, lasting, enduring) + が (possessive particle) + 原 (plain, open field). The topographic name describes an unusually broad, flat area that extended without interruption, notable for its length in a landscape of hills and valleys. An alternative reading traces 久が to the Kuga clan who held land here. The area is a quiet residential neighborhood with good access to Haneda Airport, and its low-profile character has helped it retain some of the spaciousness its name implies.',
    ward: '大田区',
  },
  {
    id: 'yaguchi',
    kanji: '矢口',
    romaji: 'Yaguchi',
    english: 'Arrow Mouth',
    type: 'neighborhood',
    coordinates: [35.5632308, 139.6926368],
    description:
      '矢口 means "arrow mouth" or "arrow opening" — 矢 (arrow) + 口 (mouth, opening, entrance). The name likely describes a narrow point along the Tama River where the water was compressed like an arrow — fast, straight, and forceful. A ford or ferry crossing at this arrow-shaped constriction gave the settlement its name. The Yaguchi no Watashi ferry crossing was one of the famous crossings on the Tama River, depicted in Edo-period woodblock prints.',
    ward: '大田区',
  },

  // TOSHIMA-KU
  {
    id: 'komagome',
    kanji: '駒込',
    romaji: 'Komagome',
    english: 'Horse Hollow',
    type: 'neighborhood',
    coordinates: [35.7375822, 139.7442491],
    description:
      '駒込 means "horse hollow" or "horse enclosure" — 駒 (young horse, colt) + 込 (interior, confined space, hollow). Horses were pastured in an enclosed low-lying area here. The neighborhood is most celebrated in botanical history as the origin of the Somei Yoshino (染井吉野) cherry tree, the world\'s most widely planted cherry variety: it was first propagated by nursery growers in the nearby Somei village in the mid-1800s and spread worldwide under the cultivar name referencing both the village and the "good luck" (吉野) association.',
    ward: '豊島区',
  },
  {
    id: 'otsuka',
    kanji: '大塚',
    romaji: 'Ōtsuka',
    english: 'Great Mound',
    type: 'neighborhood',
    coordinates: [35.7316851, 139.7285879],
    description:
      '大塚 means "great mound" — 大 (great, large) + 塚 (mound, earthen tumulus). A large ancient burial mound or earthwork once defined this area, likely dating to the Kofun period (3rd–7th century CE), when powerful clans constructed keyhole-shaped burial tumuli across the Kantō Plain. The mound has long since been graded away, but the name preserves its memory. The Toden Arakawa Line (Tokyo\'s last surviving streetcar line) passes through Ōtsuka, giving the neighborhood an anachronistic charm.',
    ward: '豊島区',
  },
  {
    id: 'shiinachō',
    kanji: '椎名町',
    romaji: 'Shiinachō',
    english: 'Chinquapin Town',
    type: 'neighborhood',
    coordinates: [35.7264476, 139.6948922],
    description:
      '椎名町 means "chinquapin-tree town" — 椎 (chinquapin, Castanopsis cuspidata, a hardwood evergreen native to Japan) + 名 (name) + 町 (town). The chinquapin was a common tree in the area\'s secondary woodland. This neighborhood holds a unique place in manga history: Osamu Tezuka, creator of Astro Boy (鉄腕アトム) and the godfather of modern manga, lived and worked in the Tokiwa-sō apartment building here from 1953. Other manga pioneers including Fujiko F. Fujio (Doraemon) also resided in Tokiwa-sō. A replica of the building opened as a museum in 2020.',
    ward: '豊島区',
  },

  // KITA-KU
  {
    id: 'takinogawa',
    kanji: '滝野川',
    romaji: 'Takinogawa',
    english: 'Waterfall River',
    type: 'neighborhood',
    coordinates: [35.7463121, 139.7293314],
    description:
      '滝野川 means "river of the waterfall" — 滝 (waterfall, cascade) + の (possessive) + 川 (river). The stream running through this area had a notable waterfall that gave the waterway its name. The district later became famous for its indigo dye works (染物屋): deep Takinogawa blue was produced using indigo-fermented vats that exploited the local clean water supply. The area is now known as the birthplace of the daikon radish variety named after the ward — Takinogawa daikon.',
    ward: '北区',
  },
  {
    id: 'jūjō',
    kanji: '十条',
    romaji: 'Jūjō',
    english: 'Ten Crossings',
    type: 'neighborhood',
    coordinates: [35.7604255, 139.7223822],
    description:
      '十条 means "ten articles" or "ten crossings" — 十 (ten) + 条 (article, line, path, strip of land). The name may derive from the jōri land-survey grid system used in the Nara period, in which land was divided into numbered strips (条). Alternatively, it refers to the intersection of ten paths at this point. The Jūjō covered shopping street is one of the oldest in Tokyo, known for its down-to-earth atmosphere and the density of its butcher shops, fishmongers, and old-school eateries.',
    ward: '北区',
  },

  // ITABASHI-KU
  {
    id: 'tokiwadai',
    kanji: '常盤台',
    romaji: 'Tokiwadai',
    english: 'Evergreen Plateau',
    type: 'neighborhood',
    coordinates: [35.7615236, 139.6856367],
    description:
      '常盤台 means "evergreen plateau" — 常盤 (a poetic word for "constant green," alluding to the unchanging verdure of conifers and thus to eternity and constancy) + 台 (elevated ground, plateau). The neighborhood was developed in the 1930s by the Tōbu Railway as a model garden suburb, and the name was chosen to evoke a peaceful, enduring green setting. The grid-planned streets lined with pre-war houses survive largely intact, making Tokiwadai one of Tokyo\'s best-preserved early 20th-century residential districts.',
    ward: '板橋区',
  },
  {
    id: 'oyama-ita',
    kanji: '大山',
    romaji: 'Ōyama',
    english: 'Great Mountain',
    type: 'neighborhood',
    coordinates: [35.7486238, 139.7024348],
    description:
      '大山 means "great mountain" — 大 (great) + 山 (mountain). Despite lying in the flat northern suburbs of Tokyo, the name comes from the Ōyama Kaidō, the pilgrimage road leading to Mount Ōyama (大山) in Kanagawa Prefecture — one of Edo\'s most popular mountain pilgrimages. The road ran through this settlement, which became a stopping point for pilgrims heading to or from the mountain. The Happy Road Ōyama covered shopping street preserves the communal character of the old pilgrim waystation.',
    ward: '板橋区',
  },
  {
    id: 'shimura',
    kanji: '志村',
    romaji: 'Shimura',
    english: 'Shimura Village',
    type: 'neighborhood',
    coordinates: [35.7752502, 139.6908704],
    description:
      '志村 is read as 志 (will, aspiration, intent) + 村 (village). The characters, however, are almost certainly ateji — phonetic placeholders for an older name whose original meaning has been lost. The Shimura family, a powerful local clan in the medieval period, likely gave their name to the village. The area is famous in 20th-century comedy: Ken Shimura, Japan\'s most beloved comedian and star of the Baka Tonosama series, bore this surname — a reminder that the village name became a family name that became a national comic institution.',
    ward: '板橋区',
  },

  // NERIMA-KU
  {
    id: 'hikarigaoka',
    kanji: '光が丘',
    romaji: 'Hikarigaoka',
    english: 'Hill of Light',
    type: 'neighborhood',
    coordinates: [35.7618102, 139.6313802],
    description:
      '光が丘 means "hill of light" — 光 (light, radiance) + が (possessive) + 丘 (hill). The neighborhood was built in the 1980s as a large-scale public housing development (団地) on the site of the former Nerima US Military Airfield (and before that, the Imperial Army\'s Narimasu Airfield). The hopeful name "hill of light" was chosen to evoke a bright future for the new community. The development\'s architect was Fumihiko Maki, and its park — one of the largest in western Tokyo — is designed for seasonal events.',
    ward: '練馬区',
  },
  {
    id: 'oizumi-gakuen',
    kanji: '大泉学園',
    romaji: 'Ōizumi Gakuen',
    english: 'Great Spring Garden School',
    type: 'neighborhood',
    coordinates: [35.7495045, 139.5865223],
    description:
      '大泉学園 combines 大泉 (great springs — 大 = great, 泉 = spring, natural water source) and 学園 (educational garden — 学 = study, 園 = garden/campus). The area had abundant natural springs (大泉) when it was still rural. A liberal arts school (Jiyū Gakuen) founded in 1921 by educational reformer Motoko Hani brought the 学園 suffix; the school building, designed by Frank Lloyd Wright\'s pupil Endō Arata, is now a National Important Cultural Property. The combination of natural abundance and enlightened education lives on in the name.',
    ward: '練馬区',
  },

  // SUGINAMI-KU
  {
    id: 'kugayama',
    kanji: '久我山',
    romaji: 'Kugayama',
    english: 'Long Mountain',
    type: 'neighborhood',
    coordinates: [35.6879076, 139.5976927],
    description:
      '久我山 is composed of 久我 (possibly the Kuga clan, or "long and enduring") + 山 (mountain, hill). The Kuga clan, who held land in this area during the Heian and Kamakura periods, likely gave the hill its name. An alternative reading: 久我 may derive from 九夏 (the nine summer months of the old calendar) or simply from 久 (long, enduring) applied to the slope. The Inokashira Line passes through here, connecting Suginami\'s quiet hills to Shibuya and the Inokashira Park area.',
    ward: '杉並区',
  },
  {
    id: 'hamadayama',
    kanji: '浜田山',
    romaji: 'Hamadayama',
    english: 'Hamada Mountain',
    type: 'neighborhood',
    coordinates: [35.6813633, 139.629715],
    description:
      '浜田山 reads as 浜田 (Hamada, a common Japanese surname meaning "beach rice field" — 浜 = beach/shore, 田 = field) + 山 (mountain, hill). The neighborhood was named for the Hamada family who owned substantial land on this hillside before it was developed. 浜田 as a surname is itself a topographic description — a field near a sandy shore — suggesting the Hamada ancestors came from a coastal area. The neighborhood is one of the quietest in Suginami, valued for its abundant greenery.',
    ward: '杉並区',
  },
  {
    id: 'amanuma',
    kanji: '天沼',
    romaji: 'Amanuma',
    english: 'Heavenly Marsh',
    type: 'neighborhood',
    coordinates: [35.7082171, 139.6231287],
    description:
      '天沼 means "heavenly marsh" — 天 (heaven, sky) + 沼 (marsh, swamp, pond). The area had a still marshy pond (沼) that perfectly reflected the sky (天) overhead, creating the illusion of heaven mirrored in the water — a phenomenon called "逆さ天" (upside-down sky) in Japanese literary tradition. This kind of reflective naming, attributing celestial qualities to terrestrial water, is a common poetic device in Japanese place names along the Musashino Plateau.',
    ward: '杉並区',
  },

  // NAKANO-KU
  {
    id: 'nogata',
    kanji: '野方',
    romaji: 'Nogata',
    english: 'Field Direction',
    type: 'neighborhood',
    coordinates: [35.716474, 139.6545514],
    description:
      '野方 means "field region" or "field direction" — 野 (field, open land, wilderness) + 方 (direction, region, area). The 方 character here functions as a regional suffix meaning "the area of" rather than a compass direction — so the name means "the area of fields" or "field country." The Musashino Plateau was historically open farmland, and this neighborhood\'s name records that agricultural character before it was absorbed into suburban Tokyo in the early 20th century.',
    ward: '中野区',
  },
  {
    id: 'arai-nakano',
    kanji: '新井',
    romaji: 'Arai',
    english: 'New Well',
    type: 'neighborhood',
    coordinates: [35.714273, 139.6651268],
    description:
      '新井 means "new well" — 新 (new) + 井 (well). A newly dug well here distinguished this settlement from older villages in the area. Wells were critical infrastructure in pre-modern Japan — their ownership, maintenance, and water quality determined the prosperity of a community — and a new, high-quality well was significant enough to name a settlement. The 新井 name is found in many parts of Japan wherever new wells opened up new possibilities for settlement.',
    ward: '中野区',
  },

  // ARAKAWA-KU
  {
    id: 'mikawashima',
    kanji: '三河島',
    romaji: 'Mikawashima',
    english: 'Three River Island',
    type: 'neighborhood',
    coordinates: [35.7333434, 139.7773921],
    description:
      '三河島 is read as "three river island" — 三河 (three rivers, or alternatively Mikawa Province) + 島 (island). The area was surrounded on multiple sides by rivers and marshy channels, making it effectively an island of higher ground in the wetlands. The 三河 component may also reflect settlers from Mikawa Province (modern Aichi Prefecture) who relocated here. The neighborhood is sadly associated with one of Japan\'s worst peacetime rail disasters: the 1962 Mikawashima accident, in which two collision events killed 160 people.',
    ward: '荒川区',
  },

  // ADACHI-KU
  {
    id: 'nishiarai',
    kanji: '西新井',
    romaji: 'Nishiarai',
    english: 'West New Well',
    type: 'neighborhood',
    coordinates: [35.7841982, 139.7771079],
    description:
      '西新井 means "west new well" — 西 (west) + 新 (new) + 井 (well). The name refers to a "new well" (新井) located to the west of an older Arai settlement. According to temple legend, Kūkai (Kōbō Daishi, founder of Shingon Buddhism) miraculously opened the well during a drought in 826 CE — making it a sacred source of water. Nishiarai Daishi (總持寺) temple, associated with this legend, became one of the most important Shingon temples in the Kantō region and still draws pilgrims today.',
    ward: '足立区',
  },
  {
    id: 'hanabatake',
    kanji: '花畑',
    romaji: 'Hanabatake',
    english: 'Flower Field',
    type: 'neighborhood',
    coordinates: [35.8065705, 139.8137531],
    description:
      '花畑 means "flower field" or "flower farm" — 花 (flower) + 畑 (cultivated field, dry farm). The area was known for flower cultivation, particularly chrysanthemums (菊) grown for the Edo urban market. Flower farming was a specialized, high-value occupation in the Edo-period agricultural economy, as wealthy merchants and samurai were willing to pay premium prices for fresh flowers. The chrysanthemum, symbol of the imperial household, was especially prized, and Adachi Ward retains a reputation for flower growing to this day.',
    ward: '足立区',
  },

  // KATSUSHIKA-KU
  {
    id: 'kameari',
    kanji: '亀有',
    romaji: 'Kameari',
    english: 'Turtles Present',
    type: 'neighborhood',
    coordinates: [35.7615931, 139.8487548],
    description:
      '亀有 means "there are turtles here" — 亀 (turtle) + 有 (to have, to exist, to be present). One charming account of the origin holds that the area was originally called 亀無 (kamena = no turtles), and locals jokingly reversed it to 亀有. Another explanation says the land mass protruding into marsh here was shaped like a turtle — a common topographic naming device. Kameari is nationally beloved as the setting of "Kochira Katsushika-ku Kameari Kōen Mae Hashutsujo" (こち亀), the police comedy manga by Osamu Akimoto that ran in Weekly Shōnen Jump for 40 years — a world record.',
    ward: '葛飾区',
  },
  {
    id: 'horikiri',
    kanji: '堀切',
    romaji: 'Horikiri',
    english: 'Canal Cut',
    type: 'neighborhood',
    coordinates: [35.7469872, 139.8268997],
    description:
      '堀切 means "canal cut" or "ditch cut" — 堀 (moat, drainage ditch, canal) + 切 (cut, slice, divide). A drainage channel cut through the marshy terrain here to improve agricultural conditions, dividing the land into workable sections. Such "cut" canals were essential infrastructure in the low-lying eastern wetlands. The Horikiri Iris Garden (堀切菖蒲園) is a famous destination each June when its 6,000 iris plants bloom — a tradition dating to the Edo period when the area was renowned for iris cultivation.',
    ward: '葛飾区',
  },

  // EDOGAWA-KU
  {
    id: 'hirai',
    kanji: '平井',
    romaji: 'Hirai',
    english: 'Flat Wells',
    type: 'neighborhood',
    coordinates: [35.7086023, 139.8443803],
    description:
      '平井 means "flat wells" or "flat water source" — 平 (flat, level, peaceful) + 井 (well). The area along the Edo River is characteristically flat, and wells here were easy to dig given the high water table near the riverbank. The level terrain and accessible groundwater made this a natural settlement site. Hirai has a distinctly working-class, shitamachi character, and its small shotengai (covered shopping street) is one of the last in Edogawa Ward to retain most of its independent shops.',
    ward: '江戸川区',
  },
  {
    id: 'kasai',
    kanji: '葛西',
    romaji: 'Kasai',
    english: 'Kudzu West',
    type: 'neighborhood',
    coordinates: [35.6636282, 139.8726921],
    description:
      '葛西 means "west Katsushika" or "kudzu west" — 葛 (kudzu vine, the same character as in 葛飾) + 西 (west). The name identifies Kasai as the western portion of the ancient Katsushika district, whose name itself referenced the kudzu-covered wetlands. Kasai Rinkai Park, built on reclaimed land along Tokyo Bay, now fronts the neighborhood with a Ferris wheel, aquarium (東京海洋科学館), and artificial beach. The park is one of the few places in Tokyo where one can see the city\'s skyline across open water.',
    ward: '江戸川区',
  },

  // BUNKYO-KU (additional)
  {
    id: 'sendagi',
    kanji: '千駄木',
    romaji: 'Sendagi',
    english: 'Thousand Cartloads of Wood',
    type: 'neighborhood',
    coordinates: [35.7266327, 139.7601861],
    description:
      '千駄木 means "a thousand cartloads of wood" — 千駄 (a thousand horseback/cart loads) + 木 (wood, timber). The area supplied prodigious quantities of firewood and timber to Edo, transported by ox-cart or horse in the loads called "駄" (each approximately 60 kg). Edo\'s insatiable demand for fuel wood — for heating, cooking, and the forges of artisans — made lumber supply a critical industry. Today the Yanaka-Nezu-Sendagi area (collectively called "Yanesen") is one of Tokyo\'s most popular destinations for its traditional townscape.',
    ward: '文京区',
  },

  // CHIYODA-KU (additional)
  {
    id: 'kudanshita',
    kanji: '九段下',
    romaji: 'Kudanshita',
    english: 'Below Nine Steps',
    type: 'neighborhood',
    coordinates: [35.6952205, 139.7505535],
    description:
      '九段下 means "below nine steps" — 九段 (nine steps/levels) + 下 (below, lower). The hill here was cut into nine terraced levels (段) during the Edo period to ease ascent, and the area at the foot of these steps took the name "below the nine steps." Kudanshita is home to Yasukuni Shrine, controversial for enshrining Japan\'s war dead including 14 Class-A war criminals, and the Shōwa-kan war memorial museum. The summer festival (Mitama Matsuri) fills the approach with thousands of lanterns.',
    ward: '千代田区',
  },

  // SHINJUKU-KU (additional)
  {
    id: 'ochiai-shinjuku',
    kanji: '落合',
    romaji: 'Ochiai',
    english: 'River Confluence',
    type: 'neighborhood',
    coordinates: [35.7114231, 139.6906814],
    description:
      '落合 in Shinjuku means "confluence" — 落 (to fall, to flow) + 合 (to meet, to join). The Kanda River and Myōshōji River converge near this neighborhood, creating a natural meeting point of flowing waters. The area was home to many Western-style painters in the Taisho era (1912–1926), drawn to the picturesque river valley and its still-rural character at the edge of the expanding metropolis. The Ochiai dyeing district, famous for its cloth-dyeing operations using the pure river water, operated here through the early 20th century.',
    ward: '新宿区',
  },

  // ─── New Neighborhoods ───────────────────────────────────────────────────────

  // MINATO-KU
  {
    id: 'azabu-juban',
    kanji: '麻布十番',
    romaji: 'Azabu-Jūban',
    english: 'Hemp Cloth Tenth Section',
    type: 'neighborhood',
    coordinates: [35.6551, 139.738],
    description:
      '麻布十番 combines 麻布 (asa = hemp, nuno = cloth — hemp was historically grown or traded here) with 十番 (the "tenth section" of the old Azabu district). The neighborhood sits in a valley between Roppongi and Mita, and its old-fashioned covered shotengai shopping street survived when surrounding areas were redeveloped. Now one of Minato\'s most beloved locals\' neighborhoods, home to generations-old confectioners, the Nanbu-senbei crackers stall, and a lively late-night food scene.',
    ward: '港区',
  },
  {
    id: 'shiba',
    kanji: '芝',
    romaji: 'Shiba',
    english: 'Turf',
    type: 'neighborhood',
    coordinates: [35.6461, 139.7477],
    description:
      '芝 simply means "turf," "lawn," or "grass." One of the oldest place names in what is now Tokyo, appearing in records from the Kamakura period. The name evokes the grassy coastal lowland stretching along the inner shore of Edo Bay. At its heart stands Zōjō-ji, the great Jōdo-sect temple that served as the official funerary temple of the Tokugawa shogunate — six of the fifteen shoguns are buried within its grounds. Tokyo Tower, built 1958, now looms above the temple\'s great red gate.',
    ward: '港区',
  },
  {
    id: 'shinbashi',
    kanji: '新橋',
    romaji: 'Shinbashi',
    english: 'New Bridge',
    type: 'neighborhood',
    coordinates: [35.6658, 139.7584],
    description:
      '新橋 means "new bridge" — 新 (new) + 橋 (bridge). A bridge was built over the Shiodome River in the Edo period, newer than an existing crossing nearby, and the settlement around it took its name from this "new bridge." In 1872, Shinbashi became the terminal of Japan\'s very first railway line, running to Yokohama — a historic milestone marked by a replica steam locomotive displayed at the station plaza today. The area has long been synonymous with the after-work salaryman culture of izakaya and standing bars.',
    ward: '港区',
  },
  {
    id: 'hamamatsucho',
    kanji: '浜松町',
    romaji: 'Hamamatsuchō',
    english: 'Hamamatsu Town',
    type: 'neighborhood',
    coordinates: [35.6553, 139.7572],
    description:
      '浜松町 means "Hamamatsu Town" — 浜松 (beach pine, also the name of a city in Shizuoka) + 町 (town). Craftsmen from the Enshu Hamamatsu domain are said to have settled here during the Edo period, lending their home city\'s name to the district. The Hamarikyū Gardens — a former shogunal duck-hunting preserve with a tidal pond and tea house — occupy its southern edge. Today the area is the Tokyo Monorail\'s mainland terminus, the gateway to Haneda Airport.',
    ward: '港区',
  },
  {
    id: 'mita',
    kanji: '三田',
    romaji: 'Mita',
    english: 'Three Fields',
    type: 'neighborhood',
    coordinates: [35.6441, 139.7393],
    description:
      '三田 combines 三 (three) + 田 (rice paddies). One theory holds that three distinct paddies were cultivated here on the upland plateau; another traces the name to an ancient clan. The neighborhood is defined by Keiō University, founded 1858 by Fukuzawa Yukichi — Japan\'s foremost Meiji-era educator and the face on the 10,000-yen note — whose main campus has occupied this hill since 1871. The juxtaposition of a top-ranked private university with quiet, orderly residential streets gives Mita its distinctive character.',
    ward: '港区',
  },
  {
    id: 'shibaura',
    kanji: '芝浦',
    romaji: 'Shibaura',
    english: 'Turf Shore',
    type: 'neighborhood',
    coordinates: [35.6462, 139.7489],
    description:
      '芝浦 pairs 芝 (turf, grass — the adjacent Shiba district) with 浦 (bay shore, inlet). The grassy shoreline reclaimed from the inner arc of Tokyo Bay describes its origin precisely. Through the 20th century it was an industrial waterfront of warehouses, factories, and working docks. Since the 1990s it has transformed dramatically: luxury apartment towers, the Shibaura House cultural space, and canal-side cafes now define the Minato Ward waterfront, though a few traditional izakaya tucked under elevated expressways preserve traces of its laboring past.',
    ward: '港区',
  },

  // SHIBUYA-KU
  {
    id: 'hiroo',
    kanji: '広尾',
    romaji: 'Hiroo',
    english: 'Wide Tail',
    type: 'neighborhood',
    coordinates: [35.6498, 139.7237],
    description:
      '広尾 combines 広 (wide, broad) + 尾 (tail, end, ridge-tip). The "broad tail-end of the upland" describes the wide lowland at the terminus of the plateau ridge running through Shibuya. Today Hiroo is one of Tokyo\'s most upscale residential pockets, home to more than thirty foreign embassies, expensive supermarkets catering to the international community, and the tranquil grounds of the National Azabu and Hiroo international schools. The quiet tree-lined streets feel distinctly unlike the rest of the metropolis.',
    ward: '渋谷区',
  },
  {
    id: 'tomigaya',
    kanji: '富ヶ谷',
    romaji: 'Tomigaya',
    english: 'Wealth Valley',
    type: 'neighborhood',
    coordinates: [35.672, 139.6929],
    description:
      '富ヶ谷 means "wealth valley" or "abundance valley" — 富 (wealth, abundance, fertility) + ヶ谷 (valley). The small valley here was presumably productive farmland, earning the optimistic "wealthy" epithet. Bordering Yoyogi Park on the west side of Shibuya, Tomigaya has evolved into one of Tokyo\'s most coveted café and boutique neighborhoods — a low-key, fashion-forward enclave favored by creative professionals who find Daikanyama too crowded and Harajuku too loud.',
    ward: '渋谷区',
  },
  {
    id: 'dogenzaka',
    kanji: '道玄坂',
    romaji: 'Dōgenzaka',
    english: 'Dōgen\'s Slope',
    type: 'neighborhood',
    coordinates: [35.6599, 139.6989],
    description:
      '道玄坂 pairs 道玄 (a person\'s name) + 坂 (slope, hill). Dōgen is said to have been either a local outlaw-turned-hermit or a masterless samurai who had a dwelling on this hill during the Muromachi period. The name stuck through centuries of change. Today the steep slope running southwest from Shibuya Station is lined with izakaya, live music venues, love hotels, and ramen shops — a crowded, neon-lit landscape that concentrates much of Shibuya\'s most energetic nightlife.',
    ward: '渋谷区',
  },

  // SHINJUKU-KU
  {
    id: 'takadanobaba',
    kanji: '高田馬場',
    romaji: 'Takadanobaba',
    english: 'Takada Horse Track',
    type: 'neighborhood',
    coordinates: [35.7126, 139.7032],
    description:
      '高田馬場 joins 高田 (Takada, a place name meaning "high rice paddy") + 馬場 (yabusame / equestrian archery range). Shogunal horseback archery displays (yabusame) were staged here in the Edo period, giving the area its enduring name. The neighborhood is steeped in popular culture: it is set near the scene of the famous 1694 duel of the 47 Ronin (Horibe Yasubei\'s revenge fight). Today it is a quintessential student neighborhood, home to Waseda University\'s north campus and dense with cheap ramen shops, used bookstores, and arcade centers.',
    ward: '新宿区',
  },
  {
    id: 'shin-okubo',
    kanji: '新大久保',
    romaji: 'Shin-Ōkubo',
    english: 'New Great Long-Cherished',
    type: 'neighborhood',
    coordinates: [35.7068, 139.6971],
    description:
      '新大久保 means "New Ōkubo" — 新 (new) + 大久保 (Ōkubo, combining 大 = great, 久 = long-enduring, 保 = to keep, cherish — a place name invoking lasting prosperity). It developed as a northern extension of the older Ōkubo district in the Meiji era. By the 1990s, Korean residents and restaurants began clustering here, and the neighborhood has since become Tokyo\'s most vibrant "Koreatown." The main street is lined with Korean barbecue restaurants, K-pop merchandise shops, and cosmetics stores serving a constant stream of fans and food tourists.',
    ward: '新宿区',
  },
  {
    id: 'nakai',
    kanji: '中井',
    romaji: 'Nakai',
    english: 'Middle Well',
    type: 'neighborhood',
    coordinates: [35.7116, 139.6854],
    description:
      '中井 combines 中 (middle, inside) + 井 (well). A well in the middle of this district was a valuable local landmark; the settlement grew around it. Nakai is a quiet residential neighborhood on the Seibu Shinjuku line — decidedly unhurried compared to its proximity to Shinjuku. The Ochiai neighborhood\'s cloth-dyeing legacy extended here, and several traditional dyeworks (some still operating) used the local waterways. A small but genuine shitamachi feel persists in the covered shotengai.',
    ward: '新宿区',
  },

  // TOSHIMA-KU
  {
    id: 'mejiro',
    kanji: '目白',
    romaji: 'Mejiro',
    english: 'White Eye',
    type: 'neighborhood',
    coordinates: [35.7213, 139.7071],
    description:
      '目白 means "white eye" — 目 (eye) + 白 (white). It forms a directional pair with neighboring Meguro (目黒, "black eye"), and both names are thought to derive from the Fudō Myōō statues at local temples: the Mejiro Fudō enshrined a white-eyed statue, the Meguro Fudō a black-eyed one. The neighborhood is associated with Gakushūin University, originally an imperial school for the nobility, whose campus dominates a large wooded hill. Leafy streets, upscale residences, and a genteel quietude characterize the area.',
    ward: '豊島区',
  },
  {
    id: 'higashi-nagasaki',
    kanji: '東長崎',
    romaji: 'Higashi-Nagasaki',
    english: 'East Long Cape',
    type: 'neighborhood',
    coordinates: [35.7239, 139.6741],
    description:
      '東長崎 means "East Nagasaki" — 東 (east) + 長崎 (long headland: 長 = long, 崎 = cape or promontory). The Nagasaki portion describes the long finger of elevated land extending in this direction — the same topographic feature named the famous port city in Kyushu. A quiet residential area on the Seibu Ikebukuro line west of Ikebukuro, it has maintained a neighborhood feel largely unaffected by the commercial intensity of the station hub nearby.',
    ward: '豊島区',
  },

  // SUMIDA-KU
  {
    id: 'ryogoku',
    kanji: '両国',
    romaji: 'Ryōgoku',
    english: 'Both Provinces',
    type: 'neighborhood',
    coordinates: [35.6973, 139.7935],
    description:
      '両国 means "both provinces" — 両 (both) + 国 (provinces). The great Ryōgoku Bridge, built in 1661, spanned the Sumida River at the boundary between Musashi Province (west, present-day Tokyo) and Shimōsa Province (east, present-day Chiba), hence "bridge of two provinces." The area became Edo\'s most famous entertainment district: sumo tournaments, misemono (freak shows), fortune tellers, and food stalls packed the wide open space on the western bank. The Kokugikan sumo hall still stands here, and the Edo-Tokyo Museum preserves the neighborhood\'s memory.',
    ward: '墨田区',
  },
  {
    id: 'hikifune',
    kanji: '曳舟',
    romaji: 'Hikifune',
    english: 'Towboat',
    type: 'neighborhood',
    coordinates: [35.7215, 139.8131],
    description:
      '曳舟 means "towboat" or "hauled boat" — 曳 (to tow, to drag) + 舟 (boat). Before railways, boatmen would physically tow flat-bottomed boats (takasebune) through the shallow canals here using ropes, ferrying passengers and goods between the northern Musashino Plain and Edo. The neighborhood retains a classic shitamachi character: a covered shopping street, old sento bathhouses, and low-rise wooden buildings survive amid gradual modernization. The Tōbu Skytree Line connects it quickly to Asakusa.',
    ward: '墨田区',
  },

  // KŌTŌ-KU
  {
    id: 'toyosu',
    kanji: '豊洲',
    romaji: 'Toyosu',
    english: 'Abundant Isle',
    type: 'neighborhood',
    coordinates: [35.6451, 139.7952],
    description:
      '豊洲 combines 豊 (abundant, fertile, rich) + 洲 (sandbar, island, shoal). The area was reclaimed from Tokyo Bay in multiple phases through the 20th century — the aspirational "abundant isle" name was assigned to this engineered land by planners who intended it for industry. Today it is home to the Toyosu Market, which replaced the old Tsukiji inner wholesale fish market in 2018 and handles some of the world\'s largest volumes of tuna and seafood. Luxury apartments, the teamLab Planets digital art museum, and the Lalaport shopping complex have turned it into a sought-after residential zone.',
    ward: '江東区',
  },
  {
    id: 'fukagawa',
    kanji: '深川',
    romaji: 'Fukagawa',
    english: 'Deep River',
    type: 'neighborhood',
    coordinates: [35.6737, 139.803],
    description:
      '深川 means "deep river" — 深 (deep) + 川 (river). The name is attributed to Fukagawa Hachirōemon, a man from Osaka who is said to have been the first settler to reclaim and develop this reed-covered river delta at the mouth of the Sumida River in the early Edo period. The area became a prosperous merchant district and the spiritual heart of Edo\'s eastern lowlands, home to Tomioka Hachimangū (Edo\'s largest Hachiman shrine) and the Fukagawa Fudō. Fukagawa-meshi — clam and rice simmered in miso broth — is its iconic dish.',
    ward: '江東区',
  },
  {
    id: 'shinonome',
    kanji: '東雲',
    romaji: 'Shinonome',
    english: 'Dawn Light',
    type: 'neighborhood',
    coordinates: [35.6438, 139.8074],
    description:
      '東雲 is written with the characters 東 (east) + 雲 (cloud) but read shinonome, an ancient word for the pale predawn light on the eastern horizon — the sky just before sunrise. The characters were chosen as a poetic, aspirational name when this reclaimed waterfront district was developed in the 1990s, suggesting brightness and promise rising from Tokyo Bay. The neighborhood is largely made up of large-scale residential towers, with the Canal Court complex — a notable piece of collaborative architecture by six prominent Japanese architects — serving as its centerpiece.',
    ward: '江東区',
  },
  {
    id: 'shin-kiba',
    kanji: '新木場',
    romaji: 'Shin-Kiba',
    english: 'New Lumber Yard',
    type: 'neighborhood',
    coordinates: [35.6446, 139.8247],
    description:
      '新木場 means "new lumber yard" — 新 (new) + 木場 (timber yard: 木 = wood, 場 = place). In the 1960s and 1970s, the timber industry was relocated from the historic Kiba lumber district (further inland) to newly reclaimed land on the bay shore, forming a "new" wood-processing zone. The smell of fresh-cut timber once pervaded the area. Today most of the wood industry has dispersed, and the site hosts Zepp Tokyo concert venue, the outdoor music festival grounds of Ultra Japan, and a growing cluster of creative and entertainment businesses.',
    ward: '江東区',
  },
  {
    id: 'tatsumi',
    kanji: '辰巳',
    romaji: 'Tatsumi',
    english: 'Dragon-Snake Direction',
    type: 'neighborhood',
    coordinates: [35.6388, 139.8149],
    description:
      '辰巳 uses two zodiac signs — 辰 (dragon, 5th sign, east-southeast) + 巳 (snake, 6th sign, south-southeast) — to indicate the compass direction south-southeast. In Edo-period geography, this combined direction (辰巳) designated this part of the bay, which lay to the south-southeast of the castle. A celebrated geisha district known as the 辰巳芸者 (Tatsumi geisha) flourished in the nearby Fukagawa area, where the courtesans were famous for their cool, down-to-earth manner distinct from the more formal Yoshiwara style. Today it is a quiet bayfront residential area.',
    ward: '江東区',
  },

  // MEGURO-KU
  {
    id: 'gakugeidaigaku',
    kanji: '学芸大学',
    romaji: 'Gakugeidaigaku',
    english: 'Arts University',
    type: 'neighborhood',
    coordinates: [35.6299, 139.6832],
    description:
      '学芸大学 means "arts and sciences university" — 学芸 (academic arts, liberal arts) + 大学 (university). The neighborhood takes its name from the Tokyo Gakugei University (Teacher\'s College), which occupied a campus here before relocating to Koganei in western Tokyo in 1964. In a quirk of Tokyo geography, the Tōkyū Tōyoko Line station kept the old university name even after the institution departed — a common Tokyo phenomenon where lost buildings live on in station names. The area is now a relaxed, upscale residential neighborhood popular with young families and known for its independent cafes and bakeries.',
    ward: '目黒区',
  },
  {
    id: 'kami-meguro',
    kanji: '上目黒',
    romaji: 'Kami-Meguro',
    english: 'Upper Meguro',
    type: 'neighborhood',
    coordinates: [35.646, 139.6991],
    description:
      '上目黒 means "upper Meguro" — 上 (upper, upstream) + 目黒 (Meguro). The neighborhood occupies the upstream portion of the Meguro River valley, the higher-elevation ground above the old lower settlement. Today it is internationally famous for the Meguro River cherry blossom promenade: in late March, the river\'s entire length through Kami-Meguro becomes a glowing tunnel of pink blossoms, drawing enormous crowds. Boutique coffee shops, independent restaurants, and design studios line the canal banks.',
    ward: '目黒区',
  },

  // SETAGAYA-KU
  {
    id: 'seijo',
    kanji: '成城',
    romaji: 'Seijō',
    english: 'Achieved City',
    type: 'neighborhood',
    coordinates: [35.6361, 139.5895],
    description:
      '成城 combines 成 (to become, to achieve) + 城 (castle, walled city). The name was coined in the Taisho era by the Odakyu Electric Railway company, which developed this residential district from farmland as part of a planned "garden city" project. The aspirational name — "a place that achieves the stature of a great city" — was intended to attract wealthy families. It succeeded: Seijo became and remains one of Japan\'s most exclusive residential addresses, home to film directors, authors, and prominent business families. The Seijo University campus and a preserved natural forest add to its quiet prestige.',
    ward: '世田谷区',
  },
  {
    id: 'taishido',
    kanji: '太子堂',
    romaji: 'Taishidō',
    english: 'Prince Shōtoku\'s Hall',
    type: 'neighborhood',
    coordinates: [35.6422, 139.67],
    description:
      '太子堂 means "Prince\'s Hall" — 太子 (crown prince, specifically Prince Shōtoku Taishi, 574–622) + 堂 (hall, small temple building). A small temple enshrining Prince Shōtoku — the statesman credited with establishing Buddhism in Japan and authoring its first constitution — gave the district its name. The neighborhood borders Sangenjaya and shares its lively commercial character while retaining more residential calm. A temple still bearing the name Taishidō stands quietly among the backstreets.',
    ward: '世田谷区',
  },
  {
    id: 'daita',
    kanji: '代田',
    romaji: 'Daita',
    english: 'Substitute Field',
    type: 'neighborhood',
    coordinates: [35.6644, 139.6672],
    description:
      '代田 combines 代 (generation, era, substitute, proxy) + 田 (rice paddy). One theory holds that rice paddies here were managed as "substitute" or designated landholdings during the Edo period, set aside for domain provisioning. The neighborhood sits adjacent to Shimokitazawa, and while Shimokitazawa attracts the spotlight, Daita provides the quieter residential backdrop — a mix of small houses, narrow streets, and creative tenants drawn here by the affordable rents just one block removed from the famous live-music district.',
    ward: '世田谷区',
  },
  {
    id: 'wakabayashi',
    kanji: '若林',
    romaji: 'Wakabayashi',
    english: 'Young Grove',
    type: 'neighborhood',
    coordinates: [35.6529, 139.664],
    description:
      '若林 means "young grove" or "youthful forest" — 若 (young, fresh) + 林 (grove, forest). A grove of young trees once covered this part of the Setagaya uplands. The neighborhood is traversed by the charming Tōkyū Setagaya Line — one of Tokyo\'s smallest and slowest tram-style railway lines, running on a single track through residential streets. Wakabayashi retains a relaxed, local character with traditional shotengai shopping streets, sento bathhouses, and residents who have lived here for generations.',
    ward: '世田谷区',
  },

  // OTA-KU
  {
    id: 'den-en-chofu',
    kanji: '田園調布',
    romaji: "Den'en-Chōfu",
    english: 'Garden City Chofu',
    type: 'neighborhood',
    coordinates: [35.5994, 139.6656],
    description:
      '田園調布 joins 田園 (pastoral fields, garden city — 田 = field, 園 = garden) + 調布 (the historic Chofu district, meaning "tribute cloth": 調 = tribute, 布 = cloth). The "田園" prefix was added deliberately in the 1920s when developer Den\'en Toshi Company modeled this project on Ebenezer Howard\'s British Garden City concept. A radiating boulevard layout centered on the train station — like the spokes of a wheel — gives the neighborhood its distinctive plan. Den-en-Chōfu is considered Japan\'s most prestigious residential address, with large homes, tree-lined avenues, and strict building codes that have preserved its spacious, leafy character.',
    ward: '大田区',
  },
  {
    id: 'haneda',
    kanji: '羽田',
    romaji: 'Haneda',
    english: 'Wing Field',
    type: 'neighborhood',
    coordinates: [35.5493, 139.7798],
    description:
      '羽田 pairs 羽 (wing, feather) + 田 (rice paddy). The paddies here, shaped by the meandering lower Tama River, may have resembled spread wings from above; alternatively the name describes the "feathered edge" of the river delta. The old village of Haneda was a small fishing settlement on the tidal flats of the inner bay. Tokyo International Airport — officially named Haneda Airport — was built on the reclaimed land from the late 1930s and has expanded to cover the original village\'s territory. The old Haneda Shrine still stands surrounded by the modern terminal complex.',
    ward: '大田区',
  },
  {
    id: 'magome',
    kanji: '馬込',
    romaji: 'Magome',
    english: 'Horse Enclosure',
    type: 'neighborhood',
    coordinates: [35.5963, 139.7116],
    description:
      '馬込 means "horse enclosure" — 馬 (horse) + 込 (driven into, enclosed). Horses were corralled or stabled here in the Edo period for relay purposes on the roads running south from the city. In the Taisho era (1912–1926), this hilly southern Ota neighborhood became a celebrated literary colony known as the Baba-Magome Literary Circle (馬込文士村): writers including Akutagawa Ryūnosuke, Uno Kōji, and Murō Saisei lived and corresponded from these quiet hillside lanes. A small literature museum preserves the memory of that artistic community.',
    ward: '大田区',
  },
  {
    id: 'nishi-kamata',
    kanji: '西蒲田',
    romaji: 'Nishi-Kamata',
    english: 'West Cattail Paddy',
    type: 'neighborhood',
    coordinates: [35.5631, 139.7169],
    description:
      '西蒲田 means "West Kamata" — 西 (west) + 蒲田 (Kamata, which itself combines 蒲 = gama, the cattail or bulrush plant, + 田 = rice paddy, describing the marshy wetlands of the old Tama River delta). A lively, unpretentious neighborhood centered on a bustling covered shopping arcade, Nishi-Kamata is known for its down-to-earth character, affordable seafood restaurants, and the gritty warmth typical of old working-class Tokyo districts along the Keihin coastal corridor.',
    ward: '大田区',
  },
  {
    id: 'senzoku-ota',
    kanji: '洗足',
    romaji: 'Senzoku',
    english: 'Foot Washing',
    type: 'neighborhood',
    coordinates: [35.5959, 139.7058],
    description:
      '洗足 means "washing feet" — 洗 (to wash) + 足 (foot). This Ota-ku Senzoku (洗足) is distinct from the Taito-ku neighborhood of the same reading but different characters (千束 = thousand bundles). Legend holds that Emperor Meiji stopped here to wash his feet in a spring while surveying the route to Yokohama. The spring-fed Senzoku Pond (洗足池) remains a defining neighborhood feature — a surprisingly large and serene body of water with resident ducks, a pavilion, and cherry trees. Katsu Kaishū, the Edo-era naval commissioner who negotiated the bloodless surrender of Edo Castle in 1868, is buried in the grounds of Ikegami-Honmonji nearby.',
    ward: '大田区',
  },

  // SHINAGAWA-KU
  {
    id: 'kitashinagawa',
    kanji: '北品川',
    romaji: 'Kitashinagawa',
    english: 'North Goods River',
    type: 'neighborhood',
    coordinates: [35.6194, 139.7381],
    description:
      '北品川 means "North Shinagawa" — 北 (north) + 品川 (Shinagawa). The northern portion of the historic Shinagawa-juku, the first of the 53 post towns on the Tōkaidō road running from Edo to Kyoto. Ironically, the neighborhood named "north Shinagawa" is actually south of Shinagawa Station — a historical quirk caused by the railway being laid through different terrain. The old post town street (旧東海道) survives as a narrow, atmospheric lane lined with traditional shops, a small shrine, and a canal passage that preserves a faint sense of the Edo traveler\'s Japan.',
    ward: '品川区',
  },
  {
    id: 'oimachi',
    kanji: '大井町',
    romaji: 'Ōimachi',
    english: 'Great Well Town',
    type: 'neighborhood',
    coordinates: [35.6074, 139.7314],
    description:
      '大井町 combines 大井 (great well — 大 = great, 井 = well) + 町 (town). A large communal well once served as the focal point of this settlement, and the district grew around it. Today Ōimachi is a boisterous commercial hub in southern Shinagawa: the station exits onto a dense covered shotengai packed with chain restaurants, pachinko parlors, and discount stores that make it a lively everyday gathering point for local workers and residents. The Shinagawa Aquarium and Heiwajima district are accessible from here.',
    ward: '品川区',
  },
  {
    id: 'tennozu',
    kanji: '天王洲',
    romaji: 'Tennōzu',
    english: 'Heavenly King Isle',
    type: 'neighborhood',
    coordinates: [35.6278, 139.7456],
    description:
      '天王洲 combines 天王 (heavenly king, a title for the deity Gozu Tennō, identified with Susanoo) + 洲 (sandbar, island). The area was named after a Susanoo shrine that once stood on this reclaimed peninsula. After decades as an industrial port zone, Tennōzu Isle was redeveloped in the 1990s as one of Tokyo\'s first "waterfront resort" projects. Today it is a cultural destination: the WHAT Museum displays large-scale contemporary art, the Tennōzu Isle area is home to galleries, the headquarters of several creative companies, and canal-side restaurants accessed by water bus from Hinode Pier.',
    ward: '品川区',
  },
  {
    id: 'hatanodai',
    kanji: '旗の台',
    romaji: 'Hatanodai',
    english: 'Flag\'s Terrace',
    type: 'neighborhood',
    coordinates: [35.5995, 139.7122],
    description:
      '旗の台 means "flag\'s terrace" or "banner plateau" — 旗 (flag, banner) + の (possessive) + 台 (elevated ground, terrace). A flag or boundary marker is said to have been planted atop this elevated ground during the Edo period, either by a military commander marking domain boundaries or by an official surveying the Musashino tableland. A quiet residential neighborhood where the Tōkyū Ōimachi and Ikegami lines intersect, Hatanodai is known for its relaxed pace, traditional shopping street, and the Shōwa University Hospital complex.',
    ward: '品川区',
  },

  // TAITO-KU
  {
    id: 'yanagibashi',
    kanji: '柳橋',
    romaji: 'Yanagibashi',
    english: 'Willow Bridge',
    type: 'neighborhood',
    coordinates: [35.6968, 139.7886],
    description:
      '柳橋 means "willow bridge" — 柳 (weeping willow) + 橋 (bridge). Weeping willows once draped the banks of the Kanda River where it empties into the Sumida at this point. In the Edo and Meiji periods, Yanagibashi was one of Tokyo\'s most celebrated geisha entertainment quarters, rivaling Yoshiwara in prestige with a more relaxed, riverside elegance. The atmospheric setting — small restaurants and ochaya tea houses facing the canal where pleasure boats moored — made it a favored retreat for wealthy merchants and writers. Though much diminished, a handful of traditional restaurants still line the narrow lanes near the bridge.',
    ward: '台東区',
  },
  {
    id: 'asakusabashi',
    kanji: '浅草橋',
    romaji: 'Asakusabashi',
    english: 'Asakusa Bridge',
    type: 'neighborhood',
    coordinates: [35.6991, 139.7877],
    description:
      '浅草橋 combines 浅草 (Asakusa, the great temple district) + 橋 (bridge). The bridge at this point on the Kanda River marked the official approach road leading north from Nihonbashi toward Asakusa\'s Sensō-ji temple — crossing here was to pass from the commercial heart of Edo toward its spiritual center. Today the neighborhood is Tokyo\'s wholesale district for traditional crafts, festival supplies, and decorative goods: shops specializing in Japanese dolls (ningyo), festival lanterns, kanzashi hairpins, hand-painted fans, and craft materials fill the streets between the station and the river.',
    ward: '台東区',
  },
  {
    id: 'okachimachi',
    kanji: '御徒町',
    romaji: 'Okachimachi',
    english: 'Foot Guard Town',
    type: 'neighborhood',
    coordinates: [35.7079, 139.7741],
    description:
      '御徒町 means "honorable foot-soldier town" — 御 (honorable, a respectful prefix) + 徒 (foot soldier, one who walks rather than rides) + 町 (town). Low-ranking samurai foot guards (okachi) who served the shogunate were garrisoned in this area during the Edo period. These warriors, ranked below mounted samurai, gave the neighborhood a modest, working-class character that persisted. Today the area under the JR elevated tracks is packed with jewelry and gem dealers, imported goods stalls, and electronic component shops. The Ameyoko outdoor market, running south toward Ueno, is one of Tokyo\'s most energetic shopping streets.',
    ward: '台東区',
  },
  {
    id: 'uguisudani',
    kanji: '鶯谷',
    romaji: 'Uguisudani',
    english: 'Bush Warbler Valley',
    type: 'neighborhood',
    coordinates: [35.7205, 139.7783],
    description:
      '鶯谷 means "bush warbler valley" — 鶯 (uguisu, the Japanese bush warbler) + 谷 (valley). The Japanese bush warbler\'s distinctive flute-like spring call once filled the wooded valley beside Ueno Hill, making it a poetic place celebrated in classical literature. The uguisu\'s song is considered one of the classic sounds of spring in Japan. Today Uguisudani is an unusually quiet station stop tucked between Ueno and Nippori — though it is paradoxically known for its concentration of traditional Japanese inns (ryokan) and love hotels, an unlikely neighbor to the adjacent Yanaka Cemetery with its moss-covered graves and ancient cats.',
    ward: '台東区',
  },

  // BUNKYO-KU
  {
    id: 'myogadani',
    kanji: '茗荷谷',
    romaji: 'Myōgadani',
    english: 'Myoga Ginger Valley',
    type: 'neighborhood',
    coordinates: [35.7127, 139.7345],
    description:
      '茗荷谷 means "myoga ginger valley" — 茗荷 (myoga, the Japanese ginger plant Zingiber mioga) + 谷 (valley). Wild myoga plants grew abundantly in this moist valley running through the Bunkyo upland. The neighborhoods sits at the edge of the Koishikawa Botanical Garden, Tokyo University\'s famous plant research garden on the grounds of the former shogunal medicinal herb garden (established 1684), where 4,000 plant species grow. Several universities and the Tōkyō Kyōiku Daigaku (now Tsukuba University) gave the area an academic character that remains strong.',
    ward: '文京区',
  },
  {
    id: 'suidobashi',
    kanji: '水道橋',
    romaji: 'Suidōbashi',
    english: 'Aqueduct Bridge',
    type: 'neighborhood',
    coordinates: [35.7019, 139.7527],
    description:
      '水道橋 means "aqueduct bridge" — 水道 (waterway, aqueduct) + 橋 (bridge). During the Edo period, the Tokugawa shogunate constructed a wooden aqueduct (kakehi) to carry water from the Kanda River over a valley and into the city\'s distribution system. The bridge supporting this infrastructure gave the neighborhood its name. The Kanda Josui waterworks, one of the world\'s earliest gravity-fed urban water systems, was an engineering marvel of the 17th century. Today the area is dominated by the Tokyo Dome baseball stadium complex, and the surrounding streets fill with Giants fans on game days.',
    ward: '文京区',
  },
  {
    id: 'sengoku',
    kanji: '千石',
    romaji: 'Sengoku',
    english: 'Thousand Koku',
    type: 'neighborhood',
    coordinates: [35.724, 139.7375],
    description:
      '千石 means "a thousand koku" — 千 (thousand) + 石 (koku, the traditional unit of rice volume). The koku (approximately 180 liters) was the standard measure for assessing samurai stipends and domain productivity: a domain worth "10,000 koku" could support 10,000 people for a year. The assessed rice yield of this land was rated at 1,000 koku, and the figure became the neighborhood\'s name — a common Edo practice of naming areas after their agricultural assessment. A residential neighborhood today, it sits between Sugamo\'s elderly charm and Komagome\'s quiet streets.',
    ward: '文京区',
  },
  {
    id: 'honkomagome',
    kanji: '本駒込',
    romaji: 'Honkomagome',
    english: 'Main Horse Enclosure',
    type: 'neighborhood',
    coordinates: [35.7316, 139.7481],
    description:
      '本駒込 means "main horse enclosure" — 本 (main, original) + 駒 (horse, colt) + 込 (crowded into, penned in). The original horse paddock or stabling facility for the area was located here, and the "main" (本) prefix distinguished it from secondary horse yards in nearby neighborhoods. Rikugien — one of Edo\'s two greatest feudal garden masterpieces, built in 1702 by Yanagisawa Yoshiyasu for the fifth shogun — is the neighborhood\'s crown jewel. The garden\'s 87 landscape vignettes inspired by classical waka poetry attract particularly large crowds during the illuminated autumn foliage season.',
    ward: '文京区',
  },

  // CHIYODA-KU
  {
    id: 'ochanomizu',
    kanji: '御茶ノ水',
    romaji: 'Ochanomizu',
    english: 'Honorable Tea Water',
    type: 'neighborhood',
    coordinates: [35.6984, 139.7636],
    description:
      '御茶ノ水 means "honorable water for tea" — 御 (honorable, polite prefix) + 茶 (tea) + の (possessive) + 水 (water). Shogun Tokugawa Hidetada is said to have had pure spring water drawn from this area to prepare his tea — the exceptional quality of the local water source gave the place its distinguished name. The neighborhood is bisected by a deep gorge cut by the Kanda River, and the two stations perched on either side of this valley give it a dramatic topography unusual for central Tokyo. Today it is known as the center of Tokyo\'s musical instrument trade and home to several universities and hospitals.',
    ward: '千代田区',
  },
  {
    id: 'hibiya',
    kanji: '日比谷',
    romaji: 'Hibiya',
    english: 'Shellfish Inlet',
    type: 'neighborhood',
    coordinates: [35.6747, 139.7577],
    description:
      '日比谷 has a disputed etymology. The most likely reading is that 日比 referred to a type of shellfish gathered at tidal flats here, and 谷 (ya) indicated a tidal inlet — "the inlet where 日比 shellfish are gathered." Another theory links it to a local clan. The entire area was once the inner bay of Edo, reclaimed step by step over centuries. In 1903, Hibiya Park was established as Japan\'s first Western-style public park on former army drill grounds. The park remains an open green space between the Imperial Palace moat and the Ginza/Marunouchi commercial belt.',
    ward: '千代田区',
  },
  {
    id: 'iidabashi',
    kanji: '飯田橋',
    romaji: 'Iidabashi',
    english: 'Iida Bridge',
    type: 'neighborhood',
    coordinates: [35.7025, 139.7453],
    description:
      '飯田橋 means "Iida Bridge" — 飯田 (Iida, a personal name: 飯 = cooked rice, 田 = field) + 橋 (bridge). The bridge was named after a local official or landowner named Iida who is said to have constructed or managed this crossing over the outer moat of Edo Castle. The neighborhood sits on the northwestern corner of the castle moat system, where several waterways converge. Today it is a major subway interchange where five lines meet, surrounded by publishing companies, law offices, and the Kagurazaka French-Japanese neighborhood to the north.',
    ward: '千代田区',
  },

  // CHŪŌ-KU
  {
    id: 'tsukiji',
    kanji: '築地',
    romaji: 'Tsukiji',
    english: 'Built Land',
    type: 'neighborhood',
    coordinates: [35.6651, 139.772],
    description:
      '築地 means "constructed land" or "built-up ground" — 築 (to build up, to bank up earth) + 地 (land, ground). The name directly describes its origin as land reclaimed and elevated from tidal flats of the inner bay, a process that began in the 17th century. The neighborhood is synonymous worldwide with its fish market: the Tsukiji inner wholesale market — the world\'s largest fish and seafood market — operated here from 1935 until its 2018 relocation to Toyosu. The outer market (a lively strip of seafood restaurants, tamagoyaki egg stalls, and kitchen supply shops) remains and still draws enormous crowds for pre-dawn tuna auctions and sushi breakfasts.',
    ward: '中央区',
  },
  {
    id: 'kyobashi',
    kanji: '京橋',
    romaji: 'Kyōbashi',
    english: 'Capital Bridge',
    type: 'neighborhood',
    coordinates: [35.6771, 139.7729],
    description:
      '京橋 means "Kyoto Bridge" or "Capital Bridge" — 京 (Kyoto, capital) + 橋 (bridge). The bridge here was the first that travelers from Edo\'s center crossed when setting out westward toward Kyoto on the Tōkaidō road — it marked the psychological beginning of the long journey to the imperial capital. In the Meiji period, Kyobashi became a hub of modernization: Tokyo\'s first brick-paved road (completed 1877) ran through here, and the Ginza brick district expanded northward into Kyobashi. Today it is known for art galleries and the ARTIZON Museum (formerly Bridgestone Museum).',
    ward: '中央区',
  },
  {
    id: 'ningyocho',
    kanji: '人形町',
    romaji: 'Ningyōchō',
    english: 'Puppet Town',
    type: 'neighborhood',
    coordinates: [35.6841, 139.7826],
    description:
      '人形町 means "puppet town" or "doll town" — 人形 (puppet, doll: 人 = person, 形 = shape, form) + 町 (town). From the Edo period, this neighborhood in the heart of the old Nihonbashi merchant district was home to puppet (bunraku) theaters, marionette performers, and the craftsmen who made theatrical dolls and props. Karakuri (mechanical puppet) artisans and doll-makers clustered here. Today the area is among the best-preserved of old downtown Tokyo: traditional confectionary shops, lacquerware dealers, a beloved ningyoyaki (doll-shaped sweets) shop, and the historic Amazake Yokocho lane give the neighborhood a strong historical identity.',
    ward: '中央区',
  },
  {
    id: 'kayabacho',
    kanji: '茅場町',
    romaji: 'Kayabachō',
    english: 'Thatching Grass Town',
    type: 'neighborhood',
    coordinates: [35.6803, 139.7802],
    description:
      '茅場町 means "thatching-grass field town" — 茅場 (kaya-ba: 茅 = miscanthus or kaya grass used for thatching, 場 = place, field) + 町 (town). Miscanthus and reed grass were harvested here for thatching the roofs of Edo\'s ordinary buildings, a critical industry in a city where most structures were built of wood and thatch. Today Kayabachō is one of central Tokyo\'s main financial districts: the Tokyo Stock Exchange (Kabutocho, immediately adjacent) and the offices of major securities firms and banks fill the area. Narrow backstreets preserve the old district layout beneath modern towers.',
    ward: '中央区',
  },

  // ARAKAWA-KU
  {
    id: 'nippori',
    kanji: '日暮里',
    romaji: 'Nippori',
    english: 'Dusk Village',
    type: 'neighborhood',
    coordinates: [35.7277, 139.771],
    description:
      '日暮里 uses the characters 日暮 (sunset, dusk: 日 = sun, 暮 = to grow dark) + 里 (village). The original name was written 新堀 (nip-pori, meaning "new moat"), but the current characters were substituted for their greater poetic beauty — "village of dusk" — without changing the pronunciation, a practice called ateji. The hill here offered celebrated views of Mount Tsukuba and Mount Fuji at sunset, making it a popular excursion spot for Edo townspeople. Today Nippori is known for two very different things: the sprawling Yanaka Cemetery and the Fabric Town shopping street (Nippori Textile Town), Tokyo\'s wholesale center for cloth and sewing supplies.',
    ward: '荒川区',
  },
  {
    id: 'machiya',
    kanji: '町屋',
    romaji: 'Machiya',
    english: 'Townhouse',
    type: 'neighborhood',
    coordinates: [35.736, 139.802],
    description:
      '町屋 means "town house" or "shophouse" — 町 (town, urban area) + 屋 (house, shop). A machiya is the traditional combined residence-and-workshop of the Edo-period merchant and artisan class: a narrow building with the commercial space at the street front and living quarters behind, often extending back through multiple rooms into a small garden. The name reflects the neighborhood\'s character as a working-class, craftsman\'s quarter. Along the Tōkyū Arakawa tram line (Toden Arakawa Line, now called the Tokyo Sakura Tram), Machiya retains a shitamachi warmth largely unchanged from the postwar decades.',
    ward: '荒川区',
  },

  // KITA-KU
  {
    id: 'nishigahara',
    kanji: '西ヶ原',
    romaji: 'Nishigahara',
    english: 'Western Plain',
    type: 'neighborhood',
    coordinates: [35.7418, 139.7495],
    description:
      '西ヶ原 means "western plain" — 西 (west) + ヶ原 (ga-hara: possessive + plain, open field). The western expanse of the plateau above the lowlands of northern Tokyo gave the area its descriptive name. The neighborhood is home to the Kyu-Furukawa Gardens, where a 1917 Western-style stone mansion designed by Josiah Conder (also the architect of the Rokumeikan) surveys a formal rose garden on the upper terrace and a classical Japanese stroll garden below — one of Tokyo\'s more surprising hidden gems.',
    ward: '北区',
  },
  {
    id: 'ukima',
    kanji: '浮間',
    romaji: 'Ukima',
    english: 'Floating Interval',
    type: 'neighborhood',
    coordinates: [35.7782, 139.6883],
    description:
      '浮間 means "floating interval" or "floating space" — 浮 (to float, buoyant) + 間 (interval, space, between). The low-lying land here, prone to seasonal flooding from the Arakawa River, seemed to "float" between the river channels — the ground would disappear under water and re-emerge, as if floating. Today Ukima Park contains Ukima Pond (浮間ヶ池), a surprisingly large waterway that serves as a migratory bird sanctuary, drawing herons, ducks, and winter wildfowl. The area has a distinctly rural, non-urban atmosphere rare for a district within Tokyo proper.',
    ward: '北区',
  },
  {
    id: 'higashi-jujo',
    kanji: '東十条',
    romaji: 'Higashi-Jūjō',
    english: 'East Tenth Ward',
    type: 'neighborhood',
    coordinates: [35.7593, 139.7288],
    description:
      '東十条 means "east tenth ward" — 東 (east) + 十条 (tenth ward: 十 = ten, 条 = strip, row, ward division). The Jūjō name derives from the ancient Chinese-style grid planning system (jōri-sei) used to organize agricultural land in the Nara period, in which land was divided into numbered strips (条). The "tenth strip" designation was applied to this area of the Musashino Plain. Higashi-Jūjō is the eastern extension of this district — a quiet, working-class residential pocket in northern Kita-ku between the JR lines and the Arakawa River.',
    ward: '北区',
  },

  // ADACHI-KU
  {
    id: 'ayase',
    kanji: '綾瀬',
    romaji: 'Ayase',
    english: 'Figured Silk Rapids',
    type: 'neighborhood',
    coordinates: [35.7668, 139.8226],
    description:
      '綾瀬 combines 綾 (ayaori, twill-woven figured silk fabric) + 瀬 (shallows, rapids of a river). The Ayase River flows nearby; its shallows reflected light in shifting patterns resembling the complex weave of figured silk (aya), earning the river and surrounding district this poetic name. The neighborhood is served by the Chiyoda subway line from central Tokyo and is one of northeastern Tokyo\'s main residential hubs. An ASKA Self-Defense Force base occupies a large portion of the ward\'s land here.',
    ward: '足立区',
  },

  // KATSUSHIKA-KU
  {
    id: 'tateishi',
    kanji: '立石',
    romaji: 'Tateishi',
    english: 'Standing Stone',
    type: 'neighborhood',
    coordinates: [35.7435, 139.8666],
    description:
      '立石 means "standing stone" — 立 (upright, standing) + 石 (stone). A large upright stone monument is said to have stood here as a landmark boundary marker or sacred stone in the pre-Edo period, visible across the flat Katsushika lowlands. The neighborhood is famous in contemporary Tokyo as one of the last surviving examples of an authentic, unpretentious drinking and eating culture: the cramped izakaya alley near the station (often called "Tokyo\'s most old-school bar street") packs in tiny grilling stalls, yakitori shops, and standing sake bars from late afternoon, drawing workers from across the metropolis who prize its unreconstructed atmosphere.',
    ward: '葛飾区',
  },

  // EDOGAWA-KU
  {
    id: 'nishi-kasai',
    kanji: '西葛西',
    romaji: 'Nishi-Kasai',
    english: 'West Kudzu West',
    type: 'neighborhood',
    coordinates: [35.6655, 139.874],
    description:
      '西葛西 means "West Kasai" — 西 (west) + 葛西 (Kasai: 葛 = kudzu vine, 西 = west, describing the western reed-and-vine marshlands of the old Edogawa lowlands). The wider Kasai district\'s own name comes from the Kasai clan, feudal lords of these eastern marshlands. Nishi-Kasai is notable as Tokyo\'s "Little India" — since the 1980s, a large Indian IT-professional community has settled here, drawn initially by affordable rents and good subway access to central offices. The neighborhood now boasts more Indian grocery stores, curry restaurants, sari shops, and Bollywood-themed establishments per square kilometer than any other Tokyo district.',
    ward: '江戸川区',
  },
  {
    id: 'komatsugawa',
    kanji: '小松川',
    romaji: 'Komatsugawa',
    english: 'Small Pine River',
    type: 'neighborhood',
    coordinates: [35.69, 139.8595],
    description:
      '小松川 means "small pine river" — 小松 (small pine tree: 小 = small, 松 = pine) + 川 (river). Pine trees grew along the banks of the river running through this area of the Edogawa lowlands. The Komatsugawa district sits near the confluence of the old Nakariver and Komatsugawa River channels, and it was historically prone to catastrophic flooding from both the Edogawa and Arakawa rivers. Today extensive flood control infrastructure protects the area. The Edogawa ward sports complex and Komatsugawa Park are the main green spaces.',
    ward: '江戸川区',
  },
  {
    id: 'funabori',
    kanji: '船堀',
    romaji: 'Funabori',
    english: 'Boat Canal',
    type: 'neighborhood',
    coordinates: [35.687, 139.8784],
    description:
      '船堀 means "boat canal" — 船 (boat) + 堀 (moat, canal, dug waterway). Canals (horibori) were dug through the flat eastern lowlands of Edo to enable boat transport of rice, timber, and goods through areas where natural rivers did not reach. This neighborhood\'s defining canal, once busied with flat-bottomed transport boats, gave it the name "boat moat." The Edo-era network of artificial waterways made reclaimed land habitable and productive. Today the area is a quiet residential district served by the Toei Shinjuku Line.',
    ward: '江戸川区',
  },

  // NAKANO-KU
  {
    id: 'higashi-nakano',
    kanji: '東中野',
    romaji: 'Higashi-Nakano',
    english: 'East Middle Field',
    type: 'neighborhood',
    coordinates: [35.7091, 139.6868],
    description:
      '東中野 means "east middle field" — 東 (east) + 中野 (Nakano: 中 = middle, 野 = field, plain). The eastern extension of the Nakano district, occupying the gentle slope between Shinjuku and the Nakano plateau. Higashi-Nakano retains a pleasantly unhurried neighborhood atmosphere, notable for its independent cinema (Pole Pole Higashi-Nakano, one of Tokyo\'s last single-screen documentary art cinemas) and the quiet streets running alongside the Kanda River. The contrast with the commercial noise of nearby Shinjuku is striking.',
    ward: '中野区',
  },
  {
    id: 'saginomiya',
    kanji: '鷺宮',
    romaji: 'Saginomiya',
    english: 'Egret Shrine',
    type: 'neighborhood',
    coordinates: [35.7277, 139.654],
    description:
      '鷺宮 means "egret shrine" — 鷺 (sagi, great egret or grey heron) + 宮 (miya, shrine or palace). Great white egrets (shirasagi) gathered in large numbers at the Saginomiya Hachiman Shrine, nesting in the sacred grove of the shrine\'s forest. The elegant birds, considered auspicious in Japanese culture, gave the shrine and the surrounding neighborhood their evocative name. Today the area is a quiet, middle-class residential neighborhood in western Nakano with a small covered shopping street and the Seibu Shinjuku Line providing access to central Tokyo.',
    ward: '中野区',
  },

  // SUGINAMI-KU
  {
    id: 'nishi-ogikubo',
    kanji: '西荻窪',
    romaji: 'Nishi-Ogikubo',
    english: 'West Reed Hollow',
    type: 'neighborhood',
    coordinates: [35.7072, 139.5954],
    description:
      '西荻窪 means "West Ogikubo" — 西 (west) + 荻窪 (Ogikubo: 荻 = miscanthus/eulalia reed grass, 窪 = hollow, depression). The "west reed hollow" extends the naming logic of Ogikubo westward along the Chūō Line. While Koenji attracts music subculture and Ogikubo leans commercial, Nishi-Ogikubo has carved out a distinct identity as Tokyo\'s foremost neighborhood for antiques, vintage goods, and curiosities: dozens of antique dealers, thrift stores specializing in Shōwa-era tableware, old kimono fabrics, and rare books line the backstreets in an atmosphere somewhere between a permanent flea market and a curated collection.',
    ward: '杉並区',
  },
  {
    id: 'takaido',
    kanji: '高井戸',
    romaji: 'Takaidō',
    english: 'High Well',
    type: 'neighborhood',
    coordinates: [35.6914, 139.6108],
    description:
      '高井戸 means "high well" — 高 (high, elevated) + 井戸 (well). A well positioned on elevated ground — unusual and therefore notable — was the defining feature of the settlement here. On elevated ground, wells required deeper digging and were more difficult to maintain, making a functioning high well a valuable community resource. Historically, Takaido was the first post station on the Kōshū Kaidō highway leaving Edo westward toward Kai Province (present-day Yamanashi). The area was also connected to the Tamagawa Josui aqueduct that supplied Edo with fresh water.',
    ward: '杉並区',
  },
  {
    id: 'eifukunocho',
    kanji: '永福町',
    romaji: 'Eifukuchō',
    english: 'Eternal Fortune Town',
    type: 'neighborhood',
    coordinates: [35.6892, 139.6438],
    description:
      '永福町 means "eternal fortune town" — 永 (eternal, permanent) + 福 (happiness, good fortune, prosperity) + 町 (town). The auspicious name was given to the area by the local Eifuku-ji temple, whose name itself promised lasting good fortune. The Inokashira Line connects Eifukuchō directly to Shibuya in about 15 minutes, yet the neighborhood feels worlds removed: a local shopping street, a small shrine square, and the kind of unhurried daily life that makes it a favored residential choice for people who work in central Tokyo but want to sleep somewhere quiet.',
    ward: '杉並区',
  },

  // NERIMA-KU
  {
    id: 'sakuradai',
    kanji: '桜台',
    romaji: 'Sakuradai',
    english: 'Cherry Blossom Terrace',
    type: 'neighborhood',
    coordinates: [35.7393, 139.6399],
    description:
      '桜台 means "cherry blossom terrace" — 桜 (sakura, cherry blossom) + 台 (elevated ground, terrace, plateau). Cherry trees planted on this upland plateau gave the neighborhood its poetic name. A quiet residential neighborhood on the Seibu Ikebukuro Line west of Ikebukuro, Sakuradai retains the relaxed domestic character common to Nerima-ku: single-family houses, small apartment buildings, neighborhood parks, and local shopping streets where the pace of life is noticeably slower than in the commercial wards to the south and east.',
    ward: '練馬区',
  },
  {
    id: 'ekoda',
    kanji: '江古田',
    romaji: 'Ekoda',
    english: 'Old River Paddy',
    type: 'neighborhood',
    coordinates: [35.7297, 139.6624],
    description:
      '江古田 combines 江 (river, inlet) + 古 (old, ancient) + 田 (rice paddy). "The ancient river rice paddy" — paddies that once lined the banks of an old watercourse here. The neighborhood is home to Musashino Art University, Nihon University College of Art, and several other arts and music schools, giving Ekoda a youthful, creative energy concentrated in the small alleyways and cheap izakaya near the Seibu Ikebukuro Line station. The collision of traditional working-class shopkeepers and art students produces the kind of unpretentious vitality increasingly rare in central Tokyo.',
    ward: '練馬区',
  },

  // ITABASHI-KU
  {
    id: 'hasune',
    kanji: '蓮根',
    romaji: 'Hasune',
    english: 'Lotus Root',
    type: 'neighborhood',
    coordinates: [35.7697, 139.6894],
    description:
      '蓮根 means "lotus root" — 蓮 (lotus, Nelumbo nucifera) + 根 (root). The marshy lowlands of old Itabashi were ideal conditions for lotus cultivation, and the root was grown as a food crop throughout the Edo and Meiji periods. Lotus root (renkon) was a prized ingredient in Japanese cooking — valued for its crunchy texture, distinctive hole pattern when sliced, and associations with Buddhist purity. The neighborhood is a quiet residential area on the Toei Mita Line, and a large lotus pond survives as a memorial in the local park.',
    ward: '板橋区',
  },
  {
    id: 'takashimadaira',
    kanji: '高島平',
    romaji: 'Takashimadaira',
    english: 'Takashima Plain',
    type: 'neighborhood',
    coordinates: [35.7802, 139.6752],
    description:
      '高島平 means "Takashima Plain" — 高島 (Takashima: 高 = high, 島 = island, but here a proper name) + 平 (flat plain). The name honors Takashima Shūhan (1798–1866), a scholar of Dutch Studies and military reformer who owned land here and famously demonstrated Western-style artillery techniques on this flat plain in 1841, confronting conservative Tokugawa officials who feared modernization. His demonstration — and the political drama that followed — was a turning point in Japan\'s gradual adoption of Western military technology. The neighborhood became one of postwar Japan\'s largest public housing (danchi) complexes in the 1970s, and the long rows of identical concrete apartment blocks became an iconic image of Shōwa-era urban planning.',
    ward: '板橋区',
  },
];

export default places;
