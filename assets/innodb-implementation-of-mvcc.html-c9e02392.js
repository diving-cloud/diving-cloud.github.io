import{_ as i,X as t,Y as s,Z as e,$ as o,a0 as c,a2 as n,C as a}from"./framework-9b4b2ab3.js";const l="/assets/trans_visible-048192c5.png",r="/assets/317e91e1-1ee1-42ad-9412-9098d5c6a9ad-dc43aed3.png",_="/assets/c52ff79f-10e6-46cb-b5d4-3c9cbcc1934a-b60a6e78.png",p="/assets/6a276e7a-b0da-4c7b-bdf7-c0c7b7b3b31c-2e496ea1.png",m="/assets/8778836b-34a8-480b-b8c7-654fe207a8c2-3d84010e.png",u="/assets/6fb2b9a1-5f14-4dec-a797-e4cf388ed413-ea9e47d7.png",h="/assets/a3fd1ec6-8f37-42fa-b090-7446d488fd04-bf41f07c.png",g="/assets/528559e9-dae8-4d14-b78d-a5b657c88391-2ff79120.png",R="/assets/6f82703c-36a1-4458-90fe-d7f4edbac71a-c8de5ed7.png",D="/assets/0e906b95-c916-4f30-beda-9cb3e49746bf-3a363d10.png",b="/assets/79ed6142-7664-4e0b-9023-cf546586aa39-9c5cd303.png",f="/assets/cbbedbc5-0e3c-4711-aafd-7f3d68a4ed4e-7b4a86c0.png",v={},I=e("h2",{id:"一致性非锁定读和锁定读",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一致性非锁定读和锁定读","aria-hidden":"true"},"#"),o(" 一致性非锁定读和锁定读")],-1),B=e("h3",{id:"一致性非锁定读",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一致性非锁定读","aria-hidden":"true"},"#"),o(" 一致性非锁定读")],-1),k={href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-consistent-read.html",target:"_blank",rel:"noopener noreferrer"},V=e("strong",null,"一致性非锁定读（Consistent Nonlocking Reads）",-1),w=e("code",null,"InnoDB",-1),C={href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-multi-versioning.html",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"DELETE",-1),x=e("code",null,"UPDATE",-1),X=e("code",null,"InnoDB",-1),L=n('<p>在 <code>Repeatable Read</code> 和 <code>Read Committed</code> 两个隔离级别下，如果是执行普通的 <code>select</code> 语句（不包括 <code>select ... lock in share mode</code> ,<code>select ... for update</code>）则会使用 <code>一致性非锁定读（MVCC）</code>。并且在 <code>Repeatable Read</code> 下 <code>MVCC</code> 实现了可重复读和防止部分幻读</p><h3 id="锁定读" tabindex="-1"><a class="header-anchor" href="#锁定读" aria-hidden="true">#</a> 锁定读</h3>',2),E={href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-locking-reads.html",target:"_blank",rel:"noopener noreferrer"},M=e("strong",null,"锁定读（Locking Reads）",-1),y=n('<ul><li><code>select ... lock in share mode</code></li><li><code>select ... for update</code></li><li><code>insert</code>、<code>update</code>、<code>delete</code> 操作</li></ul><p>在锁定读下，读取的是数据的最新版本，这种读也被称为 <code>当前读（current read）</code>。锁定读会对读取到的记录加锁：</p><ul><li><p><code>select ... lock in share mode</code>：对记录加 <code>S</code> 锁，其它事务也可以加<code>S</code>锁，如果加 <code>x</code> 锁则会被阻塞</p></li><li><p><code>select ... for update</code>、<code>insert</code>、<code>update</code>、<code>delete</code>：对记录加 <code>X</code> 锁，且其它事务不能加任何锁</p></li></ul><p>在一致性非锁定读下，即使读取的记录已被其它事务加上 <code>X</code> 锁，这时记录也是可以被读取的，即读取的快照数据。上面说了，在 <code>Repeatable Read</code> 下 <code>MVCC</code> 防止了部分幻读，这边的 “部分” 是指在 <code>一致性非锁定读</code> 情况下，只能读取到第一次查询之前所插入的数据（根据 Read View 判断数据可见性，Read View 在第一次查询时生成）。但是！如果是 <code>当前读</code> ，每次读取的都是最新数据，这时如果两次查询中间有其它事务插入数据，就会产生幻读。所以， <strong><code>InnoDB</code> 在实现<code>Repeatable Read</code> 时，如果执行的是当前读，则会对读取的记录使用 <code>Next-key Lock</code> ，来防止其它事务在间隙间插入数据</strong></p><h2 id="innodb-对-mvcc-的实现" tabindex="-1"><a class="header-anchor" href="#innodb-对-mvcc-的实现" aria-hidden="true">#</a> InnoDB 对 MVCC 的实现</h2><p><code>MVCC</code> 的实现依赖于：<strong>隐藏字段、Read View、undo log</strong>。在内部实现中，<code>InnoDB</code> 通过数据行的 <code>DB_TRX_ID</code> 和 <code>Read View</code> 来判断数据的可见性，如不可见，则通过数据行的 <code>DB_ROLL_PTR</code> 找到 <code>undo log</code> 中的历史版本。每个事务读到的数据版本可能是不一样的，在同一个事务中，用户只能看到该事务创建 <code>Read View</code> 之前已经提交的修改和该事务本身做的修改</p><h3 id="隐藏字段" tabindex="-1"><a class="header-anchor" href="#隐藏字段" aria-hidden="true">#</a> 隐藏字段</h3>',7),A=e("code",null,"InnoDB",-1),q={href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-multi-versioning.html",target:"_blank",rel:"noopener noreferrer"},N=n(`<ul><li><code>DB_TRX_ID（6字节）</code>：表示最后一次插入或更新该行的事务 id。此外，<code>delete</code> 操作在内部被视为更新，只不过会在记录头 <code>Record header</code> 中的 <code>deleted_flag</code> 字段将其标记为已删除</li><li><code>DB_ROLL_PTR（7字节）</code> 回滚指针，指向该行的 <code>undo log</code> 。如果该行未被更新，则为空</li><li><code>DB_ROW_ID（6字节）</code>：如果没有设置主键且该表没有唯一非空索引时，<code>InnoDB</code> 会使用该 id 来生成聚簇索引</li></ul><h3 id="readview" tabindex="-1"><a class="header-anchor" href="#readview" aria-hidden="true">#</a> ReadView</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>class ReadView <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
private<span class="token operator">:</span>
  <span class="token class-name">trx_id_t</span> m_low_limit_id<span class="token punctuation">;</span>      <span class="token comment">/* 大于等于这个 ID 的事务均不可见 */</span>

  <span class="token class-name">trx_id_t</span> m_up_limit_id<span class="token punctuation">;</span>       <span class="token comment">/* 小于这个 ID 的事务均可见 */</span>

  <span class="token class-name">trx_id_t</span> m_creator_trx_id<span class="token punctuation">;</span>    <span class="token comment">/* 创建该 Read View 的事务ID */</span>

  <span class="token class-name">trx_id_t</span> m_low_limit_no<span class="token punctuation">;</span>      <span class="token comment">/* 事务 Number, 小于该 Number 的 Undo Logs 均可以被 Purge */</span>

  <span class="token class-name">ids_t</span> m_ids<span class="token punctuation">;</span>                  <span class="token comment">/* 创建 Read View 时的活跃事务列表 */</span>

  m_closed<span class="token punctuation">;</span>                     <span class="token comment">/* 标记 Read View 是否 close */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),O={href:"https://github.com/facebook/mysql-8.0/blob/8.0/storage/innobase/include/read0types.h#L298",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"Read View",-1),S=n("<p>主要有以下字段：</p><ul><li><code>m_low_limit_id</code>：目前出现过的最大的事务 ID+1，即下一个将被分配的事务 ID。大于等于这个 ID 的数据版本均不可见</li><li><code>m_up_limit_id</code>：活跃事务列表 <code>m_ids</code> 中最小的事务 ID，如果 <code>m_ids</code> 为空，则 <code>m_up_limit_id</code> 为 <code>m_low_limit_id</code>。小于这个 ID 的数据版本均可见</li><li><code>m_ids</code>：<code>Read View</code> 创建时其他未提交的活跃事务 ID 列表。创建 <code>Read View</code>时，将当前未提交事务 ID 记录下来，后续即使它们修改了记录行的值，对于当前事务也是不可见的。<code>m_ids</code> 不包括当前事务自己和已提交的事务（正在内存中）</li><li><code>m_creator_trx_id</code>：创建该 <code>Read View</code> 的事务 ID</li></ul>",2),Q=e("strong",null,"事务可见性示意图",-1),U={href:"https://leviathan.vip/2019/03/20/InnoDB%E7%9A%84%E4%BA%8B%E5%8A%A1%E5%88%86%E6%9E%90-MVCC/#MVCC-1",target:"_blank",rel:"noopener noreferrer"},W=n('<p><img src="'+l+'" alt="trans_visible"></p><h3 id="undo-log" tabindex="-1"><a class="header-anchor" href="#undo-log" aria-hidden="true">#</a> undo-log</h3><p><code>undo log</code> 主要有两个作用：</p><ul><li>当事务回滚时用于将数据恢复到修改前的样子</li><li>另一个作用是 <code>MVCC</code> ，当读取记录时，若该记录被其他事务占用或当前版本对该事务不可见，则可以通过 <code>undo log</code> 读取之前的版本数据，以此实现非锁定读</li></ul><p><strong>在 <code>InnoDB</code> 存储引擎中 <code>undo log</code> 分为两种： <code>insert undo log</code> 和 <code>update undo log</code>：</strong></p><ol><li><strong><code>insert undo log</code></strong> ：指在 <code>insert</code> 操作中产生的 <code>undo log</code>。因为 <code>insert</code> 操作的记录只对事务本身可见，对其他事务不可见，故该 <code>undo log</code> 可以在事务提交后直接删除。不需要进行 <code>purge</code> 操作</li></ol><p><strong><code>insert</code> 时的数据初始状态：</strong></p><p><img src="'+r+'" alt=""></p><ol start="2"><li><strong><code>update undo log</code></strong> ：<code>update</code> 或 <code>delete</code> 操作中产生的 <code>undo log</code>。该 <code>undo log</code>可能需要提供 <code>MVCC</code> 机制，因此不能在事务提交时就进行删除。提交时放入 <code>undo log</code> 链表，等待 <code>purge线程</code> 进行最后的删除</li></ol><p><strong>数据第一次被修改时：</strong></p><p><img src="'+_+'" alt=""></p><p><strong>数据第二次被修改时：</strong></p><p><img src="'+p+'" alt=""></p><p>不同事务或者相同事务的对同一记录行的修改，会使该记录行的 <code>undo log</code> 成为一条链表，链首就是最新的记录，链尾就是最早的旧记录。</p><h3 id="数据可见性算法" tabindex="-1"><a class="header-anchor" href="#数据可见性算法" aria-hidden="true">#</a> 数据可见性算法</h3><p>在 <code>InnoDB</code> 存储引擎中，创建一个新事务后，执行每个 <code>select</code> 语句前，都会创建一个快照（Read View），<strong>快照中保存了当前数据库系统中正处于活跃（没有 commit）的事务的 ID 号</strong>。其实简单的说保存的是系统中当前不应该被本事务看到的其他事务 ID 列表（即 m_ids）。当用户在这个事务中要读取某个记录行的时候，<code>InnoDB</code> 会将该记录行的 <code>DB_TRX_ID</code> 与 <code>Read View</code> 中的一些变量及当前事务 ID 进行比较，判断是否满足可见性条件</p>',16),Y={href:"https://github.com/facebook/mysql-8.0/blob/8.0/storage/innobase/include/read0types.h#L161",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leviathan.vip/2019/03/20/InnoDB%E7%9A%84%E4%BA%8B%E5%8A%A1%E5%88%86%E6%9E%90-MVCC/#MVCC-1",target:"_blank",rel:"noopener noreferrer"},$=n('<p><img src="'+m+'" alt=""></p><ol><li><p>如果记录 DB_TRX_ID &lt; m_up_limit_id，那么表明最新修改该行的事务（DB_TRX_ID）在当前事务创建快照之前就提交了，所以该记录行的值对当前事务是可见的</p></li><li><p>如果 DB_TRX_ID &gt;= m_low_limit_id，那么表明最新修改该行的事务（DB_TRX_ID）在当前事务创建快照之后才修改该行，所以该记录行的值对当前事务不可见。跳到步骤 5</p></li><li><p>m_ids 为空，则表明在当前事务创建快照之前，修改该行的事务就已经提交了，所以该记录行的值对当前事务是可见的</p></li><li><p>如果 m_up_limit_id &lt;= DB_TRX_ID &lt; m_low_limit_id，表明最新修改该行的事务（DB_TRX_ID）在当前事务创建快照的时候可能处于“活动状态”或者“已提交状态”；所以就要对活跃事务列表 m_ids 进行查找（源码中是用的二分查找，因为是有序的）</p><ul><li><p>如果在活跃事务列表 m_ids 中能找到 DB_TRX_ID，表明：① 在当前事务创建快照前，该记录行的值被事务 ID 为 DB_TRX_ID 的事务修改了，但没有提交；或者 ② 在当前事务创建快照后，该记录行的值被事务 ID 为 DB_TRX_ID 的事务修改了。这些情况下，这个记录行的值对当前事务都是不可见的。跳到步骤 5</p></li><li><p>在活跃事务列表中找不到，则表明“id 为 trx_id 的事务”在修改“该记录行的值”后，在“当前事务”创建快照前就已经提交了，所以记录行对当前事务可见</p></li></ul></li><li><p>在该记录行的 DB_ROLL_PTR 指针所指向的 <code>undo log</code> 取出快照记录，用快照记录的 DB_TRX_ID 跳到步骤 1 重新开始判断，直到找到满足的快照版本或返回空</p></li></ol><h2 id="rc-和-rr-隔离级别下-mvcc-的差异" tabindex="-1"><a class="header-anchor" href="#rc-和-rr-隔离级别下-mvcc-的差异" aria-hidden="true">#</a> RC 和 RR 隔离级别下 MVCC 的差异</h2><p>在事务隔离级别 <code>RC</code> 和 <code>RR</code> （InnoDB 存储引擎的默认事务隔离级别）下，<code>InnoDB</code> 存储引擎使用 <code>MVCC</code>（非锁定一致性读），但它们生成 <code>Read View</code> 的时机却不同</p><ul><li>在 RC 隔离级别下的 <strong><code>每次select</code></strong> 查询前都生成一个<code>Read View</code> (m_ids 列表)</li><li>在 RR 隔离级别下只在事务开始后 <strong><code>第一次select</code></strong> 数据前生成一个<code>Read View</code>（m_ids 列表）</li></ul><h2 id="mvcc-解决不可重复读问题" tabindex="-1"><a class="header-anchor" href="#mvcc-解决不可重复读问题" aria-hidden="true">#</a> MVCC 解决不可重复读问题</h2><p>虽然 RC 和 RR 都通过 <code>MVCC</code> 来读取快照数据，但由于 <strong>生成 Read View 时机不同</strong>，从而在 RR 级别下实现可重复读</p><p>举个例子：</p><p><img src="'+u+'" alt=""></p><h3 id="在-rc-下-readview-生成情况" tabindex="-1"><a class="header-anchor" href="#在-rc-下-readview-生成情况" aria-hidden="true">#</a> 在 RC 下 ReadView 生成情况</h3><p><strong>1. 假设时间线来到 T4 ，那么此时数据行 id = 1 的版本链为：</strong></p><p><img src="'+h+'" alt=""></p><p>由于 RC 级别下每次查询都会生成<code>Read View</code> ，并且事务 101、102 并未提交，此时 <code>103</code> 事务生成的 <code>Read View</code> 中活跃的事务 <strong><code>m_ids</code> 为：[101,102]</strong> ，<code>m_low_limit_id</code>为：104，<code>m_up_limit_id</code>为：101，<code>m_creator_trx_id</code> 为：103</p><ul><li>此时最新记录的 <code>DB_TRX_ID</code> 为 101，m_up_limit_id &lt;= 101 &lt; m_low_limit_id，所以要在 <code>m_ids</code> 列表中查找，发现 <code>DB_TRX_ID</code> 存在列表中，那么这个记录不可见</li><li>根据 <code>DB_ROLL_PTR</code> 找到 <code>undo log</code> 中的上一版本记录，上一条记录的 <code>DB_TRX_ID</code> 还是 101，不可见</li><li>继续找上一条 <code>DB_TRX_ID</code>为 1，满足 1 &lt; m_up_limit_id，可见，所以事务 103 查询到数据为 <code>name = 菜花</code></li></ul><p><strong>2. 时间线来到 T6 ，数据的版本链为：</strong></p><p><img src="'+g+'" alt=""></p><p>因为在 RC 级别下，重新生成 <code>Read View</code>，这时事务 101 已经提交，102 并未提交，所以此时 <code>Read View</code> 中活跃的事务 <strong><code>m_ids</code>：[102]</strong> ，<code>m_low_limit_id</code>为：104，<code>m_up_limit_id</code>为：102，<code>m_creator_trx_id</code>为：103</p><ul><li><p>此时最新记录的 <code>DB_TRX_ID</code> 为 102，m_up_limit_id &lt;= 102 &lt; m_low_limit_id，所以要在 <code>m_ids</code> 列表中查找，发现 <code>DB_TRX_ID</code> 存在列表中，那么这个记录不可见</p></li><li><p>根据 <code>DB_ROLL_PTR</code> 找到 <code>undo log</code> 中的上一版本记录，上一条记录的 <code>DB_TRX_ID</code> 为 101，满足 101 &lt; m_up_limit_id，记录可见，所以在 <code>T6</code> 时间点查询到数据为 <code>name = 李四</code>，与时间 T4 查询到的结果不一致，不可重复读！</p></li></ul><p><strong>3. 时间线来到 T9 ，数据的版本链为：</strong></p><p><img src="'+R+'" alt=""></p><p>重新生成 <code>Read View</code>， 这时事务 101 和 102 都已经提交，所以 <strong>m_ids</strong> 为空，则 m_up_limit_id = m_low_limit_id = 104，最新版本事务 ID 为 102，满足 102 &lt; m_low_limit_id，可见，查询结果为 <code>name = 赵六</code></p><blockquote><p><strong>总结：</strong> <strong>在 RC 隔离级别下，事务在每次查询开始时都会生成并设置新的 Read View，所以导致不可重复读</strong></p></blockquote><h3 id="在-rr-下-readview-生成情况" tabindex="-1"><a class="header-anchor" href="#在-rr-下-readview-生成情况" aria-hidden="true">#</a> 在 RR 下 ReadView 生成情况</h3><p>在可重复读级别下，只会在事务开始后第一次读取数据时生成一个 Read View（m_ids 列表）</p><p><strong>1. 在 T4 情况下的版本链为：</strong></p><p><img src="'+D+'" alt=""></p><p>在当前执行 <code>select</code> 语句时生成一个 <code>Read View</code>，此时 <strong><code>m_ids</code>：[101,102]</strong> ，<code>m_low_limit_id</code>为：104，<code>m_up_limit_id</code>为：101，<code>m_creator_trx_id</code> 为：103</p><p>此时和 RC 级别下一样：</p><ul><li>最新记录的 <code>DB_TRX_ID</code> 为 101，m_up_limit_id &lt;= 101 &lt; m_low_limit_id，所以要在 <code>m_ids</code> 列表中查找，发现 <code>DB_TRX_ID</code> 存在列表中，那么这个记录不可见</li><li>根据 <code>DB_ROLL_PTR</code> 找到 <code>undo log</code> 中的上一版本记录，上一条记录的 <code>DB_TRX_ID</code> 还是 101，不可见</li><li>继续找上一条 <code>DB_TRX_ID</code>为 1，满足 1 &lt; m_up_limit_id，可见，所以事务 103 查询到数据为 <code>name = 菜花</code></li></ul><p><strong>2. 时间点 T6 情况下：</strong></p><p><img src="'+b+'" alt=""></p><p>在 RR 级别下只会生成一次<code>Read View</code>，所以此时依然沿用 <strong><code>m_ids</code> ：[101,102]</strong> ，<code>m_low_limit_id</code>为：104，<code>m_up_limit_id</code>为：101，<code>m_creator_trx_id</code> 为：103</p><ul><li><p>最新记录的 <code>DB_TRX_ID</code> 为 102，m_up_limit_id &lt;= 102 &lt; m_low_limit_id，所以要在 <code>m_ids</code> 列表中查找，发现 <code>DB_TRX_ID</code> 存在列表中，那么这个记录不可见</p></li><li><p>根据 <code>DB_ROLL_PTR</code> 找到 <code>undo log</code> 中的上一版本记录，上一条记录的 <code>DB_TRX_ID</code> 为 101，不可见</p></li><li><p>继续根据 <code>DB_ROLL_PTR</code> 找到 <code>undo log</code> 中的上一版本记录，上一条记录的 <code>DB_TRX_ID</code> 还是 101，不可见</p></li><li><p>继续找上一条 <code>DB_TRX_ID</code>为 1，满足 1 &lt; m_up_limit_id，可见，所以事务 103 查询到数据为 <code>name = 菜花</code></p></li></ul><p><strong>3. 时间点 T9 情况下：</strong></p><p><img src="'+f+'" alt=""></p><p>此时情况跟 T6 完全一样，由于已经生成了 <code>Read View</code>，此时依然沿用 <strong><code>m_ids</code> ：[101,102]</strong> ，所以查询结果依然是 <code>name = 菜花</code></p><h2 id="mvcc➕next-key-lock-防止幻读" tabindex="-1"><a class="header-anchor" href="#mvcc➕next-key-lock-防止幻读" aria-hidden="true">#</a> MVCC➕Next-key-Lock 防止幻读</h2><p><code>InnoDB</code>存储引擎在 RR 级别下通过 <code>MVCC</code>和 <code>Next-key Lock</code> 来解决幻读问题：</p><p><strong>1、执行普通 <code>select</code>，此时会以 <code>MVCC</code> 快照读的方式读取数据</strong></p><p>在快照读的情况下，RR 隔离级别只会在事务开启后的第一次查询生成 <code>Read View</code> ，并使用至事务提交。所以在生成 <code>Read View</code> 之后其它事务所做的更新、插入记录版本对当前事务并不可见，实现了可重复读和防止快照读下的 “幻读”</p><p><strong>2、执行 select...for update/lock in share mode、insert、update、delete 等当前读</strong></p>',41),j=e("code",null,"InnoDB",-1),z={href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-locking.html#innodb-next-key-locks",target:"_blank",rel:"noopener noreferrer"},F=e("h2",{id:"参考",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),o(" 参考")],-1),G=e("li",null,[e("strong",null,"《MySQL 技术内幕 InnoDB 存储引擎第 2 版》")],-1),H={href:"https://tech.meituan.com/2014/08/20/innodb-lock.html",target:"_blank",rel:"noopener noreferrer"},J={href:"https://blog.csdn.net/qq_35190492/article/details/109044141",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leviathan.vip/2019/03/20/InnoDB%E7%9A%84%E4%BA%8B%E5%8A%A1%E5%88%86%E6%9E%90-MVCC/",target:"_blank",rel:"noopener noreferrer"};function ee(oe,de){const d=a("ExternalLinkIcon");return t(),s("div",null,[I,B,e("p",null,[o("对于 "),e("a",k,[V,o(),c(d)]),o("的实现，通常做法是加一个版本号或者时间戳字段，在更新数据的同时版本号 + 1 或者更新时间戳。查询时，将当前可见的版本号与对应记录的版本号进行比对，如果记录的版本小于可见版本，则表示该记录可见")]),e("p",null,[o("在 "),w,o(" 存储引擎中，"),e("a",C,[o("多版本控制 (multi versioning)"),c(d)]),o(" 就是对非锁定读的实现。如果读取的行正在执行 "),T,o(" 或 "),x,o(" 操作，这时读取操作不会去等待行上锁的释放。相反地，"),X,o(" 存储引擎会去读取行的一个快照数据，对于这种读取历史数据的方式，我们叫它快照读 (snapshot read)")]),L,e("p",null,[o("如果执行的是下列语句，就是 "),e("a",E,[M,c(d)])]),y,e("p",null,[o("在内部，"),A,o(" 存储引擎为每行数据添加了三个 "),e("a",q,[o("隐藏字段"),c(d)]),o("：")]),N,e("p",null,[e("a",O,[P,c(d)]),o(" 主要是用来做可见性判断，里面保存了 “当前对本事务不可见的其他活跃事务”")]),S,e("p",null,[Q,o("（"),e("a",U,[o("图源"),c(d)]),o("）：")]),W,e("p",null,[e("a",Y,[o("具体的比较算法"),c(d)]),o("如下("),e("a",Z,[o("图源"),c(d)]),o(")：")]),$,e("p",null,[o("在当前读下，读取的都是最新的数据，如果其它事务有插入新的记录，并且刚好在当前事务查询范围内，就会产生幻读！"),j,o(" 使用 "),e("a",z,[o("Next-key Lock"),c(d)]),o(" 来防止这种情况。当执行当前读时，会锁定读取到的记录的同时，锁定它们的间隙，防止其它事务在查询范围内插入数据。只要我不让你插入，就不会发生幻读")]),F,e("ul",null,[G,e("li",null,[e("a",H,[o("Innodb 中的事务隔离级别和锁的关系"),c(d)])]),e("li",null,[e("a",J,[o("MySQL 事务与 MVCC 如何实现的隔离级别"),c(d)])]),e("li",null,[e("a",K,[o("InnoDB 事务分析-MVCC"),c(d)])])])])}const ne=i(v,[["render",ee],["__file","innodb-implementation-of-mvcc.html.vue"]]);export{ne as default};
