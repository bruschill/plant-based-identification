import { Fragment } from 'react';

export const PetalColor = (props) => {
  return (
    <Fragment>
      <h3>Petal Color</h3>
      <div>
        <label htmlFor="petalColor">What color?</label>
        <input
          type="text"
          id="petalColor"
          name="petalColor"
          onChange={() => {}}
        />
      </div>
    </Fragment>
  );
}
