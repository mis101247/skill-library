---
title: "寵物電商內容 Skill"
description: "萌寵導購短影音全流程創作技能，基於COZE影片大模型API，支援萌寵劇情/好物測評/品種科普/寵品導購等全型別創作，覆蓋熱門解析反推、知識庫聯動、互動最佳化、素材批次下載、全素材整合，實現從創意到導購引流型成品影片的自動化產生，適配15-30秒直式螢幕9:16主流平台規格。"
category: "ecommerce"
tags:
  - "skill-store"
  - "local-skill"
  - "ecommerce"
featured: false
entryType: "local"
publishedAt: 2026-07-01
updatedAt: 2026-07-01
sourceRepo: "skill"
sourceRepoUrl: "https://github.com/anbeime/skill"
sourcePath: "skills/pet-commerce-creator/pet-commerce-creator/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/pet-commerce-creator/pet-commerce-creator/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/pet-commerce-creator/pet-commerce-creator/SKILL.md"
license: "CC-BY-4.0"
originalName: "pet-commerce-creator"
originalDescription: "萌寵導購短影音全流程創作技能，基於COZE影片大模型API，支援萌寵劇情/好物測評/品種科普/寵品導購等全型別創作，覆蓋熱門解析反推、知識庫聯動、互動最佳化、素材批次下載、全素材整合，實現從創意到導購引流型成品影片的自動化產生，適配15-30秒直式螢幕9:16主流平台規格。"
activation: "當你需要 寵物電商內容 的工作流程時使用。"
useCases:
  - "需要處理「萌寵導購短影音全流程創作技能，基於COZE影片大模型API，支援萌寵劇情/好物測評/品種科普/寵品導購等全型別創作，覆蓋熱門解析反推、知識庫聯動、互動最佳化、素材批次下載、全素材整合，實現從創意到導購引流型成品影片的自動化產生，適配15-30秒直式螢幕9:16主流平台規格」這類任務。"
  - "想直接閱讀或複製 pet-commerce-creator 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/pet-commerce-creator/pet-commerce-creator/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: pet-commerce-creator
  description: 萌寵導購短影音全流程創作技能，基於COZE影片大模型API，支援萌寵劇情/好物測評/品種科普/寵品導購等全型別創作，覆蓋熱門款解析反推、知識庫聯動、互動最佳化、素材批次下載、全素材整合，實現從創意到導購引流型成品影片的自動化生成，適配15-30秒直式9:16主流平台規格。
  dependency:
    python:
      - coze-workload-identity>=1.0.0
      - yt-dlp>=2024.1.0
  ---
  
  # 萌寵導購內容智創工坊
  
  ## 任務目標
  - 本技能用於：萌寵導購短影音全流程自動化創作，聚焦漲粉與商品轉化
  - 能力包含：
    - 熱門款影片連結解析反推並自動入庫
    - 基於知識庫的創意拆解、腳本創作、分鏡設計
    - 適配COZE API的分鏡圖片、字幕、音效素材生成
    - 支援全步驟互動評價與批次素材下載
    - COZE API全素材整合合成導購型成品影片
    - 全流程品檢與資料迭代閉環
  - 觸發條件：使用者萌寵短影音創作需求（故事/測評/科普/導購）、影片連結解析需求、知識庫調取需求
  
  ## 前置準備
  - 依賴說明：技能所需依賴包
    ```
    coze-workload-identity>=1.0.0  # COZE影片API呼叫
    yt-dlp>=2024.1.0                # 影片下載（支援抖音/B站/YouTube等）
    ```
  - 憑證配置：
    - 已配置COZE影片API憑證：coze_video_api
    - 憑證Key格式：COZE_COZE_VIDEO_API_7598017404148613135
    - 使用方式：透過環境變數自動讀取，無需手動填寫
  - 影片下載目錄：`./downloads`（自動建立）
  
  ## 操作步驟
  - 標準流程：
    1. 使用者輸入影片連結（抖音/B站/YouTube等）
    2. 呼叫`scripts/video_downloader.py`下載影片及後設資料
    3. 呼叫`scripts/coze_video_api.py`處理素材上傳、影片合成、狀態輪詢
    4. 基於知識庫參考文件（references/agents-prompts.md）執行多智慧體協同創作
    5. 各智慧體生成獨立輸出物，帶按讚/點踩/分享功能
    6. 成品影片支援高畫質下載、二次創作、平台發布
  
  - 影片下載步驟：
    1. 使用者輸入影片連結（支援抖音/B站/YouTube/快手/小紅書等主流平台）
    2. 呼叫`scripts/video_downloader.py download <URL>`下載影片
    3. 自動提取影片後設資料（標題、時長、作者、觀看數、按讚數等）
    4. 自動下載影片縮圖
    5. 輸出影片檔案路徑及完整後設資料JSON
    6. 熱門款解析鏟屎官基於下載的影片進行解析反推
  - 核心智慧體協同：
    1. 熱門款解析鏟屎官 - 影片連結解析反推、知識庫運營
    2. 萌趣創意鏟屎官 - 創意拆解、萌點提煉、導購植入點設計
    3. 故事腳本喵掌櫃 - 導購導向腳本創作、鏡頭拆分
    4. 分鏡腳本繪影匠 - COZE API適配標準化分鏡腳本
    5. 分鏡導攝喵sir - 畫面規範設計、商品展示構圖規劃
    6. 萌鏡畫師毛球匠 - 分鏡圖片生成、批次下載支援
    7. 字幕萌編寵醬 - 字幕參數包、導購口播文字稿創作
    8. 音效趣配汪醬 - 音效素材包、配音素材包創作
    9. 影片合成掌鏡官 - COZE API全素材整合、導購型成品影片合成
    10. 品控巡檢寵管家 - 全流程品檢、API適配校驗、導購引流導向校驗
    11. 資料迭代鏟屎官 - 資料統計、迭代最佳化建議、技能升級
  
  - 純API合成強制規則：
    1. 禁止使用任何本地依賴包（moviepy/opencv-python/mediapipe/pillow/numpy）
    2. 所有素材（圖片/字幕/音效）必須適配COZE API格式要求
    3. 腳本透過`scripts/coze_video_api.py`呼叫COZE API，使用coze-workload_identity的requests
    4. 出現本地包呼叫行為立即終止流程
  
  - 可選分支：
    - 當提供影片連結：執行熱門款解析反推→自動入庫→生成參考包
    - 當需要二次創作：從成品影片回溯至任意創作步驟修改
    - 當需要知識庫調取：根據導購品類/漲粉目標匹配熱門款參考
  
  ## 資源索引
  - 必要腳本：
    - [scripts/video_downloader.py](scripts/video_downloader.py)（用途：影片下載，支援抖音/B站/YouTube等主流平台，提取影片後設資料和縮圖）
    - [scripts/coze_video_api.py](scripts/coze_video_api.py)（用途：COZE影片API封裝，支援素材上傳、影片合成、狀態輪詢）
  - 領域參考：
    - [references/agents-prompts.md](references/agents-prompts.md)（何時讀取：執行多智慧體協同創作時，11大智慧體的完整提示詞）
    - [references/coze-api-specs.md](references/coze-api-specs.md)（何時讀取：配置API參數、校驗素材格式時）
    - [references/pet-character-library.md](references/pet-character-library.md)（何時讀取：設計萌寵角色規範時）
    - [references/output-templates.md](references/output-templates.md)（何時讀取：生成標準化輸出格式時）
    - [references/knowledge-base-structure.md](references/knowledge-base-structure.md)（何時讀取：理解知識庫分類、自動入庫邏輯時）
  - 輸出資產：（動態生成，無固定靜態資產）
  
  ## 注意事項
  - 嚴格遵循純API合成原則，所有技術操作透過COZE API完成
  - 導購引流為核心導向，所有創作環節需明確流量鉤子、商品植入點、關注引導點
  - 知識庫聯動實時生效，熱門款解析結果自動入庫，創作類智慧體自動調取參考
  - 全步驟互動資料實時同步至創作最佳化資料池，作為迭代最佳化依據
  - 素材支援單張/單個+整包批次下載，格式統一可重複使用
  - 成品影片支援高畫質下載、二次創作、平台發布，導購資訊清晰傳遞
  
  ## 使用範例
  
  ### 範例0：影片下載與解析反推（新增）
  - 功能說明：下載抖音/B站/YouTube等平台的影片，提取後設資料，進行解析反推
  - 執行方式：video_downloader.py + 熱門款解析鏟屎官
  - 關鍵參數：
    - 影片連結：使用者提供影片URL
    - 輸出目錄：./downloads（自動建立）
  - 範例流程：
    1. 使用者輸入影片連結（如https://www.bilibili.com/video/BV1xx411c7mD）
    2. 呼叫video_downloader.py下載影片
       ```bash
       python scripts/video_downloader.py download "https://www.bilibili.com/video/BV1xx411c7mD"
       ```
    3. 自動下載影片檔案（MP4格式）
    4. 自動提取影片後設資料（標題、時長、作者、觀看數、按讚數等）
    5. 自動下載影片縮圖
    6. 輸出結果包含：
       - 影片檔案路徑：`./downloads/影片標題.mp4`
       - 後設資料JSON：`./downloads/影片標題.info.json`
       - 縮圖：`./downloads/影片標題.jpg`
    7. 熱門款解析鏟屎官基於下載的影片進行解析反推
    8. 生成解析報告並自動入庫至知識庫
  
  ### 範例1：萌寵好物測評導購影片創作
  - 功能說明：創作貓糧測評導購影片，15秒直式9:16
  - 執行方式：多智慧體協同 + COZE API合成
  - 關鍵參數：
    - 創作型別：好物測評
    - 導購品類：主糧（貓糧）
    - 漲粉目標：精準寵主
    - 時長：15秒
    - 風格：萌寵輕喜劇
  - 範例流程：
    1. 熱門款解析鏟屎官調取知識庫，輸出測評導購參考包
    2. 萌趣創意鏟屎官拆解創意（前3秒展示貓糧包裝→貓咪饞嘴→吃糧鏡頭→關注引導）
    3. 故事腳本喵掌櫃創作導購腳本（口播："這款貓糧配方超乾淨，看看貓咪多喜歡！記得按讚關注"）
    4. 分鏡導攝喵sir規劃商品展示構圖（貓糧特寫+貓咪吃糧動作）
    5. 萌鏡畫師毛球匠生成4-6張分鏡圖片，支援批次下載
    6. 字幕萌編寵醬創作字幕參數包（賣點字幕：配方乾淨/無新增，關注引導：關注領優惠券）
    7. 音效趣配汪醬創作音效+配音素材包（輕快背景音樂+清晰口播音色）
    8. 影片合成掌鏡官呼叫COZE API整合所有素材
    9. 品控巡檢寵管家品檢API適配性、導購引流導向落地性
    10. 輸出成品影片+素材整合臺賬，支援下載與二次創作
  
  ### 範例2：熱門款影片連結解析反推
  - 功能說明：解析抖音熱門款萌寵導購影片，反推創作邏輯並自動入庫
  - 執行方式：熱門款解析鏟屎官 + 知識庫自動收錄
  - 關鍵參數：
    - 影片連結：使用者提供抖音/快手/小紅書等平台連結
    - 解析維度：流量邏輯、導購轉化邏輯、內容創作反推
  - 範例流程：
    1. 使用者輸入影片連結
    2. 熱門款解析鏟屎官解析影片（時長10萬+、按讚5萬+、轉化率2.3%）
    3. 生成解析報告：
       - 流量鉤子：前3秒貓咪從貓糧袋鑽出
       - 導購植入：第5秒口播提到貓糧品牌
       - 關注引導：第12秒字幕顯示"關注有福利"
    4. 自動按"寵物品種/創作型別/導購品類"分類入庫
    5. 輸出參考包供後續創作呼叫
  
  ### 範例3：全步驟互動最佳化與二次創作
  - 功能說明：基於成品影片的互動資料，最佳化創作並二次創作
  - 執行方式：互動資料採集 + 回溯修改 + 重新合成
  - 關鍵參數：
    - 成品影片：已生成的導購影片
    - 互動資料：按讚率85%、點踩率5%、評論回饋"商品賣點不突出"
  - 範例流程：
    1. 使用者檢視成品影片，按讚/點踩/分享/評論
    2. 資料迭代鏟屎官分析互動資料（點踩集中在"賣點不清晰"）
    3. 生成最佳化建議（強化商品賣點字幕、增加賣點特寫鏡頭）
    4. 使用者點擊"一鍵二次創作"
    5. 回溯至分鏡腳本繪影匠/分鏡導攝喵sir修改商品展示設計
    6. 重新生成素材、合成成品影片
    7. 輸出最佳化後成品影片，對比最佳化前後的導購引流效果
  
---

## 這個 Skill 在做什麼

萌寵導購短影音全流程創作技能，基於COZE影片大模型API，支援萌寵劇情/好物測評/品種科普/寵品導購等全型別創作，覆蓋熱門解析反推、知識庫聯動、互動最佳化、素材批次下載、全素材整合，實現從創意到導購引流型成品影片的自動化產生，適配15-30秒直式螢幕9:16主流平台規格。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
