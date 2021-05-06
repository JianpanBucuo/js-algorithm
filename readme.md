##### 数据结构

计算机存储、组织数据的方式

- 程序 = 数据结构 + 算法
- 数据结构为算法提供服务，算法围绕数据结构

1. 栈 队列 链表 （有序）
2. 集合 字典 （无序）
3. 树，堆，图 （有连接关系）

算法

- 链表： 遍历链表，删除链表节点
- 树、图：深度/广度优先遍历
- 数组：冒泡/选择/插入/归并/快速排序、 顺序/二分搜索

##### 时间复杂度

定性描述该算法的运行时间
O(1) O(n) O(logN)

n2 > n > log n > 1

```js
// O(1) 时间复杂度为 O(1)
// 永远只执行一次
let i = 0
i+ =1

// O(n)： 时间复杂度为 O(n)
for(let i =0; i< n; i++) {
    console.log(i)
}

/*
* O(n) + O(1) = O(n)
*  如果两个时间复杂度先后排列，我们就把它们相加， 取增长趋势更快的那个
*/
let j = 0
j+ =1
for(let i =0; i< n; i++) {
    console.log(i)
}
/*
* O(n) * O(n) = O(n2)
*/
for(let i =0; i< n; i++) {
    for(let j =0; j < n; j++) {
        console.log(i)
    }
}

/**
* O(logN) 以2为底的logN
*/
let i =1;
while(i < n) {
    console.log(i)
    i = i * 2
}
```

##### 空间复杂度

也是用 O(n)表示
O(1) O(n) O(n2)
`运算在运行过程中临时占用存储空间大小的量度`

```js
// O(1)  因为只声明了单个变量，单个变量所占用的内存永远为1
let i = 0;
i+ = 1

// O(n)
const list = []
for(let i = 0; i< n; i++) {
    list.push(i)
}

// O(n2)
const matrix = []
for(let i =0; i<n;n++) {
    matrix.push([])
    for(let j = 0; j < n; j++) {
        matrix[i].push(j)
    }
}
```

##### 栈

`后进先出的数据结构`

<!-- push pop -->

应用场景

1. 十进制转二进制，
2. 判断字符串中的括号是否有效
3. 函数调用堆栈 （最后调用的函数，最先执行完）

##### 队列

`先进先出的数据结构`

```js
const queue = []
// 入队
queue.push(1)
queue.push(2)
// 出队
queue.shift()
queue.shift()
```

使用场景
（先进先出，保证有序）

- 食堂排队打饭
- JS 异步中的任务队列
- 计算最近请求次数

###### JS 异步中的任务队列

JS 是单线程，无法同时处理异步中的并发任务，使用任务队列先后处理异步任务

##### 链表

`多个元素组成的列表`
`元素的存储不连续，用next指针连在一起`

链表与数组的差别

1. 数组增删非首尾元素，往往需要移动元素
2. 增删非首尾元素，不需要移动元素，只需要更改 next 指针即可

##### 集合

`无序且唯一的数据结构`
ES6 中有集合，名为 Set

集合的常用操作：`去重，判断某元素是否在集合中，求交集`

```js
/*
 * 使用Set对象， new add delete has size
 *迭代Set： 多种迭代方法，Set与Array互转，求交集
 */
```

##### 字典

`与集合类似，字典也是存储唯一值的数据结构，但它是以键值对的形式来存储`
（用来做映射关系）
ES6 中名为 Map

常用操作： 增删改查

<!-- 7-3 -->

##### 树

`一种分层数据的抽象模型`

DOM 树，级联选择，树形控件

```js
const a = {
  value: 'a',
  label: 'b',
  children: [
    {
      value: 'a',
      label: 'b',
      children: [
        {
          value: 'a',
          label: 'b',
          children: []
        }
      ]
    }
  ]
}
```

树的常用操作：

1. 深度/广度优先遍历
2. 先中后序遍历（二叉树）

###### 深度优先遍历

尽可能深的搜索树的分支

###### 广度优先遍历

尽可能广的搜索树的分支

|-a
|---b
|---|---d
|---|---e
|---c
|---|---f
|---|---g

深度优先遍历 a -> b -> d -> e -> c -> f -> g
广度优先遍历 a -> b -> c -> d -> e -> f -> g

深度优先遍历算法 （递归）

1. 访问根节点
2. 对根节点的 children 挨个进行深度优先遍历

广度优先遍历

1. 新建一个队列，把根节点入队
2. 把队头出队访问
3. 把队头的 children 挨个入队
4. 重复 2，3 步骤，直到队列为空

###### 二叉树中的先中后遍历

`树中每个节点最多只能有两个子节点`

```js
const tree = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}
```

先序遍历算法

1. 访问`根`节点
2. 对根节点的`左`子树进行先序遍历
3. 对根节点的`右`子树进行先序遍历

中序遍历算法

1. 对根节点的`左`子树进行中序遍历
2. 访问`根`节点
3. 对根节点的`右`子树进行中序遍历
