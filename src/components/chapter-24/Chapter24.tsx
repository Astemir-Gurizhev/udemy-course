import { useEffect, useState } from 'react'

interface IData {
	completed: boolean
	id: number
	title: string
	userId: number
}

const Chapter24 = () => {
	const [data, setData] = useState<IData | null>(null)

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then(response => response.json())
			.then(json => setData(json))
	}, [])

	return (
		<div className='component'>
			<h1>Часть 24</h1>
			{data && <h2>{data.title}</h2>}
		</div>
	)
}

export default Chapter24
