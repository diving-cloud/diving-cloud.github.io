---
title:  泛型&通配符详解
category: Java
tag:
  - Java基础
---

## 通配符

### 什么是通配符？有什么作用？

泛型类型是固定的，某些场景下使用起来不太灵活，于是，通配符就来了！通配符可以允许类型参数变化，用来解决泛型无法协变的问题。

举个例子：

### 通配符 ？和常用的泛型 T 之间有什么区别？

- T 可以用于声明变量或常量而 ? 不行。

- T 一般用于声明泛型类或方法，通配符 ? 一般用于泛型方法的调用代码和形参。
- T 在编译期会被擦除为限定类型或 Object，通配符用于捕获具体类型。

### 什么是无界通配符？

无界通配符可以接收任何泛型类型数据，用于实现不依赖于具体类型参数的简单方法，可以捕获参数类型并交由泛型方法进行处理。
List<?> 和 List 有区别吗？** 当然有！

- List<?> list 表示 list 是持有某种特定类型的 List，但是不知道具体是哪种类型。因此，我们添加元素进去的时候会报错。

- List list 表示 list 是持有的元素的类型是 Object，因此可以添加任何类型的对象，只不过编译器会有警告信息。
  ```java
List<?> list = new ArrayList<>();
list.add("sss");//报错
List list2 = new ArrayList<>();
list2.add("sss");//警告信息

### 什么是上边界通配符？什么是下边界通配符？

在使用泛型的时候，我们还可以为传入的泛型类型实参进行上下边界的限制，如：**类型实参只准传入某种类型的父类或某种类型的子类**。

**上边界通配符 extends** 可以实现泛型的向上转型即传入的类型实参必须是指定类型的子类型。

举个例子：

```java
// 限制类型为 Person 的子类
<? extends Person>
// 限制类型为 Manager 的父类
<? super Manager>
```

类型边界可以设置多个，还可以对 T 类型进行限制。

**下边界通配符 super** 与上边界通配符 extends刚好相反，它可以实现泛型的向下转型即传入的类型实参必须是指定类型的父类型。

举个例子：

```java
//  限制必须是 Employee 类的父类
List<? super Employee>
```

**? extends xxx 和 ? super xxx 有什么区别?**

两者接收参数的范围不同。并且，使用 ? extends xxx 声明的泛型参数只能调用 get() 方法返回 xxx 类型，调用 set() 报错。使用 ? super xxx 声明的泛型参数只能调用 set() 方法接收 xxx 类型，调用 get() 报错。

**T extends xxx 和 ? extends xxx 又有什么区别？**

T extends xxx 用于定义泛型类和方法，擦除后为 xxx 类型， ? extends xxx 用于声明方法形参，接收 xxx 和其子类型。

**Class<?> 和 Class 的区别？**

直接使用 Class 的话会有一个类型警告，使用 Class<?> 则没有，因为 Class 是一个泛型类，接收原生类型会产生警告


### 以下代码是否能编译，为什么？
```java
class Shape { /* ... */ }
class Circle extends Shape { /* ... */ }
class Rectangle extends Shape { /* ... */ }

class Node<T> { /* ... */ }

Node<Circle> nc = new Node<>();
Node<Shape>  ns = nc;
```

不能，因为`Node<Circle>`不是`<Shape>`的子类

```java
class Shape { /* ... */ }
class Circle extends Shape { /* ... */ }
class Rectangle extends Shape { /* ... */ }

class Node<T> { /* ... */ }
class ChildNode<T> extends Node<T>{

}
ChildNode<Circle> nc = new ChildNode<>();
Node<Circle>  ns = nc;
```

可以编译，`ChildNode<Circle>`是`Node<Circle>`的子类

```java
public static void print(List<? extends Number> list) {
    for (Number n : list)
        System.out.print(n + " ");
    System.out.println();
}
```

可以编译，`List<? extends Number>` 可以往外取元素，但是无法调用 add() 添加元素。
## 参考

- Java 官方文档 ： https://docs.oracle.com/javase/tutorial/java/generics/index.html
- Java 基础 一文搞懂泛型：https://www.cnblogs.com/XiiX/p/14719568.html




