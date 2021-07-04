import { Fragment } from 'react';

export const SepalType = (props) => {
  return (
    <Fragment>
      <h3>Sepal Type</h3>
      <div>
        <input
          type="radio"
          name="sepalType"
          id="sepalSeparate"
          value="separate"
          onChange={() => {}}
        />
        <label htmlFor="sepalSeparate">Separate</label>
      </div>

      <div>
        <input
          type="radio"
          name="sepalType"
          id="sepalUnited"
          value="united"
          onChange={() => {}}
        />
        <label htmlFor="sepalUnited">United</label>
      </div>
    </Fragment>
  );
}
