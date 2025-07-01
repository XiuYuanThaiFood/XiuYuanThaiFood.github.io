const RICE_MENU_LIST = [
	{
		imgPath: "./image/detail/rice/seafood_curry_fried_rice.webp",
		name: "Seafood Curry Fried Rice",
	},
	{
		imgPath: "./image/detail/rice/pork_fried_rice_with_egg.webp",
		name: "Pork Fried Rice with Egg",
	},
	{
		imgPath: "./image/detail/rice/chicken_fried_rice_with_egg.webp",
		name: "Chicken Fried Rice with Egg",
	},
	{
		imgPath: "./image/detail/rice/shrimp_paste_fried_rice.webp",
		name: "Shrimp Paste Fried Rice",
	},
	{
		imgPath:
			"./image/detail/rice/stir-fried_chinese_broccoli_with_chicken.webp",
		name: "Stir-fried Shinese Broccoli with Chicken",
	},
	{
		imgPath:
			"./image/detail/rice/stir-fried_cabbage_with_chicken_over_rice.webp",
		name: "Stir-Fried Cabbage with Chicken over Rice",
	},
	{
		imgPath: "./image/detail/rice/coconut_milk_chicken_over_rice.webp",
		name: "Coconut Milk Chicken over Rice",
	},
	{
		imgPath: "./image/detail/rice/thai_yellow_chicken_curry_over_rice.webp",
		name: "Thai Yellow Chicken Curry over Rice",
	},
	{
		imgPath: "./image/detail/rice/hainanese_chicken_rice.webp",
		name: "Hainanese Chicken Rice <br>(Khao Man Gai)",
		substitute: false,
	},
];
const NOODLE_MENU_LIST = [
	{
		imgPath: "./image/detail/noodle/thai_red_curry_rice_noodle.webp",
		name: "Thai Red Curry Rice Noodles",
	},
	{
		imgPath: "./image/detail/noodle/flat_rice_noodles.webp",
		name: "Flat Rice Noodles",
	},
	{
		imgPath: "./image/detail/noodle/IMG_1001.webp",
		name: "Thai cold noodles",
		substitute: false,
	},
];
const VEGETABLE_MENU_LIST = [
	{
		imgPath: "./image/detail/vegetable/IMG_1021.webp",
		name: "Thai squid salad",
	},
	{
		imgPath: "./image/detail/vegetable/IMG_1019.webp",
		name: "Stir‑fried water spinach/with shrimp paste",
		stirFried: true,
		shrimp: true,
	},
	{
		imgPath: "./image/detail/vegetable/IMG_1020.webp",
		name: "Stir‑fried cabbage/with shrimp paste",
		stirFried: true,
		shrimp: true,
	},
];
const DRINK_MENU_LIST = [
	{
		imgPath: "image/detail/drink/b4f0b60f-1ef8-4d84-8228-77131f58faae.webp",
		name: "Cranberry milk",
	},
	{
		imgPath: "image/detail/drink/8982ad7f-6c80-491a-aab6-b4b58dda4faf.webp",
		name: "Carrot juice",
	},
	{
		imgPath: "image/detail/drink/87bb438c-87ce-47ab-bbe3-54d2a7985cc8.webp",
		name: "Banana milk",
	},
	{
		imgPath: "image/detail/drink/cbde49f4-4b97-49bf-91ea-bcad5cf89608.webp",
		name: "Apple juice",
	},
	{
		imgPath: "image/detail/drink/4c149504-e211-4f39-87bb-37f599c35ce4.webp",
		name: "Mixed veggie & fruit juice",
	},
	{
		imgPath: "image/detail/drink/7520321e-89f6-4359-9d4d-37d8e93093fe.webp",
		name: "Thai milk tea",
	},
];

const MENU_CLASS = "menu-panel";
const IMG_SIZE = "250";
const ICON_SIZE = "40";
const RICE_DIV_ID = "rice-list";
const NOODLE_DIV_ID = "noodle-list";
const VEGETABLE_DIV_ID = "vegitable-list";
const DRINK_DIV_ID = "drinks-list";
const VEGETABLE_IMG_PATH = "image/detail/vegetables.webp";
const SHRIMP_IMG_PATH = "image/detail/shrimp.webp";
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
		menuName.classList.add("menu-name");
		menuName.innerHTML = menu.name;
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
				icon.src = VEGETABLE_IMG_PATH;
				icon.alt = "野菜";
				iconDiv.appendChild(icon);
			}
			if (menu.shrimp === true) {
				const icon = document.createElement("img");
				icon.width = ICON_SIZE;
				icon.height = ICON_SIZE;

				icon.src = SHRIMP_IMG_PATH;
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
