
const obj1 = {
    a:1,
    b:2
}
const obj2 = obj1
obj1.a = 10
console.log(obj2)



const arr =  [2,3,4]
const arr2 = arr;
arr[0] = 1;
console.log(arr2)

const arr1 = [10,20,30,40,50]
const [c, ,b] = arr1
console.log(b)
const [a, ,...rest] =arr1
console.log(rest)