import React from 'react';

interface AnswersWrapperProps {
  answerCount: number;
  initialAnswer: boolean;
  updateAnswer: () => void;
}

const AnswersWrapper: React.FC<AnswersWrapperProps> = ({ answerCount, initialAnswer, updateAnswer }) => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center max-w-xl m-auto bg-white p-16 rounded shadow-sm mt-4">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-1 items-center text-stone-700 font-[Avenir] text-lg font-bold">
          <span className={answerCount > 1 ? "line-through" : ""}>{initialAnswer ? "Yes" : "No"}</span>
          {answerCount > 1 && (
            <span>{!initialAnswer ? "Yes" : "No"}</span>
          )}
        </div>

        {answerCount === 1 && (
          <button type="button" onClick={updateAnswer} className="text-xs text-stone-400 underline">
            I'm not fully satisfied with this answer
          </button>
        )}
      </div>
    </div>
  );
};

export default AnswersWrapper;
