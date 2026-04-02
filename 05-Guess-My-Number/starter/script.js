'use strict';

console.log(document.querySelector('.message').textContent);
/* NOTE 
DOM = Document Object Model, structured representation of HTML documents. tree structure
allows us to manipulate the content and structure of web pages using JavaScript
document.querySelector() = method that allows us to select an element from the DOM using a CSS selector
*/
/* document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
 */
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⚠️ No number!';
  }
});
