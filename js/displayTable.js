const employees = [
    {
        "id": 1,
        "name": 'Jan Otto',
        "email": 'otto@gmail.com'
    },
    {
        "id": 2,
        "name": 'Jacob Thornton',
        "email": 'thornton@gmail.com'
    },
    {
        "id": 3,
        "name": 'Larry the Bird',
        "email": 'larry@gmail.com'
    }
];

const displayTable = () => {
    employees.forEach((employee) => {
        const tr = document.createElement('tr');
        const keys = Object.keys(employee);
        const values = Object.values(employee);
        const tbody = document.getElementById('employees');

        tr.className = 'table-row';
        tr.innerHTML = `<td data-label="${keys[0]}" scope="row">${values[0]}</th>
                        <td data-label="${keys[1]}">${values[1]}</td>
                        <td data-label="${keys[2]}">
                            <a href="mailto:${values[2]}">${values[2]}</a>
                        </td>
                        `

        tbody.appendChild(tr);
    });
}

displayTable();
