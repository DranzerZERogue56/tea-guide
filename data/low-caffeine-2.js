'use strict';
// BATCH 7 — LOW CAFFEINE (Teas 101–110)
const TEAS_LOW2 = [
  {
    id: 'purple-tea', name: 'African Purple Tea', emoji: '💜', origin: 'Kenya (TRFK 306/1)', color: '#7850a0',
    caffeine: 'low', caffeineLabel: 'Low (10–20 mg/cup)',
    flavor: ['mild', 'slightly woody', 'earthy', 'lightly sweet'],
    bestTimes: ['afternoon'],
    desc: 'A remarkable Kenyan cultivar (TRFK 306/1) developed by the Tea Research Foundation of Kenya. The leaves are genuinely purple due to exceptionally high anthocyanin content — the same antioxidants found in blueberries. Naturally low in caffeine with a mild, approachable flavour.',
    benefits: ['Extremely high in anthocyanins', 'Anti-inflammatory', 'Supports eye health', 'One of the most antioxidant-rich teas'],
    brew: { temp: '85–90 °C', time: '3–4 min', amount: '2 g / 250 ml' },
    tags: ['afternoon', 'antioxidant', 'unique', 'low-caffeine'],
    quizScore: { morning: 1, afternoon: 2, evening: 2, focus: 1, relax: 2, energy: 1, caffeine: 0, noCaffeine: 1, warm: 2, cold: 2 }
  },
  {
    id: 'shincha', name: 'Shincha (New Season Sencha)', emoji: '🌸', origin: 'Japan (various regions)', color: '#3a9840',
    caffeine: 'low', caffeineLabel: 'Low (20–30 mg/cup)',
    flavor: ['fresh', 'umami', 'sweet', 'vibrant'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'The first flush of Japan\'s tea season — harvested in early April to May and released almost immediately. Shincha ("new tea") is the most anticipated tea event in Japan. Leaves overwintered with stored nutrients produce an exceptionally fresh, sweet, and umami-rich cup unlike any other sencha.',
    benefits: ['Peak L-theanine and vitamin C', 'Most antioxidants of any sencha harvest', 'Deeply refreshing', 'Seasonal — only available spring'],
    brew: { temp: '60–70 °C', time: '1–1.5 min', amount: '3 g / 150 ml' },
    tags: ['morning', 'afternoon', 'japanese', 'seasonal'],
    quizScore: { morning: 2, afternoon: 3, evening: 0, focus: 2, relax: 2, energy: 1, caffeine: 1, noCaffeine: 0, warm: 2, cold: 1 }
  },
  {
    id: 'fukamushi', name: 'Fukamushi Sencha', emoji: '🌊', origin: 'Japan (Shizuoka / Kagoshima)', color: '#286838',
    caffeine: 'low', caffeineLabel: 'Low (20–28 mg/cup)',
    flavor: ['rich', 'full-bodied', 'smooth', 'oceanic'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Steamed for 2–3x longer than regular sencha ("fukamushi" = deep steam). The prolonged steaming breaks down the leaf structure, producing a richer, fuller, less astringent cup with a beautiful cloudy emerald colour from fine leaf particles. The most popular sencha style in modern Japan.',
    benefits: ['Higher catechin extraction', 'Full-bodied without bitterness', 'Rich, satisfying cup', 'Excellent source of EGCG'],
    brew: { temp: '70–75 °C', time: '1 min', amount: '3 g / 200 ml' },
    tags: ['morning', 'afternoon', 'japanese', 'antioxidant'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 2, relax: 1, energy: 1, caffeine: 0, noCaffeine: 1, warm: 2, cold: 1 }
  },
  {
    id: 'tamaryokucha', name: 'Tamaryokucha (Guricha)', emoji: '🌀', origin: 'Japan (Ureshino, Saga)', color: '#5a9858',
    caffeine: 'low', caffeineLabel: 'Low (15–25 mg/cup)',
    flavor: ['sweet', 'mild', 'grassy', 'slightly savory'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Japan\'s "curly" green tea — leaves rolled into distinctive spirals rather than needle shapes. This unique processing creates a milder, sweeter, and less astringent cup than standard sencha. Also produced in Korea where it\'s called Gamnongcha. Approachable and gentle for evenings.',
    benefits: ['Lower astringency than sencha', 'Gentle evening tea', 'Rich in catechins', 'Mild and approachable'],
    brew: { temp: '75–80 °C', time: '1.5–2 min', amount: '3 g / 200 ml' },
    tags: ['afternoon', 'evening', 'japanese', 'mild'],
    quizScore: { morning: 1, afternoon: 2, evening: 2, focus: 1, relax: 2, energy: 1, caffeine: 0, noCaffeine: 1, warm: 2, cold: 1 }
  },
  {
    id: 'dragon-pearl', name: 'Dragon Pearl Jasmine', emoji: '🫧', origin: 'China (Fujian)', color: '#a8c878',
    caffeine: 'low', caffeineLabel: 'Low (20–30 mg/cup)',
    flavor: ['floral', 'intensely jasmine', 'sweet', 'delicate'],
    bestTimes: ['afternoon'],
    desc: 'Hand-rolled into tiny pearls that slowly unfurl in hot water, releasing wave after wave of jasmine fragrance. Each pearl is made from two tea leaves and a bud, rolled tightly and scented multiple times with fresh jasmine blossoms. The theatre of watching them unfurl is half the experience.',
    benefits: ['Mood-lifting jasmine aroma', 'Antioxidant-rich', 'Multiple steepings', 'Meditative brewing ritual'],
    brew: { temp: '75 °C', time: '2–3 min', amount: '3–4 pearls / 200 ml' },
    tags: ['afternoon', 'floral', 'premium', 'ritual'],
    quizScore: { morning: 1, afternoon: 3, evening: 1, focus: 1, relax: 3, energy: 0, caffeine: 0, noCaffeine: 1, warm: 2, cold: 1 }
  },
  {
    id: 'ceylon-white', name: 'Ceylon Silver Tips White Tea', emoji: '🌿', origin: 'Sri Lanka (Nuwara Eliya)', color: '#d8c8b8',
    caffeine: 'low', caffeineLabel: 'Low (10–20 mg/cup)',
    flavor: ['delicate', 'honey', 'slightly earthy', 'clean'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Hand-picked silver-tipped buds from Sri Lanka\'s Nuwara Eliya highland gardens — the same region that produces some of Ceylon\'s finest black teas. The white tea process preserves a delicate honey-sweet, slightly earthy character with very low caffeine. Rare and limited production.',
    benefits: ['Very low caffeine', 'Extremely high in antioxidants', 'Polyphenol-rich buds', 'Rare and premium'],
    brew: { temp: '70–75 °C', time: '4–6 min', amount: '2–3 g / 200 ml' },
    tags: ['morning', 'afternoon', 'white tea', 'premium'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 1, relax: 2, energy: 0, caffeine: 0, noCaffeine: 1, warm: 2, cold: 1 }
  },
  {
    id: 'awa-bancha', name: 'Awa Bancha', emoji: '🗾', origin: 'Japan (Tokushima, Shikoku)', color: '#6a7840',
    caffeine: 'low', caffeineLabel: 'Very Low (5–10 mg/cup)',
    flavor: ['sour', 'earthy', 'unique', 'light'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'A rare, lactic-acid fermented green tea from Tokushima on the island of Shikoku. Unlike any other Japanese tea — harvested from old-growth trees, the leaves are fermented with naturally occurring bacteria after steaming, producing a tangy, pleasantly sour cup. Almost caffeine-free and excellent for gut health.',
    benefits: ['Near caffeine-free', 'Probiotic from lactic fermentation', 'Supports gut microbiome', 'Extremely rare tradition'],
    brew: { temp: '80–90 °C', time: '2–3 min', amount: '3 g / 200 ml' },
    tags: ['afternoon', 'evening', 'japanese', 'unique'],
    quizScore: { morning: 0, afternoon: 2, evening: 3, focus: 0, relax: 2, energy: 0, caffeine: 0, noCaffeine: 2, warm: 2, cold: 1 }
  },
  {
    id: 'white-monkey-paw', name: 'White Monkey Paw', emoji: '🐒', origin: 'China (Fujian)', color: '#90c870',
    caffeine: 'low', caffeineLabel: 'Low (15–25 mg/cup)',
    flavor: ['sweet', 'vegetal', 'light', 'delicate'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A rare Fujian green tea whose name comes from the tiny, curled appearance of the finished leaves — resembling monkey paws. Harvested only in early spring from tender buds and leaves, it produces a lightly sweet, delicately vegetal cup prized for its pristine freshness.',
    benefits: ['Very high in spring antioxidants', 'Delicate bud-rich tea', 'Gentle focus', 'Refreshing and light'],
    brew: { temp: '70–75 °C', time: '2 min', amount: '3 g / 200 ml' },
    tags: ['morning', 'afternoon', 'premium', 'delicate'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 1, relax: 2, energy: 1, caffeine: 0, noCaffeine: 1, warm: 2, cold: 1 }
  },
  {
    id: 'yunnan-white', name: 'Yunnan White (Moon Palace)', emoji: '🌕', origin: 'China (Yunnan)', color: '#c8b898',
    caffeine: 'low', caffeineLabel: 'Low (15–25 mg/cup)',
    flavor: ['honey', 'fruity', 'mellow', 'lightly spiced'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Yunnan white tea, made from the large-leaf Yunnan assamica cultivar, develops a distinctly different character from Fujian whites. The larger buds produce more body and a honeyed, fruity depth. Aged Yunnan white can take on extraordinary complexity — an excellent gateway to white tea aging.',
    benefits: ['Rich polyphenol content from large buds', 'Gentle caffeine', 'Improves with aging', 'Anti-aging antioxidants'],
    brew: { temp: '80–85 °C', time: '3–5 min', amount: '3 g / 200 ml' },
    tags: ['afternoon', 'evening', 'white tea', 'honey'],
    quizScore: { morning: 1, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 0, caffeine: 0, noCaffeine: 1, warm: 2, cold: 1 }
  },
  {
    id: 'pineapple-green', name: 'Pineapple Green Tea', emoji: '🍍', origin: 'Global blend (green tea base)', color: '#d4e040',
    caffeine: 'low', caffeineLabel: 'Low (15–25 mg/cup)',
    flavor: ['tropical', 'sweet', 'tangy', 'fruity'],
    bestTimes: ['afternoon'],
    desc: 'Light Japanese or Chinese green tea with natural pineapple flavouring. The tropical tartness of pineapple cuts through any grassiness for a bright, sweet, playful cup. Exceptional over ice with sparkling water for a refreshing summery treat.',
    benefits: ['Gentle caffeine', 'Refreshing and hydrating', 'Popular iced tea flavour', 'Antioxidant-rich base'],
    brew: { temp: '75–80 °C', time: '2–3 min', amount: '2 g / 250 ml' },
    tags: ['afternoon', 'fruity', 'tropical', 'iced'],
    quizScore: { morning: 1, afternoon: 2, evening: 1, focus: 0, relax: 2, energy: 1, caffeine: 0, noCaffeine: 1, warm: 1, cold: 3 }
  }
];
