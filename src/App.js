import React from "react";
import Navbar from "./components/navbar/Navbar";
import Router from "./navigation/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
