import React from "react";
import "./SingleImage.css";

export default ({ image }) => (
	<div>
		<img
			src={image.img_src}
			alt={`Image number ${image.id}`}
			className="singleImage"
		/>
	</div>
);
