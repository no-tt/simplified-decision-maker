import { h } from "preact";
import Button from "../Button";
import style from "./Answer.css";

const Answer = ({ onButtonClick, initialAnswer, answerCount }) => {
  const answer = answerCount % 2 === 0 ? !initialAnswer : initialAnswer;

  return (
    <div className={style.answer}>
      <div className={style.answer__text}>{`${answer ? "Yes." : "No."}`}</div>
      <Button onClick={onButtonClick}>Not satisfied ?</Button>
    </div>
  );
};

export default Answer;
