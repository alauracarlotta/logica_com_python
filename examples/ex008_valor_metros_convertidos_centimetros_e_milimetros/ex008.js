function calculate() {

    /* km, hm, dam, m, dm, cm, mm */

    let inputMeters = document.querySelector('#input1').value;
    let inputMetersNumber = Number(inputMeters);
    let divAnswer = document.querySelector('.answer');

    if (inputMeters <= -1 || inputMeters == "") {

        divAnswer.innerHTML = `<div class="answer error">É NECESSÁRIO INFORMAR UM VALOR VÁLIDO!</div>`;

    } else {

        divAnswer.innerHTML = "";
        divAnswer.innerHTML += `<div class="answer"><em><strong>${inputMetersNumber}</strong>m</em> são equivalentes a: </div>`; 
        divAnswer.innerHTML += `<div class="answer"><em><strong>${inputMetersNumber/1000}</strong>km,</em></div>`;
        divAnswer.innerHTML += `<div class="answer"><em><strong>${inputMetersNumber/100}</strong>hm,</em></div>`;
        divAnswer.innerHTML += `<div class="answer"><em><strong>${inputMetersNumber/10}</strong>dam,</em></div>`;
        divAnswer.innerHTML += `<div class="answer"><em><strong>${inputMetersNumber*10}</strong>dm,</em></div>`;
        divAnswer.innerHTML += `<div class="answer"><em><strong>${inputMetersNumber*100}</strong>cm</em> e</div>`;
        divAnswer.innerHTML += `<div class="answer"><em><strong>${inputMetersNumber*1000}</strong>mm</em>.</div>`;

    }
}
