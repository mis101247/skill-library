---
title: "AI 文章不該像公關稿：用 Humanizer 清掉 33 種 AI 寫作痕跡"
description: "認識開源 Humanizer Skill 的運作方式、安裝方法與限制，讓 AI 初稿讀起來更自然，也保留作者自己的語氣。"
category: "writing"
tags: ["AI 寫作", "humanizer", "內容編輯", "skill"]
difficulty: "入門"
timeEstimate: "6 分鐘"
featured: false
publishedAt: 2026-07-16
updatedAt: 2026-07-16
guideType: "tool-introduction"
learningGoals: ["看懂 Humanizer 在修正哪些 AI 寫作痕跡", "知道如何安裝與使用 Humanizer", "理解人性化改寫能做什麼、不能做什麼"]
prerequisites: ["有一篇想修改的 AI 初稿", "使用支援 Skill 或自訂指令的 AI 助手"]
relatedSkills: ["awesome-agent-skills-blader-humanizer"]
---

![一隻手用紅筆編輯文章，左側僵硬的機器文字逐漸轉成自然、有節奏的手寫線條](https://images.keyo.tw/skill-library/guides/ai-writing-humanizer-fdec4fba2c19.png)

生成式 AI 寫得很快，但讀久了，很容易遇到同一種腔調：每件事都「至關重要」，每個產品都「重新定義產業」，段落工整得像套版，結尾還會補一句「未來值得期待」。文法通常沒問題，問題是沒有人真的這樣說話。

開源專案 [Humanizer](https://github.com/blader/humanizer) 就是針對這個痛點而來。它不是另一個線上改寫網站，也不是獨立模型，而是一份可攜式的 Agent Skill。核心內容放在 Markdown 格式的 `SKILL.md`，可以交給支援 Skill 指令的 AI 代理使用。專案採 MIT 授權；本文查閱的版本是 2.8.2。

## Humanizer 實際在改什麼

Humanizer 整理了 33 種常見的 AI 寫作痕跡。它處理的並不只是幾個「AI 愛用詞」，而是從內容、句法、排版到對話習慣一起檢查。

例如，AI 常把普通事實寫成重大轉折，使用沒有來源的「專家認為」，或在句尾補上一串看似有深度、其實沒有新資訊的分析。語言層面則常見刻意湊成三點、為了避免重複而不停更換同義詞，以及把簡單的「是」改成浮誇的「扮演某種角色」。

它也會抓出更細微的習慣，包括過量粗體、表情符號、制式小標、過度整齊的短句，還有「希望這對你有幫助」「需要我繼續嗎」這類原本屬於聊天介面的句子。

這些東西單獨出現，不代表文章由 AI 撰寫。Humanizer 自己也提醒使用者，要看多種特徵是否同時出現，並保留作者原本的特殊細節、猶豫、幽默與句子節奏。完整規則可查看專案的 [SKILL.md](https://github.com/blader/humanizer/blob/main/SKILL.md)。

## 它不是刪字工具，而是兩次重寫

Humanizer 的流程比「把形容詞拿掉」多一步。代理先找出可疑模式，完成第一版改寫，再反過來審查這份草稿還有哪些地方明顯像 AI。最後才進行第二次修訂。

這個設計很實際。第一次改寫常會變得乾淨，卻也可能變得太短、太平，甚至把原文的細節一起洗掉。第二輪審查要求保留原意與資訊量，同時調整句長、語氣和節奏。

Humanizer 還支援 voice calibration。使用者可以附上兩到三段自己寫過的文字，讓代理參考慣用詞、標點和段落節奏，而不是產出一篇「誰都不像」的標準答案。

簡單說，這句話：

> 這款革命性的工具，透過創新技術全面提升內容品質，為創作者開啟嶄新的寫作可能。

經過人性化改寫後，可以變成：

> 這款工具會找出文章裡常見的 AI 腔，再重寫一次。它最適合用在初稿已經完成，但讀起來還像產品新聞稿的時候。

後者少了聲勢，卻多了可驗證的資訊。讀者也更清楚工具到底做了什麼。

## 如何安裝與使用

如果你的 AI 代理支援 Skills CLI，可以用下列指令安裝：

```sh
npx skills add blader/humanizer
```

更新既有版本：

```sh
npx skills update humanizer
```

Claude Code 使用者也能透過外掛市集安裝。手動安裝則只要把 `SKILL.md` 放進代理所使用的 Skill 目錄。完整方式可參考 [Humanizer 安裝說明](https://github.com/blader/humanizer#installation)。

實際使用時，可以直接貼上文章：

```text
請使用 Humanizer 改寫以下文章，保留原意、事實與段落資訊量。
使用台灣繁體中文，不要改成中國大陸用語。

[貼上文章]
```

如果要保留個人風格，再加上自己的舊文：

```text
以下兩段是我的寫作樣本，請參考我的用詞、句長與標點習慣。

[貼上兩到三段自己寫過的文字]

現在請改寫這篇文章：

[貼上 AI 初稿]
```

Humanizer 的規則與範例主要以英文寫作為主。處理中文時，最好明確指定地區用語、讀者、語氣與需要保留的寫作習慣，避免代理只做表面的同義詞替換。

## 它能改善文章，但不能替你活過那些經驗

Humanizer 可以降低套話密度，卻不能憑空補出真實觀察。文章若缺乏具體事件、數字、來源或個人判斷，再自然的句型也只是比較順的空話。

它也不是「保證通過 AI 偵測器」的捷徑。專案的目標是編輯可辨識的寫作模式，而不是證明作者身分。AI 偵測可能誤判，學校、媒體與公司也各有規範。使用者仍應核對事實、保留來源，並依發布場合揭露 AI 的參與方式。

Humanizer 最適合放在寫作流程的後段：先把資料與觀點寫完整，再用它清理套話，最後由作者親自讀一遍。真正讓文章有人味的，不是多加幾句口語，而是留下具體選擇、真實細節，以及作者願意負責的判斷。

## 參考資料

- [blader/humanizer GitHub 專案](https://github.com/blader/humanizer)
- [Humanizer README](https://github.com/blader/humanizer#readme)
- [Humanizer SKILL.md](https://github.com/blader/humanizer/blob/main/SKILL.md)
