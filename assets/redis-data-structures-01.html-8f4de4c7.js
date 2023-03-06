const t=JSON.parse('{"key":"v-4f36c3e6","path":"/database/redis/redis-data-structures-01.html","title":"Redis 5 种基本数据结构详解","lang":"zh-CN","frontmatter":{"title":"Redis 5 种基本数据结构详解","category":"数据库","tag":["Redis"],"head":[["meta",{"name":"keywords","content":"Redis常见数据结构"}],["meta",{"name":"description","content":"Redis基础数据结构总结：String（字符串）、List（列表）、Set（集合）、Hash（散列）、Zset（有序集合）"}],["meta",{"property":"og:url","content":"https://javaguide.cn/JavaGuide/database/redis/redis-data-structures-01.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"Redis 5 种基本数据结构详解"}],["meta",{"property":"og:description","content":"Redis 共有 5 种基本数据结构：String（字符串）、List（列表）、Set（集合）、Hash（散列）、Zset（有序集合）。 这 5 种数据结构是直接提供给用户使用的，是数据的保存形式，其底层实现主要依赖这 8 种数据结构：简单动态字符串（SDS）、LinkedList（双向链表）、Hash Table（哈希表）、SkipList（跳跃表）、Intset（整数集合）、ZipList（压缩列表）、QuickList（快速列表）。 Redis 基本数据结构的底层数据结构实现如下： String List Hash Set Zset SDS LinkedList/ZipList/QuickList Hash Table、ZipList ZipList、Intset ZipList、SkipList"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-03T03:14:20.000Z"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:modified_time","content":"2022-12-03T03:14:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 5 种基本数据结构详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-03T03:14:20.000Z\\",\\"author\\":[]}"]],"description":"Redis 共有 5 种基本数据结构：String（字符串）、List（列表）、Set（集合）、Hash（散列）、Zset（有序集合）。 这 5 种数据结构是直接提供给用户使用的，是数据的保存形式，其底层实现主要依赖这 8 种数据结构：简单动态字符串（SDS）、LinkedList（双向链表）、Hash Table（哈希表）、SkipList（跳跃表）、Intset（整数集合）、ZipList（压缩列表）、QuickList（快速列表）。 Redis 基本数据结构的底层数据结构实现如下： String List Hash Set Zset SDS LinkedList/ZipList/QuickList Hash Table、ZipList ZipList、Intset ZipList、SkipList"},"headers":[{"level":2,"title":"String（字符串）","slug":"string-字符串","link":"#string-字符串","children":[{"level":3,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":3,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]},{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]}]},{"level":2,"title":"List（列表）","slug":"list-列表","link":"#list-列表","children":[{"level":3,"title":"介绍","slug":"介绍-1","link":"#介绍-1","children":[]},{"level":3,"title":"常用命令","slug":"常用命令-1","link":"#常用命令-1","children":[]},{"level":3,"title":"应用场景","slug":"应用场景-1","link":"#应用场景-1","children":[]}]},{"level":2,"title":"Hash（哈希）","slug":"hash-哈希","link":"#hash-哈希","children":[{"level":3,"title":"介绍","slug":"介绍-2","link":"#介绍-2","children":[]},{"level":3,"title":"常用命令","slug":"常用命令-2","link":"#常用命令-2","children":[]},{"level":3,"title":"应用场景","slug":"应用场景-2","link":"#应用场景-2","children":[]}]},{"level":2,"title":"Set（集合）","slug":"set-集合","link":"#set-集合","children":[{"level":3,"title":"介绍","slug":"介绍-3","link":"#介绍-3","children":[]},{"level":3,"title":"常用命令","slug":"常用命令-3","link":"#常用命令-3","children":[]},{"level":3,"title":"应用场景","slug":"应用场景-3","link":"#应用场景-3","children":[]}]},{"level":2,"title":"Sorted Set（有序集合）","slug":"sorted-set-有序集合","link":"#sorted-set-有序集合","children":[{"level":3,"title":"介绍","slug":"介绍-4","link":"#介绍-4","children":[]},{"level":3,"title":"常用命令","slug":"常用命令-4","link":"#常用命令-4","children":[]},{"level":3,"title":"应用场景","slug":"应用场景-4","link":"#应用场景-4","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1658300895000,"updatedTime":1670037260000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":8},{"name":"Ravooo","email":"1758267482@qq.com","commits":1}]},"readingTime":{"minutes":12.74,"words":3821},"filePathRelative":"database/redis/redis-data-structures-01.md","localizedDate":"2022年7月20日","excerpt":"<p>Redis 共有 5 种基本数据结构：String（字符串）、List（列表）、Set（集合）、Hash（散列）、Zset（有序集合）。</p>\\n<p>这 5 种数据结构是直接提供给用户使用的，是数据的保存形式，其底层实现主要依赖这 8 种数据结构：简单动态字符串（SDS）、LinkedList（双向链表）、Hash Table（哈希表）、SkipList（跳跃表）、Intset（整数集合）、ZipList（压缩列表）、QuickList（快速列表）。</p>\\n<p>Redis 基本数据结构的底层数据结构实现如下：</p>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:left\\">String</th>\\n<th style=\\"text-align:left\\">List</th>\\n<th style=\\"text-align:left\\">Hash</th>\\n<th style=\\"text-align:left\\">Set</th>\\n<th style=\\"text-align:left\\">Zset</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:left\\">SDS</td>\\n<td style=\\"text-align:left\\">LinkedList/ZipList/QuickList</td>\\n<td style=\\"text-align:left\\">Hash Table、ZipList</td>\\n<td style=\\"text-align:left\\">ZipList、Intset</td>\\n<td style=\\"text-align:left\\">ZipList、SkipList</td>\\n</tr>\\n</tbody>\\n</table>","copyright":{},"autoDesc":true}');export{t as data};
