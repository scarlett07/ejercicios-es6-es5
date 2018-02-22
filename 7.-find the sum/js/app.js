                // ES5

// Escribe tu código aquí....

 // function findPairForSum (array, num){
 //   forEach()
 // }





                    // ES6

// Ahora comenta todo el código anterior y pasalo a ES6

findPairForSum = (array, number) => {
    for (let num of array) {
        for (let n of array) {
            if ((num + n) === number) {
                return [num, n];
            }
        }
    }
}
