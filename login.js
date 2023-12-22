function Login() {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();

    // Reset error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

   
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    if (username !== storedUsername || password !== storedPassword) {
        alert("Invalid username or password");



        return false; // Prevent form submission
    }

   
    window.location.href = 'todo.html';

    
    return false;
}