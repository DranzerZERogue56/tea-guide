'use strict';
// BATCH 8 — CAFFEINE-FREE (Teas 111–120)
const TEAS_FREE2 = [
  {
    id: 'tulsi', name: 'Holy Basil (Tulsi) Tea', emoji: '🌿', origin: 'India (Ayurvedic tradition)', color: '#60a850',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['spicy', 'clove-like', 'herbal', 'slightly peppery'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Tulsi (holy basil) is used in Ayurvedic and Siddha traditions. The main types are Rama, Krishna (Shyama) and Vana tulsi, each with its own flavour. Aromatic and herbal, and a popular herbal tea in India.',
    benefits: ['Traditional herb in Ayurveda', 'Aromatic, herbal flavour', 'Several varieties with different flavours', 'Contains plant compounds such as flavonoids and eugenol'],
    brew: { temp: '90–95 °C', time: '5–7 min', amount: '1 tbsp fresh or 1 tsp dried / 250 ml' },
    tags: ['morning', 'afternoon', 'adaptogen', 'caffeine-free'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 1, relax: 2, energy: 1, caffeine: -2, noCaffeine: 2, warm: 2, cold: 0 }
  },
  {
    id: 'nettle', name: 'Stinging Nettle Tea', emoji: '🌱', origin: 'Europe / North America / Asia', color: '#4a8830',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['earthy', 'grassy', 'spinach-like', 'savoury'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Made from the leaves of Urtica dioica, the plant famous for its sting, which is gone once the leaves are dried and steeped. The leaves contain vitamins C, K and E and carotenoids, and nettle has long been used as an herbal tea.',
    benefits: ['Contains vitamins C, K and E', 'Source of carotenoids', 'Long tradition as an herbal tea', 'Green, earthy flavour'],
    brew: { temp: '95–100 °C', time: '7–10 min', amount: '1–2 tsp dried / 250 ml' },
    tags: ['morning', 'afternoon', 'iron-rich', 'caffeine-free'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 1, relax: 1, energy: 2, caffeine: -2, noCaffeine: 2, warm: 2, cold: 0 }
  },
  {
    id: 'fennel', name: 'Fennel Seed Tea', emoji: '🌾', origin: 'Mediterranean / Middle East', color: '#a8c840',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['anise-like', 'sweet', 'aromatic', 'fresh'],
    bestTimes: ['afternoon', 'after meals'],
    desc: 'Brewed from whole or lightly crushed fennel seeds. Fennel tea is a traditional after-meal drink around the Mediterranean, naturally sweet with a light aniseed flavour.',
    benefits: ['Sweet, aniseed-like flavour', 'Traditional after-meal tea', 'Naturally sweet without added sugar', 'Made from whole or lightly crushed seeds'],
    brew: { temp: '95–100 °C', time: '7–10 min', amount: '1 tsp crushed seeds / 250 ml' },
    tags: ['afternoon', 'after meals', 'digestion', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 0, caffeine: -2, noCaffeine: 2, warm: 2, cold: 0 }
  },
  {
    id: 'echinacea', name: 'Echinacea Tea', emoji: '🌸', origin: 'North America (Great Plains)', color: '#d070a8',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['earthy', 'slightly bitter', 'herbal', 'floral'],
    bestTimes: ['morning', 'when sick'],
    desc: 'Made from the flower, leaf, and root of the purple coneflower, a popular herbal remedy in North America. Research suggests echinacea may slightly reduce the chance of catching a cold, but it is unclear whether it shortens one. Usually used for short periods.',
    benefits: ['Popular traditional herb in North America', 'May slightly lower the chance of catching a cold', 'Usually used for short periods'],
    brew: { temp: '95 °C', time: '10–15 min', amount: '1–2 tsp dried / 250 ml' },
    tags: ['morning', 'immunity', 'sick day', 'caffeine-free'],
    quizScore: { morning: 2, afternoon: 1, evening: 1, focus: 0, relax: 1, energy: 1, caffeine: -2, noCaffeine: 2, warm: 2, cold: 0 }
  },
  {
    id: 'moringa', name: 'Moringa Leaf Tea', emoji: '🌳', origin: 'India / Sub-Saharan Africa', color: '#50a040',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['grassy', 'earthy', 'slightly bitter', 'vegetal'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Moringa leaves are a source of B vitamins, vitamin C, provitamin A (beta-carotene), vitamin K, manganese and protein. The tree is grown widely in India and Africa, and the leaves are used as a food, including to help fight malnutrition.',
    benefits: ['Leaves contain B vitamins, vitamin C and vitamin K', 'Source of beta-carotene and protein', 'Used as a nutritious food in many regions', 'Mild, grassy flavour'],
    brew: { temp: '90 °C', time: '5 min', amount: '1 tsp dried leaves / 250 ml' },
    tags: ['morning', 'afternoon', 'superfood', 'caffeine-free'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 1, relax: 1, energy: 2, caffeine: -2, noCaffeine: 2, warm: 2, cold: 1 }
  },
  {
    id: 'chrysanthemum', name: 'Chrysanthemum Tea', emoji: '🌼', origin: 'China / East Asia', color: '#f0e040',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['floral', 'honey-sweet', 'delicate', 'aromatic'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Brewed from dried chrysanthemum flowers, this floral infusion is a long-standing part of Chinese culture. Naturally sweet and fragrant, it is traditionally drunk in summer to "cool the body".',
    benefits: ['Traditionally drunk to cool the body in summer', 'Naturally sweet, floral flavour', 'Fragrant, pretty infusion'],
    brew: { temp: '90 °C', time: '5 min', amount: '1 tbsp dried flowers / 300 ml' },
    tags: ['afternoon', 'evening', 'floral', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 0, caffeine: -2, noCaffeine: 2, warm: 1, cold: 2 }
  },
  {
    id: 'ashwagandha', name: 'Ashwagandha Root Tea', emoji: '🌙', origin: 'India (Ayurvedic tradition)', color: '#c09838',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['earthy', 'bitter', 'slightly nutty', 'woody'],
    bestTimes: ['evening', 'night'],
    desc: 'Ashwagandha ("smell of horse" in Sanskrit) is a root used in Ayurveda. Some preparations may help with stress and sleep, but the evidence on anxiety is unclear. It is not for use in pregnancy, and anyone with thyroid or liver problems should check with a health professional first. Often taken with honey and warm milk.',
    benefits: ['Traditional Ayurvedic root', 'Some studies suggest it may ease stress and poor sleep', 'Earthy flavour'],
    brew: { temp: '95–100 °C', time: '10–15 min', amount: '½–1 tsp root powder / 250 ml' },
    tags: ['evening', 'sleep', 'adaptogen', 'caffeine-free'],
    quizScore: { morning: -1, afternoon: 0, evening: 3, focus: 0, relax: 3, energy: -1, caffeine: -3, noCaffeine: 3, warm: 2, cold: 0 }
  },
  {
    id: 'lemon-balm', name: 'Lemon Balm Tea', emoji: '🍃', origin: 'Europe / Mediterranean / Central Asia', color: '#c0d870',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['lemony', 'herbal', 'mild', 'slightly minty'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'A mint-family herb with a gentle lemon scent. Lemon balm has been used for more than 2,000 years, was recorded by medieval herbalists, and was served as "balm water" by the 18th century.',
    benefits: ['Gentle lemony, minty flavour', 'Long history in European herbalism', 'Good hot or iced'],
    brew: { temp: '90 °C', time: '5–8 min', amount: '1 tbsp fresh or 1 tsp dried / 250 ml' },
    tags: ['afternoon', 'evening', 'anxiety', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 3, focus: -1, relax: 3, energy: -1, caffeine: -3, noCaffeine: 3, warm: 2, cold: 1 }
  },
  {
    id: 'hawthorn', name: 'Hawthorn Berry Tea', emoji: '❤️', origin: 'Europe / North America / Asia', color: '#c04030',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['tart', 'fruity', 'slightly sweet', 'earthy'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Made from the dried berries, flowers, and leaves of hawthorn bushes, a traditional European herb. Research on its effects on the heart is mixed, and it can interact with medicines, so ask a health professional first if you take any.',
    benefits: ['Long use in European herbal tradition', 'Berries, flowers and leaves are all used', 'Ask a health professional first if you take medicines'],
    brew: { temp: '95–100 °C', time: '10–15 min', amount: '1–2 tsp dried berries / 250 ml' },
    tags: ['afternoon', 'evening', 'heart health', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 0, caffeine: -2, noCaffeine: 2, warm: 2, cold: 1 }
  },
  {
    id: 'oat-straw', name: 'Oat Straw Tea', emoji: '🌾', origin: 'Europe / North America', color: '#d4b868',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['mild', 'grassy', 'slightly sweet', 'hay-like'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Brewed from the green stems and leaves of the oat plant (Avena sativa), harvested just before the grain ripens. Long used in European herbalism as a gentle tonic herb.',
    benefits: ['Traditional European herb', 'Mild, grassy flavour', 'Made from the green stems and leaves of the oat plant'],
    brew: { temp: '95–100 °C', time: '10–15 min', amount: '1–2 tbsp dried herb / 300 ml' },
    tags: ['afternoon', 'evening', 'nervine', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 3, focus: 0, relax: 3, energy: 0, caffeine: -2, noCaffeine: 2, warm: 2, cold: 0 }
  }
];
