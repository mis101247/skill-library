---
title: "三體影片創作 Skill"
description: "三體影片創作 的佔位 Skill，來源目前只保留檔案位置與補齊說明，實際使用前需要回到來源補上完整內容。"
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
sourcePath: "skills/three-body-video-creator/three-body-video-creator/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/three-body-video-creator/three-body-video-creator/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/three-body-video-creator/three-body-video-creator/SKILL.md"
license: "CC-BY-4.0"
originalName: "three-body-video-creator"
originalDescription: "三體影片創作 的佔位 Skill，來源目前只保留檔案位置與補齊說明，實際使用前需要回到來源補上完整內容。"
activation: "當你需要 三體影片創作 的工作流程時使用。"
useCases:
  - "需要處理「三體影片創作 的佔位 Skill，來源目前只保留檔案位置與補齊說明，實際使用前需要回到來源補上完整內容」這類任務。"
  - "想直接閱讀或複製 three-body-video-creator 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/three-body-video-creator/three-body-video-creator/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
  - "原始 SKILL.md 看起來是佔位檔，實際使用前需要回到來源補齊內容。"
skillBody: |-
  ---
  name: three-body-video-creator
  description: 《三體》賽道AI影片創作工具,提供結構化的多智慧體協作流程、素材生成與影片合成,涵蓋選題深化、視覺設計、音訊生成、影片製作全流程
  dependency:
    python:
      - opencv-python>=4.8.0
      - moviepy>=1.0.3
      - Pillow>=10.0.0
      - edge-tts>=6.1.0
      - requests>=2.28.0
  ---
  
  # 《三體》賽道影片創作工具
  
  ## 任務目標
  - 本Skill用於: 協助創作團隊按照規範化的多智慧體協作流程,完成《三體》主題影片的策劃、製作與合成
  - 能力包含:
    - 選題深化與內容策劃(原著考據、劇情架構、臺詞設計)
    - 視覺呈現設計(場景概念、人物建模、分鏡腳本)
    - 素材生成與音訊製作(配音生成、音效生成、背景音樂生成)
    - 影片合成與輸出(圖片/音訊/字幕合成、品品檢測)
  - 觸發條件: 使用者需要進行《三體》主題影片創作,或需要規範化創作流程指導
  
  ## 前置準備
  - 依賴說明:
    ```
    opencv-python>=4.8.0
    moviepy>=1.0.3
    Pillow>=10.0.0
    ```
  - 非標準檔案/資料夾準備:
    ```bash
    # 建立影片素材目錄
    mkdir -p ./raw-materials/{scenes,characters,audio}
    mkdir -p ./output/{draft,final}
    ```
  
  ## 操作步驟
  
  ### 標準流程(72小時週期)
  
  #### 第一階段:前期籌備(12小時)
  - **步驟1:原著考據與設定提取**
    - 閱讀 [references/three-body-settings.md](references/three-body-settings.md),提取《三體2》威懾紀元核心設定
    - 建立18小時時間線錨點,明確關鍵人物(羅輯、聯合國秘書長、三體監聽員)的行為準則
    - 輸出: 《18小時時間線錨點表》《人物行為合規清單》
  
  - **步驟2:劇情架構設計**
    - 搭建"三線並行"敘事框架(羅輯個人線+聯合國權力線+三體試探線)
    - 設計3個核心衝突點和1個情感高潮
    - 輸出: 《三線平行敘事分鏡大綱》《情緒曲線圖》
    - 參考 [references/storyboard-template.md](references/storyboard-template.md)
  
  - **步驟3:臺詞創作**
    - 基於人物性格撰寫臺詞:
      - 羅輯:疲憊卻決絕,低沉平靜,略帶沙啞
      - 聯合國秘書長:虛偽焦慮,語速偏快
      - 三體監聽員:冰冷客觀,電子合成音風格
    - 輸出: 《角色對白腳本(含語氣/停頓標記)》
    - 參考 [references/character-profiles.md](references/character-profiles.md)
  
  #### 第二階段:視覺製作(24小時)
  - **步驟4:視覺風格規範制定**
    - 閱讀 [references/visual-style-guide.md](references/visual-style-guide.md)
    - 確定色調體系(冷灰#333333/科技藍#0099FF)、光影風格、構圖原則
    - 輸出: 《視覺風格指南》《場景/人物設計規範》
  
  - **步驟5:場景設計**
    - 設計3個核心場景:
      - 威懾控制室(圓柱形沉浸式終端艙,極簡工業風)
      - PDC緊急會議廳(圓形穹頂,莊重卻空洞)
      - 三體監聽站(地下密閉結構,非歐幾里得幾何排列)
    - 輸出: 《場景概念圖提示詞》《場景要素清單》
    - 參考 [assets/scene-examples/](assets/scene-examples/)
  
  - **步驟6:人物一致性建模**
    - 羅輯形象錨定:中年40歲左右,面色蒼白,眼神銳利卻疲憊,頭髮微亂
    - 生成不同神態版本(掌控者/觀察者/守護者)
    - 輸出: 《羅輯標準形象錨定圖集》《人物狀態對照表》
    - 參考 [assets/character-reference/](assets/character-reference/)
  
  - **步驟7:分鏡腳本細化**
    - 將劇情大綱轉化為專業分鏡,標註:
      - 鏡頭型別(特寫/中景/全景)
      - 運鏡方式(固定/推軌/切鏡)
      - 時長(0.5-1秒/鏡頭)
      - 光影效果
    - 輸出: 《電影分鏡腳本(含時間碼)》《渲染後設資料》
    - 參考 [references/storyboard-template.md](references/storyboard-template.md)
  
  - **步驟8:圖片生成**
    - 根據分鏡腳本生成1080P關鍵影格序列圖
    - 確保風格統一(冷色調、極簡科技感)
    - 輸出: 《1080P關鍵影格序列圖》
  
  #### 第三階段:音訊與剪輯(24小時)
  - **步驟9:音訊設計**
    - 場景音效:
      - 威懾系統:低沉持續電子音
      - 三體訊號:尖銳短促脈衝音
      - 聯合國會場:輕微交談聲、紙張摩擦聲
    - BGM:壓抑純音樂,前期鋼琴+絃樂,後期加入鼓點
    - 輸出: 《音效設計說明》《BGM情緒-時間對應表》
  
  - **步驟10:配音指導**
    - 制定配音風格指南:
      - 羅輯:低沉平靜,語速緩慢,略帶沙啞
      - 聯合國秘書長:虛偽焦慮,語速偏快
      - 三體監聽員:電子合成音,冰冷無起伏
    - 輸出: 《配音角色卡》《配音音訊檔案》
  
  - **步驟11:素材生成與影片合成**
    - 配音生成:
      - 呼叫 `scripts/voice_generator.py` 生成角色配音
      - 參數: `--input <旁白資料JSON> --output ./output/audio/voice`
      - 使用 Edge-TTS 引擎,支援多音色
      - 輸出: 配音檔案到 `./output/audio/voice/`
    - 音效生成:
      - 呼叫 `scripts/sound_generator.py --type sound` 生成音效
      - 參數: `--input <音效配置JSON> --output ./output/audio/sound_effects`
      - 支援轉場、衝擊、動作、環境等音效型別
      - 輸出: 音效檔案到 `./output/audio/sound_effects/`
    - 背景音樂生成:
      - 呼叫 `scripts/sound_generator.py --type music` 生成背景音樂
      - 參數: `--input <音樂配置JSON> --output ./output/audio/background_music`
      - 支援 Suno API(可選)或佔位實現
      - 輸出: 背景音樂到 `./output/audio/background_music/`
    - 影片合成:
      - 呼叫 `scripts/video_compositor.py` 合成最終影片
      - 參數: `--images <圖片目錄> --audio <音訊目錄> --subtitles <字幕檔案> --output <輸出路徑>`
      - 合成圖片、配音、音效、背景音樂、字幕
      - 輸出: 最終影片檔案 `./output/final/video.mp4`
    - 輸出: 《成片影片檔案》
  
  - **步驟12:原著合規檢測**
    - 檢測維度:
      - 人物性格是否符合原著
      - 威懾系統邏輯是否正確
      - 劇情推進是否合理
    - 輸出: 《合規性報告》《不合規項修改建議》
  
  - **步驟13:技術指標檢測**
    - 呼叫 `scripts/quality_checker.py` 檢測:
      - 影片解析度、時長、幀率
      - 音訊參數(取樣率、聲道)
      - 字幕格式規範性
    - 輸出: 《技術品品檢測報告》
  
  - **步驟14:B站適配最佳化**
    - 標題:含核心關鍵詞(三體/羅輯/威懾紀元/18小時),加入情緒詞與懸念
    - 封面:羅輯特寫+威懾控制屏背景,冷色調,突出懸念
    - 標籤:#三體AI創作大賽 #三體2 #威懾紀元 #羅輯 #科幻劇情
    - 開頭鉤子:前3秒用三體訊號+羅輯特寫吸引觀眾
    - 輸出: 《熱門款標題/封面/標籤方案》《前5秒鉤子腳本》
  
  - **步驟15:最終品品檢測**
    - 五維評審(每項0-20分,總分100分):
      1. 畫面品質(場景/人物貼合度、清晰度)
      2. 劇情流暢度(三線敘事銜接、節奏控制)
      3. 音效適配(BGM與劇情、音效與場景)
      4. 原著合規(設定、人物、邏輯)
      5. B站適配(標題、封面、鉤子、標籤)
    - 總分≥80分為合格
    - 輸出: 《最終稽核報告》《發布許可》
  
  ### 可選分支
  - 當 **原著合規問題嚴重** → 觸發步驟1-3回改,重新考據設定
  - 當 **視覺風格不一致** → 觸發步驟4-8回改,重新生成場景/人物
  - 當 **素材生成失敗** → 觸發步驟11重新生成配音/音效/音樂
  - 當 **技術指標不達標** → 觸發步驟13重新檢測,調整參數重新剪輯
  
  ## 資源索引
  - 必要腳本:
    - [scripts/quality_checker.py](scripts/quality_checker.py) - 影片技術指標檢測工具
    - [scripts/voice_generator.py](scripts/voice_generator.py) - 配音生成工具(Edge-TTS)
    - [scripts/sound_generator.py](scripts/sound_generator.py) - 音效和背景音樂生成工具
    - [scripts/video_compositor.py](scripts/video_compositor.py) - 影片合成工具
    - [scripts/error_handler.py](scripts/error_handler.py) - 錯誤處理和重試機制
  - 領域參考:
    - [references/three-body-settings.md](references/three-body-settings.md) - 《三體》原著設定與威懾紀元規則(何時讀取:前期籌備階段)
    - [references/visual-style-guide.md](references/visual-style-guide.md) - 視覺風格規範與設計原則(何時讀取:視覺製作階段)
    - [references/storyboard-template.md](references/storyboard-template.md) - 分鏡腳本標準模板(何時讀取:分鏡設計階段)
    - [references/character-profiles.md](references/character-profiles.md) - 人物檔案與行為準則(何時讀取:臺詞創作/人物建模階段)
  - 輸出資產:
    - [assets/scene-examples/](assets/scene-examples/) - 場景設計提示詞範例(直接用於生成場景描述)
    - [assets/character-reference/](assets/character-reference/) - 人物形象描述參考(直接用於建模指導)
    - [assets/ui-components/](assets/ui-components/) - 介面元素設計規範(直接用於UI設計)
  
  ## 注意事項
  - 優先使用智慧體的創作能力,避免為簡單任務編寫腳本
  - 腳本僅用於技術性檢測和驗證(品品檢測、格式驗證)
  - 充分利用references中的參考文件,確保內容符合原著設定
  - 所有創作內容必須經過原著合規檢測,避免OOC問題
  - 保持與使用者偏好的一致性,根據使用者回饋調整創作方向
  
  ## 使用範例
  
  ### 範例1:快速創作流程
  ```bash
  # 使用者請求: "幫我創作一個《三體》威懾紀元的8分鐘影片"
  
  # 智慧體執行流程:
  1. 讀取 references/three-body-settings.md,提取核心設定
  2. 按照步驟1-3完成前期籌備(時間線、劇情大綱、臺詞)
  3. 按照步驟4-8完成視覺製作(場景、人物、分鏡)
  4. 按照步驟9-11完成音訊與剪輯
  5. 呼叫 scripts/quality_checker.py 檢測技術指標
  6. 完成步驟12-15的品品檢測與最佳化
  ```
  
  ### 範例2:品品檢測
  ```python
  # 檢測影片技術指標
  from scripts.quality_checker import check_video_quality
  
  result = check_video_quality(
      video_path="./output/final/video.mp4",
      expected_resolution=(1920, 1080),
      expected_duration=510,  # 8分30秒
      expected_fps=30
  )
  
  print(result)
  # 輸出: {'resolution': True, 'duration': True, 'fps': True, 'overall': True}
  ```
  
  ### 範例3:臺詞創作
  ```bash
  # 使用者請求: "為羅輯寫一段移交威懾權的臺詞"
  
  # 智慧體執行:
  1. 讀取 references/character-profiles.md,瞭解羅輯性格
  2. 參考 references/three-body-settings.md,確保符合原著設定
  3. 生成臺詞:
     "控制權移交給你們了。但記住,這是雙刃劍——它在你們手中,也在我手中。"
     (標註:語氣低沉平靜,語速緩慢,略帶疲憊但眼神銳利)
  ```
  
---

## 這個 Skill 在做什麼

三體影片創作 的佔位 Skill，來源目前只保留檔案位置與補齊說明，實際使用前需要回到來源補上完整內容。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
