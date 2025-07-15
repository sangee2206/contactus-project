        document.getElementById('registrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset all error messages
            document.querySelectorAll('.error-message').forEach(el => {
                el.style.display = 'none';
            });

            // Reset password requirements highlight
            document.querySelectorAll('.password-requirements li').forEach(el => {
                el.style.color = '#b8c2cc';
            });

            let isValid = true;

            // Username validation (minimum 3 characters)
            const username = document.getElementById('username').value.trim();
            if (username.length < 3) {
                document.getElementById('usernameError').style.display = 'block';
                isValid = false;
            }

            // Email validation
            const email = document.getElementById('email').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            }

            // Password validation
            const password = document.getElementById('password').value;
            const passwordErrors = {
                length: password.length >= 8,
                uppercase: /[A-Z]/.test(password),
                lowercase: /[a-z]/.test(password),
                number: /[0-9]/.test(password),
                special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
            };

            // Highlight password requirements
            if (passwordErrors.length) document.getElementById('req-length').style.color = '#27ae60';
            if (passwordErrors.uppercase) document.getElementById('req-uppercase').style.color = '#27ae60';
            if (passwordErrors.lowercase) document.getElementById('req-lowercase').style.color = '#27ae60';
            if (passwordErrors.number) document.getElementById('req-number').style.color = '#27ae60';
            if (passwordErrors.special) document.getElementById('req-special').style.color = '#27ae60';

            // Check if all password requirements are met
            const isPasswordValid = Object.values(passwordErrors).every(val => val);
            if (!isPasswordValid) {
                document.getElementById('passwordError').style.display = 'block';
                isValid = false;
            }

            // Confirm password validation
            const confirmPassword = document.getElementById('confirmPassword').value;
            if (password !== confirmPassword) {
                document.getElementById('confirmPasswordError').style.display = 'block';
                isValid = false;
            }

            // Message validation (minimum 10 characters)
            const message = document.getElementById('message').value.trim();
            if (message.length < 10) {
                document.getElementById('messageError').style.display = 'block';
                isValid = false;
            }

            // Address validation (minimum 10 characters)
            const address = document.getElementById('address').value.trim();
            if (address.length < 10) {
                document.getElementById('addressError').style.display = 'block';
                isValid = false;
            }

            // Contact number validation (exactly 10 digits)
            const contact = document.getElementById('contact').value.trim();
            const contactRegex = /^\d{10}$/;
            if (!contactRegex.test(contact)) {
                document.getElementById('contactError').style.display = 'block';
                isValid = false;
            }

            // If all validations pass
            if (isValid) {
                alert('Registration successful!');
                // In a real application, you would submit the form data to the server here
                // this.submit();
            }
        });

        // Real-time password validation feedback
        document.getElementById('password').addEventListener('input', function() {
            const password = this.value;
            const requirements = {
                length: password.length >= 8,
                uppercase: /[A-Z]/.test(password),
                lowercase: /[a-z]/.test(password),
                number: /[0-9]/.test(password),
                special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
            };

            document.getElementById('req-length').style.color = requirements.length ? '#27ae60' : '#7f8c8d';
            document.getElementById('req-uppercase').style.color = requirements.uppercase ? '#27ae60' : '#7f8c8d';
            document.getElementById('req-lowercase').style.color = requirements.lowercase ? '#27ae60' : '#7f8c8d';
            document.getElementById('req-number').style.color = requirements.number ? '#27ae60' : '#7f8c8d';
            document.getElementById('req-special').style.color = requirements.special ? '#27ae60' : '#7f8c8d';
        });