interface IMan {
	name: string
	age: number | string
}

const Chapter13 = (props: IMan) => {
	return (
		<div className='component'>
			<h1>Часть 13</h1>
			<p>
				My name is {props.name}. I'm {props.age} years old.
			</p>
		</div>
	)
}
export default Chapter13
