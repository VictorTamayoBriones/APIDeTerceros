const btnArray = document.querySelector('#cargarJSONArray');
btnArray.addEventListener('click', ()=>{
    const url = 'data/empleados.json';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHtml(resultado))
});
/*
function datos(){
    
}
*/
function mostrarHtml(empleados){
    const contenido = document.querySelector('.contenido');

    let html ='';

    empleados.forEach( empleado =>{
        const {id, nombre, empresa, trabajo}=empleado;

        html +=`
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
        `;
    });

    contenido.innerHTML = html;
}