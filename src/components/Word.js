import styles from "../styles/Task.module.scss";
import { useState } from "react";

export function Word({ text, onClick }) {
  const [isClicked, setIsClicked] = useState(false);

  const style = {
    bgc: {
      backgroundColor: isClicked ? "gray" : "",
    },
  };
  console.log(isClicked);
  return (
    <div
      className={styles.word}
      onClick={(isClicked) => setIsClicked(true)}
      style={style.bgc}
    >
      <p id={text} onClick={onClick}>
        {text}
      </p>
    </div>
  );
}
