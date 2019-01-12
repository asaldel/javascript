// Ejercicio A
var num1 = 5;
var num2 = 7;

var suma = num1 + num2;
var resta = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;

console.log("La suma es " + suma);
console.log("La resta es " + resta);
console.log("La multiplicación es " + mul);
console.log("La división es " + div);

// Ejercicio B
var num1 = 5;
var num2 = 7;
var op = '*';

switch(op){
    case '+':
        var suma = num1 + num2;
        console.log("La suma es " + suma);
        break;
    case '-':
        var resta = num1 - num2;
        console.log("La resta es " + resta);
        break;
    case '*':
        var mul = num1 * num2;
        console.log("La multiplicación es " + mul);
        break;
    case '/':
        var div = num1 / num2;
        console.log("La división es " + div);
        break;
    default:
        console.log("Operación no soportada");
}

// Ejercicio C
var car = 'c';

switch(car){
    case 'a':
        console.log("Es una vocal");
        break;
    case 'e':
        console.log("Es una vocal");
        break;
    case 'i':
        console.log("Es una vocal");
        break;
    case 'o':
        console.log("Es una vocal");
        break;
    case 'u':
        console.log("Es una vocal");
        break;
    default:
        console.log("No es una vocal");
}

// Ejercicio D
var num = 5;

function factorial(num){
    var resultado = 1;
    for(let i = 1; i <= num; i++){
        resultado *= i; 
    }
    console.log("El factorial de " + num + " es: " + resultado);
}

factorial(num);

// Bucle for con objetos
obj = {peso:100, altura:180, edad:30};

for(xx in obj){
    console.log(xx + " -> " + obj[xx]);
}

// Bucle con array
arr=[0,1,2,3,4];

for(xx in arr){
    // Muestra las posiciones
    console.log(xx);
}

arr=[-5.,13,25,32,4];

for(xx in arr){
    // Muestra los valores
    console.log(arr[xx]);
}

// Bucle switch
var x = 0;

switch(x){
    // En caso de haber mas de dos valores en el 'case', siempre se evalúa el último 
    case 0,1:
        console.log(x);
        break;
    case 2:
        console.log(x);
        break;
    default:
        console.log("def");

}

// Formatos de fecha:  
//       YYYY-MM-DD: Japonés
//       MM-DD-YYYY: Americano
//       DD-MM-YYYY: Europeo

fecha = new Date("2018-09-20");

console.log(fecha);
console.log(fecha / 1);
