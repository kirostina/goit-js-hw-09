import { Notify } from "notiflix";
const form = document.querySelector('.form');
const { delay, step, amount } = form.elements;

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  })
}

form.addEventListener('submit', evt => {
  evt.preventDefault();
  let count = Number(delay.value);
  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(i, count)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    count += Number(step.value);
  }
})
