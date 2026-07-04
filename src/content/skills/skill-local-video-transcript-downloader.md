---
title: "影片逐字稿下載 Skill"
description: "影片逐字稿下載 相關 Agent Skill，協助處理「Download videos, audio, subtitles, and clean paragraph-style transcripts from YouTube and any other yt-dlp supported site. Use when asked to “download this video”, “save this clip”, “rip audio”, “get subtitles”, “get transcript”, or to troubleshoot yt-dlp/ffmpeg and formats/playlists.」這類任務。"
category: "media"
tags:
  - "skill-store"
  - "local-skill"
  - "media"
featured: false
entryType: "local"
publishedAt: 2026-07-01
updatedAt: 2026-07-01
sourceRepo: "skill"
sourceRepoUrl: "https://github.com/anbeime/skill"
sourcePath: "skills/video-transcript-downloader/video-transcript-downloader/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/video-transcript-downloader/video-transcript-downloader/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/video-transcript-downloader/video-transcript-downloader/SKILL.md"
license: "CC-BY-4.0"
originalName: "video-transcript-downloader"
originalDescription: "影片逐字稿下載 相關 Agent Skill，協助處理「Download videos, audio, subtitles, and clean paragraph-style transcripts from YouTube and any other yt-dlp supported site. Use when asked to “download this video”, “save this clip”, “rip audio”, “get subtitles”, “get transcript”, or to troubleshoot yt-dlp/ffmpeg and formats/playlists.」這類任務。"
activation: "當你需要 影片逐字稿下載 的工作流程時使用。"
useCases:
  - "需要處理「影片逐字稿下載 相關 Agent Skill，協助處理「Download videos, audio, subtitles, and clean paragraph-style transcripts from YouTube and any other yt-dlp supported site. Use when asked to “download this video”, “save this clip”, “rip audio”, “get subtitles”, “get transcript”, or to troubleshoot yt-dlp/ffmpeg and formats/playlists.」這類任務」這類任務。"
  - "想直接閱讀或複製 video-transcript-downloader 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/video-transcript-downloader/video-transcript-downloader/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: video-transcript-downloader
  description: Download videos, audio, subtitles, and clean paragraph-style transcripts from YouTube and any other yt-dlp supported site. Use when asked to “download this video”, “save this clip”, “rip audio”, “get subtitles”, “get transcript”, or to troubleshoot yt-dlp/ffmpeg and formats/playlists.
  ---
  
  # Video Transcript Downloader
  
  `./scripts/vtd.js` can:
  - Print a transcript as a clean paragraph (timestamps optional).
  - Download video/audio/subtitles.
  
  Transcript behavior:
  - YouTube: fetch via `youtube-transcript-plus` when possible.
  - Otherwise: pull subtitles via `yt-dlp`, then clean into a paragraph.
  
  ## Setup
  
  ```bash
  cd ~/Projects/agent-scripts/skills/video-transcript-downloader && npm ci
  ```
  
  ## Transcript (default: clean paragraph)
  
  ```bash
  ./scripts/vtd.js transcript --url 'https://…'
  ./scripts/vtd.js transcript --url 'https://…' --lang en
  ./scripts/vtd.js transcript --url 'https://…' --timestamps
  ./scripts/vtd.js transcript --url 'https://…' --keep-brackets
  ```
  
  ## Download video / audio / subtitles
  
  ```bash
  ./scripts/vtd.js download --url 'https://…' --output-dir ~/Downloads
  ./scripts/vtd.js audio --url 'https://…' --output-dir ~/Downloads
  ./scripts/vtd.js subs --url 'https://…' --output-dir ~/Downloads --lang en
  ```
  
  ## Formats (list + choose)
  
  List available formats (format ids, resolution, container, audio-only, etc):
  
  ```bash
  ./scripts/vtd.js formats --url 'https://…'
  ```
  
  Download a specific format id (example):
  
  ```bash
  ./scripts/vtd.js download --url 'https://…' --output-dir ~/Downloads -- --format 137+140
  ```
  
  Prefer MP4 container without re-encoding (remux when possible):
  
  ```bash
  ./scripts/vtd.js download --url 'https://…' --output-dir ~/Downloads -- --remux-video mp4
  ```
  
  ## Notes
  
  - Default transcript output is a single paragraph. Use `--timestamps` only when asked.
  - Bracketed cues like `[Music]` are stripped by default; keep them via `--keep-brackets`.
  - Pass extra `yt-dlp` args after `--` for `transcript` fallback, `download`, `audio`, `subs`, `formats`.
  
  ```bash
  ./scripts/vtd.js formats --url 'https://…' -- -v
  ```
  
  ## Troubleshooting (only when needed)
  
  - Missing `yt-dlp` / `ffmpeg`:
  
  ```bash
  brew install yt-dlp ffmpeg
  ```
  
  - Verify:
  
  ```bash
  yt-dlp --version
  ffmpeg -version | head -n 1
  ```
  
---

## 這個 Skill 在做什麼

影片逐字稿下載 相關 Agent Skill，協助處理「Download videos, audio, subtitles, and clean paragraph-style transcripts from YouTube and any other yt-dlp supported site. Use when asked to “download this video”, “save this clip”, “rip audio”, “get subtitles”, “get transcript”, or to troubleshoot yt-dlp/ffmpeg and formats/playlists.」這類任務。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
