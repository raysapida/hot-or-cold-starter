
$(document).ready(function(){
  var secretNumber
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
    alert(input);
    event.preventDefault();
  });
});

function newGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1
  alert(secretNumber);
}

