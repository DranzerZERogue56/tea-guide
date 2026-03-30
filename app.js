'use strict';

// ─── Assemble data from batch files ──────────────────────────────────────────
const TEAS    = [...TEAS_HIGH, ...TEAS_HIGH2, ...TEAS_MEDIUM, ...TEAS_MEDIUM2, ...TEAS_LOW, ...TEAS_LOW2, ...TEAS_FREE, ...TEAS_FREE2];
const RECIPES = [...RECIPES_1, ...RECIPES_2, ...RECIPES_3];

// ─── Additives ────────────────────────────────────────────────────────────────
const ADDITIVES = [
  { id: 'honey',        name: 'Honey',           emoji: '🍯', desc: 'Natural sweetener with antimicrobial properties. Adds floral sweetness without overpowering the tea.' },
  { id: 'lemon',        name: 'Lemon',            emoji: '🍋', desc: 'Brightens any tea with citrus acidity. Boosts Vitamin C and helps with iron absorption.' },
  { id: 'milk',         name: 'Whole Milk',       emoji: '🥛', desc: 'Creamy and rich, tames tannins in black tea. The classic addition to British-style teas.' },
  { id: 'oat-milk',     name: 'Oat Milk',         emoji: '🌾', desc: 'Vegan, naturally sweet and creamy. Froths beautifully for lattes. Pairs especially well with matcha and chai.' },
  { id: 'coconut-milk', name: 'Coconut Milk',     emoji: '🥥', desc: 'Rich, full-fat dairy alternative with a tropical sweetness. Excellent in chai and turmeric recipes.' },
  { id: 'cond-milk',    name: 'Condensed Milk',   emoji: '🫙', desc: 'Sweet, thick milk used in Thai and Malaysian milk teas. Intensely creamy with a caramel note.' },
  { id: 'cream',        name: 'Heavy Cream',      emoji: '🍦', desc: 'Luxuriously rich addition for indulgent lattes. Adds velvety texture and floats beautifully on top.' },
  { id: 'cinnamon',     name: 'Cinnamon',         emoji: '🫙', desc: 'Warming spice that regulates blood sugar and adds sweet heat. Essential in chai.' },
  { id: 'cardamom',     name: 'Cardamom',         emoji: '🌿', desc: 'Aromatic spice with floral, citrus notes. Core to chai and Middle-Eastern tea traditions.' },
  { id: 'ginger-raw',   name: 'Fresh Ginger',     emoji: '🫚', desc: 'Adds fiery warmth and anti-inflammatory punch. Use sliced or grated.' },
  { id: 'vanilla',      name: 'Vanilla Extract',  emoji: '🍶', desc: 'Rounds out bitterness and adds creamy sweetness. A drop transforms a latte.' },
  { id: 'brown-sugar',  name: 'Brown Sugar',      emoji: '🟤', desc: 'Molasses-rich sweetness with caramel depth. Used in boba and tiger milk teas.' },
  { id: 'mint-fresh',   name: 'Fresh Mint',       emoji: '🌿', desc: 'Adds bright, cooling freshness. Essential in Moroccan mint tea.' },
  { id: 'orange-peel',  name: 'Orange Peel',      emoji: '🍊', desc: 'Dried or fresh zest adds citrus oils and bittersweet depth. Excellent in spiced teas.' },
  { id: 'star-anise',   name: 'Star Anise',       emoji: '✨', desc: 'Sweet, licorice-flavoured spice used in masala chai and Vietnamese teas.' },
  { id: 'black-pepper', name: 'Black Pepper',     emoji: '🫙', desc: 'Enhances curcumin absorption by 2000% when paired with turmeric. Adds gentle heat.' },
  { id: 'rose-petals',  name: 'Rose Petals',      emoji: '🌹', desc: 'Dried petals add delicate floral aroma. Beautiful in chamomile and white tea blends.' },
  { id: 'lavender-b',   name: 'Dried Lavender',   emoji: '💜', desc: 'Intensely floral and calming. Use sparingly — a little goes a long way.' },
  { id: 'strawberry',   name: 'Fresh Strawberry', emoji: '🍓', desc: 'Muddled or pureed for natural berry sweetness. Pairs brilliantly with matcha and hibiscus.' },
  { id: 'blueberry',    name: 'Blueberry',        emoji: '🫐', desc: 'Adds natural purple colour and antioxidant richness. Beautiful in lavender and white tea blends.' },
  { id: 'mango-puree',  name: 'Mango Puree',      emoji: '🥭', desc: 'Tropical sweetness in concentrated form. Perfect in black tea and chilli combinations.' },
  { id: 'peach',        name: 'Fresh Peach',      emoji: '🍑', desc: 'Sliced or pureed for juicy summer sweetness. Iconic pairing with green tea.' },
  { id: 'cucumber',     name: 'Cucumber',         emoji: '🥒', desc: 'Adds cooling, watery freshness. No sweetener needed when cucumber is present.' },
  { id: 'chilli',       name: 'Chilli',           emoji: '🌶️', desc: 'A pinch or slice adds electrifying heat. Pairs surprisingly well with mango and hibiscus.' },
  { id: 'pomegranate',  name: 'Pomegranate Juice',emoji: '❤️', desc: 'Tart, ruby juice packed with polyphenols. One of the best antioxidant pairings with hibiscus.' },
];

// ─── Quiz Questions ───────────────────────────────────────────────────────────
const QUESTIONS = [
  {
    id: 'time', question: 'What time of day is it right now?',
    hint: 'This helps us match the ideal tea to your body clock.',
    options: [
      { value: 'morning',   icon: '🌅', label: 'Morning',   sub: 'Before noon' },
      { value: 'afternoon', icon: '☀️', label: 'Afternoon', sub: 'Noon – 5 PM' },
      { value: 'evening',   icon: '🌇', label: 'Evening',   sub: '5 PM – 9 PM' },
      { value: 'evening',   icon: '🌙', label: 'Night',     sub: 'After 9 PM' }
    ]
  },
  {
    id: 'goal', question: 'What\'s your main goal right now?',
    hint: 'Different teas serve very different purposes.',
    options: [
      { value: 'focus',  icon: '🎯', label: 'Focus & Productivity', sub: 'I need to concentrate' },
      { value: 'relax',  icon: '😌', label: 'Relax & Unwind',       sub: 'I want to de-stress' },
      { value: 'energy', icon: '⚡', label: 'Energy Boost',         sub: 'I need a pick-me-up' },
      { value: 'relax',  icon: '🛌', label: 'Prepare for Sleep',    sub: 'I\'m winding down' }
    ]
  },
  {
    id: 'caffeine', question: 'How do you feel about caffeine?',
    hint: 'Caffeine levels vary widely across teas.',
    options: [
      { value: 'caffeine',   icon: '☕',  label: 'Yes please',           sub: 'Give me the boost' },
      { value: 'noCaffeine', icon: '🌿', label: 'No thanks',             sub: 'I want caffeine-free' },
      { value: 'caffeine',   icon: '🤷', label: 'I don\'t mind either',  sub: 'Whatever works' }
    ]
  },
  {
    id: 'flavor', question: 'What flavour profile sounds most appealing?',
    hint: 'Go with what your taste buds are craving.',
    options: [
      { value: 'bold',   icon: '💪', label: 'Bold & Robust',     sub: 'Strong, rich, malty' },
      { value: 'floral', icon: '🌸', label: 'Floral & Light',    sub: 'Delicate, fragrant, sweet' },
      { value: 'warm',   icon: '🌶️', label: 'Warming & Spicy',  sub: 'Ginger, spice, zesty' },
      { value: 'fresh',  icon: '🌱', label: 'Fresh & Grassy',    sub: 'Clean, vegetal, crisp' },
      { value: 'fruity', icon: '🍓', label: 'Fruity & Sweet',    sub: 'Berries, citrus, tropical' },
      { value: 'cold',   icon: '🧊', label: 'Cool & Refreshing', sub: 'Minty, iced' }
    ]
  },
  {
    id: 'feel', question: 'How are you feeling right now?',
    hint: 'Your current state helps us fine-tune the recommendation.',
    options: [
      { value: 'tired',    icon: '😴', label: 'Tired or sluggish',    sub: 'I need to wake up' },
      { value: 'stressed', icon: '😰', label: 'Stressed or anxious',  sub: 'I need to calm down' },
      { value: 'good',     icon: '😊', label: 'Good — just want tea', sub: 'No particular issue' },
      { value: 'sick',     icon: '🤧', label: 'Under the weather',    sub: 'Sore throat, cold, etc.' }
    ]
  },
  {
    id: 'temp', question: 'Hot or cold?',
    hint: 'Some teas shine hot, others are brilliant iced.',
    options: [
      { value: 'warm', icon: '♨️', label: 'Hot & Warming',  sub: 'Classic cup, steaming' },
      { value: 'cold', icon: '🧊', label: 'Iced or Cold',   sub: 'Refreshing and chilled' },
      { value: 'warm', icon: '🤷', label: 'Either is fine', sub: 'I\'ll drink whatever' }
    ]
  }
];

