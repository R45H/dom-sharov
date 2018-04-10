var
	$body = $('body'),
	$aside = $('.aside'),
	$item = $('.aside__item'),
	asideOpenedClass = 'aside_opened',
	itemOpenedClass = 'aside__item_opened',
	$toggle = $('.toggle'),
	classFog = 'fog',
	delay = 300;

/* Скрытие / раскрытие бокового меню при клике на гамбургер */
$toggle.on('click', function() {

	if ($aside.hasClass(asideOpenedClass)) {
		toggleAside('close');
	} else {
		toggleAside('open');
	}
});
/* ===== */

/* Действия при ресайзе */
$(window).on('resize', function() {
	if (!$aside.hasClass(asideOpenedClass)) return;

	if (window.innerWidth > 575) {
		toggleAside('close');
	}
});
/* ===== */

/* Клик по затемнению */
$(document).on('click', '.' + classFog, function() {
	if (!$aside.hasClass(asideOpenedClass)) return;
	toggleAside('close');
});
/* ===== */

// Закрытие бокового меню при нажатии ESC
var closeAsideOnEsc = function(event) {
	if (event.keyCode != 27) return;
	toggleAside('close');
};
// =====

/* Показывает или скрывает боковое меню */
function toggleAside(action) {

	if (action == 'open') {
		$aside.addClass(asideOpenedClass);
		$body.append('<div class="' + classFog + '"></div>');
		$('.' + classFog).fadeIn(delay);
		$(document).on('keydown', closeAsideOnEsc);
		toggleBodyScroll();
	}

	if (action == 'close') {
		$(document).off('keydown', closeAsideOnEsc);
		$item.removeClass(itemOpenedClass);
		$aside.removeClass(asideOpenedClass);
		$('.' + classFog).fadeOut(delay);

		setTimeout(function() {
			$('.' + classFog).remove();
			toggleBodyScroll(false);
		}, delay / 2);
	}
}
/* ===== */
