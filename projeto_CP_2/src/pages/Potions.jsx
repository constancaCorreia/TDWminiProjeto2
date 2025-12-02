import { useState, useEffect } from "react";
import IntroHeadingPotionss from "../components/IntroHeadingPotions.jsx";
import CardPotion from "../components/CardPotion.jsx";
import ModalPotion from "../components/ModalPotion.jsx";

export default function Potions() {
  //Estado com as poções carregadas
  const [potions, setPotions] = useState([]);

  //Estado de loading (spinner)
  const [loading, setLoading] = useState(true);

  //Poção selecionada para o modal
  const [selectedPotion, setSelectedPotion] = useState(null);

  //Controla se mostro as cartas (depois de clicar no botão)
  const [mostrarCartas, setMostrarCartas] = useState(false);

  //Endpoint da PotterDB que fornece os dados sobre as poções
  const url = "https://api.potterdb.com/v1/potions";

  useEffect(() => {
    //Fetch das poções
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Filtrei para ter apenas as poções que têm imagem e limitei a 12 para uma melhor performance
        const validPotions = data.data
          .filter((potion) => potion.attributes.image !== null)
          .slice(0, 12);
        setPotions(validPotions);
        setLoading(false);
      })
      .catch((err) => console.error("Erro ao carregar poções:", err));
  }, []);

  //Abre o modal com detalhes da poção
  const handleAbrirDetalhes = (potion) => setSelectedPotion(potion);

  //Fecha o modal
  const handleFecharDetalhes = () => setSelectedPotion(null);

  //Mostra as cartas quando clicamos no botão
  const handleCarregarPotions = () => {
    setMostrarCartas(true);
  };

  //Enquanto os dados estão a carregar, mostra um ecrã de loading
  if (loading) {
    return (
      <div className="potions-bg min-vh-100 d-flex justify-content-center align-items-center text-white">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="potions-bg container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center text-center px-3 pb-5">
      {/* Antes de clicar mostra a introdução e o botão */}
      {!mostrarCartas && (
        <>
          <IntroHeadingPotionss />

          <button
            className="btn btn-light btn-lg mt-3"
            id="loadEstudantes"
            onClick={handleCarregarPotions}
          >
            See potions
          </button>
        </>
      )}

      {/* Depois de carregar mostram a grelha de cards e o modal condicional */}
      {mostrarCartas && (
        <div className="potions-bg container-fluid min-vh-100">
          {/* Renderização da Lista de Cards */}
          <div className="row g-4 mt-5 pt-5">
            {potions.map((potion) => (
              <CardPotion
                key={potion.id}
                potion={potion}
                onOpen={handleAbrirDetalhes}
              />
            ))}
          </div>

          {/* Se uma poção estiver selecionada vai mostrar o Mod  al passando dados e o handler */}
          {selectedPotion && (
            <ModalPotion
              potion={selectedPotion}
              onClose={handleFecharDetalhes}
            />
          )}
        </div>
      )}
    </div>
  );
}
