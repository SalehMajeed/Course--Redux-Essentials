import './App.css';
import { Provider } from 'react-redux';
import store from './component/reducer';
import Counter from './component/counter';

function App() {
	return (
		<div className='App'>
			<Provider store={store}>
				<Counter initialInputValue={2} />
			</Provider>
		</div>
	);
}

export default App;
