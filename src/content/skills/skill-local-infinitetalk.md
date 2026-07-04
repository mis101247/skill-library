---
title: "InfiniteTalk 影片配音 Skill"
description: "音訊驅動的稀疏幀影片配音工具，支援音訊驅動的 Video-to-Video 和 Image-to-Video 產生，實現精準的唇形、頭部、身體姿態同步，支援無限時長影片產生"
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
sourcePath: "skills/infinitetalk/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/infinitetalk/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/infinitetalk/SKILL.md"
license: "CC-BY-4.0"
originalName: "infinitetalk"
originalDescription: "音訊驅動的稀疏幀影片配音工具，支援音訊驅動的 Video-to-Video 和 Image-to-Video 產生，實現精準的唇形、頭部、身體姿態同步，支援無限時長影片產生"
activation: "當你需要 InfiniteTalk 影片配音 的工作流程時使用。"
useCases:
  - "需要處理「音訊驅動的稀疏幀影片配音工具，支援音訊驅動的 Video-to-Video 和 Image-to-Video 產生，實現精準的唇形、頭部、身體姿態同步，支援無限時長影片產生」這類任務。"
  - "想直接閱讀或複製 infinitetalk 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/infinitetalk/SKILL.md"
  - "skills/infinitetalk/infinitetalk/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
  - "偵測到同名 SKILL.md，已合併為單一頁面；其他路徑：skills/infinitetalk/infinitetalk/SKILL.md。"
