function calculate() {
    const number1 = Number(document.querySelector("#number1").value);
    console.log(total)

    const number2 = Number(document.querySelector("#number2").value);
    console.log(total)

    const outputResult = document.querySelector("#output");

    var total = 0;

    total = number1 + number2
    console.log(total)

    outputResult.innerHTML = total;
    console.log(total)
}