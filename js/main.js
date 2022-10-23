const dolar = 153.83;
const euro = 151.64;
const real = 29.80;

let cotizacionDolar = "La cotización del dolar al día de la fecha es" + " " + dolar;
let cotizacionEuro = "La cotización del euro al día de la fecha es" +" " + euro;
let cotizacionReal = "La cotizacióin del real al día de la fecha es" + " " + real;

console.log(cotizacionDolar);
console.log(cotizacionEuro);
console.log(cotizacionReal);

let edadDelCliente = parseInt(prompt("Ingrese su edad"))

while (edadDelCliente < 18 ) {
    console.log("Para operar en nuestro sitio debe ser mayor de edad");
    edadDelCliente = parseInt(prompt("Ingrese una edad válida"))
}

let transaccion = prompt("Indique la transacción que desea realizar");

let divisaACambiar = prompt("Indique la divisa con la que quiere opererar")

let montoACambiar = parseFloat(prompt("Indique el monto con el cual desea operar"))

let divisaAPesos = (a,b) => a * b;

let pesosADivisa = (a,b) => a / b;

if (transaccion == "venta" && divisaACambiar == "euro") {
    divisaAPesos = divisaAPesos(euro , montoACambiar)
    divisaAPesos = parseInt(divisaAPesos)
    console.log("Usted recibirá" + " " + divisaAPesos + " " + "pesos Argentinos.");
}else if (transaccion == "venta" && divisaACambiar == "dolar") {
    divisaAPesos = divisaAPesos(dolar , montoACambiar)
    divisaAPesos = parseInt(divisaAPesos)
    console.log("Usted recibirá" + " " + divisaAPesos + " " + "pesos Argentinos.");
}else if (transaccion == "venta" && divisaACambiar == "real") {
    divisaAPesos = divisaAPesos(real , montoACambiar)
    divisaAPesos = parseInt(divisaAPesos)
    console.log("Usted recibirá" + " " + divisaAPesos + " " + "pesos Argentinos.");
}else if (transaccion == "compra" && divisaACambiar == "euro") {
    divisaAPesos = divisaAPesos(euro , montoACambiar)
    divisaAPesos = parseInt(divisaAPesos)
    console.log("El costo de su operación es de" + " " + divisaAPesos + " " + "pesos Argentinos.");
}else if (transaccion == "compra" && divisaACambiar == "dolar") {
    divisaAPesos = divisaAPesos(dolar , montoACambiar)
    divisaAPesos = parseInt(divisaAPesos)
    console.log("El costo de su operación es de" + " " + divisaAPesos + " " + "pesos Argentinos.");
}else {
    divisaAPesos = divisaAPesos(real , montoACambiar)
    divisaAPesos = parseInt(divisaAPesos)
    console.log("El costo de su operación es de" + " " + divisaAPesos + " " + "pesos Argentinos.");
}