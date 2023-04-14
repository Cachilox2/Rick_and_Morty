const validation = (userData) => {
    const errors = {}

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if(!regexEmail.test(userData.email)) {
        errors.email = "Debe ser un correo electrónico";
    }
    if(!userData.email) {
        errors.email = "El correo no puede estar vacio";
    }
    if(userData.email.length > 35) {
        errors.email = "el correo no puede tener más de 35 caracteres";
    }

    if(userData.password.length < 6 || userData.password.length > 10) {
        errors.password = "la contraseña tiene que tener entre 6 y 10 caracteres.";
    }

    if (!/\d/.test(userData.password)) {
        errors.password = "La contraseña debe tener al menos un número";
    }
    
    return errors
}

export default validation