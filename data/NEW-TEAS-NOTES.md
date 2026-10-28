# New teas: sources and open questions

22 new entries in `data/new-teas.js` (high 6, medium 5, low 5, none 6). 15 have store data in `STORE_DATA_NEW`, all from Harney & Sons product pages fetched during research (price, size, url and image all read from the page). The other 7 have no store entry on purpose.

General notes that apply to every entry:

- Caffeine ranges are general per-cup ranges, not lab values for each product. Source for the ranges by type: search summary of https://thewhistlingkettle.com/blogs/wellness/caffeine-content-in-teas-what-types-have-the-highest-lowest (black 40-60 or 60-90 mg, green 25-45, oolong 30-50, white 15-30, dark tea 60-90, guayusa 40-70 per 8 oz). Caffeine varies a lot with leaf and brewing. Labels were set to match the wording style and ranges the app already uses.
- Brew amounts (for example "2 g / 240 ml") are generic. Harney pages give temperature and time but not leaf amounts, so amounts follow the app's existing style and are not from a product page.
- Price on the Harney pages can include sale prices. Where a sale price was shown, the regular price was recorded (see Malawi and Linden below).
- The tool that read the pages summarises them, so image urls were taken from the summary with the `?v=...&width=...` tail removed, as in the existing STORE_DATA entries.

## High caffeine

### uva-highlands (Sri Lanka)
- https://www.harney.com/products/uva-highlands : 4 oz tin $12.00, 212 F, 4-5 min, honey, citrus and wintergreen notes, highland winds, image Cup_Shots_UVA_Highlands.jpg
- https://ratetea.com/tea/harney/uva-highlands/8220/ (search result, wintergreen/methyl salicylate description)
- Unsure: nothing major. 1 lb bag also exists ($30.00), only the tin is recorded.

### lovers-leap (Sri Lanka, Nuwara Eliya)
- https://www.harney.com/products/lover-s-leap-group : 4 oz tin $13.00, 212 F, 4-5 min, "mild", dried orange peel and grapefruit rind, light-bodied.
- Unsure: this is a Ceylon black like the existing `ceylon` entry, but a distinct high-grown region and estate style, so it was kept.

### jin-jun-mei (China, Wuyishan)
- https://www.harney.com/products/jin-jun-mei : 2 oz tin $38.00, 212 F, 5 min, earthy and savoury with dark chocolate finish, medium-bodied.
- https://www.tealyra.com/loose-tea/black-tea/supreme-jin-jun-mei-golden-eyebrow and https://bellocqtea.com/products/jin-jun-mei (search result only, pages returned 403 when fetched).
- Unsure: not the same as the existing `golden-monkey` or `yunnan-gold`, but all are golden-tip black teas. The Harney page calls this a more affordable take on the traditional style. Brew amount not from a source.

### malawi-black-treasure (Malawi)
- https://www.harney.com/products/malawi-black-treasure : Satemwa estate, Bvumbwe cultivar, honeyed toast and stone fruit, 212 F, 5 min. 2 oz tin showed a sale price of $7.70, regular $11.00 (recorded $11.00).
- Unsure: sale price may have ended.

### rwandan-rukeri (Rwanda)
- https://www.harney.com/products/rwandan-rukeri : 4 oz tin $10.00, 208 F, 5 min, toasty and caramelised, full-bodied.
- Unsure: caffeine range is the standard black tea range, the page only says "caffeinated".

### temi-sikkim (India, Sikkim) - NO store entry
- https://en.wikipedia.org/wiki/Sikkim_tea (Temi garden founded 1969, first flush golden with light floral finish, later flushes fuller)
- https://rareteacompany.com/en-us/products/sikkim-first-flush-black-tea (search result only, the page content could not be read)
- Unsure: brew settings are typical for a light black tea, not from a product page. No product page with price was fetched.

## Medium caffeine

