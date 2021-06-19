import { Fragment } from 'react';

export const CarpelCount = (props) => {
  return (
    <Fragment>
      <h3>Carpel Count</h3>
      <div className="form-group">
        <label htmlFor="carpelCount">How many?</label>
        <input
          type="text"
          id="carpelCount"
          name="carpelCount"
          onChange={() => {}}
        />
        (count styles or stigmas)
      </div>
    </Fragment>
  );
}
