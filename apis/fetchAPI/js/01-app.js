

const btnTxt = document.querySelector('#cargarTxt');
btnTxt.addEventListener('click', obtenerDatos());


function obtenerDatos(){

    const url = 'data/datos.txt';

    fetch(url)
        .then( respuesta => {
            console.log(respuesta);
            console.log(respuesta.status);
            console.log(respuesta.statusText);
            console.log(respuesta.url);
            console.log(respuesta.type);

            return respuesta.text()
        })
        .then( datos => {
            console.log(datos)
        })
        .catch( error => {
            console.log(error);
        })
}