import "./Pagination.css";

const Pagination = ({ totalUsers, usersPerPage, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul className="page-number">
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
      </ul>
    </nav>
  );
};

export default Pagination;
