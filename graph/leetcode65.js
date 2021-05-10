// Leetcode 65
// 一个 小数 或者 整数
// （可选）一个 'e' 或 'E' ，后面跟着一个 整数
// 小数（按顺序）可以分成以下几个部分：

// （可选）一个符号字符（'+' 或 '-'）
// 下述格式之一：
// 至少一位数字，后面跟着一个点 '.'
// 至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
// 一个点 '.' ，后面跟着至少一位数字
// 整数（按顺序）可以分成以下几个部分：

// （可选）一个符号字符（'+' 或 '-'）
// 至少一位数字

// 1. 构建一个表示状态的图
// 2. 遍历字符串，并沿着图走，如果到了某个节点无路可走就返回false
// 3. 遍历结束走到3,5,6当中的某个状态 则返回true，否则返回false】

// 邻接表 


const isNumber = (num) => {
    const graph = {
        0:{
            'blank':0,
            'sign': 1, // + -
            '.': 2,
            'digit':6,
        },
        1:{
            'digit':6,
            '.':2
        },
        2:{
            'digit':3
        },
        3:{
            'digit':3,
            'e':4
        },
        4:{
            'digit':5,
            'sign':7
        },
        5:{
            'digit':5
        },
        6:{
            'digit':6,
            'e':4,
            '.':3
        },
        7:{
            'digit':5
        }
    
    }
    
    let state = 0
    for(let c of num.trim()) {
        if(c >=0 || c <= 9) {
            c ='digit'
        }
        if(c === '') {
            c ='blank'
        }
        if(c === '+' || c === '-') {
            c = 'sign'
        }
        state = graph[state][c]
        if(state === undefined) {
            return false
        }
    }
    if(state === 3 || state  === 5 || state === 6) {
        return true
    }
    return false
}
console.log(
    isNumber('1234.e1')
)

