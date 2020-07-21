---
title: flex布局
date: 2020-07-21
tags:
 -  css
categories:
 - web前端
---

布局的传统解决方案，基于盒状模型，依赖 display 属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。

2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。

Flex 布局将成为未来布局的首选方案。本文介绍它的语法，下一篇文章给出常见布局的 Flex 写法。网友 JailBreak 为本文的所有示例制作了 Demo，也可以参考。

以下内容主要参考了下面两篇文章：A Complete Guide to Flexbox 和 A Visual Guide to CSS3 Flexbox Properties。

## 一、Flex 布局是什么？

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为 Flex 布局。

```css

.box {
  display: flex;
}

```

行内元素也可以使用 Flex 布局。

```css

.box {
  display: inline-flex;
}

```

Webkit 内核的浏览器，必须加上-webkit前缀。

```css

.box {
  display: -webkit-flex; /* Safari */
  display: flex;
}

```

注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。


::: tip
注意：此篇文章搬运之阮一峰文章，搬运到自己的博客，就是为了不用百度
:::
