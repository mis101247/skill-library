---
title: "Baoyu Format Markdown Skill"
description: "把文字或 Markdown 整理成有 frontmatter、標題、摘要、清楚段落與程式碼區塊的文章。"
category: "content"
tags:
  - "skill-store"
  - "local-skill"
  - "content"
featured: false
entryType: "local"
publishedAt: 2026-07-01
updatedAt: 2026-07-01
sourceRepo: "skill"
sourceRepoUrl: "https://github.com/anbeime/skill"
sourcePath: "skills/content-creation-publisher/baoyu-format-markdown/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/content-creation-publisher/baoyu-format-markdown/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/content-creation-publisher/baoyu-format-markdown/SKILL.md"
license: "CC-BY-4.0"
originalName: "baoyu-format-markdown"
originalDescription: "把文字或 Markdown 整理成有 frontmatter、標題、摘要、清楚段落與程式碼區塊的文章。"
activation: "當你需要 Baoyu Format Markdown 的工作流程時使用。"
useCases:
  - "需要處理「把文字或 Markdown 整理成有 frontmatter、標題、摘要、清楚段落與程式碼區塊的文章」這類任務。"
  - "想直接閱讀或複製 baoyu-format-markdown 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/content-creation-publisher/baoyu-format-markdown/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: baoyu-format-markdown
  description: Formats plain text or markdown files with frontmatter, titles, summaries, headings, bold, lists, and code blocks. Use when user asks to "format markdown", "beautify article", "add formatting", or improve article layout. Outputs to {filename}-formatted.md.
  ---
  
  # Markdown Formatter
  
  Transforms plain text or markdown files into well-structured markdown with proper frontmatter, formatting, and typography.
  
  ## Script Directory
  
  Scripts in `scripts/` subdirectory. Replace `${SKILL_DIR}` with this SKILL.md's directory path.
  
  | Script | Purpose |
  |--------|---------|
  | `scripts/main.ts` | Main entry point with CLI options (uses remark-cjk-friendly for CJK emphasis) |
  | `scripts/quotes.ts` | Replace ASCII quotes with fullwidth quotes |
  | `scripts/autocorrect.ts` | Add CJK/English spacing via autocorrect |
  
  ## Preferences (EXTEND.md)
  
  Use Bash to check EXTEND.md existence (priority order):
  
  ```bash
  # Check project-level first
  test -f .baoyu-skills/baoyu-format-markdown/EXTEND.md && echo "project"
  
  # Then user-level (cross-platform: $HOME works on macOS/Linux/WSL)
  test -f "$HOME/.baoyu-skills/baoyu-format-markdown/EXTEND.md" && echo "user"
  ```
  
  ┌──────────────────────────────────────────────────────────┬───────────────────┐
  │                           Path                           │     Location      │
  ├──────────────────────────────────────────────────────────┼───────────────────┤
  │ .baoyu-skills/baoyu-format-markdown/EXTEND.md            │ Project directory │
  ├──────────────────────────────────────────────────────────┼───────────────────┤
  │ $HOME/.baoyu-skills/baoyu-format-markdown/EXTEND.md      │ User home         │
  └──────────────────────────────────────────────────────────┴───────────────────┘
  
  ┌───────────┬───────────────────────────────────────────────────────────────────────────┐
  │  Result   │                                  Action                                   │
  ├───────────┼───────────────────────────────────────────────────────────────────────────┤
  │ Found     │ Read, parse, apply settings                                               │
  ├───────────┼───────────────────────────────────────────────────────────────────────────┤
  │ Not found │ Use defaults                                                              │
  └───────────┴───────────────────────────────────────────────────────────────────────────┘
  
  **EXTEND.md Supports**: Default formatting options | Summary length preferences
  
  ## Usage
  
  Claude performs content analysis and formatting (Steps 1-6), then runs the script for typography fixes (Step 7).
  
  ## Workflow
  
  ### Step 1: Read Source File
  
  Read the user-specified markdown or plain text file.
  
  ### Step 1.5: Detect Content Type & Confirm
  
  **Content Type Detection:**
  
  | Indicator | Classification |
  |-----------|----------------|
  | Has `---` YAML frontmatter | Markdown |
  | Has `#`, `##`, `###` headings | Markdown |
  | Has `**bold**`, `*italic*` | Markdown |
  | Has `- ` or `1. ` lists | Markdown |
  | Has ``` code blocks | Markdown |
  | Has `> ` blockquotes | Markdown |
  | None of above | Plain text |
  
  **Decision Flow:**
  
  ┌─────────────────┬────────────────────────────────────────────────┐
  │  Content Type   │                     Action                     │
  ├─────────────────┼────────────────────────────────────────────────┤
  │ Plain text      │ Proceed to Step 2 (format to markdown)         │
  ├─────────────────┼────────────────────────────────────────────────┤
  │ Markdown        │ Use AskUserQuestion to confirm optimization    │
  └─────────────────┴────────────────────────────────────────────────┘
  
  **If Markdown detected, ask user:**
  
  ```
  Detected existing markdown formatting. What would you like to do?
  
  1. Optimize formatting (Recommended)
     - Add/improve frontmatter, headings, bold, lists
     - Run typography script (spacing, emphasis fixes)
     - Output: {filename}-formatted.md
  
  2. Keep original formatting
     - Preserve existing markdown structure
     - Run typography script (spacing, emphasis fixes)
     - Output: {filename}-formatted.md
  
  3. Typography fixes only
     - Run typography script on original file in-place
     - No copy created, modifies original file directly
  ```
  
  **Based on user choice:**
  - **Optimize**: Continue to Step 2-8 (full workflow)
  - **Keep original**: Skip Steps 2-5, copy file → Step 6-8 (run script on copy)
  - **Typography only**: Skip Steps 2-6, run Step 7 on original file directly
  
  ### Step 2: Analyze Content Structure
  
  Identify:
  - Existing title (H1 `#`)
  - Paragraph separations
  - Keywords suitable for **bold**
  - Parallel content convertible to lists
  - Code snippets
  - Quotations
  
  ### Step 3: Check/Create Frontmatter
  
  Check for YAML frontmatter (`---` block). Create if missing.
  
  **Meta field handling:**
  
  | Field | Processing |
  |-------|------------|
  | `title` | See Step 4 |
  | `slug` | Infer from file path (e.g., `posts/2026/01/10/vibe-coding/` → `vibe-coding`) or generate from title |
  | `summary` | Generate engaging summary (100-150 characters) |
  | `featureImage` | Check if `imgs/cover.png` exists in same directory; if so, use relative path |
  
  ### Step 4: Title Handling
  
  **Logic:**
  1. If frontmatter already has `title` → use it, no H1 in body
  2. If first line is H1 → extract to frontmatter `title`, remove H1 from body
  3. If neither exists → generate candidate titles
  
  **Title generation flow:**
  
  1. Generate 3 candidate titles based on content
  2. Use `AskUserQuestion` tool:
  
  ```
  Select a title:
  
  1. [Title A] (Recommended)
  2. [Title B]
  3. [Title C]
  ```
  
  3. If no selection within a few seconds, use recommended (option 1)
  
  **Title principles:**
  - Concise, max 20 characters
  - Captures core message
  - Engaging, sparks reading interest
  - Accurate, avoids clickbait
  
  **Important:** Once title is in frontmatter, body should NOT have H1 (avoid duplication)
  
  ### Step 5: Format Processing
  
  **Formatting rules:**
  
  | Element | Format |
  |---------|--------|
  | Titles | Use `#`, `##`, `###` hierarchy |
  | Key points | Use `**bold**` |
  | Parallel items | Convert to `-` unordered or `1.` ordered lists |
  | Code/commands | Use `` `inline` `` or ` ```block``` ` |
  | Quotes/sayings | Use `>` blockquote |
  | Separators | Use `---` where appropriate |
  
  **Formatting principles:**
  - Preserve original content and viewpoints
  - Add formatting only, do not modify text
  - Formatting serves readability
  - Avoid over-formatting
  
  ### Step 6: Save Formatted File
  
  Save as `{original-filename}-formatted.md`
  
  Examples:
  - `final.md` → `final-formatted.md`
  - `draft-v1.md` → `draft-v1-formatted.md`
  
  **If user chose "Keep original formatting" (from Step 1.5):**
  - Copy original file to `{filename}-formatted.md` without modifications
  - Proceed to Step 7 for typography fixes only
  
  **Backup existing file:**
  
  If `{filename}-formatted.md` already exists, backup before overwriting:
  
  ```bash
  # Check if formatted file exists
  if [ -f "{filename}-formatted.md" ]; then
    # Backup with timestamp
    mv "{filename}-formatted.md" "{filename}-formatted.backup-$(date +%Y%m%d-%H%M%S).md"
  fi
  ```
  
  Example:
  - `final-formatted.md` exists → backup to `final-formatted.backup-20260128-143052.md`
  
  ### Step 7: Execute Text Formatting Script
  
  After saving, **must** run the formatting script:
  
  ```bash
  npx -y bun ${SKILL_DIR}/scripts/main.ts {output-file-path} [options]
  ```
  
  **Script Options:**
  
  | Option | Short | Description | Default |
  |--------|-------|-------------|---------|
  | `--quotes` | `-q` | Replace ASCII quotes with fullwidth quotes `"..."` | false |
  | `--no-quotes` | | Do not replace quotes | |
  | `--spacing` | `-s` | Add CJK/English spacing via autocorrect | true |
  | `--no-spacing` | | Do not add CJK/English spacing | |
  | `--emphasis` | `-e` | Fix CJK emphasis punctuation issues | true |
  | `--no-emphasis` | | Do not fix CJK emphasis issues | |
  | `--help` | `-h` | Show help message | |
  
  **Examples:**
  
  ```bash
  # Default: spacing + emphasis enabled, quotes disabled
  npx -y bun ${SKILL_DIR}/scripts/main.ts article.md
  
  # Enable all features including quote replacement
  npx -y bun ${SKILL_DIR}/scripts/main.ts article.md --quotes
  
  # Only fix emphasis issues, skip spacing
  npx -y bun ${SKILL_DIR}/scripts/main.ts article.md --no-spacing
  
  # Disable all processing except frontmatter formatting
  npx -y bun ${SKILL_DIR}/scripts/main.ts article.md --no-spacing --no-emphasis
  ```
  
  **Script performs (based on options):**
  1. Fix CJK emphasis/bold punctuation issues (default: enabled)
  2. Add CJK/English mixed text spacing via autocorrect (default: enabled)
  3. Replace ASCII quotes `"..."` with fullwidth quotes `"..."` (default: disabled)
  4. Format frontmatter YAML (always enabled)
  
  ### Step 8: Display Results
  
  ```
  **Formatting complete**
  
  File: posts/2026/01/09/example/final-formatted.md
  
  Changes:
  - Added title: [title content]
  - Added X bold markers
  - Added X lists
  - Added X code blocks
  ```
  
  ## Formatting Example
  
  **Before:**
  ```
  This is plain text. First point is efficiency improvement. Second point is cost reduction. Third point is experience optimization. Use npm install to install dependencies.
  ```
  
  **After:**
  ```markdown
  ---
  title: Three Core Advantages
  slug: three-core-advantages
  summary: Discover the three key benefits that drive success in modern projects.
  ---
  
  This is plain text.
  
  **Main advantages:**
  - Efficiency improvement
  - Cost reduction
  - Experience optimization
  
  Use `npm install` to install dependencies.
  ```
  
  ## Notes
  
  - Preserve original writing style and tone
  - Specify correct language for code blocks (e.g., `python`, `javascript`)
  - Maintain CJK/English spacing standards
  - Do not add content not present in original
  
  ## Extension Support
  
  Custom configurations via EXTEND.md. See **Preferences** section for paths and supported options.
  
---

## 這個 Skill 在做什麼

把文字或 Markdown 整理成有 frontmatter、標題、摘要、清楚段落與程式碼區塊的文章。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
