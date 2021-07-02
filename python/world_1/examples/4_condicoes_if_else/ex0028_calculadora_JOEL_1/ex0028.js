let inputNumber1 = document.querySelector("#input1").value;
let inputNumber1Coverted = Number(inputNumber1);
let inputNumber2 = document.querySelector("#input2").value;
let inputNumber2Coverted = Number(inputNumber2);
let divAnswer = document.querySelector(".answer");
let total = 0;

function calculateAddition() {
    
    total = 0;
    total = inputNumber1Coverted + inputNumber2Coverted;
    divAnswer.innerHTML = "";
    divAnswer.innerHTML += `<div class="answer true">O valor total entre ${inputNumber1} + ${inputNumber2} = ${total}</div>`;

}

function calculateSubstraction() {
    total = 0;
    total = inputNumber1Coverted - inputNumber2Coverted;
    divAnswer.innerHTML = "";
    divAnswer.innerHTML += `<div class="answer true">O valor total entre ${inputNumber1} - ${inputNumber2} = ${total}</div>`;
    
}

function calculateMultiplication() {
    
    total = 0;
    total = inputNumber1Coverted * inputNumber2Coverted;
    divAnswer.innerHTML = "";
    divAnswer.innerHTML += `<div class="answer true">O valor total entre ${inputNumber1} x ${inputNumber2} = ${total}</div>`;
    
}

function calculateDivision() {

    divAnswer.innerHTML = "";
    total = 0;
    total = inputNumber1Coverted / inputNumber2Coverted;
    divAnswer.innerHTML += `<div class="answer true">O valor total entre ${inputNumber1} / ${inputNumber2} = ${total.toFixed(2)}</div>`;
    
}

function calculatePotentation() {

    total = 0;
    total = Math.pow(inputNumber1Coverted, inputNumber2Coverted);
    divAnswer.innerHTML = "";
    divAnswer.innerHTML += `<div class="answer true">O valor total entre ${inputNumber1} ^ ${inputNumber2} = ${total}</div>`;

}


/* function calculateAddition() {

//if (validate() == false) {
    total = inputNumber1 + inputNumber2;
    divAnswer.innerHTML = "";
    divAnswer.innerHTML = `<div class="answer true">O valor total entre ${inputNumber1} + ${inputNumber2} = ${total}</div>`;
//}
} */



/* function validate() {
    if (isNaN(inputNumber1) || isNaN(inputNumber2)) {
        divAnswer.innerHTML = `<div class="answer"></div>`;
        divAnswer.innerHTML = `<div class="answer">Preencha os campos com valores válidos</div>`;
        return true;
    } else {
        return false;
    }
} */
