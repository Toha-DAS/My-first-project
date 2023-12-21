const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});

const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;

}
window.addEventListener('load', () => {
  slide();
});





document.addEventListener('DOMContentLoaded', function() {
  var counter = localStorage.getItem('counter');
  if (!counter) {
    counter = 0;
  }
  document.getElementById('counter').textContent = counter;
});

document.getElementById('counter').addEventListener('click', function() {
  var newCounter = parseInt(this.textContent) + 1;
  localStorage.setItem('counter', newCounter);
  this.textContent = newCounter;
});




let name = document.querySelector('#name');
let familia = document.querySelector('#familia');
let submit = document.querySelector('#submit');

let users = {};

function User(name, familia){
    this.name = name;
    this.familia = familia;
}

function createId(users) {
    return Object.keys(users).length;
}

submit.addEventListener('click',() => {
    const nameUser = name.value;
    const famUser = familia.value;

    const user = new User(nameUser, famUser);
    const userId = 'User' + createId(users);
    users[userId] = user;

    console.log(users);
    alert('Вы успешно отметились!')
    
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
  input.value = '';
    });
})




