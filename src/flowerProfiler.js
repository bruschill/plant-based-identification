import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Question } from "./question";
import baseQuestions from './questions/base.json';
import { useAppState } from "./state";

export const FlowerProfiler = () => {
  const [state, setState]= useAppState()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const {
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });

  const saveResponse = (data) => {
    setState({...state, ...data});
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
        { currentQuestionIndex > 0 && <button className="btn" onClick={previousQuestion}>Previous</button> }
        <button className="btn" onClick={nextQuestion}>Next</button>
      </div>
    </form>
  );
}
