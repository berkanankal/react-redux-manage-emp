import React from "react";

const Pagination = () => {
  return (
    <div className="clearfix">
      <div className="hint-text">
        Showing <b>5</b> out of <b>25</b> entries
      </div>
      <ul className="pagination">
        <li className="page-item disabled">
          <a href="!#">Previous</a>
        </li>
        <li className="page-item">
          <a href="!#" className="page-link">
            1
          </a>
        </li>
        <li className="page-item">
          <a href="!#" className="page-link">
            2
          </a>
        </li>
        <li className="page-item active">
          <a href="!#" className="page-link">
            3
          </a>
        </li>
        <li className="page-item">
          <a href="!#" className="page-link">
            4
          </a>
        </li>
        <li className="page-item">
          <a href="!#" className="page-link">
            5
          </a>
        </li>
        <li className="page-item">
          <a href="!#" className="page-link">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
