---
title: "Qwen3 語音轉文字 Skill"
description: "智慧語音轉文字助理，基於 Qwen3-ASR 模型，支援即時語音辨識和智慧文字改寫。可以將錄音轉換為文字，並一鍵改寫成郵件、筆記、社群媒體文案，支援複製、分享和錄音拼接。適用於會議紀要、語音備忘、內容創作等多種情境。"
category: "voice"
tags:
  - "skill-store"
  - "local-skill"
  - "voice"
featured: false
entryType: "local"
publishedAt: 2026-07-01
updatedAt: 2026-07-01
sourceRepo: "skill"
sourceRepoUrl: "https://github.com/anbeime/skill"
sourcePath: "skills/qwen3-asr-assistant/qwen3-asr-assistant/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/qwen3-asr-assistant/qwen3-asr-assistant/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/qwen3-asr-assistant/qwen3-asr-assistant/SKILL.md"
license: "CC-BY-4.0"
originalName: "qwen3-asr-assistant"
originalDescription: "智慧語音轉文字助理，基於 Qwen3-ASR 模型，支援即時語音辨識和智慧文字改寫。可以將錄音轉換為文字，並一鍵改寫成郵件、筆記、社群媒體文案，支援複製、分享和錄音拼接。適用於會議紀要、語音備忘、內容創作等多種情境。"
activation: "當你需要 Qwen3 語音轉文字 的工作流程時使用。"
useCases:
  - "需要處理「智慧語音轉文字助理，基於 Qwen3-ASR 模型，支援即時語音辨識和智慧文字改寫。可以將錄音轉換為文字，並一鍵改寫成郵件、筆記、社群媒體文案，支援複製、分享和錄音拼接。適用於會議紀要、語音備忘、內容創作等多種情境」這類任務。"
  - "想直接閱讀或複製 qwen3-asr-assistant 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/qwen3-asr-assistant/qwen3-asr-assistant/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: qwen3-asr-assistant
  description: 智慧語音轉文字助手，基於 Qwen3-ASR 模型，支援實時語音識別和智慧文字改寫。可以將錄音轉換為文字，並一鍵改寫成郵件、筆記、社群媒體文案，支援複製、分享和錄音拼接。適用於會議紀要、語音備忘、內容創作等多種場景。
  dependency:
    python:
      - requests>=2.28.0
      - numpy>=1.21.0
    system: []
  ---
  
  # Qwen3-ASR 智慧語音轉文字助手
  
  ## 任務目標
  - 本 Skill 用於：將語音轉換為文字，並提供智慧文字改寫功能
  - 能力包含：
    - 實時語音識別（語音轉文字）
    - 智慧文字改寫（郵件、筆記、社群媒體文案）
    - 文字拼接（多段錄音合併）
    - 一鍵複製和分享
  - 觸發條件：使用者提出"語音轉文字"、"錄音轉文字"、"語音備忘"等需求
  
  ## 前置準備
  - 依賴說明：Qwen3-ASR 呼叫所需的 Python 庫
    ```
    requests>=2.28.0
    numpy>=1.21.0
    ```
  - 無需額外檔案或資料夾準備
  
  ## 操作步驟
  
  ### 標準流程（語音轉文字 + 智慧改寫）
  
  1. **錄音/上傳音訊**（呼叫方提供）
     - 點擊錄音按鈕開始錄音
     - 點擊停止結束錄音
     - 或上傳已有的音訊檔案
  
  2. **語音轉文字**（智慧體呼叫腳本）
     ```python
     from scripts.asr_transcriber import Qwen3ASRTranscriber
     
     transcriber = Qwen3ASRTranscriber()
     result = transcriber.transcribe(
         audio_file="recording.wav",
         language="zh-CN"
     )
     text = result["text"]
     ```
  
  3. **文字改寫**（智慧體處理）
     - 根據使用者需求選擇改寫型別：
       - **改寫成郵件**：正式、結構化，包含主題、正文、落款
       - **改寫成筆記**：要點清晰、層次分明，使用列表和標記
       - **改寫成社群媒體文案**：簡潔、有吸引力，使用表情符號和話題標籤
     - 智慧體分析原文內容，識別關鍵資訊
     - 根據改寫型別調整語氣、結構和風格
  
  4. **複製/分享**（智慧體處理）
     - 一鍵複製：智慧體將改寫後的文字複製到剪貼簿
     - 一鍵分享：智慧體生成適合 X/Twitter 的分享格式
  
  5. **錄音拼接**（智慧體處理）
     - 繼續錄音，生成新的文字
     - 智慧體將新文字拼接到原文
     - 保持文字連貫性，新增適當的連線詞
  
  ### 多段錄音拼接流程
  
  1. **第一段錄音**：按照標準流程進行語音轉文字
  2. **繼續錄音**：使用者點擊繼續錄音
  3. **轉文字**：呼叫腳本識別新錄音
  4. **智慧拼接**：智慧體將新文字拼接到原文
     ```python
     # 智慧體處理拼接
     full_text = original_text + "\n\n" + new_text
     ```
  
  ## 資源索引
  - 必要腳本：
    - [scripts/asr_transcriber.py](scripts/asr_transcriber.py)（用途：語音轉文字，支援多種音訊格式和實時識別）
  - 領域參考：
    - [references/asr-api-config.md](references/asr-api-config.md)（何時讀取：需要了解 ASR API 配置和參數時）
    - [references/text-rewrite-guide.md](references/text-rewrite-guide.md)（何時讀取：需要了解文字改寫規則和模板時）
  - 輸出資產：無預置模板，改寫後的文字根據需求動態生成
  
  ## 注意事項
  - **錄音品質**：確保錄音清晰，無過多背景噪音，提高識別準確率
  - **文字改寫**：充分利用智慧體的語言理解和創作能力，避免為改寫編寫腳本
  - **拼接連貫性**：多段錄音拼接時，智慧體應新增適當的連線詞，保持文字連貫
  - **改寫準確性**：改寫時應保留原文的核心資訊和意圖，不隨意增刪內容
  - **適配場景**：根據使用場景選擇合適的改寫型別（郵件/筆記/社群媒體）
  
  ## 使用範例
  
  ### 範例 1：會議紀要轉筆記
  
  **場景**：錄製會議語音，轉換為結構化的會議筆記
  
  **執行流程**：
  1. 錄製會議語音（60分鐘）
  2. 呼叫腳本轉文字：
     ```python
     from scripts.asr_transcriber import Qwen3ASRTranscriber
     
     transcriber = Qwen3ASRTranscriber()
     result = transcriber.transcribe(
         audio_file="meeting.wav",
         language="zh-CN"
     )
     meeting_text = result["text"]
     ```
  
  3. 智慧體改寫成筆記：
     ```
     # 會議筆記
     
     ## 時間地點
     - 時間：2024年1月23日
     - 地點：公司會議室
     
     ## 參會人員
     - 張經理、李主管、王工程師
     
     ## 主要議題
     1. Q1業績回顧
        - 銷售額增長20%
        - 新使用者增加5000人
     
     2. Q2工作計劃
        - 推出新產品線
        - 加強市場推廣
        - 最佳化客戶服務
     
     3. 決議事項
        - 批准新產品線預算
        - 成立市場推廣小組
     ```
  
  ### 範例 2：語音轉郵件
  
  **場景**：錄製語音備忘，轉換為正式郵件
  
  **執行流程**：
  1. 錄製語音備忘："小王，關於明天的專案會議，請準備好以下材料：專案進度報告、預算表、團隊人員名單。會議時間是上午10點，地點在3號會議室。"
  2. 呼叫腳本轉文字
  3. 智慧體改寫成郵件：
     ```
     主題：明天專案會議準備材料
     
     小王：
     
     你好！
     
     關於明天上午10點在3號會議室召開的專案會議，請提前準備好以下材料：
     
     1. 專案進度報告
     2. 預算表
     3. 團隊人員名單
     
     如有疑問，請及時聯絡我。
     
     祝好！
     張經理
     ```
  
  ### 範例 3：語音轉社群媒體文案
  
  **場景**：錄製語音靈感，轉換為社群媒體發布文案
  
  **執行流程**：
  1. 錄製語音靈感："今天嘗試了一家超棒的咖啡店，咖啡味道很濃郁，環境也很舒服，很適合工作。推薦給大家！"
  2. 呼叫腳本轉文字
  3. 智慧體改寫成社群媒體文案：
     ```
     ☕️ 今日份咖啡推薦！
     
     今天發現了一家寶藏咖啡店 ☕✨
     
     咖啡口感濃郁，環境舒適超治癒，簡直是工作充電的好地方～
     
     #咖啡探店 #工作日常 #週末好去處
     
     📍 地址：[咖啡店名稱]
     ⭐ 推薦：招牌拿鐵、手衝咖啡
     ```
  
  ### 範例 4：多段錄音拼接
  
  **場景**：錄製長篇語音，分多段錄音，最後拼接完整文字
  
  **執行流程**：
  1. **第一段錄音**（0-10分鐘）：
     ```python
     result1 = transcriber.transcribe("part1.wav")
     text1 = result1["text"]
     ```
  
  2. **第二段錄音**（10-20分鐘）：
     ```python
     result2 = transcriber.transcribe("part2.wav")
     text2 = result2["text"]
     ```
  
  3. **第三段錄音**（20-30分鐘）：
     ```python
     result3 = transcriber.transcribe("part3.wav")
     text3 = result3["text"]
     ```
  
  4. **智慧體拼接**：
     ```
     完整文字：
     
     [第一段內容]
     
     ...（智慧體新增連線詞）...
     
     [第二段內容]
     
     ...（智慧體新增連線詞）...
     
     [第三段內容]
     ```
  
  ### 範例 5：一鍵複製和分享
  
  **場景**：語音轉文字後，一鍵複製或整理成 X/Twitter 分享文
  
  **執行流程**：
  1. 語音轉文字
  2. 智慧體改寫成目標格式
  3. **一鍵複製**：
     ```
     文字已複製到剪貼簿！
     ```
  4. **整理成 X/Twitter 分享文**：
     ```
     ✅ 文字已生成，可以整理成 X/Twitter 版本
     
     分享格式：
     [改寫後的文字]
     
     #會議紀要 #工作效率
     ```
  
  ## API 參考
  
  ### Qwen3ASRTranscriber 類
  
  **初始化**：
  ```python
  Qwen3ASRTranscriber(api_key=None, base_url=None)
  ```
  
  **主要方法**：
  ```python
  # 語音轉文字
  transcribe(
      audio_file: str,
      language: str = "zh-CN",
      format: str = "wav",
      sample_rate: int = 16000,
      return_timestamps: bool = False
  ) -> dict
  
  # 回傳格式
  {
      "success": True,
      "text": "識別的文字",
      "language": "zh-CN",
      "duration": 120.5,
      "segments": [...]  # 如果 return_timestamps=True
  }
  ```
  
---

## 這個 Skill 在做什麼

智慧語音轉文字助理，基於 Qwen3-ASR 模型，支援即時語音辨識和智慧文字改寫。可以將錄音轉換為文字，並一鍵改寫成郵件、筆記、社群媒體文案，支援複製、分享和錄音拼接。適用於會議紀要、語音備忘、內容創作等多種情境。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
