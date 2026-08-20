# YeShanPVP Rules

這是一個純 HTML / CSS / JavaScript 的 Cloudflare Pages 靜態網站，不需要 Node.js、npm、建置指令或後端。

## 部署到 Cloudflare Pages

### 方法 1：直接上傳 ZIP
1. 將此專案 ZIP 解壓縮。
2. 到 Cloudflare Dashboard → Workers & Pages。
3. 建立 Pages 專案並選擇「Direct Upload」。
4. 上傳解壓縮後的專案資料夾（或依 Cloudflare 介面要求上傳檔案）。
5. 部署。

### 方法 2：Git 部署
把這個資料夾推到 GitHub / GitLab，再在 Cloudflare Pages 連接儲存庫。

Build command：留空  
Build output directory：`/`（若介面要求，使用專案根目錄）

## 檔案
- `index.html`：網站主頁
- `style.css`：完整響應式樣式
- `script.js`：年份與「複製規則」功能
- `assets/favicon.svg`：網站圖示

網站是純靜態檔案，因此不需要 Wrangler 或 Cloudflare Functions。
