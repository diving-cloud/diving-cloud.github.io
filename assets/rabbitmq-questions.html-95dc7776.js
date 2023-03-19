const e=JSON.parse('{"key":"v-5d2ac006","path":"/high-performance/message-queue/rabbitmq-questions.html","title":"RabbitMQ常见面试题总结","lang":"zh-CN","frontmatter":{"title":"RabbitMQ常见面试题总结","category":"高性能","tag":["消息队列"],"head":[["meta",{"name":"keywords","content":"RabbitMQ,AMQP,Broker,Exchange,优先级队列,延迟队列"}],["meta",{"name":"description","content":"RabbitMQ 是一个在 AMQP（Advanced Message Queuing Protocol ）基础上实现的，可复用的企业消息系统。它可以用于大型软件系统各个模块之间的高效通信，支持高并发，支持可扩展。它支持多种客户端如：Python、Ruby、.NET、Java、JMS、C、PHP、ActionScript、XMPP、STOMP等，支持AJAX，持久化，用于在分布式系统中存储转发消息，在易用性、扩展性、高可用性等方面表现不俗。"}],["meta",{"property":"og:url","content":"https://javaguide.cn/high-performance/message-queue/rabbitmq-questions.html"}],["meta",{"property":"og:site_name","content":"Java学习指南"}],["meta",{"property":"og:title","content":"RabbitMQ常见面试题总结"}],["meta",{"property":"og:description","content":"本篇文章由 JavaGuide 收集自网络，原出处不明。 RabbitMQ 是什么？ RabbitMQ 是一个在 AMQP（Advanced Message Queuing Protocol ）基础上实现的，可复用的企业消息系统。它可以用于大型软件系统各个模块之间的高效通信，支持高并发，支持可扩展。它支持多种客户端如：Python、Ruby、.NET、Java、JMS、C、PHP、ActionScript、XMPP、STOMP等，支持AJAX，持久化，用于在分布式系统中存储转发消息，在易用性、扩展性、高可用性等方面表现不俗。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-04T08:23:47.000Z"}],["meta",{"property":"article:tag","content":"消息队列"}],["meta",{"property":"article:modified_time","content":"2023-03-04T08:23:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RabbitMQ常见面试题总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-04T08:23:47.000Z\\",\\"author\\":[]}"]],"description":"本篇文章由 JavaGuide 收集自网络，原出处不明。 RabbitMQ 是什么？ RabbitMQ 是一个在 AMQP（Advanced Message Queuing Protocol ）基础上实现的，可复用的企业消息系统。它可以用于大型软件系统各个模块之间的高效通信，支持高并发，支持可扩展。它支持多种客户端如：Python、Ruby、.NET、Java、JMS、C、PHP、ActionScript、XMPP、STOMP等，支持AJAX，持久化，用于在分布式系统中存储转发消息，在易用性、扩展性、高可用性等方面表现不俗。"},"headers":[{"level":2,"title":"RabbitMQ 是什么？","slug":"rabbitmq-是什么","link":"#rabbitmq-是什么","children":[]},{"level":2,"title":"RabbitMQ 特点?","slug":"rabbitmq-特点","link":"#rabbitmq-特点","children":[]},{"level":2,"title":"AMQP 是什么?","slug":"amqp-是什么","link":"#amqp-是什么","children":[]},{"level":2,"title":"说说生产者 Producer 和消费者 Consumer?","slug":"说说生产者-producer-和消费者-consumer","link":"#说说生产者-producer-和消费者-consumer","children":[]},{"level":2,"title":"说说 Broker 服务节点、Queue 队列、Exchange 交换器？","slug":"说说-broker-服务节点、queue-队列、exchange-交换器","link":"#说说-broker-服务节点、queue-队列、exchange-交换器","children":[]},{"level":2,"title":"什么是死信队列？如何导致的？","slug":"什么是死信队列-如何导致的","link":"#什么是死信队列-如何导致的","children":[]},{"level":2,"title":"什么是延迟队列？RabbitMQ 怎么实现延迟队列？","slug":"什么是延迟队列-rabbitmq-怎么实现延迟队列","link":"#什么是延迟队列-rabbitmq-怎么实现延迟队列","children":[]},{"level":2,"title":"什么是优先级队列？","slug":"什么是优先级队列","link":"#什么是优先级队列","children":[]},{"level":2,"title":"RabbitMQ 有哪些工作模式？","slug":"rabbitmq-有哪些工作模式","link":"#rabbitmq-有哪些工作模式","children":[]},{"level":2,"title":"RabbitMQ 消息怎么传输？","slug":"rabbitmq-消息怎么传输","link":"#rabbitmq-消息怎么传输","children":[]},{"level":2,"title":"如何保证消息的可靠性？","slug":"如何保证消息的可靠性","link":"#如何保证消息的可靠性","children":[]},{"level":2,"title":"如何保证 RabbitMQ 消息的顺序性？","slug":"如何保证-rabbitmq-消息的顺序性","link":"#如何保证-rabbitmq-消息的顺序性","children":[]},{"level":2,"title":"如何保证 RabbitMQ 高可用的？","slug":"如何保证-rabbitmq-高可用的","link":"#如何保证-rabbitmq-高可用的","children":[]},{"level":2,"title":"如何解决消息挤压问题？","slug":"如何解决消息挤压问题","link":"#如何解决消息挤压问题","children":[]},{"level":2,"title":"如何解决消息队列的延时以及过期失效问题？","slug":"如何解决消息队列的延时以及过期失效问题","link":"#如何解决消息队列的延时以及过期失效问题","children":[]}],"git":{"createdTime":1659434815000,"updatedTime":1677918227000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":2},{"name":"callmePicacho","email":"38685653+callmePicacho@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":11.14,"words":3341},"filePathRelative":"high-performance/message-queue/rabbitmq-questions.md","localizedDate":"2022年8月2日","excerpt":"<blockquote>\\n<p>本篇文章由 JavaGuide 收集自网络，原出处不明。</p>\\n</blockquote>\\n<h2> RabbitMQ 是什么？</h2>\\n<p>RabbitMQ 是一个在 AMQP（Advanced Message Queuing Protocol ）基础上实现的，可复用的企业消息系统。它可以用于大型软件系统各个模块之间的高效通信，支持高并发，支持可扩展。它支持多种客户端如：Python、Ruby、.NET、Java、JMS、C、PHP、ActionScript、XMPP、STOMP等，支持AJAX，持久化，用于在分布式系统中存储转发消息，在易用性、扩展性、高可用性等方面表现不俗。</p>","copyright":{},"autoDesc":true}');export{e as data};
