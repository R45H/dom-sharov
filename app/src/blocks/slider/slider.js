var
	classSlider = 'slider',
	classDots = classSlider + '__dots',
	classDot = classSlider + '__dot',
	$slider = $('.' + classSlider),
	$items = $slider.children();

if ($items.length > 1) {

	$slider.slick({
		arrows: false,
		dots: true,
		dotsClass: classDots,
		customPaging: function() {
			return '<div class="' + classDot + '"></div>'
		}
	});
}