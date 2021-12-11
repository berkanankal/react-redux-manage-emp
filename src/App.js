import React from "react";
import "./App.css";
import EmployeeList from "./components/EmployeeList";

const App = () => {
  return (
    <div>
      <div className="container-xl">
        <EmployeeList />
      </div>
    </div>
  );
};

export default App;
