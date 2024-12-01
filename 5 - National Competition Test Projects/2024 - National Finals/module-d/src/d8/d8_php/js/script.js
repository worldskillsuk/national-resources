//Put your code below this line
/* 
Client-side
--Regex validations 
    User Name: (!/^[a-zA-Z0-9]{3,15})
    email: (!/\S+@\S+\.\S+)
    password: ((!/^(?=.*\d)(?=.*[!@#$%^&*()_+{}:"|<>?~`.,;\'\-=])[A-Za-z\d!@#$%^&*()_+{}:"|<>?~`.,;\'\-=]{8,})
*/

document
  .getElementById('registrationForm')
  .addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevents default form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageBox = document.getElementById('message');

    // Clear previous messages
    messageBox.textContent = '';
    clearErrorMessages();

    // Perform client-side validation
    let isValid = true;

    if (!/^[a-zA-Z0-9]{3,15}$/.test(username)) {
      displayErrorMessage(
        'username',
        'Username must be 3-15 alphanumeric characters.'
      );
      isValid = false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      displayErrorMessage('email', 'Invalid email format.');
      isValid = false;
    }
    if (
      !/^(?=.*\d)(?=.*[!@#$%^&*()_+{}:"|<>?~`.,;\'\-=])[A-Za-z\d!@#$%^&*()_+{}:"|<>?~`.,;\'\-=]{8,}$/.test(
        password
      )
    ) {
      displayErrorMessage(
        'password',
        'Password must be 8+ characters, including numbers and symbols.'
      );
      isValid = false;
    }

    if (!isValid) return; // Stop submission if any validation fails

    // Send registration data to server if validation passes
    try {
      const response = await fetch('php/register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const result = await response.json();
      messageBox.textContent = result.error || result.message;
      messageBox.style.color = result.error ? 'red' : 'green';

      if (!result.error) {
        document.getElementById('registrationForm').reset(); // Clear form on success
      }
    } catch (error) {
      messageBox.textContent = 'Registration failed. Please try again.';
      messageBox.style.color = 'red';
    }
  });

function displayErrorMessage(inputId, message) {
  const inputElement = document.getElementById(inputId);
  const errorMessage = document.createElement('div');
  errorMessage.className = 'error-message';
  errorMessage.style.color = 'red';
  errorMessage.textContent = message;
  inputElement.parentNode.insertBefore(errorMessage, inputElement.nextSibling);
}

function clearErrorMessages() {
  document.querySelectorAll('.error-message').forEach((msg) => msg.remove());
}
