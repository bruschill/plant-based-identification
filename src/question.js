import PropTypes from 'prop-types';

export const Question = (props) => {
  return (
    <>
      <Question.Subject text={props.subjectText} />
      <p>{props.questionText}</p>
      <Question.ResponseOptions />
    </>
  );
};

Question.propTypes = {
  subjectText: PropTypes.string.isRequired,
  questionText: PropTypes.string.isRequired,
  type: PropTypes.oneOf('text', 'selection').isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.required,
    value: PropTypes.string.required,
    onChange: PropTypes.func.required
  }))
};

Question.Subject = ({ text }) => {
  return (
    <h3>{text}</h3>
  );
}

Question.Subject.propTypes = {
  text: PropTypes.string.isRequired
};

Question.ResponseOptions = (props) => {
  return (
    <>
      {props.type === 'text' &&
        <div>
          <input
            type="text"
            id={props.id}
            name={props.name}
            onChange={props.handleChange}
          />
        </div>
      }
      {props.type === 'selection' && props.map((option) => {
          return (
            <div>
              <input
                type="radio"
                name={option.name}
                id={option.id}
                value={option.value}
                onChange={option.handleChange}
              />
              <label htmlFor={option.id}>{option.value}</label>
            </div>
          );
        })}
      }
    </>
  );
};

Question.ResponseOptions.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};