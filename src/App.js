import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  return (
    <Router>
      <div className="container-xl">
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/addemployee" element={<AddEmployee />} />
          <Route path="/updateemployee/:id" element={<UpdateEmployee />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
