interface IText {
	text: string
}
const Chapter17Text = (props:IText) => {
	return <>
		<p>{props.text}</p>
	</>
}
export default Chapter17Text