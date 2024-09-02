// Switch between login and registration forms
document.getElementById('showRegister').addEventListener('click', function() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'block';
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Store user data in localStorage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('password', password);

    alert('Registration successful! Please log in.');

    document.getElementById('register').style.display = 'none';
    document.getElementById('login').style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginPhone = document.getElementById('loginPhone').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const storedPhone = localStorage.getItem('phone');
    const storedPassword = localStorage.getItem('password');
    const fullName = localStorage.getItem('fullName');

    if (loginPhone === storedPhone && loginPassword === storedPassword) {
        alert('Login successful!');
        document.getElementById('userFullName').textContent = fullName;
        document.getElementById('login').style.display = 'none';
        document.getElementById('homePage').style.display = 'block';
    } else {
        alert('Login failed. Please check your phone number and password.');
    }
});