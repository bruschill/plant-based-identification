import { Fragment } from 'react';

export const StamenCount = (props) => {
  return (
    <Fragment>
      <h3>Stamen Count</h3>
      <div className="form-group">
        <div>
          <label htmlFor="stamenCount">How many?</label>
          <input
            type="text"
            id="stamenCount"
            name="stamenCount"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="stamenCountIsNumerous">Numerous</label>
          <input
            type="checkbox"
            id="stamenCountIsNumerous"
            name="stamenCountIsNumerous"
            onChange={() => {}}
          />
        </div>
      </div>
    </Fragment>
  );
}
