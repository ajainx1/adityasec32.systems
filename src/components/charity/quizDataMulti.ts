import { CategoryData, CategoryKey, Question, quizData } from './quizData';
import { quizDataHindi } from './quizDataHindi';
import { Language } from './i18n';

// Fisher-Yates Random Option Shuffler to guarantee answer indices are randomly balanced
export function shuffleOptions(q: Question): Question {
  const originalOptions = [...q.options];
  const origAnswer = q.answer >= 0 && q.answer < originalOptions.length ? q.answer : 0;
  const correctText = originalOptions[origAnswer];

  const shuffled = [...originalOptions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  let newIdx = shuffled.indexOf(correctText);
  if (newIdx === -1) newIdx = 0;

  return {
    ...q,
    options: shuffled,
    answer: newIdx
  };
}

// Spanish Question Bank
export const quizDataSpanish: Record<CategoryKey, CategoryData> = {
  animals: {
    title: "🐾 Rescate de Animales y Vida Silvestre",
    description: "Aprende datos sobre animales y empatía mientras donas comida real para perros callejeros.",
    icon: "🐕",
    ageGroup: "Todas las edades",
    heroImage: "/quiz/animals_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "¿Cómo regulan los perros su temperatura corporal?",
        options: ["A través de sus almohadillas y jadeando", "A través de su pelaje", "Por las orejas", "Por la cola"],
        answer: 0,
        hint: "Tienen glándulas sudoríparas en sus almohadillas y se enfrían con la respiración.",
        explanation: "Los perros regulan el calor principalmente mediante la evaporación durante el jadeo y a través de las almohadillas de sus patas.",
        image: "/impact/dog-feed-1.jpeg",
        topicBadge: "🐾 Cuidado Animal"
      },
      {
        difficulty: 'beginner',
        question: "¿Cuál es el animal callejero conocido como el amigo más leal del hombre?",
        options: ["Perros domésticos y callejeros", "Mapaches", "Ardillas", "Palomas"],
        answer: 0,
        hint: "Han convivido con los humanos durante más de 15,000 años.",
        explanation: "Los perros son reconocidos universalmente por su lealtad incondicional, afecto y compañía.",
        image: "/impact/dog-feed-2.jpeg",
        topicBadge: "🐕 Cuidado Canino"
      },
      {
        difficulty: 'beginner',
        question: "¿Cuál es el beneficio principal de alimentar diariamente a los animales callejeros?",
        options: ["Reduce el hambre y previene agresiones territoriales", "Los hace dormir todo el día", "Les enseña a cazar", "Cambia el color de su pelaje"],
        answer: 0,
        hint: "Los animales comunitarios bien alimentados son tranquilos y saludables.",
        explanation: "La alimentación comunitaria constante reduce el estrés por hambre y los conflictos territoriales en más del 85%.",
        image: "/impact/dog-feed-3.jpeg",
        topicBadge: "🍲 Bienestar Comunitario"
      },
      {
        difficulty: 'intermediate',
        question: "¿Qué estructura ocular permite a los perros ver excepcionalmente bien en la oscuridad?",
        options: ["El Tapetum Lucidum detrás de la retina", "Lentes infrarrojos biológicos", "Fotorreceptores térmicos", "Pigmentos fluorescentes"],
        answer: 0,
        hint: "Refleja la luz hacia las células fotorreceptoras.",
        explanation: "El tapetum lucidum actúa como un retrorreflector detrás de la retina, multiplicando los fotones disponibles.",
        image: "/impact/dog-feed-5.jpeg",
        topicBadge: "👁️ Fisiología Canina"
      },
      {
        difficulty: 'advanced',
        question: "¿Qué indica según la neurociencia que un perro mueva su cola predominantemente hacia la DERECHA?",
        options: ["Emociones positivas y motivación de acercamiento", "Miedo y deseo de huida", "Somnolencia", "Agresión extrema"],
        answer: 0,
        hint: "El hemisferio izquierdo del cerebro procesa emociones positivas y controla el lado derecho.",
        explanation: "Estudios neurocientíficos demuestran que los perros mueven la cola a la derecha ante estímulos amigables.",
        image: "/impact/dog-feed-8.jpeg",
        topicBadge: "🧠 Neurociencia Animal"
      }
    ]
  },
  cybersecurity: {
    title: "🛡️ Ciberseguridad y Red Teaming",
    description: "Domina la seguridad de redes, defensa en profundidad y mitigación de amenazas.",
    icon: "🛡️",
    ageGroup: "Intermedio a Experto",
    heroImage: "/quiz/cyber_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "¿Qué significa el principio de 'Mínimo Privilegio' (PoLP) en seguridad?",
        options: ["Otorgar únicamente los permisos mínimos necesarios para realizar la tarea", "Dar acceso de administrador a todos los usuarios", "Bloquear todo el acceso a internet", "Desactivar la autenticación de dos factores"],
        answer: 0,
        hint: "Limitar los permisos reduce la superficie de ataque.",
        explanation: "El principio de mínimo privilegio asegura que cada usuario o proceso tenga solo los accesos estrictamente indispensables.",
        image: "/impact/dog-feed-9.jpeg",
        topicBadge: "🔐 Fundamentos de Seguridad"
      },
      {
        difficulty: 'intermediate',
        question: "¿Qué tecnología verifica continuamente la identidad y el contexto antes de conceder acceso a recursos?",
        options: ["Arquitectura Zero Trust (ZTA)", "Contraseñas estáticas simples", "Redes abiertas sin cifrado", "Protocolo Telnet sin autenticación"],
        answer: 0,
        hint: "'Nunca confiar, siempre verificar'.",
        explanation: "Zero Trust asume que las amenazas existen tanto dentro como fuera de la red perimetral.",
        image: "/impact/dog-feed-10.jpeg",
        topicBadge: "🛡️ Zero Trust"
      },
      {
        difficulty: 'advanced',
        question: "¿Cuál es el vector principal de un ataque de Hombre en el Medio (MitM) en redes locales?",
        options: ["Envenenamiento ARP (ARP Spoofing)", "Fuerza bruta de contraseñas SSH", "Inyección SQL en base de datos", "Ataque DDoS volumétrico"],
        answer: 0,
        hint: "Asocia la MAC del atacante con la IP de la puerta de enlace predeterminada.",
        explanation: "El envenenamiento ARP falsifica respuestas ARP en la capa de enlace de datos para interceptar el tráfico.",
        image: "/impact/dog-feed-11.jpeg",
        topicBadge: "⚡ Ataques de Red"
      }
    ]
  },
  space: {
    title: "🚀 Astronomía y Exploración Espacial",
    description: "Descubre los secretos del cosmos, agujeros negros y misiones interplanetarias.",
    icon: "🚀",
    ageGroup: "Todas las edades",
    heroImage: "/quiz/space_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "¿Cuál es el planeta más grande de nuestro Sistema Solar?",
        options: ["Júpiter", "Saturno", "Neptuno", "Marte"],
        answer: 0,
        hint: "Es un gigante gaseoso con una Gran Mancha Roja.",
        explanation: "Júpiter tiene una masa más de 2.5 veces mayor que todos los demás planetas combinados.",
        image: "/impact/dog-feed-12.jpeg",
        topicBadge: "🪐 Sistema Solar"
      },
      {
        difficulty: 'intermediate',
        question: "¿Qué telescopio espacial utiliza óptica infrarroja para observar las primeras galaxias del universo?",
        options: ["Telescopio Espacial James Webb (JWST)", "Telescopio Hubble", "Observatorio Chandra", "Telescopio Kepler"],
        answer: 0,
        hint: "Ubicado en el punto de Lagrange L2.",
        explanation: "El JWST observa longitudes de onda infrarrojas para penetrar el polvo cósmico y ver el universo primitivo.",
        image: "/impact/dog-feed-13.jpeg",
        topicBadge: "🔭 Telescopios Espaciales"
      },
      {
        difficulty: 'advanced',
        question: "¿Cómo se llama el límite alrededor de un agujero negro del cual nada, ni siquiera la luz, puede escapar?",
        options: ["Horizonte de Sucesos", "Ergosfera", "Singularidad", "Límite de Chandrasekhar"],
        answer: 0,
        hint: "Es el punto de no retorno gravitacional.",
        explanation: "El horizonte de sucesos es el límite donde la velocidad de escape excede la velocidad de la luz en el vacío.",
        image: "/impact/dog-feed-14.jpeg",
        topicBadge: "🌌 Astrofísica Relativista"
      }
    ]
  },
  math: {
    title: "📐 Matemáticas y Lógica Numérica",
    description: "Pon a prueba tu agilidad mental con geometría, aritmética y acertijos lógicos.",
    icon: "🔢",
    ageGroup: "Todas las edades",
    heroImage: "/quiz/math_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "¿Cuál es el valor de Pi (π) redondeado a dos decimales?",
        options: ["3.14", "3.16", "3.12", "3.18"],
        answer: 0,
        hint: "La relación entre la circunferencia y el diámetro de un círculo.",
        explanation: "Pi es una constante matemática aproximadamente igual a 3.14159.",
        image: "/impact/dog-feed-1.jpeg",
        topicBadge: "🔢 Constantes Matemáticas"
      },
      {
        difficulty: 'intermediate',
        question: "¿Cuál es el único número primo que también es par?",
        options: ["2", "4", "0", "1"],
        answer: 0,
        hint: "Es el primer número primo en la recta numérica.",
        explanation: "El 2 es el único número par divisible únicamente por 1 y por sí mismo.",
        image: "/impact/dog-feed-2.jpeg",
        topicBadge: "🧮 Teoría de Números"
      }
    ]
  },
  vocab: {
    title: "📖 Vocabulario y Lingüística",
    description: "Amplía tu vocabulario global con etimología, sinónimos y modismos.",
    icon: "📖",
    ageGroup: "Todas las edades",
    heroImage: "/quiz/vocab_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "¿Qué término describe la capacidad de comprender y compartir los sentimientos de los demás?",
        options: ["Empatía", "Apatía", "Antipatía", "Sarcasmo"],
        answer: 0,
        hint: "Fundamental para el cuidado humano y animal.",
        explanation: "La empatía es la capacidad cognitiva y afectiva de ponerse en el lugar del otro.",
        image: "/impact/dog-feed-3.jpeg",
        topicBadge: "📚 Psicología y Lenguaje"
      },
      {
        difficulty: 'intermediate',
        question: "¿Qué palabra describe el acto desinteresado de ayudar y alimentar a seres necesitados?",
        options: ["Altruismo", "Egoísmo", "Pragmatismo", "Solipsismo"],
        answer: 0,
        hint: "El principio motor detrás de CyberKarma.",
        explanation: "El altruismo es la devoción desinteresada por el bienestar y supervivencia de los demás.",
        image: "/impact/dog-feed-4.jpeg",
        topicBadge: "🌟 Ética y Filosofía"
      }
    ]
  },
  geography: {
    title: "🌍 Geografía y Cartografía Mundial",
    description: "Explora continentes, capitales mundiales, océanos y maravillas naturales.",
    icon: "🌍",
    ageGroup: "Todas las edades",
    heroImage: "/quiz/geography_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "¿En qué estado de la India se encuentra la histórica ciudad de Patna, donde se realizan las donaciones de alimentos?",
        options: ["Bihar", "Maharashtra", "Uttar Pradesh", "Bengala Occidental"],
        answer: 0,
        hint: "Antiguamente conocida como Pataliputra, a orillas del río Ganges.",
        explanation: "Patna es la capital de Bihar, donde el equipo de CyberKarma realiza rescates y alimentaciones diarias.",
        image: "/impact/dog-feed-5.jpeg",
        topicBadge: "📍 Geografía de la India"
      },
      {
        difficulty: 'intermediate',
        question: "¿Cuál es el río más largo del mundo?",
        options: ["Río Nilo (o Amazonas)", "Río Yangtsé", "Río Mississippi", "Río Danubio"],
        answer: 0,
        hint: "Fluye hacia el norte a través del este de África.",
        explanation: "El río Nilo recorre más de 6,650 km a través de múltiples naciones africanas.",
        image: "/impact/dog-feed-6.jpeg",
        topicBadge: "🌊 Hidrología Mundial"
      }
    ]
  },
  science: {
    title: "🔬 Ciencias Naturales y Física",
    description: "Comprende la física cuántica, biología celular y reacciones químicas.",
    icon: "🔬",
    ageGroup: "Todas las edades",
    heroImage: "/quiz/science_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "¿Cuál es la velocidad de la luz en el vacío?",
        options: ["Aproximadamente 300,000 km/s", "150,000 km/s", "1,000,000 km/s", "3,000 km/s"],
        answer: 0,
        hint: "Es la velocidad límite fundamental del universo (constante c).",
        explanation: "La luz viaja a exactamente 299,792,458 metros por segundo en el vacío.",
        image: "/impact/dog-feed-7.jpeg",
        topicBadge: "⚡ Física Fundamental"
      },
      {
        difficulty: 'intermediate',
        question: "¿Qué orgánulo es conocido como la 'central energética' de la célula eucariota?",
        options: ["Mitocondria", "Ribosoma", "Aparato de Golgi", "Retículo endoplasmático"],
        answer: 0,
        hint: "Genera la mayor parte del ATP celular.",
        explanation: "Las mitocondrias producen energía química en forma de trifosfato de adenosina (ATP).",
        image: "/impact/dog-feed-8.jpeg",
        topicBadge: "🧬 Biología Celular"
      }
    ]
  },
  gk: {
    title: "💡 Cultura General y Grandes Inventos",
    description: "Descubre inventos que cambiaron la historia humana y el pensamiento.",
    icon: "💡",
    ageGroup: "Todas las edades",
    heroImage: "/quiz/gk_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "¿Quién inventó la imprenta de tipos móviles en Europa hacia 1440?",
        options: ["Johannes Gutenberg", "Leonardo da Vinci", "Isaac Newton", "Galileo Galilei"],
        answer: 0,
        hint: "Revolucionó la difusión del conocimiento y la alfabetización masiva.",
        explanation: "La imprenta de tipos móviles de Gutenberg aceleró el Renacimiento y la Revolución Científica.",
        image: "/impact/dog-feed-9.jpeg",
        topicBadge: "🏛️ Historia de la Tecnología"
      },
      {
        difficulty: 'intermediate',
        question: "¿Qué científico formuló la teoría de la relatividad general?",
        options: ["Albert Einstein", "Niels Bohr", "Max Planck", "Nikola Tesla"],
        answer: 0,
        hint: "Publicada en 1915, describe la gravedad como la curvatura del espacio-tiempo.",
        explanation: "Albert Einstein demostró que la masa y la energía curvan el tejido del espacio-tiempo.",
        image: "/impact/dog-feed-10.jpeg",
        topicBadge: "🌌 Física Moderna"
      }
    ]
  }
};

