import React from "react";
import "./App.css";
import Container from "./components/container";
import Resizer from "./components/resizer";
function App() {
  return (
    <div
      className="App bg-[#f4f4f4] px-4 h-screen flex items-center"
    >
      <Container />
      {/* <Resizer/> */}
    </div>
  );
}

export default App;
