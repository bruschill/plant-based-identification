import React, { useState } from 'react';
import { Formik, Form } from "formik";
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

  const submitFn = (values) => {
    alert(JSON.stringify(values, null, 2));
  }

  const handleAnswer = (e) => {
    setProfile(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  }

  const CurrentQuestion = () => {
    const questionData = baseQuestions[currentQuestionIndex];

    return (
      <Formik initialValues={INITIAL_STATE} onSubmit={submitFn}>
        <Form>
          <Question
            data={questionData}
            onAnswer={handleAnswer}
            currentAnswer={profile[questionData.name]}
          />
        </Form>
      </Formik>
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
      <div className="mt-6 space-x-2">
        <button className="btn" onClick={previousQuestion}>Previous</button>
        <button className="btn" onClick={nextQuestion}>Next</button>
      </div>
    </>
  );
}
