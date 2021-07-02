function calculate() {
    let inputNumberRandom = document.querySelector("#input1").value;
    let inputNumberRandomCovert = Number(inputNumberRandom);
    let inputGuessNumber = document.querySelector("#input2").value;
    let inputGuessNumberCovert = Number(inputGuessNumber);
    let divAnswer = document.querySelector(".answer");

    if (inputNumberRandom == "" || inputGuessNumber == "") {
        divAnswer.innerHTML = `<div class="answer error">Preencha os dois campos!</div>`;
    } else if (inputNumberRandomCovert <= 0 || inputGuessNumberCovert < 0) {
        divAnswer.innerHTML = `<div class="answer error">Informe um número válido!</div>`;
    } else if (isNaN(inputNumberRandomCovert) || (isNaN(inputGuessNumberCovert))) {
        divAnswer.innerHTML = `<div class="answer error">São apenas permitidos valores numéricos!</div>`;
    } else {
        divAnswer.innerHTML = "";

        let machineNumber = Math.round(Math.random() * inputNumberRandomCovert);
        console.log(machineNumber);

        if (machineNumber == inputGuessNumberCovert) {
        
        divAnswer.innerHTML = `<div class="answer true">PARABÉNSSSS! Você acertou!!</div>`;
        } else {
            divAnswer.innerHTML = `<div class="answer error">OPS... Não foi dessa vez!</div>`;
            divAnswer.innerHTML += `<div class="answer error">O número que eu pensei foi o número ${machineNumber}!</div>`;
        }
    
    }
}