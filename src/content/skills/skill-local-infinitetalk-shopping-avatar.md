---
title: "InfiniteTalk 導購數位人 Skill"
description: "專為InfiniteTalk專案設計的小省導購員數位人導購提示詞產生技能，基於四大智慧體協同（提示詞產生師、品質管控師、知識庫運維師、跨環節適配師），產生適配Image-to-Video模式的結構化提示詞（角色固定特徵+動作時序+情境環境+音訊匹配+光影氛圍+技術約束），支援9:16直式螢幕、5s/幕、音訊同步（Suno+chinese-wav2vec2-base）、一致性管控（角色/視覺/情緒），直接對接模型推理流程"
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
sourcePath: "skills/infinitetalk-shopping-avatar/infinitetalk-shopping-avatar/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/infinitetalk-shopping-avatar/infinitetalk-shopping-avatar/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/infinitetalk-shopping-avatar/infinitetalk-shopping-avatar/SKILL.md"
license: "CC-BY-4.0"
originalName: "infinitetalk-shopping-avatar"
originalDescription: "專為InfiniteTalk專案設計的小省導購員數位人導購提示詞產生技能，基於四大智慧體協同（提示詞產生師、品質管控師、知識庫運維師、跨環節適配師），產生適配Image-to-Video模式的結構化提示詞（角色固定特徵+動作時序+情境環境+音訊匹配+光影氛圍+技術約束），支援9:16直式螢幕、5s/幕、音訊同步（Suno+chinese-wav2vec2-base）、一致性管控（角色/視覺/情緒），直接對接模型推理流程"
activation: "當你需要 InfiniteTalk 導購數位人 的工作流程時使用。"
useCases:
  - "需要處理「專為InfiniteTalk專案設計的小省導購員數位人導購提示詞產生技能，基於四大智慧體協同（提示詞產生師、品質管控師、知識庫運維師、跨環節適配師），產生適配Image-to-Video模式的結構化提示詞（角色固定特徵+動作時序+情境環境+音訊匹配+光影氛圍+技術約束），支援9:16直式螢幕、5s/幕、音訊同步（Suno+chinese-wav2vec2-base）、一致性管控（角色/視覺/情緒），直接對接模型推理流程」這類任務。"
  - "想直接閱讀或複製 infinitetalk-shopping-avatar 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/infinitetalk-shopping-avatar/infinitetalk-shopping-avatar/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: infinitetalk-shopping-avatar
  description: 專為InfiniteTalk專案設計的小省導購員數位人導購提示詞生成技能，基於四大智慧體協同（提示詞生成師、品質管控師、知識庫運維師、跨環節適配師），生成適配Image-to-Video模式的結構化提示詞（角色固定特徵+動作時序+場景環境+音訊匹配+光影氛圍+技術約束），支援9:16直式、5s/幕、音訊同步（Suno+chinese-wav2vec2-base）、一致性管控（角色/視覺/情緒），直接對接模型推理流程
  ---
  
  # InfiniteTalk小省導購員數位人導購提示詞生成
  
  ## 任務目標
  - 本技能用於：為InfiniteTalk專案生成小省導購員數位人導購影片的結構化提示詞，直接對接模型推理流程
  - 能力包含：
    - 生成適配InfiniteTalk Image-to-Video模式的分鏡化提示詞
    - 影格級動作時序描述（5s/幕，精確到秒級）
    - 音訊同步匹配（Suno音樂 + chinese-wav2vec2-base編碼）
    - 一致性管控（角色/視覺/情緒三大維度）
    - 跨工具整合（Suno、AI繪畫、InfiniteTalk）
  - 觸發條件：使用者需要生成小省導購員數位人導購影片，使用InfiniteTalk模型進行推理
  
  ## 前置準備
  - 依賴說明：本技能基於智慧體自然語言能力，無需Python依賴
  - 環境準備：
    - InfiniteTalk模型環境（已安裝，包含chinese-wav2vec2-base編碼器）
    - TeaCache + int8量化配置（已配置）
    - 角色參考圖（9:16比例，解析度≥1080×1920）
  
  ## 操作步驟
  
  ### 標準流程
  
  #### 1. 提示詞生成
  提示詞生成師負責生成適配InfiniteTalk的結構化提示詞：
  
  **輸入資訊**：
  - 場景型別（產品推薦/價格對比/促銷活動等）
  - 商品資訊
  - 情緒基調
  - 五幕情緒遞進
  
  **生成流程**：
  1. 讀取 [references/infinitetalk-parameters.md](references/infinitetalk-parameters.md)，確認核心參數配置
  2. 讀取 [references/prompt-structure.md](references/prompt-structure.md)，遵循提示詞結構規範
  3. 讀取 [references/scene-templates-infinitetalk.md](references/scene-templates-infinitetalk.md)，調取場景模板
  4. 生成五幕提示詞，每幕包含：
     - 角色固定特徵（嚴格遵循固定描述）
     - 動作時序（5s內影格級描述，精確到秒級）
     - 場景環境（背景、前景、道具）
     - 音訊匹配（語音型別+音樂風格+音訊對齊規則）
     - 光影/氛圍（色溫、光照型別、情緒基調）
     - 技術約束（構圖比例、景深、動作強度等）
  
  **輸出格式**：
  - 中文提示詞（可直接作為InfiniteTalk推理腳本的`prompt`參數）
  - 參數配置表（duration、aspect_ratio、motion_strength、face_consistency等）
  
  #### 2. 品質核查
  品質管控師負責核查提示詞品質：
  
  **核查維度**：
  1. **技術參數匹配度**：
     - 時長：每幕5s，總時長25s
     - 解析度/比例：1080×1920（9:16豎版）
     - 動作連貫性：5s內影格級動作描述流暢
     - 角色一致性：嚴格匹配固定特徵描述
  
  2. **角色一致性**：
     - 外貌特徵：臉型、眼睛、髮型、膚色、唇色
     - 服飾描述：上衣、鞋子、配飾
     - 氣質特徵：專業親和、手部姿態
  
  3. **音訊匹配性**：
     - 語音型別：語速、語氣與情緒匹配
     - 音樂風格：與場景情緒匹配
     - 音訊對齊：動作節奏與音樂/語音同步
  
  4. **光影可實現性**：
     - 色溫：4000K-5500K範圍
     - 光照型別：側光、順光、頂光、逆光
     - 光影效果：明暗對比、景深、虛化程度
  
  **核查結果**：
  - 透過（pass）：傳遞給知識庫運維師歸檔
  - 不透過（fail）：生成問題清單，回饋給提示詞生成師調整（最多2次）
  
  #### 3. 知識庫歸檔
  知識庫運維師負責歸檔提示詞和知識庫更新：
  
  **歸檔內容**：
  - 角色固定特徵模板
  - 五幕情緒-光影對映表
  - 音訊風格-動作匹配庫
  - 場景模板庫
  
  **歸檔格式**：
  - JSON格式（便於程式呼叫）
  - 包含完整後設資料（場景型別、情緒基調、參數配置）
  
  #### 4. 跨工具整合
  跨環節適配師負責跨工具整合和音訊/圖片適配：
  
  **音訊整合**：
  1. Suno音樂生成：
     - 提取情緒關鍵詞，生成音樂風格描述
     - 匯出為16kHz單聲道wav格式
     - 確保時長5s/幕，與提示詞嚴格對齊
  
  2. chinese-wav2vec2-base編碼：
     - 使用chinese-wav2vec2-base對音訊進行特徵編碼
     - 生成音訊特徵檔案
  
  3. 導購員語音生成：
     - 根據每幕情緒調整語速/語氣
     - 與音樂時長嚴格對齊（5s/幕）
     - 確保唇形同步
  
  **圖片整合**：
  1. AI繪畫生成：
     - 使用AI繪畫生成「動作前畫面」
     - 裁剪為9:16比例，解析度≥1080×1920
     - 保留角色完整特徵（無遮擋）
  
  2. 參考圖適配：
     - 作為InfiniteTalk的`init_image`參數輸入
     - 確保角色固定特徵與提示詞一致
  
  **InfiniteTalk推理對接**：
  1. 載入模型（基礎配置）
  2. 單幕生成（以第一幕為例）
  3. 儲存影片（5s/幕）
  4. 五幕拼接（總時長25s）
  
  ### 可選分支
  
  - 當場景型別為產品推薦：執行 [references/scene-templates-infinitetalk.md](references/scene-templates-infinitetalk.md) 中的產品推薦場景模板
  - 當場景型別為價格對比：執行價格對比場景模板
  - 當場景型別為促銷活動：執行促銷活動場景模板
  - 當需要跨工具整合：執行 [references/cross-tool-integration.md](references/cross-tool-integration.md) 中的整合方案
  
  ## 資源索引
  
  - 核心參數配置：見 [references/infinitetalk-parameters.md](references/infinitetalk-parameters.md)（何時讀取：生成提示詞前確認參數配置）
  - 提示詞結構規範：見 [references/prompt-structure.md](references/prompt-structure.md)（何時讀取：生成提示詞時遵循結構規範）
  - 場景模板庫：見 [references/scene-templates-infinitetalk.md](references/scene-templates-infinitetalk.md)（何時讀取：根據場景型別調取模板）
  - 一致性管控規則：見 [references/consistency-rules-infinitetalk.md](references/consistency-rules-infinitetalk.md)（何時讀取：品質核查時遵循規則）
  - 跨工具整合方案：見 [references/cross-tool-integration.md](references/cross-tool-integration.md)（何時讀取：跨工具整合時參考方案）
  - 完整範例輸出：見 [assets/examples/sample-prompts-infinitetalk.md](assets/examples/sample-prompts-infinitetalk.md)（何時讀取：參考完整範例）
  
  ## 注意事項
  
  - 嚴格遵循角色固定特徵描述，所有五幕提示詞使用相同描述
  - 動作時序必須精確到秒級，確保5s內動作連貫
  - 音訊匹配必須與動作節奏同步，確保唇形同步
  - 光影描述必須可實現，色溫在4000K-5500K範圍內
  - 技術約束必須匹配InfiniteTalk能力，確保生成效果
  - 充分利用智慧體的自然語言能力和分析推理能力，避免為簡單任務編寫腳本
  
  ## 使用範例
  
  ### 範例1：產品推薦場景提示詞生成
  
  **功能說明**：生成產品推薦場景的五幕提示詞
  
  **執行方式**：提示詞生成師（智慧體自然語言生成）
  
  **關鍵參數**：
  - 場景型別：產品推薦
  - 情緒基調：熱情專業
  - 五幕情緒遞進：熱情神秘→專業詳細→專注生動→自信有力→鼓勵堅決
  - 技術參數：9:16直式、5s/幕、1080×1920解析度
  
  **輸出**：五幕中文提示詞、參數配置表
  
  ### 範例2：品質核查
  
  **功能說明**：核查提示詞品質
  
  **執行方式**：品質管控師（智慧體分析推理）
  
  **核查維度**：技術參數匹配度、角色一致性、音訊匹配性、光影可實現性
  
  **輸出**：品檢報告（pass/fail）、問題清單（如不透過）
  
  ### 範例3：跨工具整合
  
  **功能說明**：Suno音樂→InfiniteTalk音訊對接
  
  **執行方式**：跨環節適配師（智慧體理解+自然語言指導）
  
  **關鍵步驟**：
  1. Suno生成16kHz單聲道wav音訊
  2. chinese-wav2vec2-base編碼
  3. 導購員語音生成（語速/語氣匹配情緒）
  4. InfiniteTalk推理對接
  
  **輸出**：音訊編碼檔案、影片生成結果
  
  ## 四大智慧體角色職責
  
  ### 提示詞生成師
  - **核心職責**：按提示詞結構輸出InfiniteTalk專用提示詞
  - **輸入**：場景型別、商品資訊、情緒基調
  - **輸出**：分幕提示詞文字、參數配置表
  - **關鍵能力**：理解InfiniteTalk技術參數、創作影格級動作時序描述
  
  ### 品質管控師
  - **核心職責**：核查提示詞與InfiniteTalk能力匹配度
  - **核查維度**：動作連貫性、角色一致性、光影可實現性
  - **輸出**：品檢報告、提示詞修正建議
  - **關鍵能力**：分析推理、技術約束匹配度評估
  
  ### 知識庫運維師
  - **核心職責**：歸檔提示詞和知識庫更新
  - **歸檔內容**：角色固定特徵模板、情緒-光影對映表、音訊風格-動作匹配庫
  - **輸出**：知識庫檢索介面（JSON格式）
  - **關鍵能力**：結構化歸檔、後設資料管理
  
  ### 跨環節適配師
  - **核心職責**：跨工具整合（Suno、AI繪畫、InfiniteTalk）
  - **整合步驟**：音訊適配、圖片適配、InfiniteTalk推理對接
  - **輸出**：音訊編碼檔案、影片生成結果
  - **關鍵能力**：跨工具理解、格式適配、流程整合
  
---

## 這個 Skill 在做什麼

專為InfiniteTalk專案設計的小省導購員數位人導購提示詞產生技能，基於四大智慧體協同（提示詞產生師、品質管控師、知識庫運維師、跨環節適配師），產生適配Image-to-Video模式的結構化提示詞（角色固定特徵+動作時序+情境環境+音訊匹配+光影氛圍+技術約束），支援9:16直式螢幕、5s/幕、音訊同步（Suno+chinese-wav2vec2-base）、一致性管控（角色/視覺/情緒），直接對接模型推理流程

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
