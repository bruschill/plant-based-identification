import { Fragment } from 'react';

export const PetalCount = (props) => {
  return (
    <Fragment>
      <h3>Petal Count</h3>
      <div className="form-group">
        <label htmlFor="petalCount">How many?</label>
        <input
          type="text"
          id="petalCount"
          name="petalCount"
          onChange={() => {}}
        />
      </div>
    </Fragment>
  );
}
