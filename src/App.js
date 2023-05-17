import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className=" max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/product/:id" element={<PropertyDetails />} />{" "}
      </Routes>{" "}
      <Footer />
    </div>
  );
};

export default App;
