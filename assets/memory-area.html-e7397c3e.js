const e=JSON.parse('{"key":"v-072d717c","path":"/java/jvm/memory-area.html","title":"Java 内存区域详解（重点）","lang":"zh-CN","frontmatter":{"title":"Java 内存区域详解（重点）","category":"Java","tag":["JVM"],"description":"如果没有特殊说明，都是针对的是 HotSpot 虚拟机。 本文基于《深入理解 Java 虚拟机：JVM 高级特性与最佳实践》进行总结补充。 常见面试题 ： 介绍下 Java 内存区域（运行时数据区） Java 对象的创建过程（五步，建议能默写出来并且要知道每一步虚拟机做了什么） 对象的访问定位的两种方式（句柄和直接指针两种方式） 前言 对于 Java 程序员来说，在虚拟机自动内存管理机制下，不再需要像 C/C++程序开发程序员这样为每一个 new 操作去写对应的 delete/free 操作，不容易出现内存泄漏和内存溢出问题。正是因为 Java 程序员把内存控制权利交给 Java 虚拟机，一旦出现内存泄漏和溢出方面的问题，如果不了解虚拟机是怎样使用内存的，那么排查错误将会是一个非常艰巨的任务。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/java/jvm/memory-area.html"}],["meta",{"property":"og:site_name","content":"Java学习指南"}],["meta",{"property":"og:title","content":"Java 内存区域详解（重点）"}],["meta",{"property":"og:description","content":"如果没有特殊说明，都是针对的是 HotSpot 虚拟机。 本文基于《深入理解 Java 虚拟机：JVM 高级特性与最佳实践》进行总结补充。 常见面试题 ： 介绍下 Java 内存区域（运行时数据区） Java 对象的创建过程（五步，建议能默写出来并且要知道每一步虚拟机做了什么） 对象的访问定位的两种方式（句柄和直接指针两种方式） 前言 对于 Java 程序员来说，在虚拟机自动内存管理机制下，不再需要像 C/C++程序开发程序员这样为每一个 new 操作去写对应的 delete/free 操作，不容易出现内存泄漏和内存溢出问题。正是因为 Java 程序员把内存控制权利交给 Java 虚拟机，一旦出现内存泄漏和溢出方面的问题，如果不了解虚拟机是怎样使用内存的，那么排查错误将会是一个非常艰巨的任务。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-06T07:07:48.000Z"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:modified_time","content":"2023-03-06T07:07:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 内存区域详解（重点）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-06T07:07:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"运行时数据区域","slug":"运行时数据区域","link":"#运行时数据区域","children":[{"level":3,"title":"程序计数器","slug":"程序计数器","link":"#程序计数器","children":[]},{"level":3,"title":"Java 虚拟机栈","slug":"java-虚拟机栈","link":"#java-虚拟机栈","children":[]},{"level":3,"title":"本地方法栈","slug":"本地方法栈","link":"#本地方法栈","children":[]},{"level":3,"title":"堆","slug":"堆","link":"#堆","children":[]},{"level":3,"title":"方法区","slug":"方法区","link":"#方法区","children":[]},{"level":3,"title":"运行时常量池","slug":"运行时常量池","link":"#运行时常量池","children":[]},{"level":3,"title":"字符串常量池","slug":"字符串常量池","link":"#字符串常量池","children":[]},{"level":3,"title":"直接内存","slug":"直接内存","link":"#直接内存","children":[]}]},{"level":2,"title":"HotSpot 虚拟机对象探秘","slug":"hotspot-虚拟机对象探秘","link":"#hotspot-虚拟机对象探秘","children":[{"level":3,"title":"对象的创建","slug":"对象的创建","link":"#对象的创建","children":[]},{"level":3,"title":"对象的内存布局","slug":"对象的内存布局","link":"#对象的内存布局","children":[]},{"level":3,"title":"对象的访问定位","slug":"对象的访问定位","link":"#对象的访问定位","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1636463233000,"updatedTime":1678086468000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":23},{"name":"Guide","email":"koushuangbwcx@163.com","commits":2},{"name":"ZhoucpSAMA","email":"53161244+ZhoucpSAMA@users.noreply.github.com","commits":2},{"name":"Dayu","email":"zxy690@qq.com","commits":1},{"name":"Gale","email":"1372363493@qq.com","commits":1},{"name":"Guide哥","email":"koushuangbwcx@163.com","commits":1},{"name":"Sheldon7777","email":"51614703+Sheldon7777@users.noreply.github.com","commits":1},{"name":"sam","email":"sam2008ext@gmail.com","commits":1},{"name":"target","email":"26007894+geomonlin@users.noreply.github.com","commits":1},{"name":"呼卓宇","email":"32487460+huzhuoyu@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":23.44,"words":7032},"filePathRelative":"java/jvm/memory-area.md","localizedDate":"2021年11月9日","excerpt":"<blockquote>\\n<p>如果没有特殊说明，都是针对的是 HotSpot 虚拟机。</p>\\n<p>本文基于《深入理解 Java 虚拟机：JVM 高级特性与最佳实践》进行总结补充。</p>\\n<p>常见面试题 ：</p>\\n<ul>\\n<li>介绍下 Java 内存区域（运行时数据区）</li>\\n<li>Java 对象的创建过程（五步，建议能默写出来并且要知道每一步虚拟机做了什么）</li>\\n<li>对象的访问定位的两种方式（句柄和直接指针两种方式）</li>\\n</ul>\\n</blockquote>\\n<h2> 前言</h2>\\n<p>对于 Java 程序员来说，在虚拟机自动内存管理机制下，不再需要像 C/C++程序开发程序员这样为每一个 new 操作去写对应的 delete/free 操作，不容易出现内存泄漏和内存溢出问题。正是因为 Java 程序员把内存控制权利交给 Java 虚拟机，一旦出现内存泄漏和溢出方面的问题，如果不了解虚拟机是怎样使用内存的，那么排查错误将会是一个非常艰巨的任务。</p>","copyright":{},"autoDesc":true}');export{e as data};
