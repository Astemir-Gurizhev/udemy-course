import { IBtn } from '../../types/buttons.types'

const Chapter19Button = (props: IBtn) => {
	return (
		<div>
			<button onClick={props.onClick}>нажми!</button>
		</div>
	)
}
export default Chapter19Button
