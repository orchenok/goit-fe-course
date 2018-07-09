'use strict';

const sharm = 15;
const hurgada = 25;
const taba = 6;

const userNumberInput = prompt('Введите число необходимых мест');
let userNumber = +userNumberInput;

const sorry = 'Нам очень жаль, приходите еще!';

if (Number.isInteger(userNumber) === true && userNumber > 0) {
  if (userNumber > 25) {
    alert('Извините, столько мест нет ни в одной группе!')
  } else if (userNumber <= taba) {
    const selectTaba = confirm('Есть место в группе Taba, согласны ли вы быть в этой группе?');
    if (selectTaba === true) {
      alert('Приятного путешествия в группе Taba');
    } else {
      alert(sorry);
    }
  } else if (userNumber <= sharm) {
    const selectSharm = confirm('Есть место в группе Sharm, согласны ли вы быть в этой группе?');
    if (selectSharm === true) {
      alert('Приятного путешествия в группе Sharm');
    } else {
      alert(sorry);
    }      
  } else if (userNumber <= hurgada) {
    const selectHurgada = confirm('Есть место в группе Hurgada, согласны ли вы быть в этой группе?');
    if (selectHurgada === true) {
      alert('Приятного путешествия в группе Hurgada');
    } else {
      alert(sorry);
    }      
  }
} else {
  alert('Ошибка ввода');
}