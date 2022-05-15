import { useState } from "react"

function BookItem({ book }) {
	const { title, publishedDate, description, imageLinks } = book.volumeInfo

	const [isClicked, setIsClicked] = useState(false)

	const toggle = () => {
		setIsClicked((prevState) => !prevState)
	}

	return (
		<div className="flex justify-center items-center w-11/12">
			<div
				className={`stats shadow ${
					isClicked ? "bg-green-300" : "bg-base-300"
				} m-5 w-1/2 flex flex-col lg:flex-row`}
			>
				{imageLinks !== undefined && (
					<div className="stat">
						<img src={imageLinks.thumbnail} alt="" />
					</div>
				)}
				<div className="flex flex-col">
					<div className="stat">
						<div className="stat-desc">Title</div>
						<div>
							<p>{title}</p>
						</div>
					</div>
					<div className="stat">
						<div className="stat-desc">Published Date</div>
						<div>
							<p>{publishedDate}</p>
						</div>
					</div>
				</div>
				{description !== undefined && (
					<div className="stat">
						<div className="stat-desc">Description</div>
						<div>
							<p className="overflow-wrap">
								{description.length <= 200
									? description
									: description.slice(0, 200) + "..."}
							</p>
						</div>
					</div>
				)}
			</div>
			<button onClick={toggle} className="btn w-3/12 lg:w-1/12">
				{isClicked ? "Remove" : "Add"}
			</button>
		</div>
	)
}

export default BookItem
