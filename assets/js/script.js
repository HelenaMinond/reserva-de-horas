let boton = document.getElementById('boton');

boton.addEventListener('click', function() {

  let rut = document.getElementById('rut').value;
  let nombres = document.getElementById('nombres').value;
  let apellidos = document.getElementById('apellidos').value;
  let edad = document.getElementById('edad').value;
  let email = document.getElementById('email').value;
  let especialidad = document.getElementById('especialidad').value;
  let fecha = document.getElementById('fecha').value;
  let hora = document.getElementById('hora').value;

  const formatoRut = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
  const formatoLetras = /[a-zA-Z]/;
  const formatoNumeros = /[0-9]/;
  const formatoEmail = /\w+@\w+\.+[a-z]/;
  const formatoFecha = /(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;

  if (!formatoRut.test(rut)) {
        alert ("Ingrese rut válido.");
  }

  else if (!formatoLetras.test(nombres)) {
        alert ("Ingrese nombres válidos.");
  }

  else if (!formatoLetras.test(apellidos)) {
        alert ("Ingrese apellidos válidos.");
  }

  else if (!formatoNumeros.test(edad)) {
        alert ("Ingrese edad válida.");
  }

  else if (!formatoEmail.test(email)) {
        alert ("Ingrese email válido.");
  }

  else if (!formatoFecha.test(fecha)) {
        alert ("Ingrese fecha válida.");
  }

  else {
    mensajeAlerta();
  }
});

function mensajeAlerta () {
  document.getElementById('mensaje').innerHTML = `Estimado(a) ${nombres.value} ${apellidos.value}, su hora para ${especialidad.value} ha sido reservada para el día ${fecha.value} a las ${hora.value} hrs. Además, se le envío un mensaje a su correo ${email.value} con el detalle de su cita. <br>Gracias por preferirnos.`;
};
