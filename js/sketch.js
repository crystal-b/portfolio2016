$(document).ready(function() {
	/* https://www.fourfront.us/blog/jquery-window-width-and-media-queries */
	// console.log("checking size");
	checkSize();
	$(window).resize(checkSize);
});

	function checkSize() {
		// console.log($(".next").css("height"));
		if ($(".next").css("height") == "176px") {
			// console.log("size checked");
			next();
		}
		else {
			nextMini();
		}	
	}

	function next() {
		$('#cookbooks .next--project-left').each(function() {
			$(this).css('display', 'none');	
		});
		$('#cookbooks .next--project-right').each(function() {
			$(this).parent().removeClass('align-justify');
			$(this).parent().addClass('align-right');
			$(this).css('background-image', 'url(../img/noise_board.jpg)');
			$("a", this).attr("href", "noise.html");	
		});
		$('#noise .next--project-left').each(function() {
			$(this).css('background-image', 'url(../img/cooking_book2.jpg)');
			$("a", this).attr("href", "cookbooks.html");	
		});
		$('#noise .next--project-right').each(function() {
			$(this).css('background-image', 'url(../img/clocks_mockup.jpg)');
			$("a", this).attr("href", "clocks.html");	
		});
		$('#clocks .next--project-left').each(function() {
			$(this).parent().removeClass('align-justify');
			$(this).css('background-image', 'url(../img/noise_board.jpg)');
			$("a", this).attr("href", "noise.html");	
		});
		$('#clocks .next--project-right').each(function() {
			$(this).css('display', 'none');	
		});
		// console.log("added background image");
	}

	function nextMini() {
		$('#cookbooks .next--project-left').each(function() {
			$(this).css('display', 'none');	
		});	
		$('#cookbooks .next--project-right').each(function() {
			$(this).parent().removeClass('align-justify');
			$(this).parent().addClass('align-right');
			$("a", this).attr("href", "noise.html");	
		});
		$('#noise .next--project-left').each(function() {
			$("a", this).attr("href", "cookbooks.html");	
		});
		$('#noise .next--project-right').each(function() {
			$("a", this).attr("href", "clocks.html");	
		});
		$('#clocks .next--project-left').each(function() {
			$(this).parent().removeClass('align-justify');
			$("a", this).attr("href", "noise.html");	
		});
		$('#clocks .next--project-right').each(function() {
			$(this).css('display', 'none');	
		});
	}