skillBody: |-
  ---
  name: infinitetalk
  description: 音訊驅動的稀疏幀影片配音工具，支援音訊驅動的 Video-to-Video 和 Image-to-Video 生成，實現精準的唇形、頭部、身體姿態同步，支援無限時長影片生成
  dependency:
    python: |
      opencv-python>=4.9.0.80
      diffusers>=0.31.0
      transformers>=4.49.0
      tokenizers>=0.20.3
      accelerate>=1.1.1
      tqdm
      imageio
      easydict
      ftfy
      dashscope
      imageio-ffmpeg
      scikit-image
      loguru
      gradio>=5.0.0
      numpy>=1.23.5,<2
      xfuser>=0.4.1
      pyloudnorm
      optimum-quanto==0.2.6
      scenedetect
      moviepy==1.0.3
      decord
      torch>=2.0.0
      torchvision
      torchaudio
      einops
      soundfile
    system: |
      # 建立模型權重目錄
      mkdir -p weights/Wan2.1-I2V-14B-480P
      mkdir -p weights/chinese-wav2vec2-base
      mkdir -p weights/InfiniteTalk/single
      mkdir -p weights/Kokoro-82M
  ---
  
  # InfiniteTalk - 音訊驅動影片生成
  
  ## 任務目標
  - 本 Skill 用於：將音訊（語音）轉換為同步的說話人影片，支援從單張圖片或現有影片生成音訊驅動的說話影片
  - 能力包含：
    - Image-to-Video：從單張圖片生成音訊驅動的說話影片
    - Video-to-Video：對現有影片進行音訊驅動的重配音
    - 多維度同步：唇形、頭部運動、身體姿態、面部表情與音訊精準對齊
    - 無限時長：支援無限制時長的影片生成
    - 低視訊記憶體適配：支援量化、模型解除安裝等視訊記憶體最佳化方案
  - 觸發條件：當需要生成音訊驅動的數位人影片、影片配音、虛擬主播內容時使用
  
  ## 前置準備
  - 模型下載：在使用本 Skill 前，必須先下載所需的模型權重檔案，具體步驟見 [references/model_download.md](references/model_download.md)
  - 硬體要求：
    - GPU：推薦使用 16GB+ 視訊記憶體的 GPU（可使用量化方案適配低視訊記憶體裝置）
    - 記憶體：建議 32GB+ 系統記憶體
    - 磁碟空間：至少 50GB 可用空間（模型權重約 30GB）
  - 環境配置：詳細依賴安裝見 [references/environment_setup.md](references/environment_setup.md)
  
  ## 操作步驟
  
  ### 模式一：Image-to-Video（圖片生成影片）
  1. 準備輸入
     - 確保有一張清晰的人臉圖片作為輸入
     - 準備音訊檔案（支援 mp3、wav 等格式）
     - 可選：使用 TTS 功能從文字生成音訊
  
  2. 執行生成
     - 呼叫 `scripts/infer_infinitetalk.py` 進行推理
     - 參數說明：
       - `input_path`: 輸入圖片路徑
       - `audio_path`: 驅動音訊路徑（或提供 `text` 使用 TTS）
       - `output_path`: 輸出影片路徑
       - `mode`: `clip`（單段）或 `streaming`（長影片）
       - `size`: `infinitetalk-480`（480P）或 `infinitetalk-720`（720P）
       - `sample_steps`: 取樣步數（預設 40）
       - `sample_audio_guide_scale`: 音訊引導強度（預設 4.0）
  
  3. 驗證輸出
     - 檢查生成的影片是否同步良好
     - 確認唇形、頭部動作與音訊匹配
     - 如有異常，調整 `sample_audio_guide_scale` 參數
  
  ### 模式二：Video-to-Video（影片重配音）
  1. 準備輸入
     - 準備參考影片檔案
     - 準備目標音訊檔案
  
  2. 執行生成
     - 使用相同的腳本，但 `input_path` 指向影片檔案
     - 腳本會自動提取影片的首幀作為參考
  
  3. 處理長影片
     - 使用 `streaming` 模式生成無限時長影片
     - 透過 `motion_frame` 參數控制驅動幀長度（預設 9）
  
  ### 模式三：使用 TTS 生成音訊
  1. 文字轉語音
     - 提供待合成的文字內容
     - 指定聲音模型（Kokoro-82M）
     - 腳本會自動生成音訊檔案
  
  2. 生成影片
     - 使用生成的音訊驅動影片生成
     - 支援雙人對話模式（使用標記 `(s1)` 和 `(s2)` 區分說話人）
  
  ## 資源索引
  - 核心腳本：見 [scripts/infer_infinitetalk.py](scripts/infer_infinitetalk.py)（音訊驅動影片生成推理）
  - 環境配置：見 [references/environment_setup.md](references/environment_setup.md)（依賴安裝和系統配置）
  - 模型下載：見 [references/model_download.md](references/model_download.md)（模型權重下載指南）
  - 使用範例：見 [references/usage_examples.md](references/usage_examples.md)（典型場景和命令範例）
  
  ## 注意事項
  - 模型權重較大（約 30GB），首次使用需要提前下載
  - 建議使用高視訊記憶體 GPU（16GB+），低視訊記憶體裝置可使用量化方案
  - 輸入音訊建議取樣率為 16000Hz，腳本會自動進行響度歸一化
  - 輸入圖片/影片應包含清晰的人臉區域
  - 生成速度取決於 GPU 效能，480P 解析度下生成 1 秒影片約需 5-10 秒
  - 如遇到視訊記憶體不足錯誤，可嘗試：
    - 降低解析度（使用 `size=infinitetalk-480`）
    - 啟用量化（新增 `--quant int8` 參數）
    - 啟用模型解除安裝（新增 `--offload_model true`）
  
  ## 使用範例
  - 基礎圖片生成影片：
    ```bash
    python scripts/infer_infinitetalk.py \
      --input_path ./input.jpg \
      --audio_path ./audio.wav \
      --output_path ./output.mp4 \
      --size infinitetalk-480 \
      --mode clip
    ```
  - 長影片生成：
    ```bash
    python scripts/infer_infinitetalk.py \
      --input_path ./input.jpg \
      --audio_path ./long_audio.wav \
      --output_path ./long_output.mp4 \
      --size infinitetalk-480 \
      --mode streaming
    ```
  - 使用 TTS 生成：
    ```bash
    python scripts/infer_infinitetalk.py \
      --input_path ./input.jpg \
      --text "你好，今天天氣真不錯" \
      --output_path ./tts_output.mp4 \
      --size infinitetalk-480
    ```
  
---

## 這個 Skill 在做什麼

音訊驅動的稀疏幀影片配音工具，支援音訊驅動的 Video-to-Video 和 Image-to-Video 產生，實現精準的唇形、頭部、身體姿態同步，支援無限時長影片產生

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
