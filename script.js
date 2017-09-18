$(document).ready(function() {
  //getting album pictures uploded wihtout duplicates
  $.get('http://knowledgeable-destruction.surge.sh/test', function(albums) {
    //for loop to make sure they do not repeat
    for (let i = 0; i < 3; i++) {
      if (i === 1) {
        var y = Math.floor(Math.random() * 10);
        while (y === x) {
          y = Math.floor(Math.random() * 10);
        }
        pictures(i,y);
      } else if (i === 2) {
        z = Math.floor(Math.random() * 10);
        while (z === x || z === y) {
          z = Math.floor(Math.random() * 10);
        }
        pictures(i,z);
      } else {
        var x = Math.floor(Math.random() * 10);
        pictures(i,x);
      }
    }
    //function to upload pictures
    function pictures(i, num){
      let coverArt = albums.results[num].cover_art;
      let div = document.getElementsByClassName('pic')[i];
      $(div).append(`<img src="./images/${coverArt}" alt="album" style="width:230px;height:230px;">`);
    }
  })


});
