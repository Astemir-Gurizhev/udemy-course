import { useState } from 'react'
import Chapter16Button from './Chapter16Button'
import Chapter16Counter from './Chapter16Counter'

const Chapter16 = () => {
	const [counter, setCounter] = useState(0)
	const eventHandler = () => {
		setCounter(() => counter + 1)
	}
	return (
		<div className='component'>
			<h1>Часть 16</h1>
			<Chapter16Counter counter={counter} />
			<Chapter16Button onClick={eventHandler}/>
			<Chapter16Button onClick={eventHandler}/>
			<Chapter16Button onClick={eventHandler}/>
			<Chapter16Button onClick={eventHandler}/>
		</div>
	)
}
export default Chapter16
