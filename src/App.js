import React from "react";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Content from "./components/MainContent/Content";

const arr = [
  {
    name: ["Men's sneaker", <br />, "Nike Blazer Mid Suede"],
    price: `184.3 "$"`,
    imageUrl: "/img/sneakers/jpg1.jpg",
  },
  {
    name: ["Men's sneaker", <br />, "Nike Air Max 270"],
    price: `192.3 "$"`,
    imageUrl: "/img/sneakers/jpg2.jpg",
  },
  {
    name: ["Men's sneaker", <br />, "Nike Blazer Mid Suede"],
    price: `132.4 "$"`,
    imageUrl: "/img/sneakers/jpg3.jpg",
  },
  {
    name: ["Men`s sneaker Puma X ", <br />, " Aka Boku Future Rider"],
    price: `135.4 "$"`,
    imageUrl: "/img/sneakers/jpg4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <main>
        <Content />
        <div className="sneakers ">
          {arr.map((obj) => (
            <Card
              title={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClick={() => alert("item added to cart")}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
