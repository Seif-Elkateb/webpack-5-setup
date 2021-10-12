import {sum} from './js/sum';
import { divide } from './js/divide.js';
import { multiply } from './js/multiply.js';
import { createAlert } from './js/alert.js';
import { subtract } from './js/subtract';
import './styles/style.scss'
sum(2,3);
multiply(3,5);
divide(4,5);
subtract(4,5);
createAlert('job finished');
let person = {
  profile: {
    name: "",
    age: 0
  }
};

console.log(person.profile.name ?? "Anonymous"); // ""
console.log(person.profile.age ?? 18); // 0
