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
        tr.innerHTML = `<td data-label="${keys[0]}" scope="row">${values[0]}</th>
                        <td data-label="${keys[1]}">${values[1]}</td>
                        <td data-label="${keys[2]}">${values[2]}</td>
                        <td data-label="${keys[3]}">
                            <a href="mailto:${values[3]}">${values[3]}</a>
                        </td>
                        `;

        tbody.appendChild(tr);
    });
};

displayTable();
