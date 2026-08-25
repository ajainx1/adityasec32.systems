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
        question: "How do dogs primarily regulate their body temperature in warm weather?",
        options: ["Through panting and sweat glands in paw pads", "Through their thick fur coat", "Through their ears", "Through their tail movements"],
        answer: 0,
        hint: "They have merocrine sweat glands on their paw pads and cool down via moisture evaporation.",
        explanation: "Dogs regulate heat primarily through evaporation during panting and sweat glands located in their paw pads.",
        image: "/impact/dog-feed-1.jpeg",
        topicBadge: "🐾 Animal Biology"
      },
      {
        difficulty: 'beginner',
        question: "Which community animal is universally celebrated as man's most loyal companion?",
        options: ["Domestic & Street Dogs", "Raccoons", "Squirrels", "Pigeons"],
        answer: 0,
        hint: "They have lived and evolved alongside humans for over 15,000 years.",
        explanation: "Dogs are recognized worldwide for their unconditional empathy, companionship, and guarding devotion.",
        image: "/impact/dog-feed-2.jpeg",
        topicBadge: "🐕 Companion Welfare"
      },
      {
        difficulty: 'beginner',
        question: "What is the primary benefit of consistent daily street feeding drives for community animals?",
        options: ["Reduces hunger distress and prevents territorial aggression", "Makes dogs sleep all day", "Teaches dogs to chase vehicles", "Alters their coat color"],
        answer: 0,
        hint: "Well-fed community animals are calm, friendly, and significantly healthier.",
        explanation: "Consistent community feeding ensures street dogs receive vital carbs and protein, reducing hunger conflicts by over 85%.",
        image: "/impact/dog-feed-3.jpeg",
        topicBadge: "🍲 Community Feeding"
      },
      {
        difficulty: 'beginner',
        question: "What is the recommended staple diet for nourishing street dogs during community feeding drives in India?",
        options: ["Boiled rice, boiled eggs, bone-free broth and dry kibble", "Spicy curries and sweets", "Raw onions, chocolate and garlic", "Milk candy and pastries"],
        answer: 0,
        hint: "Simple proteins, digestible carbohydrates, and clean water.",
        explanation: "Boiled rice with boiled eggs or gentle broth provides easily digestible energy and amino acids for stray animals.",
        image: "/impact/dog-feed-4.jpeg",
        topicBadge: "🍚 Street Nutrition"
      },
      {
        difficulty: 'beginner',
        question: "Why should chocolate and cocoa products never be fed to dogs?",
        options: ["They contain theobromine which is toxic to canine metabolism", "Chocolate is too expensive", "It makes dogs run too fast", "It turns their fur brown"],
        answer: 0,
        hint: "Canines cannot metabolize this alkaloid compound safely.",
        explanation: "Theobromine in chocolate causes cardiac stimulation and central nervous system toxicity in dogs.",
        image: "/impact/dog-feed-5.jpeg",
        topicBadge: "⚠️ Veterinary Care"
      },
      {
        difficulty: 'beginner',
        question: "How many teeth does an adult domestic dog typically possess?",
        options: ["42 permanent teeth", "32 teeth", "28 teeth", "50 teeth"],
        answer: 0,
        hint: "Adult humans have 32, but dogs have 10 more.",
        explanation: "Adult dogs have 42 permanent teeth designed for shearing, gripping, and grinding food.",
        image: "/impact/dog-feed-6.jpeg",
        topicBadge: "🦷 Canine Anatomy"
      },
      {
        difficulty: 'beginner',
        question: "Which sense is known to be a dog's most powerful sensory superpower?",
        options: ["Sense of Smell (Olfaction)", "Color Vision", "Taste Sensitivity", "Thermal Detection"],
        answer: 0,
        hint: "They have up to 300 million olfactory receptors in their noses.",
        explanation: "A dog's sense of smell is roughly 10,000 to 100,000 times more acute than that of an average human.",
        image: "/impact/dog-feed-7.jpeg",
        topicBadge: "👃 Sensory Biology"
      },
      {
        difficulty: 'intermediate',
        question: "How are dogs able to see remarkably well in low-light and nighttime conditions?",
        options: ["They possess a reflective layer called Tapetum Lucidum behind the retina", "They have built-in night vision lenses", "They only see in infrared heat", "Their eyes emit glow in the dark"],
        answer: 0,
        hint: "It reflects light back through the photoreceptor cells.",
        explanation: "The tapetum lucidum acts like a retroreflector behind the retina, multiplying available photons so dogs navigate dim streets effortlessly.",
        image: "/impact/dog-feed-8.jpeg",
        topicBadge: "👁️ Canine Optics"
      },
      {
        difficulty: 'intermediate',
        question: "What is the maximum auditory frequency range that canines can detect?",
        options: ["Up to 45,000 Hz to 65,000 Hz", "Up to 15,000 Hz", "Up to 5,000 Hz", "Only below 500 Hz"],
        answer: 0,
        hint: "Humans can only hear up to 20,000 Hz.",
        explanation: "Dogs can hear ultrasound frequencies up to 45 kHz–65 kHz, allowing them to hear distant whistles and quiet steps.",
        image: "/impact/dog-feed-9.jpeg",
        topicBadge: "🔊 Bio-Acoustics"
      },
      {
        difficulty: 'intermediate',
        question: "What does a dog wagging its tail predominantly to the RIGHT indicate according to neuroscience?",
        options: ["Positive, friendly emotions and approach motivation", "Fear and withdrawal", "Sleepiness and fatigue", "Extreme territory aggression"],
        answer: 0,
        hint: "The left hemisphere of the brain processes positive emotions and controls the right side of the body.",
        explanation: "Studies in animal behavioral neuroscience show dogs wag right for positive stimuli (like friendly humans) and left for threatening stimuli.",
        image: "/impact/dog-feed-10.jpeg",
        topicBadge: "🧠 Animal Cognition"
      },
      {
        difficulty: 'intermediate',
        question: "Do dogs experience Rapid Eye Movement (REM) sleep and dream similar to humans?",
        options: ["Yes, their brainwave patterns show vivid dreaming and memory consolidation during REM", "No, dogs never enter REM sleep", "Only dolphins dream", "Dogs only dream during winter"],
        answer: 0,
        hint: "You may see their paws twitch and hear soft whimpers while sleeping.",
        explanation: "EEG recordings confirm dogs cycle through REM sleep, replaying memories of daily activities, scents, and bonding experiences.",
        image: "/impact/dog-feed-11.jpeg",
        topicBadge: "💤 Sleep Science"
      },
      {
        difficulty: 'intermediate',
        question: "Which unique organ located in the roof of a dog's mouth analyzes pheromones and chemical signals?",
        options: ["Jacobson's Organ (Vomeronasal Organ)", "Thyroid Gland", "Parotid Gland", "Lachrymal Gland"],
        answer: 0,
        hint: "It helps animals interpret scents left by other animals.",
        explanation: "The vomeronasal organ detects chemical cues and pheromones, allowing street dogs to understand social hierarchies.",
        image: "/impact/dog-feed-12.jpeg",
        topicBadge: "🧪 Chemical Olfaction"
      },
      {
        difficulty: 'advanced',
        question: "What is the primary objective of the Animal Birth Control (ABC) and Anti-Rabies Vaccination (ARV) rules in India?",
        options: ["Humane sterilization, vaccination, and return of street dogs to their native territory", "Relocating dogs to forests", "Caging animals permanently", "Banning pet ownership"],
        answer: 0,
        hint: "Maintains a stable, rabies-free, and vaccinated community canine population.",
        explanation: "The ABC program humanely controls population growth while ensuring community dogs are vaccinated against rabies and returned safely.",
        image: "/impact/dog-feed-13.jpeg",
        topicBadge: "📜 Animal Welfare Law"
      },
      {
        difficulty: 'advanced',
        question: "Which essential nutrient is critical for puppies and injured dogs to rebuild muscle and tissue?",
        options: ["High-quality digestible protein and amino acids", "Pure sugar syrup", "Excessive fat oil", "Salt supplements"],
        answer: 0,
        hint: "Eggs, meat broth, and protein kibble provide the essential building blocks.",
        explanation: "Proteins supply amino acids necessary for cellular repair, wound healing, and strong immune antibody production.",
        image: "/impact/dog-feed-14.jpeg",
        topicBadge: "🥩 Recovery Nutrition"
      },
      {
        difficulty: 'advanced',
        question: "How should an open abrasion or minor puncture on a street dog be treated during first aid?",
        options: ["Flush with saline, apply povidone-iodine (Betadine) and fly-repellent ointment", "Wash with hot soapy bleach", "Cover with airtight plastic tape", "Leave open to mud"],
        answer: 0,
        hint: "Gentle antiseptic cleansing prevents bacterial colonization and fly-strike (maggot) infestation.",
        explanation: "Flushing wounds and applying Betadine with fly-repellent cream stops infection and promotes rapid granulation tissue formation.",
        image: "/impact/dog-feed-1.jpeg",
        topicBadge: "🩹 Street First-Aid"
      }
    ]
  },
  cybersecurity: {
    title: "🛡️ Cybersecurity & Purple Teaming",
    description: "Master network security, enterprise firewalls, ethical hacking, and threat hunting.",
    icon: "🛡️",
    ageGroup: "Intermediate to Expert",
    heroImage: "/quiz/cyber_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "What is the fundamental security concept of the 'Principle of Least Privilege' (PoLP)?",
        options: ["Granting users and processes only the bare minimum permissions needed to perform their job", "Granting full Domain Admin access to everyone", "Disabling multi-factor authentication", "Blocking all outbound web traffic permanently"],
        answer: 0,
        hint: "Limiting permissions reduces the blast radius if an account is compromised.",
        explanation: "Least privilege minimizes the potential damage from compromised credentials by granting only essential privileges.",
        image: "/impact/dog-feed-2.jpeg",
        topicBadge: "🔐 Access Control"
      },
      {
        difficulty: 'beginner',
        question: "Which protocol provides encrypted, authenticated remote terminal access over TCP port 22?",
        options: ["Secure Shell (SSH)", "Telnet", "FTP", "HTTP"],
        answer: 0,
        hint: "Replaced unencrypted Telnet in modern infrastructure.",
        explanation: "SSH uses public-key cryptography to authenticate and encrypt terminal communications.",
        image: "/impact/dog-feed-3.jpeg",
        topicBadge: "🔒 Secure Protocols"
      },
      {
        difficulty: 'beginner',
        question: "What does the 'C-I-A Triad' stand for in information security?",
        options: ["Confidentiality, Integrity, and Availability", "Control, Intelligence, and Authentication", "Cyber, Internet, and Automation", "Cryptography, Inspection, and Access"],
        answer: 0,
        hint: "The three core pillars of data protection.",
        explanation: "Confidentiality ensures privacy, Integrity ensures data accuracy, and Availability ensures authorized access.",
        image: "/impact/dog-feed-4.jpeg",
        topicBadge: "🛡️ Security Fundamentals"
      },
      {
        difficulty: 'beginner',
        question: "What is the primary function of Multi-Factor Authentication (MFA)?",
        options: ["Requiring two or more distinct verification factors before granting access", "Encrypting the entire hard drive", "Speeding up internet browsing", "Generating random passwords automatically"],
        answer: 0,
        hint: "Something you know, something you have, and something you are.",
        explanation: "MFA blocks over 99% of automated credential stuffing attacks by requiring multiple authentication proofs.",
        image: "/impact/dog-feed-5.jpeg",
        topicBadge: "🔑 Authentication"
      },
      {
        difficulty: 'intermediate',
        question: "In enterprise firewall architecture, what does 'Default-Deny' policy mean?",
        options: ["All traffic is blocked by default unless explicitly permitted by an authorized rule", "All inbound traffic is allowed freely", "Firewalls only check source IP addresses", "Traffic is analyzed only once per week"],
        answer: 0,
        hint: "Zero Trust foundational rule at the perimeter.",
        explanation: "Default-deny ensures that unapproved network flows cannot traverse network segments without explicit authorization.",
        image: "/impact/dog-feed-6.jpeg",
        topicBadge: "🧱 Firewall Architecture"
      },
      {
        difficulty: 'intermediate',
        question: "What Active Directory attack technique requests service tickets (TGS) to crack service account passwords offline?",
        options: ["Kerberoasting", "Pass-the-Hash", "DCSync", "AS-REP Roasting"],
        answer: 0,
        hint: "Targets accounts configured with Service Principal Names (SPNs).",
        explanation: "Kerberoasting exploits Kerberos TGS ticket requests to extract hashes of SPN accounts for offline brute-forcing.",
        image: "/impact/dog-feed-7.jpeg",
        topicBadge: "⚔️ Active Directory Exploitation"
      },
      {
        difficulty: 'intermediate',
        question: "Which enterprise SIEM component collects, normalizes, and correlates security logs from distributed servers?",
        options: ["Wazuh / Splunk Correlation Engine", "Network Interface Card", "DHCP Server", "BIOS Chip"],
        answer: 0,
        hint: "Analyzes telemetry across endpoints to detect anomalous indicators of compromise (IoCs).",
        explanation: "SIEM platforms correlate events in real time to generate alerts for suspicious lateral movement and privilege escalation.",
        image: "/impact/dog-feed-8.jpeg",
        topicBadge: "📡 SIEM & SOC"
      },
      {
        difficulty: 'advanced',
        question: "What Active Directory replication protocol privilege is exploited by attackers during a DCSync attack?",
        options: ["DS-Replication-Get-Changes-All (Replicating Directory Changes)", "Domain Join Permission", "Local Administrator Access", "Remote Desktop Access"],
        answer: 0,
        hint: "Mimics a Domain Controller using DRSUAPI to pull KRBTGT password hashes.",
        explanation: "DCSync impersonates a Domain Controller to request password data from legitimate DCs via DRSUAPI replication calls.",
        image: "/impact/dog-feed-9.jpeg",
        topicBadge: "👑 Red Teaming Elite"
      },
      {
        difficulty: 'advanced',
        question: "Which cryptographic algorithm is widely used for modern asymmetric key exchange over the internet?",
        options: ["Elliptic Curve Diffie-Hellman (ECDH)", "MD5 Hash", "DES Cipher", "ROT13"],
        answer: 0,
        hint: "Provides forward secrecy with compact key lengths.",
        explanation: "ECDH allows two parties to establish a shared secret over an insecure channel using elliptic curve mathematics.",
        image: "/impact/dog-feed-10.jpeg",
        topicBadge: "🔐 Applied Cryptography"
      }
    ]
  },
  space: {
    title: "🚀 Astronomy & Space Exploration",
    description: "Explore the cosmos, black holes, NASA rovers, and interstellar physics.",
    icon: "🚀",
    ageGroup: "All Ages",
    heroImage: "/quiz/space_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "Which planet in our Solar System is famously known as the 'Red Planet'?",
        options: ["Mars", "Venus", "Jupiter", "Mercury"],
        answer: 0,
        hint: "Its surface is covered in iron oxide (rust) dust.",
        explanation: "Mars appears reddish due to abundant iron oxide minerals across its surface rocks and regolith.",
        image: "/impact/dog-feed-11.jpeg",
        topicBadge: "🪐 Planetary Science"
      },
      {
        difficulty: 'beginner',
        question: "What is the name of our home spiral galaxy containing over 100 billion stars?",
        options: ["Milky Way Galaxy", "Andromeda Galaxy", "Triangulum Galaxy", "Whirlpool Galaxy"],
        answer: 0,
        hint: "Named after the dim milky band of starlight visible in dark night skies.",
        explanation: "The Milky Way is a barred spiral galaxy roughly 100,000 light-years in diameter.",
        image: "/impact/dog-feed-12.jpeg",
        topicBadge: "🌌 Galactic Astronomy"
      },
      {
        difficulty: 'beginner',
        question: "How long does it take for sunlight to travel across space and reach planet Earth?",
        options: ["Approximately 8 minutes and 20 seconds", "8 seconds", "8 hours", "Instantly (0 seconds)"],
        answer: 0,
        hint: "The Earth is roughly 150 million kilometers away from the Sun.",
        explanation: "Light traveling at 300,000 km/s takes ~499 seconds (8 minutes 19 seconds) to traverse 1 Astronomical Unit.",
        image: "/impact/dog-feed-13.jpeg",
        topicBadge: "☀️ Solar Physics"
      },
      {
        difficulty: 'intermediate',
        question: "What is the boundary surrounding a black hole beyond which nothing, not even light, can escape?",
        options: ["Event Horizon", "Ergosphere", "Photon Sphere", "Accretion Disk"],
        answer: 0,
        hint: "The mathematical point of no return where escape velocity equals the speed of light.",
        explanation: "The event horizon marks the gravitational boundary of a black hole where spacetime curvature prevents any particle from escaping.",
        image: "/impact/dog-feed-14.jpeg",
        topicBadge: "🕳️ Relativistic Astrophysics"
      },
      {
        difficulty: 'intermediate',
        question: "Which NASA space telescope observes the early universe primarily in the Infrared spectrum?",
        options: ["James Webb Space Telescope (JWST)", "Hubble Space Telescope", "Chandra X-ray Observatory", "Kepler Telescope"],
        answer: 0,
        hint: "Equipped with a giant gold-coated beryllium mirror and positioned at Lagrange Point L2.",
        explanation: "JWST observes infrared wavelengths, penetrating cosmic dust clouds to see the first galaxies formed after the Big Bang.",
        image: "/impact/dog-feed-1.jpeg",
        topicBadge: "🔭 Space Observatories"
      },
      {
        difficulty: 'advanced',
        question: "What theoretical phenomenon causes black holes to slowly lose mass and evaporate over astronomical timescales?",
        options: ["Hawking Radiation", "Synchrotron Emission", "Solar Wind", "Cosmic Microwave Background"],
        answer: 0,
        hint: "Derived by physicist Stephen Hawking using quantum field theory in curved spacetime.",
        explanation: "Quantum vacuum fluctuations near the event horizon result in the emission of Hawking radiation, gradually evaporating the black hole.",
        image: "/impact/dog-feed-2.jpeg",
        topicBadge: "⚛️ Quantum Gravity"
      }
    ]
  },
  math: {
    title: "📐 Mathematics & Logic",
    description: "Sharpen your mind with numerical constants, geometry, and number theory.",
    icon: "🔢",
    ageGroup: "All Ages",
    heroImage: "/quiz/math_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "What is the mathematical constant Pi (π) rounded to two decimal places?",
        options: ["3.14", "3.16", "3.12", "3.18"],
        answer: 0,
        hint: "The ratio of a circle's circumference to its diameter.",
        explanation: "Pi is an irrational number approximately equal to 3.14159265...",
        image: "/impact/dog-feed-3.jpeg",
        topicBadge: "🔢 Mathematical Constants"
      },
      {
        difficulty: 'beginner',
        question: "What is the only even prime number?",
        options: ["2", "4", "0", "1"],
        answer: 0,
        hint: "The very first prime number in the natural numbers.",
        explanation: "2 is the smallest prime number and the only even prime, as all other even numbers are divisible by 2.",
        image: "/impact/dog-feed-4.jpeg",
        topicBadge: "🧮 Number Theory"
      },
      {
        difficulty: 'intermediate',
        question: "What is the famous mathematical theorem stating that a² + b² = c² for a right-angled triangle?",
        options: ["Pythagorean Theorem", "Fermat's Last Theorem", "Euler's Formula", "Binomial Theorem"],
        answer: 0,
        hint: "Named after an ancient Greek mathematician.",
        explanation: "The Pythagorean theorem relates the lengths of the legs of a right triangle to its hypotenuse.",
        image: "/impact/dog-feed-5.jpeg",
        topicBadge: "📐 Geometry"
      },
      {
        difficulty: 'advanced',
        question: "What is the value of the Golden Ratio (Phi, φ) to three decimal places?",
        options: ["1.618", "1.414", "2.718", "3.141"],
        answer: 0,
        hint: "(1 + √5) / 2",
        explanation: "The Golden Ratio φ = (1 + √5)/2 ≈ 1.6180339887... appears throughout natural spiral geometries.",
        image: "/impact/dog-feed-6.jpeg",
        topicBadge: "✨ Golden Ratio"
      }
    ]
  },
  science: {
    title: "🔬 Natural Science & Physics",
    description: "Unravel molecular biology, thermodynamics, optics, and chemistry.",
    icon: "🔬",
    ageGroup: "All Ages",
    heroImage: "/quiz/science_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "What is the speed of light in a vacuum?",
        options: ["Approximately 300,000 kilometers per second", "150,000 km/s", "1,000,000 km/s", "3,000 km/s"],
        answer: 0,
        hint: "Exactly 299,792,458 meters per second.",
        explanation: "The speed of light (c) is the universal speed limit for all mass-less particles in the universe.",
        image: "/impact/dog-feed-7.jpeg",
        topicBadge: "⚡ Fundamental Physics"
      },
      {
        difficulty: 'beginner',
        question: "Which organelle is universally referred to as the 'powerhouse of the cell'?",
        options: ["Mitochondria", "Ribosome", "Golgi Apparatus", "Endoplasmic Reticulum"],
        answer: 0,
        hint: "Generates cellular ATP through aerobic respiration.",
        explanation: "Mitochondria produce the chemical energy required for cellular survival and metabolic functions.",
        image: "/impact/dog-feed-8.jpeg",
        topicBadge: "🧬 Cell Biology"
      },
      {
        difficulty: 'intermediate',
        question: "What element constitutes approximately 78% of Earth's breathable atmosphere?",
        options: ["Nitrogen (N₂)", "Oxygen (O₂)", "Argon (Ar)", "Carbon Dioxide (CO₂)"],
        answer: 0,
        hint: "Oxygen makes up about 21%, while this gas dominates the rest.",
        explanation: "Nitrogen makes up roughly 78.08% of Earth's atmosphere, providing atmospheric stability.",
        image: "/impact/dog-feed-9.jpeg",
        topicBadge: "💨 Atmospheric Chemistry"
      },
      {
        difficulty: 'advanced',
        question: "What fundamental quantum principle states that you cannot simultaneously know both the position and momentum of a particle with absolute precision?",
        options: ["Heisenberg Uncertainty Principle", "Pauli Exclusion Principle", "Schrödinger Wave Equation", "Newton's Third Law"],
        answer: 0,
        hint: "Formulated by German physicist Werner Heisenberg in 1927.",
        explanation: "The Heisenberg uncertainty principle states that precision in position fundamentally limits precision in momentum (Δx · Δp ≥ ℏ/2).",
        image: "/impact/dog-feed-10.jpeg",
        topicBadge: "⚛️ Quantum Mechanics"
      }
    ]
  },
  geography: {
    title: "🌍 World Geography & Capitals",
    description: "Explore world continents, mountain ranges, oceans, and capitals.",
    icon: "🌍",
    ageGroup: "All Ages",
    heroImage: "/quiz/geography_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "In which Indian state is the historic city of Patna located, where CyberKarma street feeding drives take place?",
        options: ["Bihar", "Maharashtra", "Uttar Pradesh", "West Bengal"],
        answer: 0,
        hint: "Historically known as Pataliputra, along the banks of the sacred river Ganges.",
        explanation: "Patna is the capital city of Bihar, where our volunteers conduct daily street animal rescue meals.",
        image: "/impact/dog-feed-11.jpeg",
        topicBadge: "📍 Indian Geography"
      },
      {
        difficulty: 'beginner',
        question: "What is the highest mountain peak on planet Earth above sea level?",
        options: ["Mount Everest (8,848.86 m)", "K2 (Godwin-Austen)", "Kangchenjunga", "Lhotse"],
        answer: 0,
        hint: "Located in the Mahalangur Himal sub-range of the Himalayas.",
        explanation: "Mount Everest rises 8,848.86 meters above sea level along the border of Nepal and China.",
        image: "/impact/dog-feed-12.jpeg",
        topicBadge: "🏔️ Topography"
      },
      {
        difficulty: 'intermediate',
        question: "Which is the longest river in the world?",
        options: ["Nile River (or Amazon River)", "Yangtze River", "Mississippi River", "Danube River"],
        answer: 0,
        hint: "Flows northward through eastern Africa for over 6,650 kilometers.",
        explanation: "The Nile River spans over 6,650 km, traversing eleven African nations.",
        image: "/impact/dog-feed-13.jpeg",
        topicBadge: "🌊 Hydrology"
      }
    ]
  },
  vocab: {
    title: "📖 Global Vocabulary & Languages",
    description: "Expand your linguistics, etymology, and compassionate vocabulary.",
    icon: "📖",
    ageGroup: "All Ages",
    heroImage: "/quiz/vocab_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "What term defines the ability to understand and share the feelings and emotions of another being?",
        options: ["Empathy", "Apathy", "Antipathy", "Sarcasm"],
        answer: 0,
        hint: "The fundamental foundation of animal care and human compassion.",
        explanation: "Empathy allows individuals to resonate with the emotional experiences and pain of others.",
        image: "/impact/dog-feed-14.jpeg",
        topicBadge: "📚 Psychology"
      },
      {
        difficulty: 'beginner',
        question: "What word describes the selfless concern and action for the well-being of others?",
        options: ["Altruism", "Egoism", "Pragmatism", "Solipsism"],
        answer: 0,
        hint: "The driving principle behind CyberKarma.",
        explanation: "Altruism is the ethical practice of selflessly benefiting other living beings.",
        image: "/impact/dog-feed-1.jpeg",
        topicBadge: "🌟 Ethics"
      }
    ]
  },
  gk: {
    title: "💡 General Knowledge & Inventions",
    description: "Learn about historical breakthroughs, world heritage, and famous creators.",
    icon: "💡",
    ageGroup: "All Ages",
    heroImage: "/quiz/gk_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "Who developed the movable-type mechanical printing press in Europe around 1440?",
        options: ["Johannes Gutenberg", "Leonardo da Vinci", "Isaac Newton", "Galileo Galilei"],
        answer: 0,
        hint: "Sparked the rapid spread of knowledge and literacy across the world.",
        explanation: "Gutenberg's printing press revolutionized the mass distribution of books and sparked the Renaissance.",
        image: "/impact/dog-feed-2.jpeg",
        topicBadge: "🏛️ Inventions"
      },
      {
        difficulty: 'intermediate',
        question: "Which scientist formulated the laws of motion and universal gravitation?",
        options: ["Sir Isaac Newton", "Albert Einstein", "Nikola Tesla", "Thomas Edison"],
        answer: 0,
        hint: "Published in the landmark work 'Philosophiæ Naturalis Principia Mathematica' in 1687.",
        explanation: "Isaac Newton laid the foundation for classical mechanics with his three laws of motion and gravitation.",
        image: "/impact/dog-feed-3.jpeg",
        topicBadge: "⚡ Scientific History"
      }
    ]
  }
};
