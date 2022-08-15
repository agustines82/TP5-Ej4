const tiempo = document.querySelector(".tiempo");
const fecha = document.querySelector(".fecha");

function relojDigital() {
    let fechaActual = new Date(),
        dia = fechaActual.getDate(),
        mes = fechaActual.getMonth(),
        anio = fechaActual.getFullYear(),
        diaSemana = fechaActual.getDay(); //retorna un valor entre 0 y 6

    //para mostrar los dias y los meses con un 0 por delante:
    dia = ("0" + dia).slice(-2);
    //mes = ("0" + mes).slice(-2); //si quisiera el mes en formato de numero con el 0 delante

    //para trabajar la fecha como string:
    let timeString = fechaActual.toLocaleTimeString();
    tiempo.innerHTML = timeString;

    //para agregar el dia en que nos encontramos:
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let mostrarDia = diasSemana[diaSemana];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let mesEscrito = meses[mes];

    fecha.innerHTML = `${mostrarDia} ${dia} de ${mesEscrito} del ${anio}`;
}
setInterval(() => {
    relojDigital();
}, 1000);
