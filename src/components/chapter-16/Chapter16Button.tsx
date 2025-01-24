import { IBtn } from '../../types/buttons.types'

const Chapter16Button = (props: IBtn) => {
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
