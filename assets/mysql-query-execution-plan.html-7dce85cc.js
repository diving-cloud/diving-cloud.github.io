const e=JSON.parse('{"key":"v-7cbbb923","path":"/database/mysql/mysql-query-execution-plan.html","title":"MySQL执行计划分析","lang":"zh-CN","frontmatter":{"title":"MySQL执行计划分析","category":"数据库","tag":["MySQL"],"head":[["meta",{"name":"keywords","content":"MySQL基础,MySQL执行计划,EXPLAIN,查询优化器"}],["meta",{"name":"description","content":"执行计划是指一条 SQL 语句在经过MySQL 查询优化器的优化会后，具体的执行方式。优化 SQL 的第一步应该是读懂 SQL 的执行计划。"}],["meta",{"property":"og:url","content":"https://javaguide.cn/database/mysql/mysql-query-execution-plan.html"}],["meta",{"property":"og:site_name","content":"Java学习指南"}],["meta",{"property":"og:title","content":"MySQL执行计划分析"}],["meta",{"property":"og:description","content":"本文来自公号 MySQL 技术，JavaGuide 对其做了补充完善。原文地址：https://mp.weixin.qq.com/s/d5OowNLtXBGEAbT31sSH4g 优化 SQL 的第一步应该是读懂 SQL 的执行计划。本篇文章，我们一起来学习下 MySQL EXPLAIN 执行计划相关知识。 什么是执行计划？ 执行计划 是指一条 SQL 语句在经过 MySQL 查询优化器 的优化会后，具体的执行方式。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-14T10:33:11.000Z"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:modified_time","content":"2023-01-14T10:33:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL执行计划分析\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-14T10:33:11.000Z\\",\\"author\\":[]}"]],"description":"本文来自公号 MySQL 技术，JavaGuide 对其做了补充完善。原文地址：https://mp.weixin.qq.com/s/d5OowNLtXBGEAbT31sSH4g 优化 SQL 的第一步应该是读懂 SQL 的执行计划。本篇文章，我们一起来学习下 MySQL EXPLAIN 执行计划相关知识。 什么是执行计划？ 执行计划 是指一条 SQL 语句在经过 MySQL 查询优化器 的优化会后，具体的执行方式。"},"headers":[{"level":2,"title":"什么是执行计划？","slug":"什么是执行计划","link":"#什么是执行计划","children":[]},{"level":2,"title":"如何获取执行计划？","slug":"如何获取执行计划","link":"#如何获取执行计划","children":[]},{"level":2,"title":"如何分析 EXPLAIN 结果？","slug":"如何分析-explain-结果","link":"#如何分析-explain-结果","children":[{"level":3,"title":"id","slug":"id","link":"#id","children":[]},{"level":3,"title":"select_type","slug":"select-type","link":"#select-type","children":[]},{"level":3,"title":"table","slug":"table","link":"#table","children":[]},{"level":3,"title":"type（重要）","slug":"type-重要","link":"#type-重要","children":[]},{"level":3,"title":"possible_keys","slug":"possible-keys","link":"#possible-keys","children":[]},{"level":3,"title":"key（重要）","slug":"key-重要","link":"#key-重要","children":[]},{"level":3,"title":"key_len","slug":"key-len","link":"#key-len","children":[]},{"level":3,"title":"rows","slug":"rows","link":"#rows","children":[]},{"level":3,"title":"Extra（重要）","slug":"extra-重要","link":"#extra-重要","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1673692391000,"updatedTime":1673692391000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":1}]},"readingTime":{"minutes":6.24,"words":1871},"filePathRelative":"database/mysql/mysql-query-execution-plan.md","localizedDate":"2023年1月14日","excerpt":"<blockquote>\\n<p>本文来自公号 MySQL 技术，JavaGuide 对其做了补充完善。原文地址：https://mp.weixin.qq.com/s/d5OowNLtXBGEAbT31sSH4g</p>\\n</blockquote>\\n<p>优化 SQL 的第一步应该是读懂 SQL 的执行计划。本篇文章，我们一起来学习下 MySQL   <code>EXPLAIN</code> 执行计划相关知识。</p>\\n<h2> 什么是执行计划？</h2>\\n<p><strong>执行计划</strong> 是指一条 SQL 语句在经过 <strong>MySQL 查询优化器</strong> 的优化会后，具体的执行方式。</p>","copyright":{},"autoDesc":true}');export{e as data};
