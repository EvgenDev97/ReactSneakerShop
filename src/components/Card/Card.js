import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="favorite">
        <img src="img/heart-unliked.svg" alt="unliked" />
      </div>
      <img src={props.imageUrl} width={133} height={112} alt="" />
      <h5>{props.title}</h5>
      <div className="j-flex">
        <div>
          <span>Price: </span>
          <div>
            <b>{props.price}</b>
          </div>
        </div>
        <button className="button" onClick={props.onClick}>
          <img src="/img/plus.svg" alt="plus" width={32} height={32} />
        </button>
      </div>
    </div>
  );
}
export default Card;
