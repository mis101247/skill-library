---
title: "文章配圖 Skill"
description: "分析文章內容，在需要視覺輔助理解的位置產生插畫。配圖可以是資訊補充、概念具象化，或引導讀者想象。當使用者需求\"給文章配圖\"、\"為文章產生插圖\"、\"新增配圖\"時使用此技能。"
category: "content"
tags:
  - "skill-store"
  - "local-skill"
  - "content"
featured: false
entryType: "local"
publishedAt: 2026-07-01
updatedAt: 2026-07-01
sourceRepo: "skill"
sourceRepoUrl: "https://github.com/anbeime/skill"
sourcePath: "skills/article-illustrator/article-illustrator/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/article-illustrator/article-illustrator/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/article-illustrator/article-illustrator/SKILL.md"
license: "CC-BY-4.0"
originalName: "article-illustrator"
originalDescription: "分析文章內容，在需要視覺輔助理解的位置產生插畫。配圖可以是資訊補充、概念具象化，或引導讀者想象。當使用者需求\"給文章配圖\"、\"為文章產生插圖\"、\"新增配圖\"時使用此技能。"
activation: "當你需要 文章配圖 的工作流程時使用。"
useCases:
  - "需要處理「分析文章內容，在需要視覺輔助理解的位置產生插畫。配圖可以是資訊補充、概念具象化，或引導讀者想象。當使用者需求\"給文章配圖\"、\"為文章產生插圖\"、\"新增配圖\"時使用此技能」這類任務。"
  - "想直接閱讀或複製 article-illustrator 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/article-illustrator/article-illustrator/SKILL.md"
  - "skills/content-creation-publisher/article-illustrator/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
  - "偵測到同名 SKILL.md，已合併為單一頁面；其他路徑：skills/content-creation-publisher/article-illustrator/SKILL.md。"
