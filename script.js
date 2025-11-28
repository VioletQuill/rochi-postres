// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  console.log("Rochi Postres listo 🍰");

  // NAVEGACIÓN SUAVE
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  // EFECTO DE TRANSPARENCIA EN NAVBAR AL HACER SCROLL
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});

// FUNCIONALIDAD BOTÓN WHATSAPP
function enviarPedidoWhatsApp() {
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const producto = document.getElementById("producto").value;
  const cantidad = document.getElementById("cantidad").value;
  const notas = document.getElementById("notas").value;

  const numeroNegocio = "573236847075"; // Número con código de país

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

