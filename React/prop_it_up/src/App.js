import './App.css';
import React from 'react';
import PersonCard from './components/PersonCard';

function App() {


  return (
    <div className="App">
      <PersonCard
      lastName={"Doe"}
      firstName={"Jane"}
      age={45}
      hairColor={"Black"}
      currentAge={45}
      />
      <PersonCard
      lastName={"Smith"}
      firstName={"John"}
      age={88}
      hairColor={"Brown"}
      currentAge={88}
      />
      <PersonCard
      lastName={"Fillmore"}
      firstName={"Millard"}
      age={50}
      hairColor={"Brown"}
      currentAge={50}
      />
      <PersonCard
      lastName={"Smith"}
      firstName={"Maria"}
      age={62}
      hairColor={"Brown"}
      currentAge={62}
      />

    </div>
  );
}

export default App;
