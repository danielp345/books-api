import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import { BookProvider } from "./context/BookContext"

function App() {
	return (
		<BookProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
		</BookProvider>
	)
}

export default App
