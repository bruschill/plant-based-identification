import React from 'react';
import PropTypes from 'prop-types';
import { titleize, capitalize } from "./utils";

export const Question = ({ data, onAnswer, currentAnswer }) => {
  return (
    <>
      <h3>{titleize(data.name)}</h3>

      {data.type === "selection" && data.values.map((value, idx) => {
        return (
          <div key={idx}>
            <input
              type="radio"
              name={data.name}
              id={value}
              value={value}
              onChange={onAnswer}
              checked={currentAnswer === value}
            />
            <label htmlFor={value}>{capitalize(value)}</label>
          </div>
        );
      })}

      {data.type === "text" &&
        <div>
          <label htmlFor={data.name}>{data.label}</label>
          <input
            type="text"
            id={data.name}
            name={data.name}
            onChange={onAnswer}
            value={currentAnswer.length !== 0 ? currentAnswer : ''}
          />
        </div>
      }
    </>
  );
}

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
