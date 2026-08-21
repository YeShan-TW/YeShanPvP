```javascript
const SERVER_IP = "katherine-scripts.tun.ply.gg";

const copyButton = document.getElementById("copyIP");
const copyMessage = document.getElementById("copyMessage");

if (copyButton) {

    copyButton.addEventListener("click", async () => {

        try {

            await navigator.clipboard.writeText(SERVER_IP);

            copyButton.textContent = "已複製 ✓";

            if (copyMessage) {
                copyMessage.textContent = "伺服器 IP 已複製！";
            }

            setTimeout(() => {

                copyButton.textContent = "複製伺服器 IP";

                if (copyMessage) {
                    copyMessage.textContent = "";
                }

            }, 2000);

        } catch (error) {

            const textarea = document.createElement("textarea");

            textarea.value = SERVER_IP;

            document.body.appendChild(textarea);

            textarea.select();

            document.execCommand("copy");

            textarea.remove();

            copyButton.textContent = "已複製 ✓";

            if (copyMessage) {
                copyMessage.textContent = "伺服器 IP 已複製！";
            }

            setTimeout(() => {

                copyButton.textContent = "複製伺服器 IP";

                if (copyMessage) {
                    copyMessage.textContent = "";
                }

            }, 2000);

        }

    });

}


/* 頁面載入動畫 */

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("loaded");

});


/* 卡片進場動畫 */

const cards = document.querySelectorAll(
    ".home-card, .feature-card, .game-card, .rules article, .join-steps article"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);


cards.forEach(card => {

    card.classList.add("reveal");

    observer.observe(card);

});
```
