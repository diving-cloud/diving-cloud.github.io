import{_ as r,X as i,Y as o,Z as s,$ as n,a0 as a,a2 as t,C as p}from"./framework-9b4b2ab3.js";const d={},l=t(`<p>除了 5 种基本的数据结构之外，Redis 还支持 3 种特殊的数据结构 ：Bitmap、HyperLogLog、GEO。</p><h2 id="bitmap" tabindex="-1"><a class="header-anchor" href="#bitmap" aria-hidden="true">#</a> Bitmap</h2><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><p>Bitmap 存储的是连续的二进制数字（0 和 1），通过 Bitmap, 只需要一个 bit 位来表示某个元素对应的值或者状态，key 就是对应元素本身 。我们知道 8 个 bit 可以组成一个 byte，所以 Bitmap 本身会极大的节省储存空间。</p><p>你可以将 Bitmap 看作是一个存储二进制数字（0 和 1）的数组，数组中每个元素的下标叫做 offset（偏移量）。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/database/redis/image-20220720194154133.png" alt=""></p><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h3><table><thead><tr><th>命令</th><th>介绍</th></tr></thead><tbody><tr><td>SETBIT key offset value</td><td>设置指定 offset 位置的值</td></tr><tr><td>GETBIT key offset</td><td>获取指定 offset 位置的值</td></tr><tr><td>BITCOUNT key start end</td><td>获取 start 和 end 之前值为 1 的元素个数</td></tr><tr><td>BITOP operation destkey key1 key2 ...</td><td>对一个或多个 Bitmap 进行运算，可用运算符有 AND, OR, XOR 以及 NOT</td></tr></tbody></table><p><strong>Bitmap 基本操作演示</strong> ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># SETBIT 会返回之前位的值（默认是 0）这里会生成 7 个位</span>
<span class="token operator">&gt;</span> SETBIT mykey <span class="token number">7</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token operator">&gt;</span> SETBIT mykey <span class="token number">7</span> <span class="token number">0</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token operator">&gt;</span> GETBIT mykey <span class="token number">7</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token operator">&gt;</span> SETBIT mykey <span class="token number">6</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token operator">&gt;</span> SETBIT mykey <span class="token number">8</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token comment"># 通过 bitcount 统计被被设置为 1 的位的数量。</span>
<span class="token operator">&gt;</span> BITCOUNT mykey
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3><p><strong>需要保存状态信息（0/1 即可表示）的场景</strong></p><ul><li>举例 ：用户签到情况、活跃用户情况、用户行为统计（比如是否点赞过某个视频）。</li><li>相关命令 ：<code>SETBIT</code>、<code>GETBIT</code>、<code>BITCOUNT</code>、<code>BITOP</code>。</li></ul><h2 id="hyperloglog" tabindex="-1"><a class="header-anchor" href="#hyperloglog" aria-hidden="true">#</a> HyperLogLog</h2><h3 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍</h3><p>HyperLogLog 是一种有名的基数计数概率算法 ，基于 LogLog Counting(LLC)优化改进得来，并不是 Redis 特有的，Redis 只是实现了这个算法并提供了一些开箱即用的 API。</p><p>Redis 提供的 HyperLogLog 占用空间非常非常小，只需要 12k 的空间就能存储接近<code>2^64</code>个不同元素。这是真的厉害，这就是数学的魅力么！并且，Redis 对 HyperLogLog 的存储结构做了优化，采用两种方式计数：</p><ul><li><strong>稀疏矩阵</strong> ：计数较少的时候，占用空间很小。</li><li><strong>稠密矩阵</strong> ：计数达到某个阈值的时候，占用 12k 的空间。</li></ul><p>Redis 官方文档中有对应的详细说明：</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/database/redis/image-20220721091424563.png" alt=""></p><p>基数计数概率算法为了节省内存并不会直接存储元数据，而是通过一定的概率统计方法预估基数值（集合中包含元素的个数）。因此， HyperLogLog 的计数结果并不是一个精确值，存在一定的误差（标准误差为 <code>0.81%</code> 。）。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/database/redis/image-20220720194154133.png" alt=""></p>`,22),c={href:"https://juejin.cn/post/6844903785744056333",target:"_blank",rel:"noopener noreferrer"},u={href:"http://content.research.neustar.biz/blog/hll.html",target:"_blank",rel:"noopener noreferrer"},m=t(`<h3 id="常用命令-1" tabindex="-1"><a class="header-anchor" href="#常用命令-1" aria-hidden="true">#</a> 常用命令</h3><p>HyperLogLog 相关的命令非常少，最常用的也就 3 个。</p><table><thead><tr><th>命令</th><th>介绍</th></tr></thead><tbody><tr><td>PFADD key element1 element2 ...</td><td>添加一个或多个元素到 HyperLogLog 中</td></tr><tr><td>PFCOUNT key1 key2</td><td>获取一个或者多个 HyperLogLog 的唯一计数。</td></tr><tr><td>PFMERGE destkey sourcekey1 sourcekey2 ...</td><td>将多个 HyperLogLog 合并到 destkey 中，destkey 会结合多个源，算出对应的唯一计数。</td></tr></tbody></table><p><strong>HyperLogLog 基本操作演示</strong> ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> PFADD hll foo bar zap
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token operator">&gt;</span> PFADD hll zap zap zap
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token operator">&gt;</span> PFADD hll foo bar
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token operator">&gt;</span> PFCOUNT hll
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token operator">&gt;</span> PFADD some-other-hll <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token operator">&gt;</span> PFCOUNT hll some-other-hll
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">6</span>
<span class="token operator">&gt;</span> PFMERGE desthll hll some-other-hll
<span class="token string">&quot;OK&quot;</span>
<span class="token operator">&gt;</span> PFCOUNT desthll
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用场景-1" tabindex="-1"><a class="header-anchor" href="#应用场景-1" aria-hidden="true">#</a> 应用场景</h3><p><strong>数量量巨大（百万、千万级别以上）的计数场景</strong></p><ul><li>举例 ：热门网站每日/每周/每月访问 ip 数统计、热门帖子 uv 统计、</li><li>相关命令 ：<code>PFADD</code>、<code>PFCOUNT</code> 。</li></ul><h2 id="geospatial-index" tabindex="-1"><a class="header-anchor" href="#geospatial-index" aria-hidden="true">#</a> Geospatial index</h2><h3 id="介绍-2" tabindex="-1"><a class="header-anchor" href="#介绍-2" aria-hidden="true">#</a> 介绍</h3><p>Geospatial index（地理空间索引，简称 GEO） 主要用于存储地理位置信息，基于 Sorted Set 实现。</p><p>通过 GEO 我们可以轻松实现两个位置距离的计算、获取指定位置附近的元素等功能。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/database/redis/image-20220720194359494.png" alt=""></p><h3 id="常用命令-2" tabindex="-1"><a class="header-anchor" href="#常用命令-2" aria-hidden="true">#</a> 常用命令</h3><table><thead><tr><th>命令</th><th>介绍</th></tr></thead><tbody><tr><td>GEOADD key longitude1 latitude1 member1 ...</td><td>添加一个或多个元素对应的经纬度信息到 GEO 中</td></tr><tr><td>GEOPOS key member1 member2 ...</td><td>返回给定元素的经纬度信息</td></tr><tr><td>GEODIST key member1 member2 M/KM/FT/MI</td><td>返回两个给定元素之间的距离</td></tr><tr><td>GEORADIUS key longitude latitude radius distance</td><td>获取指定位置附近 distance 范围内的其他元素，支持 ASC(由近到远)、DESC（由远到近）、Count(数量) 等参数</td></tr><tr><td>GEORADIUSBYMEMBER key member radius distance</td><td>类似于 GEORADIUS 命令，只是参照的中心点是 GEO 中的元素</td></tr></tbody></table><p><strong>基本操作</strong> ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> GEOADD personLocation <span class="token number">116.33</span> <span class="token number">39.89</span> user1 <span class="token number">116.34</span> <span class="token number">39.90</span> user2 <span class="token number">116.35</span> <span class="token number">39.88</span> user3
<span class="token number">3</span>
<span class="token operator">&gt;</span> GEOPOS personLocation user1
<span class="token number">116.3299986720085144</span>
<span class="token number">39.89000061669732844</span>
<span class="token operator">&gt;</span> GEODIST personLocation user1 user2 km
<span class="token number">1.4018</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 Redis 可视化工具查看 <code>personLocation</code> ，果不其然，底层就是 Sorted Set。</p><p>GEO 中存储的地理位置信息的经纬度数据通过 GeoHash 算法转换成了一个整数，这个整数作为 Sorted Set 的 score(权重参数)使用。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/database/redis/image-20220721201545147.png" alt=""></p><p><strong>获取指定位置范围内的其他元素</strong> ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> GEORADIUS personLocation <span class="token number">116.33</span> <span class="token number">39.87</span> <span class="token number">3</span> km
user3
user1
<span class="token operator">&gt;</span> GEORADIUS personLocation <span class="token number">116.33</span> <span class="token number">39.87</span> <span class="token number">2</span> km
<span class="token operator">&gt;</span> GEORADIUS personLocation <span class="token number">116.33</span> <span class="token number">39.87</span> <span class="token number">5</span> km
user3
user1
user2
<span class="token operator">&gt;</span> GEORADIUSBYMEMBER personLocation user1 <span class="token number">5</span> km
user3
user1
user2
<span class="token operator">&gt;</span> GEORADIUSBYMEMBER personLocation user1 <span class="token number">2</span> km
user1
user2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),b=s("code",null,"GEORADIUS",-1),h={href:"https://juejin.cn/post/6844903966061363207",target:"_blank",rel:"noopener noreferrer"},g=t(`<p><strong>移除元素</strong> ：</p><p>GEO 底层是 Sorted Set ，你可以对 GEO 使用 Sorted Set 相关的命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ZREM personLocation user1
<span class="token number">1</span>
<span class="token operator">&gt;</span> ZRANGE personLocation <span class="token number">0</span> <span class="token parameter variable">-1</span>
user3
user2
<span class="token operator">&gt;</span> ZSCORE personLocation user2
<span class="token number">4069879562983946</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用场景-2" tabindex="-1"><a class="header-anchor" href="#应用场景-2" aria-hidden="true">#</a> 应用场景</h3><p><strong>需要管理使用地理空间数据的场景</strong></p><ul><li>举例：附近的人。</li><li>相关命令: <code>GEOADD</code>、<code>GEORADIUS</code>、<code>GEORADIUSBYMEMBER</code> 。</li></ul><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ul><li>Redis Data Structures ：https://redis.com/redis-enterprise/data-structures/ 。</li><li>《Redis 深度历险：核心原理与应用实践》1.6 四两拨千斤——HyperLogLog</li><li>布隆过滤器,位图,HyperLogLog：https://hogwartsrico.github.io/2020/06/08/BloomFilter-HyperLogLog-BitMap/index.html</li></ul>`,8);function v(k,y){const e=p("ExternalLinkIcon");return i(),o("div",null,[l,s("p",null,[n("HyperLogLog 的使用非常简单，但原理非常复杂。HyperLogLog 的原理以及在 Redis 中的实现可以看这篇文章："),s("a",c,[n("HyperLogLog 算法的原理讲解以及 Redis 是如何应用它的"),a(e)]),n(" 。")]),s("p",null,[n("再推荐一个可以帮助理解 HyperLogLog 原理的工具："),s("a",u,[n("Sketch of the Day: HyperLogLog — Cornerstone of a Big Data Infrastructure"),a(e)]),n(" 。")]),m,s("p",null,[b,n(" 命令的底层原理解析可以看看阿里的这篇文章："),s("a",h,[n("Redis 到底是怎么实现“附近的人”这个功能的呢？"),a(e)]),n(" 。")]),g])}const E=r(d,[["render",v],["__file","redis-data-structures-02.html.vue"]]);export{E as default};
