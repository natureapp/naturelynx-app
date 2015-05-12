// JavaScript Document


	
jQuery( window ).resize(function() {
	//Global variables
	var device_height = jQuery(window).height();
	var device_width = jQuery(window).width();
	
	//Landing footer position
	var contentH = $(".landing-info").outerHeight();
	if(contentH > device_height){
		$(".landingpage-footer").css({"position":"relative"});
	}
	var dialogH = $(".form-dialog").outerHeight();
	if(dialogH > device_height) {
		$(".landingpage-footer").css({"position":"relative"});
	}
	
	
	
});

jQuery(document).ready(function($) {
	
 	//Global variables
	var device_height = jQuery(window).height();
	var device_width = jQuery(window).width();
	
	//Landing footer position
	var contentH = $(".landing-info").outerHeight();
	var dialogH = $(".form-dialog").outerHeight();
  	if(contentH > device_height){
	  	$(".landingpage-footer").css({"position":"relative"});
  	}
  	if(dialogH > device_height) {
	  	$(".landingpage-footer").css({"position":"relative"});
  	}  	
  	
  	//Set height - More photos
	var photowrapW = jQuery(".photowrap").width();
	jQuery(".photowrap a").css("height",photowrapW);
	
	//Set height - ightings-post
	var gridW = jQuery(".sightings-list.grid-view .sightings-post").width();
	jQuery(".sightings-list.grid-view .sightings-post").css("height",gridW);
	
	
	//searchpage
	var page_view = $(window).height()-92;
	$('.search-page iframe').css("min-height", page_view);

	//Add Comments
	$( "#add-comment" ).click(function() {
		if($(".add-comment").css({"display":"none"})){
			$(".add-comment").css({"display":"block"});
			$(".add-comment").removeClass("hidden");
			$("html, body").animate({scrollTop:$(document).height()}, "slow");
			$("input.comment-box").focus();
			
		}
		else{
			$("input.comment-box").focus();
		}
  		
	});
	
	//Mysightings List view/ Grid View
	$( ".list-view-btn" ).click(function() {
		$(".sightings-list").removeClass("grid-view");
		$(".sightings-list").addClass("list-view");
		$(".list-view-btn").addClass("active");
		$(".grid-view-btn").removeClass("active");
		
	});
	
	$( ".grid-view-btn" ).click(function() {
		$(".sightings-list").removeClass("list-view");
		$(".sightings-list").addClass("grid-view");
		$(".grid-view-btn").addClass("active");
		$(".list-view-btn").removeClass("active");
		
	});
	
	//Set height - Image upload Drop area 
	var dropW = jQuery(".drop-area").width();
	jQuery(".drop-area").css("height",dropW);
         
          
	//Capture area width and height
	$('.capture-frame').css("height", device_width);
	
	//datepicker and timepicker bootstrap
	$('#datepicker').datepicker({
		format: "dd/mm/yyyy",
		keyboardNavigation: false,
		autoclose: true,
		
	});  

	
	$('#timepicker').timepicker();
	
	//Species Group Popup
	$( "#speciesgroup-btn" ).click(function() {
		$('.select-group-popup').css({"overflow":"visible"});
		$('.select-group-popup').animate({'opacity':'1','left':'0px'},300);	
	});
	$('.backto-capturelabel').click(function () {
		$('.select-group-popup').animate({
			left: "-100%",
			opacity: "0.9",
			display: "none"
		}, 300);
	});
	
	
	//Add/remove active class to group list
	$( ".select-group-list li" ).on( 'click', function() {
		 $( this ).parent().find( 'li.active' ).removeClass( 'active' );
         $( this ).addClass( 'active' );
	});
	
	//Filter Discover Froup
	// init Isotope
	var $container = $('.isotope').isotope({
	itemSelector: '.element-item',
	layoutMode: 'fitRows',
	getSortData: {
	  name: '.name',
	  symbol: '.symbol',
	  number: '.number parseInt',
	  category: '[data-category]',
	  weight: function( itemElem ) {
		var weight = $( itemElem ).find('.weight').text();
		return parseFloat( weight.replace( /[\(\)]/g, '') );
	  }
	}
	});
	 // filter functions
	var filterFns = {
	// show if number is greater than 50
	numberGreaterThan50: function() {
	  var number = $(this).find('.number').text();
	  return parseInt( number, 10 ) > 50;
	},
	// show if name ends with -ium
	ium: function() {
	  var name = $(this).find('.name').text();
	  return name.match( /ium$/ );
	}
	};
	
	// bind filter button click
	$('#filters').on( 'click', 'button', function() {
	var filterValue = $( this ).attr('data-filter');
	// use filterFn if matches value
	filterValue = filterFns[ filterValue ] || filterValue;
	$container.isotope({ filter: filterValue });
	});
	
	// bind sort button click
	$('#sorts').on( 'click', 'button', function() {
	var sortByValue = $(this).attr('data-sort-by');
	$container.isotope({ sortBy: sortByValue });
	});
	
	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
	var $buttonGroup = $( buttonGroup );
	$buttonGroup.on( 'click', 'button', function() {
	  $buttonGroup.find('.is-checked').removeClass('is-checked');
	  $( this ).addClass('is-checked');
	});
	});
	
	
	//Read more comments Slide left and open 
  	function showPage(topage, frompage) {
		var pageWidth = frompage.width();
		topage.css("left", pageWidth);
		topage.addClass("active-page");
		topage.add(frompage).animate({
			"left": "-=" + pageWidth + "px",
		}, 300).promise().done(function() {
			frompage.removeClass('active-page');
		});
	}
	$("a#goto-notifications").click(function(e) {
		e.preventDefault();
		var frompage = $(".tools-page"),
			topage = frompage.siblings();
		showPage(topage,frompage);
	});
	
	$("a#total-comments").click(function(e) {
		e.preventDefault();
		var frompage = $(".main-page"),
			topage = $(".comment-page");
		showPage(topage,frompage);
	});
	
	//slide page top & bottom padding
	var appnav_height = $(".app-nav").outerHeight();
	$('.slide-page').css("padding-top", appnav_height);
	var bottommenu_height = $(".bottom-menu").outerHeight();
	$('.slide-page').css("padding-bottom", bottommenu_height);
	
	//Read more comments more comment page Slide back and open main page
  	$( "a#back" ).click(function() {
		var pwid = $(".comment-page").width();
		$(".comment-page").css("width", device_width);
		$(".main-page").addClass('active-page');
		$(".comment-page").animate({
		    "left": + pwid +"px",
		}, {
		    duration: 300,
		    queue: false
		});

		$(".main-page").animate({
		    "left": "0px",
		}, {
		    duration: 300,
		    queue: false
		}).promise().done(function() {
		$(".comment-page").removeClass('active-page');
		});
	});
	
	//Mission or Group
	$( ".missions-groups .element-item" ).on( 'click', function() {
		$( this ).toggleClass( 'selected' );
	});
	$( ".mymissions-btn").on( 'click', function() {
		$( ".mymissions-btn").addClass("selected");
		$("#mymissions").css("display","block");
		$( ".mygroups-btn").removeClass("selected");
		$("#mygroups").css("display","none");
	});
	$( ".mygroups-btn").on( 'click', function() {
		$( ".mymissions-btn").removeClass("selected");
		$("#mymissions").css("display","none");
		$( ".mygroups-btn").addClass("selected");
		$("#mygroups").css("display","block");
	});
	
	
	//Choose from selection list
	$( ".selection li" ).on( 'click', function() {
		 $( this ).parent().find( 'li.selected' ).removeClass( 'selected' );
         $( this ).addClass( 'selected' );
	});
	
	//Edit profile picture size
	/*var colwidth = $(".profile-pic").width();
	$('.profile-pic').css("height", colwidth);
	$('.profile-pic img').css("height", colwidth);
	$('.profile-banner').css("height", colwidth);
	$('.profile-banner img').css("height", "100%");*/
});


//Search filter
(function ($) {
  jQuery.expr[':'].Contains = function(a,i,m){
      return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
  };
 
  function live_search(list) {
 
    $(".filterinput")
      .change( function () {
        var searchtext = $(this).val();
	
        if(searchtext) {
 
          $matches = $(list).find('a:Contains(' + searchtext + ')').parent();
          $('li', list).not($matches).slideUp();
          $matches.slideDown();
 
        } else {
		  $(list).find("li").slideDown(200);
        }
        return false;
      })
    .keyup( function () {
        $(this).change();
    });
  }
 
  $(function () {
    live_search($("#contents"));
  });
}(jQuery));

