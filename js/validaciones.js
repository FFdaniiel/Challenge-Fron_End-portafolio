export function valida(input) {
    const tipoDeInput= input.dataset.tipo

    if(input.validity.valid){
        input.parentElement.classList.remove('input-container--invalid')
        input.parentElement.querySelector('.input-message-error').innerHTML =''
    }else{
        input.parentElement.classList.add('input-container--invalid')
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput,input)
    }
}


const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]


const mensajeDeError = {
    nombre: {
        valueMissing: 'nombre no puede estar vacio',
        patternMismatch: 'Debe contener un maximo de 5 caracteres'
    },
    email: {
        valueMissing: 'correo no puede estar vacio',
        typeMismatch: 'El correo no es válido',
        patternMismatch: 'El campo correo no puede estar vacio'
    },
    asunto: {
        valueMissing: 'Asunto no puede estar vacio',
        typeMismatch: 'El correo no es válido',
        patternMismatch: 'Debe contener un maximo de 5 caracteres'

    },
};


function mostrarMensajeDeError (tipoDeInput , input) {
    let mensaje = ''
    tipoDeErrores.forEach(error => {
        if(input.validity[error]){
            mensaje = mensajeDeError[tipoDeInput][error];
        }
    })
    return mensaje;
}