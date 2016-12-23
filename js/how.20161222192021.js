(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-8').attr('src', (dpi>1) ? 'images/dsc03142-655.jpg' : 'images/dsc03142-327.jpg');
$('.js-9').attr('src', (dpi>1) ? 'images/dsc03118-1050.jpg' : 'images/dsc03118-525.jpg');};
if(!window.HTMLPictureElement){r();}

});