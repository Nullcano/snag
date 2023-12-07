

import { preWords } from "./words/preWords.js";
import { midWords } from "./words/midWords.js";
import { sufWords } from "./words/sufWords.js";
import { commonWords } from "./words/commonWords.js";
import { selfWords } from "./words/selfWords.js";
import { firstNames } from "./words/firstNames.js";
import { lastNames } from "./words/lastNames.js";

const totalWords = document.querySelector('.total-words');
const button = document.querySelector('.generate');
const result = document.querySelector('.result');
const emoji = document.querySelector('.emoji');
const randomNum = () => { return Math.floor(Math.random() * 10) + 1 };
const randomWord = (arr) => {	return arr[Math.floor(Math.random() * arr.length)]; }
const allWords = [...preWords, ...midWords, ...sufWords, ...commonWords, ...selfWords, ...firstNames, ...lastNames];

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
  emoji.textContent = '🤔'
  result.textContent = `...`;
  setTimeout(() => {
    const randomizer = randomNum();
    emoji.textContent = '☝️🤓';
    result.classList.add('suggestion');
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
        result.textContent = `${randomWord(selfWords)} ${randomWord(commonWords)}`;
        break;
      case 6:
        result.textContent = `${randomWord(firstNames)} ${randomWord(midWords)} ${randomWord(lastNames)}`;
        break;
      case 7:
        result.textContent = `${randomWord(commonWords)} ${randomWord(midWords)} ${randomWord(selfWords)}`;
        break;
      case 8:
        result.textContent = `${randomWord(lastNames)} ${randomWord(midWords)} ${randomWord(commonWords)}`;
        break;
      case 9:
        result.textContent = `${randomWord(selfWords)} ${randomWord(midWords)} ${randomWord(commonWords)}`;
        break;
      case 10:
        result.textContent = `${randomWord(firstNames)} ${randomWord(midWords)} ${randomWord(preWords)}`;
        break;
      default:
        result.textContent = `Try again`;
    }
  }, 3000);
  result.classList.remove('suggestion');
}

document.addEventListener('DOMContentLoaded', () => {
  totalWords.textContent = allWords.length;
})