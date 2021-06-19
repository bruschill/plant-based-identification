import { list as questionList } from "./question/lists";
import { optionalList as optionalQuestionList } from "./question/lists";
import { Fragment } from "react";

export const FlowerProfiler = (props) => {
  return (
    <Fragment>
      {questionList.map((q, i) => <Fragment key={i}>{q()}</Fragment>)}

      {optionalQuestionList.map((q, i) => <Fragment key={i}>{q()}</Fragment>)}
    </Fragment>
  );
}