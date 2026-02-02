const gameData = {
    // 20 Professional Categories
    "Medicine": ["BIOPSY", "PLASMA", "ENZYME", "GLUCOSE", "PLATELET", "ALBUMIN", "REAGENT", "CULTURE", "PIPETTE", "SEROLOGY", "LIPIDS", "SEPSIS", "ANEMIA", "SYRINGE", "LANCET", "IMMUNE", "SUTURES", "TRAUMA", "CANULA", "DIALYSIS"],
    "Engineering": ["CIRCUIT", "VOLTAGE", "BATTERY", "SENSOR", "CURRENT", "TURBINE", "RESISTOR", "DIODE", "TRANSISTOR", "WATTAGE", "GRID", "SOLAR", "ROBOTICS", "SIGNAL", "MOTORS", "ENGINE", "TORQUE", "WIRING", "PANEL", "SAFETY"],
    "Software": ["FRONTEND", "BACKEND", "DATABASE", "VARIABLE", "FUNCTION", "ITERATION", "COMPILER", "DEBUGGING", "FRAMEWORK", "RECURSION", "PROTOCOL", "INSTANCE", "ABSTRACT", "INTERFACE", "SOFTWARE", "HARDWARE", "TERMINAL", "DECODER", "ENCRYPTION", "NETWORK"],
    "Architecture": ["FACADE", "SKETCH", "LAYOUT", "DESIGN", "MODERN", "PILLAR", "ATRIUM", "PAVILION", "CUPOLA", "BALCONY", "TERRACE", "ARCHWAY", "DOME", "CORRIDOR", "CONCEPT", "SPATIAL", "DRAFTING", "COLUMN", "SURVEY", "STRESS"],
    "Physics": ["ENERGY", "VELOCITY", "FRICTION", "FUSION", "FISSION", "QUANTUM", "MASSIVE", "KINETIC", "DENSITY", "TENSION", "WAVELENGTH", "MAGNETIC", "OPTICAL", "THERMAL", "PROTON", "NEUTRON", "ELECTRON", "QUARK", "MOTION", "FORCE"],
    "Astronomy": ["GALAXY", "NEBULA", "ASTEROID", "COMET", "ECLIPSE", "ORBITAL", "SOLSTICE", "CLUSTER", "QUASAR", "ZENITH", "COSMOS", "GRAVITY", "PULSAR", "UNIVERSE", "TELESCOPE", "SATURN", "MERCURY", "VENUS", "JUPITER", "METEOR"],
    "Economics": ["MARKET", "BUDGET", "INFLATION", "FINANCE", "CAPITAL", "REVENUE", "PROFIT", "TARIFF", "DEFICIT", "STOCKS", "EXPORT", "IMPORT", "ASSETS", "SAVINGS", "CREDIT", "CURRENCY", "BANKING", "TRADE", "INVEST", "GROWTH"],
    "Chemistry": ["ELEMENT", "MOLECULE", "CATALYST", "REACTION", "ISOTOPE", "SOLVENT", "VALENCE", "ALKALINE", "ACIDIC", "OXYGEN", "CARBON", "NITROGEN", "HELIUM", "METHANE", "SODIUM", "COPPER", "TITANIUM", "RADIUM", "URANIUM", "ARSENIC"],
    "Law": ["VERDICT", "LAWYER", "WITNESS", "COURT", "JUSTICE", "EVIDENCE", "SUMMONS", "STATUTE", "APPEAL", "CONTRACT", "FELONY", "LAWSUIT", "LAWGIVER", "PENALTY", "PROBATE", "TRIAL", "WARRANT", "CLIENT", "PRISON"],
    "Biology": ["CELLULAR", "ORGANISM", "SPECIES", "BIOME", "EVOLVE", "GENOME", "NUCLEUS", "ENZYME", "PLANKTON", "BACTERIA", "FUNGUS", "REPTILE", "MAMMAL", "INSECT", "HABITAT", "ECOLOGY", "GENES", "PLANT", "ANIMAL", "NATURE"],
    "Aviation": ["AIRLINE", "AIRPORT", "COCKPIT", "PILOT", "FLIGHT", "JETWAY", "RUNWAY", "HANGAR", "RADAR", "BEACON", "GLIDER", "HELIUM", "TURBINE", "ENGINE", "PROPELL", "BAGGAGE", "TICKET", "CABIN", "WINGS", "AVIONIC"],
    "Cyber": ["HACKER", "MALWARE", "FIREWALL", "PHISHING", "SERVER", "PROXY", "CRYPTO", "TOKEN", "CIPHER", "ATTACK", "THREAT", "BREACH", "ACCESS", "RECOVERY", "BACKUP", "UPDATE", "PATCH", "SYSTEM", "VIRUS", "SPYWARE"],
    "Marketing": ["BRAND", "ADVERT", "DIGITAL", "TARGET", "CLIENT", "SOCIAL", "RETAIL", "SALES", "IMPACT", "VISION", "SLOGAN", "CAMPAIGN", "POSTER", "DESIGN", "LEADS", "FUNNEL", "CONTENT", "BANNER", "MEDIA", "TREND"],
    "Business": ["COMPANY", "OFFICE", "MEETING", "PROJECT", "TEAMWORK", "SUCCESS", "GOAL", "PARTNER", "REWARD", "BONUS", "SKILL", "SALARY", "STAFF", "MANAGER", "CEO", "GROWTH", "PLAN", "DEAL", "WORK", "PROFIT"],
    "Logistics": ["SHIPPING", "TRUCKING", "CARGO", "STORAGE", "STOCKS", "DELIVER", "SUPPLY", "CHAIN", "ROUTE", "ORDER", "EXPORT", "IMPORT", "PORT", "PLANE", "TRAIN", "DEPOT", "FREIGHT", "HAULING", "LOAD", "MOVE"],
    "Music": ["MELODY", "RHYTHM", "CHORUS", "GUITAR", "PIANO", "VIOLIN", "CONCERT", "LYRICS", "ORCHESTRA", "SYMPHONY", "TEMPO", "HARMONY", "OPERA", "SONATA", "JAZZ", "VOCAL", "INSTRUM", "KEYBOARD", "BEAT", "SOUND"],
    "Art": ["PAINTING", "DRAWING", "MUSEUM", "GALLERY", "SCULPT", "CANVAS", "BRUSH", "SKETCH", "STUDIO", "COLOUR", "MODERN", "CLASSIC", "EXHIBIT", "FRAME", "OIL", "WATER", "PHOTO", "CREATIVE", "SHAPE", "LINE"],
    "Geology": ["VOLCANO", "EARTHQUAKE", "MAGMA", "SILICA", "FOSSIL", "BEDROCK", "MINERAL", "CRUST", "MANTLE", "EROSION", "SEDIMENT", "GRANITE", "BASALT", "QUARTZ", "CRYSTAL", "TECTONIC", "GLACIER", "CANYON", "PLATEAU", "ISLAND"],
    "Psychology": ["BEHAVIOR", "THERAPY", "TRAUMA", "COGNITIVE", "EMOTION", "ANXIETY", "STIMULUS", "RESPONSE", "NEUROSIS", "PHOBIA", "REFLEX", "DREAM", "MEMORY", "IDENTITY", "ATTENTION", "INSIGHT", "EMPATHY", "MINDSET", "SOCIAL", "SENSORY"],
    "Navigation": ["COMPASS", "ANCHOR", "SAILING", "HARBOR", "BEACON", "VESSEL", "MARINA", "CRUISE", "BRIDGE", "VOYAGE", "RADAR", "CHART", "SIGNAL", "STERN", "BOWLINE", "KNOTS", "OCEAN", "TIDES", "REEFS", "DOCKING"],
    "Medical Analysis": [
        "BIOPSY", "PLASMA", "ENZYME", "GLUCOSE", "PLATELET", "ALBUMIN", "REAGENT", "CULTURE", "PIPETTE", "SEROLOGY",
        "LIPIDS", "SEPSIS", "ANEMIA", "SYRINGE", "LANCET", "STEROID", "IMMUNE", "SUTURES", "TRAUMA", "CANULA",
        "DIALYSIS", "HEMOGLOBIN", "HORMONES", "VITAMINS", "ANTIGEN", "CALCIUM", "SODIUM", "URICACID", "SMEAR", "TUBES",
        "BIOHAZARD", "SCANNER", "BUFFER", "COLONY", "PHLEBOTOMY"],
"Management": [
        "STRATEGY", "PLANNING", "LEADERSHIP", "TEAMWORK", "PROJECT", "MEETING", "RESOURCES", "MANAGER", "BUDGET", "CONTROL",
        "MISSION", "VISION", "VALUES", "STAFF", "OFFICE", "QUALITY", "PROCESS", "OUTPUT", "COACHING", "MENTOR",
        "REPORT", "TASKS", "SYSTEM", "SUCCESS", "GROWTH", "GOALS", "SKILLS", "CHART", "POLICY", "AUDIT",
        "PROFIT", "RISKS", "CLIENT", "AWARD", "BONUS"],
        "Programming": [
        "FRONTEND", "BACKEND", "DATABASE", "VARIABLE", "FUNCTION", "ITERATION", "COMPILER", "DEBUGGING", "FRAMEWORK", "RECURSION",
        "PROTOCOL", "INSTANCE", "ABSTRACT", "INTERFACE", "SOFTWARE", "HARDWARE", "TERMINAL", "DECODER", "ENCRYPTION", "NETWORK",
        "ALGORITHM", "BOOLEAN", "LIBRARY", "PACKAGE", "POINTER", "RUNTIME", "SCRIPT", "SYNTAX", "THREAD", "WIDGET",
        "VERSION", "UPGRADE", "PARALLEL", "DYNAMIC", "STATIC"
    ],

    "Electrical Eng": [
        "CIRCUIT", "VOLTAGE", "BATTERY", "SENSOR", "CURRENT", "MAGNET", "TURBINE", "RESISTOR", "CAPACITOR", "INDUCTOR",
        "DIODE", "OHMETER", "WATTAGE", "GRID", "SOLAR", "ROBOTICS", "SIGNAL", "MOTORS", "ENGINE", "GEARS",
        "DYNAMICS", "STATICS", "TORQUE", "WIRING", "PANEL", "SAFETY", "HYDRAULIC", "VALVES", "FUSES", "SYSTEM",
        "TRANSFORMER", "AMPERE", "INVERTER", "BREAKER", "CABLE"
    ],
    "English Lang": [
        "GRAMMAR", "POETRY", "FICTION", "NOVELS", "PHRASE", "CLAUSE", "SYNTAX", "IDIOOMS", "DIALOG", "LYRICS",
        "STANZAS", "RHYMES", "SONNET", "DRAMA", "TRAGEDY", "COMEDY", "CRITIC", "SPEECH", "ACCENT", "DIALECT",
        "VERBAL", "WRITING", "ESSAYS", "PROVERB", "AUTHOR", "EDITOR", "GOTHIC", "SATIRE", "METAPHOR", "SIMILE",
        "CONTEXT", "FLUENCY", "LEXICON", "PASSAGE", "VOICE"
    ],
    "Civil Eng": [
        "CONCRETE", "FOUNDATION", "STRUCTURE", "ASPHALT", "BRIDGE", "TUNNEL", "SCAFFOLD", "COLUMN", "SURVEY", "STRESS",
        "CEMENT", "DRAINAGE", "PIPELINE", "STEEL", "HIGHWAY", "BLUEPRINT", "TRUSS", "BEAM", "DAM", "GEOLOGY",
        "LANDMARK", "STADIUM", "LEVELING", "GRADING", "LOAD", "MAPPING", "REBAR", "TIMBER", "RAILWAY", "STAIRS",
        "ARCH", "MORTAR", "PAVEMENT", "SEWER", "SAFETY"
    ],
    "Telecom Eng": [
        "ANTENNA", "SIGNAL", "NETWORK", "SATELLITE", "FIBER", "OPTICAL", "WIRELESS", "SPECTRUM", "CHANNEL", "ROUTER",
        "MODEM", "BROADBAND", "CELLULAR", "FREQUENCY", "BANDWIDTH", "PROTOCOL", "PACKET", "DIGITAL", "ANALOG", "VOIP",
        "WAVELENGTH", "MICROWAVE", "ENCODING", "DECODING", "TOWER", "MOBILE", "SERVER", "SWITCH", "CABLES", "RADAR",
        "TELEPHONY", "STATION", "HOTSPOT", "BLUEBOX", "BACKHAUL"
    ],
    "Architecture": [
        "FACADE", "SKETCH", "LAYOUT", "DESIGN", "MODERN", "PILLAR", "ATRIUM", "PAVILION", "CUPOLA", "BALCONY",
        "TERRACE", "ARCHWAY", "DOME", "CORRIDOR", "CONCEPT", "SPATIAL", "DRAFTING", "EXTERIOR", "INTERIOR", "STAIRCASE",
        "WINDOW", "CEILING", "GARDEN", "PLAZA", "COLUMN", "PORTICO", "PYRAMID", "TOWER", "MUSEUM", "PALACE",
        "SHAPE", "TEXTURE", "VOLUME", "LIGHTING", "PLAN"
    ],
    // 20 Kids Categories
    "Animals": ["LION", "TIGER", "ZEBRA", "HORSE", "CAMEL", "RABBIT", "MONKEY", "PANDA", "KOALA", "SNAKE", "TURTLE", "LIZARD", "FROG", "SHARK", "WHALE", "DOLPHIN", "EAGLE", "PARROT", "CHICKEN", "DUCK"],
    "Colors": ["RED", "BLUE", "GREEN", "YELLOW", "ORANGE", "PURPLE", "PINK", "BROWN", "BLACK", "WHITE", "GRAY", "SILVER", "GOLD", "NAVY", "TEAL", "LIME", "CYAN", "MAGENTA", "VIOLET", "INDIGO"],
    "Fruits": ["APPLE", "BANANA", "ORANGE", "GRAPE", "MANGO", "PEACH", "PEAR", "PLUM", "KIWI", "BERRY", "CHERRY", "MELON", "LEMON", "LIME", "FIGS", "DATES", "GUAVA", "PAPAYA", "OLIVE", "COCONUT"],
    "Vegetables": ["POTATO", "TOMATO", "CARROT", "ONION", "GARLIC", "PEPPER", "RADISH", "BEANS", "CORN", "PEAS", "MINT", "SALAD", "CELERY", "KALE", "OKRA", "GINGER", "CHILI", "LEEK", "OLIVE", "SQUASH"],
    "School": ["PENCIL", "ERASER", "RULER", "PAPER", "BOOKS", "BOARD", "CHALK", "DESK", "CHAIR", "CLASS", "STUDY", "LEARN", "TEACH", "MUSIC", "SPORTS", "BREAK", "LUNCH", "FRIEND", "SCHOOL", "BAGS"],
    "Home": ["BED", "DOOR", "WALL", "ROOF", "ROOM", "SOFA", "LAMP", "TABLE", "STOVE", "OVEN", "SINK", "BATH", "YARD", "GATE", "KEYS", "LOCK", "PHONE", "RADIO", "CLOCK", "WATCH"],
    "Insects": ["ANT", "BEE", "FLY", "WORM", "SPIDER", "MOTH", "BEETLE", "SNAIL", "BUG", "CRICKET", "WASP", "FLEA", "TICK", "ROACH", "MANTIS", "LOCUST", "HORNET", "DRAGON", "BUTTER", "FIREFLY"],
    "Sports": ["SOCCER", "TENNIS", "RUN", "JUMP", "SWIM", "GOLF", "BALL", "GAME", "MATCH", "TEAM", "WIN", "PLAY", "GOAL", "BASE", "BIKE", "SKATE", "FISH", "DIVE", "CLIMB", "SURF"],
    "Body": ["EYE", "EAR", "NOSE", "HAIR", "FACE", "HAND", "FOOT", "ARM", "LEG", "HEAD", "BACK", "KNEE", "NECK", "TEETH", "LIPS", "BONE", "SKIN", "HEART", "BLOOD", "BRAIN"],
    "Weather": ["SUN", "RAIN", "SNOW", "WIND", "COLD", "HOT", "STORM", "CLOUD", "SKY", "FOG", "ICE", "HEAT", "MIST", "WAVE", "DRY", "WET", "STARS", "MOON", "LIGHT", "DARK"],
    "Shapes": ["SQUARE", "CIRCLE", "STAR", "HEART", "OVAL", "LINE", "CROSS", "CUBE", "CONE", "POINT", "ROUND", "FLAT", "SIDE", "ANGLE", "BOX", "RING", "CURVE", "BENT", "SHARP", "WIDE"],
    "Jobs": ["DOCTOR", "NURSE", "TEACH", "PILOT", "CHEF", "POLICE", "FIRE", "ARTIST", "SINGER", "DANCER", "DRIVER", "FARMER", "BAKER", "CLERK", "ACTOR", "JUDGE", "COACH", "GUIDE", "GUARD", "WORKER"],
    "Transport": ["CAR", "BUS", "SHIP", "BOAT", "PLANE", "BIKE", "TRAIN", "TAXI", "TRUCK", "VAN", "JEEP", "SUB", "TRAM", "FERRY", "ROCKET", "SCOOT", "WAGON", "CART", "SLED", "RAFT"],
    "Ocean": ["FISH", "SHELL", "SAND", "SALT", "WAVE", "CORAL", "CRAB", "SEAL", "STAR", "WHALE", "SHARK", "SHIP", "DEEP", "BLUE", "REEF", "BEACH", "ISLAND", "ROCK", "TIDE", "COAST"],
    "Farm": ["COW", "HORSE", "PIG", "SHEEP", "GOAT", "HEN", "EGG", "BARN", "FIELD", "SEED", "CORN", "HAY", "PLOW", "TRACT", "MUD", "GRASS", "YARD", "FENCE", "DOG", "CAT"],
    "Clothing": ["SHIRT", "PANTS", "DRESS", "SKIRT", "COAT", "HAT", "SHOE", "SOCK", "BELT", "VEST", "GLOVE", "SCARF", "BOOT", "JEANS", "SUIT", "TIE", "BAG", "RING", "WATCH", "CAP"],
    "Food": ["BREAD", "MILK", "EGG", "MEAT", "FISH", "SOUP", "CAKE", "PIZZA", "RICE", "PASTA", "SALT", "SUGAR", "HONEY", "OIL", "TEA", "JUICE", "CHIPS", "BEAN", "NUTS", "JAM"],
    "Space": ["SUN", "MOON", "STAR", "SKY", "MARS", "EARTH", "PLANET", "ROCKET", "ALIEN", "DARK", "LIGHT", "SPACE", "UFO", "FIRE", "COMET", "ORBIT", "VOID", "MAP", "DUST", "ZONE"],
    "Nature": ["TREE", "FLOWER", "LEAF", "WOOD", "HILL", "ROCK", "RIVER", "LAKE", "POND", "DIRT", "SAND", "MUD", "GRASS", "BUSH", "PARK", "PATH", "LAND", "AIR", "RAIN", "SNOW"],
    "Toys": ["DOLL", "BALL", "CAR", "BEAR", "TRAIN", "BLOCK", "KITE", "GAME", "DRUM", "PLANE", "BIKE", "ROBOT", "PUZZE", "SLIDE", "SWING", "TOP", "YOYO", "CLAY", "SAND", "BOX"]
};

