import { Dispatch, useEffect } from "react";
import { Action } from "../../reducers/userReducer.types";

import "./Pagination.css";

export type PaginationType = {
  totalUsers: number;
  usersPerPage: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
  dispatch: Dispatch<Action>;
};

const Pagination = ({
  totalUsers,
  usersPerPage,
  currentPage,
  paginate,
  dispatch,
}: PaginationType) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    if (pageNumbers.length > 0 && currentPage > pageNumbers.length) {
      paginate(pageNumbers.length);
    }
  }, [pageNumbers]);

  const classNameForGoPreviousPageBtn = `page-number-list ${
    currentPage === 1 ? "btn-disable" : ""
  }`;

  const classNameForGoNextPageBtn = `page-number-list ${
    currentPage === pageNumbers.length ? "btn-disable" : ""
  }`;

  return (
    <nav className="pagination">
      <button
        className="btn btn-primary m-0 br-8"
        onClick={() => dispatch({ type: "DELETE_USERS" })}
      >
        Delete Selected
      </button>
      <div className="w-80">
        <ul className="page-number">
          <li>
            <a
              href="#"
              className={classNameForGoPreviousPageBtn}
              onClick={() => paginate(1)}
            >
              {"<<"}
            </a>
          </li>
          <li>
            <a
              href="#"
              className={classNameForGoPreviousPageBtn}
              onClick={() => paginate(currentPage - 1)}
            >
              {"<"}
            </a>
          </li>

          {pageNumbers.map((number) => (
            <li key={number}>
              <a
                href="#"
                className={`page-number-list ${
                  currentPage === number ? "active" : ""
                }`}
                onClick={() => paginate(number)}
              >
                {number}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#"
              className={classNameForGoNextPageBtn}
              onClick={() => paginate(currentPage + 1)}
            >
              {">"}
            </a>
          </li>
          <li>
            <a
              href="#"
              className={classNameForGoNextPageBtn}
              onClick={() => paginate(pageNumbers.length)}
            >
              {">>"}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Pagination;
