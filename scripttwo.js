$(document).ready(function() {
  //getting album pictures across top
  $.get('http://knowledgeable-destruction.surge.sh/test', function(albums) {
    for (let i = 0; i < albums.results.length; i++) {
      $('#playlist').append(`<li><img id="${albums.results[i].id}" src="./images/${albums.results[i].cover_art}" alt="album"></li>`);

      $(`#${albums.results[i].id}`).click(function(e) {
        $.get('http://knowledgeable-destruction.surge.sh/test', function(album) {
          for (let i = 0; i < album.results.length; i++) {

            if (album.results[i].id == e.target.id) {
              //empty divs for next pic
              $('#albumName').empty();
              $('#allTracks').empty();
              $('#selectedTrack').empty();
              //create left div with album name and picture
              let p1 = document.createElement('p');
              $(p1).append(`Add Tracks From: <br> ${album.results[i].title}`);
              $('#albumName').append(p1);
              $('#albumName').append(`<img src="./images/${albums.results[i].cover_art}" alt="album">`);
              //set up list of tracks
              for (let j = 0; j < albums.results[i].tracks.length; j++) {
                let pTrack = document.createElement('p');
                pTrack.setAttribute('id', j);
                $(pTrack).append(albums.results[i].tracks[j]);
                $('#allTracks').append(pTrack);
                //set click listener to each track and then be selected for the track list
                $(`#${j}`).click(function(e) {
                  let pSelect = document.createElement('p');
                  $(pSelect).append(albums.results[i].tracks[e.target.id]);
                  $('#selectedTrack').append(pSelect);
                })
              }

            }

          }

        })
      })

    }
  })


  //submit button
  $('#submitBin').click(function() {
    $.post('https://lit-fortress-6467.herokuapp.com/post', function(data) {
      $('#selectedTrack').html(data)
    });
  })

  //Clear Button
  $('#clear').click(function() {
    $('#albumName').empty();
    $('#allTracks').empty();
    $('#selectedTrack').empty();
  })

})
