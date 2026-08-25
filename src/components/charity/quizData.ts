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
    description: "Learn fun wildlife facts, rescue habits, and animal empathy while donating real street animal food.",
    icon: "🐕",
    ageGroup: "Kids & All Ages",
    heroImage: "/quiz/animals_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "How do dogs sweat to regulate their body temperature?",
        options: ["Through their fur", "Through their paws and panting", "Through their ears", "Through their tail"],
        answer: 1,
        hint: "They have merocrine sweat glands on their paw pads and cool down via breath.",
        explanation: "Dogs regulate heat primarily through evaporation during panting and through sweat glands located in their paw pads.",
        image: "/impact/dog-feed-1.jpeg",
        topicBadge: "🐾 Animal Biology & Care"
      },
      {
        difficulty: 'beginner',
        question: "Which street animal is known as man's most loyal best friend?",
        options: ["Domestic & Street Dogs", "Raccoons", "Squirrels", "Pigeons"],
        answer: 0,
        hint: "They have lived alongside humans for over 15,000 years.",
        explanation: "Dogs are universally cherished for their unconditional loyalty, affection, and companionship.",
        image: "/impact/dog-feed-2.jpeg",
        topicBadge: "🐕 Companion Animal Care"
      },
      {
        difficulty: 'beginner',
        question: "What is the primary benefit of daily street feeding drives for stray animals?",
        options: ["Reduces hunger distress and prevents territorial aggression", "Makes dogs sleep all day", "Teaches them to hunt cars", "Changes their fur color"],
        answer: 0,
        hint: "Well-fed community animals are calm, friendly, and healthy.",
        explanation: "Consistent community feeding ensures street dogs receive essential carbohydrates, protein, and hydration, reducing malnutrition and territory conflicts by over 85%.",
        image: "/impact/dog-feed-3.jpeg",
        topicBadge: "🍲 Community Feeding Welfare"
      },
      {
        difficulty: 'beginner',
        question: "What is the recommended staple diet for nourishing street dogs during feeding drives?",
        options: ["Plain boiled rice, eggs, bone-free broth and dog food", "Spicy curries and sweets", "Raw onions and garlic", "Chocolates and milk candy"],
        answer: 0,
        hint: "Simple proteins, digestible carbohydrates, and clean water.",
        explanation: "Boiled rice paired with boiled eggs or gentle broth provides easily digestible energy and vital amino acids for stray dogs.",
        image: "/impact/dog-feed-4.jpeg",
        topicBadge: "🍚 Street Canine Nutrition"
      },
      {
        difficulty: 'intermediate',
        question: "How are dogs able to see remarkably well in low-light and nighttime conditions?",
        options: ["They possess a reflective layer called Tapetum Lucidum behind the retina", "They have built-in night vision lenses", "They only see in pure infrared heat", "Their eyes produce fluorescent light"],
        answer: 0,
        hint: "It reflects light back through the photoreceptor cells.",
        explanation: "The tapetum lucidum acts like a retroreflector behind the retina, multiplying available photons so dogs navigate dim streets effortlessly.",
        image: "/impact/dog-feed-5.jpeg",
        topicBadge: "👁️ Canine Optical Physiology"
      },
      {
        difficulty: 'intermediate',
        question: "What is the maximum auditory frequency range that canines can detect?",
        options: ["Up to 45,000 Hz to 65,000 Hz", "Up to 15,000 Hz", "Up to 5,000 Hz", "Only below 500 Hz"],
        answer: 0,
        hint: "Humans can only hear up to 20,000 Hz.",
        explanation: "Dogs can hear ultrasound frequencies up to 45 kHz–65 kHz, allowing them to hear distant whistles and quiet steps long before humans notice.",
        image: "/impact/dog-feed-6.jpeg",
        topicBadge: "🔊 Auditory Bio-Acoustics"
      },
      {
        difficulty: 'intermediate',
        question: "Which mammal is known to have the most powerful bite force relative to size?",
        options: ["Tasmanian Devil", "Hippopotamus", "Hyena", "Grizzly Bear"],
        answer: 0,
        hint: "A marsupial native to an Australian island state.",
        explanation: "The Tasmanian Devil possesses the strongest bite force relative to body mass of any living mammalian land carnivore.",
        image: "/impact/dog-feed-7.jpeg",
        topicBadge: "🐾 Mammalian Anatomy"
      },
      {
        difficulty: 'intermediate',
        question: "What does a dog wagging its tail predominantly to the RIGHT indicate according to neuroscience?",
        options: ["Positive, friendly emotions and approach motivation", "Fear and withdrawal", "Sleepiness", "Extreme anger"],
        answer: 0,
        hint: "The left hemisphere of the brain processes positive emotions and controls the right side of the body.",
        explanation: "Studies in animal behavioral neuroscience show dogs wag right for positive stimuli (like friendly humans) and left for threatening stimuli.",
        image: "/impact/dog-feed-8.jpeg",
        topicBadge: "🧠 Animal Cognitive Science"
      },
      {
        difficulty: 'intermediate',
        question: "Do dogs experience Rapid Eye Movement (REM) sleep and dream similar to humans?",
        options: ["Yes, their brainwave patterns show vivid dreaming and memory consolidation during REM", "No, dogs never enter REM sleep", "Only marine animals dream", "Dogs only dream during winter"],
        answer: 0,
        hint: "You may see their paws twitch and hear soft whimpers while sleeping.",
        explanation: "EEG recordings confirm dogs cycle through REM sleep, replaying memories of daily activities, scents, and bonding experiences.",
        image: "/impact/dog-feed-9.jpeg",
        topicBadge: "💤 Canine Sleep Neuroscience"
      },
      {
        difficulty: 'intermediate',
        question: "Why is setting up clean water bowls crucial for street animals during summer and dry spells?",
        options: ["Prevents fatal heatstroke and severe renal failure in street canines", "To wash their paws", "To attract migratory birds only", "It has no health effect"],
        answer: 0,
        hint: "Water is the single most vital element for thermal and metabolic survival.",
        explanation: "Dehydration is a leading cause of organ failure in summer. Placing freshwater earthen bowls saves hundreds of animal lives each week.",
        image: "/impact/dog-feed-10.jpeg",
        topicBadge: "💧 Hydration & Heat Relief"
      },
      {
        difficulty: 'advanced',
        question: "What is the scientifically proven, humane method endorsed by WHO for managing street dog populations?",
        options: ["Animal Birth Control (ABC) & Anti-Rabies Vaccination (ARV)", "Relocating dogs to forests", "Starving street animals", "Caging all dogs permanently"],
        answer: 0,
        hint: "Sterilization and vaccination stabilizes the population and creates herd immunity against rabies.",
        explanation: "The ABC/ARV program humanely stabilizes street dog populations while creating vaccinated buffer zones that eliminate rabies risk for communities.",
        image: "/impact/dog-feed-11.jpeg",
        topicBadge: "🛡️ Public Health & ABC Welfare"
      },
      {
        difficulty: 'advanced',
        question: "Why is the compound Theobromine (found in chocolate) dangerously toxic to canines?",
        options: ["Dogs metabolize theobromine extremely slowly, leading to cardiac arrhythmia and neurotoxicity", "It turns their teeth yellow", "It reduces their fur density", "It makes them temporarily colorblind"],
        answer: 0,
        hint: "Their hepatic enzymes cannot break down methylxanthines efficiently.",
        explanation: "Theobromine stimulates the central nervous system and cardiovascular system excessively in dogs, which can lead to fatal seizures if ingested.",
        image: "/impact/dog-feed-12.jpeg",
        topicBadge: "🧪 Veterinary Pharmacology"
      },
      {
        difficulty: 'intermediate',
        question: "Why should you avoid feeding cooked chicken bones to stray dogs?",
        options: ["They are too cold", "Cooked bones can splinter and puncture their stomach", "Dogs dislike the smell", "They contain too much water"],
        answer: 1,
        hint: "Cooking makes bird bones brittle and sharp.",
        explanation: "Cooked bones easily splinter into needle-sharp shards that can cause severe internal throat and stomach punctures.",
        image: "/impact/dog-feed-13.jpeg",
        topicBadge: "🍖 Street Feeding Safety"
      },
      {
        difficulty: 'advanced',
        question: "Which sensory ability in dogs is estimated to be 10,000 to 100,000 times more acute than in humans?",
        options: ["Taste", "Sense of Smell (Olfaction)", "Color Vision", "Depth Perception"],
        answer: 1,
        hint: "Dogs possess over 300 million olfactory receptors in their noses.",
        explanation: "A dog's sense of smell is so extraordinarily powerful they can detect parts-per-trillion chemical traces across miles.",
        image: "/impact/dog-feed-14.jpeg",
        topicBadge: "🐕 Canine Sensory Neuroscience"
      }
    ]
  },

  math: {
    title: "🧮 Math Wizards & Fast Arithmetic",
    description: "Sharpen mental calculation, logic puzzles, and algebra tricks. Perfect for kids, students, and puzzle lovers.",
    icon: "⚡",
    ageGroup: "Students & Kids",
    heroImage: "/quiz/math_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "What is 15 × 8?",
        options: ["110", "120", "130", "125"],
        answer: 1,
        hint: "10 × 8 = 80, 5 × 8 = 40. 80 + 40 = ?",
        explanation: "15 multiplied by 8 equals 120."
      },
      {
        difficulty: 'beginner',
        question: "What is the square root of 144?",
        options: ["11", "12", "13", "14"],
        answer: 1,
        hint: "12 × 12 = ?",
        explanation: "12 × 12 = 144."
      },
      {
        difficulty: 'beginner',
        question: "How many sides does a regular Hexagon have?",
        options: ["5", "6", "7", "8"],
        answer: 1,
        hint: "'Hexa' means six in Greek.",
        explanation: "A hexagon is a six-sided geometrical polygon."
      },
      {
        difficulty: 'intermediate',
        question: "If a shirt costs $80 and is discounted by 25%, what is the final price?",
        options: ["$55", "$60", "$65", "$70"],
        answer: 1,
        hint: "25% of 80 is 1/4 of 80 = 20. 80 - 20 = ?",
        explanation: "80 - (0.25 × 80) = 80 - 20 = $60."
      },
      {
        difficulty: 'intermediate',
        question: "What is the smallest positive prime number?",
        options: ["0", "1", "2", "3"],
        answer: 2,
        hint: "It is also the only even prime number.",
        explanation: "2 is the smallest prime number and the only even prime."
      },
      {
        difficulty: 'advanced',
        question: "What is the value of 2^7 (2 to the power of 7)?",
        options: ["64", "128", "256", "512"],
        answer: 1,
        hint: "2^6 = 64, double it.",
        explanation: "2 × 2 × 2 × 2 × 2 × 2 × 2 = 128."
      }
    ]
  },

  space: {
    title: "🚀 Space Exploration & Astronomy",
    description: "Explore planets, constellations, black holes, and space missions to unlock cosmic karma rice.",
    icon: "🪐",
    ageGroup: "Curious Minds",
    heroImage: "/quiz/space_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "Which planet in our solar system is known as the 'Red Planet'?",
        options: ["Venus", "Mars", "Jupiter", "Mercury"],
        answer: 1,
        hint: "Its rusty reddish color is caused by iron oxide on its surface.",
        explanation: "Mars is called the Red Planet due to the prevalence of iron oxide (rust) across its dusty surface."
      },
      {
        difficulty: 'beginner',
        question: "What is the closest star to Earth?",
        options: ["Alpha Centauri", "Sirius", "The Sun", "Betelgeuse"],
        answer: 2,
        hint: "It lights up our daytime sky!",
        explanation: "The Sun is the star at the center of the Solar System, approximately 93 million miles from Earth."
      },
      {
        difficulty: 'intermediate',
        question: "Which planet has the most extensive and visible ring system in the solar system?",
        options: ["Uranus", "Neptune", "Saturn", "Jupiter"],
        answer: 2,
        hint: "The 6th planet from the Sun.",
        explanation: "Saturn features the most spectacular and prominent ring system made of billions of ice and rock particles."
      },
      {
        difficulty: 'intermediate',
        question: "How long does it take for light from the Sun to reach Earth?",
        options: ["Instantaneous", "About 8 minutes and 20 seconds", "1 hour", "24 hours"],
        answer: 1,
        hint: "Light travels at 300,000 km/s across 150 million kilometers.",
        explanation: "Sunlight takes approximately 8 minutes and 20 seconds (500 seconds) to travel across the distance to Earth."
      },
      {
        difficulty: 'advanced',
        question: "What is the boundary around a black hole beyond which nothing, not even light, can escape?",
        options: ["Singularity", "Photon Sphere", "Event Horizon", "Accretion Disk"],
        answer: 2,
        hint: "The point of no return.",
        explanation: "The Event Horizon marks the outer gravitational boundary of a black hole where escape velocity equals the speed of light."
      }
    ]
  },

  vocab: {
    title: "📚 English Vocabulary & Word Master",
    description: "Boost your language fluency, SAT/GRE words, idioms, and synonyms while supporting rescue animals.",
    icon: "📖",
    ageGroup: "Students & Writers",
    heroImage: "/quiz/vocab_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "What is the synonym of 'Benevolent'?",
        options: ["Cruel", "Generous & Kind", "Lazy", "Timid"],
        answer: 1,
        hint: "'Bene' means good or well.",
        explanation: "Benevolent means well-meaning, generous, charitable, and kind."
      },
      {
        difficulty: 'beginner',
        question: "What does the idiom 'Piece of Cake' mean?",
        options: ["A sweet dessert", "Something very easy", "A difficult puzzle", "An expensive meal"],
        answer: 1,
        hint: "Used when a task requires little to no effort.",
        explanation: "'A piece of cake' is an informal English idiom meaning something is simple and straightforward to accomplish."
      },
      {
        difficulty: 'intermediate',
        question: "Choose the word that means 'lasting for only a very short time':",
        options: ["Permanent", "Ephemeral", "Infinite", "Perpetual"],
        answer: 1,
        hint: "Like morning dew or a fleeting rainbow.",
        explanation: "Ephemeral means lasting for a very brief period of time; transitory or fleeting."
      },
      {
        difficulty: 'intermediate',
        question: "What is the antonym of 'Arrogant'?",
        options: ["Humble", "Proud", "Boastful", "Haughty"],
        answer: 0,
        hint: "Modest and respectful.",
        explanation: "Humble (modest, respectful) is the exact opposite of arrogant (overbearingly proud)."
      },
      {
        difficulty: 'advanced',
        question: "What does the word 'Ubiquitous' mean?",
        options: ["Found everywhere", "Extremely rare", "Dangerous", "Ancient"],
        answer: 0,
        hint: "Smartphones in modern society are described with this term.",
        explanation: "Ubiquitous means present, appearing, or found everywhere simultaneously."
      }
    ]
  },

  geography: {
    title: "🌍 World Geography & Capitals",
    description: "Travel the world, master countries, continents, mountain ranges, and ocean wonders.",
    icon: "🗺️",
    ageGroup: "Students & Explorers",
    heroImage: "/quiz/geography_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "What is the capital city of Japan?",
        options: ["Kyoto", "Tokyo", "Osaka", "Hiroshima"],
        answer: 1,
        hint: "The world's most populous metropolitan area.",
        explanation: "Tokyo is the bustling capital city and economic hub of Japan."
      },
      {
        difficulty: 'beginner',
        question: "Which is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        answer: 2,
        hint: "It covers more than 30% of the Earth's total surface.",
        explanation: "The Pacific Ocean is by far the largest and deepest ocean basin on Earth."
      },
      {
        difficulty: 'intermediate',
        question: "Which is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        answer: 1,
        hint: "Flows through northeastern Africa over 6,650 kilometers.",
        explanation: "The Nile River in Africa is traditionally recognized as the longest river in the world."
      },
      {
        difficulty: 'intermediate',
        question: "In which mountain range is Mount Everest located?",
        options: ["Andes", "Alps", "Himalayas", "Rockies"],
        answer: 2,
        hint: "Spans across Nepal, India, Bhutan, and China.",
        explanation: "Mount Everest (8,848m) is situated in the Mahalangur Himal sub-range of the Himalayas."
      },
      {
        difficulty: 'advanced',
        question: "Which country has the most natural lakes in the world?",
        options: ["Canada", "Russia", "United States", "Finland"],
        answer: 0,
        hint: "Has over 879,000 lakes, more than the rest of the world combined.",
        explanation: "Canada contains more than 60% of all the natural lakes on Earth."
      }
    ]
  },

  science: {
    title: "🔬 Science & Biology Wonders",
    description: "Unravel genetics, physics, chemistry, and environmental wonders through gamified learning.",
    icon: "🧪",
    ageGroup: "Curious Students",
    heroImage: "/quiz/science_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "What gas do green plants absorb from the air during photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide (CO2)", "Nitrogen", "Helium"],
        answer: 1,
        hint: "Humans exhale it, plants absorb it to make food.",
        explanation: "Plants absorb carbon dioxide and water to produce glucose and release oxygen."
      },
      {
        difficulty: 'beginner',
        question: "What is the chemical formula for pure water?",
        options: ["CO2", "H2O", "NaCl", "O2"],
        answer: 1,
        hint: "Two hydrogen atoms bound to one oxygen atom.",
        explanation: "H2O is the universal chemical formula for water."
      },
      {
        difficulty: 'intermediate',
        question: "What is the powerhouse of the biological eukaryotic cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Apparatus"],
        answer: 2,
        hint: "Generates most of the chemical energy needed to power the cell (ATP).",
        explanation: "Mitochondria generate adenosine triphosphate (ATP), the primary energy currency of cells."
      },
      {
        difficulty: 'intermediate',
        question: "Which fundamental force keeps planets orbiting around the Sun?",
        options: ["Electromagnetic Force", "Gravity", "Strong Nuclear Force", "Centrifugal Force"],
        answer: 1,
        hint: "Described by Isaac Newton and Albert Einstein.",
        explanation: "Gravity is the attractive fundamental force exerted by mass that holds astronomical bodies in orbit."
      },
      {
        difficulty: 'advanced',
        question: "What is the hardest naturally occurring mineral on Earth?",
        options: ["Quartz", "Topaz", "Diamond", "Corundum"],
        answer: 2,
        hint: "Rated 10 on the Mohs hardness scale.",
        explanation: "Diamond, composed of crystalline carbon, is the hardest naturally occurring substance on Earth."
      }
    ]
  },

  gk: {
    title: "💡 Inventions & General Knowledge",
    description: "Test historical breakthroughs, world records, and great discoveries of human civilization.",
    icon: "🏆",
    ageGroup: "All Ages",
    heroImage: "/quiz/gk_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "Who is credited with inventing the modern telephone in 1876?",
        options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
        answer: 1,
        hint: "His famous first words were: 'Mr. Watson, come here, I want to see you.'",
        explanation: "Alexander Graham Bell was awarded the first US patent for the telephone in March 1876."
      },
      {
        difficulty: 'beginner',
        question: "How many continents are there on planet Earth?",
        options: ["5", "6", "7", "8"],
        answer: 2,
        hint: "Asia, Africa, North America, South America, Antarctica, Europe, Australia.",
        explanation: "There are 7 recognized geographic continents on Earth."
      },
      {
        difficulty: 'intermediate',
        question: "Who discovered penicillin, the first modern antibiotic, in 1928?",
        options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Edward Jenner"],
        answer: 1,
        hint: "Discovered from a mold culture contaminating a petri dish.",
        explanation: "Sir Alexander Fleming discovered penicillin produced by Penicillium notatum mold."
      },
      {
        difficulty: 'intermediate',
        question: "Which ancient civilization constructed the Great Pyramids of Giza?",
        options: ["Ancient Greeks", "Romans", "Ancient Egyptians", "Mayans"],
        answer: 2,
        hint: "Located along the banks of the Nile river.",
        explanation: "The Great Pyramids were constructed by the Ancient Egyptians during the Old Kingdom era."
      },
      {
        difficulty: 'advanced',
        question: "In what year did the Apollo 11 mission land the first humans on the Moon?",
        options: ["1965", "1969", "1972", "1975"],
        answer: 1,
        hint: "Neil Armstrong took 'one small step for man' in this landmark year.",
        explanation: "Apollo 11 touched down on the Moon on July 20, 1969."
      }
    ]
  },

  cybersecurity: {
    title: "🛡️ Cybersecurity & Purple Team",
    description: "Crack offensive & defensive cyber trivia to fund real street animal meals and secure the digital frontier.",
    icon: "💻",
    ageGroup: "Tech & Adults",
    heroImage: "/quiz/cybersecurity_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "What does 'EDR' stand for in enterprise security operations?",
        options: ["Endpoint Detection and Response", "External Data Recovery", "Encrypted Directory Route", "Entity Defense Registry"],
        answer: 0,
        hint: "It focuses on real-time behavior monitoring at the device level.",
        explanation: "EDR (Endpoint Detection and Response) provides continuous endpoint monitoring and telemetry response."
      },
      {
        difficulty: 'beginner',
        question: "Which port is standard for encrypted web traffic (HTTPS)?",
        options: ["Port 80", "Port 443", "Port 8080", "Port 22"],
        answer: 1,
        hint: "Port 80 is unencrypted HTTP; Port 443 is secure SSL/TLS.",
        explanation: "TCP Port 443 is universally designated for SSL/TLS encrypted HTTPS traffic."
      },
      {
        difficulty: 'beginner',
        question: "What is a 'Zero-Day' vulnerability?",
        options: ["A bug that takes zero days to patch", "A flaw with 0 known exploits", "A vulnerability unknown to the vendor with no official patch", "A flaw that only works at midnight"],
        answer: 2,
        hint: "The vendor has had 'zero days' to fix it before public discovery.",
        explanation: "Zero-day vulnerabilities are software security holes known to attackers before the vendor has released a patch."
      },
      {
        difficulty: 'intermediate',
        question: "In Active Directory security, what is 'Kerberoasting' primarily targeting?",
        options: ["Domain Controller root certificates", "Service Principal Names (SPN) user accounts", "DNS server records", "Local Administrator passwords"],
        answer: 1,
        hint: "Attackers request TGS service tickets for user accounts with SPNs to crack offline.",
        explanation: "Kerberoasting abuses Kerberos ticket granting service (TGS) requests to crack service account passwords offline."
      },
      {
        difficulty: 'intermediate',
        question: "Which security model operates on the principle 'Never Trust, Always Verify'?",
        options: ["Perimeter Defense", "Zero Trust Architecture", "Defense in Depth", "Open Authentication"],
        answer: 1,
        hint: "It assumes breaches are inevitable and validates all requests continuously.",
        explanation: "Zero Trust Architecture (ZTA) requires strict identity and posture validation for every resource access."
      },
      {
        difficulty: 'advanced',
        question: "Which memory safety mitigation randomizes stack, heap, and library base addresses in memory?",
        options: ["DEP (Data Execution Prevention)", "ASLR (Address Space Layout Randomization)", "Stack Canaries", "Control Flow Guard (CFG)"],
        answer: 1,
        hint: "It prevents attackers from predicting target function offsets in buffer overflows.",
        explanation: "ASLR randomizes memory positions of executable binaries, stack, heap, and libraries to prevent reliable ROP/shellcode execution."
      }
    ]
  }
};
