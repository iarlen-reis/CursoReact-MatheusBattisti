// Hooks
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// CSS
import "./App.css";

// Pages
import Home from "./Pages/Home/Home";
import UseState from "./Pages/UseState/UseState";
import UseReducer from "./Pages/UseReducer/UseReducer";
import UseEffect from "./Pages/UseEffect/UseEffect";
// Components
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/use-state" element={<UseState />} />
          <Route path="/use-reducer" element={<UseReducer />} />
          <Route path="/use-effect" element={<UseEffect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
