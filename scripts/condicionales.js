// IF - ELSE

let promedio_de_asistencia = 70;
let proyecto_final = "Ok";

if (promedio_de_asistencia >= 70 && proyecto_final === "Ok"){
    console.log("El alumno está en condiciones de aprobar.");
}

else if (promedio_de_asistencia >= 70 || proyecto_final === "Ok"){
    console.log("Al alumno le falta alguna de las condiciones.");
}

else {
    console.log("El alumno no está en condiciones de aprobar.");
}

/*Crea un algoritmo que solicite al usuario uno o más
valores ingresados por prompt(), compare las entradas y, en
función de ciertas condiciones, muestre por consola o alert() el
resultado según los valores ingresados y las condiciones
cumplidas

Temática +15*/

let edad = prompt("¿Cuál es tu edad?");

if (edad >= 15) {
    alert("Podés pasar.")
}
else{
    alert("No podés pasar.")
}

let array_vacio = [];
let mascota = "perro";

if (mascota === "perro"){
    array_vacio[0] = mascota;
    console.log(array_vacio)
}

