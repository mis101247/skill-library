---
title: "Remotion 影片強化 Skill"
description: "Remotion 影片強化 相關 Agent Skill，協助處理「影片轉場與動畫增強工具，提取 Remotion 的動畫理念，提供高階影片轉場效果和 Framer Motion 互動式動畫。可與 ppt-generator、nanobanana-ppt-visualizer、ppt-roadshow-generator Skill 協同工作。」這類任務。"
category: "presentation"
tags:
  - "skill-store"
  - "local-skill"
  - "presentation"
featured: false
entryType: "local"
publishedAt: 2026-07-01
updatedAt: 2026-07-01
sourceRepo: "skill"
sourceRepoUrl: "https://github.com/anbeime/skill"
sourcePath: "skills/remotion-video-enhancer/remotion-video-enhancer/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/remotion-video-enhancer/remotion-video-enhancer/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/remotion-video-enhancer/remotion-video-enhancer/SKILL.md"
license: "CC-BY-4.0"
originalName: "remotion-video-enhancer"
originalDescription: "Remotion 影片強化 相關 Agent Skill，協助處理「影片轉場與動畫增強工具，提取 Remotion 的動畫理念，提供高階影片轉場效果和 Framer Motion 互動式動畫。可與 ppt-generator、nanobanana-ppt-visualizer、ppt-roadshow-generator Skill 協同工作。」這類任務。"
activation: "當你需要 Remotion 影片強化 的工作流程時使用。"
useCases:
  - "需要處理「Remotion 影片強化 相關 Agent Skill，協助處理「影片轉場與動畫增強工具，提取 Remotion 的動畫理念，提供高階影片轉場效果和 Framer Motion 互動式動畫。可與 ppt-generator、nanobanana-ppt-visualizer、ppt-roadshow-generator Skill 協同工作。」這類任務」這類任務。"
  - "想直接閱讀或複製 remotion-video-enhancer 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/remotion-video-enhancer/remotion-video-enhancer/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: remotion-video-enhancer
  description: 影片轉場與動畫增強工具，提取 Remotion 的動畫理念，提供高階影片轉場效果和 Framer Motion 互動式動畫。可與 ppt-generator、nanobanana-ppt-visualizer、ppt-roadshow-generator Skill 協同工作。
  dependency:
    python:
      - moviepy>=1.0.3
      - pillow>=9.0.0
    system:
      - ffmpeg
  ---
  
  # Remotion 影片增強工具
  
  ## 任務目標
  - 本 Skill 用於：為 PPT 內容和影片新增 Remotion 風格的轉場和動畫效果
  - 能力包含：高階影片轉場、Framer Motion 互動式動畫、動畫序列規劃、多媒體增強
  - 觸發條件：使用者需要增強影片轉場效果、新增互動式動畫、或與其他 PPT Skill 協同
  
  ## 前置準備
  - 依賴說明：scripts 腳本所需的依賴包
    ```
    moviepy>=1.0.3
    pillow>=9.0.0
    ```
  - 系統依賴：FFmpeg（必需，用於影片轉場處理）
    ```bash
    # Ubuntu/Debian
    sudo apt-get install ffmpeg
  
    # macOS
    brew install ffmpeg
    ```
  
  ## 操作步驟
  
  ### 標準流程（完整動畫增強）
  
  #### 步驟 1：接收輸入資料
  根據協同模式，接收不同輸入：
  - **來自 ppt-generator**：JSON 格式的 PPT 資料
  - **來自 nanobanana-ppt-visualizer**：圖片檔案或 HTML 播放器
  - **來自 ppt-roadshow-generator**：已合成的影片檔案
  - **使用者直接提供**：圖片序列、影片檔案或 JSON 資料
  
  #### 步驟 2：動畫規劃與配置
  1. 分析輸入內容，確定動畫型別：
     - 影片轉場增強（使用 FFmpeg）
     - HTML 互動式動畫（使用 Framer Motion）
     - 混合模式（影片 + HTML）
  2. 呼叫 `scripts/animation_planner.py`：
     ```bash
     python scripts/animation_planner.py \
       --input ./input_data \
       --style dynamic \
       --output ./animation_plan.json
     ```
  3. 輸出動畫配置（animation_plan.json），包含：
     - 每個頁面/片段的轉場型別
     - 動畫時長和緩動曲線
     - 元素入場/出場效果
     - 互動式觸發條件
  
  #### 步驟 3：影片轉場增強（FFmpeg）
  1. 呼叫 `scripts/video_transitions.py`：
     ```bash
     python scripts/video_transitions.py \
       --input ./video.mp4 \
       --transitions ./animation_plan.json \
       --output ./enhanced_video.mp4
     ```
  2. 支援的轉場型別：
     - **淡入淡出 (Fade)**：經典淡入淡出效果
     - **滑動 (Slide)**：上下左右滑動
     - **縮放 (Zoom)**：推拉鏡頭效果
     - **翻轉 (Flip)**：3D 翻轉效果
     - **旋轉 (Rotate)**：旋轉過渡
     - **模糊 (Blur)**：模糊過渡
     - **溶解 (Dissolve)**：畫素溶解效果
     - **彈性 (Elastic)**：彈性動畫
  3. 每種轉場支援自訂：
     - 轉場時長（預設 1-2 秒）
     - 緩動曲線（linear, ease-in, ease-out, ease-in-out, bounce, elastic）
     - 方向（上下左右）
  
  #### 步驟 4：HTML 動畫增強（Framer Motion）
  1. 呼叫 `scripts/html_animations.py`：
     ```bash
     python scripts/html_animations.py \
       --input ./ppt_data.json \
       --template enhanced_viewer.html \
       --output ./animated_viewer.html
     ```
  2. Framer Motion 動畫效果：
     - **頁面過渡**：流暢的頁面切換動畫
     - **元素入場**：標題、內容逐個進場
     - **懸停效果**：滑鼠懸停時的回饋動畫
     - **點擊效果**：點擊時的漣漪或縮放效果
     - **滾動效果**：滾動時的視差動畫
  3. 互動式特性：
     - 鍵盤導航動畫
     - 觸控手勢支援
     - 全屏過渡動畫
     - 進度條動畫
  
  #### 步驟 5：輸出增強內容
  1. 影片增強輸出：`enhanced_video.mp4`
  2. HTML 動畫輸出：`animated_viewer.html`
  3. 動畫配置：`animation_plan.json`
  
  ### 與其他 Skill 協同
  
  #### 與 ppt-generator Skill 協同
  ```
  使用者請求："生成一個帶高階轉場的 PPT 影片"
  
  ┌─────────────────────────────────────────────────────────┐
  │  ppt-generator Skill                                    │
  ├─────────────────────────────────────────────────────────┤
  │  7 角色協作生成 JSON 資料                                │
  │  輸出：ppt_data.json                                    │
  └─────────────────────────────────────────────────────────┘
                            │
                            ▼ JSON 資料
  ┌─────────────────────────────────────────────────────────┐
  │  remotion-video-enhancer Skill                         │
  ├─────────────────────────────────────────────────────────┤
  │  1. 動畫規劃（animation_planner.py）                     │
  │  2. HTML 動畫增強（html_animations.py）                 │
  │  3. 輸出：animated_viewer.html                          │
  └─────────────────────────────────────────────────────────┘
  ```
  
  #### 與 nanobanana-ppt-visualizer Skill 協同
  ```
  使用者請求："為生成的播放器新增 Framer Motion 動畫"
  
  ┌─────────────────────────────────────────────────────────┐
  │  nanobanana-ppt-visualizer Skill                        │
  ├─────────────────────────────────────────────────────────┤
  │  生成 HTML 播放器 + 圖片                                  │
  │  輸出：viewer.html, slide-*.png                          │
  └─────────────────────────────────────────────────────────┘
                            │
                            ▼ HTML 檔案
  ┌─────────────────────────────────────────────────────────┐
  │  remotion-video-enhancer Skill                         │
  ├─────────────────────────────────────────────────────────┤
  │  1. 使用 Framer Motion 增強 viewer.html                 │
  │  2. 新增頁面過渡、元素入場、互動效果                      │
  │  3. 輸出：animated_viewer.html                           │
  └─────────────────────────────────────────────────────────┘
  ```
  
  #### 與 ppt-roadshow-generator Skill 協同
  ```
  使用者請求："為路演影片新增高階轉場效果"
  
  ┌─────────────────────────────────────────────────────────┐
  │  ppt-roadshow-generator Skill                           │
  ├─────────────────────────────────────────────────────────┤
  │  10 角色協作生成路演影片                                  │
  │  輸出：roadshow_video.mp4                                │
  └─────────────────────────────────────────────────────────┘
                            │
                            ▼ 影片檔案
  ┌─────────────────────────────────────────────────────────┐
  │  remotion-video-enhancer Skill                         │
  ├─────────────────────────────────────────────────────────┤
  │  1. 動畫規劃（animation_planner.py）                     │
  │  2. 影片轉場增強（video_transitions.py）                 │
  │  3. 應用 Remotion 風格轉場                              │
  │  4. 輸出：enhanced_roadshow_video.mp4                   │
  └─────────────────────────────────────────────────────────┘
  ```
  
  ### 獨立使用模式
  
  #### 模式 A：僅生成動畫配置
  ```bash
  python scripts/animation_planner.py \
    --input ./ppt_data.json \
    --style dynamic \
    --output ./animation_plan.json
  ```
  - 適用於：使用者希望手動調整動畫參數
  - 輸出：animation_plan.json
  
  #### 模式 B：僅增強影片轉場
  ```bash
  python scripts/video_transitions.py \
    --input ./video.mp4 \
    --transitions ./animation_plan.json \
    --output ./enhanced_video.mp4
  ```
  - 適用於：已有影片，需要增強轉場效果
  - 輸出：enhanced_video.mp4
  
  #### 模式 C：僅生成 HTML 動畫
  ```bash
  python scripts/html_animations.py \
    --input ./ppt_data.json \
    --template enhanced_viewer.html \
    --output ./animated_viewer.html
  ```
  - 適用於：需要互動式動畫播放器
  - 輸出：animated_viewer.html
  
  ### 可選分支
  - **快速模式**：使用預設動畫配置，跳過動畫規劃
  - **自訂模式**：使用者提供自訂動畫配置 JSON
  - **批次處理**：一次性處理多個影片或 PPT
  - **模板模式**：使用預設動畫模板（見 assets/animations/）
  
  ## 資源索引
  - 動畫規劃腳本：見 [scripts/animation_planner.py](scripts/animation_planner.py)（用途：生成動畫配置）
  - 影片轉場腳本：見 [scripts/video_transitions.py](scripts/video_transitions.py)（用途：FFmpeg 影片轉場）
  - HTML 動畫腳本：見 [scripts/html_animations.py](scripts/html_animations.py)（用途：Framer Motion 動畫）
  - 轉場效果指南：見 [references/transition_guide.md](references/transition_guide.md)（用途：轉場效果詳細說明）
  - 動畫模板：見 [assets/animations/](assets/animations/)（可選：預設動畫配置）
  - HTML 模板：見 [assets/templates/enhanced_viewer.html](assets/templates/enhanced_viewer.html)（Framer Motion 播放器）
  - 協同指南：見 [references/collaboration_guide.md](references/collaboration_guide.md)（與其他 Skill 協同）
  
  ## 注意事項
  - 本 Skill 不依賴任何第三方 AI API，所有動畫使用 FFmpeg 和 Framer Motion 實現
  - 影片轉場使用 FFmpeg，確保已安裝
  - HTML 動畫使用 Framer Motion CDN，無需安裝
  - 動畫配置 JSON 格式必須符合規範（見 references/transition_guide.md）
  - 與其他 Skill 協同時，確保輸入格式正確
  - 支援批次處理，但建議單個影片不超過 100 頁
  - Framer Motion 動畫僅在現代瀏覽器中支援
  
  ## 使用範例
  
  ### 範例 1：與 ppt-generator 協同生成動畫播放器
  - 功能說明：ppt-generator 生成內容，remotion-video-enhancer 新增動畫
  - 執行方式：ppt-generator → remotion-video-enhancer（Framer Motion）
  - 使用者指令："生成一個產品介紹 PPT，使用 Framer Motion 動畫"
  - 輸出：animated_viewer.html
  
  ### 範例 2：為路演影片新增高階轉場
  - 功能說明：增強現有影片的轉場效果
  - 執行方式：ppt-roadshow-generator → remotion-video-enhancer（FFmpeg 轉場）
  - 使用者指令："為路演影片新增 Remotion 風格的轉場"
  - 輸出：enhanced_roadshow_video.mp4
  
  ### 範例 3：自訂動畫配置
  - 功能說明：使用者手動指定動畫型別和參數
  - 執行方式：使用者提供 animation_plan.json → 影片轉場
  - 配置範例：
    ```json
    {
      "transitions": [
        {"type": "slide", "direction": "right", "duration": 1.5},
        {"type": "zoom", "scale": 1.2, "duration": 1.0}
      ]
    }
    ```
  - 輸出：按自訂配置增強的影片
  
  ### 範例 4：批次處理多個影片
  - 功能說明：一次性增強多個影片
  - 執行方式：腳本批次處理
  - 命令：
    ```bash
    python scripts/video_transitions.py \
      --input-dir ./videos/ \
      --transitions ./animation_plan.json \
      --output-dir ./enhanced_videos/
    ```
  - 輸出：批次增強的影片檔案
  
---

## 這個 Skill 在做什麼

Remotion 影片強化 相關 Agent Skill，協助處理「影片轉場與動畫增強工具，提取 Remotion 的動畫理念，提供高階影片轉場效果和 Framer Motion 互動式動畫。可與 ppt-generator、nanobanana-ppt-visualizer、ppt-roadshow-generator Skill 協同工作。」這類任務。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
