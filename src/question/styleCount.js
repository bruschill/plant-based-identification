import { Fragment } from 'react';

export const StyleCount = (props) => {
  return (
    <Fragment>
      <h3>Style Count</h3>
      <div className="form-group">
        <label htmlFor="styleCount">How many?</label>
        <input
          type="text"
          id="styleCount"
          name="styleCount"
          onChange={() => {}}
        />
        <label htmlFor="stigmaLobeCount">If 1, how many stigma lobes?</label>
        <input
          type="text"
          id="stigmaLobeCount"
          name="stigmaLobeCount"
          onChange={() => {}}
        />

      </div>
    </Fragment>
  );
}