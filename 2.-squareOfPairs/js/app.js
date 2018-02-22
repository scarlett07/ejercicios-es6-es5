// 3 variables llamadas igual para hacer 3 pruebas (usa una variable y las otras 2 comentalas)

// ES5

// declara las variables ES5

//var array = [2, 4, 6];
//var array = [-3, 2, -8, 12, 5];
// var array = [1, 2, 3, 4, 5];

// declaración de la funcion


/*function square(arreglo) {
  const newArray = arreglo.map(function(item) {
    if (item > 0) {
      return item * item
    } else {
      return item
    }
  })
  return newArray;
  console.log(newArray);
}

square(array); */

//  ES6

// Ahora comenta todo el codigo de arriba y escribelo en ES6

const square = arreglo => {
  const newArray = arreglo.map(item => {
    if (item > 0) {
      return item * item
    } else {
      return item
    }
  })
  return newArray;
}
const array = [-3, 2, -8, 12, 5];
console.log(square(array));

// declara variables (let-const)

// declara la funcion y ejecuta el código

// ejecuta la funcion
