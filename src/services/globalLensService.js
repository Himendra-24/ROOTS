/**
 * ROOTS Global Lens Service
 * AI-assisted Cultural Translation & Heritage Understanding Engine
 * "AI helps tell their story. The artist owns the story."
 */

const API_BASE_URL = (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_URL) || "http://127.0.0.1:8000";

export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "English", nativeName: "English" },
  { code: "te", label: "Telugu", nativeName: "తెలుగు" },
  { code: "hi", label: "Hindi", nativeName: "हिन्दी" },
  { code: "ja", label: "Japanese", nativeName: "日本語" },
  { code: "fr", label: "French", nativeName: "Français" },
  { code: "es", label: "Spanish", nativeName: "Español" },
  { code: "id", label: "Indonesian", nativeName: "Bahasa Indonesia" },
];

export const PRECOMPUTED_KNOWLEDGE = {
  "artist-002": {
    // English
    en: {
      title: "Tholu Bommalata",
      art_form: "Tholu Bommalata (Leather Shadow Puppetry)",
      origin: "Nellore & Nimmalakunta, Andhra Pradesh, India",
      language: "en",
      introduction: "Tholu Bommalata ('play of leather figures') is an ancient shadow puppetry tradition of Andhra Pradesh, where intricately chiseled, translucent goatskin puppets are illuminated behind a taut white fabric screen.",
      cultural_roots: "Originating in the Deccan plateau with documented references dating back over two millennia, the art was fostered by nomadic balladeer communities and royal dynasties including the Kakatiyas and Vijayanagara kings.",
      materials: [
        "Cured translucent goatskin parchment",
        "Natural plant and mineral dyes (madder red, turmeric, indigo)",
        "Split bamboo control rods and coir fastenings",
        "Tempered steel punches and chisels"
      ],
      techniques: [
        "Chemical-free sun-cured hide thinning for optimal translucence",
        "Intricate geometric perforation for light filtration",
        "Multi-jointed limb articulation with bamboo pivots",
        "Translucent back-lit projection with oil lamp or warm filament illumination"
      ],
      performance: "Performed traditionally across harvest festivals from dusk till dawn, accompanied by harmonium, mridangam, ankle bells (ghungroo), and improvised epic dialogue in Telugu.",
      stories_and_traditions: "Enacts episodes from the Ramayana and Mahabharata, interspersed with grassroots humorous interludes reflecting rural agrarian concerns, monsoon forecasts, and ethical satire.",
      cultural_significance: "Serves as a communal classroom and sacred gathering point, preserving living Telugu dialects, oral musical modes, and visual iconographies through community patronage.",
      global_explanation: "For audiences encountering this art form for the first time: Tholu Bommalata is kinetic stained-glass theater. Long before electric projection and modern cinema, artisans engineered luminous, articulated storytelling figures whose shadows bridge mortal gatherings with timeless mythology.",
      artist_story: "Every puppet I shape requires days of silent chiseling. When the oil lamp glows through the treated hide behind the white cloth, the puppet breathes with the voice of our ancestors. The light carries our village memory through darkness.",
      sources: [
        "Sangeet Natak Akademi Archives on Andhra Folk Arts",
        "Puppetry Traditions of South India (Cultural Heritage Repository)",
        "Documentation of Nimmalakunta Artisan Clusters"
      ],
      uncertainties: [
        "Exact historical century of transition from animal hides to specialized goatskin parchment remains debated among regional folklorists."
      ],
      ai_generated: true,
      artist_approved: false,
      approval_status: "draft"
    },

    // Telugu (Native Cultural Language)
    te: {
      title: "తోలు బొమ్మలాట",
      art_form: "తోలు బొమ్మలాట (ఆంధ్ర సాంప్రదాయ నీడ నాటకం)",
      origin: "నెల్లూరు మరియు నిమ్మలకుంట, ఆంధ్రప్రదేశ్, భారతదేశం",
      language: "te",
      introduction: "తోలు బొమ్మలాట అనేది ఆంధ్రప్రదేశ్ రాష్ట్రపు ప్రాచీన నీడ నాటక కళారూపం. పారదర్శక మేక చర్మంతో తయారుచేసిన రంగుల బొమ్మలను తెల్లటి తెర వెనుక దీపాల కాంతిలో ప్రదర్శిస్తారు.",
      cultural_roots: "దక్కన్ పీఠభూమిలో రెండు వేల సంవత్సరాలకు పైగా చరిత్ర కలిగిన ఈ కళను కాకతీయులు మరియు విజయనగర రాజుల కాలంలో విశేషంగా ఆదరించారు.",
      materials: [
        "పారదర్శకంగా పదునుచేసిన మేక చర్మం",
        "సహజ మూలికా మరియు ఖనిజ రంగులు",
        "వెదురు పుల్లలు మరియు కొబ్బరి పీచు బంధనాలు",
        "చిన్న ఉలి మరియు రంధ్రాలు వేసే పనిముట్లు"
      ],
      techniques: [
        "రసాయనాలు లేకుండా ఎండలో ఆరబెట్టి చర్మాన్ని పల్చగా చేయడం",
        "కాంతి ప్రసారమయ్యేలా సన్నటి నగిషీలు చెక్కడం",
        "వెదురు కీళ్ళతో అవయవాల కదలికలు సమకూర్చడం",
        "నూనె దీపాల కాంతిలో నీడల ప్రదర్శన"
      ],
      performance: "రాత్రివేళల్లో హార్మోనియం, మృదంగం, కాళ్ళ గజ్జెల చప్పుడు మరియు ఆశువుగా పాడే తెలుగు పద్యాలతో తెల్లవారేవరకు ప్రదర్శిస్తారు.",
      stories_and_traditions: "రామాయణ, మహాభారత ఘట్టాలతో పాటు గ్రామీణ ప్రజా జీవితం, పంటలు మరియు హాస్య సంభాషణలను మేళవించి ప్రదర్శిస్తారు.",
      cultural_significance: "గ్రామీణ ప్రజలకు విజ్ఞానాన్ని, నీతిని మరియు పురాణాలను అందించే సజీవ విశ్వవిద్యాలయంగా ఈ కళ నిలిచింది.",
      global_explanation: "మొదటిసారి చూసే అంతర్జాతీయ ప్రేక్షకులకు: ఇది ఆధునిక సినిమా మరియు ప్రొజెక్షన్ పుట్టకముందే వెలుగునీడల ద్వారా కథలు చెప్పే అద్భుతమైన సజీవ దృశ్య కళ.",
      artist_story: "నేను చెక్కే ప్రతి బొమ్మ వెనుక రోజుల తరబడి నిశ్శబ్ద సాధన ఉంటుంది. తెల్లటి తెర వెనుక దీపం వెలిగినప్పుడు ఈ బొమ్మ మన పూర్వీకుల గొంతుకతో మాట్లాడుతుంది.",
      sources: [
        "సంగీత నాటక అకాడమీ జానపద కళల భాండాగారం",
        "ఆంధ్రప్రదేశ్ సాంస్కృతిక వారసత్వ రికార్డులు"
      ],
      uncertainties: [
        "పూర్వ కాలంలో జింక చర్మం నుండి మేక చర్మానికి మారిన ఖచ్చితమైన కాలాన్ని పరిశోధకులు ఇంకా అధ్యయనం చేస్తున్నారు."
      ],
      ai_generated: true,
      artist_approved: false,
      approval_status: "draft"
    },

    // Hindi
    hi: {
      title: "थोलु बोम्मलाटा",
      art_form: "थोलु बोम्मलाटा (चर्म छाया कठपुतली)",
      origin: "नेल्लोर, आंध्र प्रदेश, भारत",
      language: "hi",
      introduction: "थोलु बोम्मलाटा ('चमड़े की आकृतियों का खेल') आंध्र प्रदेश की प्राचीन छाया कठपुतली परंपरा है, जिसमें पारदर्शी चमड़े की रंगीन कठपुतलियों को सफेद पर्दे के पीछे प्रकाश की सहायता से प्रस्तुत किया जाता है।",
      cultural_roots: "दो हजार से अधिक वर्षों के इतिहास के साथ, यह परंपरा दक्कन के पठार में लोक कथाकारों और विजयनगर राजाओं के संरक्षण में फली-फूली।",
      materials: [
        "पारदर्शी उपचारित बकरी का चर्म",
        "प्राकृतिक वनस्पति और खनिज रंग",
        "बांस की छड़ें और नियंत्रण डोरियां",
        "पारंपरिक नक्काशीदार छेनी"
      ],
      techniques: [
        "धूप में सुखाकर चमड़े को बारीक व पारदर्शी बनाना",
        "प्रकाश छनन हेतु ज्यामितीय नक्काशी",
        "बांस के जोड़ से लचीले अंग संचालन की व्यवस्था",
        "दीपकों के पीछे से प्रक्षेपण"
      ],
      performance: "हारमोनियम, मृदंग और घुंघरुओं की लय पर पूरी रात तेलुगु महाकाव्य छंदों में प्रस्तुत की जाती है।",
      stories_and_traditions: "रामायण और महाभारत के आख्यानों के साथ ग्रामीण जीवन व सामाजिक व्यंग्य का सुंदर समन्वय।",
      cultural_significance: "गाँव के सामूहिक जीवन, मौखिक इतिहास और सांस्कृतिक विरासत को सहेजने का मुख्य माध्यम।",
      global_explanation: "पहली बार इस कला को देखने वाले दर्शकों के लिए: यह विद्युत सिनेमा के आविष्कार से सदियों पहले की जीवंत प्रकाश-और-छाया थियेटर कला है।",
      artist_story: "प्रत्येक कठपुतली को तराशने में कई दिन लगते हैं। जब सफेद पर्दे के पीछे दीया जलता है, तो यह कठपुतली हमारे पूर्वजों की आवाज़ में सांस लेने लगती है।",
      sources: [
        "संगीत नाटक अकादमी अभिलेखागार"
      ],
      uncertainties: [
        "चमड़े की किस्मों के क्रमिक परिवर्तन का ऐतिहासिक कालक्रम शोधकर्ताओं के बीच चर्चा का विषय है।"
      ],
      ai_generated: true,
      artist_approved: false,
      approval_status: "draft"
    },

    // Japanese
    ja: {
      title: "トール・ボンマラタ",
      art_form: "トール・ボンマラタ（南インド・アーンドラ伝統の革製影絵芝居）",
      origin: "アンドラ・プラデーシュ州ネルール、インド",
      language: "ja",
      introduction: "トール・ボンマラタ（皮の操り人形劇）は、手作業で薄く鞣した山羊革を彫刻・着色し、白いスクリーンの背後から温かな光を当てて演じる南インド最古の影絵人形劇です。",
      cultural_roots: "2000年以上の歴史を持ち、デカン高原の旅回り劇団やヴィジャヤナガル王国の宮廷文化とともに発展しました。",
      materials: [
        "手鞣しの半透明山羊革",
        "天然植物・鉱物染料（ターメリック、藍、茜）",
        "竹製の操作棒",
        "伝統的な金槌と鏨（たがね）"
      ],
      techniques: [
        "革を極限まで薄く梳き光を通す伝統鞣し",
        "光を繊細に通す幾何学的透かし彫り",
        "竹の関節による人形の多関節運動機構",
        "ランプの後方照射による影絵投影"
      ],
      performance: "夕暮れから夜明けまで、ムリダンガム太鼓やハーモニウム、足首の鈴の音とともにテルグ語の詩歌で演じられます。",
      stories_and_traditions: "ラーマーヤナやマハーバーラタの神話劇に、農村の日常や風刺を織り交ぜて上演されます。",
      cultural_significance: "村の共同体が集い、文字を持たない時代から道徳や共同体の記憶を受け継ぐ生きた文化財です。",
      global_explanation: "初めてこの芸術に触れる方へ：現代の映画やプロジェクターが登場する遥か以前から、光と影の物理的工芸を通じて神話と人々を繋いできた美しい動的ステンドグラス劇場です。",
      artist_story: "一体の人形を仕上げるには数日間の静かな彫刻作業が必要です。白い布の向こうに灯りが点ると、人形は先祖の声で息づき始めます。",
      sources: [
        "サーンギート・ナータク・アカデミー（インド国立舞台芸術院アーカイブ）"
      ],
      uncertainties: [
        "かつて鹿皮から山羊皮へ移行した正確な年代については民俗学者の間でも諸説あります。"
      ],
      ai_generated: true,
      artist_approved: false,
      approval_status: "draft"
    },

    // French
    fr: {
      title: "Tholu Bommalata",
      art_form: "Tholu Bommalata (Théâtre d'ombres en cuir d'Andhra Pradesh)",
      origin: "Nellore, Andhra Pradesh, Inde",
      language: "fr",
      introduction: "Le Tholu Bommalata est une tradition millénaire de théâtre d'ombres d'Andhra Pradesh, où des marionnettes translucides en peau de chèvre minutieusement ciselée s'illuminent derrière un drap de coton blanc.",
      cultural_roots: "Ancré sur le plateau du Deccan depuis plus de deux mille ans, cet art a été soutenu par des communautés de bardes itinérants et les royaumes de Vijayanagara.",
      materials: [
        "Parchemin de chèvre translucide traité au soleil",
        "Pigments végétaux et minéraux naturels",
        "Baguettes de bambou et fibres de coco",
        "Poinçons en acier trempé"
      ],
      techniques: [
        "Affinage de la peau sans produit chimique pour la translucidité",
        "Perforations géométriques filtrant la lumière",
        "Articulations mobiles en bambou",
        "Projection rétro-éclairée à la lueur des lampes"
      ],
      performance: "Représentations nocturnes de la tombée de la nuit à l'aube, au rythme du mridangam et du chant improvisé en langue télougou.",
      stories_and_traditions: "Récits épiques du Ramayana et du Mahabharata mêlés à des chroniques agraires villageoises et satires bienveillantes.",
      cultural_significance: "Lieu de rassemblement civique et spirituel, transmettant la sagesse populaire sans nécessiter de manuscrits écrits.",
      global_explanation: "Pour les spectateurs découvrant cette tradition : Le Tholu Bommalata est un vitrail cinétique. Bien avant le cinéma moderne, ces artisans ont inventé un art lumineux dont les ombres relient la communauté aux mythes éternels.",
      artist_story: "Chaque marionnette exige des jours de ciselage silencieux. Quand la lampe brille derrière le drap blanc, la marionnette respire avec la voix de nos ancêtres.",
      sources: [
        "Archives de la Sangeet Natak Akademi",
        "Répertoire du patrimoine vivant d'Inde du Sud"
      ],
      uncertainties: [
        "Le siècle précis du passage des peaux sauvages aux parchemins de chèvre fait encore l'objet de recherches ethnographiques."
      ],
      ai_generated: true,
      artist_approved: false,
      approval_status: "draft"
    },

    // Spanish
    es: {
      title: "Tholu Bommalata",
      art_form: "Tholu Bommalata (Teatro de sombras de cuero)",
      origin: "Nellore, Andhra Pradesh, India",
      language: "es",
      introduction: "Tholu Bommalata es una tradición milenaria de títeres de sombras de Andhra Pradesh, donde figuras translúcidas de piel de cabra cinceladas a mano cobran vida detrás de una pantalla de algodón blanco iluminada.",
      cultural_roots: "Con más de dos mil años de historia en la meseta del Decán, floreció bajo el patrocinio de comunidades itinerantes y dinastías reales.",
      materials: [
        "Pergamino de piel de cabra curado al sol",
        "Tintes orgánicos vegetales y minerales",
        "Varillas de control de bambú",
        "Cinceles de acero templado"
      ],
      techniques: [
        "Adelgazamiento manual del cuero para translucidez",
        "Perforación geométrica para filtración de luz",
        "Articulaciones móviles con pivotes de bambú",
        "Proyección con luz cálida posterior"
      ],
      performance: "Presentaciones durante las cosechas desde el anochecer hasta el amanecer, con percusión mridangam y poesía en télugu.",
      stories_and_traditions: "Relata epopeyas sagradas entrelazadas con relatos humorísticos y sabiduría agraria local.",
      cultural_significance: "Espacio comunitario vital para la preservación de dialectos, música y memoria colectiva.",
      global_explanation: "Para quienes descubren esta tradición por primera vez: Es un teatro cinético de vitrales luminosos concebido siglos antes de la invención del cine.",
      artist_story: "Cada títere que tallo requiere días de silencio. Cuando la lámpara ilumina el cuero detrás de la tela, el títere respira con la voz de nuestros antepasados.",
      sources: ["Archivos de la Academia Sangeet Natak"],
      uncertainties: ["El momento exacto de transición entre tipos de pieles sigue en estudio."],
      ai_generated: true,
      artist_approved: false,
      approval_status: "draft"
    },

    // Indonesian
    id: {
      title: "Tholu Bommalata",
      art_form: "Tholu Bommalata (Wayang Kulit Andhra)",
      origin: "Nellore, Andhra Pradesh, India",
      language: "id",
      introduction: "Tholu Bommalata ('permainan wayang kulit') adalah seni teater bayangan kuno dari Andhra Pradesh, menampilkan figur kulit kambing tembus cahaya yang dipahat rumit di balik kelir kain putih bersinar.",
      cultural_roots: "Berusia lebih dari dua milenium di dataran tinggi Dekkan, seni ini berkembang pesat di bawah perlindungan komunitas dalang keliling dan kerajaan kuno.",
      materials: [
        "Kulit kambing olahan tembus pandang",
        "Pewarna alami tanaman dan mineral",
        "Bilah kendali bambu dan tali serat",
        "Pahat ukir baja tradisional"
      ],
      techniques: [
        "Pengerikan kulit tipis tanpa bahan kimia untuk kejernihan cahaya",
        "Pahat lubang geometris untuk penyaringan sinar",
        "Sambungan engsel bambu fleksibel",
        "Proyeksi bayangan dengan lampu minyak"
      ],
      performance: "Dipentaskan semalam suntuk saat musim panen diiringi tabuhan mridangam dan tembang puitis Telugu.",
      stories_and_traditions: "Mementaskan wiracarita Ramayana dan Mahabharata yang dipadukan dengan lelucon sosial dan nasihat pertanian pedesaan.",
      cultural_significance: "Wadah belajar bersama dan pemelihara harmoni sosial yang meneruskan kearifan leluhur.",
      global_explanation: "Bagi pemirsa yang baru pertama kali mengenal tradisi ini: Mirip dengan wayang kulit Nusantara, ini adalah teater kinetik bercahaya yang telah memukau manusia jauh sebelum era bioskop modern.",
      artist_story: "Setiap wayang yang saya pahat memerlukan hari-hari penuh ketenangan. Ketika lampu menyala di balik kain putih, wayang ini bernapas dengan suara leluhur kami.",
      sources: ["Arsip Tradisi Wayang India Selatan (Sangeet Natak Akademi)"],
      uncertainties: ["Kronologi peralihan jenis kulit purba masih dikaji oleh para peneliti folklor."],
      ai_generated: true,
      artist_approved: false,
      approval_status: "draft"
    }
  },

  "artist-001": {
    en: {
      title: "Coastal Andhra Folk Storytelling",
      art_form: "Oral Balladry & Village Storytelling",
      origin: "Ongole, Andhra Pradesh, India",
      language: "en",
      introduction: "A living oral storytelling tradition passed down through vocal genealogy, uniting village assemblies through rhythmic balladry, folklore, and communal dialogue.",
      cultural_roots: "Developed across coastal Andhra village squares where itinerant balladeers carried news, historical chronicles, and ethical guidance across agrarian communities.",
      materials: [
        "Brass Talam (Finger cymbals)",
        "Handloom Khadi Shawl",
        "Acoustic Vocal Projection"
      ],
      techniques: [
        "Rhythmic breath control and syncopated cadence",
        "Improvisational verse adapting to audience mood",
        "Dramatic modulation across character registers",
        "Community call-and-response refrain pacing"
      ],
      performance: "Performed at village centers under dusk light without electronic amplification, shifting between spoken recitation and melodic chorus.",
      stories_and_traditions: "Preserves community histories, dispute resolutions, agrarian tales, and ethical folklore that were never transcribed into formal academic manuscripts.",
      cultural_significance: "Serves as an irreplaceable repository of unwritten village memory and ethical dialogue across generations.",
      global_explanation: "For audiences encountering this art form for the first time: It is storytelling stripped to its purest human essence - voice, rhythm, and shared presence carrying collective memory across generations.",
      artist_story: "I learned these tales sitting beside the temple porch in Ongole as my grandfather spoke into the dusk. Our stories do not live on paper; they live in the breath of the teller and the listening village.",
      sources: ["Andhra Folklore and Oral History Documentation"],
      uncertainties: ["Specific dates of older village chronicles remain preserved only through oral lineage."],
      ai_generated: true,
      artist_approved: false,
      approval_status: "draft"
    }
  }
};

