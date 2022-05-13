import axios from "axios"

export const searchBook = async (title, lang, startIndex = 0) => {
	const response = await axios.get(
		`https://www.googleapis.com/books/v1/volumes?q=${title}&langRestrict=${lang}&startIndex=${startIndex}`
	)

	return response.data.items
}
