import React from 'react';
import { FlowerProfiler} from "./flowerProfiler";

function App() {
  return (
    <div className="container">
      <h1 className="mt-6 text-6xl font-bold">Plant-based Identification</h1>

      <div>
        <FlowerProfiler />
      </div>
    </div>
  );
}

export default App;
