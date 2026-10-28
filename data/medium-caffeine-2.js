'use strict';
// BATCH 6 — MEDIUM CAFFEINE (Teas 91–100)
const TEAS_MEDIUM2 = [
  {
    id: 'jin-xuan', name: 'Jin Xuan Milk Oolong', emoji: '🥛', origin: 'Taiwan (Alishan region)', color: '#d4b060',
    caffeine: 'medium', caffeineLabel: 'Medium (30–50 mg/cup)',
    flavor: ['creamy', 'buttery', 'floral', 'milky'],
    bestTimes: ['afternoon'],
    desc: 'Taiwan cultivar #12, nicknamed "Milk Oolong" for its extraordinary natural creaminess — no milk is added. Grown at mid-altitude, the leaves produce a buttery, floral cup with a distinctive soft sweetness. One of Taiwan\'s most beloved and accessible oolongs.',
    benefits: ['Naturally creamy, buttery cup', 'Naturally low bitterness', 'Easy-drinking and versatile', 'Taiwan cultivar No. 12'],
    brew: { temp: '85–90 °C', time: '2–3 min', amount: '4–5 g / 200 ml' },
    tags: ['afternoon', 'floral', 'taiwanese', 'oolong'],
    quizScore: { morning: 1, afternoon: 3, evening: 1, focus: 2, relax: 2, energy: 1, caffeine: 1, noCaffeine: -1, warm: 2, cold: 1 }
  },
  {
    id: 'dong-ding', name: 'Dong Ding Oolong', emoji: '🏔️', origin: 'Taiwan (Lugu, Nantou)', color: '#9c6028',
    caffeine: 'medium', caffeineLabel: 'Medium (35–50 mg/cup)',
    flavor: ['roasted', 'woody', 'sweet', 'complex'],
    bestTimes: ['afternoon'],
    desc: 'One of Taiwan\'s original and most famous oolongs from the Dong Ding ("Frozen Summit") mountain. Traditionally roasted over charcoal, it has a warm, woody, slightly sweet complexity. The roasting transforms it into a deeply comforting afternoon tea that pairs perfectly with pastries.',
    benefits: ['Warm, woody flavour', 'Warming and comforting', 'Contains antioxidants', 'Re-steepable 4–5 times'],
    brew: { temp: '90–95 °C', time: '2–3 min', amount: '4–5 g / 150 ml' },
    tags: ['afternoon', 'roasted', 'taiwanese', 'oolong'],
    quizScore: { morning: 1, afternoon: 3, evening: 1, focus: 1, relax: 2, energy: 1, caffeine: 1, noCaffeine: -1, warm: 3, cold: 0 }
  },
  {
    id: 'alishan', name: 'Alishan High Mountain Oolong', emoji: '⛰️', origin: 'Taiwan (Alishan, 1,000–1,400 m)', color: '#a8c870',
    caffeine: 'medium', caffeineLabel: 'Medium (30–45 mg/cup)',
    flavor: ['floral', 'creamy', 'fresh', 'lightly vegetal'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Grown above 1,000 metres in the Alishan mountain range, the cool temperatures slow leaf growth and concentrate natural sweetness. This gao shan ("high mountain") oolong is lightly oxidised with a fresh, floral, creamy character — one of Taiwan\'s most celebrated teas.',
    benefits: ['High-mountain (gao shan) oolong', 'Contains antioxidants', 'Fresh, creamy flavour', 'Beautiful floral aroma'],
    brew: { temp: '85 °C', time: '2–3 min', amount: '4 g / 200 ml' },
    tags: ['morning', 'afternoon', 'premium', 'taiwanese'],
    quizScore: { morning: 2, afternoon: 3, evening: 1, focus: 2, relax: 2, energy: 1, caffeine: 1, noCaffeine: -1, warm: 2, cold: 1 }
  },
  {
    id: 'junshan-yinzhen', name: 'Junshan Yinzhen Yellow Tea', emoji: '🌕', origin: 'China (Hunan, Junshan Island)', color: '#d4c040',
    caffeine: 'medium', caffeineLabel: 'Medium (25–40 mg/cup)',
    flavor: ['mellow', 'slightly grassy', 'sweet', 'smooth'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'One of China\'s rarest and most prized teas — only produced on the tiny Junshan Island in Dongting Lake, Hunan. The unique "yellowing" process wraps the leaves to cause gentle oxidation, eliminating bitterness and producing an extraordinarily mellow, sweet cup. Once a tribute tea for emperors.',
    benefits: ['No bitterness, exceptionally smooth', 'Contains antioxidants', 'One of China\'s Ten Famous Teas', 'Mellow, sweet cup'],
    brew: { temp: '70–75 °C', time: '2–3 min', amount: '3 g / 200 ml' },
    tags: ['morning', 'afternoon', 'premium', 'rare'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 1, relax: 2, energy: 1, caffeine: 1, noCaffeine: 0, warm: 2, cold: 1 }
  },
  {
    id: 'gaba-oolong', name: 'GABA Oolong', emoji: '🧠', origin: 'Taiwan / Japan', color: '#c08848',
    caffeine: 'medium', caffeineLabel: 'Medium (30–45 mg/cup)',
    flavor: ['fruity', 'slightly sour', 'complex', 'unusual'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'A specialty oolong processed in a low-oxygen (nitrogen gas) step, which raises its natural GABA (gamma-aminobutyric acid) content. It is a mellow, slightly sweet oolong with an unusual story.',
    benefits: ['Contains natural GABA', 'Made with a special low-oxygen step', 'Mellow, slightly sweet flavour', 'Unusual specialty tea'],
    brew: { temp: '85–90 °C', time: '2–3 min', amount: '4 g / 200 ml' },
    tags: ['afternoon', 'evening', 'wellness', 'unique'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 1, relax: 3, energy: 0, caffeine: 1, noCaffeine: 0, warm: 2, cold: 1 }
  },
  {
    id: 'maofeng', name: 'Huangshan Maofeng', emoji: '🌫️', origin: 'China (Anhui, Yellow Mountain)', color: '#70a058',
    caffeine: 'medium', caffeineLabel: 'Medium (30–40 mg/cup)',
    flavor: ['orchid', 'fresh', 'sweet', 'clean'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'One of China\'s Ten Famous Teas — "Yellow Mountain Fur Peak." Grown on mist-covered peaks of the Huangshan range, the curled leaves unfurl in the cup to reveal a delicate orchid fragrance and clean, sweet freshness. Prized since the Ming dynasty.',
    benefits: ['Contains catechin antioxidants', 'Gentle caffeine lift', 'Delicate orchid fragrance', 'One of China\'s Ten Famous Teas'],
    brew: { temp: '75–80 °C', time: '2–3 min', amount: '3 g / 200 ml' },
    tags: ['morning', 'afternoon', 'premium', 'floral'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 2, relax: 1, energy: 1, caffeine: 1, noCaffeine: 0, warm: 2, cold: 1 }
  },
  {
    id: 'liu-an', name: 'Liu An Gua Pian', emoji: '🫘', origin: 'China (Anhui, Lu\'an)', color: '#5a9040',
    caffeine: 'medium', caffeineLabel: 'Medium (30–40 mg/cup)',
    flavor: ['mellow', 'slightly toasty', 'clean', 'vegetal'],
    bestTimes: ['afternoon'],
    desc: 'Liu An Gua Pian ("Melon Seed", also written Lu\'an Guapian) uses only the leaf, with no buds or stems. It is made from more mature leaves and gives a clean, mellow cup. One of China\'s Ten Famous Teas.',
    benefits: ['Unique preparation method', 'Rich in catechins', 'Mellow and non-astringent', 'Historically important'],
    brew: { temp: '80 °C', time: '2–3 min', amount: '3 g / 200 ml' },
    tags: ['afternoon', 'premium', 'chinese', 'classic'],
    quizScore: { morning: 1, afternoon: 3, evening: 1, focus: 2, relax: 1, energy: 1, caffeine: 1, noCaffeine: 0, warm: 2, cold: 1 }
  },
  {
    id: 'orange-pekoe', name: 'Orange Pekoe', emoji: '🍊', origin: 'Sri Lanka / India (a leaf grade)', color: '#d47030',
    caffeine: 'medium', caffeineLabel: 'Medium (40–55 mg/cup)',
    flavor: ['bright', 'brisk', 'full-bodied', 'classic'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Despite the name, Orange Pekoe contains no orange. It is a Western trade term for a basic, medium-grade black tea made of many whole leaves of a certain size, and it is typically used for teas from Sri Lanka and India. It makes a classic, brisk everyday cup.',
    benefits: ['Balanced caffeine', 'Rich in antioxidants', 'Classic versatile flavour', 'Excellent hot or iced'],
    brew: { temp: '95 °C', time: '3–4 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'afternoon', 'classic', 'bold'],
    quizScore: { morning: 2, afternoon: 2, evening: -1, focus: 2, relax: 0, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 2 }
  },
  {
    id: 'masala-chai', name: 'Masala Chai Blend', emoji: '🫙', origin: 'India (pre-blended)', color: '#b86030',
    caffeine: 'medium', caffeineLabel: 'Medium (30–50 mg/cup)',
    flavor: ['spicy', 'warming', 'sweet', 'complex'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A pre-blended masala chai combining Assam black tea with ground cardamom, cinnamon, ginger, cloves, and pepper — ready to steep without individual spice preparation. The accessible version of India\'s beloved spiced tea tradition, perfect with milk and a touch of honey.',
    benefits: ['Warming spice blend', 'Good caffeine kick', 'Comforting and satisfying', 'Perfect with milk'],
    brew: { temp: '95–100 °C', time: '4–5 min', amount: '1 heaped tsp / 200 ml' },
    tags: ['morning', 'afternoon', 'warming', 'spiced'],
    quizScore: { morning: 2, afternoon: 2, evening: -1, focus: 1, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 3, cold: 0 }
  },
  {
    id: 'moonlight-white', name: 'Moonlight White (Yueguang Bai)', emoji: '🌙', origin: 'China (Yunnan)', color: '#d8c8a8',
    caffeine: 'medium', caffeineLabel: 'Medium (20–40 mg/cup)',
    flavor: ['honey', 'fruity', 'slightly fermented', 'unique'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Processed from the Yunnan large-leaf variety and dried slowly in cool, low-light conditions. The result is more complex than standard white tea, with honey and fruit notes and a slight fermented note that deepens with age.',
    benefits: ['Naturally aged complexity', 'Rich in polyphenols', 'Ages beautifully', 'Lower bitterness than other whites'],
    brew: { temp: '85–90 °C', time: '3–5 min', amount: '3 g / 200 ml' },
    tags: ['afternoon', 'evening', 'unique', 'aged'],
    quizScore: { morning: 1, afternoon: 2, evening: 2, focus: 1, relax: 2, energy: 1, caffeine: 1, noCaffeine: 0, warm: 2, cold: 1 }
  }
];
