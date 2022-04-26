import React, { useState } from 'react';
import { list as questionList,
         optionalList as optionalQuestionList } from "./question/lists";

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
  stamenCountIsNumerous: false,
  stamenArrangement: '',
  chamberCount: '',
  carpelCount: '',
  styleCount: '',
  stigmaLobeCount: ''
}

export const FlowerProfiler = (props) => {
  const [profile, setProfile] = useState(INITIAL_STATE);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(props.currentQuestionIndex || 0)

  const CurrentQuestion = () => {
    const Component = questionList[currentQuestionIndex]
    return <Component />;
  };

  const previousQuestion = () => {
    if(currentQuestionIndex > 0) {
      setCurrentQuestionIndex((currentQuestionIndex) => currentQuestionIndex - 1 )
    }
  };

  const nextQuestion = () => {
    if(currentQuestionIndex < questionList.length - 1) {
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