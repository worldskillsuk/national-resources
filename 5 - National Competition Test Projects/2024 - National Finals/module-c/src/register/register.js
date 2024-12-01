const registerAdminForm = document.querySelector('#register-form');

// Check if user is logged in
if (!localStorage.getItem('loggedIn')) {
  window.location.href = '../login';
}

registerAdminForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newUsername = document.querySelector('#new-username').value;

  // Show an alert to simulate creation
  alert(`New admin registered: ${newUsername}`);
  registerAdminForm.reset();
});
