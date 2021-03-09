
$('.button').on("click", function(){
  $('.hideMe').slideToggle();
});

$('h2').on("click", function(){
  $('.cssChange').css("background-color","red");
});

$("heroTxt").click( function(){
     $('.animate').animate( {left: '250px'}, 1000 );
});
