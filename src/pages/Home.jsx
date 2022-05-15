import BookSearch from "../components/BookSearch"
import BookResults from "../components/BookResults"

function Home() {
	return (
		<div className="card w-100">
			<div className="card-body items-center text-center">
				<h2 className="card-title">Book Search</h2>
				<BookSearch />
				<BookResults />
			</div>
		</div>
	)
}

export default Home
