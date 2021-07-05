import { Dispatch } from "react";
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

  return (
    <nav className="pagination">
      <ul className="page-number">
        <li>
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "DELETE_USERS" })}
          >
            Delete Selected
          </button>
        </li>
        <li className="page-number-list">
          <a
            href="#"
            className={
              currentPage === 1 ? "next-link btn-disable" : "next-link"
            }
            onClick={() => paginate(1)}
          >
            {"<<"}
          </a>
        </li>
        <li className="page-number-list">
          <a
            href="#"
            className={
              currentPage === 1 ? "next-link btn-disable" : "next-link"
            }
            onClick={() => paginate(currentPage - 1)}
          >
            {"<"}
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              currentPage === number ? "page-number-active" : "page-number-list"
            }
          >
            <a
              href="#"
              className={currentPage === number ? "link" : "next-link"}
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
        <li className="page-number-list">
          <a
            href="#"
            className={
              currentPage === pageNumbers.length
                ? "next-link btn-disable"
                : "next-link"
            }
            onClick={() => paginate(currentPage + 1)}
          >
            {">"}
          </a>
        </li>
        <li className="page-number-list">
          <a
            href="#"
            className={
              currentPage === pageNumbers.length
                ? "next-link btn-disable"
                : "next-link"
            }
            onClick={() => paginate(pageNumbers.length)}
          >
            {">>"}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
