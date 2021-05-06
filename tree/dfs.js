// 深度 deep 优先遍历
const dfs = (root) => {
    console.log(root.val)
    root.children.forEach(children => {
        dfs(children)
    })
}
// 广度优先遍历
const bfs = (root ) => {
    const queue = []
    queue.push(root)
    while(queue.length > 0) {
        const n =queue.shift()
        console.log(n.val)
        n.children.forEach(child => {
            queue.push(child)
        })
        
    }
}
const tree = {
    val:'a',
    children:[
        {
            val:'b',
            children:[
                {
                    val:'d',
                    children:[
                        {
                            val:'x',
                            children:[]
                        },
                        {
                            val:'z',
                            children:[]
                        }
                    ]
                },
                {
                    val:'e',
                    children:[]
                }
            ]
        },
        {
            val:'c',
            children:[
                {
                    val:'f',
                    children:[]
                },
                {
                    val:'g',
                    children:[]
                }
            ]
        }
    ]
}


console.log(dfs(tree))
console.log('-----------')
console.log(bfs(tree))