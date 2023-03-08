const e=JSON.parse('{"key":"v-c4bc27bc","path":"/java/io/io-model.html","title":"Java IO模型详解","lang":"zh-CN","frontmatter":{"title":"Java IO模型详解","category":"Java","tag":["Java IO","Java基础"],"description":"IO 模型这块确实挺难理解的，需要太多计算机底层知识。写这篇文章用了挺久，就非常希望能把我所知道的讲出来吧!希望朋友们能有收获！为了写这篇文章，还翻看了一下《UNIX 网络编程》这本书，太难了，我滴乖乖！心痛~ 个人能力有限。如果文章有任何需要补充/完善/修改的地方，欢迎在评论区指出，共同进步！ 前言 I/O 一直是很多小伙伴难以理解的一个知识点，这篇文章我会将我所理解的 I/O 讲给你听，希望可以对你有所帮助。 I/O 何为 I/O? I/O（Input/Outpu） 即输入／输出 。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/java/io/io-model.html"}],["meta",{"property":"og:site_name","content":"Java学习指南"}],["meta",{"property":"og:title","content":"Java IO模型详解"}],["meta",{"property":"og:description","content":"IO 模型这块确实挺难理解的，需要太多计算机底层知识。写这篇文章用了挺久，就非常希望能把我所知道的讲出来吧!希望朋友们能有收获！为了写这篇文章，还翻看了一下《UNIX 网络编程》这本书，太难了，我滴乖乖！心痛~ 个人能力有限。如果文章有任何需要补充/完善/修改的地方，欢迎在评论区指出，共同进步！ 前言 I/O 一直是很多小伙伴难以理解的一个知识点，这篇文章我会将我所理解的 I/O 讲给你听，希望可以对你有所帮助。 I/O 何为 I/O? I/O（Input/Outpu） 即输入／输出 。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-07-16T10:32:46.000Z"}],["meta",{"property":"article:tag","content":"Java IO"}],["meta",{"property":"article:tag","content":"Java基础"}],["meta",{"property":"article:modified_time","content":"2022-07-16T10:32:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java IO模型详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-07-16T10:32:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"I/O","slug":"i-o","link":"#i-o","children":[{"level":3,"title":"何为 I/O?","slug":"何为-i-o","link":"#何为-i-o","children":[]},{"level":3,"title":"有哪些常见的 IO 模型?","slug":"有哪些常见的-io-模型","link":"#有哪些常见的-io-模型","children":[]}]},{"level":2,"title":"Java 中 3 种常见 IO 模型","slug":"java-中-3-种常见-io-模型","link":"#java-中-3-种常见-io-模型","children":[{"level":3,"title":"BIO (Blocking I/O)","slug":"bio-blocking-i-o","link":"#bio-blocking-i-o","children":[]},{"level":3,"title":"NIO (Non-blocking/New I/O)","slug":"nio-non-blocking-new-i-o","link":"#nio-non-blocking-new-i-o","children":[]},{"level":3,"title":"AIO (Asynchronous I/O)","slug":"aio-asynchronous-i-o","link":"#aio-asynchronous-i-o","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1657967566000,"updatedTime":1657967566000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":1}]},"readingTime":{"minutes":6.55,"words":1964},"filePathRelative":"java/io/io-model.md","localizedDate":"2022年7月16日","excerpt":"<p>IO 模型这块确实挺难理解的，需要太多计算机底层知识。写这篇文章用了挺久，就非常希望能把我所知道的讲出来吧!希望朋友们能有收获！为了写这篇文章，还翻看了一下《UNIX 网络编程》这本书，太难了，我滴乖乖！心痛~</p>\\n<p><em>个人能力有限。如果文章有任何需要补充/完善/修改的地方，欢迎在评论区指出，共同进步！</em></p>\\n<h2> 前言</h2>\\n<p>I/O 一直是很多小伙伴难以理解的一个知识点，这篇文章我会将我所理解的 I/O 讲给你听，希望可以对你有所帮助。</p>\\n<h2> I/O</h2>\\n<h3> 何为 I/O?</h3>\\n<p>I/O（<strong>I</strong>nput/<strong>O</strong>utpu） 即<strong>输入／输出</strong> 。</p>","copyright":{},"autoDesc":true}');export{e as data};
