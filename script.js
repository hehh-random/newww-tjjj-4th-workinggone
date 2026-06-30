const PASSWORD = "2524";

/* =========================
REASONS
========================= */

const reasons = [
"sure ready???(tu ready h mehh noii🥲)",
"tu hamesha(kabhi kabhi shutup) mujhe handle karta hai KESEEEE🤨",
"Ff mai tu mera teammate nahi, mera backbone hai 😭",
"Hum hamesha ladte hain… but end mai ek dusre ko mana hi leta hai 😏",
"Teri voice sunke hi mera mood 100x better ho jata hai 😛",
"Tu mujhe overthink karne se rok leta hai bina kuch bole 😭",
"Isha(jiya) ka drama + Teju ka calm = perfect combo 👹",

"Kyuki tu mujhe hamesha importance deta hai even when I act rude 😤❤️",
"Tu protect karta hai mujhe, even from my own thoughts 🫶",
"Hum dono toxic nahi… bas thode pagal hain ek dusre ke liye 🤭",
"Tu hamesha bolta hai ‘chill kar Isha’ aur main actually chill ho jati hoon 😭",
"Free Fire me tu mujhe revive karta hai, real life me bhi 💕",
"Kyuki tu meri har nonsense baat sun leta hai 😭❤️",
"Tu mujhe itna janta hai jitna main khud ko nahi janti 🥺",
"Hum ladte hain for no reason… but pyar bhi wahi se strong hota hai ❤️",
"Tu hamesha meri side leta hai even when I’m wrong 😤❤️",
"Kyuki tu mujhe overprotective cute way me care karta hai 🫶",
"Tere saath silence bhi comfortable lagta hai 😌❤️",
"Tu meri mood swings ko bhi tolerate kar leta hai 😭",
"Isha ka attitude + Teju ka patience = legendary love story 💀❤️",
"Tu mujhe ignore nahi karta, even when I act annoying 😤",
"Kyuki tu mera safe place hai without even trying 🥺",
"Free Fire win ya loss… tere saath sab fun lagta hai 🎮❤️",
"Tu mujhe ‘pagal’ bolta hai but still loves me 🤭",
"Hum dono ka fight = 5 min ka drama + lifetime ka patch-up 😂",
"Tu mujhe hamesha samajhne ki koshish karta hai ❤️",
"Kyuki tu meri overthinking ko bhi handle kar leta hai 🫶",
"Tu mujhe hamesha priority feel karwata hai 🥺",
"Main kitni bhi messy hoon, tu phir bhi stay karta hai 😭",
"Tu meri har silly jealousy ko cute bana deta hai 🤭❤️",
"Kyuki tu mujhe ‘Isha’ kehke itna special feel karwata hai 💕",
"Teju + Isha = chaotic but real ❤️",
"Tu mujhe hamesha calm kar deta hai bina lecture diye 😌",
"Hum dono ka ego clash hota hai… but pyar stronger hai 🫶",
"Kyuki tu mujhe kabhi replace nahi karta 💔➡️❤️",
"Tu mera gamer partner bhi hai aur life partner vibes bhi 🎮",
"Tu mujhe hamesha smile karwa deta hai even on bad days 🥺",
"Kyuki tu mera emotional support ban gaya hai without trying ❤️",
"Hum ladte hain, block-unblock nahi… bas mana lete hain 😭",
"Tu mujhe hamesha feel karwata hai ki I matter 🫶",
"Kyuki tu meri har stupid baat ko seriously leta hai 🤭",
"Tu mujhe ‘over dramatic queen’ bolta hai but still loves me 👑",
"Teju, tu mera calm in chaos hai 🌪️❤️",
"Tu mujhe kabhi akela feel nahi hone deta 🥺",
"Kyuki tu mera protector bhi hai aur best friend bhi 🫶",
"Hum dono ka love thoda messy hai… but real hai ❤️",
"Tu mujhe hamesha soft bana deta hai even when I’m angry 😭",
"Kyuki tu mujhe hamesha choose karta hai ❤️",
"Free Fire me bhi aur real life me bhi 🎮",
"Tu meri har weakness ko handle karta hai 💕",
"Kyuki tu mera ghar jaisa feel deta hai 🏡❤️",
"Hum dono ka bond toxic nahi… just intense hai 😭",
"Tu mujhe hamesha ‘calm down baby’ bolta hai 🥺",
"Kyuki tu meri duniya ka sabse safe person hai ❤️",
"Tu meri har fight ke baad bhi stay karta hai 🫶",
"Kyuki tu mujhe bina condition ke accept karta hai 😭",
"Tu mera Teju… aur main teri Isha 💕",
"Hum dono ka love story simple nahi… but ours hai ❤️",
"Tu mujhe hamesha special feel karwata hai 🥺",
"Kyuki tu meri har bakwaas sun leta hai 🤭",
"Tu mera favorite teammate hai life ka 🎮❤️",
"Hum ladte hain daily… but miss bhi daily karte hain 😭",
"Kyuki tu mujhe kabhi give up nahi karta 🫶",
"Tu mera emotional anchor hai 🌊❤️",
"Tu mujhe hamesha safe feel karwata hai 🥺",
"Kyuki tu mera calm aur chaos dono hai 💕",
"Tu meri har silly fight ke baad bhi pyaar karta hai 😭",
"Hum dono ka bond explain nahi ho sakta… bas feel hota hai ❤️",
"Kyuki tu mujhe hamesha ‘apna’ bana ke rakhta hai 🫶",
"Tu mera favorite person hai duniya me 🌍❤️",
"Tu mujhe hamesha yaad dilata hai ki I’m loved 🥺",
"Kyuki tu meri life ka best glitch hai 🎮💕",
"Tu mujhe hamesha smile mode me la deta hai 😭",
"Hum dono ka love chaotic hai… but pure hai ❤️",
"Kyuki tu mujhe hamesha priority banata hai 🫶",
"Tu mera Teju aur main teri Isha forever 💕"
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