// ─── In-Depth Quiz Questions ──────────────────────────────────────────────────
const QUESTIONS_INDEPTH = [
  {
    id: 'time', question: 'What time of day is it right now?',
    hint: 'Your body clock shapes how it processes caffeine and adapts to certain teas.',
    options: [
      { value: 'morning',   icon: '🌅', label: 'Morning',    sub: 'Before noon' },
      { value: 'afternoon', icon: '☀️', label: 'Afternoon',  sub: 'Noon – 5 PM' },
      { value: 'evening',   icon: '🌇', label: 'Evening',    sub: '5 PM – 9 PM' },
      { value: 'evening',   icon: '🌙', label: 'Late Night', sub: 'After 9 PM — boost caffeine-free' }
    ]
  },
  {
    id: 'goal', question: 'What\'s your primary goal right now?',
    hint: 'Different teas serve very different purposes.',
    options: [
      { value: 'focus',    icon: '🎯', label: 'Focus & Productivity',  sub: 'I need to concentrate' },
      { value: 'relax',    icon: '😌', label: 'Relax & Unwind',        sub: 'I want to de-stress' },
      { value: 'energy',   icon: '⚡', label: 'Energy Boost',          sub: 'I need a pick-me-up' },
      { value: 'wellness', icon: '🛡️', label: 'Wellness & Immunity',   sub: 'Support my health' },
      { value: 'relax',    icon: '🛌', label: 'Prepare for Sleep',     sub: 'I\'m winding down' }
    ]
  },
  {
    id: 'caffeine', question: 'How do you feel about caffeine today?',
    hint: 'Caffeine sensitivity varies day to day — trust how you feel right now.',
    options: [
      { value: 'caffeine',   icon: '☕',  label: 'Yes please',          sub: 'Give me the boost' },
      { value: 'noCaffeine', icon: '🌿',  label: 'No thanks',           sub: 'I want caffeine-free' },
      { value: 'low',        icon: '🍃',  label: 'Low caffeine only',   sub: 'Just a little' },
      { value: 'caffeine',   icon: '🤷',  label: 'I don\'t mind',       sub: 'Whatever works' }
    ]
  },
  {
    id: 'temp', question: 'Hot or cold?',
    hint: 'Some teas shine hot, others come alive iced.',
    options: [
      { value: 'warm', icon: '♨️', label: 'Hot & Steaming',  sub: 'Classic cup' },
      { value: 'cold', icon: '🧊', label: 'Iced or Cold',    sub: 'Refreshing and chilled' },
      { value: 'warm', icon: '🤷', label: 'Either is fine',  sub: 'I\'ll drink whatever' }
    ]
  },
  {
    id: 'feel', question: 'How are you feeling right now?',
    hint: 'Your current state helps fine-tune our recommendation.',
    options: [
      { value: 'tired',    icon: '😴', label: 'Tired or sluggish',    sub: 'I need to wake up' },
      { value: 'stressed', icon: '😰', label: 'Stressed or anxious',  sub: 'I need to calm down' },
      { value: 'good',     icon: '😊', label: 'Good — just want tea', sub: 'No particular issue' },
      { value: 'sick',     icon: '🤧', label: 'Under the weather',    sub: 'Sore throat, cold, etc.' },
      { value: 'active',   icon: '🏃', label: 'Active or sporty',     sub: 'Just worked out / heading out' }
    ]
  },
  {
    id: 'flavor', question: 'What broad flavour profile appeals to you?',
    hint: 'Think about your taste mood right now.',
    options: [
      { value: 'bold',   icon: '💪', label: 'Bold & Robust',     sub: 'Strong, rich, malty' },
      { value: 'floral', icon: '🌸', label: 'Floral & Delicate', sub: 'Fragrant, sweet, light' },
      { value: 'warm',   icon: '🌶️', label: 'Warming & Spiced', sub: 'Ginger, spice, zesty' },
      { value: 'fresh',  icon: '🌱', label: 'Fresh & Grassy',    sub: 'Clean, vegetal, crisp' },
      { value: 'fruity', icon: '🍓', label: 'Fruity & Sweet',    sub: 'Berries, citrus, tropical' },
      { value: 'cold',   icon: '🧊', label: 'Cool & Minty',      sub: 'Refreshing, menthol, iced' }
    ]
  },
  {
    id: 'flavorNote', question: 'Which specific flavor notes appeal most to you?',
    hint: 'This helps us match the exact taste character of the tea.',
    options: [
      { value: 'earthy',      icon: '🌍', label: 'Earthy & Smoky',     sub: 'Woody, mineral, umami' },
      { value: 'floralnote',  icon: '🌺', label: 'Floral & Grassy',    sub: 'Jasmine, rose, vegetal' },
      { value: 'fruitynote',  icon: '🍑', label: 'Fruity & Citrus',    sub: 'Berry, peach, lemon, tropical' },
      { value: 'spiced',      icon: '🫙', label: 'Spiced & Warming',   sub: 'Cinnamon, ginger, cardamom' },
      { value: 'nutty',       icon: '🌰', label: 'Nutty & Roasted',    sub: 'Toasty, caramel, malty' },
      { value: 'any',         icon: '🤷', label: 'No preference',      sub: 'Surprise me' }
    ]
  },
  {
    id: 'strength', question: 'How strong do you like your tea?',
    hint: 'Body and astringency vary hugely across teas.',
    options: [
      { value: 'strengthLight',  icon: '🌤️', label: 'Light & Delicate', sub: 'Gentle, barely-there' },
      { value: 'strengthMedium', icon: '⚖️',  label: 'Medium-Bodied',   sub: 'Balanced and rounded' },
      { value: 'strengthBold',   icon: '💥',  label: 'Full & Bold',      sub: 'Strong, robust, assertive' },
      { value: 'strengthAny',    icon: '🤷',  label: 'No preference',   sub: 'I\'m open to anything' }
    ]
  },
  {
    id: 'region', question: 'Do you have a regional preference?',
    hint: 'Each region has a completely distinct tea culture and flavour tradition.',
    options: [
      { value: 'regionJapan',  icon: '🗾', label: 'Japanese',              sub: 'Matcha, sencha, gyokuro' },
      { value: 'regionChina',  icon: '🐉', label: 'Chinese',               sub: 'Oolongs, pu-erh, white tea' },
      { value: 'regionIndia',  icon: '🏔️', label: 'Indian / Sri Lankan',  sub: 'Assam, Darjeeling, Ceylon' },
      { value: 'regionHerbal', icon: '🌿', label: 'Herbal & Botanical',    sub: 'Chamomile, rooibos, hibiscus' },
      { value: 'regionAny',    icon: '🌎', label: 'No preference',         sub: 'Open to anything' }
    ]
  },
  {
    id: 'health', question: 'Any specific wellness benefit you\'re looking for?',
    hint: 'Some teas are clinically linked to specific health outcomes.',
    options: [
      { value: 'healthImmunity',  icon: '🛡️', label: 'Immunity & Antioxidants', sub: 'Boost my defences' },
      { value: 'healthDigestion', icon: '🫃', label: 'Digestion & Gut Health',  sub: 'Settle my stomach' },
      { value: 'healthClarity',   icon: '🧠', label: 'Mental Clarity & Focus',  sub: 'Sharpen my mind' },
      { value: 'healthCalm',      icon: '🧘', label: 'Calm & Sleep Support',    sub: 'Help me relax or sleep' },
      { value: 'healthAny',       icon: '🤷', label: 'No particular focus',     sub: 'General wellness' }
    ]
  },
  {
    id: 'milk', question: 'How do you like your tea served?',
    hint: 'Some teas blossom with milk; others are best drunk pure.',
    options: [
      { value: 'milkPlain',  icon: '🫖', label: 'Plain — no milk',          sub: 'Just the pure tea' },
      { value: 'milkMilky',  icon: '🥛', label: 'With milk or oat milk',    sub: 'Creamy and soft' },
      { value: 'milkSweet',  icon: '🍯', label: 'With honey or sweetener',  sub: 'A touch of sweetness' },
      { value: 'milkLatte',  icon: '☕', label: 'Latte-style',              sub: 'Steamed milk on top' },
      { value: 'milkAny',    icon: '🤷', label: 'No preference',            sub: 'I\'m flexible' }
    ]
  },
  {
    id: 'experience', question: 'How adventurous are you with tea?',
    hint: 'Helps us calibrate whether to suggest familiar classics or exciting discoveries.',
    options: [
      { value: 'expBeginner',     icon: '🌱', label: 'New to specialty tea', sub: 'Keep it familiar' },
      { value: 'expIntermediate', icon: '🍃', label: 'Regular tea drinker',  sub: 'Open to exploring' },
      { value: 'expAdvanced',     icon: '🫖', label: 'Tea enthusiast',       sub: 'Bring on the unusual' },
      { value: 'expExpert',       icon: '🏆', label: 'Serious connoisseur',  sub: 'I want something rare' }
    ]
  }
];

