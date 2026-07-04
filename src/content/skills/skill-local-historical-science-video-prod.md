---
title: "歷史科普短片製作 Skill"
description: "自動化產生歷史科學類3分鐘科普短影音的全流程素材包，包含口播文案、分鏡腳本、Veo2提示詞、人物形象規範等，適配即夢平台影片產生。"
category: "media"
tags:
  - "skill-store"
  - "local-skill"
  - "media"
featured: false
entryType: "local"
publishedAt: 2026-07-01
updatedAt: 2026-07-01
sourceRepo: "skill"
sourceRepoUrl: "https://github.com/anbeime/skill"
sourcePath: "skills/historical-science-video-prod/historical-science-video-prod/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/historical-science-video-prod/historical-science-video-prod/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/historical-science-video-prod/historical-science-video-prod/SKILL.md"
license: "CC-BY-4.0"
originalName: "historical-science-video-prod"
originalDescription: "自動化產生歷史科學類3分鐘科普短影音的全流程素材包，包含口播文案、分鏡腳本、Veo2提示詞、人物形象規範等，適配即夢平台影片產生。"
activation: "當你需要 歷史科普短片製作 的工作流程時使用。"
useCases:
  - "需要處理「自動化產生歷史科學類3分鐘科普短影音的全流程素材包，包含口播文案、分鏡腳本、Veo2提示詞、人物形象規範等，適配即夢平台影片產生」這類任務。"
  - "想直接閱讀或複製 historical-science-video-prod 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/historical-science-video-prod/historical-science-video-prod/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: historical-science-video-prod
  description: 自動化生成歷史科學類3分鐘科普短影音的全流程素材包，包含口播文案、分鏡腳本、Veo2提示詞、人物形象規範等，適配即夢平台影片生成。
  dependency:
    python:
      - langchain-core>=0.1.0
      - langchain-openai>=0.0.5
  ---
  
  # 歷史科學類科普短影音自動化生成 Skill
  
  ## 任務目標
  - 本 Skill 用於：自動化生成歷史科學類3分鐘科普短影音的全流程素材
  - 能力包含：口播文案創作、分鏡腳本規劃、Veo2提示詞生成、人物形象設計
  - 觸發條件：使用者需要製作歷史科學類科普影片，希望快速獲得完整的素材包
  
  ## 前置準備
  - 依賴說明：無需額外安裝，依賴包已在 dependency 欄位中宣告
  - 輸入要求：使用者提供科普主題、年代背景、核心科學結論
  
  ## 操作步驟
  - 標準流程：
    1. **準備輸入資訊**
       - 確定科普主題（如"蝴蝶效應的起源"、"青黴素的發現"）
       - 明確年代背景（如"1961年"、"1928年"）
       - 提煉核心科學結論（如"初始條件的敏感性"）
    
    2. **執行生成腳本**
       - 呼叫 `scripts/generate_video_materials.py` 處理...
       - 傳入參數：--theme、--era、--core_conclusion、--output_dir
    
    3. **檢視輸出素材**
       - `output/script.txt` - 3分鐘口播文案（約900-1100字）
       - `output/storyboard.md` - 分鏡腳本表（30-35個分鏡）
       - `output/veo2_prompts.txt` - Veo2提示詞清單
       - `output/character_design.md` - 人物形象規範
  
  - 可選分支：
    - 當 需要調整風格：在 references/style-guide.md 中修改復古風格參數
    - 當 需要最佳化文案結構：在 references/script-structure.md 中調整時間分配
  
  ## 資源索引
  - 必要腳本：見 [scripts/generate_video_materials.py](scripts/generate_video_materials.py)（用途與參數：生成全流程素材包，接收主題、年代、核心結論參數）
  - 領域參考：見 [references/multi-agent-architecture.md](references/multi-agent-architecture.md)（何時讀取：瞭解多智慧體協作體系架構）
  - 領域參考：見 [references/style-guide.md](references/style-guide.md)（何時讀取：調整復古風格參數時）
  - 領域參考：見 [references/veo2-prompt-template.md](references/veo2-prompt-template.md)（何時讀取：瞭解Veo2提示詞標準格式）
  - 領域參考：見 [references/script-structure.md](references/script-structure.md)（何時讀取：瞭解文案結構和時間分配）
  
  ## 注意事項
  - 腳本會自動呼叫大模型生成內容，生成時間約1-2分鐘
  - 輸出檔案將儲存到指定的 output_dir 目錄
  - 確保提供的核心科學結論準確無誤，腳本會基於此生成文案
  - 生成的分鏡腳本嚴格遵循3分鐘時長，每鏡4-6秒
  
  ## 使用範例
  - 功能說明：生成"蝴蝶效應的起源"主題的影片素材包
  - 執行方式：腳本自動呼叫大模型生成
  - 關鍵參數或指導要點：主題、年代、核心結論
  - 簡單範例程式碼或命令：
  ```bash
  python scripts/generate_video_materials.py \
    --theme "蝴蝶效應的起源" \
    --era "1961年" \
    --core_conclusion "初始條件的微小變化會導致巨大差異，無法長期預測天氣" \
    --output_dir "./output"
  ```
  
---

## 這個 Skill 在做什麼

自動化產生歷史科學類3分鐘科普短影音的全流程素材包，包含口播文案、分鏡腳本、Veo2提示詞、人物形象規範等，適配即夢平台影片產生。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
