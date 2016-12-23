(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-16').attr('src', (dpi>1) ? 'images/img_9877-510.jpg' : 'images/img_9877-255.jpg');
$('.js-17').attr('src', (dpi>1) ? 'images/img_9880-510.jpg' : 'images/img_9880-255.jpg');
$('.js-18').attr('src', (dpi>1) ? 'images/img_9882-510.jpg' : 'images/img_9882-255.jpg');
$('.js-19').attr('src', (dpi>1) ? 'images/img_9919-512.jpg' : 'images/img_9919-256.jpg');
$('.js-20').attr('src', (dpi>1) ? 'images/img_9922-508.jpg' : 'images/img_9922-254.jpg');
$('.js-21').attr('src', (dpi>1) ? 'images/img_9927-507.jpg' : 'images/img_9927-254.jpg');
$('.js-22').attr('src', (dpi>1) ? 'images/img_9928-510.jpg' : 'images/img_9928-255.jpg');
$('.js-23').attr('src', (dpi>1) ? 'images/img_9930-508.jpg' : 'images/img_9930-254.jpg');
$('.js-24').attr('src', (dpi>1) ? 'images/img_9937-598.jpg' : 'images/img_9937-299.jpg');
$('.js-25').attr('src', (dpi>1) ? 'images/img_9943-598.jpg' : 'images/img_9943-299.jpg');};
if(!window.HTMLPictureElement){r();}

});