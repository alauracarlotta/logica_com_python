let divAboutYou = document.querySelector("#aboutYou");
let divUserName = document.querySelector("#inputName");
let divLogicTest = document.querySelector("#logicTest");

function sendInput() {
    
    const inputUserName = document.querySelector("#userName").value;

    let tagH1 = document.querySelector("h1");
    console.log(tagH1);

    tagH1.innerHTML = `Bem vindo(a), ${inputUserName} ao seu curso de Lógica de Programação com Python e JavaScript! `;

    divUserName.classList.add("input-none");
    divAboutYou.classList.remove("tell-me-about-you")
}

function sendForm() {
    
    let dayBirth = document.querySelector("#dayBirth").value;
    let monthBirth = document.querySelector("#monthBirth").value;
    let yearBirth = document.querySelector("#yearBirth").value;
    let userCity = document.querySelector("#userCity").value;
    let userProfession = document.querySelector("#userProfession").value;
    let userHobby = document.querySelector("#userHobby").value;

    let divUserInfo = document.querySelector(".show-info");

    divUserInfo.innerHTML = `<br/> <div class="show-info">Obrigada por suas Infos: <br> Você nasceu no dia ${dayBirth} de ${monthBirth} de ${yearBirth}. Mora em ${userCity}. Sua profissão é ${userProfession} e o seu hobby favorito é ${userHobby}!</div> <br/>`;

    divAboutYou.classList.add("tell-me-about-you");
    divLogicTest.classList.remove("logic-test");

}