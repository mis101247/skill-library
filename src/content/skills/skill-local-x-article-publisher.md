---
title: "X 長文發布 Skill"
description: "X 長文發布 的佔位 Skill，來源目前只保留檔案位置與補齊說明，實際使用前需要回到來源補上完整內容。"
category: "productivity"
tags:
  - "skill-store"
  - "local-skill"
  - "productivity"
featured: false
entryType: "local"
publishedAt: 2026-07-01
updatedAt: 2026-07-01
sourceRepo: "skill"
sourceRepoUrl: "https://github.com/anbeime/skill"
sourcePath: "skills/qiaomu-x-article-publisher/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/qiaomu-x-article-publisher/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/qiaomu-x-article-publisher/SKILL.md"
license: "CC-BY-4.0"
originalName: "x-article-publisher"
originalDescription: "X 長文發布 的佔位 Skill，來源目前只保留檔案位置與補齊說明，實際使用前需要回到來源補上完整內容。"
activation: "當你需要 X 長文發布 的工作流程時使用。"
useCases:
  - "需要處理「X 長文發布 的佔位 Skill，來源目前只保留檔案位置與補齊說明，實際使用前需要回到來源補上完整內容」這類任務。"
  - "想直接閱讀或複製 x-article-publisher 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/qiaomu-x-article-publisher/SKILL.md"
  - "skills/qiaomu-x-article-publisher/qiaomu-x-article-publisher-github/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
  - "偵測到同名 SKILL.md，已合併為單一頁面；其他路徑：skills/qiaomu-x-article-publisher/qiaomu-x-article-publisher-github/SKILL.md。"
  - "原始 SKILL.md 看起來是佔位檔，實際使用前需要回到來源補齊內容。"
