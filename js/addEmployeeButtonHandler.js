const addEmployeeButtonHandler = () => {
    const fillInputs = () => {
        formInputs[0].setAttribute('value', editingModeData.employee.firstName);
        formInputs[1].setAttribute('value', editingModeData.employee.lastName);
        formInputs[2].setAttribute('value', editingModeData.employee.email);
    };

    addEmployeeBtn.addEventListener('click', e => {
        const formId = e.currentTarget.getAttribute('form');
        const formElement = document.getElementById(formId);
        const formInputs = formElement.querySelectorAll('input');
        resetForm(formElement, formInputs);

        if (editingModeData.enabled) {
            fillInputs(formInputs, editingModeData);
            changeModalUi('Edit Employee', 'Save');
            formInputs.forEach(input => validate(input));
        }
    });
};
