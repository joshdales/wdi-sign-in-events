
document.addEventListener('DOMContentLoaded', function() {

var modal = document.querySelector('.modal');
var signIn = document.querySelector('.signin');

signIn.addEventListener('click', function() {
  modal.style.display = 'block';
  setTimeout(function() {
    modal.style.opacity = 0;
    modal.style.opacity = 1;
  }, 10);
});

var submit = document.querySelector('.submit');
var user = document.querySelector('#user');
var pass = document.querySelector('#pass');
var inputs = document.querySelectorAll('input');

submit.addEventListener('click', function() {
  user.classList.add('error');
  pass.classList.add('error');
})

inputs.forEach(function(input) {
  input.addEventListener('mouseover', function() {
    input.classList.remove('error');
  });
})

var close = document.querySelector('.close');
close.addEventListener('click', function() {
  modal.style.opacity = 0;
  setTimeout(function() {
    modal.style.display = 'none';
  }, 1000);
})

})
