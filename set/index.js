//去重
const arr = [1,1,2,2]
const arrs = [...new Set(arr)]
console.log(arrs)

// 判断元素是否在集合中
const set = new Set(arr)
const has = set.has(3)
console.log(has)

// 求交集
const set2 = new Set([1,2,3,4,5])
const set3 = new Set([...set2].filter(item => {
    return set2.has(item)
}) )

// 求差集
const set5 = new Set([1,2,3,4,5])
const set6 = new Set([...set2].filter(item => {
    return !set2.has(item)
}) )