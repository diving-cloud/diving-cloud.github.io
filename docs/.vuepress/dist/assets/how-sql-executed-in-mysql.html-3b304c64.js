import{_ as o,X as l,Y as s,Z as e,$ as n,a0 as r,a2 as t,C as i}from"./framework-9b4b2ab3.js";const d={},p={href:"https://github.com/kinglaw1204",target:"_blank",rel:"noopener noreferrer"},h=t(`<p>本篇文章会分析下一个 SQL 语句在 MySQL 中的执行流程，包括 SQL 的查询在 MySQL 内部会怎么流转，SQL 语句的更新是怎么完成的。</p><p>在分析之前我会先带着你看看 MySQL 的基础架构，知道了 MySQL 由那些组件组成以及这些组件的作用是什么，可以帮助我们理解和解决这些问题。</p><h2 id="一-mysql-基础架构分析" tabindex="-1"><a class="header-anchor" href="#一-mysql-基础架构分析" aria-hidden="true">#</a> 一 MySQL 基础架构分析</h2><h3 id="_1-1-mysql-基本架构概览" tabindex="-1"><a class="header-anchor" href="#_1-1-mysql-基本架构概览" aria-hidden="true">#</a> 1.1 MySQL 基本架构概览</h3><p>下图是 MySQL 的一个简要架构图，从下图你可以很清晰的看到用户的 SQL 语句在 MySQL 内部是如何执行的。</p><p>先简单介绍一下下图涉及的一些组件的基本作用帮助大家理解这幅图，在 1.2 节中会详细介绍到这些组件的作用。</p><ul><li><strong>连接器：</strong> 身份认证和权限相关(登录 MySQL 的时候)。</li><li><strong>查询缓存：</strong> 执行查询语句的时候，会先查询缓存（MySQL 8.0 版本后移除，因为这个功能不太实用）。</li><li><strong>分析器：</strong> 没有命中缓存的话，SQL 语句就会经过分析器，分析器说白了就是要先看你的 SQL 语句要干嘛，再检查你的 SQL 语句语法是否正确。</li><li><strong>优化器：</strong> 按照 MySQL 认为最优的方案去执行。</li><li><strong>执行器：</strong> 执行语句，然后从存储引擎返回数据。 -</li></ul><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/13526879-3037b144ed09eb88.png" alt=""></p><p>简单来说 MySQL 主要分为 Server 层和存储引擎层：</p><ul><li><strong>Server 层</strong>：主要包括连接器、查询缓存、分析器、优化器、执行器等，所有跨存储引擎的功能都在这一层实现，比如存储过程、触发器、视图，函数等，还有一个通用的日志模块 binlog 日志模块。</li><li><strong>存储引擎</strong>： 主要负责数据的存储和读取，采用可以替换的插件式架构，支持 InnoDB、MyISAM、Memory 等多个存储引擎，其中 InnoDB 引擎有自有的日志模块 redolog 模块。<strong>现在最常用的存储引擎是 InnoDB，它从 MySQL 5.5 版本开始就被当做默认存储引擎了。</strong></li></ul><h3 id="_1-2-server-层基本组件介绍" tabindex="-1"><a class="header-anchor" href="#_1-2-server-层基本组件介绍" aria-hidden="true">#</a> 1.2 Server 层基本组件介绍</h3><h4 id="_1-连接器" tabindex="-1"><a class="header-anchor" href="#_1-连接器" aria-hidden="true">#</a> 1) 连接器</h4><p>连接器主要和身份认证和权限相关的功能相关，就好比一个级别很高的门卫一样。</p><p>主要负责用户登录数据库，进行用户的身份认证，包括校验账户密码，权限等操作，如果用户账户密码已通过，连接器会到权限表中查询该用户的所有权限，之后在这个连接里的权限逻辑判断都是会依赖此时读取到的权限数据，也就是说，后续只要这个连接不断开，即使管理员修改了该用户的权限，该用户也是不受影响的。</p><h4 id="_2-查询缓存-mysql-8-0-版本后移除" tabindex="-1"><a class="header-anchor" href="#_2-查询缓存-mysql-8-0-版本后移除" aria-hidden="true">#</a> 2) 查询缓存(MySQL 8.0 版本后移除)</h4><p>查询缓存主要用来缓存我们所执行的 SELECT 语句以及该语句的结果集。</p><p>连接建立后，执行查询语句的时候，会先查询缓存，MySQL 会先校验这个 SQL 是否执行过，以 Key-Value 的形式缓存在内存中，Key 是查询预计，Value 是结果集。如果缓存 key 被命中，就会直接返回给客户端，如果没有命中，就会执行后续的操作，完成后也会把结果缓存起来，方便下一次调用。当然在真正执行缓存查询的时候还是会校验用户的权限，是否有该表的查询条件。</p><p>MySQL 查询不建议使用缓存，因为查询缓存失效在实际业务场景中可能会非常频繁，假如你对一个表更新的话，这个表上的所有的查询缓存都会被清空。对于不经常更新的数据来说，使用缓存还是可以的。</p><p>所以，一般在大多数情况下我们都是不推荐去使用查询缓存的。</p><p>MySQL 8.0 版本后删除了缓存的功能，官方也是认为该功能在实际的应用场景比较少，所以干脆直接删掉了。</p><h4 id="_3-分析器" tabindex="-1"><a class="header-anchor" href="#_3-分析器" aria-hidden="true">#</a> 3) 分析器</h4><p>MySQL 没有命中缓存，那么就会进入分析器，分析器主要是用来分析 SQL 语句是来干嘛的，分析器也会分为几步：</p><p><strong>第一步，词法分析</strong>，一条 SQL 语句有多个字符串组成，首先要提取关键字，比如 select，提出查询的表，提出字段名，提出查询条件等等。做完这些操作后，就会进入第二步。</p><p><strong>第二步，语法分析</strong>，主要就是判断你输入的 SQL 是否正确，是否符合 MySQL 的语法。</p><p>完成这 2 步之后，MySQL 就准备开始执行了，但是如何执行，怎么执行是最好的结果呢？这个时候就需要优化器上场了。</p><h4 id="_4-优化器" tabindex="-1"><a class="header-anchor" href="#_4-优化器" aria-hidden="true">#</a> 4) 优化器</h4><p>优化器的作用就是它认为的最优的执行方案去执行（有时候可能也不是最优，这篇文章涉及对这部分知识的深入讲解），比如多个索引的时候该如何选择索引，多表查询的时候如何选择关联顺序等。</p><p>可以说，经过了优化器之后可以说这个语句具体该如何执行就已经定下来。</p><h4 id="_5-执行器" tabindex="-1"><a class="header-anchor" href="#_5-执行器" aria-hidden="true">#</a> 5) 执行器</h4><p>当选择了执行方案后，MySQL 就准备开始执行了，首先执行前会校验该用户有没有权限，如果没有权限，就会返回错误信息，如果有权限，就会去调用引擎的接口，返回接口执行的结果。</p><h2 id="二-语句分析" tabindex="-1"><a class="header-anchor" href="#二-语句分析" aria-hidden="true">#</a> 二 语句分析</h2><h3 id="_2-1-查询语句" tabindex="-1"><a class="header-anchor" href="#_2-1-查询语句" aria-hidden="true">#</a> 2.1 查询语句</h3><p>说了以上这么多，那么究竟一条 SQL 语句是如何执行的呢？其实我们的 SQL 可以分为两种，一种是查询，一种是更新（增加，修改，删除）。我们先分析下查询语句，语句如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tb_student  A <span class="token keyword">where</span> A<span class="token punctuation">.</span>age<span class="token operator">=</span><span class="token string">&#39;18&#39;</span> <span class="token operator">and</span> A<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string">&#39; 张三 &#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结合上面的说明，我们分析下这个语句的执行流程：</p><ul><li><p>先检查该语句是否有权限，如果没有权限，直接返回错误信息，如果有权限，在 MySQL8.0 版本以前，会先查询缓存，以这条 SQL 语句为 key 在内存中查询是否有结果，如果有直接缓存，如果没有，执行下一步。</p></li><li><p>通过分析器进行词法分析，提取 SQL 语句的关键元素，比如提取上面这个语句是查询 select，提取需要查询的表名为 tb_student，需要查询所有的列，查询条件是这个表的 id=&#39;1&#39;。然后判断这个 SQL 语句是否有语法错误，比如关键词是否正确等等，如果检查没问题就执行下一步。</p></li><li><p>接下来就是优化器进行确定执行方案，上面的 SQL 语句，可以有两种执行方案：</p><pre><code>  a.先查询学生表中姓名为“张三”的学生，然后判断是否年龄是 18。
  b.先找出学生中年龄 18 岁的学生，然后再查询姓名为“张三”的学生。
</code></pre><p>那么优化器根据自己的优化算法进行选择执行效率最好的一个方案（优化器认为，有时候不一定最好）。那么确认了执行计划后就准备开始执行了。</p></li><li><p>进行权限校验，如果没有权限就会返回错误信息，如果有权限就会调用数据库引擎接口，返回引擎的执行结果。</p></li></ul><h3 id="_2-2-更新语句" tabindex="-1"><a class="header-anchor" href="#_2-2-更新语句" aria-hidden="true">#</a> 2.2 更新语句</h3><p>以上就是一条查询 SQL 的执行流程，那么接下来我们看看一条更新语句如何执行的呢？SQL 语句如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>update tb_student A set A.age=&#39;19&#39; where A.name=&#39; 张三 &#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们来给张三修改下年龄，在实际数据库肯定不会设置年龄这个字段的，不然要被技术负责人打的。其实这条语句也基本上会沿着上一个查询的流程走，只不过执行更新的时候肯定要记录日志啦，这就会引入日志模块了，MySQL 自带的日志模块是 <strong>binlog（归档日志）</strong> ，所有的存储引擎都可以使用，我们常用的 InnoDB 引擎还自带了一个日志模块 <strong>redo log（重做日志）</strong>，我们就以 InnoDB 模式下来探讨这个语句的执行流程。流程如下：</p><ul><li>先查询到张三这一条数据，如果有缓存，也是会用到缓存。</li><li>然后拿到查询的语句，把 age 改为 19，然后调用引擎 API 接口，写入这一行数据，InnoDB 引擎把数据保存在内存中，同时记录 redo log，此时 redo log 进入 prepare 状态，然后告诉执行器，执行完成了，随时可以提交。</li><li>执行器收到通知后记录 binlog，然后调用引擎接口，提交 redo log 为提交状态。</li><li>更新完成。</li></ul><p><strong>这里肯定有同学会问，为什么要用两个日志模块，用一个日志模块不行吗?</strong></p><p>这是因为最开始 MySQL 并没有 InnoDB 引擎（InnoDB 引擎是其他公司以插件形式插入 MySQL 的），MySQL 自带的引擎是 MyISAM，但是我们知道 redo log 是 InnoDB 引擎特有的，其他存储引擎都没有，这就导致会没有 crash-safe 的能力(crash-safe 的能力即使数据库发生异常重启，之前提交的记录都不会丢失)，binlog 日志只能用来归档。</p><p>并不是说只用一个日志模块不可以，只是 InnoDB 引擎就是通过 redo log 来支持事务的。那么，又会有同学问，我用两个日志模块，但是不要这么复杂行不行，为什么 redo log 要引入 prepare 预提交状态？这里我们用反证法来说明下为什么要这么做？</p><ul><li><strong>先写 redo log 直接提交，然后写 binlog</strong>，假设写完 redo log 后，机器挂了，binlog 日志没有被写入，那么机器重启后，这台机器会通过 redo log 恢复数据，但是这个时候 binlog 并没有记录该数据，后续进行机器备份的时候，就会丢失这一条数据，同时主从同步也会丢失这一条数据。</li><li><strong>先写 binlog，然后写 redo log</strong>，假设写完了 binlog，机器异常重启了，由于没有 redo log，本机是无法恢复这一条记录的，但是 binlog 又有记录，那么和上面同样的道理，就会产生数据不一致的情况。</li></ul><p>如果采用 redo log 两阶段提交的方式就不一样了，写完 binlog 后，然后再提交 redo log 就会防止出现上述的问题，从而保证了数据的一致性。那么问题来了，有没有一个极端的情况呢？假设 redo log 处于预提交状态，binlog 也已经写完了，这个时候发生了异常重启会怎么样呢？ 这个就要依赖于 MySQL 的处理机制了，MySQL 的处理过程如下：</p><ul><li>判断 redo log 是否完整，如果判断是完整的，就立即提交。</li><li>如果 redo log 只是预提交但不是 commit 状态，这个时候就会去判断 binlog 是否完整，如果完整就提交 redo log, 不完整就回滚事务。</li></ul><p>这样就解决了数据一致性的问题。</p><h2 id="三-总结" tabindex="-1"><a class="header-anchor" href="#三-总结" aria-hidden="true">#</a> 三 总结</h2><ul><li>MySQL 主要分为 Server 层和引擎层，Server 层主要包括连接器、查询缓存、分析器、优化器、执行器，同时还有一个日志模块（binlog），这个日志模块所有执行引擎都可以共用，redolog 只有 InnoDB 有。</li><li>引擎层是插件式的，目前主要包括，MyISAM,InnoDB,Memory 等。</li><li>查询语句的执行流程如下：权限校验（如果命中缓存）---&gt;查询缓存---&gt;分析器---&gt;优化器---&gt;权限校验---&gt;执行器---&gt;引擎</li><li>更新语句执行流程如下：分析器----&gt;权限校验----&gt;执行器---&gt;引擎---redo log(prepare 状态)---&gt;binlog---&gt;redo log(commit状态)</li></ul><h2 id="四-参考" tabindex="-1"><a class="header-anchor" href="#四-参考" aria-hidden="true">#</a> 四 参考</h2>`,51),g=e("li",null,"《MySQL 实战45讲》",-1),c={href:"https://dev.MySQL.com/doc/refman/5.6/en/",target:"_blank",rel:"noopener noreferrer"};function u(S,L){const a=i("ExternalLinkIcon");return l(),s("div",null,[e("blockquote",null,[e("p",null,[n("本文来自"),e("a",p,[n("木木匠"),r(a)]),n("投稿。")])]),h,e("ul",null,[g,e("li",null,[n("MySQL 5.6参考手册:"),e("a",c,[n("https://dev.MySQL.com/doc/refman/5.6/en/"),r(a)])])])])}const Q=o(d,[["render",u],["__file","how-sql-executed-in-mysql.html.vue"]]);export{Q as default};
