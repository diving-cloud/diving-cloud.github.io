const e=JSON.parse('{"key":"v-886fcfe6","path":"/java/collection/arraylist-source-code.html","title":"ArrayList源码&扩容机制分析","lang":"zh-CN","frontmatter":{"title":"ArrayList源码&扩容机制分析","category":"Java","tag":["Java集合"],"description":"ArrayList 简介 ArrayList 的底层是数组队列，相当于动态数组。与 Java 中的数组相比，它的容量能动态增长。在添加大量元素前，应用程序可以使用ensureCapacity操作来增加 ArrayList 实例的容量。这可以减少递增式再分配的数量。 ArrayList继承于 AbstractList ，实现了 List, RandomAccess, Cloneable, java.io.Serializable 这些接口。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/java/collection/arraylist-source-code.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"ArrayList源码&扩容机制分析"}],["meta",{"property":"og:description","content":"ArrayList 简介 ArrayList 的底层是数组队列，相当于动态数组。与 Java 中的数组相比，它的容量能动态增长。在添加大量元素前，应用程序可以使用ensureCapacity操作来增加 ArrayList 实例的容量。这可以减少递增式再分配的数量。 ArrayList继承于 AbstractList ，实现了 List, RandomAccess, Cloneable, java.io.Serializable 这些接口。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-17T11:41:32.000Z"}],["meta",{"property":"article:tag","content":"Java集合"}],["meta",{"property":"article:modified_time","content":"2022-11-17T11:41:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ArrayList源码&扩容机制分析\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-11-17T11:41:32.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"ArrayList 简介","slug":"arraylist-简介","link":"#arraylist-简介","children":[{"level":3,"title":"Arraylist 和 Vector 的区别?","slug":"arraylist-和-vector-的区别","link":"#arraylist-和-vector-的区别","children":[]},{"level":3,"title":"Arraylist 与 LinkedList 区别?","slug":"arraylist-与-linkedlist-区别","link":"#arraylist-与-linkedlist-区别","children":[]}]},{"level":2,"title":"ArrayList 核心源码解读","slug":"arraylist-核心源码解读","link":"#arraylist-核心源码解读","children":[]},{"level":2,"title":"ArrayList 扩容机制分析","slug":"arraylist-扩容机制分析","link":"#arraylist-扩容机制分析","children":[{"level":3,"title":"先从 ArrayList 的构造函数说起","slug":"先从-arraylist-的构造函数说起","link":"#先从-arraylist-的构造函数说起","children":[]},{"level":3,"title":"一步一步分析 ArrayList 扩容机制","slug":"一步一步分析-arraylist-扩容机制","link":"#一步一步分析-arraylist-扩容机制","children":[]},{"level":3,"title":"System.arraycopy() 和 Arrays.copyOf()方法","slug":"system-arraycopy-和-arrays-copyof-方法","link":"#system-arraycopy-和-arrays-copyof-方法","children":[]},{"level":3,"title":"ensureCapacity方法","slug":"ensurecapacity方法","link":"#ensurecapacity方法","children":[]}]}],"git":{"createdTime":1636214511000,"updatedTime":1668685292000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":4},{"name":"Raxcl","email":"70327089+Raxcl@users.noreply.github.com","commits":1},{"name":"dd201702","email":"haveonegoodday@126.com","commits":1},{"name":"dengyongqiang","email":"dengyongqiang1989@163.com","commits":1}]},"readingTime":{"minutes":21.32,"words":6395},"filePathRelative":"java/collection/arraylist-source-code.md","localizedDate":"2021年11月7日","excerpt":"<h2> ArrayList 简介</h2>\\n<p><code>ArrayList</code> 的底层是数组队列，相当于动态数组。与 Java 中的数组相比，它的容量能动态增长。在添加大量元素前，应用程序可以使用<code>ensureCapacity</code>操作来增加 <code>ArrayList</code> 实例的容量。这可以减少递增式再分配的数量。</p>\\n<p><code>ArrayList</code>继承于 <strong><code>AbstractList</code></strong> ，实现了 <strong><code>List</code></strong>, <strong><code>RandomAccess</code></strong>, <strong><code>Cloneable</code></strong>, <strong><code>java.io.Serializable</code></strong> 这些接口。</p>","copyright":{},"autoDesc":true}');export{e as data};
