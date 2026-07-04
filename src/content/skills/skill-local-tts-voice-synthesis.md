---
title: "語音合成 Skill"
description: "智慧語音合成服務，支援音色複製、擬人化語意適配配音、流式即時產生、多語言與方言支援，提供 1.7B/0.6B 雙模型選擇"
category: "voice"
tags:
  - "skill-store"
  - "local-skill"
  - "voice"
featured: true
entryType: "local"
publishedAt: 2026-07-01
updatedAt: 2026-07-01
sourceRepo: "skill"
sourceRepoUrl: "https://github.com/anbeime/skill"
sourcePath: "skills/tts-voice-synthesis/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/tts-voice-synthesis/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/tts-voice-synthesis/SKILL.md"
license: "CC-BY-4.0"
originalName: "tts-voice-synthesis"
originalDescription: "智慧語音合成服務，支援音色複製、擬人化語意適配配音、流式即時產生、多語言與方言支援，提供 1.7B/0.6B 雙模型選擇"
activation: "當你需要 語音合成 的工作流程時使用。"
useCases:
  - "需要處理「智慧語音合成服務，支援音色複製、擬人化語意適配配音、流式即時產生、多語言與方言支援，提供 1.7B/0.6B 雙模型選擇」這類任務。"
  - "想直接閱讀或複製 tts-voice-synthesis 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/tts-voice-synthesis/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: tts-voice-synthesis
  description: 智慧語音合成服務，支援音色克隆、擬人化語義適配配音、流式實時生成、多語言與方言支援，提供 1.7B/0.6B 雙模型選擇
  dependency:
    python: |
      torch>=2.0.0
      torchaudio>=2.0.0
      transformers>=4.35.0
      scipy>=1.11.0
      numpy>=1.24.0
      librosa>=0.10.0
      soundfile>=0.12.0
      pydub>=0.25.0
    system: |
      # 建立音色模型儲存目錄
      mkdir -p voices
      mkdir -p output
  ---
  
  # TTS 語音合成服務
  
  ## 任務目標
  - 本 Skill 用於：將文字轉換為高品質語音，支援音色克隆、情感適配、流式生成和多語言支援
  - 能力包含：
    - 角色音色自動採集與克隆（從參考音訊提取音色特徵）
    - 擬人化語義適配配音（根據文字情緒自動調整語音語調、語速、音調）
    - 流式實時配音（支援邊輸入文字邊生成語音）
    - 多語言與方言支援（中文、英文及多種方言）
    - 雙模型選擇（1.7B 高品質模型、0.6B 快速模型）
  - 觸發條件：當需要將文字轉換為語音、克隆特定音色、生成情感化配音時使用
  
  ## 前置準備
  - 模型下載：根據選擇的 TTS 模型下載對應的權重，詳見 [references/model_config.md](references/model_config.md)
  - 硬體要求：
    - GPU：推薦使用 8GB+ 視訊記憶體的 GPU（0.6B 模型可在 CPU 上執行）
    - 記憶體：建議 16GB+ 系統記憶體
    - 磁碟空間：至少 10GB 可用空間（模型權重約 3-5GB）
  - 依賴配置：確保已安裝所需的 Python 依賴包
  
  ## 操作步驟
  
  ### 模式一：基礎語音合成
  1. 文字準備
     - 確認待合成的文字內容
     - 智慧體將分析文字情緒和語義特徵
  
  2. 選擇音色
     - 使用預置音色（見 references/model_config.md）
     - 或使用已克隆的自訂音色
  
  3. 執行合成
     - 呼叫 `scripts/tts_generate.py` 進行語音生成
     - 根據情緒分析結果自動設定語音參數
  
  4. 驗證輸出
     - 檢查生成的音訊品質和情感匹配度
     - 如有需要，調整參數重新生成
  
  ### 模式二：音色克隆
  1. 準備參考音訊
     - 提供目標音色的參考音訊檔案（3-30 秒，清晰語音）
     - 確保參考音訊無背景噪音、音質清晰
  
  2. 提取音色特徵
     - 呼叫 `scripts/voice_clone.py` 提取音色特徵
     - 儲存為可重複使用的音色模型
  
  3. 使用克隆音色
     - 使用提取的音色模型生成語音
     - 可應用於不同文字的配音
  
  ### 模式三：流式實時配音
  1. 文字分段
     - 將長文字分段處理（智慧體自動完成）
     - 確保分段自然，不會截斷語義
  
  2. 流式生成
     - 呼叫 `scripts/tts_generate.py` 啟用流式模式
     - 逐步生成並輸出音訊片段
  
  3. 實時合併
     - 將生成的音訊片段實時合併
     - 輸出完整的配音檔案
  
  ### 模式四：情感適配配音
  1. 文字情緒分析
     - 智慧體分析文字的情緒傾向（高興、悲傷、憤怒、平靜等）
     - 識別關鍵情感詞和語氣
  
  2. 語音參數調整
     - 根據情緒自動調整：
       - 語速（悲傷時放慢，興奮時加快）
       - 音調（悲傷時降低，興奮時提高）
       - 音量（根據情感強度調整）
  
  3. 生成驗證
     - 生成情感化語音
     - 驗證情感表達是否準確
  
  ## 資源索引
  - 核心腳本：
    - [scripts/tts_generate.py](scripts/tts_generate.py)（TTS 語音生成）
    - [scripts/voice_clone.py](scripts/voice_clone.py)（音色克隆）
  - 參考文件：
    - [references/model_config.md](references/model_config.md)（模型配置和選擇指南）
    - [references/emotion_guide.md](references/emotion_guide.md)（情感標註和適配指南）
    - [references/usage_examples.md](references/usage_examples.md)（使用範例）
  
  ## 注意事項
  - 模型選擇：
    - 1.7B 模型：音質更高，適合高品質配音、有聲書等場景
    - 0.6B 模型：速度更快，適合實時互動、智慧客服等場景
  - 音色克隆：
    - 參考音訊應清晰、無背景噪音
    - 時長建議 5-15 秒，最短不少於 3 秒
    - 單人語音效果最佳，避免多人混合音訊
  - 流式生成：
    - 適合長文字和實時互動場景
    - 會產生多個臨時音訊片段
  - 情感適配：
    - 文字情緒分析由智慧體完成
    - 最終效果取決於情感標註的準確性
    - 可手動調整語音參數進行微調
  
  ## 使用範例
  - 基礎語音合成：
    ```bash
    python scripts/tts_generate.py \
      --text "你好，歡迎使用語音合成服務" \
      --output_path ./output/hello.wav \
      --model_size 1.7B \
      --voice default
    ```
  - 音色克隆：
    ```bash
    python scripts/voice_clone.py \
      --reference_audio ./reference.wav \
      --voice_name my_voice \
      --output_dir ./voices
    ```
  - 情感化配音：
    ```bash
    python scripts/tts_generate.py \
      --text "今天真是太開心了！" \
      --output_path ./output/happy.wav \
      --emotion happy \
      --speed 1.2 \
      --pitch 1.1
    ```
  - 流式生成：
    ```bash
    python scripts/tts_generate.py \
      --text_file ./long_text.txt \
      --output_path ./output/stream_output.wav \
      --streaming true
    ```
  
---

## 這個 Skill 在做什麼

智慧語音合成服務，支援音色複製、擬人化語意適配配音、流式即時產生、多語言與方言支援，提供 1.7B/0.6B 雙模型選擇

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
