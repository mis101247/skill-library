---
title: "影片二創 Skill"
description: "影片二創 的佔位 Skill，來源目前只保留檔案位置與補齊說明，實際使用前需要回到來源補上完整內容。"
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
sourcePath: "skills/video-recreation/video-recreation/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/video-recreation/video-recreation/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/video-recreation/video-recreation/SKILL.md"
license: "CC-BY-4.0"
originalName: "video-recreation"
originalDescription: "影片二創 的佔位 Skill，來源目前只保留檔案位置與補齊說明，實際使用前需要回到來源補上完整內容。"
activation: "當你需要 影片二創 的工作流程時使用。"
useCases:
  - "需要處理「影片二創 的佔位 Skill，來源目前只保留檔案位置與補齊說明，實際使用前需要回到來源補上完整內容」這類任務。"
  - "想直接閱讀或複製 video-recreation 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/video-recreation/video-recreation/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
  - "原始 SKILL.md 看起來是佔位檔，實際使用前需要回到來源補齊內容。"
skillBody: |-
  ---
  name: video-recreation
  description: 完整的影片二創工具，支援影片反推、素材生成(圖片/音效/背景音樂/配音/字幕)、影片合成、檔案下載的全流程，整合Coze Bot API進行視覺分析，使用Edge-TTS進行語音合成
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
  
  # video-recreation
  
  ## 任務目標
  - 本Skill用於:影片二創創作，從原影片反推分析到新影片合成的完整流程
  - 能力包含:影片分析、素材生成(圖片/音訊/配音/字幕)、影片合成、檔案下載
  - 觸發條件:使用者要求"二創影片"、"反推影片"、"影片重製"、"根據參考影片創作"等
  
  ## 前置準備
  - 環境依賴:
    ```
    opencv-python>=4.8.0
    pillow>=10.0.0
    moviepy>=1.0.3
    numpy>=1.24.0
    requests>=2.28.0
    edge-tts>=6.1.0
    ```
  - Edge-TTS安裝:
    ```bash
    pip install edge-tts
    ```
  - Suno API(可選):
    - 用於生成真實的背景音樂
    - 三種配置方式:
      1. **開發者模式**: 技能已預置 API Key,開箱即用
      2. **使用者模式**: 設定環境變數 `export SUNO_API_KEY=your_api_key`
      3. **命令列模式**: 執行時指定 `--suno-api-key your_api_key`
    - 配置優先順序: 命令列參數 > 環境變數 > 技能憑證
    - 佔位模式: 未配置 API Key 時自動使用佔位實現
    - 官網: https://suno.com
  - 環境變數:
    - `COZE_BOT_ID`: Coze Bot ID (預設: 7572557757883383858)
    - `COZE_API_KEY`: Coze API Key (需配置)
  - 輸出目錄結構:
    ```
    ./output/
      ├── frames/          # 影片關鍵影格
      ├── analysis.json    # 反推分析結果
      ├── images/          # 生成的圖片素材
      ├── audio/           # 音效和背景音樂
      ├── voice/           # 配音音訊
      ├── subtitles/       # 字幕檔案
      └── final.mp4        # 最終合成影片
    ```
  
  ## 操作步驟
  
  ### 第一階段:影片反推分析
  1. **提取影片關鍵影格**
     - 呼叫 `scripts/video_frame_extractor.py` 提取關鍵影格
     - 參數: `--input <原影片路徑> --output ./output/frames --interval 2`
     - 輸出:序列圖片到 `./output/frames/`
  
  2. **視覺分析**
     - 呼叫 `scripts/coze_bot_client.py` 分析關鍵影格
     - 智慧體描述分析需求:"分析這些影片幀，提取:1.畫面風格 2.色調特徵 3.構圖方式 4.節奏模式"
     - 參數: `--message "<分析提示>" --image_path <關鍵影格路徑>`
     - 輸出:分析結果儲存到 `./output/analysis.json`
  
  3. **生成創作方案**
     - 智慧體根據分析結果,生成二創方案:
       - 新影片主題
       - 畫面風格調整
       - 腳本大綱
       - 素材需求清單
  
  ### 第二階段:素材生成
  4. **生成圖片素材**
     - 智慧體根據腳本生成關鍵影格提示詞
     - 呼叫 `scripts/image_generator.py` 生成圖片
     - 參數: `--prompt "<提示詞>" --output ./output/images/frame_xxxx.png`
     - **重要**:影像生成應由智慧體創作,腳本僅負責技術實現
     - 輸出:圖片到 `./output/images/`
  
  5. **生成音效和背景音樂**
     - 智慧體描述音效需求:"根據場景生成音效:1.轉場音效 2.背景音樂風格 3.環境音"
     - 呼叫 `scripts/sound_generator.py` 生成音效和背景音樂
     - 參數: `--type sound --input <音效配置JSON> --output ./output/audio` (生成音效)
     - 參數: `--type music --input <音樂配置JSON> --output ./output/audio` (生成背景音樂)
     - 參數: `--type both --input <完整配置JSON> --output ./output/audio` (同時生成兩者)
     - **API Key 配置**(可選):
       - 不配置: 自動使用佔位實現(開箱即用,無需任何配置)
       - 環境變數: `export SUNO_API_KEY=your_api_key`
       - 命令列參數: `--suno-api-key your_api_key`
       - 強制佔位: `--use-placeholder` (即使有 API Key 也使用佔位)
     - 輸出:音效到 `./output/audio/sound_effects/`, 背景音樂到 `./output/audio/background_music/`
     - **模式說明**:
       - **開發者模式**: 技能已預置 API Key,直接使用
       - **使用者模式**: 使用者自己配置 API Key
       - **佔位模式**: 未配置 API Key 時自動降級
  
  6. **生成配音**
     - 智慧體作為配音師,創作旁白腳本:
       - 分析原影片節奏
       - 創作貼合畫面的旁白
       - 選擇合適的音色(中文/英文/日文等20+音色)
       - 調整語速、音調、音量參數
     - 呼叫 `scripts/voice_generator.py` 合成配音(基於Edge-TTS)
     - 參數: `--input <旁白腳本JSON> --output ./output/voice`
     - 參數: `--list-voices` (列出所有可用音色)
     - 輸出:配音檔案到 `./output/voice/`
     - **音色範例**:
       - 中文女聲: zh-CN-XiaoxiaoNeural(活潑)、zh-CN-XiaohanNeural(知性)、zh-CN-XiaomengNeural(溫柔)
       - 中文男聲: zh-CN-YunyangNeural(沉穩)、zh-CN-YunjianNeural(深沉)、zh-CN-YunxiNeural(活潑)
       - 英文女聲: en-US-JennyNeural(美式)、en-GB-SoniaNeural(英式)
  
  7. **生成字幕**
     - 智慧體創作字幕內容,確保:
       - 文字簡潔有力
       - 與畫面同步
       - 符合影片節奏
     - 呼叫 `scripts/subtitle_generator.py` 生成字幕檔案
     - 參數: `--input <字幕資料JSON> --output ./output/subtitles`
     - 輸出:SRT字幕到 `./output/subtitles/`
  
  ### 第三階段:影片合成
  8. **合成最終影片**
     - 呼叫 `scripts/video_compositor.py` 合成影片
     - 參數: `--images ./output/images --audio ./output/audio --voice ./output/voice --subtitles ./output/subtitles --output ./output/final.mp4`
     - 輸出:最終影片 `./output/final.mp4`
  
  9. **檔案下載**
     - 啟動HTTP伺服器供下載
     - 呼叫 `scripts/file_server.py`
     - 參數: `--port 8080 --directory ./output`
     - 輸出:下載連結 `http://localhost:8080/final.mp4`
  
  ### 錯誤處理與斷點續傳
  - **重試機制**:所有API呼叫已配置最大重試次數(2-3次),避免無限消耗Token
  - **錯誤日誌**:錯誤自動記錄到 `./output/error_log.json`,可用於問題診斷
  - **斷點續傳**:
    - 檢查 `./output/error_log.json` 確認失敗步驟
    - 從失敗步驟重新執行,已生成的素材可重複使用
    - 例如:僅重新生成失敗的音訊,不重複已有圖片
  - **重試限制**:
    - Coze Bot API呼叫:最多重試3次,每次間隔1秒
    - 影像生成:最多重試2次,每次間隔0.5秒
    - 音訊生成:最多重試2次,每次間隔0.5秒
    - 音效和背景音樂:最多重試2次,每次間隔0.5秒
  
  ## 資源索引
  - **影片處理**:見 [scripts/video_frame_extractor.py](scripts/video_frame_extractor.py)(提取關鍵影格)
  - **視覺分析**:見 [scripts/coze_bot_client.py](scripts/coze_bot_client.py)(呼叫Coze Bot API)
  - **影像生成**:見 [scripts/image_generator.py](scripts/image_generator.py)(生成圖片素材)
  - **音訊生成**:見 [scripts/audio_generator.py](scripts/audio_generator.py)(生成旁白/配音)
  - **音效和音樂**:見 [scripts/sound_generator.py](scripts/sound_generator.py)(生成環境音效和背景音樂,整合Suno API)
  - **配音合成**:見 [scripts/voice_generator.py](scripts/voice_generator.py)(合成旁白,基於Edge-TTS)
  - **字幕生成**:見 [scripts/subtitle_generator.py](scripts/subtitle_generator.py)(生成字幕)
  - **影片合成**:見 [scripts/video_compositor.py](scripts/video_compositor.py)(合成最終影片)
  - **檔案服務**:見 [scripts/file_server.py](scripts/file_server.py)(HTTP下載伺服器)
  - **錯誤處理**:見 [scripts/error_handler.py](scripts/error_handler.py)(重試和錯誤日誌)
  - **創作指南**:見 [references/recreation-guide.md](references/recreation-guide.md)(影片二創方法論)
  - **提示詞模板**:見 [references/prompt-templates.md](references/prompt-templates.md)(分析提示詞範例)
  - **Suno API指南**:見 [references/suno-api-guide.md](references/suno-api-guide.md)(Suno API使用說明)
  
  ## 注意事項
  - **智慧體職責**:內容創作(劇本、旁白、字幕、影像提示詞)由智慧體完成,腳本負責技術處理
  - **重試限制**:避免無限重試消耗Token,已配置合理重試次數
  - **錯誤日誌**:遇到錯誤時檢查 `./output/error_log.json`,從失敗步驟恢復
  - **斷點續傳**:重複執行時,已存在的素材會被重複使用,無需重新生成
  - **Coze Bot API**:視覺分析依賴使用者發布的Coze Bot,需配置API Key
  - **檔案路徑**:所有輸出使用相對路徑 `./output/`,確保下載時能正確訪問
  
  ## 使用範例
  
  ### 範例1:完整二創流程
  ```bash
  # 1. 提取關鍵影格
  python scripts/video_frame_extractor.py \
    --input original_video.mp4 \
    --output ./output/frames \
    --interval 2
  
  # 2. 視覺分析(智慧體描述分析需求)
  python scripts/coze_bot_client.py \
    --message "分析這些影片幀,提取:畫面風格、色調特徵、構圖方式、節奏模式" \
    --image_path ./output/frames/frame_0001.jpg
  
  # 3. 生成圖片素材(智慧體創作提示詞)
  python scripts/image_generator.py \
    --prompt "現代科技風格,藍色調,未來城市景觀" \
    --output ./output/images/frame_0001.png
  
  # 4. 生成音效和背景音樂
  
  # 方式1: 使用技能預置的 API Key(開箱即用)
  python scripts/sound_generator.py \
    --type both \
    --input audio_config.json \
    --output ./output/audio
  
  # 方式2: 使用自己的 API Key
  export SUNO_API_KEY=your_api_key
  python scripts/sound_generator.py \
    --type both \
    --input audio_config.json \
    --output ./output/audio
  
  # 方式3: 命令列指定 API Key
  python scripts/sound_generator.py \
    --type both \
    --input audio_config.json \
    --output ./output/audio \
    --suno-api-key your_api_key
  
  # 方式4: 強制使用佔位實現(不呼叫 API)
  python scripts/sound_generator.py \
    --type both \
    --input audio_config.json \
    --output ./output/audio \
    --use-placeholder
  
  # 其中audio_config.json範例:
  {
    "sound_effects": [
      {"name": "transition_01", "type": "transition", "duration": 2.0, "description": "轉場音效"},
      {"name": "impact_01", "type": "impact", "duration": 0.5, "description": "衝擊音效"}
    ],
    "background_music": {
      "name": "background",
      "style": "calm",
      "duration": 60.0,
      "tempo": 90,
      "mood": "neutral"
    }
  }
  
  # API Key 配置優先順序: 命令列參數 > 環境變數 > 技能憑證 > 佔位實現
  
  # 5. 生成配音(Edge-TTS)
  # 檢視可用音色
  python scripts/voice_generator.py --list-voices
  
  # 生成配音
  python scripts/voice_generator.py \
    --input narration.json \
    --output ./output/voice
  
  # 其中narration.json範例:
  {
    "segments": [
      {
        "segment_id": "S01",
        "text": "歡迎來到這個美麗的世界",
        "voice": "zh-CN-XiaomengNeural",
        "rate": "-10%",
        "pitch": "+0Hz",
        "volume": "+0%"
      },
      {
        "segment_id": "S02",
        "text": "讓我們開始這段奇妙的旅程",
        "voice": "zh-CN-YunyangNeural",
        "rate": "-5%",
        "pitch": "-2Hz",
        "volume": "+5%"
      }
    ]
  }
  
  # 6. 生成字幕
  python scripts/subtitle_generator.py \
    --input subtitle_data.json \
    --output ./output/subtitles
  
  # 7. 合成影片
  python scripts/video_compositor.py \
    --images ./output/images \
    --audio ./output/audio \
    --voice ./output/voice \
    --subtitles ./output/subtitles \
    --output ./output/final.mp4
  
  # 8. 啟動下載伺服器
  python scripts/file_server.py \
    --port 8080 \
    --directory ./output
  ```
  
  ### 範例2:單獨生成音效
  ```bash
  python scripts/sound_generator.py \
    --type sound \
    --input sound_effects.json \
    --output ./output/audio
  ```
  
  ### 範例3:單獨生成背景音樂
  ```bash
  python scripts/sound_generator.py \
    --type music \
    --input background_music.json \
    --output ./output/audio
  ```
  
  ### 範例4:斷點續傳
  ```bash
  # 檢查錯誤日誌
  cat ./output/error_log.json
  
  # 從失敗步驟重新執行(例如僅重新生成失敗的音效)
  python scripts/sound_generator.py \
    --type sound \
    --input sound_effects.json \
    --output ./output/audio
  ```
  
  ## 智慧體角色分工
  1. **視覺分析師**:分析原影片,提取風格、色調、構圖等特徵
  2. **腳本策劃師**:根據分析結果創作新影片腳本和大綱
  3. **提示詞設計師**:為影像生成工具創作精準的提示詞
  4. **配音師**:創作旁白腳本,確定音色、節奏、情感
  5. **音效師**:設計音效方案,確定音效型別、時長和位置
  6. **音樂師**:選擇背景音樂風格,確定節奏和情緒基調
  7. **字幕師**:創作字幕內容,確保與畫面同步
  8. **技術協調員**:呼叫腳本完成技術處理,管理檔案路徑,啟動下載服務
  
---

## 這個 Skill 在做什麼

影片二創 的佔位 Skill，來源目前只保留檔案位置與補齊說明，實際使用前需要回到來源補上完整內容。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
