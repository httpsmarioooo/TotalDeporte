function mandarMensaje(){
    Swal.fire({
        title: '¡Gracias por tu mensaje',
        text: `En pocos minutos recibiras tu respuesta querido cliente`,
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
}