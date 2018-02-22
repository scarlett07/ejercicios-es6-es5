// En este ejercicio deberas crear tu solción en ES5, asegurarte que funcione

// declara el prompt
/*
function user() {
  var passwordUser = prompt("Escribe una pablra");
  var password = 'laboratoria';
  if (passwordUser === '') {
    return 'falso'
  } else if (passwordUser!= password) {
    return 'falso'
  }else {
    return 'verdadero'
  }
}*/

// comenta todo lo anterior y escribelo en ES6

 const user = () => {
   let passwordUser = prompt("Escribe una pablra");
   const password = 'laboratoria';
   if (passwordUser === '') {
     return 'falso'
   } else if (passwordUser!= password) {
     return 'falso'
   }else {
     return 'verdadero'
   }
 }

 console.log(user());
