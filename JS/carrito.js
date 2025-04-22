let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const totalElemento = document.getElementById("total");
  lista.innerHTML = "";

  carrito.forEach((producto, index) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    li.innerHTML = `
      ${producto.nombre} - $${producto.precio.toLocaleString()}
      <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `;
    lista.appendChild(li);
  });

  totalElemento.textContent = `Total: $${total.toLocaleString()}`;
}

function eliminarDelCarrito(index) {
  total -= carrito[index].precio;
  carrito.splice(index, 1);
  mostrarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  total = 0;
  mostrarCarrito();
}


function finalizarCompra() {
    if (carrito.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Tu carrito está vacío',
        imageUrl: '/Logo negro.png',
        imageWidth: 90, 
        imageHeight: 40, 
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }
  
    Swal.fire({
      title: '¡Gracias por tu compra!',
      text: `Total pagado: $${total.toLocaleString()}`,
      icon: 'success',
      imageUrl: '/Logo negro.png',
        imageWidth: 90, 
        imageHeight: 40,
      confirmButtonText: 'Aceptar',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  
    vaciarCarrito(); // Esto limpia el carrito después de comprar
  }