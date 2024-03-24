$(function(){
	$('#down').click(function(){
		$('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 600);
		return false;
	});
});

function getFileNameWithoutExtension(url) {
	var lastSlashIndex = url.lastIndexOf('/');
	var lastDotIndex = url.lastIndexOf('.');
	if (lastDotIndex === -1 || lastDotIndex < lastSlashIndex) {
		return url.substring(lastSlashIndex + 1);
	}
	return url.substring(lastSlashIndex + 1, lastDotIndex);
 }

 var currentUrl = window.location.href;

 document.querySelectorAll('.menu__item a').forEach(function(link) {
	   var fileNameWithoutExtension = getFileNameWithoutExtension(link.href);
	   var currentFileNameWithoutExtension = getFileNameWithoutExtension(currentUrl);
	   if (fileNameWithoutExtension === currentFileNameWithoutExtension && !link.getAttribute('href').includes('#')) {
		  link.classList.add('active-blue');
	   }
 });