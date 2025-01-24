import Chapter17Text from './Chapter17Text'

const texts = ['ура', '17', 'часть', 'выполнена']

const Chapter17 = () => {
	return (
		<div className='component'>
			<h1>Часть 17</h1>
			{texts.map((text, index) => (
				<Chapter17Text key={index} text={text} />
			))}
		</div>
	)
}
export default Chapter17
