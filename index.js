import { sendToCustomAnalytics, sendToEmail, sendToGoogleAnalytics } from './analitycs.js';
import observable from './observable.js';

const pinkBtn = document.getElementById('pink-btn');
const blueBtn = document.getElementById('blue-btn')

pinkBtn.addEventListener('click', ()=> {
  const data = 'You have clicked on the pink button!';
  observable.notify(data);
})

blueBtn.addEventListener('click', ()=> {
  const data = 'You have clicked on the blue button!';
  observable.notify(data);
})