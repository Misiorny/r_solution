import { useState } from "react";

export function Word({ text }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (event) => {
    const weAreClicked = [];
    if (isClicked === true) {
      weAreClicked.push(event.target.id);
      console.log(
        `I was clicked. My ID is ${event.target.id} and want to change bgc`,
        "weAreClicked",
        weAreClicked
      );
    }
  };

  return (
    <div onClick={handleClick}>
      <p id={text} onClick={() => setIsClicked(true)}>
        {text}
      </p>
    </div>
  );
}
