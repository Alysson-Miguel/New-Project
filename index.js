function sub(){
    var number_1 = Number(document.querySelector('#num1').value)
    var number_2 = Number(document.querySelector('#num2').value)
    var tela = document.getElementById('res')
    var item = document.createElement('option')
    item.text = `O resultado da Subtração foi ${number_1 - number_2}`
    tela.appendChild(item)
}
function mult(){
    var number_1 = Number(document.querySelector('#num1').value)
    var number_2 = Number(document.querySelector('#num2').value)
    var tela = document.getElementById('res')
    var item = document.createElement('option')
    item.text = `O resultado da Multiplicação foi ${number_1 * number_2}`
    tela.appendChild(item)
}
function soma(){
    let number_1 = Number(document.querySelector("#num1").value)
    let number_2 = Number(document.querySelector('#num2').value)
    var item = document.createElement('option')
    var tela = document.querySelector("#res")
    item.text = `O resultado da soma foi ${number_1 + number_2}`
    tela.appendChild(item)
}



