import { Fragment } from 'react';
import { FlowerProfiler} from "./flowerProfiler";

import './app.css';

function App() {
  return (
    <Fragment>
      <h1>Plant-based Identification</h1>

      <div id='question-container' className='question-container'>
        <FlowerProfiler />
      </div>
    </Fragment>
  );
}

export default App;