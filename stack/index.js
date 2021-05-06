const stack = []

stack.push(1)
stack.push(122)
const item1 = stack.pop()
console.log(item1)


// leetcode 20 
/**
 * 
 * 
 * 思路
 * 1. 遇到 ( [ { 便入栈
 * 2. 遇到 )} ]则和栈顶比较， 如匹配则出栈
 * 3. 如不相匹配则函数错误， 
 * 4. 如最后数组为空则正确
 *   
 */
// 时间复杂度为O(n)
// 空间复杂度为 O(n)
const isValid = (s) => {
    if(s.length %2  === 1) {return false}
    const stack = []
    for( let i = 0; i< s.length; i++) {
        const c = s[i]
        if(c === '(' || c=== '[' || c === '{') {
            stack.push(c)
        } 
        else {
            const t = stack[stack.length - 1]
            if ((t === '(' && c === ')') ||
            (t === '{' && c === '}') ||
            (t === '[' && c === ']') 
            ) {
                stack.pop()
            }
            else{
                return false
            }
        }
    }
    return stack.length === 0
}
console.log(
    isValid('{}')
)
