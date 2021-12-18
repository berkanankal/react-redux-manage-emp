import React from "react";

const Pagination = ({
  totalEmployees,
  employeesPerPage,
  currentPage,
  paginate,
  currentEmployees,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEmployees / employeesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="clearfix">
      <div className="hint-text">
        Showing <b>{currentEmployees.length}</b> out of <b>{totalEmployees}</b>{" "}
        entries
      </div>
      <ul className="pagination">
        <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
          <button
            className="page-link"
            onClick={() => paginate((prev) => (prev === 1 ? prev : prev - 1))}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((p,i) => (
          <li key={i} className={currentPage === p ? "page-item active" : "page-item"}>
            <button className="page-link" onClick={() => paginate(p)}>
              {p}
            </button>
          </li>
        ))}

        <li
          className={
            currentPage >= pageNumbers.length
              ? "page-item disabled"
              : "page-item"
          }
        >
          <button
            className="page-link"
            onClick={() =>
              paginate((prev) =>
                prev === pageNumbers.length ? prev : prev + 1
              )
            }
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
