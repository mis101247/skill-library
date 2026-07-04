---
title: "即夢影片提示詞 Skill"
description: "小省導購員數位人導購版即夢影片提示詞產生系統，基於四大智慧體協同（提示詞產生師、品質管控師、知識庫運維師、跨環節適配師），按照\"主體+運動+情境+（鏡頭語言+光影+氛圍）\"公式輸出中英文雙版提示詞，適配5s短影音。確保人物一致性、視覺連貫性、情緒連貫性，支援知識庫智慧重複使用和跨工具適配（Suno音樂、AI繪畫），為數位人導購影片提供高品質提示詞產生服務。"
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
sourcePath: "skills/dream-video-prompt-generator/dream-video-prompt-generator/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/dream-video-prompt-generator/dream-video-prompt-generator/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/dream-video-prompt-generator/dream-video-prompt-generator/SKILL.md"
license: "CC-BY-4.0"
originalName: "dream-video-prompt-generator"
originalDescription: "小省導購員數位人導購版即夢影片提示詞產生系統，基於四大智慧體協同（提示詞產生師、品質管控師、知識庫運維師、跨環節適配師），按照\"主體+運動+情境+（鏡頭語言+光影+氛圍）\"公式輸出中英文雙版提示詞，適配5s短影音。確保人物一致性、視覺連貫性、情緒連貫性，支援知識庫智慧重複使用和跨工具適配（Suno音樂、AI繪畫），為數位人導購影片提供高品質提示詞產生服務。"
activation: "當你需要 即夢影片提示詞 的工作流程時使用。"
useCases:
  - "需要處理「小省導購員數位人導購版即夢影片提示詞產生系統，基於四大智慧體協同（提示詞產生師、品質管控師、知識庫運維師、跨環節適配師），按照\"主體+運動+情境+（鏡頭語言+光影+氛圍）\"公式輸出中英文雙版提示詞，適配5s短影音。確保人物一致性、視覺連貫性、情緒連貫性，支援知識庫智慧重複使用和跨工具適配（Suno音樂、AI繪畫），為數位人導購影片提供高品質提示詞產生服務」這類任務。"
  - "想直接閱讀或複製 dream-video-prompt-generator 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/dream-video-prompt-generator/dream-video-prompt-generator/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: dream-video-prompt-generator
  description: 小省導購員數位人導購版即夢影片提示詞生成系統，基於四大智慧體協同（提示詞生成師、品質管控師、知識庫運維師、跨環節適配師），按照"主體+運動+場景+（鏡頭語言+光影+氛圍）"公式輸出中英文雙版提示詞，適配5s短影音。確保人物一致性、視覺連貫性、情緒連貫性，支援知識庫智慧重複使用和跨工具適配（Suno音樂、AI繪畫），為數位人導購影片提供高品質提示詞生成服務。
  ---
  
  # 小省導購員數位人導購即夢影片提示詞生成系統
  
  ## 任務目標
  - 本 Skill 用於：生成小省導購員數位人導購影片的即夢影片生成提示詞
  - 能力包含：
    - 四大智慧體協同：提示詞生成師、品質管控師、知識庫運維師、跨環節適配師
    - 提示詞公式驅動：主體+運動+場景+（鏡頭語言+光影+氛圍）
    - 中英文雙版對應：適配國際AI工具需求
    - 一致性保障：人物一致性、視覺連貫性、情緒連貫性
    - 知識庫智慧重複使用：同類需求直接調取，新增需求迭代最佳化
    - 跨工具適配：聯動Suno音樂生成、AI繪畫生成
  - 觸發條件：使用者需要生成小省導購員數位人導購影片的提示詞
  
  ## 前置準備
  - 無需特殊依賴
  - 準備導購影片資訊：
    - 場景型別（產品推薦、價格對比、促銷活動等）
    - 情緒基調（熱情、專業、親切、緊迫等）
    - 影片時長（預設5s）
    - 分鏡幕次（預設5幕）
  
  ## 操作步驟
  
  ### 標準工作流程（四大智慧體協同）
  
  #### 步驟1：需求對接與知識庫核查（智慧體3：知識庫運維師）
  **職責**：優先核查知識庫，同類需求直接調取，新需求啟動協作
  
  - 需求識別：識別場景型別、情緒基調、分鏡幕次
  - 知識庫核查：查詢是否存在同類場景的提示詞模板
  - 直接重複使用：如匹配，直接調取並回傳提示詞
  - 新增處理：如不匹配，傳遞給提示詞生成師啟動創作
  
  **輸出格式**：
  ```json
  {
    "demand_type": "產品推薦/價格對比/促銷活動",
    "emotion_tone": "熱情/專業/親切/緊迫",
    "scene_count": 5,
    "knowledge_base_match": "true/false",
    "existing_prompts": "如匹配，回傳已存在提示詞；如不匹配，回傳null"
  }
  ```
  
  ---
  
  #### 步驟2：提示詞生成（智慧體1：提示詞生成師）
  **職責**：按公式輸出即夢提示詞，嚴格遵循一致性
  
  **提示詞公式**：
  ```
  主體（主體描述）+ 運動 + 場景（場景描述）+（鏡頭語言 + 光影 + 氛圍）
  ```
  
  **核心要求**：
  - 主體一致性：所有分鏡沿用核心角色固定描述
  - 情緒適配性：光影、氛圍匹配對應幕次情緒
  - 中英文雙版：生成中英文對照版本
  - 細節具體：動作連貫，適配5s短影音
  - 延伸細節：規避AI獨立生成的上下文斷層問題
  
  **輸出格式**（每幕）：
  ```json
  {
    "scene_number": 1,
    "scene_name": "場景名稱",
    "duration": "5s",
    "chinese_prompt": {
      "subject": "主體描述",
      "movement": "運動描述",
      "scene": "場景描述",
      "shot_language": "鏡頭語言",
      "light": "光影",
      "atmosphere": "氛圍",
      "full_prompt": "完整中文提示詞"
    },
    "english_prompt": {
      "subject": "Subject description",
      "movement": "Movement description",
      "scene": "Scene description",
      "shot_language": "Shot language",
      "light": "Light",
      "atmosphere": "Atmosphere",
      "full_prompt": "Complete English prompt"
    },
    "emotion_tone": "適配情緒",
    "consistency_check": {
      "character_description": "與核心角色固定描述一致",
      "visual_elements": "視覺元素連貫",
      "emotion_progression": "情緒遞進自然"
    }
  }
  ```
  
  ---
  
  #### 步驟3：品質核查（智慧體2：品質管控師）
  **職責**：核查提示詞的景別、光影、情緒匹配度
  
  **核查清單**：
  - [ ] 主體一致性：同角色外貌描述統一（年齡、髮型、服飾、氣質）
  - [ ] 景別合理性：鏡頭語言符合場景需求
  - [ ] 光影匹配度：光影適配情緒基調
  - [ ] 情緒連貫性：從第一幕到第五幕的情緒遞進自然
  - [ ] 視覺連貫性：視覺線索貫穿五幕（色調、場景元素）
  - [ ] AI出圖/影片要求：細節具體，動作連貫，適配5s短影音
  - [ ] 中英文對應：中英文版本語義一致
  
  **不透過處理**：
  - 如發現不一致問題，回饋給提示詞生成師調整
  - 最多回饋2次，避免過度迭代
  
  **輸出格式**：
  ```json
  {
    "quality_check": "pass/fail",
    "check_results": {
      "character_consistency": "pass",
      "shot_language": "pass",
      "light_matching": "pass",
      "emotion_progression": "pass",
      "visual_coherence": "pass",
      "ai_requirement": "pass",
      "translation_quality": "pass"
    },
    "issues": [],
    "adjustment_needed": "false"
  }
  ```
  
  ---
  
  #### 步驟4：知識庫歸檔（智慧體3：知識庫運維師）
  **職責**：歸檔角色固定描述、提示詞模板，支援重複使用
  
  **歸檔內容**：
  - 核心角色固定描述（小省導購員）
  - 五幕情緒提示詞模板
  - 中英文對照版本
  - 場景分類索引
  
  **輸出格式**：
  ```json
  {
    "archive_id": "唯一標識",
    "scene_type": "產品推薦/價格對比/促銷活動",
    "emotion_tone": "情緒基調",
    "character_profile": {
      "gender": "女性",
      "age": "25歲左右",
      "appearance": "外貌描述",
      "outfit": "服飾描述",
      "temperament": "氣質描述"
    },
    "prompt_templates": {
      "scene_1": "第一幕模板",
      "scene_2": "第二幕模板",
      "scene_3": "第三幕模板",
      "scene_4": "第四幕模板",
      "scene_5": "第五幕模板"
    },
    "bilingual_version": "中英文對照版本",
    "tags": ["標籤1", "標籤2"]
  }
  ```
  
  ---
  
  #### 步驟5：跨工具適配（智慧體4：跨環節適配師）
  **職責**：聯動Suno音樂生成、AI繪畫，確保提示詞同源
  
  **Suno音樂提示詞**（每幕對應）：
  ```json
  {
    "scene_number": 1,
    "music_style": "音樂風格",
    "music_prompt": "音樂提示詞",
    "emotion_match": "情緒匹配",
    "instrumentation": "樂器配置",
    "tempo": "節奏",
    "duration": "時長"
  }
  ```
  
  **AI繪畫提示詞**（動作前畫面）：
  ```json
  {
    "scene_number": 1,
    "painting_prompt": "繪畫提示詞",
    "pre_action_description": "動作前畫面描述",
    "visual_elements": "視覺元素",
    "composition": "構圖",
    "color_palette": "色調"
  }
  ```
  
  **輸出格式**：
  ```json
  {
    "cross_tool_prompts": {
      "suno_music": {
        "scene_1": {...},
        "scene_2": {...},
        "scene_3": {...},
        "scene_4": {...},
        "scene_5": {...}
      },
      "ai_painting": {
        "scene_1": {...},
        "scene_2": {...},
        "scene_3": {...},
        "scene_4": {...},
        "scene_5": {...}
      }
    }
  }
  ```
  
  ---
  
  ### 完整輸出範例
  
  ```json
  {
    "metadata": {
      "scene_type": "產品推薦",
      "emotion_tone": "熱情專業",
      "total_duration": "25s（5幕×5s）",
      "character": "小省導購員"
    },
    "scenes": [
      {
        "scene_number": 1,
        "scene_name": "開場吸引",
        "duration": "5s",
        "chinese_prompt": {
          "full_prompt": "主體：25歲左右女性數位人，鵝蛋臉、杏眼帶笑、淺棕色齊肩捲髮，膚色白皙，唇色淡粉，身穿淺灰色修身西裝套裙，內搭白色襯衫，腳踩米色細跟鞋，佩戴銀色簡約項鍊，氣質專業又親和，手部姿態優雅自然。運動：緩慢抬手指向右側，姿態挺拔。場景：現代商務場景，背景是產品展示架，前景擺簡約檔案。鏡頭語言：中景固定鏡頭，背景虛化，順光拍攝。光影：暖調柔光，明亮清晰。氛圍：熱情專業，吸引注意力。"
        },
        "english_prompt": {
          "full_prompt": "Subject: 25-year-old female digital human, oval face, almond eyes with smile, light brown shoulder-length curly hair, fair skin, light pink lips, wearing light gray tailored suit skirt, white shirt, beige pumps, simple silver necklace, professional and friendly temperament, elegant hand gestures. Movement: Slowly raise hand pointing to the right, upright posture. Scene: Modern business setting, product display shelf in background, simple documents in foreground. Shot: Medium fixed shot, bokeh background, front light. Light: Warm soft light, bright and clear. Atmosphere: Enthusiastic and professional, attention-grabbing."
        },
        "emotion_tone": "熱情專業",
        "suno_music_prompt": "歡快現代音樂，輕快節奏，鋼琴+電子樂，純音樂，營造熱情專業的氛圍",
        "ai_painting_prompt": "中景，順光拍攝，現代商務場景暖調柔光，背景產品展示架虛化，前景簡約檔案；25歲女性數位人（鵝蛋臉、杏眼微笑、淺棕齊肩捲髮，淺灰西裝套裙+白襯衫+米色細跟鞋，銀色項鍊）姿態挺拔，手勢準備指向右側，神情熱情專業，整體畫面明亮清晰。"
      }
    ]
  }
  ```
  
  ---
  
  ## 資源索引
  
  ### 必要參考文件
  
  **四大智慧體角色定義**：見 [references/agent-roles.md](references/agent-roles.md)
  - 4個智慧體的詳細角色定義、能力邊界和協作流程
  - 何時讀取：需要了解智慧體職責和協作邏輯時
  
  **提示詞公式詳解**：見 [references/prompt-formula.md](references/prompt-formula.md)
  - 提示詞公式的詳細說明、拆解步驟、使用範例
  - 何時讀取：需要生成提示詞時
  
  **一致性保障機制**：見 [references/consistency-guide.md](references/consistency-guide.md)
  - 人物一致性、視覺連貫性、情緒連貫性的詳細保障機制
  - 何時讀取：需要確保提示詞一致性時
  
  **角色固定描述**：見 [references/character-profile.md](references/character-profile.md)
  - 小省導購員的核心角色固定描述
  - 何時讀取：生成提示詞主體描述時
  
  **場景模板**：見 [references/scene-templates.md](references/scene-templates.md)
  - 貨幣場景的五幕模板庫
  - 何時讀取：需要快速生成提示詞時
  
  **跨工具適配**：見 [references/cross-tool-adaptation.md](references/cross-tool-adaptation.md)
  - Suno音樂生成、AI繪畫適配指南
  - 何時讀取：需要聯動其他工具時
  
  ### 輸出資產
  
  **範例提示詞**：見 [assets/examples/sample-prompts.md](assets/examples/sample-prompts.md)
  - 完整的場景範例（產品推薦、價格對比、促銷活動）
  - 何時讀取：需要參考具體輸出格式時
  
  ---
  
  ## 注意事項
  
  ### 提示詞生成原則
  - **嚴格遵循公式**：主體+運動+場景+（鏡頭語言+光影+氛圍）
  - **中英文對應**：確保語義一致，適配國際AI工具
  - **細節具體**：動作連貫，適配5s短影音時長
  - **情緒匹配**：光影、氛圍嚴格匹配情緒基調
  
  ### 一致性保障
  - **人物一致性**：所有分鏡使用相同的核心角色描述
  - **視覺連貫性**：設定貫穿五幕的視覺線索（色調、場景元素）
  - **情緒連貫性**：從第一幕到第五幕的情緒遞進自然
  
  ### 知識庫使用
  - **優先重複使用**：同類需求直接調取知識庫素材
  - **增量歸檔**：新需求創作後必須歸檔至知識庫
  - **分類索引**：按場景型別、情緒基調建立索引
  
  ### 跨工具適配
  - **同源設計**：Suno音樂提示詞、AI繪畫提示詞與即夢提示詞同源
  - **情緒統一**：確保音樂風格、畫面質感與即夢提示詞情緒一致
  - **格式相容**：生成符合各工具要求的格式
  
  ---
  
  ## 使用範例
  
  ### 範例1：產品推薦影片提示詞
  
  **使用者需求**：生成一款5幕產品推薦影片的即夢提示詞
  
  **執行方式**：
  1. 知識庫運維師：核查知識庫，發現匹配模板
  2. 直接調取：回傳已存在的產品推薦提示詞模板
  3. 跨環節適配師：生成Suno音樂和AI繪畫提示詞
  
  **關鍵參數**：
  - 場景型別：產品推薦
  - 情緒基調：熱情專業
  - 分鏡幕次：5幕
  - 影片時長：25秒（5幕×5秒）
  
  ### 範例2：價格對比影片提示詞
  
  **使用者需求**：生成一款5幕價格對比影片的即夢提示詞
  
  **執行方式**：
  1. 知識庫運維師：核查知識庫，無匹配模板
  2. 提示詞生成師：按公式生成新提示詞
  3. 品質管控師：核查提示詞品質
  4. 知識庫運維師：歸檔至知識庫
  5. 跨環節適配師：生成Suno音樂和AI繪畫提示詞
  
  **關鍵參數**：
  - 場景型別：價格對比
  - 情緒基調：客觀專業
  - 分鏡幕次：5幕
  - 影片時長：25秒（5幕×5秒）
  
  ### 範例3：促銷活動影片提示詞
  
  **使用者需求**：生成一款5幕促銷活動影片的即夢提示詞
  
  **執行方式**：
  1. 知識庫運維師：核查知識庫，發現相似模板
  2. 調取相似模板：基於現有模板微調
  3. 提示詞生成師：生成定製化提示詞
  4. 品質管控師：核查提示詞品質
  5. 知識庫運維師：歸檔新版本
  6. 跨環節適配師：生成Suno音樂和AI繪畫提示詞
  
  **關鍵參數**：
  - 場景型別：促銷活動
  - 情緒基調：緊迫熱情
  - 分鏡幕次：5幕
  - 影片時長：25秒（5幕×5秒）
  
---

## 這個 Skill 在做什麼

小省導購員數位人導購版即夢影片提示詞產生系統，基於四大智慧體協同（提示詞產生師、品質管控師、知識庫運維師、跨環節適配師），按照"主體+運動+情境+（鏡頭語言+光影+氛圍）"公式輸出中英文雙版提示詞，適配5s短影音。確保人物一致性、視覺連貫性、情緒連貫性，支援知識庫智慧重複使用和跨工具適配（Suno音樂、AI繪畫），為數位人導購影片提供高品質提示詞產生服務。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
