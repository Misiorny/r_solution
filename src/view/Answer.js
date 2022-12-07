import { Button, NavLink, Word } from "../components";
import { useState } from "react";

const storedWords = window.sessionStorage.getItem("words");
let words = [];
words = JSON.parse(storedWords);
const storedPlayerAnswer = window.sessionStorage.getItem("playerAnswer");
let answer = [];
answer = JSON.parse(storedPlayerAnswer);
const storedGoodAnswer = window.sessionStorage.getItem("goodAnswer");
let goodAnswer = [];
goodAnswer = JSON.parse(storedGoodAnswer);

export function Answer() {
  const [showAnswer, setShowAnswer] = useState({ contain: "", id: "" });

  console.log("data", words, "playerAnswer", answer, "goodAnswer", goodAnswer);

  // const storedWords = window.sessionStorage.getItem("words");
  // let words = [];
  // words = JSON.parse(storedWords);
  // const storedPlayerAnswer = window.sessionStorage.getItem("playerAnswer");
  // let answer = [];
  // answer = JSON.parse(storedPlayerAnswer);
  // const storedGoodAnswer = window.sessionStorage.getItem("goodAnswer");
  // let goodAnswer = [];
  // goodAnswer = JSON.parse(storedGoodAnswer);
  // console.log(
  //   "Adata",
  //   words,
  //   "AplayerAnswer",
  //   answer,
  //   "AgoodAnswer",
  //   goodAnswer
  // );
  return (
    <section>
      <h1>Answer</h1>
      <div>
        {words.map((e) => (
          <Word key={e} text={e} answer="Good" />
        ))}
      </div>
      <Button btnText={<NavLink to="/score" linkText="Score" />} />
    </section>
  );
}
