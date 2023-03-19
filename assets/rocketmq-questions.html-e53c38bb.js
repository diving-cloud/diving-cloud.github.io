const n=JSON.parse('{"key":"v-99ca26e8","path":"/high-performance/message-queue/rocketmq-questions.html","title":"RocketMQ常见面试题总结","lang":"zh-CN","frontmatter":{"title":"RocketMQ常见面试题总结","category":"高性能","tag":["RocketMQ","消息队列"],"description":"本文来自读者 PR。 1 单机版消息中心 一个消息中心，最基本的需要支持多生产者、多消费者，例如下： class Scratch { public static void main(String[] args) { // 实际中会有 nameserver 服务来找到 broker 具体位置以及 broker 主从信息 Broker broker = new Broker(); Producer producer1 = new Producer(); producer1.connectBroker(broker); Producer producer2 = new Producer(); producer2.connectBroker(broker); Consumer consumer1 = new Consumer(); consumer1.connectBroker(broker); Consumer consumer2 = new Consumer(); consumer2.connectBroker(broker); for (int i = 0; i &lt; 2; i++) { producer1.asyncSendMsg(\\"producer1 send msg\\" + i); producer2.asyncSendMsg(\\"producer2 send msg\\" + i); } System.out.println(\\"broker has msg:\\" + broker.getAllMagByDisk()); for (int i = 0; i &lt; 1; i++) { System.out.println(\\"consumer1 consume msg：\\" + consumer1.syncPullMsg()); } for (int i = 0; i &lt; 3; i++) { System.out.println(\\"consumer2 consume msg：\\" + consumer2.syncPullMsg()); } } } class Producer { private Broker broker; public void connectBroker(Broker broker) { this.broker = broker; } public void asyncSendMsg(String msg) { if (broker == null) { throw new RuntimeException(\\"please connect broker first\\"); } new Thread(() -&gt; { broker.sendMsg(msg); }).start(); } } class Consumer { private Broker broker; public void connectBroker(Broker broker) { this.broker = broker; } public String syncPullMsg() { return broker.getMsg(); } } class Broker { // 对应 RocketMQ 中 MessageQueue，默认情况下 1 个 Topic 包含 4 个 MessageQueue private LinkedBlockingQueue&lt;String&gt; messageQueue = new LinkedBlockingQueue(Integer.MAX_VALUE); // 实际发送消息到 broker 服务器使用 Netty 发送 public void sendMsg(String msg) { try { messageQueue.put(msg); // 实际会同步或异步落盘，异步落盘使用的定时任务定时扫描落盘 } catch (InterruptedException e) { } } public String getMsg() { try { return messageQueue.take(); } catch (InterruptedException e) { } return null; } public String getAllMagByDisk() { StringBuilder sb = new StringBuilder(\\"\\\\n\\"); messageQueue.iterator().forEachRemaining((msg) -&gt; { sb.append(msg + \\"\\\\n\\"); }); return sb.toString(); } }","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/high-performance/message-queue/rocketmq-questions.html"}],["meta",{"property":"og:site_name","content":"Java学习指南"}],["meta",{"property":"og:title","content":"RocketMQ常见面试题总结"}],["meta",{"property":"og:description","content":"本文来自读者 PR。 1 单机版消息中心 一个消息中心，最基本的需要支持多生产者、多消费者，例如下： class Scratch { public static void main(String[] args) { // 实际中会有 nameserver 服务来找到 broker 具体位置以及 broker 主从信息 Broker broker = new Broker(); Producer producer1 = new Producer(); producer1.connectBroker(broker); Producer producer2 = new Producer(); producer2.connectBroker(broker); Consumer consumer1 = new Consumer(); consumer1.connectBroker(broker); Consumer consumer2 = new Consumer(); consumer2.connectBroker(broker); for (int i = 0; i &lt; 2; i++) { producer1.asyncSendMsg(\\"producer1 send msg\\" + i); producer2.asyncSendMsg(\\"producer2 send msg\\" + i); } System.out.println(\\"broker has msg:\\" + broker.getAllMagByDisk()); for (int i = 0; i &lt; 1; i++) { System.out.println(\\"consumer1 consume msg：\\" + consumer1.syncPullMsg()); } for (int i = 0; i &lt; 3; i++) { System.out.println(\\"consumer2 consume msg：\\" + consumer2.syncPullMsg()); } } } class Producer { private Broker broker; public void connectBroker(Broker broker) { this.broker = broker; } public void asyncSendMsg(String msg) { if (broker == null) { throw new RuntimeException(\\"please connect broker first\\"); } new Thread(() -&gt; { broker.sendMsg(msg); }).start(); } } class Consumer { private Broker broker; public void connectBroker(Broker broker) { this.broker = broker; } public String syncPullMsg() { return broker.getMsg(); } } class Broker { // 对应 RocketMQ 中 MessageQueue，默认情况下 1 个 Topic 包含 4 个 MessageQueue private LinkedBlockingQueue&lt;String&gt; messageQueue = new LinkedBlockingQueue(Integer.MAX_VALUE); // 实际发送消息到 broker 服务器使用 Netty 发送 public void sendMsg(String msg) { try { messageQueue.put(msg); // 实际会同步或异步落盘，异步落盘使用的定时任务定时扫描落盘 } catch (InterruptedException e) { } } public String getMsg() { try { return messageQueue.take(); } catch (InterruptedException e) { } return null; } public String getAllMagByDisk() { StringBuilder sb = new StringBuilder(\\"\\\\n\\"); messageQueue.iterator().forEachRemaining((msg) -&gt; { sb.append(msg + \\"\\\\n\\"); }); return sb.toString(); } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-07-18T01:24:18.000Z"}],["meta",{"property":"article:tag","content":"RocketMQ"}],["meta",{"property":"article:tag","content":"消息队列"}],["meta",{"property":"article:modified_time","content":"2022-07-18T01:24:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RocketMQ常见面试题总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-07-18T01:24:18.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1 单机版消息中心","slug":"_1-单机版消息中心","link":"#_1-单机版消息中心","children":[]},{"level":2,"title":"2 分布式消息中心","slug":"_2-分布式消息中心","link":"#_2-分布式消息中心","children":[{"level":3,"title":"2.1 问题与解决","slug":"_2-1-问题与解决","link":"#_2-1-问题与解决","children":[]}]},{"level":2,"title":"3 参考","slug":"_3-参考","link":"#_3-参考","children":[]}],"git":{"createdTime":1636454878000,"updatedTime":1658107458000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":2}]},"readingTime":{"minutes":8.31,"words":2494},"filePathRelative":"high-performance/message-queue/rocketmq-questions.md","localizedDate":"2021年11月9日","excerpt":"<blockquote>\\n<p>本文来自读者 <a href=\\"https://github.com/Snailclimb/JavaGuide/pull/291\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">PR</a>。</p>\\n</blockquote>\\n<h2> 1 单机版消息中心</h2>\\n<p>一个消息中心，最基本的需要支持多生产者、多消费者，例如下：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Scratch</span> <span class=\\"token punctuation\\">{</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> args<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// 实际中会有 nameserver 服务来找到 broker 具体位置以及 broker 主从信息</span>\\n        <span class=\\"token class-name\\">Broker</span> broker <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Broker</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">Producer</span> producer1 <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Producer</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        producer1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">connectBroker</span><span class=\\"token punctuation\\">(</span>broker<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">Producer</span> producer2 <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Producer</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        producer2<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">connectBroker</span><span class=\\"token punctuation\\">(</span>broker<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n        <span class=\\"token class-name\\">Consumer</span> consumer1 <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Consumer</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        consumer1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">connectBroker</span><span class=\\"token punctuation\\">(</span>broker<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">Consumer</span> consumer2 <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Consumer</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        consumer2<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">connectBroker</span><span class=\\"token punctuation\\">(</span>broker<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n        <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            producer1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">asyncSendMsg</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"producer1 send msg\\"</span> <span class=\\"token operator\\">+</span> i<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            producer2<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">asyncSendMsg</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"producer2 send msg\\"</span> <span class=\\"token operator\\">+</span> i<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"broker has msg:\\"</span> <span class=\\"token operator\\">+</span> broker<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getAllMagByDisk</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n        <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"consumer1 consume msg：\\"</span> <span class=\\"token operator\\">+</span> consumer1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">syncPullMsg</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"consumer2 consume msg：\\"</span> <span class=\\"token operator\\">+</span> consumer2<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">syncPullMsg</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Producer</span> <span class=\\"token punctuation\\">{</span>\\n\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">Broker</span> broker<span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">connectBroker</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Broker</span> broker<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>broker <span class=\\"token operator\\">=</span> broker<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">asyncSendMsg</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> msg<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>broker <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">throw</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">RuntimeException</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"please connect broker first\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Thread</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">-&gt;</span> <span class=\\"token punctuation\\">{</span>\\n            broker<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">sendMsg</span><span class=\\"token punctuation\\">(</span>msg<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">start</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Consumer</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">Broker</span> broker<span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">connectBroker</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Broker</span> broker<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>broker <span class=\\"token operator\\">=</span> broker<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">String</span> <span class=\\"token function\\">syncPullMsg</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> broker<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getMsg</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Broker</span> <span class=\\"token punctuation\\">{</span>\\n\\n    <span class=\\"token comment\\">// 对应 RocketMQ 中 MessageQueue，默认情况下 1 个 Topic 包含 4 个 MessageQueue</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">LinkedBlockingQueue</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">&gt;</span></span> messageQueue <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">LinkedBlockingQueue</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">MAX_VALUE</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token comment\\">// 实际发送消息到 broker 服务器使用 Netty 发送</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">sendMsg</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> msg<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">try</span> <span class=\\"token punctuation\\">{</span>\\n            messageQueue<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">put</span><span class=\\"token punctuation\\">(</span>msg<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token comment\\">// 实际会同步或异步落盘，异步落盘使用的定时任务定时扫描落盘</span>\\n        <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">catch</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">InterruptedException</span> e<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">String</span> <span class=\\"token function\\">getMsg</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">try</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">return</span> messageQueue<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">take</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">catch</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">InterruptedException</span> e<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">String</span> <span class=\\"token function\\">getAllMagByDisk</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">StringBuilder</span> sb <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">StringBuilder</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"\\\\n\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        messageQueue<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">iterator</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">forEachRemaining</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span>msg<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">-&gt;</span> <span class=\\"token punctuation\\">{</span>\\n            sb<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">append</span><span class=\\"token punctuation\\">(</span>msg <span class=\\"token operator\\">+</span> <span class=\\"token string\\">\\"\\\\n\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">return</span> sb<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">toString</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{n as data};
