import { Fragment } from 'react';

export const PistilPosition = (props) => {
  return (
    <Fragment>
      <h3>Pistil Position</h3>
      <div className="form-group">
        <label htmlFor="superior">Superior</label>
        <input
          type="radio"
          id="superior"
          name="pistilPosition"
          onChange={() => {}}
        />
        <label htmlFor="inferior">Inferior</label>
        <input
          type="radio"
          id="inferior"
          name="pistilPosition"
          onChange={() => {}}
        />
        <label htmlFor="partWay">Part way</label>
        <input
          type="radio"
          id="partWay"
          name="pistilPosition"
          onChange={() => {}}
        />
      </div>
    </Fragment>
  );
}
