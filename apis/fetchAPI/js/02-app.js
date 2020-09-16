
const btnJson = document.querySelector('#cargarJSON');
btnJson.addEventListener('click', ()=>{
    const url = 'data/empleado.json';
    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado => mostrarHtml(resultado) )
});


function mostrarHtml({empresa, id, nombre, trabajo}){
    const contenido = document.querySelector('.contenido');
    
    contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `;
}