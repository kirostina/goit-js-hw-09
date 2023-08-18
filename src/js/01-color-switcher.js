const bckground = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
btnStart.addEventListener('click', startB);
btnStop.addEventListener('click', stopB);
let timer = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function startB() {
    changeBckground();
    timer = setInterval(changeBckground, 1000);
}

function changeBckground() {
    bckground.style.backgroundColor = getRandomHexColor();
    btnStart.disabled = true;
    btnStop.disabled = false;
}

function stopB() {
    clearInterval(timer);
    btnStart.disabled = false;
    btnStop.disabled = true;
}
