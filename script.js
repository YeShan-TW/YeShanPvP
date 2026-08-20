const rulesText = `⚔️ YeShan Rules

1. 禁止任何作弊程式或不公平的第三方工具。
2. 禁止利用 Bug 或漏洞取得優勢。
3. 禁止惡意騷擾、辱罵或歧視其他玩家。
4. 禁止冒充管理員。
5. 禁止在伺服器內宣傳其他伺服器。
6. 禁止利用重生點或地圖漏洞惡意影響遊戲。
7. 發現 Bug 請回報，不得故意利用。
8. 管理團隊有權處理未明確列出的不公平行為。

加入伺服器即代表你同意遵守以上規則。`;

document.getElementById("year").textContent = new Date().getFullYear();

const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.getElementById("copyRules").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(rulesText);
    showToast("規則已複製！");
  } catch {
    showToast("瀏覽器不允許複製，請手動選取文字。");
  }
});
