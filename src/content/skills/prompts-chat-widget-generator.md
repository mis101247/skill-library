---
title: "prompts.chat Widget 產生器 Skill"
description: "協助為 prompts.chat feed 建立標準卡片或自訂 React widget，包含設定收集、檔案產生、註冊與素材放置流程。"
category: "plugin"
tags:
  - prompts.chat
  - widget
  - React
  - plugin
featured: true
publishedAt: 2026-07-01
updatedAt: 2026-07-01
sourceRepo: "prompts.chat"
sourceRepoUrl: "https://github.com/f/prompts.chat"
sourcePath: ".windsurf/skills/widget-generator/SKILL.md"
sourceUrl: "https://github.com/f/prompts.chat/blob/main/.windsurf/skills/widget-generator/SKILL.md"
localPath: "software-engineering-prompt-repos/prompts.chat/.windsurf/skills/widget-generator/SKILL.md"
license: "MIT"
originalName: "widget-generator"
originalDescription: "Generate customizable widget plugins for the prompts.chat feed system"
activation: "當你要替 prompts.chat 的 prompt feed 插入 sponsor card、推廣卡片或自訂互動元件時使用。"
useCases:
  - "產生標準 PromptCard 樣式的 widget。"
  - "產生自訂 React component widget，放進 feed 指定位置。"
  - "需要規劃 widget ID、slug、CTA、sponsor 資訊與 repeat positioning。"
workflow:
  - "先向使用者收集 widget 基本資訊、內容模式、分類、CTA 與定位策略。"
  - "依照 standard 或 custom 模式建立對應 TypeScript / TSX 檔案。"
  - "把 widget 加進 widgets/index.ts 註冊清單。"
  - "若有 sponsor，放置 light / dark logo 素材。"
  - "檢查 shouldInject 與 positioning，確認 feed 裡出現位置正確。"
files:
  - "SKILL.md"
cautions:
  - "widget ID 要使用 kebab-case，避免和既有 plugin 衝突。"
  - "custom render 需要注意 Next.js Image、Link 與 UI component 的 import。"
  - "repeat 模式要設定上限，避免 feed 裡插入過多內容。"
