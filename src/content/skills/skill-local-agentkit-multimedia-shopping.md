---
title: "多媒體導購影片 Skill"
description: "基於ByteDance agentkit-samples多媒體用例的小省導購員數位人導購影片產生技能，整合多模態內容產生能力（影像、影片、音訊），支援AI繪畫、語音合成、影片產生，與小省導購員人設融合，9:16直式螢幕適配，直接對接導購影片產生流程"
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
sourcePath: "skills/agentkit-multimedia-shopping/agentkit-multimedia-shopping/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/agentkit-multimedia-shopping/agentkit-multimedia-shopping/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/agentkit-multimedia-shopping/agentkit-multimedia-shopping/SKILL.md"
license: "CC-BY-4.0"
originalName: "agentkit-multimedia-shopping"
originalDescription: "基於ByteDance agentkit-samples多媒體用例的小省導購員數位人導購影片產生技能，整合多模態內容產生能力（影像、影片、音訊），支援AI繪畫、語音合成、影片產生，與小省導購員人設融合，9:16直式螢幕適配，直接對接導購影片產生流程"
activation: "當你需要 多媒體導購影片 的工作流程時使用。"
useCases:
  - "需要處理「基於ByteDance agentkit-samples多媒體用例的小省導購員數位人導購影片產生技能，整合多模態內容產生能力（影像、影片、音訊），支援AI繪畫、語音合成、影片產生，與小省導購員人設融合，9:16直式螢幕適配，直接對接導購影片產生流程」這類任務。"
  - "想直接閱讀或複製 agentkit-multimedia-shopping 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/agentkit-multimedia-shopping/agentkit-multimedia-shopping/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: agentkit-multimedia-shopping
  description: 基於ByteDance agentkit-samples多媒體用例的小省導購員數位人導購影片生成技能，整合多模態內容生成能力（影像、影片、音訊），支援AI繪畫、語音合成、影片生成，與小省導購員人設融合，9:16直式適配，直接對接導購影片生成流程
  dependency:
    python:
      - Pillow>=10.0.0
      - requests>=2.28.0
      - numpy>=1.24.0
    system:
      - echo "Skill已載入"
  ---
  
  # AgentKit多媒體小省導購員數位人導購
  
  ## 任務目標
  - 本技能用於：基於ByteDance agentkit-samples多媒體用例，生成小省導購員數位人導購影片的多模態內容
  - 能力包含：
    - AI繪畫生成（小省導購員角色形象、場景背景）
    - 語音合成（導購員語音、背景音樂）
    - 影片生成（多模態組合）
    - 工作流編排（影像→音訊→影片→成片）
  - 觸發條件：使用者需要生成小省導購員數位人導購影片，使用agentkit-samples的多媒體能力
  
  ## 前置準備
  
  ### 依賴說明
  本技能依賴以下Python包：
  ```
  Pillow>=10.0.0
  requests>=2.28.0
  numpy>=1.24.0
  ```
  
  ### 環境準備
  1. 安裝agentkit-samples（如需要）
  2. 準備API憑證（如涉及第三方服務呼叫）
  3. 準備小省導購員角色固定特徵描述
  
  ### 前置知識
  - 瞭解ByteDance agentkit-samples多媒體用例的基本功能
  - 瞭解AI繪畫、語音合成、影片生成的基本原理
  - 瞭解9:16直式影片規格
  
  ## 操作步驟
  
  ### 標準流程
  
  #### 1. 角色形象生成
  使用AI繪畫生成小省導購員角色形象：
  
  **輸入資訊**：
  - 角色固定特徵（臉型、髮型、服飾、氣質）
  - 場景型別（商務場景）
  - 情緒基調（熱情、專業、親切）
  
  **生成流程**：
  1. 讀取 [references/character-profile.md](references/character-profile.md)，獲取小省導購員角色固定特徵
  2. 呼叫 [scripts/generate_character.py](scripts/generate_character.py) 生成角色形象
  3. 裁剪為9:16比例，解析度≥1080×1920
  4. 儲存參考圖（供InfiniteTalk使用）
  
  **輸出**：角色參考圖（9:16直式）
  
  #### 2. 場景背景生成
  使用AI繪畫生成場景背景：
  
  **輸入資訊**：
  - 場景型別（商務會議室、書房、洽談室、大廳、辦公室）
  - 情緒基調（冷調、暖調、中性）
  - 光影描述（側光、順光、頂光、逆光）
  
  **生成流程**：
  1. 讀取場景模板，選擇對應場景型別
  2. 呼叫 [scripts/generate_scene.py](scripts/generate_scene.py) 生成場景背景
  3. 裁剪為9:16比例，解析度≥1080×1920
  4. 儲存場景參考圖
  
  **輸出**：場景參考圖（9:16直式）
  
  #### 3. 語音合成
  使用TTS生成導購員語音：
  
  **輸入資訊**：
  - 話術內容（導購文案）
  - 語音型別（語速、語氣）
  - 情緒基調（熱情、專業、親切）
  
  **生成流程**：
  1. 準備話術內容（符合小省導購員人設）
  2. 呼叫 [scripts/generate_voice.py](scripts/generate_voice.py) 合成語音
  3. 匯出為16kHz單聲道wav格式
  4. 儲存語音檔案（供InfiniteTalk使用）
  
  **輸出**：語音檔案（16kHz單聲道wav）
  
  #### 4. 背景音樂生成
  使用音樂生成工具生成背景音樂：
  
  **輸入資訊**：
  - 情緒基調（熱情、專業、緊迫、親切）
  - 音樂風格（管絃樂、鋼琴、絃樂）
  - 時長（5秒/幕）
  
  **生成流程**：
  1. 根據情緒基調選擇音樂風格
  2. 呼叫 [scripts/generate_music.py](scripts/generate_music.py) 生成音樂
  3. 匯出為16kHz單聲道wav格式
  4. 儲存音樂檔案（供InfiniteTalk使用）
  
  **輸出**：音樂檔案（16kHz單聲道wav）
  
  #### 5. 影片生成
  使用多模態組合生成影片：
  
  **輸入資訊**：
  - 角色參考圖（9:16直式）
  - 場景參考圖（9:16直式）
  - 語音檔案（16kHz單聲道wav）
  - 音樂檔案（16kHz單聲道wav）
  - 提示詞（InfiniteTalk專用）
  
  **生成流程**：
  1. 讀取InfiniteTalk專用提示詞（使用infinitetalk-shopping-avatar Skill生成）
  2. 呼叫 [scripts/generate_video.py](scripts/generate_video.py) 生成影片
  3. 生成5幕影片（每幕5秒）
  4. 拼接完整影片（總時長25秒）
  
  **輸出**：完整影片（25秒，9:16直式）
  
  ### 可選分支
  
  - 當僅需生成角色形象：執行步驟1
  - 當僅需生成場景背景：執行步驟2
  - 當僅需生成語音：執行步驟3
  - 當僅需生成背景音樂：執行步驟4
  - 當僅需生成影片：執行步驟1-5
  
  ## 資源索引
  
  - 角色固定特徵：見 [references/character-profile.md](references/character-profile.md)（何時讀取：生成角色形象時）
  - 場景模板：見 [references/scene-templates.md](references/scene-templates.md)（何時讀取：生成場景背景時）
  - 工具使用說明：見 [references/tool-usage-guide.md](references/tool-usage-guide.md)（何時讀取：使用工具時）
  - 範例輸出：見 [assets/examples/sample-output.md](assets/examples/sample-output.md)（何時讀取：參考範例輸出）
  
  ## 注意事項
  
  - **角色一致性**：所有生成的角色形象必須嚴格遵循角色固定特徵
  - **解析度匹配**：所有影像必須為9:16直式，解析度≥1080×1920
  - **音訊格式**：所有音訊必須為16kHz單聲道wav格式
  - **情緒適配**：語音和音樂必須與場景情緒匹配
  - **工作流順序**：嚴格按照影像→音訊→影片的順序生成
  - **與InfiniteTalk協同**：使用infinitetalk-shopping-avatar Skill生成提示詞
  
  ## 使用範例
  
  ### 範例1：生成完整導購影片
  
  **功能說明**：生成小省導購員數位人導購影片的完整流程
  
  **執行方式**：
  1. 生成角色形象（呼叫generate_character.py）
  2. 生成場景背景（呼叫generate_scene.py）
  3. 合成導購員語音（呼叫generate_voice.py）
  4. 生成背景音樂（呼叫generate_music.py）
  5. 生成影片（呼叫generate_video.py，結合InfiniteTalk提示詞）
  
  **關鍵參數**：
  - 角色固定特徵：嚴格遵循character-profile.md
  - 場景型別：商務場景
  - 情緒基調：熱情專業
  - 解析度：1080×1920（9:16直式）
  - 音訊格式：16kHz單聲道wav
  
  **輸出**：完整導購影片（25秒，9:16直式）
  
  ### 範例2：僅生成角色參考圖
  
  **功能說明**：僅生成小省導購員角色參考圖
  
  **執行方式**：呼叫generate_character.py
  
  **關鍵參數**：
  - 角色固定特徵：嚴格遵循character-profile.md
  - 情緒基調：熱情專業
  - 解析度：1080×1920（9:16直式）
  
  **輸出**：角色參考圖（9:16直式）
  
  ## 工作流總結
  
  ```
  角色固定特徵描述
      ↓
  AI繪畫生成（角色形象+場景背景）
      ↓
  語音合成（導購員語音+背景音樂）
      ↓
  InfiniteTalk提示詞生成（使用infinitetalk-shopping-avatar Skill）
      ↓
  多模態影片生成（影像+音訊+提示詞）
      ↓
  完整導購影片（25秒，9:16直式）
  ```
  
  ## 與InfiniteTalk的協同
  
  本技能與`infinitetalk-shopping-avatar` Skill協同工作：
  
  1. **本技能**：生成多模態內容（影像、音訊）
  2. **infinitetalk-shopping-avatar Skill**：生成InfiniteTalk專用提示詞
  3. **InfiniteTalk**：使用多模態內容和提示詞生成影片
  
  協同流程：
  ```
  本技能生成角色參考圖 → infinitetalk-shopping-avatar生成提示詞 → InfiniteTalk生成影片
  本技能生成語音檔案 → chinese-wav2vec2-base編碼 → InfiniteTalk使用
  本技能生成音樂檔案 → chinese-wav2vec2-base編碼 → InfiniteTalk使用
  ```
  
---

## 這個 Skill 在做什麼

基於ByteDance agentkit-samples多媒體用例的小省導購員數位人導購影片產生技能，整合多模態內容產生能力（影像、影片、音訊），支援AI繪畫、語音合成、影片產生，與小省導購員人設融合，9:16直式螢幕適配，直接對接導購影片產生流程

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
