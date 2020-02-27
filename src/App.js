import React from "react";
import "./App.css";

import CardHandler from "./components/Card";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Splash from "./components/Splash";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Splash />
        <Carousel />
        <CardHandler />
      </>
    );
  }
}
export default App;
