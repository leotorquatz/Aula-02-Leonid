'use strict';

const forma1 = document.getElementById('forma1');
const forma2 = document.getElementById('forma2');
const forma3 = document.getElementById('forma3');
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')

function trocarCor() {
    forma1.classList.toggle('amarelo');
}

function trocarForma() {
    forma2.classList.toggle('circulo');
}

function trocarFormaCor() {
    forma3.classList.toggle('vermelhoCirculo');
}

function girar(){
    forma4.classList.toggle('giro')
}

function sumir (){
    forma5.classList.toggle('sumir')
}

function mudarFundo () {
    forma6.classList.toggle('fundo')
}

function mensagem(){
    alert('Segue no Insta: @leotorquatz')
}

forma1.addEventListener('click', trocarCor);
forma2.addEventListener('click', trocarForma);
forma3.addEventListener('click', trocarFormaCor);
forma4.addEventListener('click', girar)
forma5.addEventListener('click', sumir)
forma6.addEventListener('click', mudarFundo)
forma7.addEventListener('click', mensagem )