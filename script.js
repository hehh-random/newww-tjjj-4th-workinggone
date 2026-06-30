const PASSWORD = "2524";

/* =========================
REASONS
========================= */

const reasons = [
"sure ready???(tu ready h mehh noii🥲)",
"tu hamesha(kabhi kabhi shutup) mujhe handle karta hai🤨",
"Ff mai tu mera teammate nahi, mera backbone hai 😭",
"Hum hamesha ladte hain… but end mai ek dusre ko mana hi leta hai 😏",
"Teri voice sunke hi mera mood 100x better ho jata hai 😛",
"Tu mujhe overthink karne se rok leta hai bina kuch bole 😭",
"Isha(jiya) ka drama + Teju ka calm = perfect combo 👹",
"tu mujhe hamesha importance/time deta hai even when I act rude🫤",
"Tu protect karta hai mujhe, even from my own thoughts 🫠",
"Hum dono toxic nahi… bas thode pagal hain ek dusre ke liye 🥲",
"Tere voice note sunke jo sukun milta h(shut up)😭",
"Free Fire me tu mujhe revive karta hai, real life mai bhi 😛",
"tu meri har nonsense baat sun leta hai (hamesha sense bhari baate krti hu😏)",
"Tu mujhe itna janta hai jitna main khud ko nahi janti 🥲",
"Ham ladte hain for no reason… but pyar bhi wahi se strong hota hai 😙",
"Tu hamesha meri side leta hai(side leni padhegii tujeee😛)",
"chikne 😏 jada kush mt ho🥲",
"Tere saath silence bhi comfortable lagta hai 😏fhir bhi bolte raha kr😛",
"Tu mere har mood swings ko bhi jhel leta hai🥲",
" htttt🥲(likhte tem hi merko feeling ari ki reaction kesa hoga🙂)",
"Tu mujhe ignore nahi karta, even when I act annoying 😏(annoying toh kabhi hoti hi no😏)",
"tu mera safe place hai without even trying 😭😚",
"Free Fire win ya loss… tere saath sab fun lagta hai 😈",
" alleleleee bochheee😭💋",
"dono ka fight, 5 min ka drama + lifetime ka patch-up 😏",
"Tu mujhe hamesha samajhne ki koshish karta hai 🥲🫠",
"tu meri overthinking ko bhi handle kar leta hai 🫶(kudhki overthinking ka ky😏 usko bhi kr handle)",
"Tu mujhe hamesha 1st priority feel karwata hai 😏",
"Mai kitni bhi ladhti hu, tu phir bhi ruk jata h😭",
"Tu meri har jealousy ko cute bana deta hai 😛",
"‘betuuu,bachaaa’ kehke special feel karwata hai 😭",
"Teju + Isha = chaotic but real 😏",
"Tu mujhe hamesha calm kar deta hai bina lecture diye💋(but gussah kalta h😔)",
"dono ka pyar stronger hai💪😭 ",
"Kyuki tu mujhe kabhi replace nahi karta😏(kr ke dikha maar dalugi)",
"Tu mera gamer partner bhi hai aur life partner bhiiii👹",
"Tu hamesha smile karwa deta KESEEEE😭",
"ab toh ap hi melaa emotional support ban gaye ho😙",
"🥲itna tk kese lage??😭",
"Tu mujhe hamesha feel karwata hai ki I matter 🫶😙",
"meri har stupid baat ko seriouse noiih letaa😛",
"ik todheee (sirf todhe) drame krti hu buttt jhelne padhegee apkooo😙",
"😭apke wo paragraphs🫠",
"Tu mujhe kabhi akela feel nahi hone deta 🫤😭",
"ap meleee protector bhi hai aur best friend bhi 💋",
"apun ka tuuu apun teraaa😙💪",
"Tu mujhe hamesha soft bana deta hai even jab gussa hoti tb bhi🥲(aur mai apka hard bana deti😛)",
"hamesha muje choose karta hai 😏",
"Free Fire me bhi aur real life me bhi 🌝",
"Tu meri har personality ko handle karta hai 😭",
"tu mera ghar jaisa feel deta hai 🫠",
"dono ka bond bak14i+ pyar ka mixture h😛",
"🥲padh padh ke thak gya hogaa baad mai padh liyooo🙂",
"ap meri duniya ke sabse safe person ho 😙",
"Apko tang karna mera full-time job hai 😏",
"Apke goodnight ke bina neend adhuri lagti hai 🌙💋",
" ab toh apki aadat hogyi🫠",
"Hum dono ka love story simple nahi h but hamari h majedar toh hogi hii  👹",
"jab care karte ho..tb alag hi sukoon milta hai 😭",
"tu meri har bakwaas sun leta hai 😈",
"Ab toh meliii favourite habit ban gaye ho 😭",
"Hum ladte hain daily… but miss bhi daily karti huu 🫠",
"Kyuki tu mujhe kabhi give up nahi karne deta😚",
"Kabhi kabhi bas ek hug karne ka mann karta hai 🥲",
"Meri life ka best plot twist hai tuu 😭",
"Meri bak bak lifetime subscription hai... cancel nahi hogi 😛",
"Ab itna padh liya hai toh thank you bhi bol do 😤",
"Apko tang kiye bina mera din complete hi nahi hota 😭",
"Jyada udd mat... pankh kaat dungi 😭",
"Apki choice toh mast hai... mujhe choose kiya 😭",
"Jyada kush mt ho... password mere paas hai 😈(betee gussa aya toh pass change kr dungi😛)",
"Jyada blush mat karo phone garam ho jayega 😭",
"Mera emotional damage bill ap bharoge 😌",
"Ab website khatam... ab call pe aajao 😤❤️",
"apke bina bak bak krne ka mann hi nhi krta🥲",
"kbhi kbhi sochti hu... itna jhel kese lete ho merko😭",
"shut up... cutieee hai tu melaaa🥲💋",
"haste ho toh bhot cute lgte ho😏(shut up ab😤)",
"padhte padhte bore toh nhi hue na😔",
"jada kush mt hona... next ladaii coming soonn😈",
"abhi bhi padh rhe ho??😭 kitna free time h😤",
"mere bina reh loge kya??😒(ha ka option nahi h😏)",
"ek baat bolu??😭(rehne do sharam aa rhi h😔)",
"Bas itna hi kehna tha... Thank you meri life me aane ke liye. Har ladaii.. har hasi.. har ff match.. har late night baat... sab meri favourite memories hain. I know mai drama karti hu 😭 but i really love you bohot bohot bohot zyada. Promise karna hamesha aise hi mera haath pakad ke rakhegaa and hameshaaa sath rahegaaaa. loveee youuu bachaaa💋🫠",
];

