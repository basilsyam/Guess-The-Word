const gameData = {
    // تم الإبقاء على كافة المجالات (أكثر من 30 مجال)
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
    "Medical Analysis": ["BIOPSY", "PLASMA", "ENZYME", "GLUCOSE", "PLATELET", "ALBUMIN", "REAGENT", "CULTURE", "PIPETTE", "SEROLOGY", "LIPIDS", "SEPSIS", "ANEMIA", "SYRINGE", "LANCET", "STEROID", "IMMUNE", "SUTURES", "TRAUMA", "CANULA", "DIALYSIS", "HEMOGLOBIN", "HORMONES", "VITAMINS", "ANTIGEN", "CALCIUM", "SODIUM", "URICACID", "SMEAR", "TUBES", "BIOHAZARD", "SCANNER", "BUFFER", "COLONY", "PHLEBOTOMY"],
    "Management": ["STRATEGY", "PLANNING", "LEADERSHIP", "TEAMWORK", "PROJECT", "MEETING", "RESOURCES", "MANAGER", "BUDGET", "CONTROL", "MISSION", "VISION", "VALUES", "STAFF", "OFFICE", "QUALITY", "PROCESS", "OUTPUT", "COACHING", "MENTOR", "REPORT", "TASKS", "SYSTEM", "SUCCESS", "GROWTH", "GOALS", "SKILLS", "CHART", "POLICY", "AUDIT", "PROFIT", "RISKS", "CLIENT", "AWARD", "BONUS"],
    "Programming": ["FRONTEND", "BACKEND", "DATABASE", "VARIABLE", "FUNCTION", "ITERATION", "COMPILER", "DEBUGGING", "FRAMEWORK", "RECURSION", "PROTOCOL", "INSTANCE", "ABSTRACT", "INTERFACE", "SOFTWARE", "HARDWARE", "TERMINAL", "DECODER", "ENCRYPTION", "NETWORK", "ALGORITHM", "BOOLEAN", "LIBRARY", "PACKAGE", "POINTER", "RUNTIME", "SCRIPT", "SYNTAX", "THREAD", "WIDGET", "VERSION", "UPGRADE", "PARALLEL", "DYNAMIC", "STATIC"],
    "Electrical Eng": ["CIRCUIT", "VOLTAGE", "BATTERY", "SENSOR", "CURRENT", "MAGNET", "TURBINE", "RESISTOR", "CAPACITOR", "INDUCTOR", "DIODE", "OHMETER", "WATTAGE", "GRID", "SOLAR", "ROBOTICS", "SIGNAL", "MOTORS", "ENGINE", "GEARS", "DYNAMICS", "STATICS", "TORQUE", "WIRING", "PANEL", "SAFETY", "HYDRAULIC", "VALVES", "FUSES", "SYSTEM", "TRANSFORMER", "AMPERE", "INVERTER", "BREAKER", "CABLE"],
    "English Lang": ["GRAMMAR", "POETRY", "FICTION", "NOVELS", "PHRASE", "CLAUSE", "SYNTAX", "IDIOOMS", "DIALOG", "LYRICS", "STANZAS", "RHYMES", "SONNET", "DRAMA", "TRAGEDY", "COMEDY", "CRITIC", "SPEECH", "ACCENT", "DIALECT", "VERBAL", "WRITING", "ESSAYS", "PROVERB", "AUTHOR", "EDITOR", "GOTHIC", "SATIRE", "METAPHOR", "SIMILE", "CONTEXT", "FLUENCY", "LEXICON", "PASSAGE", "VOICE"],
    "Civil Eng": ["CONCRETE", "FOUNDATION", "STRUCTURE", "ASPHALT", "BRIDGE", "TUNNEL", "SCAFFOLD", "COLUMN", "SURVEY", "STRESS", "CEMENT", "DRAINAGE", "PIPELINE", "STEEL", "HIGHWAY", "BLUEPRINT", "TRUSS", "BEAM", "DAM", "GEOLOGY", "LANDMARK", "STADIUM", "LEVELING", "GRADING", "LOAD", "MAPPING", "REBAR", "TIMBER", "RAILWAY", "STAIRS", "ARCH", "MORTAR", "PAVEMENT", "SEWER", "SAFETY"],
    "Telecom Eng": ["ANTENNA", "SIGNAL", "NETWORK", "SATELLITE", "FIBER", "OPTICAL", "WIRELESS", "SPECTRUM", "CHANNEL", "ROUTER", "MODEM", "BROADBAND", "CELLULAR", "FREQUENCY", "BANDWIDTH", "PROTOCOL", "PACKET", "DIGITAL", "ANALOG", "VOIP", "WAVELENGTH", "MICROWAVE", "ENCODING", "DECODING", "TOWER", "MOBILE", "SERVER", "SWITCH", "CABLES", "RADAR", "TELEPHONY", "STATION", "HOTSPOT", "BLUEBOX", "BACKHAUL"],
    "Animals": ["LION", "TIGER", "ZEBRA", "HORSE", "CAMEL", "RABBIT", "MONKEY", "PANDA", "KOALA", "SNAKE", "TURTLE", "LIZARD", "FROG", "SHARK", "WHALE", "DOLPHIN", "EAGLE", "PARROT", "CHICKEN", "DUCK"],
    "Fruits": ["APPLE", "BANANA", "ORANGE", "GRAPE", "MANGO", "PEACH", "PEAR", "PLUM", "KIWI", "BERRY", "CHERRY", "MELON", "LEMON", "LIME", "FIGS", "DATES", "GUAVA", "PAPAYA", "OLIVE", "COCONUT"],
    "Sports": ["SOCCER", "TENNIS", "RUN", "JUMP", "SWIM", "GOLF", "BALL", "GAME", "MATCH", "TEAM", "WIN", "PLAY", "GOAL", "BASE", "BIKE", "SKATE", "FISH", "DIVE", "CLIMB", "SURF"]
};

