import axios from "axios"
import { createContext, useState } from "react"

const BookContext = createContext()

export const BookProvider = ({ children }) => {
	const [books, setBooks] = useState([])
	const [bookData, setBookData] = useState({
		title: "",
		lang: "en",
	})
	
	const handleChange = (e) => {
		setBookData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const searchBook = async (startIndex = 0) => {
		const response = await axios.get(
			`https://www.googleapis.com/books/v1/volumes?q=intitle:${bookData.title}&langRestrict=${bookData.lang}&orderBy=newest&maxResults=15&startIndex=${startIndex}`
		)
		if (response.data.items !== undefined) {
			setBooks((prevState) => [...prevState, ...response.data.items])
		} 
	}

	return (
		<BookContext.Provider
			value={{
				books,
				setBooks,
				searchBook,
				bookData,
				setBookData,
				handleChange,
			}}
		>
			{children}
		</BookContext.Provider>
	)
}

export default BookContext
