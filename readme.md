[![Build Status](https://travis-ci.org/binarystash/jquery-basic-image-popup.svg)](https://travis-ci.org/binarystash/jquery-basic-image-popup)

# jQuery Basic Image Popup

A very simple image popup plugin

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/binarystash/jquery-basic-image-popup/master/dist/jquery.jquery-basic-image-popup.min.js
[max]: https://raw.githubusercontent.com/binarystash/jquery-basic-image-popup/master/dist/jquery.jquery-basic-image-popup.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery-basic-image-popup.min.js"></script>
<link rel="stylesheet" href="css/jquery-basic-image-popup.css"/>
```

##Usage

1. Suppose you have the following.

	```html
	<a href="image1.png">Image 1</a>
	<a href="image2.png">Image 2</a>
    ```
	
2. Call the plugin

	```javascript
	jQuery('a').basicImagePopup();
	```
	
3. Customize appearance by editing jquery-basic-image-popup.css.

##Options

* `overlayClass` - adds a custom class to the popup
* `beforeOpen` - function to call immediately before the popup opens. Accepts the popup and anchor objects as arguments: function(popup, anchor)
* `afterOpen` - function to call immediately after the popup opens. Accepts the popup and anchor objects as arguments: function(popup, anchor)
* `beforeClose` - function to call immediately before the popup closes. Accepts the popup and anchor objects as arguments: function(popup, anchor)
* `afterClose` - function to call immediately after the popup closes. Accepts the popup and anchor objects as arguments: function(popup, anchor)

##Compatibility
Tested on IE8; latest versions of Firefox and Chrome

##Support
Report bugs at https://github.com/binarystash/jquery-basic-image-popup/issues.
