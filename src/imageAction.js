import imageMock from "./imageMock.json";

export function returnImages(images) {
	return {
		type: "IMAGES_RETURNED",
		images
	};
}

export function fetchImages() {
	return function(dispatch) {
		dispatch(waitingForImages());

		// this is how I would do it if the rate limiting weren't so low :(
		// fetch(
		// 	"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=50&api_key=DEMO_KEY"
		// ).then(imageJson => {
		// 	const firstPage = imageJson.photos.slice(0, 9);
		// 	dispatch (returnImages(firstPage));
		// });

		// with more time I would add legit pagination
		// and filter out the too-small images
		const firstPage = imageMock.photos.slice(0, 9);
		dispatch(returnImages(firstPage));
	};
}

function waitingForImages() {
	return {
		type: "WAITING_FOR_IMAGES"
	};
}
