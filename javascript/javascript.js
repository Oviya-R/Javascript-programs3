//Equality of two array
function equal(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
}
for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
}}
return true;
}
const array1 = [1,2,3,4,5,6];
const array2 = [1,2,3,4,5,6];
console.log(equal(array1, array2)); 

// Creating an array of objects
const student= [
    { name: 'Oviya', age: 20, department: 'ECE' },
    { name: 'Sarvesh', age: 25, department: 'CSE' },
    { name: 'Shivashini', age: 35, department: 'AIML' }
];

console.log(student);

//Rotating an Array 
const datas = [
    { name: 'Arunkumar', age: 35 },
    { name: 'Vignesh', age: 10 },
    { name: 'Arjun', age: 28 }
];
const result = datas.sort((a, b) => a.age - b.age);
console.log(result);

//Finding intersection of two Arrays
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];

const intersection = arr1.filter(value => arr2.includes(value));
console.log(intersection); 

//Finding difference between two arrays
const list1 = [1, 2, 3, 4, 5];
const list2 = [4, 5, 6, 7, 8];
const set1 = new Set(list1);
const set2 = new Set(list2);
const diff1 = list1.filter(item => !set2.has(item));
const diff2 = list2.filter(item => !set1.has(item));
console.log(diff1); 
console.log(diff2); 















