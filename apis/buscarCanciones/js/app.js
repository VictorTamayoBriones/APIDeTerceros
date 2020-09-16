import * as UI from './interfaz.JS';
import API from './api.js';

UI.formularioBuscar.addEventListener('submit', (e)=>{
        e.preventDefault();

        //obtener datos del formulario

        const artista = document.querySelector('#artista').value;
        const cancion = document.querySelector('#cancion').value;

        if(artista.value === '' || cancion === ''){
            UI.divMensajes.textContent = 'Error... todos los campos son validos';
            UI.divMensajes.classList.add('error');

            setTimeout(() => {
                UI.divMensajes.textContent = '';
                UI.divMensajes.classList.remove(error);
            }, 3000);

            return;
        }

        //consultar nuestra api
        
        const busqueda = new API(artista, cancion);
        busqueda.consultarAPI();
        
})
