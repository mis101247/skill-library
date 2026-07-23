---
title: "Matt Pocock 工程工作流 Skills"
description: "22 個可組合的 Agent Skills，涵蓋需求訪談、spec、tickets、TDD、除錯、架構、審查、研究、交接與長期教學。"
category: "engineering"
tags:
  - "awesome-agent-skills"
  - "mattpocock"
  - "engineering"
  - "workflow"
featured: true
entryType: "catalog"
publishedAt: 2026-07-01
updatedAt: 2026-07-23
sourceRepo: "awesome-agent-skills"
sourceRepoUrl: "https://github.com/VoltAgent/awesome-agent-skills"
sourcePath: "README.md"
sourceUrl: "https://github.com/mattpocock/skills"
localPath: "software-engineering-prompt-repos/awesome-agent-skills/README.md"
license: "MIT"
originalName: "mattpocock/skills"
originalDescription: "Skills for real engineers: small, adaptable, composable workflows for engineering and productivity"
activation: "當你想把需求釐清、spec、tickets、TDD、除錯、程式碼審查或大型計畫拆成可重複執行的 Agent 工作流時使用。"
useCases:
  - "把一句模糊需求整理成 spec，再拆成可以獨立完成的垂直 tickets。"
  - "用可重現的回饋迴圈處理困難 bug，或用固定 seam 進行 TDD。"
  - "建立跨 session 的 wayfinder 決策地圖、handoff 文件或 teaching workspace。"
workflow:
  - "使用 Skills CLI 或 Claude Code plugin 安裝需要的 skills。"
  - "每個 repo 先執行 setup-matt-pocock-skills，設定 tracker、標籤與 domain docs。"
  - "依任務形狀選擇單一 skill 或主流程，不要為小任務強套 wayfinder。"
  - "用真實任務檢查呼叫時機、完成條件、測試 seam 與最後驗證。"
files:
  - "awesome-agent-skills README catalog entry"
cautions:
  - "這筆原本是 awesome-agent-skills 的舊索引，17 個 skills 的數字已過時；本文依 2026 年 7 月 23 日上游 main 分支更新為 22 個。"
  - "部分工作流會建立 issue、修改文件、提交程式碼或完成 merge，執行前要確認外部副作用符合你的授權。"
skillBody: ""
---

## 這個 Skill 在做什麼

`mattpocock/skills` 把需求訪談、spec、tickets、TDD、除錯、架構設計、程式碼審查、研究、交接與教學拆成 22 個小型工作流。它們可以單獨使用，也能組成從想法到提交的完整路線。

## 為什麼值得收錄

這個專案的設計重點是小、可修改、可組合，不會用一套大型框架接管全部開發流程。使用者呼叫的 skills 負責編排流程，模型呼叫的 skills 提供 TDD、除錯、domain modeling 與 codebase design 等可重用紀律。

完整分析與實作範例請從[22 個 Agent Skills 總覽](/guides/matt-pocock-skills-overview/)開始。
