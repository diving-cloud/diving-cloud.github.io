import{_ as r,X as p,Y as a,Z as s,$ as t,a0 as o,a2 as e,C as g}from"./framework-9b4b2ab3.js";const c={},i={href:"https://juejin.cn/user/4001878057422087",target:"_blank",rel:"noopener noreferrer"},d=e(`<p>我想起了我刚工作的时候，第一次接触 RPC 协议，当时就很懵，我 HTTP 协议用的好好的，为什么还要用 RPC 协议？</p><p>于是就到网上去搜。</p><p>不少解释显得非常官方，我相信大家在各种平台上也都看到过，解释了又好像没解释，都在<strong>用一个我们不认识的概念去解释另外一个我们不认识的概念</strong>，懂的人不需要看，不懂的人看了还是不懂。</p><p>这种看了，又好像没看的感觉，云里雾里的很难受，<strong>我懂</strong>。</p><p>为了避免大家有强烈的<strong>审丑疲劳</strong>，今天我们来尝试重新换个方式讲一讲。</p><h2 id="从-tcp-聊起" tabindex="-1"><a class="header-anchor" href="#从-tcp-聊起" aria-hidden="true">#</a> 从 TCP 聊起</h2><p>作为一个程序员，假设我们需要在 A 电脑的进程发一段数据到 B 电脑的进程，我们一般会在代码里使用 socket 进行编程。</p><p>这时候，我们可选项一般也就<strong>TCP 和 UDP 二选一。TCP 可靠，UDP 不可靠。</strong> 除非是马总这种神级程序员（早期 QQ 大量使用 UDP），否则，只要稍微对可靠性有些要求，普通人一般无脑选 TCP 就对了。</p><p>类似下面这样。</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">fd</span> <span class="token punctuation">=</span> <span class="token value attr-value">socket(AF_INET,SOCK_STREAM,0);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中<code>SOCK_STREAM</code>，是指使用<strong>字节流</strong>传输数据，说白了就是<strong>TCP 协议</strong>。</p><p>在定义了 socket 之后，我们就可以愉快的对这个 socket 进行操作，比如用<code>bind()</code>绑定 IP 端口，用<code>connect()</code>发起建连。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/distributed-system/rpc/f410977cda814d32b0eff3645c385a8a~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp.png" alt="握手建立连接流程"></p><p>在连接建立之后，我们就可以使用<code>send()</code>发送数据，<code>recv()</code>接收数据。</p><p>光这样一个纯裸的 TCP 连接，就可以做到收发数据了，那是不是就够了？</p><p>不行，这么用会有问题。</p><h2 id="使用纯裸-tcp-会有什么问题" tabindex="-1"><a class="header-anchor" href="#使用纯裸-tcp-会有什么问题" aria-hidden="true">#</a> 使用纯裸 TCP 会有什么问题</h2><p>八股文常背，TCP 是有三个特点，<strong>面向连接</strong>、<strong>可靠</strong>、基于<strong>字节流</strong>。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/distributed-system/rpc/acb4508111cb47d8a3df6734d04818bc~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp.png" alt="TCP是什么"></p><p>这三个特点真的概括的 <strong>非常精辟</strong> ，这个八股文我们没白背。</p><p>每个特点展开都能聊一篇文章，而今天我们需要关注的是 <strong>基于字节流</strong> 这一点。</p><p>字节流可以理解为一个双向的通道里流淌的二进制数据，也就是 <strong>01 串</strong> 。纯裸 TCP 收发的这些 01 串之间是 <strong>没有任何边界</strong> 的，你根本不知道到哪个地方才算一条完整消息。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/distributed-system/rpc/b82d4fcdd0c4491e979856c93c1750d7~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp.png" alt="01二进制字节流"></p><p>正因为这个没有任何边界的特点，所以当我们选择使用 TCP 发送 <strong>&quot;夏洛&quot;和&quot;特烦恼&quot;</strong> 的时候，接收端收到的就是 <strong>&quot;夏洛特烦恼&quot;</strong> ，这时候接收端没发区分你是想要表达 <strong>&quot;夏洛&quot;+&quot;特烦恼&quot;</strong> 还是 <strong>&quot;夏洛特&quot;+&quot;烦恼&quot;</strong> 。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/distributed-system/rpc/4e120d0f1152419585565f693e744a3a~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp.png" alt="消息对比"></p>`,25),u=s("strong",null,"粘包问题",-1),l={href:"https://mp.weixin.qq.com/s/0-YBxU1cSbDdzcZEZjmQYA",target:"_blank",rel:"noopener noreferrer"},h=e(`<p>说这个的目的是为了告诉大家，纯裸 TCP 是不能直接拿来用的，你需要在这个基础上加入一些 <strong>自定义的规则</strong> ，用于区分 <strong>消息边界</strong> 。</p><p>于是我们会把每条要发送的数据都包装一下，比如加入 <strong>消息头</strong> ，消息头里写清楚一个完整的包长度是多少，根据这个长度可以继续接收数据，截取出来后它们就是我们真正要传输的 <strong>消息体</strong> 。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/distributed-system/rpc/cb29659d4907446e9f70551c44c6369f~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp.png" alt="消息边界长度标志"></p><p>而这里头提到的 <strong>消息头</strong> ，还可以放各种东西，比如消息体是否被压缩过和消息体格式之类的，只要上下游都约定好了，互相都认就可以了，这就是所谓的 <strong>协议。</strong></p><p>每个使用 TCP 的项目都可能会定义一套类似这样的协议解析标准，他们可能 <strong>有区别，但原理都类似</strong>。</p><p><strong>于是基于 TCP，就衍生了非常多的协议，比如 HTTP 和 RPC。</strong></p><h2 id="http-和-rpc" tabindex="-1"><a class="header-anchor" href="#http-和-rpc" aria-hidden="true">#</a> HTTP 和 RPC</h2><h3 id="rpc-其实是一种调用方式" tabindex="-1"><a class="header-anchor" href="#rpc-其实是一种调用方式" aria-hidden="true">#</a> RPC 其实是一种调用方式</h3><p>我们回过头来看网络的分层图。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/distributed-system/rpc/04b603b5bd2443209233deea87816161~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp.png" alt="四层网络协议"></p><p><strong>TCP 是传输层的协议</strong> ，而基于 TCP 造出来的 HTTP 和各类 RPC 协议，它们都只是定义了不同消息格式的 <strong>应用层协议</strong> 而已。</p><p><strong>HTTP</strong>（<strong>H</strong>yper <strong>T</strong>ext <strong>T</strong>ransfer <strong>P</strong>rotocol）协议又叫做 <strong>超文本传输协议</strong> 。我们用的比较多，平时上网在浏览器上敲个网址就能访问网页，这里用到的就是 HTTP 协议。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/distributed-system/rpc/8f07a5d1c72a4c4fa811c6c3b5aadd3d~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp.png" alt="HTTP调用"></p><p>而 <strong>RPC</strong>（<strong>R</strong>emote <strong>P</strong>rocedure <strong>C</strong>all）又叫做 <strong>远程过程调用</strong>，它本身并不是一个具体的协议，而是一种 <strong>调用方式</strong> 。</p><p>举个例子，我们平时调用一个 <strong>本地方法</strong> 就像下面这样。</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code> <span class="token key attr-name">res</span> <span class="token punctuation">=</span> <span class="token value attr-value">localFunc(req)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果现在这不是个本地方法，而是个<strong>远端服务器</strong>暴露出来的一个方法<code>remoteFunc</code>，如果我们还能像调用本地方法那样去调用它，这样就可以<strong>屏蔽掉一些网络细节</strong>，用起来更方便，岂不美哉？</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">res</span> <span class="token punctuation">=</span> <span class="token value attr-value">remoteFunc(req)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/distributed-system/rpc/761da6c30af244e19b1c44075d8b4254~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp.png" alt="RPC可以像调用本地方法那样调用远端方法"></p><p>基于这个思路，大佬们造出了非常多款式的 RPC 协议，比如比较有名的<code>gRPC</code>，<code>thrift</code>。</p><p>值得注意的是，虽然大部分 RPC 协议底层使用 TCP，但实际上 <strong>它们不一定非得使用 TCP，改用 UDP 或者 HTTP，其实也可以做到类似的功能。</strong></p><p>到这里，我们回到文章标题的问题。</p><h3 id="那既然有-rpc-了-为什么还要有-http-呢" tabindex="-1"><a class="header-anchor" href="#那既然有-rpc-了-为什么还要有-http-呢" aria-hidden="true">#</a> 那既然有 RPC 了，为什么还要有 HTTP 呢？</h3><p>其实，TCP 是 <strong>70 年</strong> 代出来的协议，而 HTTP 是 <strong>90 年代</strong> 才开始流行的。而直接使用裸 TCP 会有问题，可想而知，这中间这么多年有多少自定义的协议，而这里面就有 <strong>80 年代</strong> 出来的<code>RPC</code>。</p><p>所以我们该问的不是 <strong>既然有 HTTP 协议为什么要有 RPC</strong> ，而是 <strong>为什么有 RPC 还要有 HTTP 协议?</strong></p><p>现在电脑上装的各种联网软件，比如 xx 管家，xx 卫士，它们都作为客户端（Client） 需要跟服务端（Server） 建立连接收发消息，此时都会用到应用层协议，在这种 Client/Server (C/S) 架构下，它们可以使用自家造的 RPC 协议，因为它只管连自己公司的服务器就 ok 了。</p><p>但有个软件不同，浏览器（Browser） ，不管是 Chrome 还是 IE，它们不仅要能访问自家公司的<strong>服务器（Server）</strong> ，还需要访问其他公司的网站服务器，因此它们需要有个统一的标准，不然大家没法交流。于是，HTTP 就是那个时代用于统一 <strong>Browser/Server (B/S)</strong> 的协议。</p><p>也就是说在多年以前，<strong>HTTP 主要用于 B/S 架构，而 RPC 更多用于 C/S 架构。但现在其实已经没分那么清了，B/S 和 C/S 在慢慢融合。</strong> 很多软件同时支持多端，比如某度云盘，既要支持<strong>网页版</strong>，还要支持<strong>手机端和 PC 端</strong>，如果通信协议都用 HTTP 的话，那服务器只用同一套就够了。而 RPC 就开始退居幕后，一般用于公司内部集群里，各个微服务之间的通讯。</p><p>那这么说的话，<strong>都用 HTTP 得了，还用什么 RPC？</strong></p><p>仿佛又回到了文章开头的样子，那这就要从它们之间的区别开始说起。</p><h3 id="http-和-rpc-有什么区别" tabindex="-1"><a class="header-anchor" href="#http-和-rpc-有什么区别" aria-hidden="true">#</a> HTTP 和 RPC 有什么区别</h3><p>我们来看看 RPC 和 HTTP 区别比较明显的几个点。</p><h4 id="服务发现" tabindex="-1"><a class="header-anchor" href="#服务发现" aria-hidden="true">#</a> 服务发现</h4><p>首先要向某个服务器发起请求，你得先建立连接，而建立连接的前提是，你得知道 <strong>IP 地址和端口</strong> 。这个找到服务对应的 IP 端口的过程，其实就是 <strong>服务发现</strong>。</p><p>在 <strong>HTTP</strong> 中，你知道服务的域名，就可以通过 <strong>DNS 服务</strong> 去解析得到它背后的 IP 地址，默认 <strong>80 端口</strong>。</p><p>而 <strong>RPC</strong> 的话，就有些区别，一般会有专门的中间服务去保存服务名和 IP 信息，比如 <strong>Consul、Etcd、Nacos、ZooKeeper，甚至是 Redis</strong>。想要访问某个服务，就去这些中间服务去获得 IP 和端口信息。由于 DNS 也是服务发现的一种，所以也有基于 DNS 去做服务发现的组件，比如 <strong>CoreDNS</strong>。</p><p>可以看出服务发现这一块，两者是有些区别，但不太能分高低。</p><h4 id="底层连接形式" tabindex="-1"><a class="header-anchor" href="#底层连接形式" aria-hidden="true">#</a> 底层连接形式</h4><p>以主流的 <strong>HTTP1.1</strong> 协议为例，其默认在建立底层 TCP 连接之后会一直保持这个连接（<strong>keep alive</strong>），之后的请求和响应都会复用这条连接。</p><p>而 <strong>RPC</strong> 协议，也跟 HTTP 类似，也是通过建立 TCP 长链接进行数据交互，但不同的地方在于，RPC 协议一般还会再建个 <strong>连接池</strong>，在请求量大的时候，建立多条连接放在池内，要发数据的时候就从池里取一条连接出来，用完放回去，下次再复用，可以说非常环保。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/distributed-system/rpc/72fcad064c9e4103a11f1a2d579f79b2~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp.png" alt="connection_pool"></p><p>由于连接池有利于提升网络请求性能，所以不少编程语言的网络库里都会给 HTTP 加个连接池，比如 Go 就是这么干的。</p><p>可以看出这一块两者也没太大区别，所以也不是关键。</p><h4 id="传输的内容" tabindex="-1"><a class="header-anchor" href="#传输的内容" aria-hidden="true">#</a> 传输的内容</h4><p>基于 TCP 传输的消息，说到底，无非都是 <strong>消息头 Header 和消息体 Body。</strong></p><p><strong>Header</strong> 是用于标记一些特殊信息，其中最重要的是 <strong>消息体长度</strong>。</p><p><strong>Body</strong> 则是放我们真正需要传输的内容，而这些内容只能是二进制 01 串，毕竟计算机只认识这玩意。所以 TCP 传字符串和数字都问题不大，因为字符串可以转成编码再变成 01 串，而数字本身也能直接转为二进制。但结构体呢，我们得想个办法将它也转为二进制 01 串，这样的方案现在也有很多现成的，比如 <strong>JSON，Protocol Buffers (Protobuf)</strong> 。</p><p>这个将结构体转为二进制数组的过程就叫 <strong>序列化</strong> ，反过来将二进制数组复原成结构体的过程叫 <strong>反序列化</strong>。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/distributed-system/rpc/d501dfc6f764430188ce61fda0f3e5d9~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp.png" alt="序列化和反序列化"></p><p>对于主流的 HTTP1.1，虽然它现在叫超文本协议，支持音频视频，但 HTTP 设计 初是用于做网页文本展示的，所以它传的内容以字符串为主。Header 和 Body 都是如此。在 Body 这块，它使用 <strong>JSON</strong> 来 <strong>序列化</strong> 结构体数据。</p><p>我们可以随便截个图直观看下。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/distributed-system/rpc/04e8a79ddb7247759df23f1132c01655~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp.png" alt="HTTP报文"></p><p>可以看到这里面的内容非常多的冗余，显得非常啰嗦。最明显的，像 Header 里的那些信息，其实如果我们约定好头部的第几位是 <code>Content-Type</code>，就不需要每次都真的把 <code>Content-Type</code> 这个字段都传过来，类似的情况其实在 Body 的 JSON 结构里也特别明显。</p><p>而 RPC，因为它定制化程度更高，可以采用体积更小的 Protobuf 或其他序列化协议去保存结构体数据，同时也不需要像 HTTP 那样考虑各种浏览器行为，比如 302 重定向跳转啥的。<strong>因此性能也会更好一些，这也是在公司内部微服务中抛弃 HTTP，选择使用 RPC 的最主要原因。</strong></p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/distributed-system/rpc/284c26bb7f2848889d1d9b95cf49decb~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp.png" alt="HTTP原理"></p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/distributed-system/rpc/edb050d383c644e895e505253f1c4d90~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp.png" alt="RPC原理"></p><p>当然上面说的 HTTP，其实 <strong>特指的是现在主流使用的 HTTP1.1</strong>，<code>HTTP2</code>在前者的基础上做了很多改进，所以 <strong>性能可能比很多 RPC 协议还要好</strong>，甚至连<code>gRPC</code>底层都直接用的<code>HTTP2</code>。</p><p>那么问题又来了。</p><h3 id="为什么既然有了-http2-还要有-rpc-协议" tabindex="-1"><a class="header-anchor" href="#为什么既然有了-http2-还要有-rpc-协议" aria-hidden="true">#</a> 为什么既然有了 HTTP2，还要有 RPC 协议？</h3><p>这个是由于 HTTP2 是 2015 年出来的。那时候很多公司内部的 RPC 协议都已经跑了好些年了，基于历史原因，一般也没必要去换了。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ul><li>纯裸 TCP 是能收发数据，但它是个无边界的数据流，上层需要定义消息格式用于定义 <strong>消息边界</strong> 。于是就有了各种协议，HTTP 和各类 RPC 协议就是在 TCP 之上定义的应用层协议。</li><li><strong>RPC 本质上不算是协议，而是一种调用方式</strong>，而像 gRPC 和 Thrift 这样的具体实现，才是协议，它们是实现了 RPC 调用的协议。目的是希望程序员能像调用本地方法那样去调用远端的服务方法。同时 RPC 有很多种实现方式，<strong>不一定非得基于 TCP 协议</strong>。</li><li>从发展历史来说，<strong>HTTP 主要用于 B/S 架构，而 RPC 更多用于 C/S 架构。但现在其实已经没分那么清了，B/S 和 C/S 在慢慢融合。</strong> 很多软件同时支持多端，所以对外一般用 HTTP 协议，而内部集群的微服务之间则采用 RPC 协议进行通讯。</li><li>RPC 其实比 HTTP 出现的要早，且比目前主流的 HTTP1.1 性能要更好，所以大部分公司内部都还在使用 RPC。</li><li><strong>HTTP2.0</strong> 在 <strong>HTTP1.1</strong> 的基础上做了优化，性能可能比很多 RPC 协议都要好，但由于是这几年才出来的，所以也不太可能取代掉 RPC。</li></ul>`,62);function P(T,b){const n=g("ExternalLinkIcon");return p(),a("div",null,[s("blockquote",null,[s("p",null,[t("本文来自"),s("a",i,[t("小白debug"),o(n)]),t("投稿，原文：https://juejin.cn/post/7121882245605883934 。")])]),d,s("p",null,[t("这就是所谓的 "),u,t("，之前也写过一篇专门的"),s("a",l,[t("文章"),o(n)]),t("聊过这个问题。")]),h])}const C=r(c,[["render",P],["__file","http_rpc.html.vue"]]);export{C as default};
