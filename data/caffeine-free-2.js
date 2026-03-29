'use strict';
// BATCH 8 — CAFFEINE-FREE (Teas 111–120)
const TEAS_FREE2 = [
  {
    id: 'tulsi', name: 'Holy Basil (Tulsi) Tea', emoji: '🌿', origin: 'India (Ayurvedic tradition)', color: '#60a850',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['spicy', 'clove-like', 'herbal', 'slightly peppery'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Revered in Ayurveda as "The Queen of Herbs," tulsi (holy basil) has been used in India for over 3,000 years. Three main varieties — Rama, Vana, and Kapoor — each have distinct flavours. All share powerful adaptogenic properties that help the body manage stress and restore balance.',
    benefits: ['Powerful adaptogen', 'Reduces cortisol and stress', 'Supports immune system', 'Anti-inflammatory and antimicrobial'],
    brew: { temp: '90–95 °C', time: '5–7 min', amount: '1 tbsp fresh or 1 tsp dried / 250 ml' },
    tags: ['morning', 'afternoon', 'adaptogen', 'caffeine-free'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 1, relax: 2, energy: 1, caffeine: -2, noCaffeine: 2, warm: 2, cold: 0 }
  },
  {
    id: 'nettle', name: 'Stinging Nettle Tea', emoji: '🌱', origin: 'Europe / North America / Asia', color: '#4a8830',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['earthy', 'grassy', 'spinach-like', 'savoury'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Made from the leaves of Urtica dioica — the plant famous for its sting, which disappears completely in hot water. Nettle tea is one of the most nutritionally dense herbal teas, rich in iron, calcium, magnesium, and vitamins A, C, and K. A true plant-based powerhouse.',
    benefits: ['Exceptionally rich in iron and calcium', 'Natural antihistamine for allergies', 'Supports kidney health', 'Rich in vitamins A, C, K'],
    brew: { temp: '95–100 °C', time: '7–10 min', amount: '1–2 tsp dried / 250 ml' },
    tags: ['morning', 'afternoon', 'iron-rich', 'caffeine-free'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 1, relax: 1, energy: 2, caffeine: -2, noCaffeine: 2, warm: 2, cold: 0 }
  },
  {
    id: 'fennel', name: 'Fennel Seed Tea', emoji: '🌾', origin: 'Mediterranean / Middle East', color: '#a8c840',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['anise-like', 'sweet', 'aromatic', 'fresh'],
    bestTimes: ['afternoon', 'after meals'],
    desc: 'Brewed from whole or lightly crushed fennel seeds. Fennel tea has been used across the Mediterranean for millennia as a digestive aid — the anethole compound relaxes intestinal muscles, easing gas, bloating, and cramping. Naturally sweet without any added sugar.',
    benefits: ['Powerful digestive aid', 'Relieves bloating and gas', 'Balances hormones naturally', 'Anti-inflammatory'],
    brew: { temp: '95–100 °C', time: '7–10 min', amount: '1 tsp crushed seeds / 250 ml' },
    tags: ['afternoon', 'after meals', 'digestion', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 0, caffeine: -2, noCaffeine: 2, warm: 2, cold: 0 }
  },
  {
    id: 'echinacea', name: 'Echinacea Tea', emoji: '🌸', origin: 'North America (Great Plains)', color: '#d070a8',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['earthy', 'slightly bitter', 'herbal', 'floral'],
    bestTimes: ['morning', 'when sick'],
    desc: 'Made from the flower, leaf, and root of the purple coneflower, one of the most researched herbal remedies in the world. Clinical trials show echinacea can reduce both the incidence and duration of common colds. Best used at the first sign of illness — a short-term immune surge tea.',
    benefits: ['Clinically reduces cold duration', 'Boosts white blood cell production', 'Anti-inflammatory', 'Antiviral properties'],
    brew: { temp: '95 °C', time: '10–15 min', amount: '1–2 tsp dried / 250 ml' },
    tags: ['morning', 'immunity', 'sick day', 'caffeine-free'],
    quizScore: { morning: 2, afternoon: 1, evening: 1, focus: 0, relax: 1, energy: 1, caffeine: -2, noCaffeine: 2, warm: 2, cold: 0 }
  },
  {
    id: 'moringa', name: 'Moringa Leaf Tea', emoji: '🌳', origin: 'India / Sub-Saharan Africa', color: '#50a040',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['grassy', 'earthy', 'slightly bitter', 'vegetal'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Called the "Miracle Tree" — moringa leaves contain 7x the Vitamin C of oranges, 4x the calcium of milk, 4x the Vitamin A of carrots, and 2x the protein of yoghurt. This superfood tea is one of the most nutritionally complete drinks available, particularly valued in developing countries as a malnutrition remedy.',
    benefits: ['Gram-for-gram one of the world\'s most nutritious plants', 'Rich in iron, calcium, and vitamins', 'Powerful antioxidants', 'Supports blood sugar regulation'],
    brew: { temp: '90 °C', time: '5 min', amount: '1 tsp dried leaves / 250 ml' },
    tags: ['morning', 'afternoon', 'superfood', 'caffeine-free'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 1, relax: 1, energy: 2, caffeine: -2, noCaffeine: 2, warm: 2, cold: 1 }
  },
  {
    id: 'chrysanthemum', name: 'Chrysanthemum Tea', emoji: '🌼', origin: 'China / East Asia', color: '#f0e040',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['floral', 'honey-sweet', 'delicate', 'aromatic'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Brewed from dried chrysanthemum flowers, this floral infusion has been central to Chinese medicine and culture for over 1,700 years. Naturally sweet and fragrant, it is traditionally drunk in summer to "cool the body" — and modern research confirms its anti-inflammatory and liver-protective properties.',
    benefits: ['Anti-inflammatory flavonoids', 'Supports liver health', 'Traditionally cools the body', 'Rich in beta-carotene and Vitamin C'],
    brew: { temp: '90 °C', time: '5 min', amount: '1 tbsp dried flowers / 300 ml' },
    tags: ['afternoon', 'evening', 'floral', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 0, caffeine: -2, noCaffeine: 2, warm: 1, cold: 2 }
  },
  {
    id: 'ashwagandha', name: 'Ashwagandha Root Tea', emoji: '🌙', origin: 'India (Ayurvedic tradition)', color: '#c09838',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['earthy', 'bitter', 'slightly nutty', 'woody'],
    bestTimes: ['evening', 'night'],
    desc: 'Ashwagandha ("smell of horse" in Sanskrit) is Ayurveda\'s most celebrated adaptogen. Clinical trials show it significantly reduces cortisol, improves sleep quality, reduces anxiety, and even increases testosterone and muscle recovery in athletes. Best combined with honey and warm milk — the traditional "Moon Milk."',
    benefits: ['Clinically reduces cortisol by up to 30%', 'Improves sleep quality and depth', 'Reduces anxiety and stress', 'Supports thyroid and adrenal function'],
    brew: { temp: '95–100 °C', time: '10–15 min', amount: '½–1 tsp root powder / 250 ml' },
    tags: ['evening', 'sleep', 'adaptogen', 'caffeine-free'],
    quizScore: { morning: -1, afternoon: 0, evening: 3, focus: 0, relax: 3, energy: -1, caffeine: -3, noCaffeine: 3, warm: 2, cold: 0 }
  },
  {
    id: 'lemon-balm', name: 'Lemon Balm Tea', emoji: '🍃', origin: 'Mediterranean / West Asia', color: '#c0d870',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['lemony', 'herbal', 'mild', 'slightly minty'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'A mint-family herb with a gentle lemon scent, lemon balm has been used since the Middle Ages for anxiety, sleep, and digestive complaints. Modern research confirms it raises GABA and inhibits the enzyme that breaks down serotonin — a gentle, natural mood stabiliser and sleep aid.',
    benefits: ['Naturally raises GABA levels', 'Reduces anxiety without sedation', 'Improves sleep quality', 'Soothes IBS and digestive discomfort'],
    brew: { temp: '90 °C', time: '5–8 min', amount: '1 tbsp fresh or 1 tsp dried / 250 ml' },
    tags: ['afternoon', 'evening', 'anxiety', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 3, focus: -1, relax: 3, energy: -1, caffeine: -3, noCaffeine: 3, warm: 2, cold: 1 }
  },
  {
    id: 'hawthorn', name: 'Hawthorn Berry Tea', emoji: '❤️', origin: 'Europe / North America / Asia', color: '#c04030',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['tart', 'fruity', 'slightly sweet', 'earthy'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Made from the dried berries, flowers, and leaves of hawthorn bushes, this traditional European heart tonic is among the most researched herbs for cardiovascular health. Clinical trials show it improves cardiac output, reduces blood pressure, and eases exercise-induced shortness of breath in heart patients.',
    benefits: ['Clinically supports cardiovascular health', 'Lowers blood pressure naturally', 'Improves circulation', 'Powerful antioxidant oligomeric proanthocyanidins'],
    brew: { temp: '95–100 °C', time: '10–15 min', amount: '1–2 tsp dried berries / 250 ml' },
    tags: ['afternoon', 'evening', 'heart health', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 0, caffeine: -2, noCaffeine: 2, warm: 2, cold: 1 }
  },
  {
    id: 'oat-straw', name: 'Oat Straw Tea', emoji: '🌾', origin: 'Europe / North America', color: '#d4b868',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['mild', 'grassy', 'slightly sweet', 'hay-like'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Brewed from the green stems and leaves of the oat plant (Avena sativa) harvested just before the grain ripens. Long used in European herbalism as a nervine tonic — calming the nervous system without sedation. Rich in silica (supports hair, skin, and nails) and a source of natural avenanthramides.',
    benefits: ['Nervine tonic — calms without sedating', 'Rich in silica for skin, hair, and nails', 'Supports nervous system recovery from burnout', 'High in magnesium and B vitamins'],
    brew: { temp: '95–100 °C', time: '10–15 min', amount: '1–2 tbsp dried herb / 300 ml' },
    tags: ['afternoon', 'evening', 'nervine', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 3, focus: 0, relax: 3, energy: 0, caffeine: -2, noCaffeine: 2, warm: 2, cold: 0 }
  }
];
