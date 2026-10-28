'use strict';
// BATCH 5 — HIGH CAFFEINE (Teas 81–90)
const TEAS_HIGH2 = [
  {
    id: 'sun-moon-lake', name: 'Sun Moon Lake Ruby 18', emoji: '🌊', origin: 'Taiwan (Nantou)', color: '#b03040',
    caffeine: 'high', caffeineLabel: 'High (50–80 mg/cup)',
    flavor: ['rich', 'fruity', 'caramel', 'mint-like finish'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Taiwan\'s best-known red tea, grown around Sun Moon Lake in Nantou. It comes from the TTES No. 18 cultivar, a cross of a Burmese Assamica strain and a wild Taiwan tea tree. The cup is smooth and honey-fruity with hints of mint and cinnamon.',
    benefits: ['Contains theaflavins', 'Smooth without bitterness', 'Hints of mint and cinnamon', 'Distinctive Taiwanese cultivar'],
    brew: { temp: '90–95 °C', time: '3 min', amount: '2 g / 200 ml' },
    tags: ['morning', 'afternoon', 'premium', 'taiwanese'],
    quizScore: { morning: 2, afternoon: 2, evening: -1, focus: 2, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 1 }
  },
  {
    id: 'ilam-black', name: 'Ilam Black Tea', emoji: '🏔️', origin: 'Nepal (Ilam District)', color: '#904028',
    caffeine: 'high', caffeineLabel: 'High (40–65 mg/cup)',
    flavor: ['muscatel', 'floral', 'earthy', 'clean'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Grown in the hills of Ilam district in eastern Nepal, at roughly 1,400 to 1,500 metres. Ilam teas are known for a slightly nutty, floral taste with a hint of sweetness. A good choice for anyone who enjoys Darjeeling-style teas.',
    benefits: ['Contains polyphenols', 'Nutty, floral flavour', 'Supports alertness', 'Grown at altitude in the Himalayan foothills'],
    brew: { temp: '90–95 °C', time: '3–4 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'afternoon', 'premium', 'himalayan'],
    quizScore: { morning: 2, afternoon: 2, evening: -1, focus: 2, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 1 }
  },
  {
    id: 'turkish-black', name: 'Turkish Black Tea (Rize Çayı)', emoji: '🧿', origin: 'Turkey (Rize)', color: '#8c2010',
    caffeine: 'high', caffeineLabel: 'High (50–80 mg/cup)',
    flavor: ['bold', 'tannic', 'brisk', 'strong'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Turkey\'s national drink — brewed double-strength in a traditional çaydanlık (double teapot) and diluted to taste. The ritual of sharing tea in tulip-shaped glasses is deeply embedded in Turkish culture. Bold, brisk, and always served strong.',
    benefits: ['High in tannins', 'Stimulating wake-up', 'Rich in polyphenols', 'Traditionally social and warming'],
    brew: { temp: '100 °C', time: '15–20 min (double brewed)', amount: '3 g concentrate / dilute to taste' },
    tags: ['morning', 'bold', 'traditional', 'strong'],
    quizScore: { morning: 3, afternoon: 1, evening: -3, focus: 2, relax: -1, energy: 3, caffeine: 3, noCaffeine: -3, warm: 3, cold: 0 }
  },
  {
    id: 'puerh-sheng', name: 'Raw Pu-erh (Sheng)', emoji: '🌱', origin: 'China (Yunnan)', color: '#6a8030',
    caffeine: 'high', caffeineLabel: 'High (40–70 mg/cup)',
    flavor: ['fresh', 'astringent', 'vegetal', 'complex'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'The unfermented counterpart to aged ripe pu-erh, young Sheng is vibrant, astringent, and alive with complexity. It changes dramatically with age — most prized Sheng cakes are 10–30 years old, but young Sheng is an experience in its own right.',
    benefits: ['Contains polyphenols', 'Changes in flavour as it ages', 'Stimulating', 'Can be steeped many times'],
    brew: { temp: '90–95 °C', time: '30 sec–1 min (gong fu)', amount: '5 g / 100 ml' },
    tags: ['morning', 'afternoon', 'complex', 'aged'],
    quizScore: { morning: 2, afternoon: 2, evening: -1, focus: 2, relax: 0, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 0 }
  },
  {
    id: 'anji-baicha', name: 'Anji Bai Cha', emoji: '🤍', origin: 'China (Anji, Zhejiang)', color: '#98c878',
    caffeine: 'medium', caffeineLabel: 'Medium (20–45 mg/cup)',
    flavor: ['sweet', 'creamy', 'umami', 'delicate'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Despite the name ("white tea from Anji"), this is a green tea processed from a rare albino cultivar whose leaves are white due to a temperature-sensitive chlorophyll deficiency. The result is one of China\'s most precious and sweetest green teas, with very high L-theanine.',
    benefits: ['High in amino acids such as L-theanine', 'Very sweet with no bitterness', 'Rare and prized', 'Light, fresh flavour'],
    brew: { temp: '75–80 °C', time: '2 min', amount: '3 g / 150 ml' },
    tags: ['morning', 'afternoon', 'premium', 'rare'],
    quizScore: { morning: 3, afternoon: 2, evening: -1, focus: 3, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 0 }
  },
  {
    id: 'java-black', name: 'Java Estate Black', emoji: '🌋', origin: 'Indonesia (Java)', color: '#904818',
    caffeine: 'high', caffeineLabel: 'High (40–60 mg/cup)',
    flavor: ['earthy', 'full-bodied', 'slightly spicy', 'bold'],
    bestTimes: ['morning'],
    desc: 'Grown in the highlands of Java in Indonesia, this black tea is bold and earthy with a hint of spice. A sturdy, reliable tea that stands up well to milk.',
    benefits: ['Contains polyphenols', 'Strong morning wake-up', 'Good with milk', 'Earthy, slightly spicy flavour'],
    brew: { temp: '95–100 °C', time: '3–5 min', amount: '2–3 g / 250 ml' },
    tags: ['morning', 'bold', 'milk tea', 'breakfast'],
    quizScore: { morning: 3, afternoon: 1, evening: -3, focus: 2, relax: -1, energy: 3, caffeine: 3, noCaffeine: -3, warm: 2, cold: 0 }
  },
  {
    id: 'tanyang-gongfu', name: 'Tanyang Gongfu', emoji: '🌺', origin: 'China (Fujian, Fu\'an)', color: '#a83020',
    caffeine: 'high', caffeineLabel: 'High (40–60 mg/cup)',
    flavor: ['sweet', 'rose-like', 'smooth', 'slightly chocolatey'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A classic Gongfu (congou) black tea from Fu\'an in Fujian. Tanyang is the small village whose style popularised congou teas, which were the base of the 19th-century English Breakfast blend. Sweet, floral, and smooth with fine golden tips.',
    benefits: ['Smooth with very low tannin', 'Sweet, floral aroma', 'Golden tips', 'Historic congou tea'],
    brew: { temp: '90–95 °C', time: '3 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'afternoon', 'premium', 'floral'],
    quizScore: { morning: 2, afternoon: 2, evening: -1, focus: 2, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 1 }
  },
  {
    id: 'rou-gui', name: 'Rou Gui Rock Oolong', emoji: '🌿', origin: 'China (Wuyi Mountains)', color: '#8c4820',
    caffeine: 'medium', caffeineLabel: 'Medium (30–55 mg/cup)',
    flavor: ['cinnamon spice', 'roasted', 'mineral', 'warming finish'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A well-known Wuyi Mountains rock oolong, alongside Da Hong Pao. Rou Gui (Cinnamon) is named for its warm spice character. Mineral "rock flavour" (yan yun), roasted depth, and cinnamon warmth make it one of the more complex oolongs.',
    benefits: ['Roasted, spicy flavour', 'Warming cup', 'Contains antioxidants', 'Can be steeped many times'],
    brew: { temp: '90–95 °C', time: '30 sec–2 min (gong fu)', amount: '5–7 g / 100 ml' },
    tags: ['morning', 'afternoon', 'premium', 'roasted'],
    quizScore: { morning: 2, afternoon: 3, evening: 0, focus: 2, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 3, cold: 0 }
  },
  {
    id: 'georgian-black', name: 'Georgian Black Tea', emoji: '🏔️', origin: 'Georgia (Adjara, Guria)', color: '#7a3018',
    caffeine: 'high', caffeineLabel: 'High (45–70 mg/cup)',
    flavor: ['robust', 'slightly floral', 'earthy', 'brisk'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Grown in the Adjara and Guria regions of western Georgia, where tea has been cultivated since the 19th century. Georgian black tea has a robust, brisk character with gentle floral notes.',
    benefits: ['Good caffeine kick', 'Contains polyphenols', 'Robust, brisk flavour'],
    brew: { temp: '95–100 °C', time: '4–5 min', amount: '2–3 g / 250 ml' },
    tags: ['morning', 'bold', 'traditional', 'breakfast'],
    quizScore: { morning: 3, afternoon: 1, evening: -2, focus: 2, relax: 0, energy: 3, caffeine: 3, noCaffeine: -3, warm: 2, cold: 0 }
  },
  {
    id: 'yunnan-ancient', name: 'Ancient Tree Yunnan Black', emoji: '🌳', origin: 'China (Yunnan, Lincang)', color: '#c07030',
    caffeine: 'high', caffeineLabel: 'High (40–65 mg/cup)',
    flavor: ['honey', 'mellow', 'complex', 'aged sweetness'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Picked from very old Yunnan tea trees (gushu), this black tea is known for a mellow, sweet cup with real depth.',
    benefits: ['Contains polyphenols', 'Low tannin, little bitterness', 'Mellow, naturally sweet cup', 'Can be steeped many times'],
    brew: { temp: '90–95 °C', time: '3 min', amount: '3 g / 200 ml' },
    tags: ['morning', 'afternoon', 'premium', 'rare'],
    quizScore: { morning: 2, afternoon: 2, evening: 0, focus: 1, relax: 2, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 1 }
  }
];