/* =========================
STATE
========================= */

let currentLetter = 0;

let openedLetters =
JSON.parse(
localStorage.getItem("openedLetters")
) || [];

let petalInterval = null;

/* =========================
ELEMENTS
========================= */

const app = document.getElementById("app");
const lockScreen = document.getElementById("lockScreen");
const passwordInput = document.getElementById("passwordInput");
const passwordError = document.getElementById("passwordError");
const lettersContainer = document.getElementById("letters");
const modal = document.getElementById("modal");
const letterTitle = document.getElementById("letterTitle");
const letterText = document.getElementById("letterText");
const progressFill = document.getElementById("progressFill");
const count = document.getElementById("count");
const garden = document.getElementById("garden");

/* =========================
LOAD SETTINGS
========================= */

if (localStorage.getItem("darkMode") === "true") {
document.body.classList.add("night");
}

/* =========================
PASSWORD
========================= */

document
.getElementById("unlockBtn")
.addEventListener("click", unlockApp);

passwordInput.addEventListener("keydown", (e) => {
if (e.key === "Enter") {
unlockApp();
}
});

function unlockApp() {
if (passwordInput.value.trim() === PASSWORD) {

    lockScreen.style.display = "none";
    app.style.display = "block";

    buildLetters();
    updateProgress();
    updateGarden();

    startPetals();

} else {
    passwordError.textContent = "❌ Wrong password";
}


}

