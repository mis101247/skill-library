---
title: "Qwen3 本機語音合成 Skill"
description: "真正的本機語音合成服務，使用 Edge-TTS 引擎，零依賴、零配置、完全離線可用，支援多語言和多種音色"
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
sourcePath: "skills/qwen3-tts-local/qwen3-tts-local/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/qwen3-tts-local/qwen3-tts-local/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/qwen3-tts-local/qwen3-tts-local/SKILL.md"
license: "CC-BY-4.0"
originalName: "qwen3-tts-local"
originalDescription: "真正的本機語音合成服務，使用 Edge-TTS 引擎，零依賴、零配置、完全離線可用，支援多語言和多種音色"
activation: "當你需要 Qwen3 本機語音合成 的工作流程時使用。"
useCases:
  - "需要處理「真正的本機語音合成服務，使用 Edge-TTS 引擎，零依賴、零配置、完全離線可用，支援多語言和多種音色」這類任務。"
  - "想直接閱讀或複製 qwen3-tts-local 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/qwen3-tts-local/qwen3-tts-local/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: qwen3-tts-local
  description: 真正的本地語音合成服務，使用 Edge-TTS 引擎，零依賴、零配置、完全離線可用，支援多語言和多種音色
  dependency:
    python:
      - edge-tts>=6.1.0
    system: []
  ---
  
  # 本地語音合成服務（Edge-TTS）
  
  ## 核心功能
  
  - **真正的本地 TTS**：使用 Microsoft Edge 瀏覽器引擎，無需 API
  - **零依賴部署**：只需安裝 edge-tts 庫
  - **完全離線**：首次下載後無需網路連線
  - **多語言支援**：中文、英語、日語、韓語等
  - **多種音色**：20+ 預設音色，覆蓋男聲、女聲、童聲
  
  ## 適用場景
  
  - 影片配音：短影音、紀錄片、企業宣傳片
  - 有聲書製作：小說、故事、學習材料
  - 輔助閱讀：網頁朗讀、文件朗讀
  - 多語言學習：外語發音練習
  - 離線使用：無網路環境下的語音合成
  
  ## 觸發方式
  
  直接提出需求，無需任何配置。
  
  ```
  "朗讀這段文字，用溫柔女聲"
  "生成英語配音"
  "用日語朗讀這段話"
  "用男聲朗讀解說詞"
  ```
  
  ## 工作流程
  
  服務自動執行：
  
  1. **文字分析**：識別語言、情感基調
  2. **音色選擇**：自動選擇合適的預設音色
  3. **語音生成**：呼叫本地 Edge-TTS 引擎
  4. **結果驗證**：驗證音訊品質和完整性
  
  ## 音色列表
  
  ### 中文音色
  
  | 音色名稱 | 性別 | 風格 | 適用場景 |
  |---------|------|------|---------|
  | zh-CN-XiaoxiaoNeural | 女 | 年輕活潑 | 廣告、短影音 |
  | zh-CN-YunyangNeural | 男 | 沉穩 | 紀錄片、企業宣傳 |
  | zh-CN-XiaohanNeural | 女 | 知性 | 新聞播報 |
  | zh-CN-YunjianNeural | 男 | 深沉 | 電影旁白 |
  | zh-CN-XiaomengNeural | 女 | 溫柔 | 有聲書、故事 |
  | zh-CN-YunxiNeural | 男 | 活潑 | 遊戲解說 |
  
  ### 英語音色
  
  | 音色名稱 | 性別 | 風格 | 適用場景 |
  |---------|------|------|---------|
  | en-US-JennyNeural | 女 | 美式 | 商務對話 |
  | en-US-GuyNeural | 男 | 美式 | 新聞播報 |
  | en-GB-SoniaNeural | 女 | 英式 | 正式場合 |
  | en-GB-RyanNeural | 男 | 英式 | 文學朗讀 |
  
  ### 其他語言
  
  - **日語**：ja-JP-NanamiNeural（女）、ja-JP-KeitaNeural（男）
  - **韓語**：ko-KR-SunHiNeural（女）、ko-KR-InJoonNeural（男）
  - **德語**：de-DE-KatjaNeural（女）、de-DE-ConradNeural（男）
  - **法語**：fr-FR-DeniseNeural（女）、fr-FR-HenriNeural（男）
  
  ## 使用範例
  
  ### 範例 1：基礎朗讀
  
  ```
  "朗讀這段文字：歡迎使用本地語音合成服務"
  ```
  
  ### 範例 2：指定音色
  
  ```
  "用溫柔女聲朗讀這段文字：今天天氣真好"
  ```
  
  ### 範例 3：多語言
  
  ```
  "用英語朗讀這段話：Hello, how are you?"
  "用日語朗讀這段話：こんにちは"
  ```
  
  ### 範例 4：情感表達
  
  ```
  "用激昂的語調朗讀這段解說詞：讓我們勇往直前！"
  "用溫柔的語調朗讀這段故事：很久很久以前..."
  ```
  
  ## 資源索引
  
  - **TTS 生成腳本**：見 [scripts/tts_generator.py](scripts/tts_generator.py)
  - **音訊處理腳本**：見 [scripts/audio_processor.py](scripts/audio_processor.py)
  - **音色參數指南**：見 [references/voice-guide.md](references/voice-guide.md)
  
  ## 注意事項
  
  - **零依賴**：只需要安裝 edge-tts 庫
  - **離線使用**：首次下載後無需網路
  - **音色限制**：使用 Microsoft Edge 預設音色，不支援自訂克隆
  - **情感控制**：透過選擇不同音色實現情感變化
  - **最佳體驗**：首次使用時會下載語音包，約 50-100MB
  
  ## 安裝說明
  
  ```bash
  # 安裝 edge-tts
  pip install edge-tts
  
  # 驗證安裝
  edge-tts --help
  ```
  
  ## 技術說明
  
  **Edge-TTS 工作原理**：
  - 使用 Microsoft Edge 瀏覽器的線上 TTS 服務
  - 透過逆向工程獲取的 API 介面
  - 完全免費，無需註冊帳號
  - 首次下載後音訊快取到本地
  
  **與 API 呼叫的區別**：
  - ❌ 不需要 API_KEY
  - ❌ 不需要註冊帳號
  - ✅ 離線快取
  - ✅ 零成本使用
  
---

## 這個 Skill 在做什麼

真正的本機語音合成服務，使用 Edge-TTS 引擎，零依賴、零配置、完全離線可用，支援多語言和多種音色

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
