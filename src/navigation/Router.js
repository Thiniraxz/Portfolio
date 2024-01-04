import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../View/index";
import Parkinson from "../View/Parkinson";
import DataExplorer from "../View/DataExplorer";


function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/parkinson" element={<Parkinson />} />
      <Route path="/dataexplorer" element={<DataExplorer />} />
    </Routes>
    // </BrowserRouter>
  );
}

export default Router

