const competitionForm = document.querySelector('#competition-form');

// Check if user is logged in
if (!localStorage.getItem('loggedIn')) {
  window.location.href = 'index.html';
}

let results = JSON.parse(localStorage.getItem('results')) || [];

competitionForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#competitor-name').value;
  const member = document.querySelector('#competitor-member').value;
  const skill = document.querySelector('#skill').value;
  const score = document.querySelector('#score').value;

  results.push({ name, member, skill, score });
  localStorage.setItem('results', JSON.stringify(results));
  displayResults();
  competitionForm.reset();
});

const displayResults = () => {
  const resultsTable = document.querySelector('#results-table tbody');
  resultsTable.innerHTML = ''; // Clear existing rows

  results.forEach((result, index) => {
    const row = resultsTable.insertRow();

    const nameCell = row.insertCell();
    nameCell.textContent = result.name;

    const memberCell = row.insertCell();
    memberCell.textContent = result.member;

    const skillCell = row.insertCell();
    skillCell.textContent = result.skill;

    const scoreCell = row.insertCell();
    scoreCell.textContent = result.score;

    const actionsCell = row.insertCell();
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editResult(index));
    actionsCell.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteResult(index));
    actionsCell.appendChild(deleteButton);
  });
};

const editResult = (index) => {
  const result = results[index];
  document.querySelector('#competitor-name').value = result.name;
  document.querySelector('#competitor-member').value = result.member;
  document.querySelector('#skill').value = result.skillArea;
  document.querySelector('#score').value = result.score;
  results.splice(index, 1);
  displayResults();
};

const deleteResult = (index) => {
  results.splice(index, 1);
  localStorage.setItem('results', JSON.stringify(results));
  displayResults();
};

// Initial display
displayResults();
