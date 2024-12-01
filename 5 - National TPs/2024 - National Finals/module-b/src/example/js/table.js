export const getTable = () => document.querySelector('#awards-table');

export const updateTable = (results) => {
  const table = getTable();

  const tbody = table.querySelector('tbody');
  tbody.innerHTML = ''; // Clear existing rows

  results.forEach((row) => {
    const tr = document.createElement('tr');

    const memberTd = document.createElement('td');
    memberTd.textContent = row.member.name;
    tr.appendChild(memberTd);

    const goldTd = document.createElement('td');
    goldTd.textContent = row.awards.gold;
    tr.appendChild(goldTd);

    const silverTd = document.createElement('td');
    silverTd.textContent = row.awards.silver;
    tr.appendChild(silverTd);

    const bronzeTd = document.createElement('td');
    bronzeTd.textContent = row.awards.bronze;
    tr.appendChild(bronzeTd);

    const medallionForExcellenceTd = document.createElement('td');
    medallionForExcellenceTd.textContent = row.awards.medallionForExcellence;
    tr.appendChild(medallionForExcellenceTd);

    const totalTd = document.createElement('td');
    totalTd.textContent = Object.values(row.awards).reduce(
      (acc, curr) => acc + curr,
      0
    );
    tr.appendChild(totalTd);

    tbody.appendChild(tr);
  });
};
