const addEmployeeButtonHandler = () => {
    const addEmployeeBtn = document.getElementById('add-employee-button');

    addEmployeeBtn.addEventListener('click', e => {
        const formId = e.currentTarget.getAttribute('form');
        resetForm(formId);

        validationState = [0, 0, 0];
        submitEmployeeBtn.setAttribute('disabled', 'disabled');
    });
}