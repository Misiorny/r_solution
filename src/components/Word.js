import styles from "../styles/Task.module.scss";

export function Word({ text, onClick }) {
  return (
    <div className={styles.word}>
      <p id={text} onClick={onClick}>
        {text}
      </p>
    </div>
  );
}
