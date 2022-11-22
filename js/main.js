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
let seleccionarTransaccion = document.querySelector('select[name="transacciones"]');
ope.forEach(operacion =>{
    let option = document.createElement('option');

    option.value = operacion
    option.innerText= operacion

    seleccionarTransaccion.appendChild(option)
});
let selectorDivisa = document.querySelector('select[name="divisas"]');
money.forEach(mone =>{
    let option = document.createElement('option');

    option.value = mone
    option.innerText= mone

    selectorDivisa.appendChild(option)
    });

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
    return document.getElementById("#mensaje").innerText= `Usted recibirá $ ${montoVenta} pesos argentinos. `  
}

function divisasCompra(nombreDivisa, montoCambio) {
    indexDivisa= divisas.indexOf(buscar(divisas,nombreDivisa));
    let montoComp =compraDeMoneda(divisas[indexDivisa].compra,montoCambio);
    return document.getElementById("#mensaje").innerText= `Usted debe abonar $ ${montoComp} pesos argentinos. `
}

/*function procesarOperacion(transac,divi,montACa) {
    let operacion = transac;
    let resul;
    if (operacion === "venta") {
        resul = divisasVenta(divi , montACa);
    } else if(operacion==="compra"){
        resul = divisasCompra(divi,montACa)    
    }
    console.log(resul);
    return resul
}*/

document.getElementById("btn").onclick = (e)=>{
    e.preventDefault();
    let cash= document.querySelector('input[name="monto"]').value
    let montoACambiar = parseInt(cash)
     

    
    let transaccion = seleccionarTransaccion.addEventListener("change",()=>{
        let option = seleccionarTransaccion.options[seleccionarTransaccion.selectedIndex].value;
        console.log(option);
        return option
    })
    

    let divisaACambiar = selectorDivisa.addEventListener("change",()=>{
        let option=selectorDivisa.options[selectorDivisa.selectedIndex].value;
        console.log(option);
        return option
    })
    if (transaccion==="venta") {
        divisasVenta(divisaACambiar,montoACambiar)
        console.log(divisasVenta(divisaACambiar,montoACambiar));
    }else if (transaccion==="compra") {
        divisasCompra(divisaACambiar,montoACambiar)
        console.log(divisasCompra(divisaACambiar,montoACambiar));
    }
    console.log(transaccion);
    console.log(divisaACambiar)
    console.log(montoACambiar)
}




/*procesarOperacion(transaccion, divisaACambiar,montoACambiar);
procesarOperacion(transaccion, divisaACambiar,montoACambiar);
return document.querySelector("#mensaje")` Usted recibira ${vender} pesos argentinos.`;
const registrarse = document.querySelector(".card-link");
registrarse.addEventListener("click", ()=>{
    console.log("Ingrese sus datos");
})*/

