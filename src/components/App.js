import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";

import CourierResult from "../routes/CourierResult/CourierResult";
import PackageResult from "../routes/PackageResult/PackageResult";
import Home from "../routes/Home/Home";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/courier" element={<CourierResult />} />
          <Route path="/package" element={<PackageResult />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
