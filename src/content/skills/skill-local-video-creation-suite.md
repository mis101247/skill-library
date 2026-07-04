---
title: "影片創作套件 Skill"
description: "影片創作套件 的佔位 Skill，來源目前只保留檔案位置與補齊說明，實際使用前需要回到來源補上完整內容。"
category: "media"
tags:
  - "skill-store"
  - "local-skill"
  - "media"
featured: true
entryType: "local"
publishedAt: 2026-07-01
updatedAt: 2026-07-01
sourceRepo: "skill"
sourceRepoUrl: "https://github.com/anbeime/skill"
sourcePath: "skills/video-creation-suite/video-creation-suite/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/video-creation-suite/video-creation-suite/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/video-creation-suite/video-creation-suite/SKILL.md"
license: "CC-BY-4.0"
originalName: "video-creation-suite"
originalDescription: "影片創作套件 的佔位 Skill，來源目前只保留檔案位置與補齊說明，實際使用前需要回到來源補上完整內容。"
activation: "當你需要 影片創作套件 的工作流程時使用。"
useCases:
  - "需要處理「影片創作套件 的佔位 Skill，來源目前只保留檔案位置與補齊說明，實際使用前需要回到來源補上完整內容」這類任務。"
  - "想直接閱讀或複製 video-creation-suite 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/video-creation-suite/video-creation-suite/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
  - "原始 SKILL.md 看起來是佔位檔，實際使用前需要回到來源補齊內容。"
