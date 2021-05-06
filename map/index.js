const m = new Map()
// 增
m.set('a','aaa')
m.set('b','bbb')
m.entries()
console.log(m)

//删
m.delete('b')
console.log(m)

// 改
m.set('a','changed')

// 查
m.get('a')


console.log(m.get('a'))