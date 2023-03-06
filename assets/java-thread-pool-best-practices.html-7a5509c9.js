const e=JSON.parse('{"key":"v-4b8877b5","path":"/java/concurrent/java-thread-pool-best-practices.html","title":"Java 线程池最佳实践","lang":"zh-CN","frontmatter":{"title":"Java 线程池最佳实践","category":"Java","tag":["Java并发"],"description":"简单总结一下我了解的使用线程池的时候应该注意的东西，网上似乎还没有专门写这方面的文章。 1、正确声明线程池 线程池必须手动通过 ThreadPoolExecutor 的构造函数来声明，避免使用Executors 类创建线程池，会有 OOM 风险。 Executors 返回线程池对象的弊端如下(后文会详细介绍到)： FixedThreadPool 和 SingleThreadExecutor ： 使用的是无界的 LinkedBlockingQueue，任务队列最大长度为 Integer.MAX_VALUE,可能堆积大量的请求，从而导致 OOM。 CachedThreadPool ：使用的是同步队列 SynchronousQueue, 允许创建的线程数量为 Integer.MAX_VALUE ，可能会创建大量线程，从而导致 OOM。 **ScheduledThreadPool 和 SingleThreadScheduledExecutor ** : 使用的无界的延迟阻塞队列DelayedWorkQueue，任务队列最大长度为 Integer.MAX_VALUE,可能堆积大量的请求，从而导致 OOM。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/JavaGuide//java/concurrent/java-thread-pool-best-practices.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"Java 线程池最佳实践"}],["meta",{"property":"og:description","content":"简单总结一下我了解的使用线程池的时候应该注意的东西，网上似乎还没有专门写这方面的文章。 1、正确声明线程池 线程池必须手动通过 ThreadPoolExecutor 的构造函数来声明，避免使用Executors 类创建线程池，会有 OOM 风险。 Executors 返回线程池对象的弊端如下(后文会详细介绍到)： FixedThreadPool 和 SingleThreadExecutor ： 使用的是无界的 LinkedBlockingQueue，任务队列最大长度为 Integer.MAX_VALUE,可能堆积大量的请求，从而导致 OOM。 CachedThreadPool ：使用的是同步队列 SynchronousQueue, 允许创建的线程数量为 Integer.MAX_VALUE ，可能会创建大量线程，从而导致 OOM。 **ScheduledThreadPool 和 SingleThreadScheduledExecutor ** : 使用的无界的延迟阻塞队列DelayedWorkQueue，任务队列最大长度为 Integer.MAX_VALUE,可能堆积大量的请求，从而导致 OOM。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-09T12:19:01.000Z"}],["meta",{"property":"article:tag","content":"Java并发"}],["meta",{"property":"article:modified_time","content":"2023-02-09T12:19:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 线程池最佳实践\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-09T12:19:01.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1、正确声明线程池","slug":"_1、正确声明线程池","link":"#_1、正确声明线程池","children":[]},{"level":2,"title":"2、监测线程池运行状态","slug":"_2、监测线程池运行状态","link":"#_2、监测线程池运行状态","children":[]},{"level":2,"title":"3、建议不同类别的业务用不同的线程池","slug":"_3、建议不同类别的业务用不同的线程池","link":"#_3、建议不同类别的业务用不同的线程池","children":[]},{"level":2,"title":"4、别忘记给线程池命名","slug":"_4、别忘记给线程池命名","link":"#_4、别忘记给线程池命名","children":[]},{"level":2,"title":"5、正确配置线程池参数","slug":"_5、正确配置线程池参数","link":"#_5、正确配置线程池参数","children":[{"level":3,"title":"常规操作","slug":"常规操作","link":"#常规操作","children":[]},{"level":3,"title":"美团的骚操作","slug":"美团的骚操作","link":"#美团的骚操作","children":[]}]},{"level":2,"title":"6、线程池使用的一些小坑","slug":"_6、线程池使用的一些小坑","link":"#_6、线程池使用的一些小坑","children":[{"level":3,"title":"重复创建线程池的坑","slug":"重复创建线程池的坑","link":"#重复创建线程池的坑","children":[]},{"level":3,"title":"Spring 内部线程池的坑","slug":"spring-内部线程池的坑","link":"#spring-内部线程池的坑","children":[]},{"level":3,"title":"线程池和 ThreadLocal 共用的坑","slug":"线程池和-threadlocal-共用的坑","link":"#线程池和-threadlocal-共用的坑","children":[]}]}],"git":{"createdTime":1644213961000,"updatedTime":1675945141000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":2},{"name":"guide","email":"koushuangbwcx@163.com","commits":2},{"name":"Evan He","email":"1453064869@qq.com","commits":1},{"name":"sam","email":"sam2008ext@gmail.com","commits":1}]},"readingTime":{"minutes":13.92,"words":4177},"filePathRelative":"java/concurrent/java-thread-pool-best-practices.md","localizedDate":"2022年2月7日","excerpt":"<p>简单总结一下我了解的使用线程池的时候应该注意的东西，网上似乎还没有专门写这方面的文章。</p>\\n<h2> 1、正确声明线程池</h2>\\n<p><strong>线程池必须手动通过 <code>ThreadPoolExecutor</code> 的构造函数来声明，避免使用<code>Executors</code> 类创建线程池，会有 OOM 风险。</strong></p>\\n<p><code>Executors</code> 返回线程池对象的弊端如下(后文会详细介绍到)：</p>\\n<ul>\\n<li><strong><code>FixedThreadPool</code> 和 <code>SingleThreadExecutor</code></strong> ： 使用的是无界的 <code>LinkedBlockingQueue</code>，任务队列最大长度为 <code>Integer.MAX_VALUE</code>,可能堆积大量的请求，从而导致 OOM。</li>\\n<li><strong><code>CachedThreadPool</code></strong> ：使用的是同步队列 <code>SynchronousQueue</code>, 允许创建的线程数量为 <code>Integer.MAX_VALUE</code> ，可能会创建大量线程，从而导致 OOM。</li>\\n<li>**<code>ScheduledThreadPool</code> 和 <code>SingleThreadScheduledExecutor</code> ** : 使用的无界的延迟阻塞队列<code>DelayedWorkQueue</code>，任务队列最大长度为 <code>Integer.MAX_VALUE</code>,可能堆积大量的请求，从而导致 OOM。</li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
