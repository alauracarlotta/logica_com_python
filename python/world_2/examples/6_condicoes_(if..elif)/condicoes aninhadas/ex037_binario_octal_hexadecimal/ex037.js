( () => {

    const divHTML = document.querySelector( '[data-result]' );
    let message;

    const buttonSendInfos = document.querySelector( '[data-send-button]' );
    buttonSendInfos.addEventListener( 'click' , function () {

        let inputNumber = Number(document.getElementById( 'input1' ).value);
        let inputOptions = Number(document.getElementById( 'input2' ).value);
        
        let binary = inputNumber.toString(2)
        let octal = inputNumber.toString(8)
        let hexadecimal = inputNumber.toString(16)

        if ( validInputs( inputNumber , inputOptions ) ) {
            switch(inputOptions) {

                case 1: 
                    message = `O valor de ${inputNumber} para binário é ${binary}`;
                    showInfo( message , 'true' );
                    break;

                case 2: 
                    message = `O valor de ${inputNumber} para octal é ${octal}`;
                    showInfo( message , 'true' );
                    break;

                case 3: 
                    message = `O valor de ${inputNumber} para hexadecimal é ${hexadecimal}`;
                    showInfo( message , 'true' );
                    break;

                case 4: 
                    message = `O valor de ${inputNumber} para binário é ${binary}, para octal é ${octal} e para hexadecimal é ${hexadecimal}`;
                    showInfo( message , 'true' );
                    break;

            }
        }

        
        
    });

    const validInputs = ( number1 , number2 ) => {

        if ( number1 == '' || number2 == '') {
            message = 'Não pode haver campos vazios!';
            showInfo( message , 'error' );
            return true;
        }

        if ( isNaN( ( number1 ) ) || isNaN( ( number2 ) ) ) {
            message = 'Informe um valor válido!';
            showInfo( message , 'error' );
            return true;
        }

        if ( number2 < 1 || number2 > 4) {
            message = 'Digite uma opção válida!';
            showInfo( message , 'error' );
            return true;
        }

    return validInputs;

}

    const showInfo = ( message , colorIdentificationMessage ) => {
    divHTML.innerHTML = ''
    divHTML.innerHTML = /* html */ `<div class="answer ${colorIdentificationMessage}">${ message }</div>`;
}

}) ();