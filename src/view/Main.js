import { Button, NavLink } from '../components';

export function Main() {
	return (
		<section>
			<h1>Wordcloud Game</h1>
			<div>
				<p>Simple game based on choice appropriate words according to given question. </p>
				<h2>Instruction</h2>
				<ol>
					<li>Start the game</li>
					<li>Write your name</li>
					<li>Run game session</li>
					<li>Read question</li>
					<li>Click on words</li>
					<li>Check your answer</li>
					<li>See correct answer</li>
					<li>See your score</li>
				</ol>
			</div>
			<Button btnText={<NavLink to='/login' linkText='Start the Game'/>}/>
		</section>
	)
}


