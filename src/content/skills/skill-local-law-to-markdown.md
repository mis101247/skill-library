---
title: "法律檔案轉 Markdown Skill"
description: "處理 PDF 文字擷取、建立、表單與檔案分析任務。"
category: "docs"
tags:
  - "skill-store"
  - "local-skill"
  - "docs"
featured: false
entryType: "local"
publishedAt: 2026-07-01
updatedAt: 2026-07-01
sourceRepo: "skill"
sourceRepoUrl: "https://github.com/anbeime/skill"
sourcePath: "skills/legal-assistant-skills-main/law-to-markdown/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/legal-assistant-skills-main/law-to-markdown/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/legal-assistant-skills-main/law-to-markdown/SKILL.md"
license: "CC-BY-4.0"
originalName: "law-to-markdown"
originalDescription: "處理 PDF 文字擷取、建立、表單與檔案分析任務。"
activation: "當你需要 法律檔案轉 Markdown 的工作流程時使用。"
useCases:
  - "需要處理「處理 PDF 文字擷取、建立、表單與檔案分析任務」這類任務。"
  - "想直接閱讀或複製 law-to-markdown 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/legal-assistant-skills-main/law-to-markdown/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: law-to-markdown
  description: 將法條/規範檔案（.txt/.docx/.pdf）轉為 Markdown。適用於使用者要求“法條轉 markdown”“pdf/docx 轉 markdown”。處理 .pdf/.docx 時先檢查是否已安裝 mineru-ocr skill；未安裝先引導安裝，安裝後優先用 mineru-ocr；僅在使用者明確同意時再用本地回退方案。
  ---
  
  # Law To Markdown
  
  ## 處理規則
  
  1. 輸入為 `.txt`：直接轉存為 `.md`。
  2. 輸入為 `.pdf` / `.docx`：
     - 先檢查是否已安裝 `mineru-ocr` skill。
     - 未安裝：提示先安裝 `mineru-ocr`，安裝地址：
       `https://github.com/cat-xierluo/legal-skills/tree/main/skills/mineru-ocr`
     - 已安裝：優先呼叫 `mineru-ocr` 處理。
     - 呼叫失敗：先提示檢查 `mineru-ocr` 配置/Token。
     - 僅當使用者明確同意時，才使用本地回退（`python-docx` / `pdfplumber`）。
  3. 第一階段完成後預設執行第二階段格式調整（僅格式，不改原文字元）：
     - 由呼叫該 skill 的大模型先判斷“法律/非法律”，並把結果傳給腳本。
     - 若呼叫方未傳結果，則腳本使用硬規則自動識別（`--law-decision auto`）。
     - 法律名稱 `#`
     - 編/分編 `##`
     - 章 `###`
     - 節 `####`
     - 條 `#####`（僅“第X條”為標題；`第X條【條標】`整行為標題不拆）
     - 款/項/目無標題
     - 項、目按標記換行
     - 清理多餘空格：去行尾空格、去行首 ASCII 空格、去正文行首全形縮排、規範標題後的空格
  4. 若識別為明顯非法律文字（如 GB/標準類文件），第二階段明確拒絕：`Stage2: rejected (non-law-document)`。
  5. 若第二階段未識別法律結構或保真校驗失敗，則自動 no-op，不改文字。
  6. 預設執行第三階段檢查（雙子階段，硬門檻）：
     - Stage3-A：校驗 `stage2` 相對 `stage1` 的文字內容準確性（去標題符號與空白後字元流必須一致）
     - Stage3-B：校驗結構效果（結構層級、條標題規則、非法律策略、空格規範、項/目換行）
     - 任一失敗觸發自動重走，最多 2 次；仍失敗預設報錯退出
  
  ## 二階段識別參數
  
  - `--law-decision law`：呼叫方已判定為法律文字，直接按法律結構最佳化。
  - `--law-decision non-law`：呼叫方已判定為非法律文字，階段二直接拒絕。
  - `--law-decision auto`：不傳判定時的預設模式，使用腳本內硬規則。
  
  ## 三階段參數
  
  - `--skip-stage3-check`：跳過第三階段檢查（預設不跳過）。
  - `--stage3-max-retries`：失敗後自動重走次數，預設 `2`。
  - `--stage3-strict` / `--no-stage3-strict`：
    - 預設嚴格模式（失敗即報錯退出）
    - 非嚴格模式僅輸出報告，不阻斷流程
  - `--artifact-level minimal|standard|debug`：
    - `minimal`（預設）：面向交付，輸出最少
    - `standard`：保留過程檔案（`stage1/stage2/stage3-check`）便於排查
    - `debug`：保留全部過程產物（包含除錯資訊）
  
  ## 輸出規則
  
  - 預設輸出到輸入檔案同目錄的 `markdown/` 子目錄，並按輸入檔名建立獨立目錄：
    - `markdown/<檔名>/`
  - 預設（`--artifact-level minimal`）輸出：
    - `<原檔名>+稽核報告.md`（詳細過程和結論）
    - `<原檔名>+最終成果.md`（僅法律文字且稽核透過時生成）
  - 非法律文件（如 GB/標準類）：
    - 結論為“拒絕處理”
    - 僅輸出 `<原檔名>+稽核報告.md`
    - 不輸出 `<原檔名>+最終成果.md`
  - 稽核未透過時會自動保留過程檔案用於排查：
    - `<檔名>.stage1.md`
    - `<檔名>.stage2.md`
    - `<檔名>.stage3-check.md`
  - 若需更多產物可切換：
    - `--artifact-level standard`：保留 `stage1/stage2/stage3-check`
    - `--artifact-level debug`：保留全部除錯產物
  - 可透過命令參數指定 `--out` 或 `--out-dir`。
  
  ## 常用命令
  
  ```bash
  python3 law-to-markdown/scripts/law_to_markdown.py "input.txt"
  python3 law-to-markdown/scripts/law_to_markdown.py "input.docx"
  python3 law-to-markdown/scripts/law_to_markdown.py "input.pdf"
  ```
  
  使用者明確同意回退時：
  
  ```bash
  python3 law-to-markdown/scripts/law_to_markdown.py "input.docx" --allow-fallback
  python3 law-to-markdown/scripts/law_to_markdown.py "input.pdf" --allow-fallback
  ```
  
---

## 這個 Skill 在做什麼

處理 PDF 文字擷取、建立、表單與檔案分析任務。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
