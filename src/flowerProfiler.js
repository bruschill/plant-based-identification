import React, { Fragment, useState } from 'react';
import { list as questionList } from "./question/lists";
import { optionalList as optionalQuestionList } from "./question/lists";

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

  return (
    <Fragment>
      <h2>Required Questions</h2>
      {questionList.map((Component, key) => (<Component key={key} />))}

      <h2>Optional Questions</h2>
      {optionalQuestionList.map((Component, key) => (<Component key={key} />))}
    </Fragment>
  );
}