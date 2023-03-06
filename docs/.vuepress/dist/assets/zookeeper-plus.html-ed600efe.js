const e=JSON.parse('{"key":"v-2b49482c","path":"/distributed-system/distributed-process-coordination/zookeeper/zookeeper-plus.html","title":"ZooKeeper 相关概念总结(进阶)","lang":"zh-CN","frontmatter":{"description":"ZooKeeper 相关概念总结(进阶) FrancisQ 投稿。 1. 好久不见 离上一篇文章的发布也快一个月了，想想已经快一个月没写东西了，其中可能有期末考试、课程设计和驾照考试，但这都不是借口！ 一到冬天就懒的不行，望广大掘友督促我🙄🙄✍️✍️。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/distributed-system/distributed-process-coordination/zookeeper/zookeeper-plus.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"ZooKeeper 相关概念总结(进阶)"}],["meta",{"property":"og:description","content":"ZooKeeper 相关概念总结(进阶) FrancisQ 投稿。 1. 好久不见 离上一篇文章的发布也快一个月了，想想已经快一个月没写东西了，其中可能有期末考试、课程设计和驾照考试，但这都不是借口！ 一到冬天就懒的不行，望广大掘友督促我🙄🙄✍️✍️。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-27T13:08:40.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-27T13:08:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ZooKeeper 相关概念总结(进阶)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-27T13:08:40.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. 好久不见","slug":"_1-好久不见","link":"#_1-好久不见","children":[]},{"level":2,"title":"2. 什么是ZooKeeper","slug":"_2-什么是zookeeper","link":"#_2-什么是zookeeper","children":[]},{"level":2,"title":"3. 一致性问题","slug":"_3-一致性问题","link":"#_3-一致性问题","children":[]},{"level":2,"title":"4. 一致性协议和算法","slug":"_4-一致性协议和算法","link":"#_4-一致性协议和算法","children":[{"level":3,"title":"4.1. 2PC（两阶段提交）","slug":"_4-1-2pc-两阶段提交","link":"#_4-1-2pc-两阶段提交","children":[]},{"level":3,"title":"4.2. 3PC（三阶段提交）","slug":"_4-2-3pc-三阶段提交","link":"#_4-2-3pc-三阶段提交","children":[]},{"level":3,"title":"4.3. Paxos 算法","slug":"_4-3-paxos-算法","link":"#_4-3-paxos-算法","children":[]}]},{"level":2,"title":"5. 引出 ZAB","slug":"_5-引出-zab","link":"#_5-引出-zab","children":[{"level":3,"title":"5.1. Zookeeper 架构","slug":"_5-1-zookeeper-架构","link":"#_5-1-zookeeper-架构","children":[]},{"level":3,"title":"5.2. ZAB 中的三个角色","slug":"_5-2-zab-中的三个角色","link":"#_5-2-zab-中的三个角色","children":[]},{"level":3,"title":"5.3. 消息广播模式","slug":"_5-3-消息广播模式","link":"#_5-3-消息广播模式","children":[]},{"level":3,"title":"5.4. 崩溃恢复模式","slug":"_5-4-崩溃恢复模式","link":"#_5-4-崩溃恢复模式","children":[]}]},{"level":2,"title":"6. Zookeeper的几个理论知识","slug":"_6-zookeeper的几个理论知识","link":"#_6-zookeeper的几个理论知识","children":[{"level":3,"title":"6.1. 数据模型","slug":"_6-1-数据模型","link":"#_6-1-数据模型","children":[]},{"level":3,"title":"6.2. 会话","slug":"_6-2-会话","link":"#_6-2-会话","children":[]},{"level":3,"title":"6.3. ACL","slug":"_6-3-acl","link":"#_6-3-acl","children":[]},{"level":3,"title":"6.4. Watcher机制","slug":"_6-4-watcher机制","link":"#_6-4-watcher机制","children":[]}]},{"level":2,"title":"7. Zookeeper的几个典型应用场景","slug":"_7-zookeeper的几个典型应用场景","link":"#_7-zookeeper的几个典型应用场景","children":[{"level":3,"title":"7.1. 选主","slug":"_7-1-选主","link":"#_7-1-选主","children":[]},{"level":3,"title":"7.2. 分布式锁","slug":"_7-2-分布式锁","link":"#_7-2-分布式锁","children":[]},{"level":3,"title":"7.3. 命名服务","slug":"_7-3-命名服务","link":"#_7-3-命名服务","children":[]},{"level":3,"title":"7.4. 集群管理和注册中心","slug":"_7-4-集群管理和注册中心","link":"#_7-4-集群管理和注册中心","children":[]}]},{"level":2,"title":"8. 总结","slug":"_8-总结","link":"#_8-总结","children":[]}],"git":{"createdTime":1639833811000,"updatedTime":1674824920000,"contributors":[{"name":"Freeze","email":"42697182+zbzbzzz@users.noreply.github.com","commits":1},{"name":"guide","email":"koushuangbwcx@163.com","commits":1},{"name":"yueyang","email":"yy1023178796@gmail.com","commits":1}]},"readingTime":{"minutes":33.64,"words":10091},"filePathRelative":"distributed-system/distributed-process-coordination/zookeeper/zookeeper-plus.md","localizedDate":"2021年12月18日","excerpt":"<h1> ZooKeeper 相关概念总结(进阶)</h1>\\n<blockquote>\\n<p><a href=\\"https://juejin.im/user/5c33853851882525ea106810\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">FrancisQ</a> 投稿。</p>\\n</blockquote>\\n<h2> 1. 好久不见</h2>\\n<p>离上一篇文章的发布也快一个月了，想想已经快一个月没写东西了，其中可能有期末考试、课程设计和驾照考试，但这都不是借口！</p>\\n<p>一到冬天就懒的不行，望广大掘友督促我🙄🙄✍️✍️。</p>","copyright":{},"autoDesc":true}');export{e as data};
