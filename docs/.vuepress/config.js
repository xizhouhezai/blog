module.exports = {
  "plugins": {
    "@vuepress-reco/vuepress-plugin-kan-ban-niang": {
      "theme": ['whiteCat', 'blackCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
      "clean": false,
      "modelStyle": {
        "position": "fixed",
        "left": "0px",
        "bottom": "0px",
        "opacity": "0.9",
        "zIndex": 99999
      },
      "width": 150,
      "height": 220,
      "btnStyle": {
        "left": "130px",
        "bottom": "40px",
      },
      "messageStyle": {
        "left": "160px",
        "bottom": "150px",
      },
      "messages": {
        welcome: "欢迎来到西洲何在的博客",
        home: "心里的花，我想要带你回家。",
        theme: "好吧，希望你能喜欢我的其他小伙伴。",
        close: "你知道我喜欢吃什么吗？痴痴地望着你。",
      }
    }
  },
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
        "text": "fish_ui",
        "icon": "reco-other",
        "items": [
          {
            "text": "fish_ui项目搭建",
            "link": "/fish_ui/build/"
          },
          {
            "text": "fish_ui文档",
            "link": "/fish_ui/documents/"
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
      ],
      "/fish_ui/build/": [
        "",
        "quick_start"
      ],
      "/fish_ui/documents/": [
        "",
        "quick_start"
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