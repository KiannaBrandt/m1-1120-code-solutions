var $tabContainer = document.querySelector('.tab-container');

var $tab = document.querySelectorAll('.tab');

var $view = document.querySelectorAll('.view');

function viewswap(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if (event.target === $tab[i]) {
        event.target.className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }
  }
  if (event.target && event.target.matches('.tab')) {
    var $dataView = event.target.getAttribute('data-view');
    for (i = 0; i < $view.length; i++) {
      if ($dataView === $view[i].getAttribute('data-view')) {
        $view[i].className = 'view';
      } else {
        $view[i].className = 'view hidden';
      }
    }
  }
}

$tabContainer.addEventListener('click', viewswap);
