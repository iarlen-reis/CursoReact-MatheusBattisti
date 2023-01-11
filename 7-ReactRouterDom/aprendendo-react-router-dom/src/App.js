import "./App.css";

// 1 - configurando react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import Error404 from "./pages/Error404";
import Search from "./pages/Search";

// components
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Nested Routes */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* Rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* Rota de pesquisa */}
          <Route path="/search" element={<Search />} />
          {/* Redirect */}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/* Rota 404 */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
