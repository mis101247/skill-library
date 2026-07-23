# Skill Library

`skill-library` 是一個 Astro 建置的正體中文 Skill 知識庫。它從 `software-engineering-prompt-repos` 底下的 GitHub repo 抽取 Agent Skills，保留完整 `SKILL.md` 內容或 catalog 來源連結，並用台灣慣用語整理標題、用途、啟用時機與使用注意事項。

這個專案目前有三個主要入口：

- `/`：首頁，放入新手指南、精選趣味與實用 Skill、Prompt / Skill 差異摘要，以及已整理 Skill。
- `/guides/`：Skill 入門指南，包含 Prompt vs Skill 與跨平台使用方式。
- `/skills/`：Skill 列表與詳情頁。

## 內容來源

目前有四種收錄型態：

- `full`：workspace 裡有完整 `SKILL.md`，頁面會保留正體化後的完整內容並提供複製。
- `catalog`：`awesome-agent-skills` 上游索引清單，workspace 沒有完整 `SKILL.md`，頁面保留原始連結與正體中文用途整理。
- `storeCatalog`：`skill/data/skills.json` 技能商店索引；只補上尚未在上游索引中出現的專案，避免重複。
- `local`：`skill` repo 內已落地的本地 `SKILL.md`，頁面保留正體化後的完整內容並提供複製。

完整 `SKILL.md` 來源：

- `prompts.chat/.windsurf/skills/book-translation/SKILL.md`
- `prompts.chat/.windsurf/skills/widget-generator/SKILL.md`
- `prompts.chat/plugins/claude/prompts.chat/skills/prompt-lookup/SKILL.md`
- `prompts.chat/plugins/claude/prompts.chat/skills/skill-lookup/SKILL.md`
- `open-code-review/skills/open-code-review/SKILL.md`

`open-code-review/plugins/open-code-review/skills/open-code-review/SKILL.md` 與 `open-code-review/skills/open-code-review/SKILL.md` 內容重複，因此只收錄一篇。

Catalog 來源：

- `awesome-agent-skills/README.md`：解析出 1174 筆 Skill 索引項，來源 repo 為 `VoltAgent/awesome-agent-skills`。

技能商店與本地落地來源：

- `skill/data/skills.json`：官方技能商店索引，共 182 筆；其中 155 筆已存在於 `awesome-agent-skills` catalog，因此只補上缺漏的 27 筆。
- `skill/skills/**/SKILL.md`、`skill/SKILL.md`、`skill/projects/**/SKILL.md`：整理出 70 個 `SKILL.md`，依 skill 名稱去重後收錄 66 篇本地落地 Skill。
- `awesome-agent-skills` 是上游索引；`skill` 是針對它爬取回來後整理成技能商店與本地落地檔案的版本。

## 內容原則

- `SKILL.md` 內容會正體化成台灣慣用語，方便直接複製使用。
- 頁面標題、描述、用途、啟用時機、工作流程與注意事項使用正體中文。
- 每篇 Skill 都保留來源 repo、GitHub URL、本地路徑、license 與原始名稱。
- 不自行發明 Skill；完整 Skill 與 catalog Skill 都會明確標示來源型態。

## 技術架構

- Astro 6
- Markdown / MDX
- Astro Content Collections
- 靜態路由
- 少量 client-side JavaScript，只用於複製 Skill 內容

不需要資料庫、登入或後台。

## Content Collection

### `skills`

主要欄位：

- `title`
- `description`
- `category`
- `tags`
- `featured`
- `entryType`
- `publishedAt`
- `updatedAt`
- `sourceRepo`
- `sourceRepoUrl`
- `sourcePath`
- `sourceUrl`
- `localPath`
- `license`
- `originalName`
- `originalDescription`
- `activation`
- `useCases`
- `workflow`
- `files`
- `cautions`
- `skillBody`

### `guides`

原創入門文章，說明 Skill 觀念與使用方式。

主要欄位：

- `title`
- `description`
- `category`
- `tags`
- `difficulty`
- `timeEstimate`
- `featured`
- `publishedAt`
- `updatedAt`
- `guideType`
- `coverImage`
- `coverImageAlt`
- `learningGoals`
- `prerequisites`
- `relatedSkills`

## 路由

- `/`：首頁
- `/guides/`：指南列表
- `/guides/[slug]/`：指南詳情
- `/skills/`：Skill 列表
- `/skills/[slug]/`：Skill 詳情
- `/tags/[tag]/`：標籤彙整，包含 Skill 與指南
- `/rss.xml`：RSS

## 新增 Skill

1. 在 `software-engineering-prompt-repos` 中確認來源是完整 `SKILL.md` 或可信 catalog entry。
2. 在 `src/content/skills` 新增 Markdown 檔。
3. 將原始 `SKILL.md` 放入 `skillBody`，頁面說明用正體中文改寫。
4. 補上 `sourceRepo`、`sourcePath`、`sourceUrl`、`license` 等來源欄位。
5. 執行 `npm run build` 驗證 Content Collections schema。

## 開發指令

```sh
npm run dev
npm run build
npm run preview
```

## 驗收標準

- `npm run build` 成功。
- 主導覽顯示「首頁」、「指南」與「Skill」。
- 首頁可看到兩篇入門指南、精選趣味與實用 Skill、Prompt / Skill 比較摘要與已整理 Skill。
- `/guides/` 可看到兩篇入門指南。
- `/guides/prompt-vs-skill/` 可看到 Prompt vs Skill 完整說明與相關 Skill。
- `/guides/use-skills-in-chatgpt-gemini-claude/` 可看到 ChatGPT / Gemini / Claude 使用教學與相關 Skill。
- `/skills/` 可分頁看到所有收錄 Skill。
- 完整 Skill 詳情頁有正體中文用途說明與完整原始 `SKILL.md`。
- Catalog Skill 詳情頁有正體中文用途說明、來源連結與 catalog 標示。
- 本地 Skill 詳情頁有正體中文用途說明、完整原始 `SKILL.md` 與複製按鈕。
