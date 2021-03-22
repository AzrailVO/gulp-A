//= DOM.js
//= variables.js
$(document).ready(function(){
	$('input[name="phone"]').mask('+38(099) 999-9999')
	// $('.input[name="phoneHead"]').mask('+38(099) 999-9999')
});
window.addEventListener('scroll', () => {
	if (window.scrollY >= 1) {
		headSect.style.marginTop = `${sect1Top}px`
		navbar.classList.add('my-navbar-fixed')
	}else if (window.scrollY < 1) {
		headSect.style.marginTop = `0px`
		navbar.classList.remove('my-navbar-fixed')
	}
});