// ─── Ailment Data ─────────────────────────────────────────────────────────────
const AILMENTS = [
  {
    id: 'cold', label: 'Cold & Congestion', emoji: '🤧',
    desc: 'Sneezing, runny nose, blocked sinuses',
    teas: ['peppermint', 'ginger', 'elderflower'],
    reasons: [
      'Menthol in peppermint acts as a natural decongestant, opening blocked airways and clearing sinuses with each sip.',
      'Ginger\'s anti-viral gingerols help fight infection while its warmth eases chills and body aches that come with a cold.',
      'Elderflower reduces mucus production and soothes inflamed nasal passages — a centuries-old cold remedy still used in herbal medicine.'
    ]
  },
  {
    id: 'flu', label: 'Flu & Fever', emoji: '🤒',
    desc: 'Body aches, fever, fatigue, chills',
    teas: ['ginger', 'hibiscus', 'rosehip'],
    reasons: [
      'Ginger reduces fever through perspiration, eases muscle aches, and its anti-viral compounds actively support the immune response.',
      'Hibiscus is rich in antioxidants and has been shown to reduce fever and inhibit viral replication in multiple studies.',
      'Rosehip is one of the richest plant sources of Vitamin C — giving your immune system a critical boost when fighting flu.'
    ]
  },
  {
    id: 'headache', label: 'Headache', emoji: '🤕',
    desc: 'Tension headaches, pressure, head pain',
    teas: ['peppermint', 'ginger', 'chamomile'],
    reasons: [
      'Peppermint\'s menthol relaxes tense muscles and increases blood flow to the head — studies show it rivals acetaminophen for tension headaches.',
      'Ginger inhibits prostaglandins (pain-signalling molecules) via a similar mechanism to aspirin, easing headache pain naturally.',
      'Chamomile relaxes muscle tension and reduces cortisol — stress is one of the most common headache triggers.'
    ]
  },
  {
    id: 'migraine', label: 'Migraine', emoji: '🌀',
    desc: 'Intense throbbing pain, light sensitivity, nausea',
    teas: ['peppermint', 'ginger', 'lavender'],
    reasons: [
      'Peppermint has been shown in clinical trials to reduce migraine pain significantly — its menthol calms overstimulated nerves.',
      'Ginger blocks prostaglandins that inflame blood vessels during migraines and also combats the accompanying nausea.',
      'Lavender reduces cortisol and anxiety — both common migraine triggers — and inhaling its aroma alone can shorten migraine duration.'
    ]
  },
  {
    id: 'sleep', label: 'Trouble Sleeping', emoji: '😴',
    desc: 'Insomnia, restlessness, difficulty winding down',
    teas: ['chamomile', 'valerian', 'passionflower'],
    reasons: [
      'Chamomile contains apigenin which binds to GABA receptors in the brain — the same receptors targeted by sleep medications — inducing calm without sedation.',
      'Valerian root increases GABA levels and has been shown in clinical studies to reduce the time it takes to fall asleep by up to 15 minutes.',
      'Passionflower significantly improves sleep quality and reduces anxiety-driven wakefulness, especially when stress or racing thoughts are involved.'
    ]
  },
  {
    id: 'stress', label: 'Stress & Anxiety', emoji: '😰',
    desc: 'Overthinking, tension, feeling overwhelmed',
    teas: ['lavender', 'chamomile', 'rose'],
    reasons: [
      'Lavender reduces cortisol levels and activates the parasympathetic nervous system — it\'s been called nature\'s anxiety medication.',
      'Chamomile\'s apigenin binds to benzodiazepine receptors, producing a gentle calming effect without the risk of dependency.',
      'Rose petals contain beta-citronellol which modulates serotonin activity, easing emotional tension and gently lifting mood.'
    ]
  },
  {
    id: 'nausea', label: 'Nausea & Upset Stomach', emoji: '🤢',
    desc: 'Queasiness, motion sickness, indigestion',
    teas: ['ginger', 'peppermint', 'spearmint'],
    reasons: [
      'Ginger is the gold standard for nausea relief — its gingerols block serotonin receptors in the gut that trigger the vomiting reflex.',
      'Peppermint relaxes the stomach\'s smooth muscle, reducing painful spasms and quieting the nausea sensation.',
      'Spearmint provides similar soothing effects to peppermint but is gentler on the stomach — ideal if your digestive system feels fragile.'
    ]
  },
  {
    id: 'throat', label: 'Sore Throat', emoji: '🫠',
    desc: 'Scratchy, inflamed, or painful throat',
    teas: ['ginger', 'chamomile', 'licorice-root'],
    reasons: [
      'Ginger\'s anti-inflammatory compounds reduce throat swelling while its warmth soothes raw tissue — especially effective with a spoonful of honey.',
      'Chamomile coats and lubricates the throat, acting as a mild analgesic and reducing the inflammatory response in irritated tissue.',
      'Licorice root contains glycyrrhizin, a natural compound that coats the throat with a sweet, soothing film and fights bacterial infection.'
    ]
  },
  {
    id: 'fatigue', label: 'Low Energy & Fatigue', emoji: '😩',
    desc: 'Tiredness, brain fog, lack of motivation',
    teas: ['matcha', 'yerbamate', 'sencha'],
    reasons: [
      'Matcha delivers caffeine alongside L-theanine, providing 4–6 hours of focused, jitter-free energy — very different from the spike and crash of coffee.',
      'Yerba mate contains caffeine, theobromine, and theophylline for a multi-wave, long-lasting energy boost without the anxiety.',
      'Sencha provides steady caffeine with EGCG antioxidants that have been shown to improve mitochondrial energy production at a cellular level.'
    ]
  },
  {
    id: 'digestion', label: 'Digestive Issues', emoji: '🫃',
    desc: 'Bloating, cramps, constipation, IBS',
    teas: ['peppermint', 'ginger', 'dandelion'],
    reasons: [
      'Peppermint relaxes the smooth muscle of the intestinal wall, reducing painful cramping and bloating — it is clinically proven for IBS symptom relief.',
      'Ginger stimulates the production of digestive enzymes and bile, speeding up gut transit and significantly reducing bloating after meals.',
      'Dandelion acts as a gentle prebiotic that feeds healthy gut bacteria and mildly stimulates bile flow to ease constipation and sluggish digestion.'
    ]
  },
  {
    id: 'inflammation', label: 'Inflammation & Joint Pain', emoji: '🔥',
    desc: 'Swollen joints, general inflammation, aches',
    teas: ['turmeric', 'ginger', 'green'],
    reasons: [
      'Turmeric\'s curcumin is one of the most potent natural anti-inflammatories known — pair it with black pepper to boost absorption by up to 2000%.',
      'Ginger\'s shogaols and gingerols inhibit COX-2 enzymes, sharing the same mechanism as ibuprofen but without the gastrointestinal side effects.',
      'Green tea\'s EGCG blocks multiple inflammatory pathways and has been shown to reduce markers of arthritis in peer-reviewed studies.'
    ]
  },
  {
    id: 'immunity', label: 'Low Immunity', emoji: '🛡️',
    desc: 'Getting sick often, feeling run down',
    teas: ['elderflower', 'hibiscus', 'rosehip'],
    reasons: [
      'Elderflower activates key immune cells and contains quercetin, shown in studies to reduce both the duration and severity of common illnesses.',
      'Hibiscus is loaded with polyphenols and Vitamin C — its antioxidant capacity rivals blueberries and actively fights oxidative stress.',
      'Rosehip contains 20× more Vitamin C than oranges, plus bioflavonoids that help the body absorb and utilise that Vitamin C far more effectively.'
    ]
  }
];