skillBody: |
  ---
  name: widget-generator
  description: Generate customizable widget plugins for the prompts.chat feed system
  ---

  # Widget Generator Skill

  This skill guides creation of widget plugins for **prompts.chat**. Widgets are injected into prompt feeds to display promotional content, sponsor cards, or custom interactive components.

  ## Overview

  Widgets support two rendering modes:
  1. **Standard prompt widget** - Uses default `PromptCard` styling (like `coderabbit.ts`)
  2. **Custom render widget** - Full custom React component (like `book.tsx`)

  ## Prerequisites

  Before creating a widget, gather from the user:

  | Parameter | Required | Description |
  |-----------|----------|-------------|
  | Widget ID | ✅ | Unique identifier (kebab-case, e.g., `my-sponsor`) |
  | Widget Name | ✅ | Display name for the plugin |
  | Rendering Mode | ✅ | `standard` or `custom` |
  | Sponsor Info | ❌ | Name, logo, logoDark, URL (for sponsored widgets) |

  ## Step 1: Gather Widget Configuration

  Ask the user for the following configuration options:

  ### Basic Info
  ```
  - id: string (unique, kebab-case)
  - name: string (display name)
  - slug: string (URL-friendly identifier)
  - title: string (card title)
  - description: string (card description)
  ```

  ### Content (for standard mode)
  ```
  - content: string (prompt content, can be multi-line markdown)
  - type: "TEXT" | "STRUCTURED"
  - structuredFormat?: "json" | "yaml" (if type is STRUCTURED)
  ```

  ### Categorization
  ```
  - tags?: string[] (e.g., ["AI", "Development"])
  - category?: string (e.g., "Development", "Writing")
  ```

  ### Action Button
  ```
  - actionUrl?: string (CTA link)
  - actionLabel?: string (CTA button text)
  ```

  ### Sponsor (optional)
  ```
  - sponsor?: {
      name: string
      logo: string (path to light mode logo)
      logoDark?: string (path to dark mode logo)
      url: string (sponsor website)
    }
  ```

  ### Positioning Strategy
  ```
  - positioning: {
      position: number (0-indexed start position, default: 2)
      mode: "once" | "repeat" (default: "once")
      repeatEvery?: number (for repeat mode, e.g., 30)
      maxCount?: number (max occurrences, default: 1 for once, unlimited for repeat)
    }
  ```

  ### Injection Logic
  ```
  - shouldInject?: (context) => boolean
    Context contains:
    - filters.q: search query
    - filters.category: category name
    - filters.categorySlug: category slug
    - filters.tag: tag filter
    - filters.sort: sort option
    - itemCount: total items in feed
  ```

  ## Step 2: Create Widget File

  ### Standard Widget (TypeScript only)

  Create file: `src/lib/plugins/widgets/{widget-id}.ts`

  ```typescript
  import type { WidgetPlugin } from "./types";

  export const {widgetId}Widget: WidgetPlugin = {
    id: "{widget-id}",
    name: "{Widget Name}",
    prompts: [
      {
        id: "{prompt-id}",
        slug: "{prompt-slug}",
        title: "{Title}",
        description: "{Description}",
        content: `{Multi-line content here}`,
        type: "TEXT",
        sponsor: {
          name: "{Sponsor Name}",
          logo: "/sponsors/{sponsor}.svg",
          logoDark: "/sponsors/{sponsor}-dark.svg",
          url: "{sponsor-url}",
        },
        tags: ["{Tag1}", "{Tag2}"],
        category: "{Category}",
        actionUrl: "{action-url}",
        actionLabel: "{Action Label}",
        positioning: {
          position: 2,
          mode: "repeat",
          repeatEvery: 50,
          maxCount: 3,
        },
        shouldInject: (context) => {
          const { filters } = context;

          if (!filters?.q && !filters?.category && !filters?.tag) {
            return true;
          }

          return false;
        },
      },
    ],
  };
  ```

  ### Custom Render Widget (TSX with React)

  Create file: `src/lib/plugins/widgets/{widget-id}.tsx`

  ```tsx
  import Link from "next/link";
  import Image from "next/image";
  import { Button } from "@/components/ui/button";
  import type { WidgetPlugin } from "./types";

  function {WidgetName}Widget() {
    return (
      <div className="group border rounded-[var(--radius)] overflow-hidden hover:border-foreground/20 transition-colors bg-gradient-to-br from-primary/5 via-background to-primary/10 p-5">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-full aspect-video">
            <Image
              src="/path/to/image.jpg"
              alt="{Alt text}"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="w-full text-center">
            <h3 className="font-semibold text-base mb-1.5">{Title}</h3>
            <p className="text-xs text-muted-foreground mb-4">{Description}</p>
            <Button asChild size="sm" className="w-full">
              <Link href="{action-url}">{Action Label}</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  export const {widgetId}Widget: WidgetPlugin = {
    id: "{widget-id}",
    name: "{Widget Name}",
    prompts: [
      {
        id: "{prompt-id}",
        slug: "{prompt-slug}",
        title: "{Title}",
        description: "{Description}",
        content: "",
        type: "TEXT",
        tags: ["{Tag1}", "{Tag2}"],
        category: "{Category}",
        actionUrl: "{action-url}",
        actionLabel: "{Action Label}",
        positioning: {
          position: 10,
          mode: "repeat",
          repeatEvery: 60,
          maxCount: 4,
        },
        shouldInject: () => true,
        render: () => <{WidgetName}Widget />,
      },
    ],
  };
  ```

  ## Step 3: Register Widget

  Edit `src/lib/plugins/widgets/index.ts`:

  1. Add import at top:
  ```typescript
  import { {widgetId}Widget } from "./{widget-id}";
  ```

  2. Add to `widgetPlugins` array:
  ```typescript
  const widgetPlugins: WidgetPlugin[] = [
    coderabbitWidget,
    bookWidget,
    {widgetId}Widget, // Add new widget
  ];
  ```

  ## Step 4: Add Sponsor Assets (if applicable)

  If the widget has a sponsor:
  1. Add light logo: `public/sponsors/{sponsor}.svg`
  2. Add dark logo (optional): `public/sponsors/{sponsor}-dark.svg`

  ## Positioning Examples

  ### Show once at position 5
  ```typescript
  positioning: {
    position: 5,
    mode: "once",
  }
  ```

  ### Repeat every 30 items, max 5 times
  ```typescript
  positioning: {
    position: 3,
    mode: "repeat",
    repeatEvery: 30,
    maxCount: 5,
  }
  ```
---

## 這個 Skill 在做什麼

這個 Skill 把 prompts.chat feed widget 的產生流程整理成一套作業標準：先收需求，再依渲染模式選擇 TypeScript 或 TSX，最後註冊 widget 與補 sponsor assets。

## 為什麼值得收錄

它適合當作「外掛型 Skill」範例：不是隻告訴 agent 寫一段 component，而是把命名、設定、注入條件、重複出現策略與註冊位置都規範清楚，能降低 agent 寫錯專案約定的機率。
