---
title: "股票分析 Skill"
description: "股票個股分析，即時取得價格漲跌幅，計算技術指標和支撐位，辨識缺口並判斷支撐壓力，智慧預測未來3天走勢並給出操作建議"
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
sourcePath: "skills/stock-analysis/stock-analysis/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/stock-analysis/stock-analysis/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/stock-analysis/stock-analysis/SKILL.md"
license: "CC-BY-4.0"
originalName: "stock-analysis"
originalDescription: "股票個股分析，即時取得價格漲跌幅，計算技術指標和支撐位，辨識缺口並判斷支撐壓力，智慧預測未來3天走勢並給出操作建議"
activation: "當你需要 股票分析 的工作流程時使用。"
useCases:
  - "需要處理「股票個股分析，即時取得價格漲跌幅，計算技術指標和支撐位，辨識缺口並判斷支撐壓力，智慧預測未來3天走勢並給出操作建議」這類任務。"
  - "想直接閱讀或複製 stock-analysis 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/stock-analysis/stock-analysis/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: stock-analysis
  description: 股票個股分析，實時獲取價格漲跌幅，計算技術指標和支撐位，識別缺口並判斷支撐壓力，智慧預測未來3天走勢並給出操作建議
  dependency:
    python:
      - requests>=2.28.0
      - numpy>=1.24.0
      - pandas>=2.0.0
  ---
  
  # 股票個股分析
  
  ## 任務目標
  - 本 Skill 用於：對指定股票進行全面的技術分析，包括實時資料獲取、技術指標計算、支撐位壓力位分析、缺口識別分析
  - 能力包含：實時行情獲取、技術指標計算（均線、MACD、RSI）、支撐位壓力位識別、缺口識別（向上/向下缺口及支撐壓力作用）、趨勢判斷、未來走勢預測
  - 觸發條件：使用者提供股票程式碼並要求分析走勢、預測未來、獲取操作建議
  
  ## 前置準備
  - 依賴說明：
    ```
    requests>=2.28.0
    numpy>=1.24.0
    pandas>=2.0.0
    ```
  
  ## 操作步驟
  
  ### 標準流程
  
  1. **獲取股票程式碼並驗證**
     - 使用者提供股票程式碼，如：000001（平安銀行）、sh600000（浦發銀行）、000001.SZ（深交所格式）
     - 參考股票程式碼格式文件，確保程式碼格式正確
  
  2. **獲取實時行情資料**
     - 呼叫 `scripts/fetch_stock_data.py` 獲取實時行情和歷史K線資料
     - 參數：
       - `--stock_code`: 股票程式碼
       - `--days`: 獲取歷史資料天數（預設30天）
     - 回傳包含：當前價格、漲跌幅、成交量、歷史K線資料
  
  3. **計算技術指標和支撐位**
     - 呼叫 `scripts/analyze_stock.py` 進行技術分析
     - 參數：
       - `--data_file`: 上一步獲取的資料檔案路徑
     - 計算結果：
       - MA5/MA10/MA20/MA60 均線
       - MACD 指標
       - RSI 指標
       - 支撐位和壓力位
       - **缺口分析**（向上缺口和向下缺口）
       - 成交量分析
       - 趨勢判斷
  
  4. **分析當前走勢**
     - 基於技術指標進行多維度分析：
       - 均線排列（多頭排列/空頭排列/纏繞）
       - MACD金叉死叉狀態
       - RSI超買超賣狀態
       - 成交量配合情況
       - K線形態分析
       - **缺口分析**：
         - 向上缺口：通常構成支撐位（回撥時缺口上沿可能成為支撐）
         - 向下缺口：通常構成壓力位（反彈時缺口下沿可能成為壓力）
         - 缺口大小和位置對走勢的影響
  
  5. **預測未來3天走勢**
     - 綜合技術指標和趨勢分析，對未來3天走勢進行判斷
     - 考慮因素：趨勢方向、支撐壓力位、**缺口支撐壓力**、成交量變化、市場情緒
     - 給出機率評估：上漲/下跌/橫盤的機率和強度
  
  6. **生成操作建議**
     - 根據分析結果和預測，給出明確的操作建議：
       - 買入/持有/賣出/觀望
       - 建議的買入/賣出價格區間
       - 止損位和止盈位設定
       - **缺口相關的操作提示**（如：向上缺口未回補前可作為支撐參考）
       - 風險提示和注意事項
  
  ## 資源索引
  - 獲取資料：見 [scripts/fetch_stock_data.py](scripts/fetch_stock_data.py)（用途：獲取股票實時行情和歷史K線）
  - 技術分析：見 [scripts/analyze_stock.py](scripts/analyze_stock.py)（用途：計算技術指標和支撐位壓力位）
  - 程式碼格式：見 [references/stock_code_format.md](references/stock_code_format.md)（用途：股票程式碼格式參考）
  
  ## 注意事項
  - 股票市場存在風險，所有分析僅供參考，不構成投資建議
  - 技術分析基於歷史資料，不能保證未來表現
  - 建議結合基本面分析和市場環境進行綜合判斷
  - 實時資料可能存在延遲，請以實際交易資料為準
  - **缺口分析要點**：
    - 向上缺口（跳空高開）：通常在回撥時可能構成支撐，關注缺口是否回補
    - 向下缺口（跳空低開）：通常在反彈時可能構成壓力，關注缺口是否回補
    - 缺口越大，其支撐或壓力作用通常越強
    - 成交量配合的缺口更具參考意義
    - 近期缺口的參考價值高於遠期缺口
  - 必須在所有建議中包含風險提示
  
  ## 使用範例
  
  ### 範例1：A股股票分析
  ```
  使用者：分析000001平安銀行
  執行：
  1. 呼叫 fetch_stock_data.py --stock_code 000001 --days 30
  2. 呼叫 analyze_stock.py --data_file stock_data_000001.json
  3. 基於分析結果生成走勢預測和操作建議
  ```
  
  ### 範例2：港股股票分析
  ```
  使用者：分析騰訊控股 00700.HK
  執行：
  1. 呼叫 fetch_stock_data.py --stock_code 00700.HK --days 30
  2. 呼叫 analyze_stock.py --data_file stock_data_00700.HK.json
  3. 生成分析報告和操作建議
  ```
  
  ### 範例3：美股股票分析
  ```
  使用者：分析AAPL蘋果公司
  執行：
  1. 呼叫 fetch_stock_data.py --stock_code AAPL --days 30
  2. 呼叫 analyze_stock.py --data_file stock_data_AAPL.json
  3. 提供全面的技術分析報告
  ```
  
---

## 這個 Skill 在做什麼

股票個股分析，即時取得價格漲跌幅，計算技術指標和支撐位，辨識缺口並判斷支撐壓力，智慧預測未來3天走勢並給出操作建議

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
