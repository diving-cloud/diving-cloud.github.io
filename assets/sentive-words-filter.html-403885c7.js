const e=JSON.parse('{"key":"v-735e90a6","path":"/system-design/security/sentive-words-filter.html","title":"敏感词过滤方案总结","lang":"zh-CN","frontmatter":{"title":"敏感词过滤方案总结","category":"系统设计","tag":["安全"],"description":"系统需要对用户输入的文本进行敏感词过滤如色情、政治、暴力相关的词汇。 敏感词过滤用的使用比较多的 Trie 树算法 和 DFA 算法。 算法实现 Trie 树 Trie 树 也称为字典树、单词查找树，哈系树的一种变种，通常被用于字符串匹配，用来解决在一组字符串集合中快速查找某个字符串的问题。像浏览器搜索的关键词提示一般就是基于 Trie 树来做的。 假如我们的敏感词库中有以下敏感词：","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/JavaGuide//system-design/security/sentive-words-filter.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"敏感词过滤方案总结"}],["meta",{"property":"og:description","content":"系统需要对用户输入的文本进行敏感词过滤如色情、政治、暴力相关的词汇。 敏感词过滤用的使用比较多的 Trie 树算法 和 DFA 算法。 算法实现 Trie 树 Trie 树 也称为字典树、单词查找树，哈系树的一种变种，通常被用于字符串匹配，用来解决在一组字符串集合中快速查找某个字符串的问题。像浏览器搜索的关键词提示一般就是基于 Trie 树来做的。 假如我们的敏感词库中有以下敏感词："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://javaguide.cn/JavaGuide//"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-28T07:39:17.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"敏感词过滤方案总结"}],["meta",{"property":"article:tag","content":"安全"}],["meta",{"property":"article:modified_time","content":"2023-02-28T07:39:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"敏感词过滤方案总结\\",\\"image\\":[\\"https://javaguide.cn/JavaGuide//\\"],\\"dateModified\\":\\"2023-02-28T07:39:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"算法实现","slug":"算法实现","link":"#算法实现","children":[{"level":3,"title":"Trie 树","slug":"trie-树","link":"#trie-树","children":[]},{"level":3,"title":"DFA","slug":"dfa","link":"#dfa","children":[]}]},{"level":2,"title":"开源项目","slug":"开源项目","link":"#开源项目","children":[]},{"level":2,"title":"论文","slug":"论文","link":"#论文","children":[]}],"git":{"createdTime":1642064260000,"updatedTime":1677569957000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":7},{"name":"xsg22","email":"111886011+xsg22@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.81,"words":844},"filePathRelative":"system-design/security/sentive-words-filter.md","localizedDate":"2022年1月13日","excerpt":"<p>系统需要对用户输入的文本进行敏感词过滤如色情、政治、暴力相关的词汇。</p>\\n<p>敏感词过滤用的使用比较多的 <strong>Trie 树算法</strong> 和 <strong>DFA 算法</strong>。</p>\\n<h2> 算法实现</h2>\\n<h3> Trie 树</h3>\\n<p><strong>Trie 树</strong> 也称为字典树、单词查找树，哈系树的一种变种，通常被用于字符串匹配，用来解决在一组字符串集合中快速查找某个字符串的问题。像浏览器搜索的关键词提示一般就是基于 Trie 树来做的。</p>\\n<p></p>\\n<p>假如我们的敏感词库中有以下敏感词：</p>","copyright":{},"autoDesc":true}');export{e as data};
