const tagLabels: Record<string, string> = {
  'AI代理': 'AI agent',
  'AI 代理': 'AI agent',
};

const categoryLabels: Record<string, string> = {
  agent: 'AI Agent 與工作流',
  automation: '自動化工具',
  auth: '登入與身分驗證',
  cloud: '雲端與部署',
  content: '內容與檔案',
  creative: '創作與視覺',
  data: '資料與分析',
  database: '資料庫',
  design: '設計與前端體驗',
  devops: 'DevOps 與基礎設施',
  docs: '檔案與知識管理',
  ecommerce: '電商與行銷',
  finance: '財務與市場分析',
  frontend: '前端開發',
  legal: '法務與合約',
  localization: '內容翻譯與在地化',
  media: '影音與媒體處理',
  mobile: '行動開發',
  payments: '金流與商務',
  presentation: '簡報與提案',
  plugin: '網站外掛與內容元件',
  productivity: '生產力工具',
  registry: 'Prompt / Skill Registry',
  review: '程式碼審查',
  security: '安全與稽核',
  social: '社群與發布',
  testing: '測試與品質',
  voice: '語音與音訊',
  web: 'Web 開發',
};

const categoryOrder = [
  'Prompt / Skill Registry',
  '程式碼審查',
  'AI Agent 與工作流',
  '自動化工具',
  '測試與品質',
  '前端開發',
  'Web 開發',
  '設計與前端體驗',
  '創作與視覺',
  '影音與媒體處理',
  '語音與音訊',
  '簡報與提案',
  '電商與行銷',
  '資料庫',
  '資料與分析',
  '財務與市場分析',
  '雲端與部署',
  'DevOps 與基礎設施',
  '登入與身分驗證',
  '金流與商務',
  '安全與稽核',
  '法務與合約',
  '行動開發',
  '內容與檔案',
  '檔案與知識管理',
  '社群與發布',
  '生產力工具',
  '內容翻譯與在地化',
  '網站外掛與內容元件',
];

export function formatTag(tag: string) {
  return tagLabels[tag] ?? tag;
}

export function formatTags(tags: string[]) {
  return [...new Set(tags.map(formatTag))];
}

export function tagSearchText(tags: string[]) {
  return [...new Set([...tags, ...formatTags(tags)])].join(' ');
}

export function formatCategory(category: string) {
  return categoryLabels[category] ?? category;
}

export function sortCategories(categories: string[]) {
  return [...new Set(categories.map(formatCategory))].sort((a, b) => {
    const aIndex = categoryOrder.indexOf(a);
    const bIndex = categoryOrder.indexOf(b);

    if (aIndex !== -1 || bIndex !== -1) {
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    }

    return a.localeCompare(b, 'zh-Hant');
  });
}

export function tagMatches(tag: string, rawTags: string[]) {
  return rawTags.some((rawTag) => formatTag(rawTag) === tag);
}
