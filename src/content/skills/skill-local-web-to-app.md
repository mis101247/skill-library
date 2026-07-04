---
title: "網頁轉桌面 App Skill"
description: "將任意網頁轉換為桌面應用程式，支援 macOS/Windows/Linux 三大平台。使用 Rust + Tauri 技術棧，產生的應用體積小（約 5MB）、效能高。支援自訂圖示、視窗大小、快捷鍵等豐富配置。"
category: "creative"
tags:
  - "skill-store"
  - "local-skill"
  - "creative"
featured: false
entryType: "local"
publishedAt: 2026-07-01
updatedAt: 2026-07-01
sourceRepo: "skill"
sourceRepoUrl: "https://github.com/anbeime/skill"
sourcePath: "skills/web-to-app/web-to-app/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/web-to-app/web-to-app/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/web-to-app/web-to-app/SKILL.md"
license: "CC-BY-4.0"
originalName: "web-to-app"
originalDescription: "將任意網頁轉換為桌面應用程式，支援 macOS/Windows/Linux 三大平台。使用 Rust + Tauri 技術棧，產生的應用體積小（約 5MB）、效能高。支援自訂圖示、視窗大小、快捷鍵等豐富配置。"
activation: "當你需要 網頁轉桌面 App 的工作流程時使用。"
useCases:
  - "需要處理「將任意網頁轉換為桌面應用程式，支援 macOS/Windows/Linux 三大平台。使用 Rust + Tauri 技術棧，產生的應用體積小（約 5MB）、效能高。支援自訂圖示、視窗大小、快捷鍵等豐富配置」這類任務。"
  - "想直接閱讀或複製 web-to-app 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/web-to-app/web-to-app/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: web-to-app
  description: 將任意網頁轉換為桌面應用，支援 macOS/Windows/Linux 三大平台。使用 Rust + Tauri 技術棧，生成的應用體積小（約 5MB）、效能高。支援自訂圖示、視窗大小、快捷鍵等豐富配置。
  dependency:
    python:
      - requests>=2.28.0
    system:
      - npm install -g pake-cli
  ---
  
  # Web to App
  
  ## 任務目標
  - 本 Skill 用於：將任意網頁 URL 打包成原生桌面應用
  - 能力包含：
    1. 自動檢測並安裝 pake-cli 工具
    2. 支援自訂應用名稱、圖示、視窗尺寸等配置
    3. 生成 macOS/Windows/Linux 平台的應用安裝包
    4. 支援高階配置（隱藏標題欄、多例項、代理等）
  - 觸發條件：使用者提出"將網頁打包成應用"、"製作桌面應用"等需求
  
  ## 前置準備
  
  ### 環境要求
  - **Node.js**：版本 ≥ 18.0.0（推薦 22.0+）
  - **Rust**：≥ 1.85.0（首次使用會自動安裝）
  - **系統工具**：
    - macOS/Linux：需要 `curl`、`wget`、`file`、`tar`
    - Windows：自動處理依賴
  
  ### 安裝依賴
  首次使用前，需要安裝 pake-cli 工具：
  ```bash
  npm install -g pake-cli
  # 或使用 pnpm（推薦）
  pnpm install -g pake-cli
  ```
  
  ## 操作步驟
  
  ### 標準流程
  
  1. **收集需求**
     - 確認網頁 URL（必需）
     - 應用名稱（建議英文）
     - 目標平台（自動檢測當前系統）
     - 自訂需求（圖示、視窗大小等）
  
  2. **環境準備**
     - 呼叫 `scripts/install_pake.py` 檢查並安裝 pake-cli
     - 驗證 Node.js 和 Rust 環境
  
  3. **執行打包**
     - 根據使用者需求生成配置參數
     - 呼叫 `scripts/build_app.py` 執行打包
     - 監控執行進度和錯誤資訊
  
  4. **輸出驗證**
     - 確認生成的應用安裝包
     - 提供安裝和使用說明
  
  ### 可選分支
  
  - **當需要自訂圖示**：
    - 提供圖示檔案路徑（支援本地或遠端 URL）
    - 自動轉換為平台特定格式（.icns/.ico/.png）
  
  - **當需要高階配置**：
    - 參考 [references/parameter-guide.md](references/parameter-guide.md)
    - 新增對應參數（如 `--hide-title-bar`、`--multi-instance`）
  
  - **當打包失敗**：
    - 檢查網路連線（需要下載依賴）
    - 驗證 Node.js 和 Rust 版本
    - 使用 `--debug` 參數檢視詳細日誌
  
  ## 資源索引
  
  ### 必要腳本
  - **[scripts/install_pake.py](scripts/install_pake.py)**
    - 用途：檢查並安裝 pake-cli 工具
    - 參數：無
    - 回傳：安裝狀態和版本資訊
  
  - **[scripts/build_app.py](scripts/build_app.py)**
    - 用途：執行網頁打包命令
    - 參數：
      - `url`：網頁 URL（必需）
      - `name`：應用名稱
      - `icon`：圖示路徑
      - `width`：視窗寬度
      - `height`：視窗高度
      - `options`：其他可選參數（字典格式）
    - 回傳：生成的應用檔案路徑
  
  ### 領域參考
  - **[references/parameter-guide.md](references/parameter-guide.md)**
    - 何時讀取：需要配置高階選項時
    - 內容：完整的參數說明和使用範例
  
  ## 注意事項
  
  - ⏰ **首次打包較慢**：需要下載和編譯 Rust 依賴，後續打包會快很多
  - 📦 **輸出位置**：預設在當前工作目錄（`./`）生成應用安裝包
  - 🖥️ **平台適配**：
    - macOS：生成 `.dmg` 安裝包（設定 `PAKE_CREATE_APP=1` 可生成 `.app`）
    - Windows：生成 `.msi` 安裝包
    - Linux：生成 `.deb` 或 `.AppImage` 包
  - 🚀 **除錯模式**：遇到問題時新增 `--debug` 參數檢視詳細日誌
  - 🔐 **證書問題**：如果是內網或自簽名證書，使用 `--ignore-certificate-errors`
  
  ## 使用範例
  
  ### 範例 1：基礎打包
  **功能說明**：將 GitHub 網頁打包成應用
  **執行方式**：腳本呼叫
  
  ```python
  from scripts.build_app import build_app
  
  result = build_app(
      url="https://github.com",
      name="GitHub"
  )
  # 輸出：GitHub.dmg / GitHub_x64.msi / GitHub_x86_64.deb
  ```
  
  ### 範例 2：自訂配置
  **功能說明**：自訂視窗大小和圖示
  **執行方式**：腳本呼叫
  
  ```python
  result = build_app(
      url="https://chat.openai.com",
      name="ChatGPT",
      icon="https://example.com/icon.png",
      width=1400,
      height=900,
      options={
          "hide-title-bar": True,
          "always-on-top": False
      }
  )
  ```
  
  ### 範例 3：多例項應用
  **功能說明**：允許同時開啟多個應用視窗
  **執行方式**：腳本呼叫
  
  ```python
  result = build_app(
      url="https://example.com",
      name="MyApp",
      options={
          "multi-instance": True,
          "activation-shortcut": "CmdOrControl+Shift+P"
      }
  )
  ```
  
  ## 快捷鍵說明
  
  生成的應用內建以下快捷鍵：
  
  | 操作 | macOS | Windows/Linux |
  |------|-------|---------------|
  | 重新整理頁面 | ⌘ + R | Ctrl + R |
  | 隱藏視窗 | ⌘ + W | Ctrl + W |
  | 放大/縮小 | ⌘ + +/- | Ctrl + +/- |
  | 重置縮放 | ⌘ + 0 | Ctrl + 0 |
  | 複製 URL | ⌘ + L | Ctrl + L |
  | 回傳首頁 | ⌘ + Shift + H | Ctrl + Shift + H |
  | 開發者工具 | ⌘ + Option + I | Ctrl + Shift + I（僅除錯模式） |
  | 清除快取重啟 | ⌘ + Shift + Delete | Ctrl + Shift + Delete |
  
---

## 這個 Skill 在做什麼

將任意網頁轉換為桌面應用程式，支援 macOS/Windows/Linux 三大平台。使用 Rust + Tauri 技術棧，產生的應用體積小（約 5MB）、效能高。支援自訂圖示、視窗大小、快捷鍵等豐富配置。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
