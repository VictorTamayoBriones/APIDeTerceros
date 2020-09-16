const btnApi = document.querySelector('#cargarAPI');
btnApi.addEventListener('click', ()=>{
    const url = 'https://picsum.photos/list';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHtml(resultado));
})

function mostrarHtml(datos){
    const contenido = document.querySelector('.contenido');

    let html='';

    datos.forEach( perfil =>{
        const{author, post_url}= perfil;

        html += `
            <p>Author: ${author}</p>
            <a href="${post_url}" target="_blank">Ver imagen</a>
        `;
    });

    contenido.innerHTML = html;
}