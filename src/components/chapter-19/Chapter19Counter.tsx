interface ICount {
	count: number
}
const Chapter19Counter = (props: ICount) => {
	return (
		<div>
			<p>Счетчик: {props.count}</p>
		</div>
	)
}
export default Chapter19Counter
