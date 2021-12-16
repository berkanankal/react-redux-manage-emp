import React from "react";
import { deleteEmployee } from "../features/employeesSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Employee = ({ employee }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td width="110">
        <Link to={`/updateemployee/${employee.id}`} className="btn text-warning btn-act">
          <i className="material-icons" title="Edit">
            &#xE254;
          </i>
        </Link>
        <button
          className="btn text-danger btn-act"
          onClick={() => dispatch(deleteEmployee(employee.id))}
        >
          <i className="material-icons" title="Delete">
            &#xE872;
          </i>
        </button>
      </td>
    </tr>
  );
};

export default Employee;
