let divAboutYou = document.querySelector("#aboutYou");
let divUserName = document.querySelector("#inputName");
let divUserInfo = document.querySelector(".show-info");
let divLogicTest = document.querySelector("#logicTest");
let buttonFinalizate = document.querySelector("#buttonFinalizate");

function sendInput() {
    
    const inputUserName = document.querySelector("#userName").value;

    let tagH1 = document.querySelector("h1");
    console.log(tagH1);

    tagH1.innerHTML = `Bem vindo(a), ${inputUserName} ao seu curso de Lógica de Programação com Python e JavaScript! `;

    divUserName.classList.add("input-none");
    divAboutYou.classList.remove("tell-me-about-you");
}

function sendInfos() {
    
    let dayBirth = document.querySelector("#dayBirth").value;
    let monthBirth = document.querySelector("#monthBirth").value;
    let yearBirth = document.querySelector("#yearBirth").value;
    let userCity = document.querySelector("#userCity").value;
    let userProfession = document.querySelector("#userProfession").value;
    let userHobby = document.querySelector("#userHobby").value;

    divUserInfo.innerHTML = `<br/> <div class="show-info">Obrigada por suas Infos: <br> Você nasceu no dia ${dayBirth} de ${monthBirth} de ${yearBirth}. Mora em ${userCity}. Sua profissão é ${userProfession} e o seu hobby favorito é ${userHobby}!</div> <br/>`;

    divAboutYou.classList.add("tell-me-about-you");
    divLogicTest.classList.remove("logic-test");

}

function calculate() {

    let inputNumber1 = Number(document.querySelector("#number1").value);
    let inputNumber2 = Number(document.querySelector("#number2").value);
    let outputResult = document.querySelector("#calculateResult");
    let buttonCalculate = document.querySelector("#buttonCalculate");

    outputResult.innerHTML = `<output id="calculateResult">O resultado do calculo é <strong>${inputNumber1+inputNumber2}</strong>!</output>`;

    buttonCalculate.disabled = true;
    buttonFinalizate.classList.remove("button-finalizate");
}

function finalizateForm() {

    divLogicTest.classList.add("logic-test");
    divUserInfo.innerHTML = `<div class="show-info">Parabéns por ter chegado até aqui.<br> Você finalizou o formulário e agora passou pra a FASE DOIS!</div>`;
    buttonFinalizate.classList.add("button-finalizate");
}
