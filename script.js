$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	$("p").click(function() {
		$("p").css('background-color', 'red');
	});
	$( "h2" ).hover(function() {
    $( "h2" ).css("background-color", "lightblue");
  });
  $( "h2" ).hover(function() {
    $( this ).css(  "font-size", "20px" );
  });
  $(".bottom_button").mouseenter(function(){
        $("body").css( "background-color", "black"); 
    });
    $(".bottom_button").mouseleave(function(){
        $("body").css( "background-color", "#eee"); 
	});
	$( ".bottom_button1" ).click(function() {
		$( ".bottom_button1" ).hide();
	});
	// trying another EFFECTS, show
	$( ".bottom_button1" ).click(function() {
		$( ".bottom_button1" ).show('slow');
		$( ".bottom_button1" ).show('medium');
		$( ".bottom_button1" ).show('fast');
		$( ".bottom_button1" ).show(1000);
	});
	$( ".bottom_button1" ).click(function() {
		$( ".p1" ).slideToggle(1000);
	});
	$( ".bottom_button2" ).click(function() {
		$( ".p2" ).slideToggle(1000);
	});
	$( ".bottom_button3" ).click(function() {
		$( ".p3" ).slideToggle(1000);
	});
	$( ".bottom_button4" ).click(function() {
		$( ".p4" ).slideToggle(1000);
	});
	$( ".bottom_button5" ).click(function() {
		$( ".p5" ).slideToggle(1000);
	});
	$( ".bottom_button6" ).click(function() {
		$( ".p6" ).slideToggle(1000);
	});
	$(".bottom_button1").mouseenter(function(){
        $(".bottom_button1").fadeTo(1000, 0.5);
    });
    $(".bottom_button1").mouseleave(function(){
        $(".bottom_button1").fadeTo(1000, 1);
    });
    $(".bottom_button2").mouseenter(function(){
        $(".bottom_button2").fadeTo(1000, 0.5);
    });
    $(".bottom_button2").mouseleave(function(){
        $(".bottom_button2").fadeTo(1000, 1);
    });
    $(".bottom_button3").mouseenter(function(){
        $(".bottom_button3").fadeTo(1000, 0.5);
    });
    $(".bottom_button3").mouseleave(function(){
        $(".bottom_button3").fadeTo(1000, 1);
    });
    $(".bottom_button4").mouseenter(function(){
        $(".bottom_button4").fadeTo(1000, 0.5);
    });
    $(".bottom_button4").mouseleave(function(){
        $(".bottom_button4").fadeTo(1000, 1);
    });
    $(".bottom_button5").mouseenter(function(){
        $(".bottom_button5").fadeTo(1000, 0.5);
    });
    $(".bottom_button5").mouseleave(function(){
        $(".bottom_button5").fadeTo(1000, 1);
    });
    $(".bottom_button6").mouseenter(function(){
        $(".bottom_button6").fadeTo(1000, 0.5);
    });
    $(".bottom_button6").mouseleave(function(){
        $(".bottom_button6").fadeTo(1000, 1);
    });
}); 