skillBody: |-
  ---
  name: x-article-publisher
  description: Publish Markdown articles to X (Twitter) Articles editor with proper formatting. Use when user wants to publish a Markdown file/URL to X Articles, or mentions "publish to X", "post article to Twitter", "X article", or wants help with X Premium article publishing. Handles cover image upload and converts Markdown to rich text automatically.
  ---
  
  # X Article Publisher
  
  Publish Markdown content to X (Twitter) Articles editor, preserving formatting with rich text conversion.
  
  ## Prerequisites
  
  - X Premium Plus subscription
  - Python 3.9+ with dependencies: `pip install Pillow pyobjc-framework-Cocoa patchright`
  
  ## 🎉 首次使用：一次認證，告別重複登入
  
  **X Article Publisher 現在支援持久化認證，無需每次手動登入！**
  
  ### 🔧 初始化認證（僅需一次）
  
  首次使用前，執行認證設定：
  
  ```bash
  cd ~/.claude/skills/x-article-publisher/scripts
  python auth_manager.py setup
  ```
  
  **流程：**
  1. ✅ 瀏覽器視窗自動開啟 X 登入頁面
  2. 🔐 手動登入你的 X 帳號（需 Premium+ 訂閱）
  3. ✅ 完成 2FA 驗證（如已啟用）
  4. 🏠 登入成功後自動跳轉到 Home 時間線
  5. 💾 認證狀態自動儲存（有效期 7 天）
  
  ### 📋 認證管理命令
  
  ```bash
  # 檢查認證狀態
  python auth_manager.py status
  
  # 驗證認證是否有效
  python auth_manager.py validate
  
  # 清除認證資料（需重新登入）
  python auth_manager.py clear
  
  # 重新認證（清除 + 設定）
  python auth_manager.py reauth
  ```
  
  ### 🚀 自動化工作流
  
  認證設定完成後，skill 執行時會自動：
  1. ✅ 檢查認證狀態
  2. 🔓 如已認證，直接使用儲存的瀏覽器狀態（無需登入）
  3. ⚠️ 如未認證，提示執行 `auth_manager.py setup`
  
  **注意**：認證資料儲存在 `~/.claude/skills/x-article-publisher/data/browser_state/`，已透過 .gitignore 排除，不會提交到 Git。
  
  ---
  
  ## Scripts
  
  Located in `~/.claude/skills/x-article-publisher/scripts/`:
  
  ### publish_article.py (主腳本 - 一鍵發布)
  **推薦使用** - 自動完成所有發布步驟：
  ```bash
  # 基本用法（預設顯示瀏覽器）
  python publish_article.py --file article.md
  
  # 隱藏瀏覽器（後台執行）
  python publish_article.py --file article.md --headless
  
  # 自訂標題
  python publish_article.py --file article.md --title "自訂標題"
  ```
  
  ### parse_markdown.py
  Parse Markdown and extract structured data:
  ```bash
  python parse_markdown.py <markdown_file> [--output json|html] [--html-only]
  ```
  Returns JSON with: title, cover_image, content_images (with block_index for positioning), html, total_blocks
  
  ### copy_to_clipboard.py
  Copy image or HTML to system clipboard:
  ```bash
  # Copy image (with optional compression)
  python copy_to_clipboard.py image /path/to/image.jpg [--quality 80]
  
  # Copy HTML for rich text paste
  python copy_to_clipboard.py html --file /path/to/content.html
  ```
  
  ## Workflow (簡化版)
  
  **前提**：已完成認證設定（`python auth_manager.py setup`）
  
  ### 🚀 一鍵發布（推薦）
  
  直接執行 publish_article.py，自動完成所有步驟：
  
  ```bash
  cd ~/.claude/skills/x-article-publisher/scripts
  python publish_article.py --file /path/to/article.md
  ```
  
  腳本會自動：
  1. ✅ 檢查認證狀態
  2. 📄 解析 Markdown 檔案
  3. 🌐 啟動已認證的瀏覽器
  4. 📍 導航到 X Articles 編輯器
  5. 🔘 點擊 create 按鈕
  6. 🖼️ 上傳封面圖（如有）
  7. 📝 填寫標題
  8. 📋 貼上 HTML 內容
  9. ✅ 儲存草稿（**不會自動發布**）
  
  ### 手動工作流（高階使用者）
  
  如需更精細控制，可分步執行：
  1. Parse Markdown: `python parse_markdown.py article.md`
  2. 手動操作瀏覽器發布
  
  ---
  
  ## 🧠 智慧增強功能
  
  ### 智慧標題生成
  
  當文章沒有 H1 標題時，`parse_markdown.py` 會回傳 `needs_title_generation: true`。
  
  **Claude 應該自動：**
  1. 閱讀文章內容，理解核心觀點
  2. 生成一個吸引人點擊的標題（15-25字為佳）
  3. 使用 `--title "生成的標題"` 參數發布
  
  **好標題的特點：**
  - 包含數字或具體細節（"3個方法"、"90%的人不知道"）
  - 激發好奇心（"為什麼..."、"如何..."、"...的真相"）
  - 與讀者切身相關
  - 避免標題黨，但要有吸引力
  
  **範例：**
  ```bash
  # 解析文章
  python parse_markdown.py article.md
  
  # 如果 needs_title_generation: true，Claude 生成標題後：
  python publish_article.py --file article.md --title "AI時代，普通人的3個生存法則"
  ```
  
  ### 智慧封面圖生成
  
  當文章沒有封面圖時，`parse_markdown.py` 會回傳 `needs_cover_generation: true`。
  
  **Claude 應該自動：**
  1. 閱讀文章，提煉核心概念（1-3個關鍵詞）
  2. 呼叫 `gemini-image-generator` 或 `jimeng-image-generator` skill 生成封面圖
  3. 封面圖風格建議：
     - 簡潔大氣，避免複雜細節
     - 可以是抽象概念的視覺化
     - 或是帶有核心關鍵詞的文字海報
  4. 將生成的圖片路徑插入到文章開頭作為封面
  
  **封面圖生成提示詞模板：**
  ```
  為一篇關於「{文章主題}」的文章生成封面圖。
  風格：簡潔、現代、科技感
  元素：{1-3個核心視覺元素}
  文字：可選，如果加文字只放{1-3個關鍵詞}
  尺寸：16:9 橫版
  ```
  
  **工作流範例：**
  ```bash
  # 1. 解析文章
  python parse_markdown.py article.md
  # 輸出: needs_cover_generation: true
  
  # 2. Claude 呼叫生圖 skill 生成封面（假設儲存到 /tmp/cover.png）
  
  # 3. 將封面圖插入文章開頭，或手動上傳
  ```
  
  **注意**：封面圖上傳目前需要在瀏覽器中手動操作，腳本會開啟編輯器後等待使用者操作。
  
  ---
  
  ## 技術細節
  
  ### parse_markdown.py 輸出格式
  
  ```json
  {
    "title": "Article Title",
    "title_source": "h1",           // "h1", "h2", "first_line", or "none"
    "needs_title_generation": false, // true if no H1 title
    "cover_image": "/path/to/first-image.jpg",
    "needs_cover_generation": false, // true if no cover image
    "content_images": [
      {"path": "/path/to/img2.jpg", "block_index": 5}
    ],
    "html": "<p>Content...</p><h2>Section</h2>...",
    "total_blocks": 45
  }
  ```
  
  **欄位說明：**
  - `title_source`: 標題來源
    - `h1`: 來自 H1 標題（最理想）
    - `h2`: 來自第一個 H2 標題
    - `first_line`: 來自第一行文字
    - `none`: 無法提取標題
  - `needs_title_generation`: 是否需要 Claude 生成更好的標題
  - `needs_cover_generation`: 是否需要 Claude 生成封面圖
  
  ## Critical Rules
  
  1. **NEVER auto-publish** - Only save as draft
  2. **NO automatic cover images** - User adds cover manually, never insert first image as cover
  3. **Clean placeholders** - Remove all remaining `@@@IMG_X@@@` markers after image insertion
  4. **H1 title handling** - H1 is used as title only, not included in body
  
  ## Supported Formatting
  
  - H2 headers (## )
  - Blockquotes (> )
  - Code blocks (converted to blockquotes)
  - Bold text (**)
  - Hyperlinks ([text](url))
  - Ordered/Unordered lists
  - Paragraphs
  
  ## Example
  
  User: "Publish /path/to/article.md to X"
  
  ```bash
  cd ~/.claude/skills/x-article-publisher/scripts
  python publish_article.py --file /path/to/article.md
  ```
  
  Output:
  ```
  📄 解析檔案：/path/to/article.md
    📝 標題：文章標題
    🖼️  封面圖：/path/to/cover.jpg
    📷 內容圖：2 張
  
  🌐 啟動瀏覽器...
    📍 導航到 X Articles...
    🔘 點擊 create 按鈕...
    📝 填寫標題...
    📋 貼上內容...
  
  ✅ 草稿已建立！
    💡 請在瀏覽器中檢查並手動發布
    🖥️  瀏覽器保持開啟，請檢查草稿並手動發布
    ⏎  完成後按回車鍵關閉瀏覽器...
  ```
  
  
  
  **技術經驗參考**: 瀏覽器自動化除錯技巧詳見 [skill-development-guide](../skill-development-guide/technical-lessons.md)
  
---

## 這個 Skill 在做什麼

X 長文發布 的佔位 Skill，來源目前只保留檔案位置與補齊說明，實際使用前需要回到來源補上完整內容。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
