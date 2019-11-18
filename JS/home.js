/*jslint browser: true */
/*global window */
window.onbeforeunload = function(){ window.scrollTo(0,0); }

//StartUpAnim---------------------------------------
$("nav").css("visibility","hidden");
$("nav").fadeOut();

$("#startButton").on("click",function(){
	$("#curtain").fadeOut(2000, function(){
		$(this).remove();
	});
    $("nav").css("visibility","visible");
    $("nav").fadeIn(1000);
	setTimeout(function() {
		allowScroll();
	}, 2000);
});

// Prevent Scroll During Animation
function allowScroll(){ 
	$('.home').css('overflow', 'auto');
}