// ─── Ailment → Mixology Recipe Mapping ───────────────────────────────────────
const AILMENT_RECIPES = {
  cold: {
    ids: ['honey-lemon-ginger', 'peppermint-honey', 'iced-hibiscus-mint-lemonade'],
    reasons: [
      'Raw honey releases hydrogen peroxide (a natural antimicrobial), ginger\'s gingerols fight viral infection, and lemon provides Vitamin C to support immune response — all in one cup.',
      'Peppermint\'s menthol is a proven natural decongestant that opens blocked airways and reduces sinus pressure. The honey soothes any accompanying sore throat.',
      'Hibiscus delivers a powerful Vitamin C hit while mint cools inflamed nasal passages and honey coats the throat. Served cold, it\'s especially soothing when a fever makes hot drinks unappealing.'
    ]
  },
  flu: {
    ids: ['honey-lemon-ginger', 'hibiscus-cooler', 'pomegranate-hibiscus'],
    reasons: [
      'The triple action of ginger\'s antivirals, lemon\'s Vitamin C, and raw honey\'s antimicrobial enzymes makes this one of the most effective flu-fighting drinks you can prepare at home.',
      'Hibiscus has documented antiviral activity and its high anthocyanin and Vitamin C content actively supports the immune response. The orange juice adds further Vitamin C.',
      'Combining hibiscus and pomegranate creates one of the most antioxidant-dense drinks available. Both are rich in Vitamin C and polyphenols that activate immune cell production.'
    ]
  },
  headache: {
    ids: ['peppermint-honey', 'honey-lemon-ginger', 'iced-matcha-mint'],
    reasons: [
      'Studies show peppermint matches acetaminophen for tension headache relief — menthol increases blood flow and relaxes constricted blood vessels in the scalp. Breathing the steam amplifies the effect.',
      'Ginger inhibits the same prostaglandin pathways as aspirin, providing natural anti-inflammatory pain relief. Honey delivers glucose which the brain urgently needs under stress.',
      'Matcha\'s L-theanine reduces the cortisol tension that drives most headaches, while fresh mint provides cooling aromatherapy relief — a functional two-pronged approach.'
    ]
  },
  migraine: {
    ids: ['peppermint-honey', 'lavender-latte', 'iced-lavender-lemonade'],
    reasons: [
      'Peppermint menthol has been clinically shown to reduce migraine pain intensity within 15 minutes. Holding the cup near your face and breathing in the steam extends the effect.',
      'Lavender\'s linalool modulates glutamate neurotransmission — a key driver of migraine aura — and reduces cortisol. The oat milk provides tryptophan to calm the nervous system.',
      'Lavender compounds reduce nerve hypersensitivity that triggers migraines. Served cold and tart, lemon also acts as a mild sensory reset during prodrome or early onset.'
    ]
  },
  sleep: {
    ids: ['rose-chamomile', 'lavender-latte', 'iced-peach-chamomile'],
    reasons: [
      'Chamomile\'s apigenin binds directly to GABA receptors (the same target as sleep medications) while rose\'s beta-citronellol gently elevates serotonin. Together they act on two separate sleep pathways.',
      'Lavender\'s linalool raises GABA and reduces excitatory neural activity, while warm oat milk provides tryptophan — the dietary precursor to melatonin and serotonin.',
      'Cold-brewed chamomile retains its full apigenin content. The peach provides natural fructose that gently raises blood sugar — stabilising it overnight reduces early-morning waking.'
    ]
  },
  stress: {
    ids: ['lavender-latte', 'rose-chamomile', 'iced-lavender-lemonade'],
    reasons: [
      'Lavender directly reduces cortisol and activates the parasympathetic nervous system. The slow ritual of making a latte adds a mindful reset that itself lowers acute stress.',
      'Rose\'s beta-citronellol and chamomile\'s apigenin work through different calming mechanisms — together they produce a broader anxiolytic effect than either herb alone.',
      'Something cold and tart acts as an immediate sensory grounding technique. As you sip, lavender\'s linalool steadily reduces cortisol levels over the following 30–60 minutes.'
    ]
  },
  nausea: {
    ids: ['honey-lemon-ginger', 'lemongrass-ginger', 'peppermint-honey'],
    reasons: [
      'Ginger\'s gingerols and shogaols block the gut serotonin receptors that trigger the vomiting reflex — this is among the most clinically proven herbal remedies for nausea of all types.',
      'Lemongrass relaxes intestinal smooth muscle while ginger blocks nausea signalling. Used across Southeast Asia as a traditional anti-nausea tonic, it works especially well for digestive nausea.',
      'Peppermint relaxes the lower oesophageal sphincter and stomach smooth muscle, quieting the spasms that drive nausea. Best sipped slowly in small amounts.'
    ]
  },
  throat: {
    ids: ['honey-lemon-ginger', 'peppermint-honey', 'rooibos-latte'],
    reasons: [
      'Raw honey coats the throat in a soothing antibacterial film (hydrogen peroxide), ginger reduces inflammation in the tissue, and lemon breaks up mucus. One of the most effective sore throat home remedies.',
      'Honey is clinically proven to soothe sore throat pain and suppress cough — it outperformed dextromethorphan in a paediatric study. Menthol adds a numbing, cooling anaesthetic effect.',
      'Rooibos is naturally anti-inflammatory and caffeine-free, making it safe to drink all day when sick. Honey adds soothing antibacterial properties and oat milk coats the throat.'
    ]
  },
  fatigue: {
    ids: ['dirty-chai', 'matcha-latte', 'iced-matcha-latte'],
    reasons: [
      'Double-strength chai caffeine combined with piperine from black pepper (which boosts caffeine and nutrient absorption) delivers the most potent and sustained energy lift in the recipe book.',
      'Matcha\'s caffeine binds with L-theanine, releasing steadily over 4–6 hours with no crash. Oat milk provides B vitamins that support the mitochondrial energy cycle.',
      'Iced matcha enters the bloodstream slightly faster than hot preparations and is easier to drink quickly when fatigue makes eating and drinking feel effortful.'
    ]
  },
  digestion: {
    ids: ['honey-lemon-ginger', 'spiced-puerh', 'lemongrass-ginger'],
    reasons: [
      'Ginger dramatically increases gastric motility and bile production, accelerating digestion and reducing bloating. Lemon juice stimulates bile flow from the liver — the classic post-meal digestive tonic.',
      'Pu-erh contains beneficial microorganisms that improve gut flora balance. Orange peel stimulates digestive enzymes and ginger accelerates gastric transit — this drink was designed as a post-dinner digestif.',
      'Lemongrass relieves intestinal cramping and smooth muscle spasm, while ginger speeds up gastric emptying. Together they address both the cramping and the sluggishness of digestive distress.'
    ]
  },
  inflammation: {
    ids: ['golden-milk', 'pomegranate-hibiscus', 'honey-lemon-ginger'],
    reasons: [
      'Curcumin from turmeric blocks COX-2 inflammation enzymes — the same target as ibuprofen. The black pepper in this recipe boosts curcumin bioavailability by 2000%. Coconut milk provides anti-inflammatory lauric acid.',
      'Hibiscus quercetin and pomegranate ellagic acid are two of the most potent natural COX inhibitors studied. Consumed together, their polyphenols show synergistic effects on inflammatory markers.',
      'Ginger\'s shogaols and gingerols directly suppress inflammatory cytokine production — providing stomach-friendly, natural anti-inflammatory relief at a cellular level.'
    ]
  },
  immunity: {
    ids: ['honey-lemon-ginger', 'hibiscus-cooler', 'pomegranate-hibiscus'],
    reasons: [
      'A foundational daily immunity drink: ginger\'s antimicrobials, lemon\'s Vitamin C, and raw honey\'s antibacterial enzymes and hydrogen peroxide form one of the most complete natural immune support combinations.',
      'Hibiscus provides more Vitamin C per serving than most citrus fruits and its anthocyanins are shown to activate natural killer cells — the frontline immune defence against viral infection.',
      'Two of the world\'s most researched immune-support ingredients in one drink. Hibiscus and pomegranate polyphenols work synergistically on antioxidant capacity and immune cell activation.'
    ]
  }
};

// ─── State ────────────────────────────────────────────────────────────────────
let currentView  = 'catalog';
let activeFilter = 'all';
let searchQuery  = '';
let mixFilter    = 'all';
let mixSearch    = '';
let activeAdditive = null;
let quizAnswers  = {};
let quizStep     = 0;
let currentQuizMode  = null;
let activeQuestions  = QUESTIONS;
let currentModalTeaId    = null;
let currentModalRecipeId = null;
let currentServingSize   = 1;
let storeFilter  = 'all';
let storePriceFilter = 'all';
let storeSearch  = '';
let storeSort    = 'name';

// ─── Navigation ───────────────────────────────────────────────────────────────
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => switchView(btn.dataset.view));
});

function switchView(view) {
  currentView = view;
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === view));
  document.getElementById('view-catalog').classList.toggle('hidden', view !== 'catalog');
  document.getElementById('view-mixology').classList.toggle('hidden', view !== 'mixology');
  document.getElementById('view-quiz').classList.toggle('hidden', view !== 'quiz');
  document.getElementById('view-wellness').classList.toggle('hidden', view !== 'wellness');
  document.getElementById('view-store').classList.toggle('hidden', view !== 'store');
  document.getElementById('hero-catalog').classList.toggle('hidden', view !== 'catalog');
  document.getElementById('hero-mixology').classList.toggle('hidden', view !== 'mixology');
  document.getElementById('hero-quiz').classList.toggle('hidden', view !== 'quiz');
  document.getElementById('hero-wellness').classList.toggle('hidden', view !== 'wellness');
  document.getElementById('hero-store').classList.toggle('hidden', view !== 'store');
  if (view === 'quiz') resetQuiz();
  if (view === 'wellness') resetWellness();
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

const FRAC_TO_DEC = {'½':0.5,'¼':0.25,'¾':0.75,'⅓':1/3,'⅔':2/3,'⅛':0.125,'⅜':0.375,'⅝':0.625,'⅞':0.875};
const DEC_TO_FRAC = [[0.125,'⅛'],[0.25,'¼'],[1/3,'⅓'],[0.375,'⅜'],[0.5,'½'],[0.625,'⅝'],[2/3,'⅔'],[0.75,'¾'],[0.875,'⅞']];

function formatNum(n) {
  if (n <= 0) return '0';
  const whole = Math.floor(n);
  const dec = n - whole;
  if (dec < 0.06) return String(whole || '0');
  if (dec > 0.94) return String(whole + 1);
  for (const [val, str] of DEC_TO_FRAC) {
    if (Math.abs(dec - val) < 0.06) return whole ? `${whole}${str}` : str;
  }
  return String(Math.round(n));
}

function scaleQty(str, factor) {
  return str.replace(/\d+[½¼¾⅓⅔⅛⅜⅝⅞]|[½¼¾⅓⅔⅛⅜⅝⅞]|\d+(?:\.\d+)?/g, match => {
    const lone = FRAC_TO_DEC[match];
    if (lone !== undefined) return formatNum(lone * factor);
    const fracChar = match.match(/[½¼¾⅓⅔⅛⅜⅝⅞]/);
    if (fracChar) return formatNum((parseInt(match) + FRAC_TO_DEC[fracChar[0]]) * factor);
    return formatNum(parseFloat(match) * factor);
  });
}

function servingSelectorHTML(active) {
  return `<div class="serving-selector">
    <span class="serving-label">Servings</span>
    <div class="serving-btns">
      ${[1,2,3,4].map(n => `<button class="serving-btn${n === active ? ' active' : ''}" data-size="${n}">${n}</button>`).join('')}
    </div>
  </div>`;
}

function caffeineClass(level) {
  if (level === 'high')   return 'caffeine-high';
  if (level === 'medium') return 'caffeine-med';
  return 'caffeine-none';
}
function caffeineLabel(level) {
  if (level === 'high')   return '☕ High Caffeine';
  if (level === 'medium') return '☕ Medium Caffeine';
  if (level === 'low')    return '🍃 Low Caffeine';
  return '🌿 Caffeine-Free';
}

