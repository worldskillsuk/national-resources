//Put your code here
document.addEventListener('DOMContentLoaded', function () {
  const dayInput = document.getElementById('day');
  const monthInput = document.getElementById('month');
  const yearInput = document.getElementById('year');
  const resultDisplay = document.getElementById('result');

  // Function to remove leading zeros if already present
  function removeLeadingZeros(value) {
    return value.replace(/^0+/, '') || '0';
  }

  // Update result display
  function updateResult() {
    let day = dayInput.value ? removeLeadingZeros(dayInput.value) : 'DD';
    let month = monthInput.value ? removeLeadingZeros(monthInput.value) : 'MM';
    let year = yearInput.value ? yearInput.value : 'YYYY';

    // Add leading zeros for single-digit values only
    day = day.length === 1 ? `0${day}` : day;
    month = month.length === 1 ? `0${month}` : month;

    resultDisplay.textContent = `${year}-${month}-${day}`;
  }

  // Event listeners for input changes
  dayInput.addEventListener('input', updateResult);
  monthInput.addEventListener('input', updateResult);
  yearInput.addEventListener('input', updateResult);
});
