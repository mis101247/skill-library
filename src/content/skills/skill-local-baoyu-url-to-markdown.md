---
title: "Baoyu Url To Markdown Skill"
description: "擷取任意網頁並轉成乾淨的 Markdown，可處理一般頁面與需要等待互動的頁面。"
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
sourcePath: "skills/content-creation-publisher/baoyu-url-to-markdown/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/content-creation-publisher/baoyu-url-to-markdown/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/content-creation-publisher/baoyu-url-to-markdown/SKILL.md"
license: "CC-BY-4.0"
originalName: "baoyu-url-to-markdown"
originalDescription: "擷取任意網頁並轉成乾淨的 Markdown，可處理一般頁面與需要等待互動的頁面。"
activation: "當你需要 Baoyu Url To Markdown 的工作流程時使用。"
useCases:
  - "需要處理「擷取任意網頁並轉成乾淨的 Markdown，可處理一般頁面與需要等待互動的頁面」這類任務。"
  - "想直接閱讀或複製 baoyu-url-to-markdown 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/content-creation-publisher/baoyu-url-to-markdown/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: baoyu-url-to-markdown
  description: Fetch any URL and convert to markdown using Chrome CDP. Supports two modes - auto-capture on page load, or wait for user signal (for pages requiring login). Use when user wants to save a webpage as markdown.
  ---
  
  # URL to Markdown
  
  Fetches any URL via Chrome CDP and converts HTML to clean markdown.
  
  ## Script Directory
  
  **Important**: All scripts are located in the `scripts/` subdirectory of this skill.
  
  **Agent Execution Instructions**:
  1. Determine this SKILL.md file's directory path as `SKILL_DIR`
  2. Script path = `${SKILL_DIR}/scripts/<script-name>.ts`
  3. Replace all `${SKILL_DIR}` in this document with the actual path
  
  **Script Reference**:
  | Script | Purpose |
  |--------|---------|
  | `scripts/main.ts` | CLI entry point for URL fetching |
  
  ## Preferences (EXTEND.md)
  
  Use Bash to check EXTEND.md existence (priority order):
  
  ```bash
  # Check project-level first
  test -f .baoyu-skills/baoyu-url-to-markdown/EXTEND.md && echo "project"
  
  # Then user-level (cross-platform: $HOME works on macOS/Linux/WSL)
  test -f "$HOME/.baoyu-skills/baoyu-url-to-markdown/EXTEND.md" && echo "user"
  ```
  
  ┌────────────────────────────────────────────────────────┬───────────────────┐
  │                          Path                          │     Location      │
  ├────────────────────────────────────────────────────────┼───────────────────┤
  │ .baoyu-skills/baoyu-url-to-markdown/EXTEND.md          │ Project directory │
  ├────────────────────────────────────────────────────────┼───────────────────┤
  │ $HOME/.baoyu-skills/baoyu-url-to-markdown/EXTEND.md    │ User home         │
  └────────────────────────────────────────────────────────┴───────────────────┘
  
  ┌───────────┬───────────────────────────────────────────────────────────────────────────┐
  │  Result   │                                  Action                                   │
  ├───────────┼───────────────────────────────────────────────────────────────────────────┤
  │ Found     │ Read, parse, apply settings                                               │
  ├───────────┼───────────────────────────────────────────────────────────────────────────┤
  │ Not found │ Use defaults                                                              │
  └───────────┴───────────────────────────────────────────────────────────────────────────┘
  
  **EXTEND.md Supports**: Default output directory | Default capture mode | Timeout settings
  
  ## Features
  
  - Chrome CDP for full JavaScript rendering
  - Two capture modes: auto or wait-for-user
  - Clean markdown output with metadata
  - Handles login-required pages via wait mode
  
  ## Usage
  
  ```bash
  # Auto mode (default) - capture when page loads
  npx -y bun ${SKILL_DIR}/scripts/main.ts <url>
  
  # Wait mode - wait for user signal before capture
  npx -y bun ${SKILL_DIR}/scripts/main.ts <url> --wait
  
  # Save to specific file
  npx -y bun ${SKILL_DIR}/scripts/main.ts <url> -o output.md
  ```
  
  ## Options
  
  | Option | Description |
  |--------|-------------|
  | `<url>` | URL to fetch |
  | `-o <path>` | Output file path (default: auto-generated) |
  | `--wait` | Wait for user signal before capturing |
  | `--timeout <ms>` | Page load timeout (default: 30000) |
  
  ## Capture Modes
  
  | Mode | Behavior | Use When |
  |------|----------|----------|
  | Auto (default) | Capture on network idle | Public pages, static content |
  | Wait (`--wait`) | User signals when ready | Login-required, lazy loading, paywalls |
  
  **Wait mode workflow**:
  1. Run with `--wait` → script outputs "Press Enter when ready"
  2. Ask user to confirm page is ready
  3. Send newline to stdin to trigger capture
  
  ## Output Format
  
  YAML front matter with `url`, `title`, `description`, `author`, `published`, `captured_at` fields, followed by converted markdown content.
  
  ## Output Directory
  
  ```
  url-to-markdown/<domain>/<slug>.md
  ```
  
  - `<slug>`: From page title or URL path (kebab-case, 2-6 words)
  - Conflict resolution: Append timestamp `<slug>-YYYYMMDD-HHMMSS.md`
  
  ## Environment Variables
  
  | Variable | Description |
  |----------|-------------|
  | `URL_CHROME_PATH` | Custom Chrome executable path |
  | `URL_DATA_DIR` | Custom data directory |
  | `URL_CHROME_PROFILE_DIR` | Custom Chrome profile directory |
  
  **Troubleshooting**: Chrome not found → set `URL_CHROME_PATH`. Timeout → increase `--timeout`. Complex pages → try `--wait` mode.
  
  ## Extension Support
  
  Custom configurations via EXTEND.md. See **Preferences** section for paths and supported options.
  
---

## 這個 Skill 在做什麼

擷取任意網頁並轉成乾淨的 Markdown，可處理一般頁面與需要等待互動的頁面。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
