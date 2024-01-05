import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../View/index";
import Parkinson from "../View/parkinson";
import DataExplorer from "../View/crypstoxplorer";
import PulmoSync from "../View/pulmosync";


function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/parkinson" element={<Parkinson />} />
      <Route path="/dataexplorer" element={<DataExplorer />} />
      <Route path="/pulmosync" element={<PulmoSync />} />
    </Routes>
    // </BrowserRouter>
  );
}

export default Router

