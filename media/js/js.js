$(window).load(function() {

	$('.index .greenshape').velocity({ opacity: 1 },1200);
	$('.greyshape').velocity({ right: "-20px" }, "ease-in-out", 1000);
	$('.navbg').velocity({ width: "100%", opacity: 1 }, 2300);
	$('.primary_nav ul li')./*delay(600).*/velocity("transition.flipYIn", { stagger: 230 });
	$('.index nav ul li').delay(200).velocity("transition.flipYIn", { stagger: 230 });
	$('.background').velocity({ opacity: 1 },1200);

});


$(document).ready(function() {

	if($('body').hasClass('program')) {
		var className = $('body').attr('class').split(/\s+/);
		$('.program_nav a').removeClass('selected');
		$('.program_nav .'+className[1]).addClass("selected");
	}

});