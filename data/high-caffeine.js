'use strict';
// BATCH 1 — HIGH CAFFEINE (20 teas)
const TEAS_HIGH = [
  {
    id: 'matcha', name: 'Matcha', emoji: '🍵', origin: 'Japan', color: '#3a7d44',
    caffeine: 'high', caffeineLabel: 'High (70 mg/cup)',
    flavor: ['earthy', 'umami', 'vegetal', 'slightly bitter'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A finely ground powder of specially grown green tea leaves. Matcha delivers sustained, calm energy via L-theanine paired with caffeine — the ultimate focus drink.',
    benefits: ['Rich in antioxidants (EGCG)', 'Sustained mental focus without jitters', 'Boosts metabolism', 'Supports immune system'],
    brew: { temp: '75–80 °C', time: '30 sec whisk', amount: '1–2 g / 60 ml' },
    tags: ['morning', 'focus', 'energy', 'antioxidant'],
    quizScore: { morning: 3, afternoon: 2, evening: -2, focus: 3, relax: -1, energy: 3, caffeine: 3, noCaffeine: -3, warm: 2, cold: 1 }
  },
  {
    id: 'gyokuro', name: 'Gyokuro', emoji: '🌑', origin: 'Japan (Uji)', color: '#2e6e3a',
    caffeine: 'high', caffeineLabel: 'High (35–70 mg/cup)',
    flavor: ['intense umami', 'sweet', 'seaweed', 'rich'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Japan\'s most prestigious green tea, shade-grown for 3 weeks before harvest. Shading boosts chlorophyll, L-theanine, and caffeine, producing an intensely sweet, umami-rich cup unlike any other.',
    benefits: ['Highest L-theanine of all teas', 'Deep, sustained focus', 'Very high antioxidants', 'Amino-acid rich'],
    brew: { temp: '50–60 °C', time: '2–3 min', amount: '3–4 g / 60 ml' },
    tags: ['morning', 'focus', 'premium', 'japanese'],
    quizScore: { morning: 3, afternoon: 2, evening: -1, focus: 3, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 0 }
  },
  {
    id: 'blacktea', name: 'Black Tea', emoji: '🫖', origin: 'India / Sri Lanka / China', color: '#7c4a1e',
    caffeine: 'high', caffeineLabel: 'High (40–70 mg/cup)',
    flavor: ['bold', 'malty', 'robust', 'slightly astringent'],
    bestTimes: ['morning'],
    desc: 'Fully oxidized tea leaves with a rich, bold flavour. Black tea is the classic morning energizer — robust enough to cut through milk and powerful enough to kick-start any day.',
    benefits: ['Strong caffeine kick', 'Rich in polyphenols', 'Supports gut health', 'May improve focus and alertness'],
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
    benefits: ['Highest caffeine of any single-origin black tea', 'Rich in theaflavins', 'Excellent with milk', 'Supports alertness'],
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
    benefits: ['High in antioxidants', 'Supports heart health', 'Good source of manganese', 'Clean, bright energy'],
    brew: { temp: '95–100 °C', time: '3–4 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'afternoon', 'citrusy', 'classic'],
    quizScore: { morning: 3, afternoon: 2, evening: -2, focus: 2, relax: 0, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 1 }
  },
  {
    id: 'lapsang', name: 'Lapsang Souchong', emoji: '🔥', origin: 'China (Fujian)', color: '#5a2e12',
    caffeine: 'high', caffeineLabel: 'High (40–60 mg/cup)',
    flavor: ['smoky', 'pine', 'bold', 'woody'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'The world\'s first black tea. Dried over pinewood fires in Fujian province, Lapsang Souchong has an unmistakable campfire smokiness — its fans are fiercely devoted.',
    benefits: ['Unique antioxidant profile', 'Strong caffeine kick', 'Stimulates digestion', 'Pairs well with savoury foods'],
    brew: { temp: '95–100 °C', time: '3–4 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'smoky', 'bold', 'unique'],
    quizScore: { morning: 2, afternoon: 1, evening: 0, focus: 1, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 3, cold: -1 }
  },
  {
    id: 'yerbamate', name: 'Yerba Mate', emoji: '⚡', origin: 'South America', color: '#4a8c3f',
    caffeine: 'high', caffeineLabel: 'High (65–130 mg/cup)',
    flavor: ['bold', 'grassy', 'smoky', 'slightly bitter'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A South American powerhouse brewed from Ilex paraguariensis. Mate provides intense, long-lasting energy with a unique nutrient profile not found in any other tea.',
    benefits: ['Highest caffeine of any tea', 'Contains all essential vitamins', 'Improves physical endurance', 'Boosts mental focus'],
    brew: { temp: '70–80 °C', time: '3–5 min', amount: '1 tbsp / 240 ml' },
    tags: ['morning', 'energy', 'focus', 'workout'],
    quizScore: { morning: 3, afternoon: 2, evening: -3, focus: 3, relax: -2, energy: 3, caffeine: 3, noCaffeine: -3, warm: 2, cold: 1 }
  },
  {
    id: 'english-breakfast', name: 'English Breakfast', emoji: '🇬🇧', origin: 'Blend (Assam / Ceylon / Kenya)', color: '#6b2e10',
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
    caffeine: 'high', caffeineLabel: 'Very High (60–100 mg/cup)',
    flavor: ['very bold', 'malty', 'robust', 'strong'],
    bestTimes: ['morning'],
    desc: 'Even stronger than English Breakfast, Irish Breakfast is predominantly Assam with small amounts of African tea. Designed for the notorious Irish love of a strong cup — traditionally drunk with full-fat milk.',
    benefits: ['Very high caffeine', 'Rich in theaflavins', 'Deeply satisfying with milk', 'One of the strongest breakfast teas'],
    brew: { temp: '100 °C', time: '4–5 min', amount: '3 g / 250 ml' },
    tags: ['morning', 'breakfast', 'milk tea', 'strong'],
    quizScore: { morning: 3, afternoon: 1, evening: -3, focus: 2, relax: -2, energy: 3, caffeine: 3, noCaffeine: -3, warm: 2, cold: 0 }
  },
  {
    id: 'keemun', name: 'Keemun', emoji: '🌹', origin: 'China (Anhui)', color: '#7a3020',
    caffeine: 'high', caffeineLabel: 'High (40–70 mg/cup)',
    flavor: ['floral', 'winey', 'slightly smoky', 'orchid'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'One of China\'s Ten Famous Teas — a prestigious black tea from Anhui province with a distinctive floral, winey, slightly smoky character. The backbone of many classic English Breakfast blends.',
    benefits: ['Antioxidant-rich', 'Supports cardiovascular health', 'Lower tannin than Assam', 'Complex flavour depth'],
    brew: { temp: '90–95 °C', time: '3–4 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'afternoon', 'premium', 'floral'],
    quizScore: { morning: 2, afternoon: 2, evening: -1, focus: 2, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 0 }
  },
  {
    id: 'yunnan-gold', name: 'Yunnan Gold (Dian Hong)', emoji: '✨', origin: 'China (Yunnan)', color: '#c8702a',
    caffeine: 'high', caffeineLabel: 'High (40–60 mg/cup)',
    flavor: ['chocolatey', 'malty', 'honey', 'smooth'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A premium Chinese black tea made from large golden buds from Yunnan province. Rich, smooth, and remarkably sweet with chocolatey, malty notes and stunning golden tips. No bitterness whatsoever.',
    benefits: ['Very low tannin — no bitterness', 'Rich in polyphenols', 'Smooth and satisfying', 'High antioxidant golden tips'],
    brew: { temp: '90–95 °C', time: '3–4 min', amount: '2–3 g / 250 ml' },
    tags: ['morning', 'afternoon', 'premium', 'smooth'],
    quizScore: { morning: 2, afternoon: 2, evening: -1, focus: 2, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 1 }
  },
  {
    id: 'kenyan-black', name: 'Kenyan Black', emoji: '🌍', origin: 'Kenya (Great Rift Valley)', color: '#8c2000',
    caffeine: 'high', caffeineLabel: 'High (50–80 mg/cup)',
    flavor: ['bright', 'brisk', 'strong', 'slightly earthy'],
    bestTimes: ['morning'],
    desc: 'Grown at high altitude in Kenya\'s Great Rift Valley, this CTC (cut-tear-curl) black tea is bright, brisk, and bold. Kenya is the world\'s third-largest tea producer and makes one of the finest iced teas.',
    benefits: ['High caffeine', 'Very high theaflavin content', 'Bright and clean flavour', 'Excellent iced'],
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
    benefits: ['Good source of antioxidants', 'Lighter on the stomach than Assam', 'Popular iced tea base', 'Fragrant and pleasant'],
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
    desc: 'Named for the overland camel caravans that brought tea from China to Russia in the 17th–19th centuries. A blend of oolong and Lapsang Souchong — complex, gently smoky, and warming.',
    benefits: ['High in antioxidants', 'Warming and comforting', 'Aids digestion', 'Complex layered flavour'],
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
    desc: 'Japan\'s rare black tea — made from Japanese green tea cultivars but fully oxidized. More floral and less tannic than Indian black teas, Wakocha has a uniquely smooth, fragrant character that surprises first-time drinkers.',
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
    desc: 'A Chinese classic — black tea with the sweet, rose-like aroma of lychee fruit. Fragrant and smooth, lychee tea has been a staple in Chinese dim sum restaurants for centuries.',
    benefits: ['Full caffeine', 'Aromatic and mood-lifting', 'Rich in polyphenols', 'Elegant flavour'],
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
