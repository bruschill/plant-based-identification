import { Fragment } from 'react';

export const SepalColor = (props) => {
  return (
    <Fragment>
      <h3>Sepal Color</h3>
      <div>
        <label htmlFor="sepalColor">What color?</label>
        <input
          type="text"
          id="sepalColor"
          name="sepalColor"
          onChange={() => {}}
        />
      </div>
    </Fragment>
  );
}
