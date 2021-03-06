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

    spinner();
    
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos);
            //limpiar el html previo
            limpiarHtml();
            if(datos.cod === "404"){
                mostrarError('ciudad no encontrada');
                return;
            }

            //imprimir la respuesta
            mostrarClima(datos);
        })
}

function mostrarClima(datos){
    const { name, main: { temp, temp_max, temp_min} } = datos;
    
    
    const centigrados = kelvilACentigrados(temp);
    const max = kelvilACentigrados(temp_max);
    const min = kelvilACentigrados(temp_min);

    const nombreCiudad = document.createElement('p');
    nombreCiudad.innerHTML = `Clima en ${name}`;
    nombreCiudad.classList.add('font-bold', 'text-2xl');

    const actual = document.createElement('p');
    actual.innerHTML = `${centigrados} &#8451;`;
    actual.classList.add('font-bold', 'text-6xl');

    const maxima = document.createElement('p');
    maxima.innerHTML = `Max: ${max} &#8451;`;
    maxima.classList.add('text-xl');

    const minima = document.createElement('p');
    minima.innerHTML = `Min: ${min} &#8451;`;
    minima.classList.add('text-xl');

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(maxima);
    resultadoDiv.appendChild(minima);

    resultado.appendChild(resultadoDiv);
    
}

const kelvilACentigrados = grados => parseInt(grados - 273.15);

function limpiarHtml(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function spinner(){
    limpiarHtml();
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML =`
        <div class="sk-circle1 sk-circle"><div>
        <div class="sk-circle2 sk-circle"><div>
        <div class="sk-circle3 sk-circle"><div>
        <div class="sk-circle4 sk-circle"><div>
        <div class="sk-circle5 sk-circle"><div>
        <div class="sk-circle6 sk-circle"><div>
        <div class="sk-circle7 sk-circle"><div>
        <div class="sk-circle8 sk-circle"><div>
        <div class="sk-circle9 sk-circle"><div>
        <div class="sk-circle10 sk-circle"><div>
        <div class="sk-circle11 sk-circle"><div>
        <div class="sk-circle12 sk-circle"><div>
    `;

    resultado.appendChild(divSpinner);
}