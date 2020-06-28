module.exports = {
  title: '西洲何在的博客',
  description: '写写简单的博客',
  themeConfig:{
    displayAllHeaders: true,
    nav: [{text: "主页", link: "/"      },
      { text: "node", link: "/node/" },
      { text: "前端", link: "/web/"},
      { text: "vuepress使用", link: "/blog/" },
      { 
        text: "问题总结",
        link: "/question/",
        items: [
          {
            text: "js问题",
            link: "/question/js/deep-copy.md"
          },
          {
            text: "vue问题",
            link: "/question/vue/better-scroll.md"
          }
        ]
      }
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
      '/question/js/': [
        {
          title: 'js问题',
          children: [
            'deep-copy.md',
            'fuzzy-query.md'
          ]
        }
      ],
      '/question/vue/': [
        {
          title: 'vue问题',
          children: [
            'better-scroll.md'
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
