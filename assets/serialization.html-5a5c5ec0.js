const e=JSON.parse('{"key":"v-756ed34e","path":"/java/basis/serialization.html","title":"Java 序列化详解","lang":"zh-CN","frontmatter":{"title":"Java 序列化详解","category":"Java","tag":["Java基础"],"description":"什么是序列化和反序列化? 如果我们需要持久化 Java 对象比如将 Java 对象保存在文件中，或者在网络传输 Java 对象，这些场景都需要用到序列化。 简单来说： 序列化： 将数据结构或对象转换成二进制字节流的过程 反序列化：将在序列化过程中所生成的二进制字节流转换成数据结构或者对象的过程 对于 Java 这种面向对象编程语言来说，我们序列化的都是对象（Object）也就是实例化后的类(Class)，但是在 C++这种半面向对象的语言中，struct(结构体)定义的是数据结构类型，而 class 对应的是对象类型。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/java/basis/serialization.html"}],["meta",{"property":"og:site_name","content":"Java学习指南"}],["meta",{"property":"og:title","content":"Java 序列化详解"}],["meta",{"property":"og:description","content":"什么是序列化和反序列化? 如果我们需要持久化 Java 对象比如将 Java 对象保存在文件中，或者在网络传输 Java 对象，这些场景都需要用到序列化。 简单来说： 序列化： 将数据结构或对象转换成二进制字节流的过程 反序列化：将在序列化过程中所生成的二进制字节流转换成数据结构或者对象的过程 对于 Java 这种面向对象编程语言来说，我们序列化的都是对象（Object）也就是实例化后的类(Class)，但是在 C++这种半面向对象的语言中，struct(结构体)定义的是数据结构类型，而 class 对应的是对象类型。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-08T02:21:36.000Z"}],["meta",{"property":"article:tag","content":"Java基础"}],["meta",{"property":"article:modified_time","content":"2022-11-08T02:21:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 序列化详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-11-08T02:21:36.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"什么是序列化和反序列化?","slug":"什么是序列化和反序列化","link":"#什么是序列化和反序列化","children":[]},{"level":2,"title":"常见序列化协议有哪些？","slug":"常见序列化协议有哪些","link":"#常见序列化协议有哪些","children":[{"level":3,"title":"JDK 自带的序列化方式","slug":"jdk-自带的序列化方式","link":"#jdk-自带的序列化方式","children":[]},{"level":3,"title":"Kryo","slug":"kryo","link":"#kryo","children":[]},{"level":3,"title":"Protobuf","slug":"protobuf","link":"#protobuf","children":[]},{"level":3,"title":"ProtoStuff","slug":"protostuff","link":"#protostuff","children":[]},{"level":3,"title":"Hessian","slug":"hessian","link":"#hessian","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]}],"git":{"createdTime":1649034511000,"updatedTime":1667874096000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":5},{"name":"homuri","email":"1933942151@qq.com","commits":1},{"name":"liangshuai","email":"44797618+tonels@users.noreply.github.com","commits":1},{"name":"sleepandsheep","email":"92133163+sleepandsheep@users.noreply.github.com","commits":1},{"name":"醉醉醉醉醉帅的老虎12138","email":"hacryq@163.com","commits":1}]},"readingTime":{"minutes":8.65,"words":2596},"filePathRelative":"java/basis/serialization.md","localizedDate":"2022年4月4日","excerpt":"<h2> 什么是序列化和反序列化?</h2>\\n<p>如果我们需要持久化 Java 对象比如将 Java 对象保存在文件中，或者在网络传输 Java 对象，这些场景都需要用到序列化。</p>\\n<p>简单来说：</p>\\n<ul>\\n<li><strong>序列化</strong>： 将数据结构或对象转换成二进制字节流的过程</li>\\n<li><strong>反序列化</strong>：将在序列化过程中所生成的二进制字节流转换成数据结构或者对象的过程</li>\\n</ul>\\n<p>对于 Java 这种面向对象编程语言来说，我们序列化的都是对象（Object）也就是实例化后的类(Class)，但是在 C++这种半面向对象的语言中，struct(结构体)定义的是数据结构类型，而 class 对应的是对象类型。</p>","copyright":{},"autoDesc":true}');export{e as data};
