function crearInput(){
    return document.createElement('input');
}


function crearLabel(){
    return document.createElement('label');
}


function crearBr(){
    return document.createElement('br');
}


const cantidadDePersonas = Number(prompt('Cuantas personas son en tu grupo familiar?'));
const nodoPagina = document.querySelector('body');

for(let i=1; i<=cantidadDePersonas; i++){
    const nuevoTexto = document.createTextNode('Miembro ' + i);
    nodoPagina.appendChild(crearLabel().appendChild(nuevoTexto));
    nodoPagina.appendChild(crearInput());
    nodoPagina.appendChild(crearBr());
}
