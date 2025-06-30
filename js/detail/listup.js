const RICE_MENU_LIST = [
	{ imgPath: "./", name: "this panel was added dynamically" },
	{ imgPath: "./", name: "Seafood Curry Fried Rice" },
];
const NOODLE_MENU_LIST = [
	{ imgPath: "./", name: "Thai Red Curry Rice Noodles" },
	{ imgPath: "./", name: "Flat Rice Noodles" },
	{ imgPath: "./", name: "Flat Rice Noodles", substitute: false },
];
const VEGETABLE_MENU_LIST = [
	{ imgPath: "./", name: "this panel was added dynamically" },
	{ imgPath: "./", name: "vegi1", stirFried: true, shrimp: true },
	{ imgPath: "./", name: "vegi2", stirFried: true, shrimp: true },
];

const DRINK_MENU_LIST = [
	{ imgPath: "./", name: "this panel was added dynamically" },
	{ imgPath: "./", name: "this panel was added dynamically" },
	{ imgPath: "./", name: "this panel was added dynamically" },
];

const MENU_CLASS = "menu-panel";
const IMG_SIZE = "300";
const ICON_SIZE = "50";
const RICE_DIV_ID = "rice-list";
const NOODLE_DIV_ID = "noodle-list";
const VEGETABLE_DIV_ID = "vegitable-list";
const DRINK_DIV_ID = "drinks-list";

makePanel(RICE_DIV_ID, RICE_MENU_LIST);
makePanel(NOODLE_DIV_ID, NOODLE_MENU_LIST);
makePanel(VEGETABLE_DIV_ID, VEGETABLE_MENU_LIST);
makePanel(DRINK_DIV_ID, DRINK_MENU_LIST);

function makePanel(ID, array) {
	array.forEach((menu) => {
		const div = document.createElement("div");
		div.classList.add(MENU_CLASS);
		const img = document.createElement("img");
		img.src = menu.imgPath;
		img.width = IMG_SIZE;
		img.height = IMG_SIZE;
		const menuName = document.createElement("p");
		menuName.textContent = menu.name;
		div.appendChild(img);

		const optDiv = document.createElement("div");
		optDiv.classList.add("optional-info");
		//代用不可チェック,キーが存在してかつfalseの場合追加
		if (menu.substitute === false) {
			const p = document.createElement("p");
			p.className = "optional--substituted";
			p.textContent = "※cannot be substituted.";
			optDiv.appendChild(p);
		}
		if (menu.stirFried === true || menu.shrimp === true) {
			const iconDiv = document.createElement("div");
			iconDiv.className = "optional--icons";
			if (menu.stirFried === true) {
				const icon = document.createElement("img");
				icon.width = ICON_SIZE;
				icon.height = ICON_SIZE;
				icon.src = "./"; //野菜
				icon.alt = "野菜";
				iconDiv.appendChild(icon);
			}
			if (menu.shrimp === true) {
				const icon = document.createElement("img");
				icon.width = ICON_SIZE;
				icon.height = ICON_SIZE;

				icon.src = "./"; //エビ
				icon.alt = "エビ";
				iconDiv.appendChild(icon);
			}
			optDiv.appendChild(iconDiv);
		}
		div.appendChild(optDiv);
		div.appendChild(menuName);
		document.getElementById(ID).appendChild(div);
	});
}
