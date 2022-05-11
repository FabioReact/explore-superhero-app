import { createContext } from 'react';

const LoginContext = createContext({
	connected: false,
	username: "",
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	login: (email: string, password: string): void => undefined,
	logout: (): void => undefined,
})

export default LoginContext