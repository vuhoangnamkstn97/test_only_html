window.onload = function(){
    this.tm();
}

// scroll move-fade
$(function() {
	$('.mf-a').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('mf');
		}
		else{
			$(this).stop().removeClass('mf');
		}
	});
});


/** クリックスクロール */
function scrollToElement(name){
    const element = document.getElementById(name);
    scrollTo(0,element.getBoundingClientRect().top);
    // メニューが開かれていたら閉じておく
    const phoneMenuInput = document.getElementById("navToggle");
    if(phoneMenuInput.checked){
        phoneMenuInput.checked=false;
    }
}
/** クリックスクロール */

/** スクロールで表示 */
var scrollAnimationElm = document.getElementsByClassName('sa');
var scrollAnimationFunc = function() {

  for(var i = 0; i < scrollAnimationElm.length; i++) {
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top+300) {
      scrollAnimationElm[i].classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);
/** スクロールで表示 */


/** メニュークリック時に削除 */
$(function() {
  $('.menu>div').on('click', function(event) {
    $('#navToggle').prop('checked', false);
  });
});
