const SERVER_IP = "YeShanPvP.play.minekube.net";

const copyButton = document.getElementById("copyIP");
const copyMessage = document.getElementById("copyMessage");


/* ================================
   複製伺服器 IP
================================ */

if (copyButton) {

    copyButton.addEventListener("click", async () => {

        let copied = false;

        /*
         * 方法 1：Clipboard API
         */
        if (navigator.clipboard && window.isSecureContext) {

            try {

                await navigator.clipboard.writeText(SERVER_IP);

                copied = true;

            } catch (error) {

                console.warn(
                    "Clipboard API 複製失敗，改用備用方法。",
                    error
                );

            }

        }


        /*
         * 方法 2：傳統 execCommand
         */
        if (!copied) {

            try {

                const textarea = document.createElement("textarea");

                textarea.value = SERVER_IP;

                textarea.style.position = "fixed";
                textarea.style.left = "-9999px";
                textarea.style.top = "0";

                textarea.setAttribute("readonly", "");

                document.body.appendChild(textarea);

                textarea.focus();
                textarea.select();

                textarea.setSelectionRange(
                    0,
                    textarea.value.length
                );

                copied = document.execCommand("copy");

                textarea.remove();

            } catch (error) {

                console.error(
                    "傳統複製方法也失敗：",
                    error
                );

                copied = false;

            }

        }


        /*
         * 顯示結果
         */

        if (copied) {

            copyButton.textContent = "已複製 ✓";

            if (copyMessage) {
                copyMessage.textContent =
                    "伺服器 IP 已複製！";
            }

        } else {

            copyButton.textContent = "複製失敗";

            if (copyMessage) {
                copyMessage.textContent =
                    "瀏覽器阻止自動複製，請手動複製 IP。";
            }

        }


        /*
         * 2 秒後恢復
         */

        setTimeout(() => {

            copyButton.textContent =
                "複製伺服器 IP";

            if (copyMessage) {
                copyMessage.textContent = "";
            }

        }, 2000);

    });

}


/* ================================
   頁面載入動畫
================================ */

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("loaded");

});


/* ================================
   卡片進場動畫
================================ */

const cards = document.querySelectorAll(
    ".home-card, .feature-card, .game-card, .rules article, .join-steps article"
);


if (cards.length > 0) {

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

}