---
title: mysql报错：Expression #1 of SELECT list is not in GROUP BY clause and contains nonaggre
date: 2020-07-17
tags:
 - 报错
categories: 
 - mysql
---

```mysql报错
Expression #1 of SELECT list is not in GROUP BY clause and contains
nonaggregated column ‘sss.month_id’ which is not functionally
dependent on columns in GROUP BY clause; this is incompatible with
sql_mode=only_full_group_by
```

这是由于MySQL启用了ONLY_FULL_GROUP_BY SQL模式（默认情况下）造成的。

主要有两种方法解决

### 第一种
进入MySQL命令行模式，可以使用MySQL管理工具连接，使用其中的SQL编辑模式，或者直接用命令行工具登录MySQL客户端，执行以下命令

```mysql
set @@global.sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
```

### 第二种
直接修改MySQL配置文件，ini
