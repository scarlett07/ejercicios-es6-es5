                            // ES5

// declara la variable

var arreglo = [10, 20, 30, 20, 30, 40, 60];

// escribe tu funcion

/*var computeSumOfAllElements = function(array){
  var sum = array.reduce(function(valorAnterior, valorActual, indice, vecto){
    return valorAnterior + valorActual;
  });
  var result = 'El promedio de este arreglo es'+' ' +sum/array.length
  return result;
}*/


const computeSumOfAllElements = array =>{
  let sum = 0;
    for (let num of array) {
        sum += num;
    }
    const result = `El promedio de este arreglo es ${sum/array.length}`
    return result;
}

console.log(computeSumOfAllElements(arreglo));


                              //ES6
// Comenta todo lo anterior y escribelo en ES6


// declara la variable


// escribe tu funcion
