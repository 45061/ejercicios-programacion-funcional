const arr = [1, 2, 3, 4, 5, 6];

// utilizar el método map de los arreglos para duplicar cada elemento
// [2, 4, 6, 8, 10, 12]

const doubleArray = arr.map(item => (item*2))
console.log(doubleArray)

// utilizar el método filter para filtrar los números pares de arr
// [2, 4, 6]

const arrayFilter = arr.filter(item => item%2 === 0)
console.log(arrayFilter)

// utilizar el método reduce para sumar todos los elementos
// 21

const arrayReduce = arr.reduce((newItem, item) => (newItem += item), 0)
console.log(arrayReduce)

