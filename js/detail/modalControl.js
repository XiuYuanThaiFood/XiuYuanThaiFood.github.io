const HIDE_CLASS = "hide-modal";
const RICE_AND_NOODLE_COLOR_CLASS = "rice-and-noodle";
const VEGI_COLOR_CLASS = "vegetable";
const DIV = document.querySelector("#modal");
const TEXT_DIV = DIV.querySelector(".modal-contents");
const TITLE = TEXT_DIV.querySelector(".modal-title");
const PRICE = TEXT_DIV.querySelector(".modal-price");
const DESC = TEXT_DIV.querySelector(".modal-DESCRIPTION");
const IMG = DIV.querySelector(".modal-img-container .modal-image");
const ICON_DIV = DIV.querySelector(".modal-custom.icon");
function showModal(category, menu) {
	DIV.classList.remove(
		HIDE_CLASS,
		RICE_AND_NOODLE_COLOR_CLASS,
		VEGI_COLOR_CLASS
	);
	switch (String(category)) {
		case "rice-list":
		case "noodle-list":
			DIV.classList.add(RICE_AND_NOODLE_COLOR_CLASS);
			break;
		case "vegitable-list":
			DIV.classList.add(VEGI_COLOR_CLASS);
			break;
		default:
			return;
	}
	TITLE.innerHTML = menu.name;
	PRICE.innerHTML = menu.price;
	IMG.src = menu.imgPath;
	console.log();
}
function hideModal() {
	DIV.classList.add(HIDE_CLASS);
}
DIV.querySelector(".hide-button").addEventListener("click", hideModal);

// addEventListener("click", (event) => {
// 	const target = event.target.closest("#modal");
// 	console.log(target);
// 	if (DIV.classList.contains(HIDE_CLASS) && target === null) {
// 		hideModal();
// 	}
// });
