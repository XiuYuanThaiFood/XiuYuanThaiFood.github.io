const chilli_spans = document.querySelectorAll("[data-chilli-count]");
const WIDTH = 25;
const HEIGHT = 30;
chilli_spans.forEach((s) => {
	const count = s.dataset.chilliCount;
	if (isNaN(count)) {
		s.innerHTML = "変な値が入ってます";
	} else if (+count === 0) {
		s.innerHTML =
			'<img src="image/detail/hot.webp" alt="" width="' +
			WIDTH +
			'" height="' +
			HEIGHT +
			'">';
	} else {
		for (let i = 0; i < count; i++) {
			s.innerHTML +=
				'<img src="image/detail/redhot.webp" alt="" width="' +
				WIDTH +
				'" height="' +
				HEIGHT +
				'">';
		}
	}
});
