'use strict';
// BATCH 4 — CAFFEINE-FREE (20 teas)
const TEAS_FREE = [
  {
    id: 'chamomile', name: 'Chamomile', emoji: '🌼', origin: 'Europe / Mediterranean', color: '#e8c84a',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['floral', 'apple-like', 'honey', 'slightly sweet'],
    bestTimes: ['evening', 'night'],
    desc: 'An herbal infusion of dried chamomile flowers. Soft, floral, and gentle, it is a traditional evening drink.',
    benefits: ['Traditional evening tea', 'Soft, floral flavour', 'Pairs well with honey', 'Soothing warm drink'],
    brew: { temp: '90–95 °C', time: '5–7 min', amount: '2 tsp / 240 ml' },
    tags: ['evening', 'sleep', 'relaxation', 'caffeine-free'],
    quizScore: { morning: -2, afternoon: 0, evening: 3, focus: -1, relax: 3, energy: -2, caffeine: -3, noCaffeine: 3, warm: 2, cold: 0 }
  },
  {
    id: 'peppermint', name: 'Peppermint', emoji: '🌱', origin: 'Europe / North America', color: '#2fa86f',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['cooling', 'minty', 'refreshing', 'crisp'],
    bestTimes: ['afternoon', 'after meals'],
    desc: 'A brisk, cooling herbal infusion. Peppermint gets its fresh, cool taste from menthol and is a popular after-meal tea.',
    benefits: ['Cooling, refreshing taste', 'Popular after-meal tea', 'Freshens the breath', 'Refreshing hot or iced'],
    brew: { temp: '90–95 °C', time: '5–7 min', amount: '1 tbsp / 240 ml' },
    tags: ['afternoon', 'after meals', 'digestion', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 1, focus: 1, relax: 2, energy: 1, caffeine: -2, noCaffeine: 2, warm: 1, cold: 2 }
  },
  {
    id: 'spearmint', name: 'Spearmint', emoji: '🫧', origin: 'Mediterranean / Middle East', color: '#3cb87a',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['mild mint', 'sweet', 'herbal', 'gentle'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Gentler and sweeter than peppermint, spearmint contains far less menthol. Popular in Moroccan tea culture. Perfect for those who find peppermint too intense.',
    benefits: ['Milder and sweeter than peppermint', 'Refreshing without the sting', 'Popular in Moroccan tea culture', 'Good hot or iced'],
    brew: { temp: '90–95 °C', time: '5 min', amount: '1 tbsp / 240 ml' },
    tags: ['afternoon', 'evening', 'digestion', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 0, caffeine: -2, noCaffeine: 2, warm: 1, cold: 2 }
  },
  {
    id: 'ginger', name: 'Ginger Tea', emoji: '🫚', origin: 'South / Southeast Asia', color: '#d4842b',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['spicy', 'warming', 'zesty', 'pungent'],
    bestTimes: ['morning', 'afternoon', 'when sick'],
    desc: 'Made from fresh or dried ginger root, this warming tea delivers a fiery kick. Used for centuries in Ayurveda and Traditional Chinese Medicine.',
    benefits: ['Warming, spicy flavour', 'Traditionally used for upset stomachs', 'Long history in Ayurveda and Traditional Chinese Medicine', 'Good hot or iced'],
    brew: { temp: '100 °C', time: '10–15 min', amount: '1–2 cm fresh root / 250 ml' },
    tags: ['morning', 'immunity', 'warming', 'caffeine-free'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 1, relax: 1, energy: 2, caffeine: -2, noCaffeine: 2, warm: 3, cold: -1 }
  },
  {
    id: 'rooibos', name: 'Rooibos', emoji: '🌅', origin: 'South Africa (Cederberg)', color: '#c04b30',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['sweet', 'nutty', 'earthy', 'vanilla-like'],
    bestTimes: ['evening', 'afternoon'],
    desc: 'An herbal tea from South Africa\'s Cederberg region. Rooibos has a naturally sweet, nutty flavour with no bitterness, making it a good evening drink or a milk tea alternative.',
    benefits: ['Naturally sweet, nutty flavour', 'Contains polyphenols', 'Little bitterness, even if steeped long', 'Works well with milk'],
    brew: { temp: '95–100 °C', time: '5–7 min', amount: '1 tsp / 200 ml' },
    tags: ['evening', 'caffeine-free', 'family-friendly', 'sweet'],
    quizScore: { morning: 0, afternoon: 2, evening: 3, focus: 0, relax: 3, energy: -1, caffeine: -3, noCaffeine: 3, warm: 2, cold: 1 }
  },
  {
    id: 'lavender', name: 'Lavender Tea', emoji: '💜', origin: 'Mediterranean', color: '#9b7fd4',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['floral', 'sweet', 'herbaceous', 'light'],
    bestTimes: ['evening', 'night'],
    desc: 'Steeped from dried lavender buds, this herbal tea has a calming floral fragrance. Traditionally used as a calming herb and a gentle evening drink.',
    benefits: ['Calming floral fragrance', 'Traditional evening tea', 'Pairs well with honey or chamomile', 'Soft, flowery flavour'],
    brew: { temp: '90 °C', time: '5–7 min', amount: '1 tsp / 240 ml' },
    tags: ['evening', 'sleep', 'anxiety', 'caffeine-free'],
    quizScore: { morning: -2, afternoon: 0, evening: 3, focus: -1, relax: 3, energy: -2, caffeine: -3, noCaffeine: 3, warm: 2, cold: 0 }
  },
  {
    id: 'valerian', name: 'Valerian Root', emoji: '🌙', origin: 'Europe / Asia', color: '#5e4a8c',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['earthy', 'woody', 'slightly bitter', 'musky'],
    bestTimes: ['evening', 'night'],
    desc: 'A traditional herbal tea made from valerian root, often drunk in the evening. It has a strong, earthy smell and taste, so it is often blended or sweetened with honey.',
    benefits: ['Traditional evening herb', 'Strong, earthy flavour', 'Often blended with honey or mint'],
    brew: { temp: '90 °C', time: '10–15 min', amount: '1 tsp dried root / 250 ml' },
    tags: ['evening', 'sleep', 'anxiety', 'caffeine-free'],
    quizScore: { morning: -3, afternoon: -1, evening: 3, focus: -2, relax: 3, energy: -3, caffeine: -3, noCaffeine: 3, warm: 2, cold: 0 }
  },
  {
    id: 'rose', name: 'Rose Tea', emoji: '🌹', origin: 'Middle East / China', color: '#d4607a',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['floral', 'sweet', 'delicate', 'romantic'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Brewed from dried rose petals or buds, this elegant herbal infusion has a deeply floral, sweet character. A staple in Persian and Chinese traditions.',
    benefits: ['Delicate floral aroma', 'Sweet, gentle flavour', 'Pretty pink colour', 'Traditional in Persian and Chinese cultures'],
    brew: { temp: '90–95 °C', time: '5–7 min', amount: '1 tbsp petals / 250 ml' },
    tags: ['afternoon', 'evening', 'floral', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 0, caffeine: -2, noCaffeine: 2, warm: 2, cold: 1 }
  },
  {
    id: 'butterfly', name: 'Butterfly Pea Flower', emoji: '🔵', origin: 'Southeast Asia', color: '#4a5aaf',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['mild', 'earthy', 'slightly woody', 'neutral'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Famous for its dramatic colour change: add lemon juice and it shifts from deep blue to vibrant purple-pink. Made from butterfly pea flowers, a showstopper for entertaining.',
    benefits: ['Changes colour with lemon juice', 'Contains anthocyanin pigments', 'Mild, gentle flavour', 'Stunning for entertaining'],
    brew: { temp: '90–100 °C', time: '5–7 min', amount: '1 tbsp / 250 ml' },
    tags: ['afternoon', 'iced', 'unique', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 1, focus: 0, relax: 2, energy: 0, caffeine: -2, noCaffeine: 2, warm: 1, cold: 3 }
  },
  {
    id: 'turmeric', name: 'Turmeric Tea', emoji: '🟡', origin: 'India / South Asia', color: '#e8a020',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['earthy', 'peppery', 'slightly bitter', 'warming'],
    bestTimes: ['morning', 'evening'],
    desc: 'Made from turmeric root or powder, this golden drink is the basis of golden milk. Curcumin is turmeric\'s main colour compound and is widely studied.',
    benefits: ['Warm golden colour', 'Earthy, peppery flavour', 'Traditional in South Asian cooking and Ayurveda', 'Often drunk with a pinch of black pepper'],
    brew: { temp: '95–100 °C', time: '10 min', amount: '1 tsp / 250 ml + pinch black pepper' },
    tags: ['morning', 'immunity', 'anti-inflammatory', 'caffeine-free'],
    quizScore: { morning: 2, afternoon: 1, evening: 2, focus: 1, relax: 1, energy: 1, caffeine: -2, noCaffeine: 2, warm: 3, cold: 0 }
  },
  {
    id: 'dandelion', name: 'Dandelion Root', emoji: '🌻', origin: 'Europe / North America', color: '#c8901a',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['earthy', 'slightly bitter', 'nutty', 'roasted'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Roasted dandelion root is a popular coffee substitute with a rich, dark, slightly bitter flavour. Used in herbal traditions for centuries.',
    benefits: ['Roasted, coffee-like flavour', 'Popular coffee alternative', 'Traditional European herbal use', 'Pleasant mild bitterness'],
    brew: { temp: '95–100 °C', time: '10 min', amount: '1 tbsp / 250 ml' },
    tags: ['morning', 'liver health', 'coffee alternative', 'caffeine-free'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 1, relax: 1, energy: 1, caffeine: -2, noCaffeine: 2, warm: 2, cold: 0 }
  },
  {
    id: 'hibiscus', name: 'Hibiscus', emoji: '🌺', origin: 'West Africa / Mexico', color: '#c4304a',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['tart', 'cranberry-like', 'tangy', 'floral'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Brewed from dried hibiscus flowers (the calyces of Hibiscus sabdariffa), this vibrant ruby-red tea is refreshingly tart with a cranberry-like taste. Rich in anthocyanins, brilliant hot or iced.',
    benefits: ['Tart, cranberry-like flavour', 'Contains anthocyanins', 'Ruby-red colour', 'Refreshing hot or cold'],
    brew: { temp: '95–100 °C', time: '5–8 min', amount: '1–2 tsp / 240 ml' },
    tags: ['afternoon', 'iced', 'caffeine-free', 'heart health'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 1, caffeine: -2, noCaffeine: 2, warm: 1, cold: 3 }
  },
  {
    id: 'lemon-ginger', name: 'Lemon & Ginger', emoji: '🍋', origin: 'Global blend', color: '#e8c43a',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['zesty', 'warming', 'citrus', 'spicy'],
    bestTimes: ['morning', 'when sick'],
    desc: 'A zingy blend of lemon and ginger, bright and warming. A comforting traditional cup.',
    benefits: ['Bright, zesty flavour', 'Warming ginger spice', 'Comforting hot drink', 'Good hot or iced'],
    brew: { temp: '95–100 °C', time: '5–10 min', amount: '1 lemon slice + 1 cm ginger / 250 ml' },
    tags: ['morning', 'immunity', 'sick day', 'caffeine-free'],
    quizScore: { morning: 2, afternoon: 1, evening: 1, focus: 1, relax: 1, energy: 2, caffeine: -2, noCaffeine: 2, warm: 3, cold: -1 }
  },
  {
    id: 'barley-tea', name: 'Barley Tea (Mugicha)', emoji: '🌾', origin: 'Japan / Korea / China', color: '#c8a040',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['roasted', 'nutty', 'slightly bitter', 'grain-like'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'A roasted grain tea beloved in Japan, Korea, and China. It has a toasty, nutty, slightly bitter flavour reminiscent of light coffee. Served ice-cold in summer across East Asia.',
    benefits: ['Toasty, nutty flavour', 'Served hot or cold', 'Popular summer drink in East Asia', 'Traditionally seen as cooling in summer'],
    brew: { temp: '100 °C', time: '5–10 min (then chill)', amount: '1 tbsp roasted barley / 500 ml' },
    tags: ['afternoon', 'evening', 'iced', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 0, caffeine: -2, noCaffeine: 2, warm: 2, cold: 3 }
  },
  {
    id: 'lemongrass', name: 'Lemongrass Tea', emoji: '🌿', origin: 'Southeast Asia / West Africa', color: '#c8d840',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['lemony', 'fresh', 'herbal', 'subtly sweet'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Bright, citrusy herbal tea from fresh or dried lemongrass stalks. Lemony without any acidity, refreshing and uplifting. Popular across Southeast Asia and West Africa.',
    benefits: ['Bright, citrusy flavour', 'Lemony without acidity', 'Popular in Southeast Asia and West Africa', 'Refreshing hot or iced'],
    brew: { temp: '95 °C', time: '5–7 min', amount: '2 stalks or 1 tbsp dried / 300 ml' },
    tags: ['afternoon', 'evening', 'refreshing', 'caffeine-free'],
    quizScore: { morning: 1, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 1, caffeine: -2, noCaffeine: 2, warm: 2, cold: 2 }
  },
  {
    id: 'rosehip', name: 'Rosehip Tea', emoji: '🍒', origin: 'Europe / Middle East', color: '#d84040',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['tart', 'fruity', 'slightly floral', 'tangy'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Brewed from the fruit of the rose plant after the petals fall, rosehip tea comes from a fruit that is a rich source of vitamin C. Pleasantly tart and fruity with a hibiscus-like character.',
    benefits: ['Rich natural source of vitamin C in the fresh fruit', 'Tart, fruity flavour', 'Often blended with hibiscus', 'Contains carotenoids'],
    brew: { temp: '95–100 °C', time: '10 min', amount: '1 tbsp dried rosehips / 250 ml' },
    tags: ['morning', 'immunity', 'vitamin C', 'caffeine-free'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 0, relax: 1, energy: 1, caffeine: -2, noCaffeine: 2, warm: 2, cold: 2 }
  },
  {
    id: 'elderflower', name: 'Elderflower Tea', emoji: '🤍', origin: 'Europe', color: '#f0e8c0',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['floral', 'honey-like', 'light', 'aromatic'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Made from the delicate white blossoms of the elder tree, the same flowers used in elderflower cordials. The tea is light, floral, honey-like, and beautifully aromatic.',
    benefits: ['Light, floral, honey-like flavour', 'Same flowers as elderflower cordial', 'Pleasant aroma', 'Traditional European herbal tea'],
    brew: { temp: '85–90 °C', time: '5–7 min', amount: '1 tbsp dried flowers / 250 ml' },
    tags: ['afternoon', 'evening', 'floral', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 0, caffeine: -2, noCaffeine: 2, warm: 2, cold: 1 }
  },
  {
    id: 'raspberry-leaf', name: 'Raspberry Leaf Tea', emoji: '🍃', origin: 'Europe / North America', color: '#8c4040',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['earthy', 'slightly tannic', 'herbal', 'mild fruit hints'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Made from the actual leaves of the raspberry plant, not to be confused with raspberry-flavoured tea. Earthy and slightly tannic, it is a traditional herbal tea.',
    benefits: ['Traditional herbal tea', 'Earthy, slightly tannic flavour', 'Often blended with mint', 'Made from the leaves, not the fruit'],
    brew: { temp: '95 °C', time: '5–10 min', amount: '1 tbsp dried leaves / 250 ml' },
    tags: ['afternoon', 'evening', 'womens health', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 0, caffeine: -2, noCaffeine: 2, warm: 2, cold: 1 }
  },
  {
    id: 'licorice-root', name: 'Licorice Root Tea', emoji: '🖤', origin: 'Mediterranean / Central Asia', color: '#5a3820',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['intensely sweet', 'anise-like', 'earthy', 'warming'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'A naturally sweet root, so it needs no added sweetener, with an unmistakably bold anise flavour. Used in Ayurveda and Traditional Chinese Medicine. People with high blood pressure, and anyone who is pregnant, should avoid it.',
    benefits: ['Naturally sweet, no sugar needed', 'Bold, anise-like flavour', 'Long traditional use in Ayurveda and Traditional Chinese Medicine'],
    brew: { temp: '95 °C', time: '7–10 min', amount: '½ tsp dried root / 250 ml' },
    tags: ['afternoon', 'evening', 'digestive', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 0, caffeine: -2, noCaffeine: 2, warm: 2, cold: 0 }
  },
  {
    id: 'passionflower', name: 'Passionflower Tea', emoji: '🌸', origin: 'Americas (Passiflora incarnata)', color: '#9060a0',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['mild', 'earthy', 'slightly herbal', 'gentle'],
    bestTimes: ['evening', 'night'],
    desc: 'Brewed from the dried leaves and flowers of Passiflora incarnata, a traditional calming herb. Mild, earthy flavour that pairs well with honey and chamomile. Not for use during pregnancy.',
    benefits: ['Traditional calming herb', 'Mild, earthy flavour', 'Often paired with chamomile'],
    brew: { temp: '90 °C', time: '10 min', amount: '1–2 tsp / 250 ml' },
    tags: ['evening', 'sleep', 'anxiety', 'caffeine-free'],
    quizScore: { morning: -3, afternoon: -1, evening: 3, focus: -2, relax: 3, energy: -3, caffeine: -3, noCaffeine: 3, warm: 2, cold: 0 }
  }
];
