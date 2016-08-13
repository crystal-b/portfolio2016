$(document).ready(function() {
	/* https://www.fourfront.us/blog/jquery-window-width-and-media-queries */
	// console.log("checking size");
	checkSize();
	$(window).resize(checkSize);


	// /* playing around with animation */
	// function pathPrepare ($el) {
	// 	var lineLength = $el[0].getTotalLength();
	// 	console.log(lineLength);
	// 	$el.css("stroke-dasharray", lineLength);
	// 	$el.css("stroke-dashoffset", lineLength);
	// }

	// var $trail = $("path#trail");
	// // prepare SVG
	// pathPrepare($trail);
	// // init controller
	// var controller = new ScrollMagic.Controller();
	// // build tween
	// var tween = new TimelineMax()
	// 	.add(TweenMax.to($trail, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw trail for 1
	// 	// .add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// // build scene
	// var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 4500, tweenChanges: true})
	// 				.setTween(tween)
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(controller);


// 	var element = $("#tiny-projects").offset().top;

// 	$(window).scroll(function(){
// 	  var y = $(window).scrollTop();
// 	  console.log(y);
// 	    if (y >= element){
// 	      // Do stuff, like append a class to an element
// 	    }
// 	});
});

	// var getMax = function(){
 //        return $(document).height() - $(window).height();
 //    }
    
 //    var getValue = function(){
 //        return $(window).scrollTop();
 //    }
    
 //    if('max' in document.createElement('progress')){
 //        // Browser supports progress element
 //        var progressBar = $('progress');
        
 //        // Set the Max attr for the first time
 //        progressBar.attr({ max: getMax() });

 //        $(document).on('scroll', function(){
 //            // On scroll only Value attr needs to be calculated
 //            progressBar.attr({ value: getValue() });
 //        });
      
 //        $(window).resize(function(){
 //            // On resize, both Max/Value attr needs to be calculated
 //            progressBar.attr({ max: getMax(), value: getValue() });
 //        });   
 //    }
 //    else {
 //        var progressBar = $('.progress-bar'), 
 //            max = getMax(), 
 //            value, width;
        
 //        var getWidth = function(){
 //            // Calculate width in percentage
 //            value = getValue();            
 //            width = (value/max) * 100;
 //            width = width + '%';
 //            return width;
 //        }
        
 //        var setWidth = function(){
 //            progressBar.css({ width: getWidth() });
 //        }
        
 //        $(document).on('scroll', setWidth);
 //        $(window).on('resize', function(){
 //            // Need to reset the Max attr
 //            max = getMax();
 //            setWidth();
 //        });
 //    }


// console.log("hi");

//  	var getMax = function(){
//  		//find height of page
//  		console.log($(document).height() - $(window).height());
//         return $(document).height() - $(window).height();

//     }
    
//     var getValue = function(){
//     	//find scroll position
//     	console.log($(window).scrollTop());
//         return $(window).scrollTop();
//     }
    
//     if('max' in document.createElement('progress')){
//         // Browser supports progress element
//         var progressBar = $('progress');
        
//         // Set the Max attr for the first time
//         progressBar.attr({ max: getMax() });

//         $(document).on('scroll', function(){
//             // On scroll only Value attr needs to be calculated
//             progressBar.attr({ value: getValue() });
//         });
      
//         $(window).resize(function(){
//             // On resize, both Max/Value attr needs to be calculated
//             progressBar.attr({ max: getMax(), value: getValue() });
//         });   
//     }
//     else {
//         var progressBar = $('.progress-bar'), 
//             max = getMax(), 
//             value, height;
        
//         var getHeight = function(){
//             // Calculate width in percentage
//             value = getValue();            
//             height = (value/max) * 100;
//             height = height + '%';
//             return height;
//         }
        
//         var setHeight = function(){
//             progressBar.css({ height: getHeight() });

