const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/

export function validation(userData) {
    let errors = {}

    if(!regexEmail.test(userData.username)) errors.username = 'El usuario deber ser un email'
    else if(!userData.username) errors.username = 'El usuario no puede estar vacío'
    else if(userData.username.length > 35) errors.username = 'El nombre de usuario no puede ser mayor a 35 caracteres'
    if(!regexPassword.test(userData.password)) errors.password = 'La constraseña debe tener al menos un numero'
    else if(userData.password < 6 && userData.password > 10) errors.password = 'La contraseña debe tener una longitud entre 6 y 10 caracteres'
    return errors; 
}