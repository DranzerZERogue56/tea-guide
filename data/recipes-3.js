'use strict';
// BATCH 7 — ICED DRINKS (Recipes 41–51)
const RECIPES_3 = [
  {
    id: 'iced-matcha-latte', name: 'Iced Matcha Oat Milk Latte', emoji: '💚',
    category: 'iced', mood: ['energizing'],
    baseTea: 'matcha', baseTeaName: 'Ceremonial Matcha',
    liquid: 'Iced Oat Milk', liquidEmoji: '🧊',
    desc: 'Ceremonial matcha whisked silky smooth, poured over ice and cold oat milk. Clean energy, no jitters — the perfect iced pick-me-up any time of day.',
    difficulty: 'Easy', time: '5 min', servings: 1,
    additives: ['oat-milk', 'honey', 'vanilla'],
    ingredients: ['1.5 tsp ceremonial matcha', '60 ml hot water (75 °C)', '200 ml cold oat milk', '1 tsp honey', '¼ tsp vanilla extract', 'Ice cubes'],
    steps: ['Sift matcha into a bowl to remove clumps.', 'Whisk with 60 ml of 75 °C water until smooth and frothy.', 'Stir in honey and vanilla until dissolved.', 'Fill a tall glass with ice.', 'Pour cold oat milk over the ice.', 'Slowly pour the matcha concentrate over the milk for a layered look. Stir before drinking.'],
    tip: 'Use a bamboo whisk (chasen) for the smoothest matcha — a milk frother works as a close second.'
  },
  {
    id: 'iced-brown-sugar-milk-tea', name: 'Iced Brown Sugar Milk Tea', emoji: '🟤',
    category: 'iced', mood: ['energizing'],
    baseTea: 'assam', baseTeaName: 'Assam Black Tea',
    liquid: 'Iced Whole Milk', liquidEmoji: '🧊',
    desc: 'Strong Assam black tea poured over caramel-rich brown sugar syrup and cold milk. Bold, sweet, and deeply satisfying — a bubble-tea-shop classic made at home.',
    difficulty: 'Easy', time: '10 min', servings: 1,
    additives: ['milk', 'brown-sugar', 'vanilla'],
    ingredients: ['2 tsp Assam black tea', '150 ml boiling water', '200 ml cold whole milk', '2 tbsp brown sugar', '1 tbsp water', '¼ tsp vanilla extract', 'Ice cubes'],
    steps: ['Brew Assam tea in 150 ml boiling water for 4 minutes. Strain and cool.', 'Make brown sugar syrup: dissolve brown sugar in 1 tbsp water over low heat for 2 minutes until thick. Stir in vanilla and cool.', 'Pour brown sugar syrup into the bottom of a glass.', 'Add ice cubes.', 'Pour cold milk over the ice.', 'Top with the cooled black tea. Swirl lightly before drinking.'],
    tip: 'Drizzle a little extra brown sugar syrup up the inside of the glass before adding ice for a tiger-stripe effect.'
  },
  {
    id: 'iced-hibiscus-mint-lemonade', name: 'Iced Hibiscus Mint Lemonade', emoji: '🌺',
    category: 'iced', mood: ['relaxing'],
    baseTea: 'hibiscus', baseTeaName: 'Hibiscus',
    liquid: 'Iced Water', liquidEmoji: '🧊',
    desc: 'Tart, ruby-red hibiscus tea shaken with fresh mint and lemon juice over crushed ice. Naturally caffeine-free, packed with Vitamin C, and strikingly beautiful in the glass.',
    difficulty: 'Easy', time: '15 min + chill', servings: 2,
    additives: ['honey', 'lemon', 'mint-fresh'],
    ingredients: ['3 tbsp dried hibiscus petals', '500 ml boiling water', 'Juice of 1 lemon', '2 tbsp honey', '10 fresh mint leaves', 'Crushed ice'],
    steps: ['Steep hibiscus in boiling water for 8 minutes.', 'Strain into a jug and stir in honey while warm.', 'Allow to cool to room temperature then refrigerate for 30 minutes.', 'Fill glasses with crushed ice and mint leaves.', 'Stir lemon juice into the chilled hibiscus tea.', 'Pour over the iced mint glasses and serve immediately.'],
    tip: 'Muddle the mint leaves lightly in the glass before adding ice to release more of the essential oils.'
  },
  {
    id: 'iced-earl-grey-lemonade', name: 'Iced Earl Grey Lemonade', emoji: '🌫️',
    category: 'iced', mood: ['relaxing', 'energizing'],
    baseTea: 'earltrey', baseTeaName: 'Earl Grey',
    liquid: 'Iced Water', liquidEmoji: '🧊',
    desc: 'Fragrant bergamot Earl Grey tea chilled and brightened with fresh lemon juice and a touch of honey. Elegant, refreshing, and a brilliant twist on classic iced tea.',
    difficulty: 'Easy', time: '10 min + chill', servings: 2,
    additives: ['honey', 'lemon'],
    ingredients: ['3 tsp Earl Grey loose leaf (or 2 bags)', '400 ml water (90 °C)', '2 tbsp honey', 'Juice of 1 lemon', 'Lemon slices to garnish', 'Ice cubes'],
    steps: ['Brew Earl Grey in 90 °C water for 3 minutes. Remove tea to avoid bitterness.', 'Stir in honey while hot until dissolved.', 'Allow to cool, then refrigerate until cold.', 'Fill glasses with ice and a lemon slice.', 'Stir in fresh lemon juice just before serving.', 'Pour chilled Earl Grey over ice and garnish.'],
    tip: 'Brew a strong concentrate (use half the water) and top up with cold water over ice for an instant iced tea.'
  },
  {
    id: 'iced-peach-chamomile', name: 'Iced Peach Chamomile', emoji: '🍑',
    category: 'iced', mood: ['relaxing'],
    baseTea: 'chamomile', baseTeaName: 'Chamomile',
    liquid: 'Iced Water', liquidEmoji: '🧊',
    desc: 'Gentle chamomile cold-brewed with ripe peach slices for a dreamy, naturally sweet iced tea. Caffeine-free, delicately floral, and endlessly refreshing on a warm day.',
    difficulty: 'Easy', time: '6 hours (cold brew)', servings: 2,
    additives: ['honey', 'peach', 'lemon'],
    ingredients: ['3 tsp dried chamomile flowers (or 2 bags)', '2 ripe peaches, sliced', '600 ml cold water', '1 tbsp honey', 'Juice of ½ lemon', 'Ice cubes', 'Fresh peach slices to garnish'],
    steps: ['Place chamomile and peach slices into a large jug.', 'Pour cold water over and stir gently.', 'Cover and refrigerate for 6–8 hours (or overnight).', 'Strain through a fine-mesh sieve, pressing the peaches.', 'Stir in honey and lemon juice.', 'Serve over ice with fresh peach slice garnish.'],
    tip: 'The natural sweetness of ripe peaches means you may not need honey at all — taste first before adding.'
  },
  {
    id: 'iced-lavender-lemonade', name: 'Iced Lavender Honey Lemonade', emoji: '💜',
    category: 'iced', mood: ['relaxing'],
    baseTea: 'lavender', baseTeaName: 'Lavender',
    liquid: 'Iced Water', liquidEmoji: '🧊',
    desc: 'A Provence-inspired iced lemonade infused with dried lavender and sweetened with raw honey. Delicately floral, refreshingly tart, and beautifully pale purple — a summer showstopper.',
    difficulty: 'Easy', time: '15 min + chill', servings: 4,
    additives: ['honey', 'lemon', 'lavender-b'],
    ingredients: ['2 tsp dried lavender buds', '500 ml hot water (90 °C)', '3 tbsp honey', 'Juice of 3 lemons', '500 ml cold water', 'Ice cubes', 'Lavender sprigs and lemon slices to garnish'],
    steps: ['Steep lavender in 500 ml of 90 °C water for 5 minutes — no longer or it turns soapy.', 'Strain and stir in honey until dissolved.', 'Let cool to room temperature.', 'Stir in lemon juice and cold water.', 'Refrigerate until chilled.', 'Serve over ice, garnished with a lavender sprig and lemon slice.'],
    tip: 'A tiny drop of butterfly pea flower powder turns this naturally purple — no food colouring needed.'
  },
  {
    id: 'iced-rose-milk-tea', name: 'Iced Rose Milk Tea', emoji: '🌹',
    category: 'iced', mood: ['relaxing'],
    baseTea: 'rose', baseTeaName: 'Rose Tea',
    liquid: 'Iced Oat Milk', liquidEmoji: '🧊',
    desc: 'Fragrant rose petal tea chilled and layered over oat milk and ice. Blush pink, lightly floral, and utterly luxurious — this is self-care in a glass.',
    difficulty: 'Easy', time: '10 min + chill', servings: 1,
    additives: ['oat-milk', 'honey', 'rose-petals', 'vanilla'],
    ingredients: ['2 tbsp dried rose petals', '150 ml hot water (85 °C)', '200 ml cold oat milk', '1 tsp honey', '¼ tsp vanilla extract', 'Ice cubes', 'A few dried rose petals to garnish'],
    steps: ['Steep rose petals in 85 °C water for 6 minutes. Strain well.', 'Stir in honey and vanilla while warm.', 'Cool completely and refrigerate.', 'Fill a glass with ice.', 'Pour cold oat milk over the ice.', 'Slowly pour rose concentrate over the back of a spoon for a layered effect. Garnish with dried petals.'],
    tip: 'Use full-fat oat milk for a creamier, more opaque layer that keeps the pink-and-white effect visible longer.'
  },
  {
    id: 'iced-mango-green-tea', name: 'Iced Mango Green Tea', emoji: '🥭',
    category: 'iced', mood: ['energizing', 'relaxing'],
    baseTea: 'green', baseTeaName: 'Green Tea',
    liquid: 'Iced Water', liquidEmoji: '🧊',
    desc: 'Lightly brewed green tea blended with tropical mango puree and a squeeze of lime over ice. Vibrant, fruity, and refreshing — like a tropical vacation in a glass.',
    difficulty: 'Easy', time: '10 min + chill', servings: 2,
    additives: ['honey', 'lemon', 'mango-puree'],
    ingredients: ['3 tsp green tea (sencha or standard)', '400 ml water (70–75 °C)', '3 tbsp mango puree (fresh or store-bought)', '1 tsp honey', 'Juice of ½ lime', 'Ice cubes', 'Mango slices and mint to garnish'],
    steps: ['Brew green tea in 70–75 °C water for 2 minutes. Do not use boiling water.', 'Strain and stir in honey. Allow to cool.', 'Refrigerate until cold.', 'Whisk mango puree and lime juice into the chilled green tea.', 'Pour over ice in tall glasses.', 'Garnish with a mango slice and mint sprig.'],
    tip: 'Blend the mango into the tea for a smoothie-like consistency, or keep it swirled for a beautiful marbled effect.'
  },
  {
    id: 'iced-coconut-hojicha', name: 'Iced Coconut Hojicha', emoji: '🥥',
    category: 'iced', mood: ['relaxing'],
    baseTea: 'hojicha', baseTeaName: 'Hojicha',
    liquid: 'Iced Coconut Milk', liquidEmoji: '🧊',
    desc: 'Japan\'s roasted green tea brewed strong and served over ice with full-fat coconut milk. Nutty, caramel-roasted hojicha and creamy coconut is one of the most unexpectedly perfect pairings.',
    difficulty: 'Easy', time: '10 min + chill', servings: 1,
    additives: ['coconut-milk', 'honey', 'vanilla'],
    ingredients: ['2 tsp hojicha leaves (or 1 heaped tbsp)', '100 ml boiling water', '200 ml cold full-fat coconut milk', '1 tsp honey', '¼ tsp vanilla extract', 'Ice cubes', 'Toasted coconut flakes to garnish'],
    steps: ['Brew hojicha in 100 ml boiling water for 1–2 minutes. Strain.', 'Stir in honey and vanilla. Let cool completely.', 'Fill a glass with ice.', 'Pour cold coconut milk over the ice.', 'Slowly pour the hojicha over the back of a spoon to create layers.', 'Top with toasted coconut flakes.'],
    tip: 'Shake the coconut milk can well before opening. The cream layer on top makes the drink extra rich and beautiful.'
  },
  {
    id: 'iced-cucumber-sencha', name: 'Iced Cucumber Sencha Cooler', emoji: '🥒',
    category: 'iced', mood: ['relaxing'],
    baseTea: 'sencha', baseTeaName: 'Sencha',
    liquid: 'Iced Water', liquidEmoji: '🧊',
    desc: 'Crisp Japanese sencha cold-brewed with fresh cucumber and mint. No sweetener needed — this is the most spa-like, hydrating iced tea imaginable. Pure, clean refreshment.',
    difficulty: 'Easy', time: '4 hours (cold brew)', servings: 3,
    additives: ['mint-fresh', 'lemon', 'cucumber'],
    ingredients: ['3 tsp sencha green tea', '½ cucumber, thinly sliced', '10 fresh mint leaves', '750 ml cold water', 'Juice of ½ lemon', 'Ice cubes', 'Cucumber ribbons and mint to garnish'],
    steps: ['Place sencha, cucumber slices, and mint in a large jug.', 'Pour cold water over everything.', 'Refrigerate for 4–6 hours.', 'Strain through a fine sieve into glasses over ice.', 'Add a squeeze of lemon just before serving.', 'Garnish with cucumber ribbons and a sprig of mint.'],
    tip: 'Use a vegetable peeler to create long cucumber ribbons for garnish — they look stunning coiled inside the glass.'
  },
  {
    id: 'iced-strawberry-rooibos', name: 'Iced Strawberry Rooibos', emoji: '🍓',
    category: 'iced', mood: ['relaxing'],
    baseTea: 'rooibos', baseTeaName: 'Rooibos',
    liquid: 'Iced Water', liquidEmoji: '🧊',
    desc: 'Naturally sweet rooibos infused with fresh strawberries and a hint of lemon. Caffeine-free and antioxidant-rich, this ruby iced tea is as nourishing as it is gorgeous.',
    difficulty: 'Easy', time: '15 min + chill', servings: 2,
    additives: ['honey', 'lemon', 'strawberry'],
    ingredients: ['2 tbsp rooibos loose leaf (or 2 bags)', '6 fresh strawberries, hulled and sliced', '500 ml boiling water', '1 tbsp honey', 'Juice of ½ lemon', 'Ice cubes', 'Fresh strawberry slices to garnish'],
    steps: ['Steep rooibos in boiling water for 5 minutes.', 'Strain and add sliced strawberries to the hot tea.', 'Stir in honey and let the strawberries infuse for 15 minutes as the tea cools.', 'Stir in lemon juice.', 'Refrigerate until cold, then strain out strawberry pieces (or muddle them in).', 'Pour over ice and garnish with fresh strawberry slices.'],
    tip: 'Leave the strawberry pieces in for a chunkier, more intense berry flavour — or blend them in for a smoother, pink-tinted tea.'
  }
];
