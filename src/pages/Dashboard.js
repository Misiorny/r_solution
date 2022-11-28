import {
	BrowserRouter as Router, Route, Link
}           from "react-router-dom";
import { Main, Login,  } from '../pages';

export function Dashboard() {
	return (
		<Router>
				<Route path="/">
					<Main/>
				</Route>
				<Route path="/login">
					<Login/>
				</Route>
		</Router>
	)
}


