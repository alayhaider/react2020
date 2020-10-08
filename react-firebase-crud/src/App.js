import React from "react";
import firebase from "./Firebase";
import TimesList from "./components/TimesList";
import AddTimeForm from "./components/AddTimeForm";

function App() {
  return (
    <div className="App">
      <h1>Just Clock It</h1>
      <TimesList />
      <AddTimeForm />
    </div>
  );
}

export default App;
