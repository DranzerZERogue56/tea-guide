'use strict';
// BATCH 1 — HIGH CAFFEINE (20 teas)
const TEAS_HIGH = [
  {
    id: 'matcha', name: 'Matcha', emoji: '🍵', origin: 'Japan', color: '#3a7d44',
    caffeine: 'high', caffeineLabel: 'High (70 mg/cup)',
    flavor: ['earthy', 'umami', 'vegetal', 'slightly bitter'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A finely ground powder of specially shade-grown green tea leaves. Because the whole leaf is whisked into the water, you drink all of it. Matcha has caffeine alongside L-theanine, and many people find it a calm, steady kind of energy.',
    benefits: ['Whole leaf is drunk, not just infused', 'Contains EGCG, a tea antioxidant', 'Contains L-theanine alongside caffeine', 'Central to the Japanese tea ceremony'],
    brew: { temp: '75–80 °C', time: '30 sec whisk', amount: '1–2 g / 60 ml' },
    tags: ['morning', 'focus', 'energy', 'antioxidant'],
    quizScore: { morning: 3, afternoon: 2, evening: -2, focus: 3, relax: -1, energy: 3, caffeine: 3, noCaffeine: -3, warm: 2, cold: 1 }
  },
  {
    id: 'gyokuro', name: 'Gyokuro', emoji: '🌑', origin: 'Japan (Yame, Uji)', color: '#2e6e3a',
    caffeine: 'high', caffeineLabel: 'High (35–70 mg/cup)',
    flavor: ['intense umami', 'sweet', 'seaweed', 'rich'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'One of Japan\'s most prized green teas, shade-grown for about 3 weeks before harvest. Shading raises L-theanine and caffeine, producing an intensely sweet, umami-rich cup unlike any other.',
    benefits: ['High in L-theanine', 'Sweet, savoury umami flavour', 'Rich in antioxidants', 'Amino-acid rich'],
    brew: { temp: '50–60 °C', time: '2–3 min', amount: '3–4 g / 60 ml' },
    tags: ['morning', 'focus', 'premium', 'japanese'],
    quizScore: { morning: 3, afternoon: 2, evening: -1, focus: 3, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 0 }
  },
  {
    id: 'blacktea', name: 'Black Tea', emoji: '🫖', origin: 'India / Sri Lanka / China', color: '#7c4a1e',
    caffeine: 'high', caffeineLabel: 'High (40–70 mg/cup)',
    flavor: ['bold', 'malty', 'robust', 'slightly astringent'],
    bestTimes: ['morning'],
    desc: 'Fully oxidised tea leaves with a rich, bold flavour. Black tea is the classic morning tea, robust enough to cut through milk and strong enough to start any day.',
    benefits: ['Good caffeine kick', 'Contains polyphenols', 'Holds up well to milk', 'Classic everyday tea'],
    brew: { temp: '95–100 °C', time: '3–5 min', amount: '2–3 g / 250 ml' },
    tags: ['morning', 'energy', 'bold', 'classic'],
    quizScore: { morning: 3, afternoon: 1, evening: -3, focus: 2, relax: -1, energy: 3, caffeine: 3, noCaffeine: -3, warm: 2, cold: 1 }
  },
  {
    id: 'assam', name: 'Assam', emoji: '🏔️', origin: 'India (Assam)', color: '#8b3a1e',
    caffeine: 'high', caffeineLabel: 'High (50–90 mg/cup)',
    flavor: ['malty', 'bold', 'brisk', 'rich'],
    bestTimes: ['morning'],
    desc: 'Grown in the lush Brahmaputra valley, Assam produces a deeply malty, brisk black tea that forms the backbone of most breakfast blends. Pairs beautifully with milk.',
    benefits: ['Strong, malty flavour', 'Contains theaflavins', 'Excellent with milk', 'Good morning tea'],
    brew: { temp: '95–100 °C', time: '3–5 min', amount: '2–3 g / 250 ml' },
    tags: ['morning', 'milk tea', 'bold', 'breakfast'],
    quizScore: { morning: 3, afternoon: 1, evening: -3, focus: 2, relax: -1, energy: 3, caffeine: 3, noCaffeine: -3, warm: 2, cold: 0 }
  },
  {
    id: 'ceylon', name: 'Ceylon', emoji: '🌴', origin: 'Sri Lanka', color: '#c05a30',
    caffeine: 'high', caffeineLabel: 'High (40–70 mg/cup)',
    flavor: ['bright', 'citrusy', 'crisp', 'medium-bodied'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Grown at varying altitudes across Sri Lanka, this tea is prized for its bright, golden liquor and citrusy, crisp flavour. A versatile black tea that works beautifully plain or with lemon.',
    benefits: ['Contains polyphenols', 'Bright, crisp flavour', 'Works plain or with lemon', 'Clean, bright energy'],
    brew: { temp: '95–100 °C', time: '3–4 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'afternoon', 'citrusy', 'classic'],
    quizScore: { morning: 3, afternoon: 2, evening: -2, focus: 2, relax: 0, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 1 }
  },
  {
    id: 'lapsang', name: 'Lapsang Souchong', emoji: '🔥', origin: 'China (Fujian, Wuyi Mountains)', color: '#5a2e12',
    caffeine: 'high', caffeineLabel: 'High (40–60 mg/cup)',
    flavor: ['smoky', 'pine', 'bold', 'woody'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A smoked black tea from the Wuyi Mountains in Fujian, dried over pinewood fires. Lapsang Souchong has an unmistakable campfire smokiness, and its fans are fiercely devoted.',
    benefits: ['Distinctive smoky flavour', 'Good caffeine kick', 'Pairs well with savoury foods', 'Pinewood-smoked'],
    brew: { temp: '95–100 °C', time: '3–4 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'smoky', 'bold', 'unique'],
    quizScore: { morning: 2, afternoon: 1, evening: 0, focus: 1, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 3, cold: -1 }
  },
  {
    id: 'yerbamate', name: 'Yerba Mate', emoji: '⚡', origin: 'South America (Paraguay, Argentina, Uruguay, Brazil)', color: '#4a8c3f',
    caffeine: 'high', caffeineLabel: 'High (30–85 mg/cup)',
    flavor: ['bold', 'grassy', 'smoky', 'slightly bitter'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A South American drink brewed from Ilex paraguariensis, a holly plant, so it is not a true tea. Mate contains caffeine and is a traditional social drink across the region.',
    benefits: ['Contains caffeine, similar in strength to tea', 'Traditional social drink in South America', 'Not from the tea plant', 'Earthy, herbal flavour'],
    brew: { temp: '70–80 °C', time: '3–5 min', amount: '1 tbsp / 240 ml' },
    tags: ['morning', 'energy', 'focus', 'workout'],
    quizScore: { morning: 3, afternoon: 2, evening: -3, focus: 3, relax: -2, energy: 3, caffeine: 3, noCaffeine: -3, warm: 2, cold: 1 }
  },
  {
    id: 'english-breakfast', name: 'English Breakfast', emoji: '🍳', origin: 'Blend (Assam / Ceylon / Kenya)', color: '#6b2e10',
    caffeine: 'high', caffeineLabel: 'High (50–90 mg/cup)',
    flavor: ['bold', 'malty', 'full-bodied', 'brisk'],
    bestTimes: ['morning'],
    desc: 'The cornerstone of British morning culture — a robust blend of Assam, Ceylon, and Kenyan teas designed to wake you up and pair perfectly with milk and toast. Reliable, bold, and satisfying.',
    benefits: ['High caffeine wake-up', 'Rich in polyphenols', 'Supports alertness', 'Excellent with dairy or plant milk'],
    brew: { temp: '95–100 °C', time: '3–5 min', amount: '2–3 g / 250 ml' },
    tags: ['morning', 'breakfast', 'milk tea', 'bold'],
    quizScore: { morning: 3, afternoon: 1, evening: -3, focus: 2, relax: -1, energy: 3, caffeine: 3, noCaffeine: -3, warm: 2, cold: 0 }
  },
  {
    id: 'irish-breakfast', name: 'Irish Breakfast', emoji: '🍀', origin: 'Blend (Assam-heavy)', color: '#4a1a08',
    caffeine: 'high', caffeineLabel: 'High (40–70 mg/cup)',
    flavor: ['very bold', 'malty', 'robust', 'strong'],
    bestTimes: ['morning'],
    desc: 'Irish Breakfast is usually mostly Assam, which gives a strong, malty cup. Made for people who like a robust tea, and traditionally drunk with milk.',
    benefits: ['Strong, malty cup', 'Contains theaflavins', 'Deeply satisfying with milk', 'Good morning tea'],
    brew: { temp: '100 °C', time: '4–5 min', amount: '3 g / 250 ml' },
    tags: ['morning', 'breakfast', 'milk tea', 'strong'],
    quizScore: { morning: 3, afternoon: 1, evening: -3, focus: 2, relax: -2, energy: 3, caffeine: 3, noCaffeine: -3, warm: 2, cold: 0 }
  },
  {
    id: 'keemun', name: 'Keemun', emoji: '🌹', origin: 'China (Anhui, Qimen)', color: '#7a3020',
    caffeine: 'high', caffeineLabel: 'High (40–70 mg/cup)',
    flavor: ['floral', 'winey', 'slightly smoky', 'orchid'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'One of China\'s Ten Famous Teas, a black tea from Qimen County in Anhui province with a floral, slightly smoky aroma and a malty, cocoa-like taste. Still used in classic blends such as Earl Grey.',
    benefits: ['Contains polyphenols', 'Floral, malty flavour', 'Also made in gongfu styles', 'Complex flavour depth'],
    brew: { temp: '90–95 °C', time: '3–4 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'afternoon', 'premium', 'floral'],
    quizScore: { morning: 2, afternoon: 2, evening: -1, focus: 2, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 0 }
  },
  {
    id: 'yunnan-gold', name: 'Yunnan Gold (Dian Hong)', emoji: '✨', origin: 'China (Yunnan)', color: '#c8702a',
    caffeine: 'high', caffeineLabel: 'High (40–60 mg/cup)',
    flavor: ['chocolatey', 'malty', 'honey', 'smooth'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A premium Chinese black tea made from golden buds in Yunnan province. Rich, smooth, and sweet with chocolatey, malty notes and golden tips. Very little bitterness.',
    benefits: ['Very low bitterness', 'Contains polyphenols', 'Smooth and satisfying', 'Sweet golden buds'],
    brew: { temp: '90–95 °C', time: '3–4 min', amount: '2–3 g / 250 ml' },
    tags: ['morning', 'afternoon', 'premium', 'smooth'],
    quizScore: { morning: 2, afternoon: 2, evening: -1, focus: 2, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 1 }
  },
  {
    id: 'kenyan-black', name: 'Kenyan Black', emoji: '🌍', origin: 'Kenya (Great Rift Valley)', color: '#8c2000',
    caffeine: 'high', caffeineLabel: 'High (50–80 mg/cup)',
    flavor: ['bright', 'brisk', 'strong', 'slightly earthy'],
    bestTimes: ['morning'],
    desc: 'Grown at high altitude in the Kenyan Highlands on both sides of the Great Rift Valley, this CTC (crush-tear-curl) black tea is bright, brisk, and bold. Kenya ranks third in the world for tea exports, after China and India, and its tea makes a fine iced tea.',
    benefits: ['Good caffeine kick', 'Bright, brisk flavour', 'Clean finish', 'Excellent iced'],
    brew: { temp: '95–100 °C', time: '2–4 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'energy', 'iced', 'bold'],
    quizScore: { morning: 3, afternoon: 1, evening: -3, focus: 2, relax: -1, energy: 3, caffeine: 3, noCaffeine: -3, warm: 2, cold: 2 }
  },
  {
    id: 'nilgiri', name: 'Nilgiri Black', emoji: '⛰️', origin: 'India (Nilgiri Hills)', color: '#a03818',
    caffeine: 'high', caffeineLabel: 'High (40–65 mg/cup)',
    flavor: ['floral', 'slightly fruity', 'light', 'fragrant'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'From the "Blue Mountains" of Tamil Nadu, Nilgiri is lighter and more fragrant than Assam with a subtle fruity, floral character. Its low tannin content makes it one of the best black teas for iced tea.',
    benefits: ['Contains antioxidants', 'Light, fragrant cup', 'Popular iced tea base', 'Fruity and floral notes'],
    brew: { temp: '90–95 °C', time: '3–4 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'afternoon', 'floral', 'iced'],
    quizScore: { morning: 2, afternoon: 2, evening: -1, focus: 2, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 2 }
  },
  {
    id: 'golden-monkey', name: 'Golden Monkey (Jin Hou)', emoji: '🐒', origin: 'China (Fujian)', color: '#b06020',
    caffeine: 'high', caffeineLabel: 'High (40–60 mg/cup)',
    flavor: ['chocolatey', 'smooth', 'slightly sweet', 'complex'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A premium Fujian black tea handpicked from young tips and buds. Remarkably smooth and complex with chocolatey sweetness and very low bitterness — one of the world\'s great premium black teas.',
    benefits: ['Very low bitterness', 'Smooth and accessible', 'Rich in polyphenols', 'Complex flavour profile'],
    brew: { temp: '90 °C', time: '3 min', amount: '2 g / 200 ml' },
    tags: ['morning', 'afternoon', 'premium', 'smooth'],
    quizScore: { morning: 2, afternoon: 2, evening: -1, focus: 1, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 0 }
  },
  {
    id: 'russian-caravan', name: 'Russian Caravan', emoji: '🐪', origin: 'China / Russia (blend)', color: '#6a3810',
    caffeine: 'high', caffeineLabel: 'High (40–70 mg/cup)',
    flavor: ['smoky', 'complex', 'slightly sweet', 'woody'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Named for the camel caravans that carried tea overland from China to Russia along the Siberian route in the 18th century. A blend of oolong, Keemun and Lapsang Souchong (some blends skip the Lapsang), it is gently smoky, malty, and warming.',
    benefits: ['Contains polyphenols', 'Warming and comforting', 'Gently smoky', 'Complex layered flavour'],
    brew: { temp: '95 °C', time: '3–4 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'afternoon', 'smoky', 'warming'],
    quizScore: { morning: 2, afternoon: 2, evening: -1, focus: 1, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 3, cold: 0 }
  },
  {
    id: 'kabusecha', name: 'Kabusecha', emoji: '🌿', origin: 'Japan', color: '#3a7050',
    caffeine: 'high', caffeineLabel: 'High (40–60 mg/cup)',
    flavor: ['umami', 'sweet', 'grassy', 'slightly vegetal'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A semi-shaded Japanese green tea — covered for ~2 weeks before harvest (shorter than gyokuro\'s 3 weeks). Richer in umami and L-theanine than regular sencha, with a beautiful depth that\'s less intense than gyokuro.',
    benefits: ['High in L-theanine', 'Calm focused energy', 'Rich antioxidant content', 'Smooth umami depth'],
    brew: { temp: '60–70 °C', time: '1.5–2 min', amount: '3 g / 100 ml' },
    tags: ['morning', 'afternoon', 'japanese', 'focus'],
    quizScore: { morning: 3, afternoon: 2, evening: -1, focus: 3, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 0 }
  },
  {
    id: 'wakoucha', name: 'Wakocha (Japanese Black)', emoji: '🗾', origin: 'Japan', color: '#9c4828',
    caffeine: 'high', caffeineLabel: 'High (40–65 mg/cup)',
    flavor: ['floral', 'smooth', 'slightly fruity', 'delicate'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Japan\'s rare black tea, made from Japanese tea cultivars but fully oxidised. More floral and less tannic than Indian black teas, Wakoucha has a smooth, fragrant character that surprises first-time drinkers.',
    benefits: ['Antioxidant-rich', 'More approachable than Indian blacks', 'Floral aroma', 'Low tannin, no bitterness'],
    brew: { temp: '90–95 °C', time: '3–4 min', amount: '2 g / 200 ml' },
    tags: ['morning', 'afternoon', 'japanese', 'unique'],
    quizScore: { morning: 2, afternoon: 2, evening: -1, focus: 2, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 1 }
  },
  {
    id: 'mango-black', name: 'Mango Black Tea', emoji: '🥭', origin: 'Global blend (Assam base)', color: '#e8820a',
    caffeine: 'high', caffeineLabel: 'High (40–70 mg/cup)',
    flavor: ['tropical', 'sweet', 'fruity', 'bold'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Bold Assam black tea infused with tropical mango. Sweet, vibrant, and exotic with the full energy backbone of a strong black tea. Excellent both hot and over ice with a slice of fresh mango.',
    benefits: ['Full caffeine kick', 'Tropical flavour lift', 'High in polyphenols', 'Popular iced tea flavour'],
    brew: { temp: '95 °C', time: '3–4 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'afternoon', 'fruity', 'iced'],
    quizScore: { morning: 2, afternoon: 2, evening: -2, focus: 1, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 3 }
  },
  {
    id: 'lychee-black', name: 'Lychee Black Tea', emoji: '🍒', origin: 'China (flavoured blend)', color: '#c84070',
    caffeine: 'high', caffeineLabel: 'High (40–65 mg/cup)',
    flavor: ['sweet', 'rose-like', 'fruity', 'fragrant'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Black tea with the sweet, floral aroma of lychee fruit. Fragrant and smooth, it is a popular flavoured tea.',
    benefits: ['Good caffeine kick', 'Fragrant lychee aroma', 'Contains polyphenols', 'Elegant flavour'],
    brew: { temp: '90–95 °C', time: '3 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'afternoon', 'floral', 'fruity'],
    quizScore: { morning: 2, afternoon: 2, evening: -1, focus: 1, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 2 }
  },
  {
    id: 'peach-black', name: 'Peach Black Tea', emoji: '🍑', origin: 'Global blend (black tea base)', color: '#e07840',
    caffeine: 'high', caffeineLabel: 'High (40–70 mg/cup)',
    flavor: ['sweet peach', 'fruity', 'full-bodied', 'sunny'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Classic Southern sweet tea inspiration — bold black tea with natural peach flavouring. Sweet, fruity, and full-bodied with the backbone of a strong black tea. The quintessential iced tea flavour.',
    benefits: ['Full caffeine kick', 'Bright summery flavour', 'Popular iced tea base', 'Refreshing hot or cold'],
    brew: { temp: '95 °C', time: '3–4 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'afternoon', 'fruity', 'iced'],
    quizScore: { morning: 2, afternoon: 2, evening: -2, focus: 1, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 3 }
  }
];
