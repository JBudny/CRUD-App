const employees = [
    {
        id: 1,
        firstName: 'Jan',
        lastName: 'Otto',
        email: 'otto@gmail.com',
    },
    {
        id: 2,
        firstName: 'Jacob',
        lastName: 'Thornton',
        email: 'thornton@gmail.com',
    },
    {
        id: 3,
        firstName: 'Larry',
        lastName: 'Bird',
        email: 'larry@gmail.com',
    },
];

const displayTable = () => {
    const tbody = document.getElementById('employees');
    tbody.innerHTML = '';

    employees.forEach(employee => {
        const tr = document.createElement('tr');
        const keys = Object.keys(employee);
        const values = Object.values(employee);

        tr.className = 'table-row';
        tr.setAttribute('data-id', values[0]);
        tr.innerHTML = `
                        <button data-id="${values[0]}" type="button" class="delete-button-top">
                            <span aria-hidden="true">X</span>
                        </button>
                        <td data-label="${keys[0]}">${values[0]}</td>
                        <td data-label="${keys[1]}">${values[1]}</td>
                        <td data-label="${keys[2]}">${values[2]}</td>
                        <td data-label="${keys[3]}">
                            <a href="mailto:${values[3]}">${values[3]}</a>
                        </td>
                        <td class="options">
                            <button data-id="${values[0]}" type="button" class="btn btn-primary btn-sm edit-button" id="edit-employee">
                                Edit
                            </button>
                            <button data-id="${values[0]}" type="button" class="btn btn-danger btn-sm delete-button" id="delete-employee">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </td>
                        `;

        tbody.appendChild(tr);
        addDeleteButtonHandler(tr);
    });
};

displayTable();
