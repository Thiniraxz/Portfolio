import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../View/index";
import Parkinson from "../View/parkinson";
import DataExplorer from "../View/crypstoxplorer";


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

