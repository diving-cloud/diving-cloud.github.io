import{_ as l,X as r,Y as c,Z as e,$ as n,a0 as t,a1 as i,a2 as d,C as s}from"./framework-9b4b2ab3.js";const p={},h={href:"https://github.com/Snailclimb",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/guang19",target:"_blank",rel:"noopener noreferrer"},g=d(`<h2 id="事务隔离级别总结" tabindex="-1"><a class="header-anchor" href="#事务隔离级别总结" aria-hidden="true">#</a> 事务隔离级别总结</h2><p>SQL 标准定义了四个隔离级别：</p><ul><li><strong>READ-UNCOMMITTED(读取未提交)</strong> ： 最低的隔离级别，允许读取尚未提交的数据变更，可能会导致脏读、幻读或不可重复读。</li><li><strong>READ-COMMITTED(读取已提交)</strong> ： 允许读取并发事务已经提交的数据，可以阻止脏读，但是幻读或不可重复读仍有可能发生。</li><li><strong>REPEATABLE-READ(可重复读)</strong> ： 对同一字段的多次读取结果都是一致的，除非数据是被本身事务自己所修改，可以阻止脏读和不可重复读，但幻读仍有可能发生。</li><li><strong>SERIALIZABLE(可串行化)</strong> ： 最高的隔离级别，完全服从 ACID 的隔离级别。所有的事务依次逐个执行，这样事务之间就完全不可能产生干扰，也就是说，该级别可以防止脏读、不可重复读以及幻读。</li></ul><hr><table><thead><tr><th style="text-align:center;">隔离级别</th><th style="text-align:center;">脏读</th><th style="text-align:center;">不可重复读</th><th style="text-align:center;">幻读</th></tr></thead><tbody><tr><td style="text-align:center;">READ-UNCOMMITTED</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td></tr><tr><td style="text-align:center;">READ-COMMITTED</td><td style="text-align:center;">×</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td></tr><tr><td style="text-align:center;">REPEATABLE-READ</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td><td style="text-align:center;">√</td></tr><tr><td style="text-align:center;">SERIALIZABLE</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr></tbody></table><p>MySQL InnoDB 存储引擎的默认支持的隔离级别是 <strong>REPEATABLE-READ（可重读）</strong>。我们可以通过<code>SELECT @@tx_isolation;</code>命令来查看，MySQL 8.0 该命令改为<code>SELECT @@transaction_isolation;</code></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>MySQL<span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> @<span class="token variable">@tx_isolation</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-----------------+</span>
<span class="token operator">|</span> @<span class="token variable">@tx_isolation</span>  <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------+</span>
<span class="token operator">|</span> <span class="token keyword">REPEATABLE</span><span class="token operator">-</span><span class="token keyword">READ</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面对 SQL 标准定义了四个隔离级别的介绍可以看出，标准的 SQL 隔离级别定义里，REPEATABLE-READ(可重复读)是不可以防止幻读的。</p><p>但是！InnoDB 实现的 REPEATABLE-READ 隔离级别其实是可以解决幻读问题发生的，主要有下面两种情况：</p><ul><li><strong>快照读</strong> ：由 MVCC 机制来保证不出现幻读。</li><li><strong>当前读</strong> ： 使用 Next-Key Lock 进行加锁来保证不出现幻读，Next-Key Lock 是行锁（Record Lock）和间隙锁（Gap Lock）的结合，行锁只能锁住已经存在的行，为了避免插入新行，需要依赖间隙锁。</li></ul><p>因为隔离级别越低，事务请求的锁越少，所以大部分数据库系统的隔离级别都是 <strong>READ-COMMITTED</strong> ，但是你要知道的是 InnoDB 存储引擎默认使用 <strong>REPEATABLE-READ</strong> 并不会有任何性能损失。</p><p>InnoDB 存储引擎在分布式事务的情况下一般会用到 SERIALIZABLE 隔离级别。</p><p>《MySQL 技术内幕：InnoDB 存储引擎(第 2 版)》7.7 章这样写到：</p><blockquote><p>InnoDB 存储引擎提供了对 XA 事务的支持，并通过 XA 事务来支持分布式事务的实现。分布式事务指的是允许多个独立的事务资源（transactional resources）参与到一个全局的事务中。事务资源通常是关系型数据库系统，但也可以是其他类型的资源。全局事务要求在其中的所有参与的事务要么都提交，要么都回滚，这对于事务原有的 ACID 要求又有了提高。另外，在使用分布式事务时，InnoDB 存储引擎的事务隔离级别必须设置为 SERIALIZABLE。</p></blockquote><h2 id="实际情况演示" tabindex="-1"><a class="header-anchor" href="#实际情况演示" aria-hidden="true">#</a> 实际情况演示</h2><p>在下面我会使用 2 个命令行 MySQL ，模拟多线程（多事务）对同一份数据的脏读问题。</p><p>MySQL 命令行的默认配置中事务都是自动提交的，即执行 SQL 语句后就会马上执行 COMMIT 操作。如果要显式地开启一个事务需要使用命令：<code>START TRANSACTION</code>。</p><p>我们可以通过下面的命令来设置隔离级别。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token punctuation">[</span><span class="token keyword">SESSION</span><span class="token operator">|</span><span class="token keyword">GLOBAL</span><span class="token punctuation">]</span> <span class="token keyword">TRANSACTION</span> <span class="token keyword">ISOLATION</span> <span class="token keyword">LEVEL</span> <span class="token punctuation">[</span><span class="token keyword">READ</span> <span class="token keyword">UNCOMMITTED</span><span class="token operator">|</span><span class="token keyword">READ</span> <span class="token keyword">COMMITTED</span><span class="token operator">|</span><span class="token keyword">REPEATABLE</span> <span class="token keyword">READ</span><span class="token operator">|</span><span class="token keyword">SERIALIZABLE</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们再来看一下我们在下面实际操作中使用到的一些并发控制语句:</p><ul><li><code>START TRANSACTION</code> |<code>BEGIN</code>：显式地开启一个事务。</li><li><code>COMMIT</code>：提交事务，使得对数据库做的所有修改成为永久性。</li><li><code>ROLLBACK</code>：回滚会结束用户的事务，并撤销正在进行的所有未提交的修改。</li></ul><h3 id="脏读-读未提交" tabindex="-1"><a class="header-anchor" href="#脏读-读未提交" aria-hidden="true">#</a> 脏读(读未提交)</h3><p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-31-1脏读(读未提交)实例.jpg" alt=""></p><h3 id="避免脏读-读已提交" tabindex="-1"><a class="header-anchor" href="#避免脏读-读已提交" aria-hidden="true">#</a> 避免脏读(读已提交)</h3><p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-31-2读已提交实例.jpg" alt=""></p><h3 id="不可重复读" tabindex="-1"><a class="header-anchor" href="#不可重复读" aria-hidden="true">#</a> 不可重复读</h3><p>还是刚才上面的读已提交的图，虽然避免了读未提交，但是却出现了，一个事务还没有结束，就发生了 不可重复读问题。</p><p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-32-1不可重复读实例.jpg" alt=""></p><h3 id="可重复读" tabindex="-1"><a class="header-anchor" href="#可重复读" aria-hidden="true">#</a> 可重复读</h3><p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-33-2可重复读.jpg" alt=""></p><h3 id="幻读" tabindex="-1"><a class="header-anchor" href="#幻读" aria-hidden="true">#</a> 幻读</h3><h4 id="演示幻读出现的情况" tabindex="-1"><a class="header-anchor" href="#演示幻读出现的情况" aria-hidden="true">#</a> 演示幻读出现的情况</h4><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/database/phantom_read.png" alt=""></p><p>SQL 脚本 1 在第一次查询工资为 500 的记录时只有一条，SQL 脚本 2 插入了一条工资为 500 的记录，提交之后；SQL 脚本 1 在同一个事务中再次使用当前读查询发现出现了两条工资为 500 的记录这种就是幻读。</p><h4 id="解决幻读的方法" tabindex="-1"><a class="header-anchor" href="#解决幻读的方法" aria-hidden="true">#</a> 解决幻读的方法</h4><p>解决幻读的方式有很多，但是它们的核心思想就是一个事务在操作某张表数据的时候，另外一个事务不允许新增或者删除这张表中的数据了。解决幻读的方式主要有以下几种：</p><ol><li>将事务隔离级别调整为 <code>SERIALIZABLE</code> 。</li><li>在可重复读的事务级别下，给事务操作的这张表添加表锁。</li><li>在可重复读的事务级别下，给事务操作的这张表添加 <code>Next-key Lock（Record Lock+Gap Lock）</code>。</li></ol><h3 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h3>`,38),k=e("li",null,"《MySQL 技术内幕：InnoDB 存储引擎》",-1),E={href:"https://dev.MySQL.com/doc/refman/5.7/en/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://tech.youzan.com/seven-questions-about-the-lock-of-MySQL/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://tech.meituan.com/2014/08/20/innodb-lock.html",target:"_blank",rel:"noopener noreferrer"};function L(m,b){const a=s("ExternalLinkIcon"),o=s("RouterLink");return r(),c("div",null,[e("blockquote",null,[e("p",null,[n("本文由 "),e("a",h,[n("SnailClimb"),t(a)]),n(" 和 "),e("a",u,[n("guang19"),t(a)]),n(" 共同完成。")])]),e("p",null,[n("关于事务基本概览的介绍，请看这篇文章的介绍："),t(o,{to:"/database/mysql/mysql-questions-01.html#MySQL-%E4%BA%8B%E5%8A%A1"},{default:i(()=>[n("MySQL 常见知识点&面试题总结")]),_:1})]),g,e("ul",null,[k,e("li",null,[e("a",E,[n("https://dev.MySQL.com/doc/refman/5.7/en/"),t(a)])]),e("li",null,[e("a",y,[n("Mysql 锁：灵魂七拷问"),t(a)])]),e("li",null,[e("a",A,[n("Innodb 中的事务隔离级别和锁的关系"),t(a)])])])])}const I=l(p,[["render",L],["__file","transaction-isolation-level.html.vue"]]);export{I as default};
