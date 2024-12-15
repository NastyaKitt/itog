const button1 = document.querySelector('.case1');
const button2 = document.querySelector('.case2');
const button3 = document.querySelector('.case3');
const spin1 = document.querySelector('.spin0');
const spin2 = document.querySelector('.spin2');
const spin3 = document.querySelector('.spin3');

button1.addEventListener('click', () => {
    spin1.classList.add('spinactive');
    spin1.classList.remove('spin0');
})
button2.addEventListener('click', () => {
    spin2.classList.add('spinactive');
    spin1.classList.remove('spin0');
})
button3.addEventListener('click', () => {
    spin3.classList.add('spinactive');
    spin1.classList.remove('spin0');
})