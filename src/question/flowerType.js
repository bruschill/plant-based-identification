import { Fragment } from 'react';

export const FlowerType = (props) => {
  return (
    <Fragment>
      <h3>Flower Type</h3>
      <div className="form-group">
        <label htmlFor="regular">Regular</label>
        <input
          type="radio"
          id="regular"
          name="flowerType"
          onChange={() => {}}
        />
        <label htmlFor="irregular">Irregular</label>
        <input
          type="radio"
          id="irregular"
          name="flowerType"
          onChange={() => {}}
        />
      </div>
    </Fragment>
  );
}