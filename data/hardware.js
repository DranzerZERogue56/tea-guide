'use strict';
// HARDWARE: fun tea brewing tools. Prices are regular prices seen on the product pages (USD).
const HARDWARE = [
  // ---------- KETTLES ----------
  {
    id: 'adagio-glass-water-kettle', name: 'Adagio Glass Water Kettle', emoji: '🫖', category: 'kettles',
    tagline: 'See your water bubble, on any stove',
    desc: 'A 60 oz borosilicate glass kettle with a stainless steel lid. It works on gas, electric and ceramic stovetops and goes in the dishwasher.',
    bestFor: ['Any tea', 'Herbal tea'],
    funFact: '',
    tips: ['Watch the bubbles to guess the temperature: tiny bubbles mean gentle heat for green tea', 'Do not fill it past the max line, so hot water cannot spit out'],
    priceRange: '$40',
    shops: [{ store: 'Adagio Teas', url: 'https://www.adagio.com/teaware/water_kettle.html', price: 39 }]
  },
  {
    id: 'adagio-varietea-kettle', name: 'Adagio varieTEA Kettle', emoji: '🌡️', category: 'kettles',
    tagline: 'Press a button, get the right temperature',
    desc: 'An electric kettle with four preset temperatures (150, 165, 180 and 195 F) plus boiling at 212 F. It holds 57 oz and keeps water warm for 60 minutes.',
    bestFor: ['Green tea', 'White tea', 'Oolong'],
    funFact: '',
    tips: ['Use 165 to 180 F for green tea so it stays sweet, not bitter', 'Use the 212 F setting for black tea and herbal blends'],
    priceRange: '$75',
    shops: [{ store: 'Adagio Teas', url: 'https://www.adagio.com/teaware/varieTEA_kettle.html', price: 74 }]
  },
  {
    id: 'fellow-stagg-ekg', name: 'Fellow Stagg EKG Kettle', emoji: '✨', category: 'kettles',
    tagline: 'The kettle you will want on your counter',
    desc: 'A 0.9 L electric gooseneck kettle where you pick any temperature from 104 to 212 F. The thin spout gives a slow, steady pour.',
    bestFor: ['Green tea', 'Matcha', 'Pour-over style tea'],
    funFact: '',
    tips: ['Set it a few degrees under your target, then let it settle for a moment', 'Pour in slow circles when brewing in a dripper'],
    priceRange: '$200',
    shops: [{ store: 'Fellow', url: 'https://fellowproducts.com/products/stagg-ekg-electric-pour-over-kettle', price: 199.95 }]
  },
  {
    id: 'zojirushi-ve-hybrid', name: 'Zojirushi VE Hybrid Water Boiler', emoji: '♨️', category: 'kettles',
    tagline: 'An always-ready hot water tap for tea lovers',
    desc: 'A 4 L water boiler and warmer that holds water at 160, 175, 195 or 208 F. A button dispenses hot water, and it is made in Japan.',
    bestFor: ['Gongfu tea', 'Green tea', 'Households that drink lots of tea'],
    funFact: '',
    tips: ['Pick the 175 F keep-warm setting for green tea', 'Descale it from time to time so the water tastes clean'],
    priceRange: '$305',
    shops: [{ store: 'Zojirushi', url: 'https://store.zojirushi.com/products/cvjac', price: 304.99 }]
  },

  // ---------- INFUSERS ----------
  {
    id: 'adagio-folding-infuser', name: 'Adagio Folding Infuser', emoji: '🧺', category: 'infusers',
    tagline: 'One basket that fits almost any mug',
    desc: 'A stainless steel mesh basket with hinged arms that stretch from 2.75 to 5.5 inches. It folds flat for travel and goes in the dishwasher.',
    bestFor: ['Black tea', 'Green tea', 'Oolong'],
    funFact: '',
    tips: ['Fill it only about halfway so leaves have room to open up', 'Lift it out when the time is up so the tea does not turn bitter'],
    priceRange: '$14',
    shops: [{ store: 'Adagio Teas', url: 'https://www.adagio.com/teaware/folding_infuser.html', price: 14 }]
  },
  {
    id: 'harney-permanent-tea-filter', name: 'Harney & Sons Permanent Tea Filter', emoji: '🌿', category: 'infusers',
    tagline: 'A reusable filter instead of paper',
    desc: 'A reusable stainless steel fine-mesh filter that fits most standard mugs and teapots. It is easy to rinse and use again.',
    bestFor: ['Loose-leaf black tea', 'Herbal tea'],
    funFact: '',
    tips: ['Rinse it right after use so leaves do not dry onto the mesh', 'Tap used leaves out into the compost, not down the sink'],
    priceRange: '$13',
    shops: [{ store: 'Harney & Sons', url: 'https://www.harney.com/products/harney-permanent-tea-filter-medium', price: 12.95 }]
  },
  {
    id: 'forlife-curve-mug-infuser', name: 'ForLife Curve Mug with Infuser', emoji: '☕', category: 'infusers',
    tagline: 'A mug, a basket and a lid, all in one',
    desc: 'A 15 oz ceramic mug with a fine stainless steel infuser and a lid. The lid flips over to hold the wet infuser.',
    bestFor: ['Office tea', 'Black tea', 'Herbal tea'],
    funFact: '',
    tips: ['Keep the lid on while steeping to hold in the heat', 'Flip the lid over and rest the infuser on it when done'],
    priceRange: '$33',
    shops: [{ store: 'Harney & Sons', url: 'https://www.harney.com/products/forlife-curve-mug-with-infuser-15-oz', price: 33.25 }]
  },
  {
    id: 'fred-purr-tea-cat-infuser', name: 'Fred Purr Tea Cat Infuser', emoji: '🐱', category: 'infusers',
    tagline: 'A cat that hangs on your cup and steeps tea',
    desc: 'A cat-shaped infuser made of silicone and rubber. Its paws grip the cup rim, and it is top-rack dishwasher safe.',
    bestFor: ['Black tea', 'Herbal tea'],
    funFact: '',
    tips: ['Fill the body with loose tea through the opening, then drop it in the cup', 'Pick larger leaf teas so little bits do not slip through the holes'],
    priceRange: '$15',
    shops: [{ store: 'Little Red Hen', url: 'https://www.littleredhen.org/collections/tea/products/fred-and-friends-tea-infuser-purr-tea', price: 14.99 }]
  },

  // ---------- BREWERS ----------
  {
    id: 'adagio-ingenuitea', name: 'Adagio ingenuiTEA Teapot', emoji: '🫗', category: 'brewers',
    tagline: 'Steep, set it on your cup, tea pours out',
    desc: 'A 16 oz Tritan teapot with a steel filter basket and a valve at the bottom. Set it on a mug and the tea drains while leaves stay inside.',
    bestFor: ['Beginners', 'Black tea', 'Green tea'],
    funFact: '',
    tips: ['Try about 3 minutes for green tea and 5 for black tea', 'Let the pot drain fully before you lift it off the cup'],
    priceRange: '$24',
    shops: [{ store: 'Adagio Teas', url: 'https://www.adagio.com/teaware/ingenuiTEA_teapot.html', price: 24 }]
  },
  {
    id: 'yunnan-sourcing-white-gaiwan', name: 'Classic White Porcelain Gaiwan', emoji: '🍵', category: 'brewers',
    tagline: 'The classic lidded cup for gongfu tea',
    desc: 'A plain white porcelain gaiwan in 60 ml or 90 ml. Customers say the lid fits well, and it comes with a saucer.',
    bestFor: ['Oolong', 'Pu-erh', 'Gongfu tea'],
    funFact: '',
    tips: ['Use lots of leaf and short steeps, a few seconds at first', 'Hold the lid slightly open with your thumb to strain as you pour'],
    priceRange: '$7',
    shops: [{ store: 'Yunnan Sourcing', url: 'https://yunnansourcing.com/products/classic-white-porcelain-gaiwan-with-yunnan-sourcing-logo', price: 7.25 }]
  },
  {
    id: 'teabloom-classica-glass-teapot', name: 'Teabloom Classica Glass Teapot', emoji: '🌸', category: 'brewers',
    tagline: 'A clear pot that shows off blooming tea',
    desc: 'A 40 oz borosilicate glass teapot with a removable laser-cut infuser. It is rated stovetop safe and dishwasher safe.',
    bestFor: ['Blooming tea', 'Jasmine tea', 'Sharing'],
    funFact: '',
    tips: ['Take the infuser out to watch a blooming tea flower open', 'Warm the glass first with a little hot water'],
    priceRange: '$25',
    shops: [{ store: 'Teabloom', url: 'https://www.teabloom.com/classica-glass-teapot-with-removable-infuser.html', price: 24.95 }]
  },
  {
    id: 'hario-jumping-leaf-teapot', name: 'Hario Jumping Leaf Tea Pot', emoji: '🍃', category: 'brewers',
    tagline: 'Watch the leaves dance as they steep',
    desc: 'A 600 ml heatproof glass teapot made in Japan. The strainer sits in the lid, so leaves move freely and are caught as you pour.',
    bestFor: ['Green tea', 'Sencha', 'Whole-leaf tea'],
    funFact: '',
    tips: ['Use water that is a little under boiling for green teas', 'Hand wash the lid and strainer gently'],
    priceRange: '$23',
    shops: [{ store: 'Hario USA', url: 'https://www.hario-usa.com/products/jumping-leaf-tea-pot-with-stainless-steel-filter', price: 22.5 }]
  },
  {
    id: 'hario-mizudashi-cold-brew', name: 'Hario Mizudashi Cold Brew Tea Pot', emoji: '🧊', category: 'brewers',
    tagline: 'Fill it, chill it, sip it the next day',
    desc: 'A 1200 ml heatproof glass bottle with a fine mesh strainer, made in Japan. Add tea and cold water, then leave it in the fridge for 3 to 6 hours.',
    bestFor: ['Cold brew green tea', 'Iced tea', 'Fruit tea'],
    funFact: '',
    tips: ['Start with 3 hours, then taste and steep longer if you want more', 'Drink within a day or two and keep it in the fridge'],
    priceRange: '$29',
    shops: [{ store: 'Eight Ounce Coffee', url: 'https://eightouncecoffee.com/products/hario-mizudashi-cold-brewer-tea-pot-1200ml-41oz', price: 28.99 }]
  },
  {
    id: 'adagio-velocitea', name: 'Adagio velociTEA Tea Maker', emoji: '🤖', category: 'brewers',
    tagline: 'A countertop machine that brews for you',
    desc: 'An automatic brewer that heats the water, circulates it through a leaf basket, then keeps the tea warm for up to 60 minutes. It has presets for black, green, white, oolong, chai and herbal.',
    bestFor: ['Busy mornings', 'Black tea', 'Herbal tea'],
    funFact: '',
    tips: ['Use the descaling tablets that come with it every so often', 'Use the heat-only button when you just want hot water'],
    priceRange: '$99',
    shops: [{ store: 'Adagio Teas', url: 'https://www.adagio.com/teaware/velociTEA.html', price: 99 }]
  },

  // ---------- MATCHA ----------
  {
    id: 'adagio-matcha-whisk', name: 'Adagio Bamboo Matcha Whisk', emoji: '🌀', category: 'matcha',
    tagline: 'The little bamboo brush that makes the foam',
    desc: 'A bamboo chasen with 80 prongs. Whisk matcha and hot water in an M shape until it turns light and foamy.',
    bestFor: ['Matcha', 'Beginners'],
    funFact: '',
    tips: ['Wet the whisk in warm water for about 30 seconds before using', 'Hand wash and let it air dry'],
    priceRange: '$14',
    shops: [{ store: 'Adagio Teas', url: 'https://www.adagio.com/teaware/matcha_accessories.html', price: 14 }]
  },
  {
    id: 'adagio-matcha-bowl-moss', name: 'Adagio Matcha Bowl, Moss', emoji: '🍵', category: 'matcha',
    tagline: 'A wide bowl with room to whisk',
    desc: 'A 16 oz ceramic matcha bowl, 4.5 inches wide, with a blue and olive glaze. It is dishwasher safe.',
    bestFor: ['Matcha', 'Usucha'],
    funFact: '',
    tips: ['Warm the bowl with hot water before you start', 'Use the wide base to whisk without splashing'],
    priceRange: '$24',
    shops: [{ store: 'Adagio Teas', url: 'https://www.adagio.com/teaware/matcha_bowls_moss.html', price: 24 }]
  },
  {
    id: 'hario-chasen-stand-bowl', name: 'Hario Chasen Stand Bowl', emoji: '🏺', category: 'matcha',
    tagline: 'Wake up your whisk, then let it dry',
    desc: 'A heatproof glass holder where you soak your chasen in warm water, then stand it upright to dry. It also stacks on top of Hario double-walled matcha cups.',
    bestFor: ['Matcha'],
    funFact: '',
    tips: ['Standing the whisk upright helps the prongs keep their shape', 'Empty the water out after soaking'],
    priceRange: '$35',
    shops: [{ store: 'Hario USA', url: 'https://www.hario-usa.com/products/chasen-stand', price: 35 }]
  },
  {
    id: 'ippodo-tea-strainer-chakoshi', name: 'Ippodo Tea Strainer (Chakoshi)', emoji: '🥣', category: 'matcha',
    tagline: 'Sift out the lumps for a silky bowl',
    desc: 'A fine stainless steel matcha sifter that comes with a bowl to catch the powder. It has the Ippodo seal on the handle.',
    bestFor: ['Matcha'],
    funFact: '',
    tips: ['Press the powder through with the back of a spoon', 'Sift right before whisking for the smoothest foam'],
    priceRange: '$32',
    shops: [{ store: 'Ippodo Tea', url: 'https://ippodotea.com/products/tea-strainer-chakoshi', price: 32 }]
  },

  // ---------- TOOLS ----------
  {
    id: 'harney-perfect-tea-scoop', name: 'Harney "A Perfect Cup" Tea Scoop', emoji: '🥄', category: 'tools',
    tagline: 'One scoop, one good cup',
    desc: 'A stainless steel scoop that measures one teaspoon of loose tea. It also works as a normal measuring teaspoon.',
    bestFor: ['Loose-leaf tea', 'Beginners'],
    funFact: '',
    tips: ['Fluffy teas like white tea may need a heaping scoop', 'Weigh your first few cups to learn what a scoop is for each tea'],
    priceRange: '$9',
    shops: [{ store: 'Harney & Sons', url: 'https://www.harney.com/products/perfect-tea-spoon', price: 8.95 }]
  },
  {
    id: 'tea-hourglass-sand-timer', name: 'Tea Hourglass Sand Timer (3 and 5 min)', emoji: '⏳', category: 'tools',
    tagline: 'A tiny hourglass that keeps tea honest',
    desc: 'A sand timer that measures 3 minutes on one side, for green and oolong, and 5 minutes on the other, for black and herbal tea. It is about 4 by 5 inches.',
    bestFor: ['Green tea', 'Black tea'],
    funFact: '',
    tips: ['Flip it the moment the hot water hits the leaves', 'Write your favorite times on a sticky note nearby'],
    priceRange: '$15',
    shops: [{ store: 'Newby Teas', url: 'https://www.newbyteas.com/en-us/products/tea-hourglass-sand-timer', price: 15 }]
  },
  {
    id: 'yunnan-sourcing-glass-cha-hai', name: 'Clear Glass Cha Hai Serving Pitcher', emoji: '🫙', category: 'tools',
    tagline: 'The fairness cup that shares the tea evenly',
    desc: 'A 350 ml clear glass pitcher. You pour the whole brew into it, then share from it so every cup tastes the same.',
    bestFor: ['Gongfu tea', 'Oolong', 'Pu-erh'],
    funFact: '',
    tips: ['Warm it before use because cold glass can crack from hot tea', 'Pour from the side if the spout dribbles'],
    priceRange: '$6',
    shops: [{ store: 'Yunnan Sourcing', url: 'https://yunnansourcing.com/products/clear-glass-cha-hai-serving-pitcher-for-gong-fu-cha-350ml', price: 5.75 }]
  },
  {
    id: 'yunnan-sourcing-mini-bamboo-tray', name: 'Mini Bamboo Tray for Pu-erh Cakes', emoji: '🪵', category: 'tools',
    tagline: 'A tiny tray that catches tea crumbs',
    desc: 'A 13 by 13 cm bamboo tray with an open corner. It catches the leaves while you pry apart a small pu-erh cake, and you can scoop them straight into your pot.',
    bestFor: ['Pu-erh cakes', 'Gongfu tea'],
    funFact: '',
    tips: ['Always point the pick away from your body', 'It suits cakes and bricks under about 200 g'],
    priceRange: '$5',
    shops: [{ store: 'Yunnan Sourcing', url: 'https://yunnansourcing.com/products/mini-bamboo-tray-for-chiseling-away-at-your-pu-erh-tea-cake-13x13x2cm', price: 4.75 }]
  },
  {
    id: 'sandalwood-pu-erh-pick', name: 'Sandalwood Pick for Pu-erh Cakes', emoji: '📌', category: 'tools',
    tagline: 'A tiny pick for breaking up tea cakes',
    desc: 'A stainless steel pick set in a sandalwood handle, about 15 cm long. A screw in the middle lets the pick store inside the handle.',
    bestFor: ['Pu-erh cakes'],
    funFact: '',
    tips: ['Work from the edge and pry off thin layers rather than stabbing the middle', 'Put the pick away inside the handle so it is safe'],
    priceRange: '$7',
    shops: [{ store: 'Yunnan Sourcing USA', url: 'https://yunnansourcing.us/products/sandalwood-pick-for-prying-apart-pu-erh-tea-cakes', price: 6.5 }]
  },
  {
    id: 'hario-v60-drip-scale', name: 'Hario V60 Drip Scale', emoji: '⚖️', category: 'tools',
    tagline: 'A scale with a timer for exact recipes',
    desc: 'A small scale that reads to 0.1 g up to 200 g and holds up to 2000 g, with a built-in timer. It is not water resistant.',
    bestFor: ['Gongfu tea', 'Cold brew', 'Matcha'],
    funFact: '',
    tips: ['Keep it dry and away from splashes', 'Weigh leaf and water to repeat a brew you loved'],
    priceRange: '$60',
    shops: [{ store: 'Hario USA', url: 'https://www.hario-usa.com/products/v60-drip-scale', price: 60 }]
  },

  // ---------- FUN ----------
  {
    id: 'yunnan-sourcing-frog-watermelon-tea-pet', name: 'Frog on a Watermelon Tea Pet', emoji: '🐸', category: 'fun',
    tagline: 'A clay friend who sprays water',
    desc: 'A small Yixing clay tea pet, 7.5 cm long and 6 cm tall. You pour tea over it during your session, and it can spray water from its mouth.',
    bestFor: ['Gongfu tea', 'Tea table fun'],
    funFact: 'Reviewers say it sprays water if you dip it while warm.',
    tips: ['Pour a little leftover tea over it each session', 'Use it only with the same kind of tea over time, as clay can soak up flavor'],
    priceRange: '$13',
    shops: [{ store: 'Yunnan Sourcing', url: 'https://yunnansourcing.com/products/yixing-clay-tea-mascot-frog-on-a-watermelon-statue', price: 12.75 }]
  },
  {
    id: 'bia-teapot-tea-bag-holder', name: 'BIA Teapot Tea Bag Holder', emoji: '🫖', category: 'fun',
    tagline: 'A tiny teapot for your wet tea bag',
    desc: 'A porcelain dish shaped like a teapot, about 5 by 3.5 inches. It holds a used tea bag and is dishwasher safe.',
    bestFor: ['Tea bags', 'Office desks'],
    funFact: '',
    tips: ['It also holds lemon wedges and sugar packets', 'Keep it beside the kettle so drips stay off the counter'],
    priceRange: '$5',
    shops: [{ store: 'Tarzian West', url: 'https://tarzianwest.com/products/tea-bag-rest-white', price: 4.99 }]
  },
  {
    id: 'adagio-activitea-2', name: 'Adagio activiTEA 2 Tumbler', emoji: '🥤', category: 'fun',
    tagline: 'A glass tumbler that brews on the go',
    desc: 'A double-walled borosilicate glass tumbler with a steel infuser and a handle. It comes in 12 oz and 17 oz and also works for cold brew.',
    bestFor: ['Commutes', 'Iced tea', 'Loose-leaf tea'],
    funFact: '',
    tips: ['Pull out the infuser when the tea is ready', 'Let the glass cool a bit before you carry it by hand'],
    priceRange: '$19 to $24',
    shops: [{ store: 'Adagio Teas', url: 'https://www.adagio.com/teaware/activiTEA_2.html', price: 19 }]
  },
  {
    id: 'harney-travette-tea-maker', name: 'Harney & Sons Travette Tea Maker', emoji: '🧳', category: 'fun',
    tagline: 'A travel flask with a built-in infuser',
    desc: 'A 27 oz vacuum-insulated stainless steel brewer with a removable infuser basket. The wide opening takes ice cubes, so it works for iced tea too.',
    bestFor: ['Travel', 'Hot or iced tea'],
    funFact: '',
    tips: ['Do not put it on a stovetop', 'Take the basket out after steeping so tea does not over-brew'],
    priceRange: '$39',
    shops: [{ store: 'Harney & Sons', url: 'https://www.harney.com/products/harney-sons-travette', price: 39 }]
  },
  {
    id: 'ember-mug', name: 'Ember Heated Smart Mug', emoji: '🔥', category: 'fun',
    tagline: 'A mug that keeps tea at your chosen warmth',
    desc: 'A heated mug you set from 120 to 145 F with an app. The 14 oz size lists at about $150, and it runs from a charging coaster.',
    bestFor: ['Slow sippers', 'Black tea', 'Herbal tea'],
    funFact: '',
    tips: ['Set it a little lower for delicate teas so they do not stay too hot', 'Use the lid to make the battery last longer away from the coaster'],
    priceRange: '$150',
    shops: [{ store: 'Ember', url: 'https://ember.com/collections/ember-mugs/products/ember-mug-2', price: 149.95 }]
  }
];
