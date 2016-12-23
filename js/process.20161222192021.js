(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-10').attr('src', (dpi>1) ? 'images/untitled-3-736.jpg' : 'images/untitled-3-368.jpg');
$('.js-11').attr('src', (dpi>1) ? 'images/toy-with-drop-shadows-974.png' : 'images/toy-with-drop-shadows-487.png');
$('.js-12').attr('src', (dpi>1) ? 'images/img_9579-826.jpg' : 'images/img_9579-413.jpg');
$('.js-13').attr('src', (dpi>1) ? 'images/img_9693-960.jpg' : 'images/img_9693-480.jpg');
$('.js-14').attr('src', (dpi>1) ? 'images/img_9873-568.jpg' : 'images/img_9873-284.jpg');
$('.js-15').attr('src', (dpi>1) ? 'images/img_9872-572.jpg' : 'images/img_9872-286.jpg');};
if(!window.HTMLPictureElement){r();}

});