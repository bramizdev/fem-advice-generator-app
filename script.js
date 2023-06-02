'use strict';

const $ = (selector) => document.querySelector(selector);

const $adviceContainer = $('.main__container');
const $adviceId = $('.heading__advice');
const $advice = $('.advice');
const $generateBtn = $('.btn');
const $spinner = $('.spinner');
const $error = $('.error');

const displayAdvice = ({ id, advice }) => {
  $error.classList.add('hidden');
  $adviceId.textContent = id;
  $advice.textContent = `"${advice}"`;
  $spinner.classList.add('hidden');
  $adviceContainer.classList.remove('hidden');
};

const displaySpinner = () => {
  $error.classList.add('hidden');
  $adviceContainer.classList.add('hidden');
  $spinner.classList.remove('hidden');
};

const displayError = () => {
  $spinner.classList.add('hidden');
  $error.classList.remove('hidden');
};

const getAdvice = async (id = '') => {
  const url = `https://api.adviceslip.com/advice${id ? `/${id}` : ''}`;
  try {
    displaySpinner();
    const response = await fetch(url);
    const { slip } = await response.json();
    displayAdvice(slip);
  } catch (error) {
    displayError();
  }
};

getAdvice(117);

$generateBtn.addEventListener('click', () => {
  getAdvice();
});
