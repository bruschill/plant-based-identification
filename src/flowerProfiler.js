import React, { useState } from 'react';
import { Question } from "./question";
import baseQuestions from './questions/base.json';
// import optionalQuestions from './optional.json';

const INITIAL_STATE = {
  flowerType: '',
  flowerSex: '',
  sepalType: '',
  sepalCount: '',
  sepalColor: '',
  petalType: '',
  petalCount: '',
  petalColor: '',
  stamenType: '',
  stamenCount: '',
  stamenArrangement: '',
  chamberCount: '',
  carpelCount: '',
  pistilCount: '',
  pistilPosition: ''
}

export const FlowerProfiler = (props) => {
  const [profile, setProfile] = useState(INITIAL_STATE);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const CurrentQuestion = () => {
    const questionData = baseQuestions[currentQuestionIndex];

    return <Question data={questionData}/>
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
    <>
      <CurrentQuestion />
      <button onClick={previousQuestion}>Previous</button>
      <button onClick={nextQuestion}>Next</button>
    </>
  );
}