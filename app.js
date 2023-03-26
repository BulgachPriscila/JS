let edad = 0
let yerba1Q = 0
let yerba2Q = 0
let yerba1T = 0
let yerba2T = 0
let totalS = 0
let totalI = 0

function user (){
    let nombre = prompt("Ingrese su nombre:")
    do {
        edad = prompt("Ingrese su edad:")
    } while (isNaN(edad))
    console.log("Nombre: " + nombre)
    console.log("Edad:" + edad)
    if (edad<18) {
        alert ("Para hacer compras en esta pagina necesita ser mayor de edad")
        console.log("Menor de edad")
    }
}
function check(){
    if (yerba1Q > 0 || yerba2Q > 0){
        alert("Ahora pasaremos a ver el total")
        console.log("Ahora pasaremos a ver el total")
    } else {
        alert ("Su carrito está vacío, actualice la pagina para volver a empezar")
        console.log("Su carrito está vacío, actualice la pagina para volver a empezar")
    }
}
function calc(){
    if (yerba1Q > 0) {
        yerba1T = yerba1Q * 350
    }
    if (yerba2Q > 0){
        yerba2T = yerba2Q * 400
    }

    totalS = yerba1T + yerba2T
    totalI = totalS * 1.3
}
function totales(){
    console.log("Total en yerbas comúnes: $"+yerba1T)
    console.log("Total en yerbas de hierbas (yuyo): $"+yerba2T)

    console.log("El total sin IVA es: $"+totalS)
    console.log("El total con IVA es: $"+totalI)

    alert("El total con IVA sería $"+totalI)
}
alert("Bienvenido a nuestro Mat-e-Shop! Nuestro shop está en construcción pero por ahora podremos ofrecerles yerbas")

user()
if (edad > 17){

    alert("Recuerde que nuestros paquetes de yerba vienen de medio kilo (500gr). Los precios que aparecen son sin IVA, el precio con IVA le aparecerá al finalizar la compra")
    console.log("Recuerde que nuestros paquetes de yerba vienen de medio kilo (500gr). Los precios que aparecen son sin IVA, el precio con IVA le aparecerá al finalizar la compra")
    
    
    let yerba1 = prompt("Le gustaría comprar yerba común? El paquete sale $350 - Responder si o no -")
    console.log("Le gustaría comprar yerba común? El paquete sale $350")
    if (yerba1 === "si"){
        do {
            yerba1Q = prompt("Cuántos paquetes de yerba común le gustaría comprar?")
        } while (isNaN(yerba1Q))
        console.log ("Cuántos paquetes de yerba común le gustaría comprar?")
        if (yerba1Q > 0) {
            alert("Has agregado "+ yerba1Q+" paquetes de yerba común al carrito")
            console.log("Has agregado "+ yerba1Q+" paquetes de yerba común al carrito")
        } else{
            alert("Pasamos a otro producto")
            console.log("Pasamos a otro producto")
        }
    }
    
    let yerba2 = prompt("Le gustaría comprar yerba de hierbas (yuyo)? El paquete sale $400 - Responder si o no -")
    console.log("Le gustaría comprar yerba de hierbas (yuyo)? El paquete sale $400")
    if (yerba2 === "si"){
        do {
            yerba2Q = prompt("Cuántos paquetes de yerba de hierbas (yuyo) le gustaría comprar?")
        } while (isNaN(yerba2Q))
        console.log ("Cuántos paquetes de yerba de hierbas (yuyo) le gustaría comprar?")
        if (yerba2Q > 0) {
            alert("Has agregado "+ yerba2Q+" paquetes de yerba de hierbas (yuyo) al carrito")
            console.log("Has agregado "+ yerba2Q+" paquetes de yerba de hierbas (yuyo) al carrito")
        }
    }
    
    check()
    calc()
    totales()
} else {
    alert ("Actualice para volver a empezar.")
}

