const arr = [1, 2, 3, 4, 5, 6];

// utilizar el método map de los arreglos para duplicar cada elemento
// [2, 4, 6, 8, 10, 12]

const arrMap = arr.map(item => item*2)
console.log(arrMap)

// utilizar el método filter para filtrar los números pares de arr
// [2, 4, 6]

const arrFilter = arr.filter(item => item%2 ===0)
console.log(arrFilter)

// utilizar el método reduce para sumar todos los elementos
// 21
const arrReduce = arr.reduce((suma, item)=> suma + item)
console.log(arrReduce)