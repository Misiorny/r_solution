import { Button, NavLink } from '../components';

export function Answer() {
	return(
		<section>
		<h1>Answer</h1>
			<div>
				<h2>Instruction</h2>
				<ol>
					<li>See correct answer</li>
					<li>See your score</li>
				</ol>
			</div>
			<Button btnText={<NavLink to='/score' linkText="Score"/>}/>
		</section>
	)
}


