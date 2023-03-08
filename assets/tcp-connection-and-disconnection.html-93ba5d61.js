const t=JSON.parse('{"key":"v-d4d6d902","path":"/cs-basics/network/tcp-connection-and-disconnection.html","title":"TCP 三次握手和四次挥手（传输层）","lang":"zh-CN","frontmatter":{"title":"TCP 三次握手和四次挥手（传输层）","category":"计算机基础","tag":["计算机网络"],"description":"为了准确无误地把数据送达目标处，TCP 协议采用了三次握手策略。 建立连接-TCP 三次握手 建立一个 TCP 连接需要“三次握手”，缺一不可 ： 一次握手:客户端发送带有 SYN（SEQ=x） 标志的数据包 -&gt; 服务端，然后客户端进入 SYN_SEND 状态，等待服务器的确认； 二次握手:服务端发送带有 SYN+ACK(SEQ=y,ACK=x+1) 标志的数据包 –&gt; 客户端,然后服务端进入 SYN_RECV 状态 三次握手:客户端发送带有 ACK(ACK=y+1) 标志的数据包 –&gt; 服务端，然后客户端和服务器端都进入ESTABLISHED 状态，完成TCP三次握手。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/cs-basics/network/tcp-connection-and-disconnection.html"}],["meta",{"property":"og:site_name","content":"Java学习指南"}],["meta",{"property":"og:title","content":"TCP 三次握手和四次挥手（传输层）"}],["meta",{"property":"og:description","content":"为了准确无误地把数据送达目标处，TCP 协议采用了三次握手策略。 建立连接-TCP 三次握手 建立一个 TCP 连接需要“三次握手”，缺一不可 ： 一次握手:客户端发送带有 SYN（SEQ=x） 标志的数据包 -&gt; 服务端，然后客户端进入 SYN_SEND 状态，等待服务器的确认； 二次握手:服务端发送带有 SYN+ACK(SEQ=y,ACK=x+1) 标志的数据包 –&gt; 客户端,然后服务端进入 SYN_RECV 状态 三次握手:客户端发送带有 ACK(ACK=y+1) 标志的数据包 –&gt; 服务端，然后客户端和服务器端都进入ESTABLISHED 状态，完成TCP三次握手。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-14T08:37:37.000Z"}],["meta",{"property":"article:tag","content":"计算机网络"}],["meta",{"property":"article:modified_time","content":"2023-02-14T08:37:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TCP 三次握手和四次挥手（传输层）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-14T08:37:37.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"建立连接-TCP 三次握手","slug":"建立连接-tcp-三次握手","link":"#建立连接-tcp-三次握手","children":[{"level":3,"title":"为什么要三次握手?","slug":"为什么要三次握手","link":"#为什么要三次握手","children":[]},{"level":3,"title":"第2次握手传回了ACK，为什么还要传回SYN？","slug":"第2次握手传回了ack-为什么还要传回syn","link":"#第2次握手传回了ack-为什么还要传回syn","children":[]}]},{"level":2,"title":"断开连接-TCP 四次挥手","slug":"断开连接-tcp-四次挥手","link":"#断开连接-tcp-四次挥手","children":[{"level":3,"title":"为什么要四次挥手？","slug":"为什么要四次挥手","link":"#为什么要四次挥手","children":[]},{"level":3,"title":"为什么不能把服务器发送的 ACK 和 FIN 合并起来，变成三次挥手？","slug":"为什么不能把服务器发送的-ack-和-fin-合并起来-变成三次挥手","link":"#为什么不能把服务器发送的-ack-和-fin-合并起来-变成三次挥手","children":[]},{"level":3,"title":"如果第二次挥手时服务器的 ACK 没有送达客户端，会怎样？","slug":"如果第二次挥手时服务器的-ack-没有送达客户端-会怎样","link":"#如果第二次挥手时服务器的-ack-没有送达客户端-会怎样","children":[]},{"level":3,"title":"为什么第四次挥手客户端需要等待 2*MSL（报文段最长寿命）时间后才进入 CLOSED 状态？","slug":"为什么第四次挥手客户端需要等待-2-msl-报文段最长寿命-时间后才进入-closed-状态","link":"#为什么第四次挥手客户端需要等待-2-msl-报文段最长寿命-时间后才进入-closed-状态","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1660402248000,"updatedTime":1676363857000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":3},{"name":"chanper","email":"qianchaosolo@gmail.com","commits":1},{"name":"liubobo","email":"284115962@qq.com","commits":1}]},"readingTime":{"minutes":5.52,"words":1655},"filePathRelative":"cs-basics/network/tcp-connection-and-disconnection.md","localizedDate":"2022年8月13日","excerpt":"<p>为了准确无误地把数据送达目标处，TCP 协议采用了三次握手策略。</p>\\n<h2> 建立连接-TCP 三次握手</h2>\\n<p><img src=\\"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/cs-basics/network/tcp-shakes-hands-three-times.png\\" alt=\\"TCP 三次握手图解\\"></p>\\n<p>建立一个 TCP 连接需要“三次握手”，缺一不可 ：</p>\\n<ul>\\n<li><strong>一次握手</strong>:客户端发送带有 SYN（SEQ=x） 标志的数据包 -&gt; 服务端，然后客户端进入 <strong>SYN_SEND</strong> 状态，等待服务器的确认；</li>\\n<li><strong>二次握手</strong>:服务端发送带有 SYN+ACK(SEQ=y,ACK=x+1) 标志的数据包 –&gt; 客户端,然后服务端进入 <strong>SYN_RECV</strong> 状态</li>\\n<li><strong>三次握手</strong>:客户端发送带有 ACK(ACK=y+1) 标志的数据包 –&gt; 服务端，然后客户端和服务器端都进入<strong>ESTABLISHED</strong> 状态，完成TCP三次握手。</li>\\n</ul>","copyright":{},"autoDesc":true}');export{t as data};
