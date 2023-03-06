const e=JSON.parse('{"key":"v-0f0f0fa6","path":"/java/io/io-basis.html","title":"Java IO基础知识总结","lang":"zh-CN","frontmatter":{"title":"Java IO基础知识总结","category":"Java","tag":["Java IO","Java基础"],"description":"IO 流简介 IO 即 Input/Output，输入和输出。数据输入到计算机内存的过程即输入，反之输出到外部存储（比如数据库，文件，远程主机）的过程即输出。数据传输过程类似于水流，因此称为 IO 流。IO 流在 Java 中分为输入流和输出流，而根据数据的处理方式又分为字节流和字符流。 Java IO 流的 40 多个类都是从如下 4 个抽象类基类中派生出来的。 InputStream/Reader: 所有的输入流的基类，前者是字节输入流，后者是字符输入流。 OutputStream/Writer: 所有输出流的基类，前者是字节输出流，后者是字符输出流。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/java/io/io-basis.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"Java IO基础知识总结"}],["meta",{"property":"og:description","content":"IO 流简介 IO 即 Input/Output，输入和输出。数据输入到计算机内存的过程即输入，反之输出到外部存储（比如数据库，文件，远程主机）的过程即输出。数据传输过程类似于水流，因此称为 IO 流。IO 流在 Java 中分为输入流和输出流，而根据数据的处理方式又分为字节流和字符流。 Java IO 流的 40 多个类都是从如下 4 个抽象类基类中派生出来的。 InputStream/Reader: 所有的输入流的基类，前者是字节输入流，后者是字符输入流。 OutputStream/Writer: 所有输出流的基类，前者是字节输出流，后者是字符输出流。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-08T17:21:07.000Z"}],["meta",{"property":"article:tag","content":"Java IO"}],["meta",{"property":"article:tag","content":"Java基础"}],["meta",{"property":"article:modified_time","content":"2023-02-08T17:21:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java IO基础知识总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-08T17:21:07.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"IO 流简介","slug":"io-流简介","link":"#io-流简介","children":[]},{"level":2,"title":"字节流","slug":"字节流","link":"#字节流","children":[{"level":3,"title":"InputStream（字节输入流）","slug":"inputstream-字节输入流","link":"#inputstream-字节输入流","children":[]},{"level":3,"title":"OutputStream（字节输出流）","slug":"outputstream-字节输出流","link":"#outputstream-字节输出流","children":[]}]},{"level":2,"title":"字符流","slug":"字符流","link":"#字符流","children":[{"level":3,"title":"Reader（字符输入流）","slug":"reader-字符输入流","link":"#reader-字符输入流","children":[]},{"level":3,"title":"Writer（字符输出流）","slug":"writer-字符输出流","link":"#writer-字符输出流","children":[]}]},{"level":2,"title":"字节缓冲流","slug":"字节缓冲流","link":"#字节缓冲流","children":[{"level":3,"title":"BufferedInputStream（字节缓冲输入流）","slug":"bufferedinputstream-字节缓冲输入流","link":"#bufferedinputstream-字节缓冲输入流","children":[]},{"level":3,"title":"BufferedOutputStream（字节缓冲输出流）","slug":"bufferedoutputstream-字节缓冲输出流","link":"#bufferedoutputstream-字节缓冲输出流","children":[]}]},{"level":2,"title":"字符缓冲流","slug":"字符缓冲流","link":"#字符缓冲流","children":[]},{"level":2,"title":"打印流","slug":"打印流","link":"#打印流","children":[]},{"level":2,"title":"随机访问流","slug":"随机访问流","link":"#随机访问流","children":[]}],"git":{"createdTime":1657967566000,"updatedTime":1675876867000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":2},{"name":"15168387900","email":"65106285+15168387900@users.noreply.github.com","commits":1},{"name":"Jidcoo","email":"65707480+Jidcoo@users.noreply.github.com","commits":1},{"name":"MrDecadent","email":"82100995+MrDecadent@users.noreply.github.com","commits":1},{"name":"Raxcl","email":"70327089+Raxcl@users.noreply.github.com","commits":1},{"name":"Zhongtao Miao","email":"zhongtao.miao@gmail.com","commits":1},{"name":"xurunhao","email":"1160286114@qq.com","commits":1}]},"readingTime":{"minutes":15.76,"words":4728},"filePathRelative":"java/io/io-basis.md","localizedDate":"2022年7月16日","excerpt":"<h2> IO 流简介</h2>\\n<p>IO 即 <code>Input/Output</code>，输入和输出。数据输入到计算机内存的过程即输入，反之输出到外部存储（比如数据库，文件，远程主机）的过程即输出。数据传输过程类似于水流，因此称为 IO 流。IO 流在 Java 中分为输入流和输出流，而根据数据的处理方式又分为字节流和字符流。</p>\\n<p>Java IO 流的 40 多个类都是从如下 4 个抽象类基类中派生出来的。</p>\\n<ul>\\n<li><code>InputStream</code>/<code>Reader</code>: 所有的输入流的基类，前者是字节输入流，后者是字符输入流。</li>\\n<li><code>OutputStream</code>/<code>Writer</code>: 所有输出流的基类，前者是字节输出流，后者是字符输出流。</li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
