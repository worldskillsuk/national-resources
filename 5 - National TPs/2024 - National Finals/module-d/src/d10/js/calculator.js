document.addEventListener('DOMContentLoaded', () => {
  const num1 = document.getElementById('num1');
  const num2 = document.getElementById('num2');
  const result = document.getElementById('result');
  const operations = document.querySelectorAll('.operation');
  const clearButton = document.getElementById('clear');

  operations.forEach((button) => {
    button.addEventListener('click', () => {
      const number1 = parseFloat(num1.value);
      const number2 = parseFloat(num2.value);
      let res;

      if (isNaN(number1) || isNaN(number2)) {
        result.textContent = 'Please enter valid numbers.';
        return;
      }

      switch (button.id) {
        case 'add':
          res = number1 + number2;
          break;
        case 'subtract':
          res = number1 - number2;
          break;
        case 'multiply':
          res = number1 * number2;
          break;
        case 'divide':
          res = number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
          break;
      }
      result.textContent = `Result: ${res}`;
    });
  });

  // Reset function for the "Clear" button
  clearButton.addEventListener('click', () => {
    num1.value = '';
    num2.value = '';
    result.textContent = 'Result: ';
  });
});
