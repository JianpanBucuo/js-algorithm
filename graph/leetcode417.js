// leetcode 417 

// 1. 新建两个矩阵，分别记录能流到两个大洋的坐标
// 2. 从海岸线，双管齐下，同时深度优先遍历图，过程中填充上述矩阵
// 3. 遍历两个矩阵，找出能流到两个大洋的坐标

const xy = (matrix) => {
    if(!matrix || !matrix[0]) {
        return 
    }
    const m  = matrix.length
    const n = matrix[0].length
    const flow1 = Array.from({length:m},() => {
        return new Array(n).fill(false)
    })
    const flow2 = Array.from({length:m},() => {
        return new Array(n).fill(false)
    })
    console.log(flow1)
    console.log(flow2)

    const dfs = (r, c, flow) => {
        // r 行 c 列 flow：矩阵
            flow[r][c] = true
            // [r-1][c]
            // [r+1][c]
            // [r][c-1]
            //[r][c+1]
            const a =  [[r-1,c],[r+1,c],[r,c-1],[r,c+1]]
            a.map(([nr, nc]) => {
                if(
                    // 保证在矩阵中
                    nr >=0 && nr < m && 
                    nc >=0 && nc < n && 
                    // 保证没有访问过
                    !flow[nr][nc] && 
                    // 保证逆流而上 保证下个节点的值 是 >= 上个节点的值
                    matrix[nr][nc] >= matrix[r][c]
                ) {
                    dfs(nr, nc, flow)
                }
            })
        }
        for(let i =0; i< m;i++) {
            dfs(i,0, flow1)
            dfs(i, n-1, flow2)
        }
        for(let c = 0; c < n; c++) {
            dfs(0, c, flow1)
            dfs(m-1,c, flow2 )
        }
        // 能流到两个大洋的坐标
        const res = []
        console.log('flow1',flow1)
        console.log('flow2',flow2)
        for(let r =0; r < m; r++) {
            for(let c =0; c < n; c++) {
                if(flow1[r][c] && flow2[r][c]) {
                    res.push([r, c])
                }
                
            }   
        }
        console.log(res,'res')
        return res
}

xy([
    [1,2,2,3,5],
    [3,2,3,4,4],
    [2,4,5,3,1],
    [6,7,1,4,5],
    [5,1,1,2,4]
])

xy([
    [1,2,2,3,5],
    [3,2,3,4,4],
    [2,4,5,3,1],
    [6,7,1,4,5],
    [5,1,1,2,4]
])