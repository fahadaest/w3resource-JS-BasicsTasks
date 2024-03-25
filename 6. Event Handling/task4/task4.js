const form = document.getElementById('myForm');
const errorMessage = document.getElementById('error');

form.addEventListener('submit', function (event) {
    let isError = false;

    const username = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const number = document.getElementById('number').value.trim();

    if (username === '') {
        showError('Username is required.');
        isError = true;
    }

    if (email === '') {
        showError('Email is required.');
        isError = true;
    }

    if (password === '') {
        showError('Password is required.');
        isError = true;
    }

    if (number === '') {
        showError('Password is required.');
        isError = true;
    }

    if (isError) {
        event.preventDefault();
    }
});

function showError(message) {
    error.textContent = message;
    error.style.display = 'block';
}