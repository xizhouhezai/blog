---
title: 快速开始
date: 2020-07-24
---

## 安装vue-cli工具

```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

## 初始化项目

```
vue create hello-world
```

## 项目目录改造

按照习惯，会新增加一个examples和一个packages目录，分别用来放测试实例和ui组件，目录结构如下

```
根目录
│   README.md
│   vue.config.js
|   .
|   .
|   .   
│
└───examples
│   │   main.js
│   │   App.vue
│   │
│   └───assets
│   
└───packages
|   │   index.js
|
└───public
    |   index.html
    |   favicon.ico
```

## 增加vue.config.js配置

因为目录改变，所以vue实际编译的目录和输出都发生了改变，所以要重新配置，改变vue编译输入输出，配置如下

```js
module.exports = {
  // 将 examples 目录添加为新的页面
  pages: {
    index: {
      // page 的入口
      entry: 'examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 输出文件名
      filename: 'index.html'
    }
  },
  productionSourceMap: false
}
```

::: tip
注意：初始化的项目没有vue.config.js文件，需要自己添加
:::

## 写第一个ui组件用例

我们写的组件是要能够下载安装使用的，所以要暴露一个install方法，这样vue才能够挂载到实例上。在packages/index.js中加入以下代码

```js
const components = []

const install = function (Vue) {
  if (install.installed) return
  install.installed = true

  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  // 导出的对象必须具备一个 install 方法
  install
}
```

### 增加一个button组件

在packages增加一个目录Button，在button文件夹下创建index.js和button.vue

在/packages/Button/index.js添加以下代码

```js
import FishButton from './button.vue'

FishButton.install = function (Vue) {
  Vue.component(FishButton.name, FishButton)
}

export default FishButton
```

在/packages/Button/button.vue添加以下代码

```vue
<template>
  <div>
    这是一个button组件
  </div>
</template>

<script>
export default {
  name: 'FishButton'
}
</script>
```

::: tip
注意：组件一定要有name属性，并不能为空，这是之后组件的名称
:::

最后在/packages/Button/index.js中注册组件

```js
import FishButton from "./Button/index"

const components = [
  FishButton
]

const install = function (Vue) {
  if (install.installed) return
  install.installed = true

  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  // 导出的对象必须具备一个 install 方法
  install,
  FishButton
}
```

到这里就完成了一个组件的简单编写

## 测试组件是否可以使用

在/examples/main.js中加入如下代码

```js
import Vue from 'vue'
import App from './App.vue'

import { FishButton } from '../packages/index'

Vue.config.productionTip = false

Vue.use(FishButton)

new Vue({
  render: h => h(App),
}).$mount('#app')

```

在/examples/App.vue中加入如下代码

```vue
<template>
  <div id="app">
    <fish-button></fish-button>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
```

保存后，就可以运行了，如果不出意外就可以看到你定义的组件
