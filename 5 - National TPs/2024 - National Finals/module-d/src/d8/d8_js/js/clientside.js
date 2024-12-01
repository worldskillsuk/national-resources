document.addEventListener('DOMContentLoaded', () => {
  const registerButton = document.getElementById('registerButton');
  const messageDiv = document.getElementById('message');

  registerButton.addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    messageDiv.innerHTML = '';
    clearErrorMessages();

    // Inline validation
    const error = validateUserData({ username, email, password });
    if (error) {
      displayErrorMessage(error.field, error.message);
      return;
    }

    // Send registration data to server
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const result = await response.json();
      messageDiv.innerHTML = `<span style="${result.error ? 'color: red;' : 'color: green;'}">${result.error || result.message}</span>`;
    } catch (error) {
      console.error('Error:', error);
      messageDiv.innerHTML =
        '<span style="color: red;">Failed to register. Please try again later.</span>';
    }
  });

  /* 
Client-side
--Regex validations 
    User Name: (!/^[a-zA-Z0-9]{3,15})
    email: (!/\S+@\S+\.\S+)
    password: ((!/^(?=.*\d)(?=.*[!@#$%^&*()_+{}:"|<>?~`.,;\'\-=])[A-Za-z\d!@#$%^&*()_+{}:"|<>?~`.,;\'\-=]{8,})
*/
  // Client-side validation
  function validateUserData({ username, email, password }) {
    if (!/^[a-zA-Z0-9]{3,15}$/.test(username)) {
      return {
        field: 'username',
        message: 'Username must be 3-15 alphanumeric characters.',
      };
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return { field: 'email', message: 'Invalid email format.' };
    }
    if (
      !/^(?=.*\d)(?=.*[!@#$%^&*()_+{}:"|<>?~`.,;\'\-=])[A-Za-z\d!@#$%^&*()_+{}:"|<>?~`.,;\'\-=]{8,}$/.test(
        password
      )
    ) {
      return {
        field: 'password',
        message:
          'Password must be 8+ characters, including numbers and symbols.',
      };
    }
    return null;
  }

  function displayErrorMessage(inputId, message) {
    const inputElement = document.getElementById(inputId);
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.style.color = 'red';
    errorMessage.textContent = message;
    inputElement.parentNode.insertBefore(
      errorMessage,
      inputElement.nextSibling
    );
  }

  function clearErrorMessages() {
    document.querySelectorAll('.error-message').forEach((msg) => msg.remove());
  }
});
