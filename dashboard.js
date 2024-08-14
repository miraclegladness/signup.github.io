document.addEventListener('DOMContentLoaded', () => {
            const loginForm = document.getElementById('login-form');
            const signupForm = document.getElementById('signup-form');
            const loginFormContainer = document.getElementById('login-form-container');
            const signupFormContainer = document.getElementById('signup-form-container');
            const showSignupLink = document.getElementById('show-signup');
            const showLoginLink = document.getElementById('show-login');

            // Show the signup form
            showSignupLink.addEventListener('click', (e) => {
                e.preventDefault();
                loginFormContainer.classList.add('hidden');
                signupFormContainer.classList.remove('hidden');
            });

            // Show the login form
            showLoginLink.addEventListener('click', (e) => {
                e.preventDefault();
                signupFormContainer.classList.add('hidden');
                loginFormContainer.classList.remove('hidden');
            });

            // Handle Login
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = document.getElementById('login-email').value;
                const password = document.getElementById('login-password').value;
                const users = JSON.parse(localStorage.getItem('users')) || [];
                const user = users.find(u => u.email === email && u.password === password);

                if (user) {
                    localStorage.setItem('loggedIn', JSON.stringify(user));
                    alert('Logged in successfully!');
                    window.location.href = 'https://fantastic-monstera-6b0ba6.netlify.app'; // Redirect to the home page
                } else {
                    alert('Invalid email or password.');
                }
            });

            // Handle Signup
            signupForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('signup-name').value;
                const email = document.getElementById('signup-email').value;
                const contact = document.getElementById('signup-contact').value;
                const password = document.getElementById('signup-password').value;
                
                let users = JSON.parse(localStorage.getItem('users')) || [];
                const existingUser = users.find(u => u.email === email);
                
                if (!existingUser) {
                    users.push({ name, email, contact, password });
                    localStorage.setItem('users', JSON.stringify(users));
                    alert('Account created successfully!');
                    loginFormContainer.classList.remove('hidden');
                    signupFormContainer.classList.add('hidden');
                } else {
                    alert('Account already exists with this email.');
                }
            });
        });

    document.addEventListener('DOMContentLoaded', () => {
    const resetPasswordForm = document.getElementById('reset-password-form');

    // Handle Password Reset
    resetPasswordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('reset-email').value;
        const newPassword = document.getElementById('reset-new-password').value;
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email);

        if (user) {
            user.password = newPassword;
            localStorage.setItem('users', JSON.stringify(users));
            alert('Password reset successfully!');
        } else {
            alert('No user found with this email.');
        }
    });
});


    document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.toggle-password').forEach(button => {
        button.addEventListener('click', () => {
            const target = document.querySelector(button.getAttribute('data-target'));
            const type = target.getAttribute('type') === 'password' ? 'text' : 'password';
            target.setAttribute('type', type);

            const eyeIcon = button.querySelector('.eye-icon');
            eyeIcon.textContent = type === 'password' ? '👁️' : '🙈';
        });
    });
});

