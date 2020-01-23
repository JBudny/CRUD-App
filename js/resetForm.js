const resetForm = (formElement, formInputs) => {
    formInputs.forEach(formInput => formInput.setAttribute('value', ''));

    if (formElement) {
        formElement.reset();

        formInputs.forEach(input => {
            input.classList.remove('is-valid');
            input.classList.remove('is-invalid');
        });

        validationState = [0, 0, 0];
        submitEmployeeBtn.setAttribute('disabled', 'disabled');
    }
};
