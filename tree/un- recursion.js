// 非递归版 先中后序遍历
const { bt } = require('./bt')


const preOrder = (root) => {
    if(!root) return
    const stack = [root]
 
    while(stack.length) {
        const n = stack.pop()
        console.log(n.val)
        if(n.right) {
            stack.push(n.right)
        }
        if(n.left) {
            stack.push(n.left)
        }
    }
}

const inOrder = (root) => {
    if(!root) return
    const stack = []
    let p = root

    while(stack.length || p) {
        while(p) {
            stack.push(p)
            p = p.left
            
        }
        const n =stack.pop()
        console.log(n.val)
        p = n.right
    }
}

const deOrder = (root) => {
    if(!root)return
    const stack = [root]
    const outputStack = []
    while(stack.length) {
        const n = stack.pop()
        outputStack.push(n)
        if(n.right) {
            stack.push(n.right)
        }
        if(n.left) {
            stack.push(n.left)
        }
    }

    while(outputStack.length) {
        const pop = outputStack.pop()
        console.log(pop.val)
    } 

}
console.log('先序 非递归')
preOrder(bt)
console.log('中序 非递归')
inOrder(bt)

console.log('后序 非递归')
deOrder(bt)