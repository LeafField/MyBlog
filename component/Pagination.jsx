import React from "react";

const Pagination = ({ page }) => {
  return (
    <div>
      <a href={`/page/${page}`}>{page}</a>
    </div>
  );
};

export default Pagination;
