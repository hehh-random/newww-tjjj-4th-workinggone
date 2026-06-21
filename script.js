const PASSWORD = "2524";

/* =========================
   REASONS
========================= */

const reasons = Array.from(
    { length: 100 },
    (_, i) => `Reason ${i + 1} ❤️`
);

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

const passwordInput =
    document.getElementById("passwordInput");

const passwordError =
    document.getElementById("passwordError");

const lettersContainer =
    document.getElementById("letters");

const modal =
    document.getElementById("modal");

const letterTitle =
    document.getElementById("letterTitle");

const letterText =
    document.getElementById("letterText");

const progressFill =
    document.getElementById("progressFill");

const count =
    document.getElementById("count");

const garden =
    document.getElementById("garden");

/* =========================
   LOAD SETTINGS
========================= */

if (
    localStorage.getItem("darkMode") === "true"
) {
    document.body.classList.add("night");
}

/* =========================
   PASSWORD
========================= */

document
    .getElementById("unlockBtn")
    .addEventListener(
        "click",
        unlockApp
    );

passwordInput.addEventListener(
    "keydown",
    (e) => {
        if (e.key === "Enter") {
            unlockApp();
        }
    }
);

function unlockApp() {

    if (
        passwordInput.value.trim() === PASSWORD
    ) {

        lockScreen.style.display = "none";
        app.style.display = "block";

        buildLetters();
        updateProgress();
        updateGarden();

        startPetals();

    } else {

        passwordError.textContent =
            "❌ Wrong password";

    }
}

/* =========================
   BUILD LETTERS
========================= */

function buildLetters() {

    lettersContainer.innerHTML = "";

    reasons.forEach((reason, index) => {

        const letter =
            document.createElement("div");

        letter.className = "letter";

        if (
            openedLetters.includes(index)
        ) {
            letter.classList.add("opened");
        }

        const seal =
            document.createElement("div");

        seal.className = "seal";

        letter.appendChild(seal);

        letter.addEventListener(
            "click",
            () => openLetter(index)
        );

        lettersContainer.appendChild(letter);

    });
}

/* =========================
   OPEN LETTER
========================= */

function openLetter(index) {

    currentLetter = index;

    if (
        !openedLetters.includes(index)
    ) {

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

    if (index === 99) {

        letterTitle.textContent =
            "💖 FINAL LETTER 💖";

        typeWriter(
            "You opened all 100 reasons... and I still have infinitely more reasons to love you ❤️",
            letterText,
            25
        );

    } else {

        letterTitle.textContent =
            `Letter ${index + 1}`;

        typeWriter(
            reasons[index],
            letterText,
            25
        );
    }
}

/* =========================
   TYPEWRITER
========================= */

let typingInterval;

function typeWriter(
    text,
    element,
    speed = 25
) {

    clearInterval(typingInterval);

    element.textContent = "";

    let i = 0;

    typingInterval = setInterval(() => {

        element.textContent += text.charAt(i);

        i++;

        if (i >= text.length) {
            clearInterval(
                typingInterval
            );
        }

    }, speed);
}

/* =========================
   MEMORY GARDEN
========================= */

function updateGarden() {

    garden.innerHTML = "";

    const flowers = [
        "🌷",
        "🌸",
        "🌹",
        "🌺",
        "🪻"
    ];

    openedLetters.forEach((index) => {

        const flower =
            document.createElement("span");

        flower.className = "flower";

        flower.textContent =
            flowers[
                index % flowers.length
            ];

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
        `${openedLetters.length}%`;
}

/* =========================
   MODAL
========================= */

document
    .getElementById("closeBtn")
    .addEventListener(
        "click",
        closeModal
    );

function closeModal() {

    modal.style.display = "none";
}

modal.addEventListener(
    "click",
    (e) => {

        if (e.target === modal) {
            closeModal();
        }

    }
);

/* =========================
   NEXT LETTER
========================= */

document
    .getElementById("nextBtn")
    .addEventListener(
        "click",
        () => {

            if (
                currentLetter < 99
            ) {
                openLetter(
                    currentLetter + 1
                );
            }

        }
    );

/* =========================
   PREVIOUS LETTER
========================= */

document
    .getElementById("prevBtn")
    .addEventListener(
        "click",
        () => {

            if (
                currentLetter > 0
            ) {
                openLetter(
                    currentLetter - 1
                );
            }

        }
    );

/* =========================
   DARK MODE
========================= */

document
    .getElementById("modeBtn")
    .addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "night"
            );

            localStorage.setItem(
                "darkMode",
                document.body.classList.contains(
                    "night"
                )
            );
        }
    );

/* =========================
   RESET
========================= */

document
    .getElementById("resetBtn")
    .addEventListener(
        "click",
        () => {

            if (
                confirm(
                    "Reset all opened letters?"
                )
            ) {

                localStorage.removeItem(
                    "openedLetters"
                );

                location.reload();
            }
        }
    );

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
        Math.random() * 12 + 10;

    petal.style.width =
        size + "px";

    petal.style.height =
        size + "px";

    petal.style.opacity =
        Math.random() * 0.5 + 0.5;

    petal.style.animationDuration =
        Math.random() * 6 + 6 + "s";

    document
        .getElementById("petals")
        .appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 12000);
}

function startPetals() {

    if (petalInterval) return;

    petalInterval = setInterval(
        () => {

            createPetal();

            if (
                Math.random() > 0.5
            ) {
                createPetal();
            }

        },
        300
    );
}