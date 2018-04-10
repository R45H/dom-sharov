//TODO: На планшете невозможно попасть по подменю

var
	classBlock = 'menu',
	classLinkActive = 'active',
	$block = $('.' + classBlock),
	$links = $block.find('.' + classBlock + '__link'),
	$subs = $block.find('.' + classBlock + '__sub-outer'),
	delay = 250,
	holdDelay = 250,
	pointMobile = 576;

$links.on('mouseenter', function() {

	if (window.innerWidth < pointMobile) return;

	var
		$this = $(this),
		$sub = $this.siblings('.' + classBlock + '__sub-outer');

	$links.removeClass(classLinkActive);
	$subs.fadeOut(delay / 2);

	if ($this.hasClass(classBlock + '__link_angle')) {
		$this.addClass(classLinkActive);
		$sub.slideDown(delay);
	}
});

$block.on('mouseleave', function() {

	if (window.innerWidth < pointMobile) return;

	setTimeout(function() {
		if (!$block.is(':hover')) {
			$links.removeClass(classLinkActive);
			$subs.fadeOut(delay);
		}
	}, holdDelay);
});