let wordToGuess = ""; let currentTry = 1; let numberOfHints = 2;
const inputContainer = document.querySelector(".input-container");
const categorySelect = document.getElementById("category-select");
const checkButton = document.querySelector(".check");
const hintButton = document.querySelector(".hint");
const messageArea = document.querySelector(".message");

function showInstructions() {
    if (localStorage.getItem("wordle_seen_intro")) return;
    
    const modal = document.createElement("div");
    modal.style = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);display:flex;justify-content:center;align-items:center;z-index:1000;padding:20px;";
    modal.innerHTML = `
        <div style="background:white;padding:30px;border-radius:15px;max-width:500px;text-align:right;direction:rtl;font-family:sans-serif;box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
            <h2 style="color:#2196F3;margin-top:0;">أهلاً بك في تحدي خمن الكلمة!</h2>
            <p style="font-size:1.1em;line-height:1.6;">تتحداك اللعبة في تخمين كلمات <strong>باللغة الإنجليزية</strong> حصراً.</p>
            <p style="color:#673AB7;font-weight:bold;">💡 معلومة: تتوفر اللعبة على أكثر من 30 مجالاً مختلفاً للبحث (طب، هندسة، فضاء، رياضة، وغيرها!)</p>
            <hr>
            <p><strong>قواعد اللعبة:</strong></p>
            <ul style="padding-right:20px;">
                <li>لديك 6 محاولات لتخمين الكلمة.</li>
                <li>بمجرد ملء جميع الخانات، سيتم التحقق من إجابتك <strong>تلقائياً</strong>.</li>
                <li><span style="color:green;font-weight:bold;">الأخضر:</span> الحرف في مكانه الصحيح تماماً.</li>
                <li><span style="color:orange;font-weight:bold;">الأصفر:</span> الحرف موجود في الكلمة ولكن في مكان آخر.</li>
                <li><span style="color:grey;font-weight:bold;">الرمادي:</span> الحرف غير موجود نهائياً في الكلمة.</li>
            </ul>
            <button id="close-intro" style="background:#2196F3;color:white;border:none;padding:12px 20px;border-radius:8px;cursor:pointer;width:100%;font-size:18px;font-weight:bold;margin-top:10px;">فهمت، ابدأ اللعب!</button>
        </div>
    `;
    document.body.appendChild(modal);
    document.getElementById("close-intro").onclick = () => {
        modal.remove();
        localStorage.setItem("wordle_seen_intro", "true");
    };
}

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
        const rowWrapper = document.createElement("div");
        rowWrapper.className = `row-wrapper try-${i} ${i!==currentTry?'disabled-input':''}`;
        rowWrapper.style = "display:flex; align-items:center; gap:10px; margin-bottom:10px; justify-content:center;";

        const label = document.createElement("span");
        label.innerText = `TRY-${i}`;
        label.style = "font-weight:bold; color:#777; font-size:12px; width:45px;";
        
        const row = document.createElement("div"); 
        row.className = `input-row`;
        row.style = "display:flex; gap:5px;";

        for (let j = 1; j <= wordToGuess.length; j++) {
            const inp = document.createElement("input"); 
            inp.id = `i-${i}-${j}`; 
            inp.maxLength = 1;
            inp.inputMode = "text"; 
            inp.disabled = (i !== currentTry);
            row.appendChild(inp);
        }
        
        rowWrapper.appendChild(label);
        rowWrapper.appendChild(row);
        inputContainer.appendChild(rowWrapper);
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
            saveGame();

            const rowWrapper = this.closest('.row-wrapper');
            const currentRowInputs = Array.from(rowWrapper.querySelectorAll("input"));
            const isRowFilled = currentRowInputs.every(input => input.value !== "");

            if (isRowFilled) {
                check();
            } else {
                jump(idx, "right");
            }
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
    if (inps[n] && inps[n].closest(`.row-wrapper`).classList.contains(`try-${currentTry}`)) {
        if (!inps[n].disabled) inps[n].focus();
        else jump(n, dir);
    }
}

