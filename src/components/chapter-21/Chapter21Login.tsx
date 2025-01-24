import { FormEventHandler, useState } from 'react'

const Chapter21Login = () => {
	const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
		event.preventDefault()
	}

	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')

	const userData = {
		userName,
		password
	}

	return (
		<div className='component'>
			<h1>Login Form</h1>
			<form
				onSubmit={handleSubmit}
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 20,
				}}
			>
				<label>
					Login:{' '}
					<input
						value={userName}
						onChange={e => setUserName(e.target.value)}
						type='text'
					/>
				</label>
				<label>
					Password:{' '}
					<input
						value={password}
						onChange={e => setPassword(e.target.value)}
						type='password'
					/>
				</label>
				<button>Login</button>
			</form>
			<p>Слитый login: {userData.userName}</p>
			<p>Слитый password: {userData.password}</p>
		</div>
	)
}

export default Chapter21Login
