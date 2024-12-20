import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Card from "./pages/Card";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/h">Home</Link>
          <Link to="/c">Card</Link>
        </nav>
        <Routes>
          <Route path="/h" element={<Home />} />
          <Route path="/c" element={<Card />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
