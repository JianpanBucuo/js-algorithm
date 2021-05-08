//链表

const a = {
    val:'a'
}
const b = {
    val:'b'
}
const c = {
    val: 'c'
}
const d = {
    val: 'd'
}
a.next = b
b.next = c
c.next = d

//遍历链表
// p代表指针
let p = a 

while(p) {
    console.log(p.val)
    p = p.next
}

//链表中插入值

const e = {
    val:'e'
}
c.next = e 
e.next = d

 

//删除链表
c.next = d 
//这样e就被删除掉了

var deleteNode = function (node) {
    node.val = node.next.val
    node.next = node.next.next 
}

// 翻转链表
var reverseList = (head) => {
    let p1 = null
    while(head) {
        const temp =head.next
        head.next = p1
        p1 = head
        head = temp
    }
    return p1
}
console.log(
    reverseList(a) 
)
reverseList(a)

// const reverse = (head) => {
//     let p1 = null
//     while(head) {
//         const temp = head.next
//         head.next = p1
//         p1 = head
//         head = temp
//     }
// }

