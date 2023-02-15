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
import UseContext from "./Pages/UseContext/UseContext";
import UseRef from "./Pages/UseRef/UseRef";

// Components
import NavBar from "./components/NavBar/NavBar";
import { HookUseContext } from "./hooks/HookUseContext";
function App() {
  return (
    <div className="App">
      <HookUseContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/use-state" element={<UseState />} />
            <Route path="/use-reducer" element={<UseReducer />} />
            <Route path="/use-effect" element={<UseEffect />} />
            <Route path="/use-context" element={<UseContext />} />
            <Route path="/use-ref" element={<UseRef />} />
          </Routes>
        </BrowserRouter>
      </HookUseContext>
    </div>
  );
}

export default App;
