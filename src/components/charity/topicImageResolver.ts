/**
 * Topic Image Resolver
 * Provides reliable, lightweight imagery with guaranteed instant local fallbacks.
 */

const LOCAL_CATEGORY_HEROES: Record<string, string> = {
  animals: '/quiz/animals_hero.jpg',
  cybersecurity: '/quiz/cybersecurity_hero.jpg',
  space: '/quiz/space_hero.jpg',
  science: '/quiz/science_hero.jpg',
  math: '/quiz/math_hero.jpg',
  geography: '/quiz/geography_hero.jpg',
  vocab: '/quiz/vocab_hero.jpg',
  gk: '/quiz/gk_hero.jpg',
  'custom-ai': '/quiz/ai_hero.jpg'
};

const TOPIC_IMAGE_DICTIONARY: { keywords: string[]; url: string }[] = [
  // 🦅 Birds & Ornithology
  {
    keywords: ['ornithology', 'bird', 'hummingbird', 'avian', 'पक्षी', 'चिड़िया', 'flight', 'hovering', 'backward flight', 'swift', 'swallow', 'kingfisher', 'eagle', 'falcon', 'parrot', 'owl', 'feathers', 'beak'],
    url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=640&q=70'
  },
  // 🐶 Canine & Animals
  {
    keywords: ['puppy', 'puppies', 'पिल्ला', 'litter', 'newborn', 'dog-feed-13'],
    url: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['dog', 'canine', 'panting', 'tongue', 'sweat', 'तापमान', 'हाफ', 'कुत्ते', 'श्वान'],
    url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['chocolate', 'theobromine', 'toxic', 'चॉकलेट', 'विषाक्त', 'poison'],
    url: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['antiseptic', 'wound', 'betadine', 'iodine', 'घाव', 'बीटाडीन', 'first aid', 'bandage', 'injur'],
    url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['rabies', 'vaccin', 'रेबीज', 'टीका', 'virus', 'central nervous'],
    url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['tiger', 'bengal', 'बाघ', 'राष्ट्रीय पशु', 'predator', 'panthera'],
    url: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['dinosaur', 't-rex', 'fossils', 'डायनासोर', 'prehistoric', 'jurassic', 'paleontolog'],
    url: 'https://images.unsplash.com/photo-1525877442103-5dd52293b01a?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['ocean', 'marine', 'deep sea', 'whale', 'shark', 'dolphin', 'डॉल्फिन', 'समुद्र', 'coral', 'fish'],
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['cat', 'feline', 'kitten', 'बिल्ली', 'lion', 'cheetah', 'leopard'],
    url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=640&q=70'
  },

  // 🛡️ Cybersecurity & Tech
  {
    keywords: ['password', 'passcode', 'credential', 'पासवर्ड', 'brute force', 'entropy', 'cyber_pass'],
    url: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['phishing', 'social engineering', 'फ़िशिंग', 'scam', 'fraud', 'email fake', 'cyber_phish'],
    url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['mfa', '2fa', 'authenticat', 'otp', 'biometric', 'प्रमाणीकरण', 'cyber_mfa'],
    url: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['zero trust', 'firewall', 'ngfw', 'palo alto', 'fortinet', 'network security', 'cyber_zt'],
    url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['ai', 'neural', 'artificial intelligence', 'llm', 'machine learning', 'gemini', 'robot', 'एआई'],
    url: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['hacker', 'hacking', 'kali', 'ethical hack', 'vapt', 'exploit', 'हैकिंग'],
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=640&q=70'
  },

  // 🚀 Space & Universe
  {
    keywords: ['jupiter', 'बृहस्पति', 'great red spot', 'gas giant', 'space_jupiter'],
    url: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['sun', 'solar', 'सूर्य', 'star nearest', 'solar flare', 'space_sun'],
    url: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['light year', 'प्रकाश वर्ष', 'cosmic distance', 'speed of light', 'space_lightyear'],
    url: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['black hole', 'event horizon', 'singularity', 'ब्लैक होल', 'घटना क्षितिज', 'space_blackhole'],
    url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['mars', 'मंगल', 'spacex', 'red planet', 'rover'],
    url: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['moon', 'chandrayaan', 'apollo', 'चन्द्रमा', 'lunar'],
    url: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?auto=format&fit=crop&w=640&q=70'
  },

  // 🔬 Science & Nature
  {
    keywords: ['water', 'h2o', 'जल', 'पानी', 'hydrogen', 'oxygen', 'science_water'],
    url: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['mitochondria', 'cell', 'powerhouse', 'कोशिका', 'माइटोकॉन्ड्रिया', 'atp', 'biology', 'science_cell'],
    url: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['light', 'speed', '300,000', 'प्रकाश', 'निर्वात', 'physics', 'quantum', 'science_light'],
    url: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=640&q=70'
  },

  // 🧮 Math & Geometry
  {
    keywords: ['triangle', 'right angle', '90', 'समकोण', 'त्रिभुज', 'geometry', 'math_triangle'],
    url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['prime number', '2', 'अभाज्य', 'संख्या', 'arithmetic', 'math_prime'],
    url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=640&q=70'
  },

  // 🌍 Geography
  {
    keywords: ['asia', 'एशिया', 'continent', 'महाद्वीप', 'geo_asia'],
    url: 'https://images.unsplash.com/photo-1535139262971-c51845709a48?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['nile', 'नील नदी', 'river', 'amazon', 'ganga', 'geo_nile'],
    url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['tokyo', 'japan', 'honshu', 'टोक्यो', 'जापान', 'geo_tokyo'],
    url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=640&q=70'
  },
  {
    keywords: ['pyramid', 'egypt', 'पिरामिड', 'मिस्र', 'pharaoh', 'sphinx'],
    url: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=640&q=70'
  }
];

export function resolveContextualQuestionImage(
  questionText: string,
  topicBadge?: string,
  categoryKey?: string,
  customTopic?: string,
  providedImage?: string
): string {
  // If local file path provided and starts with slash, check or return
  if (providedImage && providedImage.startsWith('/')) {
    return providedImage;
  }

  const query = `${questionText || ''} ${topicBadge || ''} ${customTopic || ''} ${providedImage || ''}`.toLowerCase();

  for (const entry of TOPIC_IMAGE_DICTIONARY) {
    for (const kw of entry.keywords) {
      if (query.includes(kw.toLowerCase())) {
        return entry.url;
      }
    }
  }

  // Guaranteed fast local category fallback
  const cat = categoryKey === 'random' ? 'animals' : (categoryKey || 'animals');
  return LOCAL_CATEGORY_HEROES[cat] || '/quiz/animals_hero.jpg';
}
