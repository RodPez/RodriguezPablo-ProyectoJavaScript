const ope =["compra","venta"];

const money= ["dolar","euro", "real"]

const divisas=[]

fetch("../data/datos.json")
.then(res=>res.json())
.then(data=>{
    for (const elemento of data) {
        divisas.push(elemento);
    }
})

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

document.getElementById("btn").onclick = ((e)=>{
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
})


