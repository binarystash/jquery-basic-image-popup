(function ($) {
	QUnit.config.autostart = true;
	
	module('jQuery#jqueryBasicImagePopup', {
		setup: function () {
			this.elems = $('#qunit-fixture').children();
		}
	});

	test('is chainable', function () {
		expect(1);
		strictEqual(this.elems.basicImagePopup(), this.elems, 'should be chainable');
		
	});
	
	test('opens popup', function() {
		expect(1);
		
		this.elems.basicImagePopup();
		
		this.elems.eq(0).trigger('click');
		strictEqual($('.basic-image-popup-overlay').length, 1, 'popup must open');
		
		
	});
	
	test('closes popup', function() {
		expect(2);
		
		this.elems.basicImagePopup();
		
		this.elems.eq(0).trigger('click');
		$('.basic-image-popup-overlay').trigger('click');
		strictEqual($('.basic-image-popup-overlay').length, 0, 'popup must close');
		
		this.elems.eq(1).trigger('click');
		$('.basic-image-popup-overlay').trigger('click');
		strictEqual($('.basic-image-popup-overlay').length, 0, 'popup must close');
		
		
	});
	
	test('add overlay class', function() {
		expect(1);
		
		this.elems.basicImagePopup({
			overlayClass:'my-custom-popup my-own-popup'
		});
		
		this.elems.eq(0).trigger('click');
		
		strictEqual($('.basic-image-popup-overlay.my-custom-popup.my-own-popup').length, 1, 'popup must have custom classes');
		
		
	});
	
	test('test beforeOpen', function() {
		expect(1);
		
		this.elems.basicImagePopup({
			beforeOpen: function(popup) {
				popup.addClass("open");
			}
		});
		
		this.elems.eq(0).trigger('click');
		
		strictEqual($('.basic-image-popup-overlay.open').length, 1, 'beforeOpen must work');
		
		
	});
	
	test('test afterOpen', function() {
		expect(1);
		
		this.elems.basicImagePopup({
			beforeOpen: function(popup) {
				popup.addClass("open");
			},
			afterOpen: function(popup) {
				$("body").append("<div>").attr("class","another-div").append(popup.find("img"));
			}
		});
		
		this.elems.eq(0).trigger('click');
		
		strictEqual($('.another-div').length, 1, 'afterOpen must work');
		
		
		
	});
	
	test('test beforeClose', function() {
		expect(1);
		
		this.elems.basicImagePopup({
			beforeClose: function(popup) {
				$("body").append("<div>").attr("class","another-div").append(popup.find("img"));
			}
		});
		
		this.elems.eq(0).trigger('click');
		$('.basic-image-popup-overlay').trigger('click');
		
		strictEqual($('.another-div').length, 1, 'afterOpen must work');
		
		
	});
	
	test('test afterClose', function() {
		expect(1);
		
		this.elems.basicImagePopup({
			afterClose: function(popup) {
				$("body").append("<div>").attr("class","another-div").append(popup.find("img"));
			}
		});
		
		this.elems.eq(0).trigger('click');
		$('.basic-image-popup-overlay').trigger('click');
		
		strictEqual($('.another-div').length, 1, 'afterOpen must work');
		
		
	});
	 
}(jQuery));
