const e=JSON.parse('{"key":"v-6169a9d6","path":"/database/redis/redis-questions-02.html","title":"Redis常见面试题总结(下)","lang":"zh-CN","frontmatter":{"title":"Redis常见面试题总结(下)","category":"数据库","tag":["Redis"],"head":[["meta",{"name":"keywords","content":"Redis基础,Redis常见数据结构,Redis线程模型,Redis内存管理,Redis事务,Redis性能优化"}],["meta",{"name":"description","content":"一篇文章总结Redis常见的知识点和面试题，涵盖Redis基础、Redis常见数据结构、Redis线程模型、Redis内存管理、Redis事务、Redis性能优化等内容。"}],["meta",{"property":"og:url","content":"https://javaguide.cn/database/redis/redis-questions-02.html"}],["meta",{"property":"og:site_name","content":"Java学习指南"}],["meta",{"property":"og:title","content":"Redis常见面试题总结(下)"}],["meta",{"property":"og:description","content":"Redis 事务 如何使用 Redis 事务？ Redis 可以通过 MULTI，EXEC，DISCARD 和 WATCH 等命令来实现事务(transaction)功能。 &gt; MULTI OK &gt; SET PROJECT \\"JavaGuide\\" QUEUED &gt; GET PROJECT QUEUED &gt; EXEC 1) OK 2) \\"JavaGuide\\""}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-01T06:30:18.000Z"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:modified_time","content":"2023-03-01T06:30:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis常见面试题总结(下)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-01T06:30:18.000Z\\",\\"author\\":[]}"]],"description":"Redis 事务 如何使用 Redis 事务？ Redis 可以通过 MULTI，EXEC，DISCARD 和 WATCH 等命令来实现事务(transaction)功能。 &gt; MULTI OK &gt; SET PROJECT \\"JavaGuide\\" QUEUED &gt; GET PROJECT QUEUED &gt; EXEC 1) OK 2) \\"JavaGuide\\""},"headers":[{"level":2,"title":"Redis 事务","slug":"redis-事务","link":"#redis-事务","children":[{"level":3,"title":"如何使用 Redis 事务？","slug":"如何使用-redis-事务","link":"#如何使用-redis-事务","children":[]},{"level":3,"title":"Redis 事务支持原子性吗？","slug":"redis-事务支持原子性吗","link":"#redis-事务支持原子性吗","children":[]},{"level":3,"title":"如何解决 Redis 事务的缺陷？","slug":"如何解决-redis-事务的缺陷","link":"#如何解决-redis-事务的缺陷","children":[]}]},{"level":2,"title":"Redis 性能优化","slug":"redis-性能优化","link":"#redis-性能优化","children":[{"level":3,"title":"Redis bigkey","slug":"redis-bigkey","link":"#redis-bigkey","children":[]},{"level":3,"title":"大量 key 集中过期问题","slug":"大量-key-集中过期问题","link":"#大量-key-集中过期问题","children":[]},{"level":3,"title":"使用批量操作减少网络传输","slug":"使用批量操作减少网络传输","link":"#使用批量操作减少网络传输","children":[]}]},{"level":2,"title":"Redis 生产问题","slug":"redis-生产问题","link":"#redis-生产问题","children":[{"level":3,"title":"缓存穿透","slug":"缓存穿透","link":"#缓存穿透","children":[]},{"level":3,"title":"缓存击穿","slug":"缓存击穿","link":"#缓存击穿","children":[]},{"level":3,"title":"缓存雪崩","slug":"缓存雪崩","link":"#缓存雪崩","children":[]},{"level":3,"title":"如何保证缓存和数据库数据的一致性？","slug":"如何保证缓存和数据库数据的一致性","link":"#如何保证缓存和数据库数据的一致性","children":[]}]},{"level":2,"title":"Redis 集群","slug":"redis-集群","link":"#redis-集群","children":[]},{"level":2,"title":"Redis 使用规范","slug":"redis-使用规范","link":"#redis-使用规范","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1658327220000,"updatedTime":1677652218000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":9},{"name":"Guide","email":"koushuangbwcx@163.com","commits":1}]},"readingTime":{"minutes":21.73,"words":6520},"filePathRelative":"database/redis/redis-questions-02.md","localizedDate":"2022年7月20日","excerpt":"<h2> Redis 事务</h2>\\n<h3> 如何使用 Redis 事务？</h3>\\n<p>Redis 可以通过 <strong><code>MULTI</code>，<code>EXEC</code>，<code>DISCARD</code> 和 <code>WATCH</code></strong> 等命令来实现事务(transaction)功能。</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token operator\\">&gt;</span> MULTI\\nOK\\n<span class=\\"token operator\\">&gt;</span> SET PROJECT <span class=\\"token string\\">\\"JavaGuide\\"</span>\\nQUEUED\\n<span class=\\"token operator\\">&gt;</span> GET PROJECT\\nQUEUED\\n<span class=\\"token operator\\">&gt;</span> EXEC\\n<span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> OK\\n<span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span> <span class=\\"token string\\">\\"JavaGuide\\"</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{e as data};
