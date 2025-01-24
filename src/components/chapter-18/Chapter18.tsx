import styles from './Chapter18.module.css'
import { chapter18Data } from './chapter18Data'
const Chapter18 = () => {
	return (
		<div className='component'>
			<h1>Часть 18</h1>
			<div className={styles.cards}>
				{chapter18Data.map(item => {
					return (
						<div key={item.id} className={styles.card}>
							<img src={item.img} alt={item.firstName} />
							<p>
								{item.firstName} {item.lastName}
							</p>
							<p>{item.email}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}
export default Chapter18
