import { Main }                                from '../view/';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login }                               from '../view/';
import { Answer }                              from '../view';
import { Game }                                from '../view'
import { Score }                               from '../view';

const router = createBrowserRouter([
	{
		path: '/', element: <Main/>
	}, {
		path: '/login', element: <Login/>
	}, {
		path: '/answer', element: <Answer/>
	}, {
		path: '/game', element: <Game/>
	}, {
		path: '/score', element: <Score/>
	}])

export function Dashboard() {
	return (
		<div>
			<RouterProvider router={router}/>
		</div>
	)
}


