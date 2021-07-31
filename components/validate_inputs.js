const validInputs = ( number1 , number2 = 0 , number3 = 0) => {

    if ( number1 == '' || number2 == '' || number3 == '' ) {
        message = 'Não pode haver campos vazios!';
        showInfo( message , 'error' );
        return true;
    }

    if ( 
        number1 < 0 || 
        number2 < 0 || 
        number3 < 0 || 
        isNaN( Number ( number1 ) ) || 
        isNaN( Number ( number2 ) ) || 
        isNaN( Number ( number3 ) ) ) {
            message = 'Informe um valor válido!';
            showInfo( message , 'error' );
            return true;
    }

    if ( number3 > 480 ) {
        message = 'O número máximo de parcelas é 480 parcelas!';
        showInfo( message , 'error')
        return true;
    }

    return validInputs;

}

const showInfo = ( message , colorIdentificationMessage, divHTML ) => {
    divHTML.innerHTML = ''
    divHTML.innerHTML = /* html */ `<div class="answer ${colorIdentificationMessage}">${ message }</div>`;
}
