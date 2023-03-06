const e=JSON.parse('{"key":"v-bd51e9fc","path":"/java/new-features/java15.html","title":"Java 15 新特性概览","lang":"zh-CN","frontmatter":{"title":"Java 15 新特性概览","category":"Java","tag":["Java新特性"],"description":"CharSequence CharSequence 接口添加了一个默认方法 isEmpty() 来判断字符序列为空，如果是则返回 true。 public interface CharSequence { default boolean isEmpty() { return this.length() == 0; } }","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/JavaGuide/java/new-features/java15.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"Java 15 新特性概览"}],["meta",{"property":"og:description","content":"CharSequence CharSequence 接口添加了一个默认方法 isEmpty() 来判断字符序列为空，如果是则返回 true。 public interface CharSequence { default boolean isEmpty() { return this.length() == 0; } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-09-28T12:35:46.000Z"}],["meta",{"property":"article:tag","content":"Java新特性"}],["meta",{"property":"article:modified_time","content":"2022-09-28T12:35:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 15 新特性概览\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-09-28T12:35:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"CharSequence","slug":"charsequence","link":"#charsequence","children":[]},{"level":2,"title":"TreeMap","slug":"treemap","link":"#treemap","children":[]},{"level":2,"title":"ZGC(转正)","slug":"zgc-转正","link":"#zgc-转正","children":[]},{"level":2,"title":"EdDSA(数字签名算法)","slug":"eddsa-数字签名算法","link":"#eddsa-数字签名算法","children":[]},{"level":2,"title":"文本块(转正)","slug":"文本块-转正","link":"#文本块-转正","children":[]},{"level":2,"title":"隐藏类(Hidden Classes)","slug":"隐藏类-hidden-classes","link":"#隐藏类-hidden-classes","children":[]},{"level":2,"title":"预览新特性","slug":"预览新特性","link":"#预览新特性","children":[{"level":3,"title":"密封类","slug":"密封类","link":"#密封类","children":[]},{"level":3,"title":"instanceof 模式匹配","slug":"instanceof-模式匹配","link":"#instanceof-模式匹配","children":[]}]},{"level":2,"title":"Java15 其他新特性","slug":"java15-其他新特性","link":"#java15-其他新特性","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[{"level":3,"title":"关于预览特性","slug":"关于预览特性","link":"#关于预览特性","children":[]},{"level":3,"title":"JVM 虚拟机优化","slug":"jvm-虚拟机优化","link":"#jvm-虚拟机优化","children":[]}]}],"git":{"createdTime":1664368546000,"updatedTime":1664368546000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":1}]},"readingTime":{"minutes":4.23,"words":1268},"filePathRelative":"java/new-features/java15.md","localizedDate":"2022年9月28日","excerpt":"<h2> CharSequence</h2>\\n<p><code>CharSequence</code> 接口添加了一个默认方法 <code>isEmpty()</code> 来判断字符序列为空，如果是则返回 true。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">CharSequence</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">default</span> <span class=\\"token keyword\\">boolean</span> <span class=\\"token function\\">isEmpty</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">length</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">==</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{e as data};
