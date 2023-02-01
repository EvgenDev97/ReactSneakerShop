import React from "react";
function App() {
  return (
    <div className="wrapper clear">
      <header className="j-flex ">
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logoSneakers.png" alt="" />
          <div className="headerInfo c-flex">
            <h3>Sneakers</h3>
            <p>Shop the best sneakers</p>
          </div>
        </div>
        <div>
          <ul className="headerRight j-flex">
            <li>
              <img width={18} height={18} src="img/card.svg" />
              <span>1205</span>
            </li>
            <li>
              <img width={18} height={18} src="img/user.svg" />
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div className="content">
          <h1>All sneakers</h1>
        </div>
        <div className="sneakers ">
          <div className="card">
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
          <div className="card">
            <img src="/img/sneakers/jpg2.jpg" width={133} height={112} alt="" />
            <h5>
              Men's sneaker <br /> Nike Air Max 270
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
          <div className="card">
            <img src="/img/sneakers/jpg3.jpg" width={133} height={112} alt="" />
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
          <div className="card">
            <img src="/img/sneakers/jpg4.jpg" width={133} height={112} alt="" />
            <h5>
              Men's sneaker Puma X <br /> Aka Boku Future Rider
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
        </div>
      </main>
    </div>
  );
}

export default App;
