import { createContext, useReducer } from "react"
import bookReducer from "./BookReducer"

const BookContext = createContext()

export const BookProvider = ({ children }) => {
	const initialState = {
		books: [],
		loading: false,
	}

	const [state, dispatch] = useReducer(bookReducer, initialState)

	return (
		<BookContext.Provider
			value={{
				...state,
				dispatch,
			}}
		>
			{children}
		</BookContext.Provider>
	)
}

export default BookContext
