
// Modulo5_Desafio3_FelipeSalinasMolina 

import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./view/Home";
import CartContent from "./view/CartContent";
import CardPizzaDetail from "./components/CardPizzaDetail";
import NotFound from "./view/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoppingCart" element={<CartContent />} />
        <Route path="/pizza/:id" element={<CardPizzaDetail />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
