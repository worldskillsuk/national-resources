const logoutBtn = document.querySelector('#logout-btn');

// Check if user is logged in
if (!localStorage.getItem('loggedIn')) {
  window.location.href = '../login';
}

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('loggedIn');
  window.location.href = '../login';
});
