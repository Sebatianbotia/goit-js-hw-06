const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', (event) => {
  if (event.target.value.trim()) {
    nameOutput.textContent = event.target.value;
  } else {
    nameOutput.textContent = 'Anónimo';
  }
});