// script.js

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  console.log("Rochi Postres listo 🍰");

  /* ------------------------------------------------------------
     NAVEGACIÓN SUAVE AL HACER CLIC EN LOS ENLACES DEL MENÚ
     ------------------------------------------------------------ */

  // Selecciona todos los enlaces dentro de la barra de navegación
  const links = document.querySelectorAll('.nav-links a');

  // Recorre cada enlace
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); // Evita salto brusco por defecto

      // Obtiene el ID de la sección destino (sin el "#")
      const targetId = link.getAttribute('href').substring(1);

      // Busca el elemento cuyo ID coincide
      const target = document.getElementById(targetId);

      // Si existe, realiza scroll suave hacia la sección
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70, // Ajusta para no tapar la sección con la navbar
          behavior: 'smooth'          // Efecto suave
        });
      }
    });
  });


  /* ------------------------------------------------------------
     EFECTO DE TRANSPARENCIA EN LA NAVBAR AL HACER SCROLL
     ------------------------------------------------------------ */

  const navbar = document.querySelector('.navbar');

  // Detecta el scroll del usuario
  window.addEventListener('scroll', () => {
    // Si el usuario baja más de 50px, activa el estilo "scrolled"
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      // Si vuelve hacia arriba, quita la clase
      navbar.classList.remove('scrolled');
    }
  });

});

/* ============================================================
   FORMULARIO DE PEDIDOS
   Muestra un mensaje al usuario cuando envía el formulario
   y limpia los campos después del envío.
============================================================ */

const pedidoForm = document.querySelector('.pedido-form'); // Selecciona el formulario

// Verifica que el formulario exista antes de usarlo
if (pedidoForm) {

  pedidoForm.addEventListener('submit', e => {
    e.preventDefault(); // Evita recargar la página

    // Mensaje de confirmación para el usuario
    alert("¡Gracias por tu pedido! 💛\nNos comunicaremos contigo muy pronto.");

    // Limpia todos los campos del formulario
    pedidoForm.reset();
  });
}

function enviarPedidoWhatsApp() {
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const producto = document.getElementById("producto").value;
  const cantidad = document.getElementById("cantidad").value;
  const notas = document.getElementById("notas").value;

  const numeroNegocio = "573236847075"; // ← aquí pones el número real con código de país sin signos  

  const mensaje = 
    `¡Hola! Quiero hacer un pedido:%0A%0A` +
    `*Nombre:* ${nombre}%0A` +
    `*Teléfono:* ${telefono}%0A` +
    `*Producto:* ${producto}%0A` +
    `*Cantidad:* ${cantidad}%0A` +
    `*Notas:* ${notas}%0A%0A` +
    `Enviado desde la página de Rochi Postres 🍰`;

  const url = `https://wa.me/${numeroNegocio}?text=${mensaje}`;
  window.open(url, "_blank");
}