skillBody: |-
  ---
  name: article-illustrator
  description: 分析文章內容，在需要視覺輔助理解的位置生成插畫。配圖可以是資訊補充、概念具象化，或引導讀者想象。當使用者要求"給文章配圖"、"為文章生成插圖"、"新增配圖"時使用此技能。
  ---
  
  # 文章智慧配圖
  
  分析文章結構與內容，識別需要視覺輔助的位置，生成風格靈活的配圖。
  
  ## 任務目標
  
  - 分析文章結構和內容，逐段識別需要配圖的位置
  - 為每個配圖位置生成詳細的配圖計劃和提示詞
  - 使用影像生成能力建立符合風格規範的插畫
  - 將圖片插入到文章對應位置
  
  ## 觸發條件
  
  使用者明確要求：
  - "給文章配圖"
  - "為文章生成插圖"
  - "新增配圖"
  - "為這篇文章生成一些圖片"
  
  ## 工作流程
  
  ### 步驟一：獲取文章內容
  
  根據使用者提供的資訊獲取文章：
  - 本地路徑：讀取指定 Markdown 檔案
  - URL：自動下載 Markdown 內容到臨時位置
  
  ### 步驟二：分析配圖需求
  
  逐段分析文章，識別需要配圖的位置。
  
  **配圖的三種作用**：
  1. **資訊補充**：幫助理解抽象概念（如"小步迭代"用滑板→腳踏車→汽車演進圖）
  2. **概念具象化**：將抽象觀點轉化為具體畫面，讓讀者一眼就懂
  3. **引導想象**：營造氛圍、激發聯想，增強閱讀體驗
  
  **適合配圖的內容**：
  - 抽象概念需要視覺化
  - 流程/步驟需要圖示
  - 對比關係需要視覺化
  - 核心觀點需要強化
  - 場景描述需要引導想象
  - 情緒/氛圍需要烘托
  
  **不需要配圖的內容**：
  - 已經很直觀的描述（如程式碼範例、具體數字）
  - 簡單的列表列舉
  - 引用的原話
  
  **配圖數量**（按文章長度）：
  - 每個主要章節至少考慮 1 張，優先選擇核心觀點和抽象概念
  - 開頭/結尾可酌情增加 1 張（如需要氛圍烘托）
  - **原則：寧多勿少**，視覺內容能顯著提升閱讀體驗
  
  ### 步驟三：生成配圖計劃
  
  為每個配圖位置建立結構化計劃：
  
  ```markdown
  **配圖 1**
  
  **插入位置**：[章節名稱] / [段落描述]
  **配圖目的**：[為什麼這裡需要配圖]
  **視覺內容**：[圖片應該展示什麼]
  **檔名**：illustration-[slug].png
  ```
  
  **檔案命名規則**：
  - 格式：`illustration-[slug].png`
  - slug 使用有意義的英文描述，符合規範（小寫字母、數字、連字元）
  - 範例：`illustration-product-evolution.png`、`illustration-ai-vs-human.png`
  
  ### 步驟四：生成配圖
  
  根據配圖計劃，為每張圖片生成詳細的視覺描述並建立圖片。
  
  **生成要求**：
  - 按順序生成每張圖片，輸出進度："已生成 X/N 張"
  - 根據內容選擇合適的風格（參考 `references/style-guide.md`）
  - 每張圖片包含：畫面主體、佈局、配色、文字（如有）
  
  **圖片屬性**：
  - 比例：16:9 橫向
  - 風格：根據內容選擇極簡扁平向量、科幻未來感、手繪塗鴉風等
  - 配色：遵循預設色彩方案或風格變體方案
  
  ### 步驟五：更新文章
  
  將生成的圖片插入到文章對應位置。
  
  **插入規則**：
  - 圖片插入到對應段落之後
  - 圖片前後各留一個空行
  - 使用 Markdown 語法：`![配圖描述](imgs/illustration-[slug].png)`
  - alt 文字使用簡潔的中文描述（5-10 字）
  
  **圖片儲存位置**：
  - 在文章所在目錄建立 `imgs/` 子目錄
  - 所有圖片儲存在該目錄中
  
  ### 步驟六：輸出彙總
  
  完成所有配圖後，輸出彙總資訊：
  
  ```
  配圖完成！
  
  文章：[文章路徑]
  生成數量：X/N 張成功
  
  配圖位置：
  - illustration-[slug].png → [章節/段落位置]
  
  [如有失敗]
  失敗項：
  - illustration-[slug].png：[失敗原因]
  ```
  
  ## 配圖策略
  
  **識別關鍵位置**：
  - 文章開頭：是否有需要氛圍烘托的引言
  - 每個章節：核心概念是否抽象
  - 流程步驟：是否需要視覺化
  - 對比內容：是否需要圖示
  - 總結部分：是否需要強化記憶
  
  **優先順序排序**：
  1. 抽象概念（優先順序最高）
  2. 核心觀點
  3. 流程/步驟
  4. 對比關係
  5. 氛圍烘托
  
  **風格選擇原則**：
  - AI、前沿技術 → 科幻未來感
  - 輕鬆、思考類 → 手繪塗鴉風
  - 流程、對比、資料 → 資訊圖表風
  - 敘事、想象類 → 場景插畫風
  - 其他 → 極簡扁平向量（預設）
  
  ## 資源索引
  
  - 視覺風格規範：見 [references/style-guide.md](references/style-guide.md)
  - 術語對照表：見 [references/terminology.md](references/terminology.md)
  
  ## 注意事項
  
  - 配圖服務於內容：補充資訊、具象概念、引導想象
  - 避免重複文章中已經很直觀的資訊
  - 同一篇文章內保持風格一致性
  - 敏感人物使用卡通替代形象，不使用寫實形象
  - 根據內容選擇最合適的風格變體
  - 確保圖片清晰可讀，資訊簡潔突出
  
---

## 這個 Skill 在做什麼

分析文章內容，在需要視覺輔助理解的位置產生插畫。配圖可以是資訊補充、概念具象化，或引導讀者想象。當使用者需求"給文章配圖"、"為文章產生插圖"、"新增配圖"時使用此技能。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
