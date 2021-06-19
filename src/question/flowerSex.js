import { Fragment } from 'react';

export const FlowerSex = (props) => {
  return (
    <Fragment>
      <h3>Flower Sex</h3>
      <div className="form-group">
        <label htmlFor="bisexual">Bisexual</label>
        <input
          type="radio"
          id="bisexual"
          name="flowerSex"
          onChange={() => {}}
        />
        <label htmlFor="unisexual">Unisexual</label>
        <input
          type="radio"
          id="unisexual"
          name="flowerSex"
          onChange={() => {}}
        />
      </div>
    </Fragment>
  );
}
