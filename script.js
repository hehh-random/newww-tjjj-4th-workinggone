const PASSWORD = "2524";

/* =========================
REASONS
========================= */

const reasons = [
"Because your smile can brighten even my darkest day ❤️",

"Because hearing your voice instantly makes me happier ❤️",

"Because you make ordinary moments feel magical ❤️",

"Because you always know how to make me laugh ❤️",

"Because being around you feels like home ❤️",

"Because your kindness inspires me ❤️",

"Because you make me want to be a better person ❤️",

"Because your happiness matters to me ❤️",

"Because you believe in me even when I doubt myself ❤️",

"Because every day with you feels special ❤️",

"Because your laugh is my favorite sound ❤️",

"Because you make difficult days easier ❤️",

"Because you are beautiful inside and out ❤️",

"Because you care deeply about the people you love ❤️",

"Because you make me feel understood ❤️",

"Because your hugs feel safe ❤️",

"Because your eyes tell stories words cannot ❤️",

"Because you bring warmth wherever you go ❤️",

"Because you always try your best ❤️",

"Because you make life more exciting ❤️",

"Because you remember the little things ❤️",

"Because you make me smile without trying ❤️",

"Because you have the kindest heart ❤️",

"Because you make every memory better ❤️",

"Because you are wonderfully unique ❤️",

"Because your presence calms me ❤️",

"Because you make me feel lucky every day ❤️",

"Because I can be myself around you ❤️",

"Because you make even boring moments fun ❤️",

"Because your love makes me stronger ❤️",

"Because you always know how to comfort me ❤️",

"Because your dreams inspire me ❤️",

"Because your determination amazes me ❤️",

"Because you make me feel appreciated ❤️",

"Because you bring light wherever you go ❤️",

"Because you make me laugh when I need it most ❤️",

"Because your smile is contagious ❤️",

"Because your heart is pure ❤️",

"Because you make every season feel beautiful ❤️",

"Because every conversation with you means something ❤️",

"Because you understand me in ways nobody else does ❤️",

"Because your excitement makes everything better ❤️",

"Because you make me look forward to tomorrow ❤️",

"Because your support means the world to me ❤️",

"Because you never stop caring ❤️",

"Because you make me feel seen ❤️",

"Because your presence is comforting ❤️",

"Because your love feels genuine ❤️",

"Because you make ordinary days unforgettable ❤️",

"Because you are my favorite notification ❤️",

"Because you are worth every mile, minute, and memory ❤️",

"Because you make my heart race in the best way ❤️",

"Because your happiness feels like my happiness ❤️",

"Because you are thoughtful ❤️",

"Because you make me believe in love ❤️",

"Because you make every day brighter ❤️",

"Because your voice can calm any storm ❤️",

"Because your laughter is unforgettable ❤️",

"Because your soul is beautiful ❤️",

"Because you always leave things better than you found them ❤️",

"Because you make me feel safe ❤️",

"Because your love feels effortless ❤️",

"Because you never fail to surprise me ❤️",

"Because your heart is full of compassion ❤️",

"Because you make me feel important ❤️",

"Because you always know how to cheer me up ❤️",

"Because you make me feel at peace ❤️",

"Because every memory with you is precious ❤️",

"Because you inspire me to dream bigger ❤️",

"Because you make life feel meaningful ❤️",

"Because you are one of my favorite people in the world ❤️",

"Because you make every place feel better ❤️",

"Because your smile deserves to be protected forever ❤️",

"Because you make me feel loved ❤️",

"Because your existence makes the world brighter ❤️",

"Because you are patient ❤️",

"Because you are thoughtful ❤️",

"Because your heart is incredibly beautiful ❤️",

"Because you always try to understand ❤️",

"Because you make me excited about the future ❤️",

"Because your affection feels genuine ❤️",

"Because you make me laugh until my cheeks hurt ❤️",

"Because you make every day feel like a gift ❤️",

"Because you care about the people around you ❤️",

"Because your smile is unforgettable ❤️",

"Because you make me feel special ❤️",

"Because your kindness changes lives ❤️",

"Because your presence is enough ❤️",

"Because you make me grateful every day ❤️",

"Because loving you feels natural ❤️",

"Because every chapter of my life is better with you in it ❤️",

"Because you are my favorite thought ❤️",

"Because you make my heart feel full ❤️",

"Because you make life worth celebrating ❤️",

"Because every day I find another reason to love you ❤️",

"Because you are you ❤️",

"Because you make the world feel softer ❤️",

"Because you are my happy place ❤️",

"Because no list could ever truly contain all the reasons ❤️",

"Because even after 100 reasons, I still have infinitely more to tell you ❤️"
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

```
    lockScreen.style.display = "none";
    app.style.display = "block";

    buildLetters();
    updateProgress();
    updateGarden();

    startPetals();

} else {
    passwordError.textContent = "❌ Wrong password";
}
```

}

/* =========================
BUILD LETTERS
========================= */

function buildLetters() {

```
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
```

}

/* =========================
OPEN LETTER
========================= */

function openLetter(index) {

```
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
```

}

/* =========================
TYPEWRITER
========================= */

let typingInterval;

function typeWriter(text, element, speed = 25) {

```
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
```

}

/* =========================
MEMORY GARDEN
========================= */

function updateGarden() {

```
garden.innerHTML = "";

openedLetters.forEach(() => {

    const flower =
        document.createElement("span");

    flower.className = "flower";
    flower.textContent = "🌸";

    garden.appendChild(flower);
});
```

}

/* =========================
PROGRESS
========================= */

function updateProgress() {

```
count.textContent =
    openedLetters.length;

progressFill.style.width =
    `${(openedLetters.length / reasons.length) * 100}%`;
```

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

```
    if (currentLetter < reasons.length - 1) {
        openLetter(currentLetter + 1);
    }
});
```

/* =========================
PREVIOUS LETTER
========================= */

document
.getElementById("prevBtn")
.addEventListener("click", () => {

```
    if (currentLetter > 0) {
        openLetter(currentLetter - 1);
    }
});
```

/* =========================
DARK MODE
========================= */

document
.getElementById("modeBtn")
.addEventListener("click", () => {

```
    document.body.classList.toggle("night");

    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("night")
    );
});
```

/* =========================
RESET
========================= */

document
.getElementById("resetBtn")
.addEventListener("click", () => {

```
    if (confirm("Reset all opened letters?")) {

        localStorage.removeItem(
            "openedLetters"
        );

        location.reload();
    }
});
```

/* =========================
PETALS
========================= */

function createPetal() {

```
const petal =
    document.createElement("div");

petal.classList.add("petal");

petal.style.left =
    Math.random() * window.innerWidth + "px";

document
    .getElementById("petals")
    .appendChild(petal);

setTimeout(() => {
    petal.remove();
}, 12000);
```

}

function startPetals() {

```
if (petalInterval) return;

petalInterval = setInterval(() => {
    createPetal();
}, 300);
```

}
