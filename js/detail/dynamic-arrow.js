function dynamicArrow(sx, sy, ex, ey) {
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", "400");
	svg.setAttribute("height", "250");

	const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
	line.setAttribute("x1", String(sx));
	line.setAttribute("y1", String(sy));
	line.setAttribute("x2", String(ex));
	line.setAttribute("y2", String(ey));
	svg.appendChild(line);

	const triangle = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"polygon"
	);

	//この中ai
	{
		// 矢印の向きベクトルを計算
		const dx = ex - sx;
		const dy = ey - sy;

		// ベクトルの長さ（距離）
		const length = Math.hypot(dx, dy);

		// 正規化されたベクトル（単位ベクトル）
		const unitX = dx / length;
		const unitY = dy / length;

		// 矢印の先端サイズ（調整可能）
		const arrowSize = 10;

		// 先端の三角形の3つの頂点を計算
		// 頂点1: 矢印の先端（終点そのもの）
		const t1x = ex;
		const t1y = ey;

		// 頂点2: 左側の基部
		const t2x = ex - arrowSize * unitX - arrowSize * 0.5 * unitY;
		const t2y = ey - arrowSize * unitY + arrowSize * 0.5 * unitX;

		// 頂点3: 右側の基部
		const t3x = ex - arrowSize * unitX + arrowSize * 0.5 * unitY;
		const t3y = ey - arrowSize * unitY - arrowSize * 0.5 * unitX;

		triangle.setAttribute(
			"points",
			`${t1x},${t1y} ${t2x},${t2y} ${t3x},${t3y} `
		);
	}
}

dynamicArrow(20, 15, 300, 200);
