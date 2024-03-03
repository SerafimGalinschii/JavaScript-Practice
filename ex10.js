function convertCelsiusToF(celsius) {
    return (celsius * 9/5) - 32;
  }

  function convertFahrenheitToC(fahrenheit) {
    return (fahrenheit + 32) * 5/9;
  }

  function calculateDegree() {
    const content = document.querySelector(".value");
    const dataValue = parseFloat(content.value);

    const unit = document.getElementById("getunit");
    const selectedUnit = unit.value;

    let result;

    if (selectedUnit === 'celsius') {
      result = convertCelsiusToF(dataValue);
    } else if (selectedUnit === 'fahrenheit') {
      result = convertFahrenheitToC(dataValue);
    } else {
      alert('Please select the unit');
      return;
    }

    const resultElement = document.getElementById("result");
    resultElement.textContent = `Converted value: ${result.toFixed(2)}`;
  }