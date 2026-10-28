'use strict';
// Store data — real product links, images, prices, unit sizes.
// Teas without confirmed data show a search fallback link.
const STORE_DATA = {
  // ── HIGH CAFFEINE ──────────────────────────────────────────────────────────
  matcha: { price: 34.00, unit: '57g loose (2 oz tin)', store: 'Adagio Teas', url: 'https://www.adagio.com/matcha/matcha.html', image: 'https://www.adagio.com/images5/products/matcha.jpg' },
  gyokuro: { price: 34.00, unit: '113g loose (4 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/green/gyokuro.html', image: 'https://www.adagio.com/images5/products/gyokuro.jpg' },
  blacktea: { price: 12.00, unit: '57g loose (2 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/black/english_breakfast_tea.html', image: 'https://www.adagio.com/images5/products/english_breakfast.jpg' },
  assam: { price: 14.00, unit: '57g loose (2 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/black/assam_harmony_tea.html', image: 'https://www.adagio.com/images5/products/assam_harmony.jpg' },
  ceylon: { price: 9.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/black/ceylon_sonata_tea.html', image: 'https://www.adagio.com/images5/products/ceylon_sonata.jpg' },
  lapsang: { price: 10.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/black/lapsang_souchong_tea.html', image: 'https://www.adagio.com/images5/products/lapsang_souchong.jpg' },
  'english-breakfast': { price: 12.00, unit: '57g loose (2 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/black/english_breakfast_tea.html', image: 'https://www.adagio.com/images5/products/english_breakfast.jpg' },
  'irish-breakfast': { price: 9.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/black/irish_breakfast_tea.html', image: 'https://www.adagio.com/images5/products/irish_breakfast.jpg' },
  keemun: { price: 24.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/black/keemun_rhapsody_tea.html', image: 'https://www.adagio.com/images5/products/keemun_rhapsody.jpg' },
  'yunnan-gold': { price: 14.00, unit: '42g loose (1.5 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/black/yunnan_gold_tea.html', image: 'https://www.adagio.com/images5/products/yunnan_gold.jpg' },
  'golden-monkey': { price: 14.00, unit: '57g loose (2 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/black/golden_monkey_tea.html', image: 'https://www.adagio.com/images5/products/golden_monkey.jpg' },

  // ── HIGH CAFFEINE — OOLONG ─────────────────────────────────────────────────
  tieguanyin: { price: 16.00, unit: '57g loose (2 oz)', store: 'Red Blossom Tea', url: 'https://www.redblossomtea.com/products/daily-tieguanyin', image: 'https://cdn.shopify.com/s/files/1/1563/7149/products/ANX_MonkeyPickedTieguanyin_1.jpg' },
  dahongpao: { price: 19.00, unit: '57g loose (2 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/oolong/wuyi_da_hong_pao.html', image: 'https://www.adagio.com/images5/products/wuyi_da_hong_pao.jpg' },
  'dan-cong': { price: 12.00, unit: '42g loose (1.5 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/oolong/dancong_aria.html', image: 'https://www.adagio.com/images5/products/dancong_aria.jpg' },
  'oriental-beauty': { price: 49.00, unit: '57g loose (2 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/oolong/hsinchu_oriental_beauty.html', image: 'https://www.adagio.com/images5/products/hsinchu_oriental_beauty.jpg' },
  oolong: { price: 8.00, unit: '57g loose (2 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/oolong/formosa.html', image: 'https://www.adagio.com/images5/products/formosa.jpg' },

  // ── MEDIUM CAFFEINE ────────────────────────────────────────────────────────
  darjeeling: { price: 14.00, unit: '113g loose (4 oz tin)', store: 'Harney & Sons', url: 'https://www.harney.com/products/darjeeling', image: 'https://cdn.shopify.com/s/files/1/1234/1342/products/Cup_Shots_Darjeeling.jpg' },
  'second-darjeeling': { price: 40.00, unit: '100g loose', store: 'Rishi Tea', url: 'https://www.rishi-tea.com/products/darjeeling-second-flush-pussimbing-dj58', image: 'https://cdn.shopify.com/s/files/1/0645/3788/6970/files/Rishi-TeaCircle-PSSSFDJ65100-RP.jpg' },
  earltrey: { price: 9.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/black/earl_grey_bravo_tea.html', image: 'https://www.adagio.com/images5/products/earl_grey_bravo.jpg' },
  longjing: { price: 29.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/green/dragonwell.html', image: 'https://www.adagio.com/images5/products/dragonwell.jpg' },
  biluochun: { price: 24.00, unit: '57g loose (2 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/green/pi_lo_chun.html', image: 'https://www.adagio.com/images5/products/pi_lo_chun.jpg' },
  genmaicha: { price: 14.00, unit: '113g loose (4 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/green/genmai_cha.html', image: 'https://www.adagio.com/images5/products/genmai_cha.jpg' },
  'jin-xuan': { price: 34.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/oolong/milk_oolong_tea.html', image: 'https://www.adagio.com/images5/products_index/milk_oolong.jpg' },

  // ── LOW CAFFEINE — BASIC GREENS & WHITES ──────────────────────────────────
  green: { price: 12.00, unit: '113g loose (4 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/green/gunpowder.html', image: 'https://www.adagio.com/images5/products/gunpowder.jpg' },
  whitetea: { price: 13.00, unit: '42g loose (1.5 oz tin)', store: 'Harney & Sons', url: 'https://www.harney.com/products/mutan-white', image: 'https://cdn.shopify.com/s/files/1/1234/1342/products/Cup_Shots_Mutan_White.jpg' },
  'shou-mei': { price: 8.00, unit: '42g loose (1.5 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/white/white_pear.html', image: 'https://www.adagio.com/images5/products/white_pear.jpg' },
  'apple-green': { price: 10.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/green/autumn_mist_green.html', image: 'https://www.adagio.com/images5/products/autumn_mist_green.jpg' },
  'korean-green': { price: 13.00, unit: '57g loose (2 oz tin)', store: 'Harney & Sons', url: 'https://www.harney.com/products/jeju-sejak', image: 'https://cdn.shopify.com/s/files/1/1234/1342/products/Cup_Shots_11_17_2017_Sejak.jpg' },
  'honeydew-green': { price: 10.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/green/melonberry_green.html', image: 'https://www.adagio.com/images5/products/melonberry_green.jpg' },

  // ── MEDIUM CAFFEINE — FLAVORED GREENS ─────────────────────────────────────
  'blueberry-green': { price: 10.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/green/blueberry_peach_cobbler_green.html', image: 'https://www.adagio.com/images5/products/blueberry_peach_cobbler_green.jpg' },
  'peach-green': { price: 10.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/green/calypso_green.html', image: 'https://www.adagio.com/images5/products/calypso_green.jpg' },
  'strawberry-green': { price: 10.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/green/cherry_green.html', image: 'https://www.adagio.com/images5/products/cherry_green.jpg' },

  // ── LOW CAFFEINE ───────────────────────────────────────────────────────────
  sencha: { price: 15.00, unit: '113g loose (4 oz tin)', store: 'Harney & Sons', url: 'https://www.harney.com/products/japanese-sencha', image: 'https://cdn.shopify.com/s/files/1/1234/1342/products/Cup_Shots_Japanese_Sencha.jpg' },
  hojicha: { price: 8.00, unit: '57g loose (2 oz tin)', store: 'Harney & Sons', url: 'https://www.harney.com/products/hojicha', image: 'https://cdn.shopify.com/s/files/1/1234/1342/products/Cup_Shots_Hojicha.jpg' },
  jasmine: { price: 9.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/green/jasmine.html', image: 'https://www.adagio.com/images5/products/jasmine.jpg' },
  kukicha: { price: 18.00, unit: '113g loose (4 oz tin)', store: 'Harney & Sons', url: 'https://www.harney.com/products/kukicha-tea', image: 'https://cdn.shopify.com/s/files/1/1234/1342/files/2026_Cup_Shots_Kukicha.jpg' },
  'mango-green': { price: 10.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/green/mango_green.html', image: 'https://www.adagio.com/images5/products/mango_green.jpg' },
  'vanilla-green': { price: 10.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/green/vanilla_green.html', image: 'https://www.adagio.com/images5/products/vanilla_green.jpg' },
  'dragon-pearl': { price: 24.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/green/dragon_pearl.html', image: 'https://www.adagio.com/images5/products/dragon_pearl.jpg' },
  'raspberry-green': { price: 10.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/green/raspberry_green.html', image: 'https://www.adagio.com/images5/products/raspberry_green.jpg' },
  'lychee-green': { price: 10.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/green/lychee_rose_green.html', image: 'https://www.adagio.com/images5/products/lychee_rose_green.jpg' },
  'orange-green': { price: 10.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/green/citron_green.html', image: 'https://www.adagio.com/images5/products/citron_green.jpg' },
  'mint-green-blend': { price: 10.00, unit: '57g loose (2 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/green/citrus_mint_green.html', image: 'https://www.adagio.com/images5/products/citrus_mint_green.jpg' },
  'rose-green': { price: 10.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/green/lychee_rose_green.html', image: 'https://www.adagio.com/images5/products/lychee_rose_green.jpg' },
  'silver-needle': { price: 36.00, unit: '57g loose (2 oz tin)', store: 'Harney & Sons', url: 'https://www.harney.com/products/chinese-silver-needle', image: 'https://cdn.shopify.com/s/files/1/1234/1342/files/2026_Cup_Shots_Chinese_Silver_Needle.jpg' },
  'bai-mu-dan': { price: 8.00, unit: '28g loose (1 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/white/white_peony.html', image: 'https://www.adagio.com/images5/products/white_peony.jpg' },
  'blueberry-white': { price: 8.00, unit: '42g loose (1.5 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/white/white_blueberry.html', image: 'https://www.adagio.com/images5/products/white_blueberry.jpg' },
  'cherry-white': { price: 8.00, unit: '42g loose (1.5 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/white/white_strawberry.html', image: 'https://www.adagio.com/images5/products/white_strawberry.jpg' },
  'passionfruit-white': { price: 8.00, unit: '42g loose (1.5 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/white/white_tropics.html', image: 'https://www.adagio.com/images5/products/white_tropics.jpg' },
  'pomegranate-white': { price: 8.00, unit: '42g loose (1.5 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/white/white_eternal_spring.html', image: 'https://www.adagio.com/images5/products/white_eternal_spring.jpg' },

  // ── CAFFEINE FREE ──────────────────────────────────────────────────────────
  chamomile: { price: 7.00, unit: '42g loose (1.5 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/herbal/chamomile.html', image: 'https://www.adagio.com/images5/products/chamomile.jpg' },
  peppermint: { price: 7.00, unit: '42g loose (1.5 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/herbal/peppermint.html', image: 'https://www.adagio.com/images5/products/peppermint.jpg' },
  spearmint: { price: 7.00, unit: '42g loose (1.5 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/herbal/spearmint.html', image: 'https://www.adagio.com/images5/products/spearmint.jpg' },
  ginger: { price: 10.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/herbal/double_ginger.html', image: 'https://www.adagio.com/images5/products/double_ginger.jpg' },
  rooibos: { price: 8.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/rooibos/rooibos.html', image: 'https://www.adagio.com/images5/products/rooibos.jpg' },
  turmeric: { price: 9.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/herbal/turmeric_bliss.html', image: 'https://www.adagio.com/images5/products/turmeric_bliss.jpg' },
  lemongrass: { price: 7.00, unit: '42g loose (1.5 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/herbal/lemon_grass.html', image: 'https://www.adagio.com/images5/products/lemon_grass.jpg' },
  lavender: { price: 9.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/herbal/lavender_lemon.html', image: 'https://www.adagio.com/images5/products/lavender_lemon.jpg' },

  // ── BATCH 1: OOLONGS, JAPANESE GREENS, SPECIALTY BLACKS, WHITES ───────────
  alishan: { price: 31.00, unit: '57g loose (2 oz)', store: 'Red Blossom Tea', url: 'https://www.redblossomtea.com/products/alishan-spring', image: 'https://cdn.shopify.com/s/files/1/1563/7149/files/FRM_Alishan_1_4ace5ea0-5dfa-46ee-ba14-48e8e546d1e7.jpg' },
  'dong-ding': { price: 34.00, unit: '57g loose (2 oz tin)', store: 'Harney & Sons', url: 'https://www.harney.com/products/dong-ding-light', image: 'https://cdn.shopify.com/s/files/1/1234/1342/products/dongdinglight_base.jpg' },
  'gaba-oolong': { price: 43.75, unit: '125g loose packet', store: 'Upton Tea Imports', url: 'https://www.uptontea.com/products/formosa-gaba-oolong', image: 'https://cdn.shopify.com/s/files/1/0597/5208/7615/files/V00258.jpg' },
  'anji-baicha': { price: 42.00, unit: '57g loose (2 oz tin)', store: 'Harney & Sons', url: 'https://www.harney.com/products/anji-baicha', image: 'https://cdn.shopify.com/s/files/1/1234/1342/products/Cup_Shots_Anji_Baicha.jpg' },
  fukamushi: { price: 34.00, unit: '125g loose packet', store: 'Upton Tea Imports', url: 'https://www.uptontea.com/products/fukamushi-cha-organic', image: 'https://cdn.shopify.com/s/files/1/0597/5208/7615/files/V00197.jpg' },
  kabusecha: { price: 27.75, unit: '125g loose packet', store: 'Upton Tea Imports', url: 'https://www.uptontea.com/products/kagoshima-kabuse-sencha', image: 'https://cdn.shopify.com/s/files/1/0597/5208/7615/files/V00215.jpg' },
  bancha: { price: 10.00, unit: '113g loose (4 oz tin)', store: 'Harney & Sons', url: 'https://www.harney.com/products/bancha', image: 'https://cdn.shopify.com/s/files/1/1234/1342/files/2026_Cup_Shots_Bancha.jpg' },
  'liu-an': { price: 11.00, unit: '50g loose', store: 'Yunnan Sourcing', url: 'https://www.yunnansourcing.com/products/liu-an-gua-pian-melon-seed-green-tea-from-anhui', image: 'https://cdn.shopify.com/s/files/1/0586/9817/products/MG_3952.JPG' },
  'kenyan-black': { price: 9.00, unit: '113g loose (4 oz tin)', store: 'Harney & Sons', url: 'https://www.harney.com/products/kenya-milima-tea', image: 'https://cdn.shopify.com/s/files/1/1234/1342/products/Cup_Shots_Kenya_Milima.jpg' },
  'ilam-black': { price: 18.50, unit: '100g loose packet', store: 'Upton Tea Imports', url: 'https://www.uptontea.com/products/siddha-devi-estate-2026-sftgfop1-sd-47-nepal', image: 'https://cdn.shopify.com/s/files/1/0597/5208/7615/files/TM109.jpg' },
  'java-black': { price: 7.75, unit: '125g loose packet', store: 'Upton Tea Imports', url: 'https://www.uptontea.com/products/java-bop-blend', image: 'https://cdn.shopify.com/s/files/1/0597/5208/7615/files/V00089.jpg' },
  'lychee-black': { price: 18.00, unit: '113g loose (4 oz)', store: 'Red Blossom Tea', url: 'https://www.redblossomtea.com/products/lychee-black', image: 'https://cdn.shopify.com/s/files/1/1563/7149/products/SCN_LycheeBlack_1.jpg' },
  'mango-black': { price: 11.00, unit: '113g loose (4 oz tin)', store: 'Harney & Sons', url: 'https://www.harney.com/products/mango-black', image: 'https://cdn.shopify.com/s/files/1/1234/1342/products/Cup_Shots_Mango_Black.jpg' },
  'masala-chai': { price: 10.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/chai/masala_chai_tea.html', image: 'https://www.adagio.com/images5/products_index/masala_chai.jpg' },
  'ceylon-white': { price: 38.50, unit: '30g loose packet', store: 'Upton Tea Imports', url: 'https://www.uptontea.com/products/ceylon-silver-tips-white-tea', image: 'https://cdn.shopify.com/s/files/1/0597/5208/7615/files/V00841.jpg' },
  'moonlight-white': { price: 11.25, unit: '57g loose (2 oz sampler bag)', store: 'Davidson\'s Organics', url: 'https://www.davidsonstea.com/products/moonlight_white_loose_leaf', image: 'https://cdn.shopify.com/s/files/1/0584/2950/5671/files/R9442.jpg' },

  // ── BATCH 2: MORE BLACKS, GREENS, PUERH, SPECIALTY ────────────────────────
  nilgiri: { price: 10.00, unit: '85g loose (3 oz tin)', store: 'Harney & Sons', url: 'https://www.harney.com/products/chamraj-nilgiri-fop', image: 'https://cdn.shopify.com/s/files/1/1234/1342/files/2025_Cup_Shots_Chamraj_Nilgiri_FOP.jpg' },
  'orange-pekoe': { price: 15.00, unit: '113g loose (4 oz tin)', store: 'Harney & Sons', url: 'https://www.harney.com/products/orange-pekoe-ceylon-india', image: 'https://cdn.shopify.com/s/files/1/1234/1342/products/Cup_Shots_Ceylon_India.jpg' },
  'peach-black': { price: 13.75, unit: '100g loose packet', store: 'Upton Tea Imports', url: 'https://www.uptontea.com/products/peach-black-tea-with-fruit-pieces', image: 'https://cdn.shopify.com/s/files/1/0597/5208/7615/files/V00642.jpg' },
  puerh: { price: 13.00, unit: '113g loose (4 oz tin)', store: 'Harney & Sons', url: 'https://www.harney.com/products/pu-erh', image: 'https://cdn.shopify.com/s/files/1/1234/1342/products/Cup_Shots_Pu-Erh.jpg' },
  'puerh-sheng': { price: 25.00, unit: '57g loose (2 oz)', store: 'Red Blossom Tea', url: 'https://www.redblossomtea.com/products/jingmai-raw-puerh', image: 'https://cdn.shopify.com/s/files/1/1563/7149/products/JingmaiShengPu-erh2019_1.jpg' },
  'purple-tea': { price: 21.00, unit: '80g loose packet', store: 'Upton Tea Imports', url: 'https://www.uptontea.com/products/kenya-purple-leaf-tea', image: 'https://cdn.shopify.com/s/files/1/0597/5208/7615/files/V01190.jpg' },
  'rou-gui': { price: 28.00, unit: '42g loose (1.5 oz tin)', store: 'Harney & Sons', url: 'https://www.harney.com/products/rou-gui-oolong', image: 'https://cdn.shopify.com/s/files/1/1234/1342/products/Cup_Shots_Rou_Gui_Oolong.jpg' },
  'russian-caravan': { price: 11.00, unit: '100g loose packet', store: 'Upton Tea Imports', url: 'https://www.uptontea.com/products/original-blend-russian-caravan', image: 'https://cdn.shopify.com/s/files/1/0597/5208/7615/files/V00093.jpg' },
  shincha: { price: 35.00, unit: '100g loose', store: 'Rishi Tea', url: 'https://www.rishi-tea.com/products/maruka-shincha-shizukaori', image: 'https://cdn.shopify.com/s/files/1/0645/3788/6970/files/Tea-Circle_Maruka-Shincha-Shizukaori_MSHIOKAORI100-RP_2026.jpg' },
  'sun-moon-lake': { price: 38.00, unit: '60g loose packet', store: 'Upton Tea Imports', url: 'https://www.uptontea.com/products/sun-moon-lake-tea-ruby-18', image: 'https://cdn.shopify.com/s/files/1/0597/5208/7615/files/V01188.jpg' },
  tamaryokucha: { price: 29.00, unit: '50g loose packet', store: 'Upton Tea Imports', url: 'https://www.uptontea.com/products/tamaryokucha-organic', image: 'https://cdn.shopify.com/s/files/1/0597/5208/7615/files/v00565.jpg' },
  'white-monkey-paw': { price: 9.00, unit: '42g loose (1.5 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/green/white_monkey.html', image: 'https://www.adagio.com/images5/products/white_monkey.jpg' },
  yerbamate: { price: 9.00, unit: '85g loose (3 oz)', store: 'Adagio Teas', url: 'https://www.adagio.com/herbal/yerba_mate.html', image: 'https://www.adagio.com/images5/products_index/yerba_mate.jpg' },
  'yunnan-ancient': { price: 8.50, unit: '50g loose', store: 'Yunnan Sourcing', url: 'https://www.yunnansourcing.com/products/old-varietal-lao-shu-dian-hong-feng-qing-black-tea', image: 'https://cdn.shopify.com/s/files/1/0586/9817/products/DSC_8086_a26b4c14-87bb-480b-9dd5-3e34493cc5f9.JPG' },
  'yunnan-white': { price: 6.25, unit: '50g loose', store: 'Yunnan Sourcing', url: 'https://www.yunnansourcing.com/products/yunnan-yue-guang-bai-air-dried-white-tea', image: 'https://cdn.shopify.com/s/files/1/0586/9817/products/thumb1_d19ce128-e23f-49f7-a1a3-458d6880c88e.jpg' },

  // ── BATCH 3: CAFFEINE-FREE HERBALS ────────────────────────────────────────
  butterfly: { price: 33.00, unit: '142g loose (5 oz bag)', store: 'Harney & Sons', url: 'https://www.harney.com/products/butterfly-pea-flower', image: 'https://cdn.shopify.com/s/files/1/1234/1342/products/Cup_Shots_Butterfly_Pea_Flower.jpg' },
  chrysanthemum: { price: 16.00, unit: '57g loose (2 oz)', store: 'Red Blossom Tea', url: 'https://www.redblossomtea.com/products/chrysanthemum-buds', image: 'https://cdn.shopify.com/s/files/1/1563/7149/products/TIS_Chrysanthemum_1.jpg' },
  elderflower: { price: 16.00, unit: '57g loose (2 oz)', store: 'Red Blossom Tea', url: 'https://www.redblossomtea.com/products/elderflower', image: 'https://cdn.shopify.com/s/files/1/1563/7149/products/TIS_Elderflower_1.jpg' },
  fennel: { price: 6.49, unit: '54g seed (1.9 oz jar)', store: 'The Spice House', url: 'https://www.thespicehouse.com/products/fennel-seeds', image: 'https://cdn.shopify.com/s/files/1/0148/1945/9126/products/jcs0CBnvfiSNsOLzeUJJ_K_gimzdYO_QamGdDMuRujGazajYU3DWzv1jzDR-uFoKxojFpis_X_4_w615-h615.jpg' },
  hibiscus: { price: 9.00, unit: '125g loose packet', store: 'Upton Tea Imports', url: 'https://www.uptontea.com/products/hibiscus-loose-leaf-herbal-tea', image: 'https://cdn.shopify.com/s/files/1/0597/5208/7615/files/V00035.jpg' },
  'lemon-ginger': { price: 9.00, unit: '100g loose packet', store: 'Upton Tea Imports', url: 'https://www.uptontea.com/products/lemon-ginger-blend-organic', image: 'https://cdn.shopify.com/s/files/1/0597/5208/7615/files/V00024.jpg' },
  moringa: { price: 13.00, unit: '170g loose (6 oz bag)', store: 'Harney & Sons', url: 'https://www.harney.com/products/moringa-leaf', image: 'https://cdn.shopify.com/s/files/1/1234/1342/products/Cup_Shots_Moringa_Leaf_2020.jpg' },
  rose: { price: 16.00, unit: '57g loose (2 oz)', store: 'Red Blossom Tea', url: 'https://www.redblossomtea.com/products/rose-buds', image: 'https://cdn.shopify.com/s/files/1/1563/7149/products/TIS_RoseBuds_1_2022.jpg' },
  rosehip: { price: 11.25, unit: '125g loose packet', store: 'Upton Tea Imports', url: 'https://www.uptontea.com/products/rose-hips', image: 'https://cdn.shopify.com/s/files/1/0597/5208/7615/files/V00034.jpg' },
  tulsi: { price: 19.75, unit: '40g loose packet', store: 'Upton Tea Imports', url: 'https://www.uptontea.com/products/rama-tulsi-holy-basil', image: 'https://cdn.shopify.com/s/files/1/0597/5208/7615/files/V01155.jpg' },
};
