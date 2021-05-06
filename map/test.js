// leetcode 349 两个数组的交集

const a = [1,2,3,5,6]
const b = [2,3,4]

const jiaoji = (arr1,arr2) => {
    const map = new Map()
    const res = []
    arr1.forEach(val  => {
        map.set(val,true)
    })
    arr2.forEach(v => {
        if(map.get(v) === true) {
            map.delete(v)
            res.push(v)
        }
    })
    return res
}
console.log(jiaoji(a,b))