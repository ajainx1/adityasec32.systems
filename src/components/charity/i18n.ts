export type Language = 'en' | 'hi';

export const UI_TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    // Header & Nav
    siteTitle: "CyberKarma",
    siteTagline: "Knowledge Into Food",
    language: "Language",
    english: "English",
    hindi: "हिंदी",
    switchLang: "हिंदी में खेलें",
    signIn: "Sign In",
    logout: "Log Out",
    welcomeUser: "Welcome",
    streakLabel: "Day Streak",
    shieldLabel: "Shields",
    impactLedger: "Impact Ledger",
    liveNoc: "Live NOC",
    portfolio: "Portfolio",
    themeToggle: "Toggle Theme",
    soundOn: "Sound FX On",
    soundOff: "Sound FX Muted",

    // Floating Wisdom Banner
    dailyWisdomTitle: "Daily Wisdom & Scientific Fact",
    nextFact: "Next Fact",
    dismiss: "Dismiss",
    scienceBadge: "Discovery",

    // Hero Section
    heroBadge: "100% Non-Profit Proof of Karma",
    heroTitlePart1: "Answer Trivia.",
    heroTitlePart2: "Feed Street Dogs.",
    heroSubtitle: "Every correct answer generates 10 grains of real food for rescue animals and vulnerable communities—powered by transparent digital proof.",
    
    // Stats Bar
    totalRiceDonated: "Grains of Rice Donated",
    verifiedMealsServed: "Meals Delivered",
    animalsBeneficiaries: "Animals & Lives Supported",
    livePhilanthropists: "Live Players Online",
    sponsorFunded: "100% Sponsor Funded",

    // Highlight Badges
    pledgePerAnswer: "10 Grains Pledged / Answer",
    nonProfitBadge: "100% Free & Non-Profit",
    groundImpactBadge: "Verified Ground Impact",

    // Category Tabs
    categories: "Categories",
    randomCategory: "Random",
    aiQuiz: "AI Quiz",
    difficultyBeginner: "Easy",
    difficultyIntermediate: "Medium",
    difficultyAdvanced: "Hard",

    // Question Area
    questionScenario: "Scenario Context",
    orAnswerKeys: "or [1, 2, 3, 4] to answer",
    spaceToNext: "Next",
    hForHint: "Hint",
    useHintBtn: "Use Hint (-5 Grains)",
    hintRevealed: "Hint Revealed",
    notEnoughGrains: "Not enough grains! You need 5 to use a hint.",

    // Feedback & Explanations
    correctFeedback: "Correct! +{points} grains donated.",
    correctPlanetBonus: "Correct! +{points} grains donated (PLANET BONUS 2X!).",
    comboStreakFeedback: "🔥 COMBO STREAK! 2X MULTIPLIER! +{points} grains donated!",
    incorrectFeedback: "Incorrect. Try the next one!",
    correctAnswerTitle: "Brilliant! Correct Answer",
    incorrectAnswerTitle: "Incorrect Answer",
    correctAnswerIs: "Correct Answer:",
    whyCorrectInsight: "Why This Is Correct & Key Insight:",
    nextQuestionBtn: "Next Question",

    // Recipient Causes
    targetBeneficiary: "Target Beneficiary Cause",
    causeDogs: "Street & Rescue Dogs",
    causeDogsDesc: "High-protein recovery bowls & safe shelter",
    causeSlum: "Underprivileged Children",
    causeSlumDesc: "Nutritious grain bowls & fresh hydration",
    causeBirds: "Urban & Stray Birds",
    causeBirdsDesc: "Wild millet, seeds & clean water bowls",
    causeCows: "Old & Rescued Cattle",
    causeCowsDesc: "Fresh green fodder & shelter care",

    // Staking Nodes
    stakingTitle: "Proof-of-Karma Decentralized Rice Nodes",
    stakingSubtitle: "Your correct answers stake real grains into local city shelter feeds.",
    stakedGrains: "Staked",
    validatorStatus: "Active Feeding Node",

    // Daily Streaks & Rewards
    dailyStreakTitle: "Daily Karma Streak",
    streakShieldActive: "Streak Shield Armed",
    luckyCrateReady: "Lucky Crate Ready!",
    openCrate: "Open Lucky Crate",

    // Modals
    signInModalTitle: "Sign In to CyberKarma",
    signInModalSubtitle: "Save your lifetime rice donations, claim daily streaks, and secure your place on global leaderboards.",
    continueWithGoogle: "Continue with Google",
    googleAccountName: "Google Account Name / Handle",
    googleEmailAddress: "Google Gmail Address",
    signInWithGoogleBtn: "Sign In with Google",
    backToOptions: "Back to all options",
    orEmailLink: "OR EMAIL MAGIC LINK",
    instantSignInBtn: "Instant Sign In / Sync",
    emailPlaceholder: "you@example.com",
    freeNonCommercial: "100% Free & Non-Commercial • No Spam Ever",

    // AI Modal
    aiModalTitle: "Generate Custom AI Quiz",
    aiModalSubtitle: "Create 5 real-time questions on any topic using Gemini 2.5 Flash.",
    aiTopicLabel: "Quiz Topic",
    aiTopicPlaceholder: "e.g., Quantum Computing, Animal Behavior, Ancient India",
    geminiKeyLabel: "Gemini API Key",
    geminiKeyPlaceholder: "AIzaSy...",
    generateQuizBtn: "Generate & Play AI Quiz",
    generatingAI: "Synthesizing Questions with AI...",

    // FAQ Section
    faqBadge: "KNOWLEDGE BASE & MISSION",
    faqTitle: "Frequently Asked Questions",
    faqQ1: "How does answering trivia translate into real animal food?",
    faqA1: "CyberKarma operates transparently through corporate sponsors, ethical privacy-safe web sponsorships, and creator personal pledges. Every correct trivia answer generates dedicated charitable funding used to purchase high-grade grains, dog kibble, cattle fodder, and bird feed.",
    faqQ2: "Is CyberKarma 100% free?",
    faqA2: "Yes! CyberKarma is 100% non-profit and completely free forever. You never pay a single cent. All donations are funded through educational engagement and corporate social responsibility (CSR) sponsors.",
    faqQ3: "Where can I see proof of ground deliveries?",
    faqA3: "Visit our public Impact Ledger page anytime to inspect geotagged delivery photos, NGO partner receipts, grain weight verifications, and cryptographic ledger proofs.",

    // Footer
    footerMission: "CyberKarma is an open educational public-good initiative by Aditya Vardhan Jain (adityasec32). Designed to turn global curiosity into verified street animal rescue meals.",
    footerPrivacy: "Zero Tracking • No Ads • Open Source Impact"
  },

  hi: {
    // Header & Nav
    siteTitle: "साइबरकर्म (CyberKarma)",
    siteTagline: "ज्ञान से सेवा और अन्नदान",
    language: "भाषा",
    english: "English",
    hindi: "हिंदी",
    switchLang: "Play in English",
    signIn: "लॉग इन करें",
    logout: "लॉग आउट",
    welcomeUser: "स्वागत है",
    streakLabel: "दैनिक स्ट्रीक",
    shieldLabel: "सुरक्षा शील्ड्स",
    impactLedger: "दान रिकॉर्ड (Impact)",
    liveNoc: "लाइव एनओसी",
    portfolio: "पोर्टफोलियो",
    themeToggle: "थीम बदलें",
    soundOn: "ध्वनि चालू",
    soundOff: "ध्वनि बंद",

    // Floating Wisdom Banner
    dailyWisdomTitle: "दैनिक ज्ञान एवं वैज्ञानिक तथ्य",
    nextFact: "अगला तथ्य",
    dismiss: "हटाएं",
    scienceBadge: "रोचक खोज",

    // Hero Section
    heroBadge: "100% गैर-लाभकारी निस्वार्थ सेवा",
    heroTitlePart1: "सवालों के जवाब दें।",
    heroTitlePart2: "भूखे जानवरों को भोजन कराएं।",
    heroSubtitle: "प्रत्येक सही उत्तर पर बेसहारा कुत्तों, पक्षियों व जरूरतमंदों के लिए 10 दाने असली अनाज दान होता है—पारदर्शी फोटो व बिल प्रमाण के साथ।",
    
    // Stats Bar
    totalRiceDonated: "कुल दान किए गए दाने",
    verifiedMealsServed: "सत्यापित भोजन परोसे गए",
    animalsBeneficiaries: "लाभान्वित बेसहारा जीव",
    livePhilanthropists: "लाइव सक्रिय खिलाड़ी",
    sponsorFunded: "100% प्रायोजक पोषित",

    // Highlight Badges
    pledgePerAnswer: "❤️ 10 दाने प्रति सही उत्तर",
    nonProfitBadge: "🕊️ 100% निःशुल्क एवं धर्मार्थ",
    groundImpactBadge: "🌍 ज़मीनी स्तर पर सत्यापित",

    // Category Tabs
    categories: "विषय (श्रेणियाँ)",
    randomCategory: "🎲 रैंडम",
    aiQuiz: "⚡ एआई क्विज",
    difficultyBeginner: "सरल",
    difficultyIntermediate: "मध्यम",
    difficultyAdvanced: "कठिन",

    // Question Area
    questionScenario: "परिदृश्य संदर्भ",
    orAnswerKeys: "या उत्तर देने के लिए [1, 2, 3, 4] दबाएं",
    spaceToNext: "अगला प्रश्न",
    hForHint: "संकेत",
    useHintBtn: "संकेत लें (-5 दाने)",
    hintRevealed: "संकेत प्रदर्शित",
    notEnoughGrains: "पर्याप्त दाने नहीं हैं! संकेत के लिए 5 दानों की आवश्यकता है।",

    // Feedback & Explanations
    correctFeedback: "सही उत्तर! +{points} दाने दान किए गए।",
    correctPlanetBonus: "सही उत्तर! +{points} दाने दान (दोगुना बोनस 2X!).",
    comboStreakFeedback: "🔥 अद्भुत स्ट्रीक! 2X दोगुना गुणक! +{points} दाने दान!",
    incorrectFeedback: "गलत उत्तर। अगला प्रश्न हल करें!",
    correctAnswerTitle: "🎉 शाबाश! सही उत्तर",
    incorrectAnswerTitle: "❌ गलत उत्तर",
    correctAnswerIs: "सही उत्तर:",
    whyCorrectInsight: "💡 यह उत्तर सही क्यों है और मुख्य सीख:",
    nextQuestionBtn: "अगला प्रश्न",

    // Recipient Causes
    targetBeneficiary: "भोजन प्राप्तकर्ता जीव चुनें",
    causeDogs: "बेसहारा एवं सड़क के कुत्ते",
    causeDogsDesc: "पौष्टिक भोजन, दलिया व सुरक्षित आश्रय",
    causeSlum: "जरूरतमंद बच्चे एवं परिवार",
    causeSlumDesc: "पौष्टिक अनाज, खिचड़ी व स्वच्छ जल",
    causeBirds: "शहरी एवं बेसहारा पक्षी",
    causeBirdsDesc: "बाजरा, अनाज के दाने व शीतल जल पात्र",
    causeCows: "वृद्ध एवं निराश्रित गौ माता",
    causeCowsDesc: "ताजा हरा चारा, दलिया व गौशाला सेवा",

    // Staking Nodes
    stakingTitle: "प्रूफ-ऑफ-कर्म विकेंद्रीकृत अनाज नोड्स",
    stakingSubtitle: "आपके सही उत्तर सीधे स्थानीय आश्रयों में अनाज स्टेक करते हैं।",
    stakedGrains: "जमा दाने",
    validatorStatus: "सक्रिय आहार केंद्र",

    // Daily Streaks & Rewards
    dailyStreakTitle: "दैनिक कर्म स्ट्रीक",
    streakShieldActive: "स्ट्रीक शील्ड सक्रिय",
    luckyCrateReady: "लकी क्रेट तैयार है!",
    openCrate: "लकी क्रेट खोलें",

    // Modals
    signInModalTitle: "साइबरकर्म में लॉगिन करें",
    signInModalSubtitle: "अपने जीवनकाल के अनाज दान को सुरक्षित रखें, दैनिक स्ट्रीक शील्ड प्राप्त करें और लीडरबोर्ड पर अपनी जगह बनाएं।",
    continueWithGoogle: "Google से आगे बढ़ें",
    googleAccountName: "गूगल अकाउंट नाम / हैंडल",
    googleEmailAddress: "गूगल जीमेल पता",
    signInWithGoogleBtn: "Google से लॉगिन करें",
    backToOptions: "सभी विकल्पों पर वापस जाएं",
    orEmailLink: "या ईमेल लिंक से लॉगिन करें",
    instantSignInBtn: "तत्काल लॉगिन / सिंक",
    emailPlaceholder: "you@example.com",
    freeNonCommercial: "100% निःशुल्क एवं गैर-व्यावसायिक • कोई स्पैम नहीं",

    // AI Modal
    aiModalTitle: "कस्टम एआई क्विज़ बनाएं",
    aiModalSubtitle: "Gemini 2.5 Flash की सहायता से किसी भी विषय पर 5 लाइव प्रश्न तैयार करें।",
    aiTopicLabel: "क्विज़ का विषय",
    aiTopicPlaceholder: "उदा. क्वांटम भौतिकी, पशु व्यवहार, प्राचीन भारतीय इतिहास",
    geminiKeyLabel: "Gemini API Key",
    geminiKeyPlaceholder: "AIzaSy...",
    generateQuizBtn: "प्रश्नोत्तरी बनाएं और खेलें",
    generatingAI: "एआई द्वारा प्रश्न तैयार किए जा रहे हैं...",

    // FAQ Section
    faqBadge: "ज्ञान केंद्र एवं हमारा मिशन",
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न (FAQ)",
    faqQ1: "सवालों के जवाब देने से असली जानवरों को भोजन कैसे मिलता है?",
    faqA1: "साइबरकर्म पूरी पारदर्शिता के साथ कॉर्पोरेट प्रायोजकों, सीएसआर और व्यक्तिगत दान के माध्यम से संचालित होता है। आपके हर सही जवाब पर हमारे फंड से बेसहारा कुत्तों, गौशालाओं और पक्षियों के लिए असली अनाज व भोजन खरीदा जाता है।",
    faqQ2: "क्या साइबरकर्म पूरी तरह निःशुल्क है?",
    faqA2: "हाँ! साइबरकर्म 100% गैर-लाभकारी और हमेशा के लिए पूरी तरह निःशुल्क है। आपको कभी भी कोई पैसा नहीं देना पड़ता। सारा खर्च प्रायोजकों द्वारा वहन किया जाता है।",
    faqQ3: "क्या हम भोजन वितरण का प्रमाण देख सकते हैं?",
    faqA3: "बिल्कुल! हमारे 'दान रिकॉर्ड (Impact Ledger)' पेज पर जाकर आप जियोटैग की गई तस्वीरें, बिल रसीदें और वितरण की पूरी रिपोर्ट देख सकते हैं।",

    // Footer
    footerMission: "साइबरकर्म आदित्य वर्धन जैन (adityasec32) द्वारा शुरू की गई एक खुली शिक्षा एवं समाज सेवा पहल है, जिसका उद्देश्य ज्ञान को बेसहारा जीवों के भोजन में बदलना है।",
    footerPrivacy: "शून्य ट्रैकिंग • कोई विज्ञापन नहीं • 100% खुला प्रभाव"
  }
};

export const getTranslation = (key: string, lang: Language = 'en'): string => {
  return UI_TRANSLATIONS[lang]?.[key] || UI_TRANSLATIONS['en']?.[key] || key;
};