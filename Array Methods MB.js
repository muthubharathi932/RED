/* an array is an ordered list of values. Each value is called an element, and each element has a numeric position in the array, known as its index.
Arrays in JavaScript are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on. */

//#Basic Operations on JavaScript Arrays

//#Accessing elements of an array
let a = [789,987,"AB de Villiers"]
console.log(a[1])
console.log(a[2])

//#Accessing the first element of an array
let b = ["Virat Kohli",17,"AB de Villiers"]
let c = b[0]
console.log("18 --->",c)

//#Accessing the last element of an array
let d = ["Virat Kohli",17,"AB de Villiers"]
let e = d[2]
console.log("17--->", e)

//#Modifying the array elements
let f = ["Virat Kohli", 99, "AB de Villiers"]
f[1] = "Yuvaraj Singh"
console.log(f) 

//#Array Length
let g = ["java", "python", "javascript"]
let h = g.length
console.log(h)

//#Array Methods

//#Concatenation
//The concat() method is used to concatenate two or more arrays and it gives the merged array.
let i = [1,2,3]
let j = [4,5,6]
let k = [7,8,9]
l = i.concat(j,k)
console.log(l)

//#Sort
//This method sorts an array alphabetically
let m = [98,76,87,12,56,24]
m.sort()
console.log(m)

//#Reverse
//The reverse() method is used to reverse the order of elements in an array. It modifies the array in place and returns a reference to the same array with the reversed order.
let n = [9,8,7,6,5,4,3,2,1]
n.reverse()
console.log(n)

//#Push
//The push() method is used to add an element at the end of an Array. As arrays in JavaScript are mutable objects, we can easily add or remove elements from the Array.
let o = ["Virat", "ab de billiers"]
o.push("yuvraj singh")
o.push("chris gayle")
console.log(o)

//#Pop
//The pop() method is used to remove elements from the end of an array. 
o.pop()
console.log(o)

//#Shift
//The shift() method is used to remove elements from the beginning of an array
o.shift()
console.log(o)

//Unshift
//The unshift() method is used to add elements to the front of an Array.
o.unshift("virat kohli", "chris gayle")
console.log(o)

//Splice
//The splice() method is used to Insert and Remove elements in between the Array.
let p = [1,2,3,4,5]
p.splice(0,1)
console.log(p)
p.splice(2,2)
console.log(p)

//#Slice
//The slice() method returns a new array containing a portion of the original array, based on the start and end index provided as arguments
let q = [6,7,8,9,10,11,12,13,14,15]
q.splice(5,10)
console.log(q)

//Map
//The map() method creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method.
let r = [10,20,30,40,50,60,70]
let s = r.map((r) => r**2 )
console.log(s)

//Filter
//The filter() method in JavaScript creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array
let t = s.filter((s) => s >= 16)
console.log(t)

//Reduce
//The reduce() method is used to reduce the array to a single value and executes a provided function for each value of the array (from left to right) and the return value of the function is stored in an accumulator.
let u = [10,20,30,40,50,60]
console.log(u.reduce((a,b)=> a*b))


