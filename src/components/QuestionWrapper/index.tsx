import React from 'react';
import { useForm } from 'react-hook-form';

type QuestionWrapperProps = {
  onSubmit: () => void;
};

const QuestionWrapper: React.FC<QuestionWrapperProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState } = useForm({ mode: 'onChange' })

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 items-center justify-center max-w-xl m-auto bg-white p-16 rounded shadow-sm"
    >
      <h1 className="font-[Avenir] text-stone-900">
        <strong>S</strong>implified <strong>D</strong>ecision <strong>M</strong>aker
      </h1>

      <div className="w-full text-xl font-serif text-stone-500 flex gap-2 flex-col sm:flex-row">
        <span>Should I</span>
        <input {...register('question', { required: true })} type="text" className={"bg-white border-b flex-1"} placeholder="trust this website" />
        <span>?</span>
      </div>

      <button
        disabled={!formState.isValid}
        className="font-[Avenir] bg-stone-500 hover:bg-stone-600 disabled:bg-stone-200 transition-all text-white px-8 py-2 uppercase text-xs font-bold rounded-2xl"
      >
        Decide for me
      </button>
    </form>
  );
};

export default QuestionWrapper;