let wordToGuess = ""; let currentTry = 1; let numberOfHints = 2;
const inputContainer = document.querySelector(".input-container");
const categorySelect = document.getElementById("category-select");
const checkButton = document.querySelector(".check");
const hintButton = document.querySelector(".hint");
const messageArea = document.querySelector(".message");

function saveGame() {
    const inputs = [];
    document.querySelectorAll(".input-row input").forEach(i => {
        inputs.push({ id: i.id, val: i.value, cls: Array.from(i.classList), dis: i.disabled });
    });
    localStorage.setItem("wordle_final_basel", JSON.stringify({ wordToGuess, currentTry, numberOfHints, cat: categorySelect.value, inputs }));
}

function loadGame() {
    const saved = localStorage.getItem("wordle_final_basel");
    if (!saved) return false;
    const s = JSON.parse(saved);
    wordToGuess = s.wordToGuess; currentTry = s.currentTry; numberOfHints = s.numberOfHints;
    categorySelect.value = s.cat;
    initGame(true);
    s.inputs.forEach(d => {
        const i = document.getElementById(d.id);
        if (i) { i.value = d.val; d.cls.forEach(c => i.classList.add(c)); i.disabled = d.dis; }
    });
    document.querySelector(".hint span").innerText = numberOfHints;
    return true;
}

