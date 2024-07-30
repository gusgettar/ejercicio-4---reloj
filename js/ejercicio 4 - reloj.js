function obtenerFechaHora() {
  const fechaActual = new Date();

  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const mesEnCurso = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  //obtener h2 de la fecha
  const fecha = document.querySelector("#fecha");

  fecha.innerHTML = `${
    diasSemana[fechaActual.getDay()]
  } ${fechaActual.getDay()} de ${
    mesEnCurso[fechaActual.getMonth()]
  } del ${fechaActual.getFullYear()}`;
  const hora = document.querySelector("#hora");
  hora.innerHTML = `${fechaActual.getHours()}:${fechaActual.getMinutes()}:${
    fechaActual.getSeconds() < 10
      ? "0" + fechaActual.getSeconds()
      : fechaActual.getSeconds()
  }`;
}

setInterval(() => {
  obtenerFechaHora();
}, 1000);
