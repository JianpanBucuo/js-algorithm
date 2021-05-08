const bt = {
    val:1,
    left:{
        val:2,
        left:{
            val:4,
            left:{
                val:5,
                left:null,
                right:null
            },
            right:{
                val:6,
                left:null,
                right:null
            }
        },
        right:{
                val:10,
                left:{
                    val:11,
                    left:null,
                    right:null
                },
                right:{
                    val:22,
                    left:null,
                    right:null
                }
        }
    },
    right:{
        val:3,
        left:null,
        right:null
    }
}

// 先序遍历
const preOrder = (root) => {
    if(root === null ) return
    console.log(root && root.val)
    preOrder(root.left)    
    preOrder(root.right)
}
console.log('先序遍历')
preOrder(bt)

// 中序遍历
// 先序遍历
const inOrder = (root) => {
    if(root === null ) return
    
    inOrder(root.left)    
    console.log(root && root.val)
    inOrder(root.right)
}

const unOrder = (root ) => {
    if(root === null ) return
    unOrder(root.left)   
    unOrder(root.right)
    console.log(root && root.val)
}
console.log('中序遍历')
inOrder(bt)
console.log('后序遍历')
unOrder(bt)

module.exports.bt = bt