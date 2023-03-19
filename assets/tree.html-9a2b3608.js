import{_ as o,X as p,Y as i,Z as s,a1 as n,$ as e,a2 as a,C as c}from"./framework-f0219f66.js";const r="/assets/满二叉树-9025b079.png",l="/assets/完全二叉树-c4f02f51.png",d="data:image/png;base64,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",u="data:image/png;base64,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",v="/assets/链式存储二叉树-8dfe7691.png",k="/assets/顺序存储-ec1113ca.png",f="/assets/顺序存储2-941d44fb.png",h="/assets/先序遍历-05f522c6.png",g="/assets/中序遍历-bf6eff45.png",m="data:image/png;base64,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",A="/assets/后序遍历-7b5edc1b.png",z={},b=a('<h1 id="树" tabindex="-1"><a class="header-anchor" href="#树" aria-hidden="true">#</a> 树</h1><p>树就是一种类似现实生活中的树的数据结构（倒置的树）。任何一颗非空树只有一个根节点。</p><p>一棵树具有以下特点：</p><ol><li>一棵树中的任意两个结点有且仅有唯一的一条路径连通。</li><li>一棵树如果有 n 个结点，那么它一定恰好有 n-1 条边。</li><li>一棵树不包含回路。</li></ol><p>下图就是一颗树，并且是一颗二叉树。</p><p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/二叉树-2.png" alt="二叉树"></p><p>如上图所示，通过上面这张图说明一下树中的常用概念：</p><ul><li><strong>节点</strong> ：树中的每个元素都可以统称为节点。</li><li><strong>根节点</strong> ：顶层节点或者说没有父节点的节点。上图中 A 节点就是根节点。</li><li><strong>父节点</strong> ：若一个节点含有子节点，则这个节点称为其子节点的父节点。上图中的 B 节点是 D 节点、E 节点的父节点。</li><li><strong>子节点</strong> ：一个节点含有的子树的根节点称为该节点的子节点。上图中 D 节点、E 节点是 B 节点的子节点。</li><li><strong>兄弟节点</strong> ：具有相同父节点的节点互称为兄弟节点。上图中 D 节点、E 节点的共同父节点是 B 节点，故 D 和 E 为兄弟节点。</li><li><strong>叶子节点</strong> ：没有子节点的节点。上图中的 D、F、H、I 都是叶子节点。</li><li><strong>节点的高度</strong> ：该节点到叶子节点的最长路径所包含的边数。</li><li><strong>节点的深度</strong> ：根节点到该节点的路径所包含的边数</li><li><strong>节点的层数</strong> ：节点的深度+1。</li><li><strong>树的高度</strong> ：根节点的高度。</li></ul>',8),X={href:"https://stackoverflow.com/questions/2603692/what-is-the-difference-between-tree-depth-and-height",target:"_blank",rel:"noopener noreferrer"},x=a('<h2 id="二叉树的分类" tabindex="-1"><a class="header-anchor" href="#二叉树的分类" aria-hidden="true">#</a> 二叉树的分类</h2><p><strong>二叉树</strong>（Binary tree）是每个节点最多只有两个分支（即不存在分支度大于 2 的节点）的树结构。</p><p><strong>二叉树</strong> 的分支通常被称作“<strong>左子树</strong>”或“<strong>右子树</strong>”。并且，<strong>二叉树</strong> 的分支具有左右次序，不能随意颠倒。</p>',3),j=s("strong",null,"二叉树",-1),P=s("code",null,"2^(i-1)",-1),y=s("code",null,"2^(k+1)-1",-1),H={href:"https://zh.wikipedia.org/wiki/%E6%A0%91_(%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)#/%E6%9C%AF%E8%AF%AD",target:"_blank",rel:"noopener noreferrer"},Z=a('<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/image-20220119112736158.png" alt=""></p><h3 id="满二叉树" tabindex="-1"><a class="header-anchor" href="#满二叉树" aria-hidden="true">#</a> 满二叉树</h3><p>一个二叉树，如果每一个层的结点数都达到最大值，则这个二叉树就是 <strong>满二叉树</strong>。也就是说，如果一个二叉树的层数为 K，且结点总数是(2^k) -1 ，则它就是 <strong>满二叉树</strong>。如下图所示：</p><p><img src="'+r+'" alt=""></p><h3 id="完全二叉树" tabindex="-1"><a class="header-anchor" href="#完全二叉树" aria-hidden="true">#</a> 完全二叉树</h3><p>除最后一层外，若其余层都是满的，并且最后一层或者是满的，或者是在右边缺少连续若干节点，则这个二叉树就是 <strong>完全二叉树</strong> 。</p><p>大家可以想象为一棵树从根结点开始扩展，扩展完左子节点才能开始扩展右子节点，每扩展完一层，才能继续扩展下一层。如下图所示：</p><p><img src="'+l+'" alt=""></p><p>完全二叉树有一个很好的性质：<strong>父结点和子节点的序号有着对应关系。</strong></p><p>细心的小伙伴可能发现了，当根节点的值为 1 的情况下，若父结点的序号是 i，那么左子节点的序号就是 2i，右子节点的序号是 2i+1。这个性质使得完全二叉树利用数组存储时可以极大地节省空间，以及利用序号找到某个节点的父结点和子节点，后续二叉树的存储会详细介绍。</p><h3 id="平衡二叉树" tabindex="-1"><a class="header-anchor" href="#平衡二叉树" aria-hidden="true">#</a> 平衡二叉树</h3><p><strong>平衡二叉树</strong> 是一棵二叉排序树，且具有以下性质：</p><ol><li>可以是一棵空树</li><li>如果不是空树，它的左右两个子树的高度差的绝对值不超过 1，并且左右两个子树都是一棵平衡二叉树。</li></ol><p>平衡二叉树的常用实现方法有 <strong>红黑树</strong>、<strong>AVL 树</strong>、<strong>替罪羊树</strong>、<strong>加权平衡树</strong>、<strong>伸展树</strong> 等。</p><p>在给大家展示平衡二叉树之前，先给大家看一棵树：</p><p><img src="'+d+'" alt=""></p><p><strong>你管这玩意儿叫树？？？</strong></p><p>没错，这玩意儿还真叫树，只不过这棵树已经退化为一个链表了，我们管它叫 <strong>斜树</strong>。</p><p><strong>如果这样，那我为啥不直接用链表呢?</strong></p><p>谁说不是呢？</p><p>二叉树相比于链表，由于父子节点以及兄弟节点之间往往具有某种特殊的关系，这种关系使得我们在树中对数据进行<strong>搜索</strong>和<strong>修改</strong>时，相对于链表更加快捷便利。</p><p>但是，如果二叉树退化为一个链表了，那么那么树所具有的优秀性质就难以表现出来，效率也会大打折，为了避免这样的情况，我们希望每个做 “家长”（父结点） 的，都 <strong>一碗水端平</strong>，分给左儿子和分给右儿子的尽可能一样多，相差最多不超过一层，如下图所示：</p><p><img src="'+u+'" alt=""></p><h2 id="二叉树的存储" tabindex="-1"><a class="header-anchor" href="#二叉树的存储" aria-hidden="true">#</a> 二叉树的存储</h2><p>二叉树的存储主要分为 <strong>链式存储</strong> 和 <strong>顺序存储</strong> 两种：</p><h3 id="链式存储" tabindex="-1"><a class="header-anchor" href="#链式存储" aria-hidden="true">#</a> 链式存储</h3><p>和链表类似，二叉树的链式存储依靠指针将各个节点串联起来，不需要连续的存储空间。</p><p>每个节点包括三个属性：</p><ul><li>数据 data。data 不一定是单一的数据，根据不同情况，可以是多个具有不同类型的数据。</li><li>左节点指针 left</li><li>右节点指针 right。</li></ul><p>可是 JAVA 没有指针啊！</p><p>那就直接引用对象呗（别问我对象哪里找）</p><p><img src="'+v+'" alt=""></p><h3 id="顺序存储" tabindex="-1"><a class="header-anchor" href="#顺序存储" aria-hidden="true">#</a> 顺序存储</h3><p>顺序存储就是利用数组进行存储，数组中的每一个位置仅存储节点的 data，不存储左右子节点的指针，子节点的索引通过数组下标完成。根结点的序号为 1，对于每个节点 Node，假设它存储在数组中下标为 i 的位置，那么它的左子节点就存储在 2i 的位置，它的右子节点存储在下标为 2i+1 的位置。</p><p>一棵完全二叉树的数组顺序存储如下图所示：</p><p><img src="'+k+'" alt=""></p><p>大家可以试着填写一下存储如下二叉树的数组，比较一下和完全二叉树的顺序存储有何区别：</p><p><img src="'+f+'" alt=""></p><p>可以看到，如果我们要存储的二叉树不是完全二叉树，在数组中就会出现空隙，导致内存利用率降低</p><h2 id="二叉树的遍历" tabindex="-1"><a class="header-anchor" href="#二叉树的遍历" aria-hidden="true">#</a> 二叉树的遍历</h2><h3 id="先序遍历" tabindex="-1"><a class="header-anchor" href="#先序遍历" aria-hidden="true">#</a> 先序遍历</h3><p><img src="'+h+`" alt=""></p><p>二叉树的先序遍历，就是先输出根结点，再遍历左子树，最后遍历右子树，遍历左子树和右子树的时候，同样遵循先序遍历的规则，也就是说，我们可以递归实现先序遍历。</p><p>代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">preOrder</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	system<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">preOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">preOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="中序遍历" tabindex="-1"><a class="header-anchor" href="#中序遍历" aria-hidden="true">#</a> 中序遍历</h3><p><img src="`+g+'" alt=""></p><p>二叉树的中序遍历，就是先递归中序遍历左子树，再输出根结点的值，再递归中序遍历右子树，大家可以想象成一巴掌把树压扁，父结点被拍到了左子节点和右子节点的中间，如下图所示：</p><p><img src="'+m+`" alt=""></p><p>代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">inOrder</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">inOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
	system<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">inOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="后序遍历" tabindex="-1"><a class="header-anchor" href="#后序遍历" aria-hidden="true">#</a> 后序遍历</h3><p><img src="`+A+`" alt=""></p><p>二叉树的后序遍历，就是先递归后序遍历左子树，再递归后序遍历右子树，最后输出根结点的值</p><p>代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">postOrder</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">postOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">postOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
	system<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,56);function R(w,N){const t=c("ExternalLinkIcon");return p(),i("div",null,[b,s("blockquote",null,[s("p",null,[n("关于树的深度和高度的定义可以看 stackoverflow 上的这个问题："),s("a",X,[n("What is the difference between tree depth and height?"),e(t)]),n(" 。")])]),x,s("p",null,[j,n(" 的第 i 层至多拥有 "),P,n(" 个节点，深度为 k 的二叉树至多总共有 "),y,n(" 个节点（满二叉树的情况），至少有 2^(k) 个节点（关于节点的深度的定义国内争议比较多，我个人比较认可维基百科对"),s("a",H,[n("节点深度的定义"),e(t)]),n("）。")]),Z])}const E=o(z,[["render",R],["__file","tree.html.vue"]]);export{E as default};
