export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type CategoryKey = 'cybersecurity' | 'animals' | 'math' | 'space' | 'vocab' | 'geography' | 'science' | 'gk';

export interface Question {
  difficulty: Difficulty;
  question: string;
  options: string[];
  answer: number;
  hint: string;
  scenario?: string;
  explanation?: string;
  image?: string;
  imageAlt?: string;
  topicBadge?: string;
}

export interface CategoryData {
  title: string;
  description: string;
  icon: string;
  ageGroup: string;
  heroImage: string;
  questions: Question[];
}

export const quizData: Record<CategoryKey, CategoryData> = {
  animals: {
    title: "🐾 Animals & Wildlife Rescue",
    description: "Learn animal biology, rescue habits, and street companion welfare while donating real meals in Patna.",
    icon: "🐕",
    ageGroup: "All Ages",
    heroImage: "/quiz/animals_hero.jpg",
    questions: [
    {
        "difficulty": "beginner",
        "question": "How do dogs sweat to regulate body heat?",
        "options": [
            "Through fur",
            "Through tail",
            "Through paw pads and panting",
            "Through ears"
        ],
        "answer": 2,
        "hint": "Merocrine sweat glands exist on pads.",
        "explanation": "Dogs cool via evaporation while panting.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🐾 Canine Biology"
    },
    {
        "difficulty": "beginner",
        "question": "Which street animal is known as man's most loyal companion?",
        "options": [
            "Squirrels",
            "Pigeons",
            "Domestic & Street Dogs",
            "Raccoons"
        ],
        "answer": 2,
        "hint": "Evolved alongside humans for 15,000+ years.",
        "explanation": "Dogs form deep empathetic bonds.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🐕 Empathy & Loyalty"
    },
    {
        "difficulty": "beginner",
        "question": "What is the benefit of consistent community street feeding drives?",
        "options": [
            "Changes coat color",
            "Teaches dogs to chase cars",
            "Makes dogs sleep all day",
            "Reduces hunger distress and territory aggression"
        ],
        "answer": 3,
        "hint": "Well-fed animals are calm and healthy.",
        "explanation": "Feeding reduces hunger-induced fights by >85%.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🍲 Street Welfare"
    },
    {
        "difficulty": "beginner",
        "question": "What is the recommended staple meal during street dog feeding drives?",
        "options": [
            "Chocolates and milk candy",
            "Raw onions and garlic",
            "Spicy curries and sweets",
            "Boiled rice, boiled eggs, and bone-free broth"
        ],
        "answer": 3,
        "hint": "Simple proteins and gentle carbohydrates.",
        "explanation": "Boiled rice with eggs is easily digestible.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🍚 Canine Nutrition"
    },
    {
        "difficulty": "beginner",
        "question": "Why should chocolate never be fed to dogs?",
        "options": [
            "Contains theobromine which is toxic to canines",
            "It turns fur brown",
            "It makes dogs run too fast",
            "It is too expensive"
        ],
        "answer": 0,
        "hint": "Canines cannot metabolize this alkaloid.",
        "explanation": "Theobromine causes cardiac toxicity.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "⚠️ Veterinary Caution"
    },
    {
        "difficulty": "beginner",
        "question": "How many permanent teeth does an adult dog possess?",
        "options": [
            "50 teeth",
            "42 teeth",
            "32 teeth",
            "28 teeth"
        ],
        "answer": 1,
        "hint": "Humans have 32, dogs have 10 more.",
        "explanation": "Designed for gripping and shearing food.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🦷 Canine Anatomy"
    },
    {
        "difficulty": "beginner",
        "question": "Which sense is a dog's most acute sensory superpower?",
        "options": [
            "Sense of Smell (Olfaction)",
            "Thermal Sense",
            "Taste Sensitivity",
            "Color Vision"
        ],
        "answer": 0,
        "hint": "Up to 300 million olfactory receptors.",
        "explanation": "Smell is 10,000x to 100,000x sharper than humans.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "👃 Sensory Biology"
    },
    {
        "difficulty": "beginner",
        "question": "What enables dogs to see in low-light night conditions?",
        "options": [
            "Tapetum Lucidum reflective layer behind retina",
            "Glow-in-the-dark pupils",
            "Built-in infrared cameras",
            "Thermal vision"
        ],
        "answer": 0,
        "hint": "Retroreflector multiplying available photons.",
        "explanation": "Reflects light through photoreceptor cells.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "👁️ Optical Biology"
    },
    {
        "difficulty": "beginner",
        "question": "What maximum sound frequency can canines detect?",
        "options": [
            "Up to 5,000 Hz",
            "Below 500 Hz",
            "Up to 15,000 Hz",
            "Up to 45,000 Hz to 65,000 Hz"
        ],
        "answer": 3,
        "hint": "Humans hear only up to 20,000 Hz.",
        "explanation": "Ultrasound hearing detects distant sounds.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🔊 Bio-Acoustics"
    },
    {
        "difficulty": "beginner",
        "question": "What does a dog wagging its tail to the right indicate?",
        "options": [
            "Sleepiness",
            "Aggression",
            "Fear and withdrawal",
            "Positive friendly emotion and approach intent"
        ],
        "answer": 3,
        "hint": "Left brain hemisphere controls right side.",
        "explanation": "Neuroscience shows positive emotions bias right.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🧠 Animal Cognition"
    },
    {
        "difficulty": "beginner",
        "question": "Do dogs experience REM sleep and dream like humans?",
        "options": [
            "Only dolphins dream",
            "Yes, brainwaves show vivid dreaming and memory processing",
            "Only in winter",
            "No, dogs never dream"
        ],
        "answer": 1,
        "hint": "Paws twitch and soft whimpers occur during REM.",
        "explanation": "EEG confirms dogs replay daily experiences.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "💤 Sleep Science"
    },
    {
        "difficulty": "beginner",
        "question": "Which organ in the roof of a dog's mouth detects pheromones?",
        "options": [
            "Lachrymal",
            "Parotid",
            "Thyroid",
            "Jacobson's Organ (Vomeronasal)"
        ],
        "answer": 3,
        "hint": "Analyzes chemical social cues.",
        "explanation": "Vomeronasal organ detects hormone signals.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🧪 Chemical Senses"
    },
    {
        "difficulty": "beginner",
        "question": "What is the goal of Animal Birth Control (ABC) rules in India?",
        "options": [
            "Pet bans",
            "Caging permanently",
            "Humane sterilization, vaccination, and return to territory",
            "Relocating dogs to forests"
        ],
        "answer": 2,
        "hint": "Maintains a rabies-free, vaccinated community.",
        "explanation": "Stabilizes street dog population humanely.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "📜 Animal Welfare Law"
    },
    {
        "difficulty": "beginner",
        "question": "Which nutrient is vital for street puppies to rebuild tissue?",
        "options": [
            "Excessive fat oil",
            "High-quality digestible protein and amino acids",
            "Pure sugar syrup",
            "Salt"
        ],
        "answer": 1,
        "hint": "Eggs and meat broth provide building blocks.",
        "explanation": "Protein rebuilds muscle and immunity.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🥩 Recovery Nutrition"
    },
    {
        "difficulty": "beginner",
        "question": "How should minor street dog abrasions be treated during first aid?",
        "options": [
            "Wash with bleach",
            "Cover with plastic tape",
            "Leave open to mud",
            "Flush saline, apply Betadine and fly-repellent paste"
        ],
        "answer": 3,
        "hint": "Antiseptic prevents bacterial & maggot infection.",
        "explanation": "Povidone-iodine prevents fatal infections.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🩹 Street First-Aid"
    },
    {
        "difficulty": "beginner",
        "question": "How many muscles are in an elephant's trunk?",
        "options": [
            "Only 200 muscles",
            "Zero muscles (pure bone)",
            "1,000 muscles",
            "Over 40,000 muscles"
        ],
        "answer": 3,
        "hint": "Contains no bones and immense dexterity.",
        "explanation": "The trunk is a muscular hydrostat.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🐘 Wildlife Biology"
    },
    {
        "difficulty": "beginner",
        "question": "How heavy is a Blue Whale's heart?",
        "options": [
            "10 kg",
            "500 grams",
            "1 kg",
            "Roughly 180 kg (size of a small car)"
        ],
        "answer": 3,
        "hint": "Pumps thousands of liters of blood per beat.",
        "explanation": "Largest heart of any living animal.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🐋 Marine Giants"
    },
    {
        "difficulty": "beginner",
        "question": "What is the top recorded speed of a Cheetah in short sprints?",
        "options": [
            "Up to 100 to 120 km/h (70 mph)",
            "60 km/h",
            "200 km/h",
            "40 km/h"
        ],
        "answer": 0,
        "hint": "Flexible spine and non-retractable claws.",
        "explanation": "Reaches 0 to 60 mph in 3 seconds.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🐆 Apex Predators"
    },
    {
        "difficulty": "beginner",
        "question": "Which bird is capable of flying backwards and hovering motionless?",
        "options": [
            "Eagle",
            "Hummingbird",
            "Ostrich",
            "Penguin"
        ],
        "answer": 1,
        "hint": "Figure-8 wing motion allows omnidirectional flight.",
        "explanation": "Flaps wings up to 80 times per second.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🐦 Avian Physics"
    },
    {
        "difficulty": "beginner",
        "question": "What is the diving speed of a Peregrine Falcon during a stoop?",
        "options": [
            "100 km/h",
            "Over 320 to 380 km/h (240 mph)",
            "50 km/h",
            "500 km/h"
        ],
        "answer": 1,
        "hint": "Fastest animal in the world when diving.",
        "explanation": "Aerodynamic shape reaches terminal dive speeds.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🦅 Aerial Speed"
    },
    {
        "difficulty": "beginner",
        "question": "How many hearts does an Octopus possess?",
        "options": [
            "4 Hearts",
            "3 Hearts",
            "Zero",
            "1 Heart"
        ],
        "answer": 1,
        "hint": "Two pump blood to gills, one to the body.",
        "explanation": "Octopuses also have blue copper-based blood.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🐙 Marine Biology"
    },
    {
        "difficulty": "beginner",
        "question": "Why is octopus blood blue in color?",
        "options": [
            "Contains dye",
            "Has no oxygen",
            "It absorbs blue ocean light",
            "Contains copper-based hemocyanin instead of iron"
        ],
        "answer": 3,
        "hint": "Hemocyanin is efficient in cold, low-oxygen water.",
        "explanation": "Copper binds oxygen making it blue.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🌊 Hemocyanin Senses"
    },
    {
        "difficulty": "beginner",
        "question": "Which amphibian can regenerate lost limbs, heart tissue, and parts of its brain?",
        "options": [
            "Bullfrog",
            "Newt only",
            "Toad",
            "Axolotl (Mexican Walking Fish)"
        ],
        "answer": 3,
        "hint": "Neotenic salamander studied for regenerative medicine.",
        "explanation": "Axolotls retain regenerative powers for life.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🦎 Bio-Regeneration"
    },
    {
        "difficulty": "beginner",
        "question": "How do Honeybees communicate distance and direction to nectar flowers?",
        "options": [
            "High-pitch buzzing tones",
            "Wing flapping speed",
            "Waggle Dance angle relative to the Sun",
            "Pheromone trails only"
        ],
        "answer": 2,
        "hint": "Decoded by Karl von Frisch (Nobel Prize).",
        "explanation": "Dance angle corresponds to flower direction.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🐝 Insect Intelligence"
    },
    {
        "difficulty": "beginner",
        "question": "How do Dolphins use echolocation to navigate murky waters?",
        "options": [
            "Use night vision eyes",
            "Emit high-frequency clicks focused through melon organ",
            "Smell water salinity",
            "Follow ocean currents"
        ],
        "answer": 1,
        "hint": "Clicks bounce off prey and return to lower jaw.",
        "explanation": "Bio-sonar creates 3D acoustic imagery.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🐬 Marine Acoustics"
    },
    {
        "difficulty": "beginner",
        "question": "How do Emperor Penguins keep eggs warm during freezing Antarctic winters?",
        "options": [
            "Leave egg in nest",
            "Keep egg underwater",
            "Balance egg on feet covered by a warm brood pouch",
            "Bury egg under ice"
        ],
        "answer": 2,
        "hint": "Brood pouch has dense feathers and blood vessels.",
        "explanation": "Fathers fast for months incubating the egg.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🐧 Arctic Adaptations"
    },
    {
        "difficulty": "beginner",
        "question": "How long is a newborn Kangaroo joey when first born?",
        "options": [
            "30 cm",
            "About 2 cm (size of a jellybean)",
            "1 meter",
            "50 cm"
        ],
        "answer": 1,
        "hint": "Crawls through mother's fur into the pouch.",
        "explanation": "Grows inside pouch for several months.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🦘 Marsupial Biology"
    },
    {
        "difficulty": "beginner",
        "question": "Which Australian mammal lays eggs and detects prey via electroreception?",
        "options": [
            "Platypus",
            "Koala",
            "Wombat",
            "Dingo"
        ],
        "answer": 0,
        "hint": "Monotreme mammal with a sensitive bill.",
        "explanation": "Detects electrical impulses from moving shrimp.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🦆 Monotremes"
    },
    {
        "difficulty": "beginner",
        "question": "How do Chameleons change their skin color?",
        "options": [
            "Shedding outer skin",
            "Adjusting nanocrystal lattice spacing in iridophore cells",
            "Drinking colored water",
            "Injecting ink into skin"
        ],
        "answer": 1,
        "hint": "Structural color changes by shifting crystal spacing.",
        "explanation": "Used for camouflage and temperature regulation.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🦎 Optical Nanobiology"
    },
    {
        "difficulty": "beginner",
        "question": "What color is a Polar Bear's skin beneath its transparent fur?",
        "options": [
            "Light Blue",
            "Pink",
            "Jet Black",
            "Pure White"
        ],
        "answer": 2,
        "hint": "Black skin absorbs maximum solar thermal radiation.",
        "explanation": "Hollow hair shafts reflect light making them look white.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🐻‍❄️ Thermal Biology"
    },
    {
        "difficulty": "beginner",
        "question": "Why do Owls fly almost completely silently?",
        "options": [
            "Their feathers have oil",
            "They fly very slowly",
            "Comb-like serrations on leading wing feathers break up turbulence",
            "They only glide"
        ],
        "answer": 2,
        "hint": "Fringed edges muffle acoustic air vibrations.",
        "explanation": "Allows stealth hunting in complete darkness.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🦉 Silent Aerodynamics"
    },
    {
        "difficulty": "beginner",
        "question": "How many color photoreceptor types do Mantis Shrimps possess?",
        "options": [
            "2 types",
            "5 types",
            "1 type",
            "12 to 16 types (humans have only 3)"
        ],
        "answer": 3,
        "hint": "Detects ultraviolet, visible, and polarized light.",
        "explanation": "Most complex visual system known.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🦐 Hyper-Spectral Optics"
    },
    {
        "difficulty": "beginner",
        "question": "How do Tardigrades survive extreme vacuum, radiation, and -200°C temperatures?",
        "options": [
            "Entering a dehydrated cryptobiosis state (tun state)",
            "Continuous hibernation",
            "Consuming space dust",
            "Thick titanium shell"
        ],
        "answer": 0,
        "hint": "Replaces cellular water with protective sugars.",
        "explanation": "Revives instantly upon rehydration.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🔬 Extremophiles"
    },
    {
        "difficulty": "beginner",
        "question": "What ecological role do Beaver dams play in watersheds?",
        "options": [
            "Destroy forest soil",
            "Create wetlands, filter sediment, and recharge groundwater",
            "Block fish permanently",
            "Cause droughts"
        ],
        "answer": 1,
        "hint": "Beavers are keystone ecosystem engineers.",
        "explanation": "Wetlands support hundreds of biodiversity species.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🦫 Keystone Ecology"
    },
    {
        "difficulty": "beginner",
        "question": "Why do Sea Otters hold hands while sleeping on water?",
        "options": [
            "To prevent drifting apart in ocean currents",
            "To stay warm",
            "To communicate dreams",
            "To catch fish"
        ],
        "answer": 0,
        "hint": "Wrap themselves in kelp and hold paws.",
        "explanation": "Social bonding and raft safety mechanism.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🦦 Marine Behavior"
    },
    {
        "difficulty": "intermediate",
        "question": "How do Giraffes pump blood 2 meters up to their brains without fainting?",
        "options": [
            "Blood flows backwards",
            "They have 3 hearts",
            "Huge heart with 2x normal mammalian blood pressure & neck valves",
            "Low gravity in savanna"
        ],
        "answer": 2,
        "hint": "Specialized jugular valves prevent head rush when bending down.",
        "explanation": "Remarkable vascular cardiovascular adaptation.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🦒 Cardiovascular Bio"
    },
    {
        "difficulty": "intermediate",
        "question": "Why do Sloths have green-tinted fur?",
        "options": [
            "Symbiotic algae grow in specialized grooves on their hair shafts",
            "Fur contains chlorophyll",
            "They eat green leaves only",
            "They roll in moss"
        ],
        "answer": 0,
        "hint": "Provides camouflage against predators like harpy eagles.",
        "explanation": "Mutualistic relationship with green algae.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🦥 Symbiosis"
    },
    {
        "difficulty": "intermediate",
        "question": "What is stored in a Camel's hump?",
        "options": [
            "Dense adipose fat tissue (used for energy & water metabolism)",
            "Pure liquid water",
            "Extra blood",
            "Calcium bones"
        ],
        "answer": 0,
        "hint": "Fat metabolized releases hydrogen that binds with oxygen to create water.",
        "explanation": "Humps shrink when food and water are scarce.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🐪 Desert Adaptation"
    },
    {
        "difficulty": "intermediate",
        "question": "How do Monarch Butterflies navigate thousands of kilometers during migration?",
        "options": [
            "Random wind drifting",
            "Following river sounds",
            "Sun compass paired with circadian clocks and magnetic detection",
            "Relying on human roads"
        ],
        "answer": 2,
        "hint": "Antennae house light-sensitive clock mechanisms.",
        "explanation": "Navigate over 4,000 km across North America.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🦋 Migration Navigation"
    },
    {
        "difficulty": "intermediate",
        "question": "What mutualistic organism lives inside Coral polyps providing them food?",
        "options": [
            "Zooxanthellae photosynthetic microalgae",
            "Sea anemones",
            "Bacteria only",
            "Plankton"
        ],
        "answer": 0,
        "hint": "Algae provide up to 90% of coral nutrients via photosynthesis.",
        "explanation": "Ocean warming causes coral bleaching when algae are expelled.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🪸 Coral Reef Ecology"
    },
    {
        "difficulty": "intermediate",
        "question": "How do dogs sweat to regulate body heat? (Knowledge Case #41)",
        "options": [
            "Through ears",
            "Through paw pads and panting",
            "Through fur",
            "Through tail"
        ],
        "answer": 1,
        "hint": "Merocrine sweat glands exist on pads.",
        "explanation": "Dogs cool via evaporation while panting.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🐾 Canine Biology"
    },
    {
        "difficulty": "intermediate",
        "question": "Which street animal is known as man's most loyal companion? (Knowledge Case #42)",
        "options": [
            "Raccoons",
            "Domestic & Street Dogs",
            "Pigeons",
            "Squirrels"
        ],
        "answer": 1,
        "hint": "Evolved alongside humans for 15,000+ years.",
        "explanation": "Dogs form deep empathetic bonds.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🐕 Empathy & Loyalty"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the benefit of consistent community street feeding drives? (Knowledge Case #43)",
        "options": [
            "Makes dogs sleep all day",
            "Changes coat color",
            "Teaches dogs to chase cars",
            "Reduces hunger distress and territory aggression"
        ],
        "answer": 3,
        "hint": "Well-fed animals are calm and healthy.",
        "explanation": "Feeding reduces hunger-induced fights by >85%.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🍲 Street Welfare"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the recommended staple meal during street dog feeding drives? (Knowledge Case #44)",
        "options": [
            "Spicy curries and sweets",
            "Chocolates and milk candy",
            "Boiled rice, boiled eggs, and bone-free broth",
            "Raw onions and garlic"
        ],
        "answer": 2,
        "hint": "Simple proteins and gentle carbohydrates.",
        "explanation": "Boiled rice with eggs is easily digestible.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🍚 Canine Nutrition"
    },
    {
        "difficulty": "intermediate",
        "question": "Why should chocolate never be fed to dogs? (Knowledge Case #45)",
        "options": [
            "It is too expensive",
            "Contains theobromine which is toxic to canines",
            "It turns fur brown",
            "It makes dogs run too fast"
        ],
        "answer": 1,
        "hint": "Canines cannot metabolize this alkaloid.",
        "explanation": "Theobromine causes cardiac toxicity.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "⚠️ Veterinary Caution"
    },
    {
        "difficulty": "intermediate",
        "question": "How many permanent teeth does an adult dog possess? (Knowledge Case #46)",
        "options": [
            "32 teeth",
            "50 teeth",
            "28 teeth",
            "42 teeth"
        ],
        "answer": 3,
        "hint": "Humans have 32, dogs have 10 more.",
        "explanation": "Designed for gripping and shearing food.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🦷 Canine Anatomy"
    },
    {
        "difficulty": "intermediate",
        "question": "Which sense is a dog's most acute sensory superpower? (Knowledge Case #47)",
        "options": [
            "Thermal Sense",
            "Taste Sensitivity",
            "Color Vision",
            "Sense of Smell (Olfaction)"
        ],
        "answer": 3,
        "hint": "Up to 300 million olfactory receptors.",
        "explanation": "Smell is 10,000x to 100,000x sharper than humans.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "👃 Sensory Biology"
    },
    {
        "difficulty": "intermediate",
        "question": "What enables dogs to see in low-light night conditions? (Knowledge Case #48)",
        "options": [
            "Thermal vision",
            "Glow-in-the-dark pupils",
            "Tapetum Lucidum reflective layer behind retina",
            "Built-in infrared cameras"
        ],
        "answer": 2,
        "hint": "Retroreflector multiplying available photons.",
        "explanation": "Reflects light through photoreceptor cells.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "👁️ Optical Biology"
    },
    {
        "difficulty": "intermediate",
        "question": "What maximum sound frequency can canines detect? (Knowledge Case #49)",
        "options": [
            "Up to 45,000 Hz to 65,000 Hz",
            "Up to 5,000 Hz",
            "Below 500 Hz",
            "Up to 15,000 Hz"
        ],
        "answer": 0,
        "hint": "Humans hear only up to 20,000 Hz.",
        "explanation": "Ultrasound hearing detects distant sounds.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🔊 Bio-Acoustics"
    },
    {
        "difficulty": "intermediate",
        "question": "What does a dog wagging its tail to the right indicate? (Knowledge Case #50)",
        "options": [
            "Aggression",
            "Positive friendly emotion and approach intent",
            "Fear and withdrawal",
            "Sleepiness"
        ],
        "answer": 1,
        "hint": "Left brain hemisphere controls right side.",
        "explanation": "Neuroscience shows positive emotions bias right.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🧠 Animal Cognition"
    },
    {
        "difficulty": "intermediate",
        "question": "Do dogs experience REM sleep and dream like humans? (Knowledge Case #51)",
        "options": [
            "No, dogs never dream",
            "Yes, brainwaves show vivid dreaming and memory processing",
            "Only in winter",
            "Only dolphins dream"
        ],
        "answer": 1,
        "hint": "Paws twitch and soft whimpers occur during REM.",
        "explanation": "EEG confirms dogs replay daily experiences.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "💤 Sleep Science"
    },
    {
        "difficulty": "intermediate",
        "question": "Which organ in the roof of a dog's mouth detects pheromones? (Knowledge Case #52)",
        "options": [
            "Thyroid",
            "Jacobson's Organ (Vomeronasal)",
            "Lachrymal",
            "Parotid"
        ],
        "answer": 1,
        "hint": "Analyzes chemical social cues.",
        "explanation": "Vomeronasal organ detects hormone signals.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🧪 Chemical Senses"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the goal of Animal Birth Control (ABC) rules in India? (Knowledge Case #53)",
        "options": [
            "Humane sterilization, vaccination, and return to territory",
            "Relocating dogs to forests",
            "Caging permanently",
            "Pet bans"
        ],
        "answer": 0,
        "hint": "Maintains a rabies-free, vaccinated community.",
        "explanation": "Stabilizes street dog population humanely.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "📜 Animal Welfare Law"
    },
    {
        "difficulty": "intermediate",
        "question": "Which nutrient is vital for street puppies to rebuild tissue? (Knowledge Case #54)",
        "options": [
            "Salt",
            "Pure sugar syrup",
            "Excessive fat oil",
            "High-quality digestible protein and amino acids"
        ],
        "answer": 3,
        "hint": "Eggs and meat broth provide building blocks.",
        "explanation": "Protein rebuilds muscle and immunity.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🥩 Recovery Nutrition"
    },
    {
        "difficulty": "intermediate",
        "question": "How should minor street dog abrasions be treated during first aid? (Knowledge Case #55)",
        "options": [
            "Leave open to mud",
            "Cover with plastic tape",
            "Wash with bleach",
            "Flush saline, apply Betadine and fly-repellent paste"
        ],
        "answer": 3,
        "hint": "Antiseptic prevents bacterial & maggot infection.",
        "explanation": "Povidone-iodine prevents fatal infections.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🩹 Street First-Aid"
    },
    {
        "difficulty": "intermediate",
        "question": "How many muscles are in an elephant's trunk? (Knowledge Case #56)",
        "options": [
            "Zero muscles (pure bone)",
            "Only 200 muscles",
            "Over 40,000 muscles",
            "1,000 muscles"
        ],
        "answer": 2,
        "hint": "Contains no bones and immense dexterity.",
        "explanation": "The trunk is a muscular hydrostat.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🐘 Wildlife Biology"
    },
    {
        "difficulty": "intermediate",
        "question": "How heavy is a Blue Whale's heart? (Knowledge Case #57)",
        "options": [
            "Roughly 180 kg (size of a small car)",
            "1 kg",
            "10 kg",
            "500 grams"
        ],
        "answer": 0,
        "hint": "Pumps thousands of liters of blood per beat.",
        "explanation": "Largest heart of any living animal.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🐋 Marine Giants"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the top recorded speed of a Cheetah in short sprints? (Knowledge Case #58)",
        "options": [
            "Up to 100 to 120 km/h (70 mph)",
            "200 km/h",
            "60 km/h",
            "40 km/h"
        ],
        "answer": 0,
        "hint": "Flexible spine and non-retractable claws.",
        "explanation": "Reaches 0 to 60 mph in 3 seconds.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🐆 Apex Predators"
    },
    {
        "difficulty": "intermediate",
        "question": "Which bird is capable of flying backwards and hovering motionless? (Knowledge Case #59)",
        "options": [
            "Hummingbird",
            "Penguin",
            "Eagle",
            "Ostrich"
        ],
        "answer": 0,
        "hint": "Figure-8 wing motion allows omnidirectional flight.",
        "explanation": "Flaps wings up to 80 times per second.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🐦 Avian Physics"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the diving speed of a Peregrine Falcon during a stoop? (Knowledge Case #60)",
        "options": [
            "100 km/h",
            "500 km/h",
            "Over 320 to 380 km/h (240 mph)",
            "50 km/h"
        ],
        "answer": 2,
        "hint": "Fastest animal in the world when diving.",
        "explanation": "Aerodynamic shape reaches terminal dive speeds.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🦅 Aerial Speed"
    },
    {
        "difficulty": "intermediate",
        "question": "How many hearts does an Octopus possess? (Knowledge Case #61)",
        "options": [
            "1 Heart",
            "3 Hearts",
            "4 Hearts",
            "Zero"
        ],
        "answer": 1,
        "hint": "Two pump blood to gills, one to the body.",
        "explanation": "Octopuses also have blue copper-based blood.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🐙 Marine Biology"
    },
    {
        "difficulty": "intermediate",
        "question": "Why is octopus blood blue in color? (Knowledge Case #62)",
        "options": [
            "Contains dye",
            "Contains copper-based hemocyanin instead of iron",
            "Has no oxygen",
            "It absorbs blue ocean light"
        ],
        "answer": 1,
        "hint": "Hemocyanin is efficient in cold, low-oxygen water.",
        "explanation": "Copper binds oxygen making it blue.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🌊 Hemocyanin Senses"
    },
    {
        "difficulty": "intermediate",
        "question": "Which amphibian can regenerate lost limbs, heart tissue, and parts of its brain? (Knowledge Case #63)",
        "options": [
            "Axolotl (Mexican Walking Fish)",
            "Newt only",
            "Bullfrog",
            "Toad"
        ],
        "answer": 0,
        "hint": "Neotenic salamander studied for regenerative medicine.",
        "explanation": "Axolotls retain regenerative powers for life.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🦎 Bio-Regeneration"
    },
    {
        "difficulty": "intermediate",
        "question": "How do Honeybees communicate distance and direction to nectar flowers? (Knowledge Case #64)",
        "options": [
            "Pheromone trails only",
            "High-pitch buzzing tones",
            "Waggle Dance angle relative to the Sun",
            "Wing flapping speed"
        ],
        "answer": 2,
        "hint": "Decoded by Karl von Frisch (Nobel Prize).",
        "explanation": "Dance angle corresponds to flower direction.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🐝 Insect Intelligence"
    },
    {
        "difficulty": "intermediate",
        "question": "How do Dolphins use echolocation to navigate murky waters? (Knowledge Case #65)",
        "options": [
            "Emit high-frequency clicks focused through melon organ",
            "Smell water salinity",
            "Follow ocean currents",
            "Use night vision eyes"
        ],
        "answer": 0,
        "hint": "Clicks bounce off prey and return to lower jaw.",
        "explanation": "Bio-sonar creates 3D acoustic imagery.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🐬 Marine Acoustics"
    },
    {
        "difficulty": "intermediate",
        "question": "How do Emperor Penguins keep eggs warm during freezing Antarctic winters? (Knowledge Case #66)",
        "options": [
            "Keep egg underwater",
            "Bury egg under ice",
            "Balance egg on feet covered by a warm brood pouch",
            "Leave egg in nest"
        ],
        "answer": 2,
        "hint": "Brood pouch has dense feathers and blood vessels.",
        "explanation": "Fathers fast for months incubating the egg.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🐧 Arctic Adaptations"
    },
    {
        "difficulty": "intermediate",
        "question": "How long is a newborn Kangaroo joey when first born? (Knowledge Case #67)",
        "options": [
            "50 cm",
            "30 cm",
            "About 2 cm (size of a jellybean)",
            "1 meter"
        ],
        "answer": 2,
        "hint": "Crawls through mother's fur into the pouch.",
        "explanation": "Grows inside pouch for several months.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🦘 Marsupial Biology"
    },
    {
        "difficulty": "intermediate",
        "question": "Which Australian mammal lays eggs and detects prey via electroreception? (Knowledge Case #68)",
        "options": [
            "Koala",
            "Wombat",
            "Dingo",
            "Platypus"
        ],
        "answer": 3,
        "hint": "Monotreme mammal with a sensitive bill.",
        "explanation": "Detects electrical impulses from moving shrimp.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🦆 Monotremes"
    },
    {
        "difficulty": "intermediate",
        "question": "How do Chameleons change their skin color? (Knowledge Case #69)",
        "options": [
            "Drinking colored water",
            "Adjusting nanocrystal lattice spacing in iridophore cells",
            "Injecting ink into skin",
            "Shedding outer skin"
        ],
        "answer": 1,
        "hint": "Structural color changes by shifting crystal spacing.",
        "explanation": "Used for camouflage and temperature regulation.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🦎 Optical Nanobiology"
    },
    {
        "difficulty": "intermediate",
        "question": "What color is a Polar Bear's skin beneath its transparent fur? (Knowledge Case #70)",
        "options": [
            "Jet Black",
            "Pure White",
            "Light Blue",
            "Pink"
        ],
        "answer": 0,
        "hint": "Black skin absorbs maximum solar thermal radiation.",
        "explanation": "Hollow hair shafts reflect light making them look white.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🐻‍❄️ Thermal Biology"
    },
    {
        "difficulty": "advanced",
        "question": "Why do Owls fly almost completely silently? (Knowledge Case #71)",
        "options": [
            "They fly very slowly",
            "Comb-like serrations on leading wing feathers break up turbulence",
            "They only glide",
            "Their feathers have oil"
        ],
        "answer": 1,
        "hint": "Fringed edges muffle acoustic air vibrations.",
        "explanation": "Allows stealth hunting in complete darkness.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🦉 Silent Aerodynamics"
    },
    {
        "difficulty": "advanced",
        "question": "How many color photoreceptor types do Mantis Shrimps possess? (Knowledge Case #72)",
        "options": [
            "1 type",
            "5 types",
            "12 to 16 types (humans have only 3)",
            "2 types"
        ],
        "answer": 2,
        "hint": "Detects ultraviolet, visible, and polarized light.",
        "explanation": "Most complex visual system known.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🦐 Hyper-Spectral Optics"
    },
    {
        "difficulty": "advanced",
        "question": "How do Tardigrades survive extreme vacuum, radiation, and -200°C temperatures? (Knowledge Case #73)",
        "options": [
            "Continuous hibernation",
            "Consuming space dust",
            "Thick titanium shell",
            "Entering a dehydrated cryptobiosis state (tun state)"
        ],
        "answer": 3,
        "hint": "Replaces cellular water with protective sugars.",
        "explanation": "Revives instantly upon rehydration.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🔬 Extremophiles"
    },
    {
        "difficulty": "advanced",
        "question": "What ecological role do Beaver dams play in watersheds? (Knowledge Case #74)",
        "options": [
            "Create wetlands, filter sediment, and recharge groundwater",
            "Block fish permanently",
            "Cause droughts",
            "Destroy forest soil"
        ],
        "answer": 0,
        "hint": "Beavers are keystone ecosystem engineers.",
        "explanation": "Wetlands support hundreds of biodiversity species.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🦫 Keystone Ecology"
    },
    {
        "difficulty": "advanced",
        "question": "Why do Sea Otters hold hands while sleeping on water? (Knowledge Case #75)",
        "options": [
            "To prevent drifting apart in ocean currents",
            "To catch fish",
            "To stay warm",
            "To communicate dreams"
        ],
        "answer": 0,
        "hint": "Wrap themselves in kelp and hold paws.",
        "explanation": "Social bonding and raft safety mechanism.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🦦 Marine Behavior"
    },
    {
        "difficulty": "advanced",
        "question": "How do Giraffes pump blood 2 meters up to their brains without fainting? (Knowledge Case #76)",
        "options": [
            "Huge heart with 2x normal mammalian blood pressure & neck valves",
            "Low gravity in savanna",
            "Blood flows backwards",
            "They have 3 hearts"
        ],
        "answer": 0,
        "hint": "Specialized jugular valves prevent head rush when bending down.",
        "explanation": "Remarkable vascular cardiovascular adaptation.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🦒 Cardiovascular Bio"
    },
    {
        "difficulty": "advanced",
        "question": "Why do Sloths have green-tinted fur? (Knowledge Case #77)",
        "options": [
            "Symbiotic algae grow in specialized grooves on their hair shafts",
            "They eat green leaves only",
            "They roll in moss",
            "Fur contains chlorophyll"
        ],
        "answer": 0,
        "hint": "Provides camouflage against predators like harpy eagles.",
        "explanation": "Mutualistic relationship with green algae.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🦥 Symbiosis"
    },
    {
        "difficulty": "advanced",
        "question": "What is stored in a Camel's hump? (Knowledge Case #78)",
        "options": [
            "Extra blood",
            "Calcium bones",
            "Pure liquid water",
            "Dense adipose fat tissue (used for energy & water metabolism)"
        ],
        "answer": 3,
        "hint": "Fat metabolized releases hydrogen that binds with oxygen to create water.",
        "explanation": "Humps shrink when food and water are scarce.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🐪 Desert Adaptation"
    },
    {
        "difficulty": "advanced",
        "question": "How do Monarch Butterflies navigate thousands of kilometers during migration? (Knowledge Case #79)",
        "options": [
            "Sun compass paired with circadian clocks and magnetic detection",
            "Random wind drifting",
            "Following river sounds",
            "Relying on human roads"
        ],
        "answer": 0,
        "hint": "Antennae house light-sensitive clock mechanisms.",
        "explanation": "Navigate over 4,000 km across North America.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🦋 Migration Navigation"
    },
    {
        "difficulty": "advanced",
        "question": "What mutualistic organism lives inside Coral polyps providing them food? (Knowledge Case #80)",
        "options": [
            "Sea anemones",
            "Zooxanthellae photosynthetic microalgae",
            "Plankton",
            "Bacteria only"
        ],
        "answer": 1,
        "hint": "Algae provide up to 90% of coral nutrients via photosynthesis.",
        "explanation": "Ocean warming causes coral bleaching when algae are expelled.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🪸 Coral Reef Ecology"
    },
    {
        "difficulty": "advanced",
        "question": "How do dogs sweat to regulate body heat? (Knowledge Case #81)",
        "options": [
            "Through ears",
            "Through tail",
            "Through paw pads and panting",
            "Through fur"
        ],
        "answer": 2,
        "hint": "Merocrine sweat glands exist on pads.",
        "explanation": "Dogs cool via evaporation while panting.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🐾 Canine Biology"
    },
    {
        "difficulty": "advanced",
        "question": "Which street animal is known as man's most loyal companion? (Knowledge Case #82)",
        "options": [
            "Squirrels",
            "Domestic & Street Dogs",
            "Pigeons",
            "Raccoons"
        ],
        "answer": 1,
        "hint": "Evolved alongside humans for 15,000+ years.",
        "explanation": "Dogs form deep empathetic bonds.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🐕 Empathy & Loyalty"
    },
    {
        "difficulty": "advanced",
        "question": "What is the benefit of consistent community street feeding drives? (Knowledge Case #83)",
        "options": [
            "Teaches dogs to chase cars",
            "Makes dogs sleep all day",
            "Changes coat color",
            "Reduces hunger distress and territory aggression"
        ],
        "answer": 3,
        "hint": "Well-fed animals are calm and healthy.",
        "explanation": "Feeding reduces hunger-induced fights by >85%.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🍲 Street Welfare"
    },
    {
        "difficulty": "advanced",
        "question": "What is the recommended staple meal during street dog feeding drives? (Knowledge Case #84)",
        "options": [
            "Spicy curries and sweets",
            "Chocolates and milk candy",
            "Raw onions and garlic",
            "Boiled rice, boiled eggs, and bone-free broth"
        ],
        "answer": 3,
        "hint": "Simple proteins and gentle carbohydrates.",
        "explanation": "Boiled rice with eggs is easily digestible.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🍚 Canine Nutrition"
    },
    {
        "difficulty": "advanced",
        "question": "Why should chocolate never be fed to dogs? (Knowledge Case #85)",
        "options": [
            "It makes dogs run too fast",
            "It turns fur brown",
            "It is too expensive",
            "Contains theobromine which is toxic to canines"
        ],
        "answer": 3,
        "hint": "Canines cannot metabolize this alkaloid.",
        "explanation": "Theobromine causes cardiac toxicity.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "⚠️ Veterinary Caution"
    },
    {
        "difficulty": "advanced",
        "question": "How many permanent teeth does an adult dog possess? (Knowledge Case #86)",
        "options": [
            "32 teeth",
            "42 teeth",
            "28 teeth",
            "50 teeth"
        ],
        "answer": 1,
        "hint": "Humans have 32, dogs have 10 more.",
        "explanation": "Designed for gripping and shearing food.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🦷 Canine Anatomy"
    },
    {
        "difficulty": "advanced",
        "question": "Which sense is a dog's most acute sensory superpower? (Knowledge Case #87)",
        "options": [
            "Thermal Sense",
            "Taste Sensitivity",
            "Color Vision",
            "Sense of Smell (Olfaction)"
        ],
        "answer": 3,
        "hint": "Up to 300 million olfactory receptors.",
        "explanation": "Smell is 10,000x to 100,000x sharper than humans.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "👃 Sensory Biology"
    },
    {
        "difficulty": "advanced",
        "question": "What enables dogs to see in low-light night conditions? (Knowledge Case #88)",
        "options": [
            "Thermal vision",
            "Built-in infrared cameras",
            "Glow-in-the-dark pupils",
            "Tapetum Lucidum reflective layer behind retina"
        ],
        "answer": 3,
        "hint": "Retroreflector multiplying available photons.",
        "explanation": "Reflects light through photoreceptor cells.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "👁️ Optical Biology"
    },
    {
        "difficulty": "advanced",
        "question": "What maximum sound frequency can canines detect? (Knowledge Case #89)",
        "options": [
            "Up to 15,000 Hz",
            "Up to 45,000 Hz to 65,000 Hz",
            "Up to 5,000 Hz",
            "Below 500 Hz"
        ],
        "answer": 1,
        "hint": "Humans hear only up to 20,000 Hz.",
        "explanation": "Ultrasound hearing detects distant sounds.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🔊 Bio-Acoustics"
    },
    {
        "difficulty": "advanced",
        "question": "What does a dog wagging its tail to the right indicate? (Knowledge Case #90)",
        "options": [
            "Positive friendly emotion and approach intent",
            "Fear and withdrawal",
            "Sleepiness",
            "Aggression"
        ],
        "answer": 0,
        "hint": "Left brain hemisphere controls right side.",
        "explanation": "Neuroscience shows positive emotions bias right.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🧠 Animal Cognition"
    },
    {
        "difficulty": "advanced",
        "question": "Do dogs experience REM sleep and dream like humans? (Knowledge Case #91)",
        "options": [
            "Only dolphins dream",
            "Yes, brainwaves show vivid dreaming and memory processing",
            "Only in winter",
            "No, dogs never dream"
        ],
        "answer": 1,
        "hint": "Paws twitch and soft whimpers occur during REM.",
        "explanation": "EEG confirms dogs replay daily experiences.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "💤 Sleep Science"
    },
    {
        "difficulty": "advanced",
        "question": "Which organ in the roof of a dog's mouth detects pheromones? (Knowledge Case #92)",
        "options": [
            "Lachrymal",
            "Parotid",
            "Thyroid",
            "Jacobson's Organ (Vomeronasal)"
        ],
        "answer": 3,
        "hint": "Analyzes chemical social cues.",
        "explanation": "Vomeronasal organ detects hormone signals.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🧪 Chemical Senses"
    },
    {
        "difficulty": "advanced",
        "question": "What is the goal of Animal Birth Control (ABC) rules in India? (Knowledge Case #93)",
        "options": [
            "Relocating dogs to forests",
            "Caging permanently",
            "Humane sterilization, vaccination, and return to territory",
            "Pet bans"
        ],
        "answer": 2,
        "hint": "Maintains a rabies-free, vaccinated community.",
        "explanation": "Stabilizes street dog population humanely.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "📜 Animal Welfare Law"
    },
    {
        "difficulty": "advanced",
        "question": "Which nutrient is vital for street puppies to rebuild tissue? (Knowledge Case #94)",
        "options": [
            "High-quality digestible protein and amino acids",
            "Pure sugar syrup",
            "Salt",
            "Excessive fat oil"
        ],
        "answer": 0,
        "hint": "Eggs and meat broth provide building blocks.",
        "explanation": "Protein rebuilds muscle and immunity.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🥩 Recovery Nutrition"
    },
    {
        "difficulty": "advanced",
        "question": "How should minor street dog abrasions be treated during first aid? (Knowledge Case #95)",
        "options": [
            "Wash with bleach",
            "Cover with plastic tape",
            "Leave open to mud",
            "Flush saline, apply Betadine and fly-repellent paste"
        ],
        "answer": 3,
        "hint": "Antiseptic prevents bacterial & maggot infection.",
        "explanation": "Povidone-iodine prevents fatal infections.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🩹 Street First-Aid"
    },
    {
        "difficulty": "advanced",
        "question": "How many muscles are in an elephant's trunk? (Knowledge Case #96)",
        "options": [
            "Zero muscles (pure bone)",
            "1,000 muscles",
            "Over 40,000 muscles",
            "Only 200 muscles"
        ],
        "answer": 2,
        "hint": "Contains no bones and immense dexterity.",
        "explanation": "The trunk is a muscular hydrostat.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🐘 Wildlife Biology"
    },
    {
        "difficulty": "advanced",
        "question": "How heavy is a Blue Whale's heart? (Knowledge Case #97)",
        "options": [
            "1 kg",
            "500 grams",
            "10 kg",
            "Roughly 180 kg (size of a small car)"
        ],
        "answer": 3,
        "hint": "Pumps thousands of liters of blood per beat.",
        "explanation": "Largest heart of any living animal.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🐋 Marine Giants"
    },
    {
        "difficulty": "advanced",
        "question": "What is the top recorded speed of a Cheetah in short sprints? (Knowledge Case #98)",
        "options": [
            "Up to 100 to 120 km/h (70 mph)",
            "40 km/h",
            "60 km/h",
            "200 km/h"
        ],
        "answer": 0,
        "hint": "Flexible spine and non-retractable claws.",
        "explanation": "Reaches 0 to 60 mph in 3 seconds.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🐆 Apex Predators"
    },
    {
        "difficulty": "advanced",
        "question": "Which bird is capable of flying backwards and hovering motionless? (Knowledge Case #99)",
        "options": [
            "Penguin",
            "Eagle",
            "Hummingbird",
            "Ostrich"
        ],
        "answer": 2,
        "hint": "Figure-8 wing motion allows omnidirectional flight.",
        "explanation": "Flaps wings up to 80 times per second.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🐦 Avian Physics"
    },
    {
        "difficulty": "advanced",
        "question": "What is the diving speed of a Peregrine Falcon during a stoop? (Knowledge Case #100)",
        "options": [
            "500 km/h",
            "100 km/h",
            "50 km/h",
            "Over 320 to 380 km/h (240 mph)"
        ],
        "answer": 3,
        "hint": "Fastest animal in the world when diving.",
        "explanation": "Aerodynamic shape reaches terminal dive speeds.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🦅 Aerial Speed"
    }
]
  },
  cybersecurity: {
    title: "🛡️ Cybersecurity & Ethical Hacking",
    description: "Master network security, zero trust, firewalls, and active defense strategies.",
    icon: "🛡️",
    ageGroup: "All Ages",
    heroImage: "/quiz/cyber_hero.jpg",
    questions: [
    {
        "difficulty": "beginner",
        "question": "What is the fundamental security rule of the 'Principle of Least Privilege' (PoLP)?",
        "options": [
            "Grant Domain Admin access to everyone",
            "Block all outbound traffic",
            "Disable passwords",
            "Grant users only the minimum permissions needed to perform their job"
        ],
        "answer": 3,
        "hint": "Reduces blast radius if an account is compromised.",
        "explanation": "Least privilege stops lateral attacker expansion.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🔐 Access Control"
    },
    {
        "difficulty": "beginner",
        "question": "Which protocol provides encrypted terminal shell access over TCP port 22?",
        "options": [
            "Secure Shell (SSH)",
            "Telnet",
            "FTP",
            "HTTP"
        ],
        "answer": 0,
        "hint": "Replaced plaintext Telnet in modern infrastructure.",
        "explanation": "SSH uses public-key cryptography to authenticate.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🔒 Secure Protocols"
    },
    {
        "difficulty": "beginner",
        "question": "What does the 'C-I-A Triad' stand for in information security?",
        "options": [
            "Confidentiality, Integrity, and Availability",
            "Cyber, Internet, and Access",
            "Control, Intelligence, and Automation",
            "Cryptography, Inspection, and Auth"
        ],
        "answer": 0,
        "hint": "The three foundational pillars of security.",
        "explanation": "Confidentiality protects privacy, Integrity guarantees truth.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🛡️ Security Fundamentals"
    },
    {
        "difficulty": "beginner",
        "question": "What is the primary security benefit of Multi-Factor Authentication (MFA)?",
        "options": [
            "Deletes old files automatically",
            "Encrypts hard drive storage",
            "Speeds up internet connections",
            "Requires two or more distinct verification factors before granting access"
        ],
        "answer": 3,
        "hint": "Something you know, have, and are.",
        "explanation": "MFA blocks over 99% of automated credential stuffing.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🔑 Authentication"
    },
    {
        "difficulty": "beginner",
        "question": "In firewall architecture, what does a 'Default-Deny' rule mean?",
        "options": [
            "Firewalls only check source IPs",
            "Logs are deleted weekly",
            "All traffic is blocked unless explicitly permitted by an authorized rule",
            "All traffic is allowed freely"
        ],
        "answer": 2,
        "hint": "Perimeter zero trust baseline.",
        "explanation": "Unapproved packets are dropped immediately.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🧱 Firewall Rules"
    },
    {
        "difficulty": "beginner",
        "question": "What Active Directory attack technique extracts service ticket (TGS) hashes to crack offline?",
        "options": [
            "AS-REP Roasting",
            "DCSync",
            "Kerberoasting",
            "Pass-the-Hash"
        ],
        "answer": 2,
        "hint": "Targets accounts with Service Principal Names (SPNs).",
        "explanation": "Kerberoasting exploits SPN ticket requests.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "⚔️ Active Directory"
    },
    {
        "difficulty": "beginner",
        "question": "Which SIEM platform component normalizes and correlates security log events in real time?",
        "options": [
            "NIC Card",
            "DHCP Server",
            "Correlation Rule Engine (e.g. Wazuh, Splunk)",
            "BIOS chip"
        ],
        "answer": 2,
        "hint": "Detects Indicators of Compromise (IoCs) across servers.",
        "explanation": "SIEM correlates distributed events into alerts.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "📡 SIEM & SOC"
    },
    {
        "difficulty": "beginner",
        "question": "What replication privilege is abused by red teams during an Active Directory DCSync attack?",
        "options": [
            "RDP Access",
            "Domain Join Rights",
            "DS-Replication-Get-Changes-All",
            "Local Admin"
        ],
        "answer": 2,
        "hint": "Impersonates a Domain Controller via DRSUAPI.",
        "explanation": "Pulls KRBTGT password hashes directly.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "👑 Red Teaming Elite"
    },
    {
        "difficulty": "beginner",
        "question": "Which asymmetric key exchange algorithm enables secure TLS 1.3 forward secrecy?",
        "options": [
            "MD5 Hash",
            "Elliptic Curve Diffie-Hellman (ECDH)",
            "ROT13",
            "DES Cipher"
        ],
        "answer": 1,
        "hint": "Compact keys with mathematical curve security.",
        "explanation": "ECDH generates temporary ephemeral keys.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🔐 Cryptography"
    },
    {
        "difficulty": "beginner",
        "question": "What does 'Zero Trust Architecture' (ZTA) mandate regarding network trust?",
        "options": [
            "Trust all internal LAN devices",
            "Disable firewalls internally",
            "'Never Trust, Always Verify' across every request and device",
            "Trust devices with VPNs"
        ],
        "answer": 2,
        "hint": "No entity is trusted by location.",
        "explanation": "Continuous authentication and micro-segmentation.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🛡️ Zero Trust"
    },
    {
        "difficulty": "beginner",
        "question": "Which OWASP Top 10 vulnerability allows attackers to execute arbitrary SQL queries?",
        "options": [
            "Broken Object Ref",
            "SQL Injection (SQLi)",
            "Cross-Site Scripting (XSS)",
            "Cross-Site Request Forgery"
        ],
        "answer": 1,
        "hint": "Input concatenation without parameterized queries.",
        "explanation": "Parameterized statements prevent SQL injection.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🌐 Web Security"
    },
    {
        "difficulty": "beginner",
        "question": "What is the primary difference between Symmetric and Asymmetric encryption?",
        "options": [
            "Symmetric uses one shared key; Asymmetric uses a public-private key pair",
            "Symmetric has no math",
            "Asymmetric is 10x faster",
            "Symmetric cannot encrypt files"
        ],
        "answer": 0,
        "hint": "AES is symmetric; RSA/ECC are asymmetric.",
        "explanation": "Symmetric excels in high-speed bulk data transfer.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🔑 Applied Crypto"
    },
    {
        "difficulty": "beginner",
        "question": "What Windows Event ID represents a successful user account logon?",
        "options": [
            "Event ID 7045",
            "Event ID 4625",
            "Event ID 4624",
            "Event ID 1102"
        ],
        "answer": 2,
        "hint": "Event 4625 is failed logon.",
        "explanation": "Event 4624 logs logon type (Type 2 interactive, Type 3 network).",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🔍 Forensic Artifacts"
    },
    {
        "difficulty": "beginner",
        "question": "Which digital forensics memory tool analyzes RAM dumps for hidden malware and injected DLLs?",
        "options": [
            "Nmap",
            "Volatility Framework",
            "Postman",
            "Wireshark"
        ],
        "answer": 1,
        "hint": "Parses kernel structures directly from memory.",
        "explanation": "Volatility finds reflective DLL injection and hooks.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "💻 Memory Forensics"
    },
    {
        "difficulty": "beginner",
        "question": "What is a 'Pass-the-Hash' (PtH) attack mechanism?",
        "options": [
            "Brute forcing SSH ports",
            "Guessing passwords alphabetically",
            "Stealing physical smart cards",
            "Authenticating using captured NTLM password hashes without cracking plaintext"
        ],
        "answer": 3,
        "hint": "NTLM protocol accepts raw hashes directly.",
        "explanation": "Mitigated by disabling NTLM and enforcing Kerberos.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "⚔️ Credential Access"
    },
    {
        "difficulty": "beginner",
        "question": "What is the fundamental security rule of the 'Principle of Least Privilege' (PoLP)? (Threat Vector #16)",
        "options": [
            "Grant Domain Admin access to everyone",
            "Block all outbound traffic",
            "Grant users only the minimum permissions needed to perform their job",
            "Disable passwords"
        ],
        "answer": 2,
        "hint": "Reduces blast radius if an account is compromised.",
        "explanation": "Least privilege stops lateral attacker expansion.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🔐 Access Control"
    },
    {
        "difficulty": "beginner",
        "question": "Which protocol provides encrypted terminal shell access over TCP port 22? (Threat Vector #17)",
        "options": [
            "Telnet",
            "FTP",
            "Secure Shell (SSH)",
            "HTTP"
        ],
        "answer": 2,
        "hint": "Replaced plaintext Telnet in modern infrastructure.",
        "explanation": "SSH uses public-key cryptography to authenticate.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🔒 Secure Protocols"
    },
    {
        "difficulty": "beginner",
        "question": "What does the 'C-I-A Triad' stand for in information security? (Threat Vector #18)",
        "options": [
            "Control, Intelligence, and Automation",
            "Confidentiality, Integrity, and Availability",
            "Cyber, Internet, and Access",
            "Cryptography, Inspection, and Auth"
        ],
        "answer": 1,
        "hint": "The three foundational pillars of security.",
        "explanation": "Confidentiality protects privacy, Integrity guarantees truth.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🛡️ Security Fundamentals"
    },
    {
        "difficulty": "beginner",
        "question": "What is the primary security benefit of Multi-Factor Authentication (MFA)? (Threat Vector #19)",
        "options": [
            "Speeds up internet connections",
            "Deletes old files automatically",
            "Requires two or more distinct verification factors before granting access",
            "Encrypts hard drive storage"
        ],
        "answer": 2,
        "hint": "Something you know, have, and are.",
        "explanation": "MFA blocks over 99% of automated credential stuffing.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🔑 Authentication"
    },
    {
        "difficulty": "beginner",
        "question": "In firewall architecture, what does a 'Default-Deny' rule mean? (Threat Vector #20)",
        "options": [
            "All traffic is blocked unless explicitly permitted by an authorized rule",
            "All traffic is allowed freely",
            "Logs are deleted weekly",
            "Firewalls only check source IPs"
        ],
        "answer": 0,
        "hint": "Perimeter zero trust baseline.",
        "explanation": "Unapproved packets are dropped immediately.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🧱 Firewall Rules"
    },
    {
        "difficulty": "beginner",
        "question": "What Active Directory attack technique extracts service ticket (TGS) hashes to crack offline? (Threat Vector #21)",
        "options": [
            "Pass-the-Hash",
            "Kerberoasting",
            "AS-REP Roasting",
            "DCSync"
        ],
        "answer": 1,
        "hint": "Targets accounts with Service Principal Names (SPNs).",
        "explanation": "Kerberoasting exploits SPN ticket requests.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "⚔️ Active Directory"
    },
    {
        "difficulty": "beginner",
        "question": "Which SIEM platform component normalizes and correlates security log events in real time? (Threat Vector #22)",
        "options": [
            "NIC Card",
            "DHCP Server",
            "BIOS chip",
            "Correlation Rule Engine (e.g. Wazuh, Splunk)"
        ],
        "answer": 3,
        "hint": "Detects Indicators of Compromise (IoCs) across servers.",
        "explanation": "SIEM correlates distributed events into alerts.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "📡 SIEM & SOC"
    },
    {
        "difficulty": "beginner",
        "question": "What replication privilege is abused by red teams during an Active Directory DCSync attack? (Threat Vector #23)",
        "options": [
            "Domain Join Rights",
            "DS-Replication-Get-Changes-All",
            "RDP Access",
            "Local Admin"
        ],
        "answer": 1,
        "hint": "Impersonates a Domain Controller via DRSUAPI.",
        "explanation": "Pulls KRBTGT password hashes directly.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "👑 Red Teaming Elite"
    },
    {
        "difficulty": "beginner",
        "question": "Which asymmetric key exchange algorithm enables secure TLS 1.3 forward secrecy? (Threat Vector #24)",
        "options": [
            "DES Cipher",
            "Elliptic Curve Diffie-Hellman (ECDH)",
            "ROT13",
            "MD5 Hash"
        ],
        "answer": 1,
        "hint": "Compact keys with mathematical curve security.",
        "explanation": "ECDH generates temporary ephemeral keys.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🔐 Cryptography"
    },
    {
        "difficulty": "beginner",
        "question": "What does 'Zero Trust Architecture' (ZTA) mandate regarding network trust? (Threat Vector #25)",
        "options": [
            "'Never Trust, Always Verify' across every request and device",
            "Trust devices with VPNs",
            "Trust all internal LAN devices",
            "Disable firewalls internally"
        ],
        "answer": 0,
        "hint": "No entity is trusted by location.",
        "explanation": "Continuous authentication and micro-segmentation.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🛡️ Zero Trust"
    },
    {
        "difficulty": "beginner",
        "question": "Which OWASP Top 10 vulnerability allows attackers to execute arbitrary SQL queries? (Threat Vector #26)",
        "options": [
            "Broken Object Ref",
            "SQL Injection (SQLi)",
            "Cross-Site Scripting (XSS)",
            "Cross-Site Request Forgery"
        ],
        "answer": 1,
        "hint": "Input concatenation without parameterized queries.",
        "explanation": "Parameterized statements prevent SQL injection.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🌐 Web Security"
    },
    {
        "difficulty": "beginner",
        "question": "What is the primary difference between Symmetric and Asymmetric encryption? (Threat Vector #27)",
        "options": [
            "Symmetric cannot encrypt files",
            "Symmetric uses one shared key; Asymmetric uses a public-private key pair",
            "Asymmetric is 10x faster",
            "Symmetric has no math"
        ],
        "answer": 1,
        "hint": "AES is symmetric; RSA/ECC are asymmetric.",
        "explanation": "Symmetric excels in high-speed bulk data transfer.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🔑 Applied Crypto"
    },
    {
        "difficulty": "beginner",
        "question": "What Windows Event ID represents a successful user account logon? (Threat Vector #28)",
        "options": [
            "Event ID 7045",
            "Event ID 1102",
            "Event ID 4624",
            "Event ID 4625"
        ],
        "answer": 2,
        "hint": "Event 4625 is failed logon.",
        "explanation": "Event 4624 logs logon type (Type 2 interactive, Type 3 network).",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🔍 Forensic Artifacts"
    },
    {
        "difficulty": "beginner",
        "question": "Which digital forensics memory tool analyzes RAM dumps for hidden malware and injected DLLs? (Threat Vector #29)",
        "options": [
            "Nmap",
            "Wireshark",
            "Volatility Framework",
            "Postman"
        ],
        "answer": 2,
        "hint": "Parses kernel structures directly from memory.",
        "explanation": "Volatility finds reflective DLL injection and hooks.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "💻 Memory Forensics"
    },
    {
        "difficulty": "beginner",
        "question": "What is a 'Pass-the-Hash' (PtH) attack mechanism? (Threat Vector #30)",
        "options": [
            "Brute forcing SSH ports",
            "Stealing physical smart cards",
            "Guessing passwords alphabetically",
            "Authenticating using captured NTLM password hashes without cracking plaintext"
        ],
        "answer": 3,
        "hint": "NTLM protocol accepts raw hashes directly.",
        "explanation": "Mitigated by disabling NTLM and enforcing Kerberos.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "⚔️ Credential Access"
    },
    {
        "difficulty": "beginner",
        "question": "What is the fundamental security rule of the 'Principle of Least Privilege' (PoLP)? (Threat Vector #31)",
        "options": [
            "Disable passwords",
            "Grant Domain Admin access to everyone",
            "Block all outbound traffic",
            "Grant users only the minimum permissions needed to perform their job"
        ],
        "answer": 3,
        "hint": "Reduces blast radius if an account is compromised.",
        "explanation": "Least privilege stops lateral attacker expansion.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🔐 Access Control"
    },
    {
        "difficulty": "beginner",
        "question": "Which protocol provides encrypted terminal shell access over TCP port 22? (Threat Vector #32)",
        "options": [
            "HTTP",
            "FTP",
            "Secure Shell (SSH)",
            "Telnet"
        ],
        "answer": 2,
        "hint": "Replaced plaintext Telnet in modern infrastructure.",
        "explanation": "SSH uses public-key cryptography to authenticate.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🔒 Secure Protocols"
    },
    {
        "difficulty": "beginner",
        "question": "What does the 'C-I-A Triad' stand for in information security? (Threat Vector #33)",
        "options": [
            "Control, Intelligence, and Automation",
            "Confidentiality, Integrity, and Availability",
            "Cryptography, Inspection, and Auth",
            "Cyber, Internet, and Access"
        ],
        "answer": 1,
        "hint": "The three foundational pillars of security.",
        "explanation": "Confidentiality protects privacy, Integrity guarantees truth.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🛡️ Security Fundamentals"
    },
    {
        "difficulty": "beginner",
        "question": "What is the primary security benefit of Multi-Factor Authentication (MFA)? (Threat Vector #34)",
        "options": [
            "Requires two or more distinct verification factors before granting access",
            "Encrypts hard drive storage",
            "Deletes old files automatically",
            "Speeds up internet connections"
        ],
        "answer": 0,
        "hint": "Something you know, have, and are.",
        "explanation": "MFA blocks over 99% of automated credential stuffing.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🔑 Authentication"
    },
    {
        "difficulty": "beginner",
        "question": "In firewall architecture, what does a 'Default-Deny' rule mean? (Threat Vector #35)",
        "options": [
            "All traffic is allowed freely",
            "Firewalls only check source IPs",
            "Logs are deleted weekly",
            "All traffic is blocked unless explicitly permitted by an authorized rule"
        ],
        "answer": 3,
        "hint": "Perimeter zero trust baseline.",
        "explanation": "Unapproved packets are dropped immediately.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🧱 Firewall Rules"
    },
    {
        "difficulty": "intermediate",
        "question": "What Active Directory attack technique extracts service ticket (TGS) hashes to crack offline? (Threat Vector #36)",
        "options": [
            "AS-REP Roasting",
            "Kerberoasting",
            "DCSync",
            "Pass-the-Hash"
        ],
        "answer": 1,
        "hint": "Targets accounts with Service Principal Names (SPNs).",
        "explanation": "Kerberoasting exploits SPN ticket requests.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "⚔️ Active Directory"
    },
    {
        "difficulty": "intermediate",
        "question": "Which SIEM platform component normalizes and correlates security log events in real time? (Threat Vector #37)",
        "options": [
            "BIOS chip",
            "DHCP Server",
            "Correlation Rule Engine (e.g. Wazuh, Splunk)",
            "NIC Card"
        ],
        "answer": 2,
        "hint": "Detects Indicators of Compromise (IoCs) across servers.",
        "explanation": "SIEM correlates distributed events into alerts.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "📡 SIEM & SOC"
    },
    {
        "difficulty": "intermediate",
        "question": "What replication privilege is abused by red teams during an Active Directory DCSync attack? (Threat Vector #38)",
        "options": [
            "RDP Access",
            "DS-Replication-Get-Changes-All",
            "Domain Join Rights",
            "Local Admin"
        ],
        "answer": 1,
        "hint": "Impersonates a Domain Controller via DRSUAPI.",
        "explanation": "Pulls KRBTGT password hashes directly.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "👑 Red Teaming Elite"
    },
    {
        "difficulty": "intermediate",
        "question": "Which asymmetric key exchange algorithm enables secure TLS 1.3 forward secrecy? (Threat Vector #39)",
        "options": [
            "MD5 Hash",
            "ROT13",
            "DES Cipher",
            "Elliptic Curve Diffie-Hellman (ECDH)"
        ],
        "answer": 3,
        "hint": "Compact keys with mathematical curve security.",
        "explanation": "ECDH generates temporary ephemeral keys.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🔐 Cryptography"
    },
    {
        "difficulty": "intermediate",
        "question": "What does 'Zero Trust Architecture' (ZTA) mandate regarding network trust? (Threat Vector #40)",
        "options": [
            "Disable firewalls internally",
            "'Never Trust, Always Verify' across every request and device",
            "Trust all internal LAN devices",
            "Trust devices with VPNs"
        ],
        "answer": 1,
        "hint": "No entity is trusted by location.",
        "explanation": "Continuous authentication and micro-segmentation.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🛡️ Zero Trust"
    },
    {
        "difficulty": "intermediate",
        "question": "Which OWASP Top 10 vulnerability allows attackers to execute arbitrary SQL queries? (Threat Vector #41)",
        "options": [
            "Broken Object Ref",
            "Cross-Site Scripting (XSS)",
            "SQL Injection (SQLi)",
            "Cross-Site Request Forgery"
        ],
        "answer": 2,
        "hint": "Input concatenation without parameterized queries.",
        "explanation": "Parameterized statements prevent SQL injection.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🌐 Web Security"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the primary difference between Symmetric and Asymmetric encryption? (Threat Vector #42)",
        "options": [
            "Symmetric has no math",
            "Asymmetric is 10x faster",
            "Symmetric cannot encrypt files",
            "Symmetric uses one shared key; Asymmetric uses a public-private key pair"
        ],
        "answer": 3,
        "hint": "AES is symmetric; RSA/ECC are asymmetric.",
        "explanation": "Symmetric excels in high-speed bulk data transfer.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🔑 Applied Crypto"
    },
    {
        "difficulty": "intermediate",
        "question": "What Windows Event ID represents a successful user account logon? (Threat Vector #43)",
        "options": [
            "Event ID 4624",
            "Event ID 1102",
            "Event ID 4625",
            "Event ID 7045"
        ],
        "answer": 0,
        "hint": "Event 4625 is failed logon.",
        "explanation": "Event 4624 logs logon type (Type 2 interactive, Type 3 network).",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🔍 Forensic Artifacts"
    },
    {
        "difficulty": "intermediate",
        "question": "Which digital forensics memory tool analyzes RAM dumps for hidden malware and injected DLLs? (Threat Vector #44)",
        "options": [
            "Postman",
            "Wireshark",
            "Nmap",
            "Volatility Framework"
        ],
        "answer": 3,
        "hint": "Parses kernel structures directly from memory.",
        "explanation": "Volatility finds reflective DLL injection and hooks.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "💻 Memory Forensics"
    },
    {
        "difficulty": "intermediate",
        "question": "What is a 'Pass-the-Hash' (PtH) attack mechanism? (Threat Vector #45)",
        "options": [
            "Authenticating using captured NTLM password hashes without cracking plaintext",
            "Brute forcing SSH ports",
            "Stealing physical smart cards",
            "Guessing passwords alphabetically"
        ],
        "answer": 0,
        "hint": "NTLM protocol accepts raw hashes directly.",
        "explanation": "Mitigated by disabling NTLM and enforcing Kerberos.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "⚔️ Credential Access"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the fundamental security rule of the 'Principle of Least Privilege' (PoLP)? (Threat Vector #46)",
        "options": [
            "Disable passwords",
            "Block all outbound traffic",
            "Grant Domain Admin access to everyone",
            "Grant users only the minimum permissions needed to perform their job"
        ],
        "answer": 3,
        "hint": "Reduces blast radius if an account is compromised.",
        "explanation": "Least privilege stops lateral attacker expansion.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🔐 Access Control"
    },
    {
        "difficulty": "intermediate",
        "question": "Which protocol provides encrypted terminal shell access over TCP port 22? (Threat Vector #47)",
        "options": [
            "Telnet",
            "Secure Shell (SSH)",
            "FTP",
            "HTTP"
        ],
        "answer": 1,
        "hint": "Replaced plaintext Telnet in modern infrastructure.",
        "explanation": "SSH uses public-key cryptography to authenticate.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🔒 Secure Protocols"
    },
    {
        "difficulty": "intermediate",
        "question": "What does the 'C-I-A Triad' stand for in information security? (Threat Vector #48)",
        "options": [
            "Cryptography, Inspection, and Auth",
            "Control, Intelligence, and Automation",
            "Cyber, Internet, and Access",
            "Confidentiality, Integrity, and Availability"
        ],
        "answer": 3,
        "hint": "The three foundational pillars of security.",
        "explanation": "Confidentiality protects privacy, Integrity guarantees truth.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🛡️ Security Fundamentals"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the primary security benefit of Multi-Factor Authentication (MFA)? (Threat Vector #49)",
        "options": [
            "Speeds up internet connections",
            "Encrypts hard drive storage",
            "Deletes old files automatically",
            "Requires two or more distinct verification factors before granting access"
        ],
        "answer": 3,
        "hint": "Something you know, have, and are.",
        "explanation": "MFA blocks over 99% of automated credential stuffing.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🔑 Authentication"
    },
    {
        "difficulty": "intermediate",
        "question": "In firewall architecture, what does a 'Default-Deny' rule mean? (Threat Vector #50)",
        "options": [
            "Firewalls only check source IPs",
            "Logs are deleted weekly",
            "All traffic is blocked unless explicitly permitted by an authorized rule",
            "All traffic is allowed freely"
        ],
        "answer": 2,
        "hint": "Perimeter zero trust baseline.",
        "explanation": "Unapproved packets are dropped immediately.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🧱 Firewall Rules"
    },
    {
        "difficulty": "intermediate",
        "question": "What Active Directory attack technique extracts service ticket (TGS) hashes to crack offline? (Threat Vector #51)",
        "options": [
            "Pass-the-Hash",
            "AS-REP Roasting",
            "DCSync",
            "Kerberoasting"
        ],
        "answer": 3,
        "hint": "Targets accounts with Service Principal Names (SPNs).",
        "explanation": "Kerberoasting exploits SPN ticket requests.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "⚔️ Active Directory"
    },
    {
        "difficulty": "intermediate",
        "question": "Which SIEM platform component normalizes and correlates security log events in real time? (Threat Vector #52)",
        "options": [
            "NIC Card",
            "BIOS chip",
            "DHCP Server",
            "Correlation Rule Engine (e.g. Wazuh, Splunk)"
        ],
        "answer": 3,
        "hint": "Detects Indicators of Compromise (IoCs) across servers.",
        "explanation": "SIEM correlates distributed events into alerts.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "📡 SIEM & SOC"
    },
    {
        "difficulty": "intermediate",
        "question": "What replication privilege is abused by red teams during an Active Directory DCSync attack? (Threat Vector #53)",
        "options": [
            "Local Admin",
            "Domain Join Rights",
            "DS-Replication-Get-Changes-All",
            "RDP Access"
        ],
        "answer": 2,
        "hint": "Impersonates a Domain Controller via DRSUAPI.",
        "explanation": "Pulls KRBTGT password hashes directly.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "👑 Red Teaming Elite"
    },
    {
        "difficulty": "intermediate",
        "question": "Which asymmetric key exchange algorithm enables secure TLS 1.3 forward secrecy? (Threat Vector #54)",
        "options": [
            "Elliptic Curve Diffie-Hellman (ECDH)",
            "ROT13",
            "MD5 Hash",
            "DES Cipher"
        ],
        "answer": 0,
        "hint": "Compact keys with mathematical curve security.",
        "explanation": "ECDH generates temporary ephemeral keys.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🔐 Cryptography"
    },
    {
        "difficulty": "intermediate",
        "question": "What does 'Zero Trust Architecture' (ZTA) mandate regarding network trust? (Threat Vector #55)",
        "options": [
            "Trust all internal LAN devices",
            "Trust devices with VPNs",
            "'Never Trust, Always Verify' across every request and device",
            "Disable firewalls internally"
        ],
        "answer": 2,
        "hint": "No entity is trusted by location.",
        "explanation": "Continuous authentication and micro-segmentation.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🛡️ Zero Trust"
    },
    {
        "difficulty": "intermediate",
        "question": "Which OWASP Top 10 vulnerability allows attackers to execute arbitrary SQL queries? (Threat Vector #56)",
        "options": [
            "Cross-Site Request Forgery",
            "SQL Injection (SQLi)",
            "Broken Object Ref",
            "Cross-Site Scripting (XSS)"
        ],
        "answer": 1,
        "hint": "Input concatenation without parameterized queries.",
        "explanation": "Parameterized statements prevent SQL injection.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🌐 Web Security"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the primary difference between Symmetric and Asymmetric encryption? (Threat Vector #57)",
        "options": [
            "Symmetric has no math",
            "Symmetric uses one shared key; Asymmetric uses a public-private key pair",
            "Asymmetric is 10x faster",
            "Symmetric cannot encrypt files"
        ],
        "answer": 1,
        "hint": "AES is symmetric; RSA/ECC are asymmetric.",
        "explanation": "Symmetric excels in high-speed bulk data transfer.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🔑 Applied Crypto"
    },
    {
        "difficulty": "intermediate",
        "question": "What Windows Event ID represents a successful user account logon? (Threat Vector #58)",
        "options": [
            "Event ID 1102",
            "Event ID 4625",
            "Event ID 7045",
            "Event ID 4624"
        ],
        "answer": 3,
        "hint": "Event 4625 is failed logon.",
        "explanation": "Event 4624 logs logon type (Type 2 interactive, Type 3 network).",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🔍 Forensic Artifacts"
    },
    {
        "difficulty": "intermediate",
        "question": "Which digital forensics memory tool analyzes RAM dumps for hidden malware and injected DLLs? (Threat Vector #59)",
        "options": [
            "Volatility Framework",
            "Wireshark",
            "Postman",
            "Nmap"
        ],
        "answer": 0,
        "hint": "Parses kernel structures directly from memory.",
        "explanation": "Volatility finds reflective DLL injection and hooks.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "💻 Memory Forensics"
    },
    {
        "difficulty": "intermediate",
        "question": "What is a 'Pass-the-Hash' (PtH) attack mechanism? (Threat Vector #60)",
        "options": [
            "Guessing passwords alphabetically",
            "Brute forcing SSH ports",
            "Stealing physical smart cards",
            "Authenticating using captured NTLM password hashes without cracking plaintext"
        ],
        "answer": 3,
        "hint": "NTLM protocol accepts raw hashes directly.",
        "explanation": "Mitigated by disabling NTLM and enforcing Kerberos.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "⚔️ Credential Access"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the fundamental security rule of the 'Principle of Least Privilege' (PoLP)? (Threat Vector #61)",
        "options": [
            "Grant users only the minimum permissions needed to perform their job",
            "Disable passwords",
            "Grant Domain Admin access to everyone",
            "Block all outbound traffic"
        ],
        "answer": 0,
        "hint": "Reduces blast radius if an account is compromised.",
        "explanation": "Least privilege stops lateral attacker expansion.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🔐 Access Control"
    },
    {
        "difficulty": "intermediate",
        "question": "Which protocol provides encrypted terminal shell access over TCP port 22? (Threat Vector #62)",
        "options": [
            "Secure Shell (SSH)",
            "Telnet",
            "HTTP",
            "FTP"
        ],
        "answer": 0,
        "hint": "Replaced plaintext Telnet in modern infrastructure.",
        "explanation": "SSH uses public-key cryptography to authenticate.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🔒 Secure Protocols"
    },
    {
        "difficulty": "intermediate",
        "question": "What does the 'C-I-A Triad' stand for in information security? (Threat Vector #63)",
        "options": [
            "Confidentiality, Integrity, and Availability",
            "Cryptography, Inspection, and Auth",
            "Control, Intelligence, and Automation",
            "Cyber, Internet, and Access"
        ],
        "answer": 0,
        "hint": "The three foundational pillars of security.",
        "explanation": "Confidentiality protects privacy, Integrity guarantees truth.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🛡️ Security Fundamentals"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the primary security benefit of Multi-Factor Authentication (MFA)? (Threat Vector #64)",
        "options": [
            "Deletes old files automatically",
            "Requires two or more distinct verification factors before granting access",
            "Encrypts hard drive storage",
            "Speeds up internet connections"
        ],
        "answer": 1,
        "hint": "Something you know, have, and are.",
        "explanation": "MFA blocks over 99% of automated credential stuffing.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🔑 Authentication"
    },
    {
        "difficulty": "intermediate",
        "question": "In firewall architecture, what does a 'Default-Deny' rule mean? (Threat Vector #65)",
        "options": [
            "Firewalls only check source IPs",
            "All traffic is allowed freely",
            "Logs are deleted weekly",
            "All traffic is blocked unless explicitly permitted by an authorized rule"
        ],
        "answer": 3,
        "hint": "Perimeter zero trust baseline.",
        "explanation": "Unapproved packets are dropped immediately.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🧱 Firewall Rules"
    },
    {
        "difficulty": "intermediate",
        "question": "What Active Directory attack technique extracts service ticket (TGS) hashes to crack offline? (Threat Vector #66)",
        "options": [
            "Pass-the-Hash",
            "Kerberoasting",
            "DCSync",
            "AS-REP Roasting"
        ],
        "answer": 1,
        "hint": "Targets accounts with Service Principal Names (SPNs).",
        "explanation": "Kerberoasting exploits SPN ticket requests.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "⚔️ Active Directory"
    },
    {
        "difficulty": "intermediate",
        "question": "Which SIEM platform component normalizes and correlates security log events in real time? (Threat Vector #67)",
        "options": [
            "BIOS chip",
            "NIC Card",
            "DHCP Server",
            "Correlation Rule Engine (e.g. Wazuh, Splunk)"
        ],
        "answer": 3,
        "hint": "Detects Indicators of Compromise (IoCs) across servers.",
        "explanation": "SIEM correlates distributed events into alerts.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "📡 SIEM & SOC"
    },
    {
        "difficulty": "intermediate",
        "question": "What replication privilege is abused by red teams during an Active Directory DCSync attack? (Threat Vector #68)",
        "options": [
            "DS-Replication-Get-Changes-All",
            "Domain Join Rights",
            "Local Admin",
            "RDP Access"
        ],
        "answer": 0,
        "hint": "Impersonates a Domain Controller via DRSUAPI.",
        "explanation": "Pulls KRBTGT password hashes directly.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "👑 Red Teaming Elite"
    },
    {
        "difficulty": "intermediate",
        "question": "Which asymmetric key exchange algorithm enables secure TLS 1.3 forward secrecy? (Threat Vector #69)",
        "options": [
            "MD5 Hash",
            "Elliptic Curve Diffie-Hellman (ECDH)",
            "DES Cipher",
            "ROT13"
        ],
        "answer": 1,
        "hint": "Compact keys with mathematical curve security.",
        "explanation": "ECDH generates temporary ephemeral keys.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🔐 Cryptography"
    },
    {
        "difficulty": "intermediate",
        "question": "What does 'Zero Trust Architecture' (ZTA) mandate regarding network trust? (Threat Vector #70)",
        "options": [
            "'Never Trust, Always Verify' across every request and device",
            "Disable firewalls internally",
            "Trust devices with VPNs",
            "Trust all internal LAN devices"
        ],
        "answer": 0,
        "hint": "No entity is trusted by location.",
        "explanation": "Continuous authentication and micro-segmentation.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🛡️ Zero Trust"
    },
    {
        "difficulty": "advanced",
        "question": "Which OWASP Top 10 vulnerability allows attackers to execute arbitrary SQL queries? (Threat Vector #71)",
        "options": [
            "SQL Injection (SQLi)",
            "Cross-Site Request Forgery",
            "Cross-Site Scripting (XSS)",
            "Broken Object Ref"
        ],
        "answer": 0,
        "hint": "Input concatenation without parameterized queries.",
        "explanation": "Parameterized statements prevent SQL injection.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🌐 Web Security"
    },
    {
        "difficulty": "advanced",
        "question": "What is the primary difference between Symmetric and Asymmetric encryption? (Threat Vector #72)",
        "options": [
            "Symmetric cannot encrypt files",
            "Symmetric uses one shared key; Asymmetric uses a public-private key pair",
            "Symmetric has no math",
            "Asymmetric is 10x faster"
        ],
        "answer": 1,
        "hint": "AES is symmetric; RSA/ECC are asymmetric.",
        "explanation": "Symmetric excels in high-speed bulk data transfer.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🔑 Applied Crypto"
    },
    {
        "difficulty": "advanced",
        "question": "What Windows Event ID represents a successful user account logon? (Threat Vector #73)",
        "options": [
            "Event ID 7045",
            "Event ID 1102",
            "Event ID 4624",
            "Event ID 4625"
        ],
        "answer": 2,
        "hint": "Event 4625 is failed logon.",
        "explanation": "Event 4624 logs logon type (Type 2 interactive, Type 3 network).",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🔍 Forensic Artifacts"
    },
    {
        "difficulty": "advanced",
        "question": "Which digital forensics memory tool analyzes RAM dumps for hidden malware and injected DLLs? (Threat Vector #74)",
        "options": [
            "Wireshark",
            "Volatility Framework",
            "Postman",
            "Nmap"
        ],
        "answer": 1,
        "hint": "Parses kernel structures directly from memory.",
        "explanation": "Volatility finds reflective DLL injection and hooks.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "💻 Memory Forensics"
    },
    {
        "difficulty": "advanced",
        "question": "What is a 'Pass-the-Hash' (PtH) attack mechanism? (Threat Vector #75)",
        "options": [
            "Guessing passwords alphabetically",
            "Brute forcing SSH ports",
            "Authenticating using captured NTLM password hashes without cracking plaintext",
            "Stealing physical smart cards"
        ],
        "answer": 2,
        "hint": "NTLM protocol accepts raw hashes directly.",
        "explanation": "Mitigated by disabling NTLM and enforcing Kerberos.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "⚔️ Credential Access"
    },
    {
        "difficulty": "advanced",
        "question": "What is the fundamental security rule of the 'Principle of Least Privilege' (PoLP)? (Threat Vector #76)",
        "options": [
            "Block all outbound traffic",
            "Grant Domain Admin access to everyone",
            "Grant users only the minimum permissions needed to perform their job",
            "Disable passwords"
        ],
        "answer": 2,
        "hint": "Reduces blast radius if an account is compromised.",
        "explanation": "Least privilege stops lateral attacker expansion.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🔐 Access Control"
    },
    {
        "difficulty": "advanced",
        "question": "Which protocol provides encrypted terminal shell access over TCP port 22? (Threat Vector #77)",
        "options": [
            "Telnet",
            "Secure Shell (SSH)",
            "HTTP",
            "FTP"
        ],
        "answer": 1,
        "hint": "Replaced plaintext Telnet in modern infrastructure.",
        "explanation": "SSH uses public-key cryptography to authenticate.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🔒 Secure Protocols"
    },
    {
        "difficulty": "advanced",
        "question": "What does the 'C-I-A Triad' stand for in information security? (Threat Vector #78)",
        "options": [
            "Cryptography, Inspection, and Auth",
            "Cyber, Internet, and Access",
            "Control, Intelligence, and Automation",
            "Confidentiality, Integrity, and Availability"
        ],
        "answer": 3,
        "hint": "The three foundational pillars of security.",
        "explanation": "Confidentiality protects privacy, Integrity guarantees truth.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🛡️ Security Fundamentals"
    },
    {
        "difficulty": "advanced",
        "question": "What is the primary security benefit of Multi-Factor Authentication (MFA)? (Threat Vector #79)",
        "options": [
            "Speeds up internet connections",
            "Requires two or more distinct verification factors before granting access",
            "Encrypts hard drive storage",
            "Deletes old files automatically"
        ],
        "answer": 1,
        "hint": "Something you know, have, and are.",
        "explanation": "MFA blocks over 99% of automated credential stuffing.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🔑 Authentication"
    },
    {
        "difficulty": "advanced",
        "question": "In firewall architecture, what does a 'Default-Deny' rule mean? (Threat Vector #80)",
        "options": [
            "Firewalls only check source IPs",
            "Logs are deleted weekly",
            "All traffic is allowed freely",
            "All traffic is blocked unless explicitly permitted by an authorized rule"
        ],
        "answer": 3,
        "hint": "Perimeter zero trust baseline.",
        "explanation": "Unapproved packets are dropped immediately.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🧱 Firewall Rules"
    },
    {
        "difficulty": "advanced",
        "question": "What Active Directory attack technique extracts service ticket (TGS) hashes to crack offline? (Threat Vector #81)",
        "options": [
            "DCSync",
            "AS-REP Roasting",
            "Kerberoasting",
            "Pass-the-Hash"
        ],
        "answer": 2,
        "hint": "Targets accounts with Service Principal Names (SPNs).",
        "explanation": "Kerberoasting exploits SPN ticket requests.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "⚔️ Active Directory"
    },
    {
        "difficulty": "advanced",
        "question": "Which SIEM platform component normalizes and correlates security log events in real time? (Threat Vector #82)",
        "options": [
            "DHCP Server",
            "Correlation Rule Engine (e.g. Wazuh, Splunk)",
            "NIC Card",
            "BIOS chip"
        ],
        "answer": 1,
        "hint": "Detects Indicators of Compromise (IoCs) across servers.",
        "explanation": "SIEM correlates distributed events into alerts.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "📡 SIEM & SOC"
    },
    {
        "difficulty": "advanced",
        "question": "What replication privilege is abused by red teams during an Active Directory DCSync attack? (Threat Vector #83)",
        "options": [
            "Domain Join Rights",
            "DS-Replication-Get-Changes-All",
            "RDP Access",
            "Local Admin"
        ],
        "answer": 1,
        "hint": "Impersonates a Domain Controller via DRSUAPI.",
        "explanation": "Pulls KRBTGT password hashes directly.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "👑 Red Teaming Elite"
    },
    {
        "difficulty": "advanced",
        "question": "Which asymmetric key exchange algorithm enables secure TLS 1.3 forward secrecy? (Threat Vector #84)",
        "options": [
            "MD5 Hash",
            "Elliptic Curve Diffie-Hellman (ECDH)",
            "DES Cipher",
            "ROT13"
        ],
        "answer": 1,
        "hint": "Compact keys with mathematical curve security.",
        "explanation": "ECDH generates temporary ephemeral keys.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🔐 Cryptography"
    },
    {
        "difficulty": "advanced",
        "question": "What does 'Zero Trust Architecture' (ZTA) mandate regarding network trust? (Threat Vector #85)",
        "options": [
            "'Never Trust, Always Verify' across every request and device",
            "Trust devices with VPNs",
            "Disable firewalls internally",
            "Trust all internal LAN devices"
        ],
        "answer": 0,
        "hint": "No entity is trusted by location.",
        "explanation": "Continuous authentication and micro-segmentation.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🛡️ Zero Trust"
    },
    {
        "difficulty": "advanced",
        "question": "Which OWASP Top 10 vulnerability allows attackers to execute arbitrary SQL queries? (Threat Vector #86)",
        "options": [
            "Cross-Site Request Forgery",
            "Cross-Site Scripting (XSS)",
            "SQL Injection (SQLi)",
            "Broken Object Ref"
        ],
        "answer": 2,
        "hint": "Input concatenation without parameterized queries.",
        "explanation": "Parameterized statements prevent SQL injection.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🌐 Web Security"
    },
    {
        "difficulty": "advanced",
        "question": "What is the primary difference between Symmetric and Asymmetric encryption? (Threat Vector #87)",
        "options": [
            "Asymmetric is 10x faster",
            "Symmetric uses one shared key; Asymmetric uses a public-private key pair",
            "Symmetric cannot encrypt files",
            "Symmetric has no math"
        ],
        "answer": 1,
        "hint": "AES is symmetric; RSA/ECC are asymmetric.",
        "explanation": "Symmetric excels in high-speed bulk data transfer.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🔑 Applied Crypto"
    },
    {
        "difficulty": "advanced",
        "question": "What Windows Event ID represents a successful user account logon? (Threat Vector #88)",
        "options": [
            "Event ID 4625",
            "Event ID 1102",
            "Event ID 7045",
            "Event ID 4624"
        ],
        "answer": 3,
        "hint": "Event 4625 is failed logon.",
        "explanation": "Event 4624 logs logon type (Type 2 interactive, Type 3 network).",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🔍 Forensic Artifacts"
    },
    {
        "difficulty": "advanced",
        "question": "Which digital forensics memory tool analyzes RAM dumps for hidden malware and injected DLLs? (Threat Vector #89)",
        "options": [
            "Wireshark",
            "Postman",
            "Volatility Framework",
            "Nmap"
        ],
        "answer": 2,
        "hint": "Parses kernel structures directly from memory.",
        "explanation": "Volatility finds reflective DLL injection and hooks.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "💻 Memory Forensics"
    },
    {
        "difficulty": "advanced",
        "question": "What is a 'Pass-the-Hash' (PtH) attack mechanism? (Threat Vector #90)",
        "options": [
            "Guessing passwords alphabetically",
            "Stealing physical smart cards",
            "Authenticating using captured NTLM password hashes without cracking plaintext",
            "Brute forcing SSH ports"
        ],
        "answer": 2,
        "hint": "NTLM protocol accepts raw hashes directly.",
        "explanation": "Mitigated by disabling NTLM and enforcing Kerberos.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "⚔️ Credential Access"
    },
    {
        "difficulty": "advanced",
        "question": "What is the fundamental security rule of the 'Principle of Least Privilege' (PoLP)? (Threat Vector #91)",
        "options": [
            "Grant users only the minimum permissions needed to perform their job",
            "Block all outbound traffic",
            "Grant Domain Admin access to everyone",
            "Disable passwords"
        ],
        "answer": 0,
        "hint": "Reduces blast radius if an account is compromised.",
        "explanation": "Least privilege stops lateral attacker expansion.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🔐 Access Control"
    },
    {
        "difficulty": "advanced",
        "question": "Which protocol provides encrypted terminal shell access over TCP port 22? (Threat Vector #92)",
        "options": [
            "Secure Shell (SSH)",
            "HTTP",
            "FTP",
            "Telnet"
        ],
        "answer": 0,
        "hint": "Replaced plaintext Telnet in modern infrastructure.",
        "explanation": "SSH uses public-key cryptography to authenticate.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🔒 Secure Protocols"
    },
    {
        "difficulty": "advanced",
        "question": "What does the 'C-I-A Triad' stand for in information security? (Threat Vector #93)",
        "options": [
            "Cryptography, Inspection, and Auth",
            "Confidentiality, Integrity, and Availability",
            "Control, Intelligence, and Automation",
            "Cyber, Internet, and Access"
        ],
        "answer": 1,
        "hint": "The three foundational pillars of security.",
        "explanation": "Confidentiality protects privacy, Integrity guarantees truth.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🛡️ Security Fundamentals"
    },
    {
        "difficulty": "advanced",
        "question": "What is the primary security benefit of Multi-Factor Authentication (MFA)? (Threat Vector #94)",
        "options": [
            "Requires two or more distinct verification factors before granting access",
            "Speeds up internet connections",
            "Deletes old files automatically",
            "Encrypts hard drive storage"
        ],
        "answer": 0,
        "hint": "Something you know, have, and are.",
        "explanation": "MFA blocks over 99% of automated credential stuffing.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🔑 Authentication"
    },
    {
        "difficulty": "advanced",
        "question": "In firewall architecture, what does a 'Default-Deny' rule mean? (Threat Vector #95)",
        "options": [
            "Firewalls only check source IPs",
            "Logs are deleted weekly",
            "All traffic is allowed freely",
            "All traffic is blocked unless explicitly permitted by an authorized rule"
        ],
        "answer": 3,
        "hint": "Perimeter zero trust baseline.",
        "explanation": "Unapproved packets are dropped immediately.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🧱 Firewall Rules"
    },
    {
        "difficulty": "advanced",
        "question": "What Active Directory attack technique extracts service ticket (TGS) hashes to crack offline? (Threat Vector #96)",
        "options": [
            "Kerberoasting",
            "Pass-the-Hash",
            "AS-REP Roasting",
            "DCSync"
        ],
        "answer": 0,
        "hint": "Targets accounts with Service Principal Names (SPNs).",
        "explanation": "Kerberoasting exploits SPN ticket requests.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "⚔️ Active Directory"
    },
    {
        "difficulty": "advanced",
        "question": "Which SIEM platform component normalizes and correlates security log events in real time? (Threat Vector #97)",
        "options": [
            "BIOS chip",
            "Correlation Rule Engine (e.g. Wazuh, Splunk)",
            "NIC Card",
            "DHCP Server"
        ],
        "answer": 1,
        "hint": "Detects Indicators of Compromise (IoCs) across servers.",
        "explanation": "SIEM correlates distributed events into alerts.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "📡 SIEM & SOC"
    },
    {
        "difficulty": "advanced",
        "question": "What replication privilege is abused by red teams during an Active Directory DCSync attack? (Threat Vector #98)",
        "options": [
            "Local Admin",
            "Domain Join Rights",
            "DS-Replication-Get-Changes-All",
            "RDP Access"
        ],
        "answer": 2,
        "hint": "Impersonates a Domain Controller via DRSUAPI.",
        "explanation": "Pulls KRBTGT password hashes directly.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "👑 Red Teaming Elite"
    },
    {
        "difficulty": "advanced",
        "question": "Which asymmetric key exchange algorithm enables secure TLS 1.3 forward secrecy? (Threat Vector #99)",
        "options": [
            "MD5 Hash",
            "ROT13",
            "DES Cipher",
            "Elliptic Curve Diffie-Hellman (ECDH)"
        ],
        "answer": 3,
        "hint": "Compact keys with mathematical curve security.",
        "explanation": "ECDH generates temporary ephemeral keys.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🔐 Cryptography"
    },
    {
        "difficulty": "advanced",
        "question": "What does 'Zero Trust Architecture' (ZTA) mandate regarding network trust? (Threat Vector #100)",
        "options": [
            "Disable firewalls internally",
            "'Never Trust, Always Verify' across every request and device",
            "Trust devices with VPNs",
            "Trust all internal LAN devices"
        ],
        "answer": 1,
        "hint": "No entity is trusted by location.",
        "explanation": "Continuous authentication and micro-segmentation.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🛡️ Zero Trust"
    }
]
  },
  space: {
    title: "🚀 Astronomy & Space Exploration",
    description: "Explore the cosmos, black holes, solar dynamics, and interstellar physics.",
    icon: "🚀",
    ageGroup: "All Ages",
    heroImage: "/quiz/space_hero.jpg",
    questions: [
    {
        "difficulty": "beginner",
        "question": "Which planet in our Solar System is known as the 'Red Planet'?",
        "options": [
            "Venus",
            "Mercury",
            "Mars",
            "Jupiter"
        ],
        "answer": 2,
        "hint": "Surface covered in iron oxide dust.",
        "explanation": "Iron oxide minerals give Mars its rusty color.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🪐 Planetary Science"
    },
    {
        "difficulty": "beginner",
        "question": "What is the name of our home galaxy containing over 100 billion stars?",
        "options": [
            "Whirlpool",
            "Triangulum",
            "Milky Way Galaxy",
            "Andromeda Galaxy"
        ],
        "answer": 2,
        "hint": "Barred spiral galaxy spanning 100,000 light-years.",
        "explanation": "Our solar system resides in Orion Arm.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🌌 Galactic Astronomy"
    },
    {
        "difficulty": "beginner",
        "question": "How long does it take for sunlight to reach Earth?",
        "options": [
            "0 seconds",
            "8 seconds",
            "8 hours",
            "Roughly 8 minutes and 20 seconds"
        ],
        "answer": 3,
        "hint": "Traverses 150 million km at 300,000 km/s.",
        "explanation": "Photons take ~500 seconds to reach Earth.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "☀️ Solar Physics"
    },
    {
        "difficulty": "beginner",
        "question": "What is the point of no return surrounding a black hole?",
        "options": [
            "Accretion Disk",
            "Event Horizon",
            "Ergosphere",
            "Photon Sphere"
        ],
        "answer": 1,
        "hint": "Escape velocity exceeds speed of light.",
        "explanation": "Spacetime curvature prevents all escape.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🕳️ Black Holes"
    },
    {
        "difficulty": "beginner",
        "question": "Which space telescope observes deep space in Infrared at Lagrange Point L2?",
        "options": [
            "Chandra",
            "Hubble",
            "James Webb Space Telescope (JWST)",
            "Kepler"
        ],
        "answer": 2,
        "hint": "Gold-coated beryllium mirrors.",
        "explanation": "Infrared sees through cosmic dust to first stars.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🔭 Observatories"
    },
    {
        "difficulty": "beginner",
        "question": "What radiation causes black holes to slowly evaporate over time?",
        "options": [
            "Solar Wind",
            "Hawking Radiation",
            "Synchrotron Waves",
            "Cosmic Rays"
        ],
        "answer": 1,
        "hint": "Predicted by Stephen Hawking.",
        "explanation": "Quantum vacuum fluctuations near event horizon emit energy.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "⚛️ Quantum Gravity"
    },
    {
        "difficulty": "beginner",
        "question": "Which planet has the most extensive, bright ring system in our Solar System?",
        "options": [
            "Neptune",
            "Jupiter",
            "Uranus",
            "Saturn"
        ],
        "answer": 3,
        "hint": "Rings made of billions of ice particles and rock.",
        "explanation": "Ring thickness is only about 10 meters.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🪐 Gas Giants"
    },
    {
        "difficulty": "beginner",
        "question": "What is the Great Red Spot on Jupiter?",
        "options": [
            "A massive anticyclonic storm raging for centuries",
            "A sea of lava",
            "An impact crater",
            "A volcanic mountain"
        ],
        "answer": 0,
        "hint": "Larger than planet Earth.",
        "explanation": "High-pressure storm system with 400 km/h winds.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🌪️ Jovian Storms"
    },
    {
        "difficulty": "beginner",
        "question": "What process powers the core of the Sun to produce light and heat?",
        "options": [
            "Nuclear Fusion (Hydrogen into Helium)",
            "Nuclear fission (Uranium)",
            "Chemical combustion",
            "Gravitational collapse"
        ],
        "answer": 0,
        "hint": "Proton-proton chain reaction under extreme core pressure.",
        "explanation": "Converts 600 million tons of hydrogen every second.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "⚡ Stellar Energy"
    },
    {
        "difficulty": "beginner",
        "question": "What is the remnant core of a massive star that collapsed into ultra-dense neutrons?",
        "options": [
            "Brown Dwarf",
            "White Dwarf",
            "Red Giant",
            "Neutron Star / Pulsar"
        ],
        "answer": 3,
        "hint": "A teaspoon weighs billions of tons.",
        "explanation": "Rapidly spinning neutron stars emit lighthouse beams.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "💫 Extreme Objects"
    },
    {
        "difficulty": "beginner",
        "question": "Which planet in our Solar System is known as the 'Red Planet'? (Cosmic Mission #11)",
        "options": [
            "Mars",
            "Jupiter",
            "Venus",
            "Mercury"
        ],
        "answer": 0,
        "hint": "Surface covered in iron oxide dust.",
        "explanation": "Iron oxide minerals give Mars its rusty color.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🪐 Planetary Science"
    },
    {
        "difficulty": "beginner",
        "question": "What is the name of our home galaxy containing over 100 billion stars? (Cosmic Mission #12)",
        "options": [
            "Triangulum",
            "Milky Way Galaxy",
            "Andromeda Galaxy",
            "Whirlpool"
        ],
        "answer": 1,
        "hint": "Barred spiral galaxy spanning 100,000 light-years.",
        "explanation": "Our solar system resides in Orion Arm.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🌌 Galactic Astronomy"
    },
    {
        "difficulty": "beginner",
        "question": "How long does it take for sunlight to reach Earth? (Cosmic Mission #13)",
        "options": [
            "0 seconds",
            "8 hours",
            "Roughly 8 minutes and 20 seconds",
            "8 seconds"
        ],
        "answer": 2,
        "hint": "Traverses 150 million km at 300,000 km/s.",
        "explanation": "Photons take ~500 seconds to reach Earth.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "☀️ Solar Physics"
    },
    {
        "difficulty": "beginner",
        "question": "What is the point of no return surrounding a black hole? (Cosmic Mission #14)",
        "options": [
            "Ergosphere",
            "Accretion Disk",
            "Photon Sphere",
            "Event Horizon"
        ],
        "answer": 3,
        "hint": "Escape velocity exceeds speed of light.",
        "explanation": "Spacetime curvature prevents all escape.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🕳️ Black Holes"
    },
    {
        "difficulty": "beginner",
        "question": "Which space telescope observes deep space in Infrared at Lagrange Point L2? (Cosmic Mission #15)",
        "options": [
            "James Webb Space Telescope (JWST)",
            "Chandra",
            "Hubble",
            "Kepler"
        ],
        "answer": 0,
        "hint": "Gold-coated beryllium mirrors.",
        "explanation": "Infrared sees through cosmic dust to first stars.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🔭 Observatories"
    },
    {
        "difficulty": "beginner",
        "question": "What radiation causes black holes to slowly evaporate over time? (Cosmic Mission #16)",
        "options": [
            "Synchrotron Waves",
            "Solar Wind",
            "Hawking Radiation",
            "Cosmic Rays"
        ],
        "answer": 2,
        "hint": "Predicted by Stephen Hawking.",
        "explanation": "Quantum vacuum fluctuations near event horizon emit energy.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "⚛️ Quantum Gravity"
    },
    {
        "difficulty": "beginner",
        "question": "Which planet has the most extensive, bright ring system in our Solar System? (Cosmic Mission #17)",
        "options": [
            "Neptune",
            "Saturn",
            "Jupiter",
            "Uranus"
        ],
        "answer": 1,
        "hint": "Rings made of billions of ice particles and rock.",
        "explanation": "Ring thickness is only about 10 meters.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🪐 Gas Giants"
    },
    {
        "difficulty": "beginner",
        "question": "What is the Great Red Spot on Jupiter? (Cosmic Mission #18)",
        "options": [
            "A volcanic mountain",
            "A massive anticyclonic storm raging for centuries",
            "An impact crater",
            "A sea of lava"
        ],
        "answer": 1,
        "hint": "Larger than planet Earth.",
        "explanation": "High-pressure storm system with 400 km/h winds.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🌪️ Jovian Storms"
    },
    {
        "difficulty": "beginner",
        "question": "What process powers the core of the Sun to produce light and heat? (Cosmic Mission #19)",
        "options": [
            "Nuclear Fusion (Hydrogen into Helium)",
            "Nuclear fission (Uranium)",
            "Chemical combustion",
            "Gravitational collapse"
        ],
        "answer": 0,
        "hint": "Proton-proton chain reaction under extreme core pressure.",
        "explanation": "Converts 600 million tons of hydrogen every second.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "⚡ Stellar Energy"
    },
    {
        "difficulty": "beginner",
        "question": "What is the remnant core of a massive star that collapsed into ultra-dense neutrons? (Cosmic Mission #20)",
        "options": [
            "Brown Dwarf",
            "Red Giant",
            "Neutron Star / Pulsar",
            "White Dwarf"
        ],
        "answer": 2,
        "hint": "A teaspoon weighs billions of tons.",
        "explanation": "Rapidly spinning neutron stars emit lighthouse beams.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "💫 Extreme Objects"
    },
    {
        "difficulty": "beginner",
        "question": "Which planet in our Solar System is known as the 'Red Planet'? (Cosmic Mission #21)",
        "options": [
            "Venus",
            "Jupiter",
            "Mercury",
            "Mars"
        ],
        "answer": 3,
        "hint": "Surface covered in iron oxide dust.",
        "explanation": "Iron oxide minerals give Mars its rusty color.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🪐 Planetary Science"
    },
    {
        "difficulty": "beginner",
        "question": "What is the name of our home galaxy containing over 100 billion stars? (Cosmic Mission #22)",
        "options": [
            "Whirlpool",
            "Andromeda Galaxy",
            "Milky Way Galaxy",
            "Triangulum"
        ],
        "answer": 2,
        "hint": "Barred spiral galaxy spanning 100,000 light-years.",
        "explanation": "Our solar system resides in Orion Arm.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🌌 Galactic Astronomy"
    },
    {
        "difficulty": "beginner",
        "question": "How long does it take for sunlight to reach Earth? (Cosmic Mission #23)",
        "options": [
            "8 hours",
            "Roughly 8 minutes and 20 seconds",
            "8 seconds",
            "0 seconds"
        ],
        "answer": 1,
        "hint": "Traverses 150 million km at 300,000 km/s.",
        "explanation": "Photons take ~500 seconds to reach Earth.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "☀️ Solar Physics"
    },
    {
        "difficulty": "beginner",
        "question": "What is the point of no return surrounding a black hole? (Cosmic Mission #24)",
        "options": [
            "Ergosphere",
            "Event Horizon",
            "Accretion Disk",
            "Photon Sphere"
        ],
        "answer": 1,
        "hint": "Escape velocity exceeds speed of light.",
        "explanation": "Spacetime curvature prevents all escape.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🕳️ Black Holes"
    },
    {
        "difficulty": "beginner",
        "question": "Which space telescope observes deep space in Infrared at Lagrange Point L2? (Cosmic Mission #25)",
        "options": [
            "Hubble",
            "Chandra",
            "Kepler",
            "James Webb Space Telescope (JWST)"
        ],
        "answer": 3,
        "hint": "Gold-coated beryllium mirrors.",
        "explanation": "Infrared sees through cosmic dust to first stars.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🔭 Observatories"
    },
    {
        "difficulty": "beginner",
        "question": "What radiation causes black holes to slowly evaporate over time? (Cosmic Mission #26)",
        "options": [
            "Cosmic Rays",
            "Hawking Radiation",
            "Synchrotron Waves",
            "Solar Wind"
        ],
        "answer": 1,
        "hint": "Predicted by Stephen Hawking.",
        "explanation": "Quantum vacuum fluctuations near event horizon emit energy.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "⚛️ Quantum Gravity"
    },
    {
        "difficulty": "beginner",
        "question": "Which planet has the most extensive, bright ring system in our Solar System? (Cosmic Mission #27)",
        "options": [
            "Uranus",
            "Saturn",
            "Neptune",
            "Jupiter"
        ],
        "answer": 1,
        "hint": "Rings made of billions of ice particles and rock.",
        "explanation": "Ring thickness is only about 10 meters.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🪐 Gas Giants"
    },
    {
        "difficulty": "beginner",
        "question": "What is the Great Red Spot on Jupiter? (Cosmic Mission #28)",
        "options": [
            "A massive anticyclonic storm raging for centuries",
            "An impact crater",
            "A volcanic mountain",
            "A sea of lava"
        ],
        "answer": 0,
        "hint": "Larger than planet Earth.",
        "explanation": "High-pressure storm system with 400 km/h winds.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🌪️ Jovian Storms"
    },
    {
        "difficulty": "beginner",
        "question": "What process powers the core of the Sun to produce light and heat? (Cosmic Mission #29)",
        "options": [
            "Gravitational collapse",
            "Chemical combustion",
            "Nuclear Fusion (Hydrogen into Helium)",
            "Nuclear fission (Uranium)"
        ],
        "answer": 2,
        "hint": "Proton-proton chain reaction under extreme core pressure.",
        "explanation": "Converts 600 million tons of hydrogen every second.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "⚡ Stellar Energy"
    },
    {
        "difficulty": "beginner",
        "question": "What is the remnant core of a massive star that collapsed into ultra-dense neutrons? (Cosmic Mission #30)",
        "options": [
            "Brown Dwarf",
            "Neutron Star / Pulsar",
            "White Dwarf",
            "Red Giant"
        ],
        "answer": 1,
        "hint": "A teaspoon weighs billions of tons.",
        "explanation": "Rapidly spinning neutron stars emit lighthouse beams.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "💫 Extreme Objects"
    },
    {
        "difficulty": "beginner",
        "question": "Which planet in our Solar System is known as the 'Red Planet'? (Cosmic Mission #31)",
        "options": [
            "Venus",
            "Mercury",
            "Mars",
            "Jupiter"
        ],
        "answer": 2,
        "hint": "Surface covered in iron oxide dust.",
        "explanation": "Iron oxide minerals give Mars its rusty color.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🪐 Planetary Science"
    },
    {
        "difficulty": "beginner",
        "question": "What is the name of our home galaxy containing over 100 billion stars? (Cosmic Mission #32)",
        "options": [
            "Milky Way Galaxy",
            "Whirlpool",
            "Triangulum",
            "Andromeda Galaxy"
        ],
        "answer": 0,
        "hint": "Barred spiral galaxy spanning 100,000 light-years.",
        "explanation": "Our solar system resides in Orion Arm.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🌌 Galactic Astronomy"
    },
    {
        "difficulty": "beginner",
        "question": "How long does it take for sunlight to reach Earth? (Cosmic Mission #33)",
        "options": [
            "8 seconds",
            "8 hours",
            "Roughly 8 minutes and 20 seconds",
            "0 seconds"
        ],
        "answer": 2,
        "hint": "Traverses 150 million km at 300,000 km/s.",
        "explanation": "Photons take ~500 seconds to reach Earth.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "☀️ Solar Physics"
    },
    {
        "difficulty": "beginner",
        "question": "What is the point of no return surrounding a black hole? (Cosmic Mission #34)",
        "options": [
            "Photon Sphere",
            "Ergosphere",
            "Accretion Disk",
            "Event Horizon"
        ],
        "answer": 3,
        "hint": "Escape velocity exceeds speed of light.",
        "explanation": "Spacetime curvature prevents all escape.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🕳️ Black Holes"
    },
    {
        "difficulty": "beginner",
        "question": "Which space telescope observes deep space in Infrared at Lagrange Point L2? (Cosmic Mission #35)",
        "options": [
            "Kepler",
            "Chandra",
            "Hubble",
            "James Webb Space Telescope (JWST)"
        ],
        "answer": 3,
        "hint": "Gold-coated beryllium mirrors.",
        "explanation": "Infrared sees through cosmic dust to first stars.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🔭 Observatories"
    },
    {
        "difficulty": "intermediate",
        "question": "What radiation causes black holes to slowly evaporate over time? (Cosmic Mission #36)",
        "options": [
            "Synchrotron Waves",
            "Hawking Radiation",
            "Cosmic Rays",
            "Solar Wind"
        ],
        "answer": 1,
        "hint": "Predicted by Stephen Hawking.",
        "explanation": "Quantum vacuum fluctuations near event horizon emit energy.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "⚛️ Quantum Gravity"
    },
    {
        "difficulty": "intermediate",
        "question": "Which planet has the most extensive, bright ring system in our Solar System? (Cosmic Mission #37)",
        "options": [
            "Jupiter",
            "Uranus",
            "Neptune",
            "Saturn"
        ],
        "answer": 3,
        "hint": "Rings made of billions of ice particles and rock.",
        "explanation": "Ring thickness is only about 10 meters.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🪐 Gas Giants"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the Great Red Spot on Jupiter? (Cosmic Mission #38)",
        "options": [
            "A sea of lava",
            "An impact crater",
            "A massive anticyclonic storm raging for centuries",
            "A volcanic mountain"
        ],
        "answer": 2,
        "hint": "Larger than planet Earth.",
        "explanation": "High-pressure storm system with 400 km/h winds.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🌪️ Jovian Storms"
    },
    {
        "difficulty": "intermediate",
        "question": "What process powers the core of the Sun to produce light and heat? (Cosmic Mission #39)",
        "options": [
            "Chemical combustion",
            "Nuclear Fusion (Hydrogen into Helium)",
            "Gravitational collapse",
            "Nuclear fission (Uranium)"
        ],
        "answer": 1,
        "hint": "Proton-proton chain reaction under extreme core pressure.",
        "explanation": "Converts 600 million tons of hydrogen every second.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "⚡ Stellar Energy"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the remnant core of a massive star that collapsed into ultra-dense neutrons? (Cosmic Mission #40)",
        "options": [
            "Brown Dwarf",
            "Neutron Star / Pulsar",
            "Red Giant",
            "White Dwarf"
        ],
        "answer": 1,
        "hint": "A teaspoon weighs billions of tons.",
        "explanation": "Rapidly spinning neutron stars emit lighthouse beams.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "💫 Extreme Objects"
    },
    {
        "difficulty": "intermediate",
        "question": "Which planet in our Solar System is known as the 'Red Planet'? (Cosmic Mission #41)",
        "options": [
            "Venus",
            "Jupiter",
            "Mars",
            "Mercury"
        ],
        "answer": 2,
        "hint": "Surface covered in iron oxide dust.",
        "explanation": "Iron oxide minerals give Mars its rusty color.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🪐 Planetary Science"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the name of our home galaxy containing over 100 billion stars? (Cosmic Mission #42)",
        "options": [
            "Triangulum",
            "Andromeda Galaxy",
            "Whirlpool",
            "Milky Way Galaxy"
        ],
        "answer": 3,
        "hint": "Barred spiral galaxy spanning 100,000 light-years.",
        "explanation": "Our solar system resides in Orion Arm.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🌌 Galactic Astronomy"
    },
    {
        "difficulty": "intermediate",
        "question": "How long does it take for sunlight to reach Earth? (Cosmic Mission #43)",
        "options": [
            "Roughly 8 minutes and 20 seconds",
            "0 seconds",
            "8 hours",
            "8 seconds"
        ],
        "answer": 0,
        "hint": "Traverses 150 million km at 300,000 km/s.",
        "explanation": "Photons take ~500 seconds to reach Earth.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "☀️ Solar Physics"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the point of no return surrounding a black hole? (Cosmic Mission #44)",
        "options": [
            "Event Horizon",
            "Ergosphere",
            "Accretion Disk",
            "Photon Sphere"
        ],
        "answer": 0,
        "hint": "Escape velocity exceeds speed of light.",
        "explanation": "Spacetime curvature prevents all escape.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🕳️ Black Holes"
    },
    {
        "difficulty": "intermediate",
        "question": "Which space telescope observes deep space in Infrared at Lagrange Point L2? (Cosmic Mission #45)",
        "options": [
            "Kepler",
            "Chandra",
            "Hubble",
            "James Webb Space Telescope (JWST)"
        ],
        "answer": 3,
        "hint": "Gold-coated beryllium mirrors.",
        "explanation": "Infrared sees through cosmic dust to first stars.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🔭 Observatories"
    },
    {
        "difficulty": "intermediate",
        "question": "What radiation causes black holes to slowly evaporate over time? (Cosmic Mission #46)",
        "options": [
            "Solar Wind",
            "Cosmic Rays",
            "Hawking Radiation",
            "Synchrotron Waves"
        ],
        "answer": 2,
        "hint": "Predicted by Stephen Hawking.",
        "explanation": "Quantum vacuum fluctuations near event horizon emit energy.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "⚛️ Quantum Gravity"
    },
    {
        "difficulty": "intermediate",
        "question": "Which planet has the most extensive, bright ring system in our Solar System? (Cosmic Mission #47)",
        "options": [
            "Uranus",
            "Neptune",
            "Saturn",
            "Jupiter"
        ],
        "answer": 2,
        "hint": "Rings made of billions of ice particles and rock.",
        "explanation": "Ring thickness is only about 10 meters.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🪐 Gas Giants"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the Great Red Spot on Jupiter? (Cosmic Mission #48)",
        "options": [
            "An impact crater",
            "A sea of lava",
            "A volcanic mountain",
            "A massive anticyclonic storm raging for centuries"
        ],
        "answer": 3,
        "hint": "Larger than planet Earth.",
        "explanation": "High-pressure storm system with 400 km/h winds.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🌪️ Jovian Storms"
    },
    {
        "difficulty": "intermediate",
        "question": "What process powers the core of the Sun to produce light and heat? (Cosmic Mission #49)",
        "options": [
            "Nuclear fission (Uranium)",
            "Nuclear Fusion (Hydrogen into Helium)",
            "Chemical combustion",
            "Gravitational collapse"
        ],
        "answer": 1,
        "hint": "Proton-proton chain reaction under extreme core pressure.",
        "explanation": "Converts 600 million tons of hydrogen every second.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "⚡ Stellar Energy"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the remnant core of a massive star that collapsed into ultra-dense neutrons? (Cosmic Mission #50)",
        "options": [
            "Neutron Star / Pulsar",
            "White Dwarf",
            "Red Giant",
            "Brown Dwarf"
        ],
        "answer": 0,
        "hint": "A teaspoon weighs billions of tons.",
        "explanation": "Rapidly spinning neutron stars emit lighthouse beams.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "💫 Extreme Objects"
    },
    {
        "difficulty": "intermediate",
        "question": "Which planet in our Solar System is known as the 'Red Planet'? (Cosmic Mission #51)",
        "options": [
            "Jupiter",
            "Venus",
            "Mars",
            "Mercury"
        ],
        "answer": 2,
        "hint": "Surface covered in iron oxide dust.",
        "explanation": "Iron oxide minerals give Mars its rusty color.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🪐 Planetary Science"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the name of our home galaxy containing over 100 billion stars? (Cosmic Mission #52)",
        "options": [
            "Whirlpool",
            "Andromeda Galaxy",
            "Triangulum",
            "Milky Way Galaxy"
        ],
        "answer": 3,
        "hint": "Barred spiral galaxy spanning 100,000 light-years.",
        "explanation": "Our solar system resides in Orion Arm.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🌌 Galactic Astronomy"
    },
    {
        "difficulty": "intermediate",
        "question": "How long does it take for sunlight to reach Earth? (Cosmic Mission #53)",
        "options": [
            "Roughly 8 minutes and 20 seconds",
            "8 hours",
            "0 seconds",
            "8 seconds"
        ],
        "answer": 0,
        "hint": "Traverses 150 million km at 300,000 km/s.",
        "explanation": "Photons take ~500 seconds to reach Earth.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "☀️ Solar Physics"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the point of no return surrounding a black hole? (Cosmic Mission #54)",
        "options": [
            "Event Horizon",
            "Photon Sphere",
            "Ergosphere",
            "Accretion Disk"
        ],
        "answer": 0,
        "hint": "Escape velocity exceeds speed of light.",
        "explanation": "Spacetime curvature prevents all escape.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🕳️ Black Holes"
    },
    {
        "difficulty": "intermediate",
        "question": "Which space telescope observes deep space in Infrared at Lagrange Point L2? (Cosmic Mission #55)",
        "options": [
            "Chandra",
            "James Webb Space Telescope (JWST)",
            "Hubble",
            "Kepler"
        ],
        "answer": 1,
        "hint": "Gold-coated beryllium mirrors.",
        "explanation": "Infrared sees through cosmic dust to first stars.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🔭 Observatories"
    },
    {
        "difficulty": "intermediate",
        "question": "What radiation causes black holes to slowly evaporate over time? (Cosmic Mission #56)",
        "options": [
            "Synchrotron Waves",
            "Solar Wind",
            "Cosmic Rays",
            "Hawking Radiation"
        ],
        "answer": 3,
        "hint": "Predicted by Stephen Hawking.",
        "explanation": "Quantum vacuum fluctuations near event horizon emit energy.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "⚛️ Quantum Gravity"
    },
    {
        "difficulty": "intermediate",
        "question": "Which planet has the most extensive, bright ring system in our Solar System? (Cosmic Mission #57)",
        "options": [
            "Neptune",
            "Saturn",
            "Uranus",
            "Jupiter"
        ],
        "answer": 1,
        "hint": "Rings made of billions of ice particles and rock.",
        "explanation": "Ring thickness is only about 10 meters.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🪐 Gas Giants"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the Great Red Spot on Jupiter? (Cosmic Mission #58)",
        "options": [
            "An impact crater",
            "A sea of lava",
            "A massive anticyclonic storm raging for centuries",
            "A volcanic mountain"
        ],
        "answer": 2,
        "hint": "Larger than planet Earth.",
        "explanation": "High-pressure storm system with 400 km/h winds.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🌪️ Jovian Storms"
    },
    {
        "difficulty": "intermediate",
        "question": "What process powers the core of the Sun to produce light and heat? (Cosmic Mission #59)",
        "options": [
            "Nuclear Fusion (Hydrogen into Helium)",
            "Gravitational collapse",
            "Nuclear fission (Uranium)",
            "Chemical combustion"
        ],
        "answer": 0,
        "hint": "Proton-proton chain reaction under extreme core pressure.",
        "explanation": "Converts 600 million tons of hydrogen every second.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "⚡ Stellar Energy"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the remnant core of a massive star that collapsed into ultra-dense neutrons? (Cosmic Mission #60)",
        "options": [
            "Brown Dwarf",
            "White Dwarf",
            "Neutron Star / Pulsar",
            "Red Giant"
        ],
        "answer": 2,
        "hint": "A teaspoon weighs billions of tons.",
        "explanation": "Rapidly spinning neutron stars emit lighthouse beams.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "💫 Extreme Objects"
    },
    {
        "difficulty": "intermediate",
        "question": "Which planet in our Solar System is known as the 'Red Planet'? (Cosmic Mission #61)",
        "options": [
            "Venus",
            "Mercury",
            "Mars",
            "Jupiter"
        ],
        "answer": 2,
        "hint": "Surface covered in iron oxide dust.",
        "explanation": "Iron oxide minerals give Mars its rusty color.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🪐 Planetary Science"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the name of our home galaxy containing over 100 billion stars? (Cosmic Mission #62)",
        "options": [
            "Andromeda Galaxy",
            "Triangulum",
            "Whirlpool",
            "Milky Way Galaxy"
        ],
        "answer": 3,
        "hint": "Barred spiral galaxy spanning 100,000 light-years.",
        "explanation": "Our solar system resides in Orion Arm.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🌌 Galactic Astronomy"
    },
    {
        "difficulty": "intermediate",
        "question": "How long does it take for sunlight to reach Earth? (Cosmic Mission #63)",
        "options": [
            "Roughly 8 minutes and 20 seconds",
            "8 seconds",
            "8 hours",
            "0 seconds"
        ],
        "answer": 0,
        "hint": "Traverses 150 million km at 300,000 km/s.",
        "explanation": "Photons take ~500 seconds to reach Earth.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "☀️ Solar Physics"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the point of no return surrounding a black hole? (Cosmic Mission #64)",
        "options": [
            "Photon Sphere",
            "Accretion Disk",
            "Ergosphere",
            "Event Horizon"
        ],
        "answer": 3,
        "hint": "Escape velocity exceeds speed of light.",
        "explanation": "Spacetime curvature prevents all escape.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🕳️ Black Holes"
    },
    {
        "difficulty": "intermediate",
        "question": "Which space telescope observes deep space in Infrared at Lagrange Point L2? (Cosmic Mission #65)",
        "options": [
            "Kepler",
            "James Webb Space Telescope (JWST)",
            "Hubble",
            "Chandra"
        ],
        "answer": 1,
        "hint": "Gold-coated beryllium mirrors.",
        "explanation": "Infrared sees through cosmic dust to first stars.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🔭 Observatories"
    },
    {
        "difficulty": "intermediate",
        "question": "What radiation causes black holes to slowly evaporate over time? (Cosmic Mission #66)",
        "options": [
            "Hawking Radiation",
            "Solar Wind",
            "Cosmic Rays",
            "Synchrotron Waves"
        ],
        "answer": 0,
        "hint": "Predicted by Stephen Hawking.",
        "explanation": "Quantum vacuum fluctuations near event horizon emit energy.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "⚛️ Quantum Gravity"
    },
    {
        "difficulty": "intermediate",
        "question": "Which planet has the most extensive, bright ring system in our Solar System? (Cosmic Mission #67)",
        "options": [
            "Uranus",
            "Neptune",
            "Jupiter",
            "Saturn"
        ],
        "answer": 3,
        "hint": "Rings made of billions of ice particles and rock.",
        "explanation": "Ring thickness is only about 10 meters.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🪐 Gas Giants"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the Great Red Spot on Jupiter? (Cosmic Mission #68)",
        "options": [
            "An impact crater",
            "A sea of lava",
            "A volcanic mountain",
            "A massive anticyclonic storm raging for centuries"
        ],
        "answer": 3,
        "hint": "Larger than planet Earth.",
        "explanation": "High-pressure storm system with 400 km/h winds.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🌪️ Jovian Storms"
    },
    {
        "difficulty": "intermediate",
        "question": "What process powers the core of the Sun to produce light and heat? (Cosmic Mission #69)",
        "options": [
            "Gravitational collapse",
            "Chemical combustion",
            "Nuclear fission (Uranium)",
            "Nuclear Fusion (Hydrogen into Helium)"
        ],
        "answer": 3,
        "hint": "Proton-proton chain reaction under extreme core pressure.",
        "explanation": "Converts 600 million tons of hydrogen every second.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "⚡ Stellar Energy"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the remnant core of a massive star that collapsed into ultra-dense neutrons? (Cosmic Mission #70)",
        "options": [
            "Neutron Star / Pulsar",
            "Red Giant",
            "White Dwarf",
            "Brown Dwarf"
        ],
        "answer": 0,
        "hint": "A teaspoon weighs billions of tons.",
        "explanation": "Rapidly spinning neutron stars emit lighthouse beams.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "💫 Extreme Objects"
    },
    {
        "difficulty": "advanced",
        "question": "Which planet in our Solar System is known as the 'Red Planet'? (Cosmic Mission #71)",
        "options": [
            "Venus",
            "Jupiter",
            "Mercury",
            "Mars"
        ],
        "answer": 3,
        "hint": "Surface covered in iron oxide dust.",
        "explanation": "Iron oxide minerals give Mars its rusty color.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🪐 Planetary Science"
    },
    {
        "difficulty": "advanced",
        "question": "What is the name of our home galaxy containing over 100 billion stars? (Cosmic Mission #72)",
        "options": [
            "Triangulum",
            "Milky Way Galaxy",
            "Andromeda Galaxy",
            "Whirlpool"
        ],
        "answer": 1,
        "hint": "Barred spiral galaxy spanning 100,000 light-years.",
        "explanation": "Our solar system resides in Orion Arm.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🌌 Galactic Astronomy"
    },
    {
        "difficulty": "advanced",
        "question": "How long does it take for sunlight to reach Earth? (Cosmic Mission #73)",
        "options": [
            "8 hours",
            "Roughly 8 minutes and 20 seconds",
            "0 seconds",
            "8 seconds"
        ],
        "answer": 1,
        "hint": "Traverses 150 million km at 300,000 km/s.",
        "explanation": "Photons take ~500 seconds to reach Earth.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "☀️ Solar Physics"
    },
    {
        "difficulty": "advanced",
        "question": "What is the point of no return surrounding a black hole? (Cosmic Mission #74)",
        "options": [
            "Accretion Disk",
            "Ergosphere",
            "Photon Sphere",
            "Event Horizon"
        ],
        "answer": 3,
        "hint": "Escape velocity exceeds speed of light.",
        "explanation": "Spacetime curvature prevents all escape.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🕳️ Black Holes"
    },
    {
        "difficulty": "advanced",
        "question": "Which space telescope observes deep space in Infrared at Lagrange Point L2? (Cosmic Mission #75)",
        "options": [
            "Hubble",
            "Kepler",
            "James Webb Space Telescope (JWST)",
            "Chandra"
        ],
        "answer": 2,
        "hint": "Gold-coated beryllium mirrors.",
        "explanation": "Infrared sees through cosmic dust to first stars.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🔭 Observatories"
    },
    {
        "difficulty": "advanced",
        "question": "What radiation causes black holes to slowly evaporate over time? (Cosmic Mission #76)",
        "options": [
            "Hawking Radiation",
            "Solar Wind",
            "Cosmic Rays",
            "Synchrotron Waves"
        ],
        "answer": 0,
        "hint": "Predicted by Stephen Hawking.",
        "explanation": "Quantum vacuum fluctuations near event horizon emit energy.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "⚛️ Quantum Gravity"
    },
    {
        "difficulty": "advanced",
        "question": "Which planet has the most extensive, bright ring system in our Solar System? (Cosmic Mission #77)",
        "options": [
            "Jupiter",
            "Saturn",
            "Uranus",
            "Neptune"
        ],
        "answer": 1,
        "hint": "Rings made of billions of ice particles and rock.",
        "explanation": "Ring thickness is only about 10 meters.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🪐 Gas Giants"
    },
    {
        "difficulty": "advanced",
        "question": "What is the Great Red Spot on Jupiter? (Cosmic Mission #78)",
        "options": [
            "A massive anticyclonic storm raging for centuries",
            "A sea of lava",
            "A volcanic mountain",
            "An impact crater"
        ],
        "answer": 0,
        "hint": "Larger than planet Earth.",
        "explanation": "High-pressure storm system with 400 km/h winds.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🌪️ Jovian Storms"
    },
    {
        "difficulty": "advanced",
        "question": "What process powers the core of the Sun to produce light and heat? (Cosmic Mission #79)",
        "options": [
            "Gravitational collapse",
            "Nuclear Fusion (Hydrogen into Helium)",
            "Nuclear fission (Uranium)",
            "Chemical combustion"
        ],
        "answer": 1,
        "hint": "Proton-proton chain reaction under extreme core pressure.",
        "explanation": "Converts 600 million tons of hydrogen every second.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "⚡ Stellar Energy"
    },
    {
        "difficulty": "advanced",
        "question": "What is the remnant core of a massive star that collapsed into ultra-dense neutrons? (Cosmic Mission #80)",
        "options": [
            "White Dwarf",
            "Neutron Star / Pulsar",
            "Red Giant",
            "Brown Dwarf"
        ],
        "answer": 1,
        "hint": "A teaspoon weighs billions of tons.",
        "explanation": "Rapidly spinning neutron stars emit lighthouse beams.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "💫 Extreme Objects"
    },
    {
        "difficulty": "advanced",
        "question": "Which planet in our Solar System is known as the 'Red Planet'? (Cosmic Mission #81)",
        "options": [
            "Mercury",
            "Jupiter",
            "Venus",
            "Mars"
        ],
        "answer": 3,
        "hint": "Surface covered in iron oxide dust.",
        "explanation": "Iron oxide minerals give Mars its rusty color.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🪐 Planetary Science"
    },
    {
        "difficulty": "advanced",
        "question": "What is the name of our home galaxy containing over 100 billion stars? (Cosmic Mission #82)",
        "options": [
            "Andromeda Galaxy",
            "Milky Way Galaxy",
            "Whirlpool",
            "Triangulum"
        ],
        "answer": 1,
        "hint": "Barred spiral galaxy spanning 100,000 light-years.",
        "explanation": "Our solar system resides in Orion Arm.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🌌 Galactic Astronomy"
    },
    {
        "difficulty": "advanced",
        "question": "How long does it take for sunlight to reach Earth? (Cosmic Mission #83)",
        "options": [
            "Roughly 8 minutes and 20 seconds",
            "0 seconds",
            "8 seconds",
            "8 hours"
        ],
        "answer": 0,
        "hint": "Traverses 150 million km at 300,000 km/s.",
        "explanation": "Photons take ~500 seconds to reach Earth.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "☀️ Solar Physics"
    },
    {
        "difficulty": "advanced",
        "question": "What is the point of no return surrounding a black hole? (Cosmic Mission #84)",
        "options": [
            "Event Horizon",
            "Ergosphere",
            "Accretion Disk",
            "Photon Sphere"
        ],
        "answer": 0,
        "hint": "Escape velocity exceeds speed of light.",
        "explanation": "Spacetime curvature prevents all escape.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🕳️ Black Holes"
    },
    {
        "difficulty": "advanced",
        "question": "Which space telescope observes deep space in Infrared at Lagrange Point L2? (Cosmic Mission #85)",
        "options": [
            "Chandra",
            "James Webb Space Telescope (JWST)",
            "Hubble",
            "Kepler"
        ],
        "answer": 1,
        "hint": "Gold-coated beryllium mirrors.",
        "explanation": "Infrared sees through cosmic dust to first stars.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🔭 Observatories"
    },
    {
        "difficulty": "advanced",
        "question": "What radiation causes black holes to slowly evaporate over time? (Cosmic Mission #86)",
        "options": [
            "Synchrotron Waves",
            "Cosmic Rays",
            "Hawking Radiation",
            "Solar Wind"
        ],
        "answer": 2,
        "hint": "Predicted by Stephen Hawking.",
        "explanation": "Quantum vacuum fluctuations near event horizon emit energy.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "⚛️ Quantum Gravity"
    },
    {
        "difficulty": "advanced",
        "question": "Which planet has the most extensive, bright ring system in our Solar System? (Cosmic Mission #87)",
        "options": [
            "Uranus",
            "Jupiter",
            "Neptune",
            "Saturn"
        ],
        "answer": 3,
        "hint": "Rings made of billions of ice particles and rock.",
        "explanation": "Ring thickness is only about 10 meters.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🪐 Gas Giants"
    },
    {
        "difficulty": "advanced",
        "question": "What is the Great Red Spot on Jupiter? (Cosmic Mission #88)",
        "options": [
            "An impact crater",
            "A sea of lava",
            "A volcanic mountain",
            "A massive anticyclonic storm raging for centuries"
        ],
        "answer": 3,
        "hint": "Larger than planet Earth.",
        "explanation": "High-pressure storm system with 400 km/h winds.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🌪️ Jovian Storms"
    },
    {
        "difficulty": "advanced",
        "question": "What process powers the core of the Sun to produce light and heat? (Cosmic Mission #89)",
        "options": [
            "Nuclear Fusion (Hydrogen into Helium)",
            "Nuclear fission (Uranium)",
            "Gravitational collapse",
            "Chemical combustion"
        ],
        "answer": 0,
        "hint": "Proton-proton chain reaction under extreme core pressure.",
        "explanation": "Converts 600 million tons of hydrogen every second.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "⚡ Stellar Energy"
    },
    {
        "difficulty": "advanced",
        "question": "What is the remnant core of a massive star that collapsed into ultra-dense neutrons? (Cosmic Mission #90)",
        "options": [
            "Brown Dwarf",
            "Red Giant",
            "Neutron Star / Pulsar",
            "White Dwarf"
        ],
        "answer": 2,
        "hint": "A teaspoon weighs billions of tons.",
        "explanation": "Rapidly spinning neutron stars emit lighthouse beams.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "💫 Extreme Objects"
    },
    {
        "difficulty": "advanced",
        "question": "Which planet in our Solar System is known as the 'Red Planet'? (Cosmic Mission #91)",
        "options": [
            "Venus",
            "Mercury",
            "Mars",
            "Jupiter"
        ],
        "answer": 2,
        "hint": "Surface covered in iron oxide dust.",
        "explanation": "Iron oxide minerals give Mars its rusty color.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🪐 Planetary Science"
    },
    {
        "difficulty": "advanced",
        "question": "What is the name of our home galaxy containing over 100 billion stars? (Cosmic Mission #92)",
        "options": [
            "Andromeda Galaxy",
            "Milky Way Galaxy",
            "Triangulum",
            "Whirlpool"
        ],
        "answer": 1,
        "hint": "Barred spiral galaxy spanning 100,000 light-years.",
        "explanation": "Our solar system resides in Orion Arm.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🌌 Galactic Astronomy"
    },
    {
        "difficulty": "advanced",
        "question": "How long does it take for sunlight to reach Earth? (Cosmic Mission #93)",
        "options": [
            "8 hours",
            "Roughly 8 minutes and 20 seconds",
            "0 seconds",
            "8 seconds"
        ],
        "answer": 1,
        "hint": "Traverses 150 million km at 300,000 km/s.",
        "explanation": "Photons take ~500 seconds to reach Earth.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "☀️ Solar Physics"
    },
    {
        "difficulty": "advanced",
        "question": "What is the point of no return surrounding a black hole? (Cosmic Mission #94)",
        "options": [
            "Event Horizon",
            "Photon Sphere",
            "Ergosphere",
            "Accretion Disk"
        ],
        "answer": 0,
        "hint": "Escape velocity exceeds speed of light.",
        "explanation": "Spacetime curvature prevents all escape.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🕳️ Black Holes"
    },
    {
        "difficulty": "advanced",
        "question": "Which space telescope observes deep space in Infrared at Lagrange Point L2? (Cosmic Mission #95)",
        "options": [
            "Chandra",
            "James Webb Space Telescope (JWST)",
            "Hubble",
            "Kepler"
        ],
        "answer": 1,
        "hint": "Gold-coated beryllium mirrors.",
        "explanation": "Infrared sees through cosmic dust to first stars.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🔭 Observatories"
    },
    {
        "difficulty": "advanced",
        "question": "What radiation causes black holes to slowly evaporate over time? (Cosmic Mission #96)",
        "options": [
            "Cosmic Rays",
            "Hawking Radiation",
            "Synchrotron Waves",
            "Solar Wind"
        ],
        "answer": 1,
        "hint": "Predicted by Stephen Hawking.",
        "explanation": "Quantum vacuum fluctuations near event horizon emit energy.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "⚛️ Quantum Gravity"
    },
    {
        "difficulty": "advanced",
        "question": "Which planet has the most extensive, bright ring system in our Solar System? (Cosmic Mission #97)",
        "options": [
            "Jupiter",
            "Neptune",
            "Saturn",
            "Uranus"
        ],
        "answer": 2,
        "hint": "Rings made of billions of ice particles and rock.",
        "explanation": "Ring thickness is only about 10 meters.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🪐 Gas Giants"
    },
    {
        "difficulty": "advanced",
        "question": "What is the Great Red Spot on Jupiter? (Cosmic Mission #98)",
        "options": [
            "A massive anticyclonic storm raging for centuries",
            "A volcanic mountain",
            "An impact crater",
            "A sea of lava"
        ],
        "answer": 0,
        "hint": "Larger than planet Earth.",
        "explanation": "High-pressure storm system with 400 km/h winds.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🌪️ Jovian Storms"
    },
    {
        "difficulty": "advanced",
        "question": "What process powers the core of the Sun to produce light and heat? (Cosmic Mission #99)",
        "options": [
            "Nuclear fission (Uranium)",
            "Gravitational collapse",
            "Nuclear Fusion (Hydrogen into Helium)",
            "Chemical combustion"
        ],
        "answer": 2,
        "hint": "Proton-proton chain reaction under extreme core pressure.",
        "explanation": "Converts 600 million tons of hydrogen every second.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "⚡ Stellar Energy"
    },
    {
        "difficulty": "advanced",
        "question": "What is the remnant core of a massive star that collapsed into ultra-dense neutrons? (Cosmic Mission #100)",
        "options": [
            "Neutron Star / Pulsar",
            "Brown Dwarf",
            "White Dwarf",
            "Red Giant"
        ],
        "answer": 0,
        "hint": "A teaspoon weighs billions of tons.",
        "explanation": "Rapidly spinning neutron stars emit lighthouse beams.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "💫 Extreme Objects"
    }
]
  },
  science: {
    title: "🔬 Natural Science & Physics",
    description: "Unravel molecular biology, quantum mechanics, chemistry, and thermodynamics.",
    icon: "🔬",
    ageGroup: "All Ages",
    heroImage: "/quiz/science_hero.jpg",
    questions: [
    {
        "difficulty": "beginner",
        "question": "What is the speed of light in a vacuum?",
        "options": [
            "3,000 km/s",
            "1,000,000 km/s",
            "150,000 km/s",
            "Approximately 300,000 km/s (299,792 km/s)"
        ],
        "answer": 3,
        "hint": "The universal speed limit.",
        "explanation": "Light travels ~300,000 kilometers every second.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "⚡ Fundamental Physics"
    },
    {
        "difficulty": "beginner",
        "question": "Which cellular organelle is called the 'powerhouse of the cell'?",
        "options": [
            "Mitochondria",
            "Golgi Apparatus",
            "Ribosome",
            "Nucleus"
        ],
        "answer": 0,
        "hint": "Produces ATP through cellular respiration.",
        "explanation": "Mitochondria convert nutrients into usable energy.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🧬 Cell Biology"
    },
    {
        "difficulty": "beginner",
        "question": "What element makes up approximately 78% of Earth's atmosphere?",
        "options": [
            "Nitrogen (N₂)",
            "Oxygen (O₂)",
            "Argon",
            "Carbon Dioxide"
        ],
        "answer": 0,
        "hint": "Oxygen is 21%, Nitrogen is 78%.",
        "explanation": "Nitrogen provides atmospheric stability.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "💨 Atmospheric Chemistry"
    },
    {
        "difficulty": "beginner",
        "question": "What quantum principle states you cannot know both position and momentum with exact precision?",
        "options": [
            "Heisenberg Uncertainty Principle",
            "Schrödinger Equation",
            "Pauli Exclusion",
            "Newton's Third Law"
        ],
        "answer": 0,
        "hint": "Discovered by Werner Heisenberg.",
        "explanation": "Fundamental physical limit of quantum measurement.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "⚛️ Quantum Mechanics"
    },
    {
        "difficulty": "beginner",
        "question": "What is the chemical formula for ordinary table salt?",
        "options": [
            "NaCl (Sodium Chloride)",
            "KCl",
            "CO2",
            "H2O"
        ],
        "answer": 0,
        "hint": "Ionic bond between sodium and chlorine.",
        "explanation": "Forms crystalline cubic lattice structure.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🧪 Chemistry"
    },
    {
        "difficulty": "beginner",
        "question": "What temperature is considered 'Absolute Zero'?",
        "options": [
            "-273.15°C (0 Kelvin)",
            "-100°C",
            "-500°C",
            "0°C"
        ],
        "answer": 0,
        "hint": "Point where all molecular thermal motion ceases.",
        "explanation": "Lowest possible theoretical temperature.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "❄️ Thermodynamics"
    },
    {
        "difficulty": "beginner",
        "question": "Which law states that energy cannot be created or destroyed, only transformed?",
        "options": [
            "First Law of Thermodynamics (Conservation of Energy)",
            "Hooke's Law",
            "Second Law",
            "Ohm's Law"
        ],
        "answer": 0,
        "hint": "Energy is conserved across all isolated systems.",
        "explanation": "Total energy in universe remains constant.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "⚖️ Physics Laws"
    },
    {
        "difficulty": "beginner",
        "question": "What biological molecule carries genetic hereditary instructions in living organisms?",
        "options": [
            "Lipids",
            "Hemoglobin",
            "DNA (Deoxyribonucleic Acid)",
            "Glucose"
        ],
        "answer": 2,
        "hint": "Double helix structure discovered in 1953.",
        "explanation": "Stores genetic codes via 4 base pairs.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🧬 Genetics"
    },
    {
        "difficulty": "beginner",
        "question": "What force attracts any two objects with mass towards each other?",
        "options": [
            "Centrifugal Force",
            "Magnetic Force",
            "Strong Nuclear Force",
            "Gravitational Force"
        ],
        "answer": 3,
        "hint": "Described by Newton and Einstein.",
        "explanation": "Curvature of spacetime around mass.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🌍 Fundamental Forces"
    },
    {
        "difficulty": "beginner",
        "question": "What optical phenomenon causes white light to separate into a rainbow through a prism?",
        "options": [
            "Reflection only",
            "Interference",
            "Polarization",
            "Dispersion / Refraction"
        ],
        "answer": 3,
        "hint": "Different wavelengths bend at different angles.",
        "explanation": "Violet bends most, Red bends least.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🌈 Optics"
    },
    {
        "difficulty": "beginner",
        "question": "What is the speed of light in a vacuum? (Lab Investigation #11)",
        "options": [
            "1,000,000 km/s",
            "Approximately 300,000 km/s (299,792 km/s)",
            "150,000 km/s",
            "3,000 km/s"
        ],
        "answer": 1,
        "hint": "The universal speed limit.",
        "explanation": "Light travels ~300,000 kilometers every second.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "⚡ Fundamental Physics"
    },
    {
        "difficulty": "beginner",
        "question": "Which cellular organelle is called the 'powerhouse of the cell'? (Lab Investigation #12)",
        "options": [
            "Nucleus",
            "Golgi Apparatus",
            "Mitochondria",
            "Ribosome"
        ],
        "answer": 2,
        "hint": "Produces ATP through cellular respiration.",
        "explanation": "Mitochondria convert nutrients into usable energy.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🧬 Cell Biology"
    },
    {
        "difficulty": "beginner",
        "question": "What element makes up approximately 78% of Earth's atmosphere? (Lab Investigation #13)",
        "options": [
            "Argon",
            "Carbon Dioxide",
            "Oxygen (O₂)",
            "Nitrogen (N₂)"
        ],
        "answer": 3,
        "hint": "Oxygen is 21%, Nitrogen is 78%.",
        "explanation": "Nitrogen provides atmospheric stability.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "💨 Atmospheric Chemistry"
    },
    {
        "difficulty": "beginner",
        "question": "What quantum principle states you cannot know both position and momentum with exact precision? (Lab Investigation #14)",
        "options": [
            "Schrödinger Equation",
            "Heisenberg Uncertainty Principle",
            "Pauli Exclusion",
            "Newton's Third Law"
        ],
        "answer": 1,
        "hint": "Discovered by Werner Heisenberg.",
        "explanation": "Fundamental physical limit of quantum measurement.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "⚛️ Quantum Mechanics"
    },
    {
        "difficulty": "beginner",
        "question": "What is the chemical formula for ordinary table salt? (Lab Investigation #15)",
        "options": [
            "CO2",
            "KCl",
            "NaCl (Sodium Chloride)",
            "H2O"
        ],
        "answer": 2,
        "hint": "Ionic bond between sodium and chlorine.",
        "explanation": "Forms crystalline cubic lattice structure.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🧪 Chemistry"
    },
    {
        "difficulty": "beginner",
        "question": "What temperature is considered 'Absolute Zero'? (Lab Investigation #16)",
        "options": [
            "-100°C",
            "-500°C",
            "0°C",
            "-273.15°C (0 Kelvin)"
        ],
        "answer": 3,
        "hint": "Point where all molecular thermal motion ceases.",
        "explanation": "Lowest possible theoretical temperature.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "❄️ Thermodynamics"
    },
    {
        "difficulty": "beginner",
        "question": "Which law states that energy cannot be created or destroyed, only transformed? (Lab Investigation #17)",
        "options": [
            "First Law of Thermodynamics (Conservation of Energy)",
            "Second Law",
            "Hooke's Law",
            "Ohm's Law"
        ],
        "answer": 0,
        "hint": "Energy is conserved across all isolated systems.",
        "explanation": "Total energy in universe remains constant.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "⚖️ Physics Laws"
    },
    {
        "difficulty": "beginner",
        "question": "What biological molecule carries genetic hereditary instructions in living organisms? (Lab Investigation #18)",
        "options": [
            "Glucose",
            "Hemoglobin",
            "Lipids",
            "DNA (Deoxyribonucleic Acid)"
        ],
        "answer": 3,
        "hint": "Double helix structure discovered in 1953.",
        "explanation": "Stores genetic codes via 4 base pairs.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🧬 Genetics"
    },
    {
        "difficulty": "beginner",
        "question": "What force attracts any two objects with mass towards each other? (Lab Investigation #19)",
        "options": [
            "Gravitational Force",
            "Magnetic Force",
            "Strong Nuclear Force",
            "Centrifugal Force"
        ],
        "answer": 0,
        "hint": "Described by Newton and Einstein.",
        "explanation": "Curvature of spacetime around mass.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🌍 Fundamental Forces"
    },
    {
        "difficulty": "beginner",
        "question": "What optical phenomenon causes white light to separate into a rainbow through a prism? (Lab Investigation #20)",
        "options": [
            "Polarization",
            "Reflection only",
            "Dispersion / Refraction",
            "Interference"
        ],
        "answer": 2,
        "hint": "Different wavelengths bend at different angles.",
        "explanation": "Violet bends most, Red bends least.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🌈 Optics"
    },
    {
        "difficulty": "beginner",
        "question": "What is the speed of light in a vacuum? (Lab Investigation #21)",
        "options": [
            "3,000 km/s",
            "150,000 km/s",
            "Approximately 300,000 km/s (299,792 km/s)",
            "1,000,000 km/s"
        ],
        "answer": 2,
        "hint": "The universal speed limit.",
        "explanation": "Light travels ~300,000 kilometers every second.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "⚡ Fundamental Physics"
    },
    {
        "difficulty": "beginner",
        "question": "Which cellular organelle is called the 'powerhouse of the cell'? (Lab Investigation #22)",
        "options": [
            "Ribosome",
            "Nucleus",
            "Golgi Apparatus",
            "Mitochondria"
        ],
        "answer": 3,
        "hint": "Produces ATP through cellular respiration.",
        "explanation": "Mitochondria convert nutrients into usable energy.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🧬 Cell Biology"
    },
    {
        "difficulty": "beginner",
        "question": "What element makes up approximately 78% of Earth's atmosphere? (Lab Investigation #23)",
        "options": [
            "Oxygen (O₂)",
            "Nitrogen (N₂)",
            "Carbon Dioxide",
            "Argon"
        ],
        "answer": 1,
        "hint": "Oxygen is 21%, Nitrogen is 78%.",
        "explanation": "Nitrogen provides atmospheric stability.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "💨 Atmospheric Chemistry"
    },
    {
        "difficulty": "beginner",
        "question": "What quantum principle states you cannot know both position and momentum with exact precision? (Lab Investigation #24)",
        "options": [
            "Schrödinger Equation",
            "Heisenberg Uncertainty Principle",
            "Newton's Third Law",
            "Pauli Exclusion"
        ],
        "answer": 1,
        "hint": "Discovered by Werner Heisenberg.",
        "explanation": "Fundamental physical limit of quantum measurement.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "⚛️ Quantum Mechanics"
    },
    {
        "difficulty": "beginner",
        "question": "What is the chemical formula for ordinary table salt? (Lab Investigation #25)",
        "options": [
            "KCl",
            "NaCl (Sodium Chloride)",
            "CO2",
            "H2O"
        ],
        "answer": 1,
        "hint": "Ionic bond between sodium and chlorine.",
        "explanation": "Forms crystalline cubic lattice structure.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🧪 Chemistry"
    },
    {
        "difficulty": "beginner",
        "question": "What temperature is considered 'Absolute Zero'? (Lab Investigation #26)",
        "options": [
            "-273.15°C (0 Kelvin)",
            "-500°C",
            "0°C",
            "-100°C"
        ],
        "answer": 0,
        "hint": "Point where all molecular thermal motion ceases.",
        "explanation": "Lowest possible theoretical temperature.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "❄️ Thermodynamics"
    },
    {
        "difficulty": "beginner",
        "question": "Which law states that energy cannot be created or destroyed, only transformed? (Lab Investigation #27)",
        "options": [
            "First Law of Thermodynamics (Conservation of Energy)",
            "Ohm's Law",
            "Hooke's Law",
            "Second Law"
        ],
        "answer": 0,
        "hint": "Energy is conserved across all isolated systems.",
        "explanation": "Total energy in universe remains constant.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "⚖️ Physics Laws"
    },
    {
        "difficulty": "beginner",
        "question": "What biological molecule carries genetic hereditary instructions in living organisms? (Lab Investigation #28)",
        "options": [
            "DNA (Deoxyribonucleic Acid)",
            "Glucose",
            "Lipids",
            "Hemoglobin"
        ],
        "answer": 0,
        "hint": "Double helix structure discovered in 1953.",
        "explanation": "Stores genetic codes via 4 base pairs.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🧬 Genetics"
    },
    {
        "difficulty": "beginner",
        "question": "What force attracts any two objects with mass towards each other? (Lab Investigation #29)",
        "options": [
            "Gravitational Force",
            "Magnetic Force",
            "Strong Nuclear Force",
            "Centrifugal Force"
        ],
        "answer": 0,
        "hint": "Described by Newton and Einstein.",
        "explanation": "Curvature of spacetime around mass.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🌍 Fundamental Forces"
    },
    {
        "difficulty": "beginner",
        "question": "What optical phenomenon causes white light to separate into a rainbow through a prism? (Lab Investigation #30)",
        "options": [
            "Dispersion / Refraction",
            "Interference",
            "Polarization",
            "Reflection only"
        ],
        "answer": 0,
        "hint": "Different wavelengths bend at different angles.",
        "explanation": "Violet bends most, Red bends least.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🌈 Optics"
    },
    {
        "difficulty": "beginner",
        "question": "What is the speed of light in a vacuum? (Lab Investigation #31)",
        "options": [
            "3,000 km/s",
            "1,000,000 km/s",
            "150,000 km/s",
            "Approximately 300,000 km/s (299,792 km/s)"
        ],
        "answer": 3,
        "hint": "The universal speed limit.",
        "explanation": "Light travels ~300,000 kilometers every second.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "⚡ Fundamental Physics"
    },
    {
        "difficulty": "beginner",
        "question": "Which cellular organelle is called the 'powerhouse of the cell'? (Lab Investigation #32)",
        "options": [
            "Ribosome",
            "Golgi Apparatus",
            "Nucleus",
            "Mitochondria"
        ],
        "answer": 3,
        "hint": "Produces ATP through cellular respiration.",
        "explanation": "Mitochondria convert nutrients into usable energy.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🧬 Cell Biology"
    },
    {
        "difficulty": "beginner",
        "question": "What element makes up approximately 78% of Earth's atmosphere? (Lab Investigation #33)",
        "options": [
            "Oxygen (O₂)",
            "Argon",
            "Carbon Dioxide",
            "Nitrogen (N₂)"
        ],
        "answer": 3,
        "hint": "Oxygen is 21%, Nitrogen is 78%.",
        "explanation": "Nitrogen provides atmospheric stability.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "💨 Atmospheric Chemistry"
    },
    {
        "difficulty": "beginner",
        "question": "What quantum principle states you cannot know both position and momentum with exact precision? (Lab Investigation #34)",
        "options": [
            "Schrödinger Equation",
            "Newton's Third Law",
            "Heisenberg Uncertainty Principle",
            "Pauli Exclusion"
        ],
        "answer": 2,
        "hint": "Discovered by Werner Heisenberg.",
        "explanation": "Fundamental physical limit of quantum measurement.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "⚛️ Quantum Mechanics"
    },
    {
        "difficulty": "beginner",
        "question": "What is the chemical formula for ordinary table salt? (Lab Investigation #35)",
        "options": [
            "H2O",
            "KCl",
            "CO2",
            "NaCl (Sodium Chloride)"
        ],
        "answer": 3,
        "hint": "Ionic bond between sodium and chlorine.",
        "explanation": "Forms crystalline cubic lattice structure.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🧪 Chemistry"
    },
    {
        "difficulty": "intermediate",
        "question": "What temperature is considered 'Absolute Zero'? (Lab Investigation #36)",
        "options": [
            "-273.15°C (0 Kelvin)",
            "0°C",
            "-500°C",
            "-100°C"
        ],
        "answer": 0,
        "hint": "Point where all molecular thermal motion ceases.",
        "explanation": "Lowest possible theoretical temperature.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "❄️ Thermodynamics"
    },
    {
        "difficulty": "intermediate",
        "question": "Which law states that energy cannot be created or destroyed, only transformed? (Lab Investigation #37)",
        "options": [
            "First Law of Thermodynamics (Conservation of Energy)",
            "Ohm's Law",
            "Hooke's Law",
            "Second Law"
        ],
        "answer": 0,
        "hint": "Energy is conserved across all isolated systems.",
        "explanation": "Total energy in universe remains constant.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "⚖️ Physics Laws"
    },
    {
        "difficulty": "intermediate",
        "question": "What biological molecule carries genetic hereditary instructions in living organisms? (Lab Investigation #38)",
        "options": [
            "Hemoglobin",
            "Glucose",
            "Lipids",
            "DNA (Deoxyribonucleic Acid)"
        ],
        "answer": 3,
        "hint": "Double helix structure discovered in 1953.",
        "explanation": "Stores genetic codes via 4 base pairs.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🧬 Genetics"
    },
    {
        "difficulty": "intermediate",
        "question": "What force attracts any two objects with mass towards each other? (Lab Investigation #39)",
        "options": [
            "Centrifugal Force",
            "Magnetic Force",
            "Strong Nuclear Force",
            "Gravitational Force"
        ],
        "answer": 3,
        "hint": "Described by Newton and Einstein.",
        "explanation": "Curvature of spacetime around mass.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🌍 Fundamental Forces"
    },
    {
        "difficulty": "intermediate",
        "question": "What optical phenomenon causes white light to separate into a rainbow through a prism? (Lab Investigation #40)",
        "options": [
            "Reflection only",
            "Interference",
            "Dispersion / Refraction",
            "Polarization"
        ],
        "answer": 2,
        "hint": "Different wavelengths bend at different angles.",
        "explanation": "Violet bends most, Red bends least.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🌈 Optics"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the speed of light in a vacuum? (Lab Investigation #41)",
        "options": [
            "1,000,000 km/s",
            "Approximately 300,000 km/s (299,792 km/s)",
            "150,000 km/s",
            "3,000 km/s"
        ],
        "answer": 1,
        "hint": "The universal speed limit.",
        "explanation": "Light travels ~300,000 kilometers every second.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "⚡ Fundamental Physics"
    },
    {
        "difficulty": "intermediate",
        "question": "Which cellular organelle is called the 'powerhouse of the cell'? (Lab Investigation #42)",
        "options": [
            "Ribosome",
            "Mitochondria",
            "Golgi Apparatus",
            "Nucleus"
        ],
        "answer": 1,
        "hint": "Produces ATP through cellular respiration.",
        "explanation": "Mitochondria convert nutrients into usable energy.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🧬 Cell Biology"
    },
    {
        "difficulty": "intermediate",
        "question": "What element makes up approximately 78% of Earth's atmosphere? (Lab Investigation #43)",
        "options": [
            "Nitrogen (N₂)",
            "Oxygen (O₂)",
            "Argon",
            "Carbon Dioxide"
        ],
        "answer": 0,
        "hint": "Oxygen is 21%, Nitrogen is 78%.",
        "explanation": "Nitrogen provides atmospheric stability.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "💨 Atmospheric Chemistry"
    },
    {
        "difficulty": "intermediate",
        "question": "What quantum principle states you cannot know both position and momentum with exact precision? (Lab Investigation #44)",
        "options": [
            "Schrödinger Equation",
            "Newton's Third Law",
            "Heisenberg Uncertainty Principle",
            "Pauli Exclusion"
        ],
        "answer": 2,
        "hint": "Discovered by Werner Heisenberg.",
        "explanation": "Fundamental physical limit of quantum measurement.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "⚛️ Quantum Mechanics"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the chemical formula for ordinary table salt? (Lab Investigation #45)",
        "options": [
            "CO2",
            "KCl",
            "NaCl (Sodium Chloride)",
            "H2O"
        ],
        "answer": 2,
        "hint": "Ionic bond between sodium and chlorine.",
        "explanation": "Forms crystalline cubic lattice structure.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🧪 Chemistry"
    },
    {
        "difficulty": "intermediate",
        "question": "What temperature is considered 'Absolute Zero'? (Lab Investigation #46)",
        "options": [
            "-100°C",
            "-273.15°C (0 Kelvin)",
            "-500°C",
            "0°C"
        ],
        "answer": 1,
        "hint": "Point where all molecular thermal motion ceases.",
        "explanation": "Lowest possible theoretical temperature.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "❄️ Thermodynamics"
    },
    {
        "difficulty": "intermediate",
        "question": "Which law states that energy cannot be created or destroyed, only transformed? (Lab Investigation #47)",
        "options": [
            "Hooke's Law",
            "First Law of Thermodynamics (Conservation of Energy)",
            "Second Law",
            "Ohm's Law"
        ],
        "answer": 1,
        "hint": "Energy is conserved across all isolated systems.",
        "explanation": "Total energy in universe remains constant.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "⚖️ Physics Laws"
    },
    {
        "difficulty": "intermediate",
        "question": "What biological molecule carries genetic hereditary instructions in living organisms? (Lab Investigation #48)",
        "options": [
            "DNA (Deoxyribonucleic Acid)",
            "Glucose",
            "Lipids",
            "Hemoglobin"
        ],
        "answer": 0,
        "hint": "Double helix structure discovered in 1953.",
        "explanation": "Stores genetic codes via 4 base pairs.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🧬 Genetics"
    },
    {
        "difficulty": "intermediate",
        "question": "What force attracts any two objects with mass towards each other? (Lab Investigation #49)",
        "options": [
            "Gravitational Force",
            "Centrifugal Force",
            "Strong Nuclear Force",
            "Magnetic Force"
        ],
        "answer": 0,
        "hint": "Described by Newton and Einstein.",
        "explanation": "Curvature of spacetime around mass.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🌍 Fundamental Forces"
    },
    {
        "difficulty": "intermediate",
        "question": "What optical phenomenon causes white light to separate into a rainbow through a prism? (Lab Investigation #50)",
        "options": [
            "Reflection only",
            "Interference",
            "Polarization",
            "Dispersion / Refraction"
        ],
        "answer": 3,
        "hint": "Different wavelengths bend at different angles.",
        "explanation": "Violet bends most, Red bends least.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🌈 Optics"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the speed of light in a vacuum? (Lab Investigation #51)",
        "options": [
            "3,000 km/s",
            "Approximately 300,000 km/s (299,792 km/s)",
            "1,000,000 km/s",
            "150,000 km/s"
        ],
        "answer": 1,
        "hint": "The universal speed limit.",
        "explanation": "Light travels ~300,000 kilometers every second.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "⚡ Fundamental Physics"
    },
    {
        "difficulty": "intermediate",
        "question": "Which cellular organelle is called the 'powerhouse of the cell'? (Lab Investigation #52)",
        "options": [
            "Mitochondria",
            "Golgi Apparatus",
            "Nucleus",
            "Ribosome"
        ],
        "answer": 0,
        "hint": "Produces ATP through cellular respiration.",
        "explanation": "Mitochondria convert nutrients into usable energy.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🧬 Cell Biology"
    },
    {
        "difficulty": "intermediate",
        "question": "What element makes up approximately 78% of Earth's atmosphere? (Lab Investigation #53)",
        "options": [
            "Oxygen (O₂)",
            "Nitrogen (N₂)",
            "Argon",
            "Carbon Dioxide"
        ],
        "answer": 1,
        "hint": "Oxygen is 21%, Nitrogen is 78%.",
        "explanation": "Nitrogen provides atmospheric stability.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "💨 Atmospheric Chemistry"
    },
    {
        "difficulty": "intermediate",
        "question": "What quantum principle states you cannot know both position and momentum with exact precision? (Lab Investigation #54)",
        "options": [
            "Pauli Exclusion",
            "Newton's Third Law",
            "Heisenberg Uncertainty Principle",
            "Schrödinger Equation"
        ],
        "answer": 2,
        "hint": "Discovered by Werner Heisenberg.",
        "explanation": "Fundamental physical limit of quantum measurement.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "⚛️ Quantum Mechanics"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the chemical formula for ordinary table salt? (Lab Investigation #55)",
        "options": [
            "H2O",
            "CO2",
            "NaCl (Sodium Chloride)",
            "KCl"
        ],
        "answer": 2,
        "hint": "Ionic bond between sodium and chlorine.",
        "explanation": "Forms crystalline cubic lattice structure.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🧪 Chemistry"
    },
    {
        "difficulty": "intermediate",
        "question": "What temperature is considered 'Absolute Zero'? (Lab Investigation #56)",
        "options": [
            "-500°C",
            "-273.15°C (0 Kelvin)",
            "0°C",
            "-100°C"
        ],
        "answer": 1,
        "hint": "Point where all molecular thermal motion ceases.",
        "explanation": "Lowest possible theoretical temperature.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "❄️ Thermodynamics"
    },
    {
        "difficulty": "intermediate",
        "question": "Which law states that energy cannot be created or destroyed, only transformed? (Lab Investigation #57)",
        "options": [
            "Ohm's Law",
            "First Law of Thermodynamics (Conservation of Energy)",
            "Hooke's Law",
            "Second Law"
        ],
        "answer": 1,
        "hint": "Energy is conserved across all isolated systems.",
        "explanation": "Total energy in universe remains constant.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "⚖️ Physics Laws"
    },
    {
        "difficulty": "intermediate",
        "question": "What biological molecule carries genetic hereditary instructions in living organisms? (Lab Investigation #58)",
        "options": [
            "Hemoglobin",
            "Lipids",
            "Glucose",
            "DNA (Deoxyribonucleic Acid)"
        ],
        "answer": 3,
        "hint": "Double helix structure discovered in 1953.",
        "explanation": "Stores genetic codes via 4 base pairs.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🧬 Genetics"
    },
    {
        "difficulty": "intermediate",
        "question": "What force attracts any two objects with mass towards each other? (Lab Investigation #59)",
        "options": [
            "Strong Nuclear Force",
            "Magnetic Force",
            "Gravitational Force",
            "Centrifugal Force"
        ],
        "answer": 2,
        "hint": "Described by Newton and Einstein.",
        "explanation": "Curvature of spacetime around mass.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🌍 Fundamental Forces"
    },
    {
        "difficulty": "intermediate",
        "question": "What optical phenomenon causes white light to separate into a rainbow through a prism? (Lab Investigation #60)",
        "options": [
            "Polarization",
            "Reflection only",
            "Interference",
            "Dispersion / Refraction"
        ],
        "answer": 3,
        "hint": "Different wavelengths bend at different angles.",
        "explanation": "Violet bends most, Red bends least.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🌈 Optics"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the speed of light in a vacuum? (Lab Investigation #61)",
        "options": [
            "3,000 km/s",
            "150,000 km/s",
            "1,000,000 km/s",
            "Approximately 300,000 km/s (299,792 km/s)"
        ],
        "answer": 3,
        "hint": "The universal speed limit.",
        "explanation": "Light travels ~300,000 kilometers every second.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "⚡ Fundamental Physics"
    },
    {
        "difficulty": "intermediate",
        "question": "Which cellular organelle is called the 'powerhouse of the cell'? (Lab Investigation #62)",
        "options": [
            "Ribosome",
            "Golgi Apparatus",
            "Nucleus",
            "Mitochondria"
        ],
        "answer": 3,
        "hint": "Produces ATP through cellular respiration.",
        "explanation": "Mitochondria convert nutrients into usable energy.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🧬 Cell Biology"
    },
    {
        "difficulty": "intermediate",
        "question": "What element makes up approximately 78% of Earth's atmosphere? (Lab Investigation #63)",
        "options": [
            "Nitrogen (N₂)",
            "Carbon Dioxide",
            "Argon",
            "Oxygen (O₂)"
        ],
        "answer": 0,
        "hint": "Oxygen is 21%, Nitrogen is 78%.",
        "explanation": "Nitrogen provides atmospheric stability.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "💨 Atmospheric Chemistry"
    },
    {
        "difficulty": "intermediate",
        "question": "What quantum principle states you cannot know both position and momentum with exact precision? (Lab Investigation #64)",
        "options": [
            "Pauli Exclusion",
            "Heisenberg Uncertainty Principle",
            "Newton's Third Law",
            "Schrödinger Equation"
        ],
        "answer": 1,
        "hint": "Discovered by Werner Heisenberg.",
        "explanation": "Fundamental physical limit of quantum measurement.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "⚛️ Quantum Mechanics"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the chemical formula for ordinary table salt? (Lab Investigation #65)",
        "options": [
            "NaCl (Sodium Chloride)",
            "CO2",
            "H2O",
            "KCl"
        ],
        "answer": 0,
        "hint": "Ionic bond between sodium and chlorine.",
        "explanation": "Forms crystalline cubic lattice structure.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🧪 Chemistry"
    },
    {
        "difficulty": "intermediate",
        "question": "What temperature is considered 'Absolute Zero'? (Lab Investigation #66)",
        "options": [
            "-100°C",
            "0°C",
            "-500°C",
            "-273.15°C (0 Kelvin)"
        ],
        "answer": 3,
        "hint": "Point where all molecular thermal motion ceases.",
        "explanation": "Lowest possible theoretical temperature.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "❄️ Thermodynamics"
    },
    {
        "difficulty": "intermediate",
        "question": "Which law states that energy cannot be created or destroyed, only transformed? (Lab Investigation #67)",
        "options": [
            "Ohm's Law",
            "First Law of Thermodynamics (Conservation of Energy)",
            "Second Law",
            "Hooke's Law"
        ],
        "answer": 1,
        "hint": "Energy is conserved across all isolated systems.",
        "explanation": "Total energy in universe remains constant.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "⚖️ Physics Laws"
    },
    {
        "difficulty": "intermediate",
        "question": "What biological molecule carries genetic hereditary instructions in living organisms? (Lab Investigation #68)",
        "options": [
            "DNA (Deoxyribonucleic Acid)",
            "Hemoglobin",
            "Glucose",
            "Lipids"
        ],
        "answer": 0,
        "hint": "Double helix structure discovered in 1953.",
        "explanation": "Stores genetic codes via 4 base pairs.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🧬 Genetics"
    },
    {
        "difficulty": "intermediate",
        "question": "What force attracts any two objects with mass towards each other? (Lab Investigation #69)",
        "options": [
            "Gravitational Force",
            "Strong Nuclear Force",
            "Magnetic Force",
            "Centrifugal Force"
        ],
        "answer": 0,
        "hint": "Described by Newton and Einstein.",
        "explanation": "Curvature of spacetime around mass.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🌍 Fundamental Forces"
    },
    {
        "difficulty": "intermediate",
        "question": "What optical phenomenon causes white light to separate into a rainbow through a prism? (Lab Investigation #70)",
        "options": [
            "Polarization",
            "Reflection only",
            "Interference",
            "Dispersion / Refraction"
        ],
        "answer": 3,
        "hint": "Different wavelengths bend at different angles.",
        "explanation": "Violet bends most, Red bends least.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🌈 Optics"
    },
    {
        "difficulty": "advanced",
        "question": "What is the speed of light in a vacuum? (Lab Investigation #71)",
        "options": [
            "1,000,000 km/s",
            "3,000 km/s",
            "150,000 km/s",
            "Approximately 300,000 km/s (299,792 km/s)"
        ],
        "answer": 3,
        "hint": "The universal speed limit.",
        "explanation": "Light travels ~300,000 kilometers every second.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "⚡ Fundamental Physics"
    },
    {
        "difficulty": "advanced",
        "question": "Which cellular organelle is called the 'powerhouse of the cell'? (Lab Investigation #72)",
        "options": [
            "Golgi Apparatus",
            "Mitochondria",
            "Ribosome",
            "Nucleus"
        ],
        "answer": 1,
        "hint": "Produces ATP through cellular respiration.",
        "explanation": "Mitochondria convert nutrients into usable energy.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🧬 Cell Biology"
    },
    {
        "difficulty": "advanced",
        "question": "What element makes up approximately 78% of Earth's atmosphere? (Lab Investigation #73)",
        "options": [
            "Oxygen (O₂)",
            "Argon",
            "Carbon Dioxide",
            "Nitrogen (N₂)"
        ],
        "answer": 3,
        "hint": "Oxygen is 21%, Nitrogen is 78%.",
        "explanation": "Nitrogen provides atmospheric stability.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "💨 Atmospheric Chemistry"
    },
    {
        "difficulty": "advanced",
        "question": "What quantum principle states you cannot know both position and momentum with exact precision? (Lab Investigation #74)",
        "options": [
            "Schrödinger Equation",
            "Heisenberg Uncertainty Principle",
            "Newton's Third Law",
            "Pauli Exclusion"
        ],
        "answer": 1,
        "hint": "Discovered by Werner Heisenberg.",
        "explanation": "Fundamental physical limit of quantum measurement.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "⚛️ Quantum Mechanics"
    },
    {
        "difficulty": "advanced",
        "question": "What is the chemical formula for ordinary table salt? (Lab Investigation #75)",
        "options": [
            "H2O",
            "NaCl (Sodium Chloride)",
            "KCl",
            "CO2"
        ],
        "answer": 1,
        "hint": "Ionic bond between sodium and chlorine.",
        "explanation": "Forms crystalline cubic lattice structure.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🧪 Chemistry"
    },
    {
        "difficulty": "advanced",
        "question": "What temperature is considered 'Absolute Zero'? (Lab Investigation #76)",
        "options": [
            "0°C",
            "-100°C",
            "-500°C",
            "-273.15°C (0 Kelvin)"
        ],
        "answer": 3,
        "hint": "Point where all molecular thermal motion ceases.",
        "explanation": "Lowest possible theoretical temperature.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "❄️ Thermodynamics"
    },
    {
        "difficulty": "advanced",
        "question": "Which law states that energy cannot be created or destroyed, only transformed? (Lab Investigation #77)",
        "options": [
            "Ohm's Law",
            "First Law of Thermodynamics (Conservation of Energy)",
            "Second Law",
            "Hooke's Law"
        ],
        "answer": 1,
        "hint": "Energy is conserved across all isolated systems.",
        "explanation": "Total energy in universe remains constant.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "⚖️ Physics Laws"
    },
    {
        "difficulty": "advanced",
        "question": "What biological molecule carries genetic hereditary instructions in living organisms? (Lab Investigation #78)",
        "options": [
            "Lipids",
            "DNA (Deoxyribonucleic Acid)",
            "Glucose",
            "Hemoglobin"
        ],
        "answer": 1,
        "hint": "Double helix structure discovered in 1953.",
        "explanation": "Stores genetic codes via 4 base pairs.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🧬 Genetics"
    },
    {
        "difficulty": "advanced",
        "question": "What force attracts any two objects with mass towards each other? (Lab Investigation #79)",
        "options": [
            "Strong Nuclear Force",
            "Centrifugal Force",
            "Gravitational Force",
            "Magnetic Force"
        ],
        "answer": 2,
        "hint": "Described by Newton and Einstein.",
        "explanation": "Curvature of spacetime around mass.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🌍 Fundamental Forces"
    },
    {
        "difficulty": "advanced",
        "question": "What optical phenomenon causes white light to separate into a rainbow through a prism? (Lab Investigation #80)",
        "options": [
            "Interference",
            "Reflection only",
            "Polarization",
            "Dispersion / Refraction"
        ],
        "answer": 3,
        "hint": "Different wavelengths bend at different angles.",
        "explanation": "Violet bends most, Red bends least.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🌈 Optics"
    },
    {
        "difficulty": "advanced",
        "question": "What is the speed of light in a vacuum? (Lab Investigation #81)",
        "options": [
            "150,000 km/s",
            "Approximately 300,000 km/s (299,792 km/s)",
            "3,000 km/s",
            "1,000,000 km/s"
        ],
        "answer": 1,
        "hint": "The universal speed limit.",
        "explanation": "Light travels ~300,000 kilometers every second.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "⚡ Fundamental Physics"
    },
    {
        "difficulty": "advanced",
        "question": "Which cellular organelle is called the 'powerhouse of the cell'? (Lab Investigation #82)",
        "options": [
            "Mitochondria",
            "Golgi Apparatus",
            "Ribosome",
            "Nucleus"
        ],
        "answer": 0,
        "hint": "Produces ATP through cellular respiration.",
        "explanation": "Mitochondria convert nutrients into usable energy.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🧬 Cell Biology"
    },
    {
        "difficulty": "advanced",
        "question": "What element makes up approximately 78% of Earth's atmosphere? (Lab Investigation #83)",
        "options": [
            "Carbon Dioxide",
            "Argon",
            "Oxygen (O₂)",
            "Nitrogen (N₂)"
        ],
        "answer": 3,
        "hint": "Oxygen is 21%, Nitrogen is 78%.",
        "explanation": "Nitrogen provides atmospheric stability.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "💨 Atmospheric Chemistry"
    },
    {
        "difficulty": "advanced",
        "question": "What quantum principle states you cannot know both position and momentum with exact precision? (Lab Investigation #84)",
        "options": [
            "Newton's Third Law",
            "Heisenberg Uncertainty Principle",
            "Schrödinger Equation",
            "Pauli Exclusion"
        ],
        "answer": 1,
        "hint": "Discovered by Werner Heisenberg.",
        "explanation": "Fundamental physical limit of quantum measurement.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "⚛️ Quantum Mechanics"
    },
    {
        "difficulty": "advanced",
        "question": "What is the chemical formula for ordinary table salt? (Lab Investigation #85)",
        "options": [
            "KCl",
            "CO2",
            "NaCl (Sodium Chloride)",
            "H2O"
        ],
        "answer": 2,
        "hint": "Ionic bond between sodium and chlorine.",
        "explanation": "Forms crystalline cubic lattice structure.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🧪 Chemistry"
    },
    {
        "difficulty": "advanced",
        "question": "What temperature is considered 'Absolute Zero'? (Lab Investigation #86)",
        "options": [
            "-500°C",
            "-100°C",
            "-273.15°C (0 Kelvin)",
            "0°C"
        ],
        "answer": 2,
        "hint": "Point where all molecular thermal motion ceases.",
        "explanation": "Lowest possible theoretical temperature.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "❄️ Thermodynamics"
    },
    {
        "difficulty": "advanced",
        "question": "Which law states that energy cannot be created or destroyed, only transformed? (Lab Investigation #87)",
        "options": [
            "Ohm's Law",
            "Second Law",
            "Hooke's Law",
            "First Law of Thermodynamics (Conservation of Energy)"
        ],
        "answer": 3,
        "hint": "Energy is conserved across all isolated systems.",
        "explanation": "Total energy in universe remains constant.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "⚖️ Physics Laws"
    },
    {
        "difficulty": "advanced",
        "question": "What biological molecule carries genetic hereditary instructions in living organisms? (Lab Investigation #88)",
        "options": [
            "Glucose",
            "Lipids",
            "Hemoglobin",
            "DNA (Deoxyribonucleic Acid)"
        ],
        "answer": 3,
        "hint": "Double helix structure discovered in 1953.",
        "explanation": "Stores genetic codes via 4 base pairs.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🧬 Genetics"
    },
    {
        "difficulty": "advanced",
        "question": "What force attracts any two objects with mass towards each other? (Lab Investigation #89)",
        "options": [
            "Gravitational Force",
            "Magnetic Force",
            "Strong Nuclear Force",
            "Centrifugal Force"
        ],
        "answer": 0,
        "hint": "Described by Newton and Einstein.",
        "explanation": "Curvature of spacetime around mass.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🌍 Fundamental Forces"
    },
    {
        "difficulty": "advanced",
        "question": "What optical phenomenon causes white light to separate into a rainbow through a prism? (Lab Investigation #90)",
        "options": [
            "Polarization",
            "Reflection only",
            "Interference",
            "Dispersion / Refraction"
        ],
        "answer": 3,
        "hint": "Different wavelengths bend at different angles.",
        "explanation": "Violet bends most, Red bends least.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🌈 Optics"
    },
    {
        "difficulty": "advanced",
        "question": "What is the speed of light in a vacuum? (Lab Investigation #91)",
        "options": [
            "1,000,000 km/s",
            "3,000 km/s",
            "150,000 km/s",
            "Approximately 300,000 km/s (299,792 km/s)"
        ],
        "answer": 3,
        "hint": "The universal speed limit.",
        "explanation": "Light travels ~300,000 kilometers every second.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "⚡ Fundamental Physics"
    },
    {
        "difficulty": "advanced",
        "question": "Which cellular organelle is called the 'powerhouse of the cell'? (Lab Investigation #92)",
        "options": [
            "Mitochondria",
            "Ribosome",
            "Golgi Apparatus",
            "Nucleus"
        ],
        "answer": 0,
        "hint": "Produces ATP through cellular respiration.",
        "explanation": "Mitochondria convert nutrients into usable energy.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🧬 Cell Biology"
    },
    {
        "difficulty": "advanced",
        "question": "What element makes up approximately 78% of Earth's atmosphere? (Lab Investigation #93)",
        "options": [
            "Oxygen (O₂)",
            "Argon",
            "Nitrogen (N₂)",
            "Carbon Dioxide"
        ],
        "answer": 2,
        "hint": "Oxygen is 21%, Nitrogen is 78%.",
        "explanation": "Nitrogen provides atmospheric stability.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "💨 Atmospheric Chemistry"
    },
    {
        "difficulty": "advanced",
        "question": "What quantum principle states you cannot know both position and momentum with exact precision? (Lab Investigation #94)",
        "options": [
            "Heisenberg Uncertainty Principle",
            "Newton's Third Law",
            "Pauli Exclusion",
            "Schrödinger Equation"
        ],
        "answer": 0,
        "hint": "Discovered by Werner Heisenberg.",
        "explanation": "Fundamental physical limit of quantum measurement.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "⚛️ Quantum Mechanics"
    },
    {
        "difficulty": "advanced",
        "question": "What is the chemical formula for ordinary table salt? (Lab Investigation #95)",
        "options": [
            "H2O",
            "NaCl (Sodium Chloride)",
            "CO2",
            "KCl"
        ],
        "answer": 1,
        "hint": "Ionic bond between sodium and chlorine.",
        "explanation": "Forms crystalline cubic lattice structure.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🧪 Chemistry"
    },
    {
        "difficulty": "advanced",
        "question": "What temperature is considered 'Absolute Zero'? (Lab Investigation #96)",
        "options": [
            "-100°C",
            "-273.15°C (0 Kelvin)",
            "0°C",
            "-500°C"
        ],
        "answer": 1,
        "hint": "Point where all molecular thermal motion ceases.",
        "explanation": "Lowest possible theoretical temperature.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "❄️ Thermodynamics"
    },
    {
        "difficulty": "advanced",
        "question": "Which law states that energy cannot be created or destroyed, only transformed? (Lab Investigation #97)",
        "options": [
            "First Law of Thermodynamics (Conservation of Energy)",
            "Ohm's Law",
            "Hooke's Law",
            "Second Law"
        ],
        "answer": 0,
        "hint": "Energy is conserved across all isolated systems.",
        "explanation": "Total energy in universe remains constant.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "⚖️ Physics Laws"
    },
    {
        "difficulty": "advanced",
        "question": "What biological molecule carries genetic hereditary instructions in living organisms? (Lab Investigation #98)",
        "options": [
            "DNA (Deoxyribonucleic Acid)",
            "Lipids",
            "Hemoglobin",
            "Glucose"
        ],
        "answer": 0,
        "hint": "Double helix structure discovered in 1953.",
        "explanation": "Stores genetic codes via 4 base pairs.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🧬 Genetics"
    },
    {
        "difficulty": "advanced",
        "question": "What force attracts any two objects with mass towards each other? (Lab Investigation #99)",
        "options": [
            "Centrifugal Force",
            "Magnetic Force",
            "Gravitational Force",
            "Strong Nuclear Force"
        ],
        "answer": 2,
        "hint": "Described by Newton and Einstein.",
        "explanation": "Curvature of spacetime around mass.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🌍 Fundamental Forces"
    },
    {
        "difficulty": "advanced",
        "question": "What optical phenomenon causes white light to separate into a rainbow through a prism? (Lab Investigation #100)",
        "options": [
            "Polarization",
            "Dispersion / Refraction",
            "Interference",
            "Reflection only"
        ],
        "answer": 1,
        "hint": "Different wavelengths bend at different angles.",
        "explanation": "Violet bends most, Red bends least.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🌈 Optics"
    }
]
  },
  math: {
    title: "📐 Mathematics & Logic",
    description: "Sharpen your mind with prime numbers, geometry, algebra, and golden ratios.",
    icon: "🔢",
    ageGroup: "All Ages",
    heroImage: "/quiz/math_hero.jpg",
    questions: [
    {
        "difficulty": "beginner",
        "question": "What is the value of Pi (π) rounded to two decimal places?",
        "options": [
            "3.16",
            "3.14",
            "3.18",
            "3.12"
        ],
        "answer": 1,
        "hint": "Ratio of circumference to diameter.",
        "explanation": "Irrational number 3.14159...",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🔢 Constants"
    },
    {
        "difficulty": "beginner",
        "question": "What is the only even prime number?",
        "options": [
            "2",
            "1",
            "4",
            "0"
        ],
        "answer": 0,
        "hint": "Smallest prime number.",
        "explanation": "All other even numbers are divisible by 2.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🧮 Prime Numbers"
    },
    {
        "difficulty": "beginner",
        "question": "What is the formula for the Pythagorean theorem in a right triangle?",
        "options": [
            "a² - b² = c²",
            "2a + 2b = c",
            "a + b = c",
            "a² + b² = c²"
        ],
        "answer": 3,
        "hint": "Relates legs to hypotenuse.",
        "explanation": "Fundamental theorem in Euclidean geometry.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "📐 Geometry"
    },
    {
        "difficulty": "beginner",
        "question": "What is the Golden Ratio (Phi, φ) value approximately?",
        "options": [
            "2.718",
            "3.141",
            "1.414",
            "1.618"
        ],
        "answer": 3,
        "hint": "(1 + √5) / 2",
        "explanation": "Appears in spiral shells and nature.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "✨ Golden Ratio"
    },
    {
        "difficulty": "beginner",
        "question": "What is the factorial value of 5 (5!)?",
        "options": [
            "60",
            "120",
            "720",
            "25"
        ],
        "answer": 1,
        "hint": "5 * 4 * 3 * 2 * 1 = 120",
        "explanation": "Factorials count permutations.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🎲 Combinatorics"
    },
    {
        "difficulty": "beginner",
        "question": "What is the sum of interior angles in any triangle?",
        "options": [
            "270 degrees",
            "360 degrees",
            "90 degrees",
            "180 degrees"
        ],
        "answer": 3,
        "hint": "Straight line angle sum.",
        "explanation": "Always adds up to 180° in flat space.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "📐 Euclidean Math"
    },
    {
        "difficulty": "beginner",
        "question": "What is Euler's number (e) rounded to two decimal places?",
        "options": [
            "1.41",
            "1.62",
            "3.14",
            "2.72 (or 2.718)"
        ],
        "answer": 3,
        "hint": "Base of natural logarithm.",
        "explanation": "Key constant in exponential growth calculus.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "📈 Calculus"
    },
    {
        "difficulty": "beginner",
        "question": "What is the probability of flipping heads twice in a row with a fair coin?",
        "options": [
            "25% (1/4)",
            "10% (1/10)",
            "75% (3/4)",
            "50% (1/2)"
        ],
        "answer": 0,
        "hint": "0.5 * 0.5 = 0.25",
        "explanation": "Independent probability multiplication.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "📊 Probability"
    },
    {
        "difficulty": "beginner",
        "question": "What is the square root of 144?",
        "options": [
            "14",
            "16",
            "12",
            "11"
        ],
        "answer": 2,
        "hint": "12 * 12 = 144",
        "explanation": "Common perfect square.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🔢 Arithmetic"
    },
    {
        "difficulty": "beginner",
        "question": "What famous identity connects e, i, pi, 1, and 0?",
        "options": [
            "E = mc²",
            "a² + b² = c²",
            "e^(i*π) + 1 = 0 (Euler's Identity)",
            "F = ma"
        ],
        "answer": 2,
        "hint": "Widely regarded as the most beautiful math equation.",
        "explanation": "Unifies five fundamental constants.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "👑 Pure Mathematics"
    },
    {
        "difficulty": "beginner",
        "question": "What is the value of Pi (π) rounded to two decimal places? (Logic Equation #11)",
        "options": [
            "3.12",
            "3.18",
            "3.16",
            "3.14"
        ],
        "answer": 3,
        "hint": "Ratio of circumference to diameter.",
        "explanation": "Irrational number 3.14159...",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🔢 Constants"
    },
    {
        "difficulty": "beginner",
        "question": "What is the only even prime number? (Logic Equation #12)",
        "options": [
            "4",
            "0",
            "2",
            "1"
        ],
        "answer": 2,
        "hint": "Smallest prime number.",
        "explanation": "All other even numbers are divisible by 2.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🧮 Prime Numbers"
    },
    {
        "difficulty": "beginner",
        "question": "What is the formula for the Pythagorean theorem in a right triangle? (Logic Equation #13)",
        "options": [
            "a + b = c",
            "2a + 2b = c",
            "a² - b² = c²",
            "a² + b² = c²"
        ],
        "answer": 3,
        "hint": "Relates legs to hypotenuse.",
        "explanation": "Fundamental theorem in Euclidean geometry.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "📐 Geometry"
    },
    {
        "difficulty": "beginner",
        "question": "What is the Golden Ratio (Phi, φ) value approximately? (Logic Equation #14)",
        "options": [
            "1.414",
            "2.718",
            "1.618",
            "3.141"
        ],
        "answer": 2,
        "hint": "(1 + √5) / 2",
        "explanation": "Appears in spiral shells and nature.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "✨ Golden Ratio"
    },
    {
        "difficulty": "beginner",
        "question": "What is the factorial value of 5 (5!)? (Logic Equation #15)",
        "options": [
            "120",
            "720",
            "60",
            "25"
        ],
        "answer": 0,
        "hint": "5 * 4 * 3 * 2 * 1 = 120",
        "explanation": "Factorials count permutations.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🎲 Combinatorics"
    },
    {
        "difficulty": "beginner",
        "question": "What is the sum of interior angles in any triangle? (Logic Equation #16)",
        "options": [
            "270 degrees",
            "180 degrees",
            "360 degrees",
            "90 degrees"
        ],
        "answer": 1,
        "hint": "Straight line angle sum.",
        "explanation": "Always adds up to 180° in flat space.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "📐 Euclidean Math"
    },
    {
        "difficulty": "beginner",
        "question": "What is Euler's number (e) rounded to two decimal places? (Logic Equation #17)",
        "options": [
            "1.41",
            "2.72 (or 2.718)",
            "3.14",
            "1.62"
        ],
        "answer": 1,
        "hint": "Base of natural logarithm.",
        "explanation": "Key constant in exponential growth calculus.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "📈 Calculus"
    },
    {
        "difficulty": "beginner",
        "question": "What is the probability of flipping heads twice in a row with a fair coin? (Logic Equation #18)",
        "options": [
            "25% (1/4)",
            "10% (1/10)",
            "50% (1/2)",
            "75% (3/4)"
        ],
        "answer": 0,
        "hint": "0.5 * 0.5 = 0.25",
        "explanation": "Independent probability multiplication.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "📊 Probability"
    },
    {
        "difficulty": "beginner",
        "question": "What is the square root of 144? (Logic Equation #19)",
        "options": [
            "16",
            "11",
            "14",
            "12"
        ],
        "answer": 3,
        "hint": "12 * 12 = 144",
        "explanation": "Common perfect square.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🔢 Arithmetic"
    },
    {
        "difficulty": "beginner",
        "question": "What famous identity connects e, i, pi, 1, and 0? (Logic Equation #20)",
        "options": [
            "a² + b² = c²",
            "F = ma",
            "e^(i*π) + 1 = 0 (Euler's Identity)",
            "E = mc²"
        ],
        "answer": 2,
        "hint": "Widely regarded as the most beautiful math equation.",
        "explanation": "Unifies five fundamental constants.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "👑 Pure Mathematics"
    },
    {
        "difficulty": "beginner",
        "question": "What is the value of Pi (π) rounded to two decimal places? (Logic Equation #21)",
        "options": [
            "3.16",
            "3.18",
            "3.12",
            "3.14"
        ],
        "answer": 3,
        "hint": "Ratio of circumference to diameter.",
        "explanation": "Irrational number 3.14159...",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🔢 Constants"
    },
    {
        "difficulty": "beginner",
        "question": "What is the only even prime number? (Logic Equation #22)",
        "options": [
            "2",
            "1",
            "0",
            "4"
        ],
        "answer": 0,
        "hint": "Smallest prime number.",
        "explanation": "All other even numbers are divisible by 2.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🧮 Prime Numbers"
    },
    {
        "difficulty": "beginner",
        "question": "What is the formula for the Pythagorean theorem in a right triangle? (Logic Equation #23)",
        "options": [
            "a² + b² = c²",
            "a² - b² = c²",
            "2a + 2b = c",
            "a + b = c"
        ],
        "answer": 0,
        "hint": "Relates legs to hypotenuse.",
        "explanation": "Fundamental theorem in Euclidean geometry.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "📐 Geometry"
    },
    {
        "difficulty": "beginner",
        "question": "What is the Golden Ratio (Phi, φ) value approximately? (Logic Equation #24)",
        "options": [
            "1.414",
            "1.618",
            "3.141",
            "2.718"
        ],
        "answer": 1,
        "hint": "(1 + √5) / 2",
        "explanation": "Appears in spiral shells and nature.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "✨ Golden Ratio"
    },
    {
        "difficulty": "beginner",
        "question": "What is the factorial value of 5 (5!)? (Logic Equation #25)",
        "options": [
            "25",
            "120",
            "60",
            "720"
        ],
        "answer": 1,
        "hint": "5 * 4 * 3 * 2 * 1 = 120",
        "explanation": "Factorials count permutations.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🎲 Combinatorics"
    },
    {
        "difficulty": "beginner",
        "question": "What is the sum of interior angles in any triangle? (Logic Equation #26)",
        "options": [
            "270 degrees",
            "360 degrees",
            "180 degrees",
            "90 degrees"
        ],
        "answer": 2,
        "hint": "Straight line angle sum.",
        "explanation": "Always adds up to 180° in flat space.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "📐 Euclidean Math"
    },
    {
        "difficulty": "beginner",
        "question": "What is Euler's number (e) rounded to two decimal places? (Logic Equation #27)",
        "options": [
            "2.72 (or 2.718)",
            "3.14",
            "1.41",
            "1.62"
        ],
        "answer": 0,
        "hint": "Base of natural logarithm.",
        "explanation": "Key constant in exponential growth calculus.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "📈 Calculus"
    },
    {
        "difficulty": "beginner",
        "question": "What is the probability of flipping heads twice in a row with a fair coin? (Logic Equation #28)",
        "options": [
            "10% (1/10)",
            "25% (1/4)",
            "75% (3/4)",
            "50% (1/2)"
        ],
        "answer": 1,
        "hint": "0.5 * 0.5 = 0.25",
        "explanation": "Independent probability multiplication.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "📊 Probability"
    },
    {
        "difficulty": "beginner",
        "question": "What is the square root of 144? (Logic Equation #29)",
        "options": [
            "14",
            "11",
            "12",
            "16"
        ],
        "answer": 2,
        "hint": "12 * 12 = 144",
        "explanation": "Common perfect square.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🔢 Arithmetic"
    },
    {
        "difficulty": "beginner",
        "question": "What famous identity connects e, i, pi, 1, and 0? (Logic Equation #30)",
        "options": [
            "a² + b² = c²",
            "E = mc²",
            "e^(i*π) + 1 = 0 (Euler's Identity)",
            "F = ma"
        ],
        "answer": 2,
        "hint": "Widely regarded as the most beautiful math equation.",
        "explanation": "Unifies five fundamental constants.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "👑 Pure Mathematics"
    },
    {
        "difficulty": "beginner",
        "question": "What is the value of Pi (π) rounded to two decimal places? (Logic Equation #31)",
        "options": [
            "3.12",
            "3.18",
            "3.16",
            "3.14"
        ],
        "answer": 3,
        "hint": "Ratio of circumference to diameter.",
        "explanation": "Irrational number 3.14159...",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🔢 Constants"
    },
    {
        "difficulty": "beginner",
        "question": "What is the only even prime number? (Logic Equation #32)",
        "options": [
            "1",
            "0",
            "4",
            "2"
        ],
        "answer": 3,
        "hint": "Smallest prime number.",
        "explanation": "All other even numbers are divisible by 2.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🧮 Prime Numbers"
    },
    {
        "difficulty": "beginner",
        "question": "What is the formula for the Pythagorean theorem in a right triangle? (Logic Equation #33)",
        "options": [
            "a² + b² = c²",
            "2a + 2b = c",
            "a + b = c",
            "a² - b² = c²"
        ],
        "answer": 0,
        "hint": "Relates legs to hypotenuse.",
        "explanation": "Fundamental theorem in Euclidean geometry.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "📐 Geometry"
    },
    {
        "difficulty": "beginner",
        "question": "What is the Golden Ratio (Phi, φ) value approximately? (Logic Equation #34)",
        "options": [
            "2.718",
            "1.414",
            "3.141",
            "1.618"
        ],
        "answer": 3,
        "hint": "(1 + √5) / 2",
        "explanation": "Appears in spiral shells and nature.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "✨ Golden Ratio"
    },
    {
        "difficulty": "beginner",
        "question": "What is the factorial value of 5 (5!)? (Logic Equation #35)",
        "options": [
            "60",
            "120",
            "720",
            "25"
        ],
        "answer": 1,
        "hint": "5 * 4 * 3 * 2 * 1 = 120",
        "explanation": "Factorials count permutations.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🎲 Combinatorics"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the sum of interior angles in any triangle? (Logic Equation #36)",
        "options": [
            "360 degrees",
            "90 degrees",
            "180 degrees",
            "270 degrees"
        ],
        "answer": 2,
        "hint": "Straight line angle sum.",
        "explanation": "Always adds up to 180° in flat space.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "📐 Euclidean Math"
    },
    {
        "difficulty": "intermediate",
        "question": "What is Euler's number (e) rounded to two decimal places? (Logic Equation #37)",
        "options": [
            "3.14",
            "1.62",
            "2.72 (or 2.718)",
            "1.41"
        ],
        "answer": 2,
        "hint": "Base of natural logarithm.",
        "explanation": "Key constant in exponential growth calculus.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "📈 Calculus"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the probability of flipping heads twice in a row with a fair coin? (Logic Equation #38)",
        "options": [
            "10% (1/10)",
            "75% (3/4)",
            "50% (1/2)",
            "25% (1/4)"
        ],
        "answer": 3,
        "hint": "0.5 * 0.5 = 0.25",
        "explanation": "Independent probability multiplication.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "📊 Probability"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the square root of 144? (Logic Equation #39)",
        "options": [
            "14",
            "11",
            "12",
            "16"
        ],
        "answer": 2,
        "hint": "12 * 12 = 144",
        "explanation": "Common perfect square.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🔢 Arithmetic"
    },
    {
        "difficulty": "intermediate",
        "question": "What famous identity connects e, i, pi, 1, and 0? (Logic Equation #40)",
        "options": [
            "F = ma",
            "e^(i*π) + 1 = 0 (Euler's Identity)",
            "a² + b² = c²",
            "E = mc²"
        ],
        "answer": 1,
        "hint": "Widely regarded as the most beautiful math equation.",
        "explanation": "Unifies five fundamental constants.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "👑 Pure Mathematics"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the value of Pi (π) rounded to two decimal places? (Logic Equation #41)",
        "options": [
            "3.18",
            "3.12",
            "3.16",
            "3.14"
        ],
        "answer": 3,
        "hint": "Ratio of circumference to diameter.",
        "explanation": "Irrational number 3.14159...",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🔢 Constants"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the only even prime number? (Logic Equation #42)",
        "options": [
            "2",
            "4",
            "1",
            "0"
        ],
        "answer": 0,
        "hint": "Smallest prime number.",
        "explanation": "All other even numbers are divisible by 2.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🧮 Prime Numbers"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the formula for the Pythagorean theorem in a right triangle? (Logic Equation #43)",
        "options": [
            "a² + b² = c²",
            "a + b = c",
            "a² - b² = c²",
            "2a + 2b = c"
        ],
        "answer": 0,
        "hint": "Relates legs to hypotenuse.",
        "explanation": "Fundamental theorem in Euclidean geometry.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "📐 Geometry"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the Golden Ratio (Phi, φ) value approximately? (Logic Equation #44)",
        "options": [
            "3.141",
            "2.718",
            "1.414",
            "1.618"
        ],
        "answer": 3,
        "hint": "(1 + √5) / 2",
        "explanation": "Appears in spiral shells and nature.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "✨ Golden Ratio"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the factorial value of 5 (5!)? (Logic Equation #45)",
        "options": [
            "120",
            "60",
            "25",
            "720"
        ],
        "answer": 0,
        "hint": "5 * 4 * 3 * 2 * 1 = 120",
        "explanation": "Factorials count permutations.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🎲 Combinatorics"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the sum of interior angles in any triangle? (Logic Equation #46)",
        "options": [
            "270 degrees",
            "360 degrees",
            "90 degrees",
            "180 degrees"
        ],
        "answer": 3,
        "hint": "Straight line angle sum.",
        "explanation": "Always adds up to 180° in flat space.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "📐 Euclidean Math"
    },
    {
        "difficulty": "intermediate",
        "question": "What is Euler's number (e) rounded to two decimal places? (Logic Equation #47)",
        "options": [
            "2.72 (or 2.718)",
            "1.62",
            "1.41",
            "3.14"
        ],
        "answer": 0,
        "hint": "Base of natural logarithm.",
        "explanation": "Key constant in exponential growth calculus.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "📈 Calculus"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the probability of flipping heads twice in a row with a fair coin? (Logic Equation #48)",
        "options": [
            "75% (3/4)",
            "10% (1/10)",
            "50% (1/2)",
            "25% (1/4)"
        ],
        "answer": 3,
        "hint": "0.5 * 0.5 = 0.25",
        "explanation": "Independent probability multiplication.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "📊 Probability"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the square root of 144? (Logic Equation #49)",
        "options": [
            "14",
            "16",
            "11",
            "12"
        ],
        "answer": 3,
        "hint": "12 * 12 = 144",
        "explanation": "Common perfect square.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🔢 Arithmetic"
    },
    {
        "difficulty": "intermediate",
        "question": "What famous identity connects e, i, pi, 1, and 0? (Logic Equation #50)",
        "options": [
            "a² + b² = c²",
            "e^(i*π) + 1 = 0 (Euler's Identity)",
            "F = ma",
            "E = mc²"
        ],
        "answer": 1,
        "hint": "Widely regarded as the most beautiful math equation.",
        "explanation": "Unifies five fundamental constants.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "👑 Pure Mathematics"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the value of Pi (π) rounded to two decimal places? (Logic Equation #51)",
        "options": [
            "3.18",
            "3.16",
            "3.14",
            "3.12"
        ],
        "answer": 2,
        "hint": "Ratio of circumference to diameter.",
        "explanation": "Irrational number 3.14159...",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🔢 Constants"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the only even prime number? (Logic Equation #52)",
        "options": [
            "4",
            "1",
            "0",
            "2"
        ],
        "answer": 3,
        "hint": "Smallest prime number.",
        "explanation": "All other even numbers are divisible by 2.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🧮 Prime Numbers"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the formula for the Pythagorean theorem in a right triangle? (Logic Equation #53)",
        "options": [
            "a² - b² = c²",
            "a² + b² = c²",
            "2a + 2b = c",
            "a + b = c"
        ],
        "answer": 1,
        "hint": "Relates legs to hypotenuse.",
        "explanation": "Fundamental theorem in Euclidean geometry.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "📐 Geometry"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the Golden Ratio (Phi, φ) value approximately? (Logic Equation #54)",
        "options": [
            "1.618",
            "3.141",
            "1.414",
            "2.718"
        ],
        "answer": 0,
        "hint": "(1 + √5) / 2",
        "explanation": "Appears in spiral shells and nature.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "✨ Golden Ratio"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the factorial value of 5 (5!)? (Logic Equation #55)",
        "options": [
            "120",
            "60",
            "720",
            "25"
        ],
        "answer": 0,
        "hint": "5 * 4 * 3 * 2 * 1 = 120",
        "explanation": "Factorials count permutations.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🎲 Combinatorics"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the sum of interior angles in any triangle? (Logic Equation #56)",
        "options": [
            "270 degrees",
            "360 degrees",
            "90 degrees",
            "180 degrees"
        ],
        "answer": 3,
        "hint": "Straight line angle sum.",
        "explanation": "Always adds up to 180° in flat space.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "📐 Euclidean Math"
    },
    {
        "difficulty": "intermediate",
        "question": "What is Euler's number (e) rounded to two decimal places? (Logic Equation #57)",
        "options": [
            "1.62",
            "3.14",
            "2.72 (or 2.718)",
            "1.41"
        ],
        "answer": 2,
        "hint": "Base of natural logarithm.",
        "explanation": "Key constant in exponential growth calculus.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "📈 Calculus"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the probability of flipping heads twice in a row with a fair coin? (Logic Equation #58)",
        "options": [
            "50% (1/2)",
            "75% (3/4)",
            "25% (1/4)",
            "10% (1/10)"
        ],
        "answer": 2,
        "hint": "0.5 * 0.5 = 0.25",
        "explanation": "Independent probability multiplication.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "📊 Probability"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the square root of 144? (Logic Equation #59)",
        "options": [
            "12",
            "14",
            "11",
            "16"
        ],
        "answer": 0,
        "hint": "12 * 12 = 144",
        "explanation": "Common perfect square.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🔢 Arithmetic"
    },
    {
        "difficulty": "intermediate",
        "question": "What famous identity connects e, i, pi, 1, and 0? (Logic Equation #60)",
        "options": [
            "a² + b² = c²",
            "E = mc²",
            "e^(i*π) + 1 = 0 (Euler's Identity)",
            "F = ma"
        ],
        "answer": 2,
        "hint": "Widely regarded as the most beautiful math equation.",
        "explanation": "Unifies five fundamental constants.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "👑 Pure Mathematics"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the value of Pi (π) rounded to two decimal places? (Logic Equation #61)",
        "options": [
            "3.16",
            "3.18",
            "3.14",
            "3.12"
        ],
        "answer": 2,
        "hint": "Ratio of circumference to diameter.",
        "explanation": "Irrational number 3.14159...",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🔢 Constants"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the only even prime number? (Logic Equation #62)",
        "options": [
            "1",
            "0",
            "4",
            "2"
        ],
        "answer": 3,
        "hint": "Smallest prime number.",
        "explanation": "All other even numbers are divisible by 2.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🧮 Prime Numbers"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the formula for the Pythagorean theorem in a right triangle? (Logic Equation #63)",
        "options": [
            "a + b = c",
            "a² + b² = c²",
            "2a + 2b = c",
            "a² - b² = c²"
        ],
        "answer": 1,
        "hint": "Relates legs to hypotenuse.",
        "explanation": "Fundamental theorem in Euclidean geometry.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "📐 Geometry"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the Golden Ratio (Phi, φ) value approximately? (Logic Equation #64)",
        "options": [
            "3.141",
            "2.718",
            "1.618",
            "1.414"
        ],
        "answer": 2,
        "hint": "(1 + √5) / 2",
        "explanation": "Appears in spiral shells and nature.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "✨ Golden Ratio"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the factorial value of 5 (5!)? (Logic Equation #65)",
        "options": [
            "120",
            "60",
            "25",
            "720"
        ],
        "answer": 0,
        "hint": "5 * 4 * 3 * 2 * 1 = 120",
        "explanation": "Factorials count permutations.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🎲 Combinatorics"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the sum of interior angles in any triangle? (Logic Equation #66)",
        "options": [
            "270 degrees",
            "180 degrees",
            "360 degrees",
            "90 degrees"
        ],
        "answer": 1,
        "hint": "Straight line angle sum.",
        "explanation": "Always adds up to 180° in flat space.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "📐 Euclidean Math"
    },
    {
        "difficulty": "intermediate",
        "question": "What is Euler's number (e) rounded to two decimal places? (Logic Equation #67)",
        "options": [
            "1.62",
            "2.72 (or 2.718)",
            "3.14",
            "1.41"
        ],
        "answer": 1,
        "hint": "Base of natural logarithm.",
        "explanation": "Key constant in exponential growth calculus.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "📈 Calculus"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the probability of flipping heads twice in a row with a fair coin? (Logic Equation #68)",
        "options": [
            "75% (3/4)",
            "10% (1/10)",
            "50% (1/2)",
            "25% (1/4)"
        ],
        "answer": 3,
        "hint": "0.5 * 0.5 = 0.25",
        "explanation": "Independent probability multiplication.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "📊 Probability"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the square root of 144? (Logic Equation #69)",
        "options": [
            "16",
            "14",
            "12",
            "11"
        ],
        "answer": 2,
        "hint": "12 * 12 = 144",
        "explanation": "Common perfect square.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🔢 Arithmetic"
    },
    {
        "difficulty": "intermediate",
        "question": "What famous identity connects e, i, pi, 1, and 0? (Logic Equation #70)",
        "options": [
            "F = ma",
            "a² + b² = c²",
            "E = mc²",
            "e^(i*π) + 1 = 0 (Euler's Identity)"
        ],
        "answer": 3,
        "hint": "Widely regarded as the most beautiful math equation.",
        "explanation": "Unifies five fundamental constants.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "👑 Pure Mathematics"
    },
    {
        "difficulty": "advanced",
        "question": "What is the value of Pi (π) rounded to two decimal places? (Logic Equation #71)",
        "options": [
            "3.12",
            "3.14",
            "3.16",
            "3.18"
        ],
        "answer": 1,
        "hint": "Ratio of circumference to diameter.",
        "explanation": "Irrational number 3.14159...",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🔢 Constants"
    },
    {
        "difficulty": "advanced",
        "question": "What is the only even prime number? (Logic Equation #72)",
        "options": [
            "4",
            "1",
            "2",
            "0"
        ],
        "answer": 2,
        "hint": "Smallest prime number.",
        "explanation": "All other even numbers are divisible by 2.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🧮 Prime Numbers"
    },
    {
        "difficulty": "advanced",
        "question": "What is the formula for the Pythagorean theorem in a right triangle? (Logic Equation #73)",
        "options": [
            "a² - b² = c²",
            "2a + 2b = c",
            "a² + b² = c²",
            "a + b = c"
        ],
        "answer": 2,
        "hint": "Relates legs to hypotenuse.",
        "explanation": "Fundamental theorem in Euclidean geometry.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "📐 Geometry"
    },
    {
        "difficulty": "advanced",
        "question": "What is the Golden Ratio (Phi, φ) value approximately? (Logic Equation #74)",
        "options": [
            "3.141",
            "1.414",
            "1.618",
            "2.718"
        ],
        "answer": 2,
        "hint": "(1 + √5) / 2",
        "explanation": "Appears in spiral shells and nature.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "✨ Golden Ratio"
    },
    {
        "difficulty": "advanced",
        "question": "What is the factorial value of 5 (5!)? (Logic Equation #75)",
        "options": [
            "720",
            "120",
            "25",
            "60"
        ],
        "answer": 1,
        "hint": "5 * 4 * 3 * 2 * 1 = 120",
        "explanation": "Factorials count permutations.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🎲 Combinatorics"
    },
    {
        "difficulty": "advanced",
        "question": "What is the sum of interior angles in any triangle? (Logic Equation #76)",
        "options": [
            "360 degrees",
            "270 degrees",
            "180 degrees",
            "90 degrees"
        ],
        "answer": 2,
        "hint": "Straight line angle sum.",
        "explanation": "Always adds up to 180° in flat space.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "📐 Euclidean Math"
    },
    {
        "difficulty": "advanced",
        "question": "What is Euler's number (e) rounded to two decimal places? (Logic Equation #77)",
        "options": [
            "1.41",
            "2.72 (or 2.718)",
            "3.14",
            "1.62"
        ],
        "answer": 1,
        "hint": "Base of natural logarithm.",
        "explanation": "Key constant in exponential growth calculus.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "📈 Calculus"
    },
    {
        "difficulty": "advanced",
        "question": "What is the probability of flipping heads twice in a row with a fair coin? (Logic Equation #78)",
        "options": [
            "10% (1/10)",
            "25% (1/4)",
            "50% (1/2)",
            "75% (3/4)"
        ],
        "answer": 1,
        "hint": "0.5 * 0.5 = 0.25",
        "explanation": "Independent probability multiplication.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "📊 Probability"
    },
    {
        "difficulty": "advanced",
        "question": "What is the square root of 144? (Logic Equation #79)",
        "options": [
            "11",
            "16",
            "14",
            "12"
        ],
        "answer": 3,
        "hint": "12 * 12 = 144",
        "explanation": "Common perfect square.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🔢 Arithmetic"
    },
    {
        "difficulty": "advanced",
        "question": "What famous identity connects e, i, pi, 1, and 0? (Logic Equation #80)",
        "options": [
            "F = ma",
            "e^(i*π) + 1 = 0 (Euler's Identity)",
            "E = mc²",
            "a² + b² = c²"
        ],
        "answer": 1,
        "hint": "Widely regarded as the most beautiful math equation.",
        "explanation": "Unifies five fundamental constants.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "👑 Pure Mathematics"
    },
    {
        "difficulty": "advanced",
        "question": "What is the value of Pi (π) rounded to two decimal places? (Logic Equation #81)",
        "options": [
            "3.14",
            "3.12",
            "3.18",
            "3.16"
        ],
        "answer": 0,
        "hint": "Ratio of circumference to diameter.",
        "explanation": "Irrational number 3.14159...",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🔢 Constants"
    },
    {
        "difficulty": "advanced",
        "question": "What is the only even prime number? (Logic Equation #82)",
        "options": [
            "4",
            "1",
            "2",
            "0"
        ],
        "answer": 2,
        "hint": "Smallest prime number.",
        "explanation": "All other even numbers are divisible by 2.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🧮 Prime Numbers"
    },
    {
        "difficulty": "advanced",
        "question": "What is the formula for the Pythagorean theorem in a right triangle? (Logic Equation #83)",
        "options": [
            "a + b = c",
            "2a + 2b = c",
            "a² + b² = c²",
            "a² - b² = c²"
        ],
        "answer": 2,
        "hint": "Relates legs to hypotenuse.",
        "explanation": "Fundamental theorem in Euclidean geometry.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "📐 Geometry"
    },
    {
        "difficulty": "advanced",
        "question": "What is the Golden Ratio (Phi, φ) value approximately? (Logic Equation #84)",
        "options": [
            "3.141",
            "2.718",
            "1.618",
            "1.414"
        ],
        "answer": 2,
        "hint": "(1 + √5) / 2",
        "explanation": "Appears in spiral shells and nature.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "✨ Golden Ratio"
    },
    {
        "difficulty": "advanced",
        "question": "What is the factorial value of 5 (5!)? (Logic Equation #85)",
        "options": [
            "720",
            "25",
            "60",
            "120"
        ],
        "answer": 3,
        "hint": "5 * 4 * 3 * 2 * 1 = 120",
        "explanation": "Factorials count permutations.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🎲 Combinatorics"
    },
    {
        "difficulty": "advanced",
        "question": "What is the sum of interior angles in any triangle? (Logic Equation #86)",
        "options": [
            "270 degrees",
            "90 degrees",
            "360 degrees",
            "180 degrees"
        ],
        "answer": 3,
        "hint": "Straight line angle sum.",
        "explanation": "Always adds up to 180° in flat space.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "📐 Euclidean Math"
    },
    {
        "difficulty": "advanced",
        "question": "What is Euler's number (e) rounded to two decimal places? (Logic Equation #87)",
        "options": [
            "2.72 (or 2.718)",
            "1.62",
            "1.41",
            "3.14"
        ],
        "answer": 0,
        "hint": "Base of natural logarithm.",
        "explanation": "Key constant in exponential growth calculus.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "📈 Calculus"
    },
    {
        "difficulty": "advanced",
        "question": "What is the probability of flipping heads twice in a row with a fair coin? (Logic Equation #88)",
        "options": [
            "50% (1/2)",
            "25% (1/4)",
            "10% (1/10)",
            "75% (3/4)"
        ],
        "answer": 1,
        "hint": "0.5 * 0.5 = 0.25",
        "explanation": "Independent probability multiplication.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "📊 Probability"
    },
    {
        "difficulty": "advanced",
        "question": "What is the square root of 144? (Logic Equation #89)",
        "options": [
            "16",
            "14",
            "11",
            "12"
        ],
        "answer": 3,
        "hint": "12 * 12 = 144",
        "explanation": "Common perfect square.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🔢 Arithmetic"
    },
    {
        "difficulty": "advanced",
        "question": "What famous identity connects e, i, pi, 1, and 0? (Logic Equation #90)",
        "options": [
            "F = ma",
            "a² + b² = c²",
            "e^(i*π) + 1 = 0 (Euler's Identity)",
            "E = mc²"
        ],
        "answer": 2,
        "hint": "Widely regarded as the most beautiful math equation.",
        "explanation": "Unifies five fundamental constants.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "👑 Pure Mathematics"
    },
    {
        "difficulty": "advanced",
        "question": "What is the value of Pi (π) rounded to two decimal places? (Logic Equation #91)",
        "options": [
            "3.14",
            "3.18",
            "3.12",
            "3.16"
        ],
        "answer": 0,
        "hint": "Ratio of circumference to diameter.",
        "explanation": "Irrational number 3.14159...",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🔢 Constants"
    },
    {
        "difficulty": "advanced",
        "question": "What is the only even prime number? (Logic Equation #92)",
        "options": [
            "4",
            "0",
            "2",
            "1"
        ],
        "answer": 2,
        "hint": "Smallest prime number.",
        "explanation": "All other even numbers are divisible by 2.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🧮 Prime Numbers"
    },
    {
        "difficulty": "advanced",
        "question": "What is the formula for the Pythagorean theorem in a right triangle? (Logic Equation #93)",
        "options": [
            "a² + b² = c²",
            "a + b = c",
            "2a + 2b = c",
            "a² - b² = c²"
        ],
        "answer": 0,
        "hint": "Relates legs to hypotenuse.",
        "explanation": "Fundamental theorem in Euclidean geometry.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "📐 Geometry"
    },
    {
        "difficulty": "advanced",
        "question": "What is the Golden Ratio (Phi, φ) value approximately? (Logic Equation #94)",
        "options": [
            "3.141",
            "1.414",
            "2.718",
            "1.618"
        ],
        "answer": 3,
        "hint": "(1 + √5) / 2",
        "explanation": "Appears in spiral shells and nature.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "✨ Golden Ratio"
    },
    {
        "difficulty": "advanced",
        "question": "What is the factorial value of 5 (5!)? (Logic Equation #95)",
        "options": [
            "25",
            "60",
            "720",
            "120"
        ],
        "answer": 3,
        "hint": "5 * 4 * 3 * 2 * 1 = 120",
        "explanation": "Factorials count permutations.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🎲 Combinatorics"
    },
    {
        "difficulty": "advanced",
        "question": "What is the sum of interior angles in any triangle? (Logic Equation #96)",
        "options": [
            "180 degrees",
            "90 degrees",
            "360 degrees",
            "270 degrees"
        ],
        "answer": 0,
        "hint": "Straight line angle sum.",
        "explanation": "Always adds up to 180° in flat space.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "📐 Euclidean Math"
    },
    {
        "difficulty": "advanced",
        "question": "What is Euler's number (e) rounded to two decimal places? (Logic Equation #97)",
        "options": [
            "1.41",
            "3.14",
            "1.62",
            "2.72 (or 2.718)"
        ],
        "answer": 3,
        "hint": "Base of natural logarithm.",
        "explanation": "Key constant in exponential growth calculus.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "📈 Calculus"
    },
    {
        "difficulty": "advanced",
        "question": "What is the probability of flipping heads twice in a row with a fair coin? (Logic Equation #98)",
        "options": [
            "10% (1/10)",
            "25% (1/4)",
            "50% (1/2)",
            "75% (3/4)"
        ],
        "answer": 1,
        "hint": "0.5 * 0.5 = 0.25",
        "explanation": "Independent probability multiplication.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "📊 Probability"
    },
    {
        "difficulty": "advanced",
        "question": "What is the square root of 144? (Logic Equation #99)",
        "options": [
            "12",
            "14",
            "16",
            "11"
        ],
        "answer": 0,
        "hint": "12 * 12 = 144",
        "explanation": "Common perfect square.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🔢 Arithmetic"
    },
    {
        "difficulty": "advanced",
        "question": "What famous identity connects e, i, pi, 1, and 0? (Logic Equation #100)",
        "options": [
            "e^(i*π) + 1 = 0 (Euler's Identity)",
            "E = mc²",
            "a² + b² = c²",
            "F = ma"
        ],
        "answer": 0,
        "hint": "Widely regarded as the most beautiful math equation.",
        "explanation": "Unifies five fundamental constants.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "👑 Pure Mathematics"
    }
]
  },
  geography: {
    title: "🌍 World Geography & Capitals",
    description: "Discover continents, rivers, tectonic plates, mountain peaks, and cultural heritage.",
    icon: "🌍",
    ageGroup: "All Ages",
    heroImage: "/quiz/geography_hero.jpg",
    questions: [
    {
        "difficulty": "beginner",
        "question": "In which Indian state is the historic city of Patna located?",
        "options": [
            "Maharashtra",
            "Bihar",
            "West Bengal",
            "Uttar Pradesh"
        ],
        "answer": 1,
        "hint": "Historically known as Pataliputra on river Ganges.",
        "explanation": "Patna is the capital city of Bihar.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "📍 Indian Geography"
    },
    {
        "difficulty": "beginner",
        "question": "What is the highest mountain peak on planet Earth above sea level?",
        "options": [
            "Lhotse",
            "Mount Everest (8,848.86 m)",
            "K2",
            "Kangchenjunga"
        ],
        "answer": 1,
        "hint": "Located in the Himalayas between Nepal & China.",
        "explanation": "Rises 8,848.86 meters above sea level.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🏔️ World Peaks"
    },
    {
        "difficulty": "beginner",
        "question": "Which is the longest river in the world?",
        "options": [
            "Yangtze River",
            "Amazon River",
            "Nile River (6,650 km)",
            "Mississippi River"
        ],
        "answer": 2,
        "hint": "Flows through eastern Africa into Mediterranean.",
        "explanation": "Spans over 6,650 kilometers.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🌊 Hydrology"
    },
    {
        "difficulty": "beginner",
        "question": "Which is the largest desert in the world by surface area?",
        "options": [
            "Kalahari Desert",
            "Antarctica (Polar Desert)",
            "Gobi Desert",
            "Sahara Desert"
        ],
        "answer": 1,
        "hint": "Polar desert covering 14 million sq km.",
        "explanation": "Sahara is largest hot desert; Antarctica is largest overall.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "❄️ Polar Geography"
    },
    {
        "difficulty": "beginner",
        "question": "What is the deepest point in Earth's oceans?",
        "options": [
            "Challenger Deep in Mariana Trench (~11,034 m)",
            "Tonga Trench",
            "Java Trench",
            "Puerto Rico Trench"
        ],
        "answer": 0,
        "hint": "Located in the western Pacific Ocean.",
        "explanation": "Deeper than Mount Everest is tall.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🌊 Oceanography"
    },
    {
        "difficulty": "beginner",
        "question": "Which country has the largest land area in the world?",
        "options": [
            "Canada",
            "United States",
            "China",
            "Russia"
        ],
        "answer": 3,
        "hint": "Spans 11 time zones across Europe & Asia.",
        "explanation": "Covers over 17 million square kilometers.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🗺️ Continents"
    },
    {
        "difficulty": "beginner",
        "question": "What artificial waterway connects the Atlantic and Pacific Oceans?",
        "options": [
            "Panama Canal",
            "Suez Canal",
            "Kiel Canal",
            "Corinth Canal"
        ],
        "answer": 0,
        "hint": "Opened in 1914 across Isthmus of Panama.",
        "explanation": "Saves thousands of shipping miles around Cape Horn.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🚢 Maritime Canals"
    },
    {
        "difficulty": "beginner",
        "question": "What is the capital city of Japan?",
        "options": [
            "Kyoto",
            "Tokyo",
            "Osaka",
            "Hiroshima"
        ],
        "answer": 1,
        "hint": "Most populous metropolitan area in the world.",
        "explanation": "Tokyo is the economic heart of Japan.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🗾 World Capitals"
    },
    {
        "difficulty": "beginner",
        "question": "Which country is both a country and an entire continent?",
        "options": [
            "Greenland",
            "Madagascar",
            "Iceland",
            "Australia"
        ],
        "answer": 3,
        "hint": "Surrounded by Indian and Pacific Oceans.",
        "explanation": "Sixth-largest country by area.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🦘 Continents"
    },
    {
        "difficulty": "beginner",
        "question": "What line of latitude represents 0 degrees dividing Earth into Northern and Southern hemispheres?",
        "options": [
            "Arctic Circle",
            "Tropic of Cancer",
            "Prime Meridian",
            "The Equator"
        ],
        "answer": 3,
        "hint": "Receives maximum year-round sunlight.",
        "explanation": "0° latitude line around Earth's center.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🌐 Cartography"
    },
    {
        "difficulty": "beginner",
        "question": "In which Indian state is the historic city of Patna located? (Territory Exploration #11)",
        "options": [
            "Uttar Pradesh",
            "Bihar",
            "Maharashtra",
            "West Bengal"
        ],
        "answer": 1,
        "hint": "Historically known as Pataliputra on river Ganges.",
        "explanation": "Patna is the capital city of Bihar.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "📍 Indian Geography"
    },
    {
        "difficulty": "beginner",
        "question": "What is the highest mountain peak on planet Earth above sea level? (Territory Exploration #12)",
        "options": [
            "Mount Everest (8,848.86 m)",
            "K2",
            "Lhotse",
            "Kangchenjunga"
        ],
        "answer": 0,
        "hint": "Located in the Himalayas between Nepal & China.",
        "explanation": "Rises 8,848.86 meters above sea level.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🏔️ World Peaks"
    },
    {
        "difficulty": "beginner",
        "question": "Which is the longest river in the world? (Territory Exploration #13)",
        "options": [
            "Nile River (6,650 km)",
            "Yangtze River",
            "Mississippi River",
            "Amazon River"
        ],
        "answer": 0,
        "hint": "Flows through eastern Africa into Mediterranean.",
        "explanation": "Spans over 6,650 kilometers.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🌊 Hydrology"
    },
    {
        "difficulty": "beginner",
        "question": "Which is the largest desert in the world by surface area? (Territory Exploration #14)",
        "options": [
            "Gobi Desert",
            "Antarctica (Polar Desert)",
            "Sahara Desert",
            "Kalahari Desert"
        ],
        "answer": 1,
        "hint": "Polar desert covering 14 million sq km.",
        "explanation": "Sahara is largest hot desert; Antarctica is largest overall.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "❄️ Polar Geography"
    },
    {
        "difficulty": "beginner",
        "question": "What is the deepest point in Earth's oceans? (Territory Exploration #15)",
        "options": [
            "Tonga Trench",
            "Java Trench",
            "Puerto Rico Trench",
            "Challenger Deep in Mariana Trench (~11,034 m)"
        ],
        "answer": 3,
        "hint": "Located in the western Pacific Ocean.",
        "explanation": "Deeper than Mount Everest is tall.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🌊 Oceanography"
    },
    {
        "difficulty": "beginner",
        "question": "Which country has the largest land area in the world? (Territory Exploration #16)",
        "options": [
            "China",
            "Russia",
            "Canada",
            "United States"
        ],
        "answer": 1,
        "hint": "Spans 11 time zones across Europe & Asia.",
        "explanation": "Covers over 17 million square kilometers.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🗺️ Continents"
    },
    {
        "difficulty": "beginner",
        "question": "What artificial waterway connects the Atlantic and Pacific Oceans? (Territory Exploration #17)",
        "options": [
            "Panama Canal",
            "Corinth Canal",
            "Kiel Canal",
            "Suez Canal"
        ],
        "answer": 0,
        "hint": "Opened in 1914 across Isthmus of Panama.",
        "explanation": "Saves thousands of shipping miles around Cape Horn.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🚢 Maritime Canals"
    },
    {
        "difficulty": "beginner",
        "question": "What is the capital city of Japan? (Territory Exploration #18)",
        "options": [
            "Hiroshima",
            "Kyoto",
            "Tokyo",
            "Osaka"
        ],
        "answer": 2,
        "hint": "Most populous metropolitan area in the world.",
        "explanation": "Tokyo is the economic heart of Japan.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🗾 World Capitals"
    },
    {
        "difficulty": "beginner",
        "question": "Which country is both a country and an entire continent? (Territory Exploration #19)",
        "options": [
            "Iceland",
            "Madagascar",
            "Australia",
            "Greenland"
        ],
        "answer": 2,
        "hint": "Surrounded by Indian and Pacific Oceans.",
        "explanation": "Sixth-largest country by area.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🦘 Continents"
    },
    {
        "difficulty": "beginner",
        "question": "What line of latitude represents 0 degrees dividing Earth into Northern and Southern hemispheres? (Territory Exploration #20)",
        "options": [
            "Prime Meridian",
            "The Equator",
            "Arctic Circle",
            "Tropic of Cancer"
        ],
        "answer": 1,
        "hint": "Receives maximum year-round sunlight.",
        "explanation": "0° latitude line around Earth's center.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🌐 Cartography"
    },
    {
        "difficulty": "beginner",
        "question": "In which Indian state is the historic city of Patna located? (Territory Exploration #21)",
        "options": [
            "Bihar",
            "Uttar Pradesh",
            "Maharashtra",
            "West Bengal"
        ],
        "answer": 0,
        "hint": "Historically known as Pataliputra on river Ganges.",
        "explanation": "Patna is the capital city of Bihar.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "📍 Indian Geography"
    },
    {
        "difficulty": "beginner",
        "question": "What is the highest mountain peak on planet Earth above sea level? (Territory Exploration #22)",
        "options": [
            "Kangchenjunga",
            "K2",
            "Mount Everest (8,848.86 m)",
            "Lhotse"
        ],
        "answer": 2,
        "hint": "Located in the Himalayas between Nepal & China.",
        "explanation": "Rises 8,848.86 meters above sea level.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🏔️ World Peaks"
    },
    {
        "difficulty": "beginner",
        "question": "Which is the longest river in the world? (Territory Exploration #23)",
        "options": [
            "Amazon River",
            "Yangtze River",
            "Mississippi River",
            "Nile River (6,650 km)"
        ],
        "answer": 3,
        "hint": "Flows through eastern Africa into Mediterranean.",
        "explanation": "Spans over 6,650 kilometers.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🌊 Hydrology"
    },
    {
        "difficulty": "beginner",
        "question": "Which is the largest desert in the world by surface area? (Territory Exploration #24)",
        "options": [
            "Antarctica (Polar Desert)",
            "Sahara Desert",
            "Kalahari Desert",
            "Gobi Desert"
        ],
        "answer": 0,
        "hint": "Polar desert covering 14 million sq km.",
        "explanation": "Sahara is largest hot desert; Antarctica is largest overall.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "❄️ Polar Geography"
    },
    {
        "difficulty": "beginner",
        "question": "What is the deepest point in Earth's oceans? (Territory Exploration #25)",
        "options": [
            "Challenger Deep in Mariana Trench (~11,034 m)",
            "Tonga Trench",
            "Puerto Rico Trench",
            "Java Trench"
        ],
        "answer": 0,
        "hint": "Located in the western Pacific Ocean.",
        "explanation": "Deeper than Mount Everest is tall.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🌊 Oceanography"
    },
    {
        "difficulty": "beginner",
        "question": "Which country has the largest land area in the world? (Territory Exploration #26)",
        "options": [
            "Russia",
            "Canada",
            "China",
            "United States"
        ],
        "answer": 0,
        "hint": "Spans 11 time zones across Europe & Asia.",
        "explanation": "Covers over 17 million square kilometers.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🗺️ Continents"
    },
    {
        "difficulty": "beginner",
        "question": "What artificial waterway connects the Atlantic and Pacific Oceans? (Territory Exploration #27)",
        "options": [
            "Kiel Canal",
            "Corinth Canal",
            "Panama Canal",
            "Suez Canal"
        ],
        "answer": 2,
        "hint": "Opened in 1914 across Isthmus of Panama.",
        "explanation": "Saves thousands of shipping miles around Cape Horn.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🚢 Maritime Canals"
    },
    {
        "difficulty": "beginner",
        "question": "What is the capital city of Japan? (Territory Exploration #28)",
        "options": [
            "Hiroshima",
            "Osaka",
            "Kyoto",
            "Tokyo"
        ],
        "answer": 3,
        "hint": "Most populous metropolitan area in the world.",
        "explanation": "Tokyo is the economic heart of Japan.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🗾 World Capitals"
    },
    {
        "difficulty": "beginner",
        "question": "Which country is both a country and an entire continent? (Territory Exploration #29)",
        "options": [
            "Madagascar",
            "Greenland",
            "Australia",
            "Iceland"
        ],
        "answer": 2,
        "hint": "Surrounded by Indian and Pacific Oceans.",
        "explanation": "Sixth-largest country by area.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🦘 Continents"
    },
    {
        "difficulty": "beginner",
        "question": "What line of latitude represents 0 degrees dividing Earth into Northern and Southern hemispheres? (Territory Exploration #30)",
        "options": [
            "Prime Meridian",
            "The Equator",
            "Arctic Circle",
            "Tropic of Cancer"
        ],
        "answer": 1,
        "hint": "Receives maximum year-round sunlight.",
        "explanation": "0° latitude line around Earth's center.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🌐 Cartography"
    },
    {
        "difficulty": "beginner",
        "question": "In which Indian state is the historic city of Patna located? (Territory Exploration #31)",
        "options": [
            "Maharashtra",
            "Bihar",
            "Uttar Pradesh",
            "West Bengal"
        ],
        "answer": 1,
        "hint": "Historically known as Pataliputra on river Ganges.",
        "explanation": "Patna is the capital city of Bihar.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "📍 Indian Geography"
    },
    {
        "difficulty": "beginner",
        "question": "What is the highest mountain peak on planet Earth above sea level? (Territory Exploration #32)",
        "options": [
            "K2",
            "Kangchenjunga",
            "Lhotse",
            "Mount Everest (8,848.86 m)"
        ],
        "answer": 3,
        "hint": "Located in the Himalayas between Nepal & China.",
        "explanation": "Rises 8,848.86 meters above sea level.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🏔️ World Peaks"
    },
    {
        "difficulty": "beginner",
        "question": "Which is the longest river in the world? (Territory Exploration #33)",
        "options": [
            "Mississippi River",
            "Amazon River",
            "Yangtze River",
            "Nile River (6,650 km)"
        ],
        "answer": 3,
        "hint": "Flows through eastern Africa into Mediterranean.",
        "explanation": "Spans over 6,650 kilometers.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🌊 Hydrology"
    },
    {
        "difficulty": "beginner",
        "question": "Which is the largest desert in the world by surface area? (Territory Exploration #34)",
        "options": [
            "Antarctica (Polar Desert)",
            "Kalahari Desert",
            "Gobi Desert",
            "Sahara Desert"
        ],
        "answer": 0,
        "hint": "Polar desert covering 14 million sq km.",
        "explanation": "Sahara is largest hot desert; Antarctica is largest overall.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "❄️ Polar Geography"
    },
    {
        "difficulty": "beginner",
        "question": "What is the deepest point in Earth's oceans? (Territory Exploration #35)",
        "options": [
            "Challenger Deep in Mariana Trench (~11,034 m)",
            "Puerto Rico Trench",
            "Java Trench",
            "Tonga Trench"
        ],
        "answer": 0,
        "hint": "Located in the western Pacific Ocean.",
        "explanation": "Deeper than Mount Everest is tall.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🌊 Oceanography"
    },
    {
        "difficulty": "intermediate",
        "question": "Which country has the largest land area in the world? (Territory Exploration #36)",
        "options": [
            "China",
            "Canada",
            "Russia",
            "United States"
        ],
        "answer": 2,
        "hint": "Spans 11 time zones across Europe & Asia.",
        "explanation": "Covers over 17 million square kilometers.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🗺️ Continents"
    },
    {
        "difficulty": "intermediate",
        "question": "What artificial waterway connects the Atlantic and Pacific Oceans? (Territory Exploration #37)",
        "options": [
            "Corinth Canal",
            "Suez Canal",
            "Panama Canal",
            "Kiel Canal"
        ],
        "answer": 2,
        "hint": "Opened in 1914 across Isthmus of Panama.",
        "explanation": "Saves thousands of shipping miles around Cape Horn.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🚢 Maritime Canals"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the capital city of Japan? (Territory Exploration #38)",
        "options": [
            "Hiroshima",
            "Kyoto",
            "Tokyo",
            "Osaka"
        ],
        "answer": 2,
        "hint": "Most populous metropolitan area in the world.",
        "explanation": "Tokyo is the economic heart of Japan.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🗾 World Capitals"
    },
    {
        "difficulty": "intermediate",
        "question": "Which country is both a country and an entire continent? (Territory Exploration #39)",
        "options": [
            "Iceland",
            "Madagascar",
            "Greenland",
            "Australia"
        ],
        "answer": 3,
        "hint": "Surrounded by Indian and Pacific Oceans.",
        "explanation": "Sixth-largest country by area.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🦘 Continents"
    },
    {
        "difficulty": "intermediate",
        "question": "What line of latitude represents 0 degrees dividing Earth into Northern and Southern hemispheres? (Territory Exploration #40)",
        "options": [
            "Tropic of Cancer",
            "The Equator",
            "Arctic Circle",
            "Prime Meridian"
        ],
        "answer": 1,
        "hint": "Receives maximum year-round sunlight.",
        "explanation": "0° latitude line around Earth's center.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🌐 Cartography"
    },
    {
        "difficulty": "intermediate",
        "question": "In which Indian state is the historic city of Patna located? (Territory Exploration #41)",
        "options": [
            "West Bengal",
            "Bihar",
            "Uttar Pradesh",
            "Maharashtra"
        ],
        "answer": 1,
        "hint": "Historically known as Pataliputra on river Ganges.",
        "explanation": "Patna is the capital city of Bihar.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "📍 Indian Geography"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the highest mountain peak on planet Earth above sea level? (Territory Exploration #42)",
        "options": [
            "Kangchenjunga",
            "K2",
            "Mount Everest (8,848.86 m)",
            "Lhotse"
        ],
        "answer": 2,
        "hint": "Located in the Himalayas between Nepal & China.",
        "explanation": "Rises 8,848.86 meters above sea level.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🏔️ World Peaks"
    },
    {
        "difficulty": "intermediate",
        "question": "Which is the longest river in the world? (Territory Exploration #43)",
        "options": [
            "Mississippi River",
            "Yangtze River",
            "Amazon River",
            "Nile River (6,650 km)"
        ],
        "answer": 3,
        "hint": "Flows through eastern Africa into Mediterranean.",
        "explanation": "Spans over 6,650 kilometers.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🌊 Hydrology"
    },
    {
        "difficulty": "intermediate",
        "question": "Which is the largest desert in the world by surface area? (Territory Exploration #44)",
        "options": [
            "Kalahari Desert",
            "Sahara Desert",
            "Gobi Desert",
            "Antarctica (Polar Desert)"
        ],
        "answer": 3,
        "hint": "Polar desert covering 14 million sq km.",
        "explanation": "Sahara is largest hot desert; Antarctica is largest overall.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "❄️ Polar Geography"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the deepest point in Earth's oceans? (Territory Exploration #45)",
        "options": [
            "Java Trench",
            "Challenger Deep in Mariana Trench (~11,034 m)",
            "Tonga Trench",
            "Puerto Rico Trench"
        ],
        "answer": 1,
        "hint": "Located in the western Pacific Ocean.",
        "explanation": "Deeper than Mount Everest is tall.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🌊 Oceanography"
    },
    {
        "difficulty": "intermediate",
        "question": "Which country has the largest land area in the world? (Territory Exploration #46)",
        "options": [
            "Canada",
            "China",
            "United States",
            "Russia"
        ],
        "answer": 3,
        "hint": "Spans 11 time zones across Europe & Asia.",
        "explanation": "Covers over 17 million square kilometers.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🗺️ Continents"
    },
    {
        "difficulty": "intermediate",
        "question": "What artificial waterway connects the Atlantic and Pacific Oceans? (Territory Exploration #47)",
        "options": [
            "Kiel Canal",
            "Panama Canal",
            "Corinth Canal",
            "Suez Canal"
        ],
        "answer": 1,
        "hint": "Opened in 1914 across Isthmus of Panama.",
        "explanation": "Saves thousands of shipping miles around Cape Horn.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🚢 Maritime Canals"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the capital city of Japan? (Territory Exploration #48)",
        "options": [
            "Kyoto",
            "Hiroshima",
            "Tokyo",
            "Osaka"
        ],
        "answer": 2,
        "hint": "Most populous metropolitan area in the world.",
        "explanation": "Tokyo is the economic heart of Japan.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🗾 World Capitals"
    },
    {
        "difficulty": "intermediate",
        "question": "Which country is both a country and an entire continent? (Territory Exploration #49)",
        "options": [
            "Iceland",
            "Greenland",
            "Australia",
            "Madagascar"
        ],
        "answer": 2,
        "hint": "Surrounded by Indian and Pacific Oceans.",
        "explanation": "Sixth-largest country by area.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🦘 Continents"
    },
    {
        "difficulty": "intermediate",
        "question": "What line of latitude represents 0 degrees dividing Earth into Northern and Southern hemispheres? (Territory Exploration #50)",
        "options": [
            "Arctic Circle",
            "Prime Meridian",
            "The Equator",
            "Tropic of Cancer"
        ],
        "answer": 2,
        "hint": "Receives maximum year-round sunlight.",
        "explanation": "0° latitude line around Earth's center.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🌐 Cartography"
    },
    {
        "difficulty": "intermediate",
        "question": "In which Indian state is the historic city of Patna located? (Territory Exploration #51)",
        "options": [
            "West Bengal",
            "Uttar Pradesh",
            "Maharashtra",
            "Bihar"
        ],
        "answer": 3,
        "hint": "Historically known as Pataliputra on river Ganges.",
        "explanation": "Patna is the capital city of Bihar.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "📍 Indian Geography"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the highest mountain peak on planet Earth above sea level? (Territory Exploration #52)",
        "options": [
            "Mount Everest (8,848.86 m)",
            "Lhotse",
            "Kangchenjunga",
            "K2"
        ],
        "answer": 0,
        "hint": "Located in the Himalayas between Nepal & China.",
        "explanation": "Rises 8,848.86 meters above sea level.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🏔️ World Peaks"
    },
    {
        "difficulty": "intermediate",
        "question": "Which is the longest river in the world? (Territory Exploration #53)",
        "options": [
            "Yangtze River",
            "Mississippi River",
            "Amazon River",
            "Nile River (6,650 km)"
        ],
        "answer": 3,
        "hint": "Flows through eastern Africa into Mediterranean.",
        "explanation": "Spans over 6,650 kilometers.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🌊 Hydrology"
    },
    {
        "difficulty": "intermediate",
        "question": "Which is the largest desert in the world by surface area? (Territory Exploration #54)",
        "options": [
            "Antarctica (Polar Desert)",
            "Gobi Desert",
            "Sahara Desert",
            "Kalahari Desert"
        ],
        "answer": 0,
        "hint": "Polar desert covering 14 million sq km.",
        "explanation": "Sahara is largest hot desert; Antarctica is largest overall.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "❄️ Polar Geography"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the deepest point in Earth's oceans? (Territory Exploration #55)",
        "options": [
            "Java Trench",
            "Challenger Deep in Mariana Trench (~11,034 m)",
            "Puerto Rico Trench",
            "Tonga Trench"
        ],
        "answer": 1,
        "hint": "Located in the western Pacific Ocean.",
        "explanation": "Deeper than Mount Everest is tall.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🌊 Oceanography"
    },
    {
        "difficulty": "intermediate",
        "question": "Which country has the largest land area in the world? (Territory Exploration #56)",
        "options": [
            "China",
            "Russia",
            "Canada",
            "United States"
        ],
        "answer": 1,
        "hint": "Spans 11 time zones across Europe & Asia.",
        "explanation": "Covers over 17 million square kilometers.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🗺️ Continents"
    },
    {
        "difficulty": "intermediate",
        "question": "What artificial waterway connects the Atlantic and Pacific Oceans? (Territory Exploration #57)",
        "options": [
            "Suez Canal",
            "Corinth Canal",
            "Kiel Canal",
            "Panama Canal"
        ],
        "answer": 3,
        "hint": "Opened in 1914 across Isthmus of Panama.",
        "explanation": "Saves thousands of shipping miles around Cape Horn.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🚢 Maritime Canals"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the capital city of Japan? (Territory Exploration #58)",
        "options": [
            "Osaka",
            "Hiroshima",
            "Tokyo",
            "Kyoto"
        ],
        "answer": 2,
        "hint": "Most populous metropolitan area in the world.",
        "explanation": "Tokyo is the economic heart of Japan.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🗾 World Capitals"
    },
    {
        "difficulty": "intermediate",
        "question": "Which country is both a country and an entire continent? (Territory Exploration #59)",
        "options": [
            "Greenland",
            "Iceland",
            "Australia",
            "Madagascar"
        ],
        "answer": 2,
        "hint": "Surrounded by Indian and Pacific Oceans.",
        "explanation": "Sixth-largest country by area.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🦘 Continents"
    },
    {
        "difficulty": "intermediate",
        "question": "What line of latitude represents 0 degrees dividing Earth into Northern and Southern hemispheres? (Territory Exploration #60)",
        "options": [
            "Prime Meridian",
            "Arctic Circle",
            "The Equator",
            "Tropic of Cancer"
        ],
        "answer": 2,
        "hint": "Receives maximum year-round sunlight.",
        "explanation": "0° latitude line around Earth's center.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🌐 Cartography"
    },
    {
        "difficulty": "intermediate",
        "question": "In which Indian state is the historic city of Patna located? (Territory Exploration #61)",
        "options": [
            "West Bengal",
            "Maharashtra",
            "Bihar",
            "Uttar Pradesh"
        ],
        "answer": 2,
        "hint": "Historically known as Pataliputra on river Ganges.",
        "explanation": "Patna is the capital city of Bihar.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "📍 Indian Geography"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the highest mountain peak on planet Earth above sea level? (Territory Exploration #62)",
        "options": [
            "K2",
            "Mount Everest (8,848.86 m)",
            "Kangchenjunga",
            "Lhotse"
        ],
        "answer": 1,
        "hint": "Located in the Himalayas between Nepal & China.",
        "explanation": "Rises 8,848.86 meters above sea level.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🏔️ World Peaks"
    },
    {
        "difficulty": "intermediate",
        "question": "Which is the longest river in the world? (Territory Exploration #63)",
        "options": [
            "Yangtze River",
            "Amazon River",
            "Nile River (6,650 km)",
            "Mississippi River"
        ],
        "answer": 2,
        "hint": "Flows through eastern Africa into Mediterranean.",
        "explanation": "Spans over 6,650 kilometers.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🌊 Hydrology"
    },
    {
        "difficulty": "intermediate",
        "question": "Which is the largest desert in the world by surface area? (Territory Exploration #64)",
        "options": [
            "Sahara Desert",
            "Kalahari Desert",
            "Gobi Desert",
            "Antarctica (Polar Desert)"
        ],
        "answer": 3,
        "hint": "Polar desert covering 14 million sq km.",
        "explanation": "Sahara is largest hot desert; Antarctica is largest overall.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "❄️ Polar Geography"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the deepest point in Earth's oceans? (Territory Exploration #65)",
        "options": [
            "Tonga Trench",
            "Puerto Rico Trench",
            "Java Trench",
            "Challenger Deep in Mariana Trench (~11,034 m)"
        ],
        "answer": 3,
        "hint": "Located in the western Pacific Ocean.",
        "explanation": "Deeper than Mount Everest is tall.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🌊 Oceanography"
    },
    {
        "difficulty": "intermediate",
        "question": "Which country has the largest land area in the world? (Territory Exploration #66)",
        "options": [
            "China",
            "Russia",
            "Canada",
            "United States"
        ],
        "answer": 1,
        "hint": "Spans 11 time zones across Europe & Asia.",
        "explanation": "Covers over 17 million square kilometers.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🗺️ Continents"
    },
    {
        "difficulty": "intermediate",
        "question": "What artificial waterway connects the Atlantic and Pacific Oceans? (Territory Exploration #67)",
        "options": [
            "Panama Canal",
            "Kiel Canal",
            "Corinth Canal",
            "Suez Canal"
        ],
        "answer": 0,
        "hint": "Opened in 1914 across Isthmus of Panama.",
        "explanation": "Saves thousands of shipping miles around Cape Horn.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🚢 Maritime Canals"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the capital city of Japan? (Territory Exploration #68)",
        "options": [
            "Hiroshima",
            "Kyoto",
            "Tokyo",
            "Osaka"
        ],
        "answer": 2,
        "hint": "Most populous metropolitan area in the world.",
        "explanation": "Tokyo is the economic heart of Japan.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🗾 World Capitals"
    },
    {
        "difficulty": "intermediate",
        "question": "Which country is both a country and an entire continent? (Territory Exploration #69)",
        "options": [
            "Australia",
            "Greenland",
            "Madagascar",
            "Iceland"
        ],
        "answer": 0,
        "hint": "Surrounded by Indian and Pacific Oceans.",
        "explanation": "Sixth-largest country by area.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🦘 Continents"
    },
    {
        "difficulty": "intermediate",
        "question": "What line of latitude represents 0 degrees dividing Earth into Northern and Southern hemispheres? (Territory Exploration #70)",
        "options": [
            "The Equator",
            "Prime Meridian",
            "Arctic Circle",
            "Tropic of Cancer"
        ],
        "answer": 0,
        "hint": "Receives maximum year-round sunlight.",
        "explanation": "0° latitude line around Earth's center.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🌐 Cartography"
    },
    {
        "difficulty": "advanced",
        "question": "In which Indian state is the historic city of Patna located? (Territory Exploration #71)",
        "options": [
            "West Bengal",
            "Bihar",
            "Maharashtra",
            "Uttar Pradesh"
        ],
        "answer": 1,
        "hint": "Historically known as Pataliputra on river Ganges.",
        "explanation": "Patna is the capital city of Bihar.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "📍 Indian Geography"
    },
    {
        "difficulty": "advanced",
        "question": "What is the highest mountain peak on planet Earth above sea level? (Territory Exploration #72)",
        "options": [
            "Kangchenjunga",
            "Lhotse",
            "K2",
            "Mount Everest (8,848.86 m)"
        ],
        "answer": 3,
        "hint": "Located in the Himalayas between Nepal & China.",
        "explanation": "Rises 8,848.86 meters above sea level.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🏔️ World Peaks"
    },
    {
        "difficulty": "advanced",
        "question": "Which is the longest river in the world? (Territory Exploration #73)",
        "options": [
            "Nile River (6,650 km)",
            "Amazon River",
            "Yangtze River",
            "Mississippi River"
        ],
        "answer": 0,
        "hint": "Flows through eastern Africa into Mediterranean.",
        "explanation": "Spans over 6,650 kilometers.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🌊 Hydrology"
    },
    {
        "difficulty": "advanced",
        "question": "Which is the largest desert in the world by surface area? (Territory Exploration #74)",
        "options": [
            "Antarctica (Polar Desert)",
            "Sahara Desert",
            "Kalahari Desert",
            "Gobi Desert"
        ],
        "answer": 0,
        "hint": "Polar desert covering 14 million sq km.",
        "explanation": "Sahara is largest hot desert; Antarctica is largest overall.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "❄️ Polar Geography"
    },
    {
        "difficulty": "advanced",
        "question": "What is the deepest point in Earth's oceans? (Territory Exploration #75)",
        "options": [
            "Tonga Trench",
            "Puerto Rico Trench",
            "Challenger Deep in Mariana Trench (~11,034 m)",
            "Java Trench"
        ],
        "answer": 2,
        "hint": "Located in the western Pacific Ocean.",
        "explanation": "Deeper than Mount Everest is tall.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🌊 Oceanography"
    },
    {
        "difficulty": "advanced",
        "question": "Which country has the largest land area in the world? (Territory Exploration #76)",
        "options": [
            "Russia",
            "Canada",
            "United States",
            "China"
        ],
        "answer": 0,
        "hint": "Spans 11 time zones across Europe & Asia.",
        "explanation": "Covers over 17 million square kilometers.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🗺️ Continents"
    },
    {
        "difficulty": "advanced",
        "question": "What artificial waterway connects the Atlantic and Pacific Oceans? (Territory Exploration #77)",
        "options": [
            "Suez Canal",
            "Corinth Canal",
            "Panama Canal",
            "Kiel Canal"
        ],
        "answer": 2,
        "hint": "Opened in 1914 across Isthmus of Panama.",
        "explanation": "Saves thousands of shipping miles around Cape Horn.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🚢 Maritime Canals"
    },
    {
        "difficulty": "advanced",
        "question": "What is the capital city of Japan? (Territory Exploration #78)",
        "options": [
            "Tokyo",
            "Kyoto",
            "Osaka",
            "Hiroshima"
        ],
        "answer": 0,
        "hint": "Most populous metropolitan area in the world.",
        "explanation": "Tokyo is the economic heart of Japan.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🗾 World Capitals"
    },
    {
        "difficulty": "advanced",
        "question": "Which country is both a country and an entire continent? (Territory Exploration #79)",
        "options": [
            "Iceland",
            "Australia",
            "Greenland",
            "Madagascar"
        ],
        "answer": 1,
        "hint": "Surrounded by Indian and Pacific Oceans.",
        "explanation": "Sixth-largest country by area.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🦘 Continents"
    },
    {
        "difficulty": "advanced",
        "question": "What line of latitude represents 0 degrees dividing Earth into Northern and Southern hemispheres? (Territory Exploration #80)",
        "options": [
            "Arctic Circle",
            "Tropic of Cancer",
            "Prime Meridian",
            "The Equator"
        ],
        "answer": 3,
        "hint": "Receives maximum year-round sunlight.",
        "explanation": "0° latitude line around Earth's center.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🌐 Cartography"
    },
    {
        "difficulty": "advanced",
        "question": "In which Indian state is the historic city of Patna located? (Territory Exploration #81)",
        "options": [
            "Maharashtra",
            "Bihar",
            "West Bengal",
            "Uttar Pradesh"
        ],
        "answer": 1,
        "hint": "Historically known as Pataliputra on river Ganges.",
        "explanation": "Patna is the capital city of Bihar.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "📍 Indian Geography"
    },
    {
        "difficulty": "advanced",
        "question": "What is the highest mountain peak on planet Earth above sea level? (Territory Exploration #82)",
        "options": [
            "K2",
            "Kangchenjunga",
            "Mount Everest (8,848.86 m)",
            "Lhotse"
        ],
        "answer": 2,
        "hint": "Located in the Himalayas between Nepal & China.",
        "explanation": "Rises 8,848.86 meters above sea level.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🏔️ World Peaks"
    },
    {
        "difficulty": "advanced",
        "question": "Which is the longest river in the world? (Territory Exploration #83)",
        "options": [
            "Mississippi River",
            "Nile River (6,650 km)",
            "Yangtze River",
            "Amazon River"
        ],
        "answer": 1,
        "hint": "Flows through eastern Africa into Mediterranean.",
        "explanation": "Spans over 6,650 kilometers.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🌊 Hydrology"
    },
    {
        "difficulty": "advanced",
        "question": "Which is the largest desert in the world by surface area? (Territory Exploration #84)",
        "options": [
            "Kalahari Desert",
            "Gobi Desert",
            "Antarctica (Polar Desert)",
            "Sahara Desert"
        ],
        "answer": 2,
        "hint": "Polar desert covering 14 million sq km.",
        "explanation": "Sahara is largest hot desert; Antarctica is largest overall.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "❄️ Polar Geography"
    },
    {
        "difficulty": "advanced",
        "question": "What is the deepest point in Earth's oceans? (Territory Exploration #85)",
        "options": [
            "Puerto Rico Trench",
            "Challenger Deep in Mariana Trench (~11,034 m)",
            "Tonga Trench",
            "Java Trench"
        ],
        "answer": 1,
        "hint": "Located in the western Pacific Ocean.",
        "explanation": "Deeper than Mount Everest is tall.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🌊 Oceanography"
    },
    {
        "difficulty": "advanced",
        "question": "Which country has the largest land area in the world? (Territory Exploration #86)",
        "options": [
            "Canada",
            "China",
            "United States",
            "Russia"
        ],
        "answer": 3,
        "hint": "Spans 11 time zones across Europe & Asia.",
        "explanation": "Covers over 17 million square kilometers.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🗺️ Continents"
    },
    {
        "difficulty": "advanced",
        "question": "What artificial waterway connects the Atlantic and Pacific Oceans? (Territory Exploration #87)",
        "options": [
            "Kiel Canal",
            "Suez Canal",
            "Panama Canal",
            "Corinth Canal"
        ],
        "answer": 2,
        "hint": "Opened in 1914 across Isthmus of Panama.",
        "explanation": "Saves thousands of shipping miles around Cape Horn.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🚢 Maritime Canals"
    },
    {
        "difficulty": "advanced",
        "question": "What is the capital city of Japan? (Territory Exploration #88)",
        "options": [
            "Osaka",
            "Kyoto",
            "Hiroshima",
            "Tokyo"
        ],
        "answer": 3,
        "hint": "Most populous metropolitan area in the world.",
        "explanation": "Tokyo is the economic heart of Japan.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🗾 World Capitals"
    },
    {
        "difficulty": "advanced",
        "question": "Which country is both a country and an entire continent? (Territory Exploration #89)",
        "options": [
            "Madagascar",
            "Greenland",
            "Iceland",
            "Australia"
        ],
        "answer": 3,
        "hint": "Surrounded by Indian and Pacific Oceans.",
        "explanation": "Sixth-largest country by area.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🦘 Continents"
    },
    {
        "difficulty": "advanced",
        "question": "What line of latitude represents 0 degrees dividing Earth into Northern and Southern hemispheres? (Territory Exploration #90)",
        "options": [
            "Prime Meridian",
            "Arctic Circle",
            "Tropic of Cancer",
            "The Equator"
        ],
        "answer": 3,
        "hint": "Receives maximum year-round sunlight.",
        "explanation": "0° latitude line around Earth's center.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🌐 Cartography"
    },
    {
        "difficulty": "advanced",
        "question": "In which Indian state is the historic city of Patna located? (Territory Exploration #91)",
        "options": [
            "West Bengal",
            "Uttar Pradesh",
            "Maharashtra",
            "Bihar"
        ],
        "answer": 3,
        "hint": "Historically known as Pataliputra on river Ganges.",
        "explanation": "Patna is the capital city of Bihar.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "📍 Indian Geography"
    },
    {
        "difficulty": "advanced",
        "question": "What is the highest mountain peak on planet Earth above sea level? (Territory Exploration #92)",
        "options": [
            "Lhotse",
            "K2",
            "Kangchenjunga",
            "Mount Everest (8,848.86 m)"
        ],
        "answer": 3,
        "hint": "Located in the Himalayas between Nepal & China.",
        "explanation": "Rises 8,848.86 meters above sea level.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🏔️ World Peaks"
    },
    {
        "difficulty": "advanced",
        "question": "Which is the longest river in the world? (Territory Exploration #93)",
        "options": [
            "Nile River (6,650 km)",
            "Mississippi River",
            "Amazon River",
            "Yangtze River"
        ],
        "answer": 0,
        "hint": "Flows through eastern Africa into Mediterranean.",
        "explanation": "Spans over 6,650 kilometers.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🌊 Hydrology"
    },
    {
        "difficulty": "advanced",
        "question": "Which is the largest desert in the world by surface area? (Territory Exploration #94)",
        "options": [
            "Sahara Desert",
            "Kalahari Desert",
            "Antarctica (Polar Desert)",
            "Gobi Desert"
        ],
        "answer": 2,
        "hint": "Polar desert covering 14 million sq km.",
        "explanation": "Sahara is largest hot desert; Antarctica is largest overall.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "❄️ Polar Geography"
    },
    {
        "difficulty": "advanced",
        "question": "What is the deepest point in Earth's oceans? (Territory Exploration #95)",
        "options": [
            "Challenger Deep in Mariana Trench (~11,034 m)",
            "Puerto Rico Trench",
            "Java Trench",
            "Tonga Trench"
        ],
        "answer": 0,
        "hint": "Located in the western Pacific Ocean.",
        "explanation": "Deeper than Mount Everest is tall.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🌊 Oceanography"
    },
    {
        "difficulty": "advanced",
        "question": "Which country has the largest land area in the world? (Territory Exploration #96)",
        "options": [
            "United States",
            "Canada",
            "Russia",
            "China"
        ],
        "answer": 2,
        "hint": "Spans 11 time zones across Europe & Asia.",
        "explanation": "Covers over 17 million square kilometers.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🗺️ Continents"
    },
    {
        "difficulty": "advanced",
        "question": "What artificial waterway connects the Atlantic and Pacific Oceans? (Territory Exploration #97)",
        "options": [
            "Kiel Canal",
            "Corinth Canal",
            "Suez Canal",
            "Panama Canal"
        ],
        "answer": 3,
        "hint": "Opened in 1914 across Isthmus of Panama.",
        "explanation": "Saves thousands of shipping miles around Cape Horn.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🚢 Maritime Canals"
    },
    {
        "difficulty": "advanced",
        "question": "What is the capital city of Japan? (Territory Exploration #98)",
        "options": [
            "Osaka",
            "Hiroshima",
            "Tokyo",
            "Kyoto"
        ],
        "answer": 2,
        "hint": "Most populous metropolitan area in the world.",
        "explanation": "Tokyo is the economic heart of Japan.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🗾 World Capitals"
    },
    {
        "difficulty": "advanced",
        "question": "Which country is both a country and an entire continent? (Territory Exploration #99)",
        "options": [
            "Iceland",
            "Greenland",
            "Australia",
            "Madagascar"
        ],
        "answer": 2,
        "hint": "Surrounded by Indian and Pacific Oceans.",
        "explanation": "Sixth-largest country by area.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🦘 Continents"
    },
    {
        "difficulty": "advanced",
        "question": "What line of latitude represents 0 degrees dividing Earth into Northern and Southern hemispheres? (Territory Exploration #100)",
        "options": [
            "Prime Meridian",
            "The Equator",
            "Tropic of Cancer",
            "Arctic Circle"
        ],
        "answer": 1,
        "hint": "Receives maximum year-round sunlight.",
        "explanation": "0° latitude line around Earth's center.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🌐 Cartography"
    }
]
  },
  vocab: {
    title: "📖 Global Vocabulary & Linguistics",
    description: "Expand your vocabulary, etymology, and compassionate linguistic terms.",
    icon: "📖",
    ageGroup: "All Ages",
    heroImage: "/quiz/vocab_hero.jpg",
    questions: [
    {
        "difficulty": "beginner",
        "question": "What word defines the ability to understand and share feelings of another?",
        "options": [
            "Empathy",
            "Apathy",
            "Sarcasm",
            "Antipathy"
        ],
        "answer": 0,
        "hint": "Core foundation of compassion.",
        "explanation": "Empathy resonates with others' emotions.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "📚 Psychology"
    },
    {
        "difficulty": "beginner",
        "question": "What word describes the selfless concern and action for the well-being of others?",
        "options": [
            "Pragmatism",
            "Solipsism",
            "Altruism",
            "Egoism"
        ],
        "answer": 2,
        "hint": "Core philosophy behind CyberKarma.",
        "explanation": "Altruism acts for others' benefit.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🌟 Ethics"
    },
    {
        "difficulty": "beginner",
        "question": "What word describes something that lasts for only a very short time?",
        "options": [
            "Ephemeral",
            "Eternal",
            "Immutable",
            "Perennial"
        ],
        "answer": 0,
        "hint": "Fleeting like morning dew.",
        "explanation": "Ephemeral describes temporary beauty.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "📖 Vocabulary"
    },
    {
        "difficulty": "beginner",
        "question": "What term describes finding valuable or agreeable things not sought for?",
        "options": [
            "Serendipity",
            "Misfortune",
            "Calculated",
            "Destiny"
        ],
        "answer": 0,
        "hint": "Coined by Horace Walpole.",
        "explanation": "Serendipity is a happy accident.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "✨ Linguistics"
    },
    {
        "difficulty": "beginner",
        "question": "What word means being present, appearing, or found everywhere simultaneously?",
        "options": [
            "Obscure",
            "Ubiquitous",
            "Scarce",
            "Transient"
        ],
        "answer": 1,
        "hint": "Omnipresent in modern technology.",
        "explanation": "Ubiquitous means found all around.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🌐 English Words"
    },
    {
        "difficulty": "beginner",
        "question": "What word describes the ability to recover quickly from difficulties or trauma?",
        "options": [
            "Compliance",
            "Fragility",
            "Resilience",
            "Stagnation"
        ],
        "answer": 2,
        "hint": "Elastic bouncing back.",
        "explanation": "Resilience powers rescue dogs to heal.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "💪 Character"
    },
    {
        "difficulty": "beginner",
        "question": "What is the earthy scent produced when rain falls on dry soil?",
        "options": [
            "Miasma",
            "Ozone",
            "Aura",
            "Petrichor"
        ],
        "answer": 3,
        "hint": "Coined by Australian scientists in 1964.",
        "explanation": "Pleasant smell of summer monsoon rains.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🌧️ Nature Vocabulary"
    },
    {
        "difficulty": "beginner",
        "question": "What African philosophical term translates to 'I am because we are'?",
        "options": [
            "Ubuntu",
            "Kharma",
            "Zen",
            "Aloha"
        ],
        "answer": 0,
        "hint": "Shared humanity and collective care.",
        "explanation": "Ubuntu emphasizes universal interconnectedness.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🌍 World Philosophy"
    },
    {
        "difficulty": "beginner",
        "question": "What Japanese art form repairs broken pottery with gold lacquer?",
        "options": [
            "Kintsugi",
            "Ikebana",
            "Origami",
            "Bonsai"
        ],
        "answer": 0,
        "hint": "Treats breakage and repair as history.",
        "explanation": "Emphasizes beauty in healing and scars.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🏺 Cultural Concepts"
    },
    {
        "difficulty": "beginner",
        "question": "What word means generous in forgiving an insult or injury?",
        "options": [
            "Magnanimous",
            "Petty",
            "Callous",
            "Vindictive"
        ],
        "answer": 0,
        "hint": "Noble and large-hearted.",
        "explanation": "Magnanimity reflects deep character.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "❤️ Compassion"
    },
    {
        "difficulty": "beginner",
        "question": "What word defines the ability to understand and share feelings of another? (Linguistic Mastery #11)",
        "options": [
            "Sarcasm",
            "Empathy",
            "Antipathy",
            "Apathy"
        ],
        "answer": 1,
        "hint": "Core foundation of compassion.",
        "explanation": "Empathy resonates with others' emotions.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "📚 Psychology"
    },
    {
        "difficulty": "beginner",
        "question": "What word describes the selfless concern and action for the well-being of others? (Linguistic Mastery #12)",
        "options": [
            "Egoism",
            "Altruism",
            "Pragmatism",
            "Solipsism"
        ],
        "answer": 1,
        "hint": "Core philosophy behind CyberKarma.",
        "explanation": "Altruism acts for others' benefit.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🌟 Ethics"
    },
    {
        "difficulty": "beginner",
        "question": "What word describes something that lasts for only a very short time? (Linguistic Mastery #13)",
        "options": [
            "Ephemeral",
            "Eternal",
            "Immutable",
            "Perennial"
        ],
        "answer": 0,
        "hint": "Fleeting like morning dew.",
        "explanation": "Ephemeral describes temporary beauty.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "📖 Vocabulary"
    },
    {
        "difficulty": "beginner",
        "question": "What term describes finding valuable or agreeable things not sought for? (Linguistic Mastery #14)",
        "options": [
            "Misfortune",
            "Destiny",
            "Serendipity",
            "Calculated"
        ],
        "answer": 2,
        "hint": "Coined by Horace Walpole.",
        "explanation": "Serendipity is a happy accident.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "✨ Linguistics"
    },
    {
        "difficulty": "beginner",
        "question": "What word means being present, appearing, or found everywhere simultaneously? (Linguistic Mastery #15)",
        "options": [
            "Obscure",
            "Transient",
            "Scarce",
            "Ubiquitous"
        ],
        "answer": 3,
        "hint": "Omnipresent in modern technology.",
        "explanation": "Ubiquitous means found all around.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🌐 English Words"
    },
    {
        "difficulty": "beginner",
        "question": "What word describes the ability to recover quickly from difficulties or trauma? (Linguistic Mastery #16)",
        "options": [
            "Stagnation",
            "Resilience",
            "Fragility",
            "Compliance"
        ],
        "answer": 1,
        "hint": "Elastic bouncing back.",
        "explanation": "Resilience powers rescue dogs to heal.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "💪 Character"
    },
    {
        "difficulty": "beginner",
        "question": "What is the earthy scent produced when rain falls on dry soil? (Linguistic Mastery #17)",
        "options": [
            "Ozone",
            "Miasma",
            "Aura",
            "Petrichor"
        ],
        "answer": 3,
        "hint": "Coined by Australian scientists in 1964.",
        "explanation": "Pleasant smell of summer monsoon rains.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🌧️ Nature Vocabulary"
    },
    {
        "difficulty": "beginner",
        "question": "What African philosophical term translates to 'I am because we are'? (Linguistic Mastery #18)",
        "options": [
            "Aloha",
            "Zen",
            "Kharma",
            "Ubuntu"
        ],
        "answer": 3,
        "hint": "Shared humanity and collective care.",
        "explanation": "Ubuntu emphasizes universal interconnectedness.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🌍 World Philosophy"
    },
    {
        "difficulty": "beginner",
        "question": "What Japanese art form repairs broken pottery with gold lacquer? (Linguistic Mastery #19)",
        "options": [
            "Bonsai",
            "Kintsugi",
            "Ikebana",
            "Origami"
        ],
        "answer": 1,
        "hint": "Treats breakage and repair as history.",
        "explanation": "Emphasizes beauty in healing and scars.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🏺 Cultural Concepts"
    },
    {
        "difficulty": "beginner",
        "question": "What word means generous in forgiving an insult or injury? (Linguistic Mastery #20)",
        "options": [
            "Callous",
            "Vindictive",
            "Magnanimous",
            "Petty"
        ],
        "answer": 2,
        "hint": "Noble and large-hearted.",
        "explanation": "Magnanimity reflects deep character.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "❤️ Compassion"
    },
    {
        "difficulty": "beginner",
        "question": "What word defines the ability to understand and share feelings of another? (Linguistic Mastery #21)",
        "options": [
            "Empathy",
            "Apathy",
            "Antipathy",
            "Sarcasm"
        ],
        "answer": 0,
        "hint": "Core foundation of compassion.",
        "explanation": "Empathy resonates with others' emotions.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "📚 Psychology"
    },
    {
        "difficulty": "beginner",
        "question": "What word describes the selfless concern and action for the well-being of others? (Linguistic Mastery #22)",
        "options": [
            "Solipsism",
            "Pragmatism",
            "Altruism",
            "Egoism"
        ],
        "answer": 2,
        "hint": "Core philosophy behind CyberKarma.",
        "explanation": "Altruism acts for others' benefit.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🌟 Ethics"
    },
    {
        "difficulty": "beginner",
        "question": "What word describes something that lasts for only a very short time? (Linguistic Mastery #23)",
        "options": [
            "Immutable",
            "Perennial",
            "Eternal",
            "Ephemeral"
        ],
        "answer": 3,
        "hint": "Fleeting like morning dew.",
        "explanation": "Ephemeral describes temporary beauty.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "📖 Vocabulary"
    },
    {
        "difficulty": "beginner",
        "question": "What term describes finding valuable or agreeable things not sought for? (Linguistic Mastery #24)",
        "options": [
            "Destiny",
            "Calculated",
            "Serendipity",
            "Misfortune"
        ],
        "answer": 2,
        "hint": "Coined by Horace Walpole.",
        "explanation": "Serendipity is a happy accident.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "✨ Linguistics"
    },
    {
        "difficulty": "beginner",
        "question": "What word means being present, appearing, or found everywhere simultaneously? (Linguistic Mastery #25)",
        "options": [
            "Scarce",
            "Transient",
            "Ubiquitous",
            "Obscure"
        ],
        "answer": 2,
        "hint": "Omnipresent in modern technology.",
        "explanation": "Ubiquitous means found all around.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🌐 English Words"
    },
    {
        "difficulty": "beginner",
        "question": "What word describes the ability to recover quickly from difficulties or trauma? (Linguistic Mastery #26)",
        "options": [
            "Resilience",
            "Stagnation",
            "Fragility",
            "Compliance"
        ],
        "answer": 0,
        "hint": "Elastic bouncing back.",
        "explanation": "Resilience powers rescue dogs to heal.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "💪 Character"
    },
    {
        "difficulty": "beginner",
        "question": "What is the earthy scent produced when rain falls on dry soil? (Linguistic Mastery #27)",
        "options": [
            "Aura",
            "Ozone",
            "Miasma",
            "Petrichor"
        ],
        "answer": 3,
        "hint": "Coined by Australian scientists in 1964.",
        "explanation": "Pleasant smell of summer monsoon rains.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🌧️ Nature Vocabulary"
    },
    {
        "difficulty": "beginner",
        "question": "What African philosophical term translates to 'I am because we are'? (Linguistic Mastery #28)",
        "options": [
            "Ubuntu",
            "Aloha",
            "Zen",
            "Kharma"
        ],
        "answer": 0,
        "hint": "Shared humanity and collective care.",
        "explanation": "Ubuntu emphasizes universal interconnectedness.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🌍 World Philosophy"
    },
    {
        "difficulty": "beginner",
        "question": "What Japanese art form repairs broken pottery with gold lacquer? (Linguistic Mastery #29)",
        "options": [
            "Ikebana",
            "Kintsugi",
            "Origami",
            "Bonsai"
        ],
        "answer": 1,
        "hint": "Treats breakage and repair as history.",
        "explanation": "Emphasizes beauty in healing and scars.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🏺 Cultural Concepts"
    },
    {
        "difficulty": "beginner",
        "question": "What word means generous in forgiving an insult or injury? (Linguistic Mastery #30)",
        "options": [
            "Callous",
            "Vindictive",
            "Magnanimous",
            "Petty"
        ],
        "answer": 2,
        "hint": "Noble and large-hearted.",
        "explanation": "Magnanimity reflects deep character.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "❤️ Compassion"
    },
    {
        "difficulty": "beginner",
        "question": "What word defines the ability to understand and share feelings of another? (Linguistic Mastery #31)",
        "options": [
            "Empathy",
            "Antipathy",
            "Sarcasm",
            "Apathy"
        ],
        "answer": 0,
        "hint": "Core foundation of compassion.",
        "explanation": "Empathy resonates with others' emotions.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "📚 Psychology"
    },
    {
        "difficulty": "beginner",
        "question": "What word describes the selfless concern and action for the well-being of others? (Linguistic Mastery #32)",
        "options": [
            "Solipsism",
            "Egoism",
            "Altruism",
            "Pragmatism"
        ],
        "answer": 2,
        "hint": "Core philosophy behind CyberKarma.",
        "explanation": "Altruism acts for others' benefit.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🌟 Ethics"
    },
    {
        "difficulty": "beginner",
        "question": "What word describes something that lasts for only a very short time? (Linguistic Mastery #33)",
        "options": [
            "Perennial",
            "Ephemeral",
            "Eternal",
            "Immutable"
        ],
        "answer": 1,
        "hint": "Fleeting like morning dew.",
        "explanation": "Ephemeral describes temporary beauty.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "📖 Vocabulary"
    },
    {
        "difficulty": "beginner",
        "question": "What term describes finding valuable or agreeable things not sought for? (Linguistic Mastery #34)",
        "options": [
            "Destiny",
            "Misfortune",
            "Calculated",
            "Serendipity"
        ],
        "answer": 3,
        "hint": "Coined by Horace Walpole.",
        "explanation": "Serendipity is a happy accident.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "✨ Linguistics"
    },
    {
        "difficulty": "beginner",
        "question": "What word means being present, appearing, or found everywhere simultaneously? (Linguistic Mastery #35)",
        "options": [
            "Ubiquitous",
            "Obscure",
            "Transient",
            "Scarce"
        ],
        "answer": 0,
        "hint": "Omnipresent in modern technology.",
        "explanation": "Ubiquitous means found all around.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🌐 English Words"
    },
    {
        "difficulty": "intermediate",
        "question": "What word describes the ability to recover quickly from difficulties or trauma? (Linguistic Mastery #36)",
        "options": [
            "Stagnation",
            "Fragility",
            "Compliance",
            "Resilience"
        ],
        "answer": 3,
        "hint": "Elastic bouncing back.",
        "explanation": "Resilience powers rescue dogs to heal.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "💪 Character"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the earthy scent produced when rain falls on dry soil? (Linguistic Mastery #37)",
        "options": [
            "Petrichor",
            "Aura",
            "Ozone",
            "Miasma"
        ],
        "answer": 0,
        "hint": "Coined by Australian scientists in 1964.",
        "explanation": "Pleasant smell of summer monsoon rains.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🌧️ Nature Vocabulary"
    },
    {
        "difficulty": "intermediate",
        "question": "What African philosophical term translates to 'I am because we are'? (Linguistic Mastery #38)",
        "options": [
            "Ubuntu",
            "Zen",
            "Aloha",
            "Kharma"
        ],
        "answer": 0,
        "hint": "Shared humanity and collective care.",
        "explanation": "Ubuntu emphasizes universal interconnectedness.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🌍 World Philosophy"
    },
    {
        "difficulty": "intermediate",
        "question": "What Japanese art form repairs broken pottery with gold lacquer? (Linguistic Mastery #39)",
        "options": [
            "Kintsugi",
            "Bonsai",
            "Ikebana",
            "Origami"
        ],
        "answer": 0,
        "hint": "Treats breakage and repair as history.",
        "explanation": "Emphasizes beauty in healing and scars.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🏺 Cultural Concepts"
    },
    {
        "difficulty": "intermediate",
        "question": "What word means generous in forgiving an insult or injury? (Linguistic Mastery #40)",
        "options": [
            "Petty",
            "Magnanimous",
            "Callous",
            "Vindictive"
        ],
        "answer": 1,
        "hint": "Noble and large-hearted.",
        "explanation": "Magnanimity reflects deep character.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "❤️ Compassion"
    },
    {
        "difficulty": "intermediate",
        "question": "What word defines the ability to understand and share feelings of another? (Linguistic Mastery #41)",
        "options": [
            "Apathy",
            "Antipathy",
            "Sarcasm",
            "Empathy"
        ],
        "answer": 3,
        "hint": "Core foundation of compassion.",
        "explanation": "Empathy resonates with others' emotions.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "📚 Psychology"
    },
    {
        "difficulty": "intermediate",
        "question": "What word describes the selfless concern and action for the well-being of others? (Linguistic Mastery #42)",
        "options": [
            "Altruism",
            "Solipsism",
            "Egoism",
            "Pragmatism"
        ],
        "answer": 0,
        "hint": "Core philosophy behind CyberKarma.",
        "explanation": "Altruism acts for others' benefit.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🌟 Ethics"
    },
    {
        "difficulty": "intermediate",
        "question": "What word describes something that lasts for only a very short time? (Linguistic Mastery #43)",
        "options": [
            "Ephemeral",
            "Perennial",
            "Eternal",
            "Immutable"
        ],
        "answer": 0,
        "hint": "Fleeting like morning dew.",
        "explanation": "Ephemeral describes temporary beauty.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "📖 Vocabulary"
    },
    {
        "difficulty": "intermediate",
        "question": "What term describes finding valuable or agreeable things not sought for? (Linguistic Mastery #44)",
        "options": [
            "Serendipity",
            "Destiny",
            "Calculated",
            "Misfortune"
        ],
        "answer": 0,
        "hint": "Coined by Horace Walpole.",
        "explanation": "Serendipity is a happy accident.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "✨ Linguistics"
    },
    {
        "difficulty": "intermediate",
        "question": "What word means being present, appearing, or found everywhere simultaneously? (Linguistic Mastery #45)",
        "options": [
            "Scarce",
            "Transient",
            "Ubiquitous",
            "Obscure"
        ],
        "answer": 2,
        "hint": "Omnipresent in modern technology.",
        "explanation": "Ubiquitous means found all around.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🌐 English Words"
    },
    {
        "difficulty": "intermediate",
        "question": "What word describes the ability to recover quickly from difficulties or trauma? (Linguistic Mastery #46)",
        "options": [
            "Stagnation",
            "Compliance",
            "Resilience",
            "Fragility"
        ],
        "answer": 2,
        "hint": "Elastic bouncing back.",
        "explanation": "Resilience powers rescue dogs to heal.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "💪 Character"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the earthy scent produced when rain falls on dry soil? (Linguistic Mastery #47)",
        "options": [
            "Petrichor",
            "Ozone",
            "Aura",
            "Miasma"
        ],
        "answer": 0,
        "hint": "Coined by Australian scientists in 1964.",
        "explanation": "Pleasant smell of summer monsoon rains.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🌧️ Nature Vocabulary"
    },
    {
        "difficulty": "intermediate",
        "question": "What African philosophical term translates to 'I am because we are'? (Linguistic Mastery #48)",
        "options": [
            "Ubuntu",
            "Zen",
            "Kharma",
            "Aloha"
        ],
        "answer": 0,
        "hint": "Shared humanity and collective care.",
        "explanation": "Ubuntu emphasizes universal interconnectedness.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🌍 World Philosophy"
    },
    {
        "difficulty": "intermediate",
        "question": "What Japanese art form repairs broken pottery with gold lacquer? (Linguistic Mastery #49)",
        "options": [
            "Ikebana",
            "Origami",
            "Kintsugi",
            "Bonsai"
        ],
        "answer": 2,
        "hint": "Treats breakage and repair as history.",
        "explanation": "Emphasizes beauty in healing and scars.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🏺 Cultural Concepts"
    },
    {
        "difficulty": "intermediate",
        "question": "What word means generous in forgiving an insult or injury? (Linguistic Mastery #50)",
        "options": [
            "Magnanimous",
            "Callous",
            "Vindictive",
            "Petty"
        ],
        "answer": 0,
        "hint": "Noble and large-hearted.",
        "explanation": "Magnanimity reflects deep character.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "❤️ Compassion"
    },
    {
        "difficulty": "intermediate",
        "question": "What word defines the ability to understand and share feelings of another? (Linguistic Mastery #51)",
        "options": [
            "Antipathy",
            "Sarcasm",
            "Apathy",
            "Empathy"
        ],
        "answer": 3,
        "hint": "Core foundation of compassion.",
        "explanation": "Empathy resonates with others' emotions.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "📚 Psychology"
    },
    {
        "difficulty": "intermediate",
        "question": "What word describes the selfless concern and action for the well-being of others? (Linguistic Mastery #52)",
        "options": [
            "Altruism",
            "Pragmatism",
            "Solipsism",
            "Egoism"
        ],
        "answer": 0,
        "hint": "Core philosophy behind CyberKarma.",
        "explanation": "Altruism acts for others' benefit.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🌟 Ethics"
    },
    {
        "difficulty": "intermediate",
        "question": "What word describes something that lasts for only a very short time? (Linguistic Mastery #53)",
        "options": [
            "Eternal",
            "Perennial",
            "Ephemeral",
            "Immutable"
        ],
        "answer": 2,
        "hint": "Fleeting like morning dew.",
        "explanation": "Ephemeral describes temporary beauty.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "📖 Vocabulary"
    },
    {
        "difficulty": "intermediate",
        "question": "What term describes finding valuable or agreeable things not sought for? (Linguistic Mastery #54)",
        "options": [
            "Serendipity",
            "Misfortune",
            "Destiny",
            "Calculated"
        ],
        "answer": 0,
        "hint": "Coined by Horace Walpole.",
        "explanation": "Serendipity is a happy accident.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "✨ Linguistics"
    },
    {
        "difficulty": "intermediate",
        "question": "What word means being present, appearing, or found everywhere simultaneously? (Linguistic Mastery #55)",
        "options": [
            "Transient",
            "Ubiquitous",
            "Obscure",
            "Scarce"
        ],
        "answer": 1,
        "hint": "Omnipresent in modern technology.",
        "explanation": "Ubiquitous means found all around.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🌐 English Words"
    },
    {
        "difficulty": "intermediate",
        "question": "What word describes the ability to recover quickly from difficulties or trauma? (Linguistic Mastery #56)",
        "options": [
            "Fragility",
            "Stagnation",
            "Resilience",
            "Compliance"
        ],
        "answer": 2,
        "hint": "Elastic bouncing back.",
        "explanation": "Resilience powers rescue dogs to heal.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "💪 Character"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the earthy scent produced when rain falls on dry soil? (Linguistic Mastery #57)",
        "options": [
            "Ozone",
            "Miasma",
            "Petrichor",
            "Aura"
        ],
        "answer": 2,
        "hint": "Coined by Australian scientists in 1964.",
        "explanation": "Pleasant smell of summer monsoon rains.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🌧️ Nature Vocabulary"
    },
    {
        "difficulty": "intermediate",
        "question": "What African philosophical term translates to 'I am because we are'? (Linguistic Mastery #58)",
        "options": [
            "Ubuntu",
            "Aloha",
            "Zen",
            "Kharma"
        ],
        "answer": 0,
        "hint": "Shared humanity and collective care.",
        "explanation": "Ubuntu emphasizes universal interconnectedness.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🌍 World Philosophy"
    },
    {
        "difficulty": "intermediate",
        "question": "What Japanese art form repairs broken pottery with gold lacquer? (Linguistic Mastery #59)",
        "options": [
            "Kintsugi",
            "Origami",
            "Ikebana",
            "Bonsai"
        ],
        "answer": 0,
        "hint": "Treats breakage and repair as history.",
        "explanation": "Emphasizes beauty in healing and scars.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🏺 Cultural Concepts"
    },
    {
        "difficulty": "intermediate",
        "question": "What word means generous in forgiving an insult or injury? (Linguistic Mastery #60)",
        "options": [
            "Petty",
            "Magnanimous",
            "Callous",
            "Vindictive"
        ],
        "answer": 1,
        "hint": "Noble and large-hearted.",
        "explanation": "Magnanimity reflects deep character.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "❤️ Compassion"
    },
    {
        "difficulty": "intermediate",
        "question": "What word defines the ability to understand and share feelings of another? (Linguistic Mastery #61)",
        "options": [
            "Antipathy",
            "Empathy",
            "Sarcasm",
            "Apathy"
        ],
        "answer": 1,
        "hint": "Core foundation of compassion.",
        "explanation": "Empathy resonates with others' emotions.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "📚 Psychology"
    },
    {
        "difficulty": "intermediate",
        "question": "What word describes the selfless concern and action for the well-being of others? (Linguistic Mastery #62)",
        "options": [
            "Altruism",
            "Pragmatism",
            "Egoism",
            "Solipsism"
        ],
        "answer": 0,
        "hint": "Core philosophy behind CyberKarma.",
        "explanation": "Altruism acts for others' benefit.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🌟 Ethics"
    },
    {
        "difficulty": "intermediate",
        "question": "What word describes something that lasts for only a very short time? (Linguistic Mastery #63)",
        "options": [
            "Ephemeral",
            "Eternal",
            "Perennial",
            "Immutable"
        ],
        "answer": 0,
        "hint": "Fleeting like morning dew.",
        "explanation": "Ephemeral describes temporary beauty.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "📖 Vocabulary"
    },
    {
        "difficulty": "intermediate",
        "question": "What term describes finding valuable or agreeable things not sought for? (Linguistic Mastery #64)",
        "options": [
            "Calculated",
            "Serendipity",
            "Destiny",
            "Misfortune"
        ],
        "answer": 1,
        "hint": "Coined by Horace Walpole.",
        "explanation": "Serendipity is a happy accident.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "✨ Linguistics"
    },
    {
        "difficulty": "intermediate",
        "question": "What word means being present, appearing, or found everywhere simultaneously? (Linguistic Mastery #65)",
        "options": [
            "Obscure",
            "Ubiquitous",
            "Scarce",
            "Transient"
        ],
        "answer": 1,
        "hint": "Omnipresent in modern technology.",
        "explanation": "Ubiquitous means found all around.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🌐 English Words"
    },
    {
        "difficulty": "intermediate",
        "question": "What word describes the ability to recover quickly from difficulties or trauma? (Linguistic Mastery #66)",
        "options": [
            "Resilience",
            "Stagnation",
            "Fragility",
            "Compliance"
        ],
        "answer": 0,
        "hint": "Elastic bouncing back.",
        "explanation": "Resilience powers rescue dogs to heal.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "💪 Character"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the earthy scent produced when rain falls on dry soil? (Linguistic Mastery #67)",
        "options": [
            "Miasma",
            "Petrichor",
            "Ozone",
            "Aura"
        ],
        "answer": 1,
        "hint": "Coined by Australian scientists in 1964.",
        "explanation": "Pleasant smell of summer monsoon rains.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🌧️ Nature Vocabulary"
    },
    {
        "difficulty": "intermediate",
        "question": "What African philosophical term translates to 'I am because we are'? (Linguistic Mastery #68)",
        "options": [
            "Zen",
            "Kharma",
            "Aloha",
            "Ubuntu"
        ],
        "answer": 3,
        "hint": "Shared humanity and collective care.",
        "explanation": "Ubuntu emphasizes universal interconnectedness.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🌍 World Philosophy"
    },
    {
        "difficulty": "intermediate",
        "question": "What Japanese art form repairs broken pottery with gold lacquer? (Linguistic Mastery #69)",
        "options": [
            "Ikebana",
            "Kintsugi",
            "Bonsai",
            "Origami"
        ],
        "answer": 1,
        "hint": "Treats breakage and repair as history.",
        "explanation": "Emphasizes beauty in healing and scars.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🏺 Cultural Concepts"
    },
    {
        "difficulty": "intermediate",
        "question": "What word means generous in forgiving an insult or injury? (Linguistic Mastery #70)",
        "options": [
            "Magnanimous",
            "Petty",
            "Vindictive",
            "Callous"
        ],
        "answer": 0,
        "hint": "Noble and large-hearted.",
        "explanation": "Magnanimity reflects deep character.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "❤️ Compassion"
    },
    {
        "difficulty": "advanced",
        "question": "What word defines the ability to understand and share feelings of another? (Linguistic Mastery #71)",
        "options": [
            "Sarcasm",
            "Antipathy",
            "Empathy",
            "Apathy"
        ],
        "answer": 2,
        "hint": "Core foundation of compassion.",
        "explanation": "Empathy resonates with others' emotions.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "📚 Psychology"
    },
    {
        "difficulty": "advanced",
        "question": "What word describes the selfless concern and action for the well-being of others? (Linguistic Mastery #72)",
        "options": [
            "Egoism",
            "Altruism",
            "Pragmatism",
            "Solipsism"
        ],
        "answer": 1,
        "hint": "Core philosophy behind CyberKarma.",
        "explanation": "Altruism acts for others' benefit.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🌟 Ethics"
    },
    {
        "difficulty": "advanced",
        "question": "What word describes something that lasts for only a very short time? (Linguistic Mastery #73)",
        "options": [
            "Immutable",
            "Ephemeral",
            "Eternal",
            "Perennial"
        ],
        "answer": 1,
        "hint": "Fleeting like morning dew.",
        "explanation": "Ephemeral describes temporary beauty.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "📖 Vocabulary"
    },
    {
        "difficulty": "advanced",
        "question": "What term describes finding valuable or agreeable things not sought for? (Linguistic Mastery #74)",
        "options": [
            "Serendipity",
            "Calculated",
            "Misfortune",
            "Destiny"
        ],
        "answer": 0,
        "hint": "Coined by Horace Walpole.",
        "explanation": "Serendipity is a happy accident.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "✨ Linguistics"
    },
    {
        "difficulty": "advanced",
        "question": "What word means being present, appearing, or found everywhere simultaneously? (Linguistic Mastery #75)",
        "options": [
            "Scarce",
            "Transient",
            "Obscure",
            "Ubiquitous"
        ],
        "answer": 3,
        "hint": "Omnipresent in modern technology.",
        "explanation": "Ubiquitous means found all around.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🌐 English Words"
    },
    {
        "difficulty": "advanced",
        "question": "What word describes the ability to recover quickly from difficulties or trauma? (Linguistic Mastery #76)",
        "options": [
            "Compliance",
            "Stagnation",
            "Fragility",
            "Resilience"
        ],
        "answer": 3,
        "hint": "Elastic bouncing back.",
        "explanation": "Resilience powers rescue dogs to heal.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "💪 Character"
    },
    {
        "difficulty": "advanced",
        "question": "What is the earthy scent produced when rain falls on dry soil? (Linguistic Mastery #77)",
        "options": [
            "Petrichor",
            "Ozone",
            "Miasma",
            "Aura"
        ],
        "answer": 0,
        "hint": "Coined by Australian scientists in 1964.",
        "explanation": "Pleasant smell of summer monsoon rains.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🌧️ Nature Vocabulary"
    },
    {
        "difficulty": "advanced",
        "question": "What African philosophical term translates to 'I am because we are'? (Linguistic Mastery #78)",
        "options": [
            "Aloha",
            "Zen",
            "Kharma",
            "Ubuntu"
        ],
        "answer": 3,
        "hint": "Shared humanity and collective care.",
        "explanation": "Ubuntu emphasizes universal interconnectedness.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🌍 World Philosophy"
    },
    {
        "difficulty": "advanced",
        "question": "What Japanese art form repairs broken pottery with gold lacquer? (Linguistic Mastery #79)",
        "options": [
            "Origami",
            "Ikebana",
            "Kintsugi",
            "Bonsai"
        ],
        "answer": 2,
        "hint": "Treats breakage and repair as history.",
        "explanation": "Emphasizes beauty in healing and scars.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🏺 Cultural Concepts"
    },
    {
        "difficulty": "advanced",
        "question": "What word means generous in forgiving an insult or injury? (Linguistic Mastery #80)",
        "options": [
            "Vindictive",
            "Petty",
            "Callous",
            "Magnanimous"
        ],
        "answer": 3,
        "hint": "Noble and large-hearted.",
        "explanation": "Magnanimity reflects deep character.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "❤️ Compassion"
    },
    {
        "difficulty": "advanced",
        "question": "What word defines the ability to understand and share feelings of another? (Linguistic Mastery #81)",
        "options": [
            "Empathy",
            "Antipathy",
            "Sarcasm",
            "Apathy"
        ],
        "answer": 0,
        "hint": "Core foundation of compassion.",
        "explanation": "Empathy resonates with others' emotions.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "📚 Psychology"
    },
    {
        "difficulty": "advanced",
        "question": "What word describes the selfless concern and action for the well-being of others? (Linguistic Mastery #82)",
        "options": [
            "Egoism",
            "Altruism",
            "Solipsism",
            "Pragmatism"
        ],
        "answer": 1,
        "hint": "Core philosophy behind CyberKarma.",
        "explanation": "Altruism acts for others' benefit.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🌟 Ethics"
    },
    {
        "difficulty": "advanced",
        "question": "What word describes something that lasts for only a very short time? (Linguistic Mastery #83)",
        "options": [
            "Ephemeral",
            "Immutable",
            "Eternal",
            "Perennial"
        ],
        "answer": 0,
        "hint": "Fleeting like morning dew.",
        "explanation": "Ephemeral describes temporary beauty.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "📖 Vocabulary"
    },
    {
        "difficulty": "advanced",
        "question": "What term describes finding valuable or agreeable things not sought for? (Linguistic Mastery #84)",
        "options": [
            "Calculated",
            "Misfortune",
            "Serendipity",
            "Destiny"
        ],
        "answer": 2,
        "hint": "Coined by Horace Walpole.",
        "explanation": "Serendipity is a happy accident.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "✨ Linguistics"
    },
    {
        "difficulty": "advanced",
        "question": "What word means being present, appearing, or found everywhere simultaneously? (Linguistic Mastery #85)",
        "options": [
            "Transient",
            "Scarce",
            "Ubiquitous",
            "Obscure"
        ],
        "answer": 2,
        "hint": "Omnipresent in modern technology.",
        "explanation": "Ubiquitous means found all around.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🌐 English Words"
    },
    {
        "difficulty": "advanced",
        "question": "What word describes the ability to recover quickly from difficulties or trauma? (Linguistic Mastery #86)",
        "options": [
            "Fragility",
            "Compliance",
            "Resilience",
            "Stagnation"
        ],
        "answer": 2,
        "hint": "Elastic bouncing back.",
        "explanation": "Resilience powers rescue dogs to heal.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "💪 Character"
    },
    {
        "difficulty": "advanced",
        "question": "What is the earthy scent produced when rain falls on dry soil? (Linguistic Mastery #87)",
        "options": [
            "Ozone",
            "Miasma",
            "Aura",
            "Petrichor"
        ],
        "answer": 3,
        "hint": "Coined by Australian scientists in 1964.",
        "explanation": "Pleasant smell of summer monsoon rains.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🌧️ Nature Vocabulary"
    },
    {
        "difficulty": "advanced",
        "question": "What African philosophical term translates to 'I am because we are'? (Linguistic Mastery #88)",
        "options": [
            "Ubuntu",
            "Kharma",
            "Zen",
            "Aloha"
        ],
        "answer": 0,
        "hint": "Shared humanity and collective care.",
        "explanation": "Ubuntu emphasizes universal interconnectedness.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🌍 World Philosophy"
    },
    {
        "difficulty": "advanced",
        "question": "What Japanese art form repairs broken pottery with gold lacquer? (Linguistic Mastery #89)",
        "options": [
            "Bonsai",
            "Kintsugi",
            "Origami",
            "Ikebana"
        ],
        "answer": 1,
        "hint": "Treats breakage and repair as history.",
        "explanation": "Emphasizes beauty in healing and scars.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🏺 Cultural Concepts"
    },
    {
        "difficulty": "advanced",
        "question": "What word means generous in forgiving an insult or injury? (Linguistic Mastery #90)",
        "options": [
            "Magnanimous",
            "Callous",
            "Vindictive",
            "Petty"
        ],
        "answer": 0,
        "hint": "Noble and large-hearted.",
        "explanation": "Magnanimity reflects deep character.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "❤️ Compassion"
    },
    {
        "difficulty": "advanced",
        "question": "What word defines the ability to understand and share feelings of another? (Linguistic Mastery #91)",
        "options": [
            "Apathy",
            "Antipathy",
            "Sarcasm",
            "Empathy"
        ],
        "answer": 3,
        "hint": "Core foundation of compassion.",
        "explanation": "Empathy resonates with others' emotions.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "📚 Psychology"
    },
    {
        "difficulty": "advanced",
        "question": "What word describes the selfless concern and action for the well-being of others? (Linguistic Mastery #92)",
        "options": [
            "Solipsism",
            "Pragmatism",
            "Egoism",
            "Altruism"
        ],
        "answer": 3,
        "hint": "Core philosophy behind CyberKarma.",
        "explanation": "Altruism acts for others' benefit.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🌟 Ethics"
    },
    {
        "difficulty": "advanced",
        "question": "What word describes something that lasts for only a very short time? (Linguistic Mastery #93)",
        "options": [
            "Immutable",
            "Perennial",
            "Eternal",
            "Ephemeral"
        ],
        "answer": 3,
        "hint": "Fleeting like morning dew.",
        "explanation": "Ephemeral describes temporary beauty.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "📖 Vocabulary"
    },
    {
        "difficulty": "advanced",
        "question": "What term describes finding valuable or agreeable things not sought for? (Linguistic Mastery #94)",
        "options": [
            "Calculated",
            "Serendipity",
            "Destiny",
            "Misfortune"
        ],
        "answer": 1,
        "hint": "Coined by Horace Walpole.",
        "explanation": "Serendipity is a happy accident.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "✨ Linguistics"
    },
    {
        "difficulty": "advanced",
        "question": "What word means being present, appearing, or found everywhere simultaneously? (Linguistic Mastery #95)",
        "options": [
            "Obscure",
            "Ubiquitous",
            "Scarce",
            "Transient"
        ],
        "answer": 1,
        "hint": "Omnipresent in modern technology.",
        "explanation": "Ubiquitous means found all around.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🌐 English Words"
    },
    {
        "difficulty": "advanced",
        "question": "What word describes the ability to recover quickly from difficulties or trauma? (Linguistic Mastery #96)",
        "options": [
            "Stagnation",
            "Compliance",
            "Fragility",
            "Resilience"
        ],
        "answer": 3,
        "hint": "Elastic bouncing back.",
        "explanation": "Resilience powers rescue dogs to heal.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "💪 Character"
    },
    {
        "difficulty": "advanced",
        "question": "What is the earthy scent produced when rain falls on dry soil? (Linguistic Mastery #97)",
        "options": [
            "Ozone",
            "Petrichor",
            "Aura",
            "Miasma"
        ],
        "answer": 1,
        "hint": "Coined by Australian scientists in 1964.",
        "explanation": "Pleasant smell of summer monsoon rains.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🌧️ Nature Vocabulary"
    },
    {
        "difficulty": "advanced",
        "question": "What African philosophical term translates to 'I am because we are'? (Linguistic Mastery #98)",
        "options": [
            "Kharma",
            "Ubuntu",
            "Aloha",
            "Zen"
        ],
        "answer": 1,
        "hint": "Shared humanity and collective care.",
        "explanation": "Ubuntu emphasizes universal interconnectedness.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🌍 World Philosophy"
    },
    {
        "difficulty": "advanced",
        "question": "What Japanese art form repairs broken pottery with gold lacquer? (Linguistic Mastery #99)",
        "options": [
            "Origami",
            "Bonsai",
            "Kintsugi",
            "Ikebana"
        ],
        "answer": 2,
        "hint": "Treats breakage and repair as history.",
        "explanation": "Emphasizes beauty in healing and scars.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🏺 Cultural Concepts"
    },
    {
        "difficulty": "advanced",
        "question": "What word means generous in forgiving an insult or injury? (Linguistic Mastery #100)",
        "options": [
            "Callous",
            "Vindictive",
            "Petty",
            "Magnanimous"
        ],
        "answer": 3,
        "hint": "Noble and large-hearted.",
        "explanation": "Magnanimity reflects deep character.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "❤️ Compassion"
    }
]
  },
  gk: {
    title: "💡 General Knowledge & Inventions",
    description: "Explore world history, scientific breakthroughs, noble laureates, and milestones.",
    icon: "💡",
    ageGroup: "All Ages",
    heroImage: "/quiz/gk_hero.jpg",
    questions: [
    {
        "difficulty": "beginner",
        "question": "Who developed the movable-type mechanical printing press in Europe around 1440?",
        "options": [
            "Johannes Gutenberg",
            "Galileo",
            "Leonardo da Vinci",
            "Isaac Newton"
        ],
        "answer": 0,
        "hint": "Sparked the rapid spread of literacy.",
        "explanation": "Gutenberg press launched the information revolution.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🏛️ Historical Inventions"
    },
    {
        "difficulty": "beginner",
        "question": "Who discovered penicillin in 1928, launching the antibiotic era of medicine?",
        "options": [
            "Alexander Fleming",
            "Louis Pasteur",
            "Robert Koch",
            "Edward Jenner"
        ],
        "answer": 0,
        "hint": "Found Penicillium mold inhibiting bacteria.",
        "explanation": "Saved hundreds of millions of lives.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "💊 Medicine Pioneers"
    },
    {
        "difficulty": "beginner",
        "question": "Who is the only scientist to win Nobel Prizes in two distinct scientific disciplines (Physics & Chemistry)?",
        "options": [
            "Linus Pauling",
            "Albert Einstein",
            "Marie Curie",
            "Niels Bohr"
        ],
        "answer": 2,
        "hint": "Discovered Radium and Polonium.",
        "explanation": "Pioneered radioactivity research.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🏆 Nobel Laureates"
    },
    {
        "difficulty": "beginner",
        "question": "Who created the World Wide Web in 1989 at CERN?",
        "options": [
            "Steve Jobs",
            "Tim Berners-Lee",
            "Vint Cerf",
            "Bill Gates"
        ],
        "answer": 1,
        "hint": "Invented HTML, HTTP, and the first web browser.",
        "explanation": "Made the internet universally accessible.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🌐 Internet History"
    },
    {
        "difficulty": "beginner",
        "question": "Who wrote the first computer algorithm in the 1840s for Babbage's Analytical Engine?",
        "options": [
            "Grace Hopper",
            "Alan Turing",
            "Charles Babbage",
            "Ada Lovelace"
        ],
        "answer": 3,
        "hint": "Recognized as the world's first programmer.",
        "explanation": "Envisioned computers manipulating more than numbers.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "💻 Computing Pioneers"
    },
    {
        "difficulty": "beginner",
        "question": "Which scientist developed the theory of General Relativity published in 1915?",
        "options": [
            "Isaac Newton",
            "Albert Einstein",
            "Max Planck",
            "Stephen Hawking"
        ],
        "answer": 1,
        "hint": "Showed gravity is the curvature of spacetime.",
        "explanation": "Revolutionized modern cosmology.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "⚡ Modern Physics"
    },
    {
        "difficulty": "beginner",
        "question": "Who formulated the three universal laws of motion and gravitation?",
        "options": [
            "René Descartes",
            "Johannes Kepler",
            "Galileo Galilei",
            "Sir Isaac Newton"
        ],
        "answer": 3,
        "hint": "Published in 'Principia Mathematica' 1687.",
        "explanation": "Foundational framework of classical mechanics.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🍎 Classical Physics"
    },
    {
        "difficulty": "beginner",
        "question": "What historic year did Apollo 11 land humans on the Moon?",
        "options": [
            "1959",
            "1969",
            "1981",
            "1975"
        ],
        "answer": 1,
        "hint": "Neil Armstrong and Buzz Aldrin stepped on the lunar surface.",
        "explanation": "One small step for man, one giant leap for mankind.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🚀 Moon Landings"
    },
    {
        "difficulty": "beginner",
        "question": "Who developed the first successful vaccine in history (for Smallpox in 1796)?",
        "options": [
            "Jonas Salk",
            "Edward Jenner",
            "Alexander Fleming",
            "Louis Pasteur"
        ],
        "answer": 1,
        "hint": "Used cowpox virus to induce immunity.",
        "explanation": "Eradicated smallpox worldwide.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "💉 Immunology"
    },
    {
        "difficulty": "beginner",
        "question": "Which ancient global university in Bihar was a renowned Buddhist center of learning from 5th to 12th century?",
        "options": [
            "Vikramashila",
            "Taxila",
            "Nalanda University",
            "Vallabhi"
        ],
        "answer": 2,
        "hint": "Attracted scholars from China, Korea, and Persia.",
        "explanation": "Housed millions of sacred manuscripts in Patna region.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🏛️ Ancient Heritage"
    },
    {
        "difficulty": "beginner",
        "question": "Who developed the movable-type mechanical printing press in Europe around 1440? (World Milestone #11)",
        "options": [
            "Leonardo da Vinci",
            "Johannes Gutenberg",
            "Galileo",
            "Isaac Newton"
        ],
        "answer": 1,
        "hint": "Sparked the rapid spread of literacy.",
        "explanation": "Gutenberg press launched the information revolution.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🏛️ Historical Inventions"
    },
    {
        "difficulty": "beginner",
        "question": "Who discovered penicillin in 1928, launching the antibiotic era of medicine? (World Milestone #12)",
        "options": [
            "Edward Jenner",
            "Robert Koch",
            "Alexander Fleming",
            "Louis Pasteur"
        ],
        "answer": 2,
        "hint": "Found Penicillium mold inhibiting bacteria.",
        "explanation": "Saved hundreds of millions of lives.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "💊 Medicine Pioneers"
    },
    {
        "difficulty": "beginner",
        "question": "Who is the only scientist to win Nobel Prizes in two distinct scientific disciplines (Physics & Chemistry)? (World Milestone #13)",
        "options": [
            "Marie Curie",
            "Linus Pauling",
            "Albert Einstein",
            "Niels Bohr"
        ],
        "answer": 0,
        "hint": "Discovered Radium and Polonium.",
        "explanation": "Pioneered radioactivity research.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🏆 Nobel Laureates"
    },
    {
        "difficulty": "beginner",
        "question": "Who created the World Wide Web in 1989 at CERN? (World Milestone #14)",
        "options": [
            "Vint Cerf",
            "Steve Jobs",
            "Tim Berners-Lee",
            "Bill Gates"
        ],
        "answer": 2,
        "hint": "Invented HTML, HTTP, and the first web browser.",
        "explanation": "Made the internet universally accessible.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🌐 Internet History"
    },
    {
        "difficulty": "beginner",
        "question": "Who wrote the first computer algorithm in the 1840s for Babbage's Analytical Engine? (World Milestone #15)",
        "options": [
            "Ada Lovelace",
            "Alan Turing",
            "Grace Hopper",
            "Charles Babbage"
        ],
        "answer": 0,
        "hint": "Recognized as the world's first programmer.",
        "explanation": "Envisioned computers manipulating more than numbers.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "💻 Computing Pioneers"
    },
    {
        "difficulty": "beginner",
        "question": "Which scientist developed the theory of General Relativity published in 1915? (World Milestone #16)",
        "options": [
            "Isaac Newton",
            "Stephen Hawking",
            "Albert Einstein",
            "Max Planck"
        ],
        "answer": 2,
        "hint": "Showed gravity is the curvature of spacetime.",
        "explanation": "Revolutionized modern cosmology.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "⚡ Modern Physics"
    },
    {
        "difficulty": "beginner",
        "question": "Who formulated the three universal laws of motion and gravitation? (World Milestone #17)",
        "options": [
            "Johannes Kepler",
            "Sir Isaac Newton",
            "Galileo Galilei",
            "René Descartes"
        ],
        "answer": 1,
        "hint": "Published in 'Principia Mathematica' 1687.",
        "explanation": "Foundational framework of classical mechanics.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🍎 Classical Physics"
    },
    {
        "difficulty": "beginner",
        "question": "What historic year did Apollo 11 land humans on the Moon? (World Milestone #18)",
        "options": [
            "1969",
            "1975",
            "1981",
            "1959"
        ],
        "answer": 0,
        "hint": "Neil Armstrong and Buzz Aldrin stepped on the lunar surface.",
        "explanation": "One small step for man, one giant leap for mankind.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🚀 Moon Landings"
    },
    {
        "difficulty": "beginner",
        "question": "Who developed the first successful vaccine in history (for Smallpox in 1796)? (World Milestone #19)",
        "options": [
            "Louis Pasteur",
            "Jonas Salk",
            "Alexander Fleming",
            "Edward Jenner"
        ],
        "answer": 3,
        "hint": "Used cowpox virus to induce immunity.",
        "explanation": "Eradicated smallpox worldwide.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "💉 Immunology"
    },
    {
        "difficulty": "beginner",
        "question": "Which ancient global university in Bihar was a renowned Buddhist center of learning from 5th to 12th century? (World Milestone #20)",
        "options": [
            "Vallabhi",
            "Vikramashila",
            "Taxila",
            "Nalanda University"
        ],
        "answer": 3,
        "hint": "Attracted scholars from China, Korea, and Persia.",
        "explanation": "Housed millions of sacred manuscripts in Patna region.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🏛️ Ancient Heritage"
    },
    {
        "difficulty": "beginner",
        "question": "Who developed the movable-type mechanical printing press in Europe around 1440? (World Milestone #21)",
        "options": [
            "Isaac Newton",
            "Johannes Gutenberg",
            "Galileo",
            "Leonardo da Vinci"
        ],
        "answer": 1,
        "hint": "Sparked the rapid spread of literacy.",
        "explanation": "Gutenberg press launched the information revolution.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🏛️ Historical Inventions"
    },
    {
        "difficulty": "beginner",
        "question": "Who discovered penicillin in 1928, launching the antibiotic era of medicine? (World Milestone #22)",
        "options": [
            "Robert Koch",
            "Edward Jenner",
            "Louis Pasteur",
            "Alexander Fleming"
        ],
        "answer": 3,
        "hint": "Found Penicillium mold inhibiting bacteria.",
        "explanation": "Saved hundreds of millions of lives.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "💊 Medicine Pioneers"
    },
    {
        "difficulty": "beginner",
        "question": "Who is the only scientist to win Nobel Prizes in two distinct scientific disciplines (Physics & Chemistry)? (World Milestone #23)",
        "options": [
            "Albert Einstein",
            "Niels Bohr",
            "Linus Pauling",
            "Marie Curie"
        ],
        "answer": 3,
        "hint": "Discovered Radium and Polonium.",
        "explanation": "Pioneered radioactivity research.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🏆 Nobel Laureates"
    },
    {
        "difficulty": "beginner",
        "question": "Who created the World Wide Web in 1989 at CERN? (World Milestone #24)",
        "options": [
            "Tim Berners-Lee",
            "Vint Cerf",
            "Bill Gates",
            "Steve Jobs"
        ],
        "answer": 0,
        "hint": "Invented HTML, HTTP, and the first web browser.",
        "explanation": "Made the internet universally accessible.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🌐 Internet History"
    },
    {
        "difficulty": "beginner",
        "question": "Who wrote the first computer algorithm in the 1840s for Babbage's Analytical Engine? (World Milestone #25)",
        "options": [
            "Charles Babbage",
            "Grace Hopper",
            "Alan Turing",
            "Ada Lovelace"
        ],
        "answer": 3,
        "hint": "Recognized as the world's first programmer.",
        "explanation": "Envisioned computers manipulating more than numbers.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "💻 Computing Pioneers"
    },
    {
        "difficulty": "beginner",
        "question": "Which scientist developed the theory of General Relativity published in 1915? (World Milestone #26)",
        "options": [
            "Stephen Hawking",
            "Albert Einstein",
            "Isaac Newton",
            "Max Planck"
        ],
        "answer": 1,
        "hint": "Showed gravity is the curvature of spacetime.",
        "explanation": "Revolutionized modern cosmology.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "⚡ Modern Physics"
    },
    {
        "difficulty": "beginner",
        "question": "Who formulated the three universal laws of motion and gravitation? (World Milestone #27)",
        "options": [
            "Johannes Kepler",
            "René Descartes",
            "Galileo Galilei",
            "Sir Isaac Newton"
        ],
        "answer": 3,
        "hint": "Published in 'Principia Mathematica' 1687.",
        "explanation": "Foundational framework of classical mechanics.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🍎 Classical Physics"
    },
    {
        "difficulty": "beginner",
        "question": "What historic year did Apollo 11 land humans on the Moon? (World Milestone #28)",
        "options": [
            "1959",
            "1975",
            "1981",
            "1969"
        ],
        "answer": 3,
        "hint": "Neil Armstrong and Buzz Aldrin stepped on the lunar surface.",
        "explanation": "One small step for man, one giant leap for mankind.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🚀 Moon Landings"
    },
    {
        "difficulty": "beginner",
        "question": "Who developed the first successful vaccine in history (for Smallpox in 1796)? (World Milestone #29)",
        "options": [
            "Edward Jenner",
            "Jonas Salk",
            "Louis Pasteur",
            "Alexander Fleming"
        ],
        "answer": 0,
        "hint": "Used cowpox virus to induce immunity.",
        "explanation": "Eradicated smallpox worldwide.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "💉 Immunology"
    },
    {
        "difficulty": "beginner",
        "question": "Which ancient global university in Bihar was a renowned Buddhist center of learning from 5th to 12th century? (World Milestone #30)",
        "options": [
            "Vikramashila",
            "Taxila",
            "Nalanda University",
            "Vallabhi"
        ],
        "answer": 2,
        "hint": "Attracted scholars from China, Korea, and Persia.",
        "explanation": "Housed millions of sacred manuscripts in Patna region.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🏛️ Ancient Heritage"
    },
    {
        "difficulty": "beginner",
        "question": "Who developed the movable-type mechanical printing press in Europe around 1440? (World Milestone #31)",
        "options": [
            "Galileo",
            "Isaac Newton",
            "Leonardo da Vinci",
            "Johannes Gutenberg"
        ],
        "answer": 3,
        "hint": "Sparked the rapid spread of literacy.",
        "explanation": "Gutenberg press launched the information revolution.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🏛️ Historical Inventions"
    },
    {
        "difficulty": "beginner",
        "question": "Who discovered penicillin in 1928, launching the antibiotic era of medicine? (World Milestone #32)",
        "options": [
            "Robert Koch",
            "Alexander Fleming",
            "Edward Jenner",
            "Louis Pasteur"
        ],
        "answer": 1,
        "hint": "Found Penicillium mold inhibiting bacteria.",
        "explanation": "Saved hundreds of millions of lives.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "💊 Medicine Pioneers"
    },
    {
        "difficulty": "beginner",
        "question": "Who is the only scientist to win Nobel Prizes in two distinct scientific disciplines (Physics & Chemistry)? (World Milestone #33)",
        "options": [
            "Albert Einstein",
            "Marie Curie",
            "Niels Bohr",
            "Linus Pauling"
        ],
        "answer": 1,
        "hint": "Discovered Radium and Polonium.",
        "explanation": "Pioneered radioactivity research.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🏆 Nobel Laureates"
    },
    {
        "difficulty": "beginner",
        "question": "Who created the World Wide Web in 1989 at CERN? (World Milestone #34)",
        "options": [
            "Bill Gates",
            "Tim Berners-Lee",
            "Steve Jobs",
            "Vint Cerf"
        ],
        "answer": 1,
        "hint": "Invented HTML, HTTP, and the first web browser.",
        "explanation": "Made the internet universally accessible.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🌐 Internet History"
    },
    {
        "difficulty": "beginner",
        "question": "Who wrote the first computer algorithm in the 1840s for Babbage's Analytical Engine? (World Milestone #35)",
        "options": [
            "Grace Hopper",
            "Ada Lovelace",
            "Alan Turing",
            "Charles Babbage"
        ],
        "answer": 1,
        "hint": "Recognized as the world's first programmer.",
        "explanation": "Envisioned computers manipulating more than numbers.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "💻 Computing Pioneers"
    },
    {
        "difficulty": "intermediate",
        "question": "Which scientist developed the theory of General Relativity published in 1915? (World Milestone #36)",
        "options": [
            "Albert Einstein",
            "Isaac Newton",
            "Stephen Hawking",
            "Max Planck"
        ],
        "answer": 0,
        "hint": "Showed gravity is the curvature of spacetime.",
        "explanation": "Revolutionized modern cosmology.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "⚡ Modern Physics"
    },
    {
        "difficulty": "intermediate",
        "question": "Who formulated the three universal laws of motion and gravitation? (World Milestone #37)",
        "options": [
            "Sir Isaac Newton",
            "René Descartes",
            "Johannes Kepler",
            "Galileo Galilei"
        ],
        "answer": 0,
        "hint": "Published in 'Principia Mathematica' 1687.",
        "explanation": "Foundational framework of classical mechanics.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🍎 Classical Physics"
    },
    {
        "difficulty": "intermediate",
        "question": "What historic year did Apollo 11 land humans on the Moon? (World Milestone #38)",
        "options": [
            "1959",
            "1975",
            "1981",
            "1969"
        ],
        "answer": 3,
        "hint": "Neil Armstrong and Buzz Aldrin stepped on the lunar surface.",
        "explanation": "One small step for man, one giant leap for mankind.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🚀 Moon Landings"
    },
    {
        "difficulty": "intermediate",
        "question": "Who developed the first successful vaccine in history (for Smallpox in 1796)? (World Milestone #39)",
        "options": [
            "Edward Jenner",
            "Jonas Salk",
            "Louis Pasteur",
            "Alexander Fleming"
        ],
        "answer": 0,
        "hint": "Used cowpox virus to induce immunity.",
        "explanation": "Eradicated smallpox worldwide.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "💉 Immunology"
    },
    {
        "difficulty": "intermediate",
        "question": "Which ancient global university in Bihar was a renowned Buddhist center of learning from 5th to 12th century? (World Milestone #40)",
        "options": [
            "Nalanda University",
            "Taxila",
            "Vikramashila",
            "Vallabhi"
        ],
        "answer": 0,
        "hint": "Attracted scholars from China, Korea, and Persia.",
        "explanation": "Housed millions of sacred manuscripts in Patna region.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🏛️ Ancient Heritage"
    },
    {
        "difficulty": "intermediate",
        "question": "Who developed the movable-type mechanical printing press in Europe around 1440? (World Milestone #41)",
        "options": [
            "Johannes Gutenberg",
            "Isaac Newton",
            "Galileo",
            "Leonardo da Vinci"
        ],
        "answer": 0,
        "hint": "Sparked the rapid spread of literacy.",
        "explanation": "Gutenberg press launched the information revolution.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🏛️ Historical Inventions"
    },
    {
        "difficulty": "intermediate",
        "question": "Who discovered penicillin in 1928, launching the antibiotic era of medicine? (World Milestone #42)",
        "options": [
            "Robert Koch",
            "Alexander Fleming",
            "Edward Jenner",
            "Louis Pasteur"
        ],
        "answer": 1,
        "hint": "Found Penicillium mold inhibiting bacteria.",
        "explanation": "Saved hundreds of millions of lives.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "💊 Medicine Pioneers"
    },
    {
        "difficulty": "intermediate",
        "question": "Who is the only scientist to win Nobel Prizes in two distinct scientific disciplines (Physics & Chemistry)? (World Milestone #43)",
        "options": [
            "Linus Pauling",
            "Albert Einstein",
            "Marie Curie",
            "Niels Bohr"
        ],
        "answer": 2,
        "hint": "Discovered Radium and Polonium.",
        "explanation": "Pioneered radioactivity research.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🏆 Nobel Laureates"
    },
    {
        "difficulty": "intermediate",
        "question": "Who created the World Wide Web in 1989 at CERN? (World Milestone #44)",
        "options": [
            "Steve Jobs",
            "Vint Cerf",
            "Bill Gates",
            "Tim Berners-Lee"
        ],
        "answer": 3,
        "hint": "Invented HTML, HTTP, and the first web browser.",
        "explanation": "Made the internet universally accessible.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🌐 Internet History"
    },
    {
        "difficulty": "intermediate",
        "question": "Who wrote the first computer algorithm in the 1840s for Babbage's Analytical Engine? (World Milestone #45)",
        "options": [
            "Charles Babbage",
            "Alan Turing",
            "Grace Hopper",
            "Ada Lovelace"
        ],
        "answer": 3,
        "hint": "Recognized as the world's first programmer.",
        "explanation": "Envisioned computers manipulating more than numbers.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "💻 Computing Pioneers"
    },
    {
        "difficulty": "intermediate",
        "question": "Which scientist developed the theory of General Relativity published in 1915? (World Milestone #46)",
        "options": [
            "Albert Einstein",
            "Isaac Newton",
            "Stephen Hawking",
            "Max Planck"
        ],
        "answer": 0,
        "hint": "Showed gravity is the curvature of spacetime.",
        "explanation": "Revolutionized modern cosmology.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "⚡ Modern Physics"
    },
    {
        "difficulty": "intermediate",
        "question": "Who formulated the three universal laws of motion and gravitation? (World Milestone #47)",
        "options": [
            "Sir Isaac Newton",
            "Johannes Kepler",
            "Galileo Galilei",
            "René Descartes"
        ],
        "answer": 0,
        "hint": "Published in 'Principia Mathematica' 1687.",
        "explanation": "Foundational framework of classical mechanics.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🍎 Classical Physics"
    },
    {
        "difficulty": "intermediate",
        "question": "What historic year did Apollo 11 land humans on the Moon? (World Milestone #48)",
        "options": [
            "1981",
            "1959",
            "1975",
            "1969"
        ],
        "answer": 3,
        "hint": "Neil Armstrong and Buzz Aldrin stepped on the lunar surface.",
        "explanation": "One small step for man, one giant leap for mankind.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🚀 Moon Landings"
    },
    {
        "difficulty": "intermediate",
        "question": "Who developed the first successful vaccine in history (for Smallpox in 1796)? (World Milestone #49)",
        "options": [
            "Edward Jenner",
            "Jonas Salk",
            "Louis Pasteur",
            "Alexander Fleming"
        ],
        "answer": 0,
        "hint": "Used cowpox virus to induce immunity.",
        "explanation": "Eradicated smallpox worldwide.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "💉 Immunology"
    },
    {
        "difficulty": "intermediate",
        "question": "Which ancient global university in Bihar was a renowned Buddhist center of learning from 5th to 12th century? (World Milestone #50)",
        "options": [
            "Vikramashila",
            "Taxila",
            "Nalanda University",
            "Vallabhi"
        ],
        "answer": 2,
        "hint": "Attracted scholars from China, Korea, and Persia.",
        "explanation": "Housed millions of sacred manuscripts in Patna region.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🏛️ Ancient Heritage"
    },
    {
        "difficulty": "intermediate",
        "question": "Who developed the movable-type mechanical printing press in Europe around 1440? (World Milestone #51)",
        "options": [
            "Leonardo da Vinci",
            "Isaac Newton",
            "Galileo",
            "Johannes Gutenberg"
        ],
        "answer": 3,
        "hint": "Sparked the rapid spread of literacy.",
        "explanation": "Gutenberg press launched the information revolution.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🏛️ Historical Inventions"
    },
    {
        "difficulty": "intermediate",
        "question": "Who discovered penicillin in 1928, launching the antibiotic era of medicine? (World Milestone #52)",
        "options": [
            "Robert Koch",
            "Alexander Fleming",
            "Edward Jenner",
            "Louis Pasteur"
        ],
        "answer": 1,
        "hint": "Found Penicillium mold inhibiting bacteria.",
        "explanation": "Saved hundreds of millions of lives.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "💊 Medicine Pioneers"
    },
    {
        "difficulty": "intermediate",
        "question": "Who is the only scientist to win Nobel Prizes in two distinct scientific disciplines (Physics & Chemistry)? (World Milestone #53)",
        "options": [
            "Niels Bohr",
            "Marie Curie",
            "Linus Pauling",
            "Albert Einstein"
        ],
        "answer": 1,
        "hint": "Discovered Radium and Polonium.",
        "explanation": "Pioneered radioactivity research.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🏆 Nobel Laureates"
    },
    {
        "difficulty": "intermediate",
        "question": "Who created the World Wide Web in 1989 at CERN? (World Milestone #54)",
        "options": [
            "Bill Gates",
            "Vint Cerf",
            "Tim Berners-Lee",
            "Steve Jobs"
        ],
        "answer": 2,
        "hint": "Invented HTML, HTTP, and the first web browser.",
        "explanation": "Made the internet universally accessible.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🌐 Internet History"
    },
    {
        "difficulty": "intermediate",
        "question": "Who wrote the first computer algorithm in the 1840s for Babbage's Analytical Engine? (World Milestone #55)",
        "options": [
            "Ada Lovelace",
            "Grace Hopper",
            "Alan Turing",
            "Charles Babbage"
        ],
        "answer": 0,
        "hint": "Recognized as the world's first programmer.",
        "explanation": "Envisioned computers manipulating more than numbers.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "💻 Computing Pioneers"
    },
    {
        "difficulty": "intermediate",
        "question": "Which scientist developed the theory of General Relativity published in 1915? (World Milestone #56)",
        "options": [
            "Max Planck",
            "Stephen Hawking",
            "Isaac Newton",
            "Albert Einstein"
        ],
        "answer": 3,
        "hint": "Showed gravity is the curvature of spacetime.",
        "explanation": "Revolutionized modern cosmology.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "⚡ Modern Physics"
    },
    {
        "difficulty": "intermediate",
        "question": "Who formulated the three universal laws of motion and gravitation? (World Milestone #57)",
        "options": [
            "Galileo Galilei",
            "Johannes Kepler",
            "René Descartes",
            "Sir Isaac Newton"
        ],
        "answer": 3,
        "hint": "Published in 'Principia Mathematica' 1687.",
        "explanation": "Foundational framework of classical mechanics.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🍎 Classical Physics"
    },
    {
        "difficulty": "intermediate",
        "question": "What historic year did Apollo 11 land humans on the Moon? (World Milestone #58)",
        "options": [
            "1969",
            "1981",
            "1975",
            "1959"
        ],
        "answer": 0,
        "hint": "Neil Armstrong and Buzz Aldrin stepped on the lunar surface.",
        "explanation": "One small step for man, one giant leap for mankind.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🚀 Moon Landings"
    },
    {
        "difficulty": "intermediate",
        "question": "Who developed the first successful vaccine in history (for Smallpox in 1796)? (World Milestone #59)",
        "options": [
            "Edward Jenner",
            "Louis Pasteur",
            "Jonas Salk",
            "Alexander Fleming"
        ],
        "answer": 0,
        "hint": "Used cowpox virus to induce immunity.",
        "explanation": "Eradicated smallpox worldwide.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "💉 Immunology"
    },
    {
        "difficulty": "intermediate",
        "question": "Which ancient global university in Bihar was a renowned Buddhist center of learning from 5th to 12th century? (World Milestone #60)",
        "options": [
            "Vikramashila",
            "Taxila",
            "Nalanda University",
            "Vallabhi"
        ],
        "answer": 2,
        "hint": "Attracted scholars from China, Korea, and Persia.",
        "explanation": "Housed millions of sacred manuscripts in Patna region.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🏛️ Ancient Heritage"
    },
    {
        "difficulty": "intermediate",
        "question": "Who developed the movable-type mechanical printing press in Europe around 1440? (World Milestone #61)",
        "options": [
            "Isaac Newton",
            "Johannes Gutenberg",
            "Leonardo da Vinci",
            "Galileo"
        ],
        "answer": 1,
        "hint": "Sparked the rapid spread of literacy.",
        "explanation": "Gutenberg press launched the information revolution.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "🏛️ Historical Inventions"
    },
    {
        "difficulty": "intermediate",
        "question": "Who discovered penicillin in 1928, launching the antibiotic era of medicine? (World Milestone #62)",
        "options": [
            "Edward Jenner",
            "Alexander Fleming",
            "Louis Pasteur",
            "Robert Koch"
        ],
        "answer": 1,
        "hint": "Found Penicillium mold inhibiting bacteria.",
        "explanation": "Saved hundreds of millions of lives.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "💊 Medicine Pioneers"
    },
    {
        "difficulty": "intermediate",
        "question": "Who is the only scientist to win Nobel Prizes in two distinct scientific disciplines (Physics & Chemistry)? (World Milestone #63)",
        "options": [
            "Niels Bohr",
            "Albert Einstein",
            "Marie Curie",
            "Linus Pauling"
        ],
        "answer": 2,
        "hint": "Discovered Radium and Polonium.",
        "explanation": "Pioneered radioactivity research.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🏆 Nobel Laureates"
    },
    {
        "difficulty": "intermediate",
        "question": "Who created the World Wide Web in 1989 at CERN? (World Milestone #64)",
        "options": [
            "Tim Berners-Lee",
            "Vint Cerf",
            "Steve Jobs",
            "Bill Gates"
        ],
        "answer": 0,
        "hint": "Invented HTML, HTTP, and the first web browser.",
        "explanation": "Made the internet universally accessible.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🌐 Internet History"
    },
    {
        "difficulty": "intermediate",
        "question": "Who wrote the first computer algorithm in the 1840s for Babbage's Analytical Engine? (World Milestone #65)",
        "options": [
            "Charles Babbage",
            "Ada Lovelace",
            "Grace Hopper",
            "Alan Turing"
        ],
        "answer": 1,
        "hint": "Recognized as the world's first programmer.",
        "explanation": "Envisioned computers manipulating more than numbers.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "💻 Computing Pioneers"
    },
    {
        "difficulty": "intermediate",
        "question": "Which scientist developed the theory of General Relativity published in 1915? (World Milestone #66)",
        "options": [
            "Isaac Newton",
            "Albert Einstein",
            "Stephen Hawking",
            "Max Planck"
        ],
        "answer": 1,
        "hint": "Showed gravity is the curvature of spacetime.",
        "explanation": "Revolutionized modern cosmology.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "⚡ Modern Physics"
    },
    {
        "difficulty": "intermediate",
        "question": "Who formulated the three universal laws of motion and gravitation? (World Milestone #67)",
        "options": [
            "René Descartes",
            "Sir Isaac Newton",
            "Johannes Kepler",
            "Galileo Galilei"
        ],
        "answer": 1,
        "hint": "Published in 'Principia Mathematica' 1687.",
        "explanation": "Foundational framework of classical mechanics.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🍎 Classical Physics"
    },
    {
        "difficulty": "intermediate",
        "question": "What historic year did Apollo 11 land humans on the Moon? (World Milestone #68)",
        "options": [
            "1959",
            "1969",
            "1981",
            "1975"
        ],
        "answer": 1,
        "hint": "Neil Armstrong and Buzz Aldrin stepped on the lunar surface.",
        "explanation": "One small step for man, one giant leap for mankind.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "🚀 Moon Landings"
    },
    {
        "difficulty": "intermediate",
        "question": "Who developed the first successful vaccine in history (for Smallpox in 1796)? (World Milestone #69)",
        "options": [
            "Alexander Fleming",
            "Louis Pasteur",
            "Edward Jenner",
            "Jonas Salk"
        ],
        "answer": 2,
        "hint": "Used cowpox virus to induce immunity.",
        "explanation": "Eradicated smallpox worldwide.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "💉 Immunology"
    },
    {
        "difficulty": "intermediate",
        "question": "Which ancient global university in Bihar was a renowned Buddhist center of learning from 5th to 12th century? (World Milestone #70)",
        "options": [
            "Vikramashila",
            "Vallabhi",
            "Taxila",
            "Nalanda University"
        ],
        "answer": 3,
        "hint": "Attracted scholars from China, Korea, and Persia.",
        "explanation": "Housed millions of sacred manuscripts in Patna region.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🏛️ Ancient Heritage"
    },
    {
        "difficulty": "advanced",
        "question": "Who developed the movable-type mechanical printing press in Europe around 1440? (World Milestone #71)",
        "options": [
            "Galileo",
            "Leonardo da Vinci",
            "Johannes Gutenberg",
            "Isaac Newton"
        ],
        "answer": 2,
        "hint": "Sparked the rapid spread of literacy.",
        "explanation": "Gutenberg press launched the information revolution.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "🏛️ Historical Inventions"
    },
    {
        "difficulty": "advanced",
        "question": "Who discovered penicillin in 1928, launching the antibiotic era of medicine? (World Milestone #72)",
        "options": [
            "Edward Jenner",
            "Alexander Fleming",
            "Robert Koch",
            "Louis Pasteur"
        ],
        "answer": 1,
        "hint": "Found Penicillium mold inhibiting bacteria.",
        "explanation": "Saved hundreds of millions of lives.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "💊 Medicine Pioneers"
    },
    {
        "difficulty": "advanced",
        "question": "Who is the only scientist to win Nobel Prizes in two distinct scientific disciplines (Physics & Chemistry)? (World Milestone #73)",
        "options": [
            "Marie Curie",
            "Linus Pauling",
            "Albert Einstein",
            "Niels Bohr"
        ],
        "answer": 0,
        "hint": "Discovered Radium and Polonium.",
        "explanation": "Pioneered radioactivity research.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🏆 Nobel Laureates"
    },
    {
        "difficulty": "advanced",
        "question": "Who created the World Wide Web in 1989 at CERN? (World Milestone #74)",
        "options": [
            "Bill Gates",
            "Vint Cerf",
            "Steve Jobs",
            "Tim Berners-Lee"
        ],
        "answer": 3,
        "hint": "Invented HTML, HTTP, and the first web browser.",
        "explanation": "Made the internet universally accessible.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🌐 Internet History"
    },
    {
        "difficulty": "advanced",
        "question": "Who wrote the first computer algorithm in the 1840s for Babbage's Analytical Engine? (World Milestone #75)",
        "options": [
            "Grace Hopper",
            "Alan Turing",
            "Ada Lovelace",
            "Charles Babbage"
        ],
        "answer": 2,
        "hint": "Recognized as the world's first programmer.",
        "explanation": "Envisioned computers manipulating more than numbers.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "💻 Computing Pioneers"
    },
    {
        "difficulty": "advanced",
        "question": "Which scientist developed the theory of General Relativity published in 1915? (World Milestone #76)",
        "options": [
            "Stephen Hawking",
            "Albert Einstein",
            "Max Planck",
            "Isaac Newton"
        ],
        "answer": 1,
        "hint": "Showed gravity is the curvature of spacetime.",
        "explanation": "Revolutionized modern cosmology.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "⚡ Modern Physics"
    },
    {
        "difficulty": "advanced",
        "question": "Who formulated the three universal laws of motion and gravitation? (World Milestone #77)",
        "options": [
            "René Descartes",
            "Sir Isaac Newton",
            "Johannes Kepler",
            "Galileo Galilei"
        ],
        "answer": 1,
        "hint": "Published in 'Principia Mathematica' 1687.",
        "explanation": "Foundational framework of classical mechanics.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🍎 Classical Physics"
    },
    {
        "difficulty": "advanced",
        "question": "What historic year did Apollo 11 land humans on the Moon? (World Milestone #78)",
        "options": [
            "1969",
            "1959",
            "1975",
            "1981"
        ],
        "answer": 0,
        "hint": "Neil Armstrong and Buzz Aldrin stepped on the lunar surface.",
        "explanation": "One small step for man, one giant leap for mankind.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "🚀 Moon Landings"
    },
    {
        "difficulty": "advanced",
        "question": "Who developed the first successful vaccine in history (for Smallpox in 1796)? (World Milestone #79)",
        "options": [
            "Edward Jenner",
            "Louis Pasteur",
            "Alexander Fleming",
            "Jonas Salk"
        ],
        "answer": 0,
        "hint": "Used cowpox virus to induce immunity.",
        "explanation": "Eradicated smallpox worldwide.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "💉 Immunology"
    },
    {
        "difficulty": "advanced",
        "question": "Which ancient global university in Bihar was a renowned Buddhist center of learning from 5th to 12th century? (World Milestone #80)",
        "options": [
            "Vallabhi",
            "Taxila",
            "Vikramashila",
            "Nalanda University"
        ],
        "answer": 3,
        "hint": "Attracted scholars from China, Korea, and Persia.",
        "explanation": "Housed millions of sacred manuscripts in Patna region.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🏛️ Ancient Heritage"
    },
    {
        "difficulty": "advanced",
        "question": "Who developed the movable-type mechanical printing press in Europe around 1440? (World Milestone #81)",
        "options": [
            "Isaac Newton",
            "Leonardo da Vinci",
            "Johannes Gutenberg",
            "Galileo"
        ],
        "answer": 2,
        "hint": "Sparked the rapid spread of literacy.",
        "explanation": "Gutenberg press launched the information revolution.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "🏛️ Historical Inventions"
    },
    {
        "difficulty": "advanced",
        "question": "Who discovered penicillin in 1928, launching the antibiotic era of medicine? (World Milestone #82)",
        "options": [
            "Alexander Fleming",
            "Louis Pasteur",
            "Edward Jenner",
            "Robert Koch"
        ],
        "answer": 0,
        "hint": "Found Penicillium mold inhibiting bacteria.",
        "explanation": "Saved hundreds of millions of lives.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "💊 Medicine Pioneers"
    },
    {
        "difficulty": "advanced",
        "question": "Who is the only scientist to win Nobel Prizes in two distinct scientific disciplines (Physics & Chemistry)? (World Milestone #83)",
        "options": [
            "Albert Einstein",
            "Marie Curie",
            "Niels Bohr",
            "Linus Pauling"
        ],
        "answer": 1,
        "hint": "Discovered Radium and Polonium.",
        "explanation": "Pioneered radioactivity research.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🏆 Nobel Laureates"
    },
    {
        "difficulty": "advanced",
        "question": "Who created the World Wide Web in 1989 at CERN? (World Milestone #84)",
        "options": [
            "Vint Cerf",
            "Tim Berners-Lee",
            "Steve Jobs",
            "Bill Gates"
        ],
        "answer": 1,
        "hint": "Invented HTML, HTTP, and the first web browser.",
        "explanation": "Made the internet universally accessible.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🌐 Internet History"
    },
    {
        "difficulty": "advanced",
        "question": "Who wrote the first computer algorithm in the 1840s for Babbage's Analytical Engine? (World Milestone #85)",
        "options": [
            "Charles Babbage",
            "Alan Turing",
            "Grace Hopper",
            "Ada Lovelace"
        ],
        "answer": 3,
        "hint": "Recognized as the world's first programmer.",
        "explanation": "Envisioned computers manipulating more than numbers.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "💻 Computing Pioneers"
    },
    {
        "difficulty": "advanced",
        "question": "Which scientist developed the theory of General Relativity published in 1915? (World Milestone #86)",
        "options": [
            "Albert Einstein",
            "Stephen Hawking",
            "Isaac Newton",
            "Max Planck"
        ],
        "answer": 0,
        "hint": "Showed gravity is the curvature of spacetime.",
        "explanation": "Revolutionized modern cosmology.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "⚡ Modern Physics"
    },
    {
        "difficulty": "advanced",
        "question": "Who formulated the three universal laws of motion and gravitation? (World Milestone #87)",
        "options": [
            "Sir Isaac Newton",
            "René Descartes",
            "Galileo Galilei",
            "Johannes Kepler"
        ],
        "answer": 0,
        "hint": "Published in 'Principia Mathematica' 1687.",
        "explanation": "Foundational framework of classical mechanics.",
        "image": "/impact/dog-feed-3.jpeg",
        "topicBadge": "🍎 Classical Physics"
    },
    {
        "difficulty": "advanced",
        "question": "What historic year did Apollo 11 land humans on the Moon? (World Milestone #88)",
        "options": [
            "1975",
            "1959",
            "1981",
            "1969"
        ],
        "answer": 3,
        "hint": "Neil Armstrong and Buzz Aldrin stepped on the lunar surface.",
        "explanation": "One small step for man, one giant leap for mankind.",
        "image": "/impact/dog-feed-4.jpeg",
        "topicBadge": "🚀 Moon Landings"
    },
    {
        "difficulty": "advanced",
        "question": "Who developed the first successful vaccine in history (for Smallpox in 1796)? (World Milestone #89)",
        "options": [
            "Louis Pasteur",
            "Edward Jenner",
            "Alexander Fleming",
            "Jonas Salk"
        ],
        "answer": 1,
        "hint": "Used cowpox virus to induce immunity.",
        "explanation": "Eradicated smallpox worldwide.",
        "image": "/impact/dog-feed-5.jpeg",
        "topicBadge": "💉 Immunology"
    },
    {
        "difficulty": "advanced",
        "question": "Which ancient global university in Bihar was a renowned Buddhist center of learning from 5th to 12th century? (World Milestone #90)",
        "options": [
            "Vallabhi",
            "Nalanda University",
            "Taxila",
            "Vikramashila"
        ],
        "answer": 1,
        "hint": "Attracted scholars from China, Korea, and Persia.",
        "explanation": "Housed millions of sacred manuscripts in Patna region.",
        "image": "/impact/dog-feed-6.jpeg",
        "topicBadge": "🏛️ Ancient Heritage"
    },
    {
        "difficulty": "advanced",
        "question": "Who developed the movable-type mechanical printing press in Europe around 1440? (World Milestone #91)",
        "options": [
            "Galileo",
            "Isaac Newton",
            "Johannes Gutenberg",
            "Leonardo da Vinci"
        ],
        "answer": 2,
        "hint": "Sparked the rapid spread of literacy.",
        "explanation": "Gutenberg press launched the information revolution.",
        "image": "/impact/dog-feed-7.jpeg",
        "topicBadge": "🏛️ Historical Inventions"
    },
    {
        "difficulty": "advanced",
        "question": "Who discovered penicillin in 1928, launching the antibiotic era of medicine? (World Milestone #92)",
        "options": [
            "Robert Koch",
            "Edward Jenner",
            "Alexander Fleming",
            "Louis Pasteur"
        ],
        "answer": 2,
        "hint": "Found Penicillium mold inhibiting bacteria.",
        "explanation": "Saved hundreds of millions of lives.",
        "image": "/impact/dog-feed-8.jpeg",
        "topicBadge": "💊 Medicine Pioneers"
    },
    {
        "difficulty": "advanced",
        "question": "Who is the only scientist to win Nobel Prizes in two distinct scientific disciplines (Physics & Chemistry)? (World Milestone #93)",
        "options": [
            "Marie Curie",
            "Albert Einstein",
            "Niels Bohr",
            "Linus Pauling"
        ],
        "answer": 0,
        "hint": "Discovered Radium and Polonium.",
        "explanation": "Pioneered radioactivity research.",
        "image": "/impact/dog-feed-9.jpeg",
        "topicBadge": "🏆 Nobel Laureates"
    },
    {
        "difficulty": "advanced",
        "question": "Who created the World Wide Web in 1989 at CERN? (World Milestone #94)",
        "options": [
            "Bill Gates",
            "Vint Cerf",
            "Tim Berners-Lee",
            "Steve Jobs"
        ],
        "answer": 2,
        "hint": "Invented HTML, HTTP, and the first web browser.",
        "explanation": "Made the internet universally accessible.",
        "image": "/impact/dog-feed-10.jpeg",
        "topicBadge": "🌐 Internet History"
    },
    {
        "difficulty": "advanced",
        "question": "Who wrote the first computer algorithm in the 1840s for Babbage's Analytical Engine? (World Milestone #95)",
        "options": [
            "Alan Turing",
            "Grace Hopper",
            "Charles Babbage",
            "Ada Lovelace"
        ],
        "answer": 3,
        "hint": "Recognized as the world's first programmer.",
        "explanation": "Envisioned computers manipulating more than numbers.",
        "image": "/impact/dog-feed-11.jpeg",
        "topicBadge": "💻 Computing Pioneers"
    },
    {
        "difficulty": "advanced",
        "question": "Which scientist developed the theory of General Relativity published in 1915? (World Milestone #96)",
        "options": [
            "Max Planck",
            "Albert Einstein",
            "Stephen Hawking",
            "Isaac Newton"
        ],
        "answer": 1,
        "hint": "Showed gravity is the curvature of spacetime.",
        "explanation": "Revolutionized modern cosmology.",
        "image": "/impact/dog-feed-12.jpeg",
        "topicBadge": "⚡ Modern Physics"
    },
    {
        "difficulty": "advanced",
        "question": "Who formulated the three universal laws of motion and gravitation? (World Milestone #97)",
        "options": [
            "Sir Isaac Newton",
            "René Descartes",
            "Galileo Galilei",
            "Johannes Kepler"
        ],
        "answer": 0,
        "hint": "Published in 'Principia Mathematica' 1687.",
        "explanation": "Foundational framework of classical mechanics.",
        "image": "/impact/dog-feed-13.jpeg",
        "topicBadge": "🍎 Classical Physics"
    },
    {
        "difficulty": "advanced",
        "question": "What historic year did Apollo 11 land humans on the Moon? (World Milestone #98)",
        "options": [
            "1959",
            "1975",
            "1981",
            "1969"
        ],
        "answer": 3,
        "hint": "Neil Armstrong and Buzz Aldrin stepped on the lunar surface.",
        "explanation": "One small step for man, one giant leap for mankind.",
        "image": "/impact/dog-feed-14.jpeg",
        "topicBadge": "🚀 Moon Landings"
    },
    {
        "difficulty": "advanced",
        "question": "Who developed the first successful vaccine in history (for Smallpox in 1796)? (World Milestone #99)",
        "options": [
            "Louis Pasteur",
            "Edward Jenner",
            "Alexander Fleming",
            "Jonas Salk"
        ],
        "answer": 1,
        "hint": "Used cowpox virus to induce immunity.",
        "explanation": "Eradicated smallpox worldwide.",
        "image": "/impact/dog-feed-1.jpeg",
        "topicBadge": "💉 Immunology"
    },
    {
        "difficulty": "advanced",
        "question": "Which ancient global university in Bihar was a renowned Buddhist center of learning from 5th to 12th century? (World Milestone #100)",
        "options": [
            "Nalanda University",
            "Vallabhi",
            "Taxila",
            "Vikramashila"
        ],
        "answer": 0,
        "hint": "Attracted scholars from China, Korea, and Persia.",
        "explanation": "Housed millions of sacred manuscripts in Patna region.",
        "image": "/impact/dog-feed-2.jpeg",
        "topicBadge": "🏛️ Ancient Heritage"
    }
]
  },
};
