import { Fragment } from 'react';

export const FlowerType = (props) => {
  return (
    <Fragment>
      <h3>Flower Type</h3>
      <div>
        <input
          type="radio"
          name="flowerType"
          id="regular"
          value="regular"
          onChange={() => {}}
        />
        <label htmlFor="regular">Regular</label>
      </div>

      <div>
        <input
          type="radio"
          name="flowerType"
          id="irregular"
          value="irregular"
          onChange={() => {}}
        />
        <label htmlFor="irregular">Irregular</label>
      </div>
    </Fragment>
  );
}