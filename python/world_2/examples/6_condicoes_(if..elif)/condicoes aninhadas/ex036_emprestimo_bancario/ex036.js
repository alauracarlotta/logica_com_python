function calculateFinancing() {
    if (isNaNInputValue(input1Conveted) == true) {
        console.log("123 já")
    } else {

    }
}

var input1 = document.querySelector("#input1").value;
var input1Conveted = Number(input1); 
let input2 = document.querySelector("#input2").value;
let input2Conveted = Number(input2); 
let input3 = document.querySelector("#input3").value;
let input3Conveted = Number(input3);
let divAnswer = document.querySelector(".answer"); 


let sendButton = document.querySelector("#sendButton");
sendButton.onclick = calculateFinancing;