import React from "react";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Content from "./components/MainContent/Content";
function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <main>
        <Content />
        <div className="sneakers ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
}

export default App;
