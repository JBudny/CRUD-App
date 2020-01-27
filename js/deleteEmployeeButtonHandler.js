const updateEmployeesIds = (employees, clickedId) => {
    employees.forEach((employee, index) => {
        if (employee.id > clickedId) {
            employees[index].id = employees[index].id - 1;
        }
    });
};

const updateTableAfterAnimation = () => {
    window.setTimeout(() => {
        displayTable();
        showAlert('success', 'Employee deleted successfully.');
    }, 200);
};

const deleteEmployeeButtonHandler = element => {
    const deleteButtons = element.querySelectorAll('.delete-button, .card-delete-button');

    deleteButtons.forEach(deleteButton => {
        deleteButton.addEventListener('click', e => {
            const clickedId = Number(e.currentTarget.getAttribute('data-id'));
            const clickedEmployee = employees.find(el => el.id === clickedId);
            const clickedIndex = employees.indexOf(clickedEmployee);

            updateEmployeesIds(employees, clickedId);
            employees.splice(clickedIndex, 1);
            document.querySelector(`[data-id="${clickedId}"]`).classList.add('delete-animation');

            updateTableAfterAnimation();
        });
    });
};
