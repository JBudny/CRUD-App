const submitEmployeeBtn = document.getElementById('submit-employee');

submitEmployeeBtn.addEventListener('click', e => {
    e.preventDefault();

    const tableRows = document.getElementsByTagName('tr');
    const lastTableRow = tableRows[tableRows.length - 1];
    let lastEmployeeId = 0;
    if (lastTableRow.getElementsByTagName('td')[0])
        lastEmployeeId = Number(lastTableRow.getElementsByTagName('td')[0].innerHTML);
    const addEmployeeForm = document.getElementById('add-employee-form');
    const formData = serializeArray(addEmployeeForm);

    const newEmployee = {
        id: lastEmployeeId + 1,
        firstName: formData[0].value,
        lastName: formData[1].value,
        email: formData[2].value,
    };

    employees.push(newEmployee);
    displayTable();
    showAlert('success', 'Employee added successfully.');
    document.getElementById('add-employee-cancel').click();
});
