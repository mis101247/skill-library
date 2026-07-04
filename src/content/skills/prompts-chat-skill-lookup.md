---
title: "prompts.chat Skill 查詢與安裝 Skill"
description: "透過 prompts.chat registry 搜尋、取得並安裝 Agent Skills，適合用來擴充 Claude 或 coding agent 的可重複能力。"
category: "registry"
tags:
  - prompts.chat
  - Agent Skills
  - MCP
  - skill lookup
featured: true
publishedAt: 2026-07-01
updatedAt: 2026-07-01
sourceRepo: "prompts.chat"
sourceRepoUrl: "https://github.com/f/prompts.chat"
sourcePath: "plugins/claude/prompts.chat/skills/skill-lookup/SKILL.md"
sourceUrl: "https://github.com/f/prompts.chat/blob/main/plugins/claude/prompts.chat/skills/skill-lookup/SKILL.md"
localPath: "software-engineering-prompt-repos/prompts.chat/plugins/claude/prompts.chat/skills/skill-lookup/SKILL.md"
license: "MIT"
originalName: "skill-lookup"
originalDescription: "Search, retrieve, and install Agent Skills from the prompts.chat registry using MCP tools. Use when the user asks to find skills, browse skill catalogs, install a skill for Claude, or extend Claude's capabilities with reusable AI agent components."
activation: "當使用者想找 Agent Skill、瀏覽 skill catalog、安裝 skill 到 Claude，或想擴充 agent 能力時啟用。"
useCases:
  - "用關鍵字搜尋可重複使用的 Agent Skills。"
  - "取得某個 skill 的完整多檔案內容。"
  - "把 skill 安裝到 `.claude/skills/{slug}/` 結構。"
workflow:
  - "使用 search_skills 搜尋符合需求的 skill。"
  - "把結果整理成標題、描述、作者、檔案清單、分類與標籤。"
  - "使用者選定 skill 後，用 get_skill 取回所有檔案。"
  - "安裝時建立 `.claude/skills/{slug}/`，並把 SKILL.md 與其他檔案儲存到正確位置。"
  - "安裝後讀回 SKILL.md，確認 frontmatter 沒壞，並說明啟用時機。"
files:
  - "SKILL.md"
cautions:
  - "安裝前要先取回完整檔案，不要只存描述。"
  - "不能把其他檔案覆蓋到 SKILL.md，也不能漏掉 reference docs 或 scripts。"
  - "安裝後要驗證 SKILL.md frontmatter。"
skillBody: |
  ---
  name: skill-lookup
  description: >
    Search, retrieve, and install Agent Skills from the prompts.chat registry using MCP tools.
    Use when the user asks to find skills, browse skill catalogs, install a skill for Claude,
    or extend Claude's capabilities with reusable AI agent components.
  license: MIT
  ---

  ## Workflow

  1. Search for skills matching the user's request using `search_skills`
  2. Present results with title, description, author, and file list
  3. If the user picks a skill, retrieve it with `get_skill` to get all files
  4. Install by saving files to `.claude/skills/{slug}/` and verify the SKILL.md exists
  5. Confirm installation and explain what the skill does and when it activates

  ## Example

  ```
  search_skills({"query": "code review", "limit": 5, "category": "coding"})
  get_skill({"id": "abc123"})
  ```

  ## Available Tools

  Use these prompts.chat MCP tools:

  - `search_skills` - Search for skills by keyword
  - `get_skill` - Get a specific skill by ID with all its files

  ## How to Search for Skills

  Call `search_skills` with:

  - `query`: The search keywords from the user's request
  - `limit`: Number of results (default 10, max 50)
  - `category`: Filter by category slug (e.g., "coding", "automation")
  - `tag`: Filter by tag slug

  Present results showing:
  - Title and description
  - Author name
  - File list (SKILL.md, reference docs, scripts)
  - Category and tags
  - Link to the skill

  ## How to Get a Skill

  Call `get_skill` with:

  - `id`: The skill ID

  Returns the skill metadata and all file contents:
  - SKILL.md (main instructions)
  - Reference documentation
  - Helper scripts
  - Configuration files

  ## How to Install a Skill

  When the user asks to install a skill:

  1. Call `get_skill` to retrieve all files
  2. Create the directory `.claude/skills/{slug}/`
  3. Save each file to the appropriate location:
     - `SKILL.md` → `.claude/skills/{slug}/SKILL.md`
     - Other files → `.claude/skills/{slug}/{filename}`
  4. Read back `SKILL.md` to verify the frontmatter is intact

  ## Guidelines

  - Always search before suggesting the user create their own skill
  - Present search results in a readable format with file counts
  - When installing, confirm the skill was saved successfully
  - Explain what the skill does and when it activates
---

## 這個 Skill 在做什麼

這個 Skill 讓 agent 能把 prompts.chat 當成 skill registry 使用：先搜尋，使用者選定後再取得所有檔案，必要時安裝到 Claude 的 skill 目錄。

## 為什麼值得收錄

它直接回答「怎麼找別人整理好的 Skill」這件事，也很符合這個網站的主題。它把搜尋、取得、安裝與驗證拆成固定流程，而不是隻提供一個網站連結。
