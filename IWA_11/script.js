// script.js

const root1 = document.querySelector('[data-key="order1"]');

let biscuits1 = root1.querySelector('.biscuits .count');
console.log(biscuits1);

let donuts1 = root1.querySelector('.donuts .count');
console.log(donuts1);

let pancakes1 = root1.querySelector('.pancakes .count');
console.log(pancakes1);

let status1 = root1.querySelector('.delivered .count');
console.log(status1);

const root2 = document.querySelector('[data-key="order2"]');

let biscuits2 = root2.querySelector('.biscuits .count');
console.log(biscuits2);

let donuts2 = root2.querySelector('.donuts .count');
console.log(donuts2);

let pancakes2 = root2.querySelector('.pancakes .count');
console.log(pancakes2);

let status2 = root2.querySelector('.delivered .count');
console.log(status2);

const root3 = document.querySelector('[data-key="order3"]');

let biscuits3 = root3.querySelector('.biscuits .count');
console.log(biscuits3);

let donuts3 = root3.querySelector('.donuts .count');
console.log(donuts3);

let pancakes3 = root3.querySelector('.pancakes .count');
console.log(pancakes3);

let status3 = root3.querySelector('.delivered .count');
console.log(status3);

 biscuits1.textContent = root1.dataset.biscuits;
 donuts1.textContent = root1.dataset.donuts;
 pancakes1.textContent = root1.dataset.pancakes;
 status1.textContent = root1.dataset.delivered === "true" ? 'Delivered' : 'Pending';

 biscuits2.textContent = root2.dataset.biscuits;
 donuts2.textContent = root2.dataset.donuts;
 pancakes2.textContent = root2.dataset.pancakes;
 status2.textContent = root2.dataset.delievered === "false" ? 'Delivered' : 'Pending';

 biscuits3.textContent = root3.dataset.biscuits;
 donuts3.textContent = root3.dataset.donuts;
 pancakes3.textContent = root3.dataset.pancakes;
 status3.textContent = root3.dataset.delievered == "true" ? 'Delivered' : 'Pending';