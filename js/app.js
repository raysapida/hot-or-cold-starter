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
    increaseCount(input);
    var feedback = checkGuess(input);
    $('#feedback').text(feedback);
    event.preventDefault();
  });

  function newGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    count = 0;
    $('#count').text(count);
    $('#guessList li').remove();
  }

  function increaseCount(guess) {
    count += 1;
    $('#count').text(count);
    $('#guessList').append('<li>'+guess+'</li>');
  }

  function checkGuess(guess) {
    if (Math.abs(guess-secretNumber) >= 50) {
      return 'Ice cold';
    } else if (Math.abs(guess-secretNumber) > 30) {
      return 'cold';
    } else if (Math.abs(guess-secretNumber) > 20) {
      return 'warm';
    } else if (Math.abs(guess-secretNumber) > 10) {
      return 'hot';
    } else if (Math.abs(guess-secretNumber) > 1 ) {
      return 'very hot';
    } else {
      newGame();
      return 'You got it right!';
    }
  }
});
