import IntroHeading from "../components/IntroHeading";
import Cards from "../components/Cards";
import { useState, useEffect } from "react";

function Home() {
  //State que guarda os dados das cartas
  const [cardsData, setCardsData] = useState([]);

  //State que controla se as cartas já estão visíveis
  const [mostrarCartas, setMostrarCartas] = useState(false);

  //URL da API dos personagens
  const url = "https://potterhead-api.vercel.app/api/characters";

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        //Vai limitar a lista a 24 personagens para evitar carregar demasiados dados de uma só vez
        //Depois uso o map() para transformar cada objeto da API num "card" mais simples no formato que a UI está à espera
        const newCards = data.slice(0, 24).map((char, index) => ({
          id: index,
          title: char.name,
          text: char.houseHogwarts || char.house,
          img: char.image || "No image",
        }));
        setCardsData(newCards);
      })
      .catch(error => {
        console.error("Ocorreu um erro ao buscar os dados:", error);
      });
  }, []);
 
  //Mostra as cartas quando se clica no botão "Meet the characters"
  const handleCarregarCharacters = () => {
    setMostrarCartas(true);
  };

  //Função para remover uma card por id
  const removerCards = (id) => {
    setCardsData(cardsAtuais =>
      cardsAtuais.filter(card => card.id !== id)
    );
  };

  //Enquanto os dados estão a carregar vai mostrar "Loading"
  if (cardsData.length === 0) {
    return <p>Loading...</p>
  }

  return (
     <div className="imgFundo">
      <main className="mt-5 pt-5 text-center">
        <div
          className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center text-center px-3 pb-5"
        >
        {/* Se mostrarCards for false vai mostrar o texto e botão antes de carregar as cartas */}
        {!mostrarCartas && (
          <> 
            <IntroHeading />

            <button
              className="btn btn-outline-light btn-lg mt-3"
              id="loadEstudantes"
              onClick={handleCarregarCharacters} 
            >
              Meet the characters!
            </button>
          </>
        )}

        {/* Depois de carregar, renderiza os Cards */}
        {mostrarCartas && (
          <div className="container mt-4">
            {/* Passa items e onRemove para o componente que vai renderizar a lista */}
            <Cards items={cardsData} onRemove={removerCards}/>
          </div>
        )}
        </div>
      </main>
    </div>
  );
}

export default Home;
