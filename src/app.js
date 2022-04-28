import React from 'react';
import { FlowerProfiler} from "./flowerProfiler";

function App() {
  return (
    <div className="container max-w-md mx-auto">
      <h1 className="mt-6 text-4xl font-bold">Plant-based Identification</h1>
      <div>
        <FlowerProfiler />
      </div>
    </div>
  );
}

export default App;
