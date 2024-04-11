function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    fetch('server/src/routes/userRoutes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Failed to register user');
    })
    .then(data => {
        console.log('User registered:', data);
        // You can add code here to handle successful registration
    })
    .catch(error => {
        console.error('Error registering user:', error);
        // You can add code here to handle registration errors
    });
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Failed to log in');
    })
    .then(data => {
        console.log('User logged in:', data);
        storeLoginInfo(username, password);
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('user-profile').style.display = 'block';
        document.getElementById('view-profile').style.display = 'block';
    })
    .catch(error => {
        console.error('Error logging in:', error);
        // You can add code here to handle login errors
    });
}

function logout() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('user-profile').style.display = 'none';
    document.getElementById('view-profile').style.display = 'none';
}

function showLogin() {
    document.getElementById('user-profile').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none'; // Hide register form
}

function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('user-profile').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    resetRegisterForm(); // Reset register form fields
}

function hideForms() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
}

function resetRegisterForm() {
    document.getElementById('registerUsername').value = '';
    document.getElementById('registerEmail').value = '';
    document.getElementById('registerPassword').value = '';
}

function tasksClicked() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
}