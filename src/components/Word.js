import { useState } from "react";

export function Word({ text }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <p id={text} onClick={() => setIsClicked(isClicked)}>
      {text}
    </p>
  );
}
