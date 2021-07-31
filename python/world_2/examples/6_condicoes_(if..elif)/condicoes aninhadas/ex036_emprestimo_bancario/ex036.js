( () => {

    let divHTML = document.querySelector( '[data-result]' );
    let message;

    const buttonSendInfos = document.querySelector( '[data-send-button]' );
    buttonSendInfos.addEventListener( 'click' , function () {

        const houseValue = document.getElementById( 'input1' ).value;
        const salaryValue = document.getElementById( 'input2' ).value;
        const monthsOfPay = document.getElementById( 'input3' ).value;
        let monthPortion = Number ( houseValue / monthsOfPay );
        
        if ( !validInputs(houseValue , salaryValue , monthsOfPay) ) {

            orcamento( salaryValue , monthsOfPay , monthPortion );
        }
        
    });

    const orcamento = ( salaryValue , monthsOfPay , monthPortion ) => {

        if ( monthPortion <= ( salaryValue * 30 / 100 ) ) {
            message = `O seu emprestimo foi APROVADO! \nO valor de cada pacela será R$ ${( monthPortion.toFixed( 2 ) )} reais por mês por ${ monthsOfPay } meses que são ${( ( monthsOfPay / 12).toFixed( 0 ) )} anos e ${ ( ( monthsOfPay % 12 ).toFixed( 0 ) ) } mês (meses).`
            showInfo( message , 'true' )

        } else {
            message = "Infelizmente o seu emprestimo não pode ser aprovado! \nO valor do imóvel que você quer comprar ultrapassa o valor limite de 30% do seu salário para que o emprestimo seja aprovado."
            showInfo( message , 'error');
        }

    }

    const validInputs = ( number1 , number2 , number3 ) => {

        if ( number1 == '' || number2 == '' || number3 == '' ) {
            message = 'O(s) campo(s) não pode(m) estar vazio(s)!';
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

    }

    const showInfo = ( message , colorIdentificationMessage ) => {
        divHTML.innerHTML = ''
        divHTML.innerHTML = /* html */ `<div class="answer ${colorIdentificationMessage}">${ message }</div>`;
    }

}) ();