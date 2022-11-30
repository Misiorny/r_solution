import { Button, NavLink, Word } from "../components";
import dataApi                   from "../model/dataApi";

const random = () => {
	let number = Math.floor(Math.random() * 1000);
	let magic = dataApi.length;
	return number % magic;
};

export function Game() {
	const index=random();
	const words = [...dataApi[index].all_words];
	console.log(words);
	return (
		<div>
			<h1>Game</h1>
			<div>
				<h2>Select {dataApi[index].question}</h2>
			</div>
			<div>
				{words.map((e) => <Word key={e.index} text={e}/>)}
			</div>
			<Button btnText={<NavLink to="/answer" linkText="Check Answer"/>}/>
		</div>
	);
}

