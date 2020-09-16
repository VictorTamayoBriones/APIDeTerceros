const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', ()=>{
    formulario.addEventListener('submit', (e)=>{
        e.preventDefault();

        //validar
        const ciudad = document.querySelector('#ciudad');
        const pais = document.querySelector('#pais');
        
        if(ciudad.value === '' || pais.value === ''){
            mostrarError('ambos campos son obligatorios');

            return;
        }
        //console.log(ciudad.value);
        //console.log(pais.value);
        //consultar la api
        cunsultarApi(ciudad, pais);
    });
})

function mostrarError(mensaje){
    console.log(mensaje);

    const alerta = document.querySelector('.bg-red-100');
    if(!alerta){
        //crear una alerta
        const alerta = document.createElement('div');

        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded',
        'max-w-md', 'mx-auto', 'mt-6', 'text-center' );

        alerta.innerHTML = `
            <strong class="font-bold">Error!!!</strong>
            <span class="block">${mensaje}</span>
        `;

        container.appendChild(alerta);

        //eliminar alerta
        setTimeout(() => {
            alerta.remove();
        }, 5000);
    }

}

function cunsultarApi(ciudad, pais){

    const appId = '3023890979916627a85ad8a36997bf37';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad.value},${pais.value}&appid=${appId}`;

    fetch(ur)
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos);
            if(datos.cod === "4004"){
                mostrarError('ciudad n o encontrada');
            }
        })
}