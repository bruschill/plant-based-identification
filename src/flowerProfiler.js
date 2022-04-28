import React, { useState, useEffect } from 'react';
import { Question } from "./question";
import baseQuestions from './questions/base.json';
// import optionalQuestions from './optional.json';

const INITIAL_STATE = {
  "flowerType": '',
  "flowerSex": '',
  "sepalType": '',
  "sepalCount": '',
  "sepalColor": '',
  "petalType": '',
  "petalCount": '',
  "petalColor": '',
  "stamenType": '',
  "stamenCount": '',
  "stamenArrangement": '',
  "chamberCount": '',
  "carpelCount": '',
  "pistilCount": '',
  "pistilPosition": ''
}

export const FlowerProfiler = () => {
  const [profile, setProfile] = useState(INITIAL_STATE);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const handleAnswer = (e) => {
    setProfile(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  }

  const CurrentQuestion = () => {
    const questionData = baseQuestions[currentQuestionIndex];

    return (
      <Question
        data={questionData}
        currentAnswer={profile[questionData.name]}
        onAnswer={handleAnswer}
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
    <>
      <CurrentQuestion />
      <button onClick={previousQuestion}>Previous</button>
      <button onClick={nextQuestion}>Next</button>
    </>
  );
}
