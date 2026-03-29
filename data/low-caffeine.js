'use strict';
// BATCH 3 — LOW CAFFEINE (20 teas)
const TEAS_LOW = [
  {
    id: 'green', name: 'Green Tea', emoji: '🌿', origin: 'China / Japan', color: '#5a9e6f',
    caffeine: 'low', caffeineLabel: 'Low (25–30 mg/cup)',
    flavor: ['fresh', 'grassy', 'light', 'slightly sweet'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Unoxidized tea leaves that retain a fresh, grassy character. Green tea is one of the most studied teas, linked to wide-ranging health benefits and gentle, clean energy.',
    benefits: ['High in EGCG antioxidants', 'Supports brain function', 'May lower cholesterol', 'Gentle energy boost'],
    brew: { temp: '70–80 °C', time: '2–3 min', amount: '2 g / 200 ml' },
    tags: ['morning', 'afternoon', 'antioxidant', 'light'],
    quizScore: { morning: 2, afternoon: 2, evening: -1, focus: 2, relax: 1, energy: 1, caffeine: 1, noCaffeine: -1, warm: 2, cold: 1 }
  },
  {
    id: 'sencha', name: 'Sencha', emoji: '🍃', origin: 'Japan', color: '#4d9e5a',
    caffeine: 'low', caffeineLabel: 'Low (20–30 mg/cup)',
    flavor: ['grassy', 'vegetal', 'slightly sweet', 'refreshing'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Japan\'s most popular tea, produced by steaming fresh leaves immediately after harvest. Sencha has a vibrant green colour and a clean, refreshing sharpness unlike Chinese green teas.',
    benefits: ['High in catechins', 'Improves concentration', 'Supports immune health', 'Refreshing and hydrating'],
    brew: { temp: '70–75 °C', time: '1–2 min', amount: '2–3 g / 200 ml' },
    tags: ['morning', 'afternoon', 'japanese', 'antioxidant'],
    quizScore: { morning: 2, afternoon: 2, evening: 0, focus: 2, relax: 1, energy: 1, caffeine: 1, noCaffeine: -1, warm: 2, cold: 1 }
  },
  {
    id: 'hojicha', name: 'Hojicha', emoji: '🍁', origin: 'Japan', color: '#9c5c2a',
    caffeine: 'low', caffeineLabel: 'Low (7–15 mg/cup)',
    flavor: ['roasted', 'nutty', 'caramel', 'smoky'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'Green tea leaves roasted at high heat, turning them brown and dramatically reducing caffeine. The result is a warm, toasty cup with notes of caramel and wood — perfect for evenings.',
    benefits: ['Very low caffeine', 'Soothes digestion', 'Reduces stress via pyrazine', 'Gentle and comforting'],
    brew: { temp: '95–100 °C', time: '30 sec–1 min', amount: '3–4 g / 200 ml' },
    tags: ['afternoon', 'evening', 'low-caffeine', 'roasted'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 1, relax: 2, energy: 0, caffeine: 0, noCaffeine: 1, warm: 3, cold: 1 }
  },
  {
    id: 'whitetea', name: 'White Tea', emoji: '🌸', origin: 'China (Fujian)', color: '#d4a8c7',
    caffeine: 'low', caffeineLabel: 'Low (15–30 mg/cup)',
    flavor: ['delicate', 'sweet', 'floral', 'honey-like'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'The least processed of all teas — made from young buds and leaves. White tea has a subtle sweetness and high antioxidant content, perfect for those who appreciate gentle, elegant flavours.',
    benefits: ['Highest antioxidant content of all teas', 'Anti-aging properties', 'Supports skin health', 'Gentle on digestion'],
    brew: { temp: '70–75 °C', time: '3–5 min', amount: '2–3 g / 200 ml' },
    tags: ['morning', 'afternoon', 'antioxidant', 'delicate'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 1, relax: 2, energy: 1, caffeine: 1, noCaffeine: 0, warm: 2, cold: 1 }
  },
  {
    id: 'jasmine', name: 'Jasmine Tea', emoji: '🌺', origin: 'China', color: '#b5d47c',
    caffeine: 'low', caffeineLabel: 'Low (25–35 mg/cup)',
    flavor: ['floral', 'sweet', 'light', 'fragrant'],
    bestTimes: ['afternoon'],
    desc: 'Green or white tea scented with fresh jasmine blossoms. The mesmerising aroma provides a gentle mood lift, while the low caffeine keeps things mellow — an afternoon essential.',
    benefits: ['Mood-boosting aroma', 'Antioxidant-rich', 'Reduces stress', 'Supports digestion'],
    brew: { temp: '70–80 °C', time: '2–3 min', amount: '2 g / 200 ml' },
    tags: ['afternoon', 'floral', 'mood', 'light'],
    quizScore: { morning: 1, afternoon: 3, evening: 1, focus: 1, relax: 2, energy: 1, caffeine: 1, noCaffeine: 0, warm: 2, cold: 1 }
  },
  {
    id: 'kukicha', name: 'Kukicha (Twig Tea)', emoji: '🪵', origin: 'Japan', color: '#b8a870',
    caffeine: 'low', caffeineLabel: 'Very Low (5–15 mg/cup)',
    flavor: ['nutty', 'creamy', 'woody', 'slightly sweet'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'A uniquely Japanese tea made from the stems, stalks, and twigs pruned from green tea bushes. Very low in caffeine and high in calcium, kukicha has a distinctive nutty, creamy character unlike any leaf tea.',
    benefits: ['Very low caffeine', 'High in calcium', 'Alkaline — balances acidity', 'Gentle and easy to digest'],
    brew: { temp: '80–90 °C', time: '2–3 min', amount: '3 g / 200 ml' },
    tags: ['afternoon', 'evening', 'japanese', 'low-caffeine'],
    quizScore: { morning: 0, afternoon: 2, evening: 2, focus: 0, relax: 2, energy: 0, caffeine: 0, noCaffeine: 1, warm: 2, cold: 1 }
  },
  {
    id: 'silver-needle', name: 'Silver Needle (Bai Hao Yinzhen)', emoji: '🪡', origin: 'China (Fuding, Fujian)', color: '#c8c0b0',
    caffeine: 'low', caffeineLabel: 'Low (15–25 mg/cup)',
    flavor: ['honey-sweet', 'delicate', 'floral', 'subtly fruity'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'The most prized white tea in the world — made only from the silvery, unopened buds of the Fuding Dahao cultivar. Exceptionally delicate and honey-sweet, each sip feels like sipping morning dew.',
    benefits: ['Highest antioxidant content of any white tea', 'Anti-aging polyphenols', 'Very gentle caffeine', 'Rare and premium'],
    brew: { temp: '70–75 °C', time: '5–7 min', amount: '3–4 g / 200 ml' },
    tags: ['morning', 'afternoon', 'premium', 'white tea'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 1, relax: 2, energy: 1, caffeine: 0, noCaffeine: 1, warm: 2, cold: 1 }
  },
  {
    id: 'shou-mei', name: 'Shou Mei (Longevity Eyebrow)', emoji: '🧓', origin: 'China (Fujian)', color: '#b89060',
    caffeine: 'low', caffeineLabel: 'Low (15–30 mg/cup)',
    flavor: ['fruity', 'woody', 'slightly earthy', 'full-bodied'],
    bestTimes: ['afternoon'],
    desc: 'A full-bodied white tea made from larger, older leaves. More robust and darker than Silver Needle or White Peony, with a fruity, slightly woody character. Often aged to develop even more complexity.',
    benefits: ['More body than other white teas', 'Ages well', 'Rich in antioxidants', 'Gentle caffeine'],
    brew: { temp: '80–85 °C', time: '3–5 min', amount: '3 g / 200 ml' },
    tags: ['afternoon', 'white tea', 'aged', 'full-bodied'],
    quizScore: { morning: 1, afternoon: 2, evening: 1, focus: 1, relax: 2, energy: 1, caffeine: 0, noCaffeine: 1, warm: 2, cold: 1 }
  },
  {
    id: 'apple-green', name: 'Apple Green Tea', emoji: '🍏', origin: 'Global blend (green tea base)', color: '#78c870',
    caffeine: 'low', caffeineLabel: 'Low (20–25 mg/cup)',
    flavor: ['crisp apple', 'sweet', 'fresh', 'clean'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Green tea with natural apple flavour — the crisp sweetness of apple complements green tea\'s freshness beautifully. Light, easy-drinking, and delicious with a touch of honey. Perfect for apple season.',
    benefits: ['Gentle energy', 'Naturally sweet', 'Approachable and refreshing', 'Antioxidant-rich base'],
    brew: { temp: '75–80 °C', time: '2–3 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'afternoon', 'fruity', 'refreshing'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 0, relax: 2, energy: 1, caffeine: 0, noCaffeine: 1, warm: 2, cold: 2 }
  },
  {
    id: 'vanilla-green', name: 'Vanilla Green Tea', emoji: '🍦', origin: 'Global blend (green tea base)', color: '#d4c090',
    caffeine: 'low', caffeineLabel: 'Low (20–25 mg/cup)',
    flavor: ['vanilla', 'smooth', 'sweet', 'creamy'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Smooth green tea enriched with vanilla — the warmth of vanilla rounds out any bitterness, making this one of the most approachable and comforting green teas. A gateway tea for coffee lovers switching to green.',
    benefits: ['Very approachable flavour', 'Gentle caffeine', 'Mood-lifting vanilla aroma', 'Antioxidant-rich'],
    brew: { temp: '75–80 °C', time: '2–3 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'afternoon', 'sweet', 'approachable'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 0, relax: 2, energy: 1, caffeine: 0, noCaffeine: 1, warm: 2, cold: 1 }
  },
  {
    id: 'passionfruit-white', name: 'Passionfruit White Tea', emoji: '🌟', origin: 'Global blend (white tea base)', color: '#e8c840',
    caffeine: 'low', caffeineLabel: 'Low (15–25 mg/cup)',
    flavor: ['tropical', 'tart', 'exotic', 'floral'],
    bestTimes: ['afternoon'],
    desc: 'Delicate white tea scented with tropical passionfruit. Exotic, floral, and lightly tart — this is exceptionally beautiful served iced with a splash of lemon juice. The tropical escapist tea.',
    benefits: ['Light caffeine', 'High in antioxidants', 'Tropical mood lift', 'Refreshing iced'],
    brew: { temp: '70–75 °C', time: '3–5 min', amount: '2 g / 250 ml' },
    tags: ['afternoon', 'fruity', 'tropical', 'iced'],
    quizScore: { morning: 1, afternoon: 2, evening: 1, focus: 0, relax: 2, energy: 1, caffeine: 0, noCaffeine: 1, warm: 1, cold: 3 }
  },
  {
    id: 'pomegranate-white', name: 'Pomegranate White Tea', emoji: '🔴', origin: 'Global blend (white tea base)', color: '#c04060',
    caffeine: 'low', caffeineLabel: 'Low (15–25 mg/cup)',
    flavor: ['tart', 'ruby', 'slightly tangy', 'elegant'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'An antioxidant powerhouse — the tartness of pomegranate and the delicate sweetness of white tea create an elegant, ruby-tinted infusion. Both ingredients are renowned for their anti-aging properties.',
    benefits: ['Double antioxidant hit', 'Rich in ellagic acid', 'Supports cardiovascular health', 'Anti-aging properties'],
    brew: { temp: '70–75 °C', time: '3–4 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'afternoon', 'antioxidant', 'fruity'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 0, relax: 2, energy: 1, caffeine: 0, noCaffeine: 1, warm: 2, cold: 2 }
  },
  {
    id: 'cherry-white', name: 'Cherry White Tea', emoji: '🍒', origin: 'Global blend (white tea base)', color: '#e06070',
    caffeine: 'low', caffeineLabel: 'Low (15–25 mg/cup)',
    flavor: ['cherry', 'sweet', 'delicate', 'slightly tart'],
    bestTimes: ['afternoon'],
    desc: 'White tea with sweet cherry — delicate and lightly sweet with a soft floral character from the white tea base. Like sipping spring in a cup. Beautiful both hot and as a chilled afternoon treat.',
    benefits: ['Antioxidant-rich', 'Light and refreshing', 'Gentle caffeine', 'Mood-lifting cherry aroma'],
    brew: { temp: '70–75 °C', time: '3–5 min', amount: '2 g / 250 ml' },
    tags: ['afternoon', 'fruity', 'delicate', 'refreshing'],
    quizScore: { morning: 1, afternoon: 2, evening: 1, focus: 0, relax: 2, energy: 1, caffeine: 0, noCaffeine: 1, warm: 2, cold: 2 }
  },
  {
    id: 'mango-green', name: 'Mango Green Tea', emoji: '🥭', origin: 'Global blend (green tea base)', color: '#f0a030',
    caffeine: 'low', caffeineLabel: 'Low (20–25 mg/cup)',
    flavor: ['tropical mango', 'sweet', 'fruity', 'fresh'],
    bestTimes: ['afternoon'],
    desc: 'Tropical and refreshing — bright green tea with the golden sweetness of mango. One of the most popular flavoured green teas globally, equally at home served hot in winter or iced over ice in summer.',
    benefits: ['Tropical flavour lift', 'Antioxidant-rich', 'Light caffeine', 'Popular year-round'],
    brew: { temp: '75–80 °C', time: '2–3 min', amount: '2 g / 250 ml' },
    tags: ['afternoon', 'fruity', 'tropical', 'iced'],
    quizScore: { morning: 1, afternoon: 2, evening: 1, focus: 0, relax: 2, energy: 1, caffeine: 0, noCaffeine: 1, warm: 1, cold: 3 }
  },
  {
    id: 'orange-green', name: 'Orange Green Tea', emoji: '🍊', origin: 'Global blend (green tea base)', color: '#e07828',
    caffeine: 'low', caffeineLabel: 'Low (20–25 mg/cup)',
    flavor: ['citrus', 'zesty', 'sweet', 'refreshing'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Green tea brightened with orange peel and natural citrus oils. Zesty, refreshing, and subtly sweet — the citrus oils add an aromatic lift that makes this one of the most invigorating light caffeine teas.',
    benefits: ['Vitamin C from citrus', 'Mood-lifting aroma', 'Refreshing and hydrating', 'Antioxidant-rich'],
    brew: { temp: '75–80 °C', time: '2–3 min', amount: '2 g / 250 ml' },
    tags: ['morning', 'afternoon', 'citrusy', 'refreshing'],
    quizScore: { morning: 2, afternoon: 2, evening: 0, focus: 1, relax: 1, energy: 1, caffeine: 0, noCaffeine: 1, warm: 2, cold: 2 }
  },
  {
    id: 'mint-green-blend', name: 'Mint Green Tea', emoji: '🌬️', origin: 'Global blend (green tea base)', color: '#50c090',
    caffeine: 'low', caffeineLabel: 'Low (15–25 mg/cup)',
    flavor: ['mint', 'cooling', 'grassy', 'refreshing'],
    bestTimes: ['afternoon', 'evening'],
    desc: 'A natural pairing of green tea with spearmint or peppermint leaves. Doubly refreshing — the grassy brightness of green tea meets the bright, cooling freshness of mint for a crisp, invigorating cup.',
    benefits: ['Cooling and refreshing', 'Supports digestion', 'Low caffeine', 'Clears the mind'],
    brew: { temp: '75–80 °C', time: '2–3 min', amount: '2 g green + 1 tsp mint / 250 ml' },
    tags: ['afternoon', 'evening', 'mint', 'refreshing'],
    quizScore: { morning: 1, afternoon: 2, evening: 2, focus: 1, relax: 2, energy: 1, caffeine: 0, noCaffeine: 1, warm: 1, cold: 3 }
  },
  {
    id: 'rose-green', name: 'Rose Green Tea', emoji: '🌷', origin: 'China (flavoured blend)', color: '#e090a0',
    caffeine: 'low', caffeineLabel: 'Low (20–25 mg/cup)',
    flavor: ['floral', 'rose', 'delicate', 'slightly sweet'],
    bestTimes: ['afternoon'],
    desc: 'Delicate green tea scented with rose petals — a Chinese classic. Elegantly floral and subtly sweet, this tea is as beautiful to look at as it is to drink. Wonderful for gifting and self-care rituals.',
    benefits: ['Mood-lifting rose aroma', 'Antioxidant-rich', 'Supports skin health', 'Calming and romantic'],
    brew: { temp: '75–80 °C', time: '2–3 min', amount: '2 g / 200 ml' },
    tags: ['afternoon', 'floral', 'delicate', 'mood'],
    quizScore: { morning: 1, afternoon: 2, evening: 1, focus: 0, relax: 2, energy: 0, caffeine: 0, noCaffeine: 1, warm: 2, cold: 1 }
  },
  {
    id: 'korean-green', name: 'Korean Green Tea (Sejak)', emoji: '🇰🇷', origin: 'South Korea (Boseong)', color: '#5a9868',
    caffeine: 'low', caffeineLabel: 'Low (20–28 mg/cup)',
    flavor: ['sweet', 'clean', 'slightly grassy', 'delicate'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Fine Korean green tea hand-picked in spring (sejak = "bird tongue" leaf size). Similar to Japanese greens but with a slightly sweeter, less astringent character. Korea\'s best teas rival Japan\'s finest.',
    benefits: ['High in catechins', 'Less astringent than Japanese greens', 'Antioxidant-rich', 'Gentle and clean'],
    brew: { temp: '65–70 °C', time: '1–2 min', amount: '2–3 g / 150 ml' },
    tags: ['morning', 'afternoon', 'korean', 'premium'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 2, relax: 1, energy: 1, caffeine: 0, noCaffeine: 1, warm: 2, cold: 1 }
  },
  {
    id: 'honeydew-green', name: 'Honeydew Green Tea', emoji: '🍈', origin: 'Global blend (green tea base)', color: '#a0d890',
    caffeine: 'low', caffeineLabel: 'Low (20–25 mg/cup)',
    flavor: ['honeydew melon', 'sweet', 'light', 'musky'],
    bestTimes: ['afternoon'],
    desc: 'Light green tea with the sweet, musky flavour of honeydew melon. Refreshing and delicately sweet — a popular bubble tea flavour that translates beautifully to a hot cup or iced glass.',
    benefits: ['Gentle caffeine', 'Refreshing and hydrating', 'Popular bubble tea base', 'Approachable flavour'],
    brew: { temp: '75–80 °C', time: '2–3 min', amount: '2 g / 250 ml' },
    tags: ['afternoon', 'fruity', 'sweet', 'iced'],
    quizScore: { morning: 1, afternoon: 2, evening: 1, focus: 0, relax: 2, energy: 1, caffeine: 0, noCaffeine: 1, warm: 1, cold: 3 }
  },
  {
    id: 'blueberry-white', name: 'Blueberry White Tea', emoji: '🫐', origin: 'Global blend (white tea base)', color: '#6868b8',
    caffeine: 'low', caffeineLabel: 'Very Low (10–20 mg/cup)',
    flavor: ['blueberry', 'sweet-tart', 'delicate', 'floral'],
    bestTimes: ['morning', 'afternoon'],
    desc: 'Delicate white tea with sweet blueberry flavour. Very light caffeine and rich in antioxidants from both sources — the white tea base takes on a pretty lavender hue that makes it as beautiful as it is healthy.',
    benefits: ['Double antioxidant hit', 'Very low caffeine', 'Beautiful colour', 'Anti-aging polyphenols'],
    brew: { temp: '70–75 °C', time: '3–5 min', amount: '2–3 g / 250 ml' },
    tags: ['morning', 'afternoon', 'fruity', 'antioxidant'],
    quizScore: { morning: 2, afternoon: 2, evening: 1, focus: 0, relax: 2, energy: 0, caffeine: 0, noCaffeine: 1, warm: 1, cold: 3 }
  }
];
