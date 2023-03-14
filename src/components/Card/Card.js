import React from "react";

function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="img/heart-unliked.svg" alt="unliked" />
      </div>
      <img src="/img/sneakers/jpg1.jpg" width={133} height={112} alt="" />
      <h5>
        Men's sneaker <br /> Nike Blazer Mid Suede
      </h5>
      <div className="j-flex">
        <div>
          <span>Price: </span>
          <div>
            <b>184.3$</b>
          </div>
        </div>
        <button className="button">
          <img src="/img/plus.svg" alt="plus" width={32} height={32} />
        </button>
      </div>
    </div>
  );
}
export default Card;
