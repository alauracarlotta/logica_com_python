function calculate() {

    let inputMultiplicationTable = document.querySelector('#input1').value;
    let inputMultiplicationTableNumber = Number(inputMultiplicationTable);
    let divAnswer = document.querySelector('.answer');

    if(inputMultiplicationTable == "") {

        divAnswer.innerHTML = `<div class="answer error">INFORME UM VALOR!</div>`;
        
    } else {

        divAnswer.innerHTML = "";

        for (let cont = 1; cont <= 10; cont++){

            divAnswer.innerHTML += `<div class="answer"><strong>${inputMultiplicationTable}</strong> x <strong>${cont}</strong> = <strong>${inputMultiplicationTableNumber*cont}</strong></div>`;
            
        }

    }

}
