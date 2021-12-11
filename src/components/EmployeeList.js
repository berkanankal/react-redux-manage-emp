import React from "react";
import { useSelector } from "react-redux";
import Employee from "./Employee";

import Pagination from "./Pagination";

const EmployeeList = () => {
  const employees = useSelector((state) => state.employees);

  return (
    <div className="table-responsive">
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-6">
              <h2>
                Manage <b>Employees</b>
              </h2>
            </div>
            <div className="col-sm-6">
              <a href="!#" className="btn btn-success">
                <i className="material-icons">&#xE147;</i>{" "}
                <span>Add New Employee</span>
              </a>
            </div>
          </div>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <Employee employee={employee} key={employee.id} />
            ))}
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
};

export default EmployeeList;
