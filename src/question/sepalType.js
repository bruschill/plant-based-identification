import { Fragment } from 'react';

export const SepalType = (props) => {
  return (
    <Fragment>
      <h3>Sepal Type</h3>
      <div className="form-group">
        <label htmlFor="separate">Separate</label>
        <input
          type="radio"
          id="separate"
          name="sepalType"
          onChange={() => {}}
        />
        <label htmlFor="united">United</label>
        <input
          type="radio"
          id="united"
          name="sepalType"
          onChange={() => {}}
        />
      </div>
    </Fragment>
  );
}
