class Moneda{
    constructor(nombre,compra,venta){
        this.nombre=nombre;
        this.compra=compra;
        this.venta=venta;
    }

}

const divisas=[];

const dolar= new Moneda("dolar",153.83,156) ;

const euro= new Moneda("euro",151.64,153);

const real= new Moneda("real",29.80,31 );

divisas.push(dolar,euro,real);

let cotizacionDolar = "La cotización del dolar al día de la fecha es" + " " + dolar.venta +" " +"para la venta" +" "+ "y"+" "+dolar.compra+" "+"para la compra";
let cotizacionEuro = "La cotización del euro al día de la fecha es" +" " +  euro.venta +" " +"para la venta" +" "+ "y"+" "+euro.compra+" "+"para la compra";
let cotizacionReal = "La cotizacióin del real al día de la fecha es" + " " +  real.venta +" " +"para la venta" +" "+ "y"+" "+real.compra+" "+"para la compra";

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

function operacion (valor,monto) {
    return valor * monto;
}

let comprar;
let vender;

function compraDeMoneda(compraMoneda, monto1) {
    comprar= operacion(compraMoneda, monto1)
    console.log("El costo de su operación es de" + " " + comprar + " " + "pesos Argentinos.");
}

function ventaDeMoneda(ventaMoneda,monto2) {
    vender=operacion(ventaMoneda,monto2)
    console.log("Usted recibirá" + " " + vender + " " + "pesos Argentinos.");
}

let indexDivisa;

function divisasVenta(nombreDivisa, montoCambio) {
    indexDivisa= divisas.indexOf(divisas.find(Moneda => Moneda.nombre === nombreDivisa)),
    ventaDeMoneda(divisas[indexDivisa].venta,montoCambio)   
}

function divisasCompra(nombreDivisa, montoCambio) {
    indexDivisa= divisas.indexOf(divisas.find(Moneda => Moneda.nombre === nombreDivisa)),
    compraDeMoneda(divisas[indexDivisa].compra,montoCambio)
}

function procesarOperacion(transac,divi,cant) {
    if (transac === "venta") {
        divisasVenta(divi,cant)
    } else {
        divisasCompra(divi,cant)
    }
    
}


procesarOperacion(transaccion, divisaACambiar,montoACambiar);
