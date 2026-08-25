const SERVER_IP = "YeShanPvP.play.minekube.net";

const copyButton = document.getElementById("copyIP");
const copyMessage = document.getElementById("copyMessage");

if (copyButton) {

    copyButton.addEventListener("click", function () {

        navigator.clipboard.writeText(SERVER_IP)
            .then(function () {

                copyButton.textContent = "已複製 ✓";

                if (copyMessage) {
                    copyMessage.textContent = "伺服器 IP 已複製！";
                }

                setTimeout(function () {

                    copyButton.textContent = "複製伺服器 IP";

                    if (copyMessage) {
                        copyMessage.textContent = "";
                    }

                }, 2000);

            })
            .catch(function (error) {

                console.error("複製失敗:", error);

                copyButton.textContent = "複製失敗";

                if (copyMessage) {
                    copyMessage.textContent =
                        "請手動複製：YeShanPvP.play.minekube.net";
                }

                setTimeout(function () {

                    copyButton.textContent = "複製伺服器 IP";

                }, 3000);

            });

    });

}


/* 頁面載入動畫 */

document.addEventListener("DOMContentLoaded", function () {

    document.body.classList.add("loaded");

});