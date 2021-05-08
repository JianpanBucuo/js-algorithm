const graph = {
    0:[1,2],
    1:[2],
    2:[0,3],
    3:[3]
}
// 深度优先遍历
const visited = new Set()
const dfs = (n) => {
    visited.add(n)
    console.log(n)
    graph[n].forEach(v => {
        if(visited.has(v)) return
        dfs(v)
    })
}
console.log('深度优先遍历')
dfs(2)

// 广度优先遍历
console.log('广度优先遍历')


const bfs = (x) => {
    const bfsVisited = new Set()

    const queue = []
    queue.push(x)
    while(queue.length > 0 ){
       
        const n = queue.shift()
        bfsVisited.add(n)
        console.log(n)
        graph[n].forEach(c => {
            if(bfsVisited.has(c)) return
            queue.push(c)
        })
     
    }
}
bfs(2)