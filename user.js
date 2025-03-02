document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const middlename = document.getElementById('middlename').value.trim();
        const lastname = document.getElementById('lastname').value.trim();
        const dob = document.getElementById('dob').value;
        const gender = document.getElementById('gender').value;
        const fathername = document.getElementById('fathername').value.trim();
        const mothername = document.getElementById('mothername').value.trim();
        const address = document.getElementById('address').value.trim();

        // Validate required fields
        if (!name || !fathername || !mothername || !address || !dob || !gender) {
            alert('All fields are required!');
            return;
        }

        // Validate date of birth (must be in the past)
        const dobDate = new Date(dob);
        const today = new Date();
        if (dobDate >= today) {
            alert('Invalid Date of Birth. Please enter a valid past date.');
            return;
        }

        // Create user object
        const user = { name, middlename, lastname, dob, gender, fathername, mothername, address };

        // Store in localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registration successful!');

        // Redirect to user list page
        window.location.href = 'userfile.html';

        // Reset the form
        form.reset();
    });
});
