import { Fragment } from 'react';

export const FlowerSex = (props) => {
  return (
    <Fragment>
      <h3>Flower Sex</h3>
      <div className="form-group">
        <div>
          <input
            type="radio"
            name="flowerSex"
            id="bisexual"
            value="bisexual"
            onChange={() => {}}
          />
          <label htmlFor="bisexual">Bisexual</label>
        </div>

        <div>
          <input
            type="radio"
            name="flowerSex"
            id="unisexual"
            value="unisexual"
            onChange={() => {}}
          />
          <label htmlFor="unisexual">Unisexual</label>
        </div>
      </div>
    </Fragment>
  );
}
