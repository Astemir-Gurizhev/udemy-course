import { MouseEventHandler } from 'react'

interface IButton {
	onClick: MouseEventHandler<HTMLButtonElement>
}
const Chapter16Button = (props: IButton) => {
	return (
		<>
			<button
				style={{
					margin: 10,
				}}
				onClick={props.onClick}
			>
				Увеличить
			</button>
		</>
	)
}
export default Chapter16Button
