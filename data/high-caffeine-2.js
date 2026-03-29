'use strict';
// BATCH 5 — HIGH CAFFEINE (Teas 81–90)
const TEAS_HIGH2 = [
  {
    id: 'sun-moon-lake', name: 'Sun Moon Lake Ruby 18', emoji: '🌊', origin: 'Taiwan (Nantou)', color: '#b03040',
    caffeine: 'high', caffeineLabel: 'High (50–80 mg/cup)',
    flavor: ['rich', 'fruity', 'caramel', 'mint-like finish'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Taiwan\'s most celebrated red tea, developed from a cross of Burmese Assamica and wild Taiwan tea trees. Cultivar TTES #18 yields a remarkably smooth, honey-fruity cup with a distinctive menthol finish — unlike any other black tea.',
    benefits: ['High in theaflavins', 'Smooth without bitterness', 'Unique antioxidant profile', 'Supports cardiovascular health'],
    brew: { temp: '90–95 °C', time: '3 min', amount: '2 g / 200 ml' },
    tags: ['morning', 'afternoon', 'premium', 'taiwanese'],
    quizScore: { morning: 2, afternoon: 2, evening: -1, focus: 2, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 1 }
  },
  {
    id: 'ilam-black', name: 'Ilam Black Tea', emoji: '🏔️', origin: 'Nepal (Ilam District)', color: '#904028',
    caffeine: 'high', caffeineLabel: 'High (40–65 mg/cup)',
    flavor: ['muscatel', 'floral', 'earthy', 'clean'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Grown in the Himalayan foothills of Nepal at elevations rivalling Darjeeling, Ilam Black is often compared to a first flush Darjeeling but with a distinct earthier edge. An underrated gem that tea enthusiasts are only beginning to discover.',
    benefits: ['Rich in polyphenols', 'High-altitude antioxidants', 'Supports alertness', 'Comparable to premium Indian teas'],
    brew: { temp: '90–95 °C', time: '3–4 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'afternoon', 'premium', 'himalayan'],
    quizScore: { morning: 2, afternoon: 2, evening: -1, focus: 2, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 1 }
  },
  {
    id: 'turkish-black', name: 'Turkish Black Tea (Rize Çayı)', emoji: '🇹🇷', origin: 'Turkey (Rize)', color: '#8c2010',
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
    benefits: ['High in EGCG and polyphenols', 'Improves with age', 'Supports digestion', 'Stimulating and energising'],
    brew: { temp: '90–95 °C', time: '30 sec–1 min (gong fu)', amount: '5 g / 100 ml' },
    tags: ['morning', 'afternoon', 'complex', 'aged'],
    quizScore: { morning: 2, afternoon: 2, evening: -1, focus: 2, relax: 0, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 0 }
  },
  {
    id: 'anji-baicha', name: 'Anji Bai Cha', emoji: '🤍', origin: 'China (Anji, Zhejiang)', color: '#98c878',
    caffeine: 'high', caffeineLabel: 'High (50–80 mg/cup)',
    flavor: ['sweet', 'creamy', 'umami', 'delicate'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Despite the name ("white tea from Anji"), this is a green tea processed from a rare albino cultivar whose leaves are white due to a temperature-sensitive chlorophyll deficiency. The result is one of China\'s most precious and sweetest green teas, with very high L-theanine.',
    benefits: ['Exceptionally high in L-theanine', 'Calm, jitter-free focus', 'Rare and prized', 'Very sweet with no bitterness'],
    brew: { temp: '75–80 °C', time: '2 min', amount: '3 g / 150 ml' },
    tags: ['morning', 'afternoon', 'premium', 'rare'],
    quizScore: { morning: 3, afternoon: 2, evening: -1, focus: 3, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 0 }
  },
  {
    id: 'java-black', name: 'Java Estate Black', emoji: '🌋', origin: 'Indonesia (Java)', color: '#904818',
    caffeine: 'high', caffeineLabel: 'High (40–60 mg/cup)',
    flavor: ['earthy', 'full-bodied', 'slightly spicy', 'bold'],
    bestTimes: ['morning'],
    desc: 'Grown on volcanic soils in the highlands of Java, Indonesian black tea is bold and earthy with a distinctive spicy undertone from the mineral-rich soil. A sturdy, reliable workhorse tea that powers through milk beautifully.',
    benefits: ['Rich in polyphenols', 'Strong morning wake-up', 'Good with milk', 'Volcanic mineral richness'],
    brew: { temp: '95–100 °C', time: '3–5 min', amount: '2–3 g / 250 ml' },
    tags: ['morning', 'bold', 'milk tea', 'breakfast'],
    quizScore: { morning: 3, afternoon: 1, evening: -3, focus: 2, relax: -1, energy: 3, caffeine: 3, noCaffeine: -3, warm: 2, cold: 0 }
  },
  {
    id: 'tanyang-gongfu', name: 'Tanyang Gongfu', emoji: '🌺', origin: 'China (Fujian, Fu\'an)', color: '#a83020',
    caffeine: 'high', caffeineLabel: 'High (40–60 mg/cup)',
    flavor: ['sweet', 'rose-like', 'smooth', 'slightly chocolatey'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'One of China\'s three great Gongfu Red Teas alongside Qimen and Dianhong. Tanyang Gongfu from Fu\'an in Fujian is prized for its sweet, floral, rose-like character with remarkable smoothness. Its fine golden tips and distinctive aroma have been famous since the Qing dynasty.',
    benefits: ['Smooth with very low tannin', 'Antioxidant-rich golden tips', 'Mood-lifting aroma', 'Historically significant tea'],
    brew: { temp: '90–95 °C', time: '3 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'afternoon', 'premium', 'floral'],
    quizScore: { morning: 2, afternoon: 2, evening: -1, focus: 2, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 1 }
  },
  {
    id: 'rou-gui', name: 'Rou Gui Rock Oolong', emoji: '🌿', origin: 'China (Wuyi Mountains)', color: '#8c4820',
    caffeine: 'high', caffeineLabel: 'High (50–80 mg/cup)',
    flavor: ['cinnamon spice', 'roasted', 'mineral', 'warming finish'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A second great Wuyi Rock oolong after Da Hong Pao, Rou Gui (Cinnamon) is named for its distinctive warm spice character. The combination of mineral "rock flavour" (yan yun), roasted depth, and cinnamon warmth creates one of tea\'s most complex flavour experiences.',
    benefits: ['Rich in rock mineral compounds', 'Warming and stimulating', 'High in antioxidants', 'Aids digestion after meals'],
    brew: { temp: '95–100 °C', time: '30 sec–2 min (gong fu)', amount: '5–7 g / 100 ml' },
    tags: ['morning', 'afternoon', 'premium', 'roasted'],
    quizScore: { morning: 2, afternoon: 3, evening: 0, focus: 2, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 3, cold: 0 }
  },
  {
    id: 'georgian-black', name: 'Georgian Black Tea', emoji: '🏔️', origin: 'Georgia (Kakheti)', color: '#7a3018',
    caffeine: 'high', caffeineLabel: 'High (45–70 mg/cup)',
    flavor: ['robust', 'slightly floral', 'earthy', 'brisk'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Grown in the lush Kakheti and Adjara regions of Georgia, tea has been cultivated here since the 19th century. Georgian black tea has a robust, brisk character with gentle floral notes — traditionally drunk strong and sweetened with homemade fruit preserves (varenye).',
    benefits: ['High caffeine kick', 'Rich in polyphenols', 'Unique Eastern European tradition', 'Pairs well with black bread and sweets'],
    brew: { temp: '95–100 °C', time: '4–5 min', amount: '2–3 g / 250 ml' },
    tags: ['morning', 'bold', 'traditional', 'breakfast'],
    quizScore: { morning: 3, afternoon: 1, evening: -2, focus: 2, relax: 0, energy: 3, caffeine: 3, noCaffeine: -3, warm: 2, cold: 0 }
  },
  {
    id: 'yunnan-ancient', name: 'Ancient Tree Yunnan Black', emoji: '🌳', origin: 'China (Yunnan, Lincang)', color: '#c07030',
    caffeine: 'high', caffeineLabel: 'High (40–65 mg/cup)',
    flavor: ['honey', 'mellow', 'complex', 'aged sweetness'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Handpicked from 200–500 year old Yunnan tea trees (gushu), this premium black tea carries a depth and sweetness rarely found in cultivated teas. The ancient trees\' deep root systems draw unique minerals, producing a cup of extraordinary mellow complexity and natural honey sweetness.',
    benefits: ['Very rich in polyphenols from ancient trees', 'Low tannin, no bitterness', 'Unique terroir', 'Re-steepable 5+ times'],
    brew: { temp: '90–95 °C', time: '3 min', amount: '3 g / 200 ml' },
    tags: ['morning', 'afternoon', 'premium', 'rare'],
    quizScore: { morning: 2, afternoon: 2, evening: 0, focus: 1, relax: 2, energy: 2, caffeine: 2, noCaffeine: -2, warm: 2, cold: 1 }
  }
];
