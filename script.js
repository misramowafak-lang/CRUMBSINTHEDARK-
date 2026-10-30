// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
navMenu.classList.toggle("open");

const icon = menuToggle.querySelector("i");

icon.classList.toggle("fa-bars");
icon.classList.toggle("fa-xmark");

});

document.querySelectorAll("#navMenu a").forEach(link => {
link.addEventListener("click", () => {
navMenu.classList.remove("open");

    const icon = menuToggle.querySelector("i");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
});

});

// SCROLL REVEAL

const revealObserver = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("show");
revealObserver.unobserve(entry.target);
}
});
}, {
threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(element => {
revealObserver.observe(element);
});

// CURSOR GLOW

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", event => {
cursorGlow.style.left = event.clientX + "px";
cursorGlow.style.top = event.clientY + "px";
});

// MONSTER INTERACTIONS

const monsterData = {

butcher: {
    title: "THE BUTCHER",
    description:
    "A brutal hunter that patrols abandoned corridors. It reacts to noise and relentlessly pursues anyone who gets too close. Running might save you, but it might also reveal your location."
},

crawler: {
    title: "THE CRAWLER",
    description:
    "A twisted creature that moves through narrow tunnels and dark spaces. It prefers unexpected attacks and can disappear into places where ordinary players cannot follow."
},

arms: {
    title: "THE LONG ARMS",
    description:
    "An unnatural creature with an enormous reach. It can grab isolated players from a distance and drag them away from their teammates. Never wander alone."
}

};

const monsterCards = document.querySelectorAll(".monster-card");

monsterCards.forEach(card => {

card.addEventListener("click", () => {

    const type = card.dataset.monster;
    const monster = monsterData[type];

    monsterCards.forEach(item => {
        item.classList.remove("active");
    });

    card.classList.add("active");

    document.getElementById("modalTag").textContent =
        "HOSTILE ENTITY / " + type.toUpperCase();

    document.getElementById("modalTitle").textContent =
        monster.title;

    document.getElementById("modalDescription").textContent =
        monster.description;

    document.getElementById("infoModal").classList.add("show");

    // Simulated monster attack animation
    const icon = card.querySelector(".monster-eye");

    icon.style.transform = "translate(-50%, -50%) scale(1.8) rotate(15deg)";

    setTimeout(() => {
        icon.style.transform = "";
    }, 700);

});

});

// WORLD INFORMATION

const worldData = {

office: {
    title: "THE INFINITE OFFICE",
    description: "A never-ending maze of identical offices. Find six keycards, restore electricity, and reach the elevator. Something listens to your footsteps."
},

hospital: {
    title: "THE SILENT HOSPITAL",
    description: "An abandoned medical facility. Collect four samples, find the operating room key, and rescue your teammate while the Butcher hunts nearby."
},

market: {
    title: "THE DEAD SUPERMARKET",
    description: "Ten food boxes are scattered between endless shelves. Find the warehouse keys. Do not assume that everything between the shelves is a product."
},

pools: {
    title: "THE DROWNED POOLS",
    description: "Activate three valves and drain the water. The tunnels beneath the facility are home to something that moves faster than you."
},

station: {
    title: "THE LAST STATION",
    description: "Repair the train and collect fuel. The station is abandoned, but the creature watching from the tracks is not."
},

factory: {
    title: "THE RED FACTORY",
    description: "Collect machine components and restart the production line. Avoid the cutting rooms. The Butcher is faster here."
}

};

const modal = document.getElementById("infoModal");

document.querySelectorAll(".details-btn").forEach(button => {

button.addEventListener("click", () => {

    const world = worldData[button.dataset.world];

    document.getElementById("modalTag").textContent =
        "WORLD INFORMATION / CLASSIFIED";

    document.getElementById("modalTitle").textContent =
        world.title;

    document.getElementById("modalDescription").textContent =
        world.description;

    modal.classList.add("show");

});

});

// CLOSE MODAL

document.getElementById("modalClose").addEventListener("click", () => {
modal.classList.remove("show");
});

modal.addEventListener("click", event => {
if (event.target === modal) {
modal.classList.remove("show");
}
});

document.addEventListener("keydown", event => {
if (event.key === "Escape") {
modal.classList.remove("show");
}
});

// EMAIL SUBSCRIPTION DEMO

const subscribeForm = document.getElementById("subscribeForm");
const emailInput = document.getElementById("emailInput");
const formMessage = document.getElementById("formMessage");

subscribeForm.addEventListener("submit", event => {

event.preventDefault();

const email = emailInput.value.trim().toLowerCase();

if (!email || !emailInput.checkValidity()) {
    formMessage.textContent = "Please enter a valid email address.";
    return;
}

// Local demo only. A real server connection is required
// to collect subscribers and send launch announcements.

const subscribers = JSON.parse(
    localStorage.getItem("crumbsSubscribers") || "[]"
);

if (subscribers.includes(email)) {

    formMessage.textContent =
        "This email is already on the release list.";

    return;
}

subscribers.push(email);

localStorage.setItem(
    "crumbsSubscribers",
    JSON.stringify(subscribers)
);

formMessage.innerHTML =
    '<i class="fa-solid fa-check-circle"></i> You are on the list. Stay alert.';

subscribeForm.reset();

});

// BUTTON CLICK EFFECT

document.querySelectorAll("button, .btn").forEach(button => {

button.addEventListener("click", () => {

    button.animate([
        { transform: "scale(1)" },
        { transform: "scale(.96)" },
        { transform: "scale(1)" }
    ], {
        duration: 220,
        easing: "ease-out"
    });

});

});

// HERO PARALLAX

const hero = document.querySelector(".hero");
const heroImage = document.querySelector(".hero-image");

hero.addEventListener("mousemove", event => {

if (window.innerWidth < 700) return;

const x = (event.clientX / window.innerWidth - .5) * 15;
const y = (event.clientY / window.innerHeight - .5) * 15;

heroImage.style.transform =
    `translate(${x}px, ${y}px) scale(1.04)`;

});

hero.addEventListener("mouseleave", () => {
heroImage.style.transform = "translate(0, 0) scale(1)";
});

// CONSOLE BRANDING

console.log(
"%c DREADTHREAD STUDIOS ",
"background:#d71920;color:white;font-size:20px;padding:12px;font-weight:bold;"
);

console.log(
"%c CRUMBS IN THE DARK - Don't trust the dark.",
"color:#999;font-size:13px;"
);