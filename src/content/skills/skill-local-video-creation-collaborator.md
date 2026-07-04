---
title: "協作式影片創作 Skill"
description: "影品智創多智慧體協同影片創作管理工具,提供11個智慧體結構化分工、5階段協同流程、品質管控標準與資料回饋機制,解決生圖失真、影片合成瑕疵等問題,確保輸出統一可控"
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
sourcePath: "skills/video-creation-collaborator/video-creation-collaborator/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/video-creation-collaborator/video-creation-collaborator/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/video-creation-collaborator/video-creation-collaborator/SKILL.md"
license: "CC-BY-4.0"
originalName: "video-creation-collaborator"
originalDescription: "影品智創多智慧體協同影片創作管理工具,提供11個智慧體結構化分工、5階段協同流程、品質管控標準與資料回饋機制,解決生圖失真、影片合成瑕疵等問題,確保輸出統一可控"
activation: "當你需要 協作式影片創作 的工作流程時使用。"
useCases:
  - "需要處理「影品智創多智慧體協同影片創作管理工具,提供11個智慧體結構化分工、5階段協同流程、品質管控標準與資料回饋機制,解決生圖失真、影片合成瑕疵等問題,確保輸出統一可控」這類任務。"
  - "想直接閱讀或複製 video-creation-collaborator 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/video-creation-collaborator/video-creation-collaborator/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: video-creation-collaborator
  description: 影品智創多智慧體協同影片創作管理工具,提供11個智慧體結構化分工、5階段協同流程、品質管控標準與資料回饋機制,解決生圖失真、影片合成瑕疵等問題,確保輸出統一可控
  dependency:
    python:
      - opencv-python>=4.8.0
      - pillow>=10.0.0
      - moviepy>=1.0.3
      - numpy>=1.24.0
  ---
  
  # 影品智創 - 多智慧體協同影片創作管理
  
  ## 任務目標
  - 本Skill用於: 規範化和指導10個智慧體的協同創作流程,解決生圖失真(多肢體/畸形)、影片合成瑕疵等問題
  - 能力包含:
    - 11個智慧體結構化分工(文案創作/故事策劃/腳本創作/分鏡導演/分鏡畫師/字幕師/配音師/音效師/影片工程師/品檢/資料回饋)
    - 5階段協同流程管理(需求承接→內容創作→生圖創作→音訊字幕→影片合成→全流程品檢→資料迭代)
    - 品質管控與閉環回饋(前置品檢攔截、資料沉澱迭代)
    - 素材生成支援(圖片/音訊/字幕/音樂)
    - 技術檢測工具支援(圖片品質、影片品質、音畫同步)
  - 觸發條件: 使用者需要進行短影音創作,或需要規範化多智慧體協同流程
  
  ## 前置準備
  - 依賴說明:
    ```
    opencv-python>=4.8.0
    pillow>=10.0.0
    moviepy>=1.0.3
    numpy>=1.24.0
    ```
  - 非標準檔案/資料夾準備:
    ```bash
    # 建立工作目錄
    mkdir -p ./input/{materials,scripts}
    mkdir -p ./output/{drafts,storyboards,final}
    mkdir -p ./cache/{images,audio}
    ```
  
  ## 操作步驟
  
  ### 標準流程(5個階段,10個智慧體)
  
  #### 第一階段: 需求承接與內容框架搭建
  
  **觸發節點**: 使用者輸入核心需求(商品資訊+影片需求)
  
  **步驟1: 文案創作師智慧體(首節點)**
  - 職責: 基於商品資訊提煉核心賣點,生成適配短影音的文案
  - 輸入: 商品品類、核心賣點、目標受眾、影片風格、時長
  - 輸出: 
    - 核心Slogan(8-12字,簡潔有力)
    - 分鏡適配文案(3-5句,每句4-8字)
  - 品質標準: 無歧義、無誇大,貼合影片調性
  - 下一級觸發: 立即觸發【故事策劃師】、【字幕師】(暫存)
  
  **步驟2: 故事策劃師智慧體**
  - 職責: 基於賣點、文案,設計適配短影音時長的場景化故事線
  - 輸入: Slogan、分鏡文案、商品資訊、影片時長、風格
  - 輸出: 
    - 場景化故事線(鏡頭拆分、場景/動作標註)
    - 鏡頭數量(30秒8-10個、45秒12-15個、60秒15-18個)
  - 品質標準: 邏輯連貫,時長嚴格匹配,無無關場景
  - 下一級觸發: 立即觸發【腳本創作師】
  
  **步驟3: 腳本創作師智慧體**
  - 職責: 將故事線轉化為標準化、可執行的分鏡腳本
  - 輸入: 故事線、文案、影片時長、解析度、比例
  - 輸出: 
    - 標準化分鏡腳本(鏡頭序號、時長、場景描述、畫面動作、文案、音效備註)
    - 畫面動作描述(明確人體肢體姿態,規避模糊表述)
  - 品質標準: 時長精準分配,畫面動作具體,格式統一
  - 下一級觸發: 立即觸發【分鏡導演】、【分鏡畫師】、【字幕師】、【音效師】
  
  #### 第二階段: 視覺內容創作與品檢
  
  **觸發節點**: 分鏡腳本確認
  
  **步驟4: 分鏡導演智慧體**
  - 職責: 規劃每個鏡頭的畫面細節、光影、構圖,為分鏡畫師提供精準依據
  - 輸入: 分鏡腳本、商品細節圖(如有)、影片風格
  - 輸出: 
    - 鏡頭畫面規範(構圖/光影/色調/肢體規範/商品細節)
    - 負面規避清單(禁止多餘肢體、畸形、虛化等)
  - 品質標準: 構圖清晰,光影均勻,肢體規範,商品細節明確
  - 下一級觸發: 立即觸發【分鏡畫師】
  
  **步驟5: 分鏡畫師智慧體**
  - 職責: 基於畫面規範,生成高品質、無瑕疵的分鏡圖片
  - 輸入: 畫面描述、分鏡腳本、商品資訊
  - 輸出: 1080P合格分鏡圖片(單張對應單個鏡頭,命名規範)
  - 品質標準: 
    - 人體結構正常(無多餘肢體/畸形/重影)
    - 商品細節精準(無變形/模糊)
    - 畫質細膩(1080P,無顆粒感)
  - 負面規避: 禁止多餘肢體、手部畸形、商品變形、畫面噪點等
  - 下一級觸發: 
    - 圖片生成後,觸發【影片工程師】素材預處理
    - 同時觸發【品檢智慧體】分鏡圖片專項品檢
  
  #### 第三階段: 音訊字幕創作(並行執行)
  
  **觸發節點**: 分鏡腳本確認(可並行啟動,無需等待視覺內容)
  
  **步驟6: 配音師智慧體**
  - 職責: 根據分鏡文案生成高品質旁白/配音
  - 輸入: 分鏡文案、影片風格、情感基調
  - 輸出:
    - 旁白文字(與分鏡文案對應,可適當口語化)
    - 音色建議(活力男聲/專業女聲/穩重男聲/親切女聲等)
    - 語速要求(中等/稍快/稍慢)
    - 情感標註(積極/專業/沉穩/親切等)
  - 品質標準: 語音自然流暢,情感貼合場景,無明顯機械感
  - 下一級觸發: 輸出同步至【音效師】,呼叫`audio_generator.py`生成音訊檔案
  
  **步驟7: 字幕師智慧體**
  - 職責: 創作適配畫面的字幕,確保顯示效果與可讀性
  - 輸入: 分鏡文案、分鏡腳本、影片風格、畫面比例
  - 輸出: 
    - 字幕資訊包(文字+對應鏡頭時長+疊加位置)
    - 格式規範(字型/字號/顏色/位置)
  - 品質標準: 無錯別字,字數適配(每秒1-2字),避開商品主體
  - 下一級觸發: 輸出同步至【影片工程師】
  
  **步驟8: 音效師智慧體**
  - 職責: 推薦適配的背景音樂與場景音效,確保音畫協調
  - 輸入: 分鏡腳本、影片風格、時長、核心場景
  - 輸出: 
    - 音效方案包(背景音樂+場景音效+時間節點+音量參數)
    - 音效名稱、風格描述、時長、音量建議
  - 品質標準: 風格貼合,節奏匹配,音量適中,無版權問題
  - 下一級觸發: 輸出同步至【影片工程師】
  
  #### 第四階段: 影片合成與成品品檢
  
  **觸發節點**: 分鏡圖片品檢合格
  
  **步驟9: 影片工程師智慧體**
  - 職責: 基於各智慧體輸出素材,完成高品質影片合成
  - 輸入: 合格分鏡圖片、字幕資訊、音效方案
  - 輸出: 合成後的MP4成品影片
  - 品質標準: 
    - 素材預處理(呼叫品品檢測腳本,識別瑕疵)
    - 合成參數(1080P, 25fps, 8Mbps,無黑邊/卡頓)
    - 轉場效果(淡入淡出,0.3-0.5秒,過渡自然)
    - 音畫同步(音訊偏移≤0.1秒)
  - 下一級觸發: 成品輸出後立即觸發【品檢智慧體】
  
  **步驟10: 品檢智慧體(全流程穿插)**
  - 職責: 對各智慧體輸出物進行全環節品檢,攔截瑕疵,推動整改
  - 輸入: 各環節輸出物、品質標準、負面規避清單
  - 輸出: 
    - 分環節品檢報告(合格/不合格,瑕疵型別,整改建議)
    - 品檢臺賬(瑕疵資料、整改結果、合格率)
  - 品檢維度:
    - 內容層(文案/故事線/腳本/字幕)
    - 視覺層(分鏡圖片/成品影片)
    - 音訊層(背景音樂/音效/音畫同步)
    - 格式層(比例/腳本格式/影片參數)
  - 處理規則:
    - 輕微瑕疵(文案語序微調)→直接回饋最佳化
    - 重大瑕疵(多肢體/畫面撕裂)→攔截輸出,要求重製
    - 前置品檢→分鏡圖片/成品影片強制品檢,不合格駁回
  - 下一級觸發: 
    - 不合格→觸發對應智慧體重做
    - 合格→觸發【資料回饋智慧體】
  
  #### 第五階段: 資料沉澱與迭代最佳化
  
  **觸發節點**: 全流程品檢合格
  
  **步驟11: 資料回饋智慧體**
  - 職責: 收集分析全流程資料,輸出迭代建議,最佳化智慧體提示詞與協同邏輯
  - 輸入: 品檢臺賬、創作耗時資料、使用者回饋
  - 輸出: 
    - 資料統計報告(合格率、高頻瑕疵、創作耗時、整改率)
    - 迭代最佳化建議(針對高頻瑕疵最佳化提示詞、調整協同流程)
    - 資料沉澱(瑕疵型別-最佳化方案-效果驗證閉環)
  - 分析維度:
    - 瑕疵分析(TOP3高頻瑕疵,定位根因)
    - 效率分析(識別流程瓶頸)
    - 最佳化效果(驗證迭代有效性)
  - 下一級觸發: 輸出同步至技能開發端,更新智慧體配置,完成迭代閉環
  
  ## 並行協同與閉環管控
  
  ### 並行執行
  - **字幕師、音效師**可在腳本創作師輸出分鏡腳本後並行啟動,無需等待視覺內容完成
  - **效率提升**: 減少等待時間,整體創作週期縮短
  
  ### 閉環管控
  - **所有輸出物需經品檢智慧體校驗**合格後方可進入下一環節
  - **重大瑕疵直接攔截**,避免問題流轉
  - **跟蹤整改結果**,確保100%解決
  
  ### 迭代聯動
  - **資料回饋智慧體的最佳化建議**直接作用於各智慧體底層配置
  - **形成"創作-品檢-最佳化"**持續迭代機制
  
  ## 品品檢測工具使用
  
  ### 圖片品品檢測
  ```bash
  # 呼叫圖片品品檢測腳本
  python scripts/image_quality_checker.py --image ./cache/images/shot_001.jpg --resolution 1920x1080
  ```
  
  檢測維度:
  - 肢體異常(多餘肢體/畸形/重影)
  - 畫面品質(模糊/噪點/變形)
  - 商品細節(紋理/輪廓/按鍵)
  - 解析度/比例
  
  ### 影片品品檢測
  ```bash
  # 呼叫影片品品檢測腳本
  python scripts/video_quality_checker.py --video ./output/final/video.mp4 --resolution 1920x1080 --duration 30 --fps 25
  ```
  
  檢測維度:
  - 解析度/時長/幀率/位元速率
  - 畫面品質(卡頓/撕裂/轉場瑕疵)
  - 音訊品質(清晰度/雜音)
  - 音畫同步(偏移≤0.1秒)
  - 字幕遮擋檢測
  
  ## 素材生成與影片合成流程
  
  ### 素材生成流程
  
  #### 1. 圖片素材生成
  **觸發時機**: 分鏡畫師智慧體完成畫面設計後
  
  **執行步驟**:
  ```bash
  # 準備分鏡腳本JSON檔案
  cat > ./scripts/storyboard.json << 'EOF'
  {
    "shots": [
      {
        "shot_id": "L01",
        "description": "智慧手錶特寫,手指滑動螢幕",
        "duration": 3.0,
        "resolution": "1920x1080"
      }
    ],
    "style": "科技風,冷色調,清晰銳利"
  }
  EOF
  
  # 呼叫圖片生成腳本
  python scripts/image_generator.py \
    --storyboard ./scripts/storyboard.json \
    --output ./output/images \
    --style "科技風,冷色調"
  ```
  
  **輸出規範**:
  - 路徑: `./output/images/shot_{shot_id}.jpg`
  - 格式: JPG, 1080P (1920x1080)
  - 品質要求: 無肢體異常,商品細節清晰,畫質細膩
  
  **參考**: [references/asset-specifications.md](references/asset-specifications.md) - 圖片素材規範
  
  #### 2. 音訊素材生成
  **觸發時機**: 配音師智慧體完成旁白文字,音效師智慧體完成音效方案後
  
  **執行步驟**:
  ```bash
  # 生成旁白音訊
  python scripts/audio_generator.py \
    --mode narration \
    --text "腕上未來,觸手可及" \
    --voice "professional_male" \
    --output ./output/audio/narration_S01.wav
  
  # 生成背景音樂
  python scripts/music_generator.py \
    --style "科技風,輕快" \
    --duration 30 \
    --output ./output/audio/background_music.wav
  
  # 混合音訊(旁白+背景+音效)
  python scripts/audio_generator.py \
    --mode mix \
    --narration ./output/audio/narration_S01.wav \
    --background ./output/audio/background_music.wav \
    --effects ./output/audio/sound_effects/ \
    --output ./output/audio/merged_audio.wav
  ```
  
  **輸出規範**:
  - 路徑: `./output/audio/`
  - 格式: WAV (44.1kHz, 16bit/24bit)
  - 品質要求: 無雜音,音量平衡,音質清晰
  
  **參考**: [references/asset-specifications.md](references/asset-specifications.md) - 音訊素材規範
  
  #### 3. 字幕素材生成
  **觸發時機**: 字幕師智慧體完成字幕設計後
  
  **執行步驟**:
  ```bash
  # 準備分鏡腳本
  cat > ./scripts/storyboard.json << 'EOF'
  {
    "shots": [
      {
        "shot_id": "L01",
        "duration": 3.0,
        "text": "腕上未來"
      },
      {
        "shot_id": "L02",
        "duration": 3.0,
        "text": "觸手可及"
      }
    ]
  }
  EOF
  
  # 生成SRT字幕
  python scripts/subtitle_generator.py \
    --storyboard ./scripts/storyboard.json \
    --format srt \
    --output ./output/subtitles/subtitle.srt
  ```
  
  **輸出規範**:
  - 路徑: `./output/subtitles/subtitle.srt` 或 `.ass`
  - 格式: SRT/ASS (UTF-8編碼)
  - 品質要求: 無錯別字,字數適配,位置無遮擋
  
  **參考**: [references/asset-specifications.md](references/asset-specifications.md) - 字幕素材規範
  
  ### 影片合成流程
  
  **觸發時機**: 所有素材(圖片/音訊/字幕)準備完成並品檢合格後
  
  **執行步驟**:
  ```bash
  # 準備專案配置
  cat > ./scripts/project_config.json << 'EOF'
  {
    "images_dir": "./output/images",
    "audio_file": "./output/audio/merged_audio.wav",
    "subtitle_file": "./output/subtitles/subtitle.srt",
    "shots": [
      {
        "shot_id": "L01",
        "duration": 3.0,
        "transition": "fade"
      },
      {
        "shot_id": "L02",
        "duration": 3.0,
        "transition": "cut"
      }
    ],
    "width": 1920,
    "height": 1080,
    "fps": 25,
    "duration": 30,
    "bitrate": "8000k"
  }
  EOF
  
  # 驗證專案配置
  python scripts/video_compositor.py \
    --config ./scripts/project_config.json \
    --output ./output/temp/validate.mp4 \
    --validate_only
  
  # 合成最終影片
  python scripts/video_compositor.py \
    --config ./scripts/project_config.json \
    --output ./output/final/final_video_$(date +%Y%m%d).mp4
  ```
  
  **輸出規範**:
  - 路徑: `./output/final/final_video_{日期}.mp4`
  - 格式: MP4 (H.264編碼)
  - 參數: 1080P, 25fps, 8Mbps
  - 品質要求: 無卡頓,音畫同步≤0.1秒,字幕同步無延遲
  
  **參考**: [references/asset-specifications.md](references/asset-specifications.md) - 影片輸出規範
  
  ### 品品檢測流程
  
  #### 1. 圖片品品檢測
  ```bash
  python scripts/image_quality_checker.py \
    --image ./output/images/shot_L01.jpg \
    --resolution 1920x1080 \
    --check_limb_anomaly \
    --check_blur \
    --check_deformation
  ```
  
  #### 2. 音訊品品檢測
  ```bash
  python scripts/audio_quality_checker.py \
    --audio ./output/audio/narration_S01.wav \
    --sample_rate 44100 \
    --check_noise
  ```
  
  #### 3. 影片品品檢測
  ```bash
  python scripts/video_quality_checker.py \
    --video ./output/final/final_video_20240122.mp4 \
    --resolution 1920x1080 \
    --duration 30 \
    --fps 25 \
    --check_sync
  ```
  
  **參考**: [references/quality-standards.md](references/quality-standards.md) - 品檢標準
  
  ## 資源索引
  - 必要腳本:
    - [scripts/image_generator.py](scripts/image_generator.py) - 圖片生成腳本(根據分鏡腳本生成1080P圖片)
    - [scripts/audio_generator.py](scripts/audio_generator.py) - 音訊生成腳本(TTS旁白+背景音樂混合)
    - [scripts/subtitle_generator.py](scripts/subtitle_generator.py) - 字幕生成腳本(SRT/ASS格式)
    - [scripts/music_generator.py](scripts/music_generator.py) - 背景音樂生成腳本
    - [scripts/video_compositor.py](scripts/video_compositor.py) - 影片合成主腳本(整合圖片/音訊/字幕)
    - [scripts/image_quality_checker.py](scripts/image_quality_checker.py) - 圖片品品檢測工具(肢體異常/模糊/變形)
    - [scripts/video_quality_checker.py](scripts/video_quality_checker.py) - 影片品品檢測工具(含音畫同步)
  - 領域參考:
    - [references/agent-prompts.md](references/agent-prompts.md) - 11個智慧體的詳細提示詞模板
    - [references/quality-standards.md](references/quality-standards.md) - 品檢標準與負面規避清單
    - [references/asset-specifications.md](references/asset-specifications.md) - 素材生成與輸出規範(圖片/音訊/字幕/影片)
    - [references/data-analysis.md](references/data-analysis.md) - 資料統計與迭代最佳化模板
  - 輸出資產:
    - [assets/templates/storyboard-template.md](assets/templates/storyboard-template.md) - 分鏡腳本標準模板
    - [assets/reports/quality-report-template.md](assets/reports/quality-report-template.md) - 品檢報告模板
  
  ## 注意事項
  - **智慧體協同**: 嚴格按照11個智慧體的觸發順序和協同規則執行
  - **素材規範**: 所有素材生成必須遵循[asset-specifications.md](references/asset-specifications.md)中的規範
  - **影片合成**: 合成前必須確保所有素材(圖片/音訊/字幕)就位並品檢合格
  - **品質優先**: 所有輸出物必須經品檢智慧體校驗,重大瑕疵直接攔截
  - **閉環迭代**: 資料回饋智慧體的最佳化建議必須應用於下一輪創作
  - **技術檢測**: 影片合成前必須呼叫品品檢測腳本,素材不合格不得合成
  - **資料沉澱**: 品檢臺賬和創作資料必須完整記錄,用於迭代最佳化
  
  ## 使用範例
  
  ### 範例1:完整創作流程
  ```bash
  # 使用者請求: "為智慧手錶創作30秒短影音,科技風,目標年輕人"
  
  # 智慧體執行流程:
  1. 文案創作師: 輸出Slogan "腕上未來,觸手可及" + 分鏡文案
  2. 故事策劃師: 輸出9個鏡頭的故事線
  3. 腳本創作師: 輸出標準化分鏡腳本(時長、場景、動作、文案)
  4. 分鏡導演: 輸出9個鏡頭的畫面規範 + 負面規避清單
  5. 分鏡畫師: 生成9張1080P分鏡圖片(呼叫品品檢測腳本)
  6. 字幕師: 輸出字幕資訊包(並行執行)
  7. 音效師: 輸出音效方案包(並行執行)
  8. 品檢智慧體: 檢測分鏡圖片,發現第3張圖片肢體異常,回饋分鏡畫師重繪
  9. 分鏡畫師: 重新生成第3張圖片,品檢合格
  10. 影片工程師: 合成影片(呼叫影片品品檢測腳本)
  11. 品檢智慧體: 檢測成品影片,音畫同步0.08秒,合格
  12. 資料回饋: 輸出資料統計報告 + 迭代建議
  ```
  
  ### 範例2:圖片品品檢測
  ```python
  from scripts.image_quality_checker import check_image_quality
  
  result = check_image_quality(
      image_path="./cache/images/shot_003.jpg",
      expected_resolution=(1920, 1080),
      check_limb_anomaly=True,
      check_blur=True,
      check_deformation=True
  )
  
  if not result['overall']:
      print(f"發現瑕疵: {result['issues']}")
      # 觸發分鏡畫師重繪
  else:
      print("圖片品質合格,可用於合成")
  ```
  
  ### 範例3:品檢閉環範例
  ```
  品檢智慧體檢測:
  - 分鏡圖片: 合格率92%(10張圖片,8張合格,1張輕微瑕疵,1張重大瑕疵)
    - 重大瑕疵: shot_007.jpg 發現多餘肢體,駁回分鏡畫師重繪
    - 輕微瑕疵: shot_003.jpg 輕微模糊,回饋最佳化
  
  成品影片: 合格
  - 解析度: 1920x1080 ✓
  - 幀率: 25fps ✓
  - 音畫同步: 0.08秒 ✓
  - 字幕遮擋: 無 ✓
  
  資料回饋智慧體:
  - 高頻瑕疵TOP3: 
    1. 肢體異常(佔比8%) → 最佳化分鏡導演/畫師提示詞
    2. 輕微模糊(佔比6%) → 調整畫質標準
    3. 字幕位置偏差(佔比4%) → 最佳化字幕師模板
  - 效率瓶頸: 分鏡畫師重繪耗時過長 → 調整前置品檢規則
  ```
  
---

## 這個 Skill 在做什麼

影品智創多智慧體協同影片創作管理工具,提供11個智慧體結構化分工、5階段協同流程、品質管控標準與資料回饋機制,解決生圖失真、影片合成瑕疵等問題,確保輸出統一可控

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
