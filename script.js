const inputValue = document.getElementById('inputValue');
const inputUnit = document.getElementById('inputUnit');
const outputUnit = document.getElementById('outputUnit');
const outputValue = document.getElementById('outputValue');
const convertBtn = document.getElementById('convertBtn');

const unitFactors = {
  meters: 100,
  kilometers: 100000,
  centimeters: 1,
  millimeters: 0.1,
  miles: 160934.4,
  inches: 2.54,
  feet: 30.48,
  grams: 1,
  kilograms: 1000,
  pounds: 453.592,
  ounces: 28.3495,
  liters: 1,
  milliliters: 0.001,
  gallons: 3785.41,
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
