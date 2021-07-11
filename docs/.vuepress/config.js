module.exports = {
  base: '/vue-patterns/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue Patterns',
      description:
        'Useful Vue patterns, techniques, tips and tricks and curated helpful links.',
    },
    '/ru/': {
      lang: 'ru',
      title: 'Паттерны Vue',
      description:
        'Полезные паттерны, методы, советы и рекомендации, а также тщательно подобранный список ссылок по Vue',
    },
    '/es/': {
      lang: 'es',
      title: 'Patrones de Vue',
      description:
        'Patrones útiles de Vue, técnicas, consejos, trucos y enlaces seleccionados.',
    },
    '/id/': {
      lang: 'id',
      title: 'Pola Vue',
      description:
        'Pola Vue yang berguna, tips, trik dan link akurat yang sangat membantu ',
    },
  },
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/icons/apple-icon-57x57.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/icons/apple-icon-60x60.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/icons/apple-icon-72x72.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/icons/apple-icon-76x76.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/icons/apple-icon-114x114.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/icons/apple-icon-120x120.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/icons/apple-icon-144x144.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/icons/apple-icon-152x152.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-icon-180x180.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/icons/android-icon-192x192.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/icons/favicon-96x96.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    [
      'script',
      { defer: true, async: true, src: 'https://buttons.github.io/buttons.js' },
    ],
  ],
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-175336794-1',
      },
    ],
  ],
  themeConfig: {
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',
    repo: 'learn-vuejs/vue-patterns',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        lastUpdated: 'Last Updated',
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
      '/ru/': {
        label: 'Русский',
        selectText: 'Переводы',
        lastUpdated: 'Последнее обновление',
        editLinkText: 'Изменить эту страницу на GitHub',
        nav: [
          { text: 'Главная', link: '/ru/' },
          { text: 'Документация', link: '/ru/patterns/' },
          {
            text: 'Внешние переводы',
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
          ['/ru/patterns/', 'Паттерны'],
          ['/ru/useful-links/', 'Полезные ссылки'],
          ['/ru/sponsors/', 'Книга Fullstack Vue'],
          ['/ru/translations/', 'Переводы'],
        ],
      },
      '/es/': {
        label: 'Español',
        selectText: 'Idiomas',
        lastUpdated: 'Última actualización',
        editLinkText: 'Modificar esta página en GitHub',
        nav: [
          { text: 'Inicio', link: '/es/' },
          { text: 'Docs', link: '/es/patterns/' },
          {
            text: 'Traducciones',
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
          ['/es/patterns/', 'Patrones'],
          ['/es/useful-links/', 'Enlaces útiles'],
          ['/es/sponsors/', 'Libro Fullstack Vue'],
          ['/es/translations/', 'Traducciones'],
        ],
      },
      '/id/': {
        label: 'Indonesian',
        selectText: 'Bahasa',
        lastUpdated: 'Pembaharuan Terakhir',
        editLinkText: 'Edit halaman ini di GitHub',
        nav: [
          { text: 'Mulai', link: '/id/' },
          { text: 'Panduan', link: '/id/patterns/' },
          {
            text: 'Terjemahan',
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
          ['/id/patterns/', 'Pola'],
          ['/id/useful-links/', 'Tautan Bermanfaat'],
          ['/id/sponsors/', 'Buku Fullstack Vue'],
          ['/id/translations/', 'Terjemahan'],
        ],
      },
    },
  },
};
