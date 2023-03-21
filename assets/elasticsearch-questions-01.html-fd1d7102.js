const e=JSON.parse('{"key":"v-67bab58a","path":"/database/elasticsearch/elasticsearch-questions-01.html","title":"Elasticsearch常见面试题总结(付费)","lang":"zh-CN","frontmatter":{"title":"Elasticsearch常见面试题总结(付费)","category":"数据库","tag":["NoSQL","Elasticsearch"],"description":"Elasticsearch 基础 Elasticsearch 是什么？ ElasticSearch 是一个开源的 分布式、RESTful 搜索和分析引擎，可以用来解决使用数据库进行模糊搜索时存在的性能问题，适用于所有类型的数据，包括文本、数字、地理空间、结构化和非结构化数据。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/database/elasticsearch/elasticsearch-questions-01.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"Elasticsearch常见面试题总结(付费)"}],["meta",{"property":"og:description","content":"Elasticsearch 基础 Elasticsearch 是什么？ ElasticSearch 是一个开源的 分布式、RESTful 搜索和分析引擎，可以用来解决使用数据库进行模糊搜索时存在的性能问题，适用于所有类型的数据，包括文本、数字、地理空间、结构化和非结构化数据。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-21T15:14:14.000Z"}],["meta",{"property":"article:tag","content":"NoSQL"}],["meta",{"property":"article:tag","content":"Elasticsearch"}],["meta",{"property":"article:modified_time","content":"2023-03-21T15:14:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Elasticsearch常见面试题总结(付费)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-21T15:14:14.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Elasticsearch 基础","slug":"elasticsearch-基础","link":"#elasticsearch-基础","children":[{"level":3,"title":"Elasticsearch 是什么？","slug":"elasticsearch-是什么","link":"#elasticsearch-是什么","children":[]},{"level":3,"title":"Lucene 是什么？","slug":"lucene-是什么","link":"#lucene-是什么","children":[]},{"level":3,"title":"Elasticsearch 可以帮助我们做什么？","slug":"elasticsearch-可以帮助我们做什么","link":"#elasticsearch-可以帮助我们做什么","children":[]},{"level":3,"title":"为什么需要 Elasticsearch？MySQL 不行吗？","slug":"为什么需要-elasticsearch-mysql-不行吗","link":"#为什么需要-elasticsearch-mysql-不行吗","children":[]},{"level":3,"title":"Elasticsearch 中的基本概念","slug":"elasticsearch-中的基本概念","link":"#elasticsearch-中的基本概念","children":[]}]},{"level":2,"title":"倒排索引和正排索引","slug":"倒排索引和正排索引","link":"#倒排索引和正排索引","children":[{"level":3,"title":"倒排索引是什么？","slug":"倒排索引是什么","link":"#倒排索引是什么","children":[]},{"level":3,"title":"倒排索引的创建和检索流程了解么？","slug":"倒排索引的创建和检索流程了解么","link":"#倒排索引的创建和检索流程了解么","children":[]},{"level":3,"title":"倒排索引由什么组成？","slug":"倒排索引由什么组成","link":"#倒排索引由什么组成","children":[]},{"level":3,"title":"倒排索引和正排索引的区别是什么？","slug":"倒排索引和正排索引的区别是什么","link":"#倒排索引和正排索引的区别是什么","children":[]},{"level":3,"title":"Elasticsearch 可以针对某些地段不做索引吗？","slug":"elasticsearch-可以针对某些地段不做索引吗","link":"#elasticsearch-可以针对某些地段不做索引吗","children":[]}]},{"level":2,"title":"分词器(Analyzer)","slug":"分词器-analyzer","link":"#分词器-analyzer","children":[{"level":3,"title":"分词器有什么用？","slug":"分词器有什么用","link":"#分词器有什么用","children":[]},{"level":3,"title":"常用分词器有哪些?","slug":"常用分词器有哪些","link":"#常用分词器有哪些","children":[]},{"level":3,"title":"分词器由什么组成？","slug":"分词器由什么组成","link":"#分词器由什么组成","children":[]},{"level":3,"title":"Elasticsearch 如何基于拼音搜索？","slug":"elasticsearch-如何基于拼音搜索","link":"#elasticsearch-如何基于拼音搜索","children":[]}]},{"level":2,"title":"数据类型","slug":"数据类型","link":"#数据类型","children":[{"level":3,"title":"Elasticsearch 常见的数据类型有哪些？","slug":"elasticsearch-常见的数据类型有哪些","link":"#elasticsearch-常见的数据类型有哪些","children":[]},{"level":3,"title":"keyword 和 text 有什么区别？","slug":"keyword-和-text-有什么区别","link":"#keyword-和-text-有什么区别","children":[]},{"level":3,"title":"Elasticsearch 是否有数组类型？","slug":"elasticsearch-是否有数组类型","link":"#elasticsearch-是否有数组类型","children":[]},{"level":3,"title":"可以在 Mapping 中直接修改字段类型吗？","slug":"可以在-mapping-中直接修改字段类型吗","link":"#可以在-mapping-中直接修改字段类型吗","children":[]},{"level":3,"title":"什么是 Nested 数据类型？有什么用？","slug":"什么是-nested-数据类型-有什么用","link":"#什么是-nested-数据类型-有什么用","children":[]}]},{"level":2,"title":"Mapping","slug":"mapping","link":"#mapping","children":[{"level":3,"title":"什么是 Mapping?","slug":"什么是-mapping","link":"#什么是-mapping","children":[]},{"level":3,"title":"为什么插入数据不用指定 Mapping？","slug":"为什么插入数据不用指定-mapping","link":"#为什么插入数据不用指定-mapping","children":[]},{"level":3,"title":"有自定义过 Mapping 吗？你是怎么做的？","slug":"有自定义过-mapping-吗-你是怎么做的","link":"#有自定义过-mapping-吗-你是怎么做的","children":[]},{"level":3,"title":"动态 Mapping 有几种属性配置？","slug":"动态-mapping-有几种属性配置","link":"#动态-mapping-有几种属性配置","children":[]},{"level":3,"title":"动态 Mapping 如何防止字段无限增加？","slug":"动态-mapping-如何防止字段无限增加","link":"#动态-mapping-如何防止字段无限增加","children":[]},{"level":3,"title":"想要某个字段不被索引怎么做？","slug":"想要某个字段不被索引怎么做","link":"#想要某个字段不被索引怎么做","children":[]}]},{"level":2,"title":"查询语句","slug":"查询语句","link":"#查询语句","children":[{"level":3,"title":"查询语句的分类？","slug":"查询语句的分类","link":"#查询语句的分类","children":[]},{"level":3,"title":"Term 查询和全文检索区别？","slug":"term-查询和全文检索区别","link":"#term-查询和全文检索区别","children":[]},{"level":3,"title":"如何实现范围查询？","slug":"如何实现范围查询","link":"#如何实现范围查询","children":[]},{"level":3,"title":"Match 和 Match_phrase 区别？","slug":"match-和-match-phrase-区别","link":"#match-和-match-phrase-区别","children":[]},{"level":3,"title":"Multi match 有几种匹配策略，都有什么区别？","slug":"multi-match-有几种匹配策略-都有什么区别","link":"#multi-match-有几种匹配策略-都有什么区别","children":[]},{"level":3,"title":"bool 查询有几种查询子句？","slug":"bool-查询有几种查询子句","link":"#bool-查询有几种查询子句","children":[]}]},{"level":2,"title":"数据同步","slug":"数据同步","link":"#数据同步","children":[{"level":3,"title":"Elasticsearch 和 MySQL 同步的策略有哪些？","slug":"elasticsearch-和-mysql-同步的策略有哪些","link":"#elasticsearch-和-mysql-同步的策略有哪些","children":[]},{"level":3,"title":"Canal 增量数据同步 Elasticsearch 的原理了解吗？","slug":"canal-增量数据同步-elasticsearch-的原理了解吗","link":"#canal-增量数据同步-elasticsearch-的原理了解吗","children":[]}]},{"level":2,"title":"Elasticsearch 集群","slug":"elasticsearch-集群","link":"#elasticsearch-集群","children":[{"level":3,"title":"Elasticsearch 集群是什么？有什么用？","slug":"elasticsearch-集群是什么-有什么用","link":"#elasticsearch-集群是什么-有什么用","children":[]},{"level":3,"title":"Elasticsearch 集群中的节点角色有哪些？","slug":"elasticsearch-集群中的节点角色有哪些","link":"#elasticsearch-集群中的节点角色有哪些","children":[]},{"level":3,"title":"分片是什么？有什么用？","slug":"分片是什么-有什么用","link":"#分片是什么-有什么用","children":[]},{"level":3,"title":"查询文档时如何找到对应的分片？","slug":"查询文档时如何找到对应的分片","link":"#查询文档时如何找到对应的分片","children":[]},{"level":3,"title":"自定义路由有什么好处？","slug":"自定义路由有什么好处","link":"#自定义路由有什么好处","children":[]},{"level":3,"title":"如何查看 Elasticsearch 集群健康状态？","slug":"如何查看-elasticsearch-集群健康状态","link":"#如何查看-elasticsearch-集群健康状态","children":[]},{"level":3,"title":"Elasticsearch 集群健康状态有哪几种？","slug":"elasticsearch-集群健康状态有哪几种","link":"#elasticsearch-集群健康状态有哪几种","children":[]},{"level":3,"title":"如何分析 Elasticsearch 集群异常问题？","slug":"如何分析-elasticsearch-集群异常问题","link":"#如何分析-elasticsearch-集群异常问题","children":[]}]},{"level":2,"title":"性能优化","slug":"性能优化","link":"#性能优化","children":[{"level":3,"title":"Elasticsearch 如何选择硬件配置？","slug":"elasticsearch-如何选择硬件配置","link":"#elasticsearch-如何选择硬件配置","children":[]},{"level":3,"title":"Elasticsearch 索引优化策略有哪些？","slug":"elasticsearch-索引优化策略有哪些","link":"#elasticsearch-索引优化策略有哪些","children":[]},{"level":3,"title":"Elasticsearch 查询优化策略有哪些？","slug":"elasticsearch-查询优化策略有哪些","link":"#elasticsearch-查询优化策略有哪些","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1674963073000,"updatedTime":1679411654000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":1},{"name":"diving-cloud","email":"43922483+diving-cloud@users.noreply.github.com","commits":1},{"name":"hezongkui","email":"zongkuihe@gmail.com","commits":1}]},"readingTime":{"minutes":35.6,"words":10679},"filePathRelative":"database/elasticsearch/elasticsearch-questions-01.md","localizedDate":"2023年1月29日","excerpt":"<h2> Elasticsearch 基础</h2>\\n<p><img src=\\"https://pics-cloud.oss-cn-beijing.aliyuncs.com/202303212312043.png\\" alt=\\"image-20230320221945348\\"></p>\\n<h3> <strong>Elasticsearch 是什么？</strong></h3>\\n<p>ElasticSearch 是一个开源的 <strong>分布式、RESTful 搜索和分析引擎</strong>，可以用来解决使用数据库进行模糊搜索时存在的性能问题，适用于所有类型的数据，包括文本、数字、地理空间、结构化和非结构化数据。</p>","copyright":{},"autoDesc":true}');export{e as data};
