---
title: "影片分鏡反推 Skill"
description: "影片反推工具,支援影片抽影格、視覺模型分析、提示詞產生,適用於影片創作參考、內容提取、情境分析"
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
sourcePath: "skills/video-frame-extractor/video-frame-extractor/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/video-frame-extractor/video-frame-extractor/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/video-frame-extractor/video-frame-extractor/SKILL.md"
license: "CC-BY-4.0"
originalName: "video-frame-extractor"
originalDescription: "影片反推工具,支援影片抽影格、視覺模型分析、提示詞產生,適用於影片創作參考、內容提取、情境分析"
activation: "當你需要 影片分鏡反推 的工作流程時使用。"
useCases:
  - "需要處理「影片反推工具,支援影片抽影格、視覺模型分析、提示詞產生,適用於影片創作參考、內容提取、情境分析」這類任務。"
  - "想直接閱讀或複製 video-frame-extractor 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/video-frame-extractor/video-frame-extractor/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: video-frame-extractor
  description: 影片反推工具,支援影片抽影格、視覺模型分析、提示詞生成,適用於影片創作參考、內容提取、場景分析
  dependency:
    python:
      - opencv-python>=4.8.0
      - pillow>=10.0.0
      - requests>=2.28.0
  ---
  
  # 影片反推工具 - 抽影格與視覺分析
  
  ## 任務目標
  - 本Skill用於: 從影片中提取關鍵影格,使用視覺模型分析每個影格內容,生成結構化描述和提示詞
  - 能力包含:
    - 影片抽影格(支援間隔抽影格、均勻取樣)
    - 視覺模型API呼叫(支援GPT-4V/Claude-3.5-Sonnet等)
    - 批次圖片分析
    - 結構化結果輸出(JSON格式)
  - 觸發條件: 使用者需要分析影片內容、提取分鏡參考、生成創作提示詞
  
  ## 前置準備
  - 依賴說明:
    ```
    opencv-python>=4.8.0
    pillow>=10.0.0
    requests>=2.28.0
    ```
  
  - 視覺模型配置:
    需要配置視覺模型API金鑰(如GPT-4V、Claude-3.5-Sonnet),環境變數格式:
    ```bash
    export VISION_API_KEY="your_api_key"
    export VISION_API_BASE="https://api.openai.com/v1"  # 或其他API地址
    export VISION_MODEL="gpt-4-vision-preview"  # 模型名稱
    ```
  
  - Coze Bot配置(推薦):
    使用您發布的Coze Bot API進行視覺分析,環境變數格式:
    ```bash
    export COZE_BOT_ID="7572557757883383858"  # 您的Bot ID
    export COZE_API_KEY="your_coze_api_key"  # 您的API Key
    ```
  
    Coze Bot的優勢: 整合了官方抽影格外掛和視覺模型,無需額外配置
  
  ## 操作步驟
  
  ### 標準流程
  
  **步驟1: 影片抽影格**
  - 輸入: 影片檔案路徑或URL
  - 呼叫腳本: `scripts/video_frame_extractor.py`
  - 參數:
    - `--input`: 影片檔案路徑或URL
    - `--output`: 輸出圖片目錄
    - `--interval`: 抽影格間隔(秒),預設1秒抽1幀
    - `--max_frames`: 最大抽影格數,預設10幀
  - 輸出: 抽取的圖片序列
  
  ```bash
  # 範例: 抽取影片關鍵影格
  python scripts/video_frame_extractor.py \
    --input ./input/video.mp4 \
    --output ./output/frames \
    --interval 3 \
    --max_frames 10
  ```
  
  **步驟2: 視覺分析**
  
  **方案A: 使用Coze Bot API(推薦)**
  - 輸入: 抽影格圖片目錄
  - 呼叫腳本: `scripts/coze_bot_client.py`
  - 參數:
    - `--image_dir`: 圖片目錄
    - `--prompt`: 分析提示詞(可選)
    - `--output`: 輸出JSON檔案路徑
  - 輸出: 每張圖片的描述和分析結果
  
  ```bash
  # 範例: 使用Coze Bot分析抽影格圖片
  python scripts/coze_bot_client.py \
    --image_dir ./output/frames \
    --prompt "分析場景內容、人物狀態、構圖特點,適合AI影片創作" \
    --output ./output/analysis.json
  ```
  
  **方案B: 使用其他視覺模型API**
  - 輸入: 抽影格圖片目錄
  - 呼叫腳本: `scripts/visual_analyzer.py`
  - 參數:
    - `--input`: 圖片目錄或單張圖片路徑
    - `--output`: 分析結果JSON檔案路徑
    - `--prompt`: 分析提示詞(可選,預設分析場景/人物/構圖)
  - 輸出: 每張圖片的描述和分析結果
  
  ```bash
  # 範例: 使用GPT-4V分析抽影格圖片
  python scripts/visual_analyzer.py \
    --input ./output/frames \
    --output ./output/analysis.json \
    --prompt "分析場景內容、人物狀態、構圖特點,適合AI影片創作"
  ```
  
  **步驟3: 結果整合**
  - 智慧體讀取分析結果JSON
  - 根據分析結果生成提示詞
  - 可用於影片創作參考或分鏡設計
  
  ### 可選參數
  
  **抽影格參數:**
  - `--interval`: 抽影格間隔(秒),越小抽影格越密集
  - `--max_frames`: 最大抽影格數,控制輸出數量
  - `--start_time`: 開始時間(秒)
  - `--end_time`: 結束時間(秒)
  - `--resolution`: 輸出圖片解析度,預設1080P
  
  **分析參數:**
  - `--prompt`: 自訂分析提示詞
  - `--detail`: 分析詳細程度(brief/standard/detailed)
  - `--batch_size`: 批次分析大小,預設5張
  
  ## 資源索引
  - 必要腳本:
    - [scripts/video_frame_extractor.py](scripts/video_frame_extractor.py) - 影片抽影格工具
    - [scripts/coze_bot_client.py](scripts/coze_bot_client.py) - Coze Bot API呼叫工具(推薦)
    - [scripts/visual_analyzer.py](scripts/visual_analyzer.py) - 其他視覺模型API呼叫工具
  - 領域參考:
    - [references/analysis-guide.md](references/analysis-guide.md) - 視覺分析指導與提示詞模板
  
  ## 注意事項
  - 視覺模型API金鑰需提前配置,否則無法呼叫分析功能
  - 抽影格間隔和最大影格數需根據影片時長合理設定
  - 視覺分析結果依賴模型能力,不同模型輸出格式可能不同
  - 建議先用小規模抽影格測試,確認效果後再大規模處理
  
  ## 使用範例
  
  ### 範例1: 完整反推流程(使用Coze Bot)
  ```bash
  # 1. 抽取影片關鍵影格
  python scripts/video_frame_extractor.py \
    --input ./input/source_video.mp4 \
    --output ./output/frames \
    --interval 2 \
    --max_frames 8
  
  # 2. 使用Coze Bot分析抽影格內容
  python scripts/coze_bot_client.py \
    --image_dir ./output/frames \
    --prompt "詳細描述場景、人物、構圖,適合AI影片創作參考" \
    --output ./output/analysis.json
  
  # 3. 智慧體讀取analysis.json,生成創作提示詞
  # 智慧體將根據分析結果組織內容,生成可用於AI創作的提示詞
  ```
  
  ### 範例2: 僅抽影格(不分析)
  ```bash
  python scripts/video_frame_extractor.py \
    --input ./input/video.mp4 \
    --output ./output/frames \
    --interval 5 \
    --max_frames 5
  ```
  
  ### 範例3: 單張圖片分析
  ```bash
  # 使用Coze Bot
  python scripts/coze_bot_client.py \
    --image ./output/frames/frame_00001.jpg \
    --prompt "分析這張圖片的場景風格和構圖"
  
  # 或使用其他視覺模型
  python scripts/visual_analyzer.py \
    --input ./output/frames/ \
    --output ./analysis.json \
    --prompt "分析場景風格和構圖"
  ```
  
  ## 輸出格式
  
  **抽影格輸出:**
  ```
  ./output/frames/
  ├── frame_00001.jpg
  ├── frame_00002.jpg
  ├── frame_00003.jpg
  └── ...
  ```
  
  **分析輸出(JSON):**
  ```json
  {
    "total_frames": 10,
    "analysis": [
      {
        "frame_file": "frame_00001.jpg",
        "timestamp": "00:00:00",
        "description": "場景描述內容...",
        "elements": ["人物", "背景", "道具"],
        "style": "風格描述..."
      },
      {
        "frame_file": "frame_00002.jpg",
        "timestamp": "00:00:03",
        "description": "場景描述內容...",
        "elements": ["人物", "背景", "道具"],
        "style": "風格描述..."
      }
    ]
  }
  ```
  
  ## 技術說明
  
  **抽影格技術:**
  - 使用OpenCV的VideoCapture讀取影片
  - 按時間間隔均勻取樣關鍵影格
  - 支援多種影片格式(MP4/MOV/AVI等)
  
  **視覺分析:**
  - 支援Coze Bot API(推薦,已整合抽影格和視覺模型)
  - 支援主流視覺模型API(GPT-4V/Claude-3.5-Sonnet等)
  - 批次處理,提升效率
  - 結構化輸出,便於後續處理
  
  **Coze Bot優勢:**
  - 整合官方抽影格外掛,抽影格品質高
  - 內建視覺模型,無需額外配置
  - 一站式服務,抽影格+分析一體化
  - 支援流式響應,實時獲取結果
  
  **效能最佳化:**
  - 可配置抽影格間隔,減少多餘影格
  - 批次API呼叫,減少請求次數
  - 結果快取,避免重複分析
  
---

## 這個 Skill 在做什麼

影片反推工具,支援影片抽影格、視覺模型分析、提示詞產生,適用於影片創作參考、內容提取、情境分析

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
