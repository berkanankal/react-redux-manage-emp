import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";

const App = () => {
  return (
    <Router>
      <div className="container-xl">
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/addemployee" element={<AddEmployee />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
