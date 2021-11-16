import React from "react";
import Home from "./component/home/Home";

function App() {
  return (
    <React.Profiler>
      <Home />
    </React.Profiler>
  );
}

export default App;
