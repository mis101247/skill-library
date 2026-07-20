---
title: "AI 文章不該像公關稿：用 Humanizer 清掉 33 種 AI 寫作痕跡"
description: "認識開源 Humanizer Skill 的運作方式、安裝方法與限制，讓 AI 初稿讀起來更自然，也保留作者自己的語氣。"
category: "writing"
tags: ["AI 寫作", "humanizer", "內容編輯", "skill"]
difficulty: "入門"
timeEstimate: "8 分鐘"
featured: false
publishedAt: 2026-07-16
updatedAt: 2026-07-20
guideType: "tool-introduction"
learningGoals: ["看懂 Humanizer 在修正哪些 AI 寫作痕跡", "在 Claude Code 與 Codex 安裝並使用 Humanizer", "理解人性化改寫能做什麼、不能做什麼"]
prerequisites: ["有一篇想修改的 AI 初稿", "使用支援 Skill 或自訂指令的 AI 助手"]
relatedSkills: ["awesome-agent-skills-blader-humanizer"]
---

![一隻手用紅筆編輯文章，左側僵硬的機器文字逐漸轉成自然、有節奏的手寫線條](https://images.keyo.tw/skill-library/guides/ai-writing-humanizer-fdec4fba2c19.png)

生成式 AI 很會把句子寫完整，也很會把每件小事講得像產業轉捩點。每件事都「至關重要」，每個產品都在「重新定義產業」，段落整齊得像套版，最後再補一句「未來值得期待」。文法通常沒錯，只是讀起來不像真的有人會這樣說話。

[Humanizer](https://github.com/blader/humanizer) 做的事很單純：把常見的 AI 寫作痕跡整理成一份編輯規則，交給 AI 代理逐項檢查。它不是線上改寫網站，也不是另一個模型，而是一份可攜式的 Agent Skill。核心內容寫在 Markdown 格式的 `SKILL.md`，可供支援 Skill 的 AI 代理讀取。專案採 MIT 授權，本文查閱的版本是 2.8.2。

## Humanizer 實際在改什麼

Humanizer 整理了 33 種常見的 AI 寫作痕跡。它不只找幾個「AI 愛用詞」，還會檢查內容、句法、排版，以及不小心留在文章裡的聊天語氣。

常見情況包括把普通事實寫成重大轉折、用沒有來源的「專家認為」，或在句尾補上一串看似深入、其實沒有新資訊的分析。有時 AI 會硬湊成三點，為了避免重複而一直換同義詞，甚至把簡單的「是」改成浮誇的「扮演某種角色」。

它也會留意較細的習慣，例如過量粗體、表情符號、制式小標、整齊到不自然的短句，還有「希望這對你有幫助」「需要我繼續嗎」這類原本只該出現在聊天介面的句子。

單獨出現其中一項，不代表文章就是 AI 寫的。Humanizer 也提醒使用者，判斷時要看多種特徵是否一起出現，改寫時則要留下作者原本的細節、猶豫、幽默和句子節奏。33 項規則都收在專案的 [SKILL.md](https://github.com/blader/humanizer/blob/main/SKILL.md)。

## 它不是刪字工具，而是兩次重寫

Humanizer 不是把形容詞刪掉就收工。代理會先找出可疑模式，完成第一版改寫，再回頭檢查這份草稿是否仍有明顯的 AI 腔，最後才做第二次修訂。

第一次改寫通常會乾淨不少，但也可能變得太短、太平，連原文的細節都一起被洗掉。第二輪審查的工作，就是在保留原意與資訊量的前提下，再調整句長、語氣和節奏。

Humanizer 也支援 voice calibration。你可以附上 2 到 3 段自己寫過的文字，讓代理參考你的慣用詞、標點和段落節奏，避免最後只得到一篇「誰都不像」的標準答案。

簡單說，這句話：

> 這款革命性的工具，透過創新技術全面提升內容品質，為創作者開啟嶄新的寫作可能。

經過人性化改寫後，可以變成：

> 這款工具會找出文章裡常見的 AI 腔，再重寫一次。它最適合用在初稿已經完成，但讀起來還像產品新聞稿的時候。

改寫後的句子沒那麼有聲勢，但讀者更容易看懂工具到底做了什麼，也知道什麼時候派得上用場。

## 如何安裝與使用

如果你的 AI 代理支援 Skills CLI，可以先用這行指令安裝：

```sh
npx skills add blader/humanizer
```

之後要更新既有版本，可執行：

```sh
npx skills update humanizer
```

手動安裝也可以，只要把 `SKILL.md` 放進代理讀取 Skill 的目錄。完整方式可參考 [Humanizer 安裝說明](https://github.com/blader/humanizer#installation)。不同工具的安裝位置與呼叫方式不太一樣，下面分開說明。

### 在 Codex 使用

想把 Humanizer 直接安裝給 Codex，可執行：

```sh
npx skills add blader/humanizer --agent codex
```

安裝程式詢問範圍時，選擇 `Global` 會把 Skill 放到 `~/.agents/skills/humanizer`，之後在不同專案都能使用。若只想讓目前的專案使用，就選 `Project`。

安裝完成後，在 Codex 輸入 `$` 並選擇 `humanizer`，或直接這樣下指令：

```text
$humanizer

請將以下文章改得更自然，保留原意、事實、數字與連結。
使用台灣繁體中文，不要使用中國大陸用語。

[貼上文章]
```

Codex 也可能依照你的需求自動選用 Skill，不過明確寫出 `$humanizer` 比較容易確認這次確實有套用。安裝後若清單沒有出現，可以重新開啟 Codex 再試一次。Codex 的 Skill 目錄與呼叫方式可參考 [Codex Skills 說明](https://learn.chatgpt.com/docs/build-skills.md)。

如果選單同時出現 `$humanizer` 和 `$humanizer:humanizer`，通常是同一份 Skill 從不同安裝來源載入。選一個執行即可，不必讓同一篇文章重跑兩次。

### 在 Claude Code 使用

Claude Code 可從外掛市集安裝 Humanizer：

```text
/plugin marketplace add blader/humanizer
/plugin install humanizer@humanizer
```

安裝後用 `/humanizer:humanizer` 呼叫，再貼上文章與改寫要求：

```text
/humanizer:humanizer

請將以下文章改得更自然，保留原意、事實、數字與連結。
使用台灣繁體中文，不要使用中國大陸用語。

[貼上文章]
```

這兩種方式使用的是同一套 Humanizer 規則，差別只在 Codex 與 Claude Code 各自的安裝和呼叫介面。

不論使用哪個工具，都可以把要求寫得更具體。例如：

```text
請使用 Humanizer 改寫以下文章，保留原意、事實與段落資訊量。
使用台灣繁體中文，不要改成中國大陸用語。

[貼上文章]
```

如果要保留個人風格，可以再附上自己的舊文：

```text
以下兩段是我的寫作樣本，請參考我的用詞、句長與標點習慣。

[貼上兩到三段自己寫過的文字]

現在請改寫這篇文章：

[貼上 AI 初稿]
```

Humanizer 的規則與範例主要以英文寫作為主。處理中文時，最好直接指定地區用語、讀者、語氣，以及必須保留的寫作習慣，免得代理只做表面的同義詞替換。

## 它能改善文章，但不能替你活過那些經驗

Humanizer 可以清掉不少套話，卻不能憑空補出真實觀察。文章若缺少具體事件、數字、來源或個人判斷，句子就算變順了，內容還是空的。

它也不是「保證通過 AI 偵測器」的捷徑。這個專案是在編輯可辨識的寫作模式，不是在證明作者身分。AI 偵測可能誤判，學校、媒體與公司也各有規範。使用者仍要核對事實、保留來源，並依發布場合揭露 AI 的參與方式。

比較實際的用法，是先把資料與觀點寫完整，再用 Humanizer 清理套話，最後由作者親自讀一遍。文章的個性不靠幾句刻意加上的口語，而是來自具體選擇、真實細節，以及作者願意負責的判斷。

## 參考資料

- [blader/humanizer GitHub 專案](https://github.com/blader/humanizer)
- [Humanizer README](https://github.com/blader/humanizer#readme)
- [Humanizer SKILL.md](https://github.com/blader/humanizer/blob/main/SKILL.md)
- [Codex Skills 說明](https://learn.chatgpt.com/docs/build-skills.md)
