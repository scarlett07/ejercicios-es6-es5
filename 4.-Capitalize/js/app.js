// En este ejercicio te daremos el código en ES6 ya solucionado, tu tendrás que transformarlo en ES5

//const word = "este ejercicio pasa a mayusculas la primer letra de cada palabra";

/*const capitalize = str => {
  let newStr = str.split(" ");
  let result = [];
    newStr.forEach(palabra=> {
      let primerLetra = palabra.charAt(0).toUpperCase();
      let mediaPalabra = palabra.slice(1, palabra.length);
      result.push(primerLetra + mediaPalabra);
    });
    console.log(result.join(" "));
  }; */

var word = "este ejercicio pasa a mayusculas la primer letra de cada palabra";

// Comenta el código anterior y ahora traducelo a ES5

var Capitalize = function(str) {
  var newStr = str.split(' ');
  var  result = [];
  newStr.forEach(palabra=> {
    var primerLetra = palabra.charAt(0).toUpperCase();
    var mediaPalabra = palabra.slice(1, palabra.length);
    result.push(primerLetra + mediaPalabra);
  });
  console.log(result.join(" "));
}

Capitalize(word);
