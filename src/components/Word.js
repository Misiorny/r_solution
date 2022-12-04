import styles from "../styles/Task.module.scss";
import { useState } from "react";

export function Word({ text, onClick, answer }) {
  const [isClicked, setIsClicked] = useState(false);

  const style = {
    bgc: {
      backgroundColor: isClicked ? "gray" : "white",
    },
  };

  return (
    <div
      id={text}
      className={styles.word}
      onClick={(isClicked) => setIsClicked(true)}
      style={style.bgc}
    >
      <p>{answer}</p>
      <p onClick={onClick}>{text}</p>
    </div>
  );
}
