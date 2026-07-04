import type { CollectionEntry } from 'astro:content';

type DatedEntry =
  CollectionEntry<'skills'> |
  CollectionEntry<'guides'>;

export function sortByPublishedAt<T extends DatedEntry>(entries: T[]) {
  return [...entries].sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
  );
}

export function sortFeaturedFirst<T extends DatedEntry>(entries: T[]) {
  return [...entries].sort((a, b) => {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    return b.data.publishedAt.getTime() - a.data.publishedAt.getTime();
  });
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

export function formatEntryType(entryType: 'full' | 'catalog' | 'storeCatalog' | 'local') {
  if (entryType === 'catalog') return '上游索引';
  if (entryType === 'storeCatalog') return '技能商店索引';
  if (entryType === 'local') return '本地 Skill';
  return '完整 SKILL.md';
}

export function formatCardKind(entryType: 'full' | 'catalog' | 'storeCatalog' | 'local', featured = false) {
  if (entryType === 'catalog') return 'Catalog Skill';
  if (entryType === 'storeCatalog') return 'Skill Store Catalog';
  if (entryType === 'local') return featured ? '精選本地 Skill' : '本地 Skill';
  return featured ? '精選 Skill' : 'Skill';
}
