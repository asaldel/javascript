/*var re = /a/;
console.log(re.test("Esto es una prueba"));*/

// Modificador i: Búsqueda 'case-insensitive' (no sensible a mayúsculas)
/*var re = /A/i;
console.log(re.test("Esto es una prueba"));*/

// Modificador g: Búsqueda global
/*var re = /A/gi;
console.log(re.test("Esto es una prueba"));*/

// Modificador m: Búsqueda en multi-línea
/*var re = /[abc]/gim;
console.log(re.test("Esto es una prueba"));*/

/*var re = /[abc]/gi;
console.log(re.exec("Esto es una prueba"));*/

/*var re = /[abc]/gi;
console.log(re.exec("Esto es una prueba"));
console.log(re.exec("Esto es una prueba"));
console.log(re.exec("Esto es una prueba"));
console.log(re.exec("Esto es una prueba"));
console.log(re.exec("Esto es una prueba"));*/

/*var re = /[ab]/gi;
while((result = re.exec("Esto es una prueba")) !== null){
    console.log(result);
}*/

/*var re = /<.*>/gi;
var result = re.exec("Esto es una <a href=''> prueba");
console.log(result);*/

/*var re = /<.*>/gi;
var result = re.exec("Esto es una <a href=''> prueba")[0];
console.log(result);*/

/*var re = /(pepe|juan)+/gi;
var result = re.exec("pepepepejuanpepepejuanjuan");
console.log(result);*/

var re = /<(.*)(\s.*)?>.*<\/\1>/;
//var result = re.exec("<script>blablabla</script>");
var result = re.exec("Hola, <strong>¿qué tal?</strong>. ¡Adiós!");
console.log(result);

