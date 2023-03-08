const e=JSON.parse('{"key":"v-144c6e2e","path":"/java/basis/unsafe.html","title":"Java 魔法类 Unsafe 详解","lang":"zh-CN","frontmatter":{"title":"Java 魔法类 Unsafe 详解","category":"Java","tag":["Java基础"],"description":"本文整理完善自下面这两篇优秀的文章： Java魔法类：Unsafe 应用解析 - 美团技术团队 -2019 Java 双刃剑之 Unsafe 类详解 - 码农参上 - 2021","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/java/basis/unsafe.html"}],["meta",{"property":"og:site_name","content":"Java学习指南"}],["meta",{"property":"og:title","content":"Java 魔法类 Unsafe 详解"}],["meta",{"property":"og:description","content":"本文整理完善自下面这两篇优秀的文章： Java魔法类：Unsafe 应用解析 - 美团技术团队 -2019 Java 双刃剑之 Unsafe 类详解 - 码农参上 - 2021"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-10-12T02:25:34.000Z"}],["meta",{"property":"article:tag","content":"Java基础"}],["meta",{"property":"article:modified_time","content":"2022-10-12T02:25:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 魔法类 Unsafe 详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-10-12T02:25:34.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Unsafe 介绍","slug":"unsafe-介绍","link":"#unsafe-介绍","children":[]},{"level":2,"title":"Unsafe 创建","slug":"unsafe-创建","link":"#unsafe-创建","children":[]},{"level":2,"title":"Unsafe 功能","slug":"unsafe-功能","link":"#unsafe-功能","children":[{"level":3,"title":"内存操作","slug":"内存操作","link":"#内存操作","children":[]},{"level":3,"title":"内存屏障","slug":"内存屏障","link":"#内存屏障","children":[]},{"level":3,"title":"对象操作","slug":"对象操作","link":"#对象操作","children":[]},{"level":3,"title":"数组操作","slug":"数组操作","link":"#数组操作","children":[]},{"level":3,"title":"CAS 操作","slug":"cas-操作","link":"#cas-操作","children":[]},{"level":3,"title":"线程调度","slug":"线程调度","link":"#线程调度","children":[]},{"level":3,"title":"Class 操作","slug":"class-操作","link":"#class-操作","children":[]},{"level":3,"title":"系统信息","slug":"系统信息","link":"#系统信息","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1658042010000,"updatedTime":1665541534000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":3},{"name":"zxd","email":"izayoi5776@gmail.com","commits":1}]},"readingTime":{"minutes":25.13,"words":7540},"filePathRelative":"java/basis/unsafe.md","localizedDate":"2022年7月17日","excerpt":"<blockquote>\\n<p>本文整理完善自下面这两篇优秀的文章：</p>\\n<ul>\\n<li><a href=\\"https://tech.meituan.com/2019/02/14/talk-about-java-magic-class-unsafe.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Java魔法类：Unsafe 应用解析 - 美团技术团队 -2019</a></li>\\n<li><a href=\\"https://xie.infoq.cn/article/8b6ed4195e475bfb32dacc5cb\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Java 双刃剑之 Unsafe 类详解 - 码农参上 - 2021</a></li>\\n</ul>\\n</blockquote>","copyright":{},"autoDesc":true}');export{e as data};
