import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pokemons" />
    <Route path="/contato" />
  </Routes>
);
