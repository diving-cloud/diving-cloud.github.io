const e=JSON.parse('{"key":"v-28f83bfe","path":"/high-availability/limit-request.html","title":"服务限流详解","lang":"zh-CN","frontmatter":{"title":"服务限流详解","category":"高可用","description":"针对软件系统来说，限流就是对请求的速率进行限制，避免瞬时的大量请求击垮软件系统。毕竟，软件系统的处理能力是有限的。如果说超过了其处理能力的范围，软件系统可能直接就挂掉了。 限流可能会导致用户的请求无法被正确处理，不过，这往往也是权衡了软件系统的稳定性之后得到的最优解。 现实生活中，处处都有限流的实际应用，就比如排队买票是为了避免大量用户涌入购票而导致售票员无法处理。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/high-availability/limit-request.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"服务限流详解"}],["meta",{"property":"og:description","content":"针对软件系统来说，限流就是对请求的速率进行限制，避免瞬时的大量请求击垮软件系统。毕竟，软件系统的处理能力是有限的。如果说超过了其处理能力的范围，软件系统可能直接就挂掉了。 限流可能会导致用户的请求无法被正确处理，不过，这往往也是权衡了软件系统的稳定性之后得到的最优解。 现实生活中，处处都有限流的实际应用，就比如排队买票是为了避免大量用户涌入购票而导致售票员无法处理。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-03T15:33:32.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-03T15:33:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"服务限流详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-11-03T15:33:32.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"常见限流算法有哪些？","slug":"常见限流算法有哪些","link":"#常见限流算法有哪些","children":[{"level":3,"title":"固定窗口计数器算法","slug":"固定窗口计数器算法","link":"#固定窗口计数器算法","children":[]},{"level":3,"title":"滑动窗口计数器算法","slug":"滑动窗口计数器算法","link":"#滑动窗口计数器算法","children":[]},{"level":3,"title":"漏桶算法","slug":"漏桶算法","link":"#漏桶算法","children":[]},{"level":3,"title":"令牌桶算法","slug":"令牌桶算法","link":"#令牌桶算法","children":[]}]},{"level":2,"title":"单机限流怎么做？","slug":"单机限流怎么做","link":"#单机限流怎么做","children":[]},{"level":2,"title":"分布式限流怎么做？","slug":"分布式限流怎么做","link":"#分布式限流怎么做","children":[]},{"level":2,"title":"相关阅读","slug":"相关阅读","link":"#相关阅读","children":[]}],"git":{"createdTime":1636454878000,"updatedTime":1667489612000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":4},{"name":"MSamor","email":"47421244+MSamor@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":8.48,"words":2543},"filePathRelative":"high-availability/limit-request.md","localizedDate":"2021年11月9日","excerpt":"<p>针对软件系统来说，限流就是对请求的速率进行限制，避免瞬时的大量请求击垮软件系统。毕竟，软件系统的处理能力是有限的。如果说超过了其处理能力的范围，软件系统可能直接就挂掉了。</p>\\n<p>限流可能会导致用户的请求无法被正确处理，不过，这往往也是权衡了软件系统的稳定性之后得到的最优解。</p>\\n<p>现实生活中，处处都有限流的实际应用，就比如排队买票是为了避免大量用户涌入购票而导致售票员无法处理。</p>\\n<p><img src=\\"https://img-blog.csdnimg.cn/f9f17071fc4d489d85d2a234fb298df1.png\\" alt=\\"排队示意图\\"></p>","copyright":{},"autoDesc":true}');export{e as data};
