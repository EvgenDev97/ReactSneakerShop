import React from "react";
function Header(props) {
  return (
    <header className="j-flex ">
      <div className="headerLeft">
        <img width={40} height={40} src="/img/logoSneakers.png" alt="logo" />
        <div className="headerInfo c-flex">
          <h3>Sneakers</h3>
          <p>Shop the best sneakers</p>
        </div>
      </div>
      <div>
        <ul className="headerRight j-flex">
          <li>
            <button
              onClick={() => {
                props.setShowDrawer((showDrawer) => !showDrawer);
              }}
            >
              {" "}
            </button>
          </li>
          <li>
            <span>1205</span>
          </li>
          <li>
            <img width={18} height={18} src="img/user.svg" alt="" />
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
