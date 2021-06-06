function inList(name, list) {

    if (list.indexOf(name) != -1) {
        return true;

    } else {
        return false;
    }

}

function addStudent() {

    if(isNaN(inputAddStudent.value) && !inList(inputAddStudent.value, studentsList)) {

        studentsList.push(inputAddStudent.value);
        let item = document.createElement('option');
        item.text = `Nome ${inputAddStudent.value} adicionado.`;
        addStudentInList.appendChild(item);
        divAnswer.innerHTML = "";

    } else {

        divAnswer.innerHTML = `<div class="answer error">Valor inválido ou já se encontra na Lista</div>`
    }

    inputAddStudent.value = "";
    inputAddStudent.focus();
    
    console.log(studentsList.length);
    console.log(studentsList)
}


function drawStudent() {

    divAnswer.innerHTML = "";
    let studentCleanBoard = Math.round(Math.random() * studentsList.length);
    console.log(studentCleanBoard);
    divAnswer.innerHTML += `<div class="answer">O aluno a limpar o quadro é ${studentsList[studentCleanBoard]}!</div>`;
    divAnswer.innerHTML += `<div class="answer">OBRIGADA POR COLABORAR COM A TURMA!</div>`;
}

let inputAddStudent = document.querySelector('#input1');
let addStudentInList = document.querySelector('#list');
let divAnswer = document.querySelector('.answer');
let studentsList = [];
