---
title: "多智慧體會議 Skill"
description: "模擬多個AI智慧體協作開會並進行決策討論的情境。適用於需要從多個專業角度分析問題、進行辯論和達成共識的情境，如專案決策、技術方案評審、商業策略制定等。"
category: "agent"
tags:
  - "skill-store"
  - "local-skill"
  - "agent"
featured: false
entryType: "local"
publishedAt: 2026-07-01
updatedAt: 2026-07-01
sourceRepo: "skill"
sourceRepoUrl: "https://github.com/anbeime/skill"
sourcePath: "skills/multi-agent-meeting/multi-agent-meeting/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/multi-agent-meeting/multi-agent-meeting/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/multi-agent-meeting/multi-agent-meeting/SKILL.md"
license: "CC-BY-4.0"
originalName: "multi-agent-meeting"
originalDescription: "模擬多個AI智慧體協作開會並進行決策討論的情境。適用於需要從多個專業角度分析問題、進行辯論和達成共識的情境，如專案決策、技術方案評審、商業策略制定等。"
activation: "當你需要 多智慧體會議 的工作流程時使用。"
useCases:
  - "需要處理「模擬多個AI智慧體協作開會並進行決策討論的情境。適用於需要從多個專業角度分析問題、進行辯論和達成共識的情境，如專案決策、技術方案評審、商業策略制定等」這類任務。"
  - "想直接閱讀或複製 multi-agent-meeting 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/multi-agent-meeting/multi-agent-meeting/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: multi-agent-meeting
  description: 模擬多個AI智慧體協作開會並進行決策討論的場景。適用於需要從多個專業角度分析問題、進行辯論和達成共識的場景，如專案決策、技術方案評審、商業策略制定等。
  ---
  
  # 多智慧體會議決策
  
  ## 任務目標
  - 本 Skill 用於: 模擬多個不同專業背景和性格特徵的AI智慧體進行會議討論，最終達成決策共識
  - 能力包含:
    - 自訂會議主題和目標
    - 配置多個智慧體角色（角色名、專業領域、性格特點）
    - 模擬真實的會議討論流程（發言、辯論、補充、總結）
    - 實時展示會議發言過程
    - 生成包含決策結論、關鍵論據、風險提示和後續行動的完整會議記錄
  - 觸發條件: 使用者需要從多個角度分析問題、需要不同領域的專業知識碰撞、需要模擬團隊決策討論時
  
  ## 操作步驟
  
  ### 1. 確定會議主題和目標
  從使用者輸入中提取以下資訊：
  - **會議主題**: 要討論的核心問題（如"是否採用微服務架構"、"新產品定價策略"）
  - **會議目標**: 期望達成的決策型別（如可行性評估、方案選擇、風險識別）
  - **關鍵約束**: 需要考慮的限制條件（如預算、時間、技術棧等）
  
  ### 2. 設計智慧體角色
  根據會議主題，設計3-5個智慧體角色，每個角色應包含：
  - **角色名稱**: 如"技術架構師"、"產品經理"、"財務顧問"
  - **專業領域**: 明確其專業背景和關注點
  - **性格特點**: 如理性嚴謹、激進創新、保守穩健
  - **發言風格**: 簡潔直接或詳實論證
  
  參考 [references/agent-roles.md](references/agent-roles.md) 中的角色模板，根據會議主題選擇或建立合適的角色組合。
  
  ### 3. 執行會議流程
  按照以下階段模擬會議討論：
  
  **階段一：開場發言**
  - 主持人（智慧體）介紹會議主題和目標
  - 每個智慧體從自身專業角度進行開場陳述
  
  **階段二：自由討論**
  - 智慧體根據他人發言進行回應、質疑、補充
  - 鼓勵不同觀點的碰撞和辯論
  - 引導深入探討關鍵問題
  
  **階段三：深入辯論**
  - 針對爭議焦點展開針對性辯論
  - 引用專業論據和資料支撐觀點
  - 識別並討論潛在風險
  
  **階段四：共識收斂**
  - 總結各方觀點的共同點和分歧點
  - 探索折中方案和替代方案
  - 引導向決策方向收斂
  
  **階段五：決策生成**
  - 綜合各方意見形成決策結論
  - 明確決策的主要依據
  - 識別決策的風險和注意事項
  
  ### 4. 輸出會議記錄
  按照 [references/meeting-record-format.md](references/meeting-record-format.md) 中定義的格式輸出會議記錄，包含：
  - 會議基本資訊
  - 發言過程記錄（實時展示）
  - 決策結論和關鍵論據
  - 風險提示和後續行動建議
  
  ## 資源索引
  - 角色模板: 見 [references/agent-roles.md](references/agent-roles.md)(提供常見角色型別和特徵描述)
  - 記錄格式: 見 [references/meeting-record-format.md](references/meeting-record-format.md)(定義會議記錄的標準輸出格式)
  - 會議模板: 見 [assets/meeting-templates/](assets/meeting-templates/)(提供不同型別會議的預設角色配置)
  
  ## 使用範例
  
  ### 範例1: 技術架構決策會議
  - **功能說明**: 討論是否採用微服務架構
  - **執行方式**: 智慧體主導，無需腳本
  - **角色配置**: 技術架構師、DevOps工程師、前端工程師、CTO
  - **輸出內容**: 詳細的技術論辯、成本分析、風險評估、最終建議
  
  ### 範例2: 產品定價策略會議
  - **功能說明**: 制定新產品的定價策略
  - **執行方式**: 智慧體主導，無需腳本
  - **角色配置**: 產品經理、市場分析師、銷售總監、財務顧問
  - **輸出內容**: 市場競爭分析、定價方案對比、預期收益評估
  
  ### 範例3: 專案風險評估會議
  - **功能說明**: 識別和評估專案風險
  - **執行方式**: 智慧體主導，無需腳本
  - **角色配置**: 專案經理、技術專家、法務顧問、運營專家
  - **輸出內容**: 風險識別清單、影響程度評估、應對措施建議
  
  ## 注意事項
  - 確保每個智慧體的發言符合其角色設定和專業背景
  - 保持討論的真實性和邏輯性，避免空洞的觀點
  - 重點關注不同觀點的碰撞和辯論過程，這是會議的核心價值
  - 決策應基於充分的論據和考慮，體現多角度的綜合分析
  - 會議記錄應清晰易讀，重點突出決策過程和結論
  - 充分利用智慧體的語言理解和生成能力，不要為簡單任務引入腳本
  
---

## 這個 Skill 在做什麼

模擬多個AI智慧體協作開會並進行決策討論的情境。適用於需要從多個專業角度分析問題、進行辯論和達成共識的情境，如專案決策、技術方案評審、商業策略制定等。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
