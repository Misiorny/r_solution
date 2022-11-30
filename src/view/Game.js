import { Button, NavLink, Word } from "../components";
import dataApi                   from "../model/dataApi";

const random=()=>{
	let number=Math.floor(Math.random()*1000);
	let magic=dataApi.length
	return number%magic
}

export function Game() {
	return (
		<div>
				<h1>Game</h1>

			<div>
				<h2>Select {dataApi[random()].question}</h2>
			</div>
			<div>
				{dataApi.map((e)=>
				<Word key={e.question} text={e.all_words}/>)
				}
			</div>
			<Button btnText={<NavLink to="/answer" linkText="Check Answer"/>}/>
		</div>
	)
}


