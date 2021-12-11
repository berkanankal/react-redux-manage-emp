import React from "react";
import Pagination from "./Pagination";

const EmployeeList = () => {
  return (
    <div class="table-responsive">
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-6">
              <h2>
                Manage <b>Employees</b>
              </h2>
            </div>
            <div class="col-sm-6">
              <a href="!#" class="btn btn-success">
                <i class="material-icons">&#xE147;</i>{" "}
                <span>Add New Employee</span>
              </a>
            </div>
          </div>
        </div>
        <table class="table table-striped table-hover">
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
            <tr>
              <td>Thomas Hardy</td>
              <td>thomashardy@mail.com</td>
              <td>89 Chiaroscuro Rd, Portland, USA</td>
              <td>(171) 555-2222</td>
              <td>
                <a href="!#" class="edit">
                  <i class="material-icons" data-toggle="tooltip" title="Edit">
                    &#xE254;
                  </i>
                </a>
                <a href="!#" class="delete">
                  <i
                    class="material-icons"
                    data-toggle="tooltip"
                    title="Delete"
                  >
                    &#xE872;
                  </i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
};

export default EmployeeList;
