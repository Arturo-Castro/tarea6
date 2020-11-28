function crearInput(){
    return document.createElement('input');
}


function crearLabel(){
    return document.createElement('label');
}


function crearBr(){
    return document.createElement('br');
}


function calcularPromedioArray(array){
    let suma = 0;
    let promedio;
    for(let i=0; i<array.length; i++){
        suma += array[i];
    }promedio = suma / array.length;
    return promedio;
}


function obtenerMinimo(array){
    let arrayMinimo = array[0];
    for(let i=1; i<array.length; i++){
        if (array[i] < arrayMinimo){
            arrayMinimo = array[i];
        }  
    }return arrayMinimo;   
    
}


function obtenerMaximo(array){
    let arrayMaximo = array[0];
    for(let i=1; i<array.length; i++){
        if(array[i] > arrayMaximo){
            arrayMaximo = array[i];
        }
    }return arrayMaximo;
}

const cantidadDePersonas = Number(prompt('Cuantas personas son en tu grupo familiar?'));
const nodoPagina = document.querySelector('body');

for(let i=1; i<=cantidadDePersonas; i++){
    const nuevoTexto = document.createTextNode('Miembro ' + i);
    nodoPagina.appendChild(crearLabel().appendChild(nuevoTexto));
    nodoPagina.appendChild(crearInput());
    nodoPagina.appendChild(crearBr());
}


document.querySelector('button').onclick = function(){
    const nodeList = document.querySelectorAll('input');
    const array = [];
    for(let i=0; i<nodeList.length; i++){
        if(Number(nodeList[i].value) === 0){
            continue;
        }
        array.push(Number(nodeList[i].value));
    }
    const nodoPagina = document.querySelector('body');
    const nuevoParrafo = document.createElement('p');
    const nuevoEm = document.createElement('em');
    const texto1 = document.createTextNode(`El promedio es ${calcularPromedioArray(array)}`);
    const texto2 = document.createTextNode(`La edad minima es ${obtenerMinimo(array)}`);
    const texto3 = document.createTextNode(`La edad maxima es ${obtenerMaximo(array)}`);
    nuevoEm.appendChild(texto1);
    nuevoEm.appendChild(crearBr());
    nuevoEm.appendChild(texto2);
    nuevoEm.appendChild(crearBr());
    nuevoEm.appendChild(texto3);
    nuevoEm.appendChild(crearBr());
    nuevoParrafo.appendChild(nuevoEm);
    nodoPagina.appendChild(nuevoParrafo);
    return false;
}

document.querySelector('#reset').onclick = function(){
    window.location.reload();
}
