const formInputs = document.querySelectorAll('form input');
let validationState = [];

formInputs.forEach(input => {
    input.addEventListener('keyup', e => {
        const submitBtn = document.getElementById('submit-employee');
        validationResult = validate(input, e, validationState);

        if (validationResult) {
            submitBtn.removeAttribute('disabled');
            if (e.keyCode === 13) submitBtn.click();
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
        }
    });
});

const validateEmail = (input, email) => {
    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailReg.test(email)) {
        input.className = 'form-control is-valid';
        return true;
    }
    input.className = 'form-control is-invalid';
    return false;
};

const validateName = (input, name) => {
    if (name.length >= 2) {
        input.className = 'form-control is-valid';
        return true;
    }
    input.className = 'form-control is-invalid';
    return false;
};

const validate = (input, e, validationState) => {
    const { name, value } = e.target;

    switch (name) {
        case 'first-name':
            validationState.splice(0, 1, validateName(input, value));
            break;
        case 'last-name':
            validationState.splice(1, 1, validateName(input, value));
            break;
        case 'email':
            validationState.splice(2, 1, validateEmail(input, value));
            break;
    }

    return validationState.every(el => el);
};
