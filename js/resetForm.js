const resetForm = formId => {
    const formElement = document.getElementById(formId);
    const formInputs = document.querySelectorAll(`#${formId} input`);

    if (formElement) {
        formElement.reset();

        formInputs.forEach(input => {
            input.classList.remove('is-valid');
            input.classList.remove('is-invalid');
        });
    }
};

const addEmployeeBtn = document.getElementById('add-employee-button');

addEmployeeBtn.addEventListener('click', e => {
    const formId = e.currentTarget.getAttribute('form');
    resetForm(formId);

    validationState = [0, 0, 0];
    submitEmployeeBtn.setAttribute('disabled', 'disabled');
});
