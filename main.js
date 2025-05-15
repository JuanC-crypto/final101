
let numaleatorio = Math.round(Math.random() * 10) + 1;

let intento = 0

console.log(numaleatorio);

let num1 = Number(prompt(`
    INGRESA UN NUMERO
    Los Numeros tienen que ser del 1 al 10
    Tienes 3 intentos Suerte`));

while (numaleatorio !== num1 && intento !== 3) {

    alert("Perdiste");
    intento++
    //console.log(intento)
    let prox = numaleatorio - num1

    if (prox <= 2) {
        alert("Estas Cerca")
    }
    else {
        alert("Esas Frio")
    }
    if (intento === 3) {
        alert("solo tienes 3 intentos");
        break;
    } else {
        num1 = Number(prompt(`INGRESA UN NUMERO`));
    }

}
if (numaleatorio === num1) {
    alert("Muy Bien, Ganaste")
}

    Swal.fire({
        title: 'Gracias Por Jugar Nos vemos',
        confirmButtonText: 'Cool'
    })


