import{_ as t,X as d,Y as o,Z as a,$ as e,a0 as n,a1 as h,a2 as i,C as r}from"./framework-9b4b2ab3.js";const p={},c={href:"https://www.cnblogs.com/huchong/p/10219318.html",target:"_blank",rel:"noopener noreferrer"},u=a("p",null,"JavaGuide 已获得作者授权，并对原文内容进行了完善。",-1),b=i('<h2 id="数据库命名规范" tabindex="-1"><a class="header-anchor" href="#数据库命名规范" aria-hidden="true">#</a> 数据库命名规范</h2><ul><li>所有数据库对象名称必须使用小写字母并用下划线分割</li><li>所有数据库对象名称禁止使用 MySQL 保留关键字（如果表名中包含关键字查询时，需要将其用单引号括起来）</li><li>数据库对象的命名要能做到见名识意，并且最后不要超过 32 个字符</li><li>临时库表必须以 <code>tmp_</code> 为前缀并以日期为后缀，备份表必须以 <code>bak_</code> 为前缀并以日期 (时间戳) 为后缀</li><li>所有存储相同数据的列名和列类型必须一致（一般作为关联列，如果查询时关联列类型不一致会自动进行数据类型隐式转换，会造成列上的索引失效，导致查询效率降低）</li></ul><h2 id="数据库基本设计规范" tabindex="-1"><a class="header-anchor" href="#数据库基本设计规范" aria-hidden="true">#</a> 数据库基本设计规范</h2><h3 id="所有表必须使用-innodb-存储引擎" tabindex="-1"><a class="header-anchor" href="#所有表必须使用-innodb-存储引擎" aria-hidden="true">#</a> 所有表必须使用 InnoDB 存储引擎</h3><p>没有特殊要求（即 InnoDB 无法满足的功能如：列存储，存储空间数据等）的情况下，所有表必须使用 InnoDB 存储引擎（MySQL5.5 之前默认使用 Myisam，5.6 以后默认的为 InnoDB）。</p><p>InnoDB 支持事务，支持行级锁，更好的恢复性，高并发下性能更好。</p><h3 id="数据库和表的字符集统一使用-utf8" tabindex="-1"><a class="header-anchor" href="#数据库和表的字符集统一使用-utf8" aria-hidden="true">#</a> 数据库和表的字符集统一使用 UTF8</h3><p>兼容性更好，统一字符集可以避免由于字符集转换产生的乱码，不同的字符集进行比较前需要进行转换会造成索引失效，如果数据库中有存储 emoji 表情的需要，字符集需要采用 utf8mb4 字符集。</p><p>参考文章：</p>',9),m={href:"https://blog.csdn.net/horses/article/details/107243447",target:"_blank",rel:"noopener noreferrer"},g={href:"https://javaguide.cn/database/character-set.html",target:"_blank",rel:"noopener noreferrer"},k=i(`<h3 id="所有表和字段都需要添加注释" tabindex="-1"><a class="header-anchor" href="#所有表和字段都需要添加注释" aria-hidden="true">#</a> 所有表和字段都需要添加注释</h3><p>使用 comment 从句添加表和列的备注，从一开始就进行数据字典的维护</p><h3 id="尽量控制单表数据量的大小-建议控制在-500-万以内" tabindex="-1"><a class="header-anchor" href="#尽量控制单表数据量的大小-建议控制在-500-万以内" aria-hidden="true">#</a> 尽量控制单表数据量的大小，建议控制在 500 万以内</h3><p>500 万并不是 MySQL 数据库的限制，过大会造成修改表结构，备份，恢复都会有很大的问题。</p><p>可以用历史数据归档（应用于日志数据），分库分表（应用于业务数据）等手段来控制数据量大小</p><h3 id="谨慎使用-mysql-分区表" tabindex="-1"><a class="header-anchor" href="#谨慎使用-mysql-分区表" aria-hidden="true">#</a> 谨慎使用 MySQL 分区表</h3><p>分区表在物理上表现为多个文件，在逻辑上表现为一个表；</p><p>谨慎选择分区键，跨分区查询效率可能更低；</p><p>建议采用物理分表的方式管理大数据。</p><h3 id="经常一起使用的列放到一个表中" tabindex="-1"><a class="header-anchor" href="#经常一起使用的列放到一个表中" aria-hidden="true">#</a> 经常一起使用的列放到一个表中</h3><p>避免更多的关联操作。</p><h3 id="禁止在表中建立预留字段" tabindex="-1"><a class="header-anchor" href="#禁止在表中建立预留字段" aria-hidden="true">#</a> 禁止在表中建立预留字段</h3><ul><li>预留字段的命名很难做到见名识义。</li><li>预留字段无法确认存储的数据类型，所以无法选择合适的类型。</li><li>对预留字段类型的修改，会对表进行锁定。</li></ul><h3 id="禁止在数据库中存储文件-比如图片-这类大的二进制数据" tabindex="-1"><a class="header-anchor" href="#禁止在数据库中存储文件-比如图片-这类大的二进制数据" aria-hidden="true">#</a> 禁止在数据库中存储文件（比如图片）这类大的二进制数据</h3><p>在数据库中存储文件会严重影响数据库性能，消耗过多存储空间。</p><p>文件（比如图片）这类大的二进制数据通常存储于文件服务器，数据库只存储文件地址信息。</p><h3 id="不要被数据库范式所束缚" tabindex="-1"><a class="header-anchor" href="#不要被数据库范式所束缚" aria-hidden="true">#</a> 不要被数据库范式所束缚</h3><p>一般来说，设计关系数据库时需要满足第三范式，但为了满足第三范式，我们可能会拆分出多张表。而在进行查询时需要对多张表进行关联查询，有时为了提高查询效率，会降低范式的要求，在表中保存一定的冗余信息，也叫做反范式。但要注意反范式一定要适度。</p><h3 id="禁止在线上做数据库压力测试" tabindex="-1"><a class="header-anchor" href="#禁止在线上做数据库压力测试" aria-hidden="true">#</a> 禁止在线上做数据库压力测试</h3><h3 id="禁止从开发环境-测试环境直接连接生产环境数据库" tabindex="-1"><a class="header-anchor" href="#禁止从开发环境-测试环境直接连接生产环境数据库" aria-hidden="true">#</a> 禁止从开发环境,测试环境直接连接生产环境数据库</h3><p>安全隐患极大，要对生产环境抱有敬畏之心！</p><h2 id="数据库字段设计规范" tabindex="-1"><a class="header-anchor" href="#数据库字段设计规范" aria-hidden="true">#</a> 数据库字段设计规范</h2><h3 id="优先选择符合存储需要的最小的数据类型" tabindex="-1"><a class="header-anchor" href="#优先选择符合存储需要的最小的数据类型" aria-hidden="true">#</a> 优先选择符合存储需要的最小的数据类型</h3><p>存储字节越小，占用也就空间越小，性能也越好。</p><p><strong>a.某些字符串可以转换成数字类型存储比如可以将 IP 地址转换成整型数据。</strong></p><p>数字是连续的，性能更好，占用空间也更小。</p><p>MySQL 提供了两个方法来处理 ip 地址</p><ul><li><code>INET_ATON()</code> ： 把 ip 转为无符号整型 (4-8 位)</li><li><code>INET_NTOA()</code> :把整型的 ip 转为地址</li></ul><p>插入数据前，先用 <code>INET_ATON()</code> 把 ip 地址转为整型，显示数据时，使用 <code>INET_NTOA()</code> 把整型的 ip 地址转为地址显示即可。</p><p><strong>b.对于非负型的数据 (如自增 ID,整型 IP，年龄) 来说,要优先使用无符号整型来存储。</strong></p><p>无符号相对于有符号可以多出一倍的存储空间</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>SIGNED <span class="token keyword">INT</span> <span class="token operator">-</span><span class="token number">2147483648</span><span class="token operator">~</span><span class="token number">2147483647</span>
<span class="token keyword">UNSIGNED</span> <span class="token keyword">INT</span> <span class="token number">0</span><span class="token operator">~</span><span class="token number">4294967295</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>c.小数值类型（比如年龄、状态表示如 0/1）优先使用 TINYINT 类型。</strong></p><h3 id="避免使用-text-blob-数据类型-最常见的-text-类型可以存储-64k-的数据" tabindex="-1"><a class="header-anchor" href="#避免使用-text-blob-数据类型-最常见的-text-类型可以存储-64k-的数据" aria-hidden="true">#</a> 避免使用 TEXT,BLOB 数据类型，最常见的 TEXT 类型可以存储 64k 的数据</h3><p><strong>a. 建议把 BLOB 或是 TEXT 列分离到单独的扩展表中。</strong></p><p>MySQL 内存临时表不支持 TEXT、BLOB 这样的大数据类型，如果查询中包含这样的数据，在排序等操作时，就不能使用内存临时表，必须使用磁盘临时表进行。而且对于这种数据，MySQL 还是要进行二次查询，会使 sql 性能变得很差，但是不是说一定不能使用这样的数据类型。</p><p>如果一定要使用，建议把 BLOB 或是 TEXT 列分离到单独的扩展表中，查询时一定不要使用 <code>select *</code>而只需要取出必要的列，不需要 TEXT 列的数据时不要对该列进行查询。</p><p><strong>2、TEXT 或 BLOB 类型只能使用前缀索引</strong></p><p>因为 MySQL 对索引字段长度是有限制的，所以 TEXT 类型只能使用前缀索引，并且 TEXT 列上是不能有默认值的</p><h3 id="避免使用-enum-类型" tabindex="-1"><a class="header-anchor" href="#避免使用-enum-类型" aria-hidden="true">#</a> 避免使用 ENUM 类型</h3><ul><li>修改 ENUM 值需要使用 ALTER 语句；</li><li>ENUM 类型的 ORDER BY 操作效率低，需要额外操作；</li><li>ENUM 数据类型存在一些限制比如建议不要使用数值作为 ENUM 的枚举值。</li></ul>`,41),f={href:"https://www.zhihu.com/question/404422255/answer/1661698499",target:"_blank",rel:"noopener noreferrer"},x=a("h3",{id:"尽可能把所有列定义为-not-null",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#尽可能把所有列定义为-not-null","aria-hidden":"true"},"#"),e(" 尽可能把所有列定义为 NOT NULL")],-1),L=a("p",null,"除非有特别的原因使用 NULL 值，应该总是让字段保持 NOT NULL。",-1),T=a("ul",null,[a("li",null,"索引 NULL 列需要额外的空间来保存，所以要占用更多的空间；"),a("li",null,"进行比较和计算时要对 NULL 值做特别的处理。")],-1),E={href:"https://opensource.actionsky.com/20190710-mysql/",target:"_blank",rel:"noopener noreferrer"},_=i(`<h3 id="使用-timestamp-4-个字节-或-datetime-类型-8-个字节-存储时间" tabindex="-1"><a class="header-anchor" href="#使用-timestamp-4-个字节-或-datetime-类型-8-个字节-存储时间" aria-hidden="true">#</a> 使用 TIMESTAMP(4 个字节) 或 DATETIME 类型 (8 个字节) 存储时间</h3><p>TIMESTAMP 存储的时间范围 1970-01-01 00:00:01 ~ 2038-01-19-03:14:07</p><p>TIMESTAMP 占用 4 字节和 INT 相同，但比 INT 可读性高</p><p>超出 TIMESTAMP 取值范围的使用 DATETIME 类型存储</p><p><strong>经常会有人用字符串存储日期型的数据（不正确的做法）</strong></p><ul><li>缺点 1：无法用日期函数进行计算和比较</li><li>缺点 2：用字符串存储日期要占用更多的空间</li></ul><h3 id="同财务相关的金额类数据必须使用-decimal-类型" tabindex="-1"><a class="header-anchor" href="#同财务相关的金额类数据必须使用-decimal-类型" aria-hidden="true">#</a> 同财务相关的金额类数据必须使用 decimal 类型</h3><ul><li><strong>非精准浮点</strong> ：float,double</li><li><strong>精准浮点</strong> ：decimal</li></ul><p>decimal 类型为精准浮点数，在计算时不会丢失精度。占用空间由定义的宽度决定，每 4 个字节可以存储 9 位数字，并且小数点要占用一个字节。并且，decimal 可用于存储比 bigint 更大的整型数据</p><p>不过， 由于 decimal 需要额外的空间和计算开销，应该尽量只在需要对数据进行精确计算时才使用 decimal 。</p><h3 id="单表不要包含过多字段" tabindex="-1"><a class="header-anchor" href="#单表不要包含过多字段" aria-hidden="true">#</a> 单表不要包含过多字段</h3><p>如果一个表包含过多字段的话，可以考虑将其分解成多个表，必要时增加中间表进行关联。</p><h2 id="索引设计规范" tabindex="-1"><a class="header-anchor" href="#索引设计规范" aria-hidden="true">#</a> 索引设计规范</h2><h3 id="限制每张表上的索引数量-建议单张表索引不超过-5-个" tabindex="-1"><a class="header-anchor" href="#限制每张表上的索引数量-建议单张表索引不超过-5-个" aria-hidden="true">#</a> 限制每张表上的索引数量,建议单张表索引不超过 5 个</h3><p>索引并不是越多越好！索引可以提高效率同样可以降低效率。</p><p>索引可以增加查询效率，但同样也会降低插入和更新的效率，甚至有些情况下会降低查询效率。</p><p>因为 MySQL 优化器在选择如何优化查询时，会根据统一信息，对每一个可以用到的索引来进行评估，以生成出一个最好的执行计划，如果同时有很多个索引都可以用于查询，就会增加 MySQL 优化器生成执行计划的时间，同样会降低查询性能。</p><h3 id="禁止使用全文索引" tabindex="-1"><a class="header-anchor" href="#禁止使用全文索引" aria-hidden="true">#</a> 禁止使用全文索引</h3><p>全文索引不适用于 OLTP 场景。</p><h3 id="禁止给表中的每一列都建立单独的索引" tabindex="-1"><a class="header-anchor" href="#禁止给表中的每一列都建立单独的索引" aria-hidden="true">#</a> 禁止给表中的每一列都建立单独的索引</h3><p>5.6 版本之前，一个 sql 只能使用到一个表中的一个索引，5.6 以后，虽然有了合并索引的优化方式，但是还是远远没有使用一个联合索引的查询方式好。</p><h3 id="每个-innodb-表必须有个主键" tabindex="-1"><a class="header-anchor" href="#每个-innodb-表必须有个主键" aria-hidden="true">#</a> 每个 InnoDB 表必须有个主键</h3><p>InnoDB 是一种索引组织表：数据的存储的逻辑顺序和索引的顺序是相同的。每个表都可以有多个索引，但是表的存储顺序只能有一种。</p><p>InnoDB 是按照主键索引的顺序来组织表的</p><ul><li>不要使用更新频繁的列作为主键，不适用多列主键（相当于联合索引）</li><li>不要使用 UUID,MD5,HASH,字符串列作为主键（无法保证数据的顺序增长）</li><li>主键建议使用自增 ID 值</li></ul><h3 id="常见索引列建议" tabindex="-1"><a class="header-anchor" href="#常见索引列建议" aria-hidden="true">#</a> 常见索引列建议</h3><ul><li>出现在 SELECT、UPDATE、DELETE 语句的 WHERE 从句中的列</li><li>包含在 ORDER BY、GROUP BY、DISTINCT 中的字段</li><li>并不要将符合 1 和 2 中的字段的列都建立一个索引， 通常将 1、2 中的字段建立联合索引效果更好</li><li>多表 join 的关联列</li></ul><h3 id="如何选择索引列的顺序" tabindex="-1"><a class="header-anchor" href="#如何选择索引列的顺序" aria-hidden="true">#</a> 如何选择索引列的顺序</h3><p>建立索引的目的是：希望通过索引进行数据查找，减少随机 IO，增加查询性能 ，索引能过滤出越少的数据，则从磁盘中读入的数据也就越少。</p><ul><li>区分度最高的放在联合索引的最左侧（区分度=列中不同值的数量/列的总行数）</li><li>尽量把字段长度小的列放在联合索引的最左侧（因为字段长度越小，一页能存储的数据量越大，IO 性能也就越好）</li><li>使用最频繁的列放到联合索引的左侧（这样可以比较少的建立一些索引）</li></ul><h3 id="避免建立冗余索引和重复索引-增加了查询优化器生成执行计划的时间" tabindex="-1"><a class="header-anchor" href="#避免建立冗余索引和重复索引-增加了查询优化器生成执行计划的时间" aria-hidden="true">#</a> 避免建立冗余索引和重复索引（增加了查询优化器生成执行计划的时间）</h3><ul><li>重复索引示例：primary key(id)、index(id)、unique index(id)</li><li>冗余索引示例：index(a,b,c)、index(a,b)、index(a)</li></ul><h3 id="对于频繁的查询优先考虑使用覆盖索引" tabindex="-1"><a class="header-anchor" href="#对于频繁的查询优先考虑使用覆盖索引" aria-hidden="true">#</a> 对于频繁的查询优先考虑使用覆盖索引</h3><blockquote><p>覆盖索引：就是包含了所有查询字段 (where,select,order by,group by 包含的字段) 的索引</p></blockquote><p><strong>覆盖索引的好处：</strong></p><ul><li><strong>避免 InnoDB 表进行索引的二次查询:</strong> InnoDB 是以聚集索引的顺序来存储的，对于 InnoDB 来说，二级索引在叶子节点中所保存的是行的主键信息，如果是用二级索引查询数据的话，在查找到相应的键值后，还要通过主键进行二次查询才能获取我们真实所需要的数据。而在覆盖索引中，二级索引的键值中可以获取所有的数据，避免了对主键的二次查询 ，减少了 IO 操作，提升了查询效率。</li><li><strong>可以把随机 IO 变成顺序 IO 加快查询效率:</strong> 由于覆盖索引是按键值的顺序存储的，对于 IO 密集型的范围查找来说，对比随机从磁盘读取每一行的数据 IO 要少的多，因此利用覆盖索引在访问时也可以把磁盘的随机读取的 IO 转变成索引查找的顺序 IO。</li></ul><hr><h3 id="索引-set-规范" tabindex="-1"><a class="header-anchor" href="#索引-set-规范" aria-hidden="true">#</a> 索引 SET 规范</h3><p><strong>尽量避免使用外键约束</strong></p><ul><li>不建议使用外键约束（foreign key），但一定要在表与表之间的关联键上建立索引</li><li>外键可用于保证数据的参照完整性，但建议在业务端实现</li><li>外键会影响父表和子表的写操作从而降低性能</li></ul><h2 id="数据库-sql-开发规范" tabindex="-1"><a class="header-anchor" href="#数据库-sql-开发规范" aria-hidden="true">#</a> 数据库 SQL 开发规范</h2><h3 id="优化对性能影响较大的-sql-语句" tabindex="-1"><a class="header-anchor" href="#优化对性能影响较大的-sql-语句" aria-hidden="true">#</a> 优化对性能影响较大的 SQL 语句</h3><p>要找到最需要优化的 SQL 语句。要么是使用最频繁的语句，要么是优化后提高最明显的语句，可以通过查询 MySQL 的慢查询日志来发现需要进行优化的 SQL 语句；</p><h3 id="充分利用表上已经存在的索引" tabindex="-1"><a class="header-anchor" href="#充分利用表上已经存在的索引" aria-hidden="true">#</a> 充分利用表上已经存在的索引</h3><p>避免使用双%号的查询条件。如：<code>a like &#39;%123%&#39;</code>，（如果无前置%,只有后置%，是可以用到列上的索引的）</p><p>一个 SQL 只能利用到复合索引中的一列进行范围查询。如：有 a,b,c 列的联合索引，在查询条件中有 a 列的范围查询，则在 b,c 列上的索引将不会被用到。</p><p>在定义联合索引时，如果 a 列要用到范围查找的话，就要把 a 列放到联合索引的右侧，使用 left join 或 not exists 来优化 not in 操作，因为 not in 也通常会使用索引失效。</p><h3 id="禁止使用-select-必须使用-select-字段列表-查询" tabindex="-1"><a class="header-anchor" href="#禁止使用-select-必须使用-select-字段列表-查询" aria-hidden="true">#</a> 禁止使用 SELECT * 必须使用 SELECT &lt;字段列表&gt; 查询</h3><ul><li><code>SELECT *</code> 消耗更多的 CPU 和 IO 以网络带宽资源</li><li><code>SELECT *</code> 无法使用覆盖索引</li><li><code>SELECT &lt;字段列表&gt;</code> 可减少表结构变更带来的影响</li></ul><h3 id="禁止使用不含字段列表的-insert-语句" tabindex="-1"><a class="header-anchor" href="#禁止使用不含字段列表的-insert-语句" aria-hidden="true">#</a> 禁止使用不含字段列表的 INSERT 语句</h3><p>如：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> t <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>应使用：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> t<span class="token punctuation">(</span>c1<span class="token punctuation">,</span>c2<span class="token punctuation">,</span>c3<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="建议使用预编译语句进行数据库操作" tabindex="-1"><a class="header-anchor" href="#建议使用预编译语句进行数据库操作" aria-hidden="true">#</a> 建议使用预编译语句进行数据库操作</h3><ul><li>预编译语句可以重复使用这些计划，减少 SQL 编译所需要的时间，还可以解决动态 SQL 所带来的 SQL 注入的问题。</li><li>只传参数，比传递 SQL 语句更高效。</li><li>相同语句可以一次解析，多次使用，提高处理效率。</li></ul><h3 id="避免数据类型的隐式转换" tabindex="-1"><a class="header-anchor" href="#避免数据类型的隐式转换" aria-hidden="true">#</a> 避免数据类型的隐式转换</h3><p>隐式转换会导致索引失效如:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> name<span class="token punctuation">,</span>phone <span class="token keyword">from</span> customer <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token string">&#39;111&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,59),S=i(`<h3 id="避免使用子查询-可以把子查询优化为-join-操作" tabindex="-1"><a class="header-anchor" href="#避免使用子查询-可以把子查询优化为-join-操作" aria-hidden="true">#</a> 避免使用子查询，可以把子查询优化为 join 操作</h3><p>通常子查询在 in 子句中，且子查询中为简单 SQL(不包含 union、group by、order by、limit 从句) 时,才可以把子查询转化为关联查询进行优化。</p><p><strong>子查询性能差的原因：</strong> 子查询的结果集无法使用索引，通常子查询的结果集会被存储到临时表中，不论是内存临时表还是磁盘临时表都不会存在索引，所以查询性能会受到一定的影响。特别是对于返回结果集比较大的子查询，其对查询性能的影响也就越大。由于子查询会产生大量的临时表也没有索引，所以会消耗过多的 CPU 和 IO 资源，产生大量的慢查询。</p><h3 id="避免使用-join-关联太多的表" tabindex="-1"><a class="header-anchor" href="#避免使用-join-关联太多的表" aria-hidden="true">#</a> 避免使用 JOIN 关联太多的表</h3><p>对于 MySQL 来说，是存在关联缓存的，缓存的大小可以由 join_buffer_size 参数进行设置。</p><p>在 MySQL 中，对于同一个 SQL 多关联（join）一个表，就会多分配一个关联缓存，如果在一个 SQL 中关联的表越多，所占用的内存也就越大。</p><p>如果程序中大量的使用了多表关联的操作，同时 join_buffer_size 设置的也不合理的情况下，就容易造成服务器内存溢出的情况，就会影响到服务器数据库性能的稳定性。</p><p>同时对于关联操作来说，会产生临时表操作，影响查询效率，MySQL 最多允许关联 61 个表，建议不超过 5 个。</p><h3 id="减少同数据库的交互次数" tabindex="-1"><a class="header-anchor" href="#减少同数据库的交互次数" aria-hidden="true">#</a> 减少同数据库的交互次数</h3><p>数据库更适合处理批量操作，合并多个相同的操作到一起，可以提高处理效率。</p><h3 id="对应同一列进行-or-判断时-使用-in-代替-or" tabindex="-1"><a class="header-anchor" href="#对应同一列进行-or-判断时-使用-in-代替-or" aria-hidden="true">#</a> 对应同一列进行 or 判断时，使用 in 代替 or</h3><p>in 的值不要超过 500 个，in 操作可以更有效的利用索引，or 大多数情况下很少能利用到索引。</p><h3 id="禁止使用-order-by-rand-进行随机排序" tabindex="-1"><a class="header-anchor" href="#禁止使用-order-by-rand-进行随机排序" aria-hidden="true">#</a> 禁止使用 order by rand() 进行随机排序</h3><p>order by rand() 会把表中所有符合条件的数据装载到内存中，然后在内存中对所有数据根据随机生成的值进行排序，并且可能会对每一行都生成一个随机值，如果满足条件的数据集非常大，就会消耗大量的 CPU 和 IO 及内存资源。</p><p>推荐在程序中获取一个随机值，然后从数据库中获取数据的方式。</p><h3 id="where-从句中禁止对列进行函数转换和计算" tabindex="-1"><a class="header-anchor" href="#where-从句中禁止对列进行函数转换和计算" aria-hidden="true">#</a> WHERE 从句中禁止对列进行函数转换和计算</h3><p>对列进行函数转换或计算时会导致无法使用索引</p><p><strong>不推荐：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">where</span> <span class="token keyword">date</span><span class="token punctuation">(</span>create_time<span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">&#39;20190101&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>推荐：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">where</span> create_time <span class="token operator">&gt;=</span> <span class="token string">&#39;20190101&#39;</span> <span class="token operator">and</span> create_time <span class="token operator">&lt;</span> <span class="token string">&#39;20190102&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="在明显不会有重复值时使用-union-all-而不是-union" tabindex="-1"><a class="header-anchor" href="#在明显不会有重复值时使用-union-all-而不是-union" aria-hidden="true">#</a> 在明显不会有重复值时使用 UNION ALL 而不是 UNION</h3><ul><li>UNION 会把两个结果集的所有数据放到临时表中后再进行去重操作</li><li>UNION ALL 不会再对结果集进行去重操作</li></ul><h3 id="拆分复杂的大-sql-为多个小-sql" tabindex="-1"><a class="header-anchor" href="#拆分复杂的大-sql-为多个小-sql" aria-hidden="true">#</a> 拆分复杂的大 SQL 为多个小 SQL</h3><ul><li>大 SQL 逻辑上比较复杂，需要占用大量 CPU 进行计算的 SQL</li><li>MySQL 中，一个 SQL 只能使用一个 CPU 进行计算</li><li>SQL 拆分后可以通过并行执行来提高处理效率</li></ul><h3 id="程序连接不同的数据库使用不同的账号-禁止跨库查询" tabindex="-1"><a class="header-anchor" href="#程序连接不同的数据库使用不同的账号-禁止跨库查询" aria-hidden="true">#</a> 程序连接不同的数据库使用不同的账号，禁止跨库查询</h3><ul><li>为数据库迁移和分库分表留出余地</li><li>降低业务耦合度</li><li>避免权限过大而产生的安全风险</li></ul><h2 id="数据库操作行为规范" tabindex="-1"><a class="header-anchor" href="#数据库操作行为规范" aria-hidden="true">#</a> 数据库操作行为规范</h2><h3 id="超-100-万行的批量写-update-delete-insert-操作-要分批多次进行操作" tabindex="-1"><a class="header-anchor" href="#超-100-万行的批量写-update-delete-insert-操作-要分批多次进行操作" aria-hidden="true">#</a> 超 100 万行的批量写 (UPDATE,DELETE,INSERT) 操作,要分批多次进行操作</h3><p><strong>大批量操作可能会造成严重的主从延迟</strong></p><p>主从环境中,大批量操作可能会造成严重的主从延迟，大批量的写操作一般都需要执行一定长的时间，而只有当主库上执行完成后，才会在其他从库上执行，所以会造成主库与从库长时间的延迟情况</p><p><strong>binlog 日志为 row 格式时会产生大量的日志</strong></p><p>大批量写操作会产生大量日志，特别是对于 row 格式二进制数据而言，由于在 row 格式中会记录每一行数据的修改，我们一次修改的数据越多，产生的日志量也就会越多，日志的传输和恢复所需要的时间也就越长，这也是造成主从延迟的一个原因</p><p><strong>避免产生大事务操作</strong></p><p>大批量修改数据，一定是在一个事务中进行的，这就会造成表中大批量数据进行锁定，从而导致大量的阻塞，阻塞会对 MySQL 的性能产生非常大的影响。</p><p>特别是长时间的阻塞会占满所有数据库的可用连接，这会使生产环境中的其他应用无法连接到数据库，因此一定要注意大批量写操作要进行分批</p><h3 id="对于大表使用-pt-online-schema-change-修改表结构" tabindex="-1"><a class="header-anchor" href="#对于大表使用-pt-online-schema-change-修改表结构" aria-hidden="true">#</a> 对于大表使用 pt-online-schema-change 修改表结构</h3><ul><li>避免大表修改产生的主从延迟</li><li>避免在对表字段进行修改时进行锁表</li></ul><p>对大表数据结构的修改一定要谨慎，会造成严重的锁表操作，尤其是生产环境，是不能容忍的。</p><p>pt-online-schema-change 它会首先建立一个与原表结构相同的新表，并且在新表上进行表结构的修改，然后再把原表中的数据复制到新表中，并在原表中增加一些触发器。把原表中新增的数据也复制到新表中，在行所有数据复制完成之后，把新表命名成原表，并把原来的表删除掉。把原来一个 DDL 操作，分解成多个小的批次进行。</p><h3 id="禁止为程序使用的账号赋予-super-权限" tabindex="-1"><a class="header-anchor" href="#禁止为程序使用的账号赋予-super-权限" aria-hidden="true">#</a> 禁止为程序使用的账号赋予 super 权限</h3><ul><li>当达到最大连接数限制时，还运行 1 个有 super 权限的用户连接</li><li>super 权限只能留给 DBA 处理问题的账号使用</li></ul><h3 id="对于程序连接数据库账号-遵循权限最小原则" tabindex="-1"><a class="header-anchor" href="#对于程序连接数据库账号-遵循权限最小原则" aria-hidden="true">#</a> 对于程序连接数据库账号,遵循权限最小原则</h3><ul><li>程序使用数据库账号只能在一个 DB 下使用，不准跨库</li><li>程序使用的账号原则上不准有 drop 权限</li></ul>`,44);function I(y,v){const s=r("ExternalLinkIcon"),l=r("RouterLink");return d(),o("div",null,[a("blockquote",null,[a("p",null,[e("作者: 听风 原文地址: "),a("a",c,[e("https://www.cnblogs.com/huchong/p/10219318.html"),n(s)]),e("。")]),u]),b,a("ul",null,[a("li",null,[a("a",m,[e("MySQL 字符集不一致导致索引失效的一个真实案例"),n(s)])]),a("li",null,[a("a",g,[e("MySQL 字符集详解"),n(s)])])]),k,a("p",null,[e("相关阅读："),a("a",f,[e("是否推荐使用 MySQL 的 enum 类型？ - 架构文摘 - 知乎"),n(s)]),e(" 。")]),x,L,T,a("p",null,[e("相关阅读："),a("a",E,[e("技术分享 | MySQL 默认值选型（是空，还是 NULL）"),n(s)]),e(" 。")]),_,a("p",null,[e("详细解读可以看："),n(l,{to:"/database/mysql/index-invalidation-caused-by-implicit-conversion.html"},{default:h(()=>[e("MySQL 中的隐式转换造成的索引失效")]),_:1}),e(" 这篇文章。")]),S])}const q=t(p,[["render",I],["__file","mysql-high-performance-optimization-specification-recommendations.html.vue"]]);export{q as default};
