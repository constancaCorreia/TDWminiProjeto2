import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Potions from "./pages/Potions";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      {/* A NavBar fica fora das Routes para aparecer em todas as páginas */}
      <NavBar /> 
      
      {/* Zona onde as páginas vão mudar consoante a rota */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/potions" element={<Potions />} />
      </Routes>
    </>
  );
}

export default App;