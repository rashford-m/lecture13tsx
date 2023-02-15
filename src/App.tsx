import React from "react";
import "./App.css";
import { Person, Country } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Rashford"
        email="Rashford@gmail.com"
        age={19}
        isMarried={true}
        friends={["Jake", "Jessy", "Jane"]}
        country={Country.Canada}
      />
    </div>
  );
}

export default App;
