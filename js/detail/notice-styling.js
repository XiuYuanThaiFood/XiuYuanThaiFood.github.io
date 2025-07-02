//
let isBeforeWide;
function styling() {
	const isWide = window.outerWidth > 480;
	if (isWide !== isBeforeWide) {
		isBeforeWide = isWide;
		const noticeDivs = document.querySelectorAll(".customize_notice");

		noticeDivs.forEach((div) => {
			const items = div.querySelectorAll(".customize_notice--text");
			items.forEach((el, i) => {
				el.style.transform = isWide ? `translateX(${i * 8}%)` : "none";
			});
		});
	}
}
window.addEventListener("DOMContentLoaded", styling);

// リサイズ対応
window.addEventListener("resize", styling);
