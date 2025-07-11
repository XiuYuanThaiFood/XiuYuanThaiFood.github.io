const RICE_MENU_LIST = [
	{
		imgPath: "./image/detail/rice/seafood_curry_fried_rice.webp",
		name: "Seafood Curry Fried Rice",
		id: "seafood_curry_fried_rice",
		price: 120,
	},
	{
		imgPath: "./image/detail/rice/pork_fried_rice_with_egg.webp",
		name: "Pork Fried Rice with Egg",
		id: "pork_fried_rice_with_egg",
		price: 110,
	},
	{
		imgPath: "./image/detail/rice/chicken_fried_rice_with_egg.webp",
		name: "Chicken Fried Rice with Egg",
		id: "chicken_fried_rice_with_egg",
		price: 110,
	},
	{
		imgPath: "./image/detail/rice/shrimp_paste_fried_rice.webp",
		name: "Shrimp Paste Fried Rice",
		id: "shrimp_paste_fried_rice",
		price: 150,
	},
	{
		imgPath:
			"./image/detail/rice/stir-fried_chinese_broccoli_with_chicken.webp",
		name: "Stir-fried Shinese Broccoli with Chicken",
		id: "stir-fried_chinese_broccoli_with_chicken",
		price: 110,
	},
	{
		imgPath:
			"./image/detail/rice/stir-fried_cabbage_with_chicken_over_rice.webp",
		name: "Stir-Fried Cabbage with Chicken over Rice",
		id: "stir-fried_cabbage_with_chicken_over_rice",
		price: 110,
	},
	{
		imgPath: "./image/detail/rice/coconut_milk_chicken_over_rice.webp",
		name: "Coconut Milk Chicken over Rice",
		id: "coconut_milk_chicken_over_rice",
		price: 120,
	},
	{
		imgPath: "./image/detail/rice/thai_yellow_chicken_curry_over_rice.webp",
		name: "Thai Yellow Chicken Curry over Rice",
		id: "thai_yellow_chicken_curry_over_rice",
		price: 140,
	},
	{
		imgPath: "./image/detail/rice/hainanese_chicken_rice.webp",
		name: "Hainanese Chicken Rice <br>(Khao Man Gai)",
		id: "hainanese_chicken_rice",
		price: 130,
		substitute: false,
	},
];
const NOODLE_MENU_LIST = [
	{
		imgPath: "./image/detail/noodle/thai_red_curry_rice_noodle.webp",
		name: "Thai Red Curry Rice Noodles",
		id: "thai_red_curry_rice_noodle",
		price: 120,
	},
	{
		imgPath: "./image/detail/noodle/flat_rice_noodles.webp",
		name: "Flat Rice Noodles",
		id: "flat_rice_noodles",
		price: 110,
	},
	{
		imgPath: "./image/detail/noodle/thai_cold_noodles.webp",
		name: "Thai cold noodles",
		id: "thai_cold_noodles",
		price: 70,
		substitute: false,
	},
];
const VEGETABLE_MENU_LIST = [
	{
		imgPath: "./image/detail/vegetable/thai_squid_salad.webp",
		name: "Thai squid salad",
		id: "thai_squid_salad",
		price: 200,
	},
	{
		imgPath:
			"./image/detail/vegetable/stir-fried_water_spinach_with_shrimp_paste.webp",
		name: "Stir-fried water spinach/with shrimp paste",
		id: "stir-fried_water_spinach_with_shrimp_paste",
		price: 110,
		shrimp: true,
	},
	{
		imgPath:
			"./image/detail/vegetable/stir-fried_cabbage_with_shrimp_paste.webp",
		name: "Stir-fried cabbage/with shrimp paste",
		id: "stir-fried_cabbage_with_shrimp_paste",
		price: 110,
		shrimp: true,
	},
];
const DRINK_MENU_LIST = [
	{
		imgPath: "image/detail/drink/b4f0b60f-1ef8-4d84-8228-77131f58faae.webp",
		name: "Cranberry milk",
		price: 100,
	},
	{
		imgPath: "image/detail/drink/8982ad7f-6c80-491a-aab6-b4b58dda4faf.webp",
		name: "Carrot juice",
		price: 100,
	},
	{
		imgPath: "image/detail/drink/87bb438c-87ce-47ab-bbe3-54d2a7985cc8.webp",
		name: "Banana milk",
		price: 80,
	},
	{
		imgPath: "image/detail/drink/cbde49f4-4b97-49bf-91ea-bcad5cf89608.webp",
		name: "Apple juice",
		price: 100,
	},
	{
		imgPath: "image/detail/drink/4c149504-e211-4f39-87bb-37f599c35ce4.webp",
		name: "Mixed veggie & fruit juice",
		price: 120,
	},
	{
		imgPath: "image/detail/drink/7520321e-89f6-4359-9d4d-37d8e93093fe.webp",
		name: "Thai milk tea",
		price: 50,
	},
];

