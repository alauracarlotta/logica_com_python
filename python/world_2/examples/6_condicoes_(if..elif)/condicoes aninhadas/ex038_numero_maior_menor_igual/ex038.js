( () => {

    const buttonSendInfos = document.querySelector( '[data-send-button]' );

    buttonSendInfos.addEventListener( 'click' , function () {
        
        let inputs = document.querySelectorAll('.inputNumber');
        let result = document.querySelector('[data-result]');
        const listNumbers = [];

        result.textContent = '';
        const validateInputs = ( input ) => {
            if ( input.value !== '' && !isNaN(input.value)) {
                listNumbers.push(Number(input.value));
                console.log(listNumbers);
            } else {
                result.textContent = "informe números válidos em ambos os campos"
            }
        }        
        inputs.forEach(validateInputs);

        //faço outra função que isola o maior do menor ou o igual e depois eu aplico os cases para printar na tela os erros

        /* const isSmallerOrBigger = (list) => {
            
            switch ( list ) {
                case list[0] < list[1]:
                    return result.textContent = `O número ${list[0]} é menor que o número ${list[1]}!`;

                case list[0] > list[1]:
                    return result.textContent = `O número ${list[0]} é maior que o número ${list[1]}!`;

                case list[0] === list[1]:
                    return result.textContent = `O número ${list[0]} é exatamente igual ao número ${list[1]}!`;
            }
        } */

        // listNumbers.forEach(isSmallerOrBigger( listNumbers ));
    });

}) ();