import { useState } from 'react'
import styles from "./Chapter8.module.css"

type TypeGreen = string
const firstText = 'Начальное'
const secondText = 'Измененное'

const Chapter8 = () => {
	const [buttonText, setButtonText] = useState(firstText)
	const [greenBtn, setGreenBtn] = useState<TypeGreen>('')

	const changeButtonText = () => {
		setButtonText(() => (buttonText === firstText ? secondText : firstText))
	}
	const changeGreenBtn = () => {
		setGreenBtn(() => (greenBtn === '' ? `${styles.greenBtn} ` : ''))
	}
	const handleClick = () => {
		changeButtonText()
		changeGreenBtn()
	}

	return (
		<div className='component'>
			<h1>Часть 8</h1>
			<button className={greenBtn} onClick={handleClick}>
				{buttonText}
			</button>
		</div>
	)
}
export default Chapter8