//CONST クラスなどが変わったらここも変更してください
const MENU_CLASS = "menu-panel";
const IMG_CONTAINER_CLASS = "img-container";
const MENU_INFO_CLASS = "menu--main-info";
const MENU_NAME_CLASS = "menu-name";
const MENU_PRICE_CLASS = "menu-price";
const MENU_OPT_CLASS = "menu--optional-icons";
const IMG_SIZE = "250";
const ICON_SIZE = "40";
const RICE_DIV_ID = "rice-list";
const NOODLE_DIV_ID = "noodle-list";
const VEGETABLE_DIV_ID = "vegetable-list";
const DRINK_DIV_ID = "drinks-list";
const NO_CHILLI_IMG_PATH = "/image/detail/icons/yu_icon-35.png";
const NO_SHRIMP_IMG_PATH = "/image/detail/icons/yu_icon-27.png";
const SHRIMP_IMG_PATH = "/image/detail/icons/yu_icon-28.png";

//直接モードレスウィンドウを開く際の処理。
const hash = location.hash;
const directOpenId = hash.slice(1);
let directShowMenu = null;
let directShowCategory = null;
makePanel(RICE_DIV_ID, RICE_MENU_LIST);
makePanel(NOODLE_DIV_ID, NOODLE_MENU_LIST);
makePanel(VEGETABLE_DIV_ID, VEGETABLE_MENU_LIST);
makePanel(DRINK_DIV_ID, DRINK_MENU_LIST);

if (directShowMenu != null) {
	showModal(directShowCategory, directShowMenu);
} else {
	hideModal();
}

function makePanel(ID, array) {
	array.forEach((menu, index) => {
		const panelDiv = document.createElement("div");
		panelDiv.classList.add(MENU_CLASS);
		panelDiv.id = menu.id;
		const containerDiv = document.createElement("div");
		containerDiv.classList.add(IMG_CONTAINER_CLASS);

		const img = document.createElement("img");
		img.src = menu.imgPath;
		img.width = IMG_SIZE;
		img.alt = "picture of " + menu.name;

		containerDiv.appendChild(img);
		panelDiv.appendChild(containerDiv);

		const mainInfoDiv = document.createElement("div");
		mainInfoDiv.classList.add(MENU_INFO_CLASS);

		const menuName = document.createElement("p");
		menuName.classList.add(MENU_NAME_CLASS);
		menuName.innerHTML = menu.name;

		const menuPrice = document.createElement("p");
		menuPrice.classList.add(MENU_PRICE_CLASS);
		menuPrice.textContent = menu.price;
		mainInfoDiv.appendChild(menuName);
		mainInfoDiv.appendChild(menuPrice);
		panelDiv.appendChild(mainInfoDiv);
		const iconDiv = document.createElement("div");
		iconDiv.className = MENU_OPT_CLASS;
		//代用不可チェックもしくはエビチェック、キーが存在してかつ評価
		if (menu.substitute === false) {
			const noChilliIcon = document.createElement("img");
			noChilliIcon.width = ICON_SIZE;
			noChilliIcon.height = ICON_SIZE;
			noChilliIcon.src = NO_CHILLI_IMG_PATH;
			noChilliIcon.alt = "can't substitued";
			iconDiv.appendChild(noChilliIcon);
		}
		if (menu.shrimp === true) {
			const ShrimpIcon = document.createElement("img");
			ShrimpIcon.width = ICON_SIZE;
			ShrimpIcon.height = ICON_SIZE;
			const noShrimpIcon = ShrimpIcon.cloneNode();
			ShrimpIcon.src = SHRIMP_IMG_PATH;
			ShrimpIcon.alt = "stir-fried";
			noShrimpIcon.src = NO_SHRIMP_IMG_PATH;
			noShrimpIcon.alt = "shrimp-paste";
			iconDiv.appendChild(ShrimpIcon);
			iconDiv.appendChild(noShrimpIcon);
		}
		panelDiv.appendChild(iconDiv);
		if (ID != DRINK_DIV_ID) {
			panelDiv.addEventListener("click", function () {
				showModal(ID, menu);
			});
		}
		document.getElementById(ID).appendChild(panelDiv);
		if (directOpenId.length !== 0 && directOpenId === menu.id) {
			directShowMenu = menu;
			directShowCategory = ID;
		}
	});
}
