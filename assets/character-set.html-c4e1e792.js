const e=JSON.parse('{"key":"v-57d71b54","path":"/database/character-set.html","title":"字符集详解","lang":"zh-CN","frontmatter":{"title":"字符集详解","category":"数据库","tag":["数据库基础"],"description":"MySQL 字符编码集中有两套 UTF-8 编码实现：utf8 和 utf8mb4。 如果使用 utf8 的话，存储emoji 符号和一些比较复杂的汉字、繁体字就会出错。 为什么会这样呢？这篇文章可以从源头给你解答。 何为字符集？ 字符是各种文字和符号的统称，包括各个国家文字、标点符号、表情、数字等等。 字符集 就是一系列字符的集合。字符集的种类较多，每个字符集可以表示的字符范围通常不同，就比如说有些字符集是无法表示汉字的。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/JavaGuide//database/character-set.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"字符集详解"}],["meta",{"property":"og:description","content":"MySQL 字符编码集中有两套 UTF-8 编码实现：utf8 和 utf8mb4。 如果使用 utf8 的话，存储emoji 符号和一些比较复杂的汉字、繁体字就会出错。 为什么会这样呢？这篇文章可以从源头给你解答。 何为字符集？ 字符是各种文字和符号的统称，包括各个国家文字、标点符号、表情、数字等等。 字符集 就是一系列字符的集合。字符集的种类较多，每个字符集可以表示的字符范围通常不同，就比如说有些字符集是无法表示汉字的。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-05T10:24:11.000Z"}],["meta",{"property":"article:tag","content":"数据库基础"}],["meta",{"property":"article:modified_time","content":"2022-11-05T10:24:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"字符集详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-11-05T10:24:11.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"何为字符集？","slug":"何为字符集","link":"#何为字符集","children":[]},{"level":2,"title":"有哪些常见的字符集？","slug":"有哪些常见的字符集","link":"#有哪些常见的字符集","children":[{"level":3,"title":"ASCII","slug":"ascii","link":"#ascii","children":[]},{"level":3,"title":"GB2312","slug":"gb2312","link":"#gb2312","children":[]},{"level":3,"title":"GBK","slug":"gbk","link":"#gbk","children":[]},{"level":3,"title":"GB18030","slug":"gb18030","link":"#gb18030","children":[]},{"level":3,"title":"BIG5","slug":"big5","link":"#big5","children":[]},{"level":3,"title":"Unicode & UTF-8编码","slug":"unicode-utf-8编码","link":"#unicode-utf-8编码","children":[]}]},{"level":2,"title":"MySQL 字符集","slug":"mysql-字符集","link":"#mysql-字符集","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1646270096000,"updatedTime":1667643851000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":2},{"name":"Dayu","email":"zxy690@qq.com","commits":1}]},"readingTime":{"minutes":6.55,"words":1964},"filePathRelative":"database/character-set.md","localizedDate":"2022年3月3日","excerpt":"<p>MySQL 字符编码集中有两套 UTF-8 编码实现：<strong><code>utf8</code></strong> 和 <strong><code>utf8mb4</code></strong>。</p>\\n<p>如果使用 <strong><code>utf8</code></strong>  的话，存储emoji 符号和一些比较复杂的汉字、繁体字就会出错。</p>\\n<p>为什么会这样呢？这篇文章可以从源头给你解答。</p>\\n<h2> 何为字符集？</h2>\\n<p>字符是各种文字和符号的统称，包括各个国家文字、标点符号、表情、数字等等。 <strong>字符集</strong> 就是一系列字符的集合。字符集的种类较多，每个字符集可以表示的字符范围通常不同，就比如说有些字符集是无法表示汉字的。</p>","copyright":{},"autoDesc":true}');export{e as data};