function startNewGame() {
    localStorage.removeItem("wordle_final_basel");
    const words = gameData[categorySelect.value];
    wordToGuess = words[Math.floor(Math.random() * words.length)].toUpperCase();
    currentTry = 1; numberOfHints = 2;
    document.querySelector(".hint span").innerText = numberOfHints;
    messageArea.innerHTML = ""; checkButton.disabled = false; hintButton.disabled = false;
    const old = document.querySelector(".restart"); if (old) old.remove();
    initGame(); saveGame();
}

function initGame(isLoading = false) {
    inputContainer.innerHTML = "";
    for (let i = 1; i <= 6; i++) {
        const row = document.createElement("div"); row.className = `input-row try-${i} ${i!==currentTry?'disabled-input':''}`;
        for (let j = 1; j <= wordToGuess.length; j++) {
            const inp = document.createElement("input"); inp.id = `i-${i}-${j}`; inp.maxLength = 1;
            inp.inputMode = "text"; inp.disabled = (i !== currentTry);
            row.appendChild(inp);
        }
        inputContainer.appendChild(row);
    }
    setupLogic();
    if (!isLoading) focusNext();
}

function setupLogic() {
    const inps = Array.from(document.querySelectorAll(".input-row input"));
    inps.forEach((inp, idx) => {
        inp.oninput = function() {
            if (!/^[a-zA-Z]$/.test(this.value)) { this.value = ""; return; }
            this.value = this.value.toUpperCase();
            jump(idx, "right"); saveGame();
        };
        inp.onkeydown = (e) => {
            if (e.key === "ArrowRight") jump(idx, "right");
            else if (e.key === "ArrowLeft") jump(idx, "left");
            else if (e.key === "Backspace" && inp.value === "") jump(idx, "left");
        };
    });
}

