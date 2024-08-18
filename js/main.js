document.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');
    const uploadLink = document.getElementById('upload-link');
    const accountLink = document.getElementById('account-link');

    // Check if the user is logged in (using a PHP session variable)
    fetch('check_login.php')
        .then(response => response.json())
        .then(data => {
            if (data.loggedin) {
                loginLink.style.display = 'none';
                registerLink.style.display = 'none';
                uploadLink.style.display = 'inline';
                accountLink.style.display = 'inline';
            }
        });
});
