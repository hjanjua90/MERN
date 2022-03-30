import React from "react";
import PersonCard from "./components/PersonCard";
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={"Doe"}
        firstName={"Jane"}
        age={45}
        hair={"black"}
      />
      <PersonCard
        lastName={"Smith"}
        firstName={"John"}
        age={88}
        hair={"none"}
      />
    </div>
  );
}

export default App;
