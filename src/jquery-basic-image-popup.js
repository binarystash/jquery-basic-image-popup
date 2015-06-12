/*
 * Copyright (c) 2015 BinaryStash
 * Licensed under the MIT license.
 */
(function ($) {
	
	$.fn.basicImagePopup = function(options) {
		
		$.fn.basicImagePopup.useOptions = $.extend( {}, $.fn.basicImagePopup.defaultOptions, options );
		
		return this.each( function(i,v) {
			
			var popup = $.fn.basicImagePopup.createPopup( $(v) );
			
			$(v).click( function(e) {
				e.preventDefault();
				$.fn.basicImagePopup.openPopup( popup, $(v) );
			});
				
		});
		
	};

	$.fn.basicImagePopup.createPopup = function(link) {
		
		var popupOverlay = $("<div class='basic-image-popup-overlay'></div>");
		popupOverlay.addClass( $.fn.basicImagePopup.useOptions.overlayClass );
		
		var popupContent = $("<div class='basic-image-popup-content'></div>");
		var closeButton = $("<div class='basic-image-popup-close'>x</div>");
		var popupImage = $("<p>Not a valid image file</p>");
		
		var img = link.attr("href");
		
		if ( $.fn.basicImagePopup.isImage(img) ) {
		
			popupImage = $("<img/>").attr({
				src:(link.attr("href")),
				alt:(link.attr("title"))
			});
		
		}
		
		popupContent.append(popupImage);
		popupContent.append(closeButton);
		popupOverlay.append(popupContent);  
		
		popupOverlay.add(closeButton).on('click', function(){
			$.fn.basicImagePopup.closePopup( popupOverlay, link ); 
		});
		
		popupOverlay.find(".basic-image-popup-content").on('click', function(e) {
			e.stopPropagation(); 
		});
			
		return popupOverlay;
		
	};

	$.fn.basicImagePopup.openPopup = function(popup, link) {
		
		if ( typeof $.fn.basicImagePopup.useOptions.beforeOpen === 'function' ) {
			$.fn.basicImagePopup.useOptions.beforeOpen.call( this, popup, link );
		}
		
		$("body").append(popup);   
		$("html").addClass("basic-image-popup-active");
		
		if ( typeof $.fn.basicImagePopup.useOptions.afterOpen === 'function' ) {
			$.fn.basicImagePopup.useOptions.afterOpen.call( this, popup, link );
		}	
			
	};

	$.fn.basicImagePopup.closePopup = function(popup, link) {
		
		if ( typeof $.fn.basicImagePopup.useOptions.beforeClose === 'function' ) {
			$.fn.basicImagePopup.useOptions.beforeClose.call( this, popup, link );
		}
		
		popup.detach();
		$("html").removeClass("basic-image-popup-active");
		
		if ( typeof $.fn.basicImagePopup.useOptions.afterClose === 'function' ) {
			$.fn.basicImagePopup.useOptions.afterClose.call( this, popup, link );
		}
		
	};

	$.fn.basicImagePopup.isImage = function(filename) {
		if ( typeof filename !== 'string' ) { return false; }
		var matches = filename.match(/.*(\.jpg|\.png|\.gif|\.jpeg)$/g);
		if ( matches ) {
			return true;   
		}
		return false;
	};
	
	$.fn.basicImagePopup.defaultOptions = {
		'overlayClass':'',
		'beforeOpen': null,
		'afterOpen': null,
		'beforeClose': null,
		'afterClose': null
	};
	
	$.fn.basicImagePopup.useOptions = {};
	
}(jQuery));
