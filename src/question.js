import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { titleize, capitalize } from "./utils";

export const Question = ({ data, onAnswer, currentAnswer }) => {
  return (
    <>
      <h3 className="mt-4 text-2xl font-bold">{titleize(data.name)}</h3>
      {data.type === "selection" && data.values.map((value, idx) => {
        return (
          <div key={idx} className="mt-1">
            <Field
              type="radio"
              className="form-radio"
              name={data.name}
              id={value}
              value={value}
              checked={currentAnswer === value}
            />
            <label className="ml-1" htmlFor={value}>{capitalize(value)}</label>
          </div>
        );
      })}
      {data.type === "text" &&
        <div className="mt-1">
          <label className="mr-1" htmlFor={data.name}>{data.label}</label>
          <Field
            type="text"
            className="form-input"
            id={data.name}
            name={data.name}
            defaultValue={currentAnswer.length !== 0 ? currentAnswer : ''}
          />
        </div>
      }
    </>
  );
};

Question.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.oneOf(['selection', 'text']).isRequired,
    name: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(PropTypes.string),
    label: PropTypes.string
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
  currentAnswer: PropTypes.string
};
