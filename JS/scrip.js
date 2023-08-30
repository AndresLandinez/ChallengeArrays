let indicadorHTML = document.getElementById("indicador");
let rtaHTML = document.getElementById("rta");
let textHTML = document.getElementById("text");

const boton1 = document.getElementById("btn1");
boton1.onclick = function () {
  ejercicio1();
};
function ejercicio1() {
  indicadorHTML.innerHTML = "Challenge # 1";
  textHTML.innerHTML = "Crea un programa que imprima (log o alert) todos los elementos de un array dado<br>usando for normal. Array de ejemplo: ['manzana', 'banana', 'cereza', 'dátil']"
  const fruits = ["manzana", "banana", "cereza", "dátil"];
  let rta = "";
  for (let index = 0; index < fruits.length; index++) {
    rta += `<h3> ${fruits[index]} </h3>`;
  }
  rtaHTML.innerHTML = rta;
}

const boton2 = document.getElementById("btn2");
boton2.onclick = function () {
  ejercicio2();
};
function ejercicio2() {
  indicadorHTML.innerHTML = " Challenge # 2";
  textHTML.innerHTML = "Crea un programa que imprima (log o alert) todos los elementos de un array dado<br>usando forEach. Array de ejemplo: ['manzana', 'banana', 'cereza', 'dátil']"
  const fruits = ["manzana", "banana", "cereza", "dátil"];
  let rta = "";
  fruits.forEach((j) => {
    rta += `<h3> ${j} </h3>`;
  });
  rtaHTML.innerHTML = rta;
}

const boton3 = document.getElementById("btn3");
boton3.onclick = function () {
  ejercicio3();
};
function ejercicio3() {
  indicadorHTML.innerHTML = " Challenge # 3";
  textHTML.innerHTML = "Crea un menu que se repite si ingresa la opcion equivocada hasta que ingrese la opcion correcta<br>Reutilizar ejercicio de operaciones matematicas (exercisesLevel3.js, function exerciseTwo())"
  let operation = parseInt(
    prompt(
      "OPERACIONES MATEMATICAS BÁSICAS: \n Ingresa 1 para sumar. \n Ingresa 2 para restar. \n Ingresa 3 para multiplicar. \n Ingresa 4 para Dividir."
    )
  );
  while (isNaN(operation) || operation > 4 || operation < 1) {
    operation = parseInt(
      prompt(
        "Ok Again \n\nOPERACIONES MATEMATICAS BÁSICAS: \n Ingresa 1 para sumar. \n Ingresa 2 para restar. \n Ingresa 3 para multiplicar. \n Ingresa 4 para Dividir."
      )
    );
  }
  const num1 = parseFloat(prompt("Ingrese numero 1"));
  const num2 = parseFloat(prompt("Ingrese numero 2"));
  let rta = 0;
  switch (operation) {
    case 1:
      rta = num1 + num2;
      rtaHTML.innerHTML = `<h3> ${num1}  +  ${num2}  =  ${rta}</h3>`;
      break;
    case 2:
      rta = num1 - num2;
      rtaHTML.innerHTML = `<h3> ${num1}  -  ${num2}  =  ${rta}</h3>`;
      break;
    case 3:
      rta = num1 * num2;
      rtaHTML.innerHTML = `<h3> ${num1}  x  ${num2}  =  ${rta}</h3>`;
      break;
    case 4:
      if (num2 === 0) {
        rtaHTML.innerHTML = `<h3> No es posible dividir por ${num2} </h3>`;
      } else {
        rta = num1 / num2;
        rtaHTML.innerHTML = `<h3> ${num1}  /  ${num2}  =  ${rta}</h3>`;
      }
      break;
  }
}

const boton4 = document.getElementById("btn4");
boton4.onclick = function () {
  ejercicio4();
};
function ejercicio4() {
  indicadorHTML.innerHTML = " Challenge # 4";
  textHTML.innerHTML = "Crea un programa que encuentre el número más grande en un array dado usando <br>for normal y lo imprima en un alert o log. Array de ejemplo: [45, 23, 67, 89, 12, 56]"
  let rta = "";
  const numbers = [45, 23, 67, 89, 12, 56];
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element > rta) {
      rta = element;
    }
  }
  rtaHTML.innerHTML = `<h3> El número mayor es: ${rta} </h3>`;
}

const boton5 = document.getElementById("btn5");
boton5.onclick = function () {
  ejercicio5();
};
function ejercicio5() {
  indicadorHTML.innerHTML = " Challenge # 5";
  textHTML.innerHTML = "Crea un programa que sume todos los elementos de un array de números usando <br>forEach y lo simprima en un alert o log. Array de ejemplo: [2, 4, 6, 8, 10]"
  let rta = 0;
  const numbers = [2, 4, 6, 8, 10];
  numbers.forEach((j) => {
    rta += j;
  });
  rtaHTML.innerHTML = `<h3> La suma del array es: ${rta} </h3>`;
}

const boton6 = document.getElementById("btn6");
boton6.onclick = function () {
  ejercicio6();
};
function ejercicio6() {
  indicadorHTML.innerHTML = " Challenge # 6";
  textHTML.innerHTML = "Crea un programa que multiplique cada elemento de un array por 2 y devuelva <br>un nuevo array con los resultados usando for normal. Array de ejemplo: [3, 7, 2, 8]"
  const numbers = [3, 7, 2, 8];
  let rta = [];
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    let t = element * 2;
    rta.push(t);
    t = 0;
  }
  rtaHTML.innerHTML = `<h3> Array Duplicado: [ ${rta} ]</h3>`;
}

const boton7 = document.getElementById("btn7");
boton7.onclick = function () {
  ejercicio7();
};
function ejercicio7() {
  indicadorHTML.innerHTML = " Challenge # 7";
  textHTML.innerHTML = "Crea un programa que encuentre la suma de los elementos pares (los impares no los suma) <br>en un array usando forEach. Array de ejemplo: [1, 4, 7, 3, 10, 12] <br>Recuerden que para saber como es un número impar, pueden usar (numero % 2 === 0)"
  const numbers = [1, 4, 7, 3, 10, 12];
  rta = 0;
  numbers.forEach((j) => {
    if (j % 2 === 0) {
      rta += j;
    }
  });
  rtaHTML.innerHTML = `<h3> Total suma numeros impares: ${rta} </h3>`;
}

const boton8 = document.getElementById("btn8");
boton8.onclick = function () {
  ejercicio8();
};
function ejercicio8() {
  indicadorHTML.innerHTML = " Challenge # 8";
  textHTML.innerHTML = "Crea un programa que encuentre el primer número mayor que 50 en un array de <br>números usando un bucle while.Array de ejemplo: [30, 45, 60, 72, 48, 10]"
  const numbers = [30, 45, 60, 72, 48, 10];
  let rta = 0;
  let j = 0;
  while (rta < 50) {
    rta = numbers[j]
    j++
  }
  rtaHTML.innerHTML = `<h3>El primer numero mayor que 50 es: ${rta} </h3>`;
}
