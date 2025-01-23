interface ICheck {
	text: string
}
const Chapter14 = (props: ICheck) => {
	return (
		<>
			<h1>Часть 14</h1>
			{props.text === 'да'
				? 'Данные текста переданы успешно'
				: 'Текст не получен'}
		</>
	)
}
export default Chapter14
