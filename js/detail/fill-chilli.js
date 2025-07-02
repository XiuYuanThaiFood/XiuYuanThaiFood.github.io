const chilli_spans = document.querySelectorAll("[data-chilli-count]");
const WIDTH = 25;
const HEIGHT = 30;

const NOT_SPICY_PATH = "image/detail/hot.svg";
const SPICY_PATH = "image/detail/redhot.svg";
chilli_spans.forEach((s) => {
	const count = s.dataset.chilliCount;
	if (isNaN(count)) {
		const text = document.createTextNode("invalid value in chilliCount");
		s.appendChild(text);
	} else {
		const img = document.createElement("img");
		img.width = WIDTH;
		img.height = HEIGHT;
		img.alt = "";
		img.className = "chilli-img";
		if (+count === 0) {
			img.src = NOT_SPICY_PATH;
			s.appendChild(img);
		} else {
			img.src = SPICY_PATH;
			for (let i = 1; i < count; i++) {
				s.appendChild(img.cloneNode());
			}
			s.appendChild(img);
		}
	}
});
