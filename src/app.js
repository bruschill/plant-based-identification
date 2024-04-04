import React from 'react';
import { FlowerProfiler } from "./flowerProfiler";
import { AppProvider } from "./state";

function App() {
  return (
    <div className="container max-w-md mx-auto">
      <h1 className="mt-6 text-4xl font-bold">Plant-based Identification</h1>
      <div>
        <AppProvider>
          <FlowerProfiler />
        </AppProvider>
      </div>
    </div>
  );
}

export default App;