### yaupon-black (USA, Texas)
- https://www.harney.com/products/yaupon-black : 2 oz tin $11.00, 208 F, 5 min, light maple syrup, smoky and sweet.
- Caffeine 40-60 mg per 8 oz from a search summary of yaupon sources (one seller quoted 25-60). Only US native caffeinated plant: search summary of https://flagpole.com/food/good-growing/2026/05/06/yaupon-holly-is-the-native-plant-with-a-caffeinated-boost/
- Unsure: the app has no yaupon entry, but the 40-60 mg range sits at the top of "medium" next to some "high" teas.

### guayusa (Ecuador)
- https://www.harney.com/products/guayusa : 2 oz tin $9.00, 212 F, 5 min, grassy and herbaceous, Kichwa tradition, holly family, not Camellia sinensis. Page gives no mg figure.
- https://www.caffeineinformer.com/caffeine-content/guayusa-tea (search result: 41 mg per 8 oz cup, other sources up to 90 mg; EU report 19.8-57.7 mg per 100 ml)
- Unsure: caffeine is widely quoted; 40-70 mg was used. Could be argued as high.

### kangra-kahwa (India, Himachal Pradesh)
- https://www.harney.com/products/kangra-kahwa : 3 oz tin $15.00, 175 F, 4 min. Page says the base is Himachal black tea with cinnamon, cardamom, cloves, safflower and almond flavour, inspired by a Kashmiri beverage.
- Unsure: traditional kashmiri kahwa is often made with green tea (search result), but this Harney product uses a black tea base, so the entry describes it as a blend inspired by kahwa. Caffeine range is a general estimate for a spiced black tea.

### shui-xian (China, Wuyi)
- https://en.wikipedia.org/wiki/Shui_Xian : Wuyi Narcissus cultivar, darkest of Wuyi oolongs, roasted, deep amber, brew 90-100 C.
- https://www.teasource.com/blogs/beyond-the-leaf/wuyi-rocks (search result, rock tea character)
- No store entry. Brew amounts (gongfu style 5 g / 100 ml) are the usual practice, not from a single product page. The Wikipedia page gave no caffeine data, range is the general oolong range.

### liu-bao (China, Guangxi)
- https://yunnansourcing.com/ pages (search results only): fermented heicha from Wuzhou area, wet-piled like ripe pu-erh, basket aging. https://www.tealyra.com/loose-tea/puerh-tea/liu-bao-dark/ returned 403.
- No store entry.
- Unsure: caffeine. One source says dark tea is similar to black (60-90 mg), others say fermented teas are lower. 30-50 mg was chosen to match the existing `puerh` entry (medium). Treat with caution. Brew settings are typical for dark tea, not from a product page.

## Low caffeine

### gunpowder-green (China, Zhejiang)
- https://www.harney.com/products/organic-gunpowder-1 : 4 oz tin $14.00, 175 F, 2-3 min, charred and slightly smoky ("grilled leeks"). Origin on page is just "China"; Zhejiang comes from the Adagio page snippet https://www.adagio.com/green/gunpowder.html (search result).
- Unsure: the Harney product is the organic version.

### taiping-houkui (China, Anhui)
- https://www.harney.com/products/taiping-houkui : 1 oz bag $22.00, 175 F, 3 min, green beans and a hint of lemon, large leaves stretched flat.

### wenshan-baozhong (Taiwan)
- https://www.harney.com/products/wenshan-baozhong : 2 oz loose bag $40.00, 175 F, 3 min, honeyed flowers, gardenia, jasmine, butter. Made by the Cheng family. Pinglin location from the page.
- Unsure: caffeine range. Light oolong is often quoted lower than darker oolong, 25-35 mg is an estimate. Near-duplicates: `alishan`, `jin-xuan` and `dong-ding` are different Taiwanese oolongs, so this was kept.

### hunan-island-green (China, Hunan)
- https://www.harney.com/products/hunan-island-green : 1.5 oz tin $24.00, 175 F, 2-3 min, soft, vegetal, zucchini-like, MaiDuishi Island.