// ─── Catalog ──────────────────────────────────────────────────────────────────
function renderCatalog() {
  const grid = document.getElementById('tea-grid');
  const filtered = TEAS.filter(tea => {
    const q = searchQuery;
    const matchSearch = !q || tea.name.toLowerCase().includes(q)
      || tea.flavor.join(' ').toLowerCase().includes(q)
      || tea.tags.join(' ').toLowerCase().includes(q)
      || tea.origin.toLowerCase().includes(q);
    let matchFilter = true;
    if      (activeFilter === 'high')   matchFilter = tea.caffeine === 'high';
    else if (activeFilter === 'medium') matchFilter = tea.caffeine === 'medium';
    else if (activeFilter === 'low')    matchFilter = tea.caffeine === 'low';
    else if (activeFilter === 'none')   matchFilter = tea.caffeine === 'none';
    else if (activeFilter !== 'all')    matchFilter = tea.bestTimes.includes(activeFilter) || tea.tags.includes(activeFilter);
    return matchSearch && matchFilter;
  });

  if (!filtered.length) {
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--muted);padding:3rem 0">No teas found. Try a different search or filter.</p>';
    return;
  }

  grid.innerHTML = filtered.map(tea => `
    <article class="tea-card" style="--card-color:${tea.color}" data-id="${tea.id}">
      <span class="tea-card-emoji">${tea.emoji}</span>
      <div class="tea-card-name">${tea.name}</div>
      <div class="tea-card-origin">${tea.origin}</div>
      <p class="tea-card-desc">${tea.desc}</p>
      <div class="tea-tags">
        <span class="tag ${caffeineClass(tea.caffeine)}">${caffeineLabel(tea.caffeine)}</span>
        ${tea.bestTimes.map(t => `<span class="tag time">${cap(t)}</span>`).join('')}
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.tea-card').forEach(card => {
    card.addEventListener('click', () => openTeaModal(card.dataset.id));
  });
}

document.getElementById('search').addEventListener('input', e => {
  searchQuery = e.target.value.toLowerCase().trim();
  renderCatalog();
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderCatalog();
  });
});

function openTeaModal(id) {
  currentModalTeaId    = id;
  currentModalRecipeId = null;
  currentServingSize   = 1;
  const tea = TEAS.find(t => t.id === id);
  if (!tea) return;
  document.getElementById('modal-content').innerHTML = `
    <span class="modal-emoji">${tea.emoji}</span>
    <div class="modal-name">${tea.name}</div>
    <div class="modal-origin">Origin: ${tea.origin}</div>
    <p class="modal-desc">${tea.desc}</p>
    <div class="modal-stats">
      <div class="stat-box"><div class="stat-label">Caffeine</div><div class="stat-value">${tea.caffeineLabel}</div></div>
      <div class="stat-box"><div class="stat-label">Best Time</div><div class="stat-value">${tea.bestTimes.map(cap).join(', ')}</div></div>
      <div class="stat-box"><div class="stat-label">Flavour</div><div class="stat-value">${tea.flavor.slice(0,2).map(cap).join(', ')}</div></div>
    </div>
    <div class="modal-section-title">Health Benefits</div>
    <ul class="benefit-list">${tea.benefits.map(b => `<li>${b}</li>`).join('')}</ul>
    <div class="modal-section-title">Brewing Guide</div>
    ${servingSelectorHTML(1)}
    <div class="brew-grid">
      <div class="brew-item"><div class="label">Temperature</div><div class="value">${tea.brew.temp}</div></div>
      <div class="brew-item"><div class="label">Steep Time</div><div class="value">${tea.brew.time}</div></div>
      <div class="brew-item"><div class="label">Amount</div><div class="value" id="modal-brew-amount">${tea.brew.amount}</div></div>
    </div>
    <div class="modal-section-title">Tags</div>
    <div class="tea-tags" style="margin-top:0.5rem">${tea.tags.map(t => `<span class="tag">${cap(t)}</span>`).join('')}</div>
  `;
  openModal();
}

// ─── Mixology ─────────────────────────────────────────────────────────────────
function renderAdditives() {
  document.getElementById('additive-chips').innerHTML = ADDITIVES.map(a => `
    <span class="additive-chip" title="${a.desc}" data-id="${a.id}">${a.emoji} ${a.name}</span>
  `).join('');
  document.querySelectorAll('.additive-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const isActive = chip.classList.toggle('active');
      activeAdditive = isActive ? chip.dataset.id : null;
      if (isActive) document.querySelectorAll('.additive-chip').forEach(c => { if (c !== chip) c.classList.remove('active'); });
      renderMixology();
    });
  });
}

function renderMixology() {
  const grid = document.getElementById('mix-grid');
  const filtered = RECIPES.filter(r => {
    const matchSearch = !mixSearch || r.name.toLowerCase().includes(mixSearch)
      || r.baseTeaName.toLowerCase().includes(mixSearch)
      || r.desc.toLowerCase().includes(mixSearch);
    const matchFilter = mixFilter === 'all' || r.category === mixFilter || r.mood.includes(mixFilter);
    const matchAdditive = !activeAdditive || r.additives.includes(activeAdditive);
    return matchSearch && matchFilter && matchAdditive;
  });

  if (!filtered.length) {
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--muted);padding:3rem 0">No recipes match. Try different filters.</p>';
    return;
  }

  grid.innerHTML = filtered.map(r => {
    const tea = TEAS.find(t => t.id === r.baseTea);
    const addPills = r.additives.slice(0, 4).map(aid => {
      const a = ADDITIVES.find(x => x.id === aid);
      return a ? `<span class="additive-pill">${a.emoji} ${a.name}</span>` : '';
    }).join('');
    return `
    <article class="mix-card" data-id="${r.id}">
      <div class="mix-card-top">
        <span class="mix-card-emoji">${r.emoji}</span>
        <div class="mix-card-badges">
          <span class="mix-badge ${r.category === 'milk' ? 'badge-milk' : 'badge-water'}">${r.liquidEmoji} ${r.liquid}</span>
          ${r.mood.map(m => `<span class="mix-badge badge-mood">${cap(m)}</span>`).join('')}
        </div>
      </div>
      <div class="mix-card-name">${r.name}</div>
      <div class="mix-card-base">Base: ${tea ? tea.emoji + ' ' : ''}${r.baseTeaName}</div>
      <p class="mix-card-desc">${r.desc}</p>
      <div class="mix-additives">${addPills}${r.additives.length > 4 ? `<span class="additive-pill more">+${r.additives.length - 4} more</span>` : ''}</div>
      <div class="mix-card-meta">
        <span>⏱ ${r.time}</span>
        <span>👤 ${r.servings} serving${r.servings > 1 ? 's' : ''}</span>
        <span class="difficulty-${r.difficulty.toLowerCase()}">${r.difficulty}</span>
      </div>
    </article>`;
  }).join('');

  grid.querySelectorAll('.mix-card').forEach(card => {
    card.addEventListener('click', () => openRecipeModal(card.dataset.id));
  });
}

document.getElementById('mix-search').addEventListener('input', e => {
  mixSearch = e.target.value.toLowerCase().trim();
  renderMixology();
});

document.querySelectorAll('.mix-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mix-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    mixFilter = btn.dataset.filter;
    renderMixology();
  });
});

function openRecipeModal(id) {
  currentModalRecipeId = id;
  currentModalTeaId    = null;
  currentServingSize   = 1;
  const r = RECIPES.find(x => x.id === id);
  if (!r) return;
  const tea = TEAS.find(t => t.id === r.baseTea);
  const addList = r.additives.map(aid => {
    const a = ADDITIVES.find(x => x.id === aid);
    return a ? `<span class="additive-pill">${a.emoji} ${a.name}</span>` : '';
  }).join('');

  document.getElementById('modal-content').innerHTML = `
    <div class="recipe-modal-header">
      <span class="modal-emoji">${r.emoji}</span>
      <div>
        <div class="modal-name">${r.name}</div>
        <div class="modal-origin">Base: ${tea ? tea.emoji + ' ' : ''}${r.baseTeaName}</div>
        <div class="recipe-meta-row">
          <span class="mix-badge ${r.category === 'milk' ? 'badge-milk' : 'badge-water'}">${r.liquidEmoji} ${r.liquid}</span>
          ${r.mood.map(m => `<span class="mix-badge badge-mood">${cap(m)}</span>`).join('')}
          <span>⏱ ${r.time}</span>
          <span class="difficulty-${r.difficulty.toLowerCase()}">${r.difficulty}</span>
        </div>
      </div>
    </div>
    <p class="modal-desc">${r.desc}</p>
    <div class="modal-section-title">Additives Used</div>
    <div class="additive-pills-row">${addList}</div>
    <div class="modal-section-title">Ingredients</div>
    ${servingSelectorHTML(1)}
    <ul class="ingredient-list" id="modal-ingredient-list">${r.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
    <div class="modal-section-title">Instructions</div>
    <ol class="step-list">${r.steps.map(s => `<li>${s}</li>`).join('')}</ol>
    <div class="recipe-tip"><span class="tip-label">Pro Tip</span><span>${r.tip}</span></div>
  `;
  openModal();
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function openModal()  { document.getElementById('modal-overlay').classList.remove('hidden'); }
function closeModal() { document.getElementById('modal-overlay').classList.add('hidden'); }

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});

document.getElementById('shared-modal').addEventListener('click', e => {
  const btn = e.target.closest('.serving-btn');
  if (!btn) return;
  currentServingSize = parseInt(btn.dataset.size);
  document.querySelectorAll('.serving-btn').forEach(b => b.classList.toggle('active', b === btn));
  if (currentModalTeaId) {
    const tea = TEAS.find(t => t.id === currentModalTeaId);
    const el = document.getElementById('modal-brew-amount');
    if (tea && el) el.textContent = currentServingSize === 1 ? tea.brew.amount : scaleQty(tea.brew.amount, currentServingSize);
  }
  if (currentModalRecipeId) {
    const r = RECIPES.find(x => x.id === currentModalRecipeId);
    const el = document.getElementById('modal-ingredient-list');
    if (r && el) el.innerHTML = r.ingredients.map(i => `<li>${currentServingSize === 1 ? i : scaleQty(i, currentServingSize)}</li>`).join('');
  }
});

// ─── Quiz ─────────────────────────────────────────────────────────────────────
function resetQuiz() {
  quizAnswers = {}; quizStep = 0; currentQuizMode = null; activeQuestions = QUESTIONS;
  document.getElementById('quiz-result').classList.add('hidden');
  document.getElementById('quiz-card').classList.add('hidden');
  document.querySelector('.quiz-progress').style.display = 'none';
  document.querySelector('.quiz-nav').style.display = 'none';
  document.getElementById('quiz-selection').classList.remove('hidden');
}

function startQuiz(mode) {
  currentQuizMode = mode;
  activeQuestions = mode === 'indepth' ? QUESTIONS_INDEPTH : QUESTIONS;
  document.getElementById('quiz-selection').classList.add('hidden');
  document.getElementById('quiz-card').classList.remove('hidden');
  document.querySelector('.quiz-progress').style.display = 'flex';
  document.querySelector('.quiz-nav').style.display = 'flex';
  renderQuestion();
}

function renderQuestion() {
  const q = activeQuestions[quizStep];
  const selected = quizAnswers[quizStep];
  document.getElementById('quiz-card').innerHTML = `
    <div class="quiz-question">${q.question}</div>
    <div class="quiz-hint">${q.hint}</div>
    <div class="quiz-options">
      ${q.options.map((opt, i) => `
        <button class="quiz-option ${selected === i ? 'selected' : ''}" data-index="${i}">
          <span class="option-icon">${opt.icon}</span>
          <div><div class="option-label">${opt.label}</div><div class="option-sub">${opt.sub}</div></div>
        </button>`).join('')}
    </div>`;

  document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      quizAnswers[quizStep] = parseInt(btn.dataset.index);
      document.getElementById('btn-next').disabled = false;
    });
  });

  const fill = ((quizStep + 1) / activeQuestions.length) * 100;
  document.getElementById('progress-fill').style.width = fill + '%';
  document.getElementById('progress-label').textContent = `Question ${quizStep + 1} of ${activeQuestions.length}`;
  document.getElementById('btn-prev').disabled = quizStep === 0;
  document.getElementById('btn-next').disabled = selected === undefined;
  document.getElementById('btn-next').textContent = quizStep === activeQuestions.length - 1 ? 'Get My Tea' : 'Next';
}

document.getElementById('btn-prev').addEventListener('click', () => { if (quizStep > 0) { quizStep--; renderQuestion(); } });
document.getElementById('btn-next').addEventListener('click', () => {
  if (quizAnswers[quizStep] === undefined) return;
  if (quizStep < activeQuestions.length - 1) { quizStep++; renderQuestion(); }
  else if (currentQuizMode === 'indepth') showIndepthResult();
  else showResult();
});

function showResult() {
  const signals = {};
  QUESTIONS.forEach((q, qi) => {
    const idx = quizAnswers[qi];
    if (idx === undefined) return;
    const val = q.options[idx].value;
    signals[val] = (signals[val] || 0) + 2;
    if (q.id === 'feel') {
      if (val === 'tired')    { signals.energy = (signals.energy || 0) + 2; signals.caffeine = (signals.caffeine || 0) + 1; }
      if (val === 'stressed') { signals.relax = (signals.relax || 0) + 2; signals.noCaffeine = (signals.noCaffeine || 0) + 1; }
      if (val === 'sick')     { signals.warm = (signals.warm || 0) + 1; signals.noCaffeine = (signals.noCaffeine || 0) + 1; }
    }
    if (q.id === 'flavor' && val === 'fruity') {
      signals.cold = (signals.cold || 0) + 1;
      signals.relax = (signals.relax || 0) + 1;
    }
  });

  const scored = TEAS.map(tea => {
    let score = 0;
    Object.entries(signals).forEach(([key, weight]) => {
      if (tea.quizScore[key] !== undefined) score += tea.quizScore[key] * weight;
    });
    return { tea, score };
  }).sort((a, b) => b.score - a.score);

  const winner  = scored[0].tea;
  const runners = scored.slice(1, 4).map(s => s.tea);

  document.getElementById('quiz-card').classList.add('hidden');
  document.querySelector('.quiz-progress').style.display = 'none';
  document.querySelector('.quiz-nav').style.display = 'none';

  const resultEl = document.getElementById('quiz-result');
  resultEl.innerHTML = `
    <span class="result-emoji">${winner.emoji}</span>
    <div class="result-label">Your ideal tea right now is</div>
    <div class="result-name">${winner.name}</div>
    <p class="result-reason">${buildReason(winner, signals)}</p>
    <div class="result-badges">
      <span class="tag ${caffeineClass(winner.caffeine)}">${caffeineLabel(winner.caffeine)}</span>
      ${winner.bestTimes.map(t => `<span class="tag time">${cap(t)}</span>`).join('')}
      ${winner.tags.slice(0,2).map(t => `<span class="tag">${cap(t)}</span>`).join('')}
    </div>
    <div class="result-actions">
      <button class="btn btn-primary" id="btn-view-tea">View Full Details</button>
      <button class="btn btn-secondary" id="btn-retake">Retake Quiz</button>
    </div>
    <div class="runner-ups">
      <div class="runner-title">You might also enjoy</div>
      <div class="runner-list">
        ${runners.map(t => `
          <div class="runner-item" style="cursor:pointer" data-runner-id="${t.id}">
            <span class="runner-emoji">${t.emoji}</span>
            <div><div class="runner-name">${t.name}</div><div class="runner-why">${t.origin} &middot; ${caffeineLabel(t.caffeine)}</div></div>
          </div>`).join('')}
      </div>
    </div>`;
  resultEl.classList.remove('hidden');

  document.getElementById('btn-view-tea').addEventListener('click', () => { switchView('catalog'); setTimeout(() => openTeaModal(winner.id), 80); });
  document.getElementById('btn-retake').addEventListener('click', resetQuiz);
  resultEl.querySelectorAll('[data-runner-id]').forEach(el => {
    el.addEventListener('click', () => { switchView('catalog'); setTimeout(() => openTeaModal(el.dataset.runnerId), 80); });
  });
}

function buildReason(tea, signals) {
  const parts = [];
  if (signals.morning  && tea.bestTimes.includes('morning'))  parts.push('perfect for starting your morning');
  else if (signals.afternoon && tea.bestTimes.includes('afternoon')) parts.push('a great choice for the afternoon');
  else if (signals.evening && (tea.bestTimes.includes('evening') || tea.bestTimes.includes('night'))) parts.push('ideal for winding down in the evening');
  if (signals.focus  && tea.quizScore.focus  >= 2) parts.push('supports mental focus and concentration');
  if (signals.relax  && tea.quizScore.relax  >= 2) parts.push('helps you relax and de-stress');
  if (signals.energy && tea.quizScore.energy >= 2) parts.push('gives you a natural energy lift');
  if (signals.noCaffeine && tea.caffeine === 'none') parts.push('completely caffeine-free');
  else if (signals.caffeine && (tea.caffeine === 'high' || tea.caffeine === 'medium')) parts.push('delivers the caffeine kick you need');
  if (signals.warm && tea.quizScore.warm >= 2) parts.push('wonderfully warming');
  if (signals.cold && tea.quizScore.cold >= 2) parts.push('brilliant served cold or iced');
  if (signals.fruity && tea.flavor.some(f => ['fruity','citrus','citrusy','berry','tropical','peachy','bright','tangy'].some(k => f.toLowerCase().includes(k)))) parts.push('naturally bright and fruity');
  if (signals.sick) parts.push('known for its immune-boosting properties');
  if (!parts.length) return `${tea.name} is a wonderful all-around tea — ${tea.desc.split('.')[0].toLowerCase()}.`;
  let s = cap(parts[0]);
  if (parts.length > 2) s += ', ' + parts.slice(1, -1).join(', ') + ', and ' + parts[parts.length - 1];
  else if (parts.length === 2) s += ' and ' + parts[1];
  return s + '. ' + tea.desc.split('.')[0] + '.';
}

// ─── In-Depth Quiz Result ─────────────────────────────────────────────────────
const INDEPTH_FLAVOR_KEYWORDS = {
  earthy:     ['earthy','smoky','woody','umami','mineral','peaty','roasted'],
  floralnote: ['floral','grassy','vegetal','sweet','delicate','jasmine','rose'],
  fruitynote: ['fruity','citrus','citrusy','berry','tropical','peachy','bright','tangy'],
  spiced:     ['spicy','warming','spice','ginger','cinnamon','cardamom','pepper'],
  nutty:      ['nutty','roasted','toasty','caramel','malty','biscuity']
};

const INDEPTH_REGION_KEYWORDS = {
  regionJapan: ['japan'],
  regionChina: ['china','fujian','yunnan','sichuan','wuyi','zhejiang','taiwan'],
  regionIndia: ['india','assam','darjeeling','nilgiri','ceylon','sri lanka']
};

const INDEPTH_HEALTH_TAGS = {
  healthImmunity:  ['antioxidant','immune','vitamin','elderflower','hibiscus','rosehip'],
  healthDigestion: ['digestion','digestive','gut','peppermint','ginger','dandelion'],
  healthClarity:   ['focus','energy','matcha','yerba','sencha'],
  healthCalm:      ['relax','sleep','calming','chamomile','lavender','valerian','passionflower']
};

function showIndepthResult() {
  const answers = {};
  QUESTIONS_INDEPTH.forEach((q, qi) => {
    const idx = quizAnswers[qi];
    if (idx !== undefined) answers[q.id] = q.options[idx].value;
  });

  const signals = {};
  QUESTIONS_INDEPTH.forEach((q, qi) => {
    const idx = quizAnswers[qi];
    if (idx === undefined) return;
    const val = q.options[idx].value;
    signals[val] = (signals[val] || 0) + 2;
    if (q.id === 'feel') {
      if (val === 'tired')    { signals.energy=(signals.energy||0)+2; signals.caffeine=(signals.caffeine||0)+1; }
      if (val === 'stressed') { signals.relax=(signals.relax||0)+2; signals.noCaffeine=(signals.noCaffeine||0)+1; }
      if (val === 'sick')     { signals.warm=(signals.warm||0)+1; signals.noCaffeine=(signals.noCaffeine||0)+1; }
      if (val === 'active')   { signals.energy=(signals.energy||0)+2; signals.caffeine=(signals.caffeine||0)+1; }
    }
    if (q.id === 'flavor' && val === 'fruity') { signals.cold=(signals.cold||0)+1; }
    if (q.id === 'health') {
      if (val === 'healthClarity') { signals.focus=(signals.focus||0)+2; }
      if (val === 'healthCalm')    { signals.relax=(signals.relax||0)+2; signals.noCaffeine=(signals.noCaffeine||0)+1; }
    }
    if (q.id === 'caffeine' && val === 'low') { signals.noCaffeine=(signals.noCaffeine||0)+1; }
  });

  const flavorNoteVal = answers.flavorNote;
  const strengthVal   = answers.strength;
  const healthVal     = answers.health;
  const milkVal       = answers.milk;
  const expVal        = answers.experience;

  const scored = TEAS.map(tea => {
    let score = 0;

    // Standard quizScore signals
    Object.entries(signals).forEach(([key, weight]) => {
      if (tea.quizScore[key] !== undefined) score += tea.quizScore[key] * weight;
    });

    // Flavor note matching (high weight)
    if (flavorNoteVal && flavorNoteVal !== 'any') {
      const keywords = INDEPTH_FLAVOR_KEYWORDS[flavorNoteVal] || [];
      const match = tea.flavor.some(f => keywords.some(k => f.toLowerCase().includes(k)));
      score += match ? 6 : -3;
    }

    // Region preference
    const regionVal = answers.region;
    if (regionVal && regionVal !== 'regionAny') {
      if (regionVal === 'regionHerbal') {
        score += tea.caffeine === 'none' ? 5 : -2;
      } else {
        const keywords = INDEPTH_REGION_KEYWORDS[regionVal] || [];
        const originLower = tea.origin.toLowerCase();
        const match = keywords.some(k => originLower.includes(k));
        score += match ? 5 : -2;
      }
    }

    // Strength preference
    if (strengthVal === 'strengthLight')  score += (tea.caffeine === 'none' || tea.caffeine === 'low') ? 3 : -1;
    if (strengthVal === 'strengthMedium') score += tea.caffeine === 'medium' ? 3 : 0;
    if (strengthVal === 'strengthBold')   score += tea.caffeine === 'high' ? 3 : -1;

    // Health tag matching
    if (healthVal && healthVal !== 'healthAny') {
      const keywords = INDEPTH_HEALTH_TAGS[healthVal] || [];
      const match = keywords.some(k => tea.id.includes(k) || tea.tags.some(t => t.includes(k)));
      score += match ? 4 : 0;
    }

    // Milk / serving preference
    if (milkVal === 'milkMilky' || milkVal === 'milkLatte') {
      if (tea.tags.includes('milk tea') || ['blacktea','assam','ceylon','rooibos','matcha'].includes(tea.id)) score += 3;
    }
    if (milkVal === 'milkPlain' && (tea.caffeine === 'none' || tea.caffeine === 'low')) score += 1;

    // Experience / adventurousness
    const rareTags = ['aged','fermented','premium','rare','unique','oxidized','smoked'];
    const isRare = tea.tags.some(t => rareTags.some(k => t.toLowerCase().includes(k)));
    const classicIds = ['blacktea','greentea','chamomile','peppermint','matcha','rooibos'];
    if (expVal === 'expBeginner') {
      if (isRare) score -= 3;
      if (classicIds.includes(tea.id)) score += 2;
    } else if (expVal === 'expAdvanced' || expVal === 'expExpert') {
      if (isRare) score += 3;
      if (classicIds.includes(tea.id)) score -= 1;
    }

    return { tea, score };
  }).sort((a, b) => b.score - a.score);

  const winner  = scored[0].tea;
  const runners = scored.slice(1, 4).map(s => s.tea);

  document.getElementById('quiz-card').classList.add('hidden');
  document.querySelector('.quiz-progress').style.display = 'none';
  document.querySelector('.quiz-nav').style.display = 'none';

  const resultEl = document.getElementById('quiz-result');
  resultEl.innerHTML = `
    <span class="result-emoji">${winner.emoji}</span>
    <div class="result-label">Based on your detailed profile, your ideal tea is</div>
    <div class="result-name">${winner.name}</div>
    <p class="result-reason">${buildIndepthReason(winner, answers, signals)}</p>
    <div class="result-badges">
      <span class="tag ${caffeineClass(winner.caffeine)}">${caffeineLabel(winner.caffeine)}</span>
      ${winner.bestTimes.map(t => `<span class="tag time">${cap(t)}</span>`).join('')}
      ${winner.tags.slice(0,2).map(t => `<span class="tag">${cap(t)}</span>`).join('')}
    </div>
    <div class="result-actions">
      <button class="btn btn-primary" id="btn-view-tea">View Full Details</button>
      <button class="btn btn-secondary" id="btn-retake">Retake Quiz</button>
    </div>
    <div class="runner-ups">
      <div class="runner-title">Also closely matched</div>
      <div class="runner-list">
        ${runners.map(t => `
          <div class="runner-item" style="cursor:pointer" data-runner-id="${t.id}">
            <span class="runner-emoji">${t.emoji}</span>
            <div><div class="runner-name">${t.name}</div><div class="runner-why">${t.origin} &middot; ${caffeineLabel(t.caffeine)}</div></div>
          </div>`).join('')}
      </div>
    </div>`;
  resultEl.classList.remove('hidden');

  document.getElementById('btn-view-tea').addEventListener('click', () => { switchView('catalog'); setTimeout(() => openTeaModal(winner.id), 80); });
  document.getElementById('btn-retake').addEventListener('click', resetQuiz);
  resultEl.querySelectorAll('[data-runner-id]').forEach(el => {
    el.addEventListener('click', () => { switchView('catalog'); setTimeout(() => openTeaModal(el.dataset.runnerId), 80); });
  });
}

function buildIndepthReason(tea, answers, signals) {
  const parts = [];
  if (answers.time === 'morning' && tea.bestTimes.includes('morning')) parts.push('an ideal morning tea');
  else if (answers.time === 'afternoon' && tea.bestTimes.includes('afternoon')) parts.push('perfect for the afternoon');
  else if (answers.time === 'evening' && (tea.bestTimes.includes('evening') || tea.caffeine === 'none')) parts.push('ideal for winding down');
  if (answers.goal === 'focus' && tea.quizScore.focus >= 2) parts.push('sharpens focus and mental clarity');
  if (answers.goal === 'relax' && tea.quizScore.relax >= 2) parts.push('deeply calming and soothing');
  if (answers.goal === 'energy' && tea.quizScore.energy >= 2) parts.push('provides a sustained natural energy lift');
  if (answers.caffeine === 'noCaffeine' && tea.caffeine === 'none') parts.push('completely caffeine-free');
  else if (answers.caffeine === 'low' && (tea.caffeine === 'low' || tea.caffeine === 'none')) parts.push('gently low in caffeine');
  else if ((answers.caffeine === 'caffeine') && (tea.caffeine === 'high' || tea.caffeine === 'medium')) parts.push('delivers the caffeine kick you wanted');
  if (answers.temp === 'cold' && tea.quizScore.cold >= 2) parts.push('excellent served iced');
  if (answers.flavorNote && answers.flavorNote !== 'any') {
    const noteDescs = { earthy:'earthy and grounding', floralnote:'beautifully floral', fruitynote:'bright and fruity', spiced:'warmly spiced', nutty:'rich and roasted' };
    if (noteDescs[answers.flavorNote]) parts.push(noteDescs[answers.flavorNote]);
  }
  const regionNames = { regionJapan:'a celebrated Japanese tea', regionChina:'a classic Chinese tea', regionIndia:'a prized South Asian tea', regionHerbal:'a pure herbal blend' };
  if (answers.region && regionNames[answers.region]) parts.push(regionNames[answers.region]);
  if (!parts.length) return `${tea.name} is a wonderful all-around tea — ${tea.desc.split('.')[0].toLowerCase()}.`;
  let s = cap(parts[0]);
  if (parts.length > 2) s += ', ' + parts.slice(1,-1).join(', ') + ', and ' + parts[parts.length-1];
  else if (parts.length === 2) s += ' and ' + parts[1];
  return s + '. ' + tea.desc.split('.')[0] + '.';
}

// ─── Wellness ─────────────────────────────────────────────────────────────────
function resetWellness() {
  document.getElementById('wellness-step-1').classList.remove('hidden');
  document.getElementById('wellness-step-2').classList.add('hidden');
  renderWellnessAilments();
}

function renderWellnessAilments() {
  document.getElementById('ailment-grid').innerHTML = AILMENTS.map(a => `
    <button class="ailment-card" data-id="${a.id}">
      <span class="ailment-emoji">${a.emoji}</span>
      <div class="ailment-label">${a.label}</div>
      <div class="ailment-desc">${a.desc}</div>
    </button>
  `).join('');

  document.querySelectorAll('.ailment-card').forEach(card => {
    card.addEventListener('click', () => showWellnessResult(card.dataset.id));
  });
}

function showWellnessResult(id) {
  const ailment = AILMENTS.find(a => a.id === id);
  if (!ailment) return;

  const teaCards = ailment.teas.map((tid, i) => {
    const tea = TEAS.find(t => t.id === tid);
    if (!tea) return '';
    return `
      <div class="remedy-card" style="--card-color:${tea.color};cursor:pointer" data-tea-id="${tea.id}" title="View full details for ${tea.name}">
        <div class="remedy-card-header">
          <span class="remedy-emoji">${tea.emoji}</span>
          <div>
            <div class="remedy-name">${tea.name} <span class="remedy-view-hint">&#8599; View tea</span></div>
            <div class="remedy-brew">Brew ${tea.brew.temp} &middot; steep ${tea.brew.time} &middot; ${tea.brew.amount}</div>
          </div>
        </div>
        <p class="remedy-reason">${ailment.reasons[i]}</p>
      </div>`;
  }).join('');

  const mixData = AILMENT_RECIPES[id] || { ids: [], reasons: [] };
  const recipeCards = mixData.ids.map((rid, i) => {
    const recipe = RECIPES.find(r => r.id === rid);
    if (!recipe) return '';
    const keyAdditives = recipe.additives.slice(0, 3).map(aid => {
      const a = ADDITIVES.find(x => x.id === aid);
      return a ? `${a.emoji} ${a.name}` : '';
    }).filter(Boolean).join(' · ');
    return `
      <div class="remedy-card remedy-mix-card" style="cursor:pointer" data-recipe-id="${recipe.id}" title="View full recipe for ${recipe.name}">
        <div class="remedy-card-header">
          <span class="remedy-emoji">${recipe.emoji}</span>
          <div>
            <div class="remedy-name">${recipe.name} <span class="remedy-view-hint">&#8599; View recipe</span></div>
            <div class="remedy-brew">${keyAdditives} &middot; ${recipe.time}</div>
          </div>
        </div>
        <p class="remedy-reason">${mixData.reasons[i]}</p>
      </div>`;
  }).join('');

  document.getElementById('wellness-result').innerHTML = `
    <div class="wellness-result-header">
      <span class="wellness-result-emoji">${ailment.emoji}</span>
      <div>
        <h2 class="wellness-result-title">Remedies for ${ailment.label}</h2>
        <p class="wellness-result-sub">${ailment.desc}</p>
      </div>
    </div>
    <h3 class="wellness-section-heading">🍵 Recommended Teas</h3>
    <div class="remedy-list">${teaCards}</div>
    ${recipeCards ? `
    <h3 class="wellness-section-heading">🧪 Healing Mixology Drinks</h3>
    <p class="wellness-mix-sub">These recipes combine therapeutic ingredients — honey, ginger, herbs, and more — that directly target your symptoms.</p>
    <div class="remedy-list">${recipeCards}</div>` : ''}
  `;

  document.getElementById('wellness-step-1').classList.add('hidden');
  document.getElementById('wellness-step-2').classList.remove('hidden');

  document.querySelectorAll('.remedy-card[data-tea-id]').forEach(card => {
    card.addEventListener('click', () => openTeaModal(card.dataset.teaId));
  });
  document.querySelectorAll('.remedy-card[data-recipe-id]').forEach(card => {
    card.addEventListener('click', () => openRecipeModal(card.dataset.recipeId));
  });
}

document.getElementById('wellness-back').addEventListener('click', resetWellness);

// ─── Store ────────────────────────────────────────────────────────────────────
function priceInRange(price, range) {
  if (range === 'all') return true;
  if (range === 'under10')  return price < 10;
  if (range === '10to20')   return price >= 10 && price <= 20;
  if (range === '20to35')   return price > 20 && price <= 35;
  if (range === 'over35')   return price > 35;
  return true;
}

function renderStore() {
  const grid = document.getElementById('store-grid');
  const q = storeSearch.toLowerCase();

  let items = TEAS.map(tea => {
    const data = STORE_DATA[tea.id] || null;
    return { tea, data };
  }).filter(({ tea }) => {
    if (storeFilter !== 'all' && tea.caffeine !== storeFilter) return false;
    if (q && !tea.name.toLowerCase().includes(q) && !tea.origin.toLowerCase().includes(q)) return false;
    if (storePriceFilter !== 'all') {
      const d = STORE_DATA[tea.id];
      if (!d) return storePriceFilter === 'all';
      if (!priceInRange(d.price, storePriceFilter)) return false;
    }
    return true;
  });

  if (storeSort === 'name') {
    items.sort((a, b) => a.tea.name.localeCompare(b.tea.name));
  } else if (storeSort === 'price-asc') {
    items.sort((a, b) => (a.data ? a.data.price : 999) - (b.data ? b.data.price : 999));
  } else if (storeSort === 'price-desc') {
    items.sort((a, b) => (b.data ? b.data.price : 0) - (a.data ? a.data.price : 0));
  }

  document.getElementById('store-count').textContent = `${items.length} tea${items.length !== 1 ? 's' : ''}`;

  grid.innerHTML = items.map(({ tea, data }) => {
    const cafClass = tea.caffeine === 'high' ? 'badge-high' : tea.caffeine === 'medium' ? 'badge-med' : tea.caffeine === 'low' ? 'badge-low' : 'badge-free';
    const cafLabel = tea.caffeine === 'high' ? 'High Caffeine' : tea.caffeine === 'medium' ? 'Medium' : tea.caffeine === 'low' ? 'Low' : 'Caffeine-Free';

    if (data) {
      return `
      <div class="store-card" data-tea-id="${tea.id}">
        <div class="store-img-wrap">
          <img src="${data.image}" alt="${tea.name}" class="store-img" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'store-img-fallback\\'>${tea.emoji}</div>'" />
          <span class="store-caffeine-badge ${cafClass}">${cafLabel}</span>
        </div>
        <div class="store-body">
          <div class="store-name">${tea.name}</div>
          <div class="store-origin">${tea.origin}</div>
          <div class="store-unit">${data.unit}</div>
          <div class="store-price-row">
            <span class="store-price">$${data.price.toFixed(2)}</span>
            <span class="store-vendor">${data.store}</span>
          </div>
          <div class="store-actions">
            <button class="store-detail-btn" data-tea-id="${tea.id}">Details</button>
            <a class="store-buy-btn" href="${data.url}" target="_blank" rel="noopener">Buy Now ↗</a>
          </div>
        </div>
      </div>`;
    } else {
      const searchUrl = `https://www.uptontea.com/search/?q=${encodeURIComponent(tea.name)}`;
      return `
      <div class="store-card store-card-pending" data-tea-id="${tea.id}">
        <div class="store-img-wrap">
          <div class="store-img-fallback">${tea.emoji}</div>
          <span class="store-caffeine-badge ${cafClass}">${cafLabel}</span>
        </div>
        <div class="store-body">
          <div class="store-name">${tea.name}</div>
          <div class="store-origin">${tea.origin}</div>
          <div class="store-unit store-unit-pending">Price data coming soon</div>
          <div class="store-price-row">
            <span class="store-price store-price-pending">—</span>
          </div>
          <div class="store-actions">
            <button class="store-detail-btn" data-tea-id="${tea.id}">Details</button>
            <a class="store-buy-btn store-buy-search" href="${searchUrl}" target="_blank" rel="noopener">Find Online ↗</a>
          </div>
        </div>
      </div>`;
    }
  }).join('');

  grid.querySelectorAll('.store-detail-btn').forEach(btn => {
    btn.addEventListener('click', () => openTeaModal(btn.dataset.teaId));
  });
}

document.getElementById('store-search').addEventListener('input', e => {
  storeSearch = e.target.value.toLowerCase().trim();
  renderStore();
});

document.querySelectorAll('.store-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.store-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    storeFilter = btn.dataset.filter;
    renderStore();
  });
});

document.querySelectorAll('.store-price-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.store-price-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    storePriceFilter = btn.dataset.price;
    renderStore();
  });
});

document.getElementById('store-sort').addEventListener('change', e => {
  storeSort = e.target.value;
  renderStore();
});

document.getElementById('start-basic').addEventListener('click', () => startQuiz('basic'));
document.getElementById('start-indepth').addEventListener('click', () => startQuiz('indepth'));

// ─── Init ─────────────────────────────────────────────────────────────────────
renderCatalog();
renderAdditives();
renderMixology();
renderStore();
