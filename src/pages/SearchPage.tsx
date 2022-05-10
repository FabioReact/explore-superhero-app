import React, { Children, useRef } from "react"

const SearchPage = () => {
	const inputRef = useRef<HTMLInputElement>(null)
	// #region es5
	// const onSubmitHandler = (event: React.SyntheticEvent) => {
	// 	event.preventDefault() // Empeche le rafraichissement de la page
	// 	const hero = inputRef.current?.value
	// 	fetch(`http://localhost:4000/heroes?name_like=${hero}`)
	// 		.then(response => response.json())
	// 		.then(results => {
	// 			console.log(results)
	// 		})
	// 		.catch((error) => {
	// 			console.error(error)
	// 		})
	// }
	// #endregion es5

	// #region async
	const onSubmitHandler = async (event: React.SyntheticEvent) => {
		event.preventDefault() // Empeche le rafraichissement de la page
		const hero = inputRef.current?.value
		try {
			const response = await fetch(`http://localhost:4000/heroes?name_like=${hero}`)
			const result = await response.json()
			console.log(result)
		} catch (error) {
			console.error(error)
		}
	}
	// #endregion async

	return (
		<form onSubmit={onSubmitHandler}>
			<label htmlFor="heroName">Name</label>
			<input ref={inputRef} type="text" />
			<button>Search</button>
			
		</form>
	)
}

export default SearchPage