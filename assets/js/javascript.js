var sect3 = document.getElementById('sect-3');
var sects = document.getElementsByClassName('section-4','section-5');


var up = document.getElementById('goin-up');
for (var i = 0; i < sects.length; i++) {
  sects[i];
sect3.addEventListener('mouseover', function(){
  up.style.display = "block";
  $('#goin-up').fadeIn(1000);
});
}
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 700);
    return false;
});


var waleed = '-1';

if (waleed == true) {
	console.log(true);
}else {
	console.log(false);
}