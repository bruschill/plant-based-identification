import React, { setState } from 'react';
import { list as questionList } from "./question/lists";
import { optionalList as optionalQuestionList } from "./question/lists";
import { Fragment } from "react";

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
  let [profile, setProfile] = setState(INITIAL_STATE);

  return (
    <Fragment>
      {questionList.map((Component, key) => (<Component key={key} />))}

      {optionalQuestionList.map((Component, key) => (<Component key={key} />))}
    </Fragment>
  );
}