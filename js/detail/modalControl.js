const HIDE_CLASS = "hide-modal";
const RICE_AND_NOODLE_COLOR_CLASS = "rice-and-noodle";
const VEGI_COLOR_CLASS = "vegetable-delights";
const MODAL_ID = "#modal";
const DIV = document.querySelector(MODAL_ID);
const TEXT_DIV = DIV.querySelector(".modal-contents");
const TITLE = TEXT_DIV.querySelector(".modal-title");
const PRICE = TEXT_DIV.querySelector(".modal-price");
const DESC = TEXT_DIV.querySelector(".modal-description");
const INGREDIENT =
	TEXT_DIV.querySelector(".ingredients").querySelector(".ingredients-field");
const IMG = DIV.querySelector(".modal-img-container .modal-image");
const ICON_DIV = DIV.querySelector(".modal-custom.icon");
const SUBSTITUTE_ICON = document.querySelector("#modal-substitute-icon");
const OPTION_ICON = document.querySelector("#modal-select-icon");
let isIgnoreNext = false;
function showModal(category, menu) {
	DIV.classList.remove(
		HIDE_CLASS,
		RICE_AND_NOODLE_COLOR_CLASS,
		VEGI_COLOR_CLASS
	);
	isIgnoreNext = true;

	TITLE.innerHTML = menu.name;
	PRICE.innerHTML = menu.price;
	IMG.src = menu.imgPath;

	//TBR
	DESC.innerHTML = DESC.innerHTML;
	INGREDIENT.innerHTML = INGREDIENT.innerHTML;

	switch (String(category)) {
		case "rice-list":
			DIV.classList.add(RICE_AND_NOODLE_COLOR_CLASS);
			OPTION_ICON.src =
				menu.substitute === false
					? "image/detail/icons/yu_icon-25.png"
					: "image/detail/icons/yu_icon-24.png";
			break;
		case "noodle-list":
			DIV.classList.add(RICE_AND_NOODLE_COLOR_CLASS);
			OPTION_ICON.src = "image/detail/icons/yu_icon-30.png";
			break;
		case "vegetable-list":
			DIV.classList.add(VEGI_COLOR_CLASS);
			OPTION_ICON.src = "image/detail/icons/yu_icon-26.png";
			break;
		default:
			return;
	}

	SUBSTITUTE_ICON.src =
		menu.substitute === false
			? "image/detail/icons/yu_icon-17.png"
			: "image/detail/icons/yu_icon-14.png";
	console.log();
}
function hideModal() {
	DIV.classList.add(HIDE_CLASS);
	hasShowModal = false;
}
DIV.querySelector(".hide-button").addEventListener("click", hideModal);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//モーダルの外をクリックした場合にも消したいなら、以下のコメントを外す

// document.addEventListener("click", (event) => {
// 	if (isIgnoreNext) {
// 		isIgnoreNext = false;
// 		return;
// 	}
// 	const target = event.target.closest(MODAL_ID);
// 	if (target === null) {
// 		hideModal();
// 	}
// });
