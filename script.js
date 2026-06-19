/* ==========================================
   DCNM JEWELS - LUXURY SOCIAL HUB
   script.js
========================================== */

/* ==========================================
   CONFIG PANEL
   Edit Everything Here Only
========================================== */

const CONFIG = {
  brandName: "DCNM JEWELS",
  tagline: "Connect With Us Everywhere",

  instagram:
    "https://www.instagram.com/dhamuchettiar?igsh=YTVlbGRrY2E2OHVo",

  facebook:
    "https://www.facebook.com/61551798070420/",

  youtube:
    "https://youtube.com/@dcnm-?si=7eMABVRCQrKscp6L",

  pinterest:
    "https://pin.it/6F0MPSgYo",

  whatsappChannel:
    "https://whatsapp.com/channel/0029Vau3aGc8KMqqiJJDY60n",

  linkedin:
    "https://www.linkedin.com/company/dhamuchettiarnagaimaaligai/",

  website:
    "https://dcnmjewels.in",

  androidApp:
    "https://play.google.com/store/apps/details?id=com.dhamu.wincrm&pcampaignid=web_share",

  iosApp:
    "https://apps.apple.com/app/id1620156464"
};

/* ==========================================
   DOM READY
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  initScrollReveal();
  initRippleEffects();
  initBackToTop();
  initWhatsappFAB();
  initMouseParallax();
  initFloatingParticles();
  initCardHoverEffect();

});

/* ==========================================
   SCROLL REVEAL
========================================== */

function initScrollReveal() {

  const elements = document.querySelectorAll(
    ".social-card,.contact,.hero"
  );

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

        }

      });

    },
    {
      threshold: 0.15
    }
  );

  elements.forEach(el => {

    el.classList.add("hidden");
    observer.observe(el);

  });

}

/* ==========================================
   RIPPLE EFFECT
========================================== */

function initRippleEffects() {

  document.querySelectorAll(
    ".social-card,.cta-btn"
  ).forEach(button => {

    button.addEventListener("click", function(e) {

      const ripple = document.createElement("span");

      const rect = this.getBoundingClientRect();

      const size =
        Math.max(rect.width, rect.height);

      ripple.style.width = size + "px";
      ripple.style.height = size + "px";

      ripple.style.left =
        e.clientX - rect.left - size / 2 + "px";

      ripple.style.top =
        e.clientY - rect.top - size / 2 + "px";

      ripple.classList.add("ripple");

      this.appendChild(ripple);

      setTimeout(() => {

        ripple.remove();

      }, 600);

    });

  });

}

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

function initBackToTop() {

  const btn = document.createElement("button");

  btn.innerHTML = "↑";

  btn.className = "back-to-top";

  document.body.appendChild(btn);

  window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

      btn.classList.add("active");

    } else {

      btn.classList.remove("active");

    }

  });

  btn.addEventListener("click", () => {

    window.scrollTo({

      top: 0,
      behavior: "smooth"

    });

  });

}

/* ==========================================
   WHATSAPP FLOATING BUTTON
========================================== */

function initWhatsappFAB() {

  const fab = document.createElement("a");

  fab.href = CONFIG.whatsappChannel;

  fab.target = "_blank";

  fab.rel = "noopener noreferrer";

  fab.className = "whatsapp-fab";

  fab.innerHTML = "💬";

  fab.setAttribute(
    "aria-label",
    "WhatsApp Channel"
  );

  document.body.appendChild(fab);

}

/* ==========================================
   MOUSE PARALLAX
========================================== */

function initMouseParallax() {

  const hero = document.querySelector(".hero");

  if (!hero) return;

  hero.addEventListener("mousemove", e => {

    const x =
      (window.innerWidth / 2 - e.clientX) / 50;

    const y =
      (window.innerHeight / 2 - e.clientY) / 50;

    hero.style.transform =
      `translate(${x}px, ${y}px)`;

  });

}

/* ==========================================
   FLOATING GOLD PARTICLES
========================================== */

function initFloatingParticles() {

  const particleContainer =
    document.createElement("div");

  particleContainer.className =
    "particle-container";

  document.body.appendChild(
    particleContainer
  );

  for (let i = 0; i < 40; i++) {

    createParticle(
      particleContainer
    );

  }

}

function createParticle(container) {

  const particle =
    document.createElement("span");

  particle.className =
    "gold-particle";

  const size =
    Math.random() * 5 + 2;

  particle.style.width =
    `${size}px`;

  particle.style.height =
    `${size}px`;

  particle.style.left =
    `${Math.random() * 100}%`;

  particle.style.top =
    `${Math.random() * 100}%`;

  particle.style.animationDuration =
    `${Math.random() * 12 + 8}s`;

  particle.style.animationDelay =
    `${Math.random() * 5}s`;

  container.appendChild(
    particle
  );

}

/* ==========================================
   MAGNETIC CARD EFFECT
========================================== */

function initCardHoverEffect() {

  const cards =
    document.querySelectorAll(
      ".social-card"
    );

  cards.forEach(card => {

    card.addEventListener(
      "mousemove",
      e => {

        const rect =
          card.getBoundingClientRect();

        const x =
          e.clientX -
          rect.left -
          rect.width / 2;

        const y =
          e.clientY -
          rect.top -
          rect.height / 2;

        card.style.transform =
          `perspective(1000px)
           rotateX(${-y / 20}deg)
           rotateY(${x / 20}deg)
           translateY(-10px)`;

      }
    );

    card.addEventListener(
      "mouseleave",
      () => {

        card.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg)";

      }
    );

  });

}

/* ==========================================
   SMOOTH SCROLL LINKS
========================================== */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(anchor => {

    anchor.addEventListener(
      "click",
      function(e) {

        e.preventDefault();

        const target =
          document.querySelector(
            this.getAttribute("href")
          );

        if (!target) return;

        target.scrollIntoView({

          behavior: "smooth"

        });

      }
    );

  });

/* ==========================================
   DYNAMIC YEAR
========================================== */

const yearElement =
  document.querySelector(".year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}

/* ==========================================
   GOLDEN CURSOR GLOW
========================================== */

const cursorGlow =
  document.createElement("div");

cursorGlow.className =
  "cursor-glow";

document.body.appendChild(
  cursorGlow
);

document.addEventListener(
  "mousemove",
  e => {

    cursorGlow.style.left =
      e.clientX + "px";

    cursorGlow.style.top =
      e.clientY + "px";

  }
);

/* ==========================================
   PRELOADER
========================================== */

window.addEventListener(
  "load",
  () => {

    const loader =
      document.querySelector(
        ".preloader"
      );

    if (loader) {

      loader.classList.add(
        "loaded"
      );

      setTimeout(() => {

        loader.remove();

      }, 800);

    }

  }
);

/* ==========================================
   CONSOLE BRANDING
========================================== */

console.log(`
=====================================
        DCNM JEWELS
Luxury Social Media Hub
=====================================
`);