import { useState, useContext } from "react"
import BookContext from "../context/BookContext"

function BookSearch() {
	const { bookData, handleChange, setBooks, searchBook, books } =
		useContext(BookContext)

	const [loading, setLoading] = useState(false)
	const [submitted, setSubmitted] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
		setLoading(true)
		setBooks((prevState) => [])
		await searchBook()
		setSubmitted(true)
		setLoading(false)
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-control flex-row items-center mt-3">
				<input
					type="text"
					name="title"
					value={bookData.title}
					onChange={handleChange}
					className="input input-bordered w-full"
					placeholder="Title"
					required
				/>
				<div className="ml-20 items-center" onChange={handleChange}>
					<div className="form-control">
						<label className="label cursor-pointer">
							<span className="label-text">English</span>
							<input
								value="en"
								type="radio"
								name="lang"
								className="radio"
								defaultChecked
							/>
						</label>
					</div>
					<div className="form-control">
						<label className="label cursor-pointer">
							<span className="label-text">Polish</span>
							<input value="pl" type="radio" name="lang" className="radio" />
						</label>
					</div>
				</div>
			</div>
			<button className="btn btn-outline btn-block" type="submit">
				Submit
			</button>
			{loading && <h1>Loading...</h1>}
			{bookData.title !== "" && books.length == [] && submitted && !loading && (
				<h1>No results</h1>
			)}
		</form>
	)
}

export default BookSearch
