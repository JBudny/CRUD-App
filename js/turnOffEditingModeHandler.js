const changeModalUi = (title, buttonText) => {
    const modalTitle = document.getElementById('add-employee-modal-title');
    const submitButton = document.getElementById('submit-employee');
    modalTitle.innerHTML = title;
    submitButton.innerHTML = buttonText;
};

const turnOffEditingModeHandler = () => {
    const cancelButton = document.getElementById('add-employee-cancel');
    const closeButton = document.getElementById('add-employee-close');

    const turnOffEditingMode = () => {
        const clickedEditButton = document.querySelector(`[data-id="${editingModeData.employee.id}"] .edit-button`);
        editingModeData.enabled = false;
        editingModeData.employee = {};
        changeModalUi('Add employee', 'Add');
        if (clickedEditButton) window.setTimeout(() => clickedEditButton.focus(), 310);
    };

    cancelButton.addEventListener('click', () => {
        if (editingModeData) turnOffEditingMode();
    });

    closeButton.addEventListener('click', () => {
        if (editingModeData) turnOffEditingMode();
    });
};
