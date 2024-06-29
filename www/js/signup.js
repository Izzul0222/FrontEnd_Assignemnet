function submitSignup() {
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if all fields are filled
    if (!email || !username || !password) {
        alert('Please fill in all fields');
        return;
    }

    // Log user data to console (in a real app, send this data to the server)
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);

    // Clear the form
    document.getElementById('signupForm').reset();

    // Provide feedback to the user
    alert('Signup successful!');

    // Redirect to login page
    window.location.href = 'login.html';
}
