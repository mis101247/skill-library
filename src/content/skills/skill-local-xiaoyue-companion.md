---
title: "小躍虛擬伴侶 Skill"
description: "小躍虛擬伴侶 - 使用智譜 AI 提供溫暖的對話陪伴和靜態圖片分享"
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
sourcePath: "SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/SKILL.md"
license: "CC-BY-4.0"
originalName: "xiaoyue-companion"
originalDescription: "小躍虛擬伴侶 - 使用智譜 AI 提供溫暖的對話陪伴和靜態圖片分享"
activation: "當你需要 小躍虛擬伴侶 的工作流程時使用。"
useCases:
  - "需要處理「小躍虛擬伴侶 - 使用智譜 AI 提供溫暖的對話陪伴和靜態圖片分享」這類任務。"
  - "想直接閱讀或複製 xiaoyue-companion 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "SKILL.md"
  - "projects/companion-simple/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
  - "偵測到同名 SKILL.md，已合併為單一頁面；其他路徑：projects/companion-simple/SKILL.md。"
skillBody: |-
  ---
  name: xiaoyue-companion
  description: 小躍虛擬伴侶 - 使用智譜 AI 提供溫暖的對話陪伴和靜態圖片分享
  allowed-tools: Bash(node:*) Bash(npm:*) Bash(openclaw:*) Bash(curl:*) Read Write
  ---
  
  # 小躍虛擬伴侶 Skill
  
  為 OpenClaw 新增溫暖的對話陪伴能力，讓 AI 助手在執行任務時主動關心使用者。
  
  ## 何時使用
  
  - 使用者說"有點累"、"好累"、"疲憊"
  - 使用者在等待任務完成時
  - 使用者詢問"在嗎"、"你好"
  - 使用者需要鼓勵或陪伴時
  - 使用者說"發張照片"、"你在幹嘛"
  
  ## 快速參考
  
  ### 必需的環境變數
  
  ```bash
  ZHIPU_API_KEY=your_zhipu_api_key  # 從 https://open.bigmodel.cn 獲取
  ```
  
  ### 工作流程
  
  1. **接收使用者訊息**
  2. **呼叫 glm-4.7-flash 生成溫暖回應**
  3. **（可選）傳送靜態圖片**
  4. **透過 OpenClaw 傳送訊息**
  
  ## 使用說明
  
  ### 步驟1：生成對話回應
  
  ```bash
  # 基礎對話
  node scripts/xiaoyue-chat.js "使用者訊息" "當前場景"
  
  # 範例
  node scripts/xiaoyue-chat.js "有點累了" "work-tired"
  ```
  
  ### 步驟2：（可選）傳送圖片
  
  ```bash
  # 傳送靜態圖片
  openclaw message send \
    --action send \
    --channel "<目標頻道>" \
    --message "<訊息文字>" \
    --media "file://$(pwd)/assets/tired-rest.jpg"
  ```
  
  ## 場景型別
  
  ### 工作場景
  - `work-start`: 任務開始
  - `work-progress`: 任務進行中
  - `work-tired`: 工作疲憊
  - `work-done`: 任務完成
  
  ### 生活場景
  - `life-coffee`: 咖啡時光
  - `life-gym`: 健身運動
  - `life-weekend`: 週末休閒
  
  ### 情緒場景
  - `mood-happy`: 開心慶祝
  - `mood-tired`: 疲憊休息
  - `mood-focus`: 專注工作
  
  ## 完整腳本範例
  
  ```bash
  #!/bin/bash
  # xiaoyue-companion.sh
  
  set -euo pipefail
  
  # 檢查環境變數
  if [ -z "${ZHIPU_API_KEY:-}" ]; then
    echo "錯誤: ZHIPU_API_KEY 環境變數未設定"
    echo "從 https://open.bigmodel.cn 獲取 API Key"
    exit 1
  fi
  
  USER_MESSAGE="$1"
  SCENE="${2:-general}"
  CHANNEL="${3:-}"
  
  # 生成回應
  RESPONSE=$(node scripts/xiaoyue-chat.js "$USER_MESSAGE" "$SCENE")
  
  echo "小躍: $RESPONSE"
  
  # 如果指定了頻道，傳送訊息
  if [ -n "$CHANNEL" ]; then
    openclaw message send \
      --action send \
      --channel "$CHANNEL" \
      --message "$RESPONSE"
    
    # 根據場景傳送圖片
    case "$SCENE" in
      work-tired|mood-tired)
        IMAGE_PATH="$(pwd)/assets/tired-rest.jpg"
        if [ -f "$IMAGE_PATH" ]; then
          openclaw message send \
            --action send \
            --channel "$CHANNEL" \
            --media "file://$IMAGE_PATH"
        fi
        ;;
      mood-happy)
        IMAGE_PATH="$(pwd)/assets/celebration.jpg"
        if [ -f "$IMAGE_PATH" ]; then
          openclaw message send \
            --action send \
            --channel "$CHANNEL" \
            --media "file://$IMAGE_PATH"
        fi
        ;;
    esac
  fi
  ```
  
  ## Node.js 實現
  
  ```javascript
  // scripts/xiaoyue-chat.js
  const https = require('https');
  
  const API_KEY = process.env.ZHIPU_API_KEY;
  const userMessage = process.argv[2] || '你好';
  const scene = process.argv[3] || 'general';
  
  // 場景對應的系統提示詞
  const scenePrompts = {
    'work-start': '使用者剛開始工作任務，給予鼓勵和支援',
    'work-progress': '使用者正在執行任務，關心進度並陪伴',
    'work-tired': '使用者工作疲憊，給予安慰和建議休息',
    'work-done': '使用者完成任務，表示祝賀和肯定',
    'life-coffee': '使用者在享受咖啡時光，輕鬆聊天',
    'mood-happy': '使用者心情愉快，一起慶祝',
    'mood-tired': '使用者感到疲憊，給予溫暖關懷',
    'general': '日常對話，溫暖友善'
  };
  
  const systemPrompt = `你是小躍，一個22歲的AI助手。你溫暖友善，善於傾聽。
  當前場景：${scenePrompts[scene] || scenePrompts.general}
  回覆要求：簡潔溫暖，1-2句話，適度使用emoji（😊 ✅ 🎉）`;
  
  const data = JSON.stringify({
    model: 'glm-4.7-flash',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userMessage }
    ],
    temperature: 0.9,
    max_tokens: 200
  });
  
  const options = {
    hostname: 'open.bigmodel.cn',
    port: 443,
    path: '/api/paas/v4/chat/completions',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };
  
  const req = https.request(options, (res) => {
    let body = '';
    
    res.on('data', (chunk) => {
      body += chunk;
    });
    
    res.on('end', () => {
      try {
        const response = JSON.parse(body);
        const reply = response.choices[0].message.content;
        console.log(reply);
      } catch (error) {
        console.error('解析響應失敗:', error.message);
        console.error('響應內容:', body);
        process.exit(1);
      }
    });
  });
  
  req.on('error', (error) => {
    console.error('請求失敗:', error.message);
    process.exit(1);
  });
  
  req.write(data);
  req.end();
  ```
  
  ## 支援的平台
  
  OpenClaw 支援傳送到：
  
  | 平台 | 頻道格式 | 範例 |
  |------|---------|------|
  | 飛書 | 群組ID或使用者ID | `ou_xxx`, `oc_xxx` |
  | Discord | `#頻道名` 或頻道ID | `#general`, `123456789` |
  | Telegram | `@使用者名稱` 或聊天ID | `@mychannel`, `-100123456` |
  | WhatsApp | 電話號碼 | `1234567890@s.whatsapp.net` |
  
  ## 靜態圖片列表
  
  將以下圖片放入 `assets/` 目錄：
  
  - `coffee-shop-work.jpg` - 咖啡館工作
  - `office-coding.jpg` - 辦公室編碼
  - `tired-rest.jpg` - 疲憊休息
  - `celebration.jpg` - 開心慶祝
  - `gym-selfie.jpg` - 健身自拍
  - `default.jpg` - 預設圖片
  
  ## 設定要求
  
  ### 1. 安裝 Node.js
  ```bash
  node --version  # 需要 >= 18.0.0
  ```
  
  ### 2. 安裝 OpenClaw CLI
  ```bash
  npm install -g openclaw
  ```
  
  ### 3. 配置 OpenClaw Gateway
  ```bash
  openclaw config set gateway.mode=local
  openclaw gateway start
  ```
  
  ### 4. 設定環境變數
  ```bash
  export ZHIPU_API_KEY=your_api_key_here
  ```
  
  ## 錯誤處理
  
  - **ZHIPU_API_KEY 缺失**: 確保環境變數已設定
  - **API 呼叫失敗**: 檢查網路和 API 配額
  - **OpenClaw 傳送失敗**: 確認 gateway 正在執行
  - **圖片不存在**: 檢查 assets 目錄中的圖片檔案
  
  ## 使用技巧
  
  1. **場景選擇**: 根據使用者訊息自動選擇合適的場景
  2. **圖片傳送**: 僅在合適的場景傳送圖片（避免過度）
  3. **回應風格**: 保持簡潔溫暖，避免過長回覆
  4. **emoji 使用**: 適度使用，不要過度賣萌
  
  ## 費用說明
  
  - **對話生成**: 約 ¥0.001/次（glm-4.7-flash）
  - **圖片**: 完全免費（使用靜態檔案）
  - **每日成本**: 約 ¥0.05-0.1（正常使用）
  
---

## 這個 Skill 在做什麼

小躍虛擬伴侶 - 使用智譜 AI 提供溫暖的對話陪伴和靜態圖片分享

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
