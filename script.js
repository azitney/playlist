$(document).ready(function() {
  //getting album pictures
  $.get('https://lit-fortress-6467.herokuapp.com/object', function(albums) {
    for (let i = 0; i < 3; i++) {
      let coverArt = albums.results[Math.floor(Math.random() * 5)].cover_art;
      let div = document.getElementsByClassName('pic')[i];
      $(div).append(`<img src="./images/${coverArt}" alt="album" style="width:230px;height:230px;">`);
    }
  })


});
