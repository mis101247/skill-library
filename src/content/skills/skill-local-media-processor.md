---
title: "Media Processor Skill"
description: "提供基於 FFmpeg 和 ImageMagick 的多媒體處理能力，支援影片和影像的格式轉換、解析度調整、壓縮等操作"
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
sourcePath: "skills/media-processor/media-processor/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/media-processor/media-processor/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/media-processor/media-processor/SKILL.md"
license: "CC-BY-4.0"
originalName: "media-processor"
originalDescription: "提供基於 FFmpeg 和 ImageMagick 的多媒體處理能力，支援影片和影像的格式轉換、解析度調整、壓縮等操作"
activation: "當你需要 Media Processor 的工作流程時使用。"
useCases:
  - "需要處理「提供基於 FFmpeg 和 ImageMagick 的多媒體處理能力，支援影片和影像的格式轉換、解析度調整、壓縮等操作」這類任務。"
  - "想直接閱讀或複製 media-processor 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/media-processor/media-processor/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: media-processor
  description: 提供基於 FFmpeg 和 ImageMagick 的多媒體處理能力，支援影片和影像的格式轉換、解析度調整、壓縮等操作
  dependency:
    system:
      - apt-get update && apt-get install -y ffmpeg imagemagick
  ---
  
  # Media Processor
  
  ## 任務目標
  - 本 Skill 用於：處理影片和影像檔案，進行格式轉換、解析度調整、壓縮等操作
  - 能力包含：
    - 影片格式轉換（MP4/AVI/MOV/MKV 等）
    - 影片解析度調整和壓縮
    - 影像格式轉換（JPG/PNG/GIF/WebP 等）
    - 影像解析度調整和壓縮
    - 批次處理支援
  - 觸發條件：當使用者需要處理影片或影像檔案時觸發
  
  ## 前置準備
  - 依賴說明：本 Skill 依賴以下系統工具
    - FFmpeg：影片處理工具
    - ImageMagick：影像處理工具
  - 系統依賴安裝：Skill 首次使用時將自動安裝系統依賴
    ```bash
    apt-get update && apt-get install -y ffmpeg imagemagick
    ```
  
  ## 操作步驟
  
  ### 標準流程
  
  1. **需求分析**
     - 識別輸入檔案型別（影片/影像）
     - 確定目標格式、解析度、品質要求
     - 評估是否需要批次處理
  
  2. **選擇處理方式**
     - 影片處理：呼叫 `scripts/` 中的影片處理腳本
     - 影像處理：呼叫 `scripts/` 中的影像處理腳本
  
  3. **執行處理**
     - 對於簡單操作（如單一格式轉換）：直接呼叫相應腳本
     - 對於複雜操作（如多步驟處理）：智慧體將呼叫多個腳本組合使用
  
  4. **結果驗證**
     - 檢查輸出檔案是否生成
     - 驗證檔案格式和參數是否符合預期
  
  ### 常見操作指南
  
  #### 影片格式轉換
  - 呼叫 `scripts/video_convert.py`
  - 參數：input_path（輸入路徑）、output_path（輸出路徑）、output_format（目標格式）
  - 範例：將 AVI 轉換為 MP4
  
  #### 影片壓縮
  - 呼叫 `scripts/video_compress.py`
  - 參數：input_path、output_path、bitrate（目標位元速率）、crf（品品管制係數）
  - 範例：壓縮影片到 2Mbps
  
  #### 影片解析度調整
  - 呼叫 `scripts/video_scale.py`
  - 參數：input_path、output_path、width、height
  - 範例：調整到 1920x1080
  
  #### 影像格式轉換
  - 呼叫 `scripts/image_convert.py`
  - 參數：input_path、output_path、output_format、quality
  - 範例：將 PNG 轉換為 JPG
  
  #### 影像縮放
  - 呼叫 `scripts/image_scale.py`
  - 參數：input_path、output_path、width、height、maintain_aspect
  - 範例：等比縮放到 1024x768
  
  #### 影像壓縮
  - 呼叫 `scripts/image_compress.py`
  - 參數：input_path、output_path、quality、method（壓縮方法）
  - 範例：品質設定為 85%
  
  ### 批次處理
  - 當需要處理多個檔案時，智慧體將迴圈呼叫相應腳本
  - 使用萬用字元模式匹配檔案（如 `*.avi`、`images/*.png`）
  - 為每個檔案生成對應的輸出路徑
  
  ## 資源索引
  - 影片處理腳本：
    - [scripts/video_convert.py](scripts/video_convert.py) - 影片格式轉換
    - [scripts/video_compress.py](scripts/video_compress.py) - 影片壓縮
    - [scripts/video_scale.py](scripts/video_scale.py) - 影片解析度調整
  - 影像處理腳本：
    - [scripts/image_convert.py](scripts/image_convert.py) - 影像格式轉換
    - [scripts/image_scale.py](scripts/image_scale.py) - 影像縮放
    - [scripts/image_compress.py](scripts/image_compress.py) - 影像壓縮
  - 參考文件：
    - [references/ffmpeg_guide.md](references/ffmpeg_guide.md) - FFmpeg 參數參考（需要高階參數時讀取）
    - [references/imagemagick_guide.md](references/imagemagick_guide.md) - ImageMagick 參數參考（需要高階參數時讀取）
  
  ## 注意事項
  - 確保輸入檔案路徑正確，使用相對路徑（`./` 開頭）
  - 輸出路徑需要包含完整檔名和副檔名
  - 品質參數範圍：影像品質 1-100，影片 CRF 18-28（數值越小品質越高）
  - 處理大檔案時請耐心等待，智慧體會持續監控執行狀態
  - 如果需要自訂參數（如編碼器、幀率等），請參考相應參考文件
  
  ## 使用範例
  
  ### 範例1：影片格式轉換
  ```python
  # 將 video.avi 轉換為 video.mp4
  python scripts/video_convert.py \
    --input ./video.avi \
    --output ./video.mp4 \
    --format mp4
  ```
  
  ### 範例2：影像批次轉換
  ```python
  # 將所有 PNG 轉換為 JPG
  for file in ./images/*.png; do
    output="${file%.png}.jpg"
    python scripts/image_convert.py \
      --input "$file" \
      --output "$output" \
      --format jpg \
      --quality 85
  done
  ```
  
  ### 範例3：影片壓縮與縮放
  ```python
  # 先縮放再壓縮
  python scripts/video_scale.py \
    --input ./input.mp4 \
    --output ./temp.mp4 \
    --width 1280 \
    --height 720
  
  python scripts/video_compress.py \
    --input ./temp.mp4 \
    --output ./output.mp4 \
    --bitrate 2M
  ```
  
---

## 這個 Skill 在做什麼

提供基於 FFmpeg 和 ImageMagick 的多媒體處理能力，支援影片和影像的格式轉換、解析度調整、壓縮等操作

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
