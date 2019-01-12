// console.log(typeof null);
// console.log(typeof undefined);

function myFunction(a,b,c){
    if(a>10 && b<15){
        c = 30;
        console.log(c);
    }
    else{
        c = 0;
        console.log(c);
    }
}

myFunction();
myFunction(12);
myFunction(12, 8);
myFunction(12, 8, 3);
myFunction(12, 8, 3, 7);


// Concatenación de números con String
var x = "3";

console.log(1+x);
console.log(1+ +x);
