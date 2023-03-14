import React from "react";
function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2>
          <img src="img/btn-remove.svg" className="removeBtn" alt="Remove" />
        </h2>
        <div className="itemList">
          <div className="cartItem ">
            <img
              src="img/sneakers/jpg1.jpg"
              width={70}
              height={70}
              alt="Sneakers"
            />
            <div>
              <p>
                Men's sneaker <br /> Nike Blazer Mid Suede
              </p>
              <b>184.3$</b>
            </div>
            <img src="img/btn-remove.svg" className="removeBtn" alt="Remove" />
          </div>
          <div className="cartItem ">
            <img
              src="img/sneakers/jpg2.jpg"
              width={70}
              height={70}
              alt="Sneakers"
            />
            <div>
              <p>
                Men's sneaker <br /> Nike Blazer Mid Suede
              </p>
              <b>184.3$</b>
            </div>
            <img src="img/btn-remove.svg" className="removeBtn" alt="Remove" />
          </div>
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
