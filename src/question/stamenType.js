import { Fragment } from 'react';

export const StamenType = (props) => {
  return (
    <Fragment>
      <h3>Stamen Type</h3>
      <div className="form-group">
        <label htmlFor="separate">Separate</label>
        <input
          type="radio"
          id="separate"
          name="stamenType"
          onChange={() => {}}
        />
        <label htmlFor="fusedToEachOther">Fused to each other</label>
        <input
          type="radio"
          id="fusedToEachOther"
          name="stamenType"
          onChange={() => {}}
        />
        <label htmlFor="fusedToPetals">Fused to petals</label>
        <input
          type="radio"
          id="fusedToPetals"
          name="stamenType"
          onChange={() => {}}
        />
        <label htmlFor="fusedToPistil">Fused to pistil</label>
        <input
          type="radio"
          id="fusedToPistil"
          name="stamenType"
          onChange={() => {}}
        />
      </div>
    </Fragment>
  );
}
