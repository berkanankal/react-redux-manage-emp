import React from "react";
import { deleteMovie } from "../features/employeesSlice";
import { useDispatch } from "react-redux";

const Employee = ({ employee }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td width="110">
        <button className="btn text-warning btn-act">
          <i className="material-icons" title="Edit">
            &#xE254;
          </i>
        </button>
        <button
          className="btn text-danger btn-act"
          onClick={() => dispatch(deleteMovie(employee.id))}
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
