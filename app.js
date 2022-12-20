function encriptar(){
    var texto = document.querySelector('#input-texto').value;
    var textoCifrado = texto.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    document.querySelector('.text-input-salida').value = textoCifrado;
    document.querySelector('#input-texto').value;

}
var boton1 = document.querySelector('#btn-encriptar'); boton1.onclick = encriptar;

function desencriptar(){
    var texto = document.querySelector('#input-texto').value;
    var textoCifrado = texto.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    document.querySelector('.text-input-salida').value = textoCifrado;
    document.querySelector('#input-texto').value;
    

}
var boton2 = document.querySelector('#btn-desencriptar'); boton2.onclick = desencriptar;

function copiartexto(){
    var texto = document.querySelector('.text-input-salida').value;
    document.querySelector('#input-texto').value = texto;
}
var boton3 = document.querySelector('#btn-copy'); boton3.onclick = copiartexto;

function limpiar(){

    document.querySelector('#input-texto').value = '';
    document.querySelector('.text-input-salida').value = '';
}  
var boton4 = document.querySelector('#btn-clear'); boton4.onclick = limpiar;

function validarCaracteres(pEvent){
    var key = pEvent.key;
    var keyAscii = key.charCodeAt(0);
    if(keyAscii >= 65 && keyAscii <= 90 || keyAscii >= 97 && keyAscii <= 122 || keyAscii == 32){
        return true;
    }else{
        return false;
    }
}
var input = document.querySelector('#input-texto'); input.onkeypress = validarCaracteres;