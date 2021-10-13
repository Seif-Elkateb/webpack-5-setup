import {sum} from './js/sum';
import { divide } from './js/divide.js';
import { multiply } from './js/multiply.js';
import { checkNumber } from './js/validate.js';
import { subtract } from './js/subtract';
import './styles/style.scss';

const first= document.querySelector('#first');
const second = document.querySelector('#second');
const answer= document.querySelector('.answer');
const addBtn= document.querySelector('#add');
const subtractBtn=  document.querySelector('#subtract');
const multiplyBtn= document.querySelector('#multiply');
const divideBtn=document.querySelector('#divide');
console.log(multiplyBtn);

addBtn.addEventListener('click',()=>{
  const firstValue=Number(first.value);
  const secondValue= Number(second.value);
  if(!checkNumber(firstValue)||!checkNumber(secondValue)){
    alert('Only Numbers Are Allowed');
    return;
  }
  answer.innerHTML=sum(firstValue,secondValue);
})
subtractBtn.addEventListener('click',()=>{
  const firstValue=Number(first.value);
  const secondValue= Number(second.value);
  if(!checkNumber(firstValue)||!checkNumber(secondValue)){
    alert('Only Numbers Are Allowed');
    return;
  }
  answer.innerHTML=subtract(firstValue,secondValue);
})
multiplyBtn.addEventListener('click',()=>{
  const firstValue=Number(first.value);
  const secondValue= Number(second.value);
  if(!checkNumber(firstValue)||!checkNumber(secondValue)){
    alert('Only Numbers Are Allowed');
    return;
  }
  answer.innerHTML=multiply(firstValue,secondValue);
})
divideBtn.addEventListener('click',()=>{
  const firstValue=Number(first.value);
  const secondValue= Number(second.value);
  if(!checkNumber(firstValue)||!checkNumber(secondValue)){
    alert('Only Numbers Are Allowed');
    return;
  }
  answer.innerHTML=divide(firstValue,secondValue);
})