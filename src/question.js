import React from 'react';
import PropTypes from 'prop-types';

export const Question = ({ data }) => {
  const formatHeader = () =>
    data.name
      .replace(/([A-Z])/g, (match) => ` ${match}`)
      .replace(/^./, (match) => match.toUpperCase())
      .trim();

  const capitalize = ([firstLetter, ...restOfWord]) =>
    firstLetter.toUpperCase() + restOfWord.join("");

  return (
    <>
      <h3>{formatHeader()}</h3>

      {data.type === "selection" && data.values.map((value) => {
        return (
          <div>
            <input
              type="radio"
              name={data.name}
              id={value}
              value={value}
              onChange={() => {}}
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
            onChange={() => {}}
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
  })
};