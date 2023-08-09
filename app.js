'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const trocar = document.getElementById('trocar')
const forma5 = document.getElementById('forma5')

function mudaCor (){
    forma1.classList.toggle('pink')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ('vermelho')}


function mudarForma (){
    forma2.classList.toggle('circulo')
}

function inverterPosition(){
    forma3.classList.toggle('posicao')
}

function trocarCor(){
    trocar.classList.toggle('trocar')
}

function girar(){
    forma5.classList.toggle('girar')
}

  forma1.addEventListener('click', mudaCor)
  forma2.addEventListener('click', mudarForma)
  forma3.addEventListener('click', inverterPosition)
  forma4.addEventListener('click', trocarCor)
  forma5.addEventListener('click', girar)