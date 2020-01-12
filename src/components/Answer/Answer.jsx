import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import style from "./Answer.css";

const Answer = ({ onButtonClick, initialAnswer, answerCount }) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {}, [initialAnswer]);

  useEffect(() => {
    if (answerCount === 1) {
      setAnswers([initialAnswer]);
      return;
    }
    setAnswers((a) => [
      ...a,
      answerCount % 2 === 0 ? !initialAnswer : initialAnswer,
    ]);
  }, [initialAnswer, answerCount]);

  return (
    <div className={style.answer}>
      {answers.map((answer, index) => (
        <span
          className={`${style.answer__text} ${
            index !== answers.length - 1 ? style["answer__text--old"] : ""
          }`}
        >
          {answer ? "Yes" : "No"}
        </span>
      ))}

      {answers.length === 1 && (
        <div>
          <button className={style.answer__button} onClick={onButtonClick}>
            I'm not fully satisfied of this answer
          </button>
        </div>
      )}
    </div>
  );
};

export default Answer;
