import { Fragment } from 'react';

export const StamenArrangement = (props) => {
  return (
    <Fragment>
      <h3>Stamen Arrangement</h3>
      <div>
        <div>
          <input
            type="radio"
            name="stamenArrangement"
            id="alternateFromPetals"
            value="alternateFromPetals"
            onChange={() => {}}
          />
          <label htmlFor="alternateFromPetals">Alternate from petals</label>
        </div>

        <div>
          <input
            type="radio"
            name="stamenArrangement"
            id="oppositeFromPetals"
            value="oppositeFromPetals"
            onChange={() => {}}
          />
          <label htmlFor="oppositeFromPetals">Opposite from petals</label>
        </div>

        <div>
          <input
            type="radio"
            name="stamenArrangement"
            id="doesntApply"
            value="doesntApply"
            onChange={() => {}}
          />
          <label htmlFor="doesntApply">Doesn't apply</label>
        </div>
      </div>
    </Fragment>
  );
}