// French Question Bank
export const quizDataFrench: Record<CategoryKey, CategoryData> = {
  ...quizDataSpanish,
  animals: {
    title: "🐾 Protection Animale et Faune",
    description: "Découvrez la biologie animale et l'empathie tout en finançant des repas pour chiens errants.",
    icon: "🐕",
    ageGroup: "Tous âges",
    heroImage: "/quiz/animals_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "Comment les chiens régulent-ils principalement leur température corporelle ?",
        options: ["Par les coussinets et le halètement", "Par leur pelage", "Par leurs oreilles", "Par leur queue"],
        answer: 0,
        hint: "Ils ont des glandes sudoripares sur les coussinets et halètent pour se refroidir.",
        explanation: "Les chiens se refroidissent principalement par évaporation lors du halètement et via leurs coussinets.",
        image: "/impact/dog-feed-1.jpeg",
        topicBadge: "🐾 Soins Animaliers"
      },
      {
        difficulty: 'beginner',
        question: "Quel animal errant est considéré comme le plus fidèle compagnon de l'humain ?",
        options: ["Le chien", "Le raton laveur", "L'écureuil", "Le pigeon"],
        answer: 0,
        hint: "Compagnon des humains depuis plus de 15 000 ans.",
        explanation: "Les chiens sont reconnus universellement pour leur fidélité et leur affection inconditionnelles.",
        image: "/impact/dog-feed-2.jpeg",
        topicBadge: "🐕 Biologie Canine"
      }
    ]
  },
  cybersecurity: {
    title: "🛡️ Cybersécurité et Défense Réseau",
    description: "Maîtrisez la sécurité des réseaux, le chiffrement et la résilience face aux menaces.",
    icon: "🛡️",
    ageGroup: "Tous âges",
    heroImage: "/quiz/cyber_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "Que signifie le principe du 'Moindre Privilège' en sécurité informatique ?",
        options: ["N'accorder que les permissions strictement nécessaires à l'exécution de la tâche", "Donner les droits administrateur à tout le monde", "Désactiver le pare-feu", "Supprimer les mots de passe"],
        answer: 0,
        hint: "Réduire les droits réduit la surface d'attaque.",
        explanation: "Le principe de moindre privilège garantit qu'un utilisateur n'a accès qu'aux ressources indispensables.",
        image: "/impact/dog-feed-9.jpeg",
        topicBadge: "🔐 Sécurité"
      }
    ]
  }
};

