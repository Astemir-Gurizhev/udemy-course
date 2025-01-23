import { useState } from 'react'
import { generateRandomNum } from '../../utils/generateRandomNum'

type TypeRatio = {
	ratio: number
}

const Chapter15 = (props:TypeRatio) => {
	const [num, setNum] = useState(generateRandomNum(props.ratio))

	const handleClick = () => {
		setNum(generateRandomNum(props.ratio))
	}


	return (
		<div className='component'>
			<h1>Часть 15</h1>
			<h2>{num}</h2>
			<button onClick={handleClick}>Сгенерировать новое число</button>
		</div>
	)
}
export default Chapter15