### kamairicha (Japan, Kyushu) - NO store entry
- https://en.wikipedia.org/wiki/Kamairicha and https://matsukazetea.com/products/miyazaki-organic-kamairicha-tokusen-loose-tea (80-85 C, 1.5-2 min, 7 g per 250-300 ml, sweet roasted soybean aroma, less astringent than sencha).
- Not given a store entry because the only product page found was priced in Canadian dollars.
- Caffeine not stated on the page, range is the general green tea range.

## Caffeine-free

### honeybush (South Africa)
- https://www.harney.com/products/pure-wild-honeybush : 4 oz tin $11.50, 212 F, 5 min, toasted grain and dark honey, wild fynbos northeast of Cape Town.
- Near-duplicate check: existing `rooibos` is a related plant but a different taste, so honeybush was kept.

### linden-tilleul (France)
- https://www.harney.com/products/tilleul-linden-tea : 1 oz tin shown at $9.60 on sale from $12.00 (recorded $12.00), 212 F, 5 min, light and woodsy like chamomile, Provence. Page mentions mild digestive and sleep benefits.
- Unsure: sale price may have ended.

### soba-cha (Japan / China / Korea)
- https://www.harney.com/products/soba-roasted-buckwheat : 4 oz tin $11.00, 212 F, 5 min, toasty and nutty, caffeine-free.
- https://japanesetaste.com/products/sobacha-buckwheat-tea-roasted-loose-caffeine-free-tea-120g (search result, kuqiao in China).
- Unsure: origin shows three countries because buckwheat tea is made in all three, Harney only says "traditional Japanese specialty". Existing `barley-tea` is a different grain.

### omija-cha (Korea) - NO store entry
- https://en.wikipedia.org/wiki/Omija-cha (five flavours, served hot or cold, boiled gently with honey added) and https://rishi-tea.com/schisandra-berry (search result, naturally caffeine-free, cold brewed).
- Unsure: brew amount and time are typical home-prep values, not from one source. Health claims were left out on purpose.

### lapacho (South America) - NO store entry
- Search results only: https://www.paperandtea.com/blogs/glossary/lapacho-tea, https://thee.be/en/shop/loose-leaf-tea/infusions/lapacho-tea/ (inner bark, reddish-brown, earthy, vanilla and cocoa aroma, caffeine-free, simmered).
- Unsure: brew amount and time are typical, not from a source.

### yuja-cha (Korea) - NO store entry
- https://saveur.com/article/kitchen/korean-yuja-cha and https://www.tastekoreanfood.com/recipes/korean-citron-tea-yuja-cha (search results: citron cured in honey and sugar, a heaping tablespoon in hot water).
- A Walmart listing (DAMTUH, about $13.99) appeared in search results only. It was not fetched, so there is no store entry.
- Unsure: this is a sweet preserve, not leaves. It has added sugar, which the description mentions.

## Considered and rejected as duplicates or not buyable

- Ripe pu-erh (shou): existing `puerh` already covers it.
- Shan Tuyet Vietnamese black tea: no verified buyable product found.
- Argentine black tea: market is mostly bulk CTC for blends, no loose-leaf product found.
- Cascara (coffee cherry tea): search found no real tea product page, only cascara sagrada bark, which is a different thing.
- Jin Jun Mei vs Golden Monkey / Yunnan Gold: kept, see above.
- Lapsang / Zhengshan Xiaozhong: duplicate of `lapsang`.
- Keemun Hao Ya: duplicate of `keemun`.
- Mate cocido, tereré: duplicate of `yerbamate`.
- Mugicha / boricha (barley): duplicate of `barley-tea`.
- Chrysanthemum, rose, hibiscus, tulsi: already present.
- Thai tea, teh tarik, boba, matcha latte style drinks: already in the recipes data.
- Kashmiri pink tea (noon chai): no product or reliable page was checked.
