
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

var close = document.querySelector('.close');
close.addEventListener('click', function() {
  modal.style.opacity = 0;
  setTimeout(function() {
    modal.style.display = 'none';
  }, 1000);
})

})
