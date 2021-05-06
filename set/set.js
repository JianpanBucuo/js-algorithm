const mySet = new Set()

mySet.add(1)
mySet.add(5)
console.log(mySet)

mySet.has(5)
console.log(
    mySet.size
)

for(let i of mySet.keys()) {
    console.log(i)
}
//  Set -> Array

const myArr = Array.from(mySet)

// Array -> Set
const set4 = new Set([1,2,3,4])