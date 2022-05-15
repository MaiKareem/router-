import React from "react";

import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";

import Details from "./pages/Details";
import Home from "./pages/Home";
import Rate from "./pages/MovieRate";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id/MovieRate" element={<Rate />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/details/:id/MovieRate/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
