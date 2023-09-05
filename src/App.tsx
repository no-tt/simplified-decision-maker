import { useState } from "react";
import { useForm } from "react-hook-form";
import AnswersWrapper from "./components/AnswersWrapper";
import QuestionWrapper from "./components/QuestionWrapper";

const App = () => {
  const [answerCount, setAnswerCount] = useState(0);
  const [initialAnswer, setInitialAnswer] = useState(false);

  const onSubmit = () => {
    setAnswerCount(1);
    setInitialAnswer(Math.random() > 0.5);
  }

  const updateAnswer = () => setAnswerCount(2);

  return (
    <div className="bg-gray-50 w-full h-full py-32">
      <QuestionWrapper onSubmit={onSubmit} />

      {answerCount > 0 && (
        <AnswersWrapper
          answerCount={answerCount}
          initialAnswer={initialAnswer}
          updateAnswer={updateAnswer}
        />
      )}
    </div>
  );
};

export default App;