//         }
//         $(document).on('scroll', setHeight);
//         $(window).on('resize', function(){
//             // Need to reset the Max attr
//             max = getMax();
//             setHeight();
//         });
//     }
// });



	/* visual bottom nav */
	var projectsArr = [
		"cookbooks.html",
		"noise.html",
		"toaster.html",
		"clocks.html",
		"scents.html",
		"tiny-projects.html"
	];


	function checkSize() {
		if ($(".next").css("height") == "176px") {
			next();
		}
		else {
			nextMini();
		}
	}	

	var pArr = [
		{"id":"#noise", "img":"url(../img/noise_board.jpg", "url":"noise.html"},
		{"id":"#toaster", "img":"url(../img/toaster.jpg)", "url":"toaster.html"},
		{"id":"#cookbooks", "img":"url(../img/cooking_book2.jpg)", "url":"cookbooks.html"},
		{"id":"#clocks", "img":"url(../img/clocks_mockup.jpg)", "url":"clocks.html"},
		{"id":"#scents", "img":"", "url":"scents.html"},
		{"id":"#tiny", "url":"tiny-projects.html"}
	];

	function next() {
		// $('#noise .next--project-left').each(function() {
		// 	$(this).css('display', 'none');	
		// });
		$(pArr[0].id + ' .next--project-left').each(function() {
			$(this).css('display', 'none');	
		});
		$(pArr[0].id + ' .next--project-right').each(function() {
			$(this).parent().removeClass('align-justify');
			$(this).parent().addClass('align-right');
			$(this).css('background-image', pArr[1].img);
			$("a", this).attr("href", pArr[1].url);	
		});
		$(pArr[1].id + ' .next--project-left').each(function() {
			$(this).css('background-image', pArr[0].img);
			$("a", this).attr("href", projectsArr[0].url);	
		});
		$(pArr[1].id + ' .next--project-right').each(function() {
			$(this).css('background-image', pArr[2].img);
			$("a", this).attr("href", pArr[2].url);	
		});
		$(pArr[2].id + ' .next--project-left').each(function() {
			$(this).css('background-image', pArr[1].img);
			$("a", this).attr("href", projectsArr[1].url);	
		});
		$(pArr[2].id + ' .next--project-right').each(function() {
			$(this).css('background-image', pArr[3].img);
			$("a", this).attr("href", pArr[3].url);	
		});
		/* PENULTIMATE PROJECT */
		$(pArr[3].id + ' .next--project-left').each(function() {
			$(this).css('background-image', pArr[2].img);
			$("a", this).attr("href", projectsArr[2].url);	
		});
		$(pArr[3].id + ' .next--project-right').each(function() {
			$(this).css('background-image', 'none');
			$(this).addClass('next--right-tiny');
			$(this).append('<p>Etc</p>');
			$("a", this).attr("href", pArr[5].url);	
		});
		// 	$('#cookbooks .next--project-right').each(function() {
		// 	$(this).parent().removeClass('align-justify');
		// 	$(this).parent().addClass('align-right');
		// 	$(this).css('background-image', 'url(../img/noise_board.jpg)');
		// 	$("a", this).attr("href", projectsArr[1]);	
		// });
		// $("'" + pArr[0].id + " .next--project-left'").each(function() {
		// 	$(this).css('display', 'none');	
		// });
		// $('#cookbooks .next--project-right').each(function() {
		// 	$(this).parent().removeClass('align-justify');
		// 	$(this).parent().addClass('align-right');
		// 	$(this).css('background-image', 'url(../img/noise_board.jpg)');
		// 	$("a", this).attr("href", projectsArr[1]);	
		// });
		// $('#noise .next--project-left').each(function() {
		// 	$(this).css('background-image', 'url(../img/cooking_book2.jpg)');
		// 	$('a', this).attr('href', projectsArr[0]);	
		// });
		// $('#noise .next--project-right').each(function() {
		// 	$(this).css('background-image', 'url(../img/toaster.jpg)');
		// 	$("a", this).attr("href", projectsArr[2]);	
		// });
		// $('#toaster .next--project-left').each(function() {
		// 	$(this).css('background-image', 'url(../img/noise_board.jpg)');
		// 	$("a", this).attr("href", projectsArr[1]);	
		// });
		// $('#toaster .next--project-right').each(function() {
		// 	$(this).css('background-image', 'url(../img/clocks_mockup.jpg)');
		// 	$("a", this).attr("href", projectsArr[3]);	
		// });
		// $('#clocks .next--project-left').each(function() {
		// 	$(this).css('background-image', 'url(../img/toaster.jpg)');
		// 	$("a", this).attr("href", projectsArr[2]);	
		// });
		// $('#clocks .next--project-right').each(function() {
		// 	$(this).css('background-image', 'none');
		// 	$(this).addClass('next--right-tiny');
		// 	$(this).append('<p>Etc</p>');
		// 	$("a", this).attr("href", projectsArr[4]);
		// });
		$('#tiny-projects .next--project-left').each(function() {
			$(this).parent().removeClass('align-justify');
			$(this).css('background-image', 'url(../img/clocks_mockup.jpg)');
			$("a", this).attr("href", projectsArr[3]);	
		});
		$('#tiny-projects .next--project-right').each(function() {
			$(this).css('display', 'none');	
		});
		$('#tiny-project .next--project-left').each(function() {
			$(this).parent().removeClass('align-justify');
			$(this).css('background-image', 'none');
			$(this).addClass('next--right-tiny');
			$(this).append('<p>Etc</p>');
		});
		$('#tiny-project .next--project-right').each(function() {
			$(this).css('display', 'none');	
		});
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
			$("a", this).attr("href", "toaster.html");	
		});
		$('#toaster .next--project-left').each(function() {
			$("a", this).attr("href", "noise.html");
		});
		$('#toaster .next--project-right').each(function() {
			$("a", this).attr("href", "clocks.html");
		});
		$('#clocks .next--project-left').each(function() {
			$("a", this).attr("href", "toaster.html");
		});
		$('#clocks .next--project-right').each(function() {
			$("a", this).attr("href", "tiny-projects.html");
		});
		$('#tiny-projects .next--project-left').each(function() {
			$(this).parent().removeClass('align-justify');
			$("a", this).attr("href", "clocks.html");
		});
		$('#tiny-projects .next--project-right').each(function() {
			$(this).css('display', 'none');
		});
		$('.carousel').each(function() {
			// $(this).removeClass('carousel');
			// $(this).css('padding-bottom', '5rem');
		});
		// $('#clocks .next--project-left').each(function() {
		// 	$(this).parent().removeClass('align-justify');
		// 	$("a", this).attr("href", "noise.html");	
		// });
		// $('#clocks .next--project-right').each(function() {
		// 	$(this).css('display', 'none');	
		// });

		// var winHeight = $(window).height(),
		// 	docHeight = $(documnet).height();
		// 	max = docHeight - winHeight;
		// $(progress).attr('max', max);
		// var value = $(window).scrollTop();
		// $(progress).attr('value', value);
		// $(document).on('scroll', function() {
		// 	value = $(window).scrollTop();
		// 	progressBar.attr('value', value);
		// });

		// $(document).on('ready', function() {  
		//   var winHeight = $(window).height(), 
		//       docHeight = $(document).height(),
		//       progressBar = $('progress'),
		//       max, value;

		//    Set the max scrollable area 
		//   max = docHeight - winHeight;
		//   progressBar.attr('max', max);

		//   $(document).on('scroll', function() {
		//      value = $(window).scrollTop();
		//      progressBar.attr('value', value);
		//   });
		// });


	};

