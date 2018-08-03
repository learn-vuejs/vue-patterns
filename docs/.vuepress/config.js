module.exports = {
  title: 'Vue Patterns',
  description:
    'Useful Vue patterns, techniques, tips and tricks and curated helpful links.',
  serviceWorker: true,
  themeConfig: {
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',
    repo: 'learn-vuejs/vue-patterns',
    editLinks: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/patterns/' },
      {
        text: 'Translations',
        items: [
          {
            text: '简体中文',
            link: 'https://github.com/ZYSzys/vue-patterns-cn',
          },
          {
            text: '繁體中文',
            link: 'https://github.com/yoyoys/vue-patterns-cht',
          },
        ],
      },
    ],
    sidebar: [
      ['/patterns/', 'Patterns'],
      ['/useful-links/', 'Useful Links'],
      ['/sponsors/', 'Fullstack Vue Book'],
      ['/translations/', 'Translations'],
    ],
  },
};