function jump(current, dir) {
    const inps = Array.from(document.querySelectorAll(".input-row input"));
    let step = dir === "right" ? 1 : -1;
    let n = current + step;
    if (inps[n] && inps[n].parentElement.classList.contains(`try-${currentTry}`)) {
        if (!inps[n].disabled) inps[n].focus();
        else jump(n, dir);
    }
}

function focusNext() {
    const el = Array.from(document.querySelectorAll(`.try-${currentTry} input`)).find(i => i.value === "" && !i.disabled);
    if (el) el.focus();
}

function check() {
    const inps = document.querySelectorAll(`.try-${currentTry} input`);
    let temp = wordToGuess.split(""); let win = true;
    inps.forEach((inp, i) => {
        if (inp.value === wordToGuess[i]) { inp.classList.add("yes-in-place"); temp[i] = null; }
        else win = false;
    });
    inps.forEach((inp, i) => {
        if (inp.classList.contains("yes-in-place")) return;
        let idx = temp.indexOf(inp.value);
        if (idx !== -1 && inp.value !== "") { inp.classList.add("not-in-place"); temp[idx] = null; }
        else if (inp.value !== "") inp.classList.add("no");
    });
    if (win) { messageArea.innerHTML = "🎉 Excellent Job!"; end(true); }
    else {
        document.querySelector(`.try-${currentTry}`).classList.add("disabled-input");
        inps.forEach(i => i.disabled = true);
        if (++currentTry <= 6) {
            const row = document.querySelector(`.try-${currentTry}`);
            row.classList.remove("disabled-input");
            row.querySelectorAll("input").forEach(i => { if(i.value==="") i.disabled=false; });
            focusNext(); saveGame();
        } else { messageArea.innerHTML = `❌ Game Over! Word: ${wordToGuess}`; end(false); }
    }
}

