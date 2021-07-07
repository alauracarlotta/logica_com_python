function isStringValidation(input1, input = 0) {

    if (isNaN(input1)) {
        return true;
        
    } else {
        divAnswer.innerHTML = `<div class="answer error">Informe um valor válido!</div>`;
        return false;
    }
    /* if (isNaN(input1Conveted) || isNaN(input2Conveted) || isNaN(input3Conveted)) {
        divAnswer.innerHTML = `<div class="answer error">Informe um valor válido!</div>`;
        return true;
        
    } else {
        return false;
    } */
}

/* function isValidValue() {

    if (input1Conveted < 1 || input1Conveted < 1 || input1Conveted < 1) {
        divAnswer.innerHTML = `<div class="answer error">Informe um valor válido!</div>`;
        return true;

    } else {
        return false;
    }
}

function validateThreeInputs() {
    
    if (isNaNInputValue || isValidValue) {
        return true;
    } else {
        return false;
    }
    
}
 */