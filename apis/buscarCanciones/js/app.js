import { error } from 'jquery';
import * as UI from './interfaz.JS';

UI.formularioBuscar.addEventListener('submit', (e)=>{
        e.preventDefault();

        //obtener datos del formulario

        const artista = document.querySelector('#artista');
        const cancion = document.querySelector('#cancion');

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
        
})
