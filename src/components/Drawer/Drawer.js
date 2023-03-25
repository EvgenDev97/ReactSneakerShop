import React from "react";
function Drawer({ onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          <img
            onClick={onClose}
            src="img/btn-remove.svg"
            className="removeBtn"
            alt="Remove"
          />
        </h2>
        <div className="itemList">
          {items.map((obj) => (
            <div className="cartItem ">
              <div
                className="cartItemImg"
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
              ></div>
              <div>
                <p>{obj.title}</p>
                <b>{obj.price} $</b>
              </div>
              <img
                src="img/btn-remove.svg"
                className="removeBtn"
                alt="Remove"
              />
            </div>
          ))}
        </div>

        <div className="items">
          <ul className="cartTotalBlock">
            <li>
              <span>Total:</span>
              <div></div>
              <b>368.6$</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>18.43$</b>
            </li>
            <div>
              <button className="greenButton">
                Confirm the order <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Drawer;
