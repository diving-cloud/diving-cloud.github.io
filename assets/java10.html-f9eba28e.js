const e=JSON.parse('{"key":"v-ce626032","path":"/java/new-features/java10.html","title":"Java 10 新特性概览","lang":"zh-CN","frontmatter":{"title":"Java 10 新特性概览","category":"Java","tag":["Java新特性"],"description":"Java 10 发布于 2018 年 3 月 20 日，最知名的特性应该是 var 关键字（局部变量类型推断）的引入了，其他还有垃圾收集器改善、GC 改进、性能提升、线程管控等一批新特性。 概览（精选了一部分） ： JEP 286：局部变量类型推断 JEP 304：垃圾回收器接口 JEP 307：G1 并行 Full GC JEP 310：应用程序类数据共享(扩展 CDS 功能) JEP 317：实验性的基于 Java 的 JIT 编译器","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/java/new-features/java10.html"}],["meta",{"property":"og:site_name","content":"Java学习指南"}],["meta",{"property":"og:title","content":"Java 10 新特性概览"}],["meta",{"property":"og:description","content":"Java 10 发布于 2018 年 3 月 20 日，最知名的特性应该是 var 关键字（局部变量类型推断）的引入了，其他还有垃圾收集器改善、GC 改进、性能提升、线程管控等一批新特性。 概览（精选了一部分） ： JEP 286：局部变量类型推断 JEP 304：垃圾回收器接口 JEP 307：G1 并行 Full GC JEP 310：应用程序类数据共享(扩展 CDS 功能) JEP 317：实验性的基于 Java 的 JIT 编译器"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-03-01T10:16:51.000Z"}],["meta",{"property":"article:tag","content":"Java新特性"}],["meta",{"property":"article:modified_time","content":"2022-03-01T10:16:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 10 新特性概览\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-03-01T10:16:51.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"局部变量类型推断(var)","slug":"局部变量类型推断-var","link":"#局部变量类型推断-var","children":[]},{"level":2,"title":"垃圾回收器接口","slug":"垃圾回收器接口","link":"#垃圾回收器接口","children":[]},{"level":2,"title":"G1 并行 Full GC","slug":"g1-并行-full-gc","link":"#g1-并行-full-gc","children":[]},{"level":2,"title":"集合增强","slug":"集合增强","link":"#集合增强","children":[]},{"level":2,"title":"Optional 增强","slug":"optional-增强","link":"#optional-增强","children":[]},{"level":2,"title":"应用程序类数据共享(扩展 CDS 功能)","slug":"应用程序类数据共享-扩展-cds-功能","link":"#应用程序类数据共享-扩展-cds-功能","children":[]},{"level":2,"title":"实验性的基于 Java 的 JIT 编译器","slug":"实验性的基于-java-的-jit-编译器","link":"#实验性的基于-java-的-jit-编译器","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1646129811000,"updatedTime":1646129811000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":1}]},"readingTime":{"minutes":4.9,"words":1470},"filePathRelative":"java/new-features/java10.md","localizedDate":"2022年3月1日","excerpt":"<p><strong>Java 10</strong> 发布于 2018 年 3 月 20 日，最知名的特性应该是 <code>var</code> 关键字（局部变量类型推断）的引入了，其他还有垃圾收集器改善、GC 改进、性能提升、线程管控等一批新特性。</p>\\n<p><strong>概览（精选了一部分）</strong> ：</p>\\n<ul>\\n<li><a href=\\"https://openjdk.java.net/jeps/286\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JEP 286：局部变量类型推断</a></li>\\n<li><a href=\\"https://openjdk.java.net/jeps/304\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JEP 304：垃圾回收器接口</a></li>\\n<li><a href=\\"https://openjdk.java.net/jeps/307\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JEP 307：G1 并行 Full GC</a></li>\\n<li><a href=\\"https://openjdk.java.net/jeps/310\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JEP 310：应用程序类数据共享(扩展 CDS 功能)</a></li>\\n<li><a href=\\"https://openjdk.java.net/jeps/317\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JEP 317：实验性的基于 Java 的 JIT 编译器</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
