import{_ as s,X as o,Y as h,Z as e,$ as t,a0 as n,a2 as i,C as r}from"./framework-9b4b2ab3.js";const l={},u=e("strong",null,"常见 SQL 优化手段总结",-1),g={href:"https://javaguide.cn/about-the-author/zhishixingqiu-two-years.html",target:"_blank",rel:"noopener noreferrer"},c={href:"https://javaguide.cn/zhuanlan/java-mian-shi-zhi-bei.html",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,[e("img",{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javamianshizhibei/sql-optimization.png",alt:""})],-1),d={href:"https://javaguide.cn/zhuanlan/java-mian-shi-zhi-bei.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://javaguide.cn",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,[e("img",{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/xingqiu/image-20220304102536445.png",alt:""})],-1),v=e("p",null,"最近几年，市面上有越来越多的“技术大佬”开始办培训班/训练营，动辄成千上万的学费，却并没有什么干货，单纯的就是割韭菜。",-1),f=e("p",null,"为了帮助更多同学准备 Java 面试以及学习 Java ，我创建了一个纯粹的知识星球。虽然收费只有培训班/训练营的百分之一，但是知识星球里的内容质量更高，提供的服务也更全面。",-1),b={href:"https://javaguide.cn/about-the-author/zhishixingqiu-two-years.html",target:"_blank",rel:"noopener noreferrer"},z=i('<div align="center"><a href="https://javaguide.cn/about-the-author/zhishixingqiu-two-years.html"><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/xingqiu/image-20220311203414600.png" style="margin:0 auto;"></a></div><p>下面是星球提供的部分服务（点击下方图片即可获取知识星球的详细介绍）：</p><div align="center"><a href="https://javaguide.cn/about-the-author/zhishixingqiu-two-years.html"><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/xingqiu/xingqiufuwu.png" style="margin:0 auto;"></a></div><p><strong>我有自己的原则，不割韭菜，用心做内容，真心希望帮助到你！</strong></p>',4),x={href:"https://javaguide.cn/about-the-author/zhishixingqiu-two-years.html",target:"_blank",rel:"noopener noreferrer"},y=i('<p>这里再送一个 30 元的新人优惠券（续费半价）。</p><div align="center"><a href="https://javaguide.cn/about-the-author/zhishixingqiu-two-years.html"><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/xingqiu/xingqiuyouhuijuanheyi.png" style="margin:0 auto;"></a></div><p>进入星球之后，记得添加微信，我会发你详细的星球使用指南。</p><div align="center"><a href="https://javaguide.cn/about-the-author/zhishixingqiu-two-years.html"><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/IMG_3007.jpg" style="margin:0 auto;"></a></div>',4);function j(q,k){const a=r("ExternalLinkIcon");return o(),h("div",null,[e("p",null,[u,t(" 相关的内容为我的"),e("a",g,[t("知识星球"),n(a)]),t("（点击链接即可查看详细介绍以及加入方法）专属内容，已经整理到了"),e("a",c,[t("《Java 面试指北》"),n(a)]),t("中。")]),p,e("p",null,[e("a",d,[t("《Java 面试指北》"),n(a)]),t("（点击链接即可查看详细介绍）的部分内容展示如下，你可以将其看作是 "),e("a",m,[t("JavaGuide"),n(a)]),t(" 的补充完善，两者可以配合使用。")]),_,v,f,e("p",null,[t("欢迎准备 Java 面试以及学习 Java 的同学加入我的"),e("a",b,[t("知识星球"),n(a)]),t("，干货非常多，学习氛围也很不错！收费虽然是白菜价，但星球里的内容或许比你参加上万的培训班质量还要高。")]),z,e("p",null,[t("如果你感兴趣的话，不妨花 3 分钟左右看看星球的详细介绍： "),e("a",x,[t("JavaGuide 知识星球详细介绍"),n(a)]),t("。")]),y])}const J=s(l,[["render",j],["__file","sql-optimization.html.vue"]]);export{J as default};
