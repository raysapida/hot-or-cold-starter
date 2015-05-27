
$(document).ready(function(){
  var secretNumber;
  var count = 0;
  newGame();

  /*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);

  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
    $(".overlay").fadeOut(1000);
  });


  $(".clearfix").on('click', '.new', function() {
    newGame();
  });

  $( "#guess" ).submit(function( event ) {
    var input = +$("input").val();
    count += 1;
    $('#feedback').text(input);
    $('#count').text(count);
    event.preventDefault();
  });

  function newGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    count = 0;
    $('#count').text(count);
    // alert(secretNumber);
  }
});

