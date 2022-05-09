import React, { Component } from "react";
import _ from "lodash";

const Page = (props) => {
  const { itemCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = itemCount / pageSize;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav
      aria-label="Page navigation example"
      style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
    >
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            style={{ cursor: "pointer" }}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Page;
