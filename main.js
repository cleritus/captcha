const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z'];

let randomIndex = 0;
let captchaNumber = 0;
let captchaCodeArr = [];
let captchaCodeString = "";
const submitBtn = document.querySelector('.submit-btn');

const captchaLabel = document.getElementById('captcha-label');
const captchaInput = document.getElementById('captcha-input');
const captchaBtn = document.getElementById('captcha-btn');

const generateCode = () => {

  for (let i = 0; i < 4; i++) {

    randomIndex = Math.floor(Math.random() * array.length);
    captchaNumber = array[randomIndex];
    captchaCodeArr.push(captchaNumber);
  }

  captchaCodeString = captchaCodeArr.toString().replace(/,/g, "");
};

generateCode();

captchaLabel.textContent = captchaCodeString;

captchaBtn.addEventListener('click', (e) => {

  e.preventDefault();
  const captchaInputValue = captchaInput.value;

  if (captchaInputValue.toLowerCase() === captchaLabel.textContent) {
    submitBtn.style.display = 'block';
    captchaBtn.style.display = 'none';
    return true;

  } else {
    captchaInput.value = '';
    alert('Oops, prove You are not a robot and enter captcha code');
  }
})