function getHint() {
    if (numberOfHints <= 0) return;
    const empty = Array.from(document.querySelectorAll(`.try-${currentTry} input`)).filter(i => i.value === "");
    if (empty.length > 0) {
        numberOfHints--; document.querySelector(".hint span").innerText = numberOfHints;
        const target = empty[Math.floor(Math.random() * empty.length)];
        const idx = Array.from(document.querySelectorAll(`.try-${currentTry} input`)).indexOf(target);
        target.value = wordToGuess[idx]; target.classList.add("yes-in-place"); target.disabled = true;
        focusNext(); saveGame();
    }
    if (numberOfHints === 0) hintButton.disabled = true;
}

function updateFooter() {
    const footer = document.querySelector("footer");
    footer.innerHTML = `Guess The Word Made By Basel Edition &copy; ${new Date().getFullYear()} | Professional Game`;
}

function end(win) {
    checkButton.disabled = hintButton.disabled = true; localStorage.removeItem("wordle_final_basel");
    const b = document.createElement("button"); b.className = "restart"; b.innerText = "Play Again";
    b.onclick = startNewGame; document.querySelector(".message").after(b);
}

Object.keys(gameData).forEach(c => { const o = document.createElement("option"); o.value = c; o.innerText = c; categorySelect.add(o); });
categorySelect.onchange = startNewGame; document.getElementById("new-game-btn").onclick = startNewGame;
checkButton.onclick = check; hintButton.onclick = getHint;
window.onload = () => { updateFooter(); if (!loadGame()) startNewGame(); };