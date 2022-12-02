import { Button, Word } from "../components";
import dataApi from "../model/dataApi";
import random from "../controlers/random";
import { useState } from "react";

export function Game() {
  const [answer, setAnswer] = useState([]);

  const handleClick = (e) => {
    setAnswer((answer) => [...answer, e.target.innerHTML]);
  };
  const checkAnswer = () => {};
  const questionId = random;
  const words = [...dataApi[questionId].all_words];
  return (
    <div>
      <h1>Game</h1>
      <div>
        <h2>Select {dataApi[questionId].question}</h2>
      </div>
      <div>
        {words.map((e) => (
          <Word key={e} text={e} onClick={handleClick} />
        ))}
      </div>
      <Button btnText="Check Answer" onClick={checkAnswer} />
    </div>
  );
}
