import { Fragment } from 'react';

export const PetalType = (props) => {
  return (
    <Fragment>
      <h3>Petal Type</h3>
      <div>
        <div>
          <input
            type="radio"
            name="petalType"
            id="petalSeparate"
            value="separate"
            onChange={() => {}}
          />
          <label htmlFor="petalSeparate">Separate</label>
        </div>

        <div>
          <input
            type="radio"
            name="petalType"
            id="petalUnited"
            value="united"
            onChange={() => {}}
          />
          <label htmlFor="petalUnited">United</label>
        </div>
      </div>
    </Fragment>
  );
}
