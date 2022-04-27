import React, { useState } from 'react';
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
  styleCount: ''
}

export const FlowerProfiler = (props) => {
  const [profile, setProfile] = useState(INITIAL_STATE);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const CurrentQuestion = () => {
    const question = baseQuestions[currentQuestionIndex];

    const formatHeader = () =>
      question.name
      .replace(/([A-Z])/g, (match) => ` ${match}`)
      .replace(/^./, (match) => match.toUpperCase())
      .trim();

    const capitalize = ([firstLetter, ...restOfWord]) =>
      firstLetter.toUpperCase() + restOfWord.join("");

    return (
      <>
        <h3>{formatHeader()}</h3>

        {question.type === "selection" && question.values.map((value) => {
          return (
            <div>
              <input
                type="radio"
                name={question.name}
                id={value}
                value={value}
                onChange={() => {}}
              />
              <label htmlFor={value}>{capitalize(value)}</label>
            </div>
          );
        })}

        {question.type === "text" &&
          <div>
            <label htmlFor={question.name}>{question.label}</label>
            <input
              type="text"
              id={question.name}
              name={question.name}
              onChange={() => {}}
            />
          </div>
        }
      </>
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