import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { AppRoutes } from "./service/AppRoutes";

export const App = () => (
  <BrowserRouter>
    <Header />
    <AppRoutes />
  </BrowserRouter>
);

export default App;
