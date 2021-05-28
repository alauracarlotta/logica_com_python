function calculate() {

    let inputDaysRent = document.querySelector('#input1').value;
    let inputDaysRentNumber = Number(inputDaysRent);
    let inputKmRent = document.querySelector('#input2').value;
    let inputKmRentNumber = Number(inputKmRent);
    let divAnswer = document.querySelector('.answer');

    if (inputDaysRent == '' || inputKmRent == '' || inputDaysRentNumber <= -1 || inputKmRentNumber <= -1 || isNaN(inputDaysRentNumber) || isNaN(inputKmRentNumber)) {

        divAnswer.innerHTML = `<div class="answer error">INFORME DOIS VALORES VÁLIDOS!</div>`;

    } else {

        divAnswer.innerHTML = "";
        divAnswer.innerHTML += `<div class="answer">Para <strong>${inputDaysRentNumber.toFixed(0)}</strong> dias alugados e para <strong>${inputKmRentNumber.toFixed(1)}km</strong> rodados,</div>`;
        divAnswer.innerHTML += `<div class="answer"><strong>Você terá que pagar <em>R$ ${((inputDaysRentNumber*60) + (inputKmRent*0.15)).toFixed(2)} reais </em>de aluguel!</strong></div>`;

    }
}