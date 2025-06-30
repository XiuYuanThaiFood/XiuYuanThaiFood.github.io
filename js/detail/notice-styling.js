//

const noticeDivs = document.querySelectorAll(".customize_notice");
noticeDivs.forEach((div, l) => {
	const items = div.querySelectorAll(".opt");
	items.forEach((el, i) => {
		el.style.left = `${i * 8}%`;
	});
});
