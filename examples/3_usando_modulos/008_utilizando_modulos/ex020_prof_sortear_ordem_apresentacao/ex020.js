function inList(name, list) {

    if(list.indexOf(name) != -1) {
        return true;

    } else {
        return false;
    }
    
}

function addStudent() {

    if (isNaN(inputAddStudent.value) && !inList(inputAddStudent.value, studentsList)){

        studentsList.push(inputAddStudent.value);
        let item = document.createElement('option');
        item.text = `Nome ${inputAddStudent.value} adicionado.`
        addStudentInList.appendChild(item);
        divAnswer.innerHTML = "";

    }   else {

        divAnswer.innerHTML = `<div class="answer error">O valor é inválido ou já está na lista!</div>`;
    }

    inputAddStudent.value = "";
    inputAddStudent.focus();
    console.log(studentsList);
}

function drawOrderStudentsPresentation() {

    divAnswer.innerHTML = "";
    studentsListSorted = studentsList.sort();
    console.log(studentsList)

    for (var i = 0; i < studentsList.length; i++){
        
        divAnswer.innerHTML += `<div class="answer">${cont++}° aluno apresentar o trabalho: ${studentsListSorted[i]}<div>`;
               
    }

}

let inputAddStudent = document.querySelector('#input1');
let addStudentInList = document.querySelector('#list');
let divAnswer = document.querySelector('.answer');
let studentDraw = "";
let cont = 1
let studentsList = [];
