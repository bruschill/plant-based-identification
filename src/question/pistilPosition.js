import { Fragment } from 'react';

export const PistilPosition = (props) => {
  return (
    <Fragment>
      <h3>Pistil Position</h3>
      <div className="form-group">
        <label htmlFor="superior">Superior</label>
        <input
          type="radio"
          name="pistilPosition"
          id="superior"
          value="superior"
          onChange={() => {}}
        />
        <label htmlFor="inferior">Inferior</label>
        <input
          type="radio"
          name="pistilPosition"
          id="inferior"
          value="inferior"
          onChange={() => {}}
        />
        <label htmlFor="partWay">Part way</label>
        <input
          type="radio"
          name="pistilPosition"
          id="partWay"
          value="partWay"
          onChange={() => {}}
        />
      </div>
    </Fragment>
  );
}
