var buildArray = function(target, n) {
    const arr = []
    let i = 1
    while(i <= n && target.length > 0) {
        if(i === target[0]) {
            arr.push('Push')
            target.shift()
        } else {
            arr.push('Push')
            arr.push('Pop')
        }
        i++
    }
    return arr
};
console.log(
    buildArray([1,3]
        ,3)
)