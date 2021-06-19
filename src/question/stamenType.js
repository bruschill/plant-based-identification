import { Fragment } from 'react';

export const StamenType = (props) => {
  return (
    <Fragment>
      <h3>Stamen Type</h3>
      <div className="form-group">
        <label htmlFor="separate">Separate</label>
        <input
          type="radio"
          name="stamenType"
          id="separate"
          value="separate"
          onChange={() => {}}
        />
        <label htmlFor="fusedToEachOther">Fused to each other</label>
        <input
          type="radio"
          name="stamenType"
          id="fusedToEachOther"
          value="fusedToEachOther"
          onChange={() => {}}
        />
        <label htmlFor="fusedToPetals">Fused to petals</label>
        <input
          type="radio"
          name="stamenType"
          id="fusedToPetals"
          value="fusedToPetals"
          onChange={() => {}}
        />
        <label htmlFor="fusedToPistil">Fused to pistil</label>
        <input
          type="radio"
          name="stamenType"
          id="fusedToPistil"
          value="fusedToPistil"
          onChange={() => {}}
        />
      </div>
    </Fragment>
  );
}