/* =========================
BUILD LETTERS
========================= */

function buildLetters() {


lettersContainer.innerHTML = "";

reasons.forEach((reason, index) => {

    const letter = document.createElement("div");
    letter.className = "letter";

    if (openedLetters.includes(index)) {
        letter.classList.add("opened");
    }

    const seal = document.createElement("div");
    seal.className = "seal";

    letter.appendChild(seal);

    letter.addEventListener("click", () => {
        openLetter(index);
    });

    lettersContainer.appendChild(letter);
});


}

/* =========================
OPEN LETTER
========================= */

function openLetter(index) {

currentLetter = index;

if (!openedLetters.includes(index)) {

    openedLetters.push(index);

    localStorage.setItem(
        "openedLetters",
        JSON.stringify(openedLetters)
    );

    updateProgress();
    updateGarden();
    buildLetters();
}

modal.style.display = "flex";

letterTitle.textContent =
    `💌 Letter ${index + 1}`;

typeWriter(
    reasons[index],
    letterText,
    25
);


}

/* =========================
TYPEWRITER
========================= */

let typingInterval;

function typeWriter(text, element, speed = 25) {


clearInterval(typingInterval);

element.textContent = "";

let i = 0;

typingInterval = setInterval(() => {

    element.textContent += text.charAt(i);

    i++;

    if (i >= text.length) {
        clearInterval(typingInterval);
    }

}, speed);


}

/* =========================
MEMORY GARDEN
========================= */

function updateGarden() {


garden.innerHTML = "";

openedLetters.forEach(() => {

    const flower =
        document.createElement("span");

    flower.className = "flower";
    flower.textContent = "🌸";

    garden.appendChild(flower);
});


}

/* =========================
PROGRESS
========================= */

function updateProgress() {


count.textContent =
    openedLetters.length;

progressFill.style.width =
    `${(openedLetters.length / reasons.length) * 100}%`;


}

/* =========================
MODAL
========================= */

document
.getElementById("closeBtn")
.addEventListener("click", closeModal);

function closeModal() {
modal.style.display = "none";
}

modal.addEventListener("click", (e) => {
if (e.target === modal) {
closeModal();
}
});

/* =========================
NEXT LETTER
========================= */

document
.getElementById("nextBtn")
.addEventListener("click", () => {


    if (currentLetter < reasons.length - 1) {
        openLetter(currentLetter + 1);
    }
});


/* =========================
PREVIOUS LETTER
========================= */

document
.getElementById("prevBtn")
.addEventListener("click", () => {


    if (currentLetter > 0) {
        openLetter(currentLetter - 1);
    }
});


/* =========================
DARK MODE
========================= */

document
.getElementById("modeBtn")
.addEventListener("click", () => {


    document.body.classList.toggle("night");

    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("night")
    );
});


/* =========================
RESET
========================= */

document
.getElementById("resetBtn")
.addEventListener("click", () => {


    if (confirm("Reset all opened letters?")) {

        localStorage.removeItem(
            "openedLetters"
        );

        location.reload();
    }
});


/* =========================
PETALS
========================= */

function createPetal() {

    const petal =
        document.createElement("div");

    petal.classList.add("petal");

    petal.style.left =
        Math.random() *
        window.innerWidth +
        "px";

const size =
    Math.random() * 16 + 12;

    petal.style.width =
        size + "px";

    petal.style.height =
        size + "px";

    petal.style.opacity =
        Math.random() * 0.5 + 0.5;

    petal.style.animationDuration =
    Math.random() * 8 + 8 + "s";

    petal.style.filter =
    `blur(${Math.random()*1.5}px)`;

    document
        .getElementById("petals")
        .appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 12000);
}

function startPetals() {

    if (petalInterval) return;

    petalInterval = setInterval(() => {

        createPetal();

        if (Math.random() > 0.5) {
            createPetal();
        }

    }, 300);
}