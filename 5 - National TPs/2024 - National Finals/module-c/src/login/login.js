// Simulated user data
const users = [{ username: 'admin', password: 'password' }];

const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  if (
    users.some(
      (user) => user.username === username && user.password === password
    )
  ) {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = '../dashboard';
  } else {
    alert('Invalid credentials');
  }
});
