  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (e) {
      e.preventDefault();
      const modal = new bootstrap.Modal(document.getElementById('graciasModal'));
      modal.show();
      this.reset();
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    // Alerta para "Comprar ahora"
    document.querySelectorAll(".comprar-ahora").forEach(function (boton) {
      boton.addEventListener("click", function (e) {
        e.preventDefault(); // Evita redirección inmediata
        alert("Gracias por la compra");
        window.location.href = boton.getAttribute("href")
      });
    })});


  // Función para mostrar el modal con el mensaje
  function mostrarMensaje(texto) {
    const mensajeTexto = document.getElementById("modalMensajeTexto");
    mensajeTexto.textContent = texto;

    const modal = new bootstrap.Modal(document.getElementById("mensajeModal"));
    modal.show();
  }

  // Botón "Comprar Ahora"
  document.getElementById("btnComprar").addEventListener("click", function (e) {
    e.preventDefault(); // evita que navegue
    mostrarMensaje("¡Gracias por la compra!");
  });

  // Botón "Agregar al Carrito"
  document.getElementById("btnAgregar").addEventListener("click", function (e) {
    e.preventDefault(); // evita que navegue
    mostrarMensaje("Producto agregado al carrito");
  });