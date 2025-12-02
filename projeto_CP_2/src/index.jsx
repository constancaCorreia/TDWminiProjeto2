import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";

//Seleciona o elemento onde a app vai ser renderizada
const entryPoint = document.getElementById("root");

ReactDOM.createRoot(entryPoint).render(
  //BrowserRouter permite que haja navegação entre páginas sem recarregar o site
  <BrowserRouter>
    <App />
  </BrowserRouter>
);