import { Fragment } from 'react';

export const PistilCount = (props) => {
  return (
    <Fragment>
      <h3>Pistil Count</h3>
      <div className="form-group">
        <label htmlFor="pistilCount">How many?</label>
        <input
          type="text"
          id="pistilCount"
          name="pistilCount"
          onChange={() => {}}
        />
      </div>
    </Fragment>
  );
}
