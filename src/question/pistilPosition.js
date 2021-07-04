import { Fragment } from 'react';

export const PistilPosition = (props) => {
  return (
    <Fragment>
      <h3>Pistil Position</h3>
      <div className="form-group">
        <div>
          <input
            type="radio"
            name="pistilPosition"
            id="superior"
            value="superior"
            onChange={() => {}}
          />
          <label htmlFor="superior">Superior</label>
        </div>

        <div>
          <input
            type="radio"
            name="pistilPosition"
            id="inferior"
            value="inferior"
            onChange={() => {}}
          />
          <label htmlFor="inferior">Inferior</label>
        </div>

        <div>
          <input
            type="radio"
            name="pistilPosition"
            id="partWay"
            value="partWay"
            onChange={() => {}}
          />
          <label htmlFor="partWay">Part way</label>
        </div>
      </div>
    </Fragment>
  );
}
