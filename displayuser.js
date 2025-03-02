document.addEventListener('DOMContentLoaded', function () {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userTable = document.getElementById('userTableBody');

    if (userTable) {
        users.forEach((user) => {
            const row = document.createElement('tr');
             row.innerHTML = `
                 <td>${user.name || ''}</td>
                  <td>${user.middlename || ''}</td>
                  <td>${user.lastname || ''}</td>
                  <td>${user.dob || ''}</td>
                 <td>${user.gender || ''}</td>
                 <td>${user.fathername || ''}</td>
                 <td>${user.mothername || ''}</td>
                 <td>${user.address || ''}</td>
             `;
            userTable.appendChild(row);
         });
     }
 })