function calculate() {
    
    let inputStudentsGrade1 = document.querySelector('#input1').value;
    let inputStudentsGrade1Number = Number(inputStudentsGrade1);
    let inputStudentsGrade2 = document.querySelector('#input2').value;
    let inputStudentsGrade2Number = Number(inputStudentsGrade2);
    let average = (inputStudentsGrade1Number + inputStudentsGrade2Number)/2;
    let divAnswer = document.querySelector('.answer');

    if (inputStudentsGrade1 == "" || inputStudentsGrade1 < -1 || inputStudentsGrade2 < -1 || inputStudentsGrade2 == "") {

        divAnswer.innerHTML = `<div class="answer error">É NECESSÁRIO INFORMAR DUAS NOTAS OU UM VALOR VÁLIDO!</div>`;

    } else if (average >= 5) {

        divAnswer.innerHTML = "";
        divAnswer.innerHTML += `<div class="answer">A sua média foi <strong>${average.toFixed(2)}</strong>!</div>`;
        divAnswer.innerHTML += `<div class="answer true">VOCÊ PASSOU!</div>`;

    } else {

        divAnswer.innerHTML += `<div class="answer">A sua média foi <strong>${average.toFixed(2)}</strong>!</div>`;
        divAnswer.innerHTML += `<div class="answer false">Infelizmente, você não passou!</div>`;

    }
    
}