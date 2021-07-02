
function calc(e) {
    
    let operation = e.value;
    let inputNumber1 = document.querySelector("#input1").value;
    let inputNumber1Coverted = Number(inputNumber1);
    let inputNumber2 = document.querySelector("#input2").value;
    let inputNumber2Coverted = Number(inputNumber2);
    let divAnswer = document.querySelector(".answer");
    let total = 0

    let calculate = eval(inputNumber1Coverted + operation + inputNumber2Coverted);
    
    if (inputNumber1Coverted == "" || inputNumber2Coverted == "" || isNaN(inputNumber1Coverted) || isNaN(inputNumber2Coverted)) {
        divAnswer.innerHTML = `<div class="answer error">Informe um valor válido</div>`;

    } else if (operation == "^"){
        total = Math.pow(inputNumber1Coverted, inputNumber2Coverted);
        divAnswer.innerHTML = "";
        divAnswer.innerHTML += `<div class="answer true">O valor total entre ${inputNumber1} ${operation} ${inputNumber2} = ${total}</div>`;

    } else if (operation == "/") {
        divAnswer.innerHTML = "";
        divAnswer.innerHTML += `<div class="answer true">O valor total entre ${inputNumber1} ${operation} ${inputNumber2} = ${calculate.toFixed(2)}</div>`;

    } else {
        divAnswer.innerHTML = "";
        divAnswer.innerHTML += `<div class="answer true">O valor total entre ${inputNumber1} ${operation} ${inputNumber2} = ${calculate}</div>`;
    }
           
}
    