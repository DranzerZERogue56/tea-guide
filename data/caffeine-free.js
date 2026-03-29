'use strict';
// BATCH 4 — CAFFEINE-FREE (20 teas)
const TEAS_FREE = [
  {
    id: 'chamomile', name: 'Chamomile', emoji: '🌼', origin: 'Europe / Mediterranean', color: '#e8c84a',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['floral', 'apple-like', 'honey', 'slightly sweet'],
    bestTimes: ['evening', 'night'],
    desc: 'An herbal infusion of dried chamomile flowers. Its gentle apigenin content binds to sleep receptors in the brain, making it the world\'s favourite bedtime ritual.',
    benefits: ['Promotes sleep and relaxation', 'Reduces anxiety', 'Soothes digestion', 'Anti-inflammatory'],
    brew: { temp: '90–95 °C', time: '5–7 min', amount: '2 tsp / 240 ml' },
    tags: ['evening', 'sleep', 'relaxation', 'caffeine-free'],
    quizScore: { morning: -2, afternoon: 0, evening: 3, focus: -1, relax: 3, energy: -2, caffeine: -3, noCaffeine: 3, warm: 2, cold: 0 }
  },
  {
    id: 'peppermint', name: 'Peppermint', emoji: '🌱', origin: 'Europe / North America', color: '#2fa86f',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['cooling', 'minty', 'refreshing', 'crisp'],
    bestTimes: ['afternoon', 'after meals'],
    desc: 'A brisk, cooling herbal infusion. Peppermint\'s menthol content refreshes the mind, soothes an upset stomach, and creates an invigorating sensation without any caffeine.',
    benefits: ['Relieves bloating & indigestion', 'Natural breath freshener', 'Relieves headaches', 'Cooling & refreshing'],
    brew: { temp: '90–95 °C', time: '5–7 min', amount: '1 tbsp / 240 ml' },
    tags: ['afternoon', 'after meals', 'digestion', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 1, focus: 1, relax: 2, energy: 1, caffeine: -2, noCaffeine: 2, warm: 1, cold: 2 }
  },
  {
    id: 'spearmint', name: 'Spearmint', emoji: '🫧', origin: 'Mediterranean / Middle East', color: '#3cb87a',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['mild mint', 'sweet', 'herbal', 'gentle'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Gentler and sweeter than peppermint, spearmint contains far less menthol. Popular in Moroccan tea culture and used as a digestive and hormonal balancer. Perfect for those who find peppermint too intense.',
    benefits: ['Supports hormonal balance', 'Soothes digestion', 'Anti-androgenic properties', 'Refreshing without the sting'],
    brew: { temp: '90–95 °C', time: '5 min', amount: '1 tbsp / 240 ml' },
    tags: ['afternoon', 'evening', 'digestion', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 0, caffeine: -2, noCaffeine: 2, warm: 1, cold: 2 }
  },
  {
    id: 'ginger', name: 'Ginger Tea', emoji: '🫚', origin: 'South / Southeast Asia', color: '#d4842b',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['spicy', 'warming', 'zesty', 'pungent'],
    bestTimes: ['morning', 'afternoon', 'when sick'],
    desc: 'Made from fresh or dried ginger root, this warming tea delivers a fiery kick. Prized in Ayurveda and Traditional Chinese Medicine, ginger tea is a natural remedy powerhouse.',
    benefits: ['Reduces nausea', 'Anti-inflammatory', 'Boosts immunity', 'Improves circulation & warmth'],
    brew: { temp: '100 °C', time: '10–15 min', amount: '1–2 cm fresh root / 250 ml' },
    tags: ['morning', 'immunity', 'warming', 'caffeine-free'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 1, relax: 1, energy: 2, caffeine: -2, noCaffeine: 2, warm: 3, cold: -1 }
  },
  {
    id: 'rooibos', name: 'Rooibos', emoji: '🌅', origin: 'South Africa', color: '#c04b30',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['sweet', 'nutty', 'earthy', 'vanilla-like'],
    bestTimes: ['evening', 'afternoon'],
    desc: 'A caffeine-free herbal tea from South Africa\'s Cederberg region. Rooibos has a naturally sweet, nutty flavour with no bitterness — making it perfect for evening drinking or as a milk tea alternative.',
    benefits: ['Completely caffeine-free', 'Rich in antioxidants (aspalathin)', 'Supports bone health', 'Safe for children & pregnancy'],
    brew: { temp: '95–100 °C', time: '5–7 min', amount: '1 tsp / 200 ml' },
    tags: ['evening', 'caffeine-free', 'family-friendly', 'sweet'],
    quizScore: { morning: 0, afternoon: 2, evening: 3, focus: 0, relax: 3, energy: -1, caffeine: -3, noCaffeine: 3, warm: 2, cold: 1 }
  },
  {
    id: 'lavender', name: 'Lavender Tea', emoji: '💜', origin: 'Mediterranean', color: '#9b7fd4',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['floral', 'sweet', 'herbaceous', 'light'],
    bestTimes: ['evening', 'night'],
    desc: 'Steeped from dried lavender buds, this soothing herbal tea has a calming floral fragrance. Used for centuries as a relaxant, lavender tea is the perfect wind-down ritual before bed.',
    benefits: ['Reduces anxiety and stress', 'Promotes restful sleep', 'Anti-inflammatory', 'Uplifts mood'],
    brew: { temp: '90 °C', time: '5–7 min', amount: '1 tsp / 240 ml' },
    tags: ['evening', 'sleep', 'anxiety', 'caffeine-free'],
    quizScore: { morning: -2, afternoon: 0, evening: 3, focus: -1, relax: 3, energy: -2, caffeine: -3, noCaffeine: 3, warm: 2, cold: 0 }
  },
  {
    id: 'valerian', name: 'Valerian Root', emoji: '🌙', origin: 'Europe / Asia', color: '#5e4a8c',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['earthy', 'woody', 'slightly bitter', 'musky'],
    bestTimes: ['evening', 'night'],
    desc: 'Known as "nature\'s Valium," valerian root contains valerenic acid which increases GABA levels in the brain. Best blended with honey — its sleep effects are powerful and well-researched.',
    benefits: ['Clinically supports sleep onset', 'Reduces anxiety', 'Relieves muscle tension', 'Non-habit forming'],
    brew: { temp: '90 °C', time: '10–15 min', amount: '1 tsp dried root / 250 ml' },
    tags: ['evening', 'sleep', 'anxiety', 'caffeine-free'],
    quizScore: { morning: -3, afternoon: -1, evening: 3, focus: -2, relax: 3, energy: -3, caffeine: -3, noCaffeine: 3, warm: 2, cold: 0 }
  },
  {
    id: 'rose', name: 'Rose Tea', emoji: '🌹', origin: 'Middle East / China', color: '#d4607a',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['floral', 'sweet', 'delicate', 'romantic'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Brewed from dried rose petals or buds, this elegant herbal infusion is rich in vitamin C with a deeply floral, sweet character. A staple in Persian and Chinese wellness traditions.',
    benefits: ['High in Vitamin C', 'Soothes sore throats', 'Supports skin health', 'Reduces menstrual cramps'],
    brew: { temp: '90–95 °C', time: '5–7 min', amount: '1 tbsp petals / 250 ml' },
    tags: ['afternoon', 'evening', 'floral', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 0, caffeine: -2, noCaffeine: 2, warm: 2, cold: 1 }
  },
  {
    id: 'butterfly', name: 'Butterfly Pea Flower', emoji: '🔵', origin: 'Southeast Asia', color: '#4a5aaf',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['mild', 'earthy', 'slightly woody', 'neutral'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Famous for its dramatic colour change — add lemon juice and it shifts from deep indigo to vibrant purple-pink. Rich in anthocyanins with a showstopper visual effect for entertaining.',
    benefits: ['Rich in anthocyanins', 'Supports cognitive function', 'Anti-inflammatory', 'Stunning colour-changing effect'],
    brew: { temp: '90–100 °C', time: '5–7 min', amount: '1 tbsp / 250 ml' },
    tags: ['afternoon', 'iced', 'unique', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 1, focus: 0, relax: 2, energy: 0, caffeine: -2, noCaffeine: 2, warm: 1, cold: 3 }
  },
  {
    id: 'turmeric', name: 'Turmeric Tea', emoji: '🟡', origin: 'India / South Asia', color: '#e8a020',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['earthy', 'peppery', 'slightly bitter', 'warming'],
    bestTimes: ['morning', 'evening'],
    desc: 'Made from turmeric root or powder, this anti-inflammatory powerhouse is the basis of golden milk. Curcumin — turmeric\'s active compound — is one of the most researched natural anti-inflammatories.',
    benefits: ['Powerful anti-inflammatory (curcumin)', 'Supports joint health', 'Boosts immunity', 'Aids liver function'],
    brew: { temp: '95–100 °C', time: '10 min', amount: '1 tsp / 250 ml + pinch black pepper' },
    tags: ['morning', 'immunity', 'anti-inflammatory', 'caffeine-free'],
    quizScore: { morning: 2, afternoon: 1, evening: 2, focus: 1, relax: 1, energy: 1, caffeine: -2, noCaffeine: 2, warm: 3, cold: 0 }
  },
  {
    id: 'dandelion', name: 'Dandelion Root', emoji: '🌻', origin: 'Europe / North America', color: '#c8901a',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['earthy', 'slightly bitter', 'nutty', 'roasted'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Roasted dandelion root is a popular coffee substitute with a rich, dark, slightly bitter flavour. A remarkable liver tonic and prebiotic, used in herbal medicine for centuries.',
    benefits: ['Liver detox support', 'Prebiotic for gut health', 'Diuretic', 'Coffee alternative'],
    brew: { temp: '95–100 °C', time: '10 min', amount: '1 tbsp / 250 ml' },
    tags: ['morning', 'liver health', 'coffee alternative', 'caffeine-free'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 1, relax: 1, energy: 1, caffeine: -2, noCaffeine: 2, warm: 2, cold: 0 }
  },
  {
    id: 'hibiscus', name: 'Hibiscus', emoji: '🌺', origin: 'West Africa / Mexico', color: '#c4304a',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['tart', 'cranberry-like', 'tangy', 'floral'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Brewed from dried hibiscus flowers, this vibrant ruby-red tea is refreshingly tart. Packed with vitamin C and anthocyanins that support heart health, brilliant hot or iced.',
    benefits: ['Lowers blood pressure', 'Rich in Vitamin C', 'High in antioxidants', 'Refreshing hot or cold'],
    brew: { temp: '95–100 °C', time: '5–8 min', amount: '1–2 tsp / 240 ml' },
    tags: ['afternoon', 'iced', 'caffeine-free', 'heart health'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 1, caffeine: -2, noCaffeine: 2, warm: 1, cold: 3 }
  },
  {
    id: 'lemon-ginger', name: 'Lemon & Ginger', emoji: '🍋', origin: 'Global blend', color: '#e8c43a',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['zesty', 'warming', 'citrus', 'spicy'],
    bestTimes: ['morning', 'when sick'],
    desc: 'A zingy blend of lemon and ginger — the ultimate immune booster. Vitamin C from lemon combines with ginger\'s anti-inflammatory compounds for a powerfully healing cup.',
    benefits: ['Immune system boost', 'Clears congestion', 'Soothes sore throats', 'Improves digestion'],
    brew: { temp: '95–100 °C', time: '5–10 min', amount: '1 lemon slice + 1 cm ginger / 250 ml' },
    tags: ['morning', 'immunity', 'sick day', 'caffeine-free'],
    quizScore: { morning: 2, afternoon: 1, evening: 1, focus: 1, relax: 1, energy: 2, caffeine: -2, noCaffeine: 2, warm: 3, cold: -1 }
  },
  {
    id: 'barley-tea', name: 'Barley Tea (Mugicha)', emoji: '🌾', origin: 'Japan / Korea / China', color: '#c8a040',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['roasted', 'nutty', 'slightly bitter', 'grain-like'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'A roasted grain tea beloved in Japan, Korea, and China for thousands of years. Completely caffeine-free with a toasty, nutty flavour reminiscent of light coffee. Served ice-cold in summer across East Asia.',
    benefits: ['Completely caffeine-free', 'Aids digestion', 'Cooling in summer (traditional belief)', 'May support blood circulation'],
    brew: { temp: '100 °C', time: '5 min (then chill)', amount: '1 tbsp roasted barley / 500 ml' },
    tags: ['afternoon', 'evening', 'iced', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 0, caffeine: -2, noCaffeine: 2, warm: 2, cold: 3 }
  },
  {
    id: 'lemongrass', name: 'Lemongrass Tea', emoji: '🌿', origin: 'Southeast Asia / West Africa', color: '#c8d840',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['lemony', 'fresh', 'herbal', 'subtly sweet'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Bright, citrusy herbal tea from fresh or dried lemongrass stalks. Lemony without any acidity, refreshing and uplifting. Popular across Southeast Asia and West Africa as a digestive and mood booster.',
    benefits: ['Aids digestion', 'Reduces anxiety', 'Anti-inflammatory', 'Freshens breath'],
    brew: { temp: '95 °C', time: '5–7 min', amount: '2 stalks or 1 tbsp dried / 300 ml' },
    tags: ['afternoon', 'evening', 'refreshing', 'caffeine-free'],
    quizScore: { morning: 1, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 1, caffeine: -2, noCaffeine: 2, warm: 2, cold: 2 }
  },
  {
    id: 'rosehip', name: 'Rosehip Tea', emoji: '🍒', origin: 'Europe / Middle East', color: '#d84040',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['tart', 'fruity', 'slightly floral', 'tangy'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Brewed from the fruit of the rose plant after the petals fall, rosehip tea contains more Vitamin C than oranges. Pleasantly tart and fruity with a hibiscus-like character — a powerhouse for immunity.',
    benefits: ['20x more Vitamin C than oranges', 'High in antioxidants', 'Supports immune system', 'Aids iron absorption'],
    brew: { temp: '95–100 °C', time: '10 min', amount: '1 tbsp dried rosehips / 250 ml' },
    tags: ['morning', 'immunity', 'vitamin C', 'caffeine-free'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 0, relax: 1, energy: 1, caffeine: -2, noCaffeine: 2, warm: 2, cold: 2 }
  },
  {
    id: 'elderflower', name: 'Elderflower Tea', emoji: '🤍', origin: 'Europe', color: '#f0e8c0',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['floral', 'honey-like', 'light', 'aromatic'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Made from the delicate white blossoms of the elder tree — the same flowers used in elderflower cordials. The tea version is light, floral, honey-like, and beautifully aromatic with a subtle musky sweetness.',
    benefits: ['Supports respiratory health', 'Anti-inflammatory', 'Natural antihistamine', 'Mood-lifting aroma'],
    brew: { temp: '85–90 °C', time: '5–7 min', amount: '1 tbsp dried flowers / 250 ml' },
    tags: ['afternoon', 'evening', 'floral', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 0, caffeine: -2, noCaffeine: 2, warm: 2, cold: 1 }
  },
  {
    id: 'raspberry-leaf', name: 'Raspberry Leaf Tea', emoji: '🍃', origin: 'Europe / North America', color: '#8c4040',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['earthy', 'slightly tannic', 'herbal', 'mild fruit hints'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Made from the actual leaves of the raspberry plant — not to be confused with raspberry-flavoured tea. Earthy and slightly tannic, it\'s traditionally prized for women\'s health, particularly during pregnancy.',
    benefits: ['Traditionally supports women\'s health', 'Rich in iron and magnesium', 'Eases menstrual cramps', 'Tones uterine muscles'],
    brew: { temp: '95 °C', time: '5–10 min', amount: '1 tbsp dried leaves / 250 ml' },
    tags: ['afternoon', 'evening', 'womens health', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 0, caffeine: -2, noCaffeine: 2, warm: 2, cold: 1 }
  },
  {
    id: 'licorice-root', name: 'Licorice Root Tea', emoji: '🖤', origin: 'Mediterranean / Central Asia', color: '#5a3820',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['intensely sweet', 'anise-like', 'earthy', 'warming'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Naturally 50x sweeter than sugar, licorice root requires no added sweetener. Used in Ayurveda and TCM for thousands of years for digestive and respiratory support, with an unmistakably bold anise flavour.',
    benefits: ['Natural sweetness — no sugar needed', 'Soothes digestive tract', 'Supports adrenal glands', 'Soothes sore throats'],
    brew: { temp: '95 °C', time: '7–10 min', amount: '½ tsp dried root / 250 ml' },
    tags: ['afternoon', 'evening', 'digestive', 'caffeine-free'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 0, caffeine: -2, noCaffeine: 2, warm: 2, cold: 0 }
  },
  {
    id: 'passionflower', name: 'Passionflower Tea', emoji: '🌸', origin: 'Americas (Passiflora incarnata)', color: '#9060a0',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['mild', 'earthy', 'slightly herbal', 'gentle'],
    bestTimes: ['evening', 'night'],
    desc: 'Brewed from the dried leaves and flowers of Passiflora incarnata. A potent natural anxiolytic and sleep aid backed by clinical studies. Mild, earthy flavour that pairs beautifully with honey and chamomile.',
    benefits: ['Clinically reduces anxiety', 'Improves sleep quality', 'Reduces mental chatter at bedtime', 'Non-addictive'],
    brew: { temp: '90 °C', time: '10 min', amount: '1–2 tsp / 250 ml' },
    tags: ['evening', 'sleep', 'anxiety', 'caffeine-free'],
    quizScore: { morning: -3, afternoon: -1, evening: 3, focus: -2, relax: 3, energy: -3, caffeine: -3, noCaffeine: 3, warm: 2, cold: 0 }
  }
];
