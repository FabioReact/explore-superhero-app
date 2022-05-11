import React, { useContext, useState } from 'react'
import LoginContext from '../context/login-context'
// import useConnection from '../hooks/useConnection'

const LoginPage = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const { connected, username, login, logout } = useContext(LoginContext)
	// const { connected, username, login, logout } = useConnection()

	const submit = (event: React.SyntheticEvent) => {
		event.preventDefault()
		login(email, password)
	}

	if (connected) {
		return (
			<section>Hello {username}
			<button onClick={logout}>Logout</button>
			</section>
		)
	}

	return (
		<form onSubmit={submit}>
			<label htmlFor="email">Email</label>
			<input type="email" id="email" name="email" value={email} onChange={(e) => {
				setEmail(e.target.value)
			}} />
			<label htmlFor="password">Password</label>
			<input type="password" id="password" name="password" value={password} onChange={(e) => {
				setPassword(e.target.value)
			}} />
			<button>Login</button>
		</form>
	)
}

export default LoginPage