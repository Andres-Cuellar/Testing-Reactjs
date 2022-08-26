import "./App.css";
import { useState } from "react";
import Edad from "./Edad";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h2>Counter</h2>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter((valor) => valor + 1);
        }}
      >
        +
      </button>

      <Edad />
    </div>
  );
}

export default App;
