import { Button, Input, NavLink } from '../components';

export function Login() {
	return(
		<section>
			<div>
				<h2>Instruction</h2>
				<ol>
					<li>Write your name</li>
					<li>Run game session</li>
					<li>Read question</li>
					<li>Click on words</li>
					<li>Check your answer</li>
					<li>See correct answer</li>
					<li>See your score</li>
				</ol>
			</div>
		<form>
			<Input/>
			<Button btnText={<NavLink to='/game' linkText="Play"/>}/>
		</form>
		</section>
	)
}


