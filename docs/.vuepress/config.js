module.exports = {
  title: '西洲何在的博客',
  description: '专注 Node.js 技术栈分享，从前端到Node.js再到数据库',
  themeConfig:{
    nav: [{text: "主页", link: "/"      },
      { text: "node", link: "/node/" },
      { text: "前端", link: "/web/"},
    ],
    sidebar: [
      {
        title: 'NODE',
        collapsable: true,
        children: [
          'node/',
          'node/http.md',
        ]
      },
      {
        title: 'WEB',
        collapsable: true,
        children: [
          'web/',
        ]
      }
    ]
  },
}
