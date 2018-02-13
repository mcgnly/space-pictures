import React, { Component } from "react";
import SingleImage from "./SingleImage.js";
import imageMock from "./imageMock.json";
import { connect } from "react-redux";
import { fetchImages } from "./imageAction.js";
import "./SpacePictures.css";

// Because this was limited to a short time, I didn't have a chance
// to implement some of the things that I would have liked,
// such as proptypes checking, even more separation of concerns, and tests

class SpacePictures extends Component {
	componentWillMount() {
		this.props.fetchImages();
	}

	makeImageList() {
		return this.props.images.map(img => {
			return <SingleImage image={img} key={img.id} />;
		});
	}

	render() {
		return (
			<div>
				<h3>some space pictures go here</h3>
				<div className="pictureGrid">{this.makeImageList()}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		images: state.imageReducer.images
	};
}

export default connect(mapStateToProps, { fetchImages })(SpacePictures);
