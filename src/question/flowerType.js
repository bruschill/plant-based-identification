import { Fragment } from 'react';

export const FlowerType = (props) => {
  return (
    <Fragment>
      <h3>Flower Type</h3>
      <div className="form-group">
        <label htmlFor="regular">Regular</label>
        <input
          type="radio"
          name="flowerType"
          id="regular"
          value="regular"
          onChange={() => {}}
        />
        <label htmlFor="irregular">Irregular</label>
        <input
          type="radio"
          name="flowerType"
          id="irregular"
          value="irregular"
          onChange={() => {}}
        />
      </div>
    </Fragment>
  );
}