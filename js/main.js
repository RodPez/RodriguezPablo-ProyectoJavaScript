class Moneda{
    constructor(nombre,compra,venta){
        this.nombre=nombre;
        this.compra=compra;
        this.venta=venta;
    }

}

const ope =["compra","venta"];

const money= ["dolar","euro", "real"]

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

/*let edadDelCliente = parseInt(prompt("Ingrese su edad"))

while (edadDelCliente < 18 ) {
    console.log("Para operar en nuestro sitio debe ser mayor de edad");
    edadDelCliente = parseInt(prompt("Ingrese una edad válida"))
}*/



function operacion (valor,monto) {
    return valor * monto;
}

let comprar;
let vender;

function compraDeMoneda(compraMoneda, monto1) {
    comprar= operacion(compraMoneda, monto1)
    console.log("El costo de su operación es de" + " " + comprar + " " + "pesos Argentinos.")
    return comprar
}

function ventaDeMoneda(ventaMoneda,monto2) {
    vender=operacion(ventaMoneda,monto2)
    console.log("Usted recibirá" + " " + vender + " " + "pesos Argentinos.")
    return vender
}

function buscar(arr,filtro) {
    const encontrado = arr.find((el) => {
        return el.nombre.includes(filtro);
    });
    return encontrado;
}

let indexDivisa;

function divisasVenta(nombreDivisa, montoCambio) {
    indexDivisa= divisas.indexOf(buscar(divisas,nombreDivisa));
    let montoVenta =ventaDeMoneda(divisas[indexDivisa].venta,montoCambio);
    return montoVenta  
}

function divisasCompra(nombreDivisa, montoCambio) {
    indexDivisa= divisas.indexOf(buscar(divisas,nombreDivisa));
    let montoComp =compraDeMoneda(divisas[indexDivisa].compra,montoCambio);
    return montoComp
}

document.getElementById("btn").onclick = (e)=>{
    e.preventDefault();
    let cash= document.querySelector('input[name="monto"]').value
    let seleccionarTransaccion = document.getElementById('transac').value; 
    let selectorDivisa = document.getElementById('divis').value;
    
    if (seleccionarTransaccion==="venta") {
        let amount1 = divisasVenta(selectorDivisa,cash)
        console.log(divisasVenta(selectorDivisa,cash));
        return document.getElementById("mensaje").innerText= `Usted recibirá $ ${amount1} pesos argentinos. `
    }else if (seleccionarTransaccion==="compra") {
        let amount =divisasCompra(selectorDivisa,cash)
        console.log(divisasCompra(selectorDivisa,cash));
        return document.getElementById("mensaje").innerText= `Usted debe abonar $ ${amount} pesos argentinos. `
    }
    console.log(seleccionarTransaccion);
    console.log(selectorDivisa)
    console.log(cash)
}


