module.exports = {
  title: '西洲何在的博客',
  description: '写写简单的博客',
  themeConfig:{
    nav: [{text: "主页", link: "/"      },
      { text: "node", link: "/node/" },
      { text: "前端", link: "/web/"},
      { text: "vuepress使用", link: "/blog/" },
      { text: "问题总结", link: "/question/" }
    ],
    sidebar: {
      '/node/': [
        '',
        'http'
      ],
      '/blog/': [
        '',
        'start'
      ],
      '/question/': [
        {
          title: 'js问题',
          children: [
            'js/deep-copy.md'
          ]
        }
      ],
      '/web/': [
        '',
      ]
    }
    // sidebar: [
    //   {
    //     title: 'NODE',
    //     collapsable: true,
    //     children: [
    //       'node/',
    //       'node/http.md',
    //     ]
    //   },
    //   {
    //     title: 'WEB',
    //     collapsable: true,
    //     children: [
    //       'web/',
    //     ]
    //   },
    //   {
    //     title: 'vuepress使用',
    //     collapsable: true,
    //     children: [
    //       'blog/',
    //       'blog/start.md'
    //     ]
    //   }
    // ]
  },
}
