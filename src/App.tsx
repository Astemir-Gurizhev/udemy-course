import Chapter13 from './components/chapter-13/Chapter13'
import Chapter14 from './components/chapter-14/Chapter14'
import Chapter15 from './components/chapter-15/Chapter15'
import Chapter16 from './components/chapter-16/Chapter16'
import Chapter17 from './components/chapter-17/Chapter17'
import Chapter18 from './components/chapter-18/Chapter18'
import Chapter19 from './components/chapter-19/Chapter19'
import Chapter21 from './components/chapter-21/Chapter21'
import Chapter8 from './components/chapter-8/Chapter8'

function App() {
	return (
		<>
			<Chapter8 />
			<Chapter13 name='Astemir' age='23' />
			<Chapter14 text='да' />
			<Chapter15 ratio={100} />
			<Chapter16 />
			<Chapter17 />
			<Chapter18 />
			<Chapter19 />
			<Chapter21 />
		</>
	)
}

export default App
