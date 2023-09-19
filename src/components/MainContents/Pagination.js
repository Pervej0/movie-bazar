import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ handlePagination }) => {
  return (
    <div className="my-10">
      <i className="bi bi-star-fill"></i>
      <div className="flex">
        {/* <!-- Previous Button --> */}
        <Link
          to="#"
          className="flex items-center bg-slate-700 text-white justify-center px-3 h-8 text-sm font-medium rounded"
          onClick={handlePagination}
        >
          Previous
        </Link>

        {/* <!-- Next Button --> */}
        <Link
          to="#"
          className="flex items-center bg-slate-700 text-white justify-center px-3 h-8 ml-3 text-sm font-medium rounded"
          onClick={handlePagination}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
