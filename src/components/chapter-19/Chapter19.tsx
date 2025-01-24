import { useState } from 'react'
import Chapter19BtnReset from './Chapter19BtnReset'
import Chapter19Button from './Chapter19Button'
import Chapter19Counter from './Chapter19Counter'

const Chapter19 = () => {
	const [count, setCount] = useState(0)
	const countIncrement = () => {
		setCount(count + 1)
	}
	const handleClick = () => {
		countIncrement()
	}
	const countClear = () => {
		setCount(0)
	}
	return (
		<div className='component'>
			<h1>Часть 19</h1>
			<Chapter19Counter count={count} />
			<Chapter19Button onClick={handleClick} />
			{(count > 0) && <Chapter19BtnReset onClick={countClear} />}
		</div>
	)
}
export default Chapter19
