import { Button, NavLink } from "../components";

export function Score({score}) {
	const nickName=sessionStorage.getItem('playerNick')
	return (
		<div>
			<h1>Congratulation {nickName}!</h1>
			<h2>Your score:</h2>
			<strong>{score}</strong>
			<Button btnText={<NavLink to="/game" linkText="Play Again"/>}/>
			<Button btnText={<NavLink to="/" linkText="Stop Playing"/>}/>
		</div>
	);
}

