'use strict';
// BATCH 2 — MEDIUM CAFFEINE (20 teas)
const TEAS_MEDIUM = [
  {
    id: 'darjeeling', name: 'Darjeeling', emoji: '🏞️', origin: 'India (Darjeeling)', color: '#b07040',
    caffeine: 'medium', caffeineLabel: 'Medium (30–50 mg/cup)',
    flavor: ['muscatel', 'floral', 'fruity', 'delicate'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Often called the "Champagne of teas," Darjeeling first flush has an unmistakable muscatel (grape-like) character. Grown at high altitude in the Himalayan foothills, it is one of the world\'s most sought-after teas.',
    benefits: ['Contains antioxidants', 'Muscatel, grape-like flavour', 'Gentle caffeine lift', 'Grown in the Himalayan foothills'],
    brew: { temp: '85–90 °C', time: '2–3 min', amount: '2–3 g / 250 ml' },
    tags: ['morning', 'afternoon', 'premium', 'floral'],
    quizScore: { morning: 2, afternoon: 2, evening: 0, focus: 2, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 0 }
  },
  {
    id: 'earltrey', name: 'Earl Grey', emoji: '🍋', origin: 'England / China', color: '#8b6cbf',
    caffeine: 'medium', caffeineLabel: 'Medium (40–50 mg/cup)',
    flavor: ['citrusy', 'floral', 'bergamot', 'malty'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Black tea scented with bergamot orange oil. Earl Grey strikes a perfect balance — enough caffeine to keep you alert, with a floral citrus lift that makes any break feel elegant.',
    benefits: ['Fragrant bergamot aroma', 'Moderate caffeine', 'Contains antioxidants', 'Classic afternoon tea'],
    brew: { temp: '95 °C', time: '3–4 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'afternoon', 'floral', 'citrusy'],
    quizScore: { morning: 2, afternoon: 2, evening: -1, focus: 2, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 0 }
  },
  {
    id: 'puerh', name: 'Pu-erh', emoji: '🍫', origin: 'China (Yunnan)', color: '#4a2810',
    caffeine: 'medium', caffeineLabel: 'Medium (30–70 mg/cup)',
    flavor: ['earthy', 'musty', 'dark', 'complex'],
    bestTimes: ['morning', 'afternoon', 'after meals'],
    desc: 'A post-fermented tea from Yunnan, aged for months to decades. Pu-erh develops earthy, musty complexity over time, and it is one of China\'s Ten Famous Teas. Prized by collectors for vintage cakes.',
    benefits: ['Develops deeper flavour with age', 'Earthy, smooth character', 'Often brewed several times', 'Popular with collectors'],
    brew: { temp: '95–100 °C', time: '30 sec–3 min', amount: '3–5 g / 150 ml' },
    tags: ['morning', 'after meals', 'digestion', 'aged'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 1, relax: 1, energy: 2, caffeine: 1, noCaffeine: -1, warm: 3, cold: 0 }
  },
  {
    id: 'oolong', name: 'Oolong', emoji: '🍂', origin: 'China / Taiwan', color: '#c07b3c',
    caffeine: 'medium', caffeineLabel: 'Medium (30–55 mg/cup)',
    flavor: ['complex', 'floral', 'fruity', 'toasty'],
    bestTimes: ['afternoon'],
    desc: 'Partially oxidised between green and black tea, oolong offers extraordinary complexity. Its wide spectrum — from floral and fresh to roasted and dark — makes it the most versatile tea.',
    benefits: ['Wide range from floral to roasted', 'Contains antioxidants', 'Can be steeped several times', 'Usually lower in caffeine than black tea'],
    brew: { temp: '85–95 °C', time: '2–3 min', amount: '3–5 g / 200 ml' },
    tags: ['afternoon', 'focus', 'complex', 'metabolism'],
    quizScore: { morning: 1, afternoon: 3, evening: 0, focus: 2, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 1 }
  },
  {
    id: 'longjing', name: 'Longjing (Dragonwell)', emoji: '🐉', origin: 'China (Zhejiang)', color: '#5a9060',
    caffeine: 'medium', caffeineLabel: 'Medium (35–50 mg/cup)',
    flavor: ['nutty', 'toasty', 'sweet chestnut', 'clean'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'China\'s most famous green tea, hand-roasted in iron woks to stop oxidation. Produces flat, spear-shaped leaves with a distinctive toasty-sweet, chestnut-like flavour unlike any other green tea.',
    benefits: ['Contains catechin antioxidants', 'Calm, steady energy', 'Sweet, chestnut-like flavour', 'One of China\'s Ten Famous Teas'],
    brew: { temp: '75–80 °C', time: '2–3 min', amount: '3 g / 200 ml' },
    tags: ['morning', 'afternoon', 'premium', 'chinese'],
    quizScore: { morning: 2, afternoon: 3, evening: 0, focus: 2, relax: 1, energy: 2, caffeine: 1, noCaffeine: -1, warm: 2, cold: 1 }
  },
  {
    id: 'biluochun', name: 'Bi Luo Chun (Green Snail Spring)', emoji: '🌀', origin: 'China (Jiangsu)', color: '#4a8840',
    caffeine: 'medium', caffeineLabel: 'Medium (35–45 mg/cup)',
    flavor: ['fruity', 'floral', 'delicate', 'intensely fragrant'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'One of China\'s Ten Famous Teas, hand-rolled into tiny spirals. Grown among fruit and flower trees in Jiangsu province, it naturally takes on floral and fruity aromas, producing a tea of extraordinary fragrance.',
    benefits: ['Fruity, floral aroma', 'Contains catechins', 'Light and refreshing', 'One of China\'s Ten Famous Teas'],
    brew: { temp: '70–75 °C', time: '2 min', amount: '3 g / 150 ml' },
    tags: ['morning', 'afternoon', 'premium', 'floral'],
    quizScore: { morning: 2, afternoon: 3, evening: 1, focus: 2, relax: 2, energy: 1, caffeine: 1, noCaffeine: -1, warm: 2, cold: 1 }
  },
  {
    id: 'tieguanyin', name: 'Tie Guan Yin (Iron Goddess)', emoji: '🪷', origin: 'China (Fujian / Anxi)', color: '#b08040',
    caffeine: 'medium', caffeineLabel: 'Medium (30–50 mg/cup)',
    flavor: ['orchid', 'floral', 'creamy', 'long sweet finish'],
    bestTimes: ['afternoon'],
    desc: 'China\'s most famous oolong — the "Iron Goddess of Mercy." Lightly oxidised with a gorgeous orchid-like character and a lingering sweet aftertaste that improves with each subsequent steep.',
    benefits: ['Orchid-like aroma', 'Very re-steepable (8+ times)', 'Lingering sweet aftertaste', 'Contains antioxidants'],
    brew: { temp: '85–90 °C', time: '1–2 min', amount: '5 g / 150 ml' },
    tags: ['afternoon', 'floral', 'oolong', 'premium'],
    quizScore: { morning: 1, afternoon: 3, evening: 1, focus: 2, relax: 2, energy: 1, caffeine: 1, noCaffeine: -1, warm: 2, cold: 1 }
  },
  {
    id: 'dahongpao', name: 'Da Hong Pao (Big Red Robe)', emoji: '🏯', origin: 'China (Wuyi Mountains)', color: '#8c4820',
    caffeine: 'medium', caffeineLabel: 'Medium (40–50 mg/cup)',
    flavor: ['roasted', 'mineral', 'caramel', 'complex'],
    bestTimes: ['afternoon'],
    desc: 'Among the world\'s most prestigious teas, grown on mineral-rich cliffs of the Wuyi Mountains. This Wuyi Rock oolong delivers extraordinary mineral depth, roasted complexity, and a warm, lingering finish.',
    benefits: ['Contains antioxidants', 'Roasted, mineral flavour', 'Warm, lingering finish', 'Very re-steepable'],
    brew: { temp: '95 °C', time: '30 sec–2 min', amount: '5 g / 100 ml' },
    tags: ['afternoon', 'premium', 'roasted', 'mineral'],
    quizScore: { morning: 1, afternoon: 3, evening: 1, focus: 2, relax: 1, energy: 1, caffeine: 1, noCaffeine: -1, warm: 3, cold: 0 }
  },
  {
    id: 'dan-cong', name: 'Phoenix Dan Cong', emoji: '🦚', origin: 'China (Guangdong)', color: '#b07030',
    caffeine: 'medium', caffeineLabel: 'Medium (35–50 mg/cup)',
    flavor: ['honey orchid', 'fruity', 'complex', 'aromatic'],
    bestTimes: ['afternoon'],
    desc: 'A remarkable oolong from Phoenix Mountain in Guangdong, processed from individual trees (dan cong = single bush). Each tree produces its own distinctive flavour — honey orchid, almond, grapefruit, or even "duck shit" (Ya Shi Xiang).',
    benefits: ['Extraordinary flavour complexity', 'Contains antioxidants', 'Re-steepable 8+ times', 'Each bush has its own character'],
    brew: { temp: '90–95 °C', time: '30 sec–1 min', amount: '5 g / 100 ml' },
    tags: ['afternoon', 'premium', 'oolong', 'unique'],
    quizScore: { morning: 1, afternoon: 3, evening: 1, focus: 2, relax: 2, energy: 1, caffeine: 1, noCaffeine: -1, warm: 2, cold: 1 }
  },
  {
    id: 'oriental-beauty', name: 'Oriental Beauty Oolong', emoji: '🦋', origin: 'Taiwan (Hsinchu)', color: '#c8a060',
    caffeine: 'medium', caffeineLabel: 'Medium (35–45 mg/cup)',
    flavor: ['honey', 'muscatel', 'fruity', 'sweet'],
    bestTimes: ['afternoon'],
    desc: 'A famous Taiwanese oolong. The finest leaves are those fed on by a small leafhopper insect, which triggers natural defence chemicals that create an extraordinary honey, muscatel, sweet-fruit character.',
    benefits: ['Natural pest-triggered flavour', 'Contains antioxidants', 'Grown without insecticides so the leafhoppers can feed', 'Beautiful amber colour'],
    brew: { temp: '80–85 °C', time: '2–3 min', amount: '3 g / 200 ml' },
    tags: ['afternoon', 'premium', 'honey', 'taiwanese'],
    quizScore: { morning: 1, afternoon: 3, evening: 1, focus: 1, relax: 2, energy: 1, caffeine: 1, noCaffeine: -1, warm: 2, cold: 1 }
  },
  {
    id: 'genmaicha', name: 'Genmaicha', emoji: '🍚', origin: 'Japan', color: '#9a8040',
    caffeine: 'medium', caffeineLabel: 'Medium (20–35 mg/cup)',
    flavor: ['nutty', 'toasty', 'savoury', 'light grassy'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Japanese green tea blended with roasted popped rice. Often called "popcorn tea," the roasted rice provides a distinctive nutty, toasty, savoury quality that makes genmaicha one of Japan\'s most beloved everyday teas.',
    benefits: ['Lower caffeine than pure green', 'Contains antioxidants', 'Easy on the stomach', 'Comforting and filling'],
    brew: { temp: '80 °C', time: '1–2 min', amount: '3 g / 200 ml' },
    tags: ['afternoon', 'evening', 'japanese', 'nutty'],
    quizScore: { morning: 1, afternoon: 2, evening: 2, focus: 1, relax: 2, energy: 1, caffeine: 1, noCaffeine: 0, warm: 3, cold: 1 }
  },
  {
    id: 'bancha', name: 'Bancha', emoji: '🍵', origin: 'Japan', color: '#6a9058',
    caffeine: 'medium', caffeineLabel: 'Medium (20–30 mg/cup)',
    flavor: ['grassy', 'earthy', 'slightly astringent', 'clean'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'A Japanese everyday green tea made from more mature leaves, from the third and fourth flushes picked between summer and autumn. Lower in caffeine than sencha but still a clean, pleasant cup. A common household tea in Japan.',
    benefits: ['Everyday Japanese green tea', 'Goes well with food', 'Affordable', 'Mellow, easy flavour'],
    brew: { temp: '80–90 °C', time: '30 sec–1 min', amount: '3 g / 200 ml' },
    tags: ['afternoon', 'evening', 'japanese', 'everyday'],
    quizScore: { morning: 1, afternoon: 2, evening: 2, focus: 1, relax: 2, energy: 1, caffeine: 1, noCaffeine: 0, warm: 2, cold: 1 }
  },
  {
    id: 'bai-mu-dan', name: 'Bai Mu Dan (White Peony)', emoji: '🌺', origin: 'China (Fujian)', color: '#c8a8b0',
    caffeine: 'medium', caffeineLabel: 'Medium (20–40 mg/cup)',
    flavor: ['honey', 'floral', 'slightly fruity', 'full-bodied'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'The second grade of white tea after Silver Needle — made from the bud plus two young leaves. More body and flavour than Silver Needle with a lovely honey, floral, slightly hay-like character. A wonderful everyday white tea.',
    benefits: ['Contains antioxidants', 'More body than Silver Needle', 'Honey, floral flavour', 'Gentle caffeine'],
    brew: { temp: '75–80 °C', time: '3–5 min', amount: '2–3 g / 200 ml' },
    tags: ['morning', 'afternoon', 'white tea', 'honey'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 1, relax: 2, energy: 1, caffeine: 1, noCaffeine: 0, warm: 2, cold: 1 }
  },
  {
    id: 'second-darjeeling', name: 'Second Flush Darjeeling', emoji: '🌄', origin: 'India (Darjeeling)', color: '#c09050',
    caffeine: 'medium', caffeineLabel: 'Medium (35–50 mg/cup)',
    flavor: ['muscatel', 'full-bodied', 'ripe fruit', 'rich'],
    bestTimes: ['afternoon'],
    desc: 'Harvested June–July, second flush Darjeeling is considered the finest expression of this region\'s teas. Fuller and richer than first flush, with the characteristic muscatel grape flavour fully developed.',
    benefits: ['Fuller body than first flush', 'Rich in polyphenols', 'Antioxidant-rich', 'Complex muscatel character'],
    brew: { temp: '90 °C', time: '3 min', amount: '2–3 g / 250 ml' },
    tags: ['afternoon', 'premium', 'muscatel', 'indian'],
    quizScore: { morning: 1, afternoon: 3, evening: 0, focus: 2, relax: 1, energy: 2, caffeine: 2, noCaffeine: -1, warm: 2, cold: 1 }
  },
  {
    id: 'blueberry-green', name: 'Blueberry Green Tea', emoji: '🫐', origin: 'Global blend (green tea base)', color: '#5050a0',
    caffeine: 'medium', caffeineLabel: 'Medium (20–30 mg/cup)',
    flavor: ['blueberry', 'sweet-tart', 'fruity', 'fresh'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Delicate green tea with the sweet-tart flavour of blueberries. Light and refreshing, and lovely iced with a touch of honey.',
    benefits: ['Natural fruit flavour', 'Contains green tea catechins', 'Natural sweetness', 'Refreshing hot or iced'],
    brew: { temp: '75–80 °C', time: '2–3 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'afternoon', 'fruity', 'iced'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 1, relax: 2, energy: 1, caffeine: 1, noCaffeine: 0, warm: 1, cold: 3 }
  },
  {
    id: 'peach-green', name: 'Peach Green Tea', emoji: '🍑', origin: 'Global blend (green tea base)', color: '#e8a050',
    caffeine: 'medium', caffeineLabel: 'Medium (20–30 mg/cup)',
    flavor: ['sweet peach', 'fruity', 'light', 'refreshing'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A widely loved combination of light green tea with natural peach flavouring. Sweet, floral, and refreshing, and perfect over ice.',
    benefits: ['Light caffeine', 'Natural summery flavour', 'Popular iced tea favourite', 'Antioxidant-rich green tea base'],
    brew: { temp: '75–80 °C', time: '2–3 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'afternoon', 'fruity', 'iced'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 0, relax: 2, energy: 1, caffeine: 1, noCaffeine: 0, warm: 1, cold: 3 }
  },
  {
    id: 'strawberry-green', name: 'Strawberry Green Tea', emoji: '🍓', origin: 'Global blend (green tea base)', color: '#e04060',
    caffeine: 'medium', caffeineLabel: 'Medium (20–30 mg/cup)',
    flavor: ['strawberry', 'sweet', 'fresh', 'summery'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Light green tea paired with bright, summery strawberry flavour. Delicate, sweet, and perfect over ice. A gateway tea for those new to green teas — easy-drinking and naturally appealing.',
    benefits: ['Gentle caffeine', 'Approachable for new tea drinkers', 'Refreshing iced', 'Antioxidant-rich base'],
    brew: { temp: '75–80 °C', time: '2–3 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'afternoon', 'fruity', 'iced'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 0, relax: 2, energy: 1, caffeine: 1, noCaffeine: 0, warm: 1, cold: 3 }
  },
  {
    id: 'raspberry-green', name: 'Raspberry Green Tea', emoji: '🫐', origin: 'Global blend (green tea base)', color: '#c03060',
    caffeine: 'medium', caffeineLabel: 'Medium (20–30 mg/cup)',
    flavor: ['tart raspberry', 'fresh', 'slightly tangy', 'vibrant'],
    bestTimes: ['afternoon'],
    desc: 'Tangy raspberry meets the grassy freshness of green tea. Vibrant, refreshing, and excellent both hot and cold. Iced raspberry green tea takes on a pink hue.',
    benefits: ['Tart and refreshing', 'Contains green tea catechins', 'Pretty iced colour', 'Gentle afternoon caffeine'],
    brew: { temp: '75–80 °C', time: '2–3 min', amount: '2 g / 250 ml' },
    tags: ['afternoon', 'fruity', 'iced', 'refreshing'],
    quizScore: { morning: 1, afternoon: 2, evening: 1, focus: 0, relax: 2, energy: 1, caffeine: 1, noCaffeine: 0, warm: 1, cold: 3 }
  },
  {
    id: 'lychee-green', name: 'Lychee Green Tea', emoji: '🍈', origin: 'China (flavoured blend)', color: '#b8d080',
    caffeine: 'medium', caffeineLabel: 'Medium (20–30 mg/cup)',
    flavor: ['lychee', 'floral', 'rose-like', 'sweet'],
    bestTimes: ['afternoon'],
    desc: 'A Chinese tradition — delicate green tea naturally scented with lychee fruit. Floral, sweet, and rose-like, it\'s a lighter alternative to lychee black tea with a more delicate base.',
    benefits: ['Light and aromatic', 'Contains antioxidants', 'Floral aroma', 'Lighter than lychee black tea'],
    brew: { temp: '75–80 °C', time: '2 min', amount: '2 g / 250 ml' },
    tags: ['afternoon', 'floral', 'fruity', 'chinese'],
    quizScore: { morning: 1, afternoon: 3, evening: 1, focus: 1, relax: 2, energy: 1, caffeine: 1, noCaffeine: 0, warm: 2, cold: 2 }
  },
  {
    id: 'coconut-green', name: 'Coconut Green Tea', emoji: '🥥', origin: 'Global blend (green tea base)', color: '#7ab890',
    caffeine: 'medium', caffeineLabel: 'Medium (20–30 mg/cup)',
    flavor: ['coconut', 'tropical', 'slightly nutty', 'mellow'],
    bestTimes: ['afternoon'],
    desc: 'Green tea blended with natural coconut flavour. The tropical nuttiness of coconut softens green tea\'s grassy edges for a mellow, approachable, and gently exotic cup — wonderful both hot and iced.',
    benefits: ['Tropical flavour', 'Gentle caffeine', 'Contains green tea catechins', 'Easy-drinking flavour'],
    brew: { temp: '75–80 °C', time: '2–3 min', amount: '2 g / 250 ml' },
    tags: ['afternoon', 'fruity', 'tropical', 'mellow'],
    quizScore: { morning: 1, afternoon: 2, evening: 1, focus: 0, relax: 2, energy: 1, caffeine: 1, noCaffeine: 0, warm: 2, cold: 2 }
  }
];
