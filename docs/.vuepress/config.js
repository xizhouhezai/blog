module.exports = {
  "title": "西洲何在的博客",
  "description": "西洲何在的博客",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "mode": "dark",
    "valineConfig": {
      "appId": 'OGYfLXEMrpzkuMf1A19TGx5M-gzGzoHsz', // your appId
      "appKey": 'Hm5TNdyKP6CRLNQH95QkdRSk', // your appKey
    },
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "摘记",
        "icon": "reco-other",
        "items": [
          {
            "text": "论势",
            "link": "/notes/talk/"
          }
        ]
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/xizhouhezai",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/notes/talk/": [
        "",
        "论势",
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "xihzouhezai",
    "authorAvatar": "/logo.jpg",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}