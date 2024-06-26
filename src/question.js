import React from 'react';
import PropTypes from 'prop-types';
import { useAppState } from "./state";
import { titleize, capitalize } from "./utils";

export const Question = ({ data, register }) => {
  const [state] = useAppState();

  return (
    <>
      <h3 className="mt-4 text-2xl font-bold">{titleize(data.name)}</h3>
      {data.type === "selection" && data.values.map((value, idx) => {
        return (
          <div key={idx} className="mt-1">
            <input
              {...register(data.name)}
              type="radio"
              className="form-radio"
              name={data.name}
              id={value}
              value={value}
            />
            <label className="ml-1" htmlFor={value}>{capitalize(value)}</label>
          </div>
        );
      })}
      {data.type === "text" &&
        <div className="mt-1">
          <label className="mr-1" htmlFor={data.name}>{data.label}</label>
          <input
            {...register(data.name)}
            type="text"
            className="form-input"
            id={data.name}
            name={data.name}
            // value={state[data.name]}
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
  }).isRequired
};
