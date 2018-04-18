var
	classBlock = 'cat',
	classLinkActive = classBlock + '__link_active', // Класс активной ссылки
	classBodyVisible = classBlock + '__body-i_visible', // Класс видимого контейнера
	$blocks = $('.' + classBlock), // Блоки
	mobilePoint = 575; // Брейкпоинт на мобильную версию

$blocks.each(function() {
	var
		$this = $(this),
		$links = $this.find('.' + classBlock + '__link'), // Ссылки
		$panels = $this.find('.' + classBlock + '__body-i'); // Контейнеры

	/* Обработка клика на ссылку */
	$links.on('click', function(e) {
		if (window.innerWidth <= mobilePoint) return;

		e.preventDefault();

		var
			$link = $(this),
			target = $link.attr('data-link');

		$links.removeClass(classLinkActive);
		$link.addClass(classLinkActive);

		$panels
			.removeClass(classBodyVisible)
			.filter('[data-target="' + target + '"]')
			.addClass(classBodyVisible);
	});
	/* ===== */
});