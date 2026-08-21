```javascript
const SERVER_IP = "katherine-scripts.tun.ply.gg";

const copyButton = document.getElementById("copyIP");
const copyMessage = document.getElementById("copyMessage");

if (copyButton) {

    copyButton.addEventListener("click", async () => {

        try {

            await navigator.clipboard.writeText(SERVER_IP);

            copyButton.textContent = "已複製 ✓";

            copyMessage.classList.add("show");

            setTimeout(() => {

                copyButton.textContent = "複製 IP";

                copyMessage.classList.remove("show");

            }, 2000);

        } catch (error) {

            const textarea = document.createElement("textarea");

            textarea.value = SERVER_IP;

            document.body.appendChild(textarea);

            textarea.select();

            document.execCommand("copy");

            textarea.remove();

            copyButton.textContent = "已複製 ✓";

            copyMessage.classList.add("show");

            setTimeout(() => {

                copyButton.textContent = "複製 IP";

                copyMessage.classList.remove("show");

            }, 2000);
        }

    });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".info-card, .about-main, .about-card, .step, .rule, .server-box, .fair-play"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});


/* =========================
   NAV ACTIVE
========================= */

const sections = document.querySelectorAll(
    "section[id]"
);

const navLinks = document.querySelectorAll(
    ".navbar nav a"
);

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.style.color = "#8d8d8d";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#ffffff";
        }

    });

});


/* =========================
   COPY HERO IP
========================= */

const heroIP = document.querySelector(".hero-ip strong");

if (heroIP) {

    heroIP.style.cursor = "pointer";

    heroIP.title = "點擊複製 IP";

    heroIP.addEventListener("click", async () => {

        try {

            await navigator.clipboard.writeText(SERVER_IP);

            heroIP.textContent = "Copied!";

            setTimeout(() => {
                heroIP.textContent = SERVER_IP;
            }, 1500);

        } catch (error) {

            console.log("Copy failed.");

        }

    });

}
```
