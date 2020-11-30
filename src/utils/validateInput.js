export const validatePhoneNumber = (phoneNumber) => {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/
    return regexp.test(phoneNumber)
}

export const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const validatePassword = (password, minLength) => {
    const regexArr = [/[a-z]/, /[A-Z]/, /[0-9]/, /[^A-Za-z0-9]/]
    let passPoint = 0
    if (password.length > 0 && password.length < minLength)
        passPoint = 0
    else {
        regexArr.forEach(rgx => rgx.test(password) ? passPoint += 1 : null)
    }
    return passPoint
}