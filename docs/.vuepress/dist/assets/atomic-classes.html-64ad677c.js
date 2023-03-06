const t=JSON.parse('{"key":"v-64b05471","path":"/java/concurrent/atomic-classes.html","title":"Atomic 原子类总结","lang":"zh-CN","frontmatter":{"title":"Atomic 原子类总结","category":"Java","tag":["Java并发"],"description":"Atomic 原子类介绍 Atomic 翻译成中文是原子的意思。在化学上，我们知道原子是构成一般物质的最小单位，在化学反应中是不可分割的。在我们这里 Atomic 是指一个操作是不可中断的。即使是在多个线程一起执行的时候，一个操作一旦开始，就不会被其他线程干扰。 所以，所谓原子类说简单点就是具有原子/原子操作特征的类。 并发包 java.util.concurrent 的原子类都存放在java.util.concurrent.atomic下,如下图所示。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/java/concurrent/atomic-classes.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"Atomic 原子类总结"}],["meta",{"property":"og:description","content":"Atomic 原子类介绍 Atomic 翻译成中文是原子的意思。在化学上，我们知道原子是构成一般物质的最小单位，在化学反应中是不可分割的。在我们这里 Atomic 是指一个操作是不可中断的。即使是在多个线程一起执行的时候，一个操作一旦开始，就不会被其他线程干扰。 所以，所谓原子类说简单点就是具有原子/原子操作特征的类。 并发包 java.util.concurrent 的原子类都存放在java.util.concurrent.atomic下,如下图所示。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-31T08:27:36.000Z"}],["meta",{"property":"article:tag","content":"Java并发"}],["meta",{"property":"article:modified_time","content":"2023-01-31T08:27:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Atomic 原子类总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-31T08:27:36.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Atomic 原子类介绍","slug":"atomic-原子类介绍","link":"#atomic-原子类介绍","children":[]},{"level":2,"title":"基本类型原子类","slug":"基本类型原子类","link":"#基本类型原子类","children":[{"level":3,"title":"基本数据类型原子类的优势","slug":"基本数据类型原子类的优势","link":"#基本数据类型原子类的优势","children":[]},{"level":3,"title":"AtomicInteger 线程安全原理简单分析","slug":"atomicinteger-线程安全原理简单分析","link":"#atomicinteger-线程安全原理简单分析","children":[]}]},{"level":2,"title":"数组类型原子类","slug":"数组类型原子类","link":"#数组类型原子类","children":[]},{"level":2,"title":"引用类型原子类","slug":"引用类型原子类","link":"#引用类型原子类","children":[]},{"level":2,"title":"对象的属性修改类型原子类","slug":"对象的属性修改类型原子类","link":"#对象的属性修改类型原子类","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1644213961000,"updatedTime":1675153656000,"contributors":[{"name":"BaoPiao","email":"39978082+BaoPiao@users.noreply.github.com","commits":1},{"name":"Guide","email":"koushuangbwcx@163.com","commits":1},{"name":"guide","email":"koushuangbwcx@163.com","commits":1}]},"readingTime":{"minutes":9.31,"words":2793},"filePathRelative":"java/concurrent/atomic-classes.md","localizedDate":"2022年2月7日","excerpt":"<h2> Atomic 原子类介绍</h2>\\n<p>Atomic 翻译成中文是原子的意思。在化学上，我们知道原子是构成一般物质的最小单位，在化学反应中是不可分割的。在我们这里 Atomic 是指一个操作是不可中断的。即使是在多个线程一起执行的时候，一个操作一旦开始，就不会被其他线程干扰。</p>\\n<p>所以，所谓原子类说简单点就是具有原子/原子操作特征的类。</p>\\n<p>并发包 <code>java.util.concurrent</code> 的原子类都存放在<code>java.util.concurrent.atomic</code>下,如下图所示。</p>\\n<p><img src=\\"https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/JUC原子类概览.png\\" alt=\\"JUC原子类概览\\"></p>","copyright":{},"autoDesc":true}');export{t as data};
