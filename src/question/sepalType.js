import { Fragment } from 'react';

export const SepalType = (props) => {
  return (
    <Fragment>
      <h3>Sepal Type</h3>
      <div className="form-group">
        <label htmlFor="separate">Separate</label>
        <input
          type="radio"
          name="sepalType"
          id="separate"
          value="separate"
          onChange={() => {}}
        />
        <label htmlFor="united">United</label>
        <input
          type="radio"
          name="sepalType"
          id="united"
          value="united"
          onChange={() => {}}
        />
      </div>
    </Fragment>
  );
}