// German Question Bank
export const quizDataGerman: Record<CategoryKey, CategoryData> = {
  ...quizDataSpanish,
  animals: {
    title: "🐾 Tierschutz & Wildtier-Wissen",
    description: "Lerne Tierbiologie und Empathie und spende echtes Futter für Straßentiere.",
    icon: "🐕",
    ageGroup: "Alle Altersgruppen",
    heroImage: "/quiz/animals_hero.jpg",
    questions: [
      {
        difficulty: 'beginner',
        question: "Wie regulieren Hunde hauptsächlich ihre Körpertemperatur?",
        options: ["Über ihre Pfotenballen und Hecheln", "Über ihr Fell", "Über die Ohren", "Über die Rute"],
        answer: 0,
        hint: "Schweißdrüsen befinden sich an den Pfotenballen.",
        explanation: "Hunde kühlen sich primär durch Verdunstungskälte beim Hecheln und über die Pfoten ab.",
        image: "/impact/dog-feed-1.jpeg",
        topicBadge: "🐾 Tierpflege"
      }
    ]
  }
};

// Unified Master Multi-Language Question Bank Getter
export function getQuizDataForLanguage(lang: Language): Record<CategoryKey, CategoryData> {
  if (lang === 'hi') {
    return quizDataHindi;
  }
  if (lang === 'es') {
    return quizDataSpanish;
  }
  if (lang === 'fr') {
    return quizDataFrench;
  }
  if (lang === 'de') {
    return quizDataGerman;
  }
  // Default to rich English dataset for other international codes (bn, ta, te, ja, ar)
  return quizData;
}
