// src/App.js
import React from "react";
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import ProductList from "./components/ProductList.jsx";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navigation />
      <ProductList />
    </div>
  );
}

export default App;