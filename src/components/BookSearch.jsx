import { useState, useContext } from "react"
import BookContext from "../context/BookContext"
import { searchBook } from "../context/BookActions"

function BookSearch() {
	const [title, setTitle] = useState("")

	const { books, dispatch } = useContext(BookContext)

	const handleChange = (e) => {
		setTitle(e.target.value)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (title === "") {
			console.log("error")
		} else {
			dispatch({ type: "SET_LOADING" })
			const books = await searchBook(title, "pl")
			dispatch({ type: "GET_BOOKS", payload: books })
			setTitle("")
		}
	}

	return (
		<div>
			<h1>Book Search</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={title}
					onChange={handleChange}
					placeholder="Title"
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

export default BookSearch
