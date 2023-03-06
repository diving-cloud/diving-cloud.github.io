const t=JSON.parse('{"key":"v-236e095c","path":"/tools/git/git-intro.html","title":"Git 核心概念总结","lang":"zh-CN","frontmatter":{"title":"Git 核心概念总结","category":"开发工具","tag":["Git"],"description":"版本控制 什么是版本控制 版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。 除了项目源代码，你可以对任何类型的文件进行版本控制。 为什么要版本控制 有了它你就可以将某个文件回溯到之前的状态，甚至将整个项目都回退到过去某个时间点的状态，你可以比较文件的变化细节，查出最后是谁修改了哪个地方，从而找出导致怪异问题出现的原因，又是谁在何时报告了某个功能缺陷等等。 本地版本控制系统 许多人习惯用复制整个项目目录的方式来保存不同的版本，或许还会改名加上备份时间以示区别。 这么做唯一的好处就是简单，但是特别容易犯错。 有时候会混淆所在的工作目录，一不小心会写错文件或者覆盖意想外的文件。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/JavaGuide/tools/git/git-intro.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"Git 核心概念总结"}],["meta",{"property":"og:description","content":"版本控制 什么是版本控制 版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。 除了项目源代码，你可以对任何类型的文件进行版本控制。 为什么要版本控制 有了它你就可以将某个文件回溯到之前的状态，甚至将整个项目都回退到过去某个时间点的状态，你可以比较文件的变化细节，查出最后是谁修改了哪个地方，从而找出导致怪异问题出现的原因，又是谁在何时报告了某个功能缺陷等等。 本地版本控制系统 许多人习惯用复制整个项目目录的方式来保存不同的版本，或许还会改名加上备份时间以示区别。 这么做唯一的好处就是简单，但是特别容易犯错。 有时候会混淆所在的工作目录，一不小心会写错文件或者覆盖意想外的文件。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-23T04:45:00.000Z"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:modified_time","content":"2023-02-23T04:45:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git 核心概念总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-23T04:45:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"版本控制","slug":"版本控制","link":"#版本控制","children":[{"level":3,"title":"什么是版本控制","slug":"什么是版本控制","link":"#什么是版本控制","children":[]},{"level":3,"title":"为什么要版本控制","slug":"为什么要版本控制","link":"#为什么要版本控制","children":[]},{"level":3,"title":"本地版本控制系统","slug":"本地版本控制系统","link":"#本地版本控制系统","children":[]},{"level":3,"title":"集中化的版本控制系统","slug":"集中化的版本控制系统","link":"#集中化的版本控制系统","children":[]},{"level":3,"title":"分布式版本控制系统","slug":"分布式版本控制系统","link":"#分布式版本控制系统","children":[]}]},{"level":2,"title":"认识 Git","slug":"认识-git","link":"#认识-git","children":[{"level":3,"title":"Git 简史","slug":"git-简史","link":"#git-简史","children":[]},{"level":3,"title":"Git 与其他版本管理系统的主要区别","slug":"git-与其他版本管理系统的主要区别","link":"#git-与其他版本管理系统的主要区别","children":[]},{"level":3,"title":"Git 的三种状态","slug":"git-的三种状态","link":"#git-的三种状态","children":[]}]},{"level":2,"title":"Git 使用快速入门","slug":"git-使用快速入门","link":"#git-使用快速入门","children":[{"level":3,"title":"获取 Git 仓库","slug":"获取-git-仓库","link":"#获取-git-仓库","children":[]},{"level":3,"title":"记录每次更新到仓库","slug":"记录每次更新到仓库","link":"#记录每次更新到仓库","children":[]},{"level":3,"title":"一个好的 Git 提交消息","slug":"一个好的-git-提交消息","link":"#一个好的-git-提交消息","children":[]},{"level":3,"title":"推送改动到远程仓库","slug":"推送改动到远程仓库","link":"#推送改动到远程仓库","children":[]},{"level":3,"title":"远程仓库的移除与重命名","slug":"远程仓库的移除与重命名","link":"#远程仓库的移除与重命名","children":[]},{"level":3,"title":"查看提交历史","slug":"查看提交历史","link":"#查看提交历史","children":[]},{"level":3,"title":"撤销操作","slug":"撤销操作","link":"#撤销操作","children":[]},{"level":3,"title":"分支","slug":"分支","link":"#分支","children":[]}]},{"level":2,"title":"学习资料推荐","slug":"学习资料推荐","link":"#学习资料推荐","children":[]}],"git":{"createdTime":1636512743000,"updatedTime":1677127500000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":4},{"name":"Guide","email":"koushuangbwcx@163.com","commits":1}]},"readingTime":{"minutes":11.57,"words":3472},"filePathRelative":"tools/git/git-intro.md","localizedDate":"2021年11月10日","excerpt":"<h2> 版本控制</h2>\\n<h3> 什么是版本控制</h3>\\n<p>版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。 除了项目源代码，你可以对任何类型的文件进行版本控制。</p>\\n<h3> 为什么要版本控制</h3>\\n<p>有了它你就可以将某个文件回溯到之前的状态，甚至将整个项目都回退到过去某个时间点的状态，你可以比较文件的变化细节，查出最后是谁修改了哪个地方，从而找出导致怪异问题出现的原因，又是谁在何时报告了某个功能缺陷等等。</p>\\n<h3> 本地版本控制系统</h3>\\n<p>许多人习惯用复制整个项目目录的方式来保存不同的版本，或许还会改名加上备份时间以示区别。 这么做唯一的好处就是简单，但是特别容易犯错。 有时候会混淆所在的工作目录，一不小心会写错文件或者覆盖意想外的文件。</p>","copyright":{},"autoDesc":true}');export{t as data};
