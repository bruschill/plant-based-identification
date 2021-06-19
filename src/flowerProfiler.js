import { list as questionList } from "./question/lists";
import { optionalList as optionalQuestionList } from "./question/lists";
import { Fragment } from "react";

export const FlowerProfiler = (props) => {
  let [profile, setProfile] = setState({})

  return (
    <Fragment>
      {questionList.map((Component, key) => (<Component key={key} />))}

      {optionalQuestionList.map((Component, key) => (<Component key={key} />))}
    </Fragment>
  );
}