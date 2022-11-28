import { Button, NavLink } from '../components';

export function Game({randomChose}) {
	return (
		<div>
				<h1>Game</h1>
			<div>
				<h2>Instruction</h2>
				<ol>
					<li>Read question</li>
					<li>Click on words</li>
					<li>Check your answer</li>
					<li>See correct answer</li>
					<li>See your score</li>
				</ol>
			</div>
			<div>
				<h2>Select {randomChose}</h2>
			</div>
			<Button btnText={<NavLink to="/answer" linkText="Check Answer"/>}/>
		</div>
	)
}


