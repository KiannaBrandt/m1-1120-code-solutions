var $modal = document.querySelector('.modal');

var $open = document.querySelector('.open');

var $no = document.querySelector('.no');

function openModal(event) {
  $modal.className = '';
}

function closeModal(event) {
  $modal.className = 'modal';
}

$open.addEventListener('click', openModal);
$no.addEventListener('click', closeModal);
