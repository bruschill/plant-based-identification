import { Fragment } from 'react';

export const SepalCount = (props) => {
  return (
    <Fragment>
      <h3>Sepal Count</h3>
      <div>
        <label htmlFor="sepalCount">How many?</label>
        <input
          type="text"
          id="sepalCount"
          name="sepalCount"
          onChange={() => {}}
        />
      </div>
    </Fragment>
  );
}
