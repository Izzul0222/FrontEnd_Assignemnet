function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if all fields are filled
    if (!username || !password) {
        alert('Please fill in all fields');
        return;
    }

    // Log user data to console (in a real app, send this data to the server)
    console.log('Username:', username);
    console.log('Password:', password);

    // Simulate successful login
    alert('Login successful!');

    // Redirect to details.html
    window.location.href = 'details.html';
}
