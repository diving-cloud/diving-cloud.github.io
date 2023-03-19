import{_ as n,X as o,Y as i,Z as e,a1 as a,$ as r,a2 as l,C as d}from"./framework-f0219f66.js";const s={},c=l('<p>数据库知识基础，这部分内容一定要理解记忆。虽然这部分内容只是理论知识，但是非常重要，这是后面学习 MySQL 数据库的基础。PS: 这部分内容由于涉及太多概念性内容，所以参考了维基百科和百度百科相应的介绍。</p><h2 id="什么是数据库-数据库管理系统-数据库系统-数据库管理员" tabindex="-1"><a class="header-anchor" href="#什么是数据库-数据库管理系统-数据库系统-数据库管理员" aria-hidden="true">#</a> 什么是数据库, 数据库管理系统, 数据库系统, 数据库管理员?</h2><ul><li><strong>数据库</strong> : 数据库(DataBase 简称 DB)就是信息的集合或者说数据库是由数据库管理系统管理的数据的集合。</li><li><strong>数据库管理系统</strong> : 数据库管理系统(Database Management System 简称 DBMS)是一种操纵和管理数据库的大型软件，通常用于建立、使用和维护数据库。</li><li><strong>数据库系统</strong> : 数据库系统(Data Base System，简称 DBS)通常由软件、数据库和数据管理员(DBA)组成。</li><li><strong>数据库管理员</strong> : 数据库管理员(Database Administrator, 简称 DBA)负责全面管理和控制数据库系统。</li></ul><h2 id="什么是元组-码-候选码-主码-外码-主属性-非主属性" tabindex="-1"><a class="header-anchor" href="#什么是元组-码-候选码-主码-外码-主属性-非主属性" aria-hidden="true">#</a> 什么是元组, 码, 候选码, 主码, 外码, 主属性, 非主属性？</h2><ul><li><strong>元组</strong> ： 元组（tuple）是关系数据库中的基本概念，关系是一张表，表中的每行（即数据库中的每条记录）就是一个元组，每列就是一个属性。 在二维表里，元组也称为行。</li><li><strong>码</strong> ：码就是能唯一标识实体的属性，对应表中的列。</li><li><strong>候选码</strong> ： 若关系中的某一属性或属性组的值能唯一的标识一个元组，而其任何、子集都不能再标识，则称该属性组为候选码。例如：在学生实体中，“学号”是能唯一的区分学生实体的，同时又假设“姓名”、“班级”的属性组合足以区分学生实体，那么{学号}和{姓名，班级}都是候选码。</li><li><strong>主码</strong> : 主码也叫主键。主码是从候选码中选出来的。 一个实体集中只能有一个主码，但可以有多个候选码。</li><li><strong>外码</strong> : 外码也叫外键。如果一个关系中的一个属性是另外一个关系中的主码则这个属性为外码。</li><li><strong>主属性</strong> ： 候选码中出现过的属性称为主属性。比如关系 工人（工号，身份证号，姓名，性别，部门）. 显然工号和身份证号都能够唯一标示这个关系，所以都是候选码。工号、身份证号这两个属性就是主属性。如果主码是一个属性组，那么属性组中的属性都是主属性。</li><li><strong>非主属性：</strong> 不包含在任何一个候选码中的属性称为非主属性。比如在关系——学生（学号，姓名，年龄，性别，班级）中，主码是“学号”，那么其他的“姓名”、“年龄”、“性别”、“班级”就都可以称为非主属性。</li></ul><h2 id="什么是-er-图" tabindex="-1"><a class="header-anchor" href="#什么是-er-图" aria-hidden="true">#</a> 什么是 ER 图？</h2><p>我们做一个项目的时候一定要试着画 ER 图来捋清数据库设计，这个也是面试官问你项目的时候经常会被问到的。</p><p><strong>ER 图</strong> 全称是 Entity Relationship Diagram（实体联系图），提供了表示实体类型、属性和联系的方法。</p><p>ER 图由下面 3 个要素组成：</p><ul><li><strong>实体</strong> ：通常是现实世界的业务对象，当然使用一些逻辑对象也可以。比如对于一个校园管理系统，会涉及学生、教师、课程、班级等等实体。在 ER 图中，实体使用矩形框表示。</li><li><strong>属性</strong> ：即某个实体拥有的属性，属性用来描述组成实体的要素，对于产品设计来说可以理解为字段。在 ER 图中，属性使用椭圆形表示。</li><li><strong>联系</strong> ：即实体与实体之间的关系，这个关系不仅有业务关联关系，还能通过数字表示实体之间的数量对照关系。例如，一个班级会有多个学生就是一种实体间的联系。</li></ul><p>下图是一个学生选课的 ER 图，每个学生可以选若干门课程，同一门课程也可以被若干人选择，所以它们之间的关系是多对多（M: N）。另外，还有其他两种实体之间的关系是：1 对 1（1:1）、1 对多（1: N）。</p><p><img src="https://img-blog.csdnimg.cn/img_convert/c745c87f6eda9a439e0eea52012c7f4a.png" alt="学生与课程之间联系的E-R图"></p><h2 id="数据库范式了解吗" tabindex="-1"><a class="header-anchor" href="#数据库范式了解吗" aria-hidden="true">#</a> 数据库范式了解吗?</h2><p>数据库范式有 3 种：</p><ul><li>1NF(第一范式)：属性不可再分。</li><li>2NF(第二范式)：1NF 的基础之上，消除了非主属性对于码的部分函数依赖。</li><li>3NF(第三范式)：3NF 在 2NF 的基础之上，消除了非主属性对于码的传递函数依赖 。</li></ul><h3 id="_1nf-第一范式" tabindex="-1"><a class="header-anchor" href="#_1nf-第一范式" aria-hidden="true">#</a> 1NF(第一范式)</h3><p>属性（对应于表中的字段）不能再被分割，也就是这个字段只能是一个值，不能再分为多个其他的字段了。<strong>1NF 是所有关系型数据库的最基本要求</strong> ，也就是说关系型数据库中创建的表一定满足第一范式。</p><h3 id="_2nf-第二范式" tabindex="-1"><a class="header-anchor" href="#_2nf-第二范式" aria-hidden="true">#</a> 2NF(第二范式)</h3><p>2NF 在 1NF 的基础之上，消除了非主属性对于码的部分函数依赖。如下图所示，展示了第一范式到第二范式的过渡。第二范式在第一范式的基础上增加了一个列，这个列称为主键，非主属性都依赖于主键。</p><p><img src="https://img-blog.csdnimg.cn/img_convert/bd1d31be3779342427fc9e462bf7f05c.png" alt="第二范式"></p><p>一些重要的概念：</p><ul><li><strong>函数依赖（functional dependency）</strong> ：若在一张表中，在属性（或属性组）X 的值确定的情况下，必定能确定属性 Y 的值，那么就可以说 Y 函数依赖于 X，写作 X → Y。</li><li><strong>部分函数依赖（partial functional dependency）</strong> ：如果 X→Y，并且存在 X 的一个真子集 X0，使得 X0→Y，则称 Y 对 X 部分函数依赖。比如学生基本信息表 R 中（学号，身份证号，姓名）当然学号属性取值是唯一的，在 R 关系中，（学号，身份证号）-&gt;（姓名），（学号）-&gt;（姓名），（身份证号）-&gt;（姓名）；所以姓名部分函数依赖与（学号，身份证号）；</li><li><strong>完全函数依赖(Full functional dependency)</strong> ：在一个关系中，若某个非主属性数据项依赖于全部关键字称之为完全函数依赖。比如学生基本信息表 R（学号，班级，姓名）假设不同的班级学号有相同的，班级内学号不能相同，在 R 关系中，（学号，班级）-&gt;（姓名），但是（学号）-&gt;(姓名)不成立，（班级）-&gt;(姓名)不成立，所以姓名完全函数依赖与（学号，班级）；</li><li><strong>传递函数依赖</strong> ： 在关系模式 R(U)中，设 X，Y，Z 是 U 的不同的属性子集，如果 X 确定 Y、Y 确定 Z，且有 X 不包含 Y，Y 不确定 X，（X∪Y）∩Z=空集合，则称 Z 传递函数依赖(transitive functional dependency) 于 X。传递函数依赖会导致数据冗余和异常。传递函数依赖的 Y 和 Z 子集往往同属于某一个事物，因此可将其合并放到一个表中。比如在关系 R(学号 , 姓名, 系名，系主任)中，学号 → 系名，系名 → 系主任，所以存在非主属性系主任对于学号的传递函数依赖。。</li></ul><h3 id="_3nf-第三范式" tabindex="-1"><a class="header-anchor" href="#_3nf-第三范式" aria-hidden="true">#</a> 3NF(第三范式)</h3><p>3NF 在 2NF 的基础之上，消除了非主属性对于码的传递函数依赖 。符合 3NF 要求的数据库设计，<strong>基本</strong>上解决了数据冗余过大，插入异常，修改异常，删除异常的问题。比如在关系 R(学号 , 姓名, 系名，系主任)中，学号 → 系名，系名 → 系主任，所以存在非主属性系主任对于学号的传递函数依赖，所以该表的设计，不符合 3NF 的要求。</p><h2 id="主键和外键有什么区别" tabindex="-1"><a class="header-anchor" href="#主键和外键有什么区别" aria-hidden="true">#</a> 主键和外键有什么区别?</h2><ul><li><strong>主键(主码)</strong> ：主键用于唯一标识一个元组，不能有重复，不允许为空。一个表只能有一个主键。</li><li><strong>外键(外码)</strong> ：外键用来和其他表建立联系用，外键是另一表的主键，外键是可以有重复的，可以是空值。一个表可以有多个外键。</li></ul><h2 id="为什么不推荐使用外键与级联" tabindex="-1"><a class="header-anchor" href="#为什么不推荐使用外键与级联" aria-hidden="true">#</a> 为什么不推荐使用外键与级联？</h2><p>对于外键和级联，阿里巴巴开发手册这样说到：</p><blockquote><p>【强制】不得使用外键与级联，一切外键概念必须在应用层解决。</p><p>说明: 以学生和成绩的关系为例，学生表中的 student_id 是主键，那么成绩表中的 student_id 则为外键。如果更新学生表中的 student_id，同时触发成绩表中的 student_id 更新，即为级联更新。外键与级联更新适用于单机低并发，不适合分布式、高并发集群; 级联更新是强阻塞，存在数据库更新风暴的风 险; 外键影响数据库的插入速度</p></blockquote><p>为什么不要用外键呢？大部分人可能会这样回答：</p><ol><li><strong>增加了复杂性：</strong> a. 每次做 DELETE 或者 UPDATE 都必须考虑外键约束，会导致开发的时候很痛苦, 测试数据极为不方便; b. 外键的主从关系是定的，假如那天需求有变化，数据库中的这个字段根本不需要和其他表有关联的话就会增加很多麻烦。</li><li><strong>增加了额外工作</strong>： 数据库需要增加维护外键的工作，比如当我们做一些涉及外键字段的增，删，更新操作之后，需要触发相关操作去检查，保证数据的的一致性和正确性，这样会不得不消耗资源；（个人觉得这个不是不用外键的原因，因为即使你不使用外键，你在应用层面也还是要保证的。所以，我觉得这个影响可以忽略不计。）</li><li><strong>对分库分表不友好</strong> ：因为分库分表下外键是无法生效的。</li><li>......</li></ol><p>我个人觉得上面这种回答不是特别的全面，只是说了外键存在的一个常见的问题。实际上，我们知道外键也是有很多好处的，比如：</p><ol><li>保证了数据库数据的一致性和完整性；</li><li>级联操作方便，减轻了程序代码量；</li><li>......</li></ol><p>所以说，不要一股脑的就抛弃了外键这个概念，既然它存在就有它存在的道理，如果系统不涉及分库分表，并发量不是很高的情况还是可以考虑使用外键的。</p><h2 id="什么是存储过程" tabindex="-1"><a class="header-anchor" href="#什么是存储过程" aria-hidden="true">#</a> 什么是存储过程?</h2><p>我们可以把存储过程看成是一些 SQL 语句的集合，中间加了点逻辑控制语句。存储过程在业务比较复杂的时候是非常实用的，比如很多时候我们完成一个操作可能需要写一大串 SQL 语句，这时候我们就可以写有一个存储过程，这样也方便了我们下一次的调用。存储过程一旦调试完成通过后就能稳定运行，另外，使用存储过程比单纯 SQL 语句执行要快，因为存储过程是预编译过的。</p><p>存储过程在互联网公司应用不多，因为存储过程难以调试和扩展，而且没有移植性，还会消耗数据库资源。</p><p>阿里巴巴 Java 开发手册里要求禁止使用存储过程。</p><p><img src="https://img-blog.csdnimg.cn/img_convert/0fa082bc4d4f919065767476a41b2156.png" alt="阿里巴巴Java开发手册: 禁止存储过程"></p><h2 id="drop、delete-与-truncate-区别" tabindex="-1"><a class="header-anchor" href="#drop、delete-与-truncate-区别" aria-hidden="true">#</a> drop、delete 与 truncate 区别？</h2><h3 id="用法不同" tabindex="-1"><a class="header-anchor" href="#用法不同" aria-hidden="true">#</a> 用法不同</h3><ul><li><code>drop</code>(丢弃数据): <code>drop table 表名</code> ，直接将表都删除掉，在删除表的时候使用。</li><li><code>truncate</code> (清空数据) : <code>truncate table 表名</code> ，只删除表中的数据，再插入数据的时候自增长 id 又从 1 开始，在清空表中数据的时候使用。</li><li><code>delete</code>（删除数据） : <code>delete from 表名 where 列名=值</code>，删除某一行的数据，如果不加 <code>where</code> 子句和<code>truncate table 表名</code>作用类似。</li></ul><p><code>truncate</code> 和不带 where``子句的 <code>delete</code>、以及 <code>drop</code> 都会删除表内的数据，但是 <strong><code>truncate</code> 和 <code>delete</code> 只删除数据不删除表的结构(定义)，执行 <code>drop</code> 语句，此表的结构也会删除，也就是执行 <code>drop</code> 之后对应的表不复存在。</strong></p><h3 id="属于不同的数据库语言" tabindex="-1"><a class="header-anchor" href="#属于不同的数据库语言" aria-hidden="true">#</a> 属于不同的数据库语言</h3><p><code>truncate</code> 和 <code>drop</code> 属于 DDL(数据定义语言)语句，操作立即生效，原数据不放到 rollback segment 中，不能回滚，操作不触发 trigger。而 <code>delete</code> 语句是 DML (数据库操作语言)语句，这个操作会放到 rollback segement 中，事务提交之后才生效。</p><p><strong>DML 语句和 DDL 语句区别：</strong></p><ul><li>DML 是数据库操作语言（Data Manipulation Language）的缩写，是指对数据库中表记录的操作，主要包括表记录的插入、更新、删除和查询，是开发人员日常使用最频繁的操作。</li><li>DDL （Data Definition Language）是数据定义语言的缩写，简单来说，就是对数据库内部的对象进行创建、删除、修改的操作语言。它和 DML 语言的最大区别是 DML 只是对表内部数据的操作，而不涉及到表的定义、结构的修改，更不会涉及到其他对象。DDL 语句更多的被数据库管理员（DBA）所使用，一般的开发人员很少使用。</li></ul><p>另外，由于<code>select</code>不会对表进行破坏，所以有的地方也会把<code>select</code>单独区分开叫做数据库查询语言 DQL（Data Query Language）。</p><h3 id="执行速度不同" tabindex="-1"><a class="header-anchor" href="#执行速度不同" aria-hidden="true">#</a> 执行速度不同</h3><p>一般来说：<code>drop</code> &gt; <code>truncate</code> &gt; <code>delete</code>（这个我没有设计测试过）。</p><ul><li><code>delete</code>命令执行的时候会产生数据库的<code>binlog</code>日志，而日志记录是需要消耗时间的，但是也有个好处方便数据回滚恢复。</li><li><code>truncate</code>命令执行的时候不会产生数据库日志，因此比<code>delete</code>要快。除此之外，还会把表的自增值重置和索引恢复到初始大小等。</li><li><code>drop</code>命令会把表占用的空间全部释放掉。</li></ul><p>Tips：你应该更多地关注在使用场景上，而不是执行效率。</p><h2 id="数据库设计通常分为哪几步" tabindex="-1"><a class="header-anchor" href="#数据库设计通常分为哪几步" aria-hidden="true">#</a> 数据库设计通常分为哪几步?</h2><ol><li><strong>需求分析</strong> : 分析用户的需求，包括数据、功能和性能需求。</li><li><strong>概念结构设计</strong> : 主要采用 E-R 模型进行设计，包括画 E-R 图。</li><li><strong>逻辑结构设计</strong> : 通过将 E-R 图转换成表，实现从 E-R 模型到关系模型的转换。</li><li><strong>物理结构设计</strong> : 主要是为所设计的数据库选择合适的存储结构和存取路径。</li><li><strong>数据库实施</strong> : 包括编程、测试和试运行</li><li><strong>数据库的运行和维护</strong> : 系统的运行与数据库的日常维护。</li></ol><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',55),h={href:"https://blog.csdn.net/rl529014/article/details/48391465",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.zhihu.com/question/24696366/answer/29189700",target:"_blank",rel:"noopener noreferrer"},p={href:"https://blog.csdn.net/bieleyang/article/details/77149954",target:"_blank",rel:"noopener noreferrer"};function u(f,b){const t=d("ExternalLinkIcon");return o(),i("div",null,[c,e("ul",null,[e("li",null,[e("a",h,[a("https://blog.csdn.net/rl529014/article/details/48391465"),r(t)])]),e("li",null,[e("a",g,[a("https://www.zhihu.com/question/24696366/answer/29189700"),r(t)])]),e("li",null,[e("a",p,[a("https://blog.csdn.net/bieleyang/article/details/77149954"),r(t)])])])])}const D=n(s,[["render",u],["__file","basis.html.vue"]]);export{D as default};
