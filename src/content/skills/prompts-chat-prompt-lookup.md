---
title: "prompts.chat 提示詞查詢 Skill"
description: "透過 prompts.chat MCP 搜尋、取得與最佳化提示詞，適合在使用者想找 prompt 範本或改善 prompt 時啟用。"
category: "registry"
tags:
  - prompts.chat
  - prompt registry
  - MCP
  - prompt lookup
featured: true
publishedAt: 2026-07-01
updatedAt: 2026-07-01
sourceRepo: "prompts.chat"
sourceRepoUrl: "https://github.com/f/prompts.chat"
sourcePath: "plugins/claude/prompts.chat/skills/prompt-lookup/SKILL.md"
sourceUrl: "https://github.com/f/prompts.chat/blob/main/plugins/claude/prompts.chat/skills/prompt-lookup/SKILL.md"
localPath: "software-engineering-prompt-repos/prompts.chat/plugins/claude/prompts.chat/skills/prompt-lookup/SKILL.md"
license: "MIT"
originalName: "prompt-lookup"
originalDescription: "Activates when the user asks about AI prompts, needs prompt templates, wants to search for prompts, or mentions prompts.chat. Use for discovering, retrieving, and improving prompts."
activation: "當使用者要找提示詞範本、搜尋 prompts.chat、取得特定 prompt，或希望最佳化手上的 prompt 時啟用。"
useCases:
  - "搜尋 code review、寫作、資料分析等不同用途的 prompt。"
  - "取得 prompts.chat 上某個 prompt 的完整內容與 metadata。"
  - "協助使用者把現有 prompt 改得更清楚、更穩定。"
workflow:
  - "先判斷使用者是要搜尋、取得還是最佳化 prompt。"
  - "搜尋時呼叫 search_prompts，依 query、type、category 或 tag 篩選。"
  - "呈現結果時附上標題、描述、作者、分類、標籤與連結。"
  - "取得 prompt 時呼叫 get_prompt，並處理 prompt 變數。"
  - "最佳化 prompt 時呼叫 improve_prompt，並說明改善了哪些地方。"
files:
  - "SKILL.md"
cautions:
  - "先搜尋現有 prompt，再建議使用者自己從零寫。"
  - "如果 prompt 有變數，要提醒使用者填入必要欄位。"
  - "最佳化後要說明改了哪些結構，不要只丟出新版 prompt。"
skillBody: |
  ---
  name: prompt-lookup
  description: Activates when the user asks about AI prompts, needs prompt templates, wants to search for prompts, or mentions prompts.chat. Use for discovering, retrieving, and improving prompts.
  ---

  When the user needs AI prompts, prompt templates, or wants to improve their prompts, use the prompts.chat MCP server to help them.

  ## When to Use This Skill

  Activate this skill when the user:

  - Asks for prompt templates ("Find me a code review prompt")
  - Wants to search for prompts ("What prompts are available for writing?")
  - Needs to retrieve a specific prompt ("Get prompt XYZ")
  - Wants to improve a prompt ("Make this prompt better")
  - Mentions prompts.chat or prompt libraries

  ## Available Tools

  Use these prompts.chat MCP tools:

  - `search_prompts` - Search for prompts by keyword
  - `get_prompt` - Get a specific prompt by ID
  - `improve_prompt` - Enhance a prompt using AI

  ## How to Search for Prompts

  Call `search_prompts` with:

  - `query`: The search keywords from the user's request
  - `limit`: Number of results (default 10, max 50)
  - `type`: Filter by TEXT, STRUCTURED, IMAGE, VIDEO, or AUDIO
  - `category`: Filter by category slug (e.g., "coding", "writing")
  - `tag`: Filter by tag slug

  Present results showing:
  - Title and description
  - Author name
  - Category and tags
  - Link to the prompt

  ## How to Get a Prompt

  Call `get_prompt` with:

  - `id`: The prompt ID

  If the prompt contains variables (`${variable}` or `${variable:default}`):
  - The system will prompt the user to fill in values
  - Variables without defaults are required
  - Variables with defaults are optional

  ## How to Improve a Prompt

  Call `improve_prompt` with:

  - `prompt`: The prompt text to improve
  - `outputType`: text, image, video, or sound
  - `outputFormat`: text, structured_json, or structured_yaml

  Return the enhanced prompt to the user.

  ## Guidelines

  - Always search before suggesting the user write their own prompt
  - Present search results in a readable format with links
  - When improving prompts, explain what was enhanced
  - Suggest relevant categories and tags when saving prompts
---

## 這個 Skill 在做什麼

這個 Skill 讓 agent 遇到「我要找 prompt」或「幫我改 prompt」時，不是憑空回答，而是先去 prompts.chat registry 查詢、取得或最佳化既有 prompt。

## 為什麼值得收錄

它是很典型的 registry lookup Skill：明確定義何時啟用、能用哪些 MCP tools、怎麼呈現結果，以及拿到 prompt 變數時該怎麼處理。
