// Switch between login and registration forms
document.getElementById('showRegister').addEventListener('click', function() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('registerPage').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', function() {
    document.getElementById('registerPage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'block';
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Save user data in localStorage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Automatically log in the user after registration
    document.getElementById('userFullName').textContent = fullName;
    document.getElementById('registerPage').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginPhone = document.getElementById('loginPhone').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const storedPhone = localStorage.getItem('phone');
    const storedPassword = localStorage.getItem('password');
    const fullName = localStorage.getItem('fullName');

    if (loginPhone === storedPhone && loginPassword === storedPassword) {
        // Successful login, redirect to home page
        document.getElementById('userFullName').textContent = fullName;
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('homePage').style.display = 'block';
    } else {
        // Login failed
        alert('Login failed. Please check your phone number and password.');
    }
});

// Navigation buttons (footer)
document.getElementById('homeIcon').addEventListener('click', function() {
    alert('Home button clicked! Here, you will see the dashboard.');
});

document.getElementById('investIcon').addEventListener('click', function() {
    alert('Invest button clicked! This will take you to the investment options.');
});

document.getElementById('profileIcon').addEventListener('click', function() {
    alert('Profile button clicked! This will take you to your profile.');
});
