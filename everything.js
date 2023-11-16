// vanilla JS
// init with element
var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
  // options...
  itemSelector: '.grid-item',
  columnWidth: 80
});

// init with selector
var msnry = new Masonry( '.grid', {
  columnWidth: 80,
  itemSelector: '.grid-item'
});