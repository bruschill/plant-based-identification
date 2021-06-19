import { Fragment } from 'react';

export const PetalType = (props) => {
  return (
    <Fragment>
      <h3>Petal Type</h3>
      <div className="form-group">
        <label htmlFor="separate">Separate</label>
        <input
          type="radio"
          id="separate"
          name="petalType"
          onChange={() => {}}
        />
        <label htmlFor="united">United</label>
        <input
          type="radio"
          id="united"
          name="petalType"
          onChange={() => {}}
        />
      </div>
    </Fragment>
  );
}
