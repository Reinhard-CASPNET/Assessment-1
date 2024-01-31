document.addEventListener('DOMContentLoaded', function() {
  const divCounterDisplay = document.getElementById('divCounterDisplay');
  const btnIncreaseCounter = document.getElementById("btnIncreaseCounter");
  const btnDecreaseCounter = document.getElementById("btnDecreaseCounter");

  let counter = 0;

  btnIncreaseCounter.addEventListener('click', function() {
    counter++;
    divCounterDisplay.textContent = counter;
  });

  btnDecreaseCounter.addEventListener('click', function() {
    counter--;
    divCounterDisplay.textContent = counter;
  });
});