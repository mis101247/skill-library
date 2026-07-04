---
title: "前端設計 Skill"
description: "建立有設計感、可上架的前端介面，協助 Agent 避免常見 AI 產物感。"
category: "creative"
tags:
  - "skill-store"
  - "local-skill"
  - "creative"
featured: true
entryType: "local"
publishedAt: 2026-07-01
updatedAt: 2026-07-01
sourceRepo: "skill"
sourceRepoUrl: "https://github.com/anbeime/skill"
sourcePath: "skills/frontend-design/frontend-design/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/frontend-design/frontend-design/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/frontend-design/frontend-design/SKILL.md"
license: "Complete terms in LICENSE.txt"
originalName: "frontend-design"
originalDescription: "建立有設計感、可上架的前端介面，協助 Agent 避免常見 AI 產物感。"
activation: "當你需要 前端設計 的工作流程時使用。"
useCases:
  - "需要處理「建立有設計感、可上架的前端介面，協助 Agent 避免常見 AI 產物感」這類任務。"
  - "想直接閱讀或複製 frontend-design 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/frontend-design/frontend-design/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: frontend-design
  description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, or applications. Generates creative, polished code that avoids generic AI aesthetics.
  license: Complete terms in LICENSE.txt
  ---
  
  This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.
  
  The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.
  
  ## Design Thinking
  
  Before coding, understand the context and commit to a BOLD aesthetic direction:
  - **Purpose**: What problem does this interface solve? Who uses it?
  - **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
  - **Constraints**: Technical requirements (framework, performance, accessibility).
  - **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?
  
  **CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.
  
  Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
  - Production-grade and functional
  - Visually striking and memorable
  - Cohesive with a clear aesthetic point-of-view
  - Meticulously refined in every detail
  
  ## Frontend Aesthetics Guidelines
  
  Focus on:
  - **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
  - **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
  - **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
  - **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
  - **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.
  
  NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.
  
  Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.
  
  **IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.
  
  Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.
  
---

## 這個 Skill 在做什麼

建立有設計感、可上架的前端介面，協助 Agent 避免常見 AI 產物感。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
