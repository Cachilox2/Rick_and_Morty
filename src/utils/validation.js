
const validation = (inputs) => {
    const errors = {}

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if(!regexEmail.test(inputs.email)) {
        errors.email = "Debe ser un correo electrónico";
    }
    if(!inputs.email) {
        errors.email = "El correo no puede estar vacio";
    }
    if(inputs.email.length > 35) {
        errors.email = "el correo no puede tener más de 35 caracteres";
    }

    if(inputs.password.length < 6 || inputs.password.length > 10) {
        errors.password = "la contraseña tiene que tener entre 6 y 10 caracteres.";
    }

    if (!/\d/.test(inputs.password)) {
        errors.password = "La contraseña debe tener al menos un número";
    }
    
    return errors
}

export default validation