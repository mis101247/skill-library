---
title: "論文分析助理 Skill"
description: "根據arXiv論文網址自動下載PDF並進行多維度分析，包括文字提取、詞頻分析、語音播報、播客對話產生、互動式網頁、PPT、總結圖和引用分析"
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
sourcePath: "skills/paper-analysis-assistant/paper-analysis-assistant/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/paper-analysis-assistant/paper-analysis-assistant/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/paper-analysis-assistant/paper-analysis-assistant/SKILL.md"
license: "CC-BY-4.0"
originalName: "paper-analysis-assistant"
originalDescription: "根據arXiv論文網址自動下載PDF並進行多維度分析，包括文字提取、詞頻分析、語音播報、播客對話產生、互動式網頁、PPT、總結圖和引用分析"
activation: "當你需要 論文分析助理 的工作流程時使用。"
useCases:
  - "需要處理「根據arXiv論文網址自動下載PDF並進行多維度分析，包括文字提取、詞頻分析、語音播報、播客對話產生、互動式網頁、PPT、總結圖和引用分析」這類任務。"
  - "想直接閱讀或複製 paper-analysis-assistant 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/paper-analysis-assistant/paper-analysis-assistant/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: paper-analysis-assistant
  description: 根據arXiv論文網址自動下載PDF並進行多維度分析，包括文字提取、詞頻分析、語音播報、播客對話生成、互動式網頁、PPT、總結圖和引用分析
  dependency:
    python:
      - requests==2.31.0
      - pdfplumber==0.10.3
      - python-pptx==0.6.23
      - pandas==2.1.4
      - pyttsx3==2.90
      - beautifulsoup4==4.12.2
      - nltk==3.8.1
  ---
  
  # 論文分析助手
  
  ## 任務目標
  - 本 Skill 用於:根據 arXiv 論文網址自動進行多維度分析並生成多種格式的輸出
  - 能力包含:PDF 下載與文字提取、詞頻統計、語音合成、播客對話生成、互動式網頁、PPT 生成、總結圖生成、引用分析
  - 觸發條件:使用者提供 arXiv 論文網址或論文 PDF 檔案
  
  ## 前置準備
  - 依賴說明:所需 Python 包已在 dependency 中列出
  - 停用詞資源:需準備英文停用詞列表，用於詞頻分析過濾
  
  ## 操作步驟
  - 標準流程:
    1. **下載 PDF 檔案**
       - 呼叫 `scripts/download_pdf.py` 下載 arXiv PDF
       - 參數:`--url` (arXiv 論文網址), `--output` (輸出 PDF 檔案路徑)
    2. **提取 PDF 文字**
       - 呼叫 `scripts/extract_text.py` 提取純文字
       - 參數:`--pdf` (PDF 檔案路徑), `--output` (輸出 txt 檔案路徑)
    3. **詞頻分析**
       - 呼叫 `scripts/analyze_word_frequency.py` 進行詞頻統計
       - 參數:`--txt` (txt 檔案路徑), `--output` (輸出 csv 檔案路徑)
       - 該腳本會自動過濾英文停用詞（見 references/stopwords.txt）
    4. **文字轉語音**
       - 呼叫 `scripts/text_to_speech.py` 將文字轉為語音
       - 參數:`--txt` (txt 檔案路徑), `--output` (輸出 wav 檔案路徑)
    5. **生成播客對話**
       - **智慧體步驟**:根據論文內容生成雙人對話腳本（包含兩個角色的對話內容）
       - **腳本步驟**:呼叫 `scripts/dialogue_to_podcast.py` 將對話腳本轉換為語音
       - 參數:`--dialogue` (對話腳本檔案路徑), `--output` (輸出 wav 檔案路徑)
    6. **生成互動式網頁**
       - 呼叫 `scripts/generate_html.py` 生成互動式網頁
       - 參數:`--txt` (txt 檔案路徑), `--word_freq` (詞頻 csv 檔案路徑), `--output` (輸出 html 檔案路徑)
    7. **生成 PPT**
       - 呼叫 `scripts/generate_ppt.py` 生成簡報
       - 參數:`--txt` (txt 檔案路徑), `--output` (輸出 pptx 檔案路徑)
    8. **生成總結圖**
       - **智慧體步驟**:根據論文內容直接生成"一圖勝千言"的總結圖（PNG 格式）
    9. **分析引用連結**
       - 呼叫 `scripts/extract_references.py` 提取引用連結
       - 參數:`--txt` (txt 檔案路徑), `--output` (輸出 csv 檔案路徑)
  
  - 可選分支:
    - 當 使用者直接提供 PDF 檔案:跳過步驟 1，直接從步驟 2 開始
    - 當 使用者只需要部分分析:根據需求選擇性執行對應步驟
  
  ## 資源索引
  - 下載腳本:見 [scripts/download_pdf.py](scripts/download_pdf.py)(用途:下載 arXiv PDF)
  - 文字提取:見 [scripts/extract_text.py](scripts/extract_text.py)(用途:提取 PDF 純文字)
  - 詞頻分析:見 [scripts/analyze_word_frequency.py](scripts/analyze_word_frequency.py)(用途:統計詞頻並過濾停用詞)
  - 語音合成:見 [scripts/text_to_speech.py](scripts/text_to_speech.py)(用途:文字轉語音)
  - 播客生成:見 [scripts/dialogue_to_podcast.py](scripts/dialogue_to_podcast.py)(用途:對話腳本轉語音)
  - 網頁生成:見 [scripts/generate_html.py](scripts/generate_html.py)(用途:生成互動式 HTML)
  - PPT 生成:見 [scripts/generate_ppt.py](scripts/generate_ppt.py)(用途:生成 PPT 簡報)
  - 引用提取:見 [scripts/extract_references.py](scripts/extract_references.py)(用途:提取引用連結)
  - 停用詞表:見 [references/stopwords.txt](references/stopwords.txt)(用途:詞頻分析時的停用詞過濾)
  
  ## 注意事項
  - 確保所有腳本參數路徑正確，特別是輸入輸出檔案的相對路徑
  - 語音合成功能需要系統支援語音引擎（pyttsx3）
  - 播客對話的腳本內容由智慧體生成，需確保對話格式正確
  - 總結圖由智慧體直接生成，無需呼叫腳本
  
  ## 使用範例
  - 範例 1:完整分析流程
    ```bash
    # 下載 PDF
    python scripts/download_pdf.py --url "https://arxiv.org/abs/2301.00001" --output ./user-data/paper.pdf
    # 提取文字
    python scripts/extract_text.py --pdf ./user-data/paper.pdf --output ./user-data/paper.txt
    # 詞頻分析
    python scripts/analyze_word_frequency.py --txt ./user-data/paper.txt --output ./user-data/word_freq.csv
    # 語音合成
    python scripts/text_to_speech.py --txt ./user-data/paper.txt --output ./user-data/paper.wav
    # 播客對話（智慧體生成對話腳本後）
    python scripts/dialogue_to_podcast.py --dialogue ./user-data/dialogue.txt --output ./user-data/podcast.wav
    # 生成網頁
    python scripts/generate_html.py --txt ./user-data/paper.txt --word_freq ./user-data/word_freq.csv --output ./user-data/analysis.html
    # 生成 PPT
    python scripts/generate_ppt.py --txt ./user-data/paper.txt --output ./user-data/presentation.pptx
    # 提取引用
    python scripts/extract_references.py --txt ./user-data/paper.txt --output ./user-data/references.csv
    ```
  - 範例 2:快速分析（僅詞頻和引用）
    ```bash
    python scripts/analyze_word_frequency.py --txt ./user-data/paper.txt --output ./user-data/word_freq.csv
    python scripts/extract_references.py --txt ./user-data/paper.txt --output ./user-data/references.csv
    ```
  
---

## 這個 Skill 在做什麼

根據arXiv論文網址自動下載PDF並進行多維度分析，包括文字提取、詞頻分析、語音播報、播客對話產生、互動式網頁、PPT、總結圖和引用分析

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
