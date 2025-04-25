document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents form from refreshing the page

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Login Successful');
    } else {
        alert('Please fill in all fields');
    }
});
