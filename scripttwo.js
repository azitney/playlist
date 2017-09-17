$(document).ready(function() {
  //getting album pictures
  $.get('https://lit-fortress-6467.herokuapp.com/object', function(albums) {
    for (let i = 0; i < albums.results.length; i++) {
      $('#playlist').append(`<li><img id="${albums.results[i].id}" src="./images/${albums.results[i].cover_art}" alt="album"></li>`);

      $(`#${albums.results[i].id}`).click(function(e) {
        $.get('https://lit-fortress-6467.herokuapp.com/object', function(album) {

          for (let i = 0; i < album.results.length; i++) {

            if (album.results[i].id == e.target.id) {
              let p = document.createElement('p');
              $(p).append(`${album.results[i].artist}: ${album.results[i].title}`);
              $('#albumInfo').append(p);
            }

          }

        })
      })

    }
  })


  //submit button
  $('#submitBin').click(function() {
    $.post('https://lit-fortress-6467.herokuapp.com/post', function(data) {
      $('#albumInfo').html(data)
    });
  })

  //Clear Button
  $('#clear').click(function() {
    $('#albumInfo').empty();
  })

    $.get('http://cooperative-jeans.surge.sh/test', function(test) {
       $('body').append('hello');
     })
})
