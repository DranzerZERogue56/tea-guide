'use strict';
// NEW TEAS - extra teas and tisanes (22 entries). Same schema as the other data files.
// Wire in with: <script src="data/new-teas.js"></script> and spread TEAS_NEW into the tea list.
const TEAS_NEW = [
  // ── HIGH CAFFEINE ──────────────────────────────────────────────────────────
  {
    id: 'uva-highlands', name: 'Uva Highlands Ceylon', emoji: '🌬️', origin: 'Sri Lanka (Uva)', color: '#a85a28',
    caffeine: 'high', caffeineLabel: 'High (40–70 mg/cup)',
    flavor: ['brisk', 'honey', 'citrus', 'wintergreen'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A high-grown Ceylon black tea from the eastern slopes of Sri Lanka. Strong highland winds concentrate the leaf, giving a brisk, intense cup with honey and citrus notes and a cool wintergreen edge.',
    benefits: ['Contains natural polyphenols', 'Caffeine for a clear morning lift', 'Bold enough to take milk', 'Distinctive minty character'],
    brew: { temp: '100 °C', time: '4–5 min', amount: '2 g / 240 ml' },
    tags: ['morning', 'afternoon', 'bold', 'classic'],
    quizScore: { morning: 3, afternoon: 2, evening: -2, focus: 2, relax: 0, energy: 3, caffeine: 3, noCaffeine: -3, warm: 3, cold: 1 }
  },
  {
    id: 'lovers-leap', name: "Lover's Leap Nuwara Eliya", emoji: '⛰️', origin: 'Sri Lanka (Nuwara Eliya)', color: '#c47a30',
    caffeine: 'high', caffeineLabel: 'High (40–60 mg/cup)',
    flavor: ['mild', 'dried orange peel', 'grapefruit rind', 'light-bodied'],
    bestTimes: ['afternoon', 'morning'],
    desc: 'A light-bodied Ceylon black tea from the high-altitude Nuwara Eliya region. It is mild and citrusy, with notes of dried orange peel, and works well in the afternoon with or without milk.',
    benefits: ['Contains natural polyphenols', 'Gentler than a strong breakfast tea', 'Gentle caffeine lift', 'Easy to drink all afternoon'],
    brew: { temp: '100 °C', time: '4–5 min', amount: '2 g / 240 ml' },
    tags: ['afternoon', 'citrusy', 'light', 'classic'],
    quizScore: { morning: 2, afternoon: 3, evening: -1, focus: 2, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 3, cold: 1 }
  },
  {
    id: 'jin-jun-mei', name: 'Jin Jun Mei (Golden Eyebrow)', emoji: '🍫', origin: 'China (Wuyishan, Fujian)', color: '#8a5a2a',
    caffeine: 'high', caffeineLabel: 'High (40–70 mg/cup)',
    flavor: ['dark chocolate', 'earthy', 'savoury', 'sweet'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A black tea from the Wuyi Mountains of Fujian, made from fine golden-tipped leaves. The cup is medium-bodied and savoury, with a soft sweet aroma and a thread of dark chocolate in the finish.',
    benefits: ['Contains natural polyphenols', 'Smooth with little bitterness', 'Can be steeped several times', 'Gentle caffeine lift'],
    brew: { temp: '90–95 °C', time: '3–5 min', amount: '2–3 g / 200 ml' },
    tags: ['morning', 'afternoon', 'premium', 'chinese'],
    quizScore: { morning: 3, afternoon: 2, evening: -1, focus: 2, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 3, cold: 0 }
  },
  {
    id: 'malawi-black-treasure', name: 'Malawi Black Treasure', emoji: '🌍', origin: 'Malawi (Shire Highlands)', color: '#9a4a28',
    caffeine: 'high', caffeineLabel: 'High (40–65 mg/cup)',
    flavor: ['honeyed toast', 'stone fruit', 'smooth', 'medium-bodied'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A black tea from the Satemwa estate in Malawi, made from the Bvumbwe cultivar and hand-picked in small batches. The cup is medium-bodied, with notes of honeyed toast and stone fruit.',
    benefits: ['Contains natural polyphenols', 'Smooth and easy to drink', 'Caffeine for a steady morning lift', 'Good plain or with milk'],
    brew: { temp: '100 °C', time: '5 min', amount: '2 g / 240 ml' },
    tags: ['morning', 'afternoon', 'fruity', 'unique'],
    quizScore: { morning: 3, afternoon: 2, evening: -2, focus: 2, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 3, cold: 1 }
  },
  {
    id: 'rwandan-rukeri', name: 'Rwandan Rukeri', emoji: '🦍', origin: 'Rwanda', color: '#7a3a20',
    caffeine: 'high', caffeineLabel: 'High (40–70 mg/cup)',
    flavor: ['toasty', 'caramelised', 'savoury', 'full-bodied'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A full-bodied black tea from Rwanda with a savoury-sweet profile. The cup has toasty, caramelised depth rather than the citrus or malt of many black teas.',
    benefits: ['Contains natural polyphenols', 'Full flavour that stands up to milk', 'Caffeine for a steady lift', 'A good way to try an African origin'],
    brew: { temp: '97 °C', time: '5 min', amount: '2 g / 240 ml' },
    tags: ['morning', 'bold', 'full-bodied', 'unique'],
    quizScore: { morning: 3, afternoon: 2, evening: -2, focus: 2, relax: 0, energy: 3, caffeine: 3, noCaffeine: -3, warm: 3, cold: 0 }
  },
  {
    id: 'temi-sikkim', name: 'Temi Sikkim Black', emoji: '🏔️', origin: 'India (Sikkim)', color: '#b8802c',
    caffeine: 'high', caffeineLabel: 'High (40–65 mg/cup)',
    flavor: ['floral', 'sweet', 'light', 'toasty'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Black tea from Sikkim in the Indian Himalayas, best known from the Temi Tea Garden founded in 1969. The spring first flush is golden with a light floral finish, while later flushes are fuller and more toasty.',
    benefits: ['Contains natural polyphenols', 'Light enough to drink without milk', 'Caffeine for a calm lift', 'Often grown organically'],
    brew: { temp: '90–95 °C', time: '3–4 min', amount: '2 g / 240 ml' },
    tags: ['morning', 'afternoon', 'floral', 'himalayan'],
    quizScore: { morning: 3, afternoon: 2, evening: -1, focus: 2, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 3, cold: 1 }
  },

  // ── MEDIUM CAFFEINE ────────────────────────────────────────────────────────
  {
    id: 'yaupon-black', name: 'Yaupon (American Holly Tea)', emoji: '🤠', origin: 'USA (Texas)', color: '#8a6a30',
    caffeine: 'medium', caffeineLabel: 'Medium (40–60 mg/cup)',
    flavor: ['maple syrup', 'toasty', 'smoky', 'sweet'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A tea-like drink made from the leaves of yaupon holly, the only plant native to the United States that naturally contains caffeine. It is not from the tea plant, and the roasted style has light maple-syrup notes with a toasty finish.',
    benefits: ['Naturally caffeinated without being tea', 'Contains plant antioxidants', 'Smooth and low in bitterness', 'A native American drink with a long history'],
    brew: { temp: '98 °C', time: '5 min', amount: '2 g / 240 ml' },
    tags: ['morning', 'afternoon', 'unique', 'smooth'],
    quizScore: { morning: 3, afternoon: 2, evening: -1, focus: 2, relax: 1, energy: 2, caffeine: 2, noCaffeine: -2, warm: 3, cold: 1 }
  },
  {
    id: 'guayusa', name: 'Guayusa', emoji: '🌳', origin: 'Ecuador (Amazon)', color: '#6a8a38',
    caffeine: 'medium', caffeineLabel: 'Medium (40–70 mg/cup)',
    flavor: ['grassy', 'herbaceous', 'smooth', 'fresh'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A traditional drink of the Kichwa people of the Ecuadorian Amazon, made from the leaves of a holly tree rather than the tea plant. It has a fresh, herby flavour and more caffeine than many teas.',
    benefits: ['Naturally caffeinated', 'Contains plant antioxidants', 'Smooth and less bitter than strong black tea', 'A tea alternative to yerba mate'],
    brew: { temp: '100 °C', time: '5 min', amount: '2 g / 240 ml' },
    tags: ['morning', 'afternoon', 'energy', 'unique'],
    quizScore: { morning: 3, afternoon: 2, evening: -1, focus: 2, relax: 1, energy: 3, caffeine: 2, noCaffeine: -2, warm: 2, cold: 2 }
  },
  {
    id: 'kangra-kahwa', name: 'Kangra Kahwa', emoji: '🌶️', origin: 'India (Himachal Pradesh)', color: '#a86a30',
    caffeine: 'medium', caffeineLabel: 'Medium (30–50 mg/cup)',
    flavor: ['cinnamon', 'cardamom', 'clove', 'hint of saffron'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'A spiced blend inspired by the traditional Kashmiri drink kahwa. It combines Himachal black tea with cinnamon, cardamom, cloves and safflower, and is often sweetened and served with crushed almonds.',
    benefits: ['Warming spices', 'Less caffeine than a plain strong black tea', 'Comforting on a cold day', 'Good with honey'],
    brew: { temp: '80 °C', time: '4 min', amount: '2 g / 240 ml' },
    tags: ['afternoon', 'spiced', 'warming', 'traditional'],
    quizScore: { morning: 1, afternoon: 3, evening: 1, focus: 1, relax: 2, energy: 1, caffeine: 1, noCaffeine: -1, warm: 3, cold: 0 }
  },
  {
    id: 'shui-xian', name: 'Shui Xian (Water Sprite)', emoji: '🧚', origin: 'China (Wuyi, Fujian)', color: '#7a4a28',
    caffeine: 'medium', caffeineLabel: 'Medium (30–50 mg/cup)',
    flavor: ['roasted', 'mineral', 'woody', 'dark fruit'],
    bestTimes: ['afternoon', 'after meals'],
    desc: 'A roasted oolong from the Wuyi Mountains made from the Shui Xian ("Narcissus" or "water sprite") cultivar. It brews deep amber and is one of the darkest of the Wuyi rock teas.',
    benefits: ['Contains natural polyphenols', 'Can be steeped many times', 'A warming, roasted cup', 'Pleasant after a meal'],
    brew: { temp: '90–100 °C', time: '30 sec, add 10 sec each steep', amount: '5 g / 100 ml' },
    tags: ['afternoon', 'oolong', 'roasted', 'chinese'],
    quizScore: { morning: 1, afternoon: 3, evening: 1, focus: 2, relax: 2, energy: 1, caffeine: 1, noCaffeine: -1, warm: 3, cold: 0 }
  },
  {
    id: 'liu-bao', name: 'Liu Bao Dark Tea', emoji: '🧺', origin: 'China (Guangxi)', color: '#3a2a1a',
    caffeine: 'medium', caffeineLabel: 'Medium (30–50 mg/cup)',
    flavor: ['earthy', 'woody', 'mossy', 'smooth'],
    bestTimes: ['afternoon', 'after meals'],
    desc: 'A fermented dark tea from the area around Wuzhou in Guangxi, made in a similar way to ripe pu-erh. It is wet-piled to ferment and often aged in baskets, giving a deep, woody and mossy cup.',
    benefits: ['Smooth with little bitterness', 'Traditionally drunk after meals', 'Can be steeped many times', 'Improves with age'],
    brew: { temp: '95–100 °C', time: '1 min, add 15 sec each steep', amount: '5 g / 150 ml' },
    tags: ['afternoon', 'aged', 'chinese', 'after meals'],
    quizScore: { morning: 1, afternoon: 3, evening: 1, focus: 1, relax: 2, energy: 1, caffeine: 1, noCaffeine: -1, warm: 3, cold: 0 }
  },

  // ── LOW CAFFEINE ───────────────────────────────────────────────────────────
  {
    id: 'gunpowder-green', name: 'Gunpowder Green', emoji: '💣', origin: 'China (Zhejiang)', color: '#4a7a3a',
    caffeine: 'low', caffeineLabel: 'Low (25–35 mg/cup)',
    flavor: ['smoky', 'toasty', 'bold', 'slightly sweet'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A Chinese green tea whose leaves are rolled into tight pellets that open up in hot water. The cup is bolder than most green teas, with a toasty, lightly smoky character.',
    benefits: ['Contains green tea antioxidants', 'Gentle caffeine lift', 'Leaves stay fresh well in the tin', 'Base for Moroccan mint tea'],
    brew: { temp: '80 °C', time: '2–3 min', amount: '2 g / 200 ml' },
    tags: ['morning', 'afternoon', 'chinese', 'bold'],
    quizScore: { morning: 2, afternoon: 2, evening: -1, focus: 2, relax: 1, energy: 1, caffeine: 1, noCaffeine: -1, warm: 2, cold: 2 }
  },
  {
    id: 'taiping-houkui', name: 'Taiping Houkui', emoji: '🍃', origin: 'China (Anhui)', color: '#5a9a48',
    caffeine: 'low', caffeineLabel: 'Low (25–35 mg/cup)',
    flavor: ['green bean', 'lemon', 'soft', 'light'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A famous green tea from Taiping in Anhui, picked as large leaves and stretched flat before they are fixed. The cup is light and soft, with flavours of green beans and a touch of lemon.',
    benefits: ['Contains green tea antioxidants', 'Soft with little astringency', 'Gentle caffeine lift', 'Beautiful long flat leaves'],
    brew: { temp: '80 °C', time: '3 min', amount: '3 g / 200 ml' },
    tags: ['morning', 'afternoon', 'chinese', 'delicate'],
    quizScore: { morning: 2, afternoon: 3, evening: 0, focus: 2, relax: 2, energy: 1, caffeine: 1, noCaffeine: -1, warm: 2, cold: 1 }
  },
  {
    id: 'wenshan-baozhong', name: 'Wenshan Baozhong', emoji: '🌸', origin: 'Taiwan (Pinglin)', color: '#a8b84a',
    caffeine: 'low', caffeineLabel: 'Low (25–35 mg/cup)',
    flavor: ['gardenia', 'jasmine', 'buttery', 'floral'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A very lightly oxidised Taiwanese oolong from the Pinglin area near Taipei. It tastes of honeyed flowers, with gardenia, jasmine and a buttery note, and brews a light gold.',
    benefits: ['Contains natural antioxidants', 'Light and easy to drink', 'Gentle caffeine lift', 'Can be steeped several times'],
    brew: { temp: '80 °C', time: '3 min', amount: '3 g / 150 ml' },
    tags: ['afternoon', 'floral', 'oolong', 'taiwanese'],
    quizScore: { morning: 2, afternoon: 3, evening: 0, focus: 2, relax: 2, energy: 1, caffeine: 1, noCaffeine: -1, warm: 2, cold: 1 }
  },
  {
    id: 'hunan-island-green', name: 'Hunan Island Green', emoji: '🏝️', origin: 'China (Hunan)', color: '#68a850',
    caffeine: 'low', caffeineLabel: 'Low (25–35 mg/cup)',
    flavor: ['vegetal', 'sweet', 'steamed greens', 'clean'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'A light-bodied green tea from MaiDuishi Island in southern Hunan, a home of the Yao people. It is soft and vegetal, with the quiet sweetness of steamed greens.',
    benefits: ['Contains green tea antioxidants', 'Light and clean', 'Gentle caffeine lift', 'A calm daytime cup'],
    brew: { temp: '80 °C', time: '2–3 min', amount: '2 g / 200 ml' },
    tags: ['morning', 'afternoon', 'light', 'chinese'],
    quizScore: { morning: 2, afternoon: 3, evening: 0, focus: 2, relax: 2, energy: 1, caffeine: 1, noCaffeine: -1, warm: 2, cold: 1 }
  },
  {
    id: 'kamairicha', name: 'Kamairicha (Pan-Fired Green)', emoji: '🥘', origin: 'Japan (Kyushu)', color: '#7a9a40',
    caffeine: 'low', caffeineLabel: 'Low (20–35 mg/cup)',
    flavor: ['roasted soybean', 'nutty', 'mild', 'low astringency'],
    bestTimes: ['morning', 'afternoon', 'after meals'],
    desc: 'A rare Japanese green tea that is pan-fired in an iron pan instead of steamed, a style found mainly in Kyushu. It is mildly roasted, sweet and fresh, with less astringency than most Japanese green teas.',
    benefits: ['Contains green tea antioxidants', 'Gentle on the palate', 'Gentle caffeine lift', 'Works hot or cold brewed'],
    brew: { temp: '80–85 °C', time: '1.5–2 min', amount: '5 g / 200 ml' },
    tags: ['afternoon', 'japanese', 'roasted', 'rare'],
    quizScore: { morning: 2, afternoon: 3, evening: 0, focus: 2, relax: 2, energy: 1, caffeine: 1, noCaffeine: -1, warm: 2, cold: 2 }
  },

  // ── CAFFEINE-FREE ──────────────────────────────────────────────────────────
  {
    id: 'honeybush', name: 'Honeybush', emoji: '🍯', origin: 'South Africa (Cape fynbos)', color: '#b87a30',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['dark honey', 'toasted grain', 'sweet', 'mellow'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'A herbal infusion from a South African fynbos shrub related to rooibos, named for its honey-scented flowers. The cup is naturally sweet, with warm notes of toasted grain and dark honey.',
    benefits: ['Naturally caffeine-free', 'Naturally sweet without added sugar', 'Gentle enough for the evening', 'Contains plant antioxidants'],
    brew: { temp: '100 °C', time: '5 min', amount: '2 g / 240 ml' },
    tags: ['evening', 'honey', 'caffeine-free', 'sweet'],
    quizScore: { morning: 1, afternoon: 2, evening: 3, focus: 0, relax: 3, energy: 0, caffeine: -3, noCaffeine: 3, warm: 3, cold: 1 }
  },
  {
    id: 'linden-tilleul', name: 'Linden Flower (Tilleul)', emoji: '🌼', origin: 'France (Provence)', color: '#c8c060',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['floral', 'woodsy', 'light', 'chamomile-like'],
    bestTimes: ['evening', 'night'],
    desc: 'A classic French tisane made from the flowers and leaves of the linden tree. The flavour is light and understated, a little like chamomile with a woodsy note.',
    benefits: ['Naturally caffeine-free', 'Traditionally used for mild digestive and sleep support', 'Mild and soothing', 'Light on the stomach'],
    brew: { temp: '100 °C', time: '5 min', amount: '1 tsp / 240 ml' },
    tags: ['evening', 'floral', 'caffeine-free', 'sleep'],
    quizScore: { morning: -1, afternoon: 1, evening: 3, focus: 0, relax: 3, energy: -1, caffeine: -3, noCaffeine: 3, warm: 3, cold: 0 }
  },
  {
    id: 'soba-cha', name: 'Roasted Buckwheat Tea (Sobacha)', emoji: '🌾', origin: 'Japan / China / Korea', color: '#b08a48',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['toasty', 'nutty', 'malty', 'light-bodied'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'A tea made from roasted buckwheat groats, drunk in Japan as sobacha and in China as kuqiao cha. It has a toasty, nutty flavour with a malty sweetness and no caffeine.',
    benefits: ['Naturally caffeine-free', 'Warm and nutty without any tea leaf', 'Enjoyable hot or iced', 'A good coffee-free evening drink'],
    brew: { temp: '100 °C', time: '5 min', amount: '1–2 tbsp / 250 ml' },
    tags: ['afternoon', 'evening', 'caffeine-free', 'roasted'],
    quizScore: { morning: 1, afternoon: 2, evening: 3, focus: 0, relax: 2, energy: 0, caffeine: -3, noCaffeine: 3, warm: 2, cold: 2 }
  },
  {
    id: 'omija-cha', name: 'Omija Tea (Five-Flavour Berry)', emoji: '🍒', origin: 'Korea', color: '#b02850',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['sour', 'sweet', 'tart', 'lightly salty'],
    bestTimes: ['afternoon'],
    desc: 'A Korean tisane made from dried omija (schisandra) berries, whose name means "five flavours": sweet, sour, bitter, salty and pungent. It is served hot or cold and brews pink to deep ruby.',
    benefits: ['Naturally caffeine-free', 'Refreshing when served cold', 'Contains plant antioxidants', 'Often sweetened with honey'],
    brew: { temp: 'Cold steep, or simmer gently', time: 'Several hours cold, or 10 min simmered', amount: '1 tbsp dried berries / 250 ml' },
    tags: ['afternoon', 'fruity', 'caffeine-free', 'korean'],
    quizScore: { morning: 0, afternoon: 3, evening: 1, focus: 1, relax: 1, energy: 1, caffeine: -3, noCaffeine: 3, warm: 1, cold: 3 }
  },
  {
    id: 'lapacho', name: 'Lapacho (Pau d\'Arco) Tea', emoji: '🌳', origin: 'South America (Brazil, Paraguay, Argentina)', color: '#8a4a30',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['earthy', 'vanilla-like', 'cocoa notes', 'mellow'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'A tisane from the inner bark of the lapacho tree, which grows in South American rainforests. It brews reddish-brown with an earthy taste and a mild vanilla and cocoa aroma, and is usually simmered.',
    benefits: ['Naturally caffeine-free', 'Mellow and earthy', 'Traditional South American drink', 'Good hot or iced'],
    brew: { temp: '100 °C (simmer)', time: '10–15 min', amount: '1 tbsp bark / 250 ml' },
    tags: ['afternoon', 'evening', 'caffeine-free', 'traditional'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 0, caffeine: -3, noCaffeine: 3, warm: 3, cold: 1 }
  },
  {
    id: 'yuja-cha', name: 'Yuja Tea (Korean Citron Tea)', emoji: '🍋', origin: 'Korea', color: '#e0a830',
    caffeine: 'none', caffeineLabel: 'Caffeine-free',
    flavor: ['citrus', 'sweet', 'honeyed', 'bittersweet peel'],
    bestTimes: ['morning', 'afternoon', 'when sick'],
    desc: 'A Korean drink made by curing citron (yuja) in honey and sugar syrup until it looks like marmalade. A spoonful stirred into hot water makes a sweet, citrusy cup, and it is popular when you feel a cold coming on.',
    benefits: ['Naturally caffeine-free', 'Soothing and warming', 'Bright citrus flavour', 'Also lovely iced'],
    brew: { temp: '90–100 °C', time: 'Stir until dissolved', amount: '1–2 tbsp preserve / 250 ml' },
    tags: ['morning', 'sweet', 'citrusy', 'caffeine-free'],
    quizScore: { morning: 2, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 1, caffeine: -3, noCaffeine: 3, warm: 3, cold: 2 }
  }
];

// Only teas where a real product page was fetched (price, size, vendor, url, image all seen).
const STORE_DATA_NEW = {
  'uva-highlands':         { price: 12.00, unit: '113g loose (4 oz tin)', store: 'Harney & Sons', url: 'https://www.harney.com/products/uva-highlands',          image: 'https://www.harney.com/cdn/shop/products/Cup_Shots_UVA_Highlands.jpg' },
  'lovers-leap':           { price: 13.00, unit: '113g loose (4 oz tin)', store: 'Harney & Sons', url: 'https://www.harney.com/products/lover-s-leap-group',     image: 'https://www.harney.com/cdn/shop/products/Cup_Shots_Lovers_Leap.jpg' },
  'jin-jun-mei':           { price: 38.00, unit: '57g loose (2 oz tin)',  store: 'Harney & Sons', url: 'https://www.harney.com/products/jin-jun-mei',            image: 'https://www.harney.com/cdn/shop/products/JIN_JUN_MEI_TIN.jpg' },
  'malawi-black-treasure': { price: 11.00, unit: '57g loose (2 oz tin)',  store: 'Harney & Sons', url: 'https://www.harney.com/products/malawi-black-treasure',  image: 'https://www.harney.com/cdn/shop/files/2024_Cup_Shots_Malawi_Black_Treasure.jpg' },
  'rwandan-rukeri':        { price: 10.00, unit: '113g loose (4 oz tin)', store: 'Harney & Sons', url: 'https://www.harney.com/products/rwandan-rukeri',         image: 'https://www.harney.com/cdn/shop/files/2026_Cup_Shots_Rwandan_Rukeri.jpg' },
  'yaupon-black':          { price: 11.00, unit: '57g loose (2 oz tin)',  store: 'Harney & Sons', url: 'https://www.harney.com/products/yaupon-black',           image: 'https://www.harney.com/cdn/shop/products/2022_Cup_Shots_Yaupon_Black.jpg' },
  'guayusa':               { price:  9.00, unit: '57g loose (2 oz tin)',  store: 'Harney & Sons', url: 'https://www.harney.com/products/guayusa',                image: 'https://www.harney.com/cdn/shop/products/Cup_Shots_Guayusa.jpg' },
  'kangra-kahwa':          { price: 15.00, unit: '85g loose (3 oz tin)',  store: 'Harney & Sons', url: 'https://www.harney.com/products/kangra-kahwa',           image: 'https://www.harney.com/cdn/shop/products/Loose_4OZ_Kangra_Kahwa.jpg' },
  'gunpowder-green':       { price: 14.00, unit: '113g loose (4 oz tin)', store: 'Harney & Sons', url: 'https://www.harney.com/products/organic-gunpowder-1',    image: 'https://www.harney.com/cdn/shop/products/Cup_Shots_Gunpowder_Green_a801b2d3-48eb-451f-908c-161d019fa6b4.jpg' },
  'taiping-houkui':        { price: 22.00, unit: '28g loose (1 oz bag)',  store: 'Harney & Sons', url: 'https://www.harney.com/products/taiping-houkui',         image: 'https://www.harney.com/cdn/shop/products/TAIPING_HOUKUI.jpg' },
  'wenshan-baozhong':      { price: 40.00, unit: '57g loose (2 oz bag)',  store: 'Harney & Sons', url: 'https://www.harney.com/products/wenshan-baozhong',       image: 'https://www.harney.com/cdn/shop/files/2026_Loose_2OZ_Bag_Wenshan_Baozhong_38-3565-1_44435.jpg' },
  'hunan-island-green':    { price: 24.00, unit: '43g loose (1.5 oz tin)', store: 'Harney & Sons', url: 'https://www.harney.com/products/hunan-island-green',    image: 'https://www.harney.com/cdn/shop/files/2026_Loose_1.5OZ_Hunan_Island_Green_38-2720_LS0126.jpg' },
  'honeybush':             { price: 11.50, unit: '113g loose (4 oz tin)', store: 'Harney & Sons', url: 'https://www.harney.com/products/pure-wild-honeybush',    image: 'https://www.harney.com/cdn/shop/products/Cup_Shots_Pure_Wild_Honeybush.jpg' },
  'linden-tilleul':        { price: 12.00, unit: '28g loose (1 oz tin)',  store: 'Harney & Sons', url: 'https://www.harney.com/products/tilleul-linden-tea',     image: 'https://www.harney.com/cdn/shop/products/Cup_Shots_Tilleul.jpg' },
  'soba-cha':              { price: 11.00, unit: '113g loose (4 oz tin)', store: 'Harney & Sons', url: 'https://www.harney.com/products/soba-roasted-buckwheat', image: 'https://www.harney.com/cdn/shop/files/Soba_Roasted_Buckwheat_Mood.jpg' }
};
