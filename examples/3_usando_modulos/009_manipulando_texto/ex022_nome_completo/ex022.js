function sayThePropertiesOfName() {

    let inputName = document.querySelector('#input1').value;
    let divAnswer = document.querySelector(".answer");

    if(inputName == "" || !isNaN(inputName)) {

        divAnswer.innerHTML = `<div class="answer error">Informe um valor válido!</div>`;

    } else { 

        divAnswer.innerHTML = "";
        divAnswer.innerHTML += `<div class="answer">Seu nome todo em letras maiúsculas fica assim: </br><strong>${inputName.toUpperCase()}</strong>!</div>`;
        divAnswer.innerHTML += `<div class="answer">Seu nome todo em letras maiúsculas fica assim: </br><strong>${inputName.toLowerCase()}</strong>!</div>`;

        nameNoSpaces = inputName.replace(" ", "");
        divAnswer.innerHTML += `<div class="answer">Seu nome completo tem <strong>${nameNoSpaces.length}</strong> letras (sem contar espaços).</div>`;

        firstName = inputName.split(" ");
        console.log(firstName);
        divAnswer.innerHTML += `<div class="answer">Seu 1° nome é <strong>${firstName[0]}</strong> e tem <strong>${firstName[0].length}</strong> letras.</div>`;
        /* # 4 - Quantas letras tem o primeiro nome. */
        
    }
}