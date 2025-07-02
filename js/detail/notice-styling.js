//

function styling() {
	const noticeDivs = document.querySelectorAll(".customize_notice");
	const isWide = window.innerWidth > 480;
	noticeDivs.forEach((div, l) => {
		const items = div.querySelectorAll(".customize_notice--text");
		items.forEach((el, i) => {
			el.style.transform = isWide ? `translateX(${i * 8}vw)` : "none";
		});
	});
}

styling();

// リサイズ対応
window.addEventListener("resize", styling);
