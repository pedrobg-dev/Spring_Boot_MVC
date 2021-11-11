// Call the dataTables jQuery plugin
$(document).ready(function () {
    let botonRegistrar = document.getElementById("botonRegistrar");
    botonRegistrar.addEventListener('click', registrarUsuario)
});

async function registrarUsuario() {
    let datos = {};
    datos.nombre = document.getElementById("txtNombre").value;
    datos.apellido = document.getElementById("txtApellido").value;
    datos.email = document.getElementById("txtEmail").value;
    datos.telefono = document.getElementById("txtTelefono").value;
    datos.password = document.getElementById("txtPassword").value;
    repetirPassword = document.getElementById("txtRepetirPassword").value;

    if(repetirPassword !== datos.password){
        alert("la contraseña que escribiste es diferente");
        return;
    }

    const request = await fetch('api/usuarios', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(datos)
    });

    alert("Usuario registrado con exito");
    window.location.href = "login.html";
}
