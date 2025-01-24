interface ICounter {
	counter: number | string
}

const Chapter16Counter = (props: ICounter) => {
	return <>
		<p>Счетчик: {props.counter}</p>
	</>
}
export default Chapter16Counter