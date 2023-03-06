import{_ as r,X as i,Y as p,Z as t,$ as e,a0 as h,a2 as a,C as o}from"./framework-9b4b2ab3.js";const n="/JavaGuide//assets/public-key-cryptography-22f51898.png",S="/JavaGuide//assets/OWF-03d24071.png",l="/JavaGuide//assets/symmetric-encryption-20454cea.png",d="/JavaGuide//assets/attack1-48b62b2e.png",c="/JavaGuide//assets/digital-signature-c80badfc.png",T="/JavaGuide//assets/public-key-transmission-a8809fd8.png",L={},u=a('<h2 id="http-协议" tabindex="-1"><a class="header-anchor" href="#http-协议" aria-hidden="true">#</a> HTTP 协议</h2><h3 id="http-协议介绍" tabindex="-1"><a class="header-anchor" href="#http-协议介绍" aria-hidden="true">#</a> HTTP 协议介绍</h3><p>HTTP 协议，全称超文本传输协议（Hypertext Transfer Protocol）。顾名思义，HTTP 协议就是用来规范超文本的传输，超文本，也就是网络上的包括文本在内的各式各样的消息，具体来说，主要是来规范浏览器和服务器端的行为的。</p><p>并且，HTTP 是一个无状态（stateless）协议，也就是说服务器不维护任何有关客户端过去所发请求的消息。这其实是一种懒政，有状态协议会更加复杂，需要维护状态（历史信息），而且如果客户或服务器失效，会产生状态的不一致，解决这种不一致的代价更高。</p><h3 id="http-协议通信过程" tabindex="-1"><a class="header-anchor" href="#http-协议通信过程" aria-hidden="true">#</a> HTTP 协议通信过程</h3><p>HTTP 是应用层协议，它以 TCP（传输层）作为底层协议，默认端口为 80. 通信过程主要如下：</p><ol><li>服务器在 80 端口等待客户的请求。</li><li>浏览器发起到服务器的 TCP 连接（创建套接字 Socket）。</li><li>服务器接收来自浏览器的 TCP 连接。</li><li>浏览器（HTTP 客户端）与 Web 服务器（HTTP 服务器）交换 HTTP 消息。</li><li>关闭 TCP 连接。</li></ol><h3 id="http-协议优点" tabindex="-1"><a class="header-anchor" href="#http-协议优点" aria-hidden="true">#</a> HTTP 协议优点</h3><p>扩展性强、速度快、跨平台支持性好。</p><h2 id="https-协议" tabindex="-1"><a class="header-anchor" href="#https-协议" aria-hidden="true">#</a> HTTPS 协议</h2><h3 id="https-协议介绍" tabindex="-1"><a class="header-anchor" href="#https-协议介绍" aria-hidden="true">#</a> HTTPS 协议介绍</h3><p>HTTPS 协议（Hyper Text Transfer Protocol Secure），是 HTTP 的加强安全版本。HTTPS 是基于 HTTP 的，也是用 TCP 作为底层协议，并额外使用 SSL/TLS 协议用作加密和安全认证。默认端口号是 443.</p><p>HTTPS 协议中，SSL 通道通常使用基于密钥的加密算法，密钥长度通常是 40 比特或 128 比特。</p><h3 id="https-协议优点" tabindex="-1"><a class="header-anchor" href="#https-协议优点" aria-hidden="true">#</a> HTTPS 协议优点</h3><p>保密性好、信任度高。</p><h2 id="https-的核心—ssl-tls协议" tabindex="-1"><a class="header-anchor" href="#https-的核心—ssl-tls协议" aria-hidden="true">#</a> HTTPS 的核心—SSL/TLS协议</h2><p>HTTPS 之所以能达到较高的安全性要求，就是结合了 SSL/TLS 和 TCP 协议，对通信数据进行加密，解决了 HTTP 数据透明的问题。接下来重点介绍一下 SSL/TLS 的工作原理。</p><h3 id="ssl-和-tls-的区别" tabindex="-1"><a class="header-anchor" href="#ssl-和-tls-的区别" aria-hidden="true">#</a> SSL 和 TLS 的区别？</h3><p><strong>SSL 和 TLS 没有太大的区别。</strong></p><p>SSL 指安全套接字协议（Secure Sockets Layer），首次发布与 1996 年。SSL 的首次发布其实已经是他的 3.0 版本，SSL 1.0 从未面世，SSL 2.0 则具有较大的缺陷（DROWN 缺陷——Decrypting RSA with Obsolete and Weakened eNcryption）。很快，在 1999 年，SSL 3.0 进一步升级，<strong>新版本被命名为 TLS 1.0</strong>。因此，TLS 是基于 SSL 之上的，但由于习惯叫法，通常把 HTTPS 中的核心加密协议混称为 SSL/TLS。</p><h3 id="ssl-tls-的工作原理" tabindex="-1"><a class="header-anchor" href="#ssl-tls-的工作原理" aria-hidden="true">#</a> SSL/TLS 的工作原理</h3><h4 id="非对称加密" tabindex="-1"><a class="header-anchor" href="#非对称加密" aria-hidden="true">#</a> 非对称加密</h4><p>SSL/TLS 的核心要素是<strong>非对称加密</strong>。非对称加密采用两个密钥——一个公钥，一个私钥。在通信时，私钥仅由解密者保存，公钥由任何一个想与解密者通信的发送者（加密者）所知。可以设想一个场景，</p><blockquote><p>在某个自助邮局，每个通信信道都是一个邮箱，每一个邮箱所有者都在旁边立了一个牌子，上面挂着一把钥匙：这是我的公钥，发送者请将信件放入我的邮箱，并用公钥锁好。</p><p>但是公钥只能加锁，并不能解锁。解锁只能由邮箱的所有者——因为只有他保存着私钥。</p><p>这样，通信信息就不会被其他人截获了，这依赖于私钥的保密性。</p></blockquote><p><img src="'+n+'" alt=""></p><p>非对称加密的公钥和私钥需要采用一种复杂的数学机制生成（密码学认为，为了较高的安全性，尽量不要自己创造加密方案）。公私钥对的生成算法依赖于单向陷门函数。</p><blockquote><p>单向函数：已知单向函数 f，给定任意一个输入 x，易计算输出 y=f(x)；而给定一个输出 y，假设存在 f(x)=y，很难根据 f 来计算出 x。</p><p>单向陷门函数：一个较弱的单向函数。已知单向陷门函数 f，陷门 h，给定任意一个输入 x，易计算出输出 y=f(x;h)；而给定一个输出 y，假设存在 f(x;h)=y，很难根据 f 来计算出 x，但可以根据 f 和 h 来推导出 x。</p></blockquote><p><img src="'+S+'" alt="单向函数"></p><p>上图就是一个单向函数（不是单项陷门函数），假设有一个绝世秘籍，任何知道了这个秘籍的人都可以把苹果汁榨成苹果，那么这个秘籍就是“陷门”了吧。</p><p>在这里，函数 f 的计算方法相当于公钥，陷门 h 相当于私钥。公钥 f 是公开的，任何人对已有输入，都可以用 f 加密，而要想根据加密信息还原出原信息，必须要有私钥才行。</p><h4 id="对称加密" tabindex="-1"><a class="header-anchor" href="#对称加密" aria-hidden="true">#</a> 对称加密</h4><p>使用 SSL/TLS 进行通信的双方需要使用非对称加密方案来通信，但是非对称加密设计了较为复杂的数学算法，在实际通信过程中，计算的代价较高，效率太低，因此，SSL/TLS 实际对消息的加密使用的是对称加密。</p><blockquote><p>对称加密：通信双方共享唯一密钥 k，加解密算法已知，加密方利用密钥 k 加密，解密方利用密钥 k 解密，保密性依赖于密钥 k 的保密性。</p></blockquote><p><img src="'+l+'" alt=""></p><p>对称加密的密钥生成代价比公私钥对的生成代价低得多，那么有的人会问了，为什么 SSL/TLS 还需要使用非对称加密呢？因为对称加密的保密性完全依赖于密钥的保密性。在双方通信之前，需要商量一个用于对称加密的密钥。我们知道网络通信的信道是不安全的，传输报文对任何人是可见的，密钥的交换肯定不能直接在网络信道中传输。因此，使用非对称加密，对对称加密的密钥进行加密，保护该密钥不在网络信道中被窃听。这样，通信双方只需要一次非对称加密，交换对称加密的密钥，在之后的信息通信中，使用绝对安全的密钥，对信息进行对称加密，即可保证传输消息的保密性。</p><h4 id="公钥传输的信赖性" tabindex="-1"><a class="header-anchor" href="#公钥传输的信赖性" aria-hidden="true">#</a> 公钥传输的信赖性</h4><p>SSL/TLS 介绍到这里，了解信息安全的朋友又会想到一个安全隐患，设想一个下面的场景：</p><blockquote><p>客户端 C 和服务器 S 想要使用 SSL/TLS 通信，由上述 SSL/TLS 通信原理，C 需要先知道 S 的公钥，而 S 公钥的唯一获取途径，就是把 S 公钥在网络信道中传输。要注意网络信道通信中有几个前提：</p><ol><li>任何人都可以捕获通信包</li><li>通信包的保密性由发送者设计</li><li>保密算法设计方案默认为公开，而（解密）密钥默认是安全的</li></ol><p>因此，假设 S 公钥不做加密，在信道中传输，那么很有可能存在一个攻击者 A，发送给 C 一个诈包，假装是 S 公钥，其实是诱饵服务器 AS 的公钥。当 C 收获了 AS 的公钥（却以为是 S 的公钥），C 后续就会使用 AS 公钥对数据进行加密，并在公开信道传输，那么 A 将捕获这些加密包，用 AS 的私钥解密，就截获了 C 本要给 S 发送的内容，而 C 和 S 二人全然不知。</p><p>同样的，S 公钥即使做加密，也难以避免这种信任性问题，C 被 AS 拐跑了！</p></blockquote><p><img src="'+d+'" alt=""></p><p>为了公钥传输的信赖性问题，第三方机构应运而生——证书颁发机构（CA，Certificate Authority）。CA 默认是受信任的第三方。CA 会给各个服务器颁发证书，证书存储在服务器上，并附有 CA 的<strong>电子签名</strong>（见下节）。</p><p>当客户端（浏览器）向服务器发送 HTTPS 请求时，一定要先获取目标服务器的证书，并根据证书上的信息，检验证书的合法性。一旦客户端检测到证书非法，就会发生错误。客户端获取了服务器的证书后，由于证书的信任性是由第三方信赖机构认证的，而证书上又包含着服务器的公钥信息，客户端就可以放心的信任证书上的公钥就是目标服务器的公钥。</p><h4 id="数字签名" tabindex="-1"><a class="header-anchor" href="#数字签名" aria-hidden="true">#</a> 数字签名</h4><p>好，到这一小节，已经是 SSL/TLS 的尾声了。上一小节提到了数字签名，数字签名要解决的问题，是防止证书被伪造。第三方信赖机构 CA 之所以能被信赖，就是 <strong>靠数字签名技术</strong> 。</p><p>数字签名，是 CA 在给服务器颁发证书时，使用散列+加密的组合技术，在证书上盖个章，以此来提供验伪的功能。具体行为如下：</p><blockquote><p>CA 知道服务器的公钥，对证书采用散列技术生成一个摘要。CA 使用 CA 私钥对该摘要进行加密，并附在证书下方，发送给服务器。</p><p>现在服务器将该证书发送给客户端，客户端需要验证该证书的身份。客户端找到第三方机构 CA，获知 CA 的公钥，并用 CA 公钥对证书的签名进行解密，获得了 CA 生成的摘要。</p><p>客户端对证书数据（包含服务器的公钥）做相同的散列处理，得到摘要，并将该摘要与之前从签名中解码出的摘要做对比，如果相同，则身份验证成功；否则验证失败。</p></blockquote><p><img src="'+c+'" alt=""></p><p>总结来说，带有证书的公钥传输机制如下：</p><ol><li>设有服务器 S，客户端 C，和第三方信赖机构 CA。</li><li>S 信任 CA，CA 是知道 S 公钥的，CA 向 S 颁发证书。并附上 CA 私钥对消息摘要的加密签名。</li><li>S 获得 CA 颁发的证书，将该证书传递给 C。</li><li>C 获得 S 的证书，信任 CA 并知晓 CA 公钥，使用 CA 公钥对 S 证书上的签名解密，同时对消息进行散列处理，得到摘要。比较摘要，验证 S 证书的真实性。</li><li>如果 C 验证 S 证书是真实的，则信任 S 的公钥（在 S 证书中）。</li></ol><p><img src="'+T+'" alt=""></p>',49),C={href:"https://www.bilibili.com/video/BV18N411X7ty/",target:"_blank",rel:"noopener noreferrer"},P=a('<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/image-20220321121814946.png" alt=""></p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ul><li><strong>端口号</strong> ：HTTP 默认是 80，HTTPS 默认是 443。</li><li><strong>URL 前缀</strong> ：HTTP 的 URL 前缀是 <code>http://</code>，HTTPS 的 URL 前缀是 <code>https://</code>。</li><li><strong>安全性和资源消耗</strong> ： HTTP 协议运行在 TCP 之上，所有传输的内容都是明文，客户端和服务器端都无法验证对方的身份。HTTPS 是运行在 SSL/TLS 之上的 HTTP 协议，SSL/TLS 运行在 TCP 之上。所有传输的内容都经过加密，加密采用对称加密，但对称加密的密钥用服务器方的证书进行了非对称加密。所以说，HTTP 安全性没有 HTTPS 高，但是 HTTPS 比 HTTP 耗费更多服务器资源。</li></ul>',3);function f(g,b){const s=o("ExternalLinkIcon");return i(),p("div",null,[u,t("p",null,[e("对于数字签名，我这里讲的比较简单，如果你没有搞清楚的话，强烈推荐你看看"),t("a",C,[e("数字签名及数字证书原理"),h(s)]),e("这个视频，这是我看过最清晰的讲解。")]),P])}const _=r(L,[["render",f],["__file","http_https.html.vue"]]);export{_ as default};
