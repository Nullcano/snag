

import { preWords } from "./words/preWords.js";
import { midWords } from "./words/midWords.js";
import { sufWords } from "./words/sufWords.js";
import { commonWords } from "./words/commonWords.js";
import { firstNames } from "./words/firstNames.js";
import { lastNames } from "./words/lastNames.js";

const totalWords = document.querySelector('.total-words');
const container = document.querySelector('.container');
const button = document.querySelector('.generate');
const result = document.querySelector('.result');
const emoji = document.querySelector('.emoji');
const suggestions = document.querySelector('.suggestions');
const randomNum = () => { return Math.floor(Math.random() * 10) + 1 };
const randomWord = (arr) => {	return arr[Math.floor(Math.random() * arr.length)]; }
const allWords = [...preWords, ...midWords, ...sufWords, ...commonWords, ...firstNames, ...lastNames];
const recentSuggestions = [];
let suspense = 3000;
let effects = true;

document.querySelector('.snapshot').addEventListener('mouseenter', function() {
  document.querySelector('.big-hand').classList.add('active');
})
document.querySelector('.snapshot').addEventListener('mouseleave', function() {
  document.querySelector('.big-hand').classList.remove('active');
})

document.querySelector('.snapshot').addEventListener('click', function() {
  html2canvas(container).then(canvas => canvas.toBlob(blob => navigator.clipboard.write([new ClipboardItem({'image/png': blob})])));
});

button.addEventListener('click', () => {
  generateSprintName();
})
button.addEventListener('mousedown', () => {
  button.style.transform = 'scale(0.9)';
})
button.addEventListener('mouseup', () => {
  button.style.transform = 'scale(1)';
})


function generateSprintName() {
  result.classList.remove('suggestion');
  emoji.textContent = '🤔';
  result.textContent = `...`;
  setTimeout(() => {
    const randomizer = randomNum();
    emoji.textContent = '';
    result.classList.add('suggestion');
    emoji.classList.add('suggestion');
    switch(randomizer) {
      case 1:
        result.textContent = `${randomWord(firstNames)} ${randomWord(lastNames)}`;
        break;
      case 2:
        result.textContent = `${randomWord(preWords)} ${randomWord(sufWords)}`;
        break;
      case 3:
        result.textContent = `${randomWord(firstNames)} ${randomWord(sufWords)}`;
        break;
      case 4:
        result.textContent = `${randomWord(preWords)} ${randomWord(lastNames)}`;
        break;
      case 5:
        result.textContent = `${randomWord(preWords)} ${randomWord(commonWords)}`;
        break;
      case 6:
        result.textContent = `${randomWord(firstNames)} ${randomWord(midWords)} ${randomWord(lastNames)}`;
        break;
      case 7:
        result.textContent = `${randomWord(commonWords)} ${randomWord(midWords)} ${randomWord(preWords)}`;
        break;
      case 8:
        result.textContent = `${randomWord(lastNames)} ${randomWord(midWords)} ${randomWord(commonWords)}`;
        break;
      case 9:
        result.textContent = `${randomWord(preWords)} ${randomWord(midWords)} ${randomWord(commonWords)}`;
        break;
      case 10:
        result.textContent = `${randomWord(firstNames)} ${randomWord(midWords)} ${randomWord(preWords)}`;
        break;
      default:
        result.textContent = `Try again`;
    }
    recentSuggestions.push(result.textContent);
    updateSuggestions();
  }, suspense);
  result.classList.remove('suggestion');
  emoji.classList.remove('suggestion');
}

document.addEventListener('DOMContentLoaded', () => {
  totalWords.textContent = allWords.length;
})

document.querySelector('.switch').addEventListener('click', () => {
  effects = !effects;
  if (!effects) {
    document.querySelector('.switch-text').textContent = `Slå på effekter`;
  } else {
    document.querySelector('.switch-text').textContent = 'Slå av effekter';
  }
  updateEffects();
})

function updateEffects() {
  if (!effects) {
    suspense = 0;
    emoji.style.display = 'none';
    result.style.animation = 'none';
    document.querySelector('.big-hand').style.display = 'none';
    document.querySelector('.title').innerHTML = `Sprintnavngenerator`;
    document.querySelectorAll('.extra').forEach(el => el.style.display = 'none');
  } else {
    suspense = 3000;
    emoji.style.display = '';
    result.style.animation = '';
    document.querySelector('.big-hand').style.display = '';
    document.querySelector('.title').innerHTML = `<sup>S</sup><sub>print</sub><sup>na</sup><sub>vn</sub><sup>g</sup><sub>enerator</sub>`;
    [...document.querySelectorAll('.extra')].forEach(el => el.style.display = '');
  }
  console.log(effects)
}

document.querySelector('.show-all').addEventListener('click', () => {
  suggestions.scrollTop = -suggestions.scrollHeight;
})

function updateSuggestions() {
  suggestions.innerHTML = ``
  recentSuggestions.forEach(s => {
    suggestions.innerHTML += `
      <div class="suggested-name">${s}</div>
    `
  })
}