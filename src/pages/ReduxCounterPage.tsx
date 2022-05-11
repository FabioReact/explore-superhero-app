import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { decrement, increment } from '../store/counterSlice'


const ReduxCounterPage = () => {
	const count = useAppSelector((state) => state.counter.value)
	const dispatch = useAppDispatch()
	return (
		<section>
			<p>Counter Value: {count}</p>
			<button onClick={() => dispatch(increment())}>Incrementer</button>
			<button onClick={() => dispatch(decrement())}>Decrementer</button>
		</section>
	)
}

export default ReduxCounterPage