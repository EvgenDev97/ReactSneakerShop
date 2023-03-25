import React from "react";

function Card({ imageUrl, title, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    onPlus({ imageUrl, title, price });
    setIsAdded(!isAdded);
  };

  // React.useEffect(() => {}, [isAdded]);

  return (
    <div className="card">
      <div className="favorite">
        <img src="img/heart-unliked.svg" alt="unliked" onClick={onFavorite} />
      </div>
      <img src={imageUrl} width={133} height={112} alt="" />
      <h5>{title}</h5>
      <div className="j-flex">
        <div>
          <span>Price: </span>
          <div>
            <b>{price}</b>
          </div>
        </div>
        <button>
          <img
            className="plus"
            onClick={onClickPlus}
            src={isAdded ? "/img/btn-checked.svg" : "img/btn-plus.svg"}
            alt="plus"
            width={11}
            height={11}
          />
        </button>
      </div>
    </div>
  );
}
export default Card;