/**
 * Fetches or synthesizes Global Lens explanation.
 */
export async function fetchGlobalLensContext(artist, language = "en") {
  const artistId = artist?.id || "unknown";
  const storageKey = `roots_lens_${artistId}_${language}`;

  // 1. Check local artist-specific storage for previously saved/approved context
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed;
    }
  } catch (e) {
    console.warn("Storage check failed:", e);
  }

  // 2. Attempt call to FastAPI backend if running
  try {
    const response = await fetch(`${API_BASE_URL}/api/global-lens/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        artist_id: artistId,
        artist_name: artist.name || "Traditional Artisan",
        art_form: artist.artForm || "Traditional Art",
        location: `${artist.city || ""}, ${artist.region || ""}, ${artist.country || ""}`.replace(/^, |, $/g, ""),
        language: language,
        artist_bio: artist.bio || "",
        artist_provided_story: artist.story || "",
        materials: artist.materials || [],
        techniques: artist.techniques || [],
        additional_context: artist.culturalContext || ""
      }),
      signal: AbortSignal.timeout(4000)
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    // Backend offline or timed out; smoothly fall back to verified cultural grounding
  }

  // 3. Check precomputed verified cultural knowledge base
  const artistPrecomputed = PRECOMPUTED_KNOWLEDGE[artistId];
  if (artistPrecomputed) {
    const langData = artistPrecomputed[language] || artistPrecomputed.en;
    if (langData) {
      return { ...langData, language };
    }
  }

  // 4. Synthesize structured cultural context dynamically for any newly registered artist
  const synthesized = {
    title: artist.artForm || "Traditional Cultural Craft",
    art_form: artist.artForm || "Traditional Art",
    origin: `${artist.city || ""}, ${artist.region ? artist.region + ", " : ""}${artist.country || ""}`.replace(/^, |, $/g, ""),
    language: language,
    introduction: `A traditional cultural expression rooted in ${artist.city || "their local homeland"}, representing generational heritage and craftsmanship of ${artist.artForm || "regional craft"}.`,
    cultural_roots: `Preserved across generations in ${artist.city || "the regional community"}, closely tied to local ecology, ancestral apprentice workshops, and living memories.`,
    materials: artist.materials && artist.materials.length > 0 
      ? artist.materials 
      : ["Locally harvested raw organic media", "Artisanal hand tools", "Natural pigments and binders"],
    techniques: artist.techniques && artist.techniques.length > 0
      ? artist.techniques
      : ["Passed down through apprenticeship and tactile community knowledge", "Careful manual assembly"],
    performance: "Presented in traditional cultural settings and community gatherings, balancing ancestral techniques with individual creative interpretation.",
    stories_and_traditions: "Embodies oral chronicles, local ecological wisdom, and familial memory passed down across centuries.",
    cultural_significance: `Embodies the cultural identity and collective memories of the ${artist.region || artist.city || "local"} community, serving as an irreplaceable anchor between historical roots and contemporary life.`,
    global_explanation: `For audiences encountering this art form for the first time: This tradition from ${artist.city || "its native town"} reflects deep local knowledge of materials, history, and community expression. It bridges personal artistry with living cultural heritage.`,
    artist_story: artist.story || artist.bio || "An authentic artist-owned narrative reflecting dedication to regional traditions.",
    sources: ["Regional Artisan Heritage Documentation"],
    uncertainties: ["Oral genealogies require direct artist verification for familial line specifics."],
    ai_generated: true,
    artist_approved: false,
    approval_status: "draft"
  };

  return synthesized;
}

/**
 * Saves artist approval or edits for a Global Lens context.
 */
export async function saveGlobalLensContext(artistId, language, contextData, approvalStatus = "approved") {
  const storageKey = `roots_lens_${artistId}_${language}`;
  const updatedData = {
    ...contextData,
    approval_status: approvalStatus,
    artist_approved: approvalStatus === "approved",
    updated_at: new Date().toISOString(),
    approved_at: approvalStatus === "approved" ? new Date().toISOString() : null
  };

  // 1. Save to local storage
  try {
    localStorage.setItem(storageKey, JSON.stringify(updatedData));
  } catch (e) {
    console.error("Local storage save failed:", e);
  }

  // 2. Synchronize with FastAPI backend
  try {
    await fetch(`${API_BASE_URL}/api/global-lens/approve`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        artist_id: artistId,
        language: language,
        approval_status: approvalStatus,
        content: updatedData
      }),
      signal: AbortSignal.timeout(3000)
    });
  } catch (err) {
    // Backend offline is non-fatal; local persistence succeeded
    console.log("Backend sync offline, saved to client persistence.");
  }

  return updatedData;
}