skillBody: |-
  ---
  name: video-creation-suite
  description: 完整的影片創作套件，支援原創創作、影片二創、影片分析三種模式，整合Coze Bot API、Edge-TTS、Suno API，涵蓋多智慧體協同、素材生成、影片合成全流程
  dependency:
    python:
      - opencv-python>=4.8.0
      - pillow>=10.0.0
      - moviepy>=1.0.3
      - numpy>=1.24.0
      - requests>=2.28.0
      - edge-tts>=6.1.0
    system:
      - pip install -r requirements.txt 2>/dev/null || true
  ---
  
  # 影片創作套件
  
  ## 任務目標
  - 本 Skill 用於: 提供完整的影片創作能力，支援三種創作模式
  - 能力包含:
    - **模式一: 原創創作**: 11個智慧體協同原創影片創作（《三體》IP創作、通用原創）
    - **模式二: 影片二創**: 從原影片反推到新影片合成的完整二創流程
    - **模式三: 影片分析**: 影片抽影格、視覺分析、內容提取
    - **技術能力**: 配音生成、音效生成、背景音樂生成、影片合成
  - 觸發條件: 使用者需要進行影片創作（原創/二創/分析）
  
  ## 三種創作模式
  
  ### 模式一: 原創創作
  - **適用場景**: 從零開始創作原創影片
  - **子模式**:
    - 《三體》IP創作（專門針對《三體》IP）
    - 通用多智慧體協同（11個智慧體分工）
  - **流程**: 選題策劃 → 視覺設計 → 素材生成 → 影片合成 → 品品檢測
  
  ### 模式二: 影片二創
  - **適用場景**: 基於現有影片進行二次創作
  - **流程**: 影片反推分析 → 素材生成 → 影片合成 → 檔案下載
  - **能力**: 影片抽影格、視覺分析、圖片生成、配音、音效、音樂、合成
  
  ### 模式三: 影片分析
  - **適用場景**: 分析影片內容、提取分鏡參考、生成創作提示詞
  - **流程**: 影片抽影格 → 視覺分析 → 結構化輸出
  - **能力**: 抽影格、視覺模型呼叫、提示詞生成
  
  ## 前置準備
  
  ### 環境依賴
  ```
  opencv-python>=4.8.0
  pillow>=10.0.0
  moviepy>=1.0.3
  numpy>=1.24.0
  requests>=2.28.0
  edge-tts>=6.1.0
  ```
  
  ### API 配置（可選）
  - **Coze Bot API**: 視覺分析
    - 環境變數: `COZE_BOT_ID`, `COZE_API_KEY`
  - **Edge-TTS**: 配音生成
    - 安裝: `pip install edge-tts`
  - **Suno API**: 背景音樂生成
    - 環境變數: `SUNO_API_KEY`
    - 三種模式: 開發者、使用者、佔位
  
  ## 操作步驟
  
  ### 模式選擇
  
  智慧體根據使用者輸入自動選擇模式：
  
  #### 判斷原創創作模式
  - 使用者提到"創作《三體》影片"、"三體IP創作" → 《三體》IP創作
  - 使用者提到"多智慧體協同"、"原創影片"、"從零創作" → 通用多智慧體協同
  
  #### 判斷影片二創模式
  - 使用者提到"二創影片"、"反推影片"、"影片重製"、"根據參考影片創作" → 影片二創
  
  #### 判斷影片分析模式
  - 使用者提到"分析影片"、"提取分鏡"、"生成提示詞" → 影片分析
  
  ---
  
  ## 模式一: 原創創作
  
  ### 子模式1: 《三體》IP創作
  
  #### 第一階段: 前期籌備
  1. **原著考據與設定提取**
     - 閱讀 [references/three-body-settings.md](references/three-body-settings.md)
     - 提取《三體2》威懾紀元核心設定
     - 輸出: 時間線錨點表、人物行為合規清單
  
  2. **劇情架構設計**
     - 搭建"三線並行"敘事框架
     - 設計3個核心衝突點和1個情感高潮
     - 輸出: 三線平行敘事分鏡大綱、情緒曲線圖
  
  3. **臺詞創作**
     - 基於人物性格撰寫臺詞
     - 輸出: 角色對白腳本（含語氣/停頓標記）
  
  #### 第二階段: 視覺製作
  4. **視覺風格規範制定**
     - 閱讀 [references/visual-style-guide.md](references/visual-style-guide.md)
     - 輸出: 視覺風格指南、場景/人物設計規範
  
  5. **場景設計**
     - 設計3個核心場景
     - 輸出: 場景概念圖提示詞、場景要素清單
  
  6. **人物一致性建模**
     - 羅輯形象錨定
     - 輸出: 羅輯標準形象錨定圖集、人物狀態對照表
  
  7. **分鏡腳本細化**
     - 將劇情大綱轉化為專業分鏡
     - 輸出: 電影分鏡腳本（含時間碼）、渲染後設資料
  
  #### 第三階段: 音訊與剪輯
  8. **素材生成**
     - **配音生成**: 呼叫 `scripts/voice_generator.py` 生成角色配音
       - 參數: `--input <旁白資料JSON> --output ./output/audio/voice`
     - **音效生成**: 呼叫 `scripts/sound_generator.py --type sound` 生成音效
       - 參數: `--input <音效配置JSON> --output ./output/audio/sound_effects`
     - **背景音樂生成**: 呼叫 `scripts/sound_generator.py --type music` 生成背景音樂
       - 參數: `--input <音樂配置JSON> --output ./output/audio/background_music`
     - **影片合成**: 呼叫 `scripts/video_compositor.py` 合成最終影片
       - 參數: `--images <圖片目錄> --audio <音訊目錄> --subtitles <字幕檔案> --output <輸出路徑>`
  
  9. **品質管控**
     - 呼叫 `scripts/quality_checker.py` 檢測技術指標
     - 原著合規檢測
     - B站適配最佳化
  
  ### 子模式2: 通用多智慧體協同
  
  #### 11個智慧體分工
  1. 文案創作
  2. 故事策劃
  3. 腳本創作
  4. 分鏡導演
  5. 分鏡畫師
  6. 字幕師
  7. 配音師
  8. 音效師
  9. 影片工程師
  10. 品檢
  11. 資料回饋
  
  #### 5階段協同流程
  1. 需求承接
  2. 內容創作
  3. 生圖創作
  4. 音訊字幕
  5. 影片合成
  6. 全流程品檢
  7. 資料迭代
  
  ---
  
  ## 模式二: 影片二創
  
  ### 第一階段: 影片反推分析
  1. **提取影片關鍵影格**
     - 呼叫 `scripts/video_frame_extractor.py` 提取關鍵影格
     - 參數: `--input <原影片路徑> --output ./output/frames --interval 2`
     - 輸出: 序列圖片到 `./output/frames/`
  
  2. **視覺分析**
     - 呼叫 `scripts/coze_bot_client.py` 分析關鍵影格
     - 智慧體描述分析需求: "分析這些影片幀，提取:畫面風格、色調特徵、構圖方式、節奏模式"
     - 輸出: 分析結果儲存到 `./output/analysis.json`
  
  3. **生成創作方案**
     - 智慧體根據分析結果，生成二創方案
     - 輸出: 新影片主題、畫面風格調整、腳本大綱、素材需求清單
  
  ### 第二階段: 素材生成
  4. **生成圖片素材**
     - 智慧體根據腳本生成關鍵影格提示詞
     - 呼叫 `scripts/image_generator.py` 生成圖片
     - 輸出: 圖片到 `./output/images/`
  
  5. **生成配音**
     - 智慧體作為配音師，創作旁白腳本
     - 呼叫 `scripts/voice_generator.py` 合成配音（基於Edge-TTS）
     - 參數: `--input <旁白腳本JSON> --output ./output/voice`
     - 輸出: 配音檔案到 `./output/voice/`
  
  6. **生成音效和背景音樂**
     - 呼叫 `scripts/sound_generator.py --type both` 生成音效和背景音樂
     - 參數: `--input <完整配置JSON> --output ./output/audio`
     - 輸出: 音效到 `./output/audio/sound_effects/`, 背景音樂到 `./output/audio/background_music/`
  
  7. **生成字幕**
     - 智慧體創作字幕內容
     - 呼叫 `scripts/subtitle_generator.py` 生成字幕檔案
     - 參數: `--input <字幕資料JSON> --output ./output/subtitles`
     - 輸出: SRT字幕到 `./output/subtitles/`
  
  ### 第三階段: 影片合成
  8. **合成最終影片**
     - 呼叫 `scripts/video_compositor.py` 合成影片
     - 參數: `--images ./output/images --audio ./output/audio --voice ./output/voice --subtitles ./output/subtitles --output ./output/final.mp4`
     - 輸出: 最終影片 `./output/final.mp4`
  
  9. **檔案下載**
     - 呼叫 `scripts/file_server.py` 啟動HTTP伺服器
     - 參數: `--port 8080 --directory ./output`
     - 輸出: 下載連結 `http://localhost:8080/final.mp4`
  
  ---
  
  ## 模式三: 影片分析
  
  ### 分析流程
  1. **影片抽影格**
     - 呼叫 `scripts/video_frame_extractor.py` 提取關鍵影格
     - 參數: `--input <影片路徑> --output <輸出目錄> --interval <間隔秒數>`
  
  2. **視覺分析**
     - 呼叫 `scripts/coze_bot_client.py` 分析每個影格內容
     - 參數: `--message "<分析提示>" --image_path <圖片路徑>`
     - 輸出: 結構化分析結果（JSON格式）
  
  3. **批次處理**
     - 自動遍歷所有關鍵影格
     - 批次呼叫視覺模型
     - 彙總分析結果
  
  ---
  
  ## 資源索引
  
  ### 技術腳本
  - **影片處理**: [scripts/video_frame_extractor.py](scripts/video_frame_extractor.py) - 提取關鍵影格
  - **視覺分析**: [scripts/coze_bot_client.py](scripts/coze_bot_client.py) - 呼叫Coze Bot API
  - **影像生成**: [scripts/image_generator.py](scripts/image_generator.py) - 生成圖片素材
  - **配音生成**: [scripts/voice_generator.py](scripts/voice_generator.py) - 生成配音（Edge-TTS）
  - **音效和音樂**: [scripts/sound_generator.py](scripts/sound_generator.py) - 生成音效和背景音樂（Suno API）
  - **字幕生成**: [scripts/subtitle_generator.py](scripts/subtitle_generator.py) - 生成字幕
  - **影片合成**: [scripts/video_compositor.py](scripts/video_compositor.py) - 合成最終影片
  - **檔案服務**: [scripts/file_server.py](scripts/file_server.py) - HTTP下載伺服器
  - **品品檢測**: [scripts/quality_checker.py](scripts/quality_checker.py) - 檢測技術指標
  - **錯誤處理**: [scripts/error_handler.py](scripts/error_handler.py) - 重試和錯誤日誌
  
  ### 參考文件
  - **《三體》IP創作**:
    - [references/three-body-settings.md](references/three-body-settings.md) - 《三體》原著設定與威懾紀元規則
    - [references/visual-style-guide.md](references/visual-style-guide.md) - 視覺風格規範與設計原則
    - [references/storyboard-template.md](references/storyboard-template.md) - 分鏡腳本標準模板
    - [references/character-profiles.md](references/character-profiles.md) - 人物檔案與行為準則
  
  - **影片二創**:
    - [references/recreation-guide.md](references/recreation-guide.md) - 影片二創方法論
    - [references/prompt-templates.md](references/prompt-templates.md) - 分析提示詞範例
    - [references/suno-api-guide.md](references/suno-api-guide.md) - Suno API使用指南
  
  ### 資原始檔
  - [assets/scene-examples/](assets/scene-examples/) - 場景設計提示詞範例
  - [assets/character-reference/](assets/character-reference/) - 人物形象描述參考
  
  ## 注意事項
  
  - **模式自動選擇**: 智慧體根據使用者輸入自動選擇合適的創作模式
  - **腳本共享**: 所有模式共享同一套技術腳本，避免重複
  - **API配置**: 所有API透過環境變數配置，支援多種模式
  - **錯誤處理**: 所有腳本都包含錯誤處理和重試機制
  - **容錯降級**: API不可用時自動降級為佔位實現
  
  ## 使用範例
  
  ### 範例1: 《三體》IP創作
  ```
  使用者: "幫我創作一個《三體》威懾紀元的8分鐘影片"
  
  智慧體執行:
  1. 自動選擇模式一: 《三體》IP創作
  2. 按照前期籌備 → 視覺製作 → 音訊與剪輯 → 品質管控流程
  3. 呼叫相應腳本生成配音、音效、背景音樂
  4. 合成最終影片
  ```
  
  ### 範例2: 影片二創
  ```
  使用者: "這個影片幫我二創一下，換個風格"
  
  智慧體執行:
  1. 自動選擇模式二: 影片二創
  2. 提取原影片關鍵影格
  3. 視覺分析，提取風格特徵
  4. 生成新素材（圖片、配音、音效、音樂）
  5. 合成新影片
  ```
  
  ### 範例3: 影片分析
  ```
  使用者: "分析這個影片，提取分鏡和提示詞"
  
  智慧體執行:
  1. 自動選擇模式三: 影片分析
  2. 抽取影片關鍵影格
  3. 分析每個影格內容
  4. 輸出結構化分析結果
  ```
  
  ## API 配置說明
  
  ### Suno API 三種模式
  - **開發者模式**: 技能預置 API Key，開箱即用
  - **使用者模式**: 使用者配置自己的 API Key
  - **佔位模式**: 自動降級，完全免費
  
  ### Edge-TTS 音色列表
  - 中文: zh-CN-XiaoxiaoNeural(活潑)、zh-CN-XiaomengNeural(溫柔)、zh-CN-YunyangNeural(沉穩)
  - 英文: en-US-JennyNeural(美式)、en-GB-SoniaNeural(英式)
  
  ### Coze Bot API
  - 用於視覺分析
  - 環境變數: COZE_BOT_ID, COZE_API_KEY
  
---

## 這個 Skill 在做什麼

影片創作套件 的佔位 Skill，來源目前只保留檔案位置與補齊說明，實際使用前需要回到來源補上完整內容。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
