import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    startB: document.querySelector('[data-start]'),
    daysT: document.querySelector('[data-days]'),
    hoursT: document.querySelector('[data-hours]'),
    minutesT: document.querySelector('[data-minutes]'),
    secondsT: document.querySelector('[data-seconds]'),
}

let diffT = null;
let isActive = false;

refs.startB.setAttribute('disabled', '');
refs.startB.addEventListener('click', countDown);


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose : [function (selectedDates) {
      if (selectedDates[0].getTime() - options.defaultDate.getTime() < 0) {
          Notify.failure("Please choose a date in the future");
          refs.startB.removeAttribute('disabled');
          return;
      }
      refs.startB.removeAttribute('disabled');
      diffT = selectedDates[0].getTime() - options.defaultDate.getTime();
  },
],
};

flatpickr("input#datetime-picker", options);

function countDown() {
    if (isActive)
        return;
    isActive = true;
    const interid = setInterval(() => {
        diffT -= 1000;
        if (diffT < 0) {
            clearInterval(interid);
            return;
        }
        refs.daysT.textContent = convertMs(diffT).days;
        refs.hoursT.textContent = convertMs(diffT).hours;
        refs.minutesT.textContent = convertMs(diffT).minutes;
        refs.secondsT.textContent = convertMs(diffT).seconds;
    }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}