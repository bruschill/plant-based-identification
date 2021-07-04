import { Fragment } from 'react';

export const ChamberCount = (props) => {
  return (
    <Fragment>
      <h3>Chamber Count</h3>
      <div className="form-group">
        <div>
          <label htmlFor="chamberCount">How many?</label>
          <input
            type="text"
            id="chamberCount"
            name="chamberCount"
            onChange={() => {}}
          />
        </div>
        (slice across ovary and look for partition walls)
      </div>
    </Fragment>
  );
}
