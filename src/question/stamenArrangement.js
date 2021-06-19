import { Fragment } from 'react';

export const StamenArrangement = (props) => {
  return (
    <Fragment>
      <h3>Stamen Arrangement</h3>
      <div className="form-group">
        <label htmlFor="alternateFromPetals">Alternate from petals</label>
        <input
          type="radio"
          id="alternateFromPetals"
          name="stamenArrangement"
          onChange={() => {}}
        />
        <label htmlFor="oppositeFromPetals">Opposite from petals</label>
        <input
          type="radio"
          id="oppositeFromPetals"
          name="stamenArrangement"
          onChange={() => {}}
        />
        <label htmlFor="doesntApply">Doesn't apply</label>
        <input
          type="radio"
          id="doesntApply"
          name="stamenArrangement"
          onChange={() => {}}
        />
      </div>
    </Fragment>
  );
}
