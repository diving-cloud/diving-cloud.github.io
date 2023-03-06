import{_ as a,X as e,Y as d,a2 as h}from"./framework-9b4b2ab3.js";const r={},i=h('<blockquote><p><strong>推荐语</strong> ： 从面试官和面试者两个角度探讨了技术面试！非常不错！</p><p><strong>内容概览：</strong></p><ul><li>通过技术基础考察候选者，才能考察到候选者的真实技术实力：技术深度和广度。</li><li>实战与理论结合。比如，候选人叙述 JVM 内存模型布局之后，可以接着问：有哪些原因可能会导致 OOM , 有哪些预防措施? 你是否遇到过内存泄露的问题? 如何排查和解决这类问题?</li><li>项目经历考察不宜超过两个。因为要深入考察一个项目的详情，所占用的时间还是比较大的。一般来说，会让候选人挑选一个他或她觉得最有收获的/最有挑战的/印象最深刻的/自己觉得特有意思的项目。然后围绕这个项目进行发问。通常是从项目背景出发，考察项目的技术栈、项目模块及交互的整体理解、项目中遇到的有挑战性的技术问题及解决方案、排查和解决问题、代码可维护性问题、工程质量保障等。</li><li>多问少说，让候选者多表现。根据候选者的回答适当地引导或递进或横向移动。</li></ul><p><strong>原文地址：</strong> https://www.cnblogs.com/lovesqcc/p/15169365.html</p></blockquote><h2 id="考察目标和思路" tabindex="-1"><a class="header-anchor" href="#考察目标和思路" aria-hidden="true">#</a> 考察目标和思路</h2><p>首先明确，技术初试的考察目标：</p><ul><li>候选人的技术基础；</li><li>候选人解决问题的思路和能力。</li></ul><p>技术基础是基石（冰山之下的东西），占七分， 解决问题的思路和能力是落地（冰山之上露出的部分），占三分。 业务和技术基础考察，三七开。</p><h2 id="技术基础考察" tabindex="-1"><a class="header-anchor" href="#技术基础考察" aria-hidden="true">#</a> 技术基础考察</h2><h3 id="为什么要考察技术基础" tabindex="-1"><a class="header-anchor" href="#为什么要考察技术基础" aria-hidden="true">#</a> 为什么要考察技术基础?</h3><p>程序员最重要的两种技术思维能力，是逻辑思维能力和抽象设计能力。逻辑思维能力是基础，抽象设计能力是高阶。 考察技术基础，正好可以同时考察这两种思维能力。能不能理解基础技术概念及关联，是考察逻辑思维能力；能不能把业务问题抽象成技术问题并合理的组织映射，是考察抽象设计能力。</p><p>绝大部分业务问题，都可以抽象成技术问题。在某种意义上，业务问题只是技术问题的领域化表述。</p><p>因此，<strong>通过技术基础考察候选者，才能考察到候选者的真实技术实力：技术深度和广度。</strong></p><h3 id="技术基础怎么考察" tabindex="-1"><a class="header-anchor" href="#技术基础怎么考察" aria-hidden="true">#</a> 技术基础怎么考察？</h3><p>技术基础怎么考察？通过有效的多角度的发问模式来考察。</p><h4 id="是什么-为什么" tabindex="-1"><a class="header-anchor" href="#是什么-为什么" aria-hidden="true">#</a> 是什么-为什么</h4><p>是什么考察对概念的基本理解，为什么考察对概念的实现原理。</p><p>比如：索引是什么？ 索引是如何实现的？</p><h4 id="引导-横向发问-深入发问" tabindex="-1"><a class="header-anchor" href="#引导-横向发问-深入发问" aria-hidden="true">#</a> 引导-横向发问-深入发问</h4><p>引导性，比如 “你对 Java 同步工具熟悉吗？” 作个试探，得到肯定答复后，可以进一步问： “你熟悉哪些同步工具类？” 了解候选者的广度；</p><p>获取候选者的回答后，可以进一步问：“ 谈谈 <code>ConcurrentHashMap</code> 或 <code>AQS</code> 的实现原理？”</p><p>一个人在多大程度上把技术原理能讲得清晰，包括思路和细节，说明他对技术的掌握能力有多强。</p><h4 id="跳跃式-交叉式发问" tabindex="-1"><a class="header-anchor" href="#跳跃式-交叉式发问" aria-hidden="true">#</a> 跳跃式/交叉式发问</h4><p>比如：讲到哈希高效查找，可以谈谈哈希一致性算法 。 两者既有关联又有很多不同点。也是一种技术广度的考察方法。</p><h4 id="总结性发问" tabindex="-1"><a class="header-anchor" href="#总结性发问" aria-hidden="true">#</a> 总结性发问</h4><p>比如：你在做 XXX 中，获得了哪些可以分享的经验？ 考察候选人的归纳总结能力。</p><h4 id="实战与理论结合" tabindex="-1"><a class="header-anchor" href="#实战与理论结合" aria-hidden="true">#</a> 实战与理论结合</h4><p>比如，候选人叙述 JVM 内存模型布局之后，可以接着问：有哪些原因可能会导致 OOM , 有哪些预防措施? 你是否遇到过内存泄露的问题? 如何排查和解决这类问题?</p><p>比如，候选人有谈到 SQL 优化和索引优化，那就正好谈谈索引的实现原理，如何建立最佳索引？</p><p>再比如，候选人有谈到事务，那就正好谈谈事务实现原理，隔离级别，快照实现等；</p><h4 id="熟悉与不熟悉结合" tabindex="-1"><a class="header-anchor" href="#熟悉与不熟悉结合" aria-hidden="true">#</a> 熟悉与不熟悉结合</h4><p>针对候选人简历上写的熟悉的部分，和没有写出的都问下。比如候选人简历上写着：熟悉 JVM 内存模型， 那我就考察下内存管理相关（熟悉部分），再考察下 Java 并发工具类（不确定是否熟悉部分）。</p><h4 id="死知识与活知识结合" tabindex="-1"><a class="header-anchor" href="#死知识与活知识结合" aria-hidden="true">#</a> 死知识与活知识结合</h4><p>比如，查找算法有哪些？顺序查找、二分查找、哈希查找。这些大家通常能说出来，也是“死知识”。</p><p>这些查找算法各适用于什么场景？在你工作中，有哪些场景用到了哪些查找算法？为什么？ 这些是“活知识”。</p><h4 id="学习或工作中遇到的" tabindex="-1"><a class="header-anchor" href="#学习或工作中遇到的" aria-hidden="true">#</a> 学习或工作中遇到的</h4><p>有时，在学习和工作中遇到的问题，也可以作为面试题。</p><p>比如，最近在学习《操作系统导论》并发部分，有一章节是如何使数据结构成为线程安全的。这里就有一些可以提问的地方：如何实现一个锁？如何实现一个线程安全的计数器？如何实现一个线程安全的链表？如何实现一个线程安全的 <code>Map</code> ？如何提升并发的性能？</p><p>工作中遇到的问题，也可以抽象提炼出来，作为技术基础面试题。</p><h4 id="技术栈适配度发问" tabindex="-1"><a class="header-anchor" href="#技术栈适配度发问" aria-hidden="true">#</a> 技术栈适配度发问</h4><p>如果候选人（简历上所写的）使用的某些技术与本公司的技术栈比较契合，则可以针对这些技术点进行深入提问，考察候选人在这些技术点的掌握程度。如果掌握程度比较好，则技术适配度相对更高一些。</p><p>当然，这一点并不能作为筛掉那些没有使用该技术栈的候选人的依据。比如本公司使用 <code>MongoDB</code> 和 <code>MySQL</code>， 而一个候选人没有用过 <code>Mongodb，</code> 但使用过 <code>MySQL</code>, <code>Redis</code>, <code>ES</code>, <code>HBase</code> 等多种存储系统，那么适配度并不比仅使用过 <code>MySQL</code> 和 <code>MongoDB</code> 的候选人逊色，因为他所涉及的技术广度更大，可以推断出他有足够能力掌握 <code>Mongodb</code>。</p><h4 id="创造有个性的面试题库" tabindex="-1"><a class="header-anchor" href="#创造有个性的面试题库" aria-hidden="true">#</a> 创造有个性的面试题库</h4><p>每个技术面试官都会有一个面试题库。持续积累面试题库，日常中突然想到的问题，就随手记录下来。</p><h2 id="业务维度考察" tabindex="-1"><a class="header-anchor" href="#业务维度考察" aria-hidden="true">#</a> 业务维度考察</h2><h3 id="为什么要考察业务维度" tabindex="-1"><a class="header-anchor" href="#为什么要考察业务维度" aria-hidden="true">#</a> 为什么要考察业务维度？</h3><p>技术基础考察，容易错过的地方是，候选人的非技术能力特质，比如沟通组织能力、带项目能力、抗压能力、解决实际问题的能力、团队影响力、其它性格特质等。</p><h3 id="为什么不能单考察业务维度" tabindex="-1"><a class="header-anchor" href="#为什么不能单考察业务维度" aria-hidden="true">#</a> 为什么不能单考察业务维度？</h3><p>因为业务方面通常比较熟悉，可能就直接按照现有方案说出来了，很难考察到候选人的深入理解、横向拓展和归纳总结能力。</p><p>这一点，建议有针对性地考察下候选人的归纳总结能力：比如， 微服务搭建或开发或维护/保证系统稳定性或性能方面的过程中，你收获了哪些可以分享的经验？</p><h2 id="解决问题能力考察" tabindex="-1"><a class="header-anchor" href="#解决问题能力考察" aria-hidden="true">#</a> 解决问题能力考察</h2><p>仅仅只是技术基础还不够，通常最好结合实际业务，针对他项目里的业务，抽象出技术问题进行考察。</p><p>解决思路重在层层递进。这一点对于面试官的要求也比较高，兼具良好的倾听能力、技术深度和业务经验。首先要仔细倾听候选人的阐述，找到适当的技术切入点，然后进行发问。如果进不去，那就容易考察失败。</p><h3 id="设计问题" tabindex="-1"><a class="header-anchor" href="#设计问题" aria-hidden="true">#</a> 设计问题</h3><ul><li>比如多个机器间共享大量业务对象，这些业务对象之间有些联合字段是重复的，如何去重？</li><li>如果瞬时有大量请求涌入，如何保证服务器的稳定性？</li></ul><h3 id="项目经历" tabindex="-1"><a class="header-anchor" href="#项目经历" aria-hidden="true">#</a> 项目经历</h3><p>项目经历考察不宜超过两个。因为要深入考察一个项目的详情，所占用的时间还是比较大的。</p><p>一般来说，会让候选人挑选一个他或她觉得最有收获的/最有挑战的/印象最深刻的/自己觉得特有意思的项目。然后围绕这个项目进行发问。通常是从项目背景出发，考察项目的技术栈、项目模块及交互的整体理解、项目中遇到的有挑战性的技术问题及解决方案、排查和解决问题、代码可维护性问题、工程质量保障等。</p><h2 id="面试官如何做好一场面试" tabindex="-1"><a class="header-anchor" href="#面试官如何做好一场面试" aria-hidden="true">#</a> 面试官如何做好一场面试?</h2><h3 id="预先准备" tabindex="-1"><a class="header-anchor" href="#预先准备" aria-hidden="true">#</a> 预先准备</h3><p>面试官也需要做一些准备。比如熟悉候选者的技能优势、工作经历等，做一个面试设计。</p><p>在面试将要开始时，做好面试准备。此外，面试官也需要对公司的一些基本情况有所了解，尤其是公司所使用技术栈、业务全景及方向、工作内容、晋升制度等，这一点技术型候选人问得比较多。</p><h3 id="面试启动" tabindex="-1"><a class="header-anchor" href="#面试启动" aria-hidden="true">#</a> 面试启动</h3><p>一般以候选人自我介绍启动，不过候选人往往会谈得比较散，因此，我会直接提问：谈谈你有哪些优势以及自己觉得可以改进的地方？</p><p>然后以一个相对简单的基础题作为技术提问的开始：你熟悉哪些查找算法？大多数人是能答上顺序查找、二分查找、哈希查找的。</p><h3 id="问题设计" tabindex="-1"><a class="header-anchor" href="#问题设计" aria-hidden="true">#</a> 问题设计</h3><p>提前阅读候选人简历，从简历中筛选出关键词，根据这些关键词进行有针对性地问题设计。</p><p>比如候选人简历里提到 <code>MVVM</code> ，可以问 <code>MVVM</code> 与 <code>MVC</code> 的区别； 提到了观察者模式，可以谈谈观察者模式，顺便问问他还熟悉哪些设计模式。</p><h3 id="宽松氛围" tabindex="-1"><a class="header-anchor" href="#宽松氛围" aria-hidden="true">#</a> 宽松氛围</h3><p>即使问的问题比较多比较难，也要注意保持宽松氛围。</p><p>在面试前，根据候选人基本信息适当调侃一下，比如一位候选人叫汪奎，那我就说：之前我们团队有位叫袁奎，我们都喊他奎爷。</p><p>在面试过程中，适当提示，或者给出少量自己的看法，也能缓解候选人的紧张情绪。</p><h3 id="学会倾听" tabindex="-1"><a class="header-anchor" href="#学会倾听" aria-hidden="true">#</a> 学会倾听</h3><p>多问少说，让候选者多表现。根据候选者的回答适当地引导或递进或横向移动。</p><p>引导候选人表现他最优势的一面，让他或她感觉好一些：毕竟一场面试双方都付出了时间和精力，不应该是面试官 Diss 候选人的场合，而应该让彼此有更好的交流。很大可能，你也能从候选人那里学到不少东西。</p><p>面试这件事，只不过双方的角色和立场有所不同，但并不代表面试官的水平就一定高于候选人。</p><h3 id="记录重点" tabindex="-1"><a class="header-anchor" href="#记录重点" aria-hidden="true">#</a> 记录重点</h3><p>认真客观地记录候选人的回答，尽可能避免任何主观评价，亦不作任何加工（比如自己给总结一下，总结能力也是候选人的一个特质）。</p><h2 id="作出判断" tabindex="-1"><a class="header-anchor" href="#作出判断" aria-hidden="true">#</a> 作出判断</h2><p>面试过程是一种铺垫，关键的是作出判断。</p><p>作出判断最容易陷入误区的是：贪深求全。总希望候选人技术又深入又全面。实际上，这是一种奢望。如果候选人的技术能力又深入又全面，很可能也会面临两种情况：</p><ol><li>候选人有更好的选择；</li><li>候选人在其它方面可能存在不足，比如团队协作方面。</li></ol><p>一个比较合适的尺度是：</p><ol><li>他或她的技术水平能否胜任当前工作；</li><li>他或她的技术水平与同组团队成员水平如何；</li><li>他或她的技术水平是否与年限相对匹配，是否有潜力胜任更复杂的任务。</li></ol><p><strong>不同年龄看重的东西不一样。</strong></p><p>对于三年以下的工程师，应当更看重其技术基础，因为这代表着他的未来潜能；同时也考察下他在实际开发中的体现，比如团队协作、业务经验、抗压能力、主动学习的热情和能力等。</p><p>对于三年以上的工程师，应当更看重其业务经验、解决问题能力，看看他或她是如何分析具体问题，在业务范畴内考察其技术基础的深度和广度。</p><p>如何判断一个候选人的真实技术水平及是否适合所需，这方面，我也在学习中。</p><h2 id="给候选人的话" tabindex="-1"><a class="header-anchor" href="#给候选人的话" aria-hidden="true">#</a> 给候选人的话</h2><h3 id="关注技术基础" tabindex="-1"><a class="header-anchor" href="#关注技术基础" aria-hidden="true">#</a> 关注技术基础</h3><p>一个常见的疑惑是：开发业务系统的大多数时候，基本不涉及数据结构与算法的设计与实现，为什么要考察 <code>HashMap</code> 的实现原理？为什么要学好数据结构与算法、操作系统、网络通信这些基础课程？</p><p>现在我可以给出一个答案了：</p><ul><li>正如上面所述，绝大多数的业务问题，实际上最终都会映射到基础技术问题上：数据结构与算法的实现、内存管理、并发控制、网络通信等；这些是理解现代互联网大规模程序以及解决程序疑难问题的基石，—— 除非能祝福自己永远都不会遇到疑难问题，永远都只满足于编写 CRUD；</li><li>这些技术基础正是程序世界里最有趣最激动人心的地方。如果对这些不感兴趣，就很难在这个领域里深入进去，不如及早转行从事其它职业，非技术的世界一直都很精彩广阔（有时我也想多出去走走，不想局限于技术世界）；</li><li>技术基础是程序员的内功，而具体技术则是招式。徒有招式而内功不深，遇到高手（优秀同行从业者的竞争及疑难杂症）容易不堪一击；</li><li>具备扎实的专业技术基础，能达到的上限更高，未来更有可能胜任复杂的技术问题求解，或者在同样的问题上能够做到更好的方案；</li><li>人们喜欢跟与自己相似的人合作，牛人倾向于与牛人合作能得到更好的效果；如果一个团队大部分人技术基础比较好，那么进来一个技术基础比较薄弱的人，协作成本会变高；如果你想和牛人一起合作拿到更好的结果，那就要让自己至少在技术基础上能够与牛人搭配的上；</li><li>在 CRUD 的基础上拓展其它才能也不失为一种好的选择，但这不会是一个真正的程序员的姿态，顶多是有技术基础的产品经理、项目经理、HR、运营、客满等其它岗位人才。这是职业选择的问题，已经超出了考察程序员的范畴。</li></ul><h3 id="不要在意某个问题回答不上来" tabindex="-1"><a class="header-anchor" href="#不要在意某个问题回答不上来" aria-hidden="true">#</a> 不要在意某个问题回答不上来</h3><p>如果面试官问你很多问题，而有些没有回答上来，不要在意。面试官很可能只是在测试你的技术深度和广度，然后判断你是否达到某个水位线。</p><p>重点是：有些问题你答得很有深度，也体现了你的深度思考能力。</p><p>这一点是我当了技术面试官才领会到的。当然，并不是每位技术面试官都是这么想的，但我觉得这应该是个更合适的方式。</p>',94),p=[i];function n(c,o){return e(),d("div",null,p)}const l=a(r,[["render",n],["__file","technical-preliminary-preparation.html.vue"]]);export{l as default};
