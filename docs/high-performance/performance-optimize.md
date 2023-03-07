---
title: 性能优化
category: 高性能
icon: "fuzaijunheng"
head:
  - - meta
    - name: keywords
      content: 客户端负载均衡,服务负载均衡,Nginx,负载均衡算法,七层负载均衡,DNS解析
  - - meta
    - name: description
      content: 负载均衡指的是将用户请求分摊到不同的服务器上处理，以提高系统整体的并发处理能力。负载均衡可以简单分为服务端负载均衡和客户端负载均衡 这两种。服务端负载均衡涉及到的知识点更多，工作中遇到的也比较多，因为，我会花更多时间来介绍。
---

**负载均衡** 相关的面试题为我的[知识星球](https://javaguide.cn/about-the-author/zhishixingqiu-two-years.html)（点击链接即可查看详细介绍以及加入方法）专属内容，已经整理到了[《Java 面试指北》](https://javaguide.cn/zhuanlan/java-mian-shi-zhi-bei.html)中。

[《Java 面试指北》](https://javaguide.cn/zhuanlan/java-mian-shi-zhi-bei.html)（点击链接即可查看详细介绍）的部分内容展示如下，你可以将其看作是 [JavaGuide](https://javaguide.cn) 的补充完善，两者可以配合使用。

![](https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/xingqiu/image-20220304102536445.png)

最近几年，市面上有越来越多的“技术大佬”开始办培训班/训练营，动辄成千上万的学费，却并没有什么干货，单纯的就是割韭菜。

为了帮助更多同学准备 Java 面试以及学习 Java ，我创建了一个纯粹的知识星球。虽然收费只有培训班/训练营的百分之一，但是知识星球里的内容质量更高，提供的服务也更全面。

