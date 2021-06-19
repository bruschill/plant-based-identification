import { Fragment } from 'react';

export const ChamberCount = (props) => {
  return (
    <Fragment>
      <h3>Chamber Count</h3>
      <div className="form-group">
        <label htmlFor="chamberCount">How many?</label>
        <input
          type="text"
          id="chamberCount"
          name="chamberCount"
          onChange={() => {}}
        />
        (slice across ovary and look for partition walls)
      </div>
    </Fragment>
  );
}
