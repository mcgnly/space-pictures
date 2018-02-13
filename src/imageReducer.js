const initialState = {
	images: []
};

function imageReducer(state = initialState, action) {
	switch (action.type) {
		// best practice, I'd make a file exporting these as const's
		case "IMAGES_RETURNED":
			return {
				...state,
				images: action.images
			};
		case "WAITING_FOR_IMAGES":
			return {
				...state
				// images: some kind of placeholder image, or some kind of spinner
			};

		default:
			return state;
	}
}

export default imageReducer;
