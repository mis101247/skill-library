---
title: "路演簡報影片 Skill"
description: "PPT 路演影片全流程產生器，支援品牌風格學習、智慧配音、音效音樂、字幕和一鍵影片合成。可一次性產生 15-100 頁風格統一的完整路演影片。"
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
sourcePath: "skills/ppt-roadshow-generator/ppt-roadshow-generator/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/ppt-roadshow-generator/ppt-roadshow-generator/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/ppt-roadshow-generator/ppt-roadshow-generator/SKILL.md"
license: "CC-BY-4.0"
originalName: "ppt-roadshow-generator"
originalDescription: "PPT 路演影片全流程產生器，支援品牌風格學習、智慧配音、音效音樂、字幕和一鍵影片合成。可一次性產生 15-100 頁風格統一的完整路演影片。"
activation: "當你需要 路演簡報影片 的工作流程時使用。"
useCases:
  - "需要處理「PPT 路演影片全流程產生器，支援品牌風格學習、智慧配音、音效音樂、字幕和一鍵影片合成。可一次性產生 15-100 頁風格統一的完整路演影片」這類任務。"
  - "想直接閱讀或複製 ppt-roadshow-generator 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/ppt-roadshow-generator/ppt-roadshow-generator/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: ppt-roadshow-generator
  description: PPT 路演影片全流程生成器，支援品牌風格學習、智慧配音、音效音樂、字幕和一鍵影片合成。可一次性生成 15-100 頁風格統一的完整路演影片。
  dependency:
    python:
      - moviepy>=1.0.3
      - pillow>=9.0.0
      - pydub>=0.25.1
      - requests>=2.28.0
    system:
      - ffmpeg
  ---
  
  # PPT 路演影片生成器
  
  ## 任務目標
  - 本 Skill 用於：從文件分析到完整路演影片的全流程生成，包含配音、音效、音樂、字幕和轉場動畫
  - 能力包含：文件分析、品牌風格學習、結構化規劃、內容生成、視覺設計、演講稿撰寫、配音、音效、字幕、影片合成
  - 觸發條件：使用者需要製作路演影片、產品發布演示、公司介紹影片等
  
  ## 前置準備
  - 依賴說明：scripts 腳本所需的依賴包
    ```
    moviepy>=1.0.3
    pillow>=9.0.0
    pydub>=0.25.1
    requests>=2.28.0
    ```
  - 系統依賴：FFmpeg（必需，用於影片和音訊處理）
    ```bash
    # Ubuntu/Debian
    sudo apt-get install ffmpeg
  
    # macOS
    brew install ffmpeg
    ```
  
  ## 操作步驟
  
  ### 標準流程（完整路演影片生成）
  
  #### 角色一：文件分析師
  1. 分析使用者提供的文件，提取核心資訊：
     - 主題和目標
     - 目標受眾
     - 核心論點
     - 關鍵資料和案例
  2. 輸出文件分析摘要供後續角色使用
  
  #### 角色二：結構規劃師（關鍵角色）
  1. 生成結構化文件，明確每一頁 PPT 講什麼：
     - 頁面編號
     - 頁面標題
     - 核心內容要點（3-5 條）
     - 演講時長（建議每頁 30-60 秒）
     - 頁面型別（封面/內容/資料/總結）
  2. 輸出結構化 JSON，確保邏輯連貫
  3. 此結構將作為後續所有角色的基礎
  
  #### 角色三：品牌風格分析師
  1. **匯入設計系統**（新增功能）：
     - 如果使用者提供從 `web-design-analyzer` 匯出的 `brand_style.json`，直接匯入
     - 使用 `scripts/style_learner.py --load-json ./brand_style.json` 載入配置
     - 驗證配置完整性（colors、fonts、layout_style）
  2. **學習品牌風格**（傳統方式）：
     - 學習使用者提供的品牌風格（如樣例 PPT、圖片、品牌手冊）：
       - 分析配色方案（主色、輔助色、強調色）
       - 識別字型型別（標題字型、正文字型）
       - 提取設計元素（logo、圖示、裝飾）
       - 分析佈局風格（簡約/商務/創意/科技）
  3. 生成品牌風格配置檔案（brand_style.json）
  4. 為後續視覺設計提供風格指導
  
  #### 角色四：內容策劃師
  1. 基於結構化文件，規劃每頁的詳細內容：
     - 標題和副標題
     - 內容要點（精煉為短語）
     - 資料和圖表說明
     - 演講提示
  2. 應用品牌風格，確保內容與視覺一致
  3. 輸出完整的內容規劃
  
  #### 角色五：視覺設計師
  1. 基於品牌風格和內容規劃，生成 PPT 圖片：
     - 使用智慧體的影像生成能力
     - 應用品牌配色和風格
     - 確保所有圖片風格統一
     - 生成 slide-01.png 到 slide-N.png
  2. 參考品牌風格配置，調整圖片色調、字型等
  
  #### 角色六：路演撰稿師
  1. 為每一頁撰寫詳細的演講稿/腳本：
     - 開場白（10-15 秒）
     - 核心內容講解（每頁 30-60 秒）
     - 過渡語（銜接下一頁）
     - 總結語（10-15 秒）
  2. 確保語言流暢自然，適合口語表達
  3. 輸出演講稿（roadshow_script.txt）
  
  #### 角色七：轉場設計師
  1. 設計頁面過渡動畫：
     - 選擇轉場型別（淡入淡出/滑動/縮放/翻轉等）
     - 設定轉場時長（建議 1-2 秒）
     - 確保轉場風格與品牌一致
  2. 生成轉場配置（transitions.json）
  
  #### 角色八：音訊設計師
  1. 處理音訊內容：
     - **配音**：呼叫 TTS API 生成語音解說
     - **音效**：新增頁面切換音效、強調音效
     - **音樂**：新增背景音樂（從 assets/music/ 或使用者上傳）
  2. 呼叫 `scripts/audio_processor.py`：
     ```bash
     python scripts/audio_processor.py \
       --script ./roadshow_script.txt \
       --style-brand ./brand_style.json \
       --output ./audio/
     ```
  3. 輸出音訊檔案（voiceover.mp3, sound_effects/, background_music.mp3）
  
  #### 角色九：字幕設計師
  1. 生成和同步字幕：
     - 根據演講稿生成字幕文字
     - 計算每句字幕的開始和結束時間
     - 應用品牌字型和樣式
  2. 呼叫 `scripts/subtitle_generator.py`：
     ```bash
     python scripts/subtitle_generator.py \
       --script ./roadshow_script.txt \
       --style-brand ./brand_style.json \
       --output ./subtitles.srt
     ```
  3. 輸出字幕檔案（subtitles.srt）
  
  #### 角色十：影片合成師
  1. 一鍵合成完整路演影片：
     - 合併所有圖片、轉場、配音、音效、音樂、字幕
     - 統一解析度和幀率（1920x1080, 30fps）
     - 確保音畫同步
  2. 呼叫 `scripts/roadshow_composer.py`：
     ```bash
     python scripts/roadshow_composer.py \
       --images ./images/ \
       --audio ./audio/ \
       --subtitles ./subtitles.srt \
       --style-brand ./brand_style.json \
       --output ./roadshow_video.mp4
     ```
  3. 輸出完整的路演影片
  
  ### 品牌風格學習模式
  
  當使用者希望保持品牌風格一致時：
  
  1. 使用者提供品牌風格樣例：
     - PPT 樣例檔案
     - 品牌手冊
     - 關鍵圖片（logo、產品圖等）
  2. 執行角色三（品牌風格分析師）
  3. 儲存品牌風格配置供後續使用
  4. 後續生成時自動應用此風格
  
  ### 與其他 Skill 協同
  
  #### 與 web-design-analyzer 協同（新增）
  - web-design-analyzer 分析網頁截圖，提取設計系統
  - 轉換為 brand_style.json（使用 `convert_to_roadshow_style.py`）
  - ppt-roadshow-generator 匯入品牌風格，生成路演影片
  - 適用於使用者希望路演影片與網頁設計保持一致的場景
  - 詳見：[references/design-system-import-guide.md](references/design-system-import-guide.md)
  
  #### 與 ppt-generator 協同
  - ppt-generator 生成 PPT 內容（JSON）
  - ppt-roadshow-generator 接收 JSON，繼續處理
  - 適用於使用者已使用 ppt-generator 生成內容的場景
  
  #### 與 nanobanana-ppt-visualizer 協同
  - nanobanana 生成圖片和播放器
  - ppt-roadshow-generator 使用圖片，新增配音、音效、字幕
  - 適用於使用者已有圖片，需要完整路演影片的場景
  
  ### 可選分支
  - 僅生成結構化文件：執行角色一、角色二
  - 僅生成圖片：執行角色一到角色五
  - 僅生成演講稿：執行角色一到角色六
  - 快速模式：使用預設品牌風格，跳過角色三
  
  ## 資源索引
  - 品牌風格學習：見 [scripts/style_learner.py](scripts/style_learner.py)（用途：學習使用者提供的品牌風格，或載入已有配置）
  - 音訊處理：見 [scripts/audio_processor.py](scripts/audio_processor.py)（用途：TTS 配音、音效、音樂）
  - 字幕生成：見 [scripts/subtitle_generator.py](scripts/subtitle_generator.py)（用途：生成和同步字幕）
  - 影片合成：見 [scripts/roadshow_composer.py](scripts/roadshow_composer.py)（用途：一鍵合成完整影片）
  - 品牌風格指南：見 [references/brand_style_guide.md](references/brand_style_guide.md)（用途：品牌風格學習指南）
  - 設計系統匯入：見 [references/design-system-import-guide.md](references/design-system-import-guide.md)（用途：從 web-design-analyzer 匯入設計系統）
  - 演講稿模板：見 [references/roadshow_script_template.md](references/roadshow_script_template.md)（用途：演講稿寫作參考）
  - 協同指南：見 [references/collaboration_guide.md](references/collaboration_guide.md)（用途：與其他 Skill 協同）
  - 範例音樂：見 [assets/music/](assets/music/)（可選：背景音樂檔案）
  - 品牌風格範例：見 [assets/styles/](assets/styles/)（可選：品牌風格範例）
  
  ## 注意事項
  - 十角色協作流程，確保每一步輸出為下一步輸入
  - 品牌風格學習是保持一致性的關鍵，建議使用者首次使用時提供樣例
  - 配音功能需要 TTS API 金鑰，透過 `skill_credentials` 工具配置
  - 音樂使用 assets/music/ 中的範例或使用者上傳的檔案
  - 影片合成使用 FFmpeg，確保已安裝
  - 支援一次性生成 15-100 頁，風格保持一致
  - 保持與使用者的互動，在關鍵節點（如風格確認）徵求回饋
  
  ## 使用範例
  
  ### 範例 1：從文件生成完整路演影片
  - 功能說明：完整的十角色協作流程
  - 執行方式：智慧體（10 個角色） + 腳本
  - 關鍵參數：文件路徑、品牌樣例（可選）、頁數（如 15 頁）
  - 輸出：完整路演影片（含配音、音效、音樂、字幕）
  
  ### 範例 2：學習品牌風格後生成
  - 功能說明：先學習品牌風格，再生成影片
  - 執行方式：智慧體 + 腳本
  - 流程：
    1. 使用者提供品牌樣例
    2. 品牌風格分析師學習並儲存
    3. 後續生成時自動應用
  
  ### 範例 3：從網頁設計匯入品牌風格（新增）
  - 功能說明：匯入從網頁分析中提取的設計系統，生成風格一致的路演影片
  - 執行方式：web-design-analyzer + ppt-roadshow-generator
  - 流程：
    1. web-design-analyzer 分析網頁截圖
    2. 轉換為 brand_style.json
    3. ppt-roadshow-generator 匯入品牌風格
    4. 生成路演影片
  
  ### 範例 4：與 ppt-generator 協同
  - 功能說明：使用 ppt-generator 的內容，生成路演影片
  - 執行方式：ppt-generator + ppt-roadshow-generator
  - 流程：
    1. ppt-generator 生成 JSON
    2. ppt-roadshow-generator 接收 JSON，繼續處理
  
  ### 範例 5：批次生成 100 頁影片
  - 功能說明：一次性生成 100 頁風格統一的影片
  - 執行方式：智慧體 + 腳本
  - 關鍵：品牌風格學習確保一致性
  - 優勢：風格統一，無需人工介入
  
---

## 這個 Skill 在做什麼

PPT 路演影片全流程產生器，支援品牌風格學習、智慧配音、音效音樂、字幕和一鍵影片合成。可一次性產生 15-100 頁風格統一的完整路演影片。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
