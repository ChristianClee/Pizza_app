import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRouter from "./navigation/AppRouter";
import PizzaElement from "./components/main/pizza_page/PizzaElement";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <AppRouter/>
      <Footer />
    </div>
  );
}

export default App;
