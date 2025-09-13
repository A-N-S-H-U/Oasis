const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');
const cardInner = document.getElementById('cardInner');
const flipButton = document.getElementById('flipButton');

let isFlipped = false;

// Function to convert temperatures and update fields accordingly
function convertTemperatures(source) {
  let celsius, fahrenheit, kelvin;

  if (source === 'celsius') {
    celsius = parseFloat(celsiusInput.value);
    if (isNaN(celsius)) return;
    fahrenheit = (celsius * 9/5) + 32;
    kelvin = celsius + 273.15;
  } else if (source === 'fahrenheit') {
    fahrenheit = parseFloat(fahrenheitInput.value);
    if (isNaN(fahrenheit)) return;
    celsius = (fahrenheit - 32) * 5/9;
    kelvin = celsius + 273.15;
  } else if (source === 'kelvin') {
    kelvin = parseFloat(kelvinInput.value);
    if (isNaN(kelvin)) return;
    celsius = kelvin - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
  }

  celsiusInput.value = celsius.toFixed(2);
  fahrenheitInput.value = fahrenheit.toFixed(2);
  kelvinInput.value = kelvin.toFixed(2);
}

// Event listeners for input fields
celsiusInput.addEventListener('input', () => convertTemperatures('celsius'));
fahrenheitInput.addEventListener('input', () => convertTemperatures('fahrenheit'));
kelvinInput.addEventListener('input', () => convertTemperatures('kelvin'));

// Flip card handler
flipButton.addEventListener('click', () => {
  isFlipped = !isFlipped;
  if (isFlipped) {
    cardInner.style.transform = 'rotateY(180deg)';
  } else {
    cardInner.style.transform = 'rotateY(0deg)';
  }
});