---
title: "產品經理工具包 Skill"
description: "產品經理工具包 相關 Agent Skill，協助處理「Comprehensive toolkit for product managers including RICE prioritization, customer interview analysis, PRD templates, discovery frameworks, and go-to-market strategies. Use for feature prioritization, user research synthesis, requirement documentation, and product strategy development.」這類任務。"
category: "productivity"
tags:
  - "skill-store"
  - "local-skill"
  - "productivity"
featured: false
entryType: "local"
publishedAt: 2026-07-01
updatedAt: 2026-07-01
sourceRepo: "skill"
sourceRepoUrl: "https://github.com/anbeime/skill"
sourcePath: "skills/product-manager-toolkit/product-manager-toolkit/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/product-manager-toolkit/product-manager-toolkit/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/product-manager-toolkit/product-manager-toolkit/SKILL.md"
license: "CC-BY-4.0"
originalName: "product-manager-toolkit"
originalDescription: "產品經理工具包 相關 Agent Skill，協助處理「Comprehensive toolkit for product managers including RICE prioritization, customer interview analysis, PRD templates, discovery frameworks, and go-to-market strategies. Use for feature prioritization, user research synthesis, requirement documentation, and product strategy development.」這類任務。"
activation: "當你需要 產品經理工具包 的工作流程時使用。"
useCases:
  - "需要處理「產品經理工具包 相關 Agent Skill，協助處理「Comprehensive toolkit for product managers including RICE prioritization, customer interview analysis, PRD templates, discovery frameworks, and go-to-market strategies. Use for feature prioritization, user research synthesis, requirement documentation, and product strategy development.」這類任務」這類任務。"
  - "想直接閱讀或複製 product-manager-toolkit 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/product-manager-toolkit/product-manager-toolkit/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: product-manager-toolkit
  description: Comprehensive toolkit for product managers including RICE prioritization, customer interview analysis, PRD templates, discovery frameworks, and go-to-market strategies. Use for feature prioritization, user research synthesis, requirement documentation, and product strategy development.
  ---
  
  # Product Manager Toolkit
  
  Essential tools and frameworks for modern product management, from discovery to delivery.
  
  ## Quick Start
  
  ### For Feature Prioritization
  ```bash
  python scripts/rice_prioritizer.py sample  # Create sample CSV
  python scripts/rice_prioritizer.py sample_features.csv --capacity 15
  ```
  
  ### For Interview Analysis
  ```bash
  python scripts/customer_interview_analyzer.py interview_transcript.txt
  ```
  
  ### For PRD Creation
  1. Choose template from `references/prd_templates.md`
  2. Fill in sections based on discovery work
  3. Review with stakeholders
  4. Version control in your PM tool
  
  ## Core Workflows
  
  ### Feature Prioritization Process
  
  1. **Gather Feature Requests**
     - Customer feedback
     - Sales requests
     - Technical debt
     - Strategic initiatives
  
  2. **Score with RICE**
     ```bash
     # Create CSV with: name,reach,impact,confidence,effort
     python scripts/rice_prioritizer.py features.csv
     ```
     - **Reach**: Users affected per quarter
     - **Impact**: massive/high/medium/low/minimal
     - **Confidence**: high/medium/low
     - **Effort**: xl/l/m/s/xs (person-months)
  
  3. **Analyze Portfolio**
     - Review quick wins vs big bets
     - Check effort distribution
     - Validate against strategy
  
  4. **Generate Roadmap**
     - Quarterly capacity planning
     - Dependency mapping
     - Stakeholder alignment
  
  ### Customer Discovery Process
  
  1. **Conduct Interviews**
     - Use semi-structured format
     - Focus on problems, not solutions
     - Record with permission
  
  2. **Analyze Insights**
     ```bash
     python scripts/customer_interview_analyzer.py transcript.txt
     ```
     Extracts:
     - Pain points with severity
     - Feature requests with priority
     - Jobs to be done
     - Sentiment analysis
     - Key themes and quotes
  
  3. **Synthesize Findings**
     - Group similar pain points
     - Identify patterns across interviews
     - Map to opportunity areas
  
  4. **Validate Solutions**
     - Create solution hypotheses
     - Test with prototypes
     - Measure actual vs expected behavior
  
  ### PRD Development Process
  
  1. **Choose Template**
     - **Standard PRD**: Complex features (6-8 weeks)
     - **One-Page PRD**: Simple features (2-4 weeks)
     - **Feature Brief**: Exploration phase (1 week)
     - **Agile Epic**: Sprint-based delivery
  
  2. **Structure Content**
     - Problem → Solution → Success Metrics
     - Always include out-of-scope
     - Clear acceptance criteria
  
  3. **Collaborate**
     - Engineering for feasibility
     - Design for experience
     - Sales for market validation
     - Support for operational impact
  
  ## Key Scripts
  
  ### rice_prioritizer.py
  Advanced RICE framework implementation with portfolio analysis.
  
  **Features**:
  - RICE score calculation
  - Portfolio balance analysis (quick wins vs big bets)
  - Quarterly roadmap generation
  - Team capacity planning
  - Multiple output formats (text/json/csv)
  
  **Usage Examples**:
  ```bash
  # Basic prioritization
  python scripts/rice_prioritizer.py features.csv
  
  # With custom team capacity (person-months per quarter)
  python scripts/rice_prioritizer.py features.csv --capacity 20
  
  # Output as JSON for integration
  python scripts/rice_prioritizer.py features.csv --output json
  ```
  
  ### customer_interview_analyzer.py
  NLP-based interview analysis for extracting actionable insights.
  
  **Capabilities**:
  - Pain point extraction with severity assessment
  - Feature request identification and classification
  - Jobs-to-be-done pattern recognition
  - Sentiment analysis
  - Theme extraction
  - Competitor mentions
  - Key quotes identification
  
  **Usage Examples**:
  ```bash
  # Analyze single interview
  python scripts/customer_interview_analyzer.py interview.txt
  
  # Output as JSON for aggregation
  python scripts/customer_interview_analyzer.py interview.txt json
  ```
  
  ## Reference Documents
  
  ### prd_templates.md
  Multiple PRD formats for different contexts:
  
  1. **Standard PRD Template**
     - Comprehensive 11-section format
     - Best for major features
     - Includes technical specs
  
  2. **One-Page PRD**
     - Concise format for quick alignment
     - Focus on problem/solution/metrics
     - Good for smaller features
  
  3. **Agile Epic Template**
     - Sprint-based delivery
     - User story mapping
     - Acceptance criteria focus
  
  4. **Feature Brief**
     - Lightweight exploration
     - Hypothesis-driven
     - Pre-PRD phase
  
  ## Prioritization Frameworks
  
  ### RICE Framework
  ```
  Score = (Reach × Impact × Confidence) / Effort
  
  Reach: # of users/quarter
  Impact: 
    - Massive = 3x
    - High = 2x
    - Medium = 1x
    - Low = 0.5x
    - Minimal = 0.25x
  Confidence:
    - High = 100%
    - Medium = 80%
    - Low = 50%
  Effort: Person-months
  ```
  
  ### Value vs Effort Matrix
  ```
           Low Effort    High Effort
           
  High     QUICK WINS    BIG BETS
  Value    [Prioritize]   [Strategic]
           
  Low      FILL-INS      TIME SINKS
  Value    [Maybe]       [Avoid]
  ```
  
  ### MoSCoW Method
  - **Must Have**: Critical for launch
  - **Should Have**: Important but not critical
  - **Could Have**: Nice to have
  - **Won't Have**: Out of scope
  
  ## Discovery Frameworks
  
  ### Customer Interview Guide
  ```
  1. Context Questions (5 min)
     - Role and responsibilities
     - Current workflow
     - Tools used
  
  2. Problem Exploration (15 min)
     - Pain points
     - Frequency and impact
     - Current workarounds
  
  3. Solution Validation (10 min)
     - Reaction to concepts
     - Value perception
     - Willingness to pay
  
  4. Wrap-up (5 min)
     - Other thoughts
     - Referrals
     - Follow-up permission
  ```
  
  ### Hypothesis Template
  ```
  We believe that [building this feature]
  For [these users]
  Will [achieve this outcome]
  We'll know we're right when [metric]
  ```
  
  ### Opportunity Solution Tree
  ```
  Outcome
  ├── Opportunity 1
  │   ├── Solution A
  │   └── Solution B
  └── Opportunity 2
      ├── Solution C
      └── Solution D
  ```
  
  ## Metrics & Analytics
  
  ### North Star Metric Framework
  1. **Identify Core Value**: What's the #1 value to users?
  2. **Make it Measurable**: Quantifiable and trackable
  3. **Ensure It's Actionable**: Teams can influence it
  4. **Check Leading Indicator**: Predicts business success
  
  ### Funnel Analysis Template
  ```
  Acquisition → Activation → Retention → Revenue → Referral
  
  Key Metrics:
  - Conversion rate at each step
  - Drop-off points
  - Time between steps
  - Cohort variations
  ```
  
  ### Feature Success Metrics
  - **Adoption**: % of users using feature
  - **Frequency**: Usage per user per time period
  - **Depth**: % of feature capability used
  - **Retention**: Continued usage over time
  - **Satisfaction**: NPS/CSAT for feature
  
  ## Best Practices
  
  ### Writing Great PRDs
  1. Start with the problem, not solution
  2. Include clear success metrics upfront
  3. Explicitly state what's out of scope
  4. Use visuals (wireframes, flows)
  5. Keep technical details in appendix
  6. Version control changes
  
  ### Effective Prioritization
  1. Mix quick wins with strategic bets
  2. Consider opportunity cost
  3. Account for dependencies
  4. Buffer for unexpected work (20%)
  5. Revisit quarterly
  6. Communicate decisions clearly
  
  ### Customer Discovery Tips
  1. Ask "why" 5 times
  2. Focus on past behavior, not future intentions
  3. Avoid leading questions
  4. Interview in their environment
  5. Look for emotional reactions
  6. Validate with data
  
  ### Stakeholder Management
  1. Identify RACI for decisions
  2. Regular async updates
  3. Demo over documentation
  4. Address concerns early
  5. Celebrate wins publicly
  6. Learn from failures openly
  
  ## Common Pitfalls to Avoid
  
  1. **Solution-First Thinking**: Jumping to features before understanding problems
  2. **Analysis Paralysis**: Over-researching without shipping
  3. **Feature Factory**: Shipping features without measuring impact
  4. **Ignoring Technical Debt**: Not allocating time for platform health
  5. **Stakeholder Surprise**: Not communicating early and often
  6. **Metric Theater**: Optimizing vanity metrics over real value
  
  ## Integration Points
  
  This toolkit integrates with:
  - **Analytics**: Amplitude, Mixpanel, Google Analytics
  - **Roadmapping**: ProductBoard, Aha!, Roadmunk
  - **Design**: Figma, Sketch, Miro
  - **Development**: Jira, Linear, GitHub
  - **Research**: Dovetail, UserVoice, Pendo
  - **Communication**: Slack, Notion, Confluence
  
  ## Quick Commands Cheat Sheet
  
  ```bash
  # Prioritization
  python scripts/rice_prioritizer.py features.csv --capacity 15
  
  # Interview Analysis
  python scripts/customer_interview_analyzer.py interview.txt
  
  # Create sample data
  python scripts/rice_prioritizer.py sample
  
  # JSON outputs for integration
  python scripts/rice_prioritizer.py features.csv --output json
  python scripts/customer_interview_analyzer.py interview.txt json
  ```
  
  ---
  
  ## 與智慧體協作框架整合
  
  本工具包可以與智慧體協作框架無縫整合，實現產品團隊的智慧化協作。
  
  ### 整合場景
  
  #### 場景1: 功能優先順序評審會議
  將RICE排序工具與多智慧體會議決策結合：
  
  ```bash
  # 1. 使用RICE腳本生成初步排序
  python scripts/rice_prioritizer.py features.csv --capacity 15
  
  # 2. 呼叫智慧體團隊進行會議討論
  "請用產品團隊評審以下功能的優先順序：[功能列表]"
  
  # 3. 輸出包含RICE分數和會議共識的完整決策
  ```
  
  **參與智慧體**:
  - 產品經理（主持，使用RICE方法）
  - 技術架構師（評估實現難度）
  - 市場分析師（評估市場價值）
  - 財務顧問（評估ROI）
  
  **相關技能**:
  - `agent-team`: 智慧體協作框架
  - `multi-agent-meeting`: 會議決策流程
  
  **會議模板**: `multi-agent-meeting/assets/meeting-templates/product-feature-review.md`
  
  ---
  
  #### 場景2: 客戶洞察分析會議
  將訪談分析工具與智慧體團隊結合：
  
  ```bash
  # 1. 使用分析腳本提取洞察
  python scripts/customer_interview_analyzer.py interview.txt
  
  # 2. 呼叫智慧體團隊討論改進方案
  "分析這份訪談記錄並生成產品改進方案：[訪談文字]"
  
  # 3. 輸出包含洞察、方案和PRD草稿的完整報告
  ```
  
  **參與智慧體**:
  - 產品經理（方案制定）
  - 使用者研究員（洞察提取）
  - 設計師（體驗改進）
  - 技術架構師（可行性評估）
  
  **相關技能**:
  - `agent-team`: 智慧體協作框架
  - `multi-agent-meeting`: 會議決策流程
  
  **會議模板**: `multi-agent-meeting/assets/meeting-templates/customer-insight-analysis.md`
  
  ---
  
  #### 場景3: 產品路線圖規劃會議
  結合戰略分析和RICE排序：
  
  ```bash
  # 1. 戰略分析智慧體識別市場機會
  "掃描AI內容生成領域的市場機會"
  
  # 2. 使用RICE方法對機會進行排序
  python scripts/rice_prioritizer.py opportunities.csv --capacity 15
  
  # 3. 召開路線圖規劃會議
  "制定Q2產品路線圖，團隊容量15人月"
  
  # 4. 輸出季度路線圖和資源分配計劃
  ```
  
  **參與智慧體**:
  - 產品經理（路線圖規劃）
  - 戰略分析智慧體（市場機會識別）
  - 技術架構師（技術可行性）
  - 專案經理（資源和時間評估）
  
  **相關技能**:
  - `agent-team`: 智慧體協作框架（場景9：產品路線圖規劃會議）
  
  ---
  
  ### 產品經理智慧體定義
  
  當在智慧體協作框架中使用"產品經理智慧體"時，該智慧體具備以下能力：
  
  **專業知識**:
  - RICE優先順序排序方法
  - 客戶訪談分析技巧
  - PRD文件編寫規範
  - 產品路線圖規劃
  - 北極星指標定義
  
  **工具呼叫**:
  ```python
  # 優先順序排序
  self.call_tool("rice_prioritizer", features_csv, capacity=15)
  
  # 訪談分析
  self.call_tool("customer_interview_analyzer", interview_text)
  
  # PRD生成
  self.use_template("prd_templates", template_type="standard")
  ```
  
  **協作介面**:
  - **輸入**: 功能列表、使用者回饋、市場分析
  - **輸出**: 優先順序排序、PRD文件、產品路線圖
  
  **適用場景**:
  - 功能評審會議
  - 客戶洞察分析
  - 產品路線圖規劃
  - 需求文件編寫
  
  **智慧體定義**: 參考 `agent-team/references/agent-registry.md` 中的"產品經理智慧體（增強版）"
  
  ---
  
  ### 使用者研究員智慧體定義
  
  **專業知識**:
  - 客戶訪談分析
  - 痛點識別和嚴重程度評估
  - 使用者畫像構建
  - Jobs-to-be-Done 分析
  - 情感分析和主題提取
  
  **工具呼叫**:
  ```python
  # 訪談分析
  self.call_tool("customer_interview_analyzer", interview_text, output_format="json")
  
  # 提取關鍵洞察
  insights = self.extract_insights(analysis_result)
  ```
  
  **協作介面**:
  - **輸入**: 訪談記錄、使用者回饋、行為資料
  - **輸出**: 洞察報告、痛點列表、使用者畫像
  
  **適用場景**:
  - 客戶訪談分析
  - 使用者需求挖掘
  - 產品改進方向識別
  
  **智慧體定義**: 參考 `agent-team/references/agent-registry.md` 中的"使用者研究員智慧體"
  
  ---
  
  ### 完整協作範例
  
  **使用者輸入**:
  ```
  我有以下功能需要評審優先順序：
  1. AI自動生成腳本
  2. 多平台發布
  3. 資料分析看板
  4. 使用者協作功能
  5. API開放平台
  
  請幫我評審並生成優先順序排序，團隊容量15人月。
  ```
  
  **系統執行流程**:
  
  1. **識別場景**: 產品功能優先順序評審（agent-team 場景7）
  
  2. **組建團隊**: 
     - 產品經理（主持）
     - 技術架構師
     - 市場分析師
     - 財務顧問
  
  3. **資料準備**:
     ```bash
     # 產品經理智慧體呼叫RICE腳本
     python scripts/rice_prioritizer.py features.csv --capacity 15
     ```
  
  4. **會議討論** (使用 multi-agent-meeting 流程):
     ```
     > 產品經理: 根據RICE排序，AI自動生成腳本得分最高(85分)...
     > 技術架構師: 從技術角度，這個功能可行，可以使用現有大模型...
     > 市場分析師: 市場調研顯示，使用者對AI功能的需求強烈...
     > 財務顧問: 預計3個月可以回本，ROI較高...
     ```
  
  5. **決策輸出**:
     ```markdown
     # 功能優先順序排序結果
     
     ## 最終排序
     1. AI自動生成腳本 (RICE: 85) - P0
     2. 多平台發布 (RICE: 72) - P1
     3. API開放平台 (RICE: 58) - P2
     
     ## Q2開發計劃
     - AI自動生成腳本: 3人月
     - 多平台發布: 2人月
     - 預留緩衝: 1人月
     ```
  
  ---
  
  ### 相關資源
  
  **智慧體協作框架**:
  - 技能名稱: `agent-team`
  - 智慧體登錄檔: `agent-team/references/agent-registry.md`
  - 協作模板: `agent-team/references/collaboration-templates.md`
  
  **會議決策流程**:
  - 技能名稱: `multi-agent-meeting`
  - 會議模板: `multi-agent-meeting/assets/meeting-templates/`
  - 會議記錄格式: `multi-agent-meeting/references/meeting-record-format.md`
  
  **產品場景模板**:
  - 場景7: 產品功能優先順序評審會議
  - 場景8: 客戶訪談洞察分析會議
  - 場景9: 產品路線圖規劃會議
  - 場景10: 產品定價策略會議
  
  ---
  
  ### 整合優勢
  
  **整合前**:
  - 工具獨立使用，需要手動組合
  - 缺少多角度專業分析
  - 決策過程不透明
  
  **整合後**:
  - ✅ 一鍵啟動完整協作流程
  - ✅ 多智慧體專業分析
  - ✅ 實時展示討論過程
  - ✅ 標準化決策輸出
  - ✅ 工具自動呼叫
  
  **使用者價值**:
  - 節省時間: 從手動組合到一鍵啟動
  - 提升品質: 多角度專業分析
  - 降低門檻: 預設模板和流程
  - 完整閉環: 從資料分析到決策輸出
  
---

## 這個 Skill 在做什麼

產品經理工具包 相關 Agent Skill，協助處理「Comprehensive toolkit for product managers including RICE prioritization, customer interview analysis, PRD templates, discovery frameworks, and go-to-market strategies. Use for feature prioritization, user research synthesis, requirement documentation, and product strategy development.」這類任務。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
