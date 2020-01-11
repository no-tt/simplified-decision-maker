import { h } from "preact";
import { useState } from "preact/hooks";
import Question from "./Question";
import Answer from "./Answer";
import Button from "./Button";

const App = () => {
  const [answerCount, setAnswerCount] = useState(0);
  const [initialAnswer, setInitialAnswer] = useState();

  const handleInitialClick = () => {
    setAnswerCount(1);
    setInitialAnswer(Math.random() > 0.5);
  };

  const updateAnswer = () => {
    setAnswerCount(answerCount + 1);
  };

  return (
    <div id="app">
      <Question />
      <Button onClick={handleInitialClick}>Decide for me</Button>

      {initialAnswer !== undefined && (
        <Answer
          onButtonClick={updateAnswer}
          answerCount={answerCount}
          initialAnswer={initialAnswer}
        />
      )}
    </div>
  );
};

export default App;
