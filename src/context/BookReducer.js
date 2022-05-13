const bookReducer = (state, action) => {
	switch (action.type) {
		case "GET_BOOKS":
			return {
				...state,
				books: action.payload,
				loading: false,
			}
		case "SET_LOADING":
			return {
				...state,
				loading: true,
			}
		default:
			return state
	}
}

export default bookReducer
