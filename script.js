const inputValue = document.getElementById('inputValue');
const inputUnit = document.getElementById('inputUnit');
const outputUnit = document.getElementById('outputUnit');
const outputValue = document.getElementById('outputValue');
const convertBtn = document.getElementById('convertBtn');

const unitFactors = {
  meters: 1,
  kilometers: 0.001,
  centimeters: 100,
  millimeters: 1000,
  miles: 0.000621371,
  inches: 39.3701,
  feet: 3.28084,
  grams: 1,
  kilograms: 0.001,
  pounds: 0.00220462,
  ounces: 0.035274,
  liters: 1,
  milliliters: 1000,
  gallons: 0.264172,
  celsius: 1,
  fahrenheit: 1,
  kelvin: 1
};

function convertTemperature(value, fromUnit, toUnit) {
  let celsiusValue;

  if (fromUnit === "celsius") {
    celsiusValue = value;
  } else if (fromUnit === "fahrenheit") {
    celsiusValue = (value - 32) / 1.8;
  } else if (fromUnit === "kelvin") {
    celsiusValue = value - 273.15;
  }

  if (toUnit === "celsius") {
    return celsiusValue;
  } else if (toUnit === "fahrenheit") {
    return celsiusValue * 1.8 + 32;
  } else if (toUnit === "kelvin") {
    return celsiusValue + 273.15;
  }
}

convertBtn.addEventListener("click", () => {
  const value = parseFloat(inputValue.value);
  const fromUnit = inputUnit.value;
  const toUnit = outputUnit.value;

  if (isNaN(value)) {
    alert("Please enter a valid number.");
    return;
  }

  let result;
  if (
    (fromUnit === "celsius" || fromUnit === "fahrenheit" || fromUnit === "kelvin") &&
    (toUnit === "celsius" || toUnit === "fahrenheit" || toUnit === "kelvin")
  ) {
    result = convertTemperature(value, fromUnit, toUnit);
  } else {
    result = value * (unitFactors[fromUnit] / unitFactors[toUnit]);
  }

  outputValue.value = result.toFixed(2);
});