function focusNext() {
    const el = Array.from(document.querySelectorAll(`.row-wrapper.try-${currentTry} input`)).find(i => i.value === "" && !i.disabled);
    if (el) el.focus();
}

function check() {
    const inps = document.querySelectorAll(`.row-wrapper.try-${currentTry} input`);
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
        document.querySelector(`.row-wrapper.try-${currentTry}`).classList.add("disabled-input");
        inps.forEach(i => i.disabled = true);
        if (++currentTry <= 6) {
            const nextRow = document.querySelector(`.row-wrapper.try-${currentTry}`);
            nextRow.classList.remove("disabled-input");
            nextRow.querySelectorAll("input").forEach(i => { if(i.value==="") i.disabled=false; });
            focusNext(); saveGame();
        } else { messageArea.innerHTML = `❌ Game Over! Word: ${wordToGuess}`; end(false); }
    }
}

function getHint() {
    if (numberOfHints <= 0) return;
    const rowWrapper = document.querySelector(`.row-wrapper.try-${currentTry}`);
    const rowInputs = Array.from(rowWrapper.querySelectorAll("input"));
    const empty = rowInputs.filter(i => i.value === "");
    
    if (empty.length > 0) {
        numberOfHints--; document.querySelector(".hint span").innerText = numberOfHints;
        const target = empty[Math.floor(Math.random() * empty.length)];
        const idx = rowInputs.indexOf(target);
        target.value = wordToGuess[idx]; target.classList.add("yes-in-place"); target.disabled = true;
        
        if (rowInputs.every(input => input.value !== "")) {
            check();
        } else {
            focusNext();
            saveGame();
        }
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
window.onload = () => { 
    updateFooter(); 
    showInstructions();
    if (!loadGame()) startNewGame(); 
};