   // my javascript code so the calculator is functional 
   function appendNumber(num) {
    document.getElementById('results').value += num;
  }

  function appendOperator(operator) {
    let lastCharacter = document.getElementById('results').value.slice(-1);
    if ( ['+', '-', '*', '/', '%', '**'].includes(lastCharacter)) {
      document.getElementById('results').value = document.getElementById('results').value.slice(0, -1) + operator;
    } else {
      document.getElementById('results').value += operator;
    }
  }

  function appendFunction(func) {
    document.getElementById('results').value += func;
  }

  function clearDisplay() {
    document.getElementById('results').value = '';
  }

  function calculate() {
    const expression = document.getElementById('results').value;
    if (expression) {
      try {
        const result = eval(expression);
        document.getElementById('results').value = result;
      } catch (error) {
        document.getElementById('results').value = 'Error';
      }
    }
  }