import { useContext, useEffect, useState } from "react"
import BookContext from "../context/BookContext"
import BookItem from "./BookItem"

function BookResults() {
	const { books, searchBook } = useContext(BookContext)

	const [isFetching, setIsFetching] = useState(false)

	const [i, setI] = useState(15)

	const handleScroll = () => {
		const bottom =
			Math.ceil(window.innerHeight + window.scrollY) >=
			document.documentElement.scrollHeight

		if (bottom) {
			setIsFetching(true)
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	useEffect(() => {
		if (!isFetching) return
		fetching()
	}, [isFetching])

	const fetching = () => {
		setI(i + 15)
		searchBook(i)
		setIsFetching(false)
	}

	return (
		<div className="flex flex-col items-center">
			{books.map((book, index) => (
				<BookItem key={index} book={book} />
			))}
			{isFetching && <h1>Loading...</h1>}
		</div>
	)
}

export default BookResults
