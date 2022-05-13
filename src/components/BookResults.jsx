import { useContext } from "react"
import BookContext from "../context/BookContext"

function BookResults() {
	const { books, loading } = useContext(BookContext)
	console.log(books)
	if (loading) {
		return <h1>Loading...</h1>
	}
	return (
		<div>
			{books.map((book) => (
				<p>{book.volumeInfo.title}</p>
			))}
		</div>
	)
}

export default BookResults
