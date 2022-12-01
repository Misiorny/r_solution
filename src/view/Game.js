import { Button, Word } from "../components";
import dataApi from "../model/dataApi";

const random = () => {
  let number = Math.floor(Math.random() * 1000);
  let magic = dataApi.length;
  return number % magic;
};

export function Game() {
  const handleClick = () => {};

  const questionId = random();
  const words = [...dataApi[questionId].all_words];

  return (
    <div>
      <h1>Game</h1>
      <div>
        <h2>Select {dataApi[questionId].question}</h2>
      </div>
      <div>
        {words.map((e) => (
          <Word key={e} text={e} />
        ))}
      </div>
      <Button btnText="Check Answer" onClick={handleClick} />
    </div>
  );
}
