import React from "react";
import "./App.css";
import { Person } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Rashford"
        email="Rashford@gmail.com"
        age={19}
        isMarried={true}
        friends={["Jake", "Jessy", "Jane"]}
      />
    </div>
  );
}

export default App;
