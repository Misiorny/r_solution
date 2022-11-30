import { Main, Login, Answer, Game, Score }    from '../view/';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
	}
])

 function Dashboard() {
	return (
		<div>
			<RouterProvider router={router}/>
		</div>
	)
}

export default Dashboard;
