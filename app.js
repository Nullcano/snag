import { commonWords } from "./words/commonWords.js";
import { midWords } from "./words/midWords.js";
import { firstNames } from "./words/firstNames.js";
import { lastNames } from "./words/lastNames.js";

const totalWords = document.querySelector('.total-words');
const container = document.querySelector('main');
const button = document.querySelector('.generate');
const result = document.querySelector('.result');
const suggestions = document.querySelector('.suggestions');
const randomNum = () => { return Math.floor(Math.random() * 18) + 1 };
const randomWord = (arr) => {	return arr[Math.floor(Math.random() * arr.length)]; }
const allWords = [...commonWords, ...midWords, ...firstNames, ...lastNames];
const recentSuggestions = [];

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
  result.textContent = `...`;
  const randomizer = randomNum();
  result.classList.add('suggestion');
  switch(randomizer) {
    case 1:
      result.textContent = `${randomWord(commonWords)} ${randomWord(commonWords)}`;
      break;
    case 2:
      result.textContent = `${randomWord(commonWords)} ${randomWord(firstNames)}`;
      break;
    case 3:
      result.textContent = `${randomWord(commonWords)} ${randomWord(lastNames)}`;
      break;
    case 4:
      result.textContent = `${randomWord(firstNames)} ${randomWord(commonWords)}`;
      break;
    case 5:
      result.textContent = `${randomWord(lastNames)} ${randomWord(commonWords)}`;
      break;
    case 6:
      result.textContent = `${randomWord(firstNames)} ${randomWord(lastNames)}`;
      break;
    case 7:
      result.textContent = `${randomWord(commonWords)} ${randomWord(midWords)} ${randomWord(commonWords)}`;
      break;
    case 8:
      result.textContent = `${randomWord(commonWords)} ${randomWord(midWords)} ${randomWord(firstNames)}`;
      break;
    case 9:
      result.textContent = `${randomWord(commonWords)} ${randomWord(midWords)} ${randomWord(lastNames)}`;
      break;
    case 10:
      result.textContent = `${randomWord(firstNames)} ${randomWord(midWords)} ${randomWord(commonWords)}`;
      break;
    case 11:
      result.textContent = `${randomWord(lastNames)} ${randomWord(midWords)} ${randomWord(commonWords)}`;
      break;
    case 12:
      result.textContent = `${randomWord(firstNames)} ${randomWord(lastNames)} ${randomWord(commonWords)}`;
      break;
    case 13:
      result.textContent = `${randomWord(commonWords)} ${randomWord(commonWords)} ${randomWord(midWords)} ${randomWord(commonWords)}`;
      break;
    case 14:
      result.textContent = `${randomWord(commonWords)} ${randomWord(midWords)} ${randomWord(commonWords)} ${randomWord(commonWords)}`;
      break;
    case 15:
      result.textContent = `${randomWord(commonWords)} ${randomWord(firstNames)} ${randomWord(midWords)} ${randomWord(commonWords)}`;
      break;
    case 16:
      result.textContent = `${randomWord(commonWords)} ${randomWord(lastNames)} ${randomWord(midWords)} ${randomWord(commonWords)}`;
      break;
    case 17:
      result.textContent = `${randomWord(firstNames)} ${randomWord(commonWords)} ${randomWord(midWords)} ${randomWord(commonWords)}`;
      break;
    case 18:
      result.textContent = `${randomWord(lastNames)} ${randomWord(commonWords)} ${randomWord(midWords)} ${randomWord(commonWords)}`;
      break;
    default:
      result.textContent = `Try again`;
  }
  recentSuggestions.push(result.textContent);
  updateSuggestions();
  result.addEventListener('click', () => {
    var textToCopy = result.textContent;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Text copied to clipboard:', textToCopy);
        const tooltipEl = document.createElement('div');
        tooltipEl.textContent = `Sprintnavn kopiert!`
        tooltipEl.className = 'tooltip';
        container.appendChild(tooltipEl);
        setTimeout(() => {
          container.removeChild(tooltipEl);
        }, 5000);
      })
      .catch((error) => {
        console.error('Unable to copy text to clipboard', error);
      });
  });
  result.classList.remove('suggestion');
}

document.addEventListener('DOMContentLoaded', () => {
  totalWords.textContent = allWords.length;
})

document.querySelector('.show-all').addEventListener('click', () => {
  suggestions.scrollTop = -suggestions.scrollHeight;
})

function updateSuggestions() {
  var suggestions = document.querySelector('.suggestions');
  suggestions.innerHTML = '';
  recentSuggestions.forEach((suggestion, index) => {
    var suggestionId = 'suggestion_' + index;
    var suggestionDiv = document.createElement('div');
    suggestionDiv.id = suggestionId;
    suggestionDiv.className = 'suggested-name';
    suggestionDiv.textContent = suggestion;
    suggestionDiv.addEventListener('click', function() {
      copyTextToClipboard(suggestion);
    });
    suggestions.appendChild(suggestionDiv);
  });
}

function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text copied to clipboard:', text);
      const tooltipEl = document.createElement('div');
      tooltipEl.textContent = `Sprintnavn kopiert!`
      tooltipEl.className = 'tooltip';
      container.appendChild(tooltipEl);
      setTimeout(() => {
        container.removeChild(tooltipEl);
      }, 5000);
    })
    .catch((error) => {
      console.error('Unable to copy text to clipboard', error);
    });
}
