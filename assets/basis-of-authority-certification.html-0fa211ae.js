const e=JSON.parse('{"key":"v-cab6b5e6","path":"/system-design/security/basis-of-authority-certification.html","title":"认证授权基础概念详解","lang":"zh-CN","frontmatter":{"title":"认证授权基础概念详解","category":"系统设计","tag":["安全"],"description":"认证 (Authentication) 和授权 (Authorization)的区别是什么？ 这是一个绝大多数人都会混淆的问题。首先先从读音上来认识这两个名词，很多人都会把它俩的读音搞混，所以我建议你先先去查一查这两个单词到底该怎么读，他们的具体含义是什么。 说简单点就是： 认证 (Authentication)： 你是谁。 授权 (Authorization)： 你有权限干什么。 稍微正式点（啰嗦点）的说法就是 ：","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/system-design/security/basis-of-authority-certification.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"认证授权基础概念详解"}],["meta",{"property":"og:description","content":"认证 (Authentication) 和授权 (Authorization)的区别是什么？ 这是一个绝大多数人都会混淆的问题。首先先从读音上来认识这两个名词，很多人都会把它俩的读音搞混，所以我建议你先先去查一查这两个单词到底该怎么读，他们的具体含义是什么。 说简单点就是： 认证 (Authentication)： 你是谁。 授权 (Authorization)： 你有权限干什么。 稍微正式点（啰嗦点）的说法就是 ："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-08-27T04:16:32.000Z"}],["meta",{"property":"article:tag","content":"安全"}],["meta",{"property":"article:modified_time","content":"2022-08-27T04:16:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"认证授权基础概念详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-08-27T04:16:32.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"认证 (Authentication) 和授权 (Authorization)的区别是什么？","slug":"认证-authentication-和授权-authorization-的区别是什么","link":"#认证-authentication-和授权-authorization-的区别是什么","children":[]},{"level":2,"title":"RBAC 模型了解吗？","slug":"rbac-模型了解吗","link":"#rbac-模型了解吗","children":[]},{"level":2,"title":"什么是 Cookie ? Cookie 的作用是什么?","slug":"什么是-cookie-cookie-的作用是什么","link":"#什么是-cookie-cookie-的作用是什么","children":[]},{"level":2,"title":"如何在项目中使用 Cookie 呢？","slug":"如何在项目中使用-cookie-呢","link":"#如何在项目中使用-cookie-呢","children":[]},{"level":2,"title":"Cookie 和 Session 有什么区别？","slug":"cookie-和-session-有什么区别","link":"#cookie-和-session-有什么区别","children":[]},{"level":2,"title":"如何使用 Session-Cookie 方案进行身份验证？","slug":"如何使用-session-cookie-方案进行身份验证","link":"#如何使用-session-cookie-方案进行身份验证","children":[]},{"level":2,"title":"多服务器节点下 Session-Cookie 方案如何做？","slug":"多服务器节点下-session-cookie-方案如何做","link":"#多服务器节点下-session-cookie-方案如何做","children":[]},{"level":2,"title":"如果没有 Cookie 的话 Session 还能用吗？","slug":"如果没有-cookie-的话-session-还能用吗","link":"#如果没有-cookie-的话-session-还能用吗","children":[]},{"level":2,"title":"为什么 Cookie 无法防止 CSRF 攻击，而 Token 可以？","slug":"为什么-cookie-无法防止-csrf-攻击-而-token-可以","link":"#为什么-cookie-无法防止-csrf-攻击-而-token-可以","children":[]},{"level":2,"title":"什么是 JWT?JWT 由哪些部分组成？","slug":"什么是-jwt-jwt-由哪些部分组成","link":"#什么是-jwt-jwt-由哪些部分组成","children":[]},{"level":2,"title":"如何基于 JWT 进行身份验证？ 如何防止 JWT 被篡改？","slug":"如何基于-jwt-进行身份验证-如何防止-jwt-被篡改","link":"#如何基于-jwt-进行身份验证-如何防止-jwt-被篡改","children":[]},{"level":2,"title":"什么是 SSO?","slug":"什么是-sso","link":"#什么是-sso","children":[]},{"level":2,"title":"SSO 有什么好处？","slug":"sso-有什么好处","link":"#sso-有什么好处","children":[]},{"level":2,"title":"如何设计实现一个 SSO 系统?","slug":"如何设计实现一个-sso-系统","link":"#如何设计实现一个-sso-系统","children":[]},{"level":2,"title":"什么是 OAuth 2.0？","slug":"什么是-oauth-2-0","link":"#什么是-oauth-2-0","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1636454878000,"updatedTime":1661573792000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":8},{"name":"WT-AHA","email":"49048263+WT-AHA@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":12.66,"words":3798},"filePathRelative":"system-design/security/basis-of-authority-certification.md","localizedDate":"2021年11月9日","excerpt":"<h2> 认证 (Authentication) 和授权 (Authorization)的区别是什么？</h2>\\n<p>这是一个绝大多数人都会混淆的问题。首先先从读音上来认识这两个名词，很多人都会把它俩的读音搞混，所以我建议你先先去查一查这两个单词到底该怎么读，他们的具体含义是什么。</p>\\n<p>说简单点就是：</p>\\n<ul>\\n<li><strong>认证 (Authentication)：</strong> 你是谁。</li>\\n<li><strong>授权 (Authorization)：</strong> 你有权限干什么。</li>\\n</ul>\\n<p>稍微正式点（啰嗦点）的说法就是 ：</p>","copyright":{},"autoDesc":true}');export{e as data};
