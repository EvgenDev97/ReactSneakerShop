import React from "react";
function Content() {
  return (
    <div className="content">
      <div className="search j-flex">
        <h1>All sneakers</h1>
        <div className="search-block">
          <img src="img/magnifier.svg" alt="Search" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
}
export default Content;
