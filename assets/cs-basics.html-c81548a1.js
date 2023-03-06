import{_ as r,X as l,Y as a,Z as e,$ as o,a0 as t,a2 as s,C as i}from"./framework-9b4b2ab3.js";const h={},c=s('<p>考虑到很多同学比较喜欢看视频，因此，这部分内容我不光会推荐书籍，还会顺便推荐一些我觉得不错的视频教程和各大高校的 Project。</p><h2 id="操作系统" tabindex="-1"><a class="header-anchor" href="#操作系统" aria-hidden="true">#</a> 操作系统</h2><p><strong>为什么要学习操作系统？</strong></p><p><strong>从对个人能力方面提升来说</strong>，操作系统中的很多思想、很多经典的算法，你都可以在我们日常开发使用的各种工具或者框架中找到它们的影子。比如说我们开发的系统使用的缓存（比如 Redis）和操作系统的高速缓存就很像。CPU 中的高速缓存有很多种，不过大部分都是为了解决 CPU 处理速度和内存处理速度不对等的问题。我们还可以把内存可以看作外存的高速缓存，程序运行的时候我们把外存的数据复制到内存，由于内存的处理速度远远高于外存，这样提高了处理速度。同样地，我们使用的 Redis 缓存就是为了解决程序处理速度和访问常规关系型数据库速度不对等的问题。高速缓存一般会按照局部性原理（2-8 原则）根据相应的淘汰算法保证缓存中的数据是经常会被访问的。我们平常使用的 Redis 缓存很多时候也会按照 2-8 原则去做，很多淘汰算法都和操作系统中的类似。既说了 2-8 原则，那就不得不提命中率了，这是所有缓存概念都通用的。简单来说也就是你要访问的数据有多少能直接在缓存中直接找到。命中率高的话，一般表明你的缓存设计比较合理，系统处理速度也相对较快。</p><p><strong>从面试角度来说</strong>，尤其是校招，对于操作系统方面知识的考察是非常非常多的。</p><p><strong>简单来说，学习操作系统能够提高自己思考的深度以及对技术的理解力，并且，操作系统方面的知识也是面试必备。</strong></p>',6),u={href:"https://book.douban.com/subject/33463930/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://book.douban.com/subject/1230413/",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,[e("img",{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/booksimage-20201012191645919.png",alt:""})],-1),d={href:"https://book.douban.com/subject/35208251/",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,[e("img",{src:"https://img-blog.csdnimg.cn/20210406132050845.png",alt:""})],-1),b={href:"https://book.douban.com/subject/11530329/",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"纸上学来终觉浅 绝知此事要躬行！强烈推荐 CS 专业的小伙伴一定要多多实践！！！",-1),f=e("p",null,[e("img",{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/booksimage-20220409123802972.png",alt:""})],-1),k=e("p",null,"其他相关书籍推荐：",-1),j={href:"https://book.douban.com/subject/1422377/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://book.douban.com/subject/3852290/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://book.douban.com/subject/26745156/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://book.douban.com/subject/25743846/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://book.douban.com/subject/2044818/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://book.douban.com/subject/3735649/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.icourse163.org/course/HIT-1002531008",target:"_blank",rel:"noopener noreferrer"},T=e("p",null,"课程的大纲如下：",-1),P=e("p",null,[e("img",{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/books/image-20220414144527747.png",alt:"课程大纲"})],-1),I=e("p",null,"主要讲了一个基本操作系统中的六个基本模块： CPU 管理、内存管理、外设管理、磁盘管理与文件系统、用户接口和启动模块 。",-1),H=e("p",null,"课程难度还是比较大的，尤其是课后的 lab。如果大家想要真正搞懂操作系统底层原理的话，对应的 lab 能做尽量做一下。正如李治军老师说的那样：“纸上得来终觉浅，绝知此事要躬行”。",-1),J=e("p",null,[e("img",{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/books/image-20220414145210679.png",alt:""})],-1),N=e("p",null,"如果你能独立完成几个 lab 的话，我相信你对操作系统的理解绝对要上升几个台阶。当然了，如果你仅仅是为了突击面试的话，那就不需要做 lab 了。",-1),S=e("p",null,"说点心里话，我本人非常喜欢李治军老师讲的课，我觉得他是国内不可多得的好老师。他知道我们国内的教程和国外的差距在哪里，也知道国内的学生和国外学生的差距在哪里，他自己在努力着通过自己的方式来缩小这个差距。真心感谢，期待李治军老师的下一个课程。",-1),U=e("p",null,[e("img",{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/books/image-20220414145249714.png",alt:""})],-1),A={href:"https://www.bilibili.com/video/av31289365?from=search&seid=16298868573410423104",target:"_blank",rel:"noopener noreferrer"},B=s('<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/booksimage-20201204140653318.png" alt=""></p><h2 id="计算机网络" tabindex="-1"><a class="header-anchor" href="#计算机网络" aria-hidden="true">#</a> 计算机网络</h2><p>计算机网络是一门系统性比较强的计算机专业课，各大名校的计算机网络课程打磨的应该都比较成熟。</p><p>要想学好计算机网络，首先要了解的就是 OSI 七层模型或 TCP/IP 五层模型，即应用层（应用层、表示层、会话层）、传输层、网络层、数据链路层、物理层。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/booksosi七层模型2.png" alt="osi七层模型"></p><p>关于这门课，首先强烈推荐参考书是<strong>机械工业出版社的《计算机网络——自顶向下方法》</strong>。该书目录清晰，按照 TCP/IP 五层模型逐层讲解，对每层涉及的技术都展开了详细讨论，基本上高校里开设的课程的教学大纲就是这本书的目录了。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/booksimage-20220409123250570.png" alt=""></p><p>如果你觉得上面这本书看着比较枯燥的话，我强烈推荐+安利你看看下面这两本非常有趣的网络相关的书籍：</p>',8),E={href:"https://book.douban.com/subject/25863515/",title:"《图解 HTTP》",target:"_blank",rel:"noopener noreferrer"},L={href:"https://book.douban.com/subject/26941639/",title:"《网络是怎样连接的》",target:"_blank",rel:"noopener noreferrer"},O=e("p",null,[e("img",{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/booksimage-20201011215144139.png",alt:""})],-1),V=e("p",null,[o("除了理论知识之外，学习计算机网络非常重要的一点就是：“"),e("strong",null,"动手实践"),o("”。这点和我们编程差不多。")],-1),G=e("p",null,"Github 上就有一些名校的计算机网络试验/Project：",-1),M={href:"https://github.com/rccoder/HIT-Computer-Network",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/KevinWang15/network-pj-chatroom",target:"_blank",rel:"noopener noreferrer"},K={href:"https://computer-networks.github.io/sp19/lectures.html",target:"_blank",rel:"noopener noreferrer"},Q=e("p",null,"我知道，还有很多小伙伴可能比较喜欢边看视频边学习。所以，我这里再推荐几个顶好的计算机网络视频讲解。",-1),W={href:"http://www.icourse163.org/course/HIT-154005",target:"_blank",rel:"noopener noreferrer"},Y=e("p",null,[e("img",{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/booksimage-20201218141241911.png",alt:""})],-1),Z={href:"https://www.bilibili.com/video/BV19E411D78Q?from=search&seid=17198507506906312317",target:"_blank",rel:"noopener noreferrer"},q=e("p",null,[e("img",{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/booksimage-20201218141652837.png",alt:""})],-1),X=e("h2",{id:"算法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#算法","aria-hidden":"true"},"#"),o(" 算法")],-1),$=e("p",null,"先来看三本入门书籍。 这三本入门书籍中的任何一本拿来作为入门学习都非常好。",-1),F={href:"https://book.douban.com/subject/30357170/",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://book.douban.com/subject/26979890/",target:"_blank",rel:"noopener noreferrer"},oe={href:"https://book.douban.com/subject/25894685/",target:"_blank",rel:"noopener noreferrer"},ne=e("p",null,[e("img",{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/image-20210327104418851.png",alt:""})],-1),te={href:"https://book.douban.com/subject/30357170/",target:"_blank",rel:"noopener noreferrer"},se=e("p",null,"再推荐几本比较经典的算法书籍。",-1),re={href:"https://book.douban.com/subject/19952400/",target:"_blank",rel:"noopener noreferrer"},le=e("p",null,[e("img",{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/booksimage-20220409123422140.png",alt:""})],-1),ae=e("p",null,"这本书内容非常清晰易懂，适合数据结构和算法小白阅读。书中把一些常用的数据结构和算法都介绍到了！",-1),ie=e("p",null,"我在大二的时候被我们的一个老师强烈安利过！自己也在当时购买了一本放在宿舍，到离开大学的时候自己大概看了一半多一点。因为内容实在太多了！另外，这本书还提供了详细的 Java 代码，非常适合学习 Java 的朋友来看，可以说是 Java 程序员的必备书籍之一了。",-1),he=e("blockquote",null,[e("p",null,[e("strong",null,"下面这些书籍都是经典中的经典，但是阅读起来难度也比较大，不做太多阐述，神书就完事了！")]),e("p",null,[e("strong",null,"如果你仅仅是准备算法面试的话，不建议你阅读下面这些书籍。")])],-1),ce={href:"https://book.douban.com/subject/3227098/",target:"_blank",rel:"noopener noreferrer"},ue=e("p",null,[e("img",{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/booksimage-20220409145334093.png",alt:""})],-1),ge=e("p",null,"经典名著，ACM 冠军、亚军这种算法巨佬都强烈推荐的一本书籍。这本书的作者也非常厉害，Java 之父 James Gosling 就是他的学生。",-1),pe=e("p",null,"很多人都说这本书不是教你具体的算法，而是教你一种编程的思考方式。这种思考方式不仅仅在编程领域适用，在其他同样适用。",-1),de={href:"https://book.douban.com/subject/4048566/",target:"_blank",rel:"noopener noreferrer"},_e=e("p",null,[e("img",{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/booksimage-20220409145411049.png",alt:""})],-1),be={href:"https://link.zhihu.com/?target=https%3A//teachyourselfcs.com/",target:"_blank",rel:"noopener noreferrer"},me={href:"https://book.douban.com/subject/20432061/",target:"_blank",rel:"noopener noreferrer"},fe={href:"https://book.douban.com/subject/1130500/",target:"_blank",rel:"noopener noreferrer"},ke=e("p",null,[e("strong",null,"如果说你要准备面试的话，下面这几本书籍或许对你有帮助！")],-1),je={href:"https://book.douban.com/subject/6966465/",target:"_blank",rel:"noopener noreferrer"},ve=e("p",null,[e("img",{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/booksimage-20220409145506482.png",alt:""})],-1),we=e("p",null,"这本面试宝典上面涵盖了很多经典的算法面试题，如果你要准备大厂面试的话一定不要错过这本书。",-1),ye={href:"https://link.zhihu.com/?target=https%3A//github.com/gatieme/CodingInterviews",target:"_blank",rel:"noopener noreferrer"},ze={href:"https://book.douban.com/subject/30422021/",target:"_blank",rel:"noopener noreferrer"},xe=e("p",null,[e("img",{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/booksimage-20220409145622758.png",alt:""})],-1),Ce=e("p",null,"《程序员代码面试指南（第 2 版）》里的大部分题目相比于《剑指 offer》 来说要难很多，题目涵盖面相比于《剑指 offer》也更加全面。全书一共有将近 300 道真实出现过的经典代码面试题。",-1),Te={href:"https://www.icourse163.org/course/PKU-1001894005",target:"_blank",rel:"noopener noreferrer"},Pe=e("p",null,[e("img",{src:"https://img-blog.csdnimg.cn/22ce4a17dc0c40f6a3e0d58002261b7a.png",alt:""})],-1),Ie=e("p",null,"这个课程把七种基本的通用算法（枚举、二分、递归、分治、动态规划、搜索、贪心）都介绍到了。各种复杂算法问题的解决，都可能用到这些基本的思想。并且，这个课程的一部分的例题和 ACM 国际大学生程序设计竞赛中的中等题相当，如果你能够解决这些问题，那你的算法能力将超过绝大部分的高校计算机专业本科毕业生。",-1),He=e("h2",{id:"数据结构",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#数据结构","aria-hidden":"true"},"#"),o(" 数据结构")],-1),Je=e("p",null,[o("其实，上面提到的很多算法类书籍（比如 "),e("strong",null,"《算法》"),o(" 和 "),e("strong",null,"《算法导论》"),o("）都详细地介绍了常用的数据结构。")],-1),Ne=e("p",null,"我这里再另外补充基本和数据结构相关的书籍。",-1),Se={href:"https://book.douban.com/subject/6424904/",target:"_blank",rel:"noopener noreferrer"},Ue=e("p",null,[e("img",{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/booksimage-20220409145803440.png",alt:""})],-1),Ae=e("p",null,"入门类型的书籍，读起来比较浅显易懂，适合没有数据结构基础或者说数据结构没学好的小伙伴用来入门数据结构。",-1),Be={href:"https://book.douban.com/subject/3351237/",target:"_blank",rel:"noopener noreferrer"},Ee=e("p",null,[e("img",{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/booksimage-20220409145823973.png",alt:""})],-1),Le=e("p",null,"质量很高，介绍了常用的数据结构和算法。",-1),Oe={href:"https://book.douban.com/subject/1139426/",target:"_blank",rel:"noopener noreferrer"},Ve={href:"https://book.douban.com/subject/1971825/",target:"_blank",rel:"noopener noreferrer"},Ge=e("p",null,[e("img",{src:"https://img-blog.csdnimg.cn/d9c450ccc5224a5fba77f4fa937f7b9c.png",alt:""})],-1),Me={href:"https://www.icourse163.org/course/ZJU-93001#/info",target:"_blank",rel:"noopener noreferrer"},Re=s('<p>姥姥的数据结构讲的非常棒！不过，还是有一些难度的，尤其是课后练习题。</p><h2 id="计算机专业基础课" tabindex="-1"><a class="header-anchor" href="#计算机专业基础课" aria-hidden="true">#</a> 计算机专业基础课</h2><p>数学和英语属于通用课，一般在大一和大二两学年就可以全部修完，大二大三逐渐接触专业课。通用课作为许多高中生升入大学的第一门课，算是高中阶段到本科阶段的一个过渡，从职业生涯重要性上来说，远不及专业课重要，但是在本科阶段的学习生活规划中，有着非常重要的地位。由于通用课的课程多，学分重，占据了本科阶段绩点的主要部分，影响到学生在前两年的专业排名，也影响到大三结束时的推免资格分配，也就是保研。而从升学角度来看，对于攻读研究生和博士生的小伙伴来说，数学和英语这两大基础课，还是十分有用的。</p><h3 id="数学" tabindex="-1"><a class="header-anchor" href="#数学" aria-hidden="true">#</a> 数学</h3><h4 id="微积分-高等数学" tabindex="-1"><a class="header-anchor" href="#微积分-高等数学" aria-hidden="true">#</a> 微积分（高等数学）</h4><p>微积分，即传说中的高数，成为了无数新大一心中的痛。但好在，大学的课程考核没那么严格，期末想要拿高分，也不至于像高中那样刷题刷的那么狠。微积分对于计算机专业学生的重要性，主要体现在计算机图形学中的函数变换，机器学习中的梯度算法，信号处理等领域。</p><p>微积分的知识体系包括微分和积分两部分，一般会先学微分，再学积分，也有的学校把高数分为两个学期。微分就是高中的导数的升级版，对于大一萌新来说还算比较友好。积分恰好是微分的逆运算，思想上对大一萌新来说比较新，一时半会可能接受不了。不过这门课所有的高校都有开设，而且大部分的名校都有配套的网课，教材也都打磨的非常出色，结合网课和教材的“啃书”学习模式，这门课一定不会落下。</p><p>书籍的话，推荐《普林斯顿微积分读本》。这本书详细讲解了微积分基础、极限、连续、微分、导数的应用、积分、无穷级数、泰勒级数与幂级数等内容。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/booksimage-20220409155056751.png" alt=""></p><h4 id="线性代数-高等代数" tabindex="-1"><a class="header-anchor" href="#线性代数-高等代数" aria-hidden="true">#</a> 线性代数（高等代数）</h4><p>线性代数的思维模式就更加复杂了一些，它定义了一个全新的数学世界，所有的符号、定理都是全新的，唯一能尝试的去理解的方式，大概就是用几何的方式去理解线性代数了。由于线性代数和几何学有着密不可分的关系，比如空间变换的理论支撑就是线性代数，因此，网上有着各种“可视化学习线性代数”的学习资源，帮助理解线性代数的意义，有助于公式的记忆。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/booksimage-20220409153940473.png" alt=""></p>',12),De={href:"https://book.douban.com/subject/26390093/",target:"_blank",rel:"noopener noreferrer"},Ke=e("p",null,[e("img",{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/booksimage-20220409155325251.png",alt:""})],-1),Qe=e("h4",{id:"概率论与数理统计",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#概率论与数理统计","aria-hidden":"true"},"#"),o(" 概率论与数理统计")],-1),We=e("p",null,[o("对于计算机专业的小伙伴来说，这门课可能是概率论更有用一点，而非数理统计。可能某些学校只开设概率论课程，也可能数理统计也教，但仅仅是皮毛。概率论的学习路线和微积分相似，就是一个个公式辅以实例，不像线性代数那么抽象，比较贴近生活。在现在的就业形势下，概率论与数理统计专业的学生，应该是数学专业最好就业的了，他们通常到岗位上会做一些数据分析的工作，因此，"),e("strong",null,"这门课程确实是数据分析的重要前置课程，概率论在机器学习中的重要性也就不言而喻了。")],-1),Ye={href:"https://book.douban.com/subject/34897672/",target:"_blank",rel:"noopener noreferrer"},Ze=s('<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/booksimage-20220409155738505.png" alt=""></p><h4 id="离散数学-集合论、图论、近世代数等" tabindex="-1"><a class="header-anchor" href="#离散数学-集合论、图论、近世代数等" aria-hidden="true">#</a> 离散数学（集合论、图论、近世代数等）</h4><p>离散数学是计算机专业的专属数学，但实际上对于本科毕业找工作的小伙伴来说，离散数学还并没有发挥它的巨大作用。离散数学的作用主要在在图研究等领域，理论性极强，需要读研深造的小伙伴尽可能地扎实掌握。</p><h3 id="英语" tabindex="-1"><a class="header-anchor" href="#英语" aria-hidden="true">#</a> 英语</h3><p>英语算是大学里面比较灵活的一项技能了，有的人会说，“英语学的越好，对个人发展越有利”，此话说的没错，但是对于一些有着明确发展目标的小伙伴，可能英语技能并不在他们的技能清单内。接下来的这些话只针对计算机专业的小伙伴们哦。</p><p>英语课在大学本科一般只有前两年开设，小伙伴们可以记住，<strong>想用英语课来提升自己的英语水平的，可以打消这个念头了。</strong> 英语水平的提高全靠自己平时的积累和练习，以及有针对性的刷题。</p><p><strong>英语的大学四六级一定要过。</strong> 这是必备技能，绝大部分就业岗位都要看四六级水平的，最起码要通过的。四级比高中英语稍微难一些，一般的小伙伴可能会卡在六级上，六级需要针对性的训练一下，因为大学期间能接触英语的实在太少了，每学期一门英语课是不足以保持自己的英语水平的。对于一些来自于偏远地区，高中英语基础薄弱的，考四六级会更加吃力。建议考前集中训练一下历年真题，辅以背一下高频词汇，四六级通过只需要 425 分，这个分数线还是比较容易达到的。稍微好一点的小伙伴可能冲一下 500 分，要是能考到 600 分的话，那是非常不错的水平了，算是简历上比较有亮点的一项。</p><p>英语的雅思托福考试只限于想要出国的小伙伴，以及应聘岗位对英语能力有特殊要求的。雅思托福考试裸考不容易通过，花钱去比较靠谱的校外补课班应该是一个比较好的选择。</p><p>对于计算机专业的小伙伴来说，英语能力还是比较重要的，虽然应聘的时候不会因为没有雅思托福成绩卡人，但是你起码要能够：</p><ul><li><strong>熟练使用英文界面的软件、系统等</strong></li><li><strong>对于外网的一些博客、bug 解决方案等，阅读无压力</strong></li><li><strong>熟练阅读英文文献</strong></li><li><strong>具备一定的英文论文的撰写能力</strong></li></ul><p>毕竟计算机语言就是字符语言，听说读写中最起码要满足<strong>读写</strong>这两项不过分吧。</p><h3 id="编译原理" tabindex="-1"><a class="header-anchor" href="#编译原理" aria-hidden="true">#</a> 编译原理</h3><p>编译原理相比于前面介绍的专业课，地位显得不那么重要了。编译原理的重要性主要体现在：</p><ul><li>底层语言、引擎或高级语言的开发，如 MySQL，Java 等</li><li>操作系统或嵌入式系统的开发</li><li>词法、语法、语义的思想，以及自动机思想</li></ul><p><strong>编译原理的重要前置课程就是形式语言与自动机，自动机的思想在词法分析当中有着重要应用，学习了这门课后，应该就会发现许多场景下，自动机算法的妙用了。</strong></p><p>总的来说，这门课对于各位程序员的职业发展来说，相对不那么重要，但是从难度上来说，学习这门课可以对编程思想有一个较好的巩固。学习资源的话，除了课堂上的幻灯片课件以外，还可以把 《编译原理》 这本书作为参考书，用以辅助自己学不懂的地方（大家口中的龙书，想要啃下来还是有一定难度的）。</p><p><img src="https://img-blog.csdnimg.cn/20210406152148373.png" alt=""></p><p>其他书籍推荐:</p>',18),qe={href:"https://book.douban.com/subject/30191414/",target:"_blank",rel:"noopener noreferrer"},Xe={href:"https://book.douban.com/subject/20436488/",target:"_blank",rel:"noopener noreferrer"},$e={href:"https://www.icourse163.org/course/HIT-1002123007",target:"_blank",rel:"noopener noreferrer"},Fe=e("p",null,[e("img",{src:"https://img-blog.csdnimg.cn/20210406152847824.png",alt:""})],-1);function eo(oo,no){const n=i("ExternalLinkIcon");return l(),a("div",null,[c,e("p",null,[o("如果你要系统地学习操作系统的话，最硬核最权威的书籍是 "),e("strong",null,[e("a",u,[o("《操作系统导论》"),t(n)])]),o(" 。你可以再配套一个 "),e("strong",null,[e("a",g,[o("《深入理解计算机系统》"),t(n)])]),o(" 加深你对计算机系统本质的认识，美滋滋！")]),p,e("p",null,[o("另外，去年新出的一本国产的操作系统书籍也很不错："),e("strong",null,[e("a",d,[o("《现代操作系统：原理与实现》"),t(n)])]),o(" （夏老师和陈老师团队的力作，值得推荐）。")]),_,e("p",null,[o("如果你比较喜欢动手，对于理论知识比较抵触的话，我推荐你看看 "),e("strong",null,[e("a",b,[o("《30 天自制操作系统》"),t(n)])]),o(" ，这本书会手把手教你编写一个操作系统。")]),m,f,k,e("ul",null,[e("li",null,[e("strong",null,[e("a",j,[o("《自己动手写操作系统》"),t(n)])]),o(" ： 不光会带着你详细分析操作系统原理的基础，还会用丰富的实例代码，一步一步地指导你用 C 语言和汇编语言编写出一个具备操作系统基本功能的操作系统框架。")]),e("li",null,[e("strong",null,[e("a",v,[o("《现代操作系统》"),t(n)])]),o(" ： 内容很不错，不过，翻译的一般。如果你是精读本书的话，建议把课后习题都做了。")]),e("li",null,[e("strong",null,[e("a",w,[o("《操作系统真象还原》"),t(n)])]),o(" ： 这本书的作者毕业于北京大学，前百度运维高级工程师。因为在大学期间曾重修操作系统这一科，后对操作系统进行深入研究，著下此书。")]),e("li",null,[e("strong",null,[e("a",y,[o("《深度探索 Linux 操作系统》"),t(n)])]),o(" ：跟着这本书的内容走，可以让你对如何制作一套完善的 GNU/Linux 系统有了清晰的认识。")]),e("li",null,[e("strong",null,[e("a",z,[o("《操作系统设计与实现》"),t(n)])]),o(" ：操作系统的权威教学教材。")]),e("li",null,[e("strong",null,[e("a",x,[o("《Orange'S:一个操作系统的实现》"),t(n)])]),o(" ： 从只有二十行的引导扇区代码出发，一步一步地向读者呈现一个操作系统框架的完成过程。配合《操作系统设计与实现》一起食用更佳！")])]),e("p",null,[o("如果你比较喜欢看视频的话，推荐哈工大李治军老师主讲的慕课 "),e("a",C,[o("《操作系统》"),t(n)]),o("，内容质量吊打一众国家精品课程。")]),T,P,I,H,J,N,S,U,e("p",null,[o("还有下面这个国外的课程 "),e("a",A,[o("《深入理解计算机系统 》"),t(n)]),o(" 也很不错。")]),B,e("ul",null,[e("li",null,[e("a",E,[o("《图解 HTTP》"),t(n)]),o(" ： 讲漫画一样的讲 HTTP，很有意思，不会觉得枯燥，大概也涵盖也 HTTP 常见的知识点。因为篇幅问题，内容可能不太全面。不过，如果不是专门做网络方向研究的小伙伴想研究 HTTP 相关知识的话，读这本书的话应该来说就差不多了。")]),e("li",null,[e("a",L,[o("《网络是怎样连接的》"),t(n)]),o(" ：从在浏览器中输入网址开始，一路追踪了到显示出网页内容为止的整个过程，以图配文，讲解了网络的全貌，并重点介绍了实际的网络设备和软件是如何工作的。")])]),O,V,G,e("ul",null,[e("li",null,[e("a",M,[o("哈工大计算机网络实验"),t(n)])]),e("li",null,[e("a",R,[o("《计算机网络－自顶向下方法(原书第 6 版)》编程作业，Wireshark 实验文档的翻译和解答。"),t(n)])]),e("li",null,[e("a",D,[o("计算机网络的期末 Project，用 Python 编写的聊天室"),t(n)])]),e("li",null,[e("a",K,[o("CMU 的计算机网络课程"),t(n)])])]),Q,e("p",null,[e("strong",null,[o("1、"),e("a",W,[o("哈工大的计算机网络课程"),t(n)])]),o(" ：国家精品课程，截止目前已经开了 10 次课了。大家对这门课的评价都非常高！所以，非常推荐大家看一下！")]),Y,e("p",null,[e("strong",null,[o("2、"),e("a",Z,[o("王道考研的计算机网络"),t(n)])]),o(" ：非常适合 CS 专业考研的小朋友！这个视频目前在哔哩哔哩上已经有 1.6w+的点赞。")]),q,X,$,e("ol",null,[e("li",null,[e("a",F,[o("《我的第一本算法书》"),t(n)])]),e("li",null,[e("a",ee,[o("《算法图解》"),t(n)])]),e("li",null,[e("a",oe,[o("《啊哈!算法》"),t(n)])])]),ne,e("p",null,[o("我个人比较倾向于 "),e("strong",null,[e("a",te,[o("《我的第一本算法书》"),t(n)])]),o(" 这本书籍，虽然它相比于其他两本书集它的豆瓣评分略低一点。我觉得它的配图以及讲解是这三本书中最优秀，唯一比较明显的问题就是没有代码示例。但是，我觉得这不影响它是一本好的算法书籍。因为本身下面这三本入门书籍的目的就不是通过代码来让你的算法有多厉害，只是作为一本很好的入门书籍让你进入算法学习的大门。")]),se,e("p",null,[e("strong",null,[e("a",re,[o("《算法》"),t(n)])])]),le,ae,ie,he,e("p",null,[e("strong",null,[e("a",ce,[o("《编程珠玑》"),t(n)])])]),ue,ge,pe,e("p",null,[e("strong",null,[e("a",de,[o("《算法设计手册》"),t(n)])])]),_e,e("p",null,[o("这是一本被 Github 上的爆火的计算机自学项目 "),e("a",be,[o("Teach Yourself Computer Science"),t(n)]),o(" 强烈推荐的一本算法书籍。")]),e("p",null,[o("类似的神书还有 "),e("a",me,[o("《算法导论》"),t(n)]),o("、"),e("a",fe,[o("《计算机程序设计艺术（第 1 卷）》"),t(n)]),o(" 。")]),ke,e("p",null,[e("strong",null,[e("a",je,[o("《剑指 Offer》"),t(n)])])]),ve,we,e("p",null,[o("《剑指 Offer》 对应的算法编程题部分的开源项目解析："),e("a",ye,[o("CodingInterviews"),t(n)]),o(" 。")]),e("p",null,[e("strong",null,[e("a",ze,[o("《程序员代码面试指南（第 2 版）》"),t(n)])])]),xe,Ce,e("p",null,[o("视频的话，推荐北京大学的国家精品课程—"),e("strong",null,[e("a",Te,[o("程序设计与算法（二）算法基础"),t(n)])]),o("，讲的非常好！")]),Pe,Ie,He,Je,Ne,e("p",null,[e("strong",null,[e("a",Se,[o("《大话数据结构》"),t(n)])])]),Ue,Ae,e("p",null,[e("strong",null,[e("a",Be,[o("《数据结构与算法分析：Java 语言描述》"),t(n)])])]),Ee,Le,e("p",null,[o("类似的还有 "),e("strong",null,[e("a",Oe,[o("《数据结构与算法分析 ：C 语言描述》"),t(n)])]),o(" 、"),e("strong",null,[e("a",Ve,[o("《数据结构与算法分析：C++ 描述》"),t(n)])])]),Ge,e("p",null,[o("视频的话推荐你看浙江大学的国家精品课程—"),e("strong",null,[e("a",Me,[o("《数据结构》"),t(n)])]),o(" 。")]),Re,e("p",null,[o("书籍的话，推荐中科大李尚志老师的 "),e("strong",null,[e("a",De,[o("《线性代数学习指导》"),t(n)])]),o(" 。")]),Ke,Qe,We,e("p",null,[o("书籍的话，推荐 "),e("strong",null,[e("a",Ye,[o("《概率论与数理统计教程》"),t(n)])]),o(" 。这本书共八章，前四章为概率论部分，主要叙述各种概率分布及其性质，后四章为数理统计部分，主要叙述各种参数估计与假设检验。")]),Ze,e("ul",null,[e("li",null,[e("strong",null,[e("a",qe,[o("《现代编译原理》"),t(n)])]),o(" ：编译原理的入门书。")]),e("li",null,[e("strong",null,[e("a",Xe,[o("《编译器设计》"),t(n)])]),o(" ： 覆盖了编译器从前端到后端的全部主题。")])]),e("p",null,[o("我上面推荐的书籍的难度还是比较高的，真心很难坚持看完。这里强烈推荐"),e("a",$e,[o("哈工大的编译原理视频课程"),t(n)]),o("，真心不错，还是国家精品课程，关键还是又漂亮有温柔的美女老师讲的！")]),Fe])}const so=r(h,[["render",eo],["__file","cs-basics.html.vue"]]);export{so as default};
