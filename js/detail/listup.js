/*
    <div class="menu-panel"><img src="" width="300px" height="300px">
		<p>グリッドテスト用</p>
    </div>
*/
//カテゴリごとに別々のscript作る必要はなさそうか
//foreachの中身を関数化してidと参照する配列を変えつつ全部の種類でやればいいのかもしれない

const RICE_MENU_LIST = [
	{ imgPath: "./", name: "this panel was added dynamically" },
	{ imgPath: "./", name: "Seafood Curry Fried Rice" },
];
const NOODLE_MENU_LIST = [
	{ imgPath: "./", name: "Thai Red Curry Rice Noodles" },
	{ imgPath: "./", name: "Flat Rice Noodles" },
];
const VEGETABLE_MENU_LIST = [
	{ imgPath: "./", name: "this panel was added dynamically" },
	{ imgPath: "./", name: "Seafood Curry Fried Rice" },
];

const MENU_CLASS = "menu-panel";
const IMG_SIZE = "300";
const RICE_DIV_ID = "rice-list";
const NOODLE_DIV_ID = "noodle-list";
const VEGETABLE_DIV_ID = "vegitable-list";
const DRINK_DIV_ID = "drink-list";

makePanel(RICE_DIV_ID, RICE_MENU_LIST);
makePanel(NOODLE_DIV_ID, NOODLE_MENU_LIST);
makePanel(VEGETABLE_DIV_ID, VEGETABLE_MENU_LIST);

function makePanel(ID, array) {
	array.forEach((menu) => {
		const div = document.createElement("div");
		div.classList.add(MENU_CLASS);
		const img = document.createElement("img");
		img.src = menu.imgPath;
		img.width = IMG_SIZE;
		img.height = IMG_SIZE;
		const p = document.createElement("p");
		p.textContent = menu.name;
		div.appendChild(img);
		div.appendChild(p);
		document.getElementById(ID).appendChild(div);
	});
}
