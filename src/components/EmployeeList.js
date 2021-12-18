import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Employee from "./Employee";
import Pagination from "./Pagination";

const EmployeeList = () => {
  const employees = useSelector((state) => state.employees);

  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(5);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

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
              <Link to="/addemployee" className="btn btn-success">
                <i className="material-icons">&#xE147;</i>{" "}
                <span>Add New Employee</span>
              </Link>
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
            {currentEmployees.map((employee) => (
              <Employee employee={employee} key={employee.id} />
            ))}
          </tbody>
        </table>
        <Pagination
          totalEmployees={employees.length}
          employeesPerPage={employeesPerPage}
          currentPage={currentPage}
          paginate={paginate}
          currentEmployees={currentEmployees}
        />
      </div>
    </div>
  );
};

export default EmployeeList;
