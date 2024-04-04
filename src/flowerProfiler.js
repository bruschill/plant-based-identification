import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Question } from "./question";
import baseQuestions from './questions/base.json';
import { AppStateContext, useAppState } from "./state";
// import optionalQuestions from './optional.json';

export const FlowerProfiler = () => {
  const [state, setState]= useContext(AppStateContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const {
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });

  const saveResponse = (data) => {
    console.log(data)
    setState({...state, ...data});
    console.log(state);
  }

  const CurrentQuestion = () => {
    const questionData = baseQuestions[currentQuestionIndex];

    return (
      <Question
        data={questionData}
        currentAnswer={state[questionData.name]}
      />
    );
  };

  const previousQuestion = () => {
    if(currentQuestionIndex > 0) {
      setCurrentQuestionIndex((currentQuestionIndex) => currentQuestionIndex - 1 )
    }
  };

  const nextQuestion = () => {
    if(currentQuestionIndex < baseQuestions.length - 1) {
      setCurrentQuestionIndex((currentQuestionIndex) => currentQuestionIndex + 1)
    }
  };

  return (
    <form onSubmit={handleSubmit(saveResponse)}>
      <CurrentQuestion/>
      <div className="mt-6 space-x-2">
        <button className="btn" onClick={previousQuestion}>Previous</button>
        <button className="btn" onClick={nextQuestion}>Next</button>
      </div>
    </form>
  );
}
