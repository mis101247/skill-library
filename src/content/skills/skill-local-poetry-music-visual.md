---
title: "古詩詞配圖配樂 Skill"
description: "為古詩詞提供配圖與配樂的全流程創作指導；支援深度解析詩詞意境、產生畫面描述、提供配樂創作藍圖（Suno格式）；適用於詩詞視覺化、MV創作、文化傳播等情境"
category: "creative"
tags:
  - "skill-store"
  - "local-skill"
  - "creative"
featured: false
entryType: "local"
publishedAt: 2026-07-01
updatedAt: 2026-07-01
sourceRepo: "skill"
sourceRepoUrl: "https://github.com/anbeime/skill"
sourcePath: "skills/poetry-music-visual/poetry-music-visual/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/poetry-music-visual/poetry-music-visual/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/poetry-music-visual/poetry-music-visual/SKILL.md"
license: "CC-BY-4.0"
originalName: "poetry-music-visual"
originalDescription: "為古詩詞提供配圖與配樂的全流程創作指導；支援深度解析詩詞意境、產生畫面描述、提供配樂創作藍圖（Suno格式）；適用於詩詞視覺化、MV創作、文化傳播等情境"
activation: "當你需要 古詩詞配圖配樂 的工作流程時使用。"
useCases:
  - "需要處理「為古詩詞提供配圖與配樂的全流程創作指導；支援深度解析詩詞意境、產生畫面描述、提供配樂創作藍圖（Suno格式）；適用於詩詞視覺化、MV創作、文化傳播等情境」這類任務。"
  - "想直接閱讀或複製 poetry-music-visual 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/poetry-music-visual/poetry-music-visual/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: poetry-music-visual
  description: 為古詩詞提供配圖與配樂的全流程創作指導；支援深度解析詩詞意境、生成畫面描述、提供配樂創作藍圖（Suno格式）；適用於詩詞視覺化、MV創作、文化傳播等場景
  ---
  
  # 古詩詞配圖配樂創作指導
  
  ## 任務目標
  - 本 Skill 用於：將古詩詞轉化為視覺與聽覺雙重藝術形式
  - 能力包含：
    1. 深度解析古詩詞的意象、情感、表現手法及文化背景
    2. 生成與詩詞意境契合的配圖場景描述
    3. 提供純音樂配樂創作藍圖（Suno 格式的風格標籤+結構指令）
    4. 整合視覺與聽覺元素，確保藝術風格的統一性
  - 觸發條件：使用者需要為古詩詞配圖、配樂或製作詩詞MV
  
  ## 操作步驟
  
  ### 1. 詩詞深度解析
  根據使用者提供的資訊（標題、作者、內容）進行多維度分析：
  - **意象識別**：提取詩中核心意象（如月、山、水、花、鳥等）
  - **情感基調**：判斷主色調（寧靜、激昂、憂傷、豪邁等）
  - **時空背景**：理解創作年代、季節、時辰、地理環境
  - **表現手法**：分析修辭手法（比興、象徵、虛實結合等）
  - **文化內涵**：關聯歷史背景、作者生平、社會文化
  
  ### 2. 配圖場景設計
  生成2-3組配圖方案，每組包含：
  - **核心畫面**：主場景描述（構圖、色調、主體元素）
  - **細節元素**：輔助意象的視覺呈現
  - **氛圍營造**：光線、天氣、質感等細節
  - **風格建議**：中國風、水墨、油畫、現代插畫等
  
  生成規範：
  - 使用描述性語言，確保畫面可被影像生成模型理解
  - 控制在100-150字/場景，突出關鍵視覺元素
  - 避免抽象詞彙，使用具象化表達
  
  ### 3. 配樂創作藍圖（Suno 格式）
  
  生成純音樂創作指導，嚴格遵循以下格式：
  
  #### 3.1 歌曲風格（Style of Music）
  生成精準標籤，用逗號分隔，需包含以下維度：
  - **核心曲風** (Genre)：Orchestral, Cinematic, Ambient, Electronic, Neo-classical, China-Chic (國潮), World Music 等
  - **情緒氛圍** (Mood & Atmosphere)：Epic, Calm, Melancholic, Mysterious, Uplifting, Dreamy, Space 等
  - **核心樂器** (Instrumentation)：Piano, Guzheng, Erhu, Flute, Strings, Harp, Atmospheric Pads 等
  - **時代/節奏** (Era & Rhythm)：Traditional, Modern, Mid-tempo, Slow Build, Rubato (自由節奏), 4/4 Beat 等
  
  範例：
  ```
  China-Chic, Cinematic, Ambient, Dreamy, Mysterious, Guzheng, Erhu, Pipa, Strings, Atmospheric Pads, Traditional Chinese Instruments, Modern Fusion, Slow Build, Rubato
  ```
  
  #### 3.2 音樂結構與導演指令（Lyrics）
  使用 Suno 可識別的結構標籤，透過括號()新增器樂和氛圍指令：
  
  **結構標籤**：
  - [Intro]：前奏，設定基調
  - [Verse]：主歌，引入主題旋律
  - [Chorus]：副歌，情感高潮部分
  - [Bridge]：橋段，提供對比或轉折
  - [Instrumental Solo]：器樂獨奏
  - [Outro]：尾奏，自然收束
  
  **導演指令範例**：
  - 指導樂器：(Guzheng enters with gentle plucking), (Erhu melody fades in)
  - 描述動態：(Music gradually swells), (Tempo slows down to dreamy pace)
  - 新增音效：(Sound of gentle wind and distant birds), (Soft rain drops)
  
  **完整範例**：
  ```
  [Intro]
  
  [Verse 1]
  (Soft Guzheng plucking creates a mysterious atmosphere)
  (Minimal strings provide a subtle backdrop)
  
  [Chorus]
  (Main theme emerges with fuller instrumentation)
  (Harp and flutes join, creating an expansive cinematic feel)
  
  [Instrumental Solo]
  (Erhu takes center stage with a poignant melody)
  (Strings and atmospheric pads provide support)
  
  [Bridge]
  (Music softens, becomes more reflective)
  (Subtle wind chimes in the background)
  
  [Final Chorus]
  (Full orchestral texture returns)
  (Guzheng and Erhu intertwine)
  
  [Outro]
  (Music gradually fades)
  (Leaving only a soft wind effect)
  ```
  
  ### 4. 整合與最佳化
  - **風格一致性檢查**：確保配圖風格與配樂風格協調
  - **節奏匹配**：配圖的視覺節奏與音樂結構對應
  - **情緒遞進**：視覺與聽覺的情緒曲線保持同步
  
  ## 資源索引
  - 配圖參考：[references/poetry-imagery.md](references/poetry-imagery.md)（常見意象的視覺表現方式）
  - 配樂參考：[references/music-style-guide.md](references/music-style-guide.md)（不同情緒的音樂風格搭配）
  - 輸出模板：[assets/output-templates.md](assets/output-templates.md)（標準輸出格式）
  
  ## 注意事項
  - **智慧體職責**：
    - 配圖：直接使用智慧體的影像生成能力
    - 配樂：提供創作藍圖，供外部音樂生成服務（如 Suno）使用
  - **語言風格**：使用優美文雅的表達，營造與詩詞文化協調的氛圍
  - **輸出格式**：配圖描述與配樂藍圖清晰分隔，便於後續使用
  - **使用者引導**：詢問使用者是否需要：
    - 生成實際配圖（智慧體可直接完成）
    - 調整配圖風格（中國風、現代插畫等）
    - 修改配樂情緒（寧靜、激昂等）
    - 瞭解詩詞的歷史背景或作者生平
  
  ## 使用範例
  
  ### 範例1：李白《靜夜思》
  **配圖方案**：
  - 核心畫面：夜晚窗前，一輪明月高懸，月光灑在床前，詩人凝視著窗外的月亮
  - 細節元素：窗欞的木紋、地面如霜的月光、遠處的樹影
  - 氛圍營造：冷色調（藍色、銀白），柔和的光線，靜謐寧靜
  - 風格建議：中國水墨風，留白意境
  
  **配樂藍圖**：
  ```
  Style of Music:
  China-Chic, Ambient, Melancholic, Dreamy, Guzheng, Flute, Strings, Atmospheric Pads, Slow Build, Rubato
  
  [Intro]
  
  [Verse 1]
  (Gentle Guzheng plucking, slow and contemplative)
  (Soft atmospheric pads create a dreamy night atmosphere)
  
  [Chorus]
  (Flute melody enters with a nostalgic tone)
  (Strings provide a subtle harmonic support)
  
  [Bridge]
  (Music becomes slightly more emotional)
  (The full texture of strings and Guzheng)
  
  [Outro]
  (Guzheng melody gradually fades)
  (Leaving only the sound of soft wind)
  ```
  
  ### 範例2：王維《山居秋暝》
  **配圖方案**：
  - 核心畫面：秋日傍晚的山林，空山新雨後，明月松間照，清泉石上流，浣女在溪邊洗衣服，漁舟在荷花塘中歸
  - 細節元素：松樹上的月光、清澈的溪流、浣女的身影、漁舟劃過荷塘的漣漪
  - 氛圍營造：暖色調（金黃、橙色），柔和的夕陽光，寧靜而生動
  - 風格建議：傳統山水畫風格，注重意境
  
  **配樂藍圖**：
  ```
  Style of Music:
  China-Chic, Cinematic, Calm, Uplifting, Pipa, Guzheng, Dizi, Strings, Percussion, Mid-tempo, Rubato
  
  [Intro]
  
  [Verse 1]
  (Gentle Pipa picking, mimicking flowing water)
  (Soft Dizi melody, like birds singing in the forest)
  
  [Chorus]
  (Fuller instrumentation with Guzheng and strings)
  (The feeling of autumn evening, peaceful and warm)
  
  [Instrumental Solo]
  (Dizi takes a brief melodic solo)
  (Representing the flowing water and natural sounds)
  
  [Bridge]
  (Music becomes slightly more rhythmic)
  (Light percussion like water drums or woodblocks)
  
  [Final Chorus]
  (Full ensemble returns with warm harmonies)
  (Capturing the joy and tranquility of mountain life)
  
  [Outro]
  (Music gradually softens)
  (Like the evening settling into night)
  ```
  
  ## 使用流程建議
  1. 使用者輸入古詩詞資訊
  2. 智慧體執行步驟1-3，生成完整創作指導
  3. 詢問使用者是否需要：
     - 生成實際配圖（智慧體直接完成）
     - 使用配樂藍圖在音樂生成平台（如 Suno）創作音樂
     - 調整任何部分以更符合預期
  4. 如需迭代，基於使用者回饋最佳化配圖描述或配樂藍圖
  
---

## 這個 Skill 在做什麼

為古詩詞提供配圖與配樂的全流程創作指導；支援深度解析詩詞意境、產生畫面描述、提供配樂創作藍圖（Suno格式）；適用於詩詞視覺化、MV創作、文化傳播等情境

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
