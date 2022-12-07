import { Button, NavLink, Word } from "../components";

export function Answer() {
  const storedWords = window.sessionStorage.getItem("words");
  let words = [];
  words = JSON.parse(storedWords);
  const storedPlayerAnswer = window.sessionStorage.getItem("playerAnswer");
  let answer = [];
  answer = JSON.parse(storedPlayerAnswer);
  const storedGoodAnswer = window.sessionStorage.getItem("goodAnswer");
  let goodAnswer = [];
  goodAnswer = JSON.parse(storedGoodAnswer);
  console.log("data", words, "playerAnswer", answer, "goodAnswer", goodAnswer);
  return (
    <section>
      <h1>Answer</h1>
      <div>
        {words.map((e) => (
          <Word key={e} text={e} />
        ))}
      </div>
      <Button btnText={<NavLink to="/score" linkText="Score" />} />
    </section>
  );
}
