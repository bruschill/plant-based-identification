import { Fragment } from 'react';

export const StamenArrangement = (props) => {
  return (
    <Fragment>
      <h3>Stamen Arrangement</h3>
      <div className="form-group">
        <label htmlFor="alternateFromPetals">Alternate from petals</label>
        <input
          type="radio"
          name="stamenArrangement"
          id="alternateFromPetals"
          value="alternateFromPetals"
          onChange={() => {}}
        />
        <label htmlFor="oppositeFromPetals">Opposite from petals</label>
        <input
          type="radio"
          name="stamenArrangement"
          id="oppositeFromPetals"
          value="oppositeFromPetals"
          onChange={() => {}}
        />
        <label htmlFor="doesntApply">Doesn't apply</label>
        <input
          type="radio"
          name="stamenArrangement"
          id="doesntApply"
          value="doesntApply"
          onChange={() => {}}
        />
      </div>
    </Fragment>
  );
}
