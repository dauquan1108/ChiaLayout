import React from "react";
import Home from "./component/home";

function App() {
  return (
    <React.Profiler>
      <Home />
    </React.Profiler>
  );
}

export default App;
