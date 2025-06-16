var formulario = document.getElementById('formulario');

formulario.onsubmit = function(e) {
  e.preventDefault();

var nombre = document.getElementById('nombre').value;
var apellidos = document.getElementById('apellidos').value;
var anio = document.getElementById('anio').value;
var profesion = document.getElementById('profesion').value;

var actual = new Date().getFullYear();
var edad = actual - anio;

var resultado = document.getElementById('resultado');
resultado.innerHTML = ""; 

if (edad < 18) {
resultado.innerHTML = '<div class="alert alert-warning">Eres menor de edad. No puedes crear tarjeta.</div>';
} else {
resultado.innerHTML = `
    <div class="card">
    <div class="card-body">
        <h5 class="card-title">Tarjeta</h5>
        <p><strong>Nombre:</strong> ${nombre} ${apellidos}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Profesión:</strong> ${profesion}</p>
    </div>
    </div>
`;
}
};

