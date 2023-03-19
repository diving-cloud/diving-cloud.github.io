const e=JSON.parse('{"key":"v-651aaf17","path":"/java/collection/java-collection-questions-01.html","title":"Java集合常见面试题总结(上)","lang":"zh-CN","frontmatter":{"title":"Java集合常见面试题总结(上)","category":"Java","tag":["Java集合"],"head":[["meta",{"name":"keywords","content":"Collection,List,Set,Queue,Deque,PriorityQueue"}],["meta",{"name":"description","content":"Java集合常见知识点和面试题总结，希望对你有帮助！"}],["meta",{"property":"og:url","content":"https://javaguide.cn/java/collection/java-collection-questions-01.html"}],["meta",{"property":"og:site_name","content":"Java学习指南"}],["meta",{"property":"og:title","content":"Java集合常见面试题总结(上)"}],["meta",{"property":"og:description","content":"集合概述 Java 集合概览 Java 集合， 也叫作容器，主要是由两大接口派生而来：一个是 Collection接口，主要用于存放单一元素；另一个是 Map 接口，主要用于存放键值对。对于Collection 接口，下面又有三个主要的子接口：List、Set 和 Queue。 Java 集合框架如下图所示："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-13T07:25:22.000Z"}],["meta",{"property":"article:tag","content":"Java集合"}],["meta",{"property":"article:modified_time","content":"2023-01-13T07:25:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java集合常见面试题总结(上)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-13T07:25:22.000Z\\",\\"author\\":[]}"]],"description":"集合概述 Java 集合概览 Java 集合， 也叫作容器，主要是由两大接口派生而来：一个是 Collection接口，主要用于存放单一元素；另一个是 Map 接口，主要用于存放键值对。对于Collection 接口，下面又有三个主要的子接口：List、Set 和 Queue。 Java 集合框架如下图所示："},"headers":[{"level":2,"title":"集合概述","slug":"集合概述","link":"#集合概述","children":[{"level":3,"title":"Java 集合概览","slug":"java-集合概览","link":"#java-集合概览","children":[]},{"level":3,"title":"说说 List, Set, Queue, Map 四者的区别？","slug":"说说-list-set-queue-map-四者的区别","link":"#说说-list-set-queue-map-四者的区别","children":[]},{"level":3,"title":"集合框架底层数据结构总结","slug":"集合框架底层数据结构总结","link":"#集合框架底层数据结构总结","children":[]},{"level":3,"title":"如何选用集合?","slug":"如何选用集合","link":"#如何选用集合","children":[]},{"level":3,"title":"为什么要使用集合？","slug":"为什么要使用集合","link":"#为什么要使用集合","children":[]}]},{"level":2,"title":"Collection 子接口之 List","slug":"collection-子接口之-list","link":"#collection-子接口之-list","children":[{"level":3,"title":"ArrayList 和 Vector 的区别?","slug":"arraylist-和-vector-的区别","link":"#arraylist-和-vector-的区别","children":[]},{"level":3,"title":"ArrayList 与 LinkedList 区别?","slug":"arraylist-与-linkedlist-区别","link":"#arraylist-与-linkedlist-区别","children":[]},{"level":3,"title":"说一说 ArrayList 的扩容机制吧","slug":"说一说-arraylist-的扩容机制吧","link":"#说一说-arraylist-的扩容机制吧","children":[]}]},{"level":2,"title":"Collection 子接口之 Set","slug":"collection-子接口之-set","link":"#collection-子接口之-set","children":[{"level":3,"title":"comparable 和 Comparator 的区别","slug":"comparable-和-comparator-的区别","link":"#comparable-和-comparator-的区别","children":[]},{"level":3,"title":"无序性和不可重复性的含义是什么","slug":"无序性和不可重复性的含义是什么","link":"#无序性和不可重复性的含义是什么","children":[]},{"level":3,"title":"比较 HashSet、LinkedHashSet 和 TreeSet 三者的异同","slug":"比较-hashset、linkedhashset-和-treeset-三者的异同","link":"#比较-hashset、linkedhashset-和-treeset-三者的异同","children":[]}]},{"level":2,"title":"Collection 子接口之 Queue","slug":"collection-子接口之-queue","link":"#collection-子接口之-queue","children":[{"level":3,"title":"Queue 与 Deque 的区别","slug":"queue-与-deque-的区别","link":"#queue-与-deque-的区别","children":[]},{"level":3,"title":"ArrayDeque 与 LinkedList 的区别","slug":"arraydeque-与-linkedlist-的区别","link":"#arraydeque-与-linkedlist-的区别","children":[]},{"level":3,"title":"说一说 PriorityQueue","slug":"说一说-priorityqueue","link":"#说一说-priorityqueue","children":[]}]}],"git":{"createdTime":1643707227000,"updatedTime":1673594722000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":10},{"name":"Jarvan-Song","email":"571354831@qq.com","commits":1},{"name":"Sam Ho","email":"92196261+samho2008@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":13.79,"words":4138},"filePathRelative":"java/collection/java-collection-questions-01.md","localizedDate":"2022年2月1日","excerpt":"<h2> 集合概述</h2>\\n<h3> Java 集合概览</h3>\\n<p>Java 集合， 也叫作容器，主要是由两大接口派生而来：一个是 <code>Collection</code>接口，主要用于存放单一元素；另一个是 <code>Map</code> 接口，主要用于存放键值对。对于<code>Collection</code> 接口，下面又有三个主要的子接口：<code>List</code>、<code>Set</code> 和 <code>Queue</code>。</p>\\n<p>Java 集合框架如下图所示：</p>\\n<p><img src=\\"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/java/collection/java-collection-hierarchy.png\\" alt=\\"\\"></p>","copyright":{},"autoDesc":true}');export{e as data};
