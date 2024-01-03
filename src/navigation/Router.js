import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../View/index";
import Parkinson from "../View/parkinson";


function Router() {
  return (
    
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/parkinson" element={<Parkinson />} />
      </Routes>
    // </BrowserRouter>
  );
}

export default Router

