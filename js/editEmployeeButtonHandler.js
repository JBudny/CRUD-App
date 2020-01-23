const addEmployeeBtn = document.getElementById('add-employee-button');
let editingModeData = { enabled: false, employee: {} };

const editEmployeeButtonHandler = element => {
    const editButton = element.querySelector('.edit-button');

    editButton.addEventListener('click', e => {
        const employeeId = e.currentTarget.getAttribute('data-id');
        const employee = employees.find(employee => employee.id === Number(employeeId));

        editingModeData.enabled = true;
        editingModeData.employee = employee;

        addEmployeeBtn.click();
    });
};
