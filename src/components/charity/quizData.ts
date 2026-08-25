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
    title: "Animals & Rescue",
    description: "Animal biology, companion welfare, and wildlife trivia.",
    icon: "🐾",
    ageGroup: "All Ages",
    heroImage: "/quiz/animals_hero.jpg",
    questions: [
    {
        "difficulty": "beginner",
        "question": "How do dogs primarily regulate their body temperature on hot days?",
        "options": [
            "Flapping their ears to generate airflow",
            "Licking their coat with saliva",
            "Panting and evaporating moisture from their tongue",
            "Sweating through their skin like humans"
        ],
        "answer": 2,
        "hint": "Canines have sweat glands only in their paw pads.",
        "explanation": "Panting allows dogs to rapidly circulate cool air over the moist surfaces of their tongue, mouth, and upper respiratory tract.",
        "topicBadge": "Canine Biology"
    },
    {
        "difficulty": "beginner",
        "question": "Which food item is highly toxic to dogs due to the stimulant theobromine?",
        "options": [
            "Boiled Chicken",
            "Dark Chocolate",
            "Cooked Carrots",
            "Plain White Rice"
        ],
        "answer": 1,
        "hint": "Canines metabolize cacao compounds extremely slowly.",
        "explanation": "Theobromine can cause heart arrhythmias, muscle tremors, seizures, and internal bleeding in canines.",
        "topicBadge": "Pet Health"
    },
    {
        "difficulty": "beginner",
        "question": "What is the standard, safest staple meal provided to street dogs during rescue feeding drives?",
        "options": [
            "Sweetened milk and bakery biscuits",
            "Boiled white rice with boiled eggs or broth",
            "Spicy curry leftovers with onions and garlic",
            "Cooked poultry bones and spicy gravy"
        ],
        "answer": 1,
        "hint": "Simple, bland proteins and digestible carbohydrates.",
        "explanation": "Boiled rice mixed with boiled eggs provides complete, gentle protein and energy without irritating stray digestive tracts.",
        "topicBadge": "Rescue Nutrition"
    },
    {
        "difficulty": "beginner",
        "question": "How many permanent teeth does an adult domestic dog possess?",
        "options": [
            "28",
            "42",
            "32",
            "50"
        ],
        "answer": 1,
        "hint": "Dogs have 10 more teeth than adult humans.",
        "explanation": "Adult dogs have 42 teeth adapted for grasping, tearing meat, and grinding food.",
        "topicBadge": "Anatomy"
    },
    {
        "difficulty": "intermediate",
        "question": "Which sensory organ on the roof of a dog's mouth detects pheromones and chemical social cues?",
        "options": [
            "Tympanic membrane",
            "Pit organ",
            "Cochlea",
            "Jacobson's organ (Vomeronasal organ)"
        ],
        "answer": 3,
        "hint": "Located behind the upper front incisors.",
        "explanation": "The vomeronasal organ detects non-volatile pheromones, giving dogs crucial information about the health and identity of other animals.",
        "topicBadge": "Sensory Science"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the primary mandate of the Animal Birth Control (ABC) protocol in India?",
        "options": [
            "Relocation of packs to rural forests",
            "Permanent caging in shelters",
            "Euthanasia of unclaimed animals",
            "Sterilization, anti-rabies vaccination, and return to territory"
        ],
        "answer": 3,
        "hint": "Codified by the Animal Welfare Board of India (AWBI).",
        "explanation": "ABC humanely stabilizes street dog populations while building a vaccinated, rabies-immune barrier in local neighborhoods.",
        "topicBadge": "Animal Welfare"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the reflective tissue layer behind a dog's retina that dramatically improves night vision?",
        "options": [
            "Fovea centralis",
            "Tapetum lucidum",
            "Ciliary body",
            "Cornea"
        ],
        "answer": 1,
        "hint": "Produces the eye-shine visible in flashlights.",
        "explanation": "The tapetum lucidum acts as a biological mirror, reflecting unabsorbed photons back through photoreceptor cells.",
        "topicBadge": "Visual Biology"
    },
    {
        "difficulty": "intermediate",
        "question": "Why should cooked poultry bones never be fed to dogs?",
        "options": [
            "They cause sudden calcium toxicity",
            "They become brittle and splinter into sharp shards",
            "They contain bacteria that survive cooking",
            "They prevent the absorption of essential vitamins"
        ],
        "answer": 1,
        "hint": "Cooking dries out and hardens bird bones.",
        "explanation": "Cooked bird bones fragment easily into razor-sharp splinters that can lacerate the esophagus, stomach, or intestines.",
        "topicBadge": "Emergency Care"
    },
    {
        "difficulty": "advanced",
        "question": "Which marine animal has three distinct hearts and blue copper-based blood?",
        "options": [
            "Sea Turtle",
            "Octopus",
            "Dolphin",
            "Great White Shark"
        ],
        "answer": 1,
        "hint": "Two hearts pump blood to the gills; one pumps to the body.",
        "explanation": "Octopuses use hemocyanin (a copper-rich protein) for oxygen transport, which turns blood blue in cold, low-oxygen water.",
        "topicBadge": "Marine Biology"
    },
    {
        "difficulty": "advanced",
        "question": "Which amphibian is celebrated for its extraordinary ability to regenerate entire lost limbs, heart tissue, and spinal cords?",
        "options": [
            "American Bullfrog",
            "Common Toad",
            "Poison Dart Frog",
            "Axolotl"
        ],
        "answer": 3,
        "hint": "A neotenic salamander native to Lake Xochimilco, Mexico.",
        "explanation": "Axolotls retain regenerative stem-like cells throughout adulthood, allowing complete scar-free tissue regeneration.",
        "topicBadge": "Biomedical Science"
    },
    {
        "difficulty": "beginner",
        "question": "What color is a polar bear's skin underneath its translucent white fur?",
        "options": [
            "White",
            "Black",
            "Grey",
            "Pink"
        ],
        "answer": 1,
        "hint": "Black skin maximizes thermal absorption from solar radiation.",
        "explanation": "Polar bears have jet-black skin under clear, hollow fur strands that trap body heat and reflect light to appear white.",
        "topicBadge": "Wildlife Biology"
    },
    {
        "difficulty": "intermediate",
        "question": "How do honeybees communicate the precise distance and direction of rich flower patches to their hive mates?",
        "options": [
            "Pheromone spray patterns only",
            "The Waggle Dance",
            "Antenna drumming",
            "Ultrasonic wing buzzes"
        ],
        "answer": 1,
        "hint": "Decoded by Nobel laureate Karl von Frisch.",
        "explanation": "The angle of the waggle run relative to gravity communicates the angle of the flowers relative to the sun.",
        "topicBadge": "Animal Behavior"
    },
    {
        "difficulty": "beginner",
        "question": "Which bird species is the only one capable of sustained backward flight and hovering motionless in mid-air?",
        "options": [
            "Hummingbird",
            "Barn Swallow",
            "Common Swift",
            "Kingfisher"
        ],
        "answer": 0,
        "hint": "Possesses unique ball-and-socket shoulder joints.",
        "explanation": "Hummingbirds rotate their wings in a continuous figure-8 pattern, generating lift on both forward and backward strokes.",
        "topicBadge": "Ornithology"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the maximum recorded diving speed of a Peregrine Falcon during a hunting stoop?",
        "options": [
            "Over 320 km/h (200 mph)",
            "450 km/h (280 mph)",
            "120 km/h (75 mph)",
            "180 km/h (112 mph)"
        ],
        "answer": 0,
        "hint": "The fastest animal in the entire animal kingdom.",
        "explanation": "During high-altitude hunting stoops, streamlined aerodynamics allow peregrine falcons to exceed 320 km/h.",
        "topicBadge": "Apex Predators"
    },
    {
        "difficulty": "beginner",
        "question": "Why do sea otters hold paws while floating on the ocean surface?",
        "options": [
            "To communicate mating signals",
            "To prevent drifting apart in ocean currents while asleep",
            "To share body heat through their paw pads",
            "To camouflage from sharks below"
        ],
        "answer": 1,
        "hint": "They often anchor themselves in kelp forests.",
        "explanation": "Sea otters form floating family groups called rafts and hold paws to stay together safely while resting.",
        "topicBadge": "Marine Ecology"
    },
    {
        "difficulty": "intermediate",
        "question": "How do giraffes pump blood two meters upward to their brains without passing out or suffering vascular damage when lowering their heads?",
        "options": [
            "They hold their breath while bending down",
            "A powerful heart with double human blood pressure and specialized neck valves",
            "They possess three supplementary hearts in the neck",
            "Their blood pressure is exceptionally low"
        ],
        "answer": 1,
        "hint": "Their normal blood pressure is double that of humans.",
        "explanation": "A network of elastic capillaries called the rete mirabile regulates blood flow and cushions pressure surges.",
        "topicBadge": "Cardiovascular Bio"
    },
    {
        "difficulty": "advanced",
        "question": "Which microscopic animal can survive the vacuum of space, ionizing radiation, and temperatures near absolute zero?",
        "options": [
            "Rotifer",
            "Planarian",
            "Nematode",
            "Tardigrade (Water Bear)"
        ],
        "answer": 3,
        "hint": "Enters anhydrobiosis (a dehydrated tun state).",
        "explanation": "Tardigrades expel 99% of cellular water and produce protective vitrifying proteins, allowing them to withstand extreme environments.",
        "topicBadge": "Extremophiles"
    },
    {
        "difficulty": "beginner",
        "question": "What primary substance is stored inside a camel's hump?",
        "options": [
            "Calcium and bone reserves",
            "Pure liquid water reservoirs",
            "Extra oxygenated blood cells",
            "Fat tissue used for energy and metabolic water"
        ],
        "answer": 3,
        "hint": "It is not a water tank.",
        "explanation": "Camels store dense adipose tissue in their humps, which yields water and energy when metabolized in arid deserts.",
        "topicBadge": "Adaptations"
    },
    {
        "difficulty": "intermediate",
        "question": "Which nocturnal bird possesses specialized serrated wing feathers that enable nearly silent flight?",
        "options": [
            "Bat Falcon",
            "Nightjar",
            "Barn Owl",
            "Common Raven"
        ],
        "answer": 2,
        "hint": "Comb-like leading feather edges muffle airflow.",
        "explanation": "Serrated fringes break up turbulent airflow into micro-currents, preventing acoustic flutter while hunting in darkness.",
        "topicBadge": "Avian Physics"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the gestation period of an African Elephant, the longest of any terrestrial mammal?",
        "options": [
            "Approximately 22 months",
            "28 months",
            "12 months",
            "16 months"
        ],
        "answer": 0,
        "hint": "Nearly two full years.",
        "explanation": "Developing a large, highly complex brain and massive musculoskeletal system requires roughly 95 weeks of gestation.",
        "topicBadge": "Mammal Biology"
    },
    {
        "difficulty": "beginner",
        "question": "What substance gives three-toed sloths a greenish tint that provides essential canopy camouflage?",
        "options": [
            "Chlorophyll synthesized in their skin cells",
            "Symbiotic green algae growing in specialized hair grooves",
            "Moss gathered from tree trunks",
            "Pigment from eating poisonous leaves"
        ],
        "answer": 1,
        "hint": "A mutualistic ecosystem living in their fur.",
        "explanation": "Sloth hair has microscopic grooves where specialized algae thrive, providing vital camouflage from predatory harpy eagles.",
        "topicBadge": "Symbiosis"
    },
    {
        "difficulty": "intermediate",
        "question": "How do dolphins and microbats construct detailed acoustic 3D maps of their surroundings in darkness?",
        "options": [
            "Echolocation via ultrasonic sound wave reflection",
            "Infrared thermal sensing",
            "Magnetic compass navigation only",
            "Enhanced chemical olfaction"
        ],
        "answer": 0,
        "hint": "Emitting clicks and processing returning echoes.",
        "explanation": "High-frequency sound waves bounce off target objects, allowing auditory cortex circuits to calculate distance, shape, and movement.",
        "topicBadge": "Acoustics"
    },
    {
        "difficulty": "advanced",
        "question": "Which Australian monotreme mammal lays eggs, possesses waterproof fur, and detects prey using electroreceptors in its bill?",
        "options": [
            "Platypus",
            "Short-beaked Echidna",
            "Wombat",
            "Quokka"
        ],
        "answer": 0,
        "hint": "One of only two egg-laying mammal families.",
        "explanation": "The platypus bill contains thousands of electroreceptors capable of detecting the tiny electric currents generated by moving prey.",
        "topicBadge": "Monotremes"
    },
    {
        "difficulty": "beginner",
        "question": "What essential first-aid antiseptic is widely recommended for cleaning superficial wounds on rescue street dogs?",
        "options": [
            "High-concentration hydrogen peroxide",
            "Rubbing alcohol poured directly on deep cuts",
            "Pure undiluted household bleach",
            "Diluted Povidone-Iodine (Betadine)"
        ],
        "answer": 3,
        "hint": "Gentle, broad-spectrum antiseptic.",
        "explanation": "Betadine effectively neutralizes bacteria without causing intense tissue necrosis, preventing fatal bacterial and maggot infections.",
        "topicBadge": "Rescue First Aid"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the maximum audible sound frequency that canines can detect?",
        "options": [
            "Up to 15,000 Hz",
            "Over 250,000 Hz",
            "Up to 20,000 Hz (same as humans)",
            "Up to 45,000 to 65,000 Hz"
        ],
        "answer": 3,
        "hint": "Humans top out around 20,000 Hz.",
        "explanation": "Canine ear anatomy enables hearing ultrasound frequencies over double the upper limit of human hearing.",
        "topicBadge": "Bioacoustics"
    }
]
  },
  cybersecurity: {
    title: "Cybersecurity",
    description: "Ethical hacking, network defense, and zero trust protocols.",
    icon: "🛡️",
    ageGroup: "All Ages",
    heroImage: "/quiz/cyber_hero.jpg",
    questions: [
    {
        "difficulty": "beginner",
        "question": "What is the core directive of the Principle of Least Privilege (PoLP)?",
        "options": [
            "Every user is granted domain administrator rights for convenience",
            "Users and services receive only the minimum permissions necessary for their duties",
            "All network traffic is encrypted with identical shared keys",
            "Passwords should be eliminated in favor of single-factor PINs"
        ],
        "answer": 1,
        "hint": "Reduces the blast radius of compromised credentials.",
        "explanation": "PoLP ensures that if an account or process is breached, the attacker cannot easily escalate privileges to critical assets.",
        "topicBadge": "Access Control"
    },
    {
        "difficulty": "beginner",
        "question": "Which default TCP port is utilized by the Secure Shell (SSH) protocol for encrypted remote management?",
        "options": [
            "Port 80",
            "Port 3389",
            "Port 22",
            "Port 443"
        ],
        "answer": 2,
        "hint": "Replaced unencrypted Telnet on port 23.",
        "explanation": "SSH operates on TCP port 22 to provide secure encrypted terminal sessions and SFTP file transfers.",
        "topicBadge": "Network Protocols"
    },
    {
        "difficulty": "beginner",
        "question": "What three foundational pillars constitute the classic Information Security CIA Triad?",
        "options": [
            "Cyber, Internet, and Authorization",
            "Control, Intelligence, and Authentication",
            "Confidentiality, Integrity, and Availability",
            "Cryptography, Inspection, and Auditing"
        ],
        "answer": 2,
        "hint": "The bedrock benchmark of all security policies.",
        "explanation": "Confidentiality prevents unauthorized disclosure, Integrity ensures data truth, and Availability guarantees service accessibility.",
        "topicBadge": "Security Fundamentals"
    },
    {
        "difficulty": "intermediate",
        "question": "Which vulnerability class occurs when untrusted user input is directly concatenated into database queries without sanitization?",
        "options": [
            "Cross-Site Scripting (XSS)",
            "Cross-Site Request Forgery (CSRF)",
            "SQL Injection (SQLi)",
            "Server-Side Request Forgery (SSRF)"
        ],
        "answer": 2,
        "hint": "Remediated using parameterized queries and prepared statements.",
        "explanation": "SQL Injection allows attackers to bypass authentication, extract sensitive tables, or execute administrative database commands.",
        "topicBadge": "AppSec"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the primary operational philosophy behind Zero Trust Architecture (ZTA)?",
        "options": [
            "Trust all traffic originated within the internal corporate LAN",
            "\"Never trust, always verify\" every request regardless of network origin",
            "Grant permanent trust once a device completes initial VPN login",
            "Rely solely on perimeter firewalls for complete network protection"
        ],
        "answer": 1,
        "hint": "NIST SP 800-207 framework.",
        "explanation": "Zero Trust assumes breach and mandates continuous verification, micro-segmentation, and dynamic risk-based access.",
        "topicBadge": "Architecture"
    },
    {
        "difficulty": "intermediate",
        "question": "What Active Directory attack technique extracts Kerberos service ticket (TGS) hashes from memory to crack offline?",
        "options": [
            "Pass-the-Hash",
            "Kerberoasting",
            "DCSync",
            "AS-REP Roasting"
        ],
        "answer": 1,
        "hint": "Targets user accounts associated with Service Principal Names (SPNs).",
        "explanation": "Kerberoasting requests RC4 or AES tickets for SPNs and attempts offline dictionary attacks to uncover plaintext service passwords.",
        "topicBadge": "Red Teaming"
    },
    {
        "difficulty": "advanced",
        "question": "Which cryptographic mode provides symmetric authenticated encryption widely used in TLS 1.3 and IPsec?",
        "options": [
            "Diffie-Hellman",
            "AES-GCM (Galois/Counter Mode)",
            "RSA-2048",
            "MD5"
        ],
        "answer": 1,
        "hint": "Combines confidentiality and integrity verification in one pass.",
        "explanation": "AES-GCM provides high-performance hardware-accelerated symmetric encryption alongside built-in message authentication codes (GMAC).",
        "topicBadge": "Cryptography"
    },
    {
        "difficulty": "advanced",
        "question": "What Windows Event ID explicitly logs a successful user account logon on a workstation or domain controller?",
        "options": [
            "Event ID 7045",
            "Event ID 4624",
            "Event ID 4720",
            "Event ID 4625"
        ],
        "answer": 1,
        "hint": "Event 4625 indicates a logon failure.",
        "explanation": "Event 4624 records successful authentications and includes the logon type (Type 2 interactive, Type 3 network, Type 10 RDP).",
        "topicBadge": "DFIR & SOC"
    },
    {
        "difficulty": "intermediate",
        "question": "What security control requires two or more distinct evidence categories (knowledge, possession, inherence) for authentication?",
        "options": [
            "Single Sign-On (SSO)",
            "Password Complexity Policy",
            "CAPTCHA verification",
            "Multi-Factor Authentication (MFA)"
        ],
        "answer": 3,
        "hint": "Something you know, something you have, something you are.",
        "explanation": "MFA mitigates over 99% of automated credential stuffing and phishing attacks by requiring an independent physical or biometric factor.",
        "topicBadge": "Identity Sec"
    },
    {
        "difficulty": "advanced",
        "question": "Which memory forensics framework is widely used by incident responders to analyze raw RAM dumps for injected DLLs and rootkits?",
        "options": [
            "Metasploit",
            "Wireshark",
            "Burp Suite",
            "Volatility Framework"
        ],
        "answer": 3,
        "hint": "Python-based memory extraction engine.",
        "explanation": "Volatility parses kernel data structures, unlinked process trees, network sockets, and process memory directly from raw RAM dumps.",
        "topicBadge": "Forensics"
    },
    {
        "difficulty": "beginner",
        "question": "What type of social engineering attack involves deceptive emails masquerading as trusted institutions to steal credentials?",
        "options": [
            "DDoS",
            "Phishing",
            "Buffer Overflow",
            "Man-in-the-Middle"
        ],
        "answer": 1,
        "hint": "Exploits human psychology rather than software bugs.",
        "explanation": "Phishing lures victims into clicking malicious links or submitting sensitive credentials onto attacker-controlled replica portals.",
        "topicBadge": "Threat Landscape"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the purpose of a Web Application Firewall (WAF)?",
        "options": [
            "Scanning local RAM for driver conflicts",
            "Filtering and monitoring HTTP/HTTPS traffic between a web application and the Internet",
            "Encrypting hard drive partitions at rest",
            "Assigning local DHCP IP addresses"
        ],
        "answer": 1,
        "hint": "Protects against OWASP Top 10 vulnerabilities.",
        "explanation": "A WAF inspects layer 7 web requests, inspecting headers, query parameters, and payloads to block SQLi, XSS, and bots.",
        "topicBadge": "Network Defense"
    },
    {
        "difficulty": "advanced",
        "question": "What replication permission allows red teamers to execute a DCSync attack and dump all Active Directory password hashes?",
        "options": [
            "Domain Join Privilege",
            "Read Remote Registry",
            "DS-Replication-Get-Changes-All",
            "Local Administrator"
        ],
        "answer": 2,
        "hint": "Impersonates a Domain Controller via DRSUAPI.",
        "explanation": "DCSync requests account replication from a Domain Controller without executing code on the DC itself, dumping KRBTGT and user hashes.",
        "topicBadge": "Active Directory"
    },
    {
        "difficulty": "beginner",
        "question": "What protocol does HTTPS rely on to secure data transmission between a browser and a web server?",
        "options": [
            "Telnet tunneling",
            "TLS (Transport Layer Security) encryption",
            "Plain text hashing",
            "FTP credentials"
        ],
        "answer": 1,
        "hint": "Successor to the deprecated SSL protocol.",
        "explanation": "TLS encrypts web traffic using asymmetric key exchange to negotiate symmetric session keys, ensuring confidentiality and authenticity.",
        "topicBadge": "Web Protocols"
    },
    {
        "difficulty": "intermediate",
        "question": "Which firewall rule design standard drops all packets that are not explicitly permitted by an approved policy?",
        "options": [
            "Round-Robin routing",
            "Default-Allow",
            "Default-Deny (Implicit Deny)",
            "Stateless inspection"
        ],
        "answer": 2,
        "hint": "The foundation of sound firewall rulebases.",
        "explanation": "Default-Deny ensures that any protocol, port, or source not explicitly authorized is automatically blocked by default.",
        "topicBadge": "Firewalls"
    },
    {
        "difficulty": "advanced",
        "question": "Which public-key algorithm relies on the mathematical difficulty of finding discrete logarithms in elliptic curve groups?",
        "options": [
            "RSA",
            "DES",
            "AES-256",
            "ECDSA / ECDH"
        ],
        "answer": 3,
        "hint": "Offers equivalent security to RSA with much smaller key lengths.",
        "explanation": "Elliptic Curve Cryptography provides robust forward secrecy in TLS 1.3 with lower compute overhead and compact key footprints.",
        "topicBadge": "Applied Crypto"
    },
    {
        "difficulty": "intermediate",
        "question": "What is a \"Zero-Day\" vulnerability?",
        "options": [
            "A bug that takes zero days to fix",
            "A firewall rule with zero latency",
            "A virus created in year 2000",
            "A software flaw unknown to the vendor with no official patch available"
        ],
        "answer": 3,
        "hint": "The vendor has had zero days to remediate it.",
        "explanation": "Zero-day vulnerabilities represent severe risks because attackers can exploit them in the wild before security patches are authored.",
        "topicBadge": "Vulnerabilities"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the difference between vulnerability scanning and penetration testing?",
        "options": [
            "Scanning only checks hardware; pen testing only checks software",
            "Scanning is automated detection; penetration testing involves active, manual exploitation of flaws",
            "Scanning is illegal without a court order",
            "There is no technical difference"
        ],
        "answer": 1,
        "hint": "Automated breadth vs contextual depth.",
        "explanation": "Vulnerability scanning identifies theoretical flaws, while penetration testing attempts realistic attacks to evaluate true impact.",
        "topicBadge": "SecOps"
    },
    {
        "difficulty": "advanced",
        "question": "What attack technique involves replaying captured NTLM hashes to authenticate to remote hosts without cracking plaintext?",
        "options": [
            "Password Spraying",
            "Cross-Site Scripting",
            "Pass-the-Hash (PtH)",
            "Shoulder Surfing"
        ],
        "answer": 2,
        "hint": "Exploits the challenge-response design of NTLM.",
        "explanation": "Because NTLM accepts the hash directly for authentication challenge calculations, an attacker with the hash can authenticate as that user.",
        "topicBadge": "Lateral Movement"
    },
    {
        "difficulty": "beginner",
        "question": "What is ransomware?",
        "options": [
            "Malware that encrypts user files and demands payment for the decryption key",
            "Hardware that blocks DDoS traffic",
            "Software that speeds up computer performance",
            "A utility that monitors antivirus updates"
        ],
        "answer": 0,
        "hint": "A major global cybercrime threat.",
        "explanation": "Ransomware compromises systems, encrypts critical data, and extorts victims for financial payout while threatening data publication.",
        "topicBadge": "Malware"
    }
]
  },
  space: {
    title: "Space & Astronomy",
    description: "Cosmology, planetary astrophysics, and deep space discovery.",
    icon: "🚀",
    ageGroup: "All Ages",
    heroImage: "/quiz/space_hero.jpg",
    questions: [
    {
        "difficulty": "beginner",
        "question": "Which planet in our Solar System is known as the \"Red Planet\" due to iron oxide on its surface?",
        "options": [
            "Venus",
            "Mercury",
            "Jupiter",
            "Mars"
        ],
        "answer": 3,
        "hint": "Home to Olympus Mons and the Perseverance rover.",
        "explanation": "Mars gets its distinct reddish hue from oxidized iron (rust) minerals covering its basaltic crust.",
        "topicBadge": "Planetary Science"
    },
    {
        "difficulty": "beginner",
        "question": "What type of galaxy is our home galaxy, the Milky Way?",
        "options": [
            "Lenticular Galaxy",
            "Barred Spiral Galaxy",
            "Irregular Galaxy",
            "Elliptical Galaxy"
        ],
        "answer": 1,
        "hint": "Spans roughly 100,000 light-years across.",
        "explanation": "The Milky Way consists of a central stellar bar with spiral arms (such as the Orion Arm) winding outward.",
        "topicBadge": "Astronomy"
    },
    {
        "difficulty": "beginner",
        "question": "How long does it take for light emitted from the Sun to reach Earth?",
        "options": [
            "Approximately 8 minutes and 20 seconds",
            "8 seconds",
            "Instantaneous (0 seconds)",
            "8 hours"
        ],
        "answer": 0,
        "hint": "Light travels 150 million km at 300,000 km/s.",
        "explanation": "Traveling at 299,792 km/s across 1 Astronomical Unit (~150M km), solar photons take roughly 500 seconds to arrive.",
        "topicBadge": "Astrophysics"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the boundary surrounding a black hole beyond which nothing, not even light, can escape?",
        "options": [
            "Accretion Disk",
            "Event Horizon",
            "Photon Sphere",
            "Ergosphere"
        ],
        "answer": 1,
        "hint": "The point where escape velocity exceeds light speed.",
        "explanation": "The event horizon represents the spacetime threshold where gravitational pull becomes insurmountable for all matter and radiation.",
        "topicBadge": "Black Holes"
    },
    {
        "difficulty": "intermediate",
        "question": "At which gravitationally stable position in space is the James Webb Space Telescope (JWST) stationed?",
        "options": [
            "Geostationary Orbit (GEO)",
            "Sun-Earth Lagrange Point 2 (L2)",
            "Low Earth Orbit (LEO)",
            "Lunar Orbit"
        ],
        "answer": 1,
        "hint": "Located 1.5 million kilometers beyond Earth.",
        "explanation": "Lagrange Point L2 allows JWST to keep its sunshield oriented towards Earth and Sun while viewing the deep infrared cosmos.",
        "topicBadge": "Space Missions"
    },
    {
        "difficulty": "advanced",
        "question": "What theoretical radiation, predicted by Stephen Hawking, causes black holes to gradually lose mass and evaporate?",
        "options": [
            "Hawking Radiation",
            "Synchrotron Radiation",
            "Bremsstrahlung",
            "Cosmic Microwave Background"
        ],
        "answer": 0,
        "hint": "Arises from quantum vacuum fluctuations near event horizons.",
        "explanation": "Virtual particle-antiparticle pairs formed near the event horizon can separate, leading to a net loss of black hole mass over cosmic timescales.",
        "topicBadge": "Theoretical Physics"
    },
    {
        "difficulty": "beginner",
        "question": "What is the largest volcanic mountain and shield volcano in the entire Solar System?",
        "options": [
            "Mauna Kea on Earth",
            "Olympus Mons on Mars",
            "Maxwell Montes on Venus",
            "Caloris Montes on Mercury"
        ],
        "answer": 1,
        "hint": "Rises over 21 km (13 miles) high.",
        "explanation": "Olympus Mons is a massive Martian shield volcano nearly three times the height of Mount Everest, preserved by Mars's lack of plate tectonics.",
        "topicBadge": "Solar System"
    },
    {
        "difficulty": "intermediate",
        "question": "What nuclear fusion process powers the core of main-sequence stars like our Sun?",
        "options": [
            "Helium Flash Combustion",
            "Proton-Proton Chain Reaction (Hydrogen to Helium)",
            "Carbon-Nitrogen-Oxygen cycle only",
            "Uranium Fission"
        ],
        "answer": 1,
        "hint": "Fusing hydrogen nuclei under intense core pressure.",
        "explanation": "In solar-mass stars, high temperatures and pressures fuse 600 million tons of hydrogen into helium every second.",
        "topicBadge": "Stellar Physics"
    },
    {
        "difficulty": "intermediate",
        "question": "What celestial remnant forms when a massive star collapses under gravity, packing solar masses into a city-sized sphere of neutrons?",
        "options": [
            "White Dwarf",
            "Red Giant",
            "Neutron Star / Pulsar",
            "Brown Dwarf"
        ],
        "answer": 2,
        "hint": "Ultra-dense matter where electrons and protons merge.",
        "explanation": "Neutron stars have densities so extreme that a single sugar-cube-sized portion would weigh hundreds of millions of tons on Earth.",
        "topicBadge": "Stellar Evolution"
    },
    {
        "difficulty": "advanced",
        "question": "What fundamental limit defines the maximum mass a white dwarf can reach (~1.4 solar masses) before collapsing into a neutron star or supernova?",
        "options": [
            "Chandrasekhar Limit",
            "Schwarzschild Radius",
            "Hubble Constant",
            "Oppenheimer-Volkoff Limit"
        ],
        "answer": 0,
        "hint": "Calculated by Indian-American astrophysicist Subrahmanyan Chandrasekhar.",
        "explanation": "Electron degeneracy pressure cannot support a white dwarf star if its mass exceeds 1.44 times that of our Sun.",
        "topicBadge": "Astrophysics Classics"
    },
    {
        "difficulty": "beginner",
        "question": "Which planet has the most extensive, prominent ring system composed of billions of ice and rock particles?",
        "options": [
            "Saturn",
            "Uranus",
            "Jupiter",
            "Neptune"
        ],
        "answer": 0,
        "hint": "Galileo first observed its \"ears\" in 1610.",
        "explanation": "Saturn's ring system spans thousands of kilometers wide but averages only about 10 to 30 meters in thickness.",
        "topicBadge": "Gas Giants"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the pervasive 2.7 Kelvin thermal remnant radiation left over from the Big Bang called?",
        "options": [
            "Solar Wind",
            "Gamma Ray Burst",
            "Zodiacal Light",
            "Cosmic Microwave Background (CMB)"
        ],
        "answer": 3,
        "hint": "Discovered accidentally by Penzias and Wilson in 1964.",
        "explanation": "The CMB is the oldest electromagnetic radiation in the universe, emitted when the cosmos cooled enough for neutral hydrogen atoms to form.",
        "topicBadge": "Cosmology"
    },
    {
        "difficulty": "beginner",
        "question": "Which space probe, launched in 1977, became the first human-made object to cross into interstellar space?",
        "options": [
            "Hubble",
            "Pioneer 10",
            "New Horizons",
            "Voyager 1"
        ],
        "answer": 3,
        "hint": "Traversed the heliopause into interstellar space.",
        "explanation": "Voyager 1 crossed the heliopause in August 2012 and continues sending scientific telemetry from over 24 billion kilometers away.",
        "topicBadge": "Space Exploration"
    },
    {
        "difficulty": "intermediate",
        "question": "Which moon of Jupiter possesses a vast subsurface liquid ocean beneath an icy crust, making it a prime candidate for astrobiological study?",
        "options": [
            "Io",
            "Europa",
            "Phobos",
            "Callisto"
        ],
        "answer": 1,
        "hint": "Tidal heating keeps its internal ocean liquid.",
        "explanation": "Europa's ice shell covers a salty liquid water ocean containing more water than all of Earth's oceans combined.",
        "topicBadge": "Astrobiology"
    },
    {
        "difficulty": "advanced",
        "question": "What phenomenon occurs when a massive foreground galaxy bends and magnifies light from a background star or galaxy behind it?",
        "options": [
            "Refraction",
            "Rayleigh Scattering",
            "Doppler Redshift",
            "Gravitational Lensing"
        ],
        "answer": 3,
        "hint": "Predicted by Einstein's General Theory of Relativity.",
        "explanation": "Mass warps spacetime, bending the trajectory of passing photons and creating cosmic magnifying glasses and Einstein rings.",
        "topicBadge": "Relativity"
    }
]
  },
  science: {
    title: "Natural Science",
    description: "Physics, molecular biology, genetics, and chemistry.",
    icon: "🔬",
    ageGroup: "All Ages",
    heroImage: "/quiz/science_hero.jpg",
    questions: [
    {
        "difficulty": "beginner",
        "question": "Which cellular organelle is known as the \"powerhouse of the cell\" for producing ATP through cellular respiration?",
        "options": [
            "Mitochondria",
            "Lysosome",
            "Ribosome",
            "Golgi apparatus"
        ],
        "answer": 0,
        "hint": "Generates adenosine triphosphate.",
        "explanation": "Mitochondria convert nutrients into adenosine triphosphate (ATP), the universal chemical energy currency of eukaryotic cells.",
        "topicBadge": "Cell Biology"
    },
    {
        "difficulty": "beginner",
        "question": "What is the speed of light in a vacuum, a universal constant represented by \"c\"?",
        "options": [
            "150,000 kilometers per second",
            "Approximately 299,792 kilometers per second",
            "1,000,000 kilometers per second",
            "3,000 kilometers per second"
        ],
        "answer": 1,
        "hint": "Roughly 300,000 km/s (186,282 miles/s).",
        "explanation": "In vacuum, all electromagnetic waves travel at exactly 299,792,458 meters per second.",
        "topicBadge": "Physics"
    },
    {
        "difficulty": "beginner",
        "question": "What gas makes up approximately 78% of Earth's atmosphere by volume?",
        "options": [
            "Carbon Dioxide (CO₂)",
            "Oxygen (O₂)",
            "Nitrogen (N₂)",
            "Argon (Ar)"
        ],
        "answer": 2,
        "hint": "Oxygen makes up roughly 21%.",
        "explanation": "Nitrogen is the most abundant atmospheric gas, providing chemical stability and buffering oxygen reactivity.",
        "topicBadge": "Earth Science"
    },
    {
        "difficulty": "intermediate",
        "question": "Which fundamental law of thermodynamics states that the total entropy of an isolated system always increases over time?",
        "options": [
            "Second Law of Thermodynamics",
            "First Law of Thermodynamics",
            "Third Law of Thermodynamics",
            "Zeroth Law of Thermodynamics"
        ],
        "answer": 0,
        "hint": "Explains the irreversibility of natural processes.",
        "explanation": "The Second Law dictates that thermal energy flows spontaneously from hotter to colder bodies, increasing thermodynamic disorder (entropy).",
        "topicBadge": "Thermodynamics"
    },
    {
        "difficulty": "intermediate",
        "question": "What quantum principle, formulated by Werner Heisenberg, states that position and momentum cannot be measured simultaneously with arbitrary precision?",
        "options": [
            "Pauli Exclusion Principle",
            "Heisenberg Uncertainty Principle",
            "Photoelectric Effect",
            "Wave-Particle Duality"
        ],
        "answer": 1,
        "hint": "Fundamental physical limit (Δx · Δp ≥ ħ/2).",
        "explanation": "The wave nature of matter imposes a fundamental trade-off: precisely measuring a particle's position introduces uncertainty into its momentum.",
        "topicBadge": "Quantum Mechanics"
    },
    {
        "difficulty": "beginner",
        "question": "What is the chemical formula for ordinary table salt?",
        "options": [
            "NaCl (Sodium Chloride)",
            "KCl (Potassium Chloride)",
            "NaOH (Sodium Hydroxide)",
            "CaCO₃ (Calcium Carbonate)"
        ],
        "answer": 0,
        "hint": "Ionic bond between a metal and halogen.",
        "explanation": "Table salt is a crystalline mineral compound formed by equal parts sodium and chlorine ions held together in a cubic lattice.",
        "topicBadge": "Chemistry"
    },
    {
        "difficulty": "intermediate",
        "question": "What temperature value represents Absolute Zero, where classical molecular thermal motion ceases?",
        "options": [
            "-459.67° Celsius",
            "0 Kelvin (-273.15°C)",
            "-100° Celsius",
            "0° Celsius"
        ],
        "answer": 1,
        "hint": "The zero point on the thermodynamic scale.",
        "explanation": "At 0 Kelvin (-273.15°C), particles possess minimal zero-point quantum energy, and classical thermal kinetic motion stops.",
        "topicBadge": "Physical Chemistry"
    },
    {
        "difficulty": "intermediate",
        "question": "What biological macromolecule stores genetic information in living organisms using four nucleotide bases (A, T, C, G)?",
        "options": [
            "Phospholipids",
            "Ribosomal RNA",
            "Hemoglobin",
            "Deoxyribonucleic Acid (DNA)"
        ],
        "answer": 3,
        "hint": "Discovered to have a double helix structure by Franklin, Watson, and Crick.",
        "explanation": "DNA encodes the blueprint for protein synthesis using sequences of adenine, thymine, cytosine, and guanine.",
        "topicBadge": "Genetics"
    },
    {
        "difficulty": "advanced",
        "question": "Which revolutionary gene-editing technology utilizes a bacterial immune mechanism to make targeted cuts in DNA sequences?",
        "options": [
            "Polymerase Chain Reaction (PCR)",
            "Western Blotting",
            "Electrophoresis",
            "CRISPR-Cas9"
        ],
        "answer": 3,
        "hint": "Pioneered by Doudna and Charpentier (Nobel Prize 2020).",
        "explanation": "CRISPR uses a guide RNA to direct the Cas9 endonuclease enzyme to exact genomic coordinates for precise gene alteration.",
        "topicBadge": "Biotechnology"
    },
    {
        "difficulty": "beginner",
        "question": "What force attracts any two objects with mass towards one another in the universe?",
        "options": [
            "Centrifugal Force",
            "Gravitational Force",
            "Electromagnetic Force",
            "Strong Nuclear Force"
        ],
        "answer": 1,
        "hint": "Described by Newton's law and Einstein's general relativity.",
        "explanation": "Gravity is the weakest of the four fundamental forces over subatomic scales, but dominates cosmic scales due to mass accumulation.",
        "topicBadge": "Fundamental Physics"
    },
    {
        "difficulty": "intermediate",
        "question": "What optical property causes a beam of white light to separate into colors when passing through a triangular glass prism?",
        "options": [
            "Polarization",
            "Interference",
            "Dispersion caused by wavelength-dependent refraction",
            "Total internal reflection"
        ],
        "answer": 2,
        "hint": "Different wavelengths bend at different angles.",
        "explanation": "Higher-frequency blue light refracts more strongly than lower-frequency red light through glass, dispersing white light into a rainbow.",
        "topicBadge": "Optics"
    },
    {
        "difficulty": "advanced",
        "question": "Which fundamental subatomic particle was confirmed in 2012 at CERN's Large Hadron Collider, validating the mechanism that gives mass to elementary particles?",
        "options": [
            "Higgs Boson",
            "Tau Neutrino",
            "Graviton",
            "Top Quark"
        ],
        "answer": 0,
        "hint": "Associated with the scalar Higgs field.",
        "explanation": "Interaction with the omnipresent Higgs field slows particles down, imparting inertial mass to W/Z bosons and fundamental fermions.",
        "topicBadge": "Particle Physics"
    },
    {
        "difficulty": "beginner",
        "question": "What process do plants use to convert sunlight, carbon dioxide, and water into glucose and oxygen?",
        "options": [
            "Photosynthesis",
            "Cellular Respiration",
            "Transpiration",
            "Fermentation"
        ],
        "answer": 0,
        "hint": "Chlorophyll absorbs red and blue light.",
        "explanation": "Plants use light energy in chloroplasts to synthesize organic sugars from atmospheric CO₂ and soil water, releasing oxygen.",
        "topicBadge": "Botany"
    },
    {
        "difficulty": "intermediate",
        "question": "Why does solid ice float on liquid water, an anomalous property vital for aquatic life in freezing weather?",
        "options": [
            "Water molecules lose mass as they freeze",
            "Ice contains trapped air bubbles always",
            "Water reaches maximum density at 4°C; ice forms an open hexagonal crystal lattice that is less dense",
            "Surface tension repels frozen solids"
        ],
        "answer": 2,
        "hint": "Hydrogen bonds expand as water freezes.",
        "explanation": "As water cools below 4°C, hydrogen bonds organize into a spacious crystal lattice, making ice roughly 9% less dense than liquid water.",
        "topicBadge": "Chemistry Fundamentals"
    }
]
  },
  math: {
    title: "Mathematics & Logic",
    description: "Geometry, number theory, arithmetic, and probability.",
    icon: "🧮",
    ageGroup: "All Ages",
    heroImage: "/quiz/math_hero.jpg",
    questions: [
    {
        "difficulty": "beginner",
        "question": "What is the value of Pi (π) rounded to two decimal places?",
        "options": [
            "3.14",
            "3.18",
            "3.12",
            "3.16"
        ],
        "answer": 0,
        "hint": "The ratio of a circle's circumference to its diameter.",
        "explanation": "Pi is an irrational, transcendental mathematical constant approximately equal to 3.14159...",
        "topicBadge": "Constants"
    },
    {
        "difficulty": "beginner",
        "question": "What is the only even prime number in mathematics?",
        "options": [
            "2",
            "4",
            "0",
            "1"
        ],
        "answer": 0,
        "hint": "The smallest prime number.",
        "explanation": "A prime number has exactly two distinct positive divisors (1 and itself). 2 is the only even number meeting this definition.",
        "topicBadge": "Number Theory"
    },
    {
        "difficulty": "beginner",
        "question": "What famous geometric theorem states that for any right-angled triangle, a² + b² = c²?",
        "options": [
            "Euclid's Lemma",
            "Thales's Theorem",
            "Fermat's Principle",
            "Pythagorean Theorem"
        ],
        "answer": 3,
        "hint": "Relates the two legs to the hypotenuse.",
        "explanation": "In Euclidean geometry, the square of the hypotenuse (c) equals the sum of the squares of the other two sides (a and b).",
        "topicBadge": "Geometry"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the sum of the three interior angles in any Euclidean planar triangle?",
        "options": [
            "360 degrees",
            "270 degrees",
            "180 degrees (π radians)",
            "90 degrees"
        ],
        "answer": 2,
        "hint": "Forms a straight continuous line.",
        "explanation": "The interior angles of any triangle on a flat plane always add up to exactly 180 degrees.",
        "topicBadge": "Euclidean Math"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the value of 5 Factorial (5!)?",
        "options": [
            "25",
            "60",
            "720",
            "120"
        ],
        "answer": 3,
        "hint": "5 × 4 × 3 × 2 × 1",
        "explanation": "The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. 5! = 120.",
        "topicBadge": "Combinatorics"
    },
    {
        "difficulty": "intermediate",
        "question": "What irrational constant, represented by Phi (φ ≈ 1.618), appears frequently in Fibonacci ratios, spiral shells, and aesthetics?",
        "options": [
            "Euler-Mascheroni constant",
            "Euler's Constant",
            "The Golden Ratio",
            "Plastic Number"
        ],
        "answer": 2,
        "hint": "(1 + √5) / 2",
        "explanation": "The Golden Ratio is a proportion where the ratio of the sum to the larger quantity equals the ratio of the larger to the smaller.",
        "topicBadge": "Number Theory"
    },
    {
        "difficulty": "advanced",
        "question": "Which celebrated mathematical identity connects Euler's number (e), the imaginary unit (i), pi (π), 1, and 0 in a single equation?",
        "options": [
            "Taylor Expansion",
            "Gauss's Law",
            "Euler's Identity (e^(iπ) + 1 = 0)",
            "Cauchy-Schwarz Inequality"
        ],
        "answer": 2,
        "hint": "Often voted the most beautiful equation in mathematics.",
        "explanation": "Euler's Identity unites the five fundamental constants of analysis, algebra, and geometry through complex exponentiation.",
        "topicBadge": "Pure Math"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the probability of rolling an exact sum of 7 when throwing two standard six-sided dice?",
        "options": [
            "1/12",
            "1/4",
            "1/6 (6 in 36)",
            "1/7"
        ],
        "answer": 2,
        "hint": "Favorable pairs: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
        "explanation": "There are 6 combinations that sum to 7 out of 36 total outcomes, yielding a probability of 6/36 = 1/6 (~16.67%).",
        "topicBadge": "Probability"
    },
    {
        "difficulty": "beginner",
        "question": "What is the square root of 144?",
        "options": [
            "12",
            "16",
            "11",
            "14"
        ],
        "answer": 0,
        "hint": "12 × 12 = 144",
        "explanation": "12 squared equals 144, making 12 the principal square root.",
        "topicBadge": "Arithmetic"
    },
    {
        "difficulty": "advanced",
        "question": "Which 17th-century conjecture, stating that no three positive integers satisfy aⁿ + bⁿ = cⁿ for any integer n > 2, was finally proven by Andrew Wiles in 1994?",
        "options": [
            "Goldbach's Conjecture",
            "Riemann Hypothesis",
            "Fermat's Last Theorem",
            "Collatz Conjecture"
        ],
        "answer": 2,
        "hint": "Written in the margin of Diophantus's Arithmetica.",
        "explanation": "Pierre de Fermat claimed a proof in 1637, but it remained unproven for 358 years until Andrew Wiles proved it using modular elliptic curves.",
        "topicBadge": "Number Theory"
    }
]
  },
  geography: {
    title: "World Geography",
    description: "Capitals, oceans, mountains, and global topography.",
    icon: "🌍",
    ageGroup: "All Ages",
    heroImage: "/quiz/geography_hero.jpg",
    questions: [
    {
        "difficulty": "beginner",
        "question": "In which Indian state is the historic city of Patna (ancient Pataliputra), located on the south bank of the Ganges, situated?",
        "options": [
            "Madhya Pradesh",
            "Bihar",
            "West Bengal",
            "Uttar Pradesh"
        ],
        "answer": 1,
        "hint": "Capital of Bihar.",
        "explanation": "Patna is the capital and largest city of Bihar, serving as a historic hub of civilization and the focal point of CyberKarma rescue drives.",
        "topicBadge": "Indian Geography"
    },
    {
        "difficulty": "beginner",
        "question": "What is the highest mountain peak above sea level on planet Earth?",
        "options": [
            "Makalu",
            "K2 (Godwin-Austen)",
            "Kangchenjunga",
            "Mount Everest (8,848.86 m)"
        ],
        "answer": 3,
        "hint": "Located in the Mahalangur Himal sub-range.",
        "explanation": "Mount Everest on the Nepal-China border stands at an officially recognized height of 8,848.86 meters above sea level.",
        "topicBadge": "World Geography"
    },
    {
        "difficulty": "beginner",
        "question": "Which river is officially recognized as the longest river in the world, flowing over 6,650 kilometers through northeastern Africa?",
        "options": [
            "Amazon River",
            "Mississippi River",
            "Nile River",
            "Yangtze River"
        ],
        "answer": 2,
        "hint": "Flows through 11 countries into the Mediterranean.",
        "explanation": "The Nile River spans roughly 6,650 km, while the Amazon River holds the record for largest water discharge volume.",
        "topicBadge": "Hydrology"
    },
    {
        "difficulty": "intermediate",
        "question": "Which desert is the largest desert on Earth by total land area?",
        "options": [
            "Arabian Desert",
            "Gobi Desert",
            "Antarctic Polar Desert",
            "Sahara Desert"
        ],
        "answer": 2,
        "hint": "Deserts are defined by low precipitation, not heat.",
        "explanation": "Covering 14.2 million sq km, the Antarctic continent is classified as a polar desert and is larger than the 9.2 million sq km Sahara.",
        "topicBadge": "Physical Geography"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the deepest known point in Earth's oceans, located in the Mariana Trench?",
        "options": [
            "Challenger Deep (~10,994 m)",
            "Milwaukee Deep",
            "Puerto Rico Trench",
            "Java Trench"
        ],
        "answer": 0,
        "hint": "Located in the western Pacific Ocean.",
        "explanation": "Challenger Deep plunges nearly 11 kilometers beneath the Pacific surface, subjecting the abyss to over 1,000 atmospheres of pressure.",
        "topicBadge": "Oceanography"
    },
    {
        "difficulty": "beginner",
        "question": "What artificial maritime waterway, opened in 1869, connects the Mediterranean Sea directly to the Red Sea?",
        "options": [
            "Corinth Canal",
            "Suez Canal",
            "Panama Canal",
            "Kiel Canal"
        ],
        "answer": 1,
        "hint": "Enables direct shipping between Europe and Asia.",
        "explanation": "The Suez Canal in Egypt eliminates the need for maritime ships to circumnavigate the southern tip of Africa around the Cape of Good Hope.",
        "topicBadge": "Global Trade Routes"
    },
    {
        "difficulty": "beginner",
        "question": "What is the capital city of Japan, recognized as the world's most populous metropolitan area?",
        "options": [
            "Sapporo",
            "Kyoto",
            "Tokyo",
            "Osaka"
        ],
        "answer": 2,
        "hint": "Formerly known as Edo.",
        "explanation": "Tokyo serves as the political, cultural, and financial capital of Japan, home to over 37 million residents across its greater metro area.",
        "topicBadge": "Capitals"
    },
    {
        "difficulty": "intermediate",
        "question": "Which geological belt encircling the Pacific Ocean basin is responsible for roughly 75% of the world's volcanoes and 90% of its earthquakes?",
        "options": [
            "The Ring of Fire (Circum-Pacific Belt)",
            "Great Rift Valley",
            "Alpine-Himalayan Orogenic Belt",
            "Mid-Atlantic Ridge"
        ],
        "answer": 0,
        "hint": "A horseshoe-shaped zone of tectonic plate boundaries.",
        "explanation": "The Pacific Ring of Fire is an active tectonic rim where multiple oceanic plates subduct beneath continental plates.",
        "topicBadge": "Geology"
    },
    {
        "difficulty": "beginner",
        "question": "What imaginary line of latitude marks 0 degrees and divides Earth into the Northern and Southern Hemispheres?",
        "options": [
            "The Equator",
            "Tropic of Cancer",
            "Prime Meridian",
            "Arctic Circle"
        ],
        "answer": 0,
        "hint": "Receives direct vertical sunlight twice a year.",
        "explanation": "The Equator is the 40,075-kilometer circumference circle equidistant from the North and South geographic poles.",
        "topicBadge": "Cartography"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the world's largest landlocked country by geographic area, sharing borders with Russia, China, and Central Asian states?",
        "options": [
            "Bolivia",
            "Chad",
            "Kazakhstan",
            "Mongolia"
        ],
        "answer": 2,
        "hint": "Spans 2.7 million square kilometers.",
        "explanation": "Kazakhstan is the world's ninth-largest country overall and the largest country on Earth without direct access to the open ocean.",
        "topicBadge": "Political Geography"
    }
]
  },
  vocab: {
    title: "Vocabulary & Words",
    description: "Linguistics, etymology, and expressive literary terms.",
    icon: "📖",
    ageGroup: "All Ages",
    heroImage: "/quiz/vocab_hero.jpg",
    questions: [
    {
        "difficulty": "beginner",
        "question": "Which word denotes the ability to understand, share, and resonate with the emotional experiences of others?",
        "options": [
            "Apathy",
            "Antipathy",
            "Empathy",
            "Sympathy only"
        ],
        "answer": 2,
        "hint": "Walking in someone else's shoes.",
        "explanation": "Empathy is the cognitive and emotional capacity to place oneself in another's situation and understand their feelings.",
        "topicBadge": "Psychology"
    },
    {
        "difficulty": "beginner",
        "question": "What term describes the selfless practice of concern and action for the welfare and well-being of others without expectation of reward?",
        "options": [
            "Altruism",
            "Egoism",
            "Narcissism",
            "Machiavellianism"
        ],
        "answer": 0,
        "hint": "The core ethical principle behind charity.",
        "explanation": "Altruism is benevolent action motivated by a genuine desire to improve the condition of other sentient beings.",
        "topicBadge": "Ethics"
    },
    {
        "difficulty": "intermediate",
        "question": "What word describes something that is fleeting, short-lived, and lasting for only a brief moment?",
        "options": [
            "Perennial",
            "Indelible",
            "Ephemeral",
            "Immutable"
        ],
        "answer": 2,
        "hint": "Like morning dew or cherry blossoms.",
        "explanation": "Ephemeral comes from the Greek \"ephemeros\", meaning lasting only a day, describing transient or brief phenomena.",
        "topicBadge": "Linguistics"
    },
    {
        "difficulty": "intermediate",
        "question": "What term describes the fortunate occurrence of finding valuable or delightful things by chance and unexpected discovery?",
        "options": [
            "Serendipity",
            "Calculated intent",
            "Calamity",
            "Predestination"
        ],
        "answer": 0,
        "hint": "Coined by author Horace Walpole in 1754.",
        "explanation": "Serendipity refers to the unexpected, fortunate discovery of beneficial things while looking for something entirely different.",
        "topicBadge": "Linguistics"
    },
    {
        "difficulty": "intermediate",
        "question": "What word describes something that is present, appearing, or found everywhere simultaneously?",
        "options": [
            "Obscure",
            "Ubiquitous",
            "Sporadic",
            "Scarce"
        ],
        "answer": 1,
        "hint": "Like smartphones in modern society.",
        "explanation": "Ubiquitous comes from the Latin \"ubique\", meaning everywhere, denoting pervasive and omnipresent things.",
        "topicBadge": "Advanced Vocab"
    },
    {
        "difficulty": "beginner",
        "question": "What word describes the psychological and physical capacity to recover quickly from adversity, trauma, or stress?",
        "options": [
            "Stagnation",
            "Resilience",
            "Fragility",
            "Complacency"
        ],
        "answer": 1,
        "hint": "Bouncing back stronger from hardship.",
        "explanation": "Resilience is the toughness and adaptability that allows individuals and rescue animals to heal and flourish after hardship.",
        "topicBadge": "Character & Mind"
    },
    {
        "difficulty": "intermediate",
        "question": "What is the distinct, pleasant earthy scent produced when rain falls on warm, dry soil?",
        "options": [
            "Ozone",
            "Miasma",
            "Aroma",
            "Petrichor"
        ],
        "answer": 3,
        "hint": "Coined by CSIRO Australian scientists in 1964.",
        "explanation": "Petrichor is caused by geosmin and plant oils absorbed by clay soil, aerosolized into the air by raindrops.",
        "topicBadge": "Nature Vocab"
    },
    {
        "difficulty": "intermediate",
        "question": "Which Southern African philosophy translates to \"I am because we are,\" emphasizing interconnected community and compassion?",
        "options": [
            "Ubuntu",
            "Dharma",
            "Ikigai",
            "Komorebi"
        ],
        "answer": 0,
        "hint": "Emphasizes shared human dignity.",
        "explanation": "Ubuntu is a humanist philosophy affirming that a person's humanity is realized through compassionate connection with others.",
        "topicBadge": "World Philosophy"
    },
    {
        "difficulty": "intermediate",
        "question": "What Japanese artistic philosophy involves repairing broken ceramic pottery with gold lacquer, celebrating scars as part of an object's history?",
        "options": [
            "Origami",
            "Ikebana",
            "Kintsugi",
            "Wabi-sabi"
        ],
        "answer": 2,
        "hint": "Golden joinery.",
        "explanation": "Kintsugi treats breakage and repair as an essential chapter of an object's beauty rather than something to hide.",
        "topicBadge": "Cultural Concepts"
    },
    {
        "difficulty": "advanced",
        "question": "What word describes a generous, noble-spirited, and forgiving disposition, especially toward a rival or in victory?",
        "options": [
            "Vindictive",
            "Magnanimous",
            "Parsimonious",
            "Callous"
        ],
        "answer": 1,
        "hint": "Great-souled (Latin: magna anima).",
        "explanation": "Magnanimity represents noble generosity, courage, and gracious forgiveness in circumstances where one could hold a grudge.",
        "topicBadge": "Virtue Ethics"
    }
]
  },
  gk: {
    title: "General Knowledge",
    description: "Historic milestones, discoveries, and Nobel inventions.",
    icon: "💡",
    ageGroup: "All Ages",
    heroImage: "/quiz/gk_hero.jpg",
    questions: [
    {
        "difficulty": "beginner",
        "question": "Who developed the movable-type mechanical printing press in Mainz, Germany around 1440, catalyzing the European Renaissance and scientific revolution?",
        "options": [
            "Isaac Newton",
            "Johannes Gutenberg",
            "Leonardo da Vinci",
            "Galileo Galilei"
        ],
        "answer": 1,
        "hint": "Printed the Gutenberg Bible.",
        "explanation": "Gutenberg's metal movable type dramatically reduced the cost of books, democratizing literacy and scientific knowledge across Europe.",
        "topicBadge": "Historical Inventions"
    },
    {
        "difficulty": "beginner",
        "question": "Who discovered penicillin in 1928, inaugurating the era of modern antibiotic medicine and saving millions of lives from bacterial infections?",
        "options": [
            "Louis Pasteur",
            "Alexander Fleming",
            "Edward Jenner",
            "Robert Koch"
        ],
        "answer": 1,
        "hint": "Observed Penicillium mold destroying Staphylococci on a petri dish.",
        "explanation": "Sir Alexander Fleming's accidental observation of antibiotic mold in his London laboratory transformed medical treatment worldwide.",
        "topicBadge": "Medicine Pioneers"
    },
    {
        "difficulty": "intermediate",
        "question": "Who is the only scientist in history to receive Nobel Prizes in two distinct scientific disciplines (Physics in 1903 and Chemistry in 1911)?",
        "options": [
            "Albert Einstein",
            "Marie Curie",
            "Niels Bohr",
            "Linus Pauling"
        ],
        "answer": 1,
        "hint": "Discovered Polonium and Radium.",
        "explanation": "Marie Skłodowska-Curie conducted pioneering research on radioactivity, becoming the first woman to win a Nobel and the only person to win in two sciences.",
        "topicBadge": "Nobel Laureates"
    },
    {
        "difficulty": "beginner",
        "question": "Who invented the World Wide Web in 1989 while working at CERN, designing HTML, HTTP, and the first web browser?",
        "options": [
            "Bill Gates",
            "Vint Cerf",
            "Steve Jobs",
            "Tim Berners-Lee"
        ],
        "answer": 3,
        "hint": "Released the technology freely to humanity.",
        "explanation": "Sir Tim Berners-Lee authored the original specifications for URLs, HTTP, and HTML, providing the open foundation for the modern internet.",
        "topicBadge": "Internet History"
    },
    {
        "difficulty": "intermediate",
        "question": "Who wrote what is recognized as the world's first computer algorithm in 1843 for Charles Babbage's mechanical Analytical Engine?",
        "options": [
            "Grace Hopper",
            "Ada Lovelace",
            "Katherine Johnson",
            "Alan Turing"
        ],
        "answer": 1,
        "hint": "Daughter of poet Lord Byron.",
        "explanation": "Countess Ada Lovelace recognized that Babbage's engine could process symbols beyond numbers, publishing the first computer algorithm for calculating Bernoulli numbers.",
        "topicBadge": "Computing Pioneers"
    },
    {
        "difficulty": "intermediate",
        "question": "In which historic year did Apollo 11 astronauts Neil Armstrong and Buzz Aldrin become the first humans to land and walk on the Moon?",
        "options": [
            "1969",
            "1981",
            "1975",
            "1959"
        ],
        "answer": 0,
        "hint": "\"One small step for man, one giant leap for mankind.\"",
        "explanation": "On July 20, 1969, the Apollo 11 Lunar Module Eagle touched down in the Sea of Tranquility, fulfilling the lunar goal.",
        "topicBadge": "Human Milestones"
    },
    {
        "difficulty": "beginner",
        "question": "Who developed the world's first successful vaccine in 1796, using cowpox to confer immunity against smallpox?",
        "options": [
            "Louis Pasteur",
            "Jonas Salk",
            "Edward Jenner",
            "Albert Sabin"
        ],
        "answer": 2,
        "hint": "The pioneer of immunology.",
        "explanation": "Dr. Edward Jenner inoculated young James Phipps with cowpox, proving that related benign viruses could stimulate protective immunity against fatal smallpox.",
        "topicBadge": "Immunology"
    },
    {
        "difficulty": "intermediate",
        "question": "Which ancient Buddhist monastic university in Bihar flourished as a world-renowned international center of higher learning from the 5th to 12th century CE?",
        "options": [
            "Vikramashila",
            "Taxila",
            "Vallabhi",
            "Nalanda Mahavihara"
        ],
        "answer": 3,
        "hint": "Housed thousands of international scholars and a massive nine-story library.",
        "explanation": "Nalanda University near modern Patna was an ancient seat of philosophy, mathematics, logic, and medicine that attracted scholars across Asia.",
        "topicBadge": "Ancient Heritage"
    },
    {
        "difficulty": "beginner",
        "question": "Which Maurya Emperor, after the devastating Kalinga War in 261 BCE, embraced Buddhism and non-violence (Ahimsa), carving moral edicts on stone pillars throughout India?",
        "options": [
            "Samudragupta",
            "Chandragupta Maurya",
            "Harsha",
            "Emperor Ashoka the Great"
        ],
        "answer": 3,
        "hint": "Reigned from Pataliputra (modern Patna).",
        "explanation": "Ashoka renounced armed conquest, establishing hospitals for humans and animals, planting shade trees, and promoting universal compassion across Asia.",
        "topicBadge": "Indian History"
    },
    {
        "difficulty": "intermediate",
        "question": "Who formulated the Three Universal Laws of Motion and the Universal Law of Gravitation in the seminal 1687 work \"Philosophiae Naturalis Principia Mathematica\"?",
        "options": [
            "René Descartes",
            "Johannes Kepler",
            "Galileo Galilei",
            "Sir Isaac Newton"
        ],
        "answer": 3,
        "hint": "Unified terrestrial and celestial mechanics.",
        "explanation": "Newton's Principia established the foundations of classical physics, describing how mass, force, and acceleration govern moving bodies.",
        "topicBadge": "Physics History"
    }
]
  },
};
