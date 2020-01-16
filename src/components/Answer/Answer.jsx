import { h } from "preact";
import { useEffect, useState, useRef } from "preact/hooks";
import { annotate } from "rough-notation";
import style from "./Answer.css";

const Answer = ({ answer, isLastAnswer, isOnlyAnswer }) => {
  const root = useRef(null);
  useEffect(() => {
    let annotation;
    if (isLastAnswer && !isOnlyAnswer) {
      annotation = annotate(root.current, {
        type: "circle",
      });
      annotation.show();
    } else if (!isLastAnswer && !isOnlyAnswer) {
      annotation = annotate(root.current, {
        type: "strike-through",
      });
      annotation.show();
    }

    return () => {
      if (annotation) {
        annotation.hide();
      }
    };
  }, [isLastAnswer, isOnlyAnswer]);
  return (
    <span ref={root} class={`${style.answer__text}`}>
      {answer ? "Yes" : "No"}
    </span>
  );
};

const Answers = ({ onButtonClick, initialAnswer, answerCount }) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {}, [initialAnswer]);

  useEffect(() => {
    if (answerCount === 1) {
      setAnswers([initialAnswer]);
    } else {
      setAnswers((a) => [...a, !initialAnswer]);
    }
  }, [initialAnswer, answerCount]);

  return (
    <div className={style.answer}>
      {answers.map((answer, index) => (
        <Answer
          answer={answer}
          isOnlyAnswer={answers.length === 1}
          isLastAnswer={index === answers.length - 1}
        />
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

export default Answers;
