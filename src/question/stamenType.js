import { Fragment } from 'react';

export const StamenType = (props) => {
  return (
    <Fragment>
      <h3>Stamen Type</h3>
      <div>
        <input
          type="radio"
          name="stamenType"
          id="stamenSeparate"
          value="separate"
          onChange={() => {}}
        />
        <label htmlFor="stamenSeparate">Separate</label>
      </div>

      <div>
        <input
          type="radio"
          name="stamenType"
          id="stamenFusedToEachOther"
          value="fusedToEachOther"
          onChange={() => {}}
        />
        <label htmlFor="stamenFusedToEachOther">Fused to each other</label>
      </div>

      <div>
        <input
          type="radio"
          name="stamenType"
          id="stamenFusedToPetals"
          value="fusedToPetals"
          onChange={() => {}}
        />
        <label htmlFor="stamenFusedToPetals">Fused to petals</label>
      </div>

      <div>
        <input
          type="radio"
          name="stamenType"
          id="stamenFusedToPistil"
          value="fusedToPistil"
          onChange={() => {}}
        />
        <label htmlFor="stamenFusedToPistil">Fused to pistil</label>
      </div>
    </Fragment>
  );
}
