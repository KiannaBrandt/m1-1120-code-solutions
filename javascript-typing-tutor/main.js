var $key = document.querySelectorAll('span');

var index = 0;

function typing(event) {
  if (event.key === $key[index].textContent) {
    $key[index].className = 'right';
    $key[index + 1].className = 'current';
    index++;
  } else {
    $key[index].className = 'wrong';
  }
}

window.addEventListener('keydown', typing);
