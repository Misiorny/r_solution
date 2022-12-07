import { Button, NavLink, Word } from "../components";
import dataApi from "../model/dataApi";
import random from "../controlers/random";
import { useState } from "react";
import { Answer } from "./Answer";

export function Game() {
  const [answer, setAnswer] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    setAnswer((answer) => [...answer, e.target.innerHTML]);
    window.sessionStorage.setItem("playerAnswer", JSON.stringify(answer));
  };
  const questionId = random;
  const words = [...dataApi[questionId].all_words];
  const goodAnswer = [...dataApi[questionId].good_words];
  const playerAnswer = answer;
  const [data, setData] = useState({
    words: words,
    goodAnswer: goodAnswer,
    // playerAnswer: answer,
  });
  const constData = () =>
    setData((data) => {
      data.concat({
        words: [words],
        goodAnswer: [goodAnswer],
        // playerAnswer: [playerAnswer],
      });
    });
  console.log(
    "words",
    words,
    "goodAnswer",
    goodAnswer,
    "playerAnswer",
    playerAnswer,
    "data",
    data,
    "answer",
    answer
  );
  const showAnswer = () => {
    window.sessionStorage.setItem("words", JSON.stringify(words));
    window.sessionStorage.setItem("goodAnswer", JSON.stringify(goodAnswer));
    return <Answer />;
  };
  return (
    <div>
      <h1>Game</h1>
      <div>
        <h2>Select {dataApi[questionId].question}</h2>
      </div>
      <div>
        {words.map((e) => (
          <Word key={e} text={e} onClick={handleClick} onChange={constData} />
        ))}
      </div>
      <Button
        btnText={<NavLink to="/answer" linkText="Check Answer" />}
        onClick={showAnswer}
      />
    </div>
  );
}
