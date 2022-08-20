import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/styles/index.css";
import Cocktail from "./components/Cocktail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktail/:cocktailId" element={<Cocktail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
