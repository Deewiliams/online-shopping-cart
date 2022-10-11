import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Cart from "./Component/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
