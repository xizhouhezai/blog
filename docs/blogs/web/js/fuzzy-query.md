---
title: 前端简单的模糊查询
date: 2020-07-17
tags:
 -  js
categories:
 - web前端
---

### 模糊查询

有的时候需要前端对返回的数据做模糊查询，做成一个搜索的功能，我想对于正则不太熟的前端，恐怕都不太愿意做这个工作，第一感觉就是繁琐，其实交由前端来实现的模糊查询往往数据量不会太大，且功能单一，一般只是匹配字符串，用不到正则表达式，所以没必要担心过于复杂，而且太多人提供了方法，自己可以搬来即用

### 对于数组模糊查询的简单实现

数组的维度越高，要匹配的维度越深，自然复杂度越高，但往往前端无需做如此复杂度的查询，一般只是对一维数组进行查询

```js
fuzzyQuery (list, keyWord) {
  var arr = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i].area.indexOf(keyWord) >= 0) {
      arr.push(list[i])
    }
  }
  return arr
}
```

这里只用了一个方法，其实还有很多其他方法，不一一列出了
