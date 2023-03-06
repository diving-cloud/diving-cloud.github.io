const e=JSON.parse('{"key":"v-7b368930","path":"/java/concurrent/java-concurrent-questions-02.html","title":"Java 并发常见面试题总结（中）","lang":"zh-CN","frontmatter":{"title":"Java 并发常见面试题总结（中）","category":"Java","tag":["Java并发"],"head":[["meta",{"name":"keywords","content":"多线程,死锁,synchronized,ReentrantLock,volatile,ThreadLocal,线程池,CAS,AQS"}],["meta",{"name":"description","content":"Java并发常见知识点和面试题总结（含详细解答）。"}],["meta",{"property":"og:url","content":"https://javaguide.cn/JavaGuide/java/concurrent/java-concurrent-questions-02.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"Java 并发常见面试题总结（中）"}],["meta",{"property":"og:description","content":"JMM(Java 内存模型) JMM（Java 内存模型）相关的问题比较多，也比较重要，于是我单独抽了一篇文章来总结 JMM 相关的知识点和问题： JMM（Java 内存模型）详解 。 volatile 关键字 如何保证变量的可见性？ 在 Java 中，volatile 关键字可以保证变量的可见性，如果我们将变量声明为 volatile ，这就指示 JVM，这个变量是共享且不稳定的，每次使用它都到主存中进行读取。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-08T02:47:09.000Z"}],["meta",{"property":"article:tag","content":"Java并发"}],["meta",{"property":"article:modified_time","content":"2023-02-08T02:47:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 并发常见面试题总结（中）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-08T02:47:09.000Z\\",\\"author\\":[]}"]],"description":"JMM(Java 内存模型) JMM（Java 内存模型）相关的问题比较多，也比较重要，于是我单独抽了一篇文章来总结 JMM 相关的知识点和问题： JMM（Java 内存模型）详解 。 volatile 关键字 如何保证变量的可见性？ 在 Java 中，volatile 关键字可以保证变量的可见性，如果我们将变量声明为 volatile ，这就指示 JVM，这个变量是共享且不稳定的，每次使用它都到主存中进行读取。"},"headers":[{"level":2,"title":"JMM(Java 内存模型)","slug":"jmm-java-内存模型","link":"#jmm-java-内存模型","children":[]},{"level":2,"title":"volatile 关键字","slug":"volatile-关键字","link":"#volatile-关键字","children":[{"level":3,"title":"如何保证变量的可见性？","slug":"如何保证变量的可见性","link":"#如何保证变量的可见性","children":[]},{"level":3,"title":"如何禁止指令重排序？","slug":"如何禁止指令重排序","link":"#如何禁止指令重排序","children":[]},{"level":3,"title":"volatile 可以保证原子性么？","slug":"volatile-可以保证原子性么","link":"#volatile-可以保证原子性么","children":[]}]},{"level":2,"title":"乐观锁和悲观锁","slug":"乐观锁和悲观锁","link":"#乐观锁和悲观锁","children":[{"level":3,"title":"什么是悲观锁？使用场景是什么？","slug":"什么是悲观锁-使用场景是什么","link":"#什么是悲观锁-使用场景是什么","children":[]},{"level":3,"title":"什么是乐观锁？使用场景是什么？","slug":"什么是乐观锁-使用场景是什么","link":"#什么是乐观锁-使用场景是什么","children":[]},{"level":3,"title":"如何实现乐观锁？","slug":"如何实现乐观锁","link":"#如何实现乐观锁","children":[]},{"level":3,"title":"乐观锁存在哪些问题？","slug":"乐观锁存在哪些问题","link":"#乐观锁存在哪些问题","children":[]}]},{"level":2,"title":"synchronized 关键字","slug":"synchronized-关键字","link":"#synchronized-关键字","children":[{"level":3,"title":"synchronized 是什么？有什么用？","slug":"synchronized-是什么-有什么用","link":"#synchronized-是什么-有什么用","children":[]},{"level":3,"title":"如何使用 synchronized？","slug":"如何使用-synchronized","link":"#如何使用-synchronized","children":[]},{"level":3,"title":"构造方法可以用 synchronized 修饰么？","slug":"构造方法可以用-synchronized-修饰么","link":"#构造方法可以用-synchronized-修饰么","children":[]},{"level":3,"title":"synchronized 底层原理了解吗？","slug":"synchronized-底层原理了解吗","link":"#synchronized-底层原理了解吗","children":[]},{"level":3,"title":"JDK1.6 之后的 synchronized 底层做了哪些优化？","slug":"jdk1-6-之后的-synchronized-底层做了哪些优化","link":"#jdk1-6-之后的-synchronized-底层做了哪些优化","children":[]},{"level":3,"title":"synchronized 和 volatile 有什么区别？","slug":"synchronized-和-volatile-有什么区别","link":"#synchronized-和-volatile-有什么区别","children":[]}]},{"level":2,"title":"ReentrantLock","slug":"reentrantlock","link":"#reentrantlock","children":[{"level":3,"title":"ReentrantLock 是什么？","slug":"reentrantlock-是什么","link":"#reentrantlock-是什么","children":[]},{"level":3,"title":"公平锁和非公平锁有什么区别？","slug":"公平锁和非公平锁有什么区别","link":"#公平锁和非公平锁有什么区别","children":[]},{"level":3,"title":"synchronized 和 ReentrantLock 有什么区别？","slug":"synchronized-和-reentrantlock-有什么区别","link":"#synchronized-和-reentrantlock-有什么区别","children":[]},{"level":3,"title":"可中断锁和不可中断锁有什么区别？","slug":"可中断锁和不可中断锁有什么区别","link":"#可中断锁和不可中断锁有什么区别","children":[]}]},{"level":2,"title":"ReentrantReadWriteLock","slug":"reentrantreadwritelock","link":"#reentrantreadwritelock","children":[{"level":3,"title":"ReentrantReadWriteLock 是什么？","slug":"reentrantreadwritelock-是什么","link":"#reentrantreadwritelock-是什么","children":[]},{"level":3,"title":"ReentrantReadWriteLock 适合什么场景？","slug":"reentrantreadwritelock-适合什么场景","link":"#reentrantreadwritelock-适合什么场景","children":[]},{"level":3,"title":"共享锁和独占锁有什么区别？","slug":"共享锁和独占锁有什么区别","link":"#共享锁和独占锁有什么区别","children":[]},{"level":3,"title":"线程持有读锁还能获取写锁吗？","slug":"线程持有读锁还能获取写锁吗","link":"#线程持有读锁还能获取写锁吗","children":[]},{"level":3,"title":"读锁为什么不能升级为写锁？","slug":"读锁为什么不能升级为写锁","link":"#读锁为什么不能升级为写锁","children":[]}]},{"level":2,"title":"StampedLock","slug":"stampedlock","link":"#stampedlock","children":[{"level":3,"title":"StampedLock 是什么？","slug":"stampedlock-是什么","link":"#stampedlock-是什么","children":[]},{"level":3,"title":"StampedLock 的性能为什么更好？","slug":"stampedlock-的性能为什么更好","link":"#stampedlock-的性能为什么更好","children":[]},{"level":3,"title":"StampedLock 适合什么场景？","slug":"stampedlock-适合什么场景","link":"#stampedlock-适合什么场景","children":[]},{"level":3,"title":"StampedLock 的底层原理了解吗？","slug":"stampedlock-的底层原理了解吗","link":"#stampedlock-的底层原理了解吗","children":[]}]},{"level":2,"title":"Atomic 原子类","slug":"atomic-原子类","link":"#atomic-原子类","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1643619083000,"updatedTime":1675824429000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":17},{"name":"Guide","email":"koushuangbwcx@163.com","commits":3},{"name":"Carbda","email":"97345264+Carbda@users.noreply.github.com","commits":1},{"name":"Evan He","email":"1453064869@qq.com","commits":1},{"name":"Sr","email":"39112652+Itswag@users.noreply.github.com","commits":1},{"name":"Verne.Chung","email":"verne.zhong@gmail.com","commits":1}]},"readingTime":{"minutes":29.18,"words":8754},"filePathRelative":"java/concurrent/java-concurrent-questions-02.md","localizedDate":"2022年1月31日","excerpt":"<h2> JMM(Java 内存模型)</h2>\\n<p>JMM（Java 内存模型）相关的问题比较多，也比较重要，于是我单独抽了一篇文章来总结 JMM 相关的知识点和问题： <a href=\\"/JavaGuide/java/concurrent/jmm.html\\" target=\\"blank\\">JMM（Java 内存模型）详解</a> 。</p>\\n<h2> volatile 关键字</h2>\\n<h3> 如何保证变量的可见性？</h3>\\n<p>在 Java 中，<code>volatile</code> 关键字可以保证变量的可见性，如果我们将变量声明为 <strong><code>volatile</code></strong> ，这就指示 JVM，这个变量是共享且不稳定的，每次使用它都到主存中进行读取。</p>","copyright":{},"autoDesc":true}');export{e as data};
