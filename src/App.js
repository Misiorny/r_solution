import './App.css';
import { Dashboard }         from './pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Dashboard/>
			</div>
		</BrowserRouter>
	);
}

export default App;
