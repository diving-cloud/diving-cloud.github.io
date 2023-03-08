const e=JSON.parse('{"key":"v-b1e3bf4a","path":"/open-source-project/system-design.html","title":"Java 优质开源系统设计项目","lang":"zh-CN","frontmatter":{"title":"Java 优质开源系统设计项目","category":"开源项目","icon":"xitongsheji","description":"基础框架 Spring Boot ：Spring Boot 可以轻松创建独立的生产级基于 Spring 的应用程序,内置 web 服务器让你可以像运行普通 Java 程序一样运行项 目。另外，大部分 Spring Boot 项目只需要少量的配置即可，这有别于 Spring 的重配置。 Javalin ：一个轻量级的 Web 框架，同时支持 Java 和 Kotlin，被微软、红帽、Uber等公司使用。 Quarkus : 用于编写 Java 应用程序的云原生和容器优先的框架。 Guice ：Google 开源的一个轻量级依赖注入框架，相当于一个功能极简化的轻量级 Spring Boot。在某些情况下非常实用，就比如说我们的项目只需要使用依赖注入，不需要 AOP 等功能特性。 SOFABoot ：SOFABoot 基于 Spring Boot ，不过在其基础上增加了 Readiness Check，类隔离，日志空间隔离等等能力。 配套提供的还有：SOFARPC（RPC 框架）、SOFABolt（基于 Netty 的远程通信框架）、SOFARegistry（注册中心）...详情请参考：SOFAStack 。 Spring Batch : Spring Batch 是一个轻量级但功能又十分全面的批处理框架，主要用于批处理场景比如从数据库、文件或队列中读取大量记录。不过，需要注意的是：Spring Batch 不是调度框架。商业和开源领域都有许多优秀的企业调度框架比如 Quartz、XXL-JOB、Elastic-Job。它旨在与调度程序一起工作，而不是取代调度程序。更多介绍请参考 Spring Batch 官方文档，入门教程可以参考 Spring Batch 从入门到实战。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/open-source-project/system-design.html"}],["meta",{"property":"og:site_name","content":"Java学习指南"}],["meta",{"property":"og:title","content":"Java 优质开源系统设计项目"}],["meta",{"property":"og:description","content":"基础框架 Spring Boot ：Spring Boot 可以轻松创建独立的生产级基于 Spring 的应用程序,内置 web 服务器让你可以像运行普通 Java 程序一样运行项 目。另外，大部分 Spring Boot 项目只需要少量的配置即可，这有别于 Spring 的重配置。 Javalin ：一个轻量级的 Web 框架，同时支持 Java 和 Kotlin，被微软、红帽、Uber等公司使用。 Quarkus : 用于编写 Java 应用程序的云原生和容器优先的框架。 Guice ：Google 开源的一个轻量级依赖注入框架，相当于一个功能极简化的轻量级 Spring Boot。在某些情况下非常实用，就比如说我们的项目只需要使用依赖注入，不需要 AOP 等功能特性。 SOFABoot ：SOFABoot 基于 Spring Boot ，不过在其基础上增加了 Readiness Check，类隔离，日志空间隔离等等能力。 配套提供的还有：SOFARPC（RPC 框架）、SOFABolt（基于 Netty 的远程通信框架）、SOFARegistry（注册中心）...详情请参考：SOFAStack 。 Spring Batch : Spring Batch 是一个轻量级但功能又十分全面的批处理框架，主要用于批处理场景比如从数据库、文件或队列中读取大量记录。不过，需要注意的是：Spring Batch 不是调度框架。商业和开源领域都有许多优秀的企业调度框架比如 Quartz、XXL-JOB、Elastic-Job。它旨在与调度程序一起工作，而不是取代调度程序。更多介绍请参考 Spring Batch 官方文档，入门教程可以参考 Spring Batch 从入门到实战。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-07T03:03:15.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-07T03:03:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 优质开源系统设计项目\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-07T03:03:15.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"基础框架","slug":"基础框架","link":"#基础框架","children":[]},{"level":2,"title":"数据库","slug":"数据库","link":"#数据库","children":[{"level":3,"title":"数据库连接池","slug":"数据库连接池","link":"#数据库连接池","children":[]},{"level":3,"title":"数据库框架","slug":"数据库框架","link":"#数据库框架","children":[]},{"level":3,"title":"数据同步","slug":"数据同步","link":"#数据同步","children":[]},{"level":3,"title":"时序数据库","slug":"时序数据库","link":"#时序数据库","children":[]}]},{"level":2,"title":"搜索引擎","slug":"搜索引擎","link":"#搜索引擎","children":[]},{"level":2,"title":"认证授权","slug":"认证授权","link":"#认证授权","children":[]},{"level":2,"title":"网络通讯","slug":"网络通讯","link":"#网络通讯","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[{"level":3,"title":"测试框架","slug":"测试框架","link":"#测试框架","children":[]},{"level":3,"title":"测试平台","slug":"测试平台","link":"#测试平台","children":[]},{"level":3,"title":"API 调试","slug":"api-调试","link":"#api-调试","children":[]}]},{"level":2,"title":"任务调度","slug":"任务调度","link":"#任务调度","children":[]},{"level":2,"title":"分布式","slug":"分布式","link":"#分布式","children":[{"level":3,"title":"API 网关","slug":"api-网关","link":"#api-网关","children":[]},{"level":3,"title":"配置中心","slug":"配置中心","link":"#配置中心","children":[]},{"level":3,"title":"链路追踪","slug":"链路追踪","link":"#链路追踪","children":[]}]},{"level":2,"title":"高性能","slug":"高性能","link":"#高性能","children":[{"level":3,"title":"多线程","slug":"多线程","link":"#多线程","children":[]},{"level":3,"title":"缓存","slug":"缓存","link":"#缓存","children":[]},{"level":3,"title":"消息队列","slug":"消息队列","link":"#消息队列","children":[]},{"level":3,"title":"数据库中间件","slug":"数据库中间件","link":"#数据库中间件","children":[]}]},{"level":2,"title":"高可用","slug":"高可用","link":"#高可用","children":[{"level":3,"title":"限流","slug":"限流","link":"#限流","children":[]},{"level":3,"title":"监控","slug":"监控","link":"#监控","children":[]},{"level":3,"title":"日志","slug":"日志","link":"#日志","children":[]}]}],"git":{"createdTime":1647169059000,"updatedTime":1675738995000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":10},{"name":"Guide","email":"koushuangbwcx@163.com","commits":1}]},"readingTime":{"minutes":15.31,"words":4592},"filePathRelative":"open-source-project/system-design.md","localizedDate":"2022年3月13日","excerpt":"<h2> 基础框架</h2>\\n<ul>\\n<li><strong><a href=\\"https://github.com/spring-projects/spring-boot\\" title=\\"spring-boot\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Spring Boot </a></strong> ：Spring Boot 可以轻松创建独立的生产级基于 Spring 的应用程序,内置 web 服务器让你可以像运行普通 Java 程序一样运行项 目。另外，大部分 Spring Boot 项目只需要少量的配置即可，这有别于 Spring 的重配置。</li>\\n<li><strong><a href=\\"https://github.com/tipsy/javalin\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Javalin</a></strong> ：一个轻量级的 Web 框架，同时支持 Java 和 Kotlin，被微软、红帽、Uber等公司使用。</li>\\n<li><strong><a href=\\"https://github.com/quarkusio/quarkus\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Quarkus</a></strong> : 用于编写 Java 应用程序的云原生和容器优先的框架。</li>\\n<li><strong><a href=\\"https://github.com/google/guice\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Guice</a></strong> ：Google 开源的一个轻量级依赖注入框架，相当于一个功能极简化的轻量级 Spring Boot。在某些情况下非常实用，就比如说我们的项目只需要使用依赖注入，不需要 AOP 等功能特性。</li>\\n<li><strong><a href=\\"https://github.com/sofastack/sofa-boot\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">SOFABoot</a></strong> ：SOFABoot 基于 Spring Boot ，不过在其基础上增加了 Readiness Check，类隔离，日志空间隔离等等能力。 配套提供的还有：SOFARPC（RPC 框架）、SOFABolt（基于 Netty 的远程通信框架）、SOFARegistry（注册中心）...详情请参考：<a href=\\"https://github.com/sofastack\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">SOFAStack </a> 。</li>\\n<li><a href=\\"https://github.com/spring-projects/spring-batch\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><strong>Spring Batch</strong></a> : Spring Batch 是一个轻量级但功能又十分全面的批处理框架，主要用于批处理场景比如从数据库、文件或队列中读取大量记录。不过，需要注意的是：<strong>Spring Batch 不是调度框架</strong>。商业和开源领域都有许多优秀的企业调度框架比如 Quartz、XXL-JOB、Elastic-Job。它旨在与调度程序一起工作，而不是取代调度程序。更多介绍请参考 <a href=\\"https://docs.spring.io/spring-batch/docs/4.3.x/reference/html/spring-batch-intro.html#spring-batch-intro\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Spring Batch 官方文档</a>，入门教程可以参考 <a href=\\"https://mrbird.cc/Spring-Batch%E5%85%A5%E9%97%A8.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Spring Batch 从入门到实战</a>